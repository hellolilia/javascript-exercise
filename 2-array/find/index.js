export default function find00OldPerson(collection) {
  const person = collection.find(item => item.age <= 20 && item.age >= 10);
  return person.name;
}
