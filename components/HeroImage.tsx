import Image from "next/image";

export default function HeroImage() {
  return (
    <section className='mx-auto max-w-5xl px-4 py-10 md:py-14'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        {/* Text */}
        <div className='md:w-5/12'>
          <p className='text-xl font-semibold tracking-tight leading-tight text-white md:text-2xl'>
            Building and writing what I learn along the way.
          </p>
        </div>

        {/* film */}
        <div className='relative h-[32vh] w-full overflow-hidden rounded-xl bg-white/5 md:h-[42vh] md:w-7/12'>
          <video
            src='/film.mp4'
            autoPlay
            muted
            loop
            playsInline
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
