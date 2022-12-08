let namae = ['アリス1', 'アリス2', 'アリス3','アリス4','アリス5','アリス6','アリス7','アリス8']
let at = ['arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki','arith_nazotoki']

function counter(){
    document.getElementById("cre").innerHTML = pr();
    document.getElementById("cre2").innerHTML = pr2();
    document.getElementById("uz").innerHTML = prat();
    document.getElementById("uz2").innerHTML = prat2();
    nazovotecnt = nazovotecnt + 2;
}

function pr(){
    return namae[nazovotecnt];
}

function pr2(){
    return namae[nazovotecnt + 1];
}

function prat(){
    return at[nazovotecnt];
}

function prat2(){
    return at[nazovotecnt+ 1];
}