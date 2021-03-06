// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
	const Recipe = sequelize.define('recipe', {
		recipe_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
		},
		cook_time: {
			type: DataTypes.INTEGER,
			allowNull: true,
			unique: false,
		},
		directions: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: false,
		},
		ingredients: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			unique: false,
		},
		servings: {
			type: DataTypes.INTEGER,
			allowNull: true,
			unique: false,
		},
		views: {
			type: DataTypes.INTEGER,
			allowNull: true,
			unique: false,
		},
		photo_url: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: false,
		},
		created_by: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: false,
		},
		chef: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
		},
	});
	return Recipe;
};
