// YourComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectInvoice,
  deselectInvoice,
  setBulkEditChanges,
  validateBulkEdit,
  clearBulkEditState,
} from '../redux/BulkEditReducers.js';
import InvoiceItem from './InvoiceItem.jsx';

const BuldEditComponent = () => {
  const dispatch = useDispatch();
  const selectedInvoices = useSelector((state) => state.bulkEdit.selectedInvoices);
  const bulkEditChanges = useSelector((state) => state.bulkEdit.bulkEditChanges);
  const validationErrors = useSelector((state) => state.bulkEdit.validationErrors);

  const handleSelectInvoice = (invoiceId) => {
    dispatch(selectInvoice(invoiceId));
  };

  const handleDeselectInvoice = (invoiceId) => {
    dispatch(deselectInvoice(invoiceId));
  };

  const handleSetBulkEditChanges = (changes) => {
    dispatch(setBulkEditChanges(changes));
  };

  const handleValidateBulkEdit = () => {
    dispatch(validateBulkEdit());
  };

  const handleClearBulkEditState = () => {
    dispatch(clearBulkEditState());
  };

  return (
    <div>
      {/* Your component rendering and logic */}
      <div>
        <h2>Bulk Edit</h2>
        <table>
          {/* Render invoice list with checkboxes for selection */}
          <tbody>
            {InvoiceItem.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedInvoices.includes(invoice.id)}
                    onChange={() =>
                      selectedInvoices.includes(invoice.id)
                        ? handleDeselectInvoice(invoice.id)
                        : handleSelectInvoice(invoice.id)
                    }
                  />
                </td>
                <td>{invoice.id}</td>
                {/* Render other invoice details */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Render bulk edit form */}
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={bulkEditChanges.amount || ''}
              onChange={(e) => handleSetBulkEditChanges({ amount: +e.target.value })}
            />
          </label>
          {/* Add fields for other bulk edit changes */}
        </div>

        {/* Render validation errors */}
        {validationErrors.length > 0 && (
          <div style={{ color: 'red' }}>
            <p>Validation Errors:</p>
            <ul>
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Render buttons for validation and clearing state */}
        <button onClick={handleValidateBulkEdit}>Validate Bulk Edit</button>
        <button onClick={handleClearBulkEditState}>Clear Bulk Edit State</button>
      </div>
    </div>
  );
};

export default BuldEditComponent;
