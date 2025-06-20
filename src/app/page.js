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
      <div id="log_page">
        <form>
          <label for = "log">Enter Log:</label>
          <input type="text" id="log"/>
        </form>
        <button>Submit</button>
      </div>
    </main>
  );
}