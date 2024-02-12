const express = require('express');
const  router = express.Router();
const { verifyToken} = require('../../Middleware/fireBase/Auth');
const {createTable,deleteTable}  = require('../../Controllers/Table/TableController');

router.post('/create-table',verifyToken,createTable);
router.put('/delete-table',verifyToken,deleteTable);

module.exports=router;