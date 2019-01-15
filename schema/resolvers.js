let { CATEGORIES, BILLS } = require('./mock');

let nextBillId = 9;
let nextCategoryId = 4;

const resolvers = {
  Query: {
    bills: () => BILLS,
    bill: (obj, { id }) => BILLS.find(bill => bill.id === id),
    categories: () => CATEGORIES,
    category: (obj, { id }) => CATEGORIES.find(category => category.id === id),
    billsPerMonth: (obj, { year, month }) =>
      BILLS.filter(bill => {
        const billDate = new Date(Number(bill.date));
        return (
          billDate.getFullYear().toString() === year &&
          (billDate.getMonth() + 1).toString() === month
        );
      }),
    yearResume: (obj, { year }) => {
      // Create an Array contaning the months of the Year
      function generateYearResume() {
        return Array.from(Array(12).keys(), element => ({
          year,
          month: element + 1,
          value: 0,
        }));
      }

      const filteredBills = BILLS.filter(
        bill => new Date(Number(bill.date)).getFullYear() === Number(year)
      )
        .map(bill =>
          Object.assign({}, bill, {
            category: CATEGORIES.find(
              category => category.id === bill.categoryId
            ),
          })
        )
        .reduce((history, bill) => {
          if (!history[bill.categoryId]) {
            history[bill.categoryId] = {
              category: bill.category,
              history: generateYearResume(),
            };
          }
          const month = new Date(Number(bill.date)).getMonth();
          history[bill.categoryId].history[month].value += bill.value;
          return history;
        }, {});

      const yearHistory = Object.keys(filteredBills).map(
        categoryId => filteredBills[categoryId]
      );
      return yearHistory;
    },
  },
  Mutation: {
    addBill: (root, { categoryId, date, value }) => {
      const newBill = {
        id: (nextBillId++).toString(),
        date,
        value,
        categoryId,
      };
      BILLS = BILLS.concat([newBill]);
      return newBill;
    },
    addCategory: (root, { name }) => {
      const newCategory = { id: (nextCategoryId++).toString(), name };
      CATEGORIES = CATEGORIES.concat([newCategory]);
      return newCategory;
    },
  },
  Bill: {
    category: bill => {
      const billCategory = CATEGORIES.find(
        category => category.id === bill.categoryId
      );
      return billCategory;
    },
  },
  Category: {
    bills: category => BILLS.filter(bill => bill.categoryId === category.id),
  },
};

module.exports = resolvers;
