from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size
cx, cy = width / 2, height / 2

# We will count how many non-transparent pixels are at each distance (rounded to nearest integer)
distances = {}
for x in range(width):
    for y in range(height):
        r, g, b, a = img.getpixel((x, y))
        if a > 0:
            dist = round(math.sqrt((x - cx)**2 + (y - cy)**2))
            distances[dist] = distances.get(dist, 0) + 1

# Print the top distances (radius) with the most pixels
for d in sorted(distances.keys()):
    if distances[d] > 50:
        print(f"Radius {d}: {distances[d]} pixels")
