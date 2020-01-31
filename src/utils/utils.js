exports.handleChange = event => {
  const { value, name } = event.target;
  console.log(value, name);
  this.setState({ [name]: value });
};
