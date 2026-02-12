import { useState, type Ref } from "react";

import type { Portfolio } from "../types";
import rawPortfolio from "../data/portfolio.json";

import Section from "./Section";
import Tile from "./Tile";

type Props = {
    ref?: Ref<HTMLElement>;
}

export default function Portfolio({ ref }: Props) {
    const [currentTile, setCurrentTile] = useState<number>(-1);

    const portfolio = rawPortfolio as Portfolio[];

    const handleSelectTile = (idx: number) => {
        setCurrentTile(prev => {
            if (idx === prev) {
                return -1;
            }
            return idx;
        });
    }

    // Portfolio list
    const tiles = portfolio.map(({ title, link, description, tools, image, size, position }, idx) =>
        <Tile
            key={`item-${idx}`} title={title} link={link} description={description} tools={tools} image={image} size={size} position={position}
            expanded={currentTile === idx}
            onClick={() => handleSelectTile(idx)}
        />
    );

    return (
        <Section
            ref={ref} title="Projects I worked on"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="item-tiles w-full flex justify-center flex-wrap gap-4">
                {tiles.length > 0 ? tiles : <p>Loading...</p>}
            </div>
        </Section>
    );
}