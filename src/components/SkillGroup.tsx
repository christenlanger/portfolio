import Skills from "./Skills";

type Props = {
  title: string;
  items: string[];
};

export default function SkillGroup({ title, items }: Props) {
  return (
    <li className="w-96 lg:w-56 p-4 bg-gray-900 rounded-2xl overflow-hidden">
      <h3 className="text-2xl mb-4 text-center leading-loose">{title}</h3>
      <Skills list={items} className="justify-center" />
    </li>
  );
}
