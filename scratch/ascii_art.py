from PIL import Image

img = Image.open('public/Main-Logo1.png')
# Downscale to 60x60
img_small = img.resize((60, 60))

for y in range(60):
    row = ""
    for x in range(60):
        r, g, b, a = img_small.getpixel((x, y))
        if a > 0:
            row += "#"
        else:
            row += " "
    print(row)
