const cors = require('cors')
const path = require('path');
const express = require('express');
const connectDB = require('./config/db')


const app = express();


connectDB();

var whitlelist = ['http://localhost:3000','http://localhost:5000']

var corsOption = {
    origins: function(origin,callback){
        if(whitlelist.indexOf(origin)!=-1){
            callback(null,true)
        }else{
            callback(new Error('not allwoed'))
        }
    }
}

app.use(express.json({ extended: false }))


app.use(cors(corsOption))
app.options('*',cors(corsOption))

app.use('/api/products', require('./routes/api/products'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


if(process.env.NODE_ENV === 'default.json'){

    app.get('*');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
