function chooseMultiplesOfThree(collection) {
  return collection.filter(i => i % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((element, index, array) => array.indexOf(element) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
