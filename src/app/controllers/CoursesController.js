const Course = require("../models/Course");
const {
  mutipleMongooseObject,
  mongooseToObject,
} = require("../../util/mongoose");

class CoursesController {
  // GET courses/slug
  show(req, res, next) {
    // res.send('Courses Deatail - ' + req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
      Course.updateOne({_id:req.params.id},req.body)
         .then(() => res.redirect('/me/stored/courses'))
         .catch(next);
  }

  // [POST] /courses/store
  store(req, res, next) {
    // Gán link image vào req.body
    const formData = req.body;
    formData.image = "https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png";

    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CoursesController();
