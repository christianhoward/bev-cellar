const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Bev = mongoose.model('bevs');
//update with bevroutes
module.exports = app => {
    app.get('/api/bevs', requireLogin, async (req, res) => {
        const bevs = await Bev.find({ _user: req.user.id });
        res.send(bevs);
    });
    app.post('/api/bevs', requireLogin, async (req, res) => {
        const { name, type, year, quantity, location, notes } = req.body;
        const bev = new Bev({
            name,
            type,
            year,
            quantity,
            location,
            notes,
            _user: req.user.id,
            createdOn: Date.now(),
            lastUpdatedOn: null
        });
        try {
            await bev.save();
            res.send(bev);
        } catch (err) {
            res.status(422).send(err)
        }
    });
    app.patch('/api/bevs/:id', requireLogin, async (req, res) => {
        const id = req.params.id;
        const { name, type, year, quantity, location, notes } = req.body;
        const bev = { name, type, year, quantity, location, notes, lastUpdatedOn: Date.now() };
        try {
            await Bev.findByIdAndUpdate(id, {$set: bev}, {new: true});
            res.send(bev);
        } catch (err) {
            res.status(422).send(err);
        }
    });
    app.delete('/api/bevs/:id', requireLogin, async (req, res) => {
        const id = req.params.id;
        const bev = await Bev.findByIdAndRemove(id);
        res.send(bev);
    });
};