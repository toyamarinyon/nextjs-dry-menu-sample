import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import unfetch from "unfetch";

export default function Menu() {
  const { data } = useSWR("/api/menu", (url) =>
    unfetch(url).then((res) => res.json())
  );
  return (
    <header>
      {!data && <span>Loading....</span>}
      {data && (
        <nav>
          <ul>
            {data.menu.map((menu) => (
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
