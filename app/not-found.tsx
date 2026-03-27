import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] min-h-screen bg-[#1a1a2e] flex items-center justify-center text-[#f0ede6]">
        <div className="text-center px-6">
          <div className="font-display text-[120px] font-black text-[#d4a843] opacity-20 leading-none mb-4">404</div>
          <h1 className="font-display text-[40px] font-black mb-4">Page Not Found</h1>
          <p className="text-[16px] text-[#b8b8cc] max-w-[400px] mx-auto mb-8 leading-[1.8]">
            This page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <ButtonPrimary href="/">Back To Home</ButtonPrimary>
        </div>
      </main>
      <Footer />
    </>
  );
}
