import Image from "next/image";

export default function Page() {
  return (
    <main className='mx-auto max-w-5xl px-4 py-10 mb-12 md:py-16'>
      <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16'>
        {/* Left: Image */}
        <section className='md:w-5/12'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-40 md:w-40'>
              <Image
                src='/images/icon.jpg'
                alt='icon image'
                fill
                className='object-cover'
                style={{ objectPosition: 'center 20%' }}
                sizes='(min-width: 768px) 160px, 144px'
                priority
              />
            </div>
            <p className='mt-4 text-2xl font-semibold tracking-tight text-white'>
              Ibuki
            </p>
            <p className='mt-1 text-base font-medium tracking-tight text-gray-400'>
              2yum7
            </p>
          </div>
        </section>

        {/* Right: Details */}
        <section className='md:w-7/12 flex flex-col justify-center'>
          <p className='mb-6 mx-4 md:mt-20 text-center text-base leading-7 text-white/80'>
            I’m naturally curious, and there’s still so much I don’t know. By
            building and writing on this site, I want to explore those unknowns
            and learn along the way.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:justify-center'>
            <a
              href='/posts'
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
