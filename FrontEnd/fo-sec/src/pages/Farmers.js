import React, { useState } from "react";

function Farmers() {
  const [farmers, setFarmers] = useState([]);
  const [newFarmer, setNewFarmer] = useState("");
  const [image, setImage] = useState(null);

  const addFarmer = () => {
    if (newFarmer.trim()) {
      setFarmers([...farmers, { name: newFarmer, image }]);
      setNewFarmer("");
      setImage(null);
    }
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-green-700">👨‍🌾 Farmers</h2>
      <ul className="mt-4">
        {farmers.map((farmer, index) => (
          <li key={index} className="border-b py-2 flex items-center gap-4">
            {farmer.image && <img src={URL.createObjectURL(farmer.image)} alt={farmer.name} className="w-12 h-12 rounded-full" />}
            {farmer.name}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <input type="text" placeholder="Farmer Name" value={newFarmer} onChange={(e) => setNewFarmer(e.target.value)} className="border px-4 py-2 rounded mr-2" />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="border px-4 py-2 rounded" />
        <button onClick={addFarmer} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-2">
          Add Farmer
        </button>
      </div>
    </div>
  );
}

export default Farmers;
