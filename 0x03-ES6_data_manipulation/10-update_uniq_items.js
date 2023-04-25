export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  for (let [item, quantity] of map.entries()) {
    if (item && quantity === 1) {
      map.set(item, 100);
    }
  }
}

