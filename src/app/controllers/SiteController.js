
const  Course  = require('../models/Course');
const {mutipleMongooseObject} = require('../../util/mongoose')

class SiteController {
  // [GET] /news
  index(req, res) {

    // cách lấy dữ liệu từ database ra 
    Course.find({})
        .then(courses => {
             // Sửa lại courses thành Object bình thường
            // courses = courses.map(courses => courses.toObject());
            // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
            res.render('home',{
              courses: mutipleMongooseObject(courses)
            });
        })
        .catch(err => {
            // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });

    
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
