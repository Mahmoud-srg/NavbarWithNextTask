import Image from 'next/image'
import Link from 'next/link';
import users from './users/page';

export default function Home() {
  return (
    <main>
      <Link href="/users">
   users
      
      </Link>
      <Link href="/users/new">
   new users
      
      </Link>
    </main>
  )
}
