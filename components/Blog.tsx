import { metadata } from "@/app/layout";
import Link from "next/link";

type Props = {
  posts: PostMeta[];
};

export default function BlogList({ posts }: Props) {
  return (
    <section className='mt-8'>
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
