import React from "react";

export const metadata = {
  title: "All About Mosquitoes — Biology, Risks, and Prevention",
  description:
    "Learn about mosquito species, life cycle, how they spread diseases, and practical prevention tips.",
};

export default function MosquitoesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold sm:text-5xl tracking-tight">
                Mosquitoes
              </h1>
              <p className="mt-4 text-base/7 text-neutral-600 dark:text-neutral-300">
                Tiny insects with an outsized impact. Explore their biology, why
                they bite, the diseases they can spread, and how to protect
                yourself.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#prevention"
                  className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90"
                >
                  Prevention tips
                </a>
                <a
                  href="#life-cycle"
                  className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  Life cycle
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Anopheles_albimanus_mosquito.jpg/640px-Anopheles_albimanus_mosquito.jpg"
                alt="Close-up photograph of a mosquito on human skin"
                className="w-full rounded-xl shadow-sm ring-1 ring-black/5"
                loading="lazy"
              />
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                Image: Anopheles albimanus (Wikimedia Commons)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Key facts</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">Only females bite</p>
            <p className="mt-1 font-medium">
              Female mosquitoes need blood meals to produce eggs; males feed on
              nectar.
            </p>
          </li>
          <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">Disease vectors</p>
            <p className="mt-1 font-medium">
              Certain species spread malaria, dengue, Zika, chikungunya, West
              Nile virus, and more.
            </p>
          </li>
          <li className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">Global distribution</p>
            <p className="mt-1 font-medium">
              Found on every continent except Antarctica, thriving in warm and
              humid environments.
            </p>
          </li>
        </ul>
      </section>

      {/* Life Cycle */}
      <section id="life-cycle" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Life cycle</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Mosquitoes undergo four stages: egg → larva → pupa → adult. Water is
          essential for the first three stages. Depending on species and
          temperature, this cycle can complete in 7–14 days.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mosquito_life_cycle_diagram-en.svg/640px-Mosquito_life_cycle_diagram-en.svg.png"
            alt="Diagram of mosquito life cycle from egg to adult"
            className="w-full rounded-xl shadow-sm ring-1 ring-black/5 bg-white"
            loading="lazy"
          />
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Eggs: Laid on or near water; some species lay raft-like clusters.
              </li>
              <li>
                Larvae: Aquatic and filter-feed microorganisms; known as
                “wrigglers.”
              </li>
              <li>
                Pupae: Non-feeding stage; develop into winged adults.
              </li>
              <li>
                Adults: Emerge to mate; females seek blood meals for eggs.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Health risks</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
          Most mosquito bites cause mild itching and swelling. However,
          mosquito-borne diseases are a major public health concern in many
          regions. Risk depends on species, local transmission, and personal
          protection.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Malaria",
              desc:
                "Caused by Plasmodium parasites transmitted by Anopheles mosquitoes.",
            },
            { title: "Dengue", desc: "Transmitted mainly by Aedes aegypti." },
            { title: "Zika", desc: "Spread by Aedes species; can cause birth defects." },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5"
            >
              <p className="text-sm text-neutral-500">{card.title}</p>
              <p className="mt-1 font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Prevention</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <ul className="space-y-2 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <li>
              Use EPA-registered repellents (e.g., DEET, picaridin, IR3535,
              oil-of-lemon-eucalyptus).
            </li>
            <li>Wear long sleeves and pants, especially at dawn and dusk.</li>
            <li>Install or repair window and door screens.</li>
            <li>Sleep under insecticide-treated bed nets where appropriate.</li>
            <li>Eliminate standing water (gutters, buckets, birdbaths).</li>
          </ul>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">Community measures</p>
            <p className="mt-1 font-medium">
              Local vector control programs may use source reduction,
              larviciding, and targeted adult control. Always follow public
              health guidance for your area.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-xl font-semibold tracking-tight">Sources</h2>
        <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400">
          <li>
            Centers for Disease Control and Prevention (CDC): Mosquitoes &
            Mosquito-borne Diseases
          </li>
          <li>World Health Organization (WHO): Vector-borne diseases</li>
          <li>Wikimedia Commons (images as credited)</li>
        </ul>
      </section>
    </main>
  );
}
