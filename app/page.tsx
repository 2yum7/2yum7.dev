import Blog from "@/components/Blog";
import HeroImage from "@/components/HeroImage";
import { GetAllPosts } from "@/libs/post";

export default function Home() {
  const posts = GetAllPosts();
  return (
    <div className='min-h-screen'>
      <HeroImage />
      <Blog posts={posts} />
    </div>
  );
}
