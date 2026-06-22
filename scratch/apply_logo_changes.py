from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size
cx, cy = 238, 218

new_img = img.copy()

erased_count = 0
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if a > 0:
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            # Erase the circle boundary (thickness 119 to 129)
            if 118 <= dist <= 129:
                new_img.putpixel((x, y), (0, 0, 0, 0))
                erased_count += 1

new_img.save('public/Main-Logo1.png')
print(f"Successfully erased {erased_count} pixels and saved to public/Main-Logo1.png")
