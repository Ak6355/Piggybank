import { useState } from 'react';

const AddMoney = ({ dispatch }) => {
  const [amount, setAmount] = useState('');

  const handleAddMoney = () => {
    if (!amount || isNaN(amount) || amount <= 0) return;
    dispatch({
      type: 'ADD_MONEY',
      payload: { amount: parseFloat(amount), date: new Date().toLocaleString() },
    });
    setAmount('');
  };

  return (
    <div className="add-money">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddMoney}>Add Money</button>
    </div>
  );
};

export default AddMoney;
