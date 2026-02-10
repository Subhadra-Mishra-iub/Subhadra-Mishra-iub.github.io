# Analytics Setup Guide

## Google Analytics 4 Setup

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account name (e.g., "Subhadra Mishra Portfolio")
5. Set up a property:
   - Property name: "Portfolio Website"
   - Reporting time zone: Your timezone
   - Currency: USD
6. Fill in business information (you can use "Personal" for industry)

### Step 2: Get Your Measurement ID
1. After creating the property, you'll see a "Data Streams" section
2. Click "Add stream" → "Web"
3. Enter:
   - Website URL: `https://subhadra-mishra-iub.github.io/`
   - Stream name: "Portfolio Site"
4. Click "Create stream"
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add Measurement ID to Your Site
1. Create a `.env` file in the `personal-site` directory (if it doesn't exist)
2. Add this line:
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. For GitHub Pages deployment, you need to add it as a GitHub Secret:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `REACT_APP_GA_TRACKING_ID`
   - Value: Your Measurement ID (G-XXXXXXXXXX)
   - Click "Add secret"

4. Update `.github/workflows/github-pages.yml` to use the secret:
   ```yaml
   - name: Build
     run: npm run build
     env:
       NODE_ENV: production
       REACT_APP_GA_TRACKING_ID: ${{ secrets.REACT_APP_GA_TRACKING_ID }}
   ```

### Step 4: View Your Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports:
   - **Real-time**: See current visitors
   - **Reports → Engagement → Events**: See resume downloads
   - **Reports → Engagement → Pages and screens**: See page views

## Tracking Resume Downloads

Resume downloads are automatically tracked as events:
- **Event name**: `download`
- **Category**: `Resume`
- **Label**: `Subhadra_Mishra_Resume.pdf`

To view download counts:
1. Go to Google Analytics
2. Reports → Engagement → Events
3. Look for the "download" event

## Viewing Profile Views

Profile views are tracked as page views. To see total views:
1. Go to Google Analytics
2. Reports → Engagement → Pages and screens
3. The main page (`/`) shows your profile views

## Important Notes

- Analytics only works in production builds (not in development)
- It may take 24-48 hours for data to appear in reports
- Real-time data is available immediately
- You can see individual page views, but not who specifically viewed (privacy)
- Download events show when someone clicked the download button

