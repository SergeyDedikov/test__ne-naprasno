import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://sergeydedikov.github.io/data/data.json`);
  const tasks = await res.json();

  return {
    props: {
      task: tasks[params.id - 1],
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://sergeydedikov.github.io/data/data.json`);
  const tasks = await res.json();

  const paths = tasks.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Task({ task }) {
  return (
    <Layout>
      <Head>
        <title>{task.title}</title>
      </Head>
      <main>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <small>{task.date}</small>
        <nav>
          <Link href="/">
            <a>Вернуться к списку задач</a>
          </Link>
        </nav>
      </main>
    </Layout>
  );
}
