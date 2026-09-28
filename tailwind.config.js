/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        preachers: {
          blue: {
            DEFAULT: '#A7C3DF',
            light: '#EBF2F9',
            pale: '#F4F8FC',
            mid: '#87ABC9',
            dark: '#486E94',
            deep: '#2D4B68',
          },
          sage: {
            DEFAULT: '#D4E4CC',
            light: '#EEF5EA',
            pale: '#F6FAF3',
            mid: '#A6C29B',
            dark: '#6E8E63',
            deep: '#47633D',
          },
          cream: {
            DEFAULT: '#FAF7EF',
            light: '#FFFDF9',
            warm: '#F3EFE3',
            dark: '#E8E1D0',
          },
          ink: {
            DEFAULT: '#222D2A',
            light: '#3D4D48',
            muted: '#637570',
            subtle: '#94A39F',
          },
          coral: {
            DEFAULT: '#D96560',
            light: '#FDEEEB',
            mid: '#E88A82',
            dark: '#B84641',
          },
          border: {
            DEFAULT: '#E5DFD3',
            subtle: '#EFEAE0',
            blue: '#C5DBEE',
            sage: '#C9DEC3',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(34, 45, 42, 0.05)',
        'card': '0 10px 30px -5px rgba(34, 45, 42, 0.07), 0 4px 12px -2px rgba(34, 45, 42, 0.03)',
        'elevated': '0 20px 40px -10px rgba(34, 45, 42, 0.1), 0 8px 16px -4px rgba(34, 45, 42, 0.04)',
        'blue-glow': '0 8px 25px -4px rgba(167, 195, 223, 0.45)',
        'sage-glow': '0 8px 25px -4px rgba(212, 228, 204, 0.45)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
