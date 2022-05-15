import {Container} from "./styles";
import {useTransactions} from "../../hooks/useTransactions";





export const TransactionsTable = () => {
const {transactions} = useTransactions()

  console.log(transactions)
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
        {transactions.map(transaction => {
          return(
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}

              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(transaction.amount)}</td>


            </tr>
          )
        })}
        </tbody>
      </table>
    </Container>
  )
}