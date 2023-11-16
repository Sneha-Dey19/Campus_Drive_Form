const calculator = (req, res)=>{
  res.render('index',{})
}
const result = (req,res)=>{
  const date = req.body.dob;
  const dateArr= date.split('-');
  const result = parseInt(dateArr[1]) * parseInt(dateArr[2]);

  res.send({result});
  
}
module.exports = {
  calculator,
  result
}