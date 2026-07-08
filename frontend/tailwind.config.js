/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      // ============================
      // Font Family
      // ============================
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      // ============================
      // Colors
      // ============================
      colors: {

        // Brand
        primary: "#C87740",
        primaryHover: "#B36A37",
        primaryLight: "#F4E0D0",

        secondary: "#2E1F26",
        secondaryLight: "#4B3740",

        // Background
        background: "#F8F6F3",
        surface: "#FFFFFF",
        card: "#FFFFFF",

        // Text
        text: "#1F1F1F",
        textSecondary: "#4B5563",
        textMuted: "#9CA3AF",

        // Border
        border: "#E5E7EB",
        divider: "#F3F4F6",

        // Status
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",

        // Resource Types
        notes: "#C87740",
        pyq: "#2563EB",
        assignment: "#A855F7",
        lab: "#14B8A6",
        book: "#F59E0B",
        presentation: "#EC4899",

        // Dashboard
        downloads: "#2563EB",
        views: "#8B5CF6",
        bookmarks: "#F97316",
        uploads: "#10B981",

        // Gray Scale
        gray50: "#F9FAFB",
        gray100: "#F3F4F6",
        gray200: "#E5E7EB",
        gray300: "#D1D5DB",
        gray400: "#9CA3AF",
        gray500: "#6B7280",
        gray600: "#4B5563",
        gray700: "#374151",
        gray800: "#1F2937",
        gray900: "#111827",
      },

      // ============================
      // Border Radius
      // ============================
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },

      // ============================
      // Box Shadow
      // ============================
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
        navbar: "0 2px 8px rgba(0,0,0,0.06)",
        button: "0 4px 12px rgba(200,119,64,0.25)",
        modal: "0 12px 32px rgba(0,0,0,0.15)",
      },

      // ============================
      // Keyframes
      // ============================
      keyframes: {

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },

      },

      // ============================
      // Animation
      // ============================
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
        slideUp: "slideUp 0.5s ease",
        scroll: "scroll 20s linear infinite",
      },

    },
  },

  plugins: [],
};
