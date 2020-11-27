const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{

    req.session.destroy();
    res.redirect('/login');
    res.cookie['blood_grp'] = "";
    
});
module.exports = router;