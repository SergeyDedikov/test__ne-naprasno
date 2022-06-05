import Link from "next/link";

export default function Task() {
  return (
    <section>
      <h1>Заголовок</h1>
      <p>Описание</p>
      <data>Дата создания</data>
      <nav>
        <Link href="/">
          <a>Вернуться на главную</a>
        </Link>
      </nav>
    </section>
  );
}
