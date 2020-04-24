const Bulding=require('../models/bulding')

module.exports.list=(req,res)=>{
    Bulding.find()
    .then((buldings)=>{
       res.json(buldings)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Bulding.findById(id)
    .then((bulding)=>{
        if(bulding){
        res.json(bulding)
        }
        else{
            res.json({})
        }
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const bulding=new Bulding(body)
    bulding.save()
    .then((bulding)=>{
        res.json({
            show:'posted successfully',bulding
        })
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Bulding.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((bulding)=>{
        if(bulding){
            res.json(bulding)
        }else{
            res.json({})
        }
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Bulding.findByIdAndDelete(id)
    .then((bulding)=>{
        if(bulding){
            res.json(bulding)
        }else{
            res.json({})
        }
    }).catch((err)=>{
        res.json(err)
    })
}