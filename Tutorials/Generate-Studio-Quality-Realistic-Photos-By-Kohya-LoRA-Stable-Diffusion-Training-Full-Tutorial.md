
# Generate Studio Quality Realistic Photos By Kohya LoRA Stable Diffusion Training - Full Tutorial

## Tested and verified to be working with Torch 1 - 5 June 2023 but not learning. Use below given commit

### Tested settings

* AdamW optimizer default LR
* Torch 1.13
* cuDNN 8.7.0
* bf16
* xformers v21
* 3.5-4.5 it/s on RTX 3090 for 512px 128 rank

```Use AdamW optimizer if AdamW8bit fails```

```Use fp16 mixed precision if bf16 fails```

### When you read this if works but if not learns

Make a new install 

Start git clone then

```
git checkout 63657088f4c35a376dd8a936f53e9b9a3b4b1168
```

Then follow below steps

## Tutorial Video : https://youtu.be/TpuDOsuKIBo

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FGenerate-Studio-Quality-Realistic-Photos-By-Kohya-LoRA-Stable-Diffusion-Training-Full-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

### Prompts

```
parameters

handsome portrait photo of (ohwx man:1.1) wearing a Gray fancy expensive suit <lora:test6-000005:1>

Negative prompt: (blue eyes, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), fat, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck

Steps: 30, Sampler: DPM++ SDE Karras, CFG scale: 5, Seed: 1117571876, Size: 640x720, Model hash: c0d1994c73, Model: realisticVisionV20_v20

I changed the Gray color with other colors like red blue yellow etc.
```

### 2700 real classification images - performs better for reality with (512x512), (512x768), (768x512), (640x960), (960x640), (768x1024), (1024x768) aspect ratios
**https://www.patreon.com/posts/4k-2700-real-84053021**

### 2071 classification / regularization images of Realistic Vision 2
**https://www.patreon.com/posts/realistic-vision-82085317** 


### PDF file mentioned in the tutorial video:
**https://www.patreon.com/posts/kohya-ss-lora-82085260**

## Prerequisites

### Full tutorial for python and git installation with venv
**https://youtu.be/B5U7LJOvH6g**

### Full tutorial for how to install and use Stable Diffusion Automatic1111 Web UI: 
**1 - https://youtu.be/AZg6vzWHOTA**

**2 - https://youtu.be/aAyvsX-EpG4**

### Download and install Visual Studio 2015, 2017, 2019, and 2022 redistributable 
**https://aka.ms/vs/17/release/vc_redist.x64.exe**

### Download and install Python 3.10.9 and git
**1 - https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe**

**2 - https://youtu.be/aAyvsX-EpG4**

### Other Links and Files

Kohya SS Gui Repo : https://github.com/bmaltais/kohya_ss 

Kohya commit id : 63657088f4c35a376dd8a936f53e9b9a3b4b1168

Realistic Vision V2 model file download link

https://civitai.com/api/download/models/29460 

Best VAE file to set as default to generate images

https://huggingface.co/stabilityai/sd-vae-ft-mse-original/blob/main/vae-ft-mse-840000-ema-pruned.ckpt 

cuDNN v8.7.0 For CUDA 11.x

https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/cudnn_windows%20v8.7.0.zip


### Installation changed a little bit after my video

Select option 1 to install with torch v1.12

Select option 2 to install with torch v2


### Commands - I suggest you to install torch 1.13, xformers 21 and then execute cudnn py file

As june 5 latest commit works but do not learn

The working previous commit with below torch and cudnn. do git checkout after cloning 

```
git checkout 63657088f4c35a376dd8a936f53e9b9a3b4b1168
```

```
python .\tools\cudann_1.8_install.py
```

```
gui.bat --listen 127.0.0.1 --server_port 7860 --inbrowser
```

Set cuda visible devince only 1

```
setx CUDA_VISIBLE_DEVICES 1
``` 

``` 
pip uninstall torch torchvision torchaudio
``` 

```
pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
```

**This below link is only compatiable with Python 3.10.x and Torch 1.13 and Windows**

```
pip install https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/xformers-0.0.21.dev541-cp310-cp310-win_amd64.whl
```

**This below link is only compatiable with Python 3.10.x and Torch 1.13 and Unix/Linux/RunPod**

```
pip install https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/xformers-0.0.21.dev541-cp310-cp310-manylinux2014_x86_64.whl
```

```
python .\tools\cudann_1.8_install.py
```

```--gpu_ids=1```
