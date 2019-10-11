import axios from 'axios';

export async function getProductData(productEan: string) {
  const response = await axios.get(
    `https://cors-anywhere.herokuapp.com/http://brasilapi.simplescontrole.com.br/mercadoria/consulta/?ean=${productEan}&access-token=xncogjozyHw3D5UDgytnWdFH_Ijfw-o0`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log(response.data);
  return {
    nome: response.data.return.nome,
    preco: response.data.return.preco,
    imagem: response.data.imagem_produto,
  };
}
