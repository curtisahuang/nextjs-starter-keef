import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-yellow-100 via-amber-100 to-orange-100 text-zinc-900">
      <main className="flex flex-col items-center gap-6 p-8 text-center">
        <div className="text-7xl sm:text-8xl" aria-hidden>
          🍍
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to Pineapple Paradise
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-prose">
          Fresh vibes, sunny style, and tropical sweetness. This is your new
          pineapple-themed homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            className="rounded-full border border-transparent transition-colors bg-zinc-900 text-white hover:bg-zinc-800 font-medium text-sm sm:text-base h-11 px-6 inline-flex items-center justify-center"
            href="https://en.wikipedia.org/wiki/Pineapple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pineapple facts
          </a>
          <a
            className="rounded-full border border-zinc-300 dark:border-zinc-200 transition-colors hover:bg-white/60 font-medium text-sm sm:text-base h-11 px-6 inline-flex items-center justify-center"
            href="https://www.google.com/search?q=buy+pineapple"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy pineapples
          </a>
        </div>
      </main>
    </div>
  );
}
