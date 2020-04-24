const express=require('express')
const router=express.Router()
const buldingController=require('../app/controllers/bulding')
const roomController=require('../app/controllers/room')
router.get('/buldings', buldingController.list)
router.get('/buldings/:id', buldingController.show)
router.post('/buldings', buldingController.create)
router.put('/buldings/:id', buldingController.update)
router.delete('/buldings/:id', buldingController.destroy)

router.get("/rooms", roomController.list);
router.get("/rooms/:id", roomController.show);
router.post("/rooms", roomController.create);
router.put("/rooms/:id", roomController.update);
router.delete("/rooms/:id", roomController.destroy);

module.exports=router