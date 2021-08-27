import '../styles/normalize.css'
import type { AppProps } from 'next/app'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Futura-Medium";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Futura-Medium.otf") format("opentype");
  }

  @font-face {
    font-family: "Futura-Bold";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Futura-Bold.otf") format('opentype');
  }

  * {
    font-family: "Futura-Medium";
    font-size: 22px;
  }

`

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    orange: '#f5905b',
    purpleish: '#4e598c',
    pinkish: '#dd5e98',
    redish: '#C6247B'
  },
  fontSizes: {
    xl: 60,
    l: 35,
    m: 30,
    s: 25,
    text: 22
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}