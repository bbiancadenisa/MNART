# MNART

MNART is a web-based virtual guided tour for the Art Museum of Timișoara.

## Main idea

The application allows users to explore museum rooms through 360° panoramas, interact with artworks, ask an AI guide questions, and complete a quiz at the end of the exhibition.

## Planned features

- 360° virtual tour in browser
- WebXR / VR mode through A-Frame
- Room-to-room navigation
- Clickable artworks
- AI chatbot for artwork explanations
- AI-generated quiz at the end

## Tech stack

### Frontend

- React
- Vite
- A-Frame
- React Router
- Axios

### Backend

- Node.js
- Express
- OpenAI API
- dotenv
- CORS

### AI integration with GEMINI


Instruction to start project

1. Frontend
cd client
npm install
npm run dev
make sure you have a file .env created where you have VITE_API_BASE_URL=http://localhost:5000
3. Backend
cd server
npm install
npm run dev
make sure you have a .env file created where you have 
PORT=5000
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY="yourkeyhere"
