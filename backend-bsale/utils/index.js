const { col, Op } = require('sequelize');
const { Product, Category } = require("../models/sequelize");

//Product Query params

const queryProduct = async (sort) => {
    const dataProduct = await Product.findAll({
        include: [{
            model: Category,
            as: 'c',
            required: true
        }],
        attributes: ['id', 'name', 'url_image', 'price', 'discount', [col('c.name'), 'category']],
        order: [[col('name'), sort]]
    });

    if (dataProduct.length > 0) {
        return dataProduct
    }

    return [];
}


//Product By Category - Query params

const queryProducByCategory = async (id, sort) => {
    const dataProduct = await Product.findAll({
        where: { '$c.id$': id },
        include: [{
            model: Category,
            as: 'c',
            required: true
        }],
        attributes: ['id', 'name', 'url_image', 'price', 'discount', [col('c.name'), 'category']],
        order: [[col('name'), sort]],
    });

    if (dataProduct.length > 0) {
        return dataProduct
    }

    return [];
};

// Searchbox - Query Params

const querySearchBox = async (searchWord, category, sort) => {
    let data = [];
    if (category && category !== '0') { 
        const dataProduct = await Product.findAll({
            where: { '$c.id$': category, name: { [Op.like]: `%${searchWord}%` } },
            include: [{
                model: Category,
                as: 'c',
                required: true
            }],
            attributes: ['id', 'name', 'url_image', 'price', 'discount', [col('c.name'), 'category']],
            order: [[col('name'), sort]]            
        });
    
        if (dataProduct.length > 0) {
            data = dataProduct;
        }
        
    } else {
        const dataProduct = await Product.findAll({
            where: { name: { [Op.like]: `%${searchWord}%` } },
            include: [{
                model: Category,
                as: 'c',
                required: true
            }],
            attributes: ['id', 'name', 'url_image', 'price', 'discount', [col('c.name'), 'category']],
            order: [[col('name'), sort]]
        });
    
        if (dataProduct.length > 0) {
            data = dataProduct;
        }
    }
    return data;
};

// Category Query Params

const queryCategory = async () => {
    const dataCategory = await Category.findAll({
        attributes: ['id', 'name'],
    });

    if (dataCategory.length > 0) {
        return dataCategory;
    }

    return [];
}


module.exports = { queryProduct, queryCategory, queryProducByCategory, querySearchBox };
