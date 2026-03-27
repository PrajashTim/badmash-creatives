import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Strategy for Law Firms | Bad Mash Creatives",
  description: "Data-driven content strategy for law firms. Know exactly what to create, when to post, and why.",
};

export default function ContentStrategyPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="Content Strategy"
      tagline="Stop guessing what to create. We build a data-driven content plan around the exact questions your ideal clients are searching for, so every video you make has a clear purpose."
      description="Most law firms post content randomly and wonder why it doesn't generate clients. A strong content strategy changes that. We research your market, analyze your competitors, identify the topics your ideal clients are actively searching for, and build a structured content calendar that maps every video to a specific stage of the client journey. From awareness all the way to booking a consultation."
      features={[
        { title: "Market & Competitor Analysis", desc: "We study what's working in your practice area and geography so you can outmaneuver competitors from day one." },
        { title: "Keyword Research", desc: "YouTube and Google keyword research to identify the highest-value topics for your specific practice area." },
        { title: "Content Calendar", desc: "A 3-month rolling content calendar with topic titles, format recommendations, and platform priorities." },
        { title: "Content Pillars", desc: "We define your core content pillars so every piece of content reinforces your expertise and brand." },
        { title: "Platform Strategy", desc: "Clear guidance on which platforms to prioritize and what type of content performs best on each." },
        { title: "Content Briefs", desc: "For every video in the calendar, we provide a brief with the angle, talking points, and call to action." },
      ]}
      steps={[
        { title: "Discovery", desc: "We learn your practice area, your ideal client, your current presence, and your 90-day goals." },
        { title: "Research", desc: "Keyword research, competitor analysis, and audience research to find the highest-opportunity content topics." },
        { title: "Strategy Build", desc: "We build your content pillars, platform strategy, and a 3-month content calendar with full briefs." },
        { title: "Handoff & Ongoing", desc: "We walk you through the strategy and can manage ongoing execution or hand it off to your team." },
      ]}
    />
  );
}
