let namae = ['アリス1', 'アリス2', 'アリス3','アリス4','アリス5','アリス6','アリス7','アリス8']
let at = ['arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_sub','arith_nazotoki','','']

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