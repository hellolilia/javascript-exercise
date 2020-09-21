function chooseMultiplesOfThree(collection) {
  return collection.filter(i => i % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter(function(element, index, array) {
    return array.indexOf(element) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
