import "./PlaceholderScreen.css";

export default function PlaceholderScreen({ title, icon }) {
  return (
    <div className="placeholder-screen">
      <div className="placeholder-content">
        <div className="placeholder-icon">{icon}</div>
        <h2 className="placeholder-title">{title}</h2>
        <p className="placeholder-text">Coming soon in Dream Street</p>
      </div>
    </div>
  );
}
