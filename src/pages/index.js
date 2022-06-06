import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";

export async function getStaticProps() {
  const res = await fetch("https://sergeydedikov.github.io/data/data.json");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
}

export default function Home({ tasks }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
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
    </Layout>
  );
}
