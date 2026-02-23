import { motion, type MotionProps } from "motion/react";

type Props = {
  ref?: React.Ref<HTMLElement>;
  title: string;
  className?: string;
  children?: React.ReactNode;
} & MotionProps;

export default function Section({ ref, title, className, children, ...props }: Props) {
  return (
    <motion.section
      ref={ref}
      className={`p-8 lg:p-16 flex flex-col justify-center items-center ${className ?? ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      <h2 className="text-3xl font-semibold leading-32">{title}</h2>
      {children}
    </motion.section>
  );
}
