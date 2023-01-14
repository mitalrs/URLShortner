// const express = require('express');
import express from 'express';
const router = express.Router();
// const { nanoid } = require('nanoid');
import { nanoid } from 'nanoid';
// const createDB = require('../config/db');
import createDB from '../config/db.js'
// const Url = require('../models/urlModel');
import Url from '../models/urlModel.js'


const baseUrl = "http://localhost:2020/urlapi"

createDB.sync().then(()=>{
    console.log('db running');
})
//post api call
router.post("/", async (req, res)=>{
    try{
        const { longUrl } = req.body;
        //longUrl->id
        console.log(longUrl, req.body)

        const shortId = nanoid(4)

        const shortUrl = await Url.create({
            longUrl,
            shortUrl: shortId  
        });
        // return res.status(200).send(shortUrl)
         return res.status(200).json({
            status: "ok",
            shortUrl: `${baseUrl}/${shortId}`
         })
    }catch(e){
        console.error(e)
        return res.status(500).send(e);
    }
})

// module.exports = router;
export default router