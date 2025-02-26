//This controller will help to handle empty prompt

const aiService = require('../services/ai.service')

module.exports.getReview = async (req, res) =>{
    const code = req.body.code;

    if(!code) {
        return res.status(400).send("Prompt is required");
    }

    const respone = await aiService(code);

    res.send(respone)
}