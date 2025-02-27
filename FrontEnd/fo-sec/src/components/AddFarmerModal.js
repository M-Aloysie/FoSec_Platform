import React, { useState } from "react";

function AddFarmerModal({ setFarmers, closeModal }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const addFarmer = async () => {
    const res = await fetch("http://localhost:5000/farmers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location }),
    });
    if (res.ok) {
      setFarmers((prev) => [...prev, { name, location }]);
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Farmer</h2>
        <input type="text" placeholder="Farmer Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <div className="modal-buttons">
          <button className="button" onClick={closeModal}>Cancel</button>
          <button className="button" onClick={addFarmer}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddFarmerModal;
