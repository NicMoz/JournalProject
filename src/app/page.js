import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <nav>
        <Link href = "/">Home</Link>
        <Link href = "/Grades">Grades</Link>
        <Link href = "/Goals">Goals</Link>
        <Link href = "/Calendar">Calendar</Link>
      </nav>
      <h1>Welcome to My Page</h1>
    </main>
  );
}