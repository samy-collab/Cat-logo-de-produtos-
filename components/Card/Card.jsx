export default function Card({ produto }) {
  return (
    <article>
      <img src={produto.image} alt={produto.title} width="160" height="160" />
      <h2>{produto.title}</h2>
      <p>R$ {produto.price.toFixed(2).replace(".", ",")}</p>
    </article>
  );
}
