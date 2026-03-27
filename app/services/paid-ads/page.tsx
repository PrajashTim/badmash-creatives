import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Paid Ads for Law Firms | Bad Mash Creatives",
  description: "Facebook, Instagram, and YouTube ad campaigns that put your content in front of people looking for a lawyer.",
};

export default function PaidAdsPage() {
  return (
    <ServicePageTemplate
      label="Service"
      title="Paid Ads"
      tagline="Organic content builds trust over time. Paid ads accelerate that reach immediately. We run video ad campaigns on Facebook, Instagram, and YouTube that target the right people in your market."
      description="Paid advertising works best when the creative is already strong. That's why our ad campaigns use your video content as the foundation. We build audiences based on your practice area and geography, write compelling ad copy, set up the campaigns, and optimize them weekly based on performance. No wasted spend on audiences who will never become clients."
      features={[
        { title: "Campaign Strategy", desc: "Custom campaign structure for your practice area, location, and budget." },
        { title: "Audience Building", desc: "Precise targeting by location, demographics, interests, and behavioral data relevant to your ideal client." },
        { title: "Video Ad Creative", desc: "We repurpose your existing video content into high-performing ad formats for each platform." },
        { title: "Ad Copywriting", desc: "Headlines, primary text, and calls to action written to drive consultations, not just clicks." },
        { title: "Campaign Management", desc: "Weekly optimization of bids, audiences, and creative to improve results over time." },
        { title: "Conversion Tracking", desc: "Proper tracking setup so you know exactly which ads are producing consultations." },
        { title: "Monthly Ad Reports", desc: "Clear reports on spend, reach, leads generated, and cost per consultation." },
      ]}
      steps={[
        { title: "Campaign Planning", desc: "We identify your highest-value practice areas, set budget recommendations, and define the ideal client profile for targeting." },
        { title: "Creative Preparation", desc: "We select and format your best video content for use as ad creative across each platform." },
        { title: "Campaign Launch", desc: "We build and launch your campaigns with full conversion tracking in place." },
        { title: "Optimize & Scale", desc: "Weekly we review performance, cut what isn't working, and scale what is." },
      ]}
    />
  );
}
