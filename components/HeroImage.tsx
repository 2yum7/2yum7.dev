import Image from "next/image";

export default function HeroImage() {
  return (
    <section className='mx-auto max-w-5xl px-4 py-10 md:py-14'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        {/* Text */}
        <div className='md:w-5/12'>
          <p className='text-2xl font-semibold tracking-tight leading-tight text-white md:text-3xl'>
            I enjoy turning ideas into real, visible things.
          </p>
          <p className='mt-3 text-sm leading-6 text-white/70 md:text-base'>
            Building and writing what I learn along the way.
          </p>
        </div>

        {/* Image */}
        <div className='relative h-[22vh] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 md:h-[28vh] md:w-7/12'>
          <Image
            src='/images/film.jpeg'
            alt='hero image'
            fill
            className='object-cover'
            sizes='(min-width: 768px) 60vw, 100vw'
            priority
          />
        </div>
      </div>
    </section>
  );
}
