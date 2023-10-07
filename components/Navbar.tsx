import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='absolute top-0 px-10 py-5 w-full'>
      <ul className={"flex list-none flex-row items-center justify-around"} >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users/products">Products</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;