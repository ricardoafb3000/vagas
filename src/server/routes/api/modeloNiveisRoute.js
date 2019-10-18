import express from 'express';
import { validateForErrors } from "../../../validations/validation";
import { rules } from "../../../validations/modeloNiveisValidationRules";
import { emptyOr } from "../../../utils/null";

let data = null;

if (process.env.MOCK_DATA) {
    data = require("../../../data/modeloNiveisMock");
}

export default 
express.Router()
.get('/', function (req, res) {
    const filters = req.query["filters"];

    if (process.env.MOCK_DATA) {
        res.json(data);
    }
})
.get('/:id', function (req, res) {
    const id = req.params["id"];

    if (process.env.MOCK_DATA) {
        const found = data.filter(item => item.id == id)[0];
        if (emptyOr(found)) {
            res.status(404).send(`id "${id}" not found`);
        }
        else {
            res.json(found);
        }
    }
})
.post('/', function (req, res) {
    const body = req.body;
    const id = body.id;

    const errors = validateForErrors(body, rules);

    if (errors.length == 0) {
        if (process.env.MOCK_DATA) {
            if (id < 0) {
                data.push({
                    ...body,
                    id: Math.max(data.map(item => item.id)) + 1
                });
                res.status(200);
            }
            else
            {
                const found = data.filter(item => item.id == id)[0];
                if (emptyOr(found)) {
                    res.status(404).send(`id "${id}" not found`);
                }
                else {
                    found.nome = body.nome;
                    found.niveis = body.niveis;
    
                    res.status(200);
                }
            }
        }
    }
    else {
        res.status(400).json(errors);
    }
})
.delete('/:id', function (req, res) {
    const id = req.params["id"];

    if (process.env.MOCK_DATA) {
        const found = data.filter(item => item.id == id)[0];
        if (emptyOr(found)) {
            res.status(404).send(`id "${id}" not found`);
        }
        else {
            data = data.filter(item => item.id != id);
            res.status(200);
        }
    }
});