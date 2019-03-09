module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(response => {
            res.status(200).send(response);
        }).catch(err => {
            console.log('getALL:', err);
        });  
    },

    newProduct: (req, res) => {
        const {name, price, imgURL} = req.body;
        const db = req.app.get('db');

        db.create_product([name, price, imgURL]).then(response => {
            res.status(200).send('Created Product')
        }).catch(err => {
            console.log('newProduct:', err);
        });
        
    }

    removeProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.remove_product([id]).then(response => {
            res.status(200).send('dude, nice, its gone!);
        }).catch(err => {
            console.log('error removing product:', err);
        });
    },

    getProduct: (req, rest) => {
        const db = req.app.get('db');
        const {id}= req.params;

        db.get_product([id]).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            console.log('getProduct:', err);
        });
     }
}

