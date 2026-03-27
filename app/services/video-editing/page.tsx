import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Video Editing for Law Firms | Bad Mash Creatives",
  description: "Professional video editing for law firm content. Polished, on-brand videos without the hassle.",
};

export default function VideoEditingPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="Video Editing"
      tagline="You record it, we polish it. Professional editing that makes you look like the authority you already are, without any technical work on your end."
      description="Raw footage is full of potential that most attorneys never unlock. We take your recordings and transform them into tight, professionally edited videos with clean cuts, motion graphics, brand colors, animated captions, and thumbnails that get clicked. Whether you're recording on your phone or a professional camera, we make the final product look polished and consistent every time."
      features={[
        { title: "Full Long Form Editing", desc: "Complete editing for YouTube videos including cuts, b-roll if applicable, intros, and outros." },
        { title: "Animated Captions", desc: "Styled, animated captions that increase watch time and accessibility." },
        { title: "Motion Graphics", desc: "Lower thirds, callout boxes, and on-brand graphics that reinforce your authority." },
        { title: "Thumbnail Design", desc: "Custom thumbnails for every video designed to maximize click-through rate." },
        { title: "Color & Audio Correction", desc: "Professional color grading and audio cleanup so you always look and sound your best." },
        { title: "Brand Consistency", desc: "Every video follows your brand guidelines so your content is instantly recognizable." },
      ]}
      steps={[
        { title: "Upload Your Footage", desc: "Record your video and upload the raw file to our shared folder. That's your only job." },
        { title: "We Edit", desc: "Our editors cut, caption, and design your video according to your brand standards and the platform it's going to." },
        { title: "Review", desc: "You get a draft link to review. Most clients approve with one round of feedback or none at all." },
        { title: "Final Delivery", desc: "We deliver the final files ready to publish, or publish them directly to your channels." },
      ]}
    />
  );
}
