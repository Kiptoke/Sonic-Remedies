const express = require('express')
const router = express.Router()
const LongPiece = require('../models/long-piece')

router.get('/', async (req, res) => {
    try {
        const pieces = await LongPiece.find()
        res.json(pieces)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const piece = await LongPiece.findById(req.params.id)
        if (piece == null) {
            return res.status(404).json({ message: 'Cannot find piece' })
        }
        res.json(piece)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const piece = new LongPiece({
        title: req.body.title,
        duration: req.body.duration,
        filepath: req.body.filepath
    })
    try {
        const newPiece = await piece.save()
        res.status(201).json(newPiece)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router