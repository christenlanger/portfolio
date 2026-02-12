const TOOL_BG_COLORS = [
    "bg-blue-600",
    "bg-green-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-purple-600",
    "bg-rose-600",
    "bg-teal-600",
    "bg-orange-600",
];

type Props = {
    list: string[];
    className?: string;
}

export default function Skills({ list, className }: Props) {
    if (!list.length) return null;

    const toolsList = list.map(( tool, idx ) => {
        const color = TOOL_BG_COLORS[idx % TOOL_BG_COLORS.length];

        return (
            <li key={`tool-${idx}`} className={`inline-block rounded-4xl px-4 py-1 ${color}`}>
                {tool}
            </li>
        )
    });

    return (
        <ul className={`mt-auto mb-2 flex flex-wrap gap-2 ${className ?? ""}`}>
            {toolsList}
        </ul>
    );
}