import { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMostrarModal(true);
  }

  function confirmarCadastro() {
    const novoProduto = {
      nome: nome,
      preco: preco,
      descricao: descricao,
    };

    console.log(novoProduto);

    setNome("");
    setPreco("");
    setDescricao("");
    setMostrarModal(false);
  }

  function cancelarCadastro() {
    setMostrarModal(false);
  }

  return (
    <main>
      <Link href="/">Voltar</Link>

      <h1>Cadastro de Produto</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Digite o nome do produto"
        />

        <Input
          label="Preço"
          type="number"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
          placeholder="Digite o preço do produto"
        />

        <div>
          <label>Descrição</label>

          <textarea
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            placeholder="Digite a descrição do produto"
          />
        </div>

        <Button type="submit">Cadastrar</Button>
      </form>

      {mostrarModal && (
        <Modal
          onConfirmar={confirmarCadastro}
          onCancelar={cancelarCadastro}
        />
      )}
    </main>
  );
}