import type { Ref } from "react";
import Section from "./Section";

type Props = {
    title: string;
    list: string[];
    className?: string;
    ref?: Ref<HTMLElement>;
}

export default function List({ title, list, className, ref }: Props) {
    const items = list.map((item, key) => (
        <li
            key={`about-${key}`}
            className="mb-4"
        >
            {item}
        </li>
    ))

    return (
        <Section
            ref={ref} title={title} className="min-h-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <ul className={`px-8 list-disc list-inside text-2xl ${className ?? ""}`}>
                { items }
            </ul>
        </Section>
    );
}