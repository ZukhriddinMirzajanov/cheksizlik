const express = require("express");
const router = express.Router();
const Data = require("../models/data")

// Getting all
router.get('/', async(req, res) => {
    try {
        const datas = await Data.find()
        res.json(datas)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getData, (req, res) => {
    res.json(res.data)
})

// Creating one
router.post('/', async(req, res) => {
    const data = new Data({
        title: req.body.title,
        paragraf: req.body.paragraf
    })
    try {
        const newData = await data.save()
        res.status(201).json(newData)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getData, async(req, res) => {
    if (req.body.title != null) {
        res.data.title = req.body.title
    }
    try {
        const updatedData = await res.data.save()
        res.json(updatedData)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getData, async(req, res) => {
    try {
        await res.data.remove()
        res.json({ message: 'Deleted data' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getData(req, res, next) {
    let data
    try {
        data = await Data.findById(req.params.id)
        if (data == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.data = data
    next()
}

module.exports = router;