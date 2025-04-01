import React, { useState } from "react";
import AddFarmerModal from "./AddFarmerModal";

function FarmerList({ farmers, setFarmers }) {
  const [showModal, setShowModal] = useState(false);

  const deleteFarmer = async (id) => {
    await fetch(`http://localhost:5000/farmers/${id}`, { method: "DELETE" });
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
  };

  return (
    <div className="farmer-section">
      <button className="button" onClick={() => setShowModal(true)}>➕ Add Farmer</button>

      <div className="farmer-list">
        {farmers.map((farmer) => (
          <div key={farmer.id} className="farmer-card">
            <span>{farmer.name} - {farmer.location}</span>
            <button className="delete-button" onClick={() => deleteFarmer(farmer.id)}>🗑 Delete</button>
          </div>
        ))}
      </div>

      {showModal && <AddFarmerModal setFarmers={setFarmers} closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default FarmerList;
