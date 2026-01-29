
  # Minimalist Portfolio Website

  This is a code bundle for Minimalist Portfolio Website. The original project is available at https://www.figma.com/design/43LlTHnBbx8LBovrKbbQWR/Minimalist-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deployment to Vercel

  This project is configured for easy deployment to Vercel:

  ### Automatic Deployment (Recommended)
  1. Push your code to a GitHub repository
  2. Connect your GitHub account to Vercel
  3. Import the repository in Vercel
  4. Vercel will automatically detect the settings from `vercel.json` and deploy your site

  ### Manual Deployment
  1. Install Vercel CLI: `npm i -g vercel`
  2. Run `vercel` in the project directory
  3. Follow the prompts to deploy

  ### Build Configuration
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
  - **Framework**: Vite
  - **Node Version**: 18.x or higher

  The project includes a `vercel.json` configuration file that handles:
  - Single Page Application routing (rewrites all routes to index.html)
  - Proper build and output settings
  - Framework detection

  ## Available Scripts
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build locally
  - `npm run type-check` - Run TypeScript type checking
  