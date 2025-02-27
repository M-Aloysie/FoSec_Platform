import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Sample Data (Will be replaced by API or Database)
const farmersData = [
  {
    id: 1,
    name: "John Doe",
    location: "Rwanda - Kigali",
    crops: ["Maize", "Beans", "Tomatoes"],
    difficulties: "Pests affecting maize crops.",
    image: "/images/farmer1.jpeg",
  },
  {
    id: 2,
    name: "Jane Uwimana",
    location: "Uganda - Kampala",
    crops: ["Coffee", "Bananas"],
    difficulties: "Need better irrigation systems.",
    image: "/images/farmer2.jpeg",
  },
  {
    id: 3,
    name: "Kwizera Emmanuel",
    location: "Kenya - Nairobi",
    crops: ["Wheat", "Sugarcane"],
    difficulties: "Expensive fertilizers.",
    image: "/images/farmer3.jpeg",
  },
];

function Farmers() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-400 text-center">🌱 Meet Our Farmers</h1>
      <p className="text-gray-300 text-center mt-2">Discover what they are growing & their challenges.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmersData.map((farmer) => (
          <motion.div
            key={farmer.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={farmer.image} alt={farmer.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold text-green-400 mt-4">{farmer.name}</h2>
            <p className="text-gray-400 text-sm">{farmer.location}</p>

            <div className="mt-2">
              <strong className="text-yellow-400">Crops:</strong>
              <p>{farmer.crops.join(", ")}</p>
            </div>

            <div className="mt-2">
              <strong className="text-red-400">Difficulties:</strong>
              <p>{farmer.difficulties}</p>
            </div>

            <Link
              to={`/farmers/${farmer.id}`}
              className="mt-4 block bg-green-500 text-white px-6 py-2 rounded-lg text-center font-bold transition hover:bg-green-600"
            >
              View Profile
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Farmers;
