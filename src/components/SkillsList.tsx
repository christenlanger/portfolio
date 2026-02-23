import skills from "../data/skills.json";

import Section from "./Section";
import SkillGroup from "./SkillGroup";
import Skills from "./Skills";

type Props = {
  ref?: React.Ref<HTMLElement>;
};

export default function SkillsList({ ref }: Props) {
  if (!skills.groups) return;

  const skillGroup = skills.groups.map(({ title, items }, idx) => (
    <SkillGroup key={`group-${idx}`} title={title}>
      <Skills list={items} className="justify-center" />
    </SkillGroup>
  ));

  return (
    <Section ref={ref} title="Skills">
      <ul className="flex flex-wrap justify-center gap-4">{skillGroup}</ul>
    </Section>
  );
}
