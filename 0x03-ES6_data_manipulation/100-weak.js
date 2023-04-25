const MAX_QUERIES_PER_ENDPOINT = 5;

const queryCounts = new WeakMap();

export const weakMap = queryCounts;

export function queryAPI(endpoint) {
  const count = queryCounts.get(endpoint) || 0;
  if (count >= MAX_QUERIES_PER_ENDPOINT) {
    throw new Error('Endpoint load is high');
  }
  queryCounts.set(endpoint, count + 1);
}
