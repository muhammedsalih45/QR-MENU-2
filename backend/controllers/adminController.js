
const Dishes = require('../models/DishesModel');
const category = require('../models/Category');

// bütün yemekleri getirme
exports.getAllDishes = async (req, res) => {
    try {

        const dishes = await Dishes.findAll({
            include: {
                model: category
            }
        });
        res.json(dishes);
    } catch (error) {
        console.log(error);
    }
}
// ID ' ye göre getirme
exports.getDishById = async (req, res) => {

    const id = req.params.id;

    try {
        const dish = await Dishes.findOne({
            where: {
                dish_id: req.params.id
            },
            include: {
                model: category
            }
        });
        res.json(dish);
    } catch (err) {
        console.log(err);
    }
}
// Yeni bir yemek ekleme
exports.createDish = async (req, res) => {
    const { name, price, description, category_id } = req.body;
    try {
        const dish = await Dishes.create({
            dish_name: name,
            price: price,
            description: description,
            category_id: category_id
        });
        res.json(dish);
    } catch (error) {
        console.log(error);
    }
}

// Yemek Düzenleme
exports.updateDish = async (req, res) => {
    const { name, price, description, category_id } = req.body;
    const id = req.params.id;
    try {
        const dish = await Dishes.update({
            dish_name: name,
            price: price,
            description: description,
            category_id: category_id
        }, {
            where: {
                dish_id: id
            }
        });
        res.json(dish);
    } catch (error) {
        console.log(error);
    }   
}

// Kategorileri getirme
exports.getCategories = async (req, res) => {
    try {
        const categories = await category.findAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}

// Kategori ekleme
exports.createCategory = async (req, res) => {
    const { category_name } = req.body;
    try {
        const category = await category.create({
            category_name: category_name
        });
        res.json(category);
    } catch (error) {
        console.log(error);
    }
}
// ID ' ye göre kategori getirme
exports.getCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await category.findOne({
            where: {
                category_id: id
            }
        });
        res.json(category);
    } catch (error) {
        console.log(error);
    }
}


