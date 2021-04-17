export default (sequelize, DataTypes) => {
    const productionCompany = sequelize.define(
        'Production Company', 
        {
            company_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            company_name: {
                type: DataTypes.STRING
            }
        },
        {freezeTableName: true, timestamps: false}
    );
    return productionCompany;
};