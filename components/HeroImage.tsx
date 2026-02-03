import Image from "next/image";

export default function HeroImage() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative h-[25vh] w-full max-w-3xl'>
        <Image
          src='/images/film.jpeg'
          alt='hero image'
          fill
          className='object-contain rounded-sm'
        />
      </div>
    </div>
  );
}
