const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, tech, price } = req.body;        

        return res.json({ ok: true})
    }
};