# Huey - Color Generator

Huey is a powerful color generator with a range of features to enhance your creative projects. Whether you need a palette for your website, app, or design, Huey has you covered. With an aesthetically pleasing UI/UX, seamless color generation, and additional functionalities, Huey makes the process of color selection an enjoyable experience.

## Features

1. **Color Generation**
   - Generate a palette of 1 to 10 colors effortlessly.

2. **Gradient Collection**
   - Access a curated collection of high-quality gradients to elevate your designs.

3. **Image-Based Color Generation**
   - Extract colors from images to harmonize your palette with your visuals.

4. **Font Pairings**
   - Discover and use stylish font pairings that complement your chosen colors.

5. **Download and Share**
   - Download your color palettes as PDFs or share them with friends via generated links.

6. **Color Saving**
   - Save your favorite color palettes for future reference.

7. **Authentication**
   - Securely log in and sign up using JWT (JSON Web Token) with session and refresh tokens.

## How to Use

### Server-Side

1. Clone the repository.
2. Navigate to the server directory.
   ```
   cd server
   ```
3. Install the required packages.
   ```
   npm i
   ```
4. Set up your environment variables in a `.env` file.
   ```env
   DATABASE_URL=URL to your database
   SALT=your_bcrypt_salt
   JWT_SECRET=your_jwt_secret_key
   CORS_ORIGIN=your_frontend_URL
   ```
5. Start the server.
   ```
   npm start
   ```
   Access it at [http://localhost:3000](http://localhost:3000).

### Client-Side

1. Navigate to the client directory.
   ```
   cd client
   ```
2. Install the required packages.
   ```
   npm i
   ```
3. Set up your environment variables in a `.env` file.
   ```env
   VITE_BACKEND_URL=your_backend_URL
   ```
4. Start the frontend server.
   ```
   npm run dev
   ```
   Access it at [http://localhost:5173](http://localhost:5173).

## Technologies Used

### Client-Side
- React - Frontend framework
- Axios - HTTP client for requests
- ColorThief - Color extraction from images
- HTML2PDF - PDF generation from HTML
- jwt-decode - JWT token decoding for client-side access
- React Icons - Icons for the UI

### Server-Side
- Express - Web application framework
- Bcrypt - Password hashing for security
- Cookie-parser - Cookie parsing for authentication
- Cors - Cross-Origin Resource Sharing
- Jsonwebtoken - JWT for authentication tokens
- Prisma ORM - Database interaction
- MongoDB - Database storage

Huey simplifies color selection, making it a valuable tool for designers and developers. Explore the vast possibilities and unleash your creativity with Huey!


## Screenshots
![image](https://github.com/karthiikJR/Huey/assets/115890844/73fa4c7f-83a4-4e34-a3c1-aed5f5effcaf)

![image](https://github.com/karthiikJR/Huey/assets/115890844/baf2347e-c472-4125-8702-1c7805ee6670)

![image](https://github.com/karthiikJR/Huey/assets/115890844/9c69533d-9163-46b2-b0b0-ef918fcd7c4a)

![image](https://github.com/karthiikJR/Huey/assets/115890844/c26f4891-ba07-42e8-aa98-aeb5d0b3d09a)

![image](https://github.com/karthiikJR/Huey/assets/115890844/bcc77c3f-1599-4b82-9d72-65c4fffd57e1)

![image](https://github.com/karthiikJR/Huey/assets/115890844/1c75503e-cc14-4e27-bafa-fcc113f80757)

![image](https://github.com/karthiikJR/Huey/assets/115890844/7ad5103c-ffbd-4b9b-b718-55f3cbcacb2e)

