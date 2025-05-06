const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// nhận fuciton từ file routes/index.js
const route = require('./routes')

// cấu hình path trang chủ tương ứng với foder public
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded()); // dùng để phân tích dữ liệu form từ HTML gửi lên bằng phương thức post (giúp đọc được req.body)
app.use(express.json());

// Setup Handlebars
// khai báo template engin tên là hbs 
app.engine('hbs', exphbs.engine({
    // định nghĩa đuôi .hbs thay vì .handlebars mặc định
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// Home, search, contact

// Route init
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

