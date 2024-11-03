// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        15: '15deg',
      },
      spacing: {
        '0.125': '0.03rem',
        '23': '5.75rem',
        '27.5': '6.875rem',
        '65': '16.25rem',
        '70': '17.5rem',
        '75': '18.75rem',
        '87': '21.75rem',
        '87.5': '21.875rem',
        '90': '22.5rem',
        '100': '25rem',
        '105': '26.4rem',
        '112': '28rem',
        '136': '34rem',
        '150': '37.5rem',
        evh: '65vh',
        mvh: '55vh',
        sbvh: '20vh',
        bbvh: '70vh',
        rvh: '95vh',
        cvh: '82vh',
        mw: '90rem',
      },
      borderWidth: {
        1: '1px',
      },
      keyframes: {
        swerve: {
          '0%%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        swerve: 'swerve 1s linear 0.2s',
      },
      backgroundImage: {
        listing: 'url(/listings.svg)',
      },
    },
    lineHeight: {
      xs: '16px',
      sm: '20px',
      base: '24px',
      lg: '21.6px',
      xl: '24px',
      '2xl': '28.8px',
      '3xl': '36px',
      '4xl': '43.2px',
      '5xl': '57.6px',
      '6xl': '72px',
    },
    letterSpacing: {
      xxs: '-0.025em',
      xs: '0.06px',
      sm: '0.07px',
      base: '0.08px',
      lg: '0.09px',
      xl: '0.1px',
      '2xl': '0.12px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xxxs: '8px',
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
    },
    colors: {
      primary: {
        50: '#FAF5FF',
        100: '#F3E8FF',
        200: '#E9D5FF',
        300: '#D8B4FE',
        400: '#C084FC',
        500: '#A855F7',
        600: '#9333EA',
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87',
        950: '#3B0764',
        1000: '#5B21B6',
        1050: '#3B82F6',
        1100: '#EFF6FF',
        1150: '#6393F2',
        DEFAULT: '#9333EA',
      },
      success: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
        950: '#022C22',
        DEFAULT: '#14B8A6',
      },
      secondary: {
        20: '#f9fafb80',
        50: '#F8FAFC',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        950: '#030712',
        1000: '#000000',
        1050: '#545F71',
        1100: '#101010',
        1150: '#6B7280',
        DEFAULT: '#111827',
      },
      warning: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
        950: '#451A03',
        1000: '#FEF9C3',
        1050: '#854D0E',
        1100: '#FFC403',
        DEFAULT: '#F59E0B',
      },
      danger: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
        950: '#450A0A',
        DEFAULT: '#EF4444',
      },
      neutral: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        700: '#0F766E',
        800: '#115E59',
        DEFAULT: '#CCFBF1',
      },
      default: {
        DEFAULT: '#F5F5F5',
        100: '#FFFFFF',
        300: '#E5E7EB',
      },
      normal: {
        DEFAULT: '#1F2937',
      },
      focus: {
        DEFAULT: '#0284C7',
      },
      transparent: 'transparent',
    },
  },
    plugins: [],
  }