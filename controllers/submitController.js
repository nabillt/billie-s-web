import { db } from "../database.js";


export const submitController = (req,res)=>{
    

    const nama = req.body.usr;
    const email = req.body.eml;
    const password = req.body.pw;

    db.query(`insert into siswa (nama, email, password) values ('${nama}','${email}','${password}')`)

    res.redirect('/')
}

