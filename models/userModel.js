module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    });
    return user;
};
