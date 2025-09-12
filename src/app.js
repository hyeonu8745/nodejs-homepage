
const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extends:true}))

// 라우트 설정
app.get('/', (req, res) => {
  res.render('index', { title: 'SweetFactory' });
});

app.get('/products', (req, res) => {
  res.render('products', { title: '제품 소개' });
});

app.get('/marketing', (req, res) => {
  res.render('marketing', { title: '마케팅 및 홍보' });
});

app.get('/quality', (req, res) => {
  res.render('quality', { title: '제조 및 품질관리' });
});

app.get('/vision', (req, res) => {
  res.render('vision', { title: '미래 비전' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: '내정보' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: '로그인' });
});

app.post('/login-action', (req, res) => {
  // 폼의 name 속성과 일치하게 변수명을 수정합니다.
  const { username, passwd } = req.body; 

  console.log("username:", username);
  console.log("password:", passwd);
  
  res.send(`USER: ${username}, PWD: ${passwd}`);

});


// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
