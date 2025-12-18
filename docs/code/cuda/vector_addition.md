# Vector addition

## The problem

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

---
2025-12-18: Revisiting this, since, I have found "an even easier introduction to CUDA"[^3].

- I have started to follow it through and whilst I can compile and run the programs on my Ubuntu Windows Subsystem for Linux 2 installation, the performance profiling does not work. Apparently, WSL2 does not support access to all the profiling metrics[^4].

## References

[^1]: [https://superjomn.github.io/posts/element-add-kernel-in-cuda-org-executor.executed/](https://superjomn.github.io/posts/element-add-kernel-in-cuda-org-executor.executed/){:target="_blank"}
[^2]: [https://github.com/olcf-tutorials/vector_addition_cuda](https://github.com/olcf-tutorials/vector_addition_cuda){:target="_blank"}
[^3]: [https://developer.nvidia.com/blog/even-easier-introduction-cuda/](https://developer.nvidia.com/blog/even-easier-introduction-cuda/){:target="_blank"}
[^4]: [https://forums.developer.nvidia.com/t/sqlite-does-not-contain-cuda-kernel-data/219742/12](https://forums.developer.nvidia.com/t/sqlite-does-not-contain-cuda-kernel-data/219742/12){:target="_blank"}
