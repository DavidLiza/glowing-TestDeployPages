var config      = require('../config/config.json')[process.env.NODE_ENV || 'development'];

var  urlConvertion = {

    /* Converting a base64 string to a URL. */
    greeting     : async function ( req , service ){
        
        try {
            console.log('Converting : ' + JSON.stringify(req));
            return ("Holiiiis");
        } catch (err) {
            console.error ("CATCHED SOME ERROR IN CONVERTION CONTROLLER : " + err);
            return ("INTERNAL ERROR");
        }
    }
}


module.exports = urlConvertion;