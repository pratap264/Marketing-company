/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using the "class" strategy
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"], // Anton font
        space: ["Space Grotesk", "sans-serif"], // Add Space Grotesk
        archivo: ["Archivo Black", "sans-serif"], // Add Archivo Black
        ubuntu: ["Ubuntu", "sans-serif"], // Ubuntu font
        rosarivo: ["Rosarivo", "cursive"], // Ubuntu font
        lato: ["Lato", "sans-serif"], // Anton font
      },
      colors: {
        primary: "#00a8cb", // Main theme color
        "primary-dark": "#007a99", // Darker version of the primary color for hover effects
        secondary: {
          100: "#E2E2D5", // Lighter shade for secondary elements
          200: "#888883", // Darker shade for secondary elements
        },
        dark: "#111111", // Dark mode background
        light: "#FFFFFF", // Light mode background
        accent: "#F97316", // Accent color for buttons or highlights
        muted: "#6B7280", // Muted text color for secondary text
        background: "#F5F5F5", // Light background color for the light mode
      },
      fontSize: {
        "36px": "36px", // Custom font size for large text
        "26px": "26px", // Custom font size for subheadings
        base: "16px", // Default base font size
        lg: "18px", // Larger text size for headings or subheaders
      },
      container: {
        center: true, // Center the container for better layout
        padding: {
          DEFAULT: "1rem", // Default padding for all screens
          sm: "2rem", // Padding for small screens
          lg: "4rem", // Padding for large screens
        },
      },
      animation: {
        reveal: "reveal 1s forwards", // Reveal animation for elements
        fadeIn: "fadeIn 0.5s ease-in-out", // Fade-in animation for elements
        "slide-left": "slide-left 15s linear infinite", // Continuous left slide animation
      },
      keyframes: {
        reveal: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // Continuous slide-left animation
        "slide-left": {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // End at the far left
        },
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x Extra large screens
      },
    },
  },
  plugins: [],
  optimizeDeps: {
    include: ['swiper'],
  },
};
