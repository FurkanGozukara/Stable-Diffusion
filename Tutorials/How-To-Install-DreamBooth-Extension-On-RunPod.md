# How To Install Latest Automatic1111 Web UI and DreamBooth Extension And Cuda and cuDNN DLL Libraries on RunPod Tutorial
## Updated & Verified 4 August 2023 - Full Tutorial : https://youtu.be/c_S2kFAefTQ

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Install-DreamBooth-Extension-On-RunPod.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan) [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) 


[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles)



**All Patreon Posts Index : https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md**

### My very comprehensive main runpod tutorial (includes fast data transfer with runpodctl) : https://youtu.be/QN1vdGhjcRc

## Full Tutorial : https://youtu.be/c_S2kFAefTQ

### Login or Register RunPod : https://bit.ly/RunPodIO

### Our Discord channel : https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

## Initial Instruction for Both Automatic and Manual Installation

**IMPORTANT - First modify relauncher.py as shown in video and restart the pod (only 1 time necessary)**

```
while (n<1):
```

## Automatic Script Installation

### Video For Script Installation : https://youtu.be/MOVEcvn5h-0

Then download auto installer posted on Patreon (install1.sh and install2.sh - upload to workspace) or follow below steps

### Auto installer script on Patreon : https://www.patreon.com/posts/runpod-auto-84716845

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

## Manual Step by Step Installation : https://youtu.be/c_S2kFAefTQ

```
cd /workspace/stable-diffusion-webui
git checkout master
git pull
```

```
rm -r /workspace/venv
```

First find ```webui-user.sh``` and change below line and remove ```--skip-install``` and save

```export COMMANDLINE_ARGS="--port 3000 --xformers --skip-install --listen --enable-insecure-extension-access"```

So it becomes

```export COMMANDLINE_ARGS="--port 3000 --xformers --listen --enable-insecure-extension-access"```

Then execute below codes

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```

## Now Part 2 Begins

Open a new terminal and execute below codes

```
fuser -k 3000/tcp
```

```
source /workspace/venv/bin/activate
```

```
fuser -k 3000/tcp
```

```
yes | pip uninstall torch torchvision torchaudio
yes | pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
pip install -U --pre xformers
```

```
git clone https://github.com/d8ahazard/sd_dreambooth_extension /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension
```

```
pip install -r /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension/requirements.txt
```

```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors -O /workspace/stable-diffusion-webui/models/VAE/vae-ft-mse-840000-ema-pruned.safetensors
```


**Edit webui-user.sh - last step after installing requirements of DreamBooth**
```
export COMMANDLINE_ARGS="--port 3000 --xformers --skip-install --listen --enable-insecure-extension-access"
```

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```

### After you restart your Pod execute below command to get most speed

```
fuser -k 3000/tcp
yes | apt install -y libcudnn8=8.9.2.26-1+cuda11.8 libcudnn8-dev=8.9.2.26-1+cuda11.8 --allow-change-held-packages
cd /workspace/stable-diffusion-webui
python relauncher.py
```
