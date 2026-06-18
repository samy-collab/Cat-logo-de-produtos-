import { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal/Modal";

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
      nome,
      preco,
      descricao,
    };

    console.log(novoProduto);

    setNome("");
    setPreco("");
    setDescricao("");
    setMostrarModal(false);
  }

  function cancelarCadastro() {
    setNome("");
    setPreco("");
    setDescricao("");
    setMostrarModal(false);
  }

  return (
    <main>
      <Link href="/">Voltar</Link>

      <h1>Cadastro de Produto</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div>
          <label>Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>

        <div>
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
        <button type="button" onClick={cancelarCadastro}>
          Cancelar
        </button>
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
