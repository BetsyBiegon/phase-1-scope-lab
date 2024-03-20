var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = 'BOB';
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will result in an error because you cannot reassign a constant variable.
}

