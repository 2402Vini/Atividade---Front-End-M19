import { useState } from "react";
import CardProduto from "./components/CardProduto";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const CarrinhoInfo = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #198754;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

function App() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Fone Bluetooth", preco: 199.9, adicionado: false },
    { id: 2, nome: "Teclado Mecânico", preco: 350.0, adicionado: false },
    { id: 3, nome: "Mouse sem fio", preco: 120.0, adicionado: false },
    { id: 4, nome: "PC Gamer", preco: 4500.0, adicionado: false },
  ]);

  function toggleCarrinho(id) {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, adicionado: !p.adicionado } : p
      )
    );
  }

  const totalItens = produtos.filter((p) => p.adicionado).length;

  return (
    <Wrapper>
      <Titulo>🎮 Loja Gamer</Titulo>
      <CarrinhoInfo>🛒 Itens no carrinho: {totalItens}</CarrinhoInfo>

      <Container>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionado={produto.adicionado}
            onToggle={() => toggleCarrinho(produto.id)}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

export default App;