//change to metrics

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";


export default function Metrics(){
    //const [data, setData] = useState([]);

    const logData = [
    {
      date: "2025-06-21",
      sleep: 7,
      nutrition: 8,
      mood: 6,
      efficiency: 9,
      management: 7
    },
    {
      date: "2025-06-22",
      sleep: 6,
      nutrition: 7,
      mood: 8,
      efficiency: 7,
      management: 6
    },
    {
      date: "2025-06-23",
      sleep: 8,
      nutrition: 9,
      mood: 7,
      efficiency: 8,
      management: 8
    }
  ];
    // useEffect(() => {
    //   const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    //   setData(logs);
    // }, []);
    return (
        <div className="p-6">
            <h1 className="text 2x1 font-bold mb-4">Metrics</h1>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={logData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sleep" stroke="#8884d8" />
                    <Line type="monotone" dataKey="nutrition" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="mood" stroke="#ffc658" />
                    <Line type="monotone" dataKey="efficiency" stroke="#ff7300" />
                    <Line type="monotone" dataKey="management" stroke="#0088fe" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}