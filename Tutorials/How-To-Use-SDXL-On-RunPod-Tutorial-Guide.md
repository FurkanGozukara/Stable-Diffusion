
* Select RunPod Fast Stable Diffusion template
* Select at least 24 GB VRAM having pod
* Click customize development and make volume disk size min 200 GB
* Upload sdxl.sh to the workspace folder
* Execute below command and wait until you see this message : ```auto install of SDXL completed```
* It will take like 30 min depending on your Pod Speed (e.g. 1785 megabits per second pod)
  
```
chmod +x sdxl.sh
./sdxl.sh
```

* After installation all you need is running below command everyone
* If you don't want to use refiner, make ```ENABLE_REFINER=false``` 

```
cd /workspace/stable-diffusion-xl-demo
source venv/bin/activate
PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 SHARE=true ENABLE_REFINER=true python app7.py
```
