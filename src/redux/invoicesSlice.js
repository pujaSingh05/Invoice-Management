import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
      deselectInvoice : (invoiceId) => ({
    type: 'DESELECT_INVOICE',
    payload: invoiceId,
  }),
 selectInvoice : (invoiceId) => ({
    type: 'SELECT_INVOICE',
    payload: invoiceId,
  }),

  editSelectedInvoices : (changes) => ({
    type: 'EDIT_SELECTED_INVOICES',
    payload: changes,
  }),
  
  
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }
    },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
  editSelectedInvoices,
  deselectInvoice,
  selectInvoice,
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
