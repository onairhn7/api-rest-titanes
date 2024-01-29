import express from "express"
const titan = express ();
import {db} from '../db/conn.js'



titan.get ('', async (req,res) =>{

    const sql = `select * from tbl_titan` 
    const result = await db.query(sql);

    res.json(result)


})


titan.post('',async(req,res)=>{

    const {nombre, especialidad} = req.body;
    const params = [nombre, especialidad]

    const sql = `insert into tbl_titan
                (nombre, especialidad)
                values
                ($1, $2) returning * `


    const result = await db.query(sql, params);

    res.json(result);

})


export {titan}