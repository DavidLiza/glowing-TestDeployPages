var express = require('express'),
    router  = express.Router();

var greetController  = require('../controllers/greetController');

// **************** ERROR CATCH *****************
process.on("uncaughtException", function (err) {
    console.error("ERROR URLS-ROUTES: " + err);
});


// ***************************** Fucnionalidades Extras   ***************************
const greets = (body , res , next) => {
    try{
        if  (body.body.name === undefined || body.body.name === '' ) {
            return res.status(200).json({
                code: 'GRE001',
                error: 'Invalid parameter: name'
            });
        }
        let resp = greetController.greeting(body.body);
        return res.status(200).json({
            code: 'GRE000',
            message: resp
        }); 
    } catch (error){
        console.error(myUtils.getDateTime() + " SERVER ERROR");
        return res.send({
            code: 'GRE003',
            message: error
        });
    }

};


router.post('/greeting', greets  );


module.exports = router;