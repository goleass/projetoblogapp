if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb+srv://leonardogomes_19:X1WEcEXq@cluster0-1dzcg.mongodb.net/blogapp-prod?retryWrites=true'}
}else{
    module.exports ={mongoURI: 'mongodb://localhost/blogapp'}
}