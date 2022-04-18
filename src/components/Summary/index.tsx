import incomeImg from '../../assets/income.svg'
import {Container} from "./styles";
import {Images} from "../../assets";


export const Summary = () => {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Images.IncomeImg} alt='Entradas'/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Images.OutcomeImg} alt='Saídas'/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={Images.TotalImg} alt='Total'/>
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  )
}