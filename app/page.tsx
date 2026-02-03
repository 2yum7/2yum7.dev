import HeroImage from "@/components/HeroImage";
import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <SiteHeader />
      <HeroImage />
    </div>
  );
}
