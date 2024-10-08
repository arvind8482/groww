import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: { 
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'slide-out': 'slide-out 0.5s ease-out forwards',
      },
      colors: {
        "primary": "#01161E",
        "secondary": "#E1F5F4",
        "secondary-dark": "#A3D4D2",
        "secondary-dark2": "#367370",
        "light": "rgba(225, 245, 244, 0.45)",
        "light-black": "rgba(0, 0, 0, 0.16)",
        "gradient-top": "#A3D4D2",
        "gradient-bottom": "#00C6BC",
        "btn-hover":"#A3D4D2"
      }, 
      backgroundImage: {
        'list': 'url(/images/img-list.png)',
      },
      minHeight: {
        'tabs-content': '440px',
        'tabs-content-small': '360px',
        'tabs-subheading': '60px',
        'why-subheading': '40px',
        'tabs-subheading-small': '60px',
        'clientbox': '160px',
        'roadmapheading-area': '60px',
        'roadmap': '860px',
        'roadmap-large': '400px',
        'roadmap-large-mobile': '460px',
        'roadmap-app': '450px',
        'roadmap-app-small': '550px',
        'roadmap-it': '500px',
        'roadmap-it-small': '620px',
        'roadmapsmall': '800px',
        'masterclasses': '960px',
        'masterclasses-large': '700px',
        'roadmapApp': '860px',
        'roadmapApp-large': '680px',
        'caraousal': '380px',
      },
      spacing: {
        'services': '32%',
      },
      fontSize: {
        'default-size': ['14px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'roadmap-heading':  ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '600', 
        }],
        'roadmap-subheading':  ['16px', {
          lineHeight: '28px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'tabs': ['20px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: '500', 
        }],
        'servicedubheading': ['24px', {
          lineHeight: '38px',
          letterSpacing: '-0.01em',
          fontWeight: '600', 
        }],
        'contact-box-footer': ['39px', {
          lineHeight: '54px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'contact-box-footer-small': ['20px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'welcome': ['45px', {
          lineHeight: '60px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'welcome-small': ['20px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'section-headingSmall': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'section-heading': ['36px', {
          lineHeight: '48px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'section-subheading': ['24px', {
          lineHeight: '38px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'section-subheadingSmall': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
export default config;
