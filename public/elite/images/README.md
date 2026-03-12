# Images

## Video poster images (optional)

If you added videos in the **`videos/`** folder, you can add poster images (thumbnails) here so something shows before play:

- **120k-poster.jpg** — thumbnail for 120k Funding video  
- **elijah-poster.jpg** — thumbnail for Elijah video  
- **approval-collage-poster.jpg** — thumbnail for approval collage video  

Same idea: drop the file in this folder with the exact name above.

---

## Founder photo

To show your photo in the **Built by Emmanuel Nelson** section:

1. **Option A — Local file**  
   Save your photo in this folder as:
   - **`emmanuel-nelson.jpg`**

   Use a square or portrait image (e.g. 400×400px or 600×600px). JPG or PNG both work; if you use PNG, change the `src` in `opt-in.html` to `images/emmanuel-nelson.png`.

2. **Option B — URL**  
   If the photo is hosted elsewhere (your site, CDN, Cloudinary, etc.):
   - Open **opt-in.html**
   - Find the founder section and the line:  
     `<img class="founder__image" src="images/emmanuel-nelson.jpg" ...`
   - Replace `images/emmanuel-nelson.jpg` with your full URL, e.g.  
     `src="https://yoursite.com/your-photo.jpg"`

If no image is found, the page shows a placeholder: “Add images/emmanuel-nelson.jpg”.
