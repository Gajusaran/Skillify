const registeruser = (req,res)=>{
   const username = req.body.name;
   const email = req.body.name;
    res.json({
        name:username,
        email:email,
        success: "true",
    });
};

module.exports = registeruser;