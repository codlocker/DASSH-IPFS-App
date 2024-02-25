// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/showcase" legacyBehavior>
            <a>Showcase</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;