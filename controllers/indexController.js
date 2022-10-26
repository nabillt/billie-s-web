import { db } from "../database.js"

export const indexController = (req,res)=>{
    return db.query('select * from siswa',(err,result)=>{
        if(err) throw err
        return res.render('index',{siswa : result})
    })
}
export const interfaceController = (req,res)=>{
    res.render("interface")
}
export const shopController = (req,res)=>{
    res.render("shop")
}
export const aboutController = (req,res)=>{
    res.render("about")
}
export const parfumeController = (req,res)=>{
    res.render("parfume")
}