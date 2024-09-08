function omikujidisplay(){
  var omikuji = new Array("大吉！！","吉","中吉","小吉","末吉","凶","大凶...。");//おみくじ種類追加//

  //おみくじの写真読み込み//
  var images = {
    "大吉！！": "daikichi.png",
    "吉": "kichi.png",
    "中吉": "chuukichi.png",
    "小吉": "shoukichi.png",
    "末吉": "suekichi.png",
    "凶": "kyo.png",
    "大凶...。": "daikyo.png"
  };

  var random = Math.random();

  //おみくじ確率(吉16％,その他14％)
  if(random < 0.14){
    var message = omikuji[0];
  }else if(random < 0.30){
    var message = omikuji[1];
  }else if(random < 0.44){
    var message = omikuji[2];
  }else if(random < 0.58){
    var message = omikuji[3]; 
  }else if(random < 0.72){
    var message = omikuji[4];
  }else if(random < 0.86){
    var message = omikuji[5];
  }else{
    var message = omikuji[6];
  }

 //var message = omikuji[number];

  var imgSrc = images[message];


  var object = document.getElementById("omikuji");
  object.innerHTML = '<typewritten-text>' + message + '</typewritten-text>';

  var imageObject = document.querySelector("img[alt='おみくじのフリー素材']");
  imageObject.src = imgSrc;

  // ログを右下に表示
  var log = document.getElementById("log");
  log.innerHTML += message + "<br>"; 
  // 自動で下までスクロール
  log.scrollTop = log.scrollHeight;
}

