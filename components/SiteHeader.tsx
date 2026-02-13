import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className='flex items-center justify-between px-8 py-4 bg-black'>
      {/* logo */}
      <div className='flex items-center gap-2'>
        <Link href='/'>2yum7</Link>
      </div>
      <nav>
        <ul className='flex gap-6 text-sm text-slate-200'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/posts'>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
