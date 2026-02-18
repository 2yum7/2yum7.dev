import Link from "next/link";
import type { PostMeta } from "@/libs/post";

type Props = {
  posts: PostMeta[];
};

export default function BlogList({ posts }: Props) {
  return (
    <section className='mt-8'>
      <ul className='mt-4 space-y-3'>
        {posts.map((p) => (
          <li key={`${p.lang}-${p.slug}`}>
            <Link
              href={`/posts/${p.lang}/${p.slug}`}
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
