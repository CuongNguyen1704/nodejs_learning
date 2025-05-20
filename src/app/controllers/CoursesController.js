
const  Course  = require('../models/Course');
const {mutipleMongooseObject, mongooseToObject} = require('../../util/mongoose')

class CoursesController {
  
  // GET courses/slug
  show(req, res,next) {
    // res.send('Courses Deatail - ' + req.params.slug);
    Course.findOne({slug: req.params.slug})
      .then(course => {
          res.render('courses/show',{ course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
