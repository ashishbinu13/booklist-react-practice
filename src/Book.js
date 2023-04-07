export const Book = ({ img, author, title, index }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${index + 1}`}</span>
    </article>
  );
};