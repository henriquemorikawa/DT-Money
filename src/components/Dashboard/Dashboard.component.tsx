import { Container } from "./Dashboard.styles";
import { Summary } from "../Summary";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Dashboard() {
  return (
    <Container>
      <Summary
        title="Entradas"
        img={incomeImg}
        alt="Entradas"
        value="R$1000,00"
      />
      <Summary
        title="Saídas"
        img={outcomeImg}
        alt="Saídas"
        value="- R$500,00"
      />
      <Summary title="Total" img={totalImg} alt="Total" value="R$500,00" />
    </Container>
  );
}
