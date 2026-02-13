// app/posts/layout.tsx
import SiteHeader from "@/components/SiteHeader";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='mx-auto max-w-3xl px-4 pt-12'>{children}</main>
    </>
  );
}
