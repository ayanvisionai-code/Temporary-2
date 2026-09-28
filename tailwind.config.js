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
          // Sky-blue brand scale — dominant page palette matching logo
          blue: {
            DEFAULT: '#7FB3D3',      // core brand sky blue (CTA buttons, interactive)
            light: '#D8EAF5',        // very light sky — section alt backgrounds
            pale: '#EDF5FB',         // palest sky — section background tint
            mid: '#5A96BC',          // medium sky — hover states
            dark: '#2E6B96',         // deep sky blue — text accents, icons
            deep: '#1A4A6B',         // darkest — headings on light bg
            sky: '#B8D8EE',          // soft brand sky — badges, pills
            mist: '#E4F1FA',         // very pale sky — page bg tint
            fog: '#F0F7FC',          // almost-white sky — lightest surface
          },
          // Sage — complementary green accent (kept for warmth)
          sage: {
            DEFAULT: '#C5D9BD',
            light: '#E8F2E4',
            pale: '#F2F8EF',
            mid: '#94B589',
            dark: '#5C7C52',
            deep: '#3A5630',
          },
          // Cream — now reserved for white/near-white card surfaces
          cream: {
            DEFAULT: '#FFFFFF',      // cards, modals — pure white
            light: '#FAFCFF',        // very slightly blue-tinted white
            warm: '#F5F9FC',         // slightly warmer white surface
            dark: '#E8F0F7',         // light blue-grey for dividers / alt bg
          },
          ink: {
            DEFAULT: '#1A2D3A',      // dark navy-charcoal (updated from warm dark)
            light: '#2E4255',
            muted: '#546E84',
            subtle: '#8AA3B5',
          },
          coral: {
            DEFAULT: '#D96560',
            light: '#FDEEEB',
            mid: '#E88A82',
            dark: '#B84641',
          },
          border: {
            DEFAULT: '#C8DDED',      // soft blue-grey border
            subtle: '#DAE9F4',       // very subtle blue border
            blue: '#A7CBDF',         // medium blue border
            sage: '#B8D4B2',         // sage border
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
        'soft': '0 4px 20px -2px rgba(26, 45, 58, 0.07)',
        'card': '0 10px 30px -5px rgba(26, 45, 58, 0.10), 0 4px 12px -2px rgba(26, 45, 58, 0.05)',
        'elevated': '0 20px 40px -10px rgba(26, 45, 58, 0.14), 0 8px 16px -4px rgba(26, 45, 58, 0.06)',
        'blue-glow': '0 8px 30px -4px rgba(127, 179, 211, 0.55)',
        'sage-glow': '0 8px 25px -4px rgba(197, 217, 189, 0.45)',
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
