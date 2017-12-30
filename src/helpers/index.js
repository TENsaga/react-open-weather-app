export default function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[ item.replace('./', '') ] = r(item);
  });
  return images;
}
