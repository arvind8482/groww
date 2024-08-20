import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      colors: {
        "primary": "#01161E",
        "secondary": "#E1F5F4",
        "secondary-dark": "#A3D4D2",
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
        'tabs-content': '446px',
        'tabs-subheading': '84px',
        'clientbox': '160px',
      },
      spacing: {
        'services': '32%',
      },
      fontSize: {
        'default-size': ['16px', {
          lineHeight: '28px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'tabs': ['24px', {
          lineHeight: '38px',
          letterSpacing: '-0.01em',
          fontWeight: '500', 
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
        'welcome-small': ['24px', {
          lineHeight: '38px',
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
      }
    },
  },
  plugins: [],
};
export default config;
