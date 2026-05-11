import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  tags: string[];
  image?: string;
  href?: string;
  description?: string;
};

export default function WorkCard({
  title,
  tags,
  image,
  href,
  description,
}: Props) {
  const card = (
    <article className='group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10'>
      <div className='relative aspect-video w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/0'>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition group-hover:scale-[1.02]'
            sizes='(min-width: 768px) 50vw, 100vw'
          />
        )}
      </div>

      <div className='p-5'>
        <h2 className='text-lg font-medium text-white'>{title}</h2>

        {description && (
          <p className='mt-1 text-sm text-white/70'>{description}</p>
        )}

        {tags.length > 0 && (
          <ul className='mt-3 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <li
                key={tag}
                className='rounded-full border border-white/10 bg-transparent px-3 py-1 text-xs text-white/80'
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className='block'>
      {card}
    </Link>
  ) : (
    card
  );
}
