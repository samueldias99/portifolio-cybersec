import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export const ScrollReveal = ({ children, width = "fit-content", className = "", delay = 0.25 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, zIndex: 10 }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
