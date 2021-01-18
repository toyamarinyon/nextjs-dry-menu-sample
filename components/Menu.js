import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [loadingAsyncResource, setLoadingAsyncResource] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingAsyncResource(false);
    }, 2000);
  }, [])
  return (
    <header>
      {loadingAsyncResource ? <span>Loading....</span> : <span>Loaded!</span>}
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
