const express = require('express');
const router = express.Router();


const coursesController = require('../app/controllers/CoursesController');

// Route use không phải định nghĩa chi tiết route
// ( khi viết route use thì tất cả mọi resquest phải chạy qua vì thế các route khác không bao giờ được chạy tới)
// Ví dụ:  router.use('/', newsController.index)
//         router.use('/test', newsController.test)
// Điều trên khiến chỉ có một mình route ('/') sử dụng được

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id/', coursesController.update);
router.get('/:slug', coursesController.show);



// router.get('/', newsController.index)
// router.get('/test', newsController.test)

module.exports = router;
