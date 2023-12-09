const express = require("express");
const Medicine = require('../models/medicineModel.js');

exports.getAllMedicine = async (req,res)=> {

    try {
        
        const medicines = await Medicine.find();

    res.status(200).json({
        status: 'success',
        data: {
            medicines: medicines
        }
    });
    } catch (err) {
        res.status(404).json({
            status: 'Failed to get all medicines!',
            message: err
        });
    }
    
};

exports.getMedicine = async (req,res)=> {

    try {
        const medicine = await Medicine.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                medicine: medicine
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'Failed to get the medicine!',
            message: err
        });
    }

    
};

exports.createMedicine = async (req,res)=>{

    try {
        const newMedicine = await Medicine.create(req.body);
        res.status(201).json({
        status: 'success',
            data: {
                medicine: newMedicine
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid Data Sent!'
        });
    }
    
};

exports.deleteMedicine = async (req,res)=>{
    
    try{

        const medicine = await Medicine.findByIdAndDelete(req.params.id);

        res.status(204).json({
                status: 'success',
                    data: {
                        medicine: null
                    }
            });
    } catch(err) {
        res.status(400).json({
            status: 'failed to update',
            message: err
        });
    }
    

};

exports.updateMedicine = async (req,res)=>{
    
    try {

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