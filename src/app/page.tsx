
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dumbbell, Feather, Star, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const strengthImage = PlaceHolderImages.find((img) => img.id === "strength");
  const badmintonImage = PlaceHolderImages.find(
    (img) => img.id === "badminton"
  );
  const coachImage = PlaceHolderImages.find((img) => img.id === "coach");
  const testimonialImages = {
    t1: PlaceHolderImages.find((img) => img.id === "testimonial1"),
    t2: PlaceHolderImages.find((img) => img.id === "testimonial2"),
    t3: PlaceHolderImages.find((img) => img.id === "testimonial3"),
  };

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Badminton Athlete",
      text: "Momentum Fitness's coaching transformed my game. Their attention to detail and personalized drills improved my agility and power on the court immensely.",
      avatar: testimonialImages.t1?.imageUrl,
      avatarFallback: "AJ",
      imageHint: testimonialImages.t1?.imageHint,
    },
    {
      name: "Samantha Lee",
      role: "Fitness Enthusiast",
      text: "The strength and conditioning program was a game-changer. I'm stronger, faster, and more confident than ever. Momentum Fitness is an incredible motivator!",
      avatar: testimonialImages.t2?.imageUrl,
      avatarFallback: "SL",
      imageHint: testimonialImages.t2?.imageHint,
    },
    {
      name: "Michael Chen",
      role: "Amateur Player",
      text: "I started as a complete beginner in badminton. Thanks to Momentum Fitness, I now play competitively and feel fantastic. Their coaching style is both fun and effective.",
      avatar: testimonialImages.t3?.imageUrl,
      avatarFallback: "MC",
      imageHint: testimonialImages.t3?.imageHint,
    },
  ];

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="container px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground drop-shadow-md sm:text-5xl md:text-6xl">
              Unlock Your Peak Performance
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 drop-shadow-sm md:text-xl">
              Expert Strength & Conditioning and Badminton Coaching with Momentum
              Fitness.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90">
              <Link href="#contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Your Premier Fitness & Badminton Coaches
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Momentum Fitness is a team of dedicated and certified coaches specializing in strength & conditioning and badminton. With a passion for helping athletes and individuals reach their full potential, we combine scientific principles with practical experience to create personalized training programs that deliver results.
            </p>
        </div>
      </section>
      
      <section id="meet-the-coach" className="py-16 md:py-24 bg-secondary">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-last md:order-first text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Your Coach
              </h2>
              <h3 className="font-headline text-2xl font-semibold text-primary mt-2">Viswabujithan Srinivasan</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                As a certified Strength & Conditioning coach and a passionate Badminton player, I founded Momentum Fitness to help people unlock their athletic potential. My approach is holistic, focusing not just on physical strength but also on mental resilience and strategic thinking. I believe in building strong relationships with my clients to create personalized plans that are both challenging and sustainable.
              </p>
            </div>
            <div className="relative h-96 w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl">
              {coachImage && (
                <Image
                  src={coachImage.imageUrl}
                  alt={coachImage.description}
                  data-ai-hint={coachImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Coaching Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tailored programs designed to elevate your physical and technical skills.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              {strengthImage && (
                <div className="relative h-60 w-full">
                  <Image
                    src={strengthImage.imageUrl}
                    alt={strengthImage.description}
                    data-ai-hint={strengthImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                  <Dumbbell className="h-8 w-8 text-primary" />
                  Strength & Conditioning
                </CardTitle>
                <CardDescription>
                  Build a powerful athletic foundation. Increase strength, speed, and endurance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our specialized strength and conditioning programs are designed for athletes and individuals aiming to enhance their physical capabilities. We focus on injury prevention, performance optimization, and building robust, long-term fitness.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/strength-conditioning">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              {badmintonImage && (
                <div className="relative h-60 w-full">
                  <Image
                    src={badmintonImage.imageUrl}
                    alt={badmintonImage.description}
                    data-ai-hint={badmintonImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                  <Feather className="h-8 w-8 text-primary" />
                  Badminton Coaching
                </CardTitle>
                <CardDescription>
                  Master the game, from fundamentals to advanced on-court tactics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Receive expert one-on-one or group badminton coaching to refine your technique, improve your footwork, and develop winning strategies on the court. Suitable for all skill levels from beginner to advanced.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/badminton">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-secondary py-16 md:py-24">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Success Stories from Our Clients
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Hear from clients who have transformed their performance with us.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  <Avatar>
                    {testimonial.avatar && (
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.imageHint}
                      />
                    )}
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="italic text-muted-foreground">
                    &quot;{testimonial.text}&quot;
                  </p>
                </CardContent>
                <CardFooter className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s connect. Fill out the form below, and we&apos;ll get back to you to discuss your goals and how we can achieve them together.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
