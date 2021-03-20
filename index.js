const randomNumberGenerator = (min, max) => {
  console.log(typeof min);
  return Math.round(Math.random() * (max - min) + min);
};
console.log(randomNumberGenerator("a", 100));
// export default randomNumberGenerator;
