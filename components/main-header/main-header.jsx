import { Link, Image } from '../nextjs-imports'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import { MainHeaderBackground } from './index'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="plate with food" />
          Recipe Realm
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Communities</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
