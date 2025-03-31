import React, { useState } from 'react';

const FeePaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    paymentMethod: 'credit',
    amount: 12000,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankName: '',
    accountNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (paymentData.paymentMethod === 'credit') {
      if (!paymentData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!paymentData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!paymentData.cvv) newErrors.cvv = 'CVV is required';
    } else if (paymentData.paymentMethod === 'upi') {
      if (!paymentData.upiId) newErrors.upiId = 'UPI ID is required';
    } else {
      if (!paymentData.bankName) newErrors.bankName = 'Bank name is required';
      if (!paymentData.accountNumber) newErrors.accountNumber = 'Account number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate payment processing
      setTimeout(() => {
        setReceiptId(Math.random().toString(36).substring(2, 10).toUpperCase());
        setPaymentSuccess(true);
      }, 2000);
    }
  };

  const downloadReceipt = () => {
    alert(`Receipt ${receiptId} downloaded successfully!`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Fee Payment</h1>
      
      {!paymentSuccess ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Payment Summary</h2>
            <div className="flex justify-between">
              <span>Room Fee:</span>
              <span>₹{paymentData.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Amount:</span>
              <span>₹{paymentData.amount.toLocaleString()}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentData.paymentMethod === 'credit'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-200"
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-200"
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={paymentData.paymentMethod === 'netbanking'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-200"
                  />
                  <span>Net Banking</span>
                </label>
              </div>
            </div>

            {paymentData.paymentMethod === 'credit' && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cardNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.expiryDate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.cvv ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </>
            )}

            {paymentData.paymentMethod === 'upi' && (
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="upiId">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={paymentData.upiId}
                  onChange={handleChange}
                  placeholder="yourname@upi"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.upiId ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                />
                {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
              </div>
            )}

            {paymentData.paymentMethod === 'netbanking' && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="bankName">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={paymentData.bankName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.bankName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  />
                  {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="accountNumber">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={paymentData.accountNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.accountNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                  />
                  {errors.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>}
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Pay ₹{paymentData.amount.toLocaleString()}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-green-500 text-5xl mb-4">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your payment of ₹{paymentData.amount.toLocaleString()} has been processed successfully.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold mb-2">Receipt Details</h3>
            <p><strong>Transaction ID:</strong> {receiptId}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Amount:</strong> ₹{paymentData.amount.toLocaleString()}</p>
            <p><strong>Payment Method:</strong> {paymentData.paymentMethod === 'credit' ? 'Credit Card' : paymentData.paymentMethod === 'upi' ? 'UPI' : 'Net Banking'}</p>
          </div>

          <button
            onClick={downloadReceipt}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            <i className="fas fa-download mr-2"></i> Download Receipt
          </button>
        </div>
      )}
    </div>
  );
};

export default FeePaymentPage;