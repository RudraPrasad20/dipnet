"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex h-full flex-col items-center justify-center gap-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          className="flex max-w-7xl flex-col items-center justify-center gap-2 px-4"
        >
          <h1 className="max-w-2xl py-2 pt-20 text-center text-5xl font-extrabold tracking-tighter md:text-6xl xl:text-7xl">
            <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
              Dipnet,
            </span>{" "}
            <span className="bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text py-1 text-transparent">
              Where Students Connect & Create
            </span>
          </h1>

          <p className="mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
            A Space to Learn, Share & Grow!
          </p>
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          className="flex items-center justify-center gap-2 py-5"
        >
          <Button size={"lg"} asChild>
            <Link href={"/colleges"} target="_blank">
              Explore
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.75,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
          className="relative mx-auto my-4 flex w-full flex-col items-center justify-center overflow-hidden antialiased"
        ></motion.div>
      </main>
    </div>
  );
}
