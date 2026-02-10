import Blog from "@/components/Blog";
import HeroImage from "@/components/HeroImage";
import SiteHeader from "@/components/SiteHeader";

type Post = { title: string; slug: string };

const posts: Post[] = [
  { title: "SamplePost", slug: "sample-post" },
  { title: "SamplePost2", slug: "sample-post2" },
];

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroImage />
      <Blog posts={posts} />
    </div>
  );
}
