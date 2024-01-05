import {configureStore} from "@reduxjs/toolkit";
import expenseSlice from "./features/expenses/expenseSlice";

export const store = configureStore({
	reducer: {
		expense: expenseSlice,
	},
});
