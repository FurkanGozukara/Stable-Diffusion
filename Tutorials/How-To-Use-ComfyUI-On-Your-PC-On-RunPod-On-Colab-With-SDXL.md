# [Tutorial] How To Use ComfyUI On Your PC, On Google Colab (Free) And On RunPod With SDXL Full Tutorial / Guide

* ComfyUI Github Repo : https://github.com/comfyanonymous/ComfyUI
* Download and install link : https://github.com/comfyanonymous/ComfyUI#windows
* Google Colab (free) : https://colab.research.google.com/github/comfyanonymous/ComfyUI/blob/master/notebooks/comfyui_colab.ipynb
* RunPod template name : RunPod SD Comfy UI

## RunPod Installation

* Select RunPod Fast Stable Diffusion template and start your pod

### Auto Install

* Upload comfy_ui.sh into workspace folder
* Execute below command and wait until all is done

```
chmod +x a.sh
./comfy_ui.sh
```

**For running it after install run below command and use 3001 connect button on MyPods interface**

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

Run below command and then use port 3001 connect button on MyPods section of the RunPod.io website

```
apt update
apt install psmisc
fuser -k 3000/tcp
cd /workspace/ComfyUI/venv
source bin/activate
cd /workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 3000
```


