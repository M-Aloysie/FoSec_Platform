const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Training = sequelize.define('Training', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    trainerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  Training.associate = (models) => {
    Training.belongsTo(models.User, { foreignKey: 'trainerId' });
  };

  return Training;
};