const { queryProduct } = require("../utils/index.js");


const getProductsHandler = async (req, res) => {
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
    const data = await queryProduct(sort);
    res.status(200).json(data);
}

module.exports = { getProductsHandler }
