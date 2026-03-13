// Stable, non in-place QuickSort with optional comparator
export function quickSort(arr, compareFn) {
  const cmp =
    typeof compareFn === "function"
      ? compareFn
      : (a, b) => (a < b ? -1 : a > b ? 1 : 0);

  if (!Array.isArray(arr)) {
    throw new TypeError("quickSort expects an array");
  }

  if (arr.length <= 1) return arr.slice();

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const item of arr) {
    const res = cmp(item, pivot);
    if (res < 0) left.push(item);
    else if (res > 0) right.push(item);
    else equal.push(item);
  }

  return [...quickSort(left, cmp), ...equal, ...quickSort(right, cmp)];
}

// In-place QuickSort using Lomuto partition scheme
export function quickSortInPlace(arr, compareFn) {
  const cmp =
    typeof compareFn === "function"
      ? compareFn
      : (a, b) => (a < b ? -1 : a > b ? 1 : 0);

  if (!Array.isArray(arr)) {
    throw new TypeError("quickSortInPlace expects an array");
  }

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (cmp(arr[j], pivot) <= 0) {
        i++;
        swap(i, j);
      }
    }

    swap(i + 1, high);
    return i + 1;
  }

  function sort(low, high) {
    if (low < high) {
      const p = partition(low, high);
      sort(low, p - 1);
      sort(p + 1, high);
    }
  }

  if (arr.length > 1) {
    sort(0, arr.length - 1);
  }

  return arr;
}

// Demos
const arr = [5, 3, 8, 4, 2, 7, 1, 10];
console.log("Original:", arr);
console.log("Sorted (copy):", quickSort(arr));
console.log("After non in-place sort (should be unchanged):", arr);

const inPlaceArr = [5, 3, 8, 4, 2, 7, 1, 10];
console.log("Before in-place sort:", inPlaceArr);
quickSortInPlace(inPlaceArr);
console.log("After in-place sort:", inPlaceArr);

// Example with custom comparator (descending)
const numsDesc = quickSort(arr, (a, b) => b - a);
console.log("Sorted descending (copy):", numsDesc);

