
# Laravel 11 with Vue.js 3 Integration

This repository demonstrates the integration of **Laravel** with **Vue.js 3** in a modern web application setup. The project uses Laravel for the backend and Vue.js for the frontend.

## Features
- Laravel 11 for backend logic and API routes.
- Vue.js 3 for frontend UI.
- Vue Router for client-side routing.
- Axios for API calls.
- Tailwind CSS for UI styling.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Firuz-Ahmmed/LaraveWithVuejs3.git
   cd LaraveWithVuejs3
   ```

2. **Install Backend Dependencies**:
   ```bash
   composer install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
   Generate the application key:
   ```bash
   php artisan key:generate
   ```

5. **Migrate the Database**:
   Run database migrations:
   ```bash
   php artisan migrate
   ```

6. **Run Development Servers**:
   Start the Laravel backend:
   ```bash
   php artisan serve
   ```
   Start the Vue frontend with Vite:
   ```bash
   npm run dev
   ```

## Project Structure

- `resources/js`: Contains Vue components.
- `routes/api.php`: API routes for backend communication.
- `vite.config.js`: Vite configuration for frontend bundling.

## Contributing
Feel free to contribute by submitting pull requests.

## License
This project is licensed under the MIT License.
```

This will format properly on GitHub and present all necessary information clearly.
