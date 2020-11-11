const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const Usuario = sequelize.define("usuario", {
 id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER,
 },
 nome: {
  allowNull: false,
  type: Sequelize.STRING(30),
  validate: {
   len: [3, 30],
  },
 },
 telefone: {
  allowNull: false,
  type: Sequelize.STRING(15),
 },
 datanascimento: {
  allowNull: false,
  type: Sequelize.DATE(),
 },
 pontoderefencia: {
  allowNull: false,
  type: Sequelize.STRING(),
 },
 email: {
  allowNull: false,
  type: Sequelize.STRING(),
 },
 uf: {
  allowNull: true,
  type: Sequelize.STRING(5),
 },
 localidade: {
  allowNull: true,
  type: Sequelize.STRING(40),
 },
 bairro: {
  allowNull: true,
  type: Sequelize.STRING(100),
 },
 logradouro: {
  allowNull: true,
  type: Sequelize.STRING(100),
 },
});

module.exports = Usuario;
