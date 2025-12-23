# Glyph - Client

The frontend application for Glyph, a collaborative drawing and social platform.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Konva.js** - Canvas drawing library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

## Project Structure

```
client/
├── public/           # Static assets (logos, images)
├── src/
│   ├── components/   # React components
│   │   ├── auth/     # Authentication (Login/Register)
│   ├── services/     # API service layer - TODO
│   ├── App.jsx       # Main app component with routing
│   └── main.jsx      # Application entry point
└── vite.config.js    # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (runs on http://localhost:5173)
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Features

- 🎨 Canvas-based drawing with Konva.js
- 🔐 User authentication (login/register)
- 🌙 Dark mode support
- 📱 Responsive design
- 🎭 Real-time drawing tools

## Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The app connects to the .NET backend API. Make sure the server is running on the configured port (default: 5000).