var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http'); // Import thêm http module
var socketIo = require('socket.io'); // Import socket.io module

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var connectDB = require('./config/db');

var app = express();
var server = http.createServer(app); // Tạo server từ Express app
var io = socketIo(server); // Khởi tạo socket.io và kết nối với server HTTP

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
connectDB();

// Socket.io setup
// io.on('connection', (socket) => {
//     console.log('Client connected');

//     // Xử lý khi client đăng ký để nhận thông báo (registerForNotifications)
//     socket.on('registerForNotifications', () => {
//         console.log('Client registered for notifications');
//         // Thực hiện các thao tác cần thiết khi có client đăng ký nhận thông báo
//     });
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = { app, server }; // Export app và server để sử dụng trong các module khác
