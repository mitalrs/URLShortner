// const { Model, DataTypes } = require('sequelize');
import { Model, DataTypes } from 'sequelize';
// const sequelize = require('../config/db');
import sequelize from '../config/db.js'

class Url extends Model {}

Url.init(
    {
        longUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize, modelName: "Url"
    }
);

// module.exports = Url;
export default Url