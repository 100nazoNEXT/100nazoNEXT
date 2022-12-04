let nazo = ['Q10.jpg','Q20.jpg','Q40.jpg','Q60.jpg','Q70.jpg','Q80.jpg']
let name = ['アリス1', 'アリス2', 'アリス3','アリス4','アリス5','アリス6']
let ex = ['4つの単語をそれぞれ「め欠け」「な無し」「し無い」「け無視」と捉え、「めかけななししないけむし」から「め」「な」「し」「け」を全て消すことで「かいむ」となります。よって正解は『皆無』です。','',Q40正解.jpg,'Q60正解.jpg','Q70正解.jpg',Q80正解.jpg]
let num = 0;

function generate_randomx(count) {
    //生成した乱数を格納する配列を初期化
    var generated = new Array();
    //生成した乱数を格納している配列の長さ（生成した乱数の数）
    var generatedCount = generated.length;
    //パラメータ count の数だけ Math.random()で乱数を発生
    for(var i = 0 ; i < count; i++){   
      var candidate = Math.floor(Math.random() * count);
      //今まで生成された乱数と同じ場合は再度乱数を発生
      for(var j = 0; j < generatedCount; j++) {  // このコメントは無視>
        if(candidate == generated[j]){
          candidate = Math.floor(Math.random() * count);
          j= -1;
        }
      }
      generated[i] = candidate;  
      generatedCount++;
    }
    return generated;  
}

function generate_randomx2(count) {
  //生成した乱数を格納する配列を初期化
  var generated = new Array();
  //生成した乱数を格納している配列の長さ（生成した乱数の数）
  var generatedCount = generated.length;
  //パラメータ count の数だけ Math.random()で乱数を発生
  for(var i = 0 ; i < count; i++){   
    var candidate = Math.floor(Math.random() * count);
    //今まで生成された乱数と同じ場合は再度乱数を発生
    for(var j = 0; j < generatedCount; j++) {  // このコメントは無視>
      if(candidate == generated[j]){
        candidate = Math.floor(Math.random() * count);
        j= -1;
      }
    }
    generated[i] = candidate;  
    generatedCount++;
  }
  return generated[0];  
}

function button_click(value) {
  var target = document.getElementById("searchLink");
  if (value == 0) {
    target.href = "https://twitter.com/arith_nazotoki";
    target.innerText = "＠arith_nazotoki";
  }
  else if (value == 1) {
    target.href = "http://twitter.com/arith_nazotoki";
    target.innerText = "＠arith_nazotoki";
  }
  else if (value == 2) {
    target.href = "http://twitter.com/arith_nazotoki";
    target.innerText = "＠arith_nazotoki";
  }
  else if (value == 3) {
    target.href = "http://twitter.com/arith_nazotoki";
    target.innerText = "＠arith_nazotoki";
  }
  else if (value == 4) {
    target.href = "";
    target.innerText = "";
  }
  else if (value == 5) {
    target.href = "http://twitter.com/arith_nazotoki";
    target.innerText = "＠arith_nazotoki";
  }
}