const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const usersRoutes = require('./routes/v1/users/users.routes');

app.use( cors() );
app.use( express.json() );

app.use('/api/v1/users', usersRoutes);



app.listen(PORT, () => {
    console.log(`Server Running http://localhost:${PORT}`);
});
