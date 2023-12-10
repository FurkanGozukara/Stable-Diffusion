[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Install-DreamBooth-Extension-On-RunPod.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


# How To Install Latest Automatic1111 Web UI and DreamBooth Extension And Cuda and cuDNN DLL Libraries on RunPod Tutorial
## Updated & Verified 8 August 2023 - Full Tutorial : https://youtu.be/c_S2kFAefTQ

**All Patreon Posts Index : https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md**

### My very comprehensive main runpod tutorial (includes fast data transfer with runpodctl) : https://youtu.be/QN1vdGhjcRc

## Full Tutorial : https://youtu.be/c_S2kFAefTQ

### Login or Register RunPod : https://bit.ly/RunPodIO

### Our Discord channel : https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

## Initial Instruction for Both Automatic and Manual Installation

**IMPORTANT - First modify relauncher.py as below**
* The line you are going to change to below one is > ```while True:```

```
while launch_counter < 1:
```

You can also open [this link](https://gist.githubusercontent.com/FurkanGozukara/822ed8078dcf8bcfe72a0c81e22d62dc/raw/7d7128d27bf16d4160f18cacebfdfc15de40f6a0/relauncher.py) and copy paste it into your relauncher.py (this is easier)

## Automatic Script Installation

### Video For Script Installation : https://youtu.be/MOVEcvn5h-0

Then download auto installer posted on Patreon (install1.sh and install2.sh - upload to workspace) or follow below steps

### Auto installer script on Patreon (8 August 2023 Updated) : https://www.patreon.com/posts/runpod-auto-84716845

```
cd /workspace
chmod +x install1.sh
./install1.sh
```

```
cd /workspace
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
cd /workspace
chmod +x install2.sh
./install2.sh
```

## Manual Step by Step Installation : https://youtu.be/c_S2kFAefTQ

```
cd /workspace/stable-diffusion-webui
git checkout 68f336bd994bed5442ad95bad6b6ad5564a5409a
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
yes | pip3 install torch==2.0.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
pip install xformers==0.0.22
```

```
git clone https://github.com/d8ahazard/sd_dreambooth_extension /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension
cd /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension
git checkout c2a5617c587b812b5a408143ddfb18fc49234edf
```

```
pip install -r /workspace/stable-diffusion-webui/extensions/sd_dreambooth_extension/requirements.txt
```

```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors -O /workspace/stable-diffusion-webui/models/VAE/vae-ft-mse-840000-ema-pruned.safetensors
```


**Edit webui-user.sh - last step after installing requirements of DreamBooth**
```
export COMMANDLINE_ARGS="--xformers --port 3000 --listen --enable-insecure-extension-access --skip-install --no-half-vae"
```

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```

### After you restart your Pod execute below command to get most speed

```
fuser -k 3000/tcp
yes | apt install -y libcudnn8=8.9.4.25-1+cuda11.8 libcudnn8-dev=8.9.4.25-1+cuda11.8 --allow-change-held-packages
cd /workspace/stable-diffusion-webui
python relauncher.py
```

## Pip freeze and commit ids as date of 8 August 2023

* Automatic1111 : 68f336bd994bed5442ad95bad6b6ad5564a5409a
* Dreambooth ext : c2a5617c587b812b5a408143ddfb18fc49234edf

* get latest cuda files list on runpod
* apt update
* apt list -a libcudnn8-dev

