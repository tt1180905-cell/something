import "./HomeScreen.css";

const indices = [
  { name: "NIFTY 50", value: "22,847.50", change: "+0.42%", positive: true },
  { name: "SENSEX", value: "75,312.80", change: "+0.38%", positive: true },
  { name: "BANK NIFTY", value: "48,230.15", change: "-0.28%", positive: false },
];

const watchlist = [
  { name: "Reliance", ticker: "RELIANCE", price: "₹2,487.35", change: "+1.24%", positive: true, logo: "R", color: "#1E88E5" },
  { name: "TCS", ticker: "TCS", price: "₹3,842.10", change: "-0.52%", positive: false, logo: "T", color: "#6A1B9A" },
  { name: "HDFC Bank", ticker: "HDFCBANK", price: "₹1,678.45", change: "+0.87%", positive: true, logo: "H", color: "#004C8F" },
  { name: "Infosys", ticker: "INFY", price: "₹1,562.80", change: "+2.15%", positive: true, logo: "I", color: "#0066B3" },
];

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <div className="home-header">
        <div>
          <p className="home-greeting">Good morning</p>
          <h1 className="home-name">Dream Street</h1>
        </div>
        <div className="home-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
      </div>

      <div className="indices-strip">
        {indices.map((idx, i) => (
          <div key={i} className="index-chip">
            <span className="index-name">{idx.name}</span>
            <span className="index-value">{idx.value}</span>
            <span className={`index-change ${idx.positive ? "positive" : "negative"}`}>
              {idx.change}
            </span>
          </div>
        ))}
      </div>

      <div className="portfolio-card">
        <div className="portfolio-label">Portfolio Value</div>
        <div className="portfolio-value">₹3,42,580.00</div>
        <div className="portfolio-change positive">+₹4,250.00 (+1.26%) today</div>
        <div className="portfolio-bar">
          <div className="portfolio-bar-fill" style={{ width: "63%" }}></div>
        </div>
        <div className="portfolio-meta">
          <span>Invested: ₹2,85,000</span>
          <span>Returns: ₹57,580</span>
        </div>
      </div>

      <div className="home-section">
        <h2 className="home-section-title">Your Watchlist</h2>
        <div className="watchlist">
          {watchlist.map((stock, i) => (
            <div key={i} className="watchlist-item">
              <div className="wl-logo" style={{ backgroundColor: stock.color }}>
                {stock.logo}
              </div>
              <div className="wl-info">
                <div className="wl-name">{stock.name}</div>
                <div className="wl-ticker">{stock.ticker}</div>
              </div>
              <div className="wl-price-col">
                <div className="wl-price">{stock.price}</div>
                <div className={`wl-change ${stock.positive ? "positive" : "negative"}`}>
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
