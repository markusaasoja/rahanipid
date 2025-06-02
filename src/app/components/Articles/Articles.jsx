import React from "react";
import "./Articles.css";
import "../Destinations/Destinations.css";

// Article data with "featured" flag
const articles = [
    {
    date: "Juuni 2, 2025",
    title: "Kuidas hinnata aktsiate väärtust?",
    description:
  "Aktsiate õige väärtuse hindamine on eduka investeerimise alus. Selles artiklis tutvustame peamisi meetodeid – alates fundamentaalanalüüsist ja DCF-ist kuni turusentimendi ja kvalitatiivsete teguriteni – ning jagame ekspertide soovitusi parimate praktikate kohta.",
    image: "/assets/vaartus.jpg",
    link: "/kuidas-hinnata-aktsiaid",
    featured: true,
    },
    {
    date: "Juuni 2, 2025",
    title: "Sektorite analüüs: Kus peituvad parimad investeerimisvõimalused?",
    description:
      "Kindlustuspaketi valimine võib tunduda keeruline, kuna turul on palju erinevaid võimalusi ja tingimusi. Oluline on mõista oma vajadusi ja riske, et leida just sulle sobiv kaitse, mis annab meelerahu igapäevaelus.",
    image: "/assets/sectors.jpg",
    link: "/sektorite-analuus",
    featured: true,
  },
    {
    date: "Mai 31, 2025",
    title: "Robo-nõustajad: kas tasub usaldada automatiseeritud investeerimist?",
    description:
      "Kindlustuspaketi valimine võib tunduda keeruline, kuna turul on palju erinevaid võimalusi ja tingimusi. Oluline on mõista oma vajadusi ja riske, et leida just sulle sobiv kaitse, mis annab meelerahu igapäevaelus.",
    image: "/assets/robots.jpg",
    link: "/robo-noustajad-eestis",
    featured: false,
  },
  {
    date: "Mai 28, 2025",
    title: "Kuidas valida sobiv kindlustuspakett?",
    description:
      "Kindlustuspaketi valimine võib tunduda keeruline, kuna turul on palju erinevaid võimalusi ja tingimusi. Oluline on mõista oma vajadusi ja riske, et leida just sulle sobiv kaitse, mis annab meelerahu igapäevaelus.",
    image: "/assets/insurance.jpg",
    link: "/kuidas-valida-kindlustuspakett",
    featured: false,
  },

  {
    date: "Mai 26, 2025",
    title: "Kuidas töötab liitintress ja miks see on investorite salarelv?",
    description:
      "Paljud inimesed soovivad investeerida, kuid ei tea, kust alustada. Esialgu võib investeerimine tunduda keeruline ja hirmutav, eriti kui puuduvad varasemad teadmised rahandusest või kogemused väärtpaberitega. Tegelikult on Eestis investeerimise alustamine muutunud lihtsamaks kui kunagi varem.",
    image: "/assets/growing.jpg",
    link: "/kuidas-tootab-liitintress",
    featured: false,
  },
  {
    date: "Mai 20, 2025",
    title: "Kuidas alustada investeerimist Eestis",
    description:
      "Paljud inimesed soovivad investeerida, kuid ei tea, kust alustada. Esialgu võib investeerimine tunduda keeruline ja hirmutav, eriti kui puuduvad varasemad teadmised rahandusest või kogemused väärtpaberitega. Tegelikult on Eestis investeerimise alustamine muutunud lihtsamaks kui kunagi varem.",
    image: "/assets/article.jpg",
    link: "/kuidas-alustada-eestis",
    large: true,
    featured: true,
  },
  {
    date: "Mai 18, 2025",
    title: "Eelarve koostamise juhend algajale",
    image: "/assets/article4.jpg",
    link: "/eelarve-koostamine",
    featured: true,
  },
  {
    date: "Mai 16, 2025",
    title: "10 Nutikat nõuannet, kuidas säästa raha igapäevaelus",
    image: "/assets/article2.jpg",
    link: "/10-nouannet-kuidas-saasta",
    featured: false,
  },
  {
    date: "Mai 7, 2025",
    title: "Kuidas leida tasakaal töö ja isikliku elu vahel?",
    image: "/assets/article3.jpg",
    link: "/kuidas-leida-tasakaal",
    featured: false,
  },
];

export default function Articles() {
  const featuredArticles = articles.filter(article => article.featured);
  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1);

  return (
    <>
      <div className="articles-section">
        <h1 className="article-header">Populaarsed artiklid</h1>
        <div className="articles-grid">
          {mainArticle && (
            <a
              href={mainArticle.link}
              className="main-article"
              rel="noopener noreferrer"
            >
              <img src={mainArticle.image} alt="Main Article" />
              <div className="article-text">
                <p className="date">{mainArticle.date}</p>
                <h3>{mainArticle.title}</h3>
                <p>{mainArticle.description}</p>
              </div>
            </a>
          )}
          <div className="side-articles">
            {sideArticles.map((article, index) => (
              <a
                href={article.link}
                className="side-article"
                key={index}
                rel="noopener noreferrer"
              >
                <img src={article.image} alt={article.title} />
                <div className="article-text">
                  <h4>{article.title}</h4>
                  <p className="date">{article.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <h1 className="article-header">Viimased Artiklid</h1>
      <div className="destinations">
        {articles.map((article, index) => (
          <a
            href={article.link}
            className="destination"
            key={index}
            rel="noopener noreferrer"
          >
            <img src={article.image} alt={article.title} />
            <div className="destination-content">
              <h2>{article.title}</h2>
              <p>{article.date}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
