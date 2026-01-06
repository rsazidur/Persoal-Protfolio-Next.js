import memojImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
  <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojImage} alt="Person peeking from behind laptop" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-large">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <h1>Building Exceptional User Experiences</h1>
      <p>
        I am a passionate front-end developer dedicated to crafting beautiful and functional web applications. 
        Let's work together to bring your ideas to life!
      </p>
      <div>
        <button>
          <span>Explore My Work</span>
          <ArrowDown />
        </button>
        <button>
          <span>👋</span>
          <span>Let's Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};
