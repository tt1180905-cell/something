import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import SearchScreen from "./components/SearchScreen";
import ChatScreen from "./components/ChatScreen";
import PlaceholderScreen from "./components/PlaceholderScreen";
import BottomNav from "./components/BottomNav";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const isDarkMode = activeTab === "chat";

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "search":
        return <SearchScreen />;
      case "chat":
        return <ChatScreen />;
      case "invest":
        return (
          <PlaceholderScreen
            title="Invest"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
          />
        );
      case "profile":
        return (
          <PlaceholderScreen
            title="Profile"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
        );
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className={isDarkMode ? "app-dark" : "app-light"}>
      {renderScreen()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
