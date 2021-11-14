const images = [
  "6123150777",
  "6126039472",
  "6126040354",
  "6128597660",
  "6134992334",
  "6136170572",
  "6136172483",
  "6140906765",
  "6142673815",
  "6142681673",
  "6142683276",
  "6148226736",
];

export const getRandomInt = ({ from = 0, to }) =>
  Math.floor(from + Math.random() * (to + 1 - from));

export const getRandomImageName = () =>
  images[getRandomInt({ to: images.length - 1 })];
