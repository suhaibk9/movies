# 🎬 Movie Base

A modern React movie browsing application powered by the OMDB API. Search for movies, explore details, and enjoy a sleek dark-themed UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🔍 **Live Search** — Debounced autocomplete with instant suggestions
- 🎥 **Movie Details** — Full info including plot, cast, ratings & more
- 🎨 **Modern UI** — Dark theme with glassmorphism and smooth animations
- 📱 **Responsive** — Works beautifully on all screen sizes
- ⚡ **Fast** — Built with Vite for lightning-fast dev experience

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Bundler | Vite 7 |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | Vanilla CSS (custom design system) |
| API | [OMDB API](https://www.omdbapi.com/) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- OMDB API Key ([Get one free](https://www.omdbapi.com/apikey.aspx))

### Installation

```bash
# Clone the repository
git clone https://github.com/suhaibk9/movies.git
cd movies

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your OMDB API key to .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar/          # Search bar with autocomplete
├── pages/
│   ├── Home/            # Movie grid display
│   ├── MovieDetails/    # Individual movie view
│   ├── Moviecard/       # Reusable movie card component
│   └── Error/           # 404 page
├── hooks/
│   ├── useMovieList.jsx # API data fetching logic
│   └── useDebounce.js   # Debounce utility hook
├── constants/
│   └── api.js           # API endpoint configuration
└── routes/
    └── Mainroutes.jsx   # App routing setup
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |


