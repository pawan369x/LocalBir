from PIL import Image

img = Image.open('public/Main-Logo1.png')
width, height = img.size

color_counts = {}
for x in range(width):
    for y in range(height):
        pixel = img.getpixel((x, y))
        color_counts[pixel] = color_counts.get(pixel, 0) + 1

# Print the most common colors
sorted_colors = sorted(color_counts.items(), key=lambda x: x[1], reverse=True)
print("Top 10 colors in the image:")
for color, count in sorted_colors[:10]:
    print(f"Color {color}: {count} pixels")
