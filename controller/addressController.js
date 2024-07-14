const Address = require('../model/address');

// Hàm thêm address mới
const addAddress = async (req, res) => {
    try {
        const { ad_userId, adInfo, adCommune, adDistrict, adProvince } = req.body;

        const newAddress = new Address({
            ad_userId,
            adInfo,
            adCommune,
            adDistrict,
            adProvince
        });

        const result = await newAddress.save();
        res.json({
            status: 200,
            message: "Thêm địa chỉ thành công",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm sửa address
const updateAddress = async (req, res) => {
    try {
        const { addressId } = req.params;
        const { adInfo, adCommune, adDistrict, adProvince } = req.body;

        const updatedAddress = await Address.findByIdAndUpdate(
            addressId,
            { adInfo, adCommune, adDistrict, adProvince },
            { new: true }
        );

        if (updatedAddress) {
            res.json({
                status: 200,
                message: "Cập nhật địa chỉ thành công",
                data: updatedAddress
            });
        } else {
            res.json({
                status: 400,
                message: "Cập nhật thất bại",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm xóa address
const deleteAddress = async (req, res) => {
    try {
        const { addressId } = req.params;

        const deletedAddress = await Address.findByIdAndDelete(addressId);

        if (deletedAddress) {
            res.json({
                status: 200,
                message: "Xóa địa chỉ thành công",
                data: deletedAddress
            });
        } else {
            res.json({
                status: 400,
                message: "Xóa thất bại",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

module.exports = {
    addAddress,
    updateAddress,
    deleteAddress
};
