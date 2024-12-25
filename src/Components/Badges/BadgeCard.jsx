import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

const BadgeCard = ({ alt, img, product, stock: initialStock }) => {
  const [stock, setStock] = useState(initialStock); // Manage stock state locally
  const [showModal, setShowModal] = useState(false); // State to show/hide modal
  const [amount, setAmount] = useState(1); // Amount to add/subtract
  const [isAddSelected, setIsAddSelected] = useState(null); // Tracks whether Add or Subtract is selected

  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
    setIsAddSelected(null); // Reset selection when modal closes
  };

  // Handle adding or subtracting stock based on user input
  const handleStockChange = (operation) => {
    if (operation === 'add') {
      setStock(stock + parseInt(amount, 10)); // Add the specified amount
    } else if (operation === 'subtract') {
      setStock(stock > 0 ? stock - parseInt(amount, 10) : 0); // Subtract the specified amount
    }
    setShowModal(false); // Close the modal after updating the stock
  };

  // Handle amount change (ensure it's at least 1)
  const handleAmountChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10)); // Ensure value is at least 1
    setAmount(value);
  };

  return (
    <div className="flex flex-col w-fit border-black border rounded-md">
      {/* Image */}
      <div className="rounded-t-md">
        <img src={img} alt={alt} className="" />
      </div>

      {/* Product Name */}
      <div className="bg-black text-white flex justify-center">
        <h1>{product}</h1>
      </div>

      {/* Stock Information */}
      <div
        className={`${
          stock >= 5 ? 'bg-green-500' : 'bg-red-500'
        } text-white flex justify-between p-2 rounded-b-md text-2xl font-bold cursor-pointer`}
        onClick={toggleModal} // Show modal when stock is clicked
      >
        <h1>Stock</h1>
        <h1>{stock}</h1>
      </div>

      {/* Modal for Stock Update */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-1/3 relative">
            {/* Close Icon */}
            <AiOutlineClose
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={toggleModal}
            />

            <h2 className="text-xl font-bold mb-4">Update Stock</h2>

            {/* Initial Add/Subtract Options */}
            {isAddSelected === null && (
              <div className="flex justify-between mb-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-1/3"
                  onClick={() => setIsAddSelected('add')}
                >
                  Add Stock
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md w-1/3"
                  onClick={() => setIsAddSelected('subtract')}
                >
                  Subtract Stock
                </button>
              </div>
            )}

            {/* Add Stock Custom Input */}
            {isAddSelected === 'add' && (
              <div>
                <h3 className="font-semibold">Add Stock</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange} // Use the custom handler to ensure value is at least 1
                    className="border p-2 rounded-md w-20 text-center"
                    placeholder="Enter amount"
                    min="1" // Ensure that the input is not less than 1
                  />
                </div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleStockChange('add')}
                >
                  Confirm Add
                </button>
              </div>
            )}

            {/* Subtract Stock Custom Input */}
            {isAddSelected === 'subtract' && (
              <div>
                <h3 className="font-semibold">Subtract Stock</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange} // Use the custom handler to ensure value is at least 1
                    className="border p-2 rounded-md w-20 text-center"
                    placeholder="Enter amount"
                    min="1" // Ensure that the input is not less than 1
                  />
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleStockChange('subtract')}
                >
                  Confirm Subtract
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeCard;
