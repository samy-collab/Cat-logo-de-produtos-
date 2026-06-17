import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DetalhesProduto() {
  const router = useRouter();
  const { id } = router.query;

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => setProduto(dados));
  }, [id]);

  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <main>
      <Link href="/">Voltar</Link>

      <h1>{produto.title}</h1>

      <img src={produto.image} alt={produto.title} width="200" />

      <p>R$ {produto.price}</p>

      <p>{produto.description}</p>

      <p>Categoria: {produto.category}</p>
    </main>
  );
}
