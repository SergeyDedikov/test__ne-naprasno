import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://sergeydedikov.github.io/data/data.json");
  const json = await res.json();

  return {
    props: {
      tasks: json,
    },
  };
}

export default function App({ tasks }) {
  return (
    <main>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <Link href="/tasks/task">
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
