import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const array = [];

  for (const size of sizes) {
    array.push(new ClassRoom(size));
  }
  return array;
}
