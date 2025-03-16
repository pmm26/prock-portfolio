import StyledComponentsWrapper from './components/StyledComponentsWrapper'

export const metadata = {
  title: 'Pedro Portfolio',
  description: 'Pedro\'s Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsWrapper>
          {children}
        </StyledComponentsWrapper>
      </body>
    </html>
  )
} 