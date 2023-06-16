function WorkingHours (req,res,next){
    let date = new Date () //CURRENT DATE
    let hours = date.getHours()
    let day = date.getDay5
    let openningDays=[1,2,3,4,5]
    if (openningDays.includes(day) && hours >=9 && hours<=17)
    {return next()}
    else{res.redirect("/error")}

}
module.exports= WorkingHours