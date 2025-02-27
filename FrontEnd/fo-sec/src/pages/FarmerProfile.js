import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Sample Data (Replace with API)
const farmersData = [
  {
    id: 1,
    name: "John Doe",
    location: "Rwanda - Kigali",
    crops: ["Maize", "Beans", "Tomatoes"],
    difficulties: "Pests affecting maize crops.",
    goodNews: "Successfully increased maize yield by 30% this season! 🌱",
    opportunities: "Looking for buyers interested in bulk maize sales. 📢",
    image: "/images/farmer1.jpeg",
    contactOptions: { email: "john@example.com", phone: "+250 123 456 789", message: true },
    privateInfo: { birthdate: "1990-06-15", income: "Confidential" },
    comments: [],
  },
  {
    id: 2,
    name: "Jane Uwimana",
    location: "Uganda - Kampala",
    crops: ["Coffee", "Bananas"],
    difficulties: "Need better irrigation systems.",
    goodNews: "Received a government grant for modern irrigation! 💧",
    opportunities: "Seeking partners for organic coffee export. ☕",
    image: "/images/farmer2.jpeg",
    contactOptions: { email: "jane@example.com", phone: "+256 987 654 321", message: true },
    privateInfo: { birthdate: "1992-04-10", income: "Confidential" },
    comments: [],
  },
];

function FarmerProfile() {
  const { id } = useParams();
  const farmer = farmersData.find((f) => f.id === parseInt(id));

  const [comments, setComments] = useState(farmer?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!farmer) {
    return <p className="text-center text-red-500 mt-10">Farmer not found!</p>;
  }

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString();
      setComments([...comments, { text: newComment, time: timestamp }]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Farmer Image */}
        <motion.img
          src={farmer.image}
          alt={farmer.name}
          className="w-full h-60 object-cover rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Farmer Info */}
        <h2 className="text-3xl font-bold text-green-400 mt-4">{farmer.name}</h2>
        <p className="text-gray-400 text-sm">{farmer.location}</p>

        {/* Crops, Challenges, Good News & Opportunities */}
        <motion.div
          className="mt-4 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-700 p-4 rounded-lg">
            <strong className="text-yellow-400">🌾 Crops:</strong>
            <p>{farmer.crops.join(", ")}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <strong className="text-red-400">⚠️ Challenges:</strong>
            <p>{farmer.difficulties}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <strong className="text-green-400">🎉 Good News:</strong>
            <p>{farmer.goodNews}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <strong className="text-blue-400">🌟 Opportunities:</strong>
            <p>{farmer.opportunities}</p>
          </div>
        </motion.div>

        {/* Contact Options */}
        <h3 className="text-xl font-semibold text-green-400 mt-6">📞 Contact Farmer</h3>
        <motion.div
          className="flex flex-wrap gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {farmer.contactOptions.email && (
            <a
              href={`mailto:${farmer.contactOptions.email}`}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
            >
              📧 Email
            </a>
          )}
          {farmer.contactOptions.phone && (
            <a
              href={`tel:${farmer.contactOptions.phone}`}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition shadow-md"
            >
              📞 Call
            </a>
          )}
          {farmer.contactOptions.message && (
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition shadow-md">
              💬 Send Message
            </button>
          )}
        </motion.div>

        {/* Comments Section */}
        <h3 className="text-xl font-semibold text-yellow-400 mt-6">💬 Comments</h3>
        <div className="mt-2 bg-gray-700 p-4 rounded-lg">
          {comments.length === 0 ? (
            <p className="text-gray-400">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-600 py-2">
                <p>{comment.text}</p>
                <small className="text-gray-400 text-xs">{comment.time}</small>
              </div>
            ))
          )}
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 rounded bg-gray-600 text-white placeholder-gray-300"
            />
            <button
              onClick={handleCommentSubmit}
              className="ml-2 bg-green-500 px-4 py-2 rounded hover:bg-green-600 shadow-md"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerProfile;
