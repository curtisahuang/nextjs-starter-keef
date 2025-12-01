import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-pink-50 dark:bg-pink-900/20">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start max-w-screen-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-pink-700 dark:text-pink-300 text-center sm:text-left">
          Pink Peaches are Delicious and Sweet 🍑
        </h1>
        <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 text-center sm:text-left leading-relaxed">
          We celebrate only the juiciest, sweetest <span className="font-semibold text-pink-600 dark:text-pink-300">pink peaches</span>.
          Those bland yellow ones? Not invited. Bite into velvet skin, nectar-like juice, and floral aroma—pure summer bliss.
        </p>

        <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-100 text-sm sm:text-base space-y-2">
          <li>Farm-picked at peak ripeness for maximum sweetness.</li>
          <li>Perfect for cobblers, smoothies, and fresh snacking.</li>
          <li>Always pink. Always luscious. Never yellow.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-pink-600 text-white gap-2 hover:bg-pink-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:w-auto"
            href="https://www.google.com/search?q=buy+pink+peaches"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Pink Peaches
          </a>
          <a
            className="rounded-full border border-solid border-pink-300 dark:border-pink-700 transition-colors flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 w-full sm:w-auto"
            href="https://en.wikipedia.org/wiki/Peach"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn About Pink Peaches
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-neutral-600 dark:text-neutral-300">
        <span>Only pink peaches. No yellow allowed.</span>
      </footer>
    </div>
  );
}
