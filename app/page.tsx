import Blog from "@/components/Blog";
import HeroImage from "@/components/HeroImage";
import { GetAllPosts } from "@/libs/post";

export default function Home() {
  const posts = GetAllPosts();

  return (
    <>
      <section>
        <HeroImage />
      </section>

      <section className='mx-auto max-w-5xl px-4 py-10'>
        <header className='mb-1'>
          <h2 className='flex items-center gap-1 text-xl font-semibold tracking-tight'>
            <span>Latest posts</span>
            <span aria-hidden='true' className='text-white/60'>
              ›
            </span>
          </h2>
        </header>

        <Blog posts={posts} />
      </section>
    </>
  );
}
