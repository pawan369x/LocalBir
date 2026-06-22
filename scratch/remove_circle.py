from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size
cx, cy = 238, 218

# Create a copy to edit
new_img = img.copy()

# We will erase pixels where distance from (cx, cy) is between 120 and 128
erased_count = 0
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if a > 0:
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            if 120 <= dist <= 128:
                new_img.putpixel((x, y), (0, 0, 0, 0))
                erased_count += 1

new_img.save('scratch/logo_no_circle.png')
print(f"Erased {erased_count} pixels from the circle region.")
