import math
from PIL import Image

img = Image.open('public/Main-Logo1.png')
cx, cy = 238.5, 218.0
width, height = img.size

print("Angle\tX\tY\tDist")
for a in range(0, 360, 30):
    rad = math.radians(a)
    for r in range(250, 0, -1):
        x = int(cx + r * math.cos(rad))
        y = int(cy + r * math.sin(rad))
        if 0 <= x < width and 0 <= y < height:
            if img.getpixel((x, y))[3] > 50:
                print(f"{a}\t{x}\t{y}\t{r}")
                break
