"use client";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function HomePage() {
  const [currentDate, setCurrentDate] = useState("");
  const [positives, setPositives] = useState("");
  const [workOn, setWorkOn] = useState("");
  const [ratings, setRatings] = useState({
    sleep: "",
    nutrition: "",
    efficiency: "",
    management: "",
    mood: ""
  });
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    const today = new Date(); 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString(undefined, options); 
    setCurrentDate(dateStr); 
  }, []);
   const handleRatingChange = (key, value) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const logData = {
      date: currentDate,
      positives,
      workOn,
      ratings
    };
    setSubmitted(logData);
    setPositives("");
    setWorkOn("");
    setRatings({
      sleep: "",
      nutrition: "",
      efficiency: "",
      management: "",
      mood: ""
    });
    console.log("Submitted Log:", logData);
  };


  return (
    <main className="pt-24 max-w-xl mx-auto text-left">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 text-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/Grades">Grades</Link>
        <Link href="/Goals">Goals</Link>
        <Link href="/Calendar">Calendar</Link>
      </nav>

      <div id="log_page">
        <h1 id="log_date" className="text-2xl font-bold mb-4">Enter Log for {currentDate}</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="positives" className="block mb-1 font-medium">Positives:</label>
            <textarea
              id="positives"
              rows="4"
              maxLength="200"
              value={positives}
              onChange={(e) => setPositives(e.target.value)}
              placeholder="Enter your positives..."
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="workOn" className="block mb-1 font-medium">Things to work on:</label>
            <textarea
              id="workOn"
              rows="4"
              maxLength="200"
              value={workOn}
              onChange={(e) => setWorkOn(e.target.value)}
              placeholder="Enter what you need to work on..."
              className="w-full p-2 border rounded"
            />
          </div>

          <h2 className="text-xl font-semibold mb-2">Self Evaluation</h2>

          {[
            ["sleep", "Sleep"],
            ["nutrition", "Nutrition"],
            ["efficiency", "Time Efficiency"],
            ["management", "Time Management"],
            ["mood", "Mood"]
          ].map(([key, label]) => (
            <div key={key} className="mb-3">
              <label className="block mb-1 font-medium" htmlFor={key}>{label}</label>
              <input
                type="number"
                id={key}
                min="1"
                max="10"
                value={ratings[key]}
                onChange={(e) => handleRatingChange(key, e.target.value)}
                className="w-20 p-2 border rounded"
              />
            </div>
          ))}

          <h2 className="text-xl font-semibold mt-6 mb-3">Goals</h2>

          <button
            type="submit"
            id="submit"
            className="border-2 border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-8 p-4 border-t">
            <h3 className="font-bold text-lg">Stored Log</h3>
            <p><strong>Date:</strong> {submitted.date}</p>
            <p><strong>Positives:</strong> {submitted.positives}</p>
            <p><strong>Work On:</strong> {submitted.workOn}</p>
            <p><strong>Ratings:</strong></p>
            <ul className="list-disc ml-5">
              {Object.entries(submitted.ratings).map(([key, val]) => (
                <li key={key}><strong>{key}:</strong> {val}/10</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}