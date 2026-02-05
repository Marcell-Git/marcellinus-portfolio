# Portfolio - Marcellinus Renditta Mardyanto

This project is a Personal Portfolio Website built with a modern tech stack.

## Tech Stack

- **Frontend**: React.js (Vite), Framer Motion, standard CSS (Modules/Global)
- **Backend**: Laravel (Skeleton included)
- **Database**: MySQL (Configuration ready in Laravel)

## Project Structure

- `frontend/`: The React Single Page Application (SPA).
- `backend/`: The Laravel API application (if dynamic content is needed).

## Getting Started

### Frontend (Visually complete)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the link shown (usually `http://localhost:5173`).

### Backend (Optional)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   composer install
   ```
3. Configure `.env` for your Database.
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Serve the API:
   ```bash
   php artisan serve
   ```

## Features

- **Modern Design**: Minimalist, clean, and professional.
- **Animations**: Scroll animations, hover effects, parallax using Framer Motion.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
- **Multi-language**: Support for English and Indonesian (switchable).
- **SEO Ready**: Basic semantic HTML structure.

## Customization

- Update `src/i18n.js` to change text content.
- Update `src/components/Projects.jsx` and `Skills.jsx` to modify data.
- Replace images in `src/assets` or `public`.
