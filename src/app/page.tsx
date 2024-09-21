import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Designing World Systems</h1>
      <nav>
        <ul>
          <li>
            <Link href="/textbook" className="text-blue-500 hover:underline">
              View Textbook
            </Link>
          </li>
          <li>
            <Link href="/game-of-life" className="text-blue-500 hover:underline">
              Play Game of Life
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}