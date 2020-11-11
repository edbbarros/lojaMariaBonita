const Usuario = require("../models/usuario");
const status = require("http-status");

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const datanascimento = req.body.datanascimento;
    const pontoderefencia = req.body.pontoderefencia;
    const email = req.body.email;
    const uf = req.body.uf;
    const localidade = req.body.localidade; //cidade
    const bairro = req.body.bairro;
    const logradouro = req.body.logradouro;

    Usuario.create({
        nome: nome,
        telefone: telefone,
        datanascimento: datanascimento,
        pontoderefencia: pontoderefencia,
        email: email,
        uf: uf,
        localidade: localidade,
        bairro: bairro,
        logradouro: logradouro,
    })
        .then((usuario) => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch((error) => next(error));
};

exports.SearchAll = (req, res, next) => {
    Usuario.findAll()
        .then((usuario) => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            }
        })
        .catch((error) => next(error));
};
exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then((usuario) => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch((error) => next(error));
};
exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const datanascimento = req.body.datanascimento;
    const pontoderefencia = req.body.pontoderefencia;
    const email = req.body.email;
    const uf = req.body.uf;
    const localidade = req.body.localidade;
    const bairro = req.body.bairro;
    const logradouro = req.body.logradouro;

    Usuario.findByPk(id).then((usuario) => {
        if (usuario) {
            usuario.update({
                nome: nome,
                telefone: telefone,
                datanascimento: datanascimento,
                pontoderefencia: pontoderefencia,
                email: email,
                uf: uf,
                localidade: localidade,
                bairro: bairro,
                logradouro: logradouro,
            },
                {
                    where: { id: id }
                })
                .then(() => {
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                usuario.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}