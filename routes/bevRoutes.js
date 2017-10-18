const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Bevs = mongoose.model('bevs');
//update with bevroutes
module.exports = app => {
    app.get('/mongoosetest', requireLogin, async (req, res) => {
        const test = await Test.find();
        res.send(test);
    });
    app.post('/mongoosetest', async (req, res) => {
        const { test } = req.body;
        const tester = new Test({
            test
        });
        await tester.save();
        res.send(tester);
    });
};