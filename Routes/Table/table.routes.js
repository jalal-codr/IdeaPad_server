const express = require('express');
const  router = express.Router();
const { verifyToken} = require('../../Middleware/fireBase/Auth');
const {createTable,deleteTable,getTable}  = require('../../Controllers/Table/TableController');


router.post('/get-tables',verifyToken,getTable)
router.post('/create-table',verifyToken,createTable);
router.put('/delete-table',verifyToken,deleteTable);

module.exports=router;