import React, { useState, useEffect } from "react";

function PolicyUpdates() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/policies") // Replace with real API
      .then((res) => res.json())
      .then((data) => setPolicies(data))
      .catch((err) => console.error("Error fetching policies:", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md my-5">
      <h2 className="text-lg font-bold">📜 Policy Updates</h2>
      <ul>
        {policies.map((policy, index) => (
          <li key={index} className="text-gray-600">{policy.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyUpdates;
