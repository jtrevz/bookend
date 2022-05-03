const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {
    //bcrypt check password
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[6],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                //bcrypt hasshing password stuff
            },
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'user',
        freezeTableName: true,
    }
);

module.exports = User;