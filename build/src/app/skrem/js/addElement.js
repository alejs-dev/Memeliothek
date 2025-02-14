const sql = require("sqlite3").verbose();
const database = new sql.Database("../db/skrem.sqlite3");
    
const insertQuery = `INSERT INTO skrem (producer, name) VALUES (?, ?)`;

function submit() {

    let inputProducer = document.getElementById("inputProducer").value;
    let inputName = document.getElementById("inputName").value;

    database.run(insertQuery, [inputProducer, inputName], function (err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Inserted Data");
        }
    });
}