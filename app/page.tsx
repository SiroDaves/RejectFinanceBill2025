import Intro from "@/app/homepage/intro";
import About from "@/app/homepage/about";
import Reasons from "@/app/homepage/reasons";
import Reject from "@/app/homepage/reject";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Intro />
      <About />
      <Reasons />
      <Reject />
    </div>
  );
};
