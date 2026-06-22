from PIL import Image
import math

img = Image.open('public/Main-Logo1.png')
width, height = img.size
cx, cy = width / 2, height / 2

# For each degree from 0 to 359, find the outermost non-transparent pixel
outer_pixels = []
for angle_deg in range(360):
    angle_rad = math.radians(angle_deg)
    # Trace from edge towards center to find the first non-transparent pixel
    found = False
    for r in range(250, 0, -1):
        x = int(cx + r * math.cos(angle_rad))
        y = int(cy + r * math.sin(angle_rad))
        if 0 <= x < width and 0 <= y < height:
            r_val, g_val, b_val, a = img.getpixel((x, y))
            if a > 0:
                outer_pixels.append((x, y, r))
                found = True
                break

print(f"Total directions found: {len(outer_pixels)}")
distances = [p[2] for p in outer_pixels]
if distances:
    print(f"Min outer dist: {min(distances)}")
    print(f"Max outer dist: {max(distances)}")
    print(f"Average outer dist: {sum(distances)/len(distances)}")
    # Print a histogram of outer distances
    hist = {}
    for d in distances:
        hist[d] = hist.get(d, 0) + 1
    print("Distance distribution of outermost pixels:")
    for d in sorted(hist.keys()):
        if hist[d] > 2:
            print(f"  Dist {d}: {hist[d]} angles")
