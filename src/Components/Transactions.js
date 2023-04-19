import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/transactions`).then((res) => {
      setTransactions(res.data);
    })}, []);

  return (
    <div >
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Bank account</th>
              <th>See bank transactions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans, index) => {
                
              return <Transaction key={index} trans={trans} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}


export default Transactions;









