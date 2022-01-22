const mongoose = require('mongoose');
mongoose.connect(url,(err)=>{
    if(err)
      console.log(err);
      console.log("connected to the database");
});