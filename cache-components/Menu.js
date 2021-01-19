import Link from "next/link";
import { useEffect, useState } from "react";

const dynamicMenuPayload =[
  { href: "/with-cache", name: "Home" },
  { href: "/with-cache/about", name: "About" },
  { href: "/with-cache/contact", name: "Contact" },
]

export default function Menu() {
  const [loadingAsyncResource, setLoadingAsyncResource] = useState(true);
  const [dynamicMenu, setDynamicMenu] = useState([]);
  useEffect(() => {
    // Mock implementation of caching using localStorage
    // - When you visit the first page, it takes 2000ms for the side effects to complete.
    //   Then it stores the result in the cache
    // - After the second visit, the side effect will take 500ms to complete because of the cache.
    const cache = localStorage.getItem("loadingAsyncResource");
    if (cache) {
      setTimeout(() => {
        setLoadingAsyncResource(false);
        setDynamicMenu(dynamicMenuPayload);
      }, 500);
    } else {
      setTimeout(() => {
        setLoadingAsyncResource(false);
        localStorage.setItem("loadingAsyncResource", "true");
        setDynamicMenu(dynamicMenuPayload);
      }, 2000);
    }
  }, []);
  return (
    <header>
      {loadingAsyncResource && <span>Loading....</span>}
      {!loadingAsyncResource && (
        <nav>
          <ul>
            {dynamicMenu.map((menu) => (
              <li key={`menu-${menu.name}`}>
                <Link href={menu.href}>
                  <a>{menu.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
