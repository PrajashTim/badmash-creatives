import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "YouTube Strategy for Law Firms | Bad Mash Creatives",
  description: "Build a YouTube channel that generates qualified consultations for your law firm. Strategy, scripting, SEO, and channel management.",
};

export default function YouTubeStrategyPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="YouTube Strategy"
      tagline="Your ideal clients are searching for legal answers on YouTube right now. We help you show up with the right content, in the right format, optimized to turn viewers into consultations."
      description="YouTube is the second largest search engine in the world and it's massively underused by law firms. When someone searches 'do I need a will if I have kids' or 'what happens after a DUI arrest,' they're not just browsing. They're actively looking for an attorney they can trust. We build your YouTube presence from the ground up: researching what your clients are actually searching for, scripting videos that answer those questions, coaching you through recording, and optimizing every upload for maximum visibility."
      features={[
        { title: "Channel Setup & Optimization", desc: "Full channel buildout including banner, about section, playlists, and keyword optimization." },
        { title: "Keyword & Topic Research", desc: "We find the exact questions your ideal clients are typing into YouTube and build your content calendar around them." },
        { title: "Video Scripting & Talking Points", desc: "You never show up unprepared. We write the scripts and talking points so you walk in ready to record." },
        { title: "Recording Coaching", desc: "We guide every session and help you feel comfortable and confident on camera." },
        { title: "Professional Editing", desc: "Polished cuts, captions, graphics, and on-brand thumbnails for every video." },
        { title: "SEO & Publishing", desc: "Optimized titles, descriptions, and tags so your videos rank and get found." },
        { title: "Monthly Analytics Report", desc: "Clear reporting on views, watch time, subscriber growth, and consultations driven." },
      ]}
      steps={[
        { title: "Strategy Session", desc: "We deep dive into your practice area, competitors, and the questions your clients are asking. You leave with a content roadmap." },
        { title: "Topic Research", desc: "We research the highest impact topics for your specific practice area and build a content calendar with estimated search volume and competition." },
        { title: "Script & Prep", desc: "We write scripts or detailed talking points for each video so recording day is simple and fast." },
        { title: "Record", desc: "You talk, we handle the rest. Sessions are typically 1 to 2 hours and produce enough footage for a full month of content." },
        { title: "Edit, Optimize, Publish", desc: "We edit your videos, write optimized descriptions, design thumbnails, and publish everything on schedule." },
      ]}
    />
  );
}
