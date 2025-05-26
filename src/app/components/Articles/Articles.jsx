import React from "react";
import "./Articles.css";
import "../Destinations/Destinations.css";

// Article data with links
const articles = [
  {
    date: "Mai 20, 2025",
    title: "Kuidas alustada investeerimist Eestis",
    description:
      "Paljud inimesed soovivad investeerida, kuid ei tea, kust alustada. Esialgu võib investeerimine tunduda keeruline ja hirmutav, eriti kui puuduvad varasemad teadmised rahandusest või kogemused väärtpaberitega. Tegelikult on Eestis investeerimise alustamine muutunud lihtsamaks kui kunagi varem.",
    image: "/assets/article.jpg",
    link: "/kuidas-alustada-eestis",
    large: true,
  },
  {
    date: "Mai 20, 2025",
    title: "Eelarve koostamise juhend algajale",
    image: "/assets/article4.jpg",
    link: "/eelarve-koostamine",
  },
  {
    date: "Mai 20, 2025",
    title: "10 Nutikat nõuannet, kuidas säästa raha igapäevaelus",
    image: "/assets/article2.jpg",
    link: "/10-nouannet-kuidas-saasta",
  },
  {
    date: "Mai 20, 2025",
    title: "Kuidas leida tasakaal töö ja isikliku elu vahel?",
    image: "/assets/article3.jpg",
    link: "/kuidas-leida-tasakaal",
  },
];


export default function Articles() {
  return (
    <>
      <div className="articles-section">
        <h1 className="article-header">Populaarsed artiklid</h1>
        <div className="articles-grid">
          <a
            href={articles[0].link}
            className="main-article"
            rel="noopener noreferrer"
          >
            <img src={articles[0].image} alt="Main Article" />
            <div className="article-text">
              <p className="date">{articles[0].date}</p>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].description}</p>
            </div>
          </a>
          <div className="side-articles">
            {articles.slice(1).map((article, index) => (
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
