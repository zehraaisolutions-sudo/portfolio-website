import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 sm:right-6 sm:bottom-6">
      <Button asChild size="icon" variant="outline" className="surface-elevated size-11 rounded-full" title="Chat on WhatsApp">
        <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp Business">
          <MessageCircle />
        </a>
      </Button>
      <Button asChild className="hidden rounded-full sm:inline-flex">
        <Link to="/contact">Start a project</Link>
      </Button>
    </div>
  );
}