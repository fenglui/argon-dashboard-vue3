module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      '0.625': '.0625rem',
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      flex: {
        4: '0 0 33.333333%',
        5: '0 0 41.666667%',
        6: '0 0 50%',
        8: '0 0 66.666667%',
        9: '0 0 75%',
      },
      gap: {
        3.25: '13px',
        4.5: '18px',
        7.5: '30px',
        8.5: '34px',
      },
      inset: {
        '8/100': '8%',
        '9/100': '9%',
        '10/100': '10%',
        18: '4.5rem',
      },
      translate: {
        '3/2': '150%',
        0.25: '0.075rem',
      },
      padding: {
        0.25: '1.5px',
        0.75: '3px',
        1.25: '5px',
        2.75: '0.6875rem',
        3.25: '13px',
        3.75: '15px',
        3.4: '16.5px',
        3.7: '0.975rem',
        4.25: '1rem',
        4.5: '1.15rem',
        4.625: '1.175rem',
        4.75: '1.2rem',
        5.5: '1.375rem',
        5.75: '1.188rem',
        6.5: '1.625rem',
        6.75: '1.438rem',
        7.5: '1.875rem',
        9.5: '38px',
        11.5: '46px',
        13: '3.25rem',
        72: '72px',
        8.5: '34px',
      },
      margin: {
        0.25: '1.5px',
        2.75: '0.6875rem',
        3.75: '15px',
        4.5: '18px',
        4.75: '19px',
        5.5: '22px',
        7.5: '30px',
        15.5: '3.875rem',
        62.5: '15.625rem',
        64: '15.5rem',
        68: '17rem',
      },
      width: {
        4.25: '1.0625rem',
        4.5: '1.125rem',
        11.75: '2.9375rem',
        12.5: '3.15rem',
        13: '3.275rem',
        13.5: '3.275rem',
        15: '3.75rem',
        15.5: '3.875rem',
        62: '15.5rem',
        62.5: '15.625rem',
        63: '15.75rem',
        68: '17rem',
        73: '17.75rem',
        73.5: '18rem',
        73.625: '18.125rem',
        73.75: '18.25rem',
        74: '18.5rem',
        76: '19rem',
        82: '20.5rem',
        84: '21rem',
        88: '22rem',
        98: '26rem',
        100: '28rem',
        '97/100': '97%',
        messBox: '100% -30px',
        '45/100': '45%',
        '15/100': '15%',
        '85/100': '85%',
      },
      maxWidth: {
        '1/3': '33.333333%',
        '5/12': '41.666667%',
        '1/2': '50%',
        '7/12': '58.333333%',
        '9/12': '75%',
        '2/3': '66.666667%',
        600: '600px',
      },
      height: {
        4.25: '1.0625rem',
        4.5: '1.125rem',
        7.5: '30px',
        9.5: '2.125rem',
        10.5: '2.625rem',
        10.75: '2.6875rem',
        11.5: '2.875rem',
        11.75: '2.937rem',
        12.5: '3.15rem',
        13: '3.275rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        19.5: '4.875rem',
        19.75: '4.9375rem',
        20.5: '5.125rem',
        21: '5.25rem',
        22: '5.5rem',
      },
      colors: {
        default: '#172b4d',
        cyan: {
          30: 'rgb(233 236 239)'
        },
        'card-title': '#32325d',
        'background-page': '#f8f9fe',
        'left-bar-yellow': '#ffd600',
        'left-bar-indigo': '#5e72e4',
        'left-bar-gray': '#939cac',
        'left-bar-red': '#f5365c',
        'left-bar-red-light': '#f56036',
        'left-bar-orange': '#fb6340',
        'left-bar-cyan': '#22d1f0',
        'left-bar-rose': '#f4645f',
        'left-bar-green': '#2dce89',
        'alert-primary': 'rgb(120 137 232)',
        'alert-secondary': '#f8fbfc',
        'alert-closebtn': '#ffffff99',
        'default-noti': '#000000f2',
        'info-noti': '#37d5f2',
        'success-noti': '#4fd69c',
        'warning-noti': '#fc7c5f',
        'danger-noti': '#f75676',
        'mess-box-text': '#8898aa',
        'mess-box-bg': '#f7fafc',
        'el-form-input': '#E8F0FE',
        'indicator-cyan': '#11cdef',
        'indicator-blue': '#1171ef',
        'indicator-slate': '#ced4da',
        'form-input': '#dee2e6',
        normal: 'rgb(82 95 127)',
        'overlay': '#00000033',
        dark: {
          DEFAULT: 'rgb(23 43 77)',
          light: 'rgb(28 52 93)',
          lighter: 'rgb(82 95 127)' //#525f7f
        },
        light: {
          DEFAULT: 'rgb(206 212 218)', //#ced4da
        },
        primary: {
          DEFAULT: 'rgb(50 50 93)',
          100: 'rgb(82 95 127)',
          200: 'rgb(136 152 170)',
          blue: {
            DEFAULT: 'rgb(94 114 228)',
            active: 'rgb(50 76 221)',
          },
          red: 'rgb(245 54 92)',
          white: 'rgba(0, 0, 0, 0.05)',
        },
        muted: {
          DEFAULT: 'rgb(136 152 170)',
        },
        secondary: {
          DEFAULT: 'rgb(247 250 252)',
          text: 'rgb(67 133 177)',
          active: 'rgb(210 227 238)',
        },
        info: {
          DEFAULT: 'rgb(17 205 239)',
          active: 'rgb(13 165 192)',
        },
        warning: {
          DEFAULT: 'rgb(251 99 64)',
          active: 'rgb(250 58 14)',
        },
        success: {
          DEFAULT: 'rgb(45 206 137)',
          active: 'rgb(36 164 109)',
        },
        danger: {
          DEFAULT: 'rgb(245 54 92)',
          active: 'rgb(236 12 56)',
        },
        'btn-default': {
          DEFAULT: 'rgb(23 43 77)',
          active: 'rgb(11 21 38)',
        },
        icon: {
          DEFAULT: 'rgb(246 249 252)',
        },
        webkit: {
          DEFAULT: '-webkit-focus-ring-color',
        },
        indigo: {
          850: "#172b4d",
          950: "#1a174d"
        },
      },
      fontSize: {
        0.625: ['0.625rem', '1.5'],
        0.65: ['0.65rem', '1.5'],
        0.8125: ['0.8125rem', '1.5'],
        0.9375: ['0.9375rem', '1.5'],
        0.95: ['0.95rem', '1.5'],
        1.0625: ['1.0625rem', '1.5'],
        1.375: ['1.375rem', '1.5'],
        1.625: ['1.625rem', '1.5'],
        1.6275: ['1.6275rem', '1.5'],
        2.1875: ['2.1875rem', '1.5'],
        2.75: ['2.75rem', '1.5'],
        3.3: ['3.3rem', '1.5'],
        90: ['90%', '1.5'],
        80: ['80%', '1.5'],
        70: ['70%', '1.5'],
        60: ['60%', '1.5'],
        sm: ['.875rem', '1.5'],
        12.8: ['12.8px', '1.5'],
        15: ['15px', '1.5'],
        17: ['17px', '1.5']
      },
      lineHeight: {
        1.7: '1.7',
        7.5: '30px',
      },
      boxShadow: {
        'light': '0 0 0 1px rgb(0 0 0 / 10%)',
        'medium': '0 0 0 1px rgb(0 0 0 / 10%), 0 4px 16px rgb(0 0 0 / 10%)',
        'card': '0 0 2rem 0 rgba(136, 152, 170, 0.15)',
        'button': '0 4px 6px rgb(50, 50, 93, 0.11), 0 1px 3px rgb(0, 0, 0 , 0.08)',
        'form-input': '0 1px 3px rgb(50, 50, 93, 0.15), 0 1px 0 rgb(0, 0, 0, 0.08)'
      },
    },
    translate: {
      0: '0px',
      'px': '1px',
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
