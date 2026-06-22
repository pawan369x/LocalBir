from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size
cx, cy = width / 2, height / 2

print("Pixels with radius > 150 and alpha > 100:")
count = 0
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if a > 100:
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            if dist > 150:
                count += 1
                if count <= 50:
                    print(f"x={x}, y={y}, dist={dist:.2f}, color={(r,g,b,a)}")
print(f"Total pixels with radius > 150 and alpha > 100: {count}")
