import { Container } from "./styles";

export function TransactionsTable() {
    return (
       <Container>
           <table>
               <thead>
                   <tr>
                       <th>Título</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Mercado</td>
                       <td className="withdraw">- R$ 100,00</td>
                       <td>Casa</td>
                       <td>13/07/2021</td>
                   </tr>
                   <tr>
                       <td>Auxílio</td>
                       <td className="deposit">R$ 1000,00</td>
                       <td>Estudos</td>
                       <td>01/07/2021</td>
                   </tr>
                   <tr>
                       <td>Curso de PHP</td>
                       <td className="withdraw">- R$ 200,00</td>
                       <td>Estudos</td>
                       <td>14/07/2021</td>
                   </tr>
                   <tr>
                       <td>Calculadora hp</td>
                       <td className="withdraw">- R$ 200,00</td>
                       <td>Estudos</td>
                       <td>14/07/2021</td>
                   </tr>
               </tbody>
           </table>
       </Container> 
    );
}