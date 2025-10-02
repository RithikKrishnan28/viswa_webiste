import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dumbbell, Zap, Shield, Target } from "lucide-react";

export default function StrengthConditioningPage() {
  const strengthImage = PlaceHolderImages.find((img) => img.id === "strength");

  const benefits = [
    {
      icon: Dumbbell,
      title: "Increased Strength & Power",
      description: "Develop explosive power and raw strength applicable to any sport or life activity.",
    },
    {
      icon: Zap,
      title: "Enhanced Speed & Agility",
      description: "Improve your reaction time, acceleration, and ability to change direction quickly.",
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description: "Strengthen supporting muscles and improve mobility to build a more resilient body.",
    },
    {
      icon: Target,
      title: "Peak Performance",
      description: "Optimize your body's capabilities to perform at its best when it matters most.",
    },
  ];

  const faqs = [
    {
      question: "Who is this program for?",
      answer: "This program is for anyone looking to improve their physical performance, from competitive athletes to fitness enthusiasts. We tailor the plan to your specific goals and current fitness level."
    },
    {
      question: "What kind of equipment do I need?",
      answer: "While having access to a gym is beneficial, many exercises can be adapted for a home workout setting with minimal equipment. We can design the program based on what you have available."
    },
    {
      question: "How long does it take to see results?",
      answer: "Consistency is key. Most clients begin to feel stronger and more energetic within the first few weeks. Significant performance improvements are typically observed within 2-3 months of consistent training."
    }
  ]

  return (
    <div className="py-12">
      <div className="container px-4">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Strength & Conditioning
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Build the ultimate athletic foundation to excel in your sport and daily life.
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
            {strengthImage && (
              <Image
                src={strengthImage.imageUrl}
                alt={strengthImage.description}
                data-ai-hint={strengthImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">Why It Matters</h2>
            <p className="text-muted-foreground">
              A solid strength and conditioning base is the cornerstone of all athletic achievement. It's not just about lifting heavy weights; it's about building a smarter, more efficient, and resilient body. Our programs are scientifically designed to enhance your performance, reduce the risk of injury, and help you surpass your limits.
            </p>
            <p className="text-muted-foreground">
              Whether you're looking to gain a competitive edge or simply improve your overall health and fitness, a structured S&C program provides the roadmap to your goals.
            </p>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Program Benefits
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-headline text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
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
