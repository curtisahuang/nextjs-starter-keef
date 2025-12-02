import React from "react";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <span style={{ fontSize: "1.25rem" }}>🥭</span>
            <span>Mango Mania</span>
          </div>
          <nav className="nav">
            <a href="#varieties">Varieties</a>
            <a href="#benefits">Benefits</a>
            <a href="#recipes">Recipes</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container section hero">
        <div className="hero-card">
          <h1 className="hero-title">
            <span style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>🥭</span>
            The King of Fruits
          </h1>
          <p className="hero-sub">
            Sweet, juicy, and irresistibly vibrant — explore mango varieties, health benefits, and easy recipes.
          </p>
          <div className="hero-actions">
            <a
              href="#recipes"
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore recipes ↗
            </a>
            <a href="#varieties" className="button-outline">
              Browse varieties
            </a>
          </div>
        </div>
      </section>

      {/* Varieties */}
      <section id="varieties" className="container section">
        <h2 style={{ fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>Popular Varieties</h2>
        <div className="grid cols-3" style={{ marginTop: "1rem" }}>
          {[
            { name: "Alphonso", note: "Rich, sweet, and aromatic" },
            { name: "Kesar", note: "Saffron-hued and fragrant" },
            { name: "Haden", note: "Classic, bright, and juicy" },
          ].map((m) => (
            <div key={m.name} className="card">
              <div style={{ fontSize: "1.25rem" }}>🥭</div>
              <div className="title">{m.name}</div>
              <div className="note">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="container section">
        <h2 style={{ fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>Why Mangoes?</h2>
        <ul className="grid cols-2" style={{ marginTop: ".75rem", listStyle: "none", padding: 0 }}>
          {[
            "High in vitamins A and C",
            "Great source of antioxidants and fiber",
            "Versatile for sweet and savory dishes",
            "Refreshing and hydrating",
          ].map((b) => (
            <li key={b} className="card" style={{ fontSize: ".95rem" }}>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Recipes CTA */}
      <section id="recipes" className="container section" style={{ paddingBottom: "3.5rem" }}>
        <div className="card" style={{ padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>Quick Recipes</h3>
          <p style={{ marginTop: ".5rem", color: "var(--muted)", fontSize: ".95rem" }}>Mango lassi, salsa, and sorbet — coming soon.</p>
          <div style={{ marginTop: "1rem" }}>
            <a
              href="#"
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get recipe updates ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Mango Mania</div>
      </footer>
    </div>
  );
}
