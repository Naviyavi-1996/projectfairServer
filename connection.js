//import mongoose

const mongoose = require('mongoose');
const connectionstring = process.env.DATABASE;

mongoose.connect(connectionstring).then(()=>{console.log("mongodb connected succesfully");

}).catch((err)=>{console.log(`mongodb connection failed due to ${err}`);
})

