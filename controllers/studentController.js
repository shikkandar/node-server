const Student = require("../models/studentModel"); // Make sure to capitalize the variable name

exports.getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.render("index", { students });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server Error");
    }
};

exports.createStudent = async (req, res) => {
    try {
        await Student.create(req.body);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server Error");
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getEditForm = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id); // Change variable name to avoid conflict
        res.render("edit", { student });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
exports.updateStudent = async (req, res) => {
    try {
        const{name, age, grade}=req.body;
        await Student.findByIdAndUpdate(req.params.id,{name,age,grade}); // Change variable name to avoid conflict
        res.redirect("/")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
