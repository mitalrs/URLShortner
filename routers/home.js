// const express = require('express');
import express from "express"
const router = express.Router();
// const path = require('path')
import path from "path"

router.get('/', (req, res) =>{
   const htmlPath= path.join(__dirname, 'public', 'index.html');
   res.sendFile(htmlPath);
   console.log('__dirName', __dirname,htmlPath)

   res.sendFile(htmlPath);
});

router.post('/', ()=>{})
router.delete('/', ()=>{})

// module.exports = router;
export default router;