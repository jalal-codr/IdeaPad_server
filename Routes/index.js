const app = require('../index');
const  express = require('express');
const router = express.Router();
const helloRoute = require('./hello/hello.routes');
const noteRoutes = require('./Notes/notes.routes');


router.get('/',helloRoute);

//Notes routes
router.post('/getNotes',noteRoutes);
router.post('/createNote',noteRoutes);
router.put('/deleteNote',noteRoutes);
router.put('/getNote',noteRoutes);

module.exports = router;