import Author from "../entities/author";

export default async function fetchAuthor(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author = await response.json();

  return new Author(
    author.id,
    author.name,
    author.username,
    author.email,
    author.address,
    author.phone,
    author.company
  );
}
