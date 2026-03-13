import {quickSort, quickSortInPlace} from './QuickSort_Inhanced'

// Edge-case tests
function runQuickSortEdgeTests() {
  const tests = [
    { name: "empty array", input: [], expected: [] },
    { name: "single element", input: [42], expected: [42] },
    { name: "two elements sorted", input: [1, 2], expected: [1, 2] },
    { name: "two elements reversed", input: [2, 1], expected: [1, 2] },
    { name: "all equal elements", input: [5, 5, 5, 5], expected: [5, 5, 5, 5] },
    { name: "already sorted", input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { name: "reverse sorted", input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    {
      name: "negatives and positives",
      input: [-3, 0, 2, -1, 5],
      expected: [-3, -1, 0, 2, 5],
    },
    {
      name: "with duplicates",
      input: [3, 1, 2, 3, 2],
      expected: [1, 2, 2, 3, 3],
    },
  ];

  console.log("\nRunning QuickSort edge-case tests...");

  for (const test of tests) {
    const inputCopy = test.input.slice();
    const inPlaceCopy = test.input.slice();

    const sortedCopy = quickSort(inputCopy);
    const sortedInPlace = quickSortInPlace(inPlaceCopy);

    const okCopy = JSON.stringify(sortedCopy) === JSON.stringify(test.expected);
    const okInPlace = JSON.stringify(sortedInPlace) === JSON.stringify(test.expected);

    console.log(
      `${test.name}: copy=${okCopy ? "PASS" : "FAIL"}, in-place=${okInPlace ? "PASS" : "FAIL"}`
    );
  }
}

// Auto-run edge tests when this file is loaded (Node or browser console)
runQuickSortEdgeTests();