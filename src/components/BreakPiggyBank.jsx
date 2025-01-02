const BreakPiggyBank = ({ dispatch, balance }) => (
    <div className="break-piggy-bank">
      <button
        onClick={() => {
          alert(`You withdrew ₹${balance}`);
          dispatch({ type: 'BREAK_PIGGY_BANK' });
        }}
      >
        Break Piggy Bank
      </button>
    </div>
  );
  
  export default BreakPiggyBank;
  