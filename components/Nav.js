import Link from "next/link";
import React from "react";
import NAV_ITEMS from "../shared/ConstNavItems";

const Nav = () => {
  return (
    <div>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.route}>
            <Link href={item.route}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
