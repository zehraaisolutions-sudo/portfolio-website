import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/** Brand loading animation shown on first paint. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logoAsset.url}
            alt="Zehra AI Solutions logo"
            width={88}
            height={88}
            className="glow-ring size-22 rounded-full"
            animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="mt-6 font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Zehra AI
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
