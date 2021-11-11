const { queryProducByCategory } = require('../utils');


const getProductsByCategoryHandler = async (req, res) => {
    const id = req.params.category;
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
    const data = await queryProducByCategory(id, sort);
    
    res.status(200).json(data);
    
}

module.exports = { getProductsByCategoryHandler }
