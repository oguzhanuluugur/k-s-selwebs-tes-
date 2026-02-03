import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0F19',
          800: '#121829',
          700: '#1F2937'
        },
        slate: {
          1000: '#0F172A'
        },
        accent: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          soft: '#EEF2FF'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -35px rgba(15, 23, 42, 0.4)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.16), transparent 60%)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
