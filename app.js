const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '210.125.31.247',
  port     : '3306',
  user     : 'test',
  password : 's1234',
  database : 'upright'
});

connection.connect();

connection.query('SELECT gradient FROM upright.habit_count', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

// 이제 터미널에 node app.js 를 입력해보자.

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.send() 내부의 문자열이 띄워진다.

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/generic.html")
})


app.use(express.static('public'))

app.post('/', function(req, res){
    var responseData = {};
   
    var query =  connection.query('select ?? from ?? where uid="ma" ORDER BY ?? DESC limit 10', function(err,rows){
      responseData.score = [];
      if(err) throw err;
      if(rows[0]){
        responseData.result = "ok";
        rows.forEach(function(val){
          responseData.score.push(val.score);
        })
      }
      else{
        responseData.result = "none";
        responseData.score = "";
      }
      res.json(responseData);
    });
  });