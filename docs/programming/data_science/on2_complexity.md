# O(N^2) Complexity

A lot of the time, when solving [Advent of Code](../programming_challenges/advent_of_code.md) problems, my go-to method is to "brute-force" it, i.e., trying all possible options or combinations instead of trying to find an algorithmic or optimised strategy. I know, I know, it is a lazy method, but most of the time the solution is found quite straightforwardly.

The issues arise when the search space is large, then I am stuck waiting for a solution to be found. This is typically due to some kind of complexity. Namely, time complexity, where an algorithms execution time is a function of its input size. This makes sense given that if there is a large input, then the amount of time needed to test different combinations would be large. Similarly, there is also space complexity, which is the total space or memory being a function of the input size.

Time complexity is the more pressing issue, since you could always temporarily store intermediate calculations on disk. In particular, O(N^2) time complexity should be considered, which states that an algorithm's running time grows quadratically with the size of the input, often because of nested loops[^1].

Moving forward, I should think about evaluating my algorithms to ensure they are efficient, scalable, and avoid large time complexities, as much as possible.

## References

[^1]: [https://www.geeksforgeeks.org/dsa/what-does-big-on2-complexity-mean/](https://www.geeksforgeeks.org/dsa/what-does-big-on2-complexity-mean/){:target="_blank"}