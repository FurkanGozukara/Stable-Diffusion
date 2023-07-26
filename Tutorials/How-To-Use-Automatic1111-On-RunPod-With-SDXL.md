# [Tutorial] How To Use Automatic1111 SD Web UI With SDXL On RunPod Full Tutorial / Guide
## Tutorial Video link > [How to use Stable Diffusion X-Large (SDXL) with Automatic1111 Web UI on RunPod - Easy Tutorial](https://youtu.be/mDW4zqh8R40)

## *The batch size image generation speed shown in the video is incorrect. I mistakenly chosen Batch count instead of Batch size.*
 
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Use-Automatic1111-On-RunPod-With-SDXL.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

## Register or Login Runpod : https://bit.ly/RunPodIO

* How to use RunPod master tutorial including runpodctl
* [Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI](https://youtu.be/QN1vdGhjcRc)

* Automatic1111 Github Repo : https://github.com/AUTOMATIC1111/stable-diffusion-webui
* RunPod template name : RunPod Stable Diffusion (stable-diffusion:web-ui-9.1.0 or newer)

## Initial Instruction for Both Automatic and Manual Installation

**IMPORTANT - First modify relauncher.py as shown in [video](https://youtu.be/mDW4zqh8R40) and restart the pod (only 1 time necessary)**

```
while (n<1):
```

## 1 Click Installer For RunPod

* Download 1_click_auto1111_SDXL.sh from here: https://www.patreon.com/posts/1-click-runpod-86438018
* Upload 1_click_auto1111_SDXL.sh into workspace folder
* Execute below command and wait until all is done
* It will install latest Automatic1111 that supports SDXL and will download SDXL model files automatically

```
chmod +x 1_click_auto1111_SDXL.sh
./1_click_auto1111_SDXL.sh
```

**For running it after install run below command and use 3001 connect button on MyPods interface**
* If it doesn't start at the first time execute again

```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```


## PC Automatic1111 SDXL Installation

* [How To Use SDXL in Automatic1111 Web UI - SD Web UI vs ComfyUI - Easy Local Install Tutorial / Guide](https://youtu.be/eY_v5IR4dUQ)


### Manual Step by Step Install

* Execute below commands 1 by 1
* Move into /workspace/stable-diffusion-webui
* Download or save somewhere webui-user.sh
* Move into /workspace/stable-diffusion-webui and start a new terminal
* 

```
git stash
```

```
git checkout master
```

```
git pull
```

* We skip checkout dev since not necessary anymore

* Upload back webui-user.sh
* Remove --skip-install

### How To Download SDXL Models
* SDXL 1.0 is released. Links are updated. Just execute below command inside models > Stable Diffusion folder
* No need Hugging Face account anymore
* I have upated auto installer as well

```
wget https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
```

```
wget https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors
```

### How To Run After Install

* Run below command and then use port 3001 connect button on MyPods section of the RunPod.io website
* If it doesn't start at the first time execute again
```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```


