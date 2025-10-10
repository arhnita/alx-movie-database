# Quick Setup Guide

Follow these steps to get your Movie Database application up and running in minutes!

## Step 1: Get Your API Key

1. Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Choose the **FREE** plan (1,000 requests per day)
3. Enter your email address
4. Check your email for the API key activation link
5. Click the link to activate your key
6. Save your API key somewhere safe

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` in your text editor

3. Replace `your_api_key_here` with your actual OMDB API key:
   ```env
   VITE_OMDB_API_KEY=abcd1234
   ```

4. Save the file

## Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, and Tailwind CSS.

## Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at: [http://localhost:5173](http://localhost:5173)

## Step 5: Test the Application

1. Open your browser to `http://localhost:5173`
2. Type a movie name in the search bar (e.g., "Inception", "Avatar", "Titanic")
3. Press Enter or click Search
4. Click on a movie card to view details
5. Click the heart icon to add movies to your favorites
6. Toggle dark/light mode using the button in the top-right corner

## Common Issues

### "Failed to fetch movies" Error

**Cause**: API key not configured correctly

**Fix**:
- Check that `.env` file exists in the root directory
- Verify the variable name is exactly `VITE_OMDB_API_KEY`
- Make sure there are no spaces around the `=` sign
- Restart the dev server after editing `.env`

### API Key Not Working

**Cause**: API key not activated yet

**Fix**:
- Check your email for the activation link
- Click the activation link
- Wait 2-3 minutes for activation to complete
- Try searching again

### Port 5173 Already in Use

**Cause**: Another application is using port 5173

**Fix**:
- Kill the other process using that port
- Or Vite will automatically use the next available port (5174, 5175, etc.)
- Check the terminal output for the actual port being used

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Explore all features: favorites, pagination, filters, sorting
- Customize the theme and colors in [tailwind.config.js](./tailwind.config.js)
- Deploy to Netlify or Vercel (see README for instructions)

## Getting Help

If you encounter issues:

1. Check the [Troubleshooting](./README.md#troubleshooting) section in README
2. Verify your Node.js version is 14 or higher: `node --version`
3. Try deleting `node_modules` and running `npm install` again
4. Clear your browser cache and restart the dev server

---

Happy coding! 🚀
