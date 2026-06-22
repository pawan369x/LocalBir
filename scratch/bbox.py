from PIL import Image

img = Image.open('public/Main-Logo1.png')
width, height = img.size

min_x, min_y = width, height
max_x, max_y = 0, 0

for y in range(height):
    for x in range(width):
        if img.getpixel((x, y))[3] > 50:
            if x < min_x: min_x = x
            if y < min_y: min_y = y
            if x > max_x: max_x = x
            if y > max_y: max_y = y

print(f"Bounding box: X min={min_x}, max={max_x} (Width={max_x - min_x + 1})")
print(f"Bounding box: Y min={min_y}, max={max_y} (Height={max_y - min_y + 1})")
print(f"Calculated Center: X={(min_x + max_x)/2}, Y={(min_y + max_y)/2}")
