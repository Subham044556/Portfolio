import { useState, useEffect } from "react";

export default function LandingText() {
  const words = ["Websites", "Apps", "Games", "Tools", "UI/UX", "Software"];
  const [displayWord, setDisplayWord] = useState(words[0]);
  const devWords = [
    "<div>",
    "</div>",
    "<App />",
    "{JS}",
    "<h1>",
    "</h1>",
    "const x = 10;",
    "<button />",
  ];

  useEffect(() => {
    let shuffleTimeout;
    let pauseTimeout;
    let currentIndex = 0;

    const startShuffle = () => {
      let elapsed = 0;

      const shuffle = () => {
        // During shuffle, pick a random developer word
        const randomWord =
          devWords[Math.floor(Math.random() * devWords.length)];
        setDisplayWord(randomWord);

        elapsed += 100;
        if (elapsed < 3000) {
          // Keep shuffling every 50ms
          shuffleTimeout = setTimeout(shuffle, 50);
        } else {
          // After 3s, show the final “real” word
          currentIndex = (currentIndex + 1) % words.length;
          setDisplayWord(words[currentIndex]);

          // Pause for 3s before next shuffle
          pauseTimeout = setTimeout(startShuffle, 3000);
        }
      };

      shuffle();
    };

    startShuffle();

    return () => {
      clearTimeout(shuffleTimeout);
      clearTimeout(pauseTimeout);
    };
  }, []);

  return (
    <section className="h-screen flex flex-col items-start justify-center px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I am Subham</h1>
      <h2 className="text-2xl md:text-4xl">
        I build and develop{" "}
        <span
          className="text-blue-400 inline-block text-left font-bold"
          style={{ width: "12ch" }} // width = longest word length
        >
          {displayWord}
        </span>
      </h2>
    </section>
  );
}
