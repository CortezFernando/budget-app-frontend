import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function TransactionNewForm() {
    const [newTransaction, setNewTransaction] = useState({
      item_name: "",
      amount: "",
      date: "",
      from: "",
      category: "",
    });
  
    const navigate = useNavigate();
    const handleTextChange = (event) => {
      setNewTransaction({ ...newTransaction, [event.target.id]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`http://localhost:3333/transactions`, newTransaction)
        .then(() => {
          navigate("/Transactions"); //index page
        })
        .catch((e) => {
          console.log(e);
        });
    };
    return (
      <div className="New">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item_name">Item Name:</label>
          <input
            id="item_name"
            value={newTransaction.item_name}
            type="text"
            onChange={handleTextChange}
            required
          />
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type= "number"
            name="amount"
            value={newTransaction.number}
            
            onChange={handleTextChange}
          />
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleTextChange}
          />
          <label htmlFor="from">From:</label>
          <input
            id="from"
            name="from"
            type="text"
            onChange={handleTextChange}
            
          />
          <label htmlFor="category">Category:</label>
          <textarea
            id="category"
            type="text"
            name="category"
            value={newTransaction.category}
            onChange={handleTextChange}
            
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default TransactionNewForm;