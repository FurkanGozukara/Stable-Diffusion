# [Tutorial] How To Use ComfyUI On Your PC, On Google Colab (Free) And On RunPod With SDXL Full Tutorial / Guide

* ComfyUI Github Repo : https://github.com/comfyanonymous/ComfyUI
* Download and install link : https://github.com/comfyanonymous/ComfyUI#windows
* Google Colab (free) : https://colab.research.google.com/github/comfyanonymous/ComfyUI/blob/master/notebooks/comfyui_colab.ipynb
* RunPod template name : RunPod SD Comfy UI

## RunPod Installation

* Select RunPod Fast Stable Diffusion template
* Execute below commands 1 by 1

```
cd /workspace
```

```
git clone https://github.com/comfyanonymous/ComfyUI
```

```
cd /workspace/ComfyUI
```

```
python -m venv venv
```

```
source venv/bin/activate
```

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
pip install -U --pre xformers
```

```
pip install -r requirements.txt
```

```
wget -c https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors -P ./models/vae/
```

```
wget -c https://huggingface.co/SG161222/Realistic_Vision_V4.0/resolve/main/Realistic_Vision_V4.0.safetensors -P ./models/checkpoints/
```

### How To Run After Install

Run below command and then use port 3001 connect button on MyPods section of the RunPod.io website

```
apt update
apt install psmisc
fuser -k 3001/tcp
cd /workspace/ComfyUI/ven
source bin/activate
cd /workspace/ComfyUI
python main.py --listen 0.0.0.0 --port 3001
```


