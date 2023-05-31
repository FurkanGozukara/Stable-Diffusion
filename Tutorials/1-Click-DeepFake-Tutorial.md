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

Here screenshot of isntall click to see full size [![image](https://i.imgur.com/7hM2Vsz.png)](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/9236dc1a-fa58-4deb-9ae8-03717c2c70e6)

**Download and install Python 3.10.9 and git**

https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe

https://git-scm.com/downloads

### GPU NOT WORKING ATM FOR NVIDIA WILL BE UPDATED LATER

### Download and setup ffmpeg

* https://github.com/GyanD/codexffmpeg/releases
* Download ffmpeg
* Extract into any folder you want
* Set Enviroment Path
* Here my path
* C:\ffmpeg-6.0-full_build hww

### Tne Installation

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

Currently setting cores count 1 uses all cores but much lesser ram. When you watching this video first try --cores 1. Then once it is successfull you can try more cores. This reduces RAM usage significantly. 

```python run.py --keep-frames --keep-fps --max-cores 1```

```WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ReadTimeoutError("HTTPSConnectionPool(host='pypi.org', port=443): Read timed out. (read timeout=15)")': /simple/tensorrt/```

## If you get error do these then start venv
First we checkout to specific working commit

```git checkout e4f1d9aaff43549667f7c81c6f48a86606fb9b95```

Then activate venv

Then start app as below

```python run.py --keep-frames --keep-fps --cores 1```


## Full tutorial for how to install and use Stable Diffusion Automatic1111 Web UI: 

1 - https://youtu.be/AZg6vzWHOTA

2 - https://youtu.be/aAyvsX-EpG4

## Davinci Resolve Tutorial

https://youtu.be/_-yYRGKyz8E

## If Latest Version Is Broken

Used commit hash id : e4f1d9aaff43549667f7c81c6f48a86606fb9b95

If latest commit won't work for you, you can do. This is not suggested unless you have to

```git checkout e4f1d9aaff43549667f7c81c6f48a86606fb9b95```
```python run.py --keep-frames --keep-fps --cores 1```
