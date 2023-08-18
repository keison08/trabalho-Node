module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTERGER 
        },

        nome: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        jogadores: {
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.STRING
        }
    });

    return User;
};