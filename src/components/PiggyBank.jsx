const PiggyBank = ({ balance, isBroken }) => (
    <div className="piggy-bank">
      <h2>{isBroken ? 'Piggy Bank Broken!' : `Balance: ₹${balance}`}</h2>
    </div>
  );
  
  export default PiggyBank;
  