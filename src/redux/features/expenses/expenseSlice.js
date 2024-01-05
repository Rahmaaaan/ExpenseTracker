import { createSlice } from "@reduxjs/toolkit";
// import { response } from "express";

const expenseData = JSON.parse(localStorage.getItem("expenseData"));

const initialState = expenseData
  ? expenseData
  : {
      expenses: [],
      totalExpense: 0,
      mode: null,
      expense: {},
    };

export const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
      state.totalExpense = state.totalExpense + action.payload.amount;
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      let sum = 0;
      state.expenses.forEach((e) => {
        sum += e.amount;
      });
      state.totalExpense = sum;
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        } else return expense;
      });
      let sum = 0;
      state.expenses.forEach((e) => {
        sum += e.amount;
      });
      state.totalExpense = sum;
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
      if (state.mode === null) {
        state.expense = {};
      }
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
    startEditMode: (state, action) => {
      state.expense = action.payload;
      state.mode = "edit";
      localStorage.setItem("expenseData", JSON.stringify(state));
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  editExpense,
  changeMode,
  startEditMode,
} = expenseSlice.actions;

export default expenseSlice.reducer;
