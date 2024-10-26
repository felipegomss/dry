import Hero from "@/components/hero";
import { Pricing } from "@/components/pricing";
import ScrollAnimatedIcon from "@/components/scroll-animated-icon";

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollAnimatedIcon />
      <Pricing />
    </div>
  );
}
