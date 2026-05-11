import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareLinkedin,
  faGithub,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className='mx-auto max-w-5xl px-4 py-10 mb-12 md:py-16'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-40 md:w-40'>
          <Image
            src='/images/icon.jpg'
            alt='icon image'
            fill
            className='object-cover'
            style={{ objectPosition: "center 20%" }}
            sizes='(min-width: 768px) 160px, 144px'
            priority
          />
        </div>
        <p className='mt-4 text-2xl font-semibold tracking-tight text-white'>
          Ibuki
        </p>
        <p className='mt-1 text-base font-medium tracking-tight text-gray-200'>
          Engineer
        </p>
        <p className='mt-2 text-base font-medium tracking-tight text-gray-400'>
          2yum7
        </p>
      </div>

      <div className='flex flex-row items-center justify-center gap-4 mt-4'>
        <a
          href='https://www.linkedin.com/in/ibuki-yamada/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            className='text-gray-400 hover:text-white w-7 h-7'
          />
        </a>

        <a
          href='https://github.com/2yum7'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='text-gray-400 hover:text-white w-7 h-7'
          />
        </a>
        <a href='https://x.com/2yum7' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon
            icon={faSquareXTwitter}
            className='text-gray-400 hover:text-white w-7 h-7'
          />
        </a>
        <a
          href='https://www.instagram.com/2yum7'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className='text-gray-400 hover:text-white w-7 h-7'
          />
        </a>
      </div>

      <div className='mt-16 flex flex-col gap-8 sm:flex-row sm:items-center md:justify-center'>
        <Link
          href='/posts'
          className='inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/5'
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
