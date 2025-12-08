# Vector Addition

## The problem

!!! Warning "Nota bene"
    I am by no means an expert and whatever I write here, could be completely wrong. I am learning and these are my notes. Use your own fact-checking skills to verify my code. 

The problem is found [here](https://leetgpu.com/challenges/vector-addition){:target="_blank"}, from LeetGPU, which has coding problems like LeetCode. In short, the designed program should do element-wise addition of two vectors on a GPU.

From reading some online tutorials[^1] and guides, this program is supposedly equivalent to the typical "Hello, World!" task when getting started with a new programming language[^2].

```cu
#include <cuda_runtime.h>

__global__ void vector_add(const float* A, const float* B, float* C, int N) {
    int id = blockDim.x * blockIdx.x + threadIdx.x;
    if(id < N) C[id] = A[id] + B[id];
}

// A, B, C are device pointers (i.e. pointers to memory on the GPU)
extern "C" void solve(const float* A, const float* B, float* C, int N) {
    int threadsPerBlock = 256;
    int blocksPerGrid = (N + threadsPerBlock - 1) / threadsPerBlock;

    vector_add<<<blocksPerGrid, threadsPerBlock>>>(A, B, C, N);
    cudaDeviceSynchronize();
}
```

- `__global__` marks the function as a GPU kernel to run on the GPU.
- `int id` is a thread ID calculation, used to define a unique thread ID among all the threads in "the grid"
  - "the grid" refers to how the threads are arranged when executing the kernel
- `if(id<N)` is a bounds check to make sure the threads do not access memory beyond the array
- `C[id] = A[id] + B[id]` is the actual work, i.e., the element-wise additions, where each thread adds exactly one pair of elements

And it's apparently that simple, huh! 

## References

[^1]: [https://superjomn.github.io/posts/element-add-kernel-in-cuda-org-executor.executed/](https://superjomn.github.io/posts/element-add-kernel-in-cuda-org-executor.executed/){:target="_blank"}
[^2]: [https://github.com/olcf-tutorials/vector_addition_cuda](https://github.com/olcf-tutorials/vector_addition_cuda){:target="_blank"}
