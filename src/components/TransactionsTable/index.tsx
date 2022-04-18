import {Container} from "./styles";
import {useEffect} from "react";
import {api} from "../../services/api";

export const TransactionsTable = () => {
  useEffect(() => {
   api.get('transactions')
     .then(response => console.log(response.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
        <tr>
          <th>Título</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Desenvolvimento de website</td>
          <td className='deposit'>R$12000,00</td>
          <td>Desenvolvimento</td>
          <td>14/04/2022</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className='withdraw'>R$1000,00</td>
          <td>Casa</td>
          <td>17/04/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento de website</td>
          <td className='deposit'>R$12000,00</td>
          <td>Desenvolvimento</td>
          <td>14/04/2022</td>
        </tr>
        </tbody>
      </table>
    </Container>
  )
}