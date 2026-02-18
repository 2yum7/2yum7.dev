import { readFileSync, readdirSync, existsSync } from "fs";
import path from "path";
import matter from "gray-matter";

export const SUPPORTED_LANGS = ["en", "ja"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export type PostMeta = {
  lang: "en" | "ja";
  slug: string;
  title: string;
  category?: string;
  date?: string;
  tags?: string[];
};

// MDXファイルのディレクトリ
const POSTS_PATH = path.join(process.cwd(), "contents/posts");

function assertLang(lang: string): asserts lang is Lang {
  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    throw new Error(`Unsupported lang: ${lang}`);
  }
}

// { lang, slug } の一覧を取得
export function GetAllPostParams(): { lang: Lang; slug: string }[] {
  return SUPPORTED_LANGS.flatMap((lang) => {
    const langDir = path.join(POSTS_PATH, lang);

    // ディレクトリがない場合はスキップ（任意）
    if (!existsSync(langDir)) return [];

    const postFilePaths = readdirSync(langDir).filter((p) => /\.mdx?$/.test(p));

    return postFilePaths.map((p) => ({
      lang,
      slug: p.replace(/\.mdx?$/, ""),
    }));
  });
}


// lang + slug からファイルの中身を取得
export function GetPostBySlug(lang: Lang, slug: string) {
    console.log("GetPostBySlug args:", { POSTS_PATH, lang, slug });
  const filePath = path.join(POSTS_PATH, lang, `${slug}.mdx`);

  if (!existsSync(filePath)) {
    throw new Error(`Post not found: ${lang}/${slug}`);
  }

  const markdown = readFileSync(filePath, "utf8");
  const { content, data } = matter(markdown);

  return {
    content,
    data,
  };
}

// 全記事の frontmatter（メタデータ）だけをまとめて取得
export function GetAllPosts(): PostMeta[] {
  const params = GetAllPostParams();

  return params.map(({ lang, slug }) => {
    const { data } = GetPostBySlug(lang, slug);
    console.log({ lang, slug, data})

    return {
      lang,
      slug,
      title: data.title,
      category: data.category,
      date: data.date,
      tags: data.tags ?? [],
    };
  });
}

// 任意：言語別の一覧が欲しい場合
export function GetPostsByLang(lang: Lang): PostMeta[] {
  return GetAllPosts().filter((p) => p.lang === lang);
}