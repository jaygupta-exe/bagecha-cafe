"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Preloader from "./Preloader";
import TextOverlay from "./TextOverlay";

const FRAME_COUNT = 120;

function getFramePath(index: number): string {
  const num = String(index + 1).padStart(3, "0");
  return `/frames/ezgif-frame-${num}.jpg`;
}

export default function CoffeeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Track frame index changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    currentFrameRef.current = Math.round(latest);
  });

  // Draw frame on canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIdx];

    if (!canvas || !ctx || !img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Only resize canvas if needed
    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Use object-cover logic: fill entire viewport, crop overflow
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayWidth / displayHeight;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (imgAspect > canvasAspect) {
      // Image is wider → fit to height, crop sides
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgAspect;
      offsetX = (displayWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller → fit to width, crop top/bottom
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgAspect;
      offsetX = 0;
      offsetY = (displayHeight - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // RAF render loop
  useEffect(() => {
    if (!isLoaded) return;

    let lastFrame = -1;

    const render = () => {
      const frame = currentFrameRef.current;
      if (frame !== lastFrame) {
        drawFrame(frame);
        lastFrame = frame;
      }
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

        if (loadedCount === FRAME_COUNT) {
          // Small delay for smooth preloader transition
          setTimeout(() => {
            setIsLoaded(true);
            // Give the preloader time to fade out before showing content
            setTimeout(() => {
              setShowContent(true);
              drawFrame(0);
            }, 800);
          }, 300);
        }
      };

      img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
      };

      images[i] = img;
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, drawFrame]);

  return (
    <>
      <Preloader progress={loadingProgress} isLoaded={isLoaded} />

      <div
        ref={containerRef}
        className="relative"
        style={{
          height: "600vh",
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            style={{ display: "block" }}
          />
          {/* Text overlays positioned above the canvas */}
          <TextOverlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </>
  );
}
