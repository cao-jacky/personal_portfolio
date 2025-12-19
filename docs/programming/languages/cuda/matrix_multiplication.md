# Matrix multiplication

## The problem

[https://leetgpu.com/challenges/matrix-multiplication](https://leetgpu.com/challenges/matrix-multiplication){:target="_blank"}

My solution can be found [here](https://github.com/cao-jacky/leetgpu/blob/main/matrix_multiplication.cu){:target="_blank"}.

I was using this[^1] as a reference of what to do.

- I mistyped the row and column indices calculation, I was adding the `blockIdx.?` and `blockDim.?` components instead of multiplying
- But from what I gather, we need to do the dot product, i.e., multiplying elements by row of one matrix with the elements by column of another matrix, and then adding them together - simple stuff
    - The matrices have dimensions: A (M rows x N cols), B (N rows x K cols), therefore C (M rows x K cols)
    - So each element of `C[row][col] = Σ(A[row][i] × B[i][col])` where `i=0` to `N-1`

If we consider the `i` loop, then, 

- For `i=0`, `A[row * N + 0]` which is the first element of the first row in matrix A, `B[0 * K + col]` which is the first element of the first col in matrix B
- And so on and so forth, and then we sum and store the value in the correct position of matrix C

## References

[^1]: [https://github.com/Imanm02/MatrixMultiplication-CUDA/blob/main/inner_product_with_testbench.cu](https://github.com/Imanm02/MatrixMultiplication-CUDA/blob/main/inner_product_with_testbench.cu){:target="_blank"}