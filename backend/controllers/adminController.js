
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
    const { dish_name, price, description, category_id} = req.body;
   
    try {
        const dish = await Dishes.create({
            dish_name: dish_name,
            price: price,
            description: description,
            category_id: category_id,
            menu_id: 1,
            is_selected: false,
            is_avaliable: false,
            quantity:null
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
    try {
        const {name}  = req.body;
        const Category = await category.create({
            category_name: name
        });
        res.json(Category);
    } catch (error) {
        console.log(error);
    }
}
// ID ' ye göre kategori getirme
exports.getCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const Category = await category.findOne({
            where: {
                category_id: id
            }
        });
        res.json(Category);
    } catch (error) {
        console.log(error);
    }
}


exports.getLastCategory = async (req, res) => {
    try {
      const lastCategory = await category.findOne({
        order: [['category_id', 'DESC']],
        limit: 1
      });
      res.json(lastCategory);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the last category.' });
    }
  };