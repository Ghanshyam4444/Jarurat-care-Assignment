const Service = require("../models/service-model");

const addservice = async (req, res) => {
  try {
    const Service_detail = await Service.create({
      service: req.body.service,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(200).json({ msg: "successfully send" });
  } catch (error) {
    console.log(error);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const Service_details = await Service.find({});
    if (!Service_details || Service_details.length === 0) {
      return res.status(404).json({ message: "No Services Found" });
    }
    return res.status(200).send(Service_details);
  } catch (error) {
    next(error);
  }
};

const deleteServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteService = await Service.deleteOne({ _id: id });
    res.status(201).send("successfully deleted");
  } catch (error) {
    next(error);
  }
};

const updateServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedService = await Service.updateOne(
      { _id: id },
      {
        service: updatedData.service,
        description: updatedData.description,
        price: updatedData.price,
      }
    );
    return res.status(200).json(updatedService);
  } catch (error) {
    next(error);
  }
};
const getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ServiceData = await Service.findOne({ _id: id });
    res.status(200).json(ServiceData);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addservice,
  getAllServices,
  deleteServiceById,
  getServiceById,
  updateServiceById,
};
