module.exports = {
    apps: [{
        name: 'api-fortune-teller',
        script: 'npm',
        args: 'run production',
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
            NODE_ENV: 'development',
            PORT: 1001,
            HOST: "127.0.0.1",

            API_DB_HOST: "mcdvietnam.com.vn",
            DB_NAME: "FortuneTeller",
            DB_USER: "develop-1",
            DB_PASS: "mcD31072019Mcd"

        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 1001,
            HOST: "127.0.0.1",

            API_DB_HOST: "mcdvietnam.com.vn",
            DB_NAME: "FortuneTeller",
            DB_USER: "develop-1",
            DB_PASS: "mcD31072019Mcd"

        }
    }]
};