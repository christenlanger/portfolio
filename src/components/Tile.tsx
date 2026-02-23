import Markdown from "react-markdown";
import { ExternalLink } from "lucide-react";

import Skills from "./Skills";

type Props = {
  title: string;
  link: string;
  description: string;
  tools?: string[];
  image?: string;
  size?: string;
  position?: string;
  expanded: boolean;
  addStyle?: React.CSSProperties;
  onClick?: () => void;
};

export default function Tile({
  title,
  link,
  description,
  tools = [],
  image,
  size = "cover",
  position = "0 0",
  expanded = false,
  addStyle,
  onClick,
}: Props) {
  const handleClick = () => {
    onClick?.();
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (expanded) {
      event.stopPropagation();
    } else {
      event.preventDefault();
    }
  };

  return (
    <article
      aria-expanded={expanded}
      tabIndex={0}
      className={`group relative w-96 h-96 p-4 border-2 hover:border-cyan-500 rounded-2xl overflow-hidden cursor-pointer bg-no-repeat transition-all duration-500
                ${expanded ? "max-h-96 border-cyan-500" : "max-h-36 border-cyan-800"}`}
      style={{
        backgroundImage: image ? `url(/${image})` : undefined,
        backgroundSize: size,
        backgroundPosition: position,
        ...addStyle,
      }}
      onClick={handleClick}
    >
      <div
        className={`absolute inset-0 bg-black/60 pointer-events-none lg:group-hover:opacity-100 transition-opacity duration-300
                    ${expanded ? "lg:opacity-100 backdrop-blur-xs" : "lg:opacity-0"}`}
      ></div>
      <h2
        className={`absolute w-full right-0 bottom-2 pl-6 pr-4 py-2 text-2xl text-right font-semibold lg:opacity-0 transition-opacity duration-100
                    ${expanded ? "opacity-0" : "lg:group-hover:animate-(--text-compress)"}`}
      >
        {title}
      </h2>
      <div
        className={`relative flex flex-col w-full h-full transition-opacity duration-300
                    ${expanded ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="text-xl font-semibold mb-1 leading-loose">
          <a href={link} target="_blank" tabIndex={expanded ? 0 : -1} onClick={handleLinkClick}>
            {title} <ExternalLink className="inline-block align-middle w-6 h-6" />
          </a>
        </h3>
        <Markdown
          components={{
            li: ({ ...props }) => (
              <li className="ml-4 my-4 pl-1 text-xl list-disc mb-1" {...props} />
            ),
          }}
        >
          {description}
        </Markdown>
        {tools.length > 0 && <Skills list={tools} />}
      </div>
    </article>
  );
}
