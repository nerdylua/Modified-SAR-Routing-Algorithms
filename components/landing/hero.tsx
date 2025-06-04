"use client"

import { ArrowRight, ArrowRightIcon, ShieldAlert, BarChart3, Route } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/magicui/border-beam"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { cn } from "@/lib/utils"

const auroraColors = ["#38bdf8", "#0070F3", "#2dd4bf", "#7928CA", "#FF0080", "#a855f7"]

export function Hero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative mx-auto flex justify-center"
      >
        <Link
          href="#features" 
          className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>🛡️ A Framework for Enhanced Network Security</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Real-Time <span className="bg-gradient-to-r from-[#38bdf8] via-[#2dd4bf] to-[#0070F3] bg-clip-text text-transparent">Security-Aware Routing</span> and <span className="bg-gradient-to-r from-[#7928CA] via-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">Intrusion Detection</span> with Network Traffic Visualization
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:mt-8">
          This research project presents a comprehensive framework integrating dynamic security-aware routing (SAR-Dijkstra) and an interactive network traffic visualization dashboard. The system aims to enhance network security through proactive threat identification and optimized data routing based on real-time security assessments.
        </p>
        
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
          <Link href="/routing-algorithms"> 
            <ShimmerButton 
              className="flex items-center gap-2 px-6 py-3 text-base sm:text-lg"
              background="linear-gradient(to right, #0070F3, #38bdf8)"
            >
              <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
                View Routing Algorithms
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
            </ShimmerButton>
          </Link>
          <Link href="/about"> 
            <div className="block dark:hidden">
              <ShimmerButton 
                className="flex items-center gap-2 px-6 py-3 text-base sm:text-lg"
                background="linear-gradient(to right, #7928CA, #FF0080)"
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
                  About the Project
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
              </ShimmerButton>
            </div>
            <div className="hidden dark:block">
              <ShimmerButton 
                className="flex items-center gap-2 px-6 py-3 text-base sm:text-lg"
                background="linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white/90">
                  View Research Paper
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
              </ShimmerButton>
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative mx-auto mt-16 sm:mt-20 lg:mt-24"
      >
        <div className="relative rounded-2xl bg-gradient-to-b from-muted/50 to-muted p-2 ring-1 ring-foreground/10 backdrop-blur-3xl dark:from-muted/30 dark:to-background/80">
          <Image
            src="/nv-topology.png" 
            alt="Conceptual representation of the network security framework dashboard"
            width={1200}
            height={800}
            quality={100}
            className="rounded-xl shadow-2xl ring-1 ring-foreground/10 transition-all duration-300"
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </motion.div>
    </section>
  )
} 