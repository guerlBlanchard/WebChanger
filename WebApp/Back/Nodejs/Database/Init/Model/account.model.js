module.exports = (sequelize, Datatypes) => {
    const Accounts = sequelize.define("accounts", {
        username: {
            type: Datatypes.STRING
        },
        mail: {
            type: Datatypes.STRING
        },
        password: {
            type: Datatypes.STRING
        },
        phone: {
            type: Datatypes.STRING
        }
    });
    return Accounts;
}