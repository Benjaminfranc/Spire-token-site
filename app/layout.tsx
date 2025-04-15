import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-black to-purple-950 text-white">
        <header className="w-full p-4 flex justify-between items-center border-b border-purple-800">
          <h1 className="text-2xl font-bold tracking-wider">SPIR</h1>
          <nav className="space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/white-pages">White Pages</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}