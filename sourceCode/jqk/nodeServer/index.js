const express = require("express");
const app = express();
const https = require("https");

const os = require("os");
function getIPAdress(os) {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
const IPv4 = getIPAdress(os);
app.listen(8088, () =>
  console.log("服务：http://localhost:8088；本机ip" + IPv4)
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// app.get是拦截到get请求
app.get("*", (req, res, next) => {
  switch (req.path) {
    case "/":
      res.json({ IPv4 });
    default:
      next();
  }
});

// 请求最新消息
app.get("/zhihu", (req, respoens) => {
  var page = req.query.page ? req.query.page : 4;
  https
    .get("https://news-at.zhihu.com/api/" + page + "/news/latest", res => {
      res.on("data", d => {
        let data = d.toString("utf-8");
        respoens.json(JSON.parse(data));
      });
    })
    .on("error", e => {
      console.error("错误：", e);
    });
});

// 根据消息的id获取消息的详细信息
const iconv = require("iconv-lite");
app.get("/ditail", (req, respoens) => {
  https.get("https://news-at.zhihu.com/api/4/news/" + req.query.id, res => {
    var chunks = [];
    res
      .on("data", d => {
        chunks.push(d);
      })
      .on("end", function() {
        chunks = Buffer.concat(chunks);
        var body = iconv.decode(chunks, "utf-8");
        respoens.end(body);
      })
      .on("error", e => {
        console.error("错误：", e);
      });
  });
});

