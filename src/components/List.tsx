import Section from "./Section";

type Props = {
  title: string;
  list: string[];
  className?: string;
  ref?: React.Ref<HTMLElement>;
};

export default function List({ title, list, className, ref }: Props) {
  const items = list.map((item, key) => (
    <li key={`about-${key}`} className="mb-4">
      {item}
    </li>
  ));

  return (
    <Section ref={ref} title={title} className="min-h-200">
      <ul className={`px-8 list-disc list-inside text-2xl ${className ?? ""}`}>{items}</ul>
    </Section>
  );
}
