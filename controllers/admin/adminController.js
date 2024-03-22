const bcrypt = require("bcrypt");

const Admin = require("../../models/admin/Admin");

module.exports.insertAdmin = async (req, res) => {
    try {
        if (req.body) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            let adminData = await Admin.create(req.body);
            if (adminData) {
                return res.status(200).json({
                    msg: "Here is inserted Data",
                    adminData: adminData,
                    status: 0,
                });
            } else {
                return res
                    .status(200)
                    .json({ msg: "Data not inserted", status: 0 });
            }
        } else {
            return res.status(200).json({ msg: "Invalid Data", status: 0 });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Something went wrong", status: 0 });
    }
};
