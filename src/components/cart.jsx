import React, { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("United States");

  const pricePerItem = 7452;
  const subtotal = quantity * pricePerItem;

  return (
    <section className="pt-24 min-h-screen bg-black text-white py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-400 tracking-wide">Your Shopping Cart</h1>
        <p className="text-sm text-gray-400 mt-2">Secure. Stylish. Seamless Checkout.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">
        {/* Product Row Header */}
        <div className="grid grid-cols-1 md:grid-cols-5 text-left text-sm md:text-base border-b border-zinc-700">
          <div className="p-4 font-semibold md:col-span-2">Product</div>
          <div className="p-4 font-semibold text-center">Quantity</div>
          <div className="p-4 font-semibold text-right">Each</div>
          <div className="p-4 font-semibold text-right">Total</div>
        </div>

        {/* Product Item */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-zinc-700">
          <div className="p-4 md:col-span-2">
            <h3 className="text-lg font-medium text-white">Driveway Gate EntranceEden 10ft</h3>
            <span className="text-gray-400 text-sm">SKU: entranceeden10ft</span>
          </div>
          <div className="p-4 flex justify-center">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 text-center px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring focus:ring-amber-400"
            />
          </div>
          <div className="p-4 text-right text-white">${pricePerItem.toLocaleString()}</div>
          <div className="p-4 text-right text-white">${subtotal.toLocaleString()}</div>
        </div>

        {/* Notes & Shipping */}
        <div className="p-6 space-y-4">
          <textarea
            placeholder="Add any special instructions..."
            className="w-full bg-zinc-800 text-white p-3 rounded-md border border-zinc-700 focus:outline-none focus:ring focus:ring-amber-400"
            rows="3"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip / Postal Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full bg-zinc-800 text-white p-3 rounded-md border border-zinc-700 focus:outline-none focus:ring focus:ring-amber-400"
            />

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full bg-zinc-800 text-white p-3 rounded-md border border-zinc-700 focus:outline-none focus:ring focus:ring-amber-400"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Puerto Rico</option>
              <option>Hawaii</option>
            </select>
          </div>
        </div>

        {/* Cart Footer Actions */}
        <div className="bg-zinc-950 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md hover:bg-zinc-700 transition">
              Empty Cart
            </button>
            <button className="px-5 py-2 bg-zinc-800 text-white border border-zinc-700 rounded-md hover:bg-zinc-700 transition">
              Recalculate
            </button>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">Subtotal</div>
            <div className="text-lg text-white font-semibold">${subtotal.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Tax: $0.00</div>
            <div className="text-lg text-amber-400 font-bold">Total: ${subtotal.toLocaleString()}</div>
          </div>
        </div>

        {/* Checkout CTA */}
        <div className="bg-black p-6 flex justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:from-amber-700 hover:to-yellow-500 transition-all text-lg">
            Continue Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
