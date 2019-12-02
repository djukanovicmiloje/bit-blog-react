import Author from "../entities/author";
import authors from "../data/authors";

async function fetchAuthors() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  users.forEach((user, i) => {
    const id = i;
    const name = user.name;
    const username = user.username;
    const email = user.email;
    const address = user.address;
    const phone = user.phone;
    const company = user.company;

    authors.push(
      new Author(id, name, username, email, address, phone, company)
    );
  });
}
export default fetchAuthors;
