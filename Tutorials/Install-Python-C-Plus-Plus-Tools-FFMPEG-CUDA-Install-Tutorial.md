
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FInstall-Python-C-Plus-Plus-Tools-FFMPEG-CUDA-Install-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# How To Install Python, C++ Compile Tools For Python, FFMPEG, CUDA and Do Git Operations Full Tutorial
## How To Install Pillars Of AI Application Libraries

* If you are using AI applications such as Stable Diffusion, SDXL, Automatic1111 SD Web UI, Oobabooga Text Generation (LLM) Web UI, Roop Deep Fake, DensePose Facebook, InsightFace, ONNX Runtime and many others, especially GENERATIVE AI models, you need to install the below listed tools. 
* In this tutorial video I will show you how to install all of them 1 by 1 on a freshly installed Windows PC

## Tutorial Link
* Link will be added once the Tutorial published

## Resources

### Python 3.10.x
* I suggest you to use Python 3.10.11 as of date 10 December 2023
* Python 3.10.11 is the most widely supported Python version right now by AI tools
* Python 3.10.11 download link > https://www.python.org/downloads/release/python-31011/
* You definitely has to use Python 3.10.x currently
* Install Python with selecting all options
* Make sure that it is added to the System Enviroment Variables Path
* Install and make sure that Path is set as shown in tutorial video
* Pip Cache management : https://pip.pypa.io/en/stable/topics/caching/

### Microsoft Visual Studio C++ Compile Tools
* This solves the following error that you get
```
error: Microsoft Visual C++ 14.0 or greater is required.
Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/
note: This error originates from a subprocess, and is likely not a problem with pip.
```
* This is super important and hard to install tools
* Some AI libraries requires you to manually compile projects since they don't have pre-compiled wheels
* Such as InsightFace library used by Deep Fake AI project Roop
* So proper installation of this tool and adding it to the System Enviroment Variables Path is super important 
* Download Build Tools for Visual Studio 2022 from here : https://visualstudio.microsoft.com/downloads/
* Install C++ tools as shown in tutorial video
* This installs Microsoft Visual C++ Redistributable as well

### FFMPEG
* FFMPEG is the most widely used video editing and encoding open source library
* Almost all of the video including projects utilized FFMPEG
* On Windows you have to manually download it and set its folder path in your System Enviroment Variables Path
* Download latest build of FFMPEG from here : https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip
* Extract content into a folder and add its folder path into your System Enviroment Variables Path as shown in tutorial video

### CUDA Libraries
* CUDA 11.8 is the most widely used and supported CUDA library as of date 10 December 2023
* You need to register a free developer NVIDIA account to download CUDA from below link
* https://developer.nvidia.com/cuda-11-8-0-download-archive
* Alternatively you can directly download from below exe file
* https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/cuda_11.8.0_522.06_windows.exe?download=true
* If you have different CUDA toolkits installed they will be likely to conflict
* After installation of CUDA make sure that it is added to the System Enviroment Variables Path as shown in tutorial video

### GIT
* You need to download and install Git to be able to clone repositories
* Download and install from below link
* https://git-scm.com/downloads
* If you ever need Git large download from below
* https://git-lfs.com/

## How To Do git checkout , git pull, git stash, git stash pop
* If you want to be able to use different branches of projects such as dev branch of Automatic1111 SD Web UI, you need to be able to do git checkout
* If you have modified files you have to do git stash and then git pop if there be conflicting files
* Follow the tutorial video to be able to do all of these operations
* git stash and git stash pop resolves the below error when you do git pull
```
error: Your local changes to the following files would be overwritten by merge:
Please commit your changes or stash them before you merge.
```

## How To Generate VENV, Activate VENV, Uninstall and Install A Specific Library 
* Sometimes you will be have to generate your own VENV
* Sometimes you will be have to activate installed VENV and install a specific library
* So watch tutorial video to learn all about this
* I am showing how to install any specific Torch version with GPU support
* Never MOVE or RENAME a VENV. It will break it. Do a fresh install 

## How To Have Multiple Python Versions And Generate VENV For Specific Version Like 3.10.11 vs 3.11.0
* This is super important topic in some cases to have multiple Python versions
* I am also showing how to change default Python version
* I am also showing how to setup a VENV with each Python version

## How To Install Any App And Set Its Enviroment Path Variable
* I am showing how to download and install runpodctl and set its path to use from any folder as example

