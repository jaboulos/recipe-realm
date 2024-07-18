import Link from 'next/link'
import logoImg from '@/assets/logo.png'

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="plate with food" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Communities</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
