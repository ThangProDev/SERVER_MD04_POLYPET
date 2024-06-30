// const mongoose = require('mongoose');
 require('dotenv').config();

 const mongoURI = process.env.MONGO_URI;
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });

//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const atlat = mongoURI;
const connectDB = async ()=>{
    try {
        await mongoose.connect(atlat, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
        console.log('connect successfully')
    } catch (error) {
        console.log(error)
        console.log('connect fail')
    }
};
module.exports = connectDB;