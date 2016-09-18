function sendText() {
    var htpp = document.getElementById("HTTPs").value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', htpp, true);
    xhr.onload = function (d) {
        if (this.status == 200) {
            document.getElementById("resposta").innerHTML = this.responseText;
            var body = this.responseText;
            var jsonData = JSON.parse(body);
            var result = jsonData.result;
            var rs = result.length;
            if (rs > 0) {
                msg = "";
                for (i = rs - 1; i > 0; i--) {
                    var text = result[i].message.text;
                    var nome = result[i].message.from.first_name;
                    var hora = result[i].message.date;
                    var time = hora;
                    var d = new Date(time * 1000);
                    var n = d.toLocaleDateString();
                    var g = d.toLocaleTimeString();

                    document.title = rs + " " + " @htx_bot"; 
                    msg = "<p>" + msg + (n + " </br>" + g + " " + " " + nome + ":" + "</br> " + text) + "</p>";
                   resposta.innerHTML = msg;
                }
            }
        }
    };
    xhr.send();
}

setInterval(sendText, 1000);