# Videos — Featured testimonials

Add your video files here so they show on the main funnel page. Same idea as adding your founder photo in `images/`.

## Files to add

| File name | Used for |
|-----------|----------|
| **120k-funding.mp4** | 120k Funding — Beauty Business testimonial |
| **elijah.mp4** | Elijah's testimonial |
| **approval-collage.mp4** | Approval screenshots collage video |

- **Format:** MP4 (H.264) works everywhere. WebM is also supported by most browsers.
- **Size:** Keep under ~20–50 MB each if you can so the page loads quickly. Compress with [HandBrake](https://handbrake.fr/) or similar if needed.

## Optional: poster images (thumbnails)

Before the video plays, the page can show a thumbnail. Add these to the **`images/`** folder:

| File name | Used for |
|-----------|----------|
| **120k-poster.jpg** | Thumbnail for 120k Funding video |
| **elijah-poster.jpg** | Thumbnail for Elijah video |
| **approval-collage-poster.jpg** | Thumbnail for approval collage video |

If you don’t add a poster, the video area will show a dark gradient until the video loads or the user hits play.

## If you host videos elsewhere

If your videos live on YouTube, Vimeo, or your own CDN:

1. Open **opt-in.html** and find the featured testimonials section.
2. Replace the `<video>` tag with a link:  
   e.g. change  
   `<video ... src="videos/120k-funding.mp4" ...>`  
   to a `<a href="YOUR_VIDEO_URL">` around an image or “Watch video” button that opens in a new tab.

Or keep the `<video>` and set `src` to the full URL of the MP4, e.g.  
`src="https://yoursite.com/videos/120k-funding.mp4"`.
