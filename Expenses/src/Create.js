import { useState } from "react";

const Create = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [category, setCategory] = useState('Other');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { amount, reason, category };

    fetch('http://localhost:8000/expenses/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount Spent:</label>
        <input 
          type="text" 
          required 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Brief Description:</label>
        <textarea
          required
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
        <label>Expense Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Transportation">Transportation</option>
          <option value="Other">Other</option>
        </select>
        <button>Add Expense</button>
      </form>
    </div>
  );
}
 
export default Create;