const Transactions = ({ transactions }) => (
    <div className="transactions">
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.date}: ₹{t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Transactions;
  