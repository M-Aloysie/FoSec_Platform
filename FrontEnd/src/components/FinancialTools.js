import React, { useState } from "react";
import { motion } from "framer-motion";

function FinancialTools() {
  const [showTooltip, setShowTooltip] = useState(null);
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [loanForm, setLoanForm] = useState({
    name: "",
    email: "",
    farmSize: "",
    location: "",
    amount: "",
    purpose: "",
  });
  const [insuranceForm, setInsuranceForm] = useState({
    name: "",
    email: "",
    farmSize: "",
    location: "",
    cropType: "",
    coverageAmount: "",
  });

  const handleLoanSubmit = (e) => {
    e.preventDefault();
    alert("Microloan application submitted: " + JSON.stringify(loanForm));
    setShowLoanForm(false);
    setLoanForm({ name: "", email: "", farmSize: "", location: "", amount: "", purpose: "" });
  };

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();
    alert("Crop insurance application submitted: " + JSON.stringify(insuranceForm));
    setShowInsuranceForm(false);
    setInsuranceForm({ name: "", email: "", farmSize: "", location: "", cropType: "", coverageAmount: "" });
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "loan") {
      setLoanForm((prev) => ({ ...prev, [name]: value }));
    } else if (formType === "insurance") {
      setInsuranceForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Financial Tools
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Secure your farm with loans and insurance.
      </motion.p>
      <div className="card-grid">
        <motion.div className="card" whileHover={{ scale: 1.1 }} onHoverStart={() => setShowTooltip("loan")} onHoverEnd={() => setShowTooltip(null)}>
          <h3 className="card-title">Microloans</h3>
          <p className="card-desc">Up to $500 for your farm.</p>
          <motion.button
            className="cta-button"
            onClick={() => setShowLoanForm(true)}
            whileHover={{ backgroundColor: "#1b4332" }}
          >
            Apply Now
          </motion.button>
          {showTooltip === "loan" && <motion.div className="tooltip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Quick approval in 24 hours!</motion.div>}
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }} onHoverStart={() => setShowTooltip("insurance")} onHoverEnd={() => setShowTooltip(null)}>
          <h3 className="card-title">Crop Insurance</h3>
          <p className="card-desc">Protect against losses.</p>
          <motion.button
            className="cta-button"
            onClick={() => setShowInsuranceForm(true)}
            whileHover={{ backgroundColor: "#1b4332" }}
          >
            Apply now
          </motion.button>
          {showTooltip === "insurance" && <motion.div className="tooltip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Covers drought & pests!</motion.div>}
        </motion.div>
      </div>

      {/* Microloan Application Modal */}
      {showLoanForm && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <h3>Microloan Application</h3>
            <form className="financial-form" onSubmit={handleLoanSubmit}>
              <input
                type="text"
                name="name"
                value={loanForm.name}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Full Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={loanForm.email}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Email"
                className="form-input"
                required
              />
              <input
                type="number"
                name="farmSize"
                value={loanForm.farmSize}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Farm Size (acres)"
                className="form-input"
                required
              />
              <input
                type="text"
                name="location"
                value={loanForm.location}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Location (e.g., Nairobi, Kenya)"
                className="form-input"
                required
              />
              <input
                type="number"
                name="amount"
                value={loanForm.amount}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Loan Amount ($1 - $500)"
                className="form-input"
                min="1"
                max="500"
                required
              />
              <textarea
                name="purpose"
                value={loanForm.purpose}
                onChange={(e) => handleInputChange(e, "loan")}
                placeholder="Purpose of Loan (e.g., buying seeds)"
                className="form-input"
                rows="3"
                required
              />
              <div className="form-buttons">
                <motion.button
                  type="submit"
                  className="cta-button"
                  whileHover={{ backgroundColor: "#1b4332" }}
                >
                  Submit Application
                </motion.button>
                <motion.button
                  type="button"
                  className="cta-button cancel"
                  onClick={() => setShowLoanForm(false)}
                  whileHover={{ backgroundColor: "#d00000" }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      {/* Crop Insurance Application Modal */}
      {showInsuranceForm && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <h3>Crop Insurance Application</h3>
            <form className="financial-form" onSubmit={handleInsuranceSubmit}>
              <input
                type="text"
                name="name"
                value={insuranceForm.name}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Full Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={insuranceForm.email}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Email"
                className="form-input"
                required
              />
              <input
                type="number"
                name="farmSize"
                value={insuranceForm.farmSize}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Farm Size (acres)"
                className="form-input"
                required
              />
              <input
                type="text"
                name="location"
                value={insuranceForm.location}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Location (e.g., Nairobi, Kenya)"
                className="form-input"
                required
              />
              <input
                type="text"
                name="cropType"
                value={insuranceForm.cropType}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Crop Type (e.g., Maize)"
                className="form-input"
                required
              />
              <input
                type="number"
                name="coverageAmount"
                value={insuranceForm.coverageAmount}
                onChange={(e) => handleInputChange(e, "insurance")}
                placeholder="Coverage Amount ($)"
                className="form-input"
                min="100"
                required
              />
              <div className="form-buttons">
                <motion.button
                  type="submit"
                  className="cta-button"
                  whileHover={{ backgroundColor: "#1b4332" }}
                >
                  Submit Application
                </motion.button>
                <motion.button
                  type="button"
                  className="cta-button cancel"
                  onClick={() => setShowInsuranceForm(false)}
                  whileHover={{ backgroundColor: "#d00000" }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default FinancialTools;