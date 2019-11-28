'use strict'
module.exports = (app) => {
    app.enable('trust proxy');
    app.use((req,res,next)=>{
        console.log('will redierct?', req.secure)
        if(req.secure){
            next();
        }
        else{
            res.redirect(301, `https://${req.headers.host}/app${req.url}`);
        }
    });
}