const express = require('express');
const router = express.Router();
const members = require('../../Members');

router.get('/', (req, res) => {
  
    res.json(members);
  });
  
  // single member
  router.get('/:id', (req,res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
      res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
      
      res.status(400).json({msg: `member with id of ${req.params.id} does not exist`});
    }
    
  });

  module.exports = router;