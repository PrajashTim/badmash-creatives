import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import ButtonPrimary from "@/components/ButtonPrimary";

interface ServiceFeature {
  title: string;
  desc: string;
}

interface ServiceStep {
  title: string;
  desc: string;
}

interface ServicePageProps {
  label: string;
  title: string;
  tagline: string;
  description: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
}

export default function ServicePageTemplate({
  label,
  title,
  tagline,
  description,
  features,
  steps,
}: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-[#1a1a2e] py-20 text-[#f0ede6]">
          <div className="max-w-[1140px] mx-auto px-6">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-[#d4a843] mb-4 block">{label}</span>
            <h1 className="font-display text-[clamp(36px,5vw,64px)] font-black leading-[1.05] mb-4">
              {title}
            </h1>
            <p className="text-[17px] text-[#b8b8cc] max-w-[560px] leading-[1.8]">{tagline}</p>
          </div>
        </section>

        {/* Description + What's Included */}
        <section className="py-20 bg-[#f5f3ef]">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionLabel>Overview</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-black mb-6 leading-[1.1]">
                  What We Do For You
                </h2>
                <p className="text-[16px] text-[#4a4a5a] leading-[1.8]">{description}</p>
              </div>
              <div>
                <SectionLabel>What&apos;s Included</SectionLabel>
                <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-black mb-6 leading-[1.1]">
                  Everything You Get
                </h2>
                <ul className="space-y-0">
                  {features.map((f) => (
                    <li key={f.title} className="py-4 border-b border-dashed border-[#1a1a2e]/10 last:border-b-0">
                      <div className="flex gap-3 items-start">
                        <span className="text-[#d4a843] font-bold text-[16px] flex-shrink-0 mt-0.5">&#10003;</span>
                        <div>
                          <div className="font-bold text-[15px] mb-0.5">{f.title}</div>
                          <div className="text-[13px] text-[#4a4a5a] leading-[1.6]">{f.desc}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#eae7e0] border-t border-dashed border-[#1a1a2e]/10">
          <div className="max-w-[800px] mx-auto px-6">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-black mb-10 leading-[1.1]">
              How It Works
            </h2>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-[#d4a843] rounded-full flex items-center justify-center text-[#1a1a2e] font-bold text-[13px] flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 border-l border-dashed border-[#1a1a2e]/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8 last:pb-0">
                    <h3 className="font-display text-[20px] font-bold italic mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#4a4a5a] leading-[1.7]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a1a2e] text-center">
          <div className="max-w-[1140px] mx-auto px-6">
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-black text-[#f0ede6] mb-4">
              Ready To Get Started?
            </h2>
            <p className="text-[16px] text-[#b8b8cc] max-w-[480px] mx-auto mb-8 leading-[1.8]">
              Book a free strategy call. We&apos;ll build a plan around your firm and your goals.
            </p>
            <ButtonPrimary href="/get-started">Book A Strategy Call →</ButtonPrimary>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
