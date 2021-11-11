const { Category } = require('./category');
const { Product } = require('./product');

Product.hasOne(Category, { as: 'c', foreignKey: 'id', sourceKey: 'category' });

module.exports = { Product, Category };
