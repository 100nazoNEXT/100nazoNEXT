var btn = document.getElementById('btn');
 
    btn.addEventListener('click', function() {
      
    })

    var val = document.form.input.value;
            var target = document.getElementById("output");

            if (val == "はじまり||ハジマリ||始まり") {
                target.innerHTML = "合っています。";
            } else {
                target.innerHTML = "間違っています。";
            }