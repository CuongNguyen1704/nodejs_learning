const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// cấu hình path trang chủ tương ứng với foder public
app.use(express.static(path.join(__dirname, 'public')))

// Setup Handlebars
// khai báo template engin tên là hbs 
app.engine('hbs', exphbs.engine({
    // định nghĩa đuôi .hbs thay vì .handlebars mặc định
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// Logger
app.use(morgan('combined'));

// Route
app.get('/', (req, res) => {
    res.render('home'); // sẽ tìm file home.handlebars trong thư mục views
});
app.get('/news', (req, res) => {
    res.render('news'); // sẽ tìm file home.handlebars trong thư mục views
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
