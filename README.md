# ArtView Timișoara

ArtView Timișoara is a web-based virtual guided tour for the Art Museum of Timișoara.

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

## Current status

Initial project setup.

## Open concerns

- WebXR support depends on the headset/browser.
- Apple Vision Pro may not support full WebXR VR mode in browser.
- 360° image quality depends on phone capture and stitching.
- Museum photography permissions are required.
