const Item = require("./../model/itemModel");

exports.getAllItems = async (req, res) =>  {
    try{
        const items =await Item.find({itemType: "toys"})
        res.status(200).json(items);
    }catch(err){
        res.status(500).json({message: err.message})
      }
  };

exports.createItem = async (req, res) => {
    const item =new Item({
        name: req.body.name,
        price: req.body.price,
        itemType: req.body.itemType
    });
    try{
        const newitem= await item.save()
        res.status(201).json(newitem)
    }
    catch(err) {
        res.status(400).json(err.message);
    };
}

exports.getItem = async (req, res) =>  {
    try{
        const item= await Item.findById(req.params.id)
        res.json(item);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

exports.getItemByType = async (req, res) =>  {
    try{
        const itemler =await Item.find()
        res.json(itemler);
        console.log("found it")
    }catch(err){
        res.status(500).json({message: err.message})
      }
  };


exports.getItemSold = async (req, res) =>  {
    try{
        const items = await Item.find({price: 35})
        const filtered =items.map(item => item.name).sort()
        res.json(filtered)
      }catch(err){
        res.status(500).json({message: err.message})
      }; 
  };
