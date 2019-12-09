const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    console.log(status, id);
    if (!status) {
        return;
    }
    pool.query(`SELECT "likes" FROM "gallery" WHERE "id" = '${id}';`)
        .then((response) => {
            console.log(response.rows);
            let update = response.rows[0].likes + 1;
            let queryString = `UPDATE "gallery" SET "likes"='${update}' WHERE "id" = $1;`;

            pool.query(queryString, [id])
                .then((response) => {
                    res.sendStatus(200);
                    return;
                })
                .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                })
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
            return;
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "gallery" ORDER BY "id" ASC`)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
}); // END GET Route

//DELETE Route
router.delete('/:id', (req, res) => {
    // console.log('delete:',req.params.id, req);
    const Id = req.params.id;
    const queryString = `DELETE FROM "gallery" WHERE "id" = ${Id};`;

    pool.query(queryString)
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    const newItem = req.body;
    const sqlText = `INSERT INTO "gallery" (path, description, likes) VALUES 
  ($1, $2, $3)`;
    
    pool.query(sqlText, [newItem.path, newItem.description, newItem.likes])
        .then((result) => {
            console.log(`Added item to the database`, newItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})




module.exports = router;

