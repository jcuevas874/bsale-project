const { querySearchBox } = require('../utils');

const getSearchBoxHandler = async (req, res) => {
    const searchWord = req.params.searchValue;
    const category = req.params.category && req.params.category !== "undefined" ? req.params.category : null;
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
    const data = await querySearchBox(searchWord, category, sort);
    
    res.status(200).json(data);
};

module.exports = { getSearchBoxHandler }
