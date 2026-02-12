import Image from "next/image";

export default function Page() {
  return (
    <main className='mx-auto max-w-5xl px-4 py-16'>
      <div className='flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
        {/* Left: Image */}
        <section className='md:w-5/12'>
          <p className='text-2xl font-semibold tracking-tight'>2yum7</p>

          <div className='mt-6 flex items-center'>
            <div className='relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-white/5'>
              <Image
                src='/images/icon.jpg'
                alt='icon image'
                fill
                className='object-cover'
                sizes='160px'
                priority
              />
            </div>
          </div>
        </section>

        {/* Right: Details */}
        <section className='md:w-7/12'>
          <p className='mt-10 md:mt-20 text-base leading-7 text-white/80'>
            ここに自己紹介文。何を作っていて、何に興味があって、どんな価値を出したいかを
            2〜4行くらいでまとめると見栄えがいい。
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              href='/blog'
              className='inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/5'
            >
              Read the blog
            </a>
            <a
              href='/'
              className='inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/5'
            >
              Back to home
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
