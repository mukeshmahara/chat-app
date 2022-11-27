exports.dashboard = (req,res)=>{
  res.render('./dashboard/index',{title:"Welcome to Dashboard page"});
  // res.send("Welcome to chat application")
}