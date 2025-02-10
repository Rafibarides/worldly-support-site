# Roadmap for Wordly Support Site

## Project Overview
This is a **front-end** React project using **Vite** for a three-page website with a homepage. The website will be deployed on **GitHub Pages**. The repository is called `wordly-support-site` and has already been cloned. The primary tasks involve setting up the React app, structuring the pages, applying styles, and deploying it.

## Technology Stack
- **React.js** (Frontend framework)
- **Vite** (Build tool)
- **GitHub Pages** (Hosting and deployment)
- **Framer Motion** (Animations)
- **NPM** (Package management)
- **Inline Styling** (For quick styling implementation)
- **Google Fonts** (Quicksand)
- **Icon Library** (For basic UI icons)

## Project Setup
1. **Clone the repository** (already done)
2. **Navigate into the project folder:**
   ```sh
   cd wordly-support-site
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start local development server:**
   ```sh
   npm run dev
   ```
5. **Deploy the website to GitHub Pages:**
   ```sh
   npm run deploy
   ```

## Pages & Content Structure
The website consists of four pages:

### 1. Home Page (`/` - Base URL)
- **Elements:**
  - Welcome character icon
  - "Welcome to Wordly" text
  - QR code for Apple Store link

### 2. About Wordly Page (`/about`)
- **Content:**
  - `<h1>About Wordly</h1>` (Placeholder for now)

### 3. Support Page (`/support`)
- **Content:**
  - `<h1>Support</h1>` (Placeholder for now)

### 4. Privacy Policy Page (`/privacy-policy`)
- **Content:**
  - `<h1>Privacy Policy</h1>` (Placeholder for now)

## Styling Guidelines
### **Global Styles**
- **Background Color:** `#7ebd64`
- **Font:**
  - Google Font: **Quicksand**
  - Import:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    ```
  - CSS:
    ```css
    .quicksand {
      font-family: "Quicksand", serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
    ```

### **Buttons**
- **Background Color:** White
- **Text Color:** `#f6ca5f`
- **Border Radius:** Slightly rounded
- **Shadow:**
  - **Color:** Light grey
  - **Full Opacity**
  - **Vertical Offset**: Slight
- **Example Inline Style:**
  ```jsx
  <button style={{ backgroundColor: 'white', color: '#f6ca5f', borderRadius: '5px', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)' }}>Click Me</button>
  ```

### **Icons**
- **Library:** Any suitable icon library (e.g., React Icons)
- **Color:** `#f6ca5f`
- **Example:**
  ```jsx
  import { FaInfoCircle } from 'react-icons/fa';
  <FaInfoCircle color="#f6ca5f" size={24} />
  ```

## Animation Guidelines
- **Framer Motion** will be used for smooth transitions and animations.
- Example:
  ```jsx
  import { motion } from 'framer-motion';
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    Welcome to Wordly
  </motion.div>
  ```

## Deployment
1. Ensure all changes are committed.
2. Run:
   ```sh
   npm run deploy
   ```
3. The website will be live on GitHub Pages.

## Next Steps & Future Enhancements
- **Replace placeholder text with real content**
- **Improve UI/UX with better layout and images**
- **Optimize performance and accessibility**
- **Enhance animations for better engagement**
- **Implement a contact form on the Support page**

This roadmap serves as the full guide for setting up, developing, and deploying the Wordly Support Site.

