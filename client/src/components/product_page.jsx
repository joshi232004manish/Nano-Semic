import React from "react";

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-6">
      <div className="">
        {/* Product Image */}
        <div className="flex-1">
          <div className="border rounded-lg p-4">
            <img
              src="arsenic.webp"
              alt="Thermokey C1-2026 Thermostat"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Description and Frequently Bought Together */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold">Description</h3>
            <h4 className="text-lg font-bold">
              Overheat Protector Thermal Cut-Off Switch
            </h4>
            <p className="text-gray-600">
              Ensure your dryer operates safely and efficiently with the
              Thermokey C1-2026 Thermostat Temperature Control Switch. Designed
              as a reliable replacement for dryer thermal fuses, this
              high-quality component is essential for maintaining optimal
              temperature regulation in your dryer.
            </p>
            <p className="text-gray-600">
              The C1-2026 acts as a safety mechanism, preventing overheating by
              cutting off power to the dryer when temperatures exceed safe
              levels. Its durable construction ensures long-lasting performance,
              making it a trusted solution for restoring your dryer's
              functionality.
            </p>
            <h4 className="text-lg font-bold">Key Features:</h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              <li>High-quality thermal fuse for precise temperature control</li>
              <li>Prevents overheating and potential fire hazards</li>
              <li>Durable and reliable for long-lasting performance</li>
              <li>Easy to install, compatible with various dryer models</li>
              <li>Ideal replacement part for restoring dryer functionality</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* Product Details */}

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">
            Thermokey C1-2026 Thermostat Temperature Control Switch Dryer
            Thermal Replacement Fuse
          </h2>
          <p className="text-red-500 font-semibold">Save ₹5.00</p>
          <p className="text-gray-500">SKU: 1562672264</p>

          <div className="flex items-center space-x-2">
            <span className="bg-gray-200 px-2 py-1 rounded">150-013</span>
          </div>

          <div className="text-xl font-bold text-red-600">
            ₹45.00 <span className="line-through text-gray-400">₹50.00</span>
          </div>
          <p className="text-gray-500">(₹ 38.14 without 18% GST.)</p>

          <div className="flex items-center space-x-2">
            <button className="bg-gray-300 px-3 py-1 rounded">-</button>
            <input
              type="number"
              defaultValue="1"
              className="w-12 text-center border rounded"
            />
            <button className="bg-gray-300 px-3 py-1 rounded">+</button>
          </div>

          <div className="flex space-x-4 mt-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Add to cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Buy it now
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold">Frequently Bought Together</h3>
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>Thermokey C1-2026 - ₹45.00</span>
            </div>
            <div className="flex items-center justify-between">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>Self-Lock Tactile Push Button - ₹5.00</span>
            </div>
            <div className="flex items-center justify-between">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>Knob-207 Plastic Potentiometer - ₹8.00</span>
            </div>
            <div className="flex items-center justify-between">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span>IEC320 C14 Male to Female Converter - ₹129.00</span>
            </div>
            <div className="flex justify-between font-bold mt-4">
              <span>Total:</span>
              <span>₹187.00</span>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full mt-2">
              Add to cart
            </button>
            <p className="text-gray-600 text-sm mt-4">
              For Bulk, Call us on +91 97175 83225
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
