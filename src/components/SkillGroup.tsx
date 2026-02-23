type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function SkillGroup({ title, children }: Props) {
  return (
    <li className="w-96 lg:w-56 p-4 bg-gray-900 shadow-xl rounded-2xl overflow-hidden">
      <h3 className="text-2xl mb-4 text-center leading-loose">{title}</h3>
      {children}
    </li>
  );
}
