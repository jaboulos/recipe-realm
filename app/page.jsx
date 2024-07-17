import Link from 'next/link'
import Header from '../components/header/header'

export default function Home() {
  return (
    <main>
      <Header />
      <img src="/logo.png" alt="Logo" />
      <h1>Recipe Realm</h1>
      <p>🔥 Let&apos;s get cookin! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  )
}
