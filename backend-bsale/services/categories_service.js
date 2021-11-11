const { queryCategory } = require('../utils')

const getCategoriesHandler = async (req, res) => {
    const data = await queryCategory();
    res.status(200).json(data);
}

module.exports = { getCategoriesHandler }
