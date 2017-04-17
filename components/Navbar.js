import Link from 'next/link';

const Navbar = props => {
  return (
    <ul>
      <li>
        <Link href="/">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About page</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
