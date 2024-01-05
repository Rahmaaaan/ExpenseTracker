import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  addExpense,
  changeMode,
  editExpense,
  expenseSlice,
} from "../redux/features/expenses/expenseSlice";

import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";
uuid();

function Add() {
  const dispatch = useDispatch();

  const { mode, expense, totalExpense } = useSelector((state) => state.expense);

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (mode === "edit") {
      setTitle(expense.title);
      setDetail(expense.detail);
      setAmount(expense.amount);
    }
  }, [mode]);

  const onChange = (e) => {
    let target = e.target;
    if (e.target.type === "number") {
      if (e.target.value === "") {
        e.target.value = 0;
      }
      e.target.value = parseInt(e.target.value);
    }
    if (target.id === "title") {
      setTitle(target.value);
    } else if (target.id === "detail") {
      setDetail(target.value);
    } else if (target.id === "amount") {
      setAmount(parseInt(target.value));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    let newExpense = {
      title: title,
      detail: detail,
      amount: amount,
    };
    if (mode === "add") {
      newExpense.id = uuid();
      dispatch(addExpense(newExpense));
    } else if (mode === "edit") {
      newExpense.id = expense.id;
      dispatch(editExpense(newExpense));
    }

    dispatch(changeMode(null));
    setTitle("");
    setDetail("");
    setAmount("");
  };

  const handleClick = () => {
    if (mode === null) {
      dispatch(changeMode("add"));
    } else if (mode === "add" || mode === "edit") {
      setTitle("");
      setDetail("");
      setAmount("");
      dispatch(changeMode(null));
    }
  };
  return (
    <div className="w-full p-3 bg-white rounded-2xl mb-5 shadow-2xl pt-6 px-10">
      <div className="text-xl flex flex-row items-center mb-6">
        <div className="font-semibold mr-3">Total Expense : </div>
        <div className="text-red-600 font-bold">₹ {totalExpense}</div>
      </div>
      <div
        className="text-2xl text-white font-medium flex flex-row p-3 bg-teal-500 rounded-full justify-center items-center cursor-pointer hover:bg-teal-900"
        onClick={handleClick}
      >
        {mode === "add" && <AiOutlineClose />}
        {mode === null && <AiOutlinePlusCircle />}
        <h1 className="text-lg ml-2">
          {mode === null && "Add an expense"}
          {(mode === "add" || mode === "edit") && "Cancel"}
        </h1>
      </div>
      {(mode === "add" || mode === "edit") && (
        <form onSubmit={handleAdd} className="">
          <div className="mt-5">
            <div className="flex flex-col mb-2">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Expense title"
                className=" mt-2   bg-teal-100 rounded-xl px-5 py-2 shadow-lg"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="detail" className="font-semibold  ">
                Detail
              </label>
              <input
                type="text"
                id="detail"
                placeholder="Add more details"
                className="mt-2   bg-teal-100 rounded-xl px-5 py-2 shadow-lg"
                value={detail}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-row items-end justify-between">
              <div className="flex flex-col mb-2">
                <label htmlFor="amount" className="font-semibold  ">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Expense amount"
                  className="min-w-[50px] mt-2 min-h-[50px] text-lg bg-teal-100 rounded-xl px-5 shadow-lg"
                  value={amount}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="w-full flex justify-end mt-2">
              <button
                type="submit"
                className="px-10 py-3 text-lg bg-teal-100 rounded-xl shadow-md"
              >
                {mode === "add" ? "Add" : "Edit"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Add;
