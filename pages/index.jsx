import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <main>
      <h1>Produtos</h1>

      {produtos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        produtos.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))
      )}
    </main>
  );
}