from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size

# Get all non-transparent pixels
pixels = []
for y in range(height):
    for x in range(width):
        if img.getpixel((x, y))[3] > 50:
            pixels.append((x, y))

best_cx, best_cy, best_r = 0, 0, 0
max_count = 0

for cx in range(220, 260):
    for cy in range(200, 240):
        for r in range(110, 135):
            count = 0
            for px, py in pixels:
                dist = math.sqrt((px - cx)**2 + (py - cy)**2)
                if r - 1.5 <= dist <= r + 1.5:
                    count += 1
            if count > max_count:
                max_count = count
                best_cx, best_cy, best_r = cx, cy, r

print(f"Best Circle: Center=({best_cx}, {best_cy}), Radius={best_r}, Overlapping Pixels={max_count}")
