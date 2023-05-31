# Easiest Tutorial For Generating Deep Fake Videos - Educational & Research Purposes Only
# Tutorial Video Link > https://youtu.be/OI1LEN-SgLM

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2F1-Click-DeepFake-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

## Colab
Google Colab Link Works with GPU for free : [![Patreon](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/FurkanGozukara/Stable-Diffusion/blob/main/ColabNotebooks/1_click_deep_fake_for_free_by_SECourses.ipynb)

## Example Resources and More Help
Resources shared on Patreon : https://www.patreon.com/posts/1-click-deepfake-83785289

Stable Diffusion tutorials : https://github.com/FurkanGozukara/Stable-Diffusion

## Prerequisites

**Full tutorial for python and git installation with venv**

https://youtu.be/B5U7LJOvH6g

**Download and install Microsoft C++ Build Tools**

https://visualstudio.microsoft.com/visual-cpp-build-tools/

Here screenshot of install of C++ > click to see : https://i.imgur.com/7hM2Vsz.png

**Download and install Python 3.10.9 and git**

https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe

https://git-scm.com/downloads

### Download and setup ffmpeg

* https://github.com/GyanD/codexffmpeg/releases
* Download ffmpeg
* Extract into any folder you want
* Don't forget to have exe files in the folder
* Set Enviroment Path
* Here my path
* C:\ffmpeg-6.0-full_build hww

### GPU and CuDNN Installation - Working Flawlessly On Windows VENV

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


### The Installation

https://github.com/s0md3v/roop

```

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

download and move into root folder : https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/inswapper_128.onnx

**For starting applications make sure that you have activated the venv**

```python run.py```

```python run.py --keep-frames --keep-fps ```

```python run.py --keep-frames --keep-fps --max-cores 1```

**To Start With GPU add --gpu**

```python run.py --gpu```

```python run.py --keep-frames --keep-fps --gpu```

```WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ReadTimeoutError("HTTPSConnectionPool(host='pypi.org', port=443): Read timed out. (read timeout=15)")': /simple/tensorrt/```

## Full tutorial for how to install and use Stable Diffusion Automatic1111 Web UI: 

1 - https://youtu.be/AZg6vzWHOTA

2 - https://youtu.be/aAyvsX-EpG4

## Davinci Resolve Tutorial

https://youtu.be/_-yYRGKyz8E

## If you get error and can't fix it (repo keep getting new updates) do these then reinstall

First clone

Then checkout to specific working commit as below

```git checkout e4f1d9aaff43549667f7c81c6f48a86606fb9b95```

Then do a fresh install and start as above


