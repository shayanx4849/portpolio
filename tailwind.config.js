/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#020817',
        'bg-soft': '#050B18',
        'bg-secondary': '#071225',
        card: 'rgba(10, 20, 40, 0.75)',
        purple: {
          DEFAULT: '#7C3AED',
          soft: '#8B5CF6',
        },
        accent: '#38BDF8',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        line: 'rgba(99, 102, 241, 0.25)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124, 58, 237, 0.45)',
        'glow-blue': '0 0 40px -8px rgba(56, 189, 248, 0.4)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #38BDF8 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        growBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
        growBar: 'growBar 1.2s ease forwards',
      },
    },
  },
  plugins: [],
}
