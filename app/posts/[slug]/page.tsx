import Toc from "@/components/toc";
import { GetAllPostSlugs, GetPostBySlug } from "@/libs/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}

export default async function PostPage({ params }: PostPageProps) {
  // 1. params を await する
  const { slug } = await params;
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug], //見出しにIDを付与するため
    },
  };

  // 2. await した後の slug を渡す
  const { content, data } = GetPostBySlug(slug);

  //tagsは配列
  const tags: string[] = Array.isArray(data.tags) ? data.tags : [];

  return (
    <div className='flex gap-8'>
      <article className='w-9/12'>
        <header className='mb-8'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            {data.title}
          </h1>

          <div className='mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70'>
            {data.date && <time dateTime={data.date}>{data.date}</time>}

            {data.category && (
              <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1'>
                {data.category}
              </span>
            )}

            {tags.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {tags.map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-white/10 bg-transparent px-3 py-1'
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className='post prose dark:prose-invert'>
          <MDXRemote source={content} options={options} />
        </div>
      </article>

      <aside className='w-3/12'>
        <Toc />
      </aside>
    </div>
  );
}
