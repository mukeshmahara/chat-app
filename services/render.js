

exports.homeRoute = (req,res)=>{
    res.render('login',{title:"Welcome to login page"});
    // res.send("Welcome to chat application")
}

exports.chatRoute = (req,res)=>{
    
    res.render('index',{title:"chat application",username: req.body.username});
}
