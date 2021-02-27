const express = require('express')
const router = express.Router()
const Question = require('../models/question')

router.get('/', async (req, res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id)
        if (question == null) {
            return res.status(404).json({ message: 'Cannot find question' })
        }
        res.json(question)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const question = new Question({
        title: req.body.title,
        input_type: req.body.input_type,
        options: req.body.options
    })
    try {
        const newQuestion = await question.save()
        res.status(201).json(newQuestion)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router