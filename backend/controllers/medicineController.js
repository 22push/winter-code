const express = require("express");
const Medicine = require('../models/medicineModel.js');

exports.getAllMedicine = async (req, res) => {

    try {

        const userId = req.params.userId;
        // const id = req.params.id;
        const medicines = await Medicine.find({ userId });

        res.status(200).json({
            status: 'success',

            data: {
                medicines
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'Failed to get all medicines!',
            message: err
        });
    }

};

exports.getMedicine = async (req, res) => {

    try {
        const id = req.id;
        const userId = req.userId;
        const medicine = await Medicine.find({ _id: id });

        res.status(200).json({
            status: 'success',
            data: {
                medicine
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'Failed to get the medicine!',
            message: err
        });
    }


};

exports.createMedicine = async (req, res) => {

    try {
        const userId = req.params.userId;
        //const id = req.params.id;
        const newMedicine = await Medicine.create(req.body);
        // newMedicine.userId = userId;
        res.status(201).json({
            status: 'success',
            data: {
                medicine: newMedicine
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }

};

exports.deleteMedicine = async (req, res) => {

    try {
        const userId = req.params.userId;
        const id = req.params.id;
        const medicine = await Medicine.findByIdAndDelete(id);

        res.status(204).json({
            status: 'success',
            data: {
                medicine: null
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed to update',
            message: err
        });
    }


};

exports.updateMedicine = async (req, res) => {

    try {
        const userId = req.params.userId;
        const id = req.params.id;
        const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(204).json({
            status: 'success',
            data: {
                medicine
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed to update',
            message: err
        });
    }
};
