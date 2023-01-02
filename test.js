let namae = ['アリス1', 'アリス2', 'アリス3','アリス4','アリス5','アリス6','アリス7','アリス8']
let at = ['arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','','']
let ex = ['4つの単語をそれぞれ「め欠け」「な無し」「し無い」「け無視」と捉え、「めかけななししないけむし」から「め」「な」「し」「け」を全て消すことで「かいむ」となります。よって正解は『皆無』です。','','','','','','傾いている大きいアルファベットが壁の迷路と捉え、S(スタート)からG(ゴール)まで進むと「KOTAE HA MEIRO」を通ります。よって答えは『迷路』でした！','']
                        

function arrayShuffle(array) {
    for(var i = (array.length - 1); 0 < i; i--){
      var r = Math.floor(Math.random() * (i + 1));
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
}  

function counter(){
    nazovotecnt += 2;
    if (nazovotecnt >= 8) {
        arrayShuffle(numbers);
        nazovotecnt = 0;
    }
    document.getElementById("cre").innerHTML = pr();
    document.getElementById("cre2").innerHTML = pr2();
    document.getElementById("uz").innerHTML = prat();
    document.getElementById("uz2").innerHTML = prat2();
    url = abcd[num = numbers[nazovotecnt]];
    chlink.setAttribute('href', url);
    url2 = abcd2[num = numbers[nazovotecnt + 1]];
    chlink2.setAttribute('href', url2);
    jp = nazo[num = numbers[nazovotecnt]];
    document.getElementById("gazou").src=jp;
    jp2 = nazo[num = numbers[nazovotecnt + 1]];
    document.getElementById("gazou2").src=jp2;
    if (numbers[nazovotecnt] == 0 || numbers[nazovotecnt] == 6) {
        document.getElementById("vi").innerHTML = prex();
        document.getElementById("vis").style.display="block";
        document.getElementById("visi").style.display="none";
    } else {
        chwer = naz[suuji = numbers[nazovotecnt]];
        document.getElementById("werch").src=chwer;
        document.getElementById("vis").style.display="none";
        document.getElementById("visi").style.display="block";
    }
    if (numbers[nazovotecnt + 1] == 0 || numbers[nazovotecnt + 1] == 6) {
        document.getElementById("vi2").innerHTML = prex2();
        document.getElementById("vis2").style.display="block";
        document.getElementById("visi2").style.display="none";
    } else {
        chwer2 = naz2[suuji = numbers[nazovotecnt + 1]];
        document.getElementById("werch2").src=chwer2;
        document.getElementById("vis2").style.display="none";
        document.getElementById("visi2").style.display="block";
    }
    if (numbers[nazovotecnt] == 6 || numbers[nazovotecnt] == 7) {
        document.getElementById("toumei").style.visibility="hidden";
    } else {
        document.getElementById("toumei").style.visibility="visible";
    }
    if (numbers[nazovotecnt + 1] == 6 || numbers[nazovotecnt + 1] == 7) {
        document.getElementById("toumei2").style.visibility="hidden";
    } else {
        document.getElementById("toumei2").style.visibility="visible";
    }
}

function pr(){
    let num = numbers[nazovotecnt];
    return namae[num];
}

function pr2(){
    let num = numbers[nazovotecnt + 1];
    return namae[num];
}

function prat(){
    let num = numbers[nazovotecnt];
    return at[num];
}

function prat2(){
    let num = numbers[nazovotecnt + 1];
    return at[num];
}

function prex(){
    let num = numbers[nazovotecnt];
    return ex[num];
}

function prex2(){
    let num = numbers[nazovotecnt + 1];
    return ex[num];
}