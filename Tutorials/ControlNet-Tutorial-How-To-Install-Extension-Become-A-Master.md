# [Tutorial] Complete Guide to ControlNet for Stable Diffusion Automatic1111 Web UI Extension

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FControlNet-Tutorial-How-To-Install-Extension-Become-A-Master.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses)

* This readme file will get updated if be necessary so always checkout this file if something not working and open an issue thread on our GitHub repo
* How to download and install Stable Diffusion Automatic1111 Web UI
* How to download and install ControlNet extension for Automatic1111 Web UI
* How to use ControlNet Inpainting (generative fill of Photoshop), outpainting (generative fill of Photoshop and zoom out of Midjourney)
* How to use ControlNet features such as Canny, Depth, Normal, OpenPose, MLSD, Lineart, SoftEdge, Scribble, Seg, Shuffle, Tile, Inpaint, IP2P, Reference, T2IA
* How to generate QR Code having images with ControlNet
* I will also show how to update ControlNet and download models on RunPod. Usage is same as in Windows
* Official ControlNet repo (not extension) : https://github.com/lllyasviel/ControlNet-v1-1-nightly

## Full tutorial video link > https://youtu.be/3E5fhFQUVLo

## Prerequisites

**Full tutorial for python and git installation with venv**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.9 > https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe
* git > https://git-scm.com/downloads

## Installation

### Automatic via Scripts

Bat scripts that automatically installs Automatic1111 Web UI & ControlNet and download all ControlNet models
* https://www.patreon.com/posts/automatic-and-84875387
* [Screenshot](https://s3.amazonaws.com/moonup/production/uploads/6345bd89fe134dfd7a0dba40/KBJqoSet0mBipEqhkdVTY.png)

All Patreon posts index
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md

Our Discord channel for help (free - 3000+ members) 
* https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

### Manual

### Step 1

Install Automatic1111 Web UI

Clone the official repo into any folder you want to install. If you are not expert clone into C drive
* https://github.com/AUTOMATIC1111/stable-diffusion-webui

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

Edit webui-user.bat file and add this argument :
```
set COMMANDLINE_ARGS=--xformers
```
You can find all arguments for below link
* https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings

Double click and start webui-user.bat for fresh clean install

### Step 2
Updating xformers to latest. Start a new cmd inside web ui folder and type below code. All shown in the tutorial video so watch it
```
call .\venv\Scripts\activate.bat
pip install xformers==dev
```
Look for latest xformers and install it e.g. All shown in the tutorial video so watch it
```
pip install xformers== 0.0.21.dev551
```

What are optimizations: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Optimizations

### Step 3 Download Best VAE and set it as default

* Download below file into the VAE folder inside stable-diffusion-webui\models
* https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt
* Set it as default from configuration as shown in video

### Step 4 Manual Install - best way always works
Clone main ControlNet repo (https://github.com/Mikubill/sd-webui-controlnet) into this folder : ```\automatic_web_ui\extensions```
```
git clone https://github.com/Mikubill/sd-webui-controlnet
```
From below link download the models you wish to use and put them inside ```automatic_web_ui\extensions\sd-webui-controlnet\models folder```
* https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main
* Style Transfer models T2I
* https://huggingface.co/TencentARC/T2I-Adapter/tree/main/models

Restart Automatic1111 Web UI and you will be ready to use

Follow the video for more information and detailed how to steps

For updating open cmd inside ```automatic_web_ui\extensions\sd-webui-controlnet\``` and type below code

```
git pull https://github.com/Mikubill/sd-webui-controlnet
```

### Step 4 Auto Install - sometimes may not work
Go to the extensions tab of the Automatic1111 Web UI, find ControlNet, click install

From below link download the models you wish to use and put them inside ```automatic_web_ui\extensions\sd-webui-controlnet\models folder```
* https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main

Restart Automatic1111 Web UI and you will be ready to use

Follow the video for more information and detailed how to steps

For updating the extension, open extensions tab, click check for updates, click apply and restart ui, then fully restart Automatic1111 web UI

### Step 5 Don't Forget

Go to settings and check Allow other script to control this extension checkbox as shown in video

### QR Code Generator

https://keremerkan.net/qr-code-and-2d-code-generator/

### Example custom model download DreamShaper_6.31_BakedVae.safetensors
* https://huggingface.co/Lykon/DreamShaper
* https://huggingface.co/Lykon/DreamShaper/resolve/main/DreamShaper_6.31_BakedVae.safetensors

## How To Install and Use On RunPod

**Tutorials**
* [Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI](https://youtu.be/QN1vdGhjcRc)
* [How To Install DreamBooth & Automatic1111 On RunPod & Latest Libraries - 2x Speed Up - cudDNN - CUDA](https://youtu.be/c_S2kFAefTQ)

* Select Stable Diffusion web-automatic-8.0.3 template or newer ones with that name
* It comes with ControlNet extension
* Register / login RunPod : https://bit.ly/RunPodIO

### Auto Install & Download
* Run runpod_controlnet.py script by downloading from below link
* https://www.patreon.com/posts/84896373

### Manual Install
* Open extension folder and do git pull to update to latest as shown in video
* Open models folder and use wget to download models as shown in video

### Used Versions

ControlNet Commit 
```
git checkout 41011bea0490d1c61decef867d76d54f631dc28a
```
Automatic1111 Web UI Commit
```
git checkout baf6946e06249c5af9851c60171692c44ef633e0
```
Pip Freeze Below

```
Microsoft Windows [Version 10.0.19045.3086]
(c) Microsoft Corporation. All rights reserved.

E:\auto\stable-diffusion-webui\venv\Scripts>activate

(venv) E:\auto\stable-diffusion-webui\venv\Scripts>pip freeze
absl-py==1.4.0
accelerate==0.18.0
addict==2.4.0
aenum==3.1.14
aiofiles==23.1.0
aiohttp==3.8.4
aiosignal==1.3.1
altair==5.0.1
antlr4-python3-runtime==4.9.3
anyio==3.7.0
async-timeout==4.0.2
attrs==23.1.0
basicsr==1.4.2
beautifulsoup4==4.12.2
blendmodes==2022
boltons==23.0.0
cachetools==5.3.1
certifi==2023.5.7
cffi==1.15.1
charset-normalizer==3.1.0
clean-fid==0.1.35
click==8.1.3
clip @ https://github.com/openai/CLIP/archive/d50d76daa670286dd6cacf3bcd80b5e4823fc8e1.zip
colorama==0.4.6
contourpy==1.1.0
cssselect2==0.7.0
cycler==0.11.0
deprecation==2.1.0
einops==0.4.1
exceptiongroup==1.1.1
facexlib==0.3.0
fastapi==0.94.0
ffmpy==0.3.0
filelock==3.12.2
filterpy==1.4.5
flatbuffers==23.5.26
fonttools==4.40.0
frozenlist==1.3.3
fsspec==2023.6.0
ftfy==6.1.1
future==0.18.3
fvcore==0.1.5.post20221221
gdown==4.7.1
gfpgan==1.3.8
gitdb==4.0.10
GitPython==3.1.30
google-auth==2.20.0
google-auth-oauthlib==1.0.0
gradio==3.32.0
gradio_client==0.2.7
grpcio==1.54.2
h11==0.12.0
httpcore==0.15.0
httpx==0.24.1
huggingface-hub==0.15.1
idna==3.4
imageio==2.31.1
importlib-metadata==6.7.0
inflection==0.5.1
iopath==0.1.9
Jinja2==3.1.2
jsonmerge==1.8.0
jsonschema==4.17.3
kiwisolver==1.4.4
kornia==0.6.7
lark==1.1.2
lazy_loader==0.2
lightning-utilities==0.8.0
linkify-it-py==2.0.2
llvmlite==0.40.1
lmdb==1.4.1
lpips==0.1.4
lxml==4.9.2
Markdown==3.4.3
markdown-it-py==2.2.0
MarkupSafe==2.1.3
matplotlib==3.7.1
mdit-py-plugins==0.3.3
mdurl==0.1.2
mediapipe==0.10.1
mpmath==1.3.0
multidict==6.0.4
networkx==3.1
numba==0.57.1
numpy==1.23.5
oauthlib==3.2.2
omegaconf==2.2.3
open-clip-torch @ https://github.com/mlfoundations/open_clip/archive/bb6e834e9c70d9c27d0dc3ecedeebeaeb1ffad6b.zip
opencv-contrib-python==4.7.0.72
opencv-python==4.7.0.72
orjson==3.9.1
packaging==23.1
pandas==2.0.2
piexif==1.1.3
Pillow==9.5.0
platformdirs==3.7.0
portalocker==2.7.0
protobuf==3.20.0
psutil==5.9.5
pyasn1==0.5.0
pyasn1-modules==0.3.0
pycparser==2.21
pydantic==1.10.9
pydub==0.25.1
Pygments==2.15.1
pyparsing==3.1.0
pyrsistent==0.19.3
PySocks==1.7.1
python-dateutil==2.8.2
python-multipart==0.0.6
pytorch-lightning==1.9.4
pytz==2023.3
PyWavelets==1.4.1
pywin32==306
PyYAML==6.0
realesrgan==0.3.0
regex==2023.6.3
reportlab==4.0.4
requests==2.31.0
requests-oauthlib==1.3.1
resize-right==0.0.2
rsa==4.9
safetensors==0.3.1
scikit-image==0.20.0
scipy==1.10.1
semantic-version==2.10.0
sentencepiece==0.1.99
six==1.16.0
smmap==5.0.0
sniffio==1.3.0
sounddevice==0.4.6
soupsieve==2.4.1
starlette==0.26.1
svglib==1.5.1
sympy==1.12
tabulate==0.9.0
tb-nightly==2.14.0a20230622
tensorboard-data-server==0.7.1
termcolor==2.3.0
tifffile==2023.4.12
timm==0.6.7
tinycss2==1.2.1
tokenizers==0.13.3
tomesd==0.1.2
tomli==2.0.1
toolz==0.12.0
torch==2.0.1+cu118
torchdiffeq==0.2.3
torchmetrics==0.11.4
torchsde==0.2.5
torchvision==0.15.2+cu118
tqdm==4.65.0
trampoline==0.1.2
transformers==4.25.1
typing_extensions==4.6.3
tzdata==2023.3
uc-micro-py==1.0.2
urllib3==1.26.16
uvicorn==0.22.0
wcwidth==0.2.6
webencodings==0.5.1
websockets==11.0.3
Werkzeug==2.3.6
xformers==0.0.21.dev552
yacs==0.1.8
yapf==0.40.1
yarl==1.9.2
zipp==3.15.0

(venv) E:\auto\stable-diffusion-webui\venv\Scripts>
```
