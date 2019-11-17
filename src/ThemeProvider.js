import React from 'react';
import { ThemeProvider } from 'emotion-theming';

// refer to https://github.com/system-ui/theme-specification

const theme = {
    breakpoints: [
        '430px', '1007px'
    ],
    colors: {
        text: '#647477',
        background: '#ffffff',
        primary: '#318493',
        primaryLight: '#A8DDCB',
        primaryDark: '#000000',
        secondary: '#DCCFE8',
        secondaryLight: '#b4ffff',
        secondaryDark: '#4bacb8',
        muted: '#A8DDCB',
        gray: '#647477',
        highlight: 'hsla(205, 100%, 40%, 0.125)',
        crowded: '#FF677E',
        mediumCrowded: '#F5B986',
        lightCrowded: '#5ECC7C'
    },
    fonts: {
        body: 'Avenir, Nunito Sans',
        heading: 'Avenir, Nunito Sans',
        monospace: 'Avenir, Nunito Sans'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25
    },    
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
        avatar: 48,
        inputHeight: '2rem'
    },
    radii: {
        "default": 23,
        button: 15,
        circle: 99999
    },
    shadows: {
        card: '0 0 4px rgba(0, 0, 0, .125)'
    },
    // rebass variants
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'bolder',
            fontSize: 30,
            letterSpacing: "0.8px",
            textAlign: "left",
            my: 2
        },
        display: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            fontSize: [5, 6, 7]
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
        },
        subtext: {
            fontSize: 0,
            fontWeight: 'medium'
        },
        link: {
            color: "primary",
            fontWeight: 600
        },
        thumbnailHeading: {
            fontSize: "22px", 
            color: "white", 
            textAlign: "left",
            fontWeight: 600
        }
    },
    variants: {
        avatar: {
            width: 'avatar',
            height: 'avatar',
            borderRadius: 'circle'
        },
        card: {
            p: 32,
            bg: 'background',
            // boxShadow: 'card',
            borderRadius: 'default'
        },
        link: {
            color: 'primary',
            fontWeight: 600,
            textDecoration: 'none'
        },
        image: {
            borderRadius: 'default',
            height: 314,
            objectFit: 'cover',
            mb: 3
        },
        nav: {
            fontSize: 1,
            fontWeight: 'bold',
            display: 'inline-block',
            p: 2,
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus,.active': {
                color: 'primary'
            }
        },
        fullContainer: {
            bg: 'background',
            color: 'text',
            height: "100%"
        }
    },
    buttons: {
        primary: {
            fontSize: 1,
            borderRadius: 'button',
            color: 'white',
            bg: 'primary',
            fontWeight: 600,
            px: 20,
            py: 15
        },
        outline: {
            variant: 'buttons.primary',
            color: 'secondary',
            bg: 'transparent',
            boxShadow: 'none',
            // py: '6px',
            borderWidth: 1.5,
            borderColor: 'secondary',
            borderStyle: 'solid',
            boxSizing: 'content-box',
        },
        secondary: {
            variant: 'buttons.primary',
            color: 'text',
            bg: 'secondaryLight'
        }
    },
    forms: {
        input: {
            width: 'unset',
            color: 'text',
            bg: 'background',
            // borderRadius: 15,
            // borderWidth: 1.5,
            // borderColor: 'primaryLight',
            mx: [1, 3],
            px: 3,
            height: 'inputHeight',
            flex: '1 1 auto',
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body'
        }
    }
};

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
