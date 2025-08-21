import { useState, useEffect } from "react";

export default function LandingText() {
  const words = ["Websites", "Apps", "Games"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I am Subham</h1>
      <h2 className="text-2xl md:text-4xl">
        I build and develop{" "}
        <span className="text-blue-400 transition-all duration-500">
          {words[index]}
        </span>
      </h2>
    </section>
  );
}
