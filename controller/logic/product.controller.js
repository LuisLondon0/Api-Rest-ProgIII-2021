/** dto */
const productDto = require("../../model/dto/product.dto");
const config = require("config");

exports.createProduct = (req, res, next) => {
    let product = {
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        brand: req.body.brand,
        category: req.body.category
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(201).json({
            info: data
        })
    })
}

exports.updateProduct = (req, res, next) => {
    let product = {
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        brand: req.body.brand,
        category: req.body.category
    };
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(201).json({
            info: data
        })

    })
}

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            info: data
        })
    })
}

exports.getByCode = (req, res, next) => {
    periodDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            info: data
        })
    })
}

exports.deleteProduct = (req, res, next) => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(204).json();
    })
}