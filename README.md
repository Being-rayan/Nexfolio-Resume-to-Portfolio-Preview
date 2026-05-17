# AstraTrade AI

AstraTrade AI is a sector-strength monitoring and trading-assistance system for the Indian stock market. It scans major market sectors, identifies where momentum is building, ranks the strongest stocks, and sends structured alerts for manual trading decisions.

**Live Demo:** https://astratrade-ai-gold.vercel.app/  
**Source Code:** Private  
**Preview Repository:** Documentation and project showcase only

---

# Project Overview

AstraTrade AI is designed to reduce random trading, avoid emotional entries, and help users focus only on sectors and stocks showing strong confirmation through price movement, breadth, volume, and relative strength.

The system tracks around 10 major sectors, where each sector contains selected important stocks. During market hours, it continuously checks sector movement and stock-level performance to detect which sector is performing strongly on that day.

AstraTrade AI avoids giving serious early calls during opening volatility. Instead, it waits for cleaner confirmation around 9:45 AM to 10:00 AM and then starts ranking sectors based on strength.

---

# Key Features

- Sector strength monitoring
- Top sector ranking
- Stock-level momentum tracking
- Sector breadth analysis
- Volume strength check
- Relative strength comparison with Nifty
- VWAP-based confirmation
- Breakout-based confirmation
- Telegram alert system
- Dashboard preview
- Alert history
- Paper-trading support planned for future

---

# Sector Monitoring Workflow

```text
Market opens
        |
Selected sectors are scanned
        |
Stocks inside each sector are checked
        |
Sector breadth and average movement are calculated
        |
Volume and relative strength are verified
        |
Strong sectors are ranked
        |
Top stocks inside strong sectors are filtered
        |
Watch alerts are generated for manual decision-making
```

---

# How It Works

AstraTrade AI scans selected sectors and checks how many stocks are green inside each sector. For example, if 15 out of 20 stocks in a sector are positive and the sector average move is also strong, that sector may be marked as a high-strength sector.

After sector confirmation, the system ranks the top stocks inside the strongest sector. These stocks are filtered using price movement, volume activity, VWAP position, and breakout behaviour.

The alerts are designed as watch signals, not blind buy or sell signals. The user still checks the stock manually before taking any trade.

---

# Example Alert

```text
AstraTrade AI | 10:00 AM

PHARMA sector strong today

Breadth: 16/20 green
Sector move: +1.85%
Vs Nifty: Strong
Volume: Above average
Signal: BUY-WATCH, not direct buy

Top stocks:
1. SUNPHARMA ₹1692.40 +2.4%
2. CIPLA ₹1481.20 +2.1%
3. DRREDDY ₹6280.00 +1.9%

Action: Check manually before entry. Prefer stocks holding above VWAP with volume.
```

---

# Demo Workflow

1. Open the live deployment
2. View the dashboard preview
3. Check sector ranking layout
4. Review stock-level strength indicators
5. Understand the alert workflow
6. Use alerts only as manual watch signals

---

# Core System Modules

AstraTrade AI includes planned modules such as:

- Sector scanner
- Sector ranking engine
- Stock momentum tracker
- Breadth analysis system
- Volume strength checker
- VWAP confirmation logic
- Breakout confirmation logic
- Telegram alert module
- Alert history system
- Dashboard monitoring interface

---

# Tech Stack

## Backend

- Python
- FastAPI
- SQLite
- Market data API integration

## Frontend

- React
- Dashboard-based monitoring system

## Alert System

- Telegram Bot

## Deployment

- Vercel
- REST API architecture
- Environment-based API configuration

---

# Market Analysis Logic

| Stage | Responsibility |
|---|---|
| Sector Scanning | Tracks selected Indian stock market sectors |
| Stock Tracking | Checks movement of important stocks inside each sector |
| Breadth Analysis | Measures how many stocks are positive inside a sector |
| Strength Ranking | Ranks sectors based on price movement and confirmation |
| Volume Check | Verifies whether movement is supported by activity |
| Relative Strength | Compares sector performance with Nifty |
| Stock Filtering | Finds stronger stocks inside the strongest sector |
| Alert Generation | Sends structured manual watch alerts |

The system focuses on confirmation-based tracking rather than emotional or random trade selection.

---

# Validation And Testing

Planned and verified checks include:

- Sector ranking validation
- Stock movement calculation testing
- Sector breadth logic testing
- Volume strength verification
- VWAP condition testing
- Breakout confirmation testing
- Telegram alert format testing
- Dashboard preview testing
- Alert history structure testing
- Manual trading workflow validation

---

# Current Limitations

- This is not a direct buy or sell signal generator
- Market data accuracy depends on API availability and quality
- User must manually verify alerts before taking trades
- Full trading logic and backend implementation are not publicly included
- Broker-based auto-trading is not part of the current version
- Paper trading mode is planned for future development

This repository exists for recruiter showcase, workflow explanation, and technical project presentation.

---

# What This Project Demonstrates

- Full-stack application planning
- Stock market sector monitoring logic
- Real-time dashboard-based system design
- Trading-assistance workflow development
- Backend API architecture
- Alert-based automation
- Market data processing
- Confirmation-based decision support
- Risk-aware trading system thinking

---

# Screenshots

Screenshots are included in this repository to showcase the planned dashboard, sector ranking system, alert workflow, and overall interface design.

They demonstrate the direction, structure, and user experience of the AstraTrade AI platform.

---

# Future Scope

- Paper trading mode
- Daily performance reports
- Backtesting dashboard
- Better stock filtering logic
- Sector-wise trade journal
- Risk management rules
- Manual trading workflow through broker platform
- Improved alert filtering
- Historical sector performance analysis

---

# Current Status

AstraTrade AI is deployed as a public project preview and showcase platform.

The public repository is intended for project presentation, architecture overview, screenshots, and workflow explanation. The actual source code, trading logic, private backend files, API keys, and internal implementation are not included here.

---

# Author

Rayan Qamar
