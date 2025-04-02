const { models } = require('../models');
const upload = require('../middleware/multer'); // Import multer middleware

const createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;
    const userId = req.user.id; // From protect middleware

    // Check if an image was uploaded
    let imagePath = null;
    if (req.file) {
      imagePath = req.file.path; // Path where multer saved the file
    }

    const product = await models.Product.create({
      name,
      description,
      price,
      quantity,
      userId,
      image: imagePath, // Save the file path
    });

    res.status(201).json({message: "Product created successfullty", product});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll({
      include: [{ model: models.User, attributes: ['username'] }],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll({
      where: { userId: req.user.id },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await models.Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.userId !== req.user.id) {
      return res.status(403).json({ message: 'You can only edit your own products' });
    }

    // Check if a new image is uploaded during update
    let imagePath = product.image;
    if (req.file) {
      imagePath = req.file.path; // Update with new image path
    }

    await product.update({
      ...req.body,
      image: imagePath,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await models.Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.userId !== req.user.id) {
      return res.status(403).json({ message: 'You can only delete your own products' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct: [upload.single('image'), createProduct],
  getProducts,
  getMyProducts,
  updateProduct: [upload.single('image'), updateProduct],
  deleteProduct,
};