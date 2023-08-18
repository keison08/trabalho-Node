module.exports = {
    HOST: "localhost",
    PORT: "3000",
    USER: "keison08",
    PASSWORD: "bola0826",
    DB: "neosyx.db",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};