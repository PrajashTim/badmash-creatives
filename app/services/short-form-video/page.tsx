import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Short Form Video for Law Firms | Bad Mash Creatives",
  description: "Turn one recording into 10 short clips for TikTok, Instagram Reels, and Facebook. We handle everything.",
};

export default function ShortFormVideoPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="Short Form Video"
      tagline="TikTok and Instagram Reels are where your future clients are spending hours every day. We turn your expertise into short, shareable clips that build trust fast and reach people you'd never find otherwise."
      description="One recording session can produce a full month of short form content. We identify the most shareable moments from your long form videos, or create short form content from scratch, and turn them into polished clips with captions, graphics, and hooks that stop the scroll. We publish everything on your behalf across TikTok, Instagram Reels, and Facebook Reels, optimized for each platform's algorithm."
      features={[
        { title: "Content Repurposing", desc: "Every long form video becomes 5 to 10 unique short clips. Maximum output from a single recording session." },
        { title: "Hook Writing", desc: "The first 3 seconds determine everything. We write hooks designed to stop the scroll and keep viewers watching." },
        { title: "Captions & Graphics", desc: "Fully captioned with animated text and on-brand graphics for every clip." },
        { title: "Platform Optimization", desc: "Each clip is formatted and sized for TikTok, Instagram Reels, and Facebook Reels individually." },
        { title: "Publishing & Scheduling", desc: "We post on your behalf at the optimal times for maximum reach on each platform." },
        { title: "Performance Tracking", desc: "Monthly reports showing views, reach, and which clips drive the most engagement." },
      ]}
      steps={[
        { title: "Record", desc: "One recording session per month, typically 1 to 2 hours. We guide you through it and handle all the technical setup." },
        { title: "Clip Selection", desc: "We review the footage and identify the 10 to 15 strongest moments to turn into standalone short form clips." },
        { title: "Edit & Format", desc: "We add captions, graphics, music where appropriate, and format each clip for every platform." },
        { title: "Publish", desc: "We post on your TikTok, Instagram, and Facebook pages on a consistent schedule throughout the month." },
      ]}
    />
  );
}
