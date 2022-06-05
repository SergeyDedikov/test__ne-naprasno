import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://sergeydedikov.github.io/data/data.json");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
}

export default function App({ tasks }) {
  return (
    <main>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
