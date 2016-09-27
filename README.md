#quick sort
ELI5

Quick sort follows 4 key points in the sorting algorithm, Pivot, Partitioning, Recursion, and Concatenation. You pick an element to pivot on in an array. Re-order the array so that the elements in the array with a lesser value than the pivot comes before the pivot and the ones greater goes after the pivot. In each partition Pivot the first Element and repeat each step of partitioning until the base case of the recursion, either size 0 or 1. Coming back out of the recursion, the left arrays concat before ethe pivot and the right after the pivot.

Best/Worst case scenario
Best Case- if the middle number is selected as your pivot number first in the array.
Worst Case- if the Array is sorted in the same order or in reverse order.

#bubble sort
ELI5
Starts by comparing the first 2 elements in the array and swaping them if the first is larger than the second element. This continues until an element that is greater than the one being compared is compared and swaps with the larger element, thus that larger one then compares the next element in the array until the end of the array is reached; this one pass. The sorting algoritm continues until there are no more swaps in a pass.

Best/Worst case scenario
Best Case- if the array is already sorted.
Worst case- if array is in reversed order with the largest number first.

#merge sort
ELI5
Megasort is a divide and conquer algorithm. Megasort first divides an array into two halves and continues breaking the two sections until you cannot divide any further, until it is divided until being single.
During the merge and sort stage, the first 2 numbers are compared from least to greatest. following that the 2 pairs are compared from least to greatest and so on.

Best/Worst case scenario
Best- if array is in increasing and decreasing order.
Worst- when there is a maximum number of comparisons.

#insertion sort
ELI5
Insertion sorts the array by comparing each element, if the following element is of lesser value to the current element the lesser element takes the value of the previous element. this continues throuhgout the algorithm.

Best/Worst case scenario
Best- if array is already sorted.
Worst- if array is in reverse order.

#selection sort
ELI5
The first element is selected and compares itself to the entire array to see if it is the lowest element. if there is a lower element, they swap. This continues throughout the array until the array is sorted

Best/Worst case scenario

Best- if array is sorted from least to greatest.
Worst- if array is sorted from greatest to least greatest.# sorting-algorithms
