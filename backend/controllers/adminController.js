
const Products = require('../models/Products');
const Category = require('../models/Category');
const { Op } = require("sequelize");
// bütün yemekleri getirme
exports.getAllProuducts = async (req, res) => {
    try {

        const products = await Products.findAll({
            include: {
                model: Category
            }
        });
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}
// Ürünleri Sıra id ye göre sıralama
exports.getAllProductsOrderBySiraId = async (req,res) => {
    try {
        const products = await Products.findAll({
            order:[['sira_id','ASC']]
        })
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'An error occurred while fetching products.'});
    }
}

exports.filterProductsByName = async (req, res) => {
    const { name } = req.query;
    try {
        const products = await Products.findAll({
            where: {
                product_name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
}


// exports.deleteAllSiraIdForSort = async (req,res) => {

//     try {
//         res.json('Sıra idleriniz silindi');
//     } catch (err) {
//         console.log(err);
//         res.status(500).json('Internal Server Error');
//     }
// }

// Ürünleri yeni sıra id ye göre sıralama


exports.updateProductsBySiraId = async (req, res) => {
    const { products } = req.body;

    try {
        // Her ürün için geçici bir sira_id değeri kullanarak güncelleyin
        const count = await Products.count();
        for (let i = 0; i < count; i++) {
            const product = products[i];
            await Products.update(
                { sira_id: i + 1 },
                { where: { product_id: product.product_id } }
            );
        }

        res.status(200).json({ message: 'Products updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
};

// ID ' ye göre getirme
exports.getProductById = async (req, res) => {

    const id = req.params.id;

    try {
        const product = await Products.findOne({
            where: {
                product_id: req.params.id
            },
            include: {
                model: Category
            }
        });
        res.json(product);
    } catch (err) {
        console.log(err);
    }
}
// Yeni bir yemek ekleme
exports.createProduct = async (req, res) => {
    const { productName, price, description, category_id} = req.body;
    const count = await Products.count();
    try {
        const product= await Products.create({
            product_name: productName,
            price: price,
            description: description,
            category_id: category_id,
            menu_id: 1,
            is_selected: false,
            is_available: false,
            sira_id:count+1
        });
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

// Yemek Düzenleme
exports.updateProduct = async (req, res) => {
    const { newName, newPrice, newDescription, newCategory_id ,id} = req.body;
    try {
        const product = await Products.update({
            product_name: newName,
            price: newPrice,
            description: newDescription,
            category_id: newCategory_id
        }, {
            where: {
                product_id: id
            }
        });
        res.json(product);
    } catch (error) {
        console.log(error);
    }   
}

// Kategorileri getirme
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
    }
}

// Kategori ekleme
exports.createCategory = async (req, res) => {
    try {
        const {name}  = req.body;
        const category = await Category.create({
            category_name: name
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
        const category = await Category.findOne({
            where: {
                category_id: id
            }
        });
        res.json(category);
    } catch (error) {
        console.log(error);
    }
}


exports.getLastCategory = async (req, res) => {
    try {
      const lastCategory = await Category.findOne({
        order: [['category_id', 'DESC']],
        limit: 1
      });
      res.json(lastCategory);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the last category.' });
    }
  };