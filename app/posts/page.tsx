import Link from "next/link";
import { GetAllPosts } from "@/libs/post";

export default function Page() {
  const posts = GetAllPosts();

  return (
    <main className='mx-auto max-w-5xl px-4 py-2'>
      <h1 className='mb-8 text-2xl font-semibold'>All posts</h1>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {posts.map((p) => (
          <article
            key={p.slug}
            className='rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10'
          >
            <h2 className='text-lg font-medium'>
              <Link href={`/posts/${p.slug}`} className='hover:underline'>
                {p.title}
              </Link>
            </h2>

            <div className='mt-2 text-sm text-white/70'>{p.date}</div>

            {p.category && (
              <div className='mt-2 text-xs text-white/60'>{p.category}</div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
