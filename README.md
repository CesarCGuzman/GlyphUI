# Glyph 🎨

A social media platform where users express themselves exclusively through drawings. No text posts, no photos—just pure creativity through an in-app drawing tool.

## 🌟 Features

- **Drawing-Only Posts**: All content is created using the built-in canvas tool
- **User Authentication**: Secure login and registration system
- **Social Interactions**: Like, comment (with drawings!), and repost
- **Dark Mode**: System-wide dark mode with persistent preferences
- **User Profiles**: View post history and user bios

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **react-konva** for canvas drawing
- **Context API** for state management
- **Modern ES6+** syntax with arrow functions

### Backend
- **.NET 8/9** Minimal API (C#)
- **Entity Framework Core** for database operations
- **PostgreSQL** (or SQL Server) for data persistence
- **JWT Authentication** (planned)

## 📁 Project Structure

```
Glyph/
├── client/                 # React Frontend (Vite)
│   ├── public/             # Static assets (logos, favicons)
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── auth/       # Authentication components
│   │   ├── context/        # React Context providers
│   │   ├── services/       # API service layer (future)
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # .NET Backend
│   ├── Controllers/        # API controllers (future)
│   ├── Data/               # EF Core DbContext & Migrations (future)
│   ├── Models/             # C# entity models (future)
│   ├── Program.cs          # API configuration
│   ├── appsettings.json    # Configuration
│   └── server.csproj
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **.NET SDK** (v8 or higher)
- **PostgreSQL** (or SQL Server)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Glyph
   ```

2. **Setup Frontend**
   ```bash
   cd client
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd server
   dotnet restore
   ```

### Running the Application

1. **Start the Backend** (from `/server`)
   ```bash
   dotnet run
   ```
   - API will run on `http://localhost:5256`

2. **Start the Frontend** (from `/client`)
   ```bash
   npm run dev
   ```
   - App will run on `http://localhost:5173`

## 🎯 Current Status

### ✅ Completed
- [x] Project structure and monorepo setup
- [x] Basic React + Vite frontend
- [x] .NET Minimal API backend
- [x] CORS configuration
- [x] Authentication UI (Login/Register)
- [x] Dark mode with persistent preferences
- [x] Theme context for app-wide state management

### 🚧 In Progress
- [ ] Backend authentication (JWT)
- [ ] Database models and Entity Framework setup
- [ ] Drawing canvas implementation
- [ ] Post creation and storage

### 📋 Planned Features
- [ ] User profiles
- [ ] Feed/timeline
- [ ] Comments (as drawings)
- [ ] Like system (private counts)
- [ ] Repost functionality
- [ ] Drawing tools (brush, colors, eraser)
- [ ] Image export (PNG/JPG)

## 🎨 Design Philosophy

Glyph is built on the idea that creativity shouldn't be limited by text. Every interaction—posts, comments, reactions—is expressed through drawings, making it a unique social platform for artists and creative minds.

## 👥 Contributors

Cesar Guzman - Lead Developer

---

**Built with ❤️ and a lot of drawings**