import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>Let us begin...</h1>
      <div>Routes:</div>
      <div>
        <Link href="meals">Meals</Link>
      </div>
      <div>
        <Link href="meals/share">Share</Link>
      </div>
      <div>
        <Link href="meals">Community</Link>
      </div>
      <div>
        <Link href="meals/meal-details">Meal Details</Link>
      </div>
    </main>
  )
}
