import type { Ref } from "react";
import Section from "./Section";

import { CONTACT_LINKS } from "../data/links";

type Props = {
    ref?: Ref<HTMLElement>;
}

export default function Contact({ ref }: Props) {
    const links = CONTACT_LINKS.map(({ label, href, icon: Icon }, idx) => (
        <a key={`contact-${idx}`} title={label} href={href} target="_blank"><Icon className="w-8 h-8" /></a>
    ));

    return (
        <Section
            ref={ref} title="Contact Me" className="mb-24 text-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-3xl">
                <p>
                    I'm open to new opportunities and collaborations.
                </p>
                <p>
                    If you're building something meaningful, I'd be happy to contribute and be part of the journey.
                </p>
                <nav className="py-8 flex justify-center items-center gap-8">
                    {links}
                </nav>
            </div>
        </Section>
    );
}