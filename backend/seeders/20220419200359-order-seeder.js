'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("orders", [
            {
                customer_id: 1,
                product_id: 2,
                qty: 2,
                grand_total: 1600,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                customer_id: 2,
                product_id: 4,
                qty: 2,
                grand_total: 2000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
