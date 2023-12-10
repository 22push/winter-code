const catchasync = require("./../utils/catchasync");
const feedbacktour = require("./../models/feedbackmodel");

exports.postfeedback = async (req, res) => {
    try{
const newfeedback = await feedbacktour.create(req.body)
        res.status(201).json({
            message: "Feedback posted successfully",
            newfeedback
        })
    }catch(err){
        res.status(500).json({
            error: err,
            massage:"Error while posting feedback"
        })
    }
}

