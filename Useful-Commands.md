[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Useful-Commands.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Useful-Commands.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

## Restart Display Graphics Driver

Press ```Win + Ctrl + Shift + B```

## ChatGPT

```show full code , with no placeholders```

## RunPod install latest cudnn

```apt list -a libcudnn8-dev```

```apt install libcudnn8=8.9.5.29-1+cuda11.8 libcudnn8-dev=8.9.5.29-1+cuda11.8```

## How To Git Add LFS on Unix
```
apt update
apt install git
```
```
git add --verbose . > ../progress.txt & percent=0; while [[ $percent -le 99 && $percent -ge 0 ]]; do num1=$(cat ../progress.txt | wc -l); num2=$(find . -type f -not -path "./.git/*" | wc -l); percent=$((num1*100 / (num2 - 3) )); echo $percent"%"; sleep 1; done; echo "DONE"; sleep 1; rm ../progress.txt
```

## Runpod quick commands

* This will purge your python cache : ```pip cache purge```
* This will turn of Pod after 2 minutes : ```sleep 2m; runpodctl stop pod $RUNPOD_POD_ID``` e.g. ```sleep 1m; runpodctl stop pod idhh7hsnix48ac```
* This will turn of Pod after 2 hours : ```sleep 2h; runpodctl stop pod $RUNPOD_POD_ID```
* To download a google drive file into RunPod : gdown id_of_the_file - you can see id in the url when you copy
* * E.g. https://drive.google.com/file/d/1odxPpTJePQfMHxiO2jdeuYA7zxgvWg4c/view?usp=drive_link > ```gdown 1odxPpTJePQfMHxiO2jdeuYA7zxgvWg4c```

## Download civitai model
* Change url (https://civitai.com/api/download/models/89824) and model name (Consistent-Factor_v5.safetensors)
* ![image](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/7cd583f0-635b-408b-a3ad-877a7eac2526)

```
wget -O "/workspace/stable-diffusion-webui/models/Stable-diffusion/Consistent-Factor_v5.safetensors" https://civitai.com/api/download/models/89824
```

```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors -O /workspace/stable-diffusion-webui/models/VAE/vae-ft-mse-840000-ema-pruned.safetensors

wget https://huggingface.co/SG161222/Realistic_Vision_V2.0/resolve/main/Realistic_Vision_V2.0.safetensors -O /workspace/stable-diffusion-webui/models/Stable-diffusion/Realistic_Vision_V2.0.safetensors

yes | apt install libcudnn8=8.9.2.26-1+cuda11.8 libcudnn8-dev=8.9.2.26-1+cuda11.8

pip uninstall torch torchvision torchaudio

pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

git clone https://github.com/d8ahazard/sd_dreambooth_extension /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension

pip install -r /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension/requirements.txt

pip install -U --pre xformers
```

## Install Tensorflow With GPU On Windows

```
python -m pip install "tensorflow<2.11
```

## Below command will extract every frame of a 30 FPS video as PNG with ffmpeg

```
ffmpeg -i "org.mp4" -vf "fps=30.00" -start_number 100000 -q:v 1 %06d.png
``` 

## cuda check script
### dont forget to change cudnn file path
``` 
import ctypes
import torch

def get_cudnn_version(file_path):
    try:
        cudnn = ctypes.WinDLL(file_path)
        cudnn_version = cudnn.cudnnGetVersion()
        major = cudnn_version // 1000
        minor = (cudnn_version // 100) % 10
        patch = cudnn_version % 100
        return f"CUDNN version: {major}.{minor}.{patch}"
    except OSError as e:
        return f"Error: {str(e)}"

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
            
            # CUDNN version
            cudnn_file_path = r"C:\automatic_web_ui\venv\Lib\site-packages\torch\lib\cudnn64_8.dll"
            cudnn_version = get_cudnn_version(cudnn_file_path)
            print(cudnn_version)
            
    else:
        print("CUDA is not available on this system.")

# Display CUDA and CUDNN information
display_cuda_info()

```

## Install Triton On Windows
```
venv/scripts/activate
```
```
pip install --use-pep517 https://huggingface.co/r4ziel/xformers_pre_built/resolve/main/triton-2.0.0-cp310-cp310-win_amd64.whl
```

## yt-dlp
```yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" video```

```yt-dlp.exe -f 140+137 video```
