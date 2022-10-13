(async () => {

    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const database = require('./database');

    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.listen(process.env.PORT || 3333);

    require('./src/routes/index')(app);
    try {
        const result = await database.sync();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }

})()