import os
import numpy as np
from PIL import Image

def process_logo():
    input_path = "public/logo.png"
    output_path = "public/logo.png"
    
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return
        
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    
    # Extract RGB channels
    r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
    
    # Calculate a grayscale value roughly (luminance)
    gray = 0.299*r + 0.587*g + 0.114*b
    
    # We want dark pixels to become opaque, light pixels to become transparent.
    # The checkerboard has light gray and white pixels. Let's say gray > 180 is background.
    # We'll map grayscale values to alpha: 
    # gray <= 100 -> alpha = 255 (fully opaque text)
    # gray >= 180 -> alpha = 0 (transparent background)
    # in between -> linear gradient for smooth anti-aliased edges
    
    alpha = np.zeros_like(gray, dtype=np.float32)
    alpha = np.where(gray <= 100, 255.0, alpha)
    alpha = np.where(gray >= 180, 0.0, alpha)
    
    mask = (gray > 100) & (gray < 180)
    # linear interpolation: 100 -> 255, 180 -> 0
    alpha[mask] = 255.0 - ((gray[mask] - 100.0) / 80.0) * 255.0
    
    # The new color should be black: #000000 -> rgb(0, 0, 0)
    new_r = np.full_like(r, 0)
    new_g = np.full_like(g, 0)
    new_b = np.full_like(b, 0)
    
    # Ensure we don't increase alpha where the original image was already transparent 
    # (just in case the original had some real transparency)
    final_alpha = np.minimum(alpha, a)
    
    # Reassemble the image
    new_arr = np.dstack((new_r, new_g, new_b, final_alpha.astype(np.uint8)))
    
    result = Image.fromarray(new_arr, "RGBA")
    
    # Save a copy as backup just in case
    import shutil
    shutil.copy(input_path, "public/logo_backup.png")
    
    result.save(output_path)
    print("Logo processed successfully and saved.")

if __name__ == "__main__":
    process_logo()
