class NewController {
    // [GET] /news
    index (req,res) {
        res.render('news');
    }
    show (req,res){
        res.send('NEWS DEATAILS')
    }
}

module.exports = new NewController;  