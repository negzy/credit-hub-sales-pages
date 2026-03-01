/**
 * Testimonial assets under public/Testimonials.
 * Paths are relative to public/; build URL with buildTestimonialUrl().
 */

const BASE = "/Testimonials";

export function buildTestimonialUrl(...segments: string[]): string {
  return BASE + "/" + segments.map((s) => encodeURIComponent(s)).join("/");
}

export const CREDIT_INSIDE_COMMUNITY = [
  "IMG_3309.PNG",
  "IMG_3308.PNG",
  "IMG_3306.PNG",
  "IMG_3311.PNG",
].map((file) => buildTestimonialUrl("Credit", "Inside Community", file));

export const CREDIT_OUTSIDE_COMMUNITY = [
  "IMG_3290.PNG",
  "IMG_3287.PNG",
  "IMG_3286.PNG",
  "IMG_3296.PNG",
  "IMG_3297.PNG",
  "IMG_9828.JPG",
  "IMG_9829.PNG",
  "IMG_3299.PNG",
  "IMG_3298.PNG",
  "IMG_3304.PNG",
  "IMG_3300.PNG",
  "IMG_3288.PNG",
  "IMG_3303.PNG",
  "IMG_3302.PNG",
].map((file) => buildTestimonialUrl("Credit", "Outside Community", file));

export const FUNDING_SCREENSHOTS = [
  "IMG_3284.PNG",
  "IMG_3285.PNG",
  "IMG_3293.PNG",
  "IMG_3324.PNG",
  "IMG_3282.PNG",
  "IMG_3283.PNG",
  "IMG_3295.PNG",
  "IMG_3281.PNG",
  "IMG_3609.PNG",
  "IMG_3596.jpg",
  "IMG_9479.jpeg",
  "IMG_8607.PNG",
  "IMG_3753.PNG",
  "IMG_3616.jpg",
  "IMG_9301.JPG",
  "IMG_3610.PNG",
  "IMG_4657.PNG",
  "Screenshot 2025-02-11 at 5.30.23 PM.png",
  "IMG_3305.PNG",
  "IMG_4057.jpg",
  "IMG_8057.PNG",
  "IMG_3301.PNG",
  "IMG_4056.jpg",
].map((file) => buildTestimonialUrl("Funding", "Screenshot Testimonials", file));

export const FUNDING_REVIEW_STYLE = [
  "IMG_3312.PNG",
  "IMG_3313.PNG",
  "IMG_3314.PNG",
  "IMG_3315.PNG",
  "IMG_3317.PNG",
  "IMG_3316.PNG",
].map((file) =>
  buildTestimonialUrl("Funding", "Review Style Testimonial", file)
);

export const FUNDING_VIDEOS = [
  { src: "120k Funding _ Beauty Business.mov", label: "120k Funding — Beauty Business" },
  { src: "Elijah_s Testimonial.mov", label: "Elijah's Testimonial" },
  { src: "Text Testimonial Collage.mp4", label: "Text Testimonial Collage" },
].map(({ src, label }) => ({
  src: buildTestimonialUrl("Funding", "Video Testimonial", src),
  label,
}));

/** All testimonial images in one array for a single unified grid. */
export const ALL_TESTIMONIAL_IMAGES = [
  ...CREDIT_INSIDE_COMMUNITY,
  ...CREDIT_OUTSIDE_COMMUNITY,
  ...FUNDING_SCREENSHOTS,
  ...FUNDING_REVIEW_STYLE,
];
