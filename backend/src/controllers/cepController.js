const status = require("http-status");
const getRequest = require("../models/cepGetRequest");

exports.getCEP = (req, res, next) => {
    getRequest("viacep.com.br", "/ws/" + req.params.cep + "/json/", "GET").then(objCEP => {
        res.status(status.OK).json(JSON.parse(objCEP));
    }).catch(err => {
        res.status(status.BAD_REQUEST).send("Erro Ao Obter CEP" + err);
    });
}