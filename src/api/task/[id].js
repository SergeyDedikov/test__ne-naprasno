export default function taskHandler(req, res) {
  const {
    query: { id, title, description, date },
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ id, title, description, date });
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Метод ${method} Not Allowed`);
  }
}
