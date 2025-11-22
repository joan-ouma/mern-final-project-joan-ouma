# NutriSmart – MERN Nutrition Companion

NutriSmart is a full-stack MERN application that helps users stay on top of their nutrition goals. Users can create an account, manage pantry items, and tap an AI “Chef Gemini” assistant to turn whatever ingredients they have into personalized recipes.

- Frontend (React + Vercel): [https://mern-final-project-joan-ouma.vercel.app]
- Backend (Express + Render): [https://nutrismart-p2iq.onrender.com]
- Repository: [https://github.com/joan-ouma/mern-final-project-joan-ouma]

## Features
- Authentication – register/login flows with client-side validation.
- Personal Dashboard – overview cards, trending recipes, and quick stats.
- AI Chef – generates tailored recipes from pantry inputs, goals, and budget via Gemini or fallback mock data.
- Pantry Manager – add/remove ingredients with instant profile sync.
- Profile Editor – update avatar, goals, budgets, and bio.
- Responsive UI – modern Tailwind/Figma-inspired layout, mobile friendly.

## Tech Stack
| Layer    | Technology |
|----------|------------|
| Frontend | React 19, React Router, Axios, Tailwind CSS |
| Backend  | Node.js 18, Express 5, Mongoose 8 |
| Database | MongoDB Atlas |
| AI       | @google/generative-ai (Gemini) |
| Deploy   | Vercel (frontend), Render (backend) |

## Getting Started (Local)
1. Clone  
   `git clone https://github.com/joan-ouma/mern-final-project-joan-ouma.git && cd mern-final-project-joan-ouma`
2. Install deps  
   `npm install` (root, optional)  
   `cd client && npm install`
3. Environment  
   `client/.env` → `REACT_APP_API_URL=http://localhost:5000/api`  
   backend `.env` (see repo):  
   PORT=5000 MONGO_URI=<your-mongodb-uri> GEMINI_API_KEY=<optional> CORS_ORIGIN=http://localhost:3000

4. Run backend  
   cd ../NutriSmart # backend repo npm install npm run dev

5. Run frontend  
   cd ../client npm start

Frontend → http://localhost:3000  
Backend API → http://localhost:5000/api

## Scripts
| Location | Command         | Description                 |
|----------|-----------------|-----------------------------|
| client   | npm start       | CRA dev server              |
| client   | npm run build   | Production bundle           |
| client   | npm test        | CRA tests                   |
| backend  | npm run dev     | Nodemon API dev server      |
| backend  | npm start       | Production API server       |

## API Overview (backend repo)
| Method | Endpoint                 | Description           |
|--------|---------------------------|-----------------------|
| POST   | /api/auth/register        | Create account        |
| POST   | /api/auth/login           | Authenticate user     |
| POST   | /api/recommend            | Generate AI recipes   |
| GET    | /api/recipes/trending     | Latest saved recipes  |
| POST   | /api/user/profile         | Update profile/pantry |
| POST   | /api/user/search-history  | Persist searches      |
| GET    | /health                   | Render health check   |

Backend source & docs: https://github.com/joan-ouma/NutriSmart

## Deployment Notes
- Frontend: Vercel root = `client`, `REACT_APP_API_URL` set for Preview + Production.
- Backend: Render service with `CORS_ORIGIN` listing all allowed Vercel domains; `GEMINI_API_KEY` optional (fallback mock data).
- MongoDB: Atlas connection via `MONGO_URI`.

## Troubleshooting
- Registration errors: verify backend URL and CORS whitelist.
- “Chef is busy” / 404: redeploy frontend so `/recommend` path is used and confirm backend log.
- Network errors: inspect Render logs for CORS or env issues.

## Future Enhancements
- JWT auth & protected routes in the UI.
- Persisted sessions + refresh tokens.
- Richer AI responses (images, macro breakdowns).
- Meal planning calendar and grocery export.

## License
MIT © 2025 Joan Ouma