import type { Ref } from "react";

import skills from "../data/skills.json";

import Section from "./Section";
import SkillGroup from "./SkillGroup";

type Props = {
    ref?: Ref<HTMLElement>;
}

export default function SkillsList({ ref }: Props) {
    if (!skills.groups) return;

    const skillGroup = skills.groups.map(({ title, items }, idx) => (
        <SkillGroup key={`group-${idx}`} title={title} items={items} />
    ));

    return (
        <Section
            ref={ref} title="Skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <ul
                className="flex flex-wrap justify-center gap-4"
            >
                {skillGroup}
            </ul>
        </Section>
    );
}