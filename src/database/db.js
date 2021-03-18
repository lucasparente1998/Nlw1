// importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()


// criar o objeto do banco de dados que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para nossas operações

//  db.serialize(()=>{
    // com comandos SQL vou:

    // 1- criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         adress TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2- inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         adress,
    //         adress2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.uhttps://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80nsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papeis e Papelão"
    // ]

    // function afterInsetData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    //  db.run(query,values,afterInsetData)
            
    // //3 - consultar os dados na tabela
    // db.all(`SELECT * FROM places`,function(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })


    // db.run(`DELETE FROM places WHERE id = ?`, [15], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("registro deletado com sucesso!")
    // })
    //  })