
import Image from "next/image";
import type { Metadata } from "next";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Feather, Move, BrainCircuit, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Badminton Coaching",
  description: "Elevate your badminton game with expert coaching on technique, footwork, and strategy. We offer personalized programs for beginners to advanced players.",
};

export default function BadmintonPage() {
  const badmintonImage = PlaceHolderImages.find((img) => img.id === "badminton");

  const focusAreas = [
    {
      icon: Feather,
      title: "Technical Skills",
      description: "Refine your strokes, from delicate net shots to powerful smashes, for maximum precision and efficiency.",
    },
    {
      icon: Move,
      title: "Footwork & Movement",
      description: "Improve your on-court agility, speed, and positioning to cover the court effortlessly.",
    },
    {
      icon: BrainCircuit,
      title: "Tactical Awareness",
      description: "Learn to read your opponent, anticipate plays, and develop winning game strategies.",
    },
    {
      icon: Trophy,
      title: "Match Preparation",
      description: "Develop the mental and physical routines to perform your best under pressure.",
    },
  ];
  
  const faqs = [
    {
      question: "Is this coaching for beginners or advanced players?",
      answer: "Both! We offer coaching for all skill levels. Programs are customized to meet the needs of each player, whether you're picking up a racket for the first time or competing in tournaments."
    },
    {
      question: "Do you offer group sessions?",
      answer: "Yes, we provide both one-on-one private coaching for personalized attention and small group sessions that are great for practicing with different players and in match-like scenarios."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Please come prepared with comfortable athletic wear, non-marking court shoes, your badminton racket, and a water bottle. Shuttlecocks will be provided."
    }
  ]

  return (
    <div className="py-12">
      <div className="container px-4">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Expert Badminton Coaching
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Elevate your game with expert guidance on technique, strategy, and on-court performance.
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
            {badmintonImage && (
              <Image
                src={badmintonImage.imageUrl}
                alt={badmintonImage.description}
                data-ai-hint={badmintonImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">Master the Court</h2>
            <p className="text-muted-foreground">
              Badminton is a game of speed, precision, and strategy. Our coaching program is designed to develop every aspect of your game. We break down complex movements into simple, repeatable actions, helping you build a strong foundation and add advanced skills to your arsenal.
            </p>
            <p className="text-muted-foreground">
              Through a combination of targeted drills, situational practice, and personalized feedback, you'll gain the confidence and ability to dominate the court.
            </p>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Badminton Coaching Focus Areas
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <area.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-headline text-xl font-semibold">{area.title}</h3>
                <p className="mt-2 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-headline text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
