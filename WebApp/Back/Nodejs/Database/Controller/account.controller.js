const db = require('../Init/index');
const accounts = db.accounts;

/******************************JWT****************************/

const jwt = require('jsonwebtoken');

function jws_create(account_id) {
    return jwt.sign(
    {id: account_id}, 
    'tmp token',
    {expiresIn: '1 hour'}
    );
}

function jws_retrieve(jws_token) {
    return jwt.verify(jws_token, 'tmp token');
}

/***********************Account creation***********************/

exports.create_account = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Invalid body'
        });
    }
    const new_account = {
        username: req.body.username,
        mail: req.body.mail,
        password: req.body.password,
    }

    if (!req.body.phone) {
        new_account.phone = req.body.phone;
    }

    accounts.findOne({where: {mail: req.body.mail}})
    .then(rep => {
        if (rep != null) {
            res.send("This email is already used");
        } 
        else {
            accounts.findOne({where: {username: req.body.username}})
            .then(rep => {
                if (rep != null) {
                    res.send("This username is already used");
                } 
                else {
                    accounts.create(new_account)
                    .then(rep => {
                        res.json({
                            access_token: jws_create(rep.dataValues.id),
                            expires_in: 3600
                        });
                    })
                    .catch(err => {
                        res.send({message: "An error has occurred while creating an account."
                        });
                    });
                }     
            });
        }     
    });
}

/***********************Account retrieve***********************/

exports.findUser = (req, res) => {
    const mail = req.body.mail;
    const password = req.body.password;

    accounts.findOne({where: {mail: mail, password: password,}})
    .then(rep => {
        res.json({
            access_token: jws_create(rep.dataValues.id)
        });
    })
    .catch(err => {
        res.send({
            message: "Some error occurred while retrieving an account."
        });
    });
}; 