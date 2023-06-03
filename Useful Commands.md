## Install Tensorflow With GPU On Windows

```python -m pip install "tensorflow<2.11```

## Below command will extract every frame of a 30 FPS video as PNG with ffmpeg

```ffmpeg -i "org.mp4" -vf "fps=30.00" -start_number 100000 -q:v 1 %06d.png``` 

## cuda check script
``` 
import torch

def display_cuda_info():
    if torch.cuda.is_available():
        print("CUDA is available on this system.")
        
        # CUDA version
        print("CUDA Version:", torch.version.cuda)
        
        # Number of CUDA-enabled GPUs
        num_gpus = torch.cuda.device_count()
        print("Number of GPUs:", num_gpus)
        
        # GPU details
        for i in range(num_gpus):
            gpu_device = torch.cuda.get_device_name(i)
            print("\nGPU", i+1)
            print("Name:", gpu_device)
            
            gpu_memory = torch.cuda.get_device_properties(i).total_memory
            print("Memory:", round(gpu_memory/1024**3, 1), "GB")
            
            gpu_compute_capability = torch.cuda.get_device_capability(i)
            print("Compute Capability:", gpu_compute_capability)
            
    else:
        print("CUDA is not available on this system.")

# Display CUDA information
display_cuda_info()
``` 
