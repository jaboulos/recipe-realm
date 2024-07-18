import Link from 'next/link'
import classes from './page.module.css'

export default function Home() {
  return (
    // <main style={{ color: 'white', textAlign: 'center' }}>
    //   <h1>Let us begin...</h1>
    //   <div>Routes:</div>
    //   <div>
    //     <Link href="meals">Meals</Link>
    //   </div>
    //   <div>
    //     <Link href="meals/share">Share</Link>
    //   </div>
    //   <div>
    //     <Link href="meals">Community</Link>
    //   </div>
    //   <div>
    //     <Link href="meals/meal-details">Meal Details</Link>
    //   </div>
    // </main>
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>

        <div>
          <div className={classes.hero}>
            <h1>The Food Realm for those seeking next level food</h1>
            <p>Taste and share food from all realms of the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Take a look at these meals!</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Recipe Realm is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Recipe Realm is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Recipe Realm?</h2>
          <p>
            Recipe Realm is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Recipe Realm is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
