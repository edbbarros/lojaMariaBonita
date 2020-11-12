document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#Cep").addEventListener("focusout", evt => {
        getCEP("http://localhost:3003/sistema/cep/" + document.querySelector("#Cep").value).then(data => {
            let UF = document.querySelector("#UF");
            let local = document.querySelector("#local");
            let Bairro = document.querySelector("#Bairro");
            let Logradouro = document.querySelector("#Logradouro");
            UF.value = JSON.parse(data).uf;
            local.value = JSON.parse(data).localidade;
            Bairro.value = JSON.parse(data).bairro;
            Logradouro.value = JSON.parse(data).logradouro;
        }).catch(err => {
            console.log("Error");
        });
    });

    document.querySelector("#form1").addEventListener("submit", evt => {
        evt.preventDefault();
        let nome = document.querySelector("#nome");
        let tel = document.querySelector("#tel");
        let dnasc = document.querySelector("#dnasc");
        let Cep = document.querySelector("#Cep");
        let pRef = document.querySelector("#pRef");
        let email = document.querySelector("#email");
        let UF = document.querySelector("#UF");
        let local = document.querySelector("#local");
        let Bairro = document.querySelector("#Bairro");
        let Logradouro = document.querySelector("#Logradouro");
        let sendJson = {
            "nome": nome.value,
            "telefone": tel.value,
            "datanascimento": dnasc.value,
            "cep": Cep.value,
            "pontoderefencia": pRef.value,
            "email": email.value,
            "uf": UF.value,
            "localidade": local.value,
            "bairro": Bairro.value,
            "logradouro": Logradouro.value
        }
        sendUser("http://localhost:3003/sistema/usuarios/", sendJson).then(res => {
            console.log(res);
            location.reload();
        }).catch(err => {
            console.log("Error");
        });
    });
});

let getCEP = (url) => new Promise((resolve, reject) => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseText);
        } else if (this.readyState == 4 && this.status !== 200 && this.status !== 0) {
            console.log("Error: Verifique a permissão de acesso!");
            reject("error: " + this.status);
        } else if (this.readyState == 4 && this.status == 0) {
            console.log("Error: desconhecido, Resposta do servidor: " + url + ", não recebida.");
            reject("Error: desconhecido, Resposta do servidor não recebida.");
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});


let sendUser = (url, jsonData) => new Promise((resolve, reject) => {
    var data = JSON.stringify(jsonData);
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            resolve("Criado Com Sucesso!");
        } else if (this.readyState == 4 && this.status !== 200 && this.status !== 0) {
            console.log("Error: Verifique a permissão de acesso!" + this.status);
            reject("error: " + this.status);
        }
    });
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
});