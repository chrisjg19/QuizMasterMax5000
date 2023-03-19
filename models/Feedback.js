const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User=require("./User")

class Feedback extends Model {

}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {  
      type: DataTypes.INTEGER,
      allowNull: false,
    
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    hooks: {
  
    },
    sequelize,
    timestamps: true,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'feedback',
  }
);

User.hasMany(Feedback);
Feedback.belongsTo(User);

module.exports = Feedback;
