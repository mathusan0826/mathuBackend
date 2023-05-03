//const express = require('express');
const Order = require("../Schema/orderSchema");

const newOrder = (req, res, next) => {

    console.log(req.body)
    // Validate request
    if (!req.body.Name) {
        res.status(400).send({ message: "Content can not be mathu empty!" });
        return;
    }

    // Create a Tutorial
    const orderschema = new Order({
        No:req.body.No,
        Name: req.body.Name,
        Quntity: req.body.Quntity,
        Price: req.body.Price,
        Total: req.body.Total,
        Date: req.body.Date,
    });

   var response = orderschema.save(orderschema).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

    // Or

    // var response = orderschema.save(orderschema);
    // res.send(response); // dummy function for now
};

//get data

const getAllOrder = (req, res) => {

  Order.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};




//update

const updateAllOrder = (req, res) => {
  console.log(req.body);
        if (req.body.Name == null) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    const id = req.params.id;
  
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });0
  };


  //delete

  const deleteAllOrder = (req, res) => {
    const id = req.params.id;
  
    Order.findByIdAndRemove(id)
  
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };


module.exports = {newOrder,getAllOrder,updateAllOrder,deleteAllOrder};
//module.exports = {getAllOrder};