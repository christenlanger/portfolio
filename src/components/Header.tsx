import portrait from "/images/edd.jpg";

interface Link {
  title: string;
  callback: React.MouseEventHandler<HTMLButtonElement>;
}

type Props = {
  links?: Link[];
};

export default function Header({ links = [] }: Props) {
  const navList = links.map((link, idx) => (
    <button
      key={`link-${idx}`}
      className="px-6 py-2 rounded-4xl cursor-pointer hover:bg-stone-900 transition-colors"
      onClick={link.callback}
    >
      {link.title}
    </button>
  ));

  return (
    <header className="h-dvh min-h-200 flex flex-col justify-center items-center">
      <figure className="w-52 h-52 overflow-hidden rounded-full">
        <img src={portrait} className="w-full h-full object-cover" />
      </figure>
      <h1 className="font-bold text-4xl leading-36 text-center">Eddryan Aranzanso</h1>
      <h2 className="flex justify-center items-center gap-8 text-3xl leading-loose">
        <div className="w-36 h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></div>
        Web Developer
        <div className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></div>
      </h2>
      <p className="max-w-3xl text-2xl text-center leading-10">
        I build responsive web applications with React and modern tooling. Focused on performance,
        accessibility, and clean architecture.
      </p>
      <nav className="p-16 flex gap-2">{navList}</nav>
    </header>
  );
}
