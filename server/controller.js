module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(response => {
            res.status(200).send(response);
        }).catch(err => {
            console.log('getALL:',err);
    });
}

    newProduct: (req,res) => {
        const {name, price, imageURL} = req.body;
        const db = req.app.get('db');

        db.creat_product([name, price, imgURL]).then(response => {
            res.status(200).send('Created Product')
        }).catch(err => {
            console.log('newProduct:', err);
        })
    }
}

