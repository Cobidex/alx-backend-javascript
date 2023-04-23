export default function taskBlock(val) {
  let task = false;
  let task2 = true;

  if (val) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
