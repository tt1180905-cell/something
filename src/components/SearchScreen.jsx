import { useState, useMemo } from "react";
import {
  stocks,
  faqs,
  trendingSearches,
  filterTabs,
} from "../data/stocks";
import StockCard from "./StockCard";
import "./SearchScreen.css";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) {
      // Show trending when no query
      return null;
    }

    let results = stocks.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.ticker.toLowerCase().includes(q) ||
        s.sector.toLowerCase().includes(q)
    );

    if (activeFilter !== "all") {
      results = results.filter((s) => s.category.includes(activeFilter));
    }

    let faqResults = [];
    if (activeFilter === "all" || activeFilter === "faqs") {
      faqResults = faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }

    return { stocks: results, faqs: faqResults };
  }, [query, activeFilter]);

  return (
    <div className="search-screen">
      <div className="search-header">
        <h1 className="app-title">Dream Street</h1>
        <div className="search-bar">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search stocks, mutual funds, ETFs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery("")}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            className={`filter-tab ${activeFilter === tab.key ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="search-content">
        {!filteredResults ? (
          <div className="trending-section">
            <h2 className="section-title">Trending Searches</h2>
            <div className="trending-grid">
              {trendingSearches.map((stock) => (
                <StockCard
                  key={stock.id}
                  stock={stock}
                  onClick={() => setQuery(stock.ticker)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="results-section">
            {filteredResults.stocks.length > 0 && (
              <>
                <h2 className="section-title">
                  Stocks & Securities ({filteredResults.stocks.length})
                </h2>
                <div className="results-list">
                  {filteredResults.stocks.map((stock) => (
                    <StockCard key={stock.id} stock={stock} variant="list" />
                  ))}
                </div>
              </>
            )}
            {filteredResults.faqs.length > 0 && (
              <>
                <h2 className="section-title">FAQs</h2>
                <div className="faq-list">
                  {filteredResults.faqs.map((faq) => (
                    <div key={faq.id} className="faq-item">
                      <div className="faq-question">{faq.question}</div>
                      <div className="faq-answer">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {filteredResults.stocks.length === 0 &&
              filteredResults.faqs.length === 0 && (
                <div className="no-results">
                  <p>No results found for "{query}"</p>
                  <p className="no-results-hint">
                    Try searching with a different term or ask Veda
                  </p>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
