const express=require('express')
const auth = require('../middlewares/auth')
const {createShow,deleteShow,getShow}=require('../controllers/showController')
const showRouter=express.Router()

showRouter.get("/",auth,getShow)
showRouter.post("/",auth,createShow)
showRouter.delete("/:id",auth,deleteShow)


module.exports=showRouter