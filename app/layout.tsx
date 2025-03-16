import './globals.css'

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
        {children}
      </body>
    </html>
  )
} 