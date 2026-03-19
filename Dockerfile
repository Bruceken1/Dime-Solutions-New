FROM node:20-alpine

# ───────────────────────────────────────────────────────────────
# Build-time arguments → needed so Vite can inject these into the client bundle
# These must match the exact variable names you set in Railway
# ───────────────────────────────────────────────────────────────
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
# If you add more VITE_ variables later, declare them here too, example:
# ARG VITE_GOOGLE_MAPS_API_KEY
# ARG VITE_SOME_OTHER_PUBLIC_KEY

WORKDIR /app

# Install dependencies first (good layer caching)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Clean previous build (if any) and create production build
# → Vite will now see the ARG values as import.meta.env.VITE_...
RUN rm -rf dist && npx vite build

# Optional but very useful when debugging deploys:
# Shows whether the build actually produced files
RUN ls -la dist/ || echo "dist folder is missing!"
RUN ls -la dist/assets/ || echo "dist/assets is missing!"

# The port your Express server is listening on
EXPOSE 3000

# Start the production server
CMD ["node", "server.js"]
