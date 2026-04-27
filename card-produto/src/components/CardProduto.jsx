import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const Nome = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const Preco = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
`;

const Botao = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  background-color: ${(props) =>
    props.adicionado ? "#198754" : "#6c757d"};

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

function CardProduto({ nome, preco, adicionado, onToggle }) {
  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>R$ {preco.toFixed(2)}</Preco>

      <Botao adicionado={adicionado} onClick={onToggle}>
        {adicionado ? "✔ Adicionado" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}

export default CardProduto;