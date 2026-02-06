import Link from "next/link";

type Post = {
  title: string;
  slug: string;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section className='mt-16'>
      <div className='flex items-center gap-2 text-s text-slate-100'>
        <span>Writing</span>
        <span aria-hidden='true'>›</span>
      </div>

      <ul className='mt-4 space-y-3'>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/posts/${p.slug}`}
              className='block text-base font-medium text-slate-200 hover:text-white transition'
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
