const express = require('express')
const router = express.Router()
const Set = require('../models/set')

//Get all
router.get('/', async (req, res) => {
    try {
        const sets = await Set.find()
        res.json(sets)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get one
router.get('/:id', async (req, res) => {
    try {
        const set = await Set.findById(req.params.id)
        if (set == null) {
            return res.status(404).json({ message: 'Cannot find set' })
        }
        res.json(set)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

//Create one
router.post('/', async (req, res) => {
    const set = new Set({
        title: req.body.title,
        questions: req.body.questions,
        music: req.body.music
    })
    try {
        const newSet = await set.save()
        res.status(201).json(newSet)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Update one
router.patch('/:id', async (req, res) => {
    try {
        const set = await Set.findById(req.params.id)
        if (set == null) {
            return res.status(404).json({ message: 'Cannot find set' })
        }
        if (req.body.title != null) {
            set.title = req.body.title
        }
        if (req.body.questions != null) {
            set.questions = req.body.questions
        }
        if(req.body.music != null) {
            set.music = req.body.music
        }
        const updatedSet = await set.save()
        res.json(updatedSet)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

//put req
router.put('/:id', async (req, res) => {
    try {
        const set = await Set.findById(req.params.id)
        if (set == null) {
            return res.status(404).json({ message: 'Cannot find set' })
        }
        set.title = req.body.title
        set.questions = req.body.questions
        const updatedSet = await set.save()
        res.json(updatedSet)
    }
    catch (err) {
        return res.status(500).json({ mesage: err.message })
    }
})

//Delete one
router.delete('/:id', async (req, res) => {
    try {
        const set = await Set.findById(req.params.id)
        if (set == null) {
            return res.status(404).json({ message: 'Cannot find set' })
        }
        set.remove()
        res.json({ message: 'Deleted set' })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
})


module.exports = router