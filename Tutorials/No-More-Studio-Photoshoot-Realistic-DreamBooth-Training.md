# [Tutorial] With This Newly Invented Workflow Train Yourself At The Level Of Studio Photography With DreamBooth Extension Of Automatic1111 SD Web UI

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FNo-More-Studio-Photoshoot-Realistic-DreamBooth-Training.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses)

* This readme file will get updated if be necessary so always checkout this file if something not working and open an issue thread on our GitHub repo
* How to download and install DreamBooth extension for Automatic1111 Web UI
* How to train with DreamBooth extension for Studio Photoshoot realism
* What are class images and why do we use them
* What kind of class images we should prefer to use

## Full tutorial video link > link will be added when published

## Prerequisites

**Full tutorial for python and git installation**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.9 > https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe
* git > https://git-scm.com/downloads

**Download and install Automatic1111 Web UI**
* https://github.com/AUTOMATIC1111/stable-diffusion-webui
* If you don't know how to install Automatic1111 or use it watch first 15 minutes of the fresh tutorial below
* [Zero to Hero ControlNet Tutorial: Stable Diffusion Web UI Extension | Complete Feature Guide](https://youtu.be/3E5fhFQUVLo)

**Realistic Vision V2 Model For Realistic Training (3.85 GB)**
* https://huggingface.co/SG161222/Realistic_Vision_V2.0/resolve/main/Realistic_Vision_V2.0.safetensors

## Installation

### Automatic via Scripts

Bat scripts that automatically installs Automatic1111 Web UI & DreamBooth extension
* https://www.patreon.com/posts/auto-installer-84773926
* [Screenshot](https://s3.amazonaws.com/moonup/production/uploads/6345bd89fe134dfd7a0dba40/RPD8bg6bFQ8oCT-eC2z2Y.png)

All Patreon posts index
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md

Our Discord channel for help (free - 3000+ members) 
* https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

### Manual Installation

* Extension repo : https://github.com/d8ahazard/sd_dreambooth_extension
* If you already have the extension installed delete its folder

* Enter inside your Automatic1111 Installation inside extensions folder as shown in the tutorial video
* * If something don't work please do a fresh install
* Do a git clone
* ```git clone https://github.com/d8ahazard/sd_dreambooth_extension```
* If you want to use the same version as I used in this tutorial after git clone enter inside sd_dreambooth_extension folder and execute below command. **Use only if you know what is this**
* ```git checkout dc413a14379b165355502d9f65856c40a4bb5b6f```
* Open a new cmd inside automatic_web_ui\venv\Scripts
* Type ```activate```
* Then execute below commands 1 by 1  
* ```cd..```
* ```cd..```
* ```cd "extensions\sd-webui-controlnet"```
* ```pip install -r requirements.txt```

## Used Versions

* Automatic1111 Web UI
* ```git checkout 394ffa7b0a7fff3ec484bcd084e673a8b301ccc8```

* DreamBooth Extension
* ```git checkout dc413a14379b165355502d9f65856c40a4bb5b6f```

* pip freeze

```
  (venv) C:\temp\test\stable-diffusion-webui\venv\Scripts>pip freeze
absl-py==1.4.0
accelerate==0.19.0
addict==2.4.0
aenum==3.1.15
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
bitsandbytes==0.35.4
blendmodes==2022
boltons==23.0.0
cachetools==5.3.1
certifi==2023.5.7
charset-normalizer==3.1.0
clean-fid==0.1.35
click==8.1.3
clip @ https://github.com/openai/CLIP/archive/d50d76daa670286dd6cacf3bcd80b5e4823fc8e1.zip
colorama==0.4.6
contourpy==1.1.0
cycler==0.11.0
dadaptation==3.1
deprecation==2.1.0
diffusers==0.16.1
discord-webhook==1.1.0
einops==0.4.1
exceptiongroup==1.1.1
facexlib==0.3.0
fastapi==0.94.1
ffmpy==0.3.0
filelock==3.12.2
filterpy==1.4.5
fonttools==4.40.0
frozenlist==1.3.3
fsspec==2023.6.0
ftfy==6.1.1
future==0.18.3
gdown==4.7.1
gfpgan==1.3.8
gitdb==4.0.10
GitPython==3.1.31
google-auth==2.21.0
google-auth-oauthlib==1.0.0
gradio==3.32.0
gradio_client==0.2.7
grpcio==1.56.0
h11==0.12.0
httpcore==0.15.0
httpx==0.24.1
huggingface-hub==0.15.1
idna==3.4
imageio==2.31.1
importlib-metadata==6.7.0
inflection==0.5.1
Jinja2==3.1.2
jsonmerge==1.8.0
jsonschema==4.17.3
kiwisolver==1.4.4
kornia==0.6.7
lark==1.1.2
lazy_loader==0.2
lightning-utilities==0.8.0
linkify-it-py==2.0.2
lion-pytorch==0.1.2
llvmlite==0.40.1
lmdb==1.4.1
lpips==0.1.4
Markdown==3.4.3
markdown-it-py==2.2.0
MarkupSafe==2.1.3
matplotlib==3.7.1
mdit-py-plugins==0.3.3
mdurl==0.1.2
mpmath==1.3.0
multidict==6.0.4
networkx==3.1
numba==0.57.1
numpy==1.23.5
oauthlib==3.2.2
omegaconf==2.2.3
open-clip-torch @ https://github.com/mlfoundations/open_clip/archive/bb6e834e9c70d9c27d0dc3ecedeebeaeb1ffad6b.zip
opencv-python==4.7.0.72
orjson==3.9.1
packaging==23.1
pandas==2.0.2
piexif==1.1.3
Pillow==9.5.0
platformdirs==3.8.0
protobuf==3.20.0
psutil==5.9.5
pyasn1==0.5.0
pyasn1-modules==0.3.0
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
PyYAML==6.0
realesrgan==0.3.0
regex==2023.6.3
requests==2.31.0
requests-oauthlib==1.3.1
resize-right==0.0.2
rsa==4.9
safetensors==0.3.1
scikit-image==0.20.0
scipy==1.11.0
semantic-version==2.10.0
sentencepiece==0.1.99
six==1.16.0
smmap==5.0.0
sniffio==1.3.0
soupsieve==2.4.1
starlette==0.26.1
sympy==1.12
tb-nightly==2.14.0a20230625
tensorboard==2.13.0
tensorboard-data-server==0.7.1
tifffile==2023.4.12
timm==0.6.7
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
transformers==4.29.2
typing_extensions==4.6.3
tzdata==2023.3
uc-micro-py==1.0.2
urllib3==1.26.16
uvicorn==0.22.0
wcwidth==0.2.6
websockets==11.0.3
Werkzeug==2.3.6
xformers==0.0.21.dev555
yapf==0.40.1
yarl==1.9.2
zipp==3.15.0
```
