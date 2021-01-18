import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const [loadingAsyncResource, setLoadingAsyncResource] = useState(true);
  useEffect(() => {
    // Mock implementation of caching using localStorage
    // - When you visit the first page, it takes 2000ms for the side effects to complete.
    //   Then it stores the result in the cache
    // - After the second visit, the side effect will take 500ms to complete because of the cache. 
    const cache = localStorage.getItem("loadingAsyncResource");
    if (cache) {
      setTimeout(() => {
        setLoadingAsyncResource(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoadingAsyncResource(false);
        localStorage.setItem("loadingAsyncResource", "true")
      }, 2000);
    }
  }, []);
  return (
    <header>
      {loadingAsyncResource ? <span>Loading....</span> : <span>Loaded!</span>}
      <nav>
        <ul>
          <li>
            <Link href="/with-cache">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/with-cache/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/with-cache/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
