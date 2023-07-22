# Easiest Tutorial For Generating Deep Fake Videos - Educational & Research Purposes Only

## Tested and verified to be working 22 July 2023. If you can't make it work become a Patreon supporter, message me on Patreon, and I will install on your computer.

## Tutorial Video Link > https://youtu.be/OI1LEN-SgLM

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2F1-Click-DeepFake-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

## Colab
Google Colab Link Works with GPU for free : [![Patreon](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/FurkanGozukara/Stable-Diffusion/blob/main/ColabNotebooks/1_click_deep_fake_for_free_by_SECourses.ipynb)

## Example Resources and More Help
Resources shared on Patreon : https://www.patreon.com/posts/1-click-deepfake-83785289

Stable Diffusion tutorials : https://github.com/FurkanGozukara/Stable-Diffusion

## Prerequisites

### Step 1 : Python

**Full tutorial for python and git installation with venv**

https://youtu.be/B5U7LJOvH6g

**Download and install Python 3.10.9 and git**

https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe

https://git-scm.com/downloads

### Step 2 : Microsoft C++ Tools

**Download and install Microsoft C++ Build Tools**

https://visualstudio.microsoft.com/visual-cpp-build-tools/

Here screenshot of install of C++ > click to see : https://i.imgur.com/7hM2Vsz.png

Here installed packages in my system below

https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/7313faa8-facc-4fbc-a5f2-8fb96555df2b

### Step 3 : Download and setup ffmpeg

* https://github.com/GyanD/codexffmpeg/releases
* Download ffmpeg
* Extract into any folder you want
* Don't forget to have exe files in the folder
* Set Enviroment Path
* Here my path
* C:\ffmpeg-6.0-full_build hww

### Step 4 : GPU and CuDNN Installation - Working Flawlessly On Windows VENV

Download cuDNN v8.7.0 (November 28th, 2022) (https://developer.nvidia.com/rdp/cudnn-archive) , for CUDA 11.x. Requires free account register and login. Or use directly the link I given below

You also need zlibwapi dll : https://stackoverflow.com/questions/72356588/could-not-locate-zlibwapi-dll-please-make-sure-it-is-in-your-library-path

**Here direct link for CuDNN dll files including zlibwapi.dll : https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/cudnn%208.7.0.84.zip**

* Make a Folder named NVIDIA in your C drive
* Inside there CUDNN
* Inside there a folder with version of CUDNN C:\NVIDIA\CUDNN\8.7.0.84
* Extract bin, lib, include folders from downloaded CUDNN into there
* Add them to your enviroment path 
* Here screenshots

![image](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/8194a8e0-c8b9-4c10-8830-565217d3c69f)

![image](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/08f95f16-aeb5-4959-9c6c-1f9332217bee)

### Step 5 : Download and install CUDA Toolkit 11.4 Update 3. If you have other cuda installations, make this one's path is the first one in enviroment variables

This fixes ```Could not load dynamic library 'cudart64_110.dll'; dlerror: cudart64_110.dll not found```

Download link for windows 10 (select according to your OS). Requires register (free) and login : https://developer.nvidia.com/cuda-11-4-3-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local

The exe file name i used : cuda_11.4.3_472.50_win10.exe

Here how my path is set 

![image](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/3a635a3b-f606-4ff6-8f5f-e38f8fc8954a)

### Step 6 : The Installation

***Currently 7:21 PM UTC+3, 22 July, latest version working - 312208a41102ba86d2454ae8efc9d3f0b786a6e7***

https://github.com/s0md3v/roop

```

python -m pip install --upgrade pip

git clone https://github.com/s0md3v/roop

cd roop

python -m venv venv

cd venv

cd Scripts

activate

cd..
cd..

pip install -r requirements.txt

```

### Step 7 : Activate venv once again

Ignore errors if you get such as below

```
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
tensorflow-intel 2.12.0 requires numpy<1.24,>=1.22, but you have numpy 1.24.1 which is incompatible.
```

### Step 8 : inswapper_128 model file

Download and move into root folder : https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/inswapper_128.onnx

### How to use

**Quick start .bat file**

Save below file as .bat file also modify the path according to yours

```
@echo off
cd /d C:\AI\ROOP\roop\venv\Scripts
call activate
cd /d C:\AI\ROOP\roop
python run.py --keep-frames --keep-fps --execution-provider cuda
```

**For starting applications make sure that you have activated the venv and moved back into roop folder**

```
python run.py
```

```
python run.py --keep-frames --keep-fps 
```

```
python run.py --keep-frames --keep-fps --video-quality 7
```

**To Start With GPU**

--execution-provider tensorrt, cuda, cpu

```
python run.py --keep-frames --keep-fps --video-quality 7 --execution-provider cuda
```

```
python run.py --keep-frames --keep-fps --video-quality 7 --execution-provider cuda --frame-processor face_swapper face_enhancer 
```

If you get connection error like below re run pip install requirements 

```WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ReadTimeoutError("HTTPSConnectionPool(host='pypi.org', port=443): Read timed out. (read timeout=15)")': /simple/tensorrt/```

## Available start parameters
```
options:
  -h, --help                                               show this help message and exit
  -s SOURCE_PATH, --source SOURCE_PATH                     select an source image
  -t TARGET_PATH, --target TARGET_PATH                     select an target image or video
  -o OUTPUT_PATH, --output OUTPUT_PATH                     select output file or directory
  --frame-processor FRAME_PROCESSOR [FRAME_PROCESSOR ...]  frame processors (choices: face_swapper, face_enhancer, ...)
  --keep-fps                                               keep original fps
  --keep-audio                                             keep original audio
  --keep-frames                                            keep temporary frames
  --many-faces                                             process every face
  --video-encoder {libx264,libx265,libvpx-vp9}             adjust output video encoder
  --video-quality [0-51]                                   adjust output video quality
  --max-memory MAX_MEMORY                                  maximum amount of RAM in GB
  --execution-provider {cpu} [{cpu} ...]                   available execution provider (choices: cpu, ...)
  --execution-threads EXECUTION_THREADS                    number of execution threads
  -v, --version                                            show program's version number and exit
```
## Full tutorial for how to install and use Stable Diffusion Automatic1111 Web UI: 

1 - https://youtu.be/AZg6vzWHOTA

2 - https://youtu.be/aAyvsX-EpG4

## Davinci Resolve Tutorial

https://youtu.be/_-yYRGKyz8E

## To Install On AMD or MAC or Linux PCs

https://github.com/s0md3v/roop/wiki/2.-GPU-Acceleration


## If you get error and can't fix it (repo keep getting new updates) do these then reinstall

How to do git checkout shown in this video (second 39) : https://youtu.be/KwxNcGhHuLY?t=39

First clone

Then checkout to specific working commit as below

```git checkout 312208a41102ba86d2454ae8efc9d3f0b786a6e7```


## Pip Freeze Results
```
Microsoft Windows [Version 10.0.19045.3208]
(c) Microsoft Corporation. All rights reserved.

F:\temp roop verify\roop\venv\Scripts>activate

(venv) F:\temp roop verify\roop\venv\Scripts>pip freeze
absl-py==1.4.0
addict==2.4.0
albumentations==1.3.1
astunparse==1.6.3
basicsr==1.4.2
beautifulsoup4==4.12.2
cachetools==5.3.1
certifi==2023.7.22
charset-normalizer==3.2.0
colorama==0.4.6
coloredlogs==15.0.1
contourpy==1.1.0
customtkinter==5.2.0
cycler==0.11.0
Cython==3.0.0
darkdetect==0.8.0
easydict==1.10
facexlib==0.3.0
filelock==3.12.2
filterpy==1.4.5
flatbuffers==23.5.26
fonttools==4.41.1
future==0.18.3
gast==0.4.0
gdown==4.7.1
gfpgan==1.3.8
google-auth==2.22.0
google-auth-oauthlib==1.0.0
google-pasta==0.2.0
grpcio==1.56.2
h5py==3.9.0
humanfriendly==10.0
idna==3.4
imageio==2.31.1
importlib-metadata==6.8.0
insightface==0.7.3
Jinja2==3.1.2
joblib==1.3.1
keras==2.13.1
kiwisolver==1.4.4
lazy_loader==0.3
libclang==16.0.6
llvmlite==0.40.1
lmdb==1.4.1
Markdown==3.4.3
MarkupSafe==2.1.3
matplotlib==3.7.2
mpmath==1.3.0
networkx==3.1
numba==0.57.1
numpy==1.23.5
oauthlib==3.2.2
onnx==1.14.0
onnxruntime-gpu==1.15.1
opencv-python==4.8.0.74
opencv-python-headless==4.8.0.74
opennsfw2==0.10.2
opt-einsum==3.3.0
packaging==23.1
Pillow==10.0.0
platformdirs==3.9.1
prettytable==3.8.0
protobuf==4.23.4
psutil==5.9.5
pyasn1==0.5.0
pyasn1-modules==0.3.0
pyparsing==3.0.9
pyreadline3==3.4.1
PySocks==1.7.1
python-dateutil==2.8.2
PyWavelets==1.4.1
PyYAML==6.0.1
qudida==0.0.4
requests==2.31.0
requests-oauthlib==1.3.1
rsa==4.9
scikit-image==0.21.0
scikit-learn==1.3.0
scipy==1.11.1
six==1.16.0
soupsieve==2.4.1
sympy==1.12
tb-nightly==2.14.0a20230722
tensorboard==2.13.0
tensorboard-data-server==0.7.1
tensorflow==2.13.0
tensorflow-estimator==2.13.0
tensorflow-intel==2.13.0
tensorflow-io-gcs-filesystem==0.31.0
termcolor==2.3.0
threadpoolctl==3.2.0
tifffile==2023.7.18
tk==0.1.0
tkinterdnd2==0.3.0
tomli==2.0.1
torch==2.0.1+cu118
torchvision==0.15.2+cu118
tqdm==4.65.0
typing_extensions==4.5.0
urllib3==1.26.16
wcwidth==0.2.6
Werkzeug==2.3.6
wrapt==1.15.0
yapf==0.40.1
zipp==3.16.2

(venv) F:\temp roop verify\roop\venv\Scripts>
```
