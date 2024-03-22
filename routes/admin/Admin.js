const express = require("express");

const adminController = require("../../controllers/admin/adminController");

const routes = express.Router();

routes.post("/insertAdmin", adminController.insertAdmin);

module.exports = routes;
