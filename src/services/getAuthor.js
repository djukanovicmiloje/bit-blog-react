import authors from "../data/authors";

function getAuthor(authorID) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id == authorID) {
      return authors[i];
    }
  }
}
export default getAuthor;
