import { createSlice } from "@reduxjs/toolkit";

const BulkEditReducers = createSlice({
  name: "bulkEdit",
  initialState: {
    selectedInvoices: [],
    bulkEditChanges: {
      // Define fields for bulk edit changes (e.g., amount, description)
      amount: null,
      description: null,
    },
    validationErrors: [],
  },
  reducers: {
    selectInvoice: (state, action) => {
      state.selectedInvoices.push(action.payload);
    },
    deselectInvoice: (state, action) => {
      state.selectedInvoices = state.selectedInvoices.filter(
        (id) => id !== action.payload
      );
    },
    setBulkEditChanges: (state, action) => {
      state.bulkEditChanges = action.payload;
    },
    validateBulkEdit: (state) => {
      state.validationErrors = [];

      // Example validation logic (you can customize based on your needs)
      if (!state.bulkEditChanges.amount) {
        state.validationErrors.push("Amount is required.");
      }

      if (state.bulkEditChanges.amount < 0) {
        state.validationErrors.push("Amount must be a positive value.");
      }

      // Add more validation rules as needed
    },
    clearBulkEditState: (state) => {
      state.selectedInvoices = [];
      state.bulkEditChanges = {
        amount: null,
        description: null,
      };
      state.validationErrors = [];
    },
  },
});

export const {
  selectInvoice,
  deselectInvoice,
  setBulkEditChanges,
  validateBulkEdit,
  clearBulkEditState,
} = BulkEditReducers.actions;

export const selectBulkEditState = (state) => state.bulkEdit;

export default BulkEditReducers.reducer;
