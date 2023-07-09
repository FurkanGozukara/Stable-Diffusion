
* Select RunPod Fast Stable Diffusion template
* Select at least 24 GB VRAM having pod
* Click customize development and make volume disk size min 200 GB
* Upload sdxl.sh to the workspace folder (download from here : https://www.patreon.com/posts/auto-sdxl-runpod-85845581)
* Execute below command and wait until you see this message : ```auto install of SDXL completed```
* It will take like 30 min depending on your Pod Speed (e.g. 1785 megabits per second pod)
  
```
chmod +x sdxl.sh
./sdxl.sh
```

* After installation all you need is running below command everyone
* If you don't want to use refiner, make ```ENABLE_REFINER=false```
* The installation is permanent. 1 time install and use until you delete your Pod 

```
cd /workspace/stable-diffusion-xl-demo
source venv/bin/activate
PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 SHARE=true ENABLE_REFINER=true python app7.py
```

The generated images will be saved inside below folder
* /workspace/stable-diffusion-xl-demo/stable-diffusion-xl-demo/outputs


