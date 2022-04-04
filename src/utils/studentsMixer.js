const shuffleArray = (array) => {
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);
  return shuffledArray;
};

export default shuffleArray;
