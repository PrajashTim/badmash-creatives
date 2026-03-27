import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Management for Law Firms | Bad Mash Creatives",
  description: "Full social media management for law firms across YouTube, TikTok, Instagram, and Facebook.",
};

export default function SocialMediaManagementPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="Social Media Management"
      tagline="Your channels, fully managed. We handle every post, comment, and optimization so you can focus entirely on practicing law."
      description="Consistent presence is what builds trust. But posting consistently while running a law firm is nearly impossible without a system. We become your content team: creating, scheduling, publishing, and monitoring your YouTube, TikTok, Instagram, and Facebook channels on your behalf. You stay in the loop with monthly reports, but the day-to-day execution is entirely off your plate."
      features={[
        { title: "Full Channel Management", desc: "End-to-end management of YouTube, TikTok, Instagram, and Facebook." },
        { title: "Content Calendar", desc: "A detailed monthly content calendar so you always know what's coming and when." },
        { title: "Posting & Scheduling", desc: "Every piece of content published at the optimal time for each platform." },
        { title: "Comment Monitoring", desc: "We monitor comments and flag anything that needs your attention or a legal review." },
        { title: "Platform Optimization", desc: "Ongoing optimization of channel descriptions, keywords, and posting cadence based on performance data." },
        { title: "Monthly Reporting", desc: "Clear monthly reports on growth, reach, engagement, and consultations attributed to your content." },
      ]}
      steps={[
        { title: "Onboarding", desc: "We audit your existing channels, set up any missing accounts, and establish your brand guidelines across every platform." },
        { title: "Content Planning", desc: "We build your first month's content calendar and get your approval before anything goes live." },
        { title: "Execution", desc: "We produce, edit, and publish every piece of content on schedule. You just review the calendar." },
        { title: "Optimize & Report", desc: "Each month we analyze what's working, adjust the strategy, and send you a clean report." },
      ]}
    />
  );
}
