const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Loan = sequelize.define('Loan', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
      defaultValue: 'Pending',
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Loan.associate = (models) => {
    Loan.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Loan;
};