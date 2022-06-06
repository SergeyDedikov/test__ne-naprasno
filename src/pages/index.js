import Link from "next/link";
import Head from "next/head";

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
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Тестовое задание: Список задач</title>
      </Head>
      <header>
        <h1>Список задач</h1>
      </header>
      <main>
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
    </>
  );
}
