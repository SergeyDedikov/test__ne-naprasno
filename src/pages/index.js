import { useState } from "react";
import Link from "next/link";

export default function App() {
  const tasks = ["Таня", "Маша", "Саша"];

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            <Link href="/tasks/task">
              <a>{task}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
