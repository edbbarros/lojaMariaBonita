module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'bdloja',
            dialect: 'mysql',
            user: 'root',
            password: 'Ed2501@@'

        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }   
}