import "./StockCard.css";

export default function StockCard({ stock, variant = "card", onClick }) {
  const isPositive = stock.change >= 0;

  if (variant === "list") {
    return (
      <div className="stock-list-item" onClick={onClick}>
        <div className="stock-logo" style={{ backgroundColor: stock.color }}>
          {stock.logo}
        </div>
        <div className="stock-info">
          <div className="stock-name">{stock.name}</div>
          <div className="stock-ticker">
            {stock.ticker} • {stock.exchange}
          </div>
        </div>
        <div className="stock-price-col">
          <div className="stock-price">₹{stock.price.toLocaleString("en-IN")}</div>
          <div className={`stock-change ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? "+" : ""}
            {stock.change}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stock-card" onClick={onClick}>
      <div className="stock-card-top">
        <div className="stock-logo small" style={{ backgroundColor: stock.color }}>
          {stock.logo}
        </div>
        <div className={`stock-change-badge ${isPositive ? "positive" : "negative"}`}>
          {isPositive ? "↑" : "↓"} {Math.abs(stock.change)}%
        </div>
      </div>
      <div className="stock-card-name">{stock.name}</div>
      <div className="stock-card-price">₹{stock.price.toLocaleString("en-IN")}</div>
    </div>
  );
}
