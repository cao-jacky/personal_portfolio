# Matrix transpose

## The problem

[https://leetgpu.com/challenges/matrix-transpose](https://leetgpu.com/challenges/matrix-transpose){:target="_blank"}

```cu
#include <cuda_runtime.h>

__global__ void matrix_transpose_kernel(const float* input, float* output, int rows, int cols) {
    int x = blockIdx.x * blockDim.x + threadIdx.x;
    int y = blockIdx.y * blockDim.y + threadIdx.y;

    if (x < cols && y < rows) {
        output[x*rows + y] = input[y*cols + x];
    }
}

// input, output are device pointers (i.e. pointers to memory on the GPU)
extern "C" void solve(const float* input, float* output, int rows, int cols) {
    dim3 threadsPerBlock(16, 16);
    dim3 blocksPerGrid((cols + threadsPerBlock.x - 1) / threadsPerBlock.x,
                       (rows + threadsPerBlock.y - 1) / threadsPerBlock.y);

    matrix_transpose_kernel<<<blocksPerGrid, threadsPerBlock>>>(input, output, rows, cols);
    cudaDeviceSynchronize();
}
```

Using a couple of references[^1][^2] to help me. I took a naïve approach to the problem, i.e., each thread swaps one matrix element.

- Main thing to get right was the order of the `rows`, `cols`, `x`, and `y` variables in the calculation
- 2-dimensional matrices are stored in 1-dimensional memory, and for CUDA, the data is stored in row-major order, i.e., store all elements in row 0, then row 1, etc. 
    - Therefore, an element at `[row][col]` is at index `row*col + col`

## References

[^1]: [https://github.com/Luca-Dalmasso/matrixTransposeCUDA](https://github.com/Luca-Dalmasso/matrixTransposeCUDA){:target="_blank"}
[^2]: [https://chrisdalvit.github.io/gpu-matrix-transpose](https://chrisdalvit.github.io/gpu-matrix-transpose){:target="_blank"}