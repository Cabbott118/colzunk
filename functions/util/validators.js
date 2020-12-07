const isEmpty = (string) => {
  if (string.trim() === '') return;
  else return false;
};

exports.validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = 'Email is required!';
  if (isEmpty(data.password)) errors.password = 'Password is required!';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return;
  else return false;
};

exports.validateSignUpData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Email cannot be empty!';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address!';
  }

  if (isEmpty(data.firstName)) errors.firstName = 'First name is required!';
  if (isEmpty(data.lastName)) errors.lastName = 'Last name is required!';
  if (isEmpty(data.phoneNumber))
    errors.phoneNumber = 'Phone number is required!';

  if (isEmpty(data.password)) errors.password = 'Password is required!';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must match!';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
