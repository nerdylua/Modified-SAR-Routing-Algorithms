"use client"

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, ArrowRight } from "lucide-react";
import { SectionTitle, Paragraph } from "./about-shared-elements";

export const AboutPageConclusion = () => {
  return (
    <>
      <SectionTitle>Conclusion: The Future of Secure Networking</SectionTitle>

      <Card className="mb-12 bg-gradient-to-br from-sky-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-lg shadow-xl border-border/30">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center"><Lightbulb className="mr-3 h-7 w-7 text-yellow-400" />Pioneering Proactive Defense</CardTitle>
        </CardHeader>
        <CardContent>
          <Paragraph className="!text-lg">
            Security-Aware Routing, exemplified by algorithms like SAR-Dijkstra, represents a paradigm shift from reactive to proactive network defense. By embedding security intelligence directly into the routing fabric, organizations can build networks that are not only efficient but also inherently resilient against the ever-evolving landscape of cyber threats.
          </Paragraph>
          <Paragraph className="!text-lg">
            The integration of machine learning for dynamic risk assessment further enhances this capability, allowing for adaptive routing strategies that respond in real-time to emerging vulnerabilities and attack patterns. As network complexities grow, SAR will become an indispensable tool for safeguarding critical digital assets and ensuring robust, trustworthy communication.
          </Paragraph>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg transition-transform transform hover:scale-105">
              <Link href="/routing-algorithms">
                Explore the Simulation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </>
  );
};
