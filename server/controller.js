module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        res.status(200).send(db.get_inventory());
    }
}

