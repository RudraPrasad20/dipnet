"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "./modeToggle";
import { Share2Icon } from "lucide-react";

export const Appbar = () => {
  return (
    <nav className="sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 py-6 w-full p-20">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex w-full justify-between mx-auto bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-primary/10 p-6 rounded-2xl"
      >
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold tracking-tight text-foreground md:block"
          >
            Dipnet
          </Link>
          <p className="flex gap-4">
            <Link href="/community">Community</Link>
            <Link href="/colleges">Results</Link>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <ModeToggle />
        </div>
      </motion.div>
    </nav>
  );
};
