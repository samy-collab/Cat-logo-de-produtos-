import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <>
      <Header />

      <main>
        <h1>Produtos</h1>

        {produtos.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          produtos.map((produto) => (
            <Card
              key={produto.id}
              id={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
            />
          ))
        )}
      </main>

      <Footer />
    </>
  );
}