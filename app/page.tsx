import Blog from "@/components/Blog";
import HeroImage from "@/components/HeroImage";
import SiteHeader from "@/components/SiteHeader";

type Post = { title: string; slug: string };

const posts: Post[] = [
  { title: "Welcome", slug: "welcome" },
  { title: "About", slug: "about" },
];

export default function Home() {
  return (
    <div className='min-h-screen'>
      <SiteHeader />
      <HeroImage />
      <Blog posts={posts} />
    </div>
  );
}
