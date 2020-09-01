const express = require('express');
const router = express.Router()

// Item MODEL

const Item = require('../../models/Item')

// @route GET api/item
// @decs GET ALL items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then((items) => res.json(items))
});

// @route POST api/item
// @decs Create item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then((item) => res.json(item))
        .catch((error) => error)
});

// @route POST api/item/:id
// @decs Delete Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ sucess: false }))
});

module.exports = router