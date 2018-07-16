const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const koaCors = require('koa-cors');
const model = require('./sql/model');

const app = new Koa();

app.use(bodyParser());
app.use(koaCors());

const User = model.user;
const Questionaire = model.questionaire;
const Question = model.question;

(async () => {
  await User.sync();
})();
(async () => {
  await Questionaire.sync();
})();
(async () => {
  await Question.sync();
})();

router.post('/login', async (ctx, next) => {
  let name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`login with name: ${name}, password: ${password}`);
  let u = await User.findAll({
    where: {
      name: name
    }
  });
  u = JSON.parse(JSON.stringify(u))[0];
  console.log(u);
  if (u && u.password === password) {
    ctx.response.type = 'application/json;charset=utf-8;';
    ctx.response.body = {
      success: true,
      id: u.id,
      name: u.name,
      property: u.property,
      state: u.state,
      createAt: u.createAt
    }
  } else {
    ctx.response.type = 'application/json;charset=utf-8;';
    ctx.response.body = {
      success: false
    }
  }
});

router.get('/checkUserName', async (ctx, next) => {
  let name = ctx.query.name;
  let u = await User.findAll({
    where: {
      name: name
    }
  });
  u = JSON.parse(JSON.stringify(u));
  ctx.response.type = 'application/json;charset=utf-8;';
  if (u.length) {
    ctx.response.body = {
      success: true,
      find: true
    }
  }
  else {
    ctx.response.body = {
      success: true,
      find: false
    }
  }
})

router.post('/register', async (ctx, next) => {
  let name = ctx.request.body.name || '',
      password = ctx.request.body.password || '',
      now = Date.now();
  console.log(`register with name: ${name}, password: ${password}`);
  let u = await User.create({
    name: name,
    password: password,
    createAt: now
  });
  u = JSON.parse(JSON.stringify(u));
  console.log(u);
  ctx.response.type = 'application/json;charset=utf-8;';
  ctx.response.body = {
    success: true
  }
});

router.get('/getTotalUsers', async (ctx, next) => {
  let u = await User.findAll();
  u = JSON.parse(JSON.stringify(u));
  ctx.response.type = 'application/json;charset=utf-8;';
  ctx.response.body = {
    success: true,
    count: u.length
  }
})

router.post('/createQuestionaire', async (ctx, next) => {
  let uid = ctx.request.body.userId,
      title = ctx.request.body.title,
      statement = ctx.request.body.statement,
      now = Date.now();
  console.log(`user ${uid} create questionaire ${title} with statement ${statement}`);
  let q = await Questionaire.create({
    userId: uid,
    title: title,
    statement: statement,
    createAt: now
  });
  q = JSON.parse(JSON.stringify(q));
  console.log(q);
  ctx.response.type = 'application/json;charset=utf-8;';
  ctx.response.body = {
    success: true
  }
});

router.get('/getQuestionaires', async (ctx, next) => {
  let uid = ctx.query.userId;
  console.log(`query questionaires of user ${uid}`);
  let qns = await Questionaire.findAll({
    where: {
      userId: uid
    }
  });
  qns = JSON.parse(JSON.stringify(qns));
  console.log(qns);
  ctx.response.type = 'application/json;charset=utf-8;';
  ctx.response.body = {
    success: true,
    questionaires: qns
  }
});

app.use(router.routes());
app.listen(8080);
console.log('app started at port 8080...');