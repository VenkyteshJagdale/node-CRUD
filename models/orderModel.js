module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
        orderId: {
            type: DataTypes.INTEGER,
        },
        customerId: {
            type: DataTypes.INTEGER,
        },
        orderAmount: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        shippingAddress: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
        },
    });
    return order;
};
