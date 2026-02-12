import type { ReactNode, Ref } from "react";
import { motion, type MotionProps } from "motion/react";

type Props = {
    ref?: Ref<HTMLElement>;
    title: string;
    className?: string;
    children?: ReactNode;
} & MotionProps;

export default function Section({ ref, title, className, children, ...props }: Props) {
    return (
        <motion.section
            ref={ref}
            className={`p-8 lg:p-16 flex flex-col justify-center items-center ${className ?? ""}`}
            {...props}
        >
            <h2 className="text-3xl font-semibold leading-32">{title}</h2>
            {children}
        </motion.section>
    );
}
