export const welcomeSuggestions = [
  "Compare HDFC Bank vs ICICI Bank",
  "Top Nifty 50 gainers today",
  "Best mutual funds for SIP",
  "Explain options trading basics",
  "Reliance Industries analysis",
  "What is PE ratio?",
];

const chatDatabase = {
  "compare hdfc bank vs icici bank": {
    type: "comparison",
    content: {
      title: "HDFC Bank vs ICICI Bank - Quick Comparison",
      table: {
        headers: ["Metric", "HDFC Bank", "ICICI Bank"],
        rows: [
          ["CMP", "₹1,678.45", "₹1,095.60"],
          ["Market Cap", "₹12.7L Cr", "₹7.7L Cr"],
          ["P/E Ratio", "19.8x", "17.2x"],
          ["ROE", "16.4%", "17.8%"],
          ["NPA (Gross)", "1.26%", "2.30%"],
          ["Dividend Yield", "1.1%", "0.8%"],
        ],
      },
      summary:
        "Both are top private sector banks. HDFC Bank leads in asset quality with lower NPAs, while ICICI Bank offers better ROE and cheaper valuations. For conservative investors, HDFC Bank is a safer bet. For value-seekers, ICICI Bank provides more upside potential.",
      pros: {
        "HDFC Bank": [
          "Lower NPAs and better asset quality",
          "Consistent earnings growth track record",
          "Largest private sector bank by market cap",
        ],
        "ICICI Bank": [
          "Better ROE indicating higher profitability",
          "Lower P/E means relatively cheaper valuation",
          "Strong digital banking initiatives",
        ],
      },
    },
  },

  "top nifty 50 gainers today": {
    type: "gainers",
    content: {
      title: "Top Nifty 50 Gainers Today",
      stocks: [
        {
          name: "Infosys",
          ticker: "INFY",
          price: "₹1,562.80",
          change: "+2.15%",
          logo: "I",
          color: "#0066B3",
        },
        {
          name: "Bharti Airtel",
          ticker: "BHARTIARTL",
          price: "₹1,245.70",
          change: "+1.78%",
          logo: "B",
          color: "#ED1C24",
        },
        {
          name: "SBI",
          ticker: "SBIN",
          price: "₹745.25",
          change: "+1.56%",
          logo: "S",
          color: "#22409A",
        },
        {
          name: "Reliance",
          ticker: "RELIANCE",
          price: "₹2,487.35",
          change: "+1.24%",
          logo: "R",
          color: "#1E88E5",
        },
        {
          name: "HDFC Bank",
          ticker: "HDFCBANK",
          price: "₹1,678.45",
          change: "+0.87%",
          logo: "H",
          color: "#004C8F",
        },
      ],
      summary:
        "IT and Banking sectors are leading today's rally. Infosys tops the gainers list after positive earnings guidance. Telecom and Energy sectors also showing strength.",
    },
  },

  "best mutual funds for sip": {
    type: "list",
    content: {
      title: "Best Mutual Funds for SIP in 2026",
      items: [
        {
          name: "SBI Bluechip Fund",
          returns: "14.2% (5Y CAGR)",
          risk: "Moderate",
          minSip: "₹500",
        },
        {
          name: "Axis Midcap Fund",
          returns: "18.7% (5Y CAGR)",
          risk: "Moderately High",
          minSip: "₹500",
        },
        {
          name: "Mirae Asset Large Cap",
          returns: "15.1% (5Y CAGR)",
          risk: "Moderate",
          minSip: "₹1,000",
        },
        {
          name: "Parag Parikh Flexi Cap",
          returns: "19.3% (5Y CAGR)",
          risk: "Moderately High",
          minSip: "₹1,000",
        },
      ],
      summary:
        "For long-term wealth creation via SIP, a mix of large-cap and flexi-cap funds works best. Start with ₹500–₹1,000 per month and increase gradually. Consistency matters more than timing.",
      disclaimer:
        "Past performance doesn't guarantee future returns. Please consider your risk appetite before investing.",
    },
  },

  "explain options trading basics": {
    type: "educational",
    content: {
      title: "Options Trading Basics",
      sections: [
        {
          heading: "What are Options?",
          text: "Options are derivative contracts that give you the right (but not obligation) to buy or sell an underlying asset at a predetermined price before a specific date.",
        },
        {
          heading: "Call vs Put",
          text: "A Call Option gives you the right to BUY at the strike price. A Put Option gives you the right to SELL. You pay a premium for this right.",
        },
        {
          heading: "Key Terms",
          text: "Strike Price: The agreed price • Premium: Cost of the option • Expiry: Deadline for the contract • ITM/OTM: In-the-money vs Out-of-the-money",
        },
        {
          heading: "Example",
          text: "If Nifty is at 22,800 and you buy a 23,000 Call for ₹100 premium, you profit if Nifty goes above 23,100 (strike + premium) before expiry.",
        },
      ],
    },
  },

  "reliance industries analysis": {
    type: "analysis",
    content: {
      title: "Reliance Industries - Stock Analysis",
      overview: {
        price: "₹2,487.35",
        change: "+1.24%",
        marketCap: "₹16.8L Cr",
        pe: "27.5x",
        week52High: "₹2,856.00",
        week52Low: "₹2,180.00",
      },
      strengths: [
        "Dominant player in refining, telecom (Jio), and retail",
        "Strong free cash flow generation",
        "Aggressive push into new energy and digital services",
        "Consistent revenue growth across segments",
      ],
      weaknesses: [
        "High valuations compared to sector average",
        "Debt levels remain elevated post acquisitions",
        "Petrochemical margins under pressure globally",
      ],
      verdict:
        "Reliance remains a core portfolio stock for long-term investors. The diversified business model across energy, telecom, and retail provides stability. Consider accumulating on dips below ₹2,400.",
    },
  },

  "what is pe ratio": {
    type: "educational",
    content: {
      title: "Understanding P/E Ratio",
      sections: [
        {
          heading: "What is P/E Ratio?",
          text: "Price-to-Earnings (P/E) Ratio = Current Share Price ÷ Earnings Per Share (EPS). It tells you how much investors are willing to pay per rupee of earnings.",
        },
        {
          heading: "How to interpret it",
          text: "A high P/E (>25x) means investors expect high growth. A low P/E (<15x) may indicate undervaluation or slower growth. Always compare P/E within the same sector.",
        },
        {
          heading: "Example",
          text: "If a stock trades at ₹500 and EPS is ₹25, its P/E ratio is 20x. This means you're paying ₹20 for every ₹1 of earnings.",
        },
        {
          heading: "Types",
          text: "Trailing P/E uses past 12 months earnings. Forward P/E uses estimated future earnings. Forward P/E is better for growth companies.",
        },
      ],
    },
  },
};

export function getAIResponse(query) {
  const normalizedQuery = query.toLowerCase().trim();

  // Check for exact or close matches
  for (const [key, value] of Object.entries(chatDatabase)) {
    if (
      normalizedQuery.includes(key) ||
      key.includes(normalizedQuery) ||
      similarEnough(normalizedQuery, key)
    ) {
      return value;
    }
  }

  // Default response for unmatched queries
  return {
    type: "general",
    content: {
      title: "Here's what I found",
      text: `That's a great question about "${query}". While I'm a mock prototype, in the full version of Veda, I would provide detailed analysis, real-time data, and actionable insights for your query. Try asking me about:\n\n• Comparing stocks (e.g., "Compare HDFC Bank vs ICICI Bank")\n• Market gainers/losers\n• Mutual fund recommendations\n• Stock analysis\n• Financial concepts`,
    },
  };
}

function similarEnough(a, b) {
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  let matches = 0;
  for (const word of wordsA) {
    if (wordsB.some((w) => w.includes(word) || word.includes(w))) {
      matches++;
    }
  }
  return matches >= Math.min(2, wordsA.length);
}

export const followUpQuestions = {
  comparison: [
    "Which one is better for long term?",
    "Show me their 5-year returns",
    "What about Kotak Mahindra Bank?",
  ],
  gainers: [
    "Show me today's losers too",
    "Why is Infosys up today?",
    "Should I buy any of these?",
  ],
  list: [
    "How much should I invest monthly?",
    "What about index funds?",
    "Tax implications of mutual funds?",
  ],
  educational: [
    "Give me a real example",
    "What are the risks involved?",
    "How do I get started?",
  ],
  analysis: [
    "Compare with TCS",
    "Is it good to buy now?",
    "What's the target price?",
  ],
  general: [
    "Tell me about Nifty 50",
    "Best stocks to buy today",
    "How does SIP work?",
  ],
};
