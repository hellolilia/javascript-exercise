export default function addSerialNumber(source) {
  const assign = Object.assign({}, source);
  assign.properties.status = 'processed';
  return Object.assign({ serialNumber: '12345' }, source);
}
