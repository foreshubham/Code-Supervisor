require('dotenv').config();
const app = require('./src/app')





app.listen(8080,()=>{ 
    console.log('Server is running on PORT 8080')
 })