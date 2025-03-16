export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    orange: '#FF8C00',
    background: '#ffffff',
    text: '#333333',
  },
  fonts: {
    main: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
}

export type Theme = typeof theme; 