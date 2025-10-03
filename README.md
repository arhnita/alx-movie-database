# Movie Database

A modern, responsive movie database application built with React and Tailwind CSS. Search for movies, view detailed information, and explore cinema from around the world.

## Features

- **Movie Search**: Search for movies by title using the OMDB API
- **Detailed Information**: View comprehensive details including plot, cast, ratings, and genre
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: User-friendly error messages for network issues and invalid queries

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling framework
- **OMDB API** - Movie data source
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OMDB API key (get one at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx))

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd alx-movie-database

# Install dependencies
npm install

# Create .env file and add your API key
echo "VITE_OMDB_API_KEY=your_api_key_here" > .env
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetails.jsx
│   ├── ErrorMessage.jsx
│   └── Loading.jsx
├── services/         # API integration
│   └── movieService.js
├── hooks/            # Custom React hooks
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
└── index.css         # Global styles with Tailwind
```

## Deployment

This application can be deployed to:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import project and configure build settings

### Environment Variables

Set `VITE_OMDB_API_KEY` in your hosting platform's environment variables.

## API Reference

This project uses the [OMDB API](http://www.omdbapi.com/):

- **Search**: `http://www.omdbapi.com/?apikey=[key]&s=[query]`
- **Movie Details**: `http://www.omdbapi.com/?apikey=[key]&i=[imdb_id]`

## Future Enhancements

- [ ] Favorites list with local storage
- [ ] Pagination for search results
- [ ] Sorting and filtering options
- [ ] Movie trailers integration
- [ ] Light/dark theme toggle
- [ ] Multi-language support

## License

MIT

## Author

ALX Frontend Development Capstone Project
