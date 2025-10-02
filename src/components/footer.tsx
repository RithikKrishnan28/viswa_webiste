import { Dumbbell, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold">Viswa Coaching</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Viswa Bujithan. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
