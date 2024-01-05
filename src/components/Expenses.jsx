import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Expense from "./Expense";

function Expenses() {
  const { expenses } = useSelector((state) => state.expense);

  return (
    <div className="w-full  ">
      <div className="bg-white rounded p-5 text-2xl text-center font-medium mb-2">
        YOUR EXPENSES
      </div>
      {expenses &&
        expenses.map((expense, i) => (
          <div key={i}>
            <Expense
              title={expense.title}
              detail={expense.detail}
              amount={expense.amount}
              id={expense.id}
            />
          </div>
        ))}
    </div>
  );
}

export default Expenses;
