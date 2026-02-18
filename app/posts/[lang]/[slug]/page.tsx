import Toc from "@/components/toc";
import { GetAllPostParams, GetPostBySlug, type Lang } from "@/libs/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { lang: Lang; slug: string };

type PostPageProps = {
  params: Promise<Params>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { lang, slug } = await params; // ← unwrap

  try {
    const { data } = GetPostBySlug(lang, slug);
    return {
      title: data.title ?? "Post",
      description: data.description ?? data.title ?? "",
    };
  } catch (e) {
    console.error("generateMetadata error:", e);
    notFound();
  }
}

export async function generateStaticParams() {
  return GetAllPostParams();
}

export default async function PostPage({ params }: PostPageProps) {
  const { lang, slug } = await params; // ← unwrap

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  };

  let post;
  try {
    post = GetPostBySlug(lang, slug);
  } catch (e) {
    console.error("GetPostBySlug error:", e);
    notFound();
  }

  const { content, data } = post;
  const tags: string[] = Array.isArray(data.tags) ? data.tags : [];

  return (
    <div className='mx-auto max-w-6xl px-4 py-2 pb-16 md:py-4 md:pb-24 mb-8 md:mb-12'>
      <div className='flex flex-col gap-10 md:flex-row md:items-start md:gap-10'>
        <article className='min-w-0 md:w-9/12'>
          <header className='mb-8'>
            <h1 className='text-3xl font-semibold tracking-tight md:text-4xl'>
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

        <aside className='hidden md:block md:w-3/12'>
          <Toc />
        </aside>
      </div>
    </div>
  );
}
