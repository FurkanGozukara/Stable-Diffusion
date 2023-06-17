# How To Install Latest Automatic1111 Web UI and DreamBooth Extension And Cuda and cuDNN DLL Libraries on RunPod Tutorial

**All Patreon Posts Index : https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md**

### My very comprehensive main runpod tutorial (includes fast data transfer with runpodctl) : https://youtu.be/QN1vdGhjcRc

## Tutorial video link will be added

### Login or Register RunPod : https://bit.ly/RunPodIO

## Initial Instruction for Both Automatic and Manual Installation

First modify relauncher.py as shown in video and restart the pod (only 1 time necessary)

```
while (n<1):
```

## Automatic Script Installation

### Video For Script Installation : https://youtu.be/MOVEcvn5h-0

Then download auto installer posted on Patreon (install1.sh and install2.sh - upload to workspace) or follow below steps

### Auto installer script on Patreon :https://www.patreon.com/posts/runpod-auto-84716845

```
chmod +x install1.sh
./install1.sh
```

```
chmod +x install2.sh
./install2.sh
```

After install lets say you want to manually start web ui instance, or you turned off pod and started again later here below command
```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```

If you decide to install other extension install extension first

Then open ```webui-user.sh``` file in Stable Diffusion folder and remove ```--skip-install```

Save webui-user.sh file

Restart Web UI

If Dreambooth gets broken run below code again

```
chmod +x install2.sh
./install2.sh
```

## Manual Step by Step Installation

Full tutorial video : 

```
cd /workspace/stable-diffusion-webui
git checkout master
git pull
```

```
rm -r /workspace/venv
```

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```


```
fuser -k 3000/tcp
pip install xformers==dev
```

look latest version and install it

```
yes | pip uninstall torch torchvision torchaudio
yes | pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
apt update
git clone https://github.com/d8ahazard/sd_dreambooth_extension /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension
yes | apt install -y libcudnn8=8.9.2.26-1+cuda11.8 libcudnn8-dev=8.9.2.26-1+cuda11.8 --allow-change-held-packages
```

```
pip install -r /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension/requirements.txt
```

```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors -O /workspace/stable-diffusion-webui/models/VAE/vae-ft-mse-840000-ema-pruned.safetensors
```


**Edit webui-user.sh**
```
export COMMANDLINE_ARGS="--xformers --port 3000 --listen --enable-insecure-extension-access --skip-install"
```

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```
