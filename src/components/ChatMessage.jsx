import { useState } from "react";
import { followUpQuestions } from "../data/chatResponses";
import "./ChatMessage.css";

export default function ChatMessage({ message, onFollowUp, isLast }) {
  const [feedback, setFeedback] = useState(null);
  const [copied, setCopied] = useState(false);

  if (message.type === "user") {
    return (
      <div className="message user-message">
        <div className="user-bubble">{message.text}</div>
      </div>
    );
  }

  const { response } = message;
  const followUps = followUpQuestions[response.type] || followUpQuestions.general;

  const handleCopy = () => {
    const text = extractText(response);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="message ai-message">
      <div className="ai-avatar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="url(#vedaMsgGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="vedaMsgGrad" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="ai-content">
        {renderResponse(response)}

        <div className="message-actions">
          <button
            className={`action-btn ${feedback === "up" ? "active" : ""}`}
            onClick={() => setFeedback("up")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </button>
          <button
            className={`action-btn ${feedback === "down" ? "active" : ""}`}
            onClick={() => setFeedback("down")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
            </svg>
          </button>
          <button className="action-btn" onClick={handleCopy}>
            {copied ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        {isLast && (
          <div className="follow-up-section">
            <div className="follow-up-header">Have more questions?</div>
            <div className="follow-up-list">
              {followUps.map((q, i) => (
                <button
                  key={i}
                  className="follow-up-btn"
                  onClick={() => onFollowUp(q)}
                >
                  <span>{q}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function renderResponse(response) {
  switch (response.type) {
    case "comparison":
      return <ComparisonResponse data={response.content} />;
    case "gainers":
      return <GainersResponse data={response.content} />;
    case "list":
      return <ListResponse data={response.content} />;
    case "educational":
      return <EducationalResponse data={response.content} />;
    case "analysis":
      return <AnalysisResponse data={response.content} />;
    case "general":
    default:
      return <GeneralResponse data={response.content} />;
  }
}

function ComparisonResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              {data.table.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? "metric-cell" : ""}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="response-summary">{data.summary}</p>
      {data.pros && (
        <div className="pros-section">
          {Object.entries(data.pros).map(([name, items]) => (
            <div key={name} className="pros-block">
              <h4>{name}</h4>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GainersResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      <div className="gainer-cards">
        {data.stocks.map((stock, i) => (
          <div key={i} className="gainer-card">
            <div className="gainer-logo" style={{ backgroundColor: stock.color }}>
              {stock.logo}
            </div>
            <div className="gainer-info">
              <div className="gainer-name">{stock.name}</div>
              <div className="gainer-ticker">{stock.ticker}</div>
            </div>
            <div className="gainer-price-col">
              <div className="gainer-price">{stock.price}</div>
              <div className="gainer-change positive">{stock.change}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="response-summary">{data.summary}</p>
    </div>
  );
}

function ListResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      <div className="fund-cards">
        {data.items.map((item, i) => (
          <div key={i} className="fund-card">
            <div className="fund-name">{item.name}</div>
            <div className="fund-meta">
              <span className="fund-returns">{item.returns}</span>
              <span className="fund-dot">•</span>
              <span className="fund-risk">{item.risk}</span>
              <span className="fund-dot">•</span>
              <span className="fund-sip">Min SIP: {item.minSip}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="response-summary">{data.summary}</p>
      {data.disclaimer && (
        <p className="response-disclaimer">{data.disclaimer}</p>
      )}
    </div>
  );
}

function EducationalResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      {data.sections.map((section, i) => (
        <div key={i} className="edu-section">
          <h4 className="edu-heading">{section.heading}</h4>
          <p className="edu-text">{section.text}</p>
        </div>
      ))}
    </div>
  );
}

function AnalysisResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      <div className="analysis-overview">
        <div className="overview-row">
          <span className="overview-label">Price</span>
          <span className="overview-value">{data.overview.price}</span>
        </div>
        <div className="overview-row">
          <span className="overview-label">Change</span>
          <span className="overview-value positive">{data.overview.change}</span>
        </div>
        <div className="overview-row">
          <span className="overview-label">Market Cap</span>
          <span className="overview-value">{data.overview.marketCap}</span>
        </div>
        <div className="overview-row">
          <span className="overview-label">P/E Ratio</span>
          <span className="overview-value">{data.overview.pe}</span>
        </div>
        <div className="overview-row">
          <span className="overview-label">52W High</span>
          <span className="overview-value">{data.overview.week52High}</span>
        </div>
        <div className="overview-row">
          <span className="overview-label">52W Low</span>
          <span className="overview-value">{data.overview.week52Low}</span>
        </div>
      </div>
      <div className="strengths-weaknesses">
        <div className="sw-block">
          <h4 className="sw-title strengths">Strengths</h4>
          <ul>
            {data.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="sw-block">
          <h4 className="sw-title weaknesses">Weaknesses</h4>
          <ul>
            {data.weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="response-summary verdict">{data.verdict}</p>
    </div>
  );
}

function GeneralResponse({ data }) {
  return (
    <div className="response-content">
      <h3 className="response-title">{data.title}</h3>
      <p className="response-text">{data.text}</p>
    </div>
  );
}

function extractText(response) {
  const c = response.content;
  let text = c.title + "\n\n";
  if (c.summary) text += c.summary + "\n";
  if (c.text) text += c.text + "\n";
  if (c.verdict) text += c.verdict + "\n";
  return text;
}
