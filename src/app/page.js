"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date(); 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString(undefined, options); 
    setCurrentDate(dateStr); 
  }, []);

  return (
    <main>
      <nav>
        <Link href = "/">Home</Link>
        <Link href = "/Grades">Grades</Link>
        <Link href = "/Goals">Goals</Link>
        <Link href = "/Calendar">Calendar</Link>
      </nav>
      <div id="log_page">
        <h1 id="log_date">Enter Log for {currentDate}</h1>
        <form id="log-positive">
          <label>Positives:</label>
          <textarea id="log" rows="4" maxLength="200" placeholder="Enter your Positives..."></textarea>
        </form>
        <form id="log-workon">
          <label>Things to work on:</label>
          <textarea id="log" rows="4" maxLength="200" placeholder="Enter what you need to work on..."></textarea>
        </form>
        <h2>Self Evaulation</h2>
        <form>
          <label htmlFor="rating">Sleep</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />
        </form>
        <form>
          <label htmlFor="rating">Nutrition</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />
        </form>
        <form>
          <label htmlFor="rating">Time Efficency</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />
        </form>
        <form>
          <label htmlFor="rating">Time Management</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />
        </form>
        <form>
          <label htmlFor="rating">Mood</label>
          <input type="number" id="rating" name="rating" min="1" max="10" />
        </form>
        <h2>Goals</h2>
        <button>Submit</button>
      </div>
    </main>
  );
}