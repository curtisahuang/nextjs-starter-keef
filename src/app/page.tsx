import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center sm:text-left">
          Bananas: Nature&apos;s Perfect Snack
        </h1>
        <p className="text-base sm:text-lg text-center sm:text-left leading-relaxed text-foreground/90">
          Bananas are delicious, nutritious, and incredibly versatile. Explore their
          history, health benefits, ripeness tips, and our favorite banana recipes.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base self-start">
          <li>Rich in potassium, vitamin B6, and fiber.</li>
          <li>Ripeness guide: green (starchy), yellow (sweet), brown-speckled (extra sweet).</li>
          <li>Store at room temperature; separate from other fruit to slow ripening.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://en.wikipedia.org/wiki/Banana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore banana facts
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[190px]"
            href="https://www.allrecipes.com/recipes/1087/fruits-and-vegetables/fruits/bananas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banana recipes
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-foreground/70">
        <span>Learn more about sustainable and fair-trade bananas.</span>
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://www.fairtrade.net/issue/bananas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fairtrade bananas →
        </a>
      </footer>
    </div>
  );
}
