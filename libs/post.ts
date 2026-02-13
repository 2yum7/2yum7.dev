import { readFileSync, readdirSync } from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  category?: string;
  date?: string;
  tags?: string[];
};

// MDXファイルのディレクトリ
const POSTS_PATH = path.join(process.cwd(), "contents/posts");

// ファイル名（slug）の一覧を取得
export function GetAllPostSlugs() {
  const postFilePaths = readdirSync(POSTS_PATH).filter((path) =>
    /\.mdx?$/.test(path)
  );
  return postFilePaths.map((path) => {
    const slug = path.replace(/\.mdx?$/, "");
    return slug;
  });
}

// slugからファイルの中身を取得
export function GetPostBySlug(slug: string) {
  const markdown = readFileSync(`contents/posts/${slug}.mdx`, "utf8");

  const { content, data } = matter(markdown);
  return {
    content,
    data,
  };
}

// 全記事の frontmatter（メタデータ）だけをまとめて取得する関数
export function GetAllPosts() {
  const slugs = GetAllPostSlugs();

  return slugs.map((slug) => {
    const { data } = GetPostBySlug(slug);

    return {
      slug,
      title: data.title,
      category: data.category,
      date: data.date, // frontmatterにあるなら
      tag: data.tags ?? [],
    };
  });
}