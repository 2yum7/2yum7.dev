import WorkCard from "@/components/WorkCard";

const works = [
  {
    title: "Grain",
    tags: ["iOS App"],
    image: "/images/grain.png",
    href: "https://2yum7.github.io/grain/",
    description: "Simple Habit Tracker",
  },
  {
    title: "Receipify",
    tags: ["Web App"],
    href: "https://github.com/2yum7/Receipify",
    image: "/images/receipify.png",
    description: "Simple Recipe Generator from a Receipt",
  },
];

export default function Page() {
  return (
    <div className='mx-auto max-w-5xl px-4 py-2'>
      <h1 className='mb-8 text-2xl font-semibold'>Works</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {works.map((w) => (
          <WorkCard key={w.title} {...w} />
        ))}
      </div>
    </div>
  );
}
