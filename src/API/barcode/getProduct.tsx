import axios from 'axios';
import { Product } from '../../Components/mol.product-modal/product-modal.component';

export async function getProductData(productEan: string): Promise<Product> {
  const response = await axios.get(
    `https://cors-anywhere.herokuapp.com/http://brasilapi.simplescontrole.com.br/mercadoria/consulta/?ean=${productEan}&access-token=xncogjozyHw3D5UDgytnWdFH_Ijfw-o0`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return {
    name: response.data.return.nome,
    img: response.data.return.imagem_produto,
    value: parseInt(response.data.return.peso_bruto, 10),
    ean: productEan,
  };
}
