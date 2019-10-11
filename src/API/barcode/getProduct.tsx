import axios from 'axios';

export async function getDataAxios() {
  const response = await axios.get(
    'http://brasilapi.simplescontrole.com.br/mercadoria/consulta/?ean=7894650003879&access-token=xncogjozyHw3D5UDgytnWdFH_Ijfw-o0',
  );
  console.log(response.data);
}
