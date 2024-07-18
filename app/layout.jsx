import './globals.css'
import { MainHeader } from '../components/main-header'

export const metadata = {
  title: 'Recipe Realm',
  description: 'Meals that you can share as a community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
