import { useState } from "react";

export default function App() {
  const names = ["Таня", "Маша", "Саша"];
  const [greeting, setGreeting] = useState("Привет, МИР!");

  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
