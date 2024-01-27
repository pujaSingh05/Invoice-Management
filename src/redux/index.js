import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice"; // Import your other reducers
import bulkEditReducer from './BulkEditReducers';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  bulkEdit: bulkEditReducer,
});

export default rootReducer;
