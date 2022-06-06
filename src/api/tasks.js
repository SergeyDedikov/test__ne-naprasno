const tasks = [
  {
    id: 1,
    title: "Задача 1",
    description: "Пройти обучение",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "Задача 2",
    description: "Найти друзей",
    date: "2020-02-01",
  },
  {
    id: 3,
    title: "Задача 3",
    description: "Закончить обучение",
    date: "2020-03-01",
  },
  {
    id: 4,
    title: "Задача 4",
    description: "Найти ещё больше друзей",
    date: "2020-04-01",
  },
  {
    id: 5,
    title: "Задача 5",
    description: "Устроиться на работу мечты!",
    date: "2020-05-01",
  },
];

export default function handler(req, res) {
  res.status(200).json(tasks);
}
