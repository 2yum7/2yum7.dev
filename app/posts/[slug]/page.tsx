import { GetAllPostSlugs, GetPostBySlug } from "@/libs/post";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  // 1. params を await する（Next.js 15以降の仕様）
  const { slug } = await params;
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  // 2. await した後の slug を渡す
  const { content, data } = GetPostBySlug(slug);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.category}</p>
      <div className='prose dark:prose-invert'>
        <MDXRemote source={content} options={options} />
      </div>
    </div>
  );
}
