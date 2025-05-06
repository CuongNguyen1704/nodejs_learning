const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');


// Route use không phải định nghĩa chi tiết route
// ( khi viết route use thì tất cả mọi resquest phải chạy qua vì thế các route khác không bao giờ được chạy tới)
// Ví dụ:  router.use('/', newsController.index) 
//         router.use('/test', newsController.test) 
// Điều trên khiến chỉ có một mình route ('/') sử dụng được

router.use('/:slug', newsController.show)
router.use('/', newsController.index)
// router.get('/', newsController.index)
// router.get('/test', newsController.test)

module.exports = router;

