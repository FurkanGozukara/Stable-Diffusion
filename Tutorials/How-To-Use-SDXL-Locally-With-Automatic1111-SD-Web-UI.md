[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Use-SDXL-Locally-With-Automatic1111-SD-Web-UI.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Use-SDXL-Locally-With-Automatic1111-SD-Web-UI.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# [Tutorial] How To Install Automatic1111 Web UI Locally And Use Stable Diffusion XL (SDXL) For Free On Your Computer

## Tutorial Video : https://youtu.be/eY_v5IR4dUQ

## Prerequisites

**Full tutorial for python and git installation**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.11 > https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe
* git > https://git-scm.com/downloads

## SDXL LoRA Training Tutorial
* Start training your LoRAs with Kohya GUI version with best known settings
* [First Ever SDXL Training With Kohya LoRA - Stable Diffusion XL Training Will Replace Older Models](https://youtu.be/AY6DMBCIZ3A)

## ComfyUI Tutorial and Other SDXL Tutorials

* If you are interested in using ComfyUI checkout below tutorial
* [ComfyUI Tutorial - How to Install ComfyUI on Windows, RunPod & Google Colab | Stable Diffusion SDXL](https://youtu.be/FnMHbhvWUhE)
* Other native diffusers and very nice Gradio based tutorials
* [How To Use Stable Diffusion X-Large (SDXL) On Google Colab For Free](https://youtu.be/s2MQqmv6yAg)
* [Stable Diffusion XL (SDXL) Locally On Your PC - 8GB VRAM - Easy Tutorial With Automatic Installer](https://youtu.be/__7VNmnn5iU)
* [How To Use SDXL On RunPod Tutorial. Auto Installer & Refiner & Amazing Native Diffusers Based Gradio](https://youtu.be/gTdPRm-R-14)

## Installation

* Edit webui-user.bat file and add below parameters
* ```set COMMANDLINE_ARGS=--no-half-vae --xformers```
* If you get out of memory error try below parameters. First try medvram
* ```--no-half-vae``` is necessary for SDXL but don't use it for SD 1.5 models unless you get VAE error
* ```set COMMANDLINE_ARGS=--no-half-vae --xformers --medvram```
* ```set COMMANDLINE_ARGS=--no-half-vae --xformers --lowvram```

### Automatic via Scripts

The bat script shared below will automatically download and install latest Automatic1111 Web UI and Official SDXL Model

* https://www.patreon.com/posts/automatic-for-ui-86307255

All Patreon posts index
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md

Our Discord channel for help (free - 3500+ members) 
* https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

### Manual Installation

**Download SDXL 1.0 safetensors file from official repo**
* SDXL Base 1.0 : https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
* SDXL Refiner 1.0 : https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors

**New Install**

* Automatic1111 Repo Link : https://github.com/AUTOMATIC1111/stable-diffusion-webui
* V1.5 SDXL changelog : https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/release_candidate/CHANGELOG.md

* First clone Automatic1111 into any folder as shown in [video](https://youtu.be/eY_v5IR4dUQ)

* We skip checkout dev since not necessary anymore

* Then install as usual as shown in [video](https://youtu.be/eY_v5IR4dUQ)

**Upgrade Existing**

Open a cmd window when you are inside your existing Automatic1111 folder as shown in tutorial [video](https://youtu.be/eY_v5IR4dUQ)

Type below commands and update to the latest version 

```
git pull
```

* We skip checkout dev since not necessary anymore

Then start as usual


## Used Prompts

Positive
```
photo of a male warrior, modelshoot style, (extremely detailed CG unity 8k wallpaper), full shot body photo of the most beautiful artwork in the world, medieval armor, professional majestic oil painting by Ed Blinkey, Atey Ghailan, Studio Ghibli, by Jeremy Mann, Greg Manchess, Antonio Moro, trending on ArtStation, trending on CGSociety, Intricate, High Detail, Sharp focus, dramatic, photorealistic painting art by midjourney and greg rutkowski
```

Negative
```
canvas frame, cartoon, 3d, ((disfigured)), ((bad art)), ((deformed)),((extra limbs)),((close up)),((b&w)), weird colors, blurry, (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), Photoshop, video game, ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, 3d render
```

## Used Commit Hash 

4bf64976c1971fe2ff8931dd094306d297ebabcf



