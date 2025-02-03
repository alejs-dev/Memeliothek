const sql = require("sqlite3").verbose();
const database = new sql.Database("skrem.sqlite3");

const insertQuery = `INSERT INTO skrem (producer, name) VALUES (?, ?)`;

const inputProducer = "Creed";
const inputName = "Aventus";



database.run(`CREATE TABLE IF NOT EXISTS skrem (
    id INTEGER PRIMARY KEY,
    producer TEXT, 
    name TEXT)`
);

// database.run(insertQuery, [inputProducer, inputName], function (err) {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Inserted Data");
//     }
// });