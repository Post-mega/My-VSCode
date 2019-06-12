const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1212zxzxc'
});

connection.connect();

connection.query('drop database test')

connection.query('create database if not exists test')

connection.query('use test')


// 创建 comment 数据表
connection.query(`create table if not exists comment(
    id int unsigned auto_increment,
    evaluate_content varchar(100) not null, 
    evaluate_time varchar(100) not null, 
    picture varchar(100) not null, 
    picture_url varchar(100) not null, 
    judge_ban char(5) not null, 
    user_id int unsigned, 
    seller varchar(100) not null, 
    order_id int unsigned, 
    commodity varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 user 数据表
connection.query(`create table if not exists user(
    id int unsigned auto_increment,
    openid char(100) not null,
    name varchar(100) not null default '张三',
    nickname varchar(100) not null,
    sex char(2) not null,
    wx_number int unsigned,
    qq_number int unsigned,
    phone int unsigned,
    user_buy int unsigned,
    judge_lock char(2) not null,
    headimgurl varchar(3000) not null,
    province varchar(100) not null,
    city varchar(100) not null,
    country varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 commodity 数据表
connection.query(`create table if not exists commodity(
    id int unsigned auto_increment,
    c_name varchar(100) not null,
    c_subname varchar(100) not null,
    c_imgurl varchar(100) not null,
    sub_title varchar(100) not null,
    hot char(2) not null,
    priginal_price int unsigned default 100,
    discount_price int unsigned default 80,
    introdution varchar(100) not null,
    putaway date,
    outaway date,
    remarks varchar(100) not null,
    pre_sale char(2) not null,
    buy_num int unsigned,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 commodity_detail 数据表
connection.query(`create table if not exists commodity_detail(
    id int unsigned auto_increment,
    commodity_content varchar(100) not null,
    commodity_id varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 order_list 数据表
connection.query(`create table if not exists order_list(
    id int unsigned auto_increment,
    express_id int unsigned not null,
    express_company varchar(100) not null,
    state int not null,
    order_id int unsigned,
    attach varchar(100),
    address varchar(100) not null,
    address_name varchar(100) not null,
    address_phone int unsigned not null,
    user_info int unsigned,
    time_end date not null,
    money int unsigned not null,
    commodity_id int unsigned,
    commodity_number varchar(100) not null,
    commo_img varchar(100) not null,
    merchant_id int unsigned,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 help_con 数据表
connection.query(`create table if not exists help_con(
    id int unsigned auto_increment,
    title varchar(100) not null,
    content varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 administrator 数据表
connection.query(`create table if not exists administrator(
    id int unsigned auto_increment,
    username varchar(100) not null,
    password varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 lunbo 数据表
connection.query(`create table if not exists lunbo(
    id int unsigned auto_increment,
    commodity_id int unsigned,
    imgurl varchar(100) not null,
    url varchar(100) not null,
    PRIMARY KEY (id)
    )`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 customer_server 数据表
connection.query(`create table if not exists customer_server(
    id int unsigned auto_increment,
    phone int unsigned,
    wx_number varchar(100) not null,
    webname varchar(100) not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 address_province 数据表
connection.query(`create table if not exists address_province(
    my_id int unsigned,
    name varchar(100) not null,
    province_name varchar(100) not null)`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 address_city 数据表
connection.query(`create table if not exists address_city(
    my_id int unsigned not null,
    father_id int unsigned not null,
    name varchar(100) not null
    )`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 address_menu 数据表
connection.query(`create table if not exists address_menu(
    my_id int unsigned not null,
    father_id int unsigned not null,
    city_name varchar(100) not null
    )`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 address 数据表
connection.query(`create table if not exists address(
    id int unsigned auto_increment,
    address_name varchar(100) not null,
    address_phone varchar(100) not null,
    address_code varchar(100) not null,
    address_detail varchar(100) not null,
    address_string varchar(100) not null,
    address_default char(10) not null,
    user_info int unsigned,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

// 创建 shopping 数据表
connection.query(`create table if not exists shopping(
    id int unsigned auto_increment,
    commodity_info int unsigned not null,
    user_info int unsigned not null,
    click char(10) not null,
    commodity_num int unsigned not null,
    PRIMARY KEY (id))`
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)



connection.end();