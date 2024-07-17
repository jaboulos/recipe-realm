import './globals.css'

export const metadata = {
  title: 'NextJS Recipe Realm App',
  description: 'App for recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
