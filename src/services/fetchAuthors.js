import Author from "../entities/author";

export default async function fetchAuthors() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const authors = await response.json();

  return authors.map(
    author =>
      new Author(
        author.id,
        author.name,
        author.username,
        author.email,
        author.address,
        author.phone,
        author.company
      )
  );
}
