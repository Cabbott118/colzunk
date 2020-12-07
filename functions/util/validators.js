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
