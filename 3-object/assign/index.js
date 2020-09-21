export default function addSerialNumber(source) {
  source.properties.status = 'processed';
  return Object.assign({ serialNumber: '12345' }, source);
}
