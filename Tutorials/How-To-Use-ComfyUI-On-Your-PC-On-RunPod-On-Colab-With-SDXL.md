# [Tutorial] How To Use ComfyUI On Your PC, On Google Colab (Free) And On RunPod With SDXL Full Tutorial / Guide

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-ComfyUI-On-Your-PC-On-RunPod-On-Colab-With-SDXL.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

* ComfyUI Github Repo : https://github.com/comfyanonymous/ComfyUI
* Download and install link : https://github.com/comfyanonymous/ComfyUI#windows
* Google Colab (free) : https://colab.research.google.com/github/comfyanonymous/ComfyUI/blob/master/notebooks/comfyui_colab.ipynb
* RunPod template name : RunPod SD Comfy UI
* Download attached images, drag and drop them into ComfyUI for workflows to load. Images have embedding info
* The URL it will start by default : http://127.0.0.1:8188/

## RunPod Installation

* Select RunPod Fast Stable Diffusion template and start your pod

### Auto Install

* Upload comfy_ui.sh into workspace folder
* Execute below command and wait until all is done

```
chmod +x comfy_ui.sh
./comfy_ui.sh
```

**For running it after install run below command and use 3001 connect button on MyPods interface**
* If it doesn't start at the first time execute again

```
apt update
apt install psmisc
fuser -k 3000/tcp
cd /workspace/ComfyUI/venv
source bin/activate
cd /workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 3000
```

### Manual Step by Step Install

* Execute below commands 1 by 1
* Move into workspace and start a new terminal

```
git clone https://github.com/comfyanonymous/ComfyUI
```

Move into ComfyUI and start a new terminal

```
python -m venv venv
```

* Move into venv and start a new terminal

```
source bin/activate
```

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
pip install -U --pre xformers
```

```
cd ..
```

```
pip install -r requirements.txt
```

* Move into models/vae/ and start a new terminal

```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors
```

* Move into models/checkpoints and start a new terminal

```
wget https://huggingface.co/SG161222/Realistic_Vision_V4.0/resolve/main/Realistic_Vision_V4.0.safetensors
```

* Register Hugging Face and login if you don't have an account already
* https://huggingface.co/join
* https://huggingface.co/login
* Open below links and accept terms and conditions - now auto approve official weights - just type anything to the form fill sections
* https://huggingface.co/stabilityai/stable-diffusion-xl-base-0.9
* https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9
* Generate your Hugging Face access token and save it somewhere
* https://huggingface.co/settings/tokens
* Move into models/checkpoints and start a new terminal
* Copy below codes and replace USERNAME and TOKEN with your Hugging Face username and token
* And the execute it

```
wget https://USERNAME:TOKEN@huggingface.co/stabilityai/stable-diffusion-xl-base-0.9/resolve/main/sd_xl_base_0.9.safetensors
```

```
wget https://USERNAME:TOKEN@huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9/resolve/main/sd_xl_refiner_0.9.safetensors
```

### How To Run After Install

* Run below command and then use port 3001 connect button on MyPods section of the RunPod.io website
* If it doesn't start at the first time execute again
```
apt update
apt install psmisc
fuser -k 3000/tcp
cd /workspace/ComfyUI/venv
source bin/activate
cd /workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 3000
```


