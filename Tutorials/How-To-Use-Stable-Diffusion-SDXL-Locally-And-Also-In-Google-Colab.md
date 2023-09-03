[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-Stable-Diffusion-SDXL-Locally-And-Also-In-Google-Colab.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# [Tutorial] How To Use Stable Diffusion SDXL Locally And Also In Google Colab

## On Google Colab

[Click to open Colab link](https://colab.research.google.com/github/FurkanGozukara/Stable-Diffusion/blob/main/ColabNotebooks/Stable_Diffusion_SDXL_on_Google_Colab.ipynb)

[Click to see](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/hw2qvicrNubXWyiMNzxBm.png) where Colab generated images will be saved

Now you can set any count of images and Colab will generate as many as you set

## On Windows - WIP

### Prerequisites

**Full tutorial for python and git installation with venv**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.9 > https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe
* git > https://git-scm.com/downloads

### Automatic Installation

* This installation won't affect or your break your other installations such as Automatic1111 Web UI
* Auto Installer Script : https://www.patreon.com/posts/85678961
* Instructions of auto installer shared in the post

### Manual Installation

* This installation won't affect or your break your other installations such as Automatic1111 Web UI

```
git clone https://github.com/FurkanGozukara/stable-diffusion-xl-demo
```

* Register Hugging Face and login if you don't have an account already
* https://huggingface.co/join
* https://huggingface.co/login

* Open below links and accept terms and conditions - now auto approve official weights - just type anything to the form fill sections
* https://huggingface.co/stabilityai/stable-diffusion-xl-base-0.9
* https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9

* Generate your Hugging Face access token and save it somewhere
* https://huggingface.co/settings/tokens

* Enter inside cloned stable-diffusion-xl-demo folder
* Follow the below commands 1 by 1. Watch video to see how I am making
```
python -m venv venv
```

```
cd venv
```

```
cd scripts
```

```
activate
```

```
cd..
cd..
```

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

```
pip install -U --pre xformers
```

```
pip install -r requirements2.txt
```

### After Installation Run As Below

* First edit app2.py and add your access_token. E.g. like below
* access_token = "hf_ovfazhEBOXmTpUsfdfdshfdydZIfMNJVKrcZ"

* The access token is only 1 time
* After that you have to save below commands depending on your VRAM as .bat file and use them to start
* Watch tutorial video again if you can't make it. All steps are shown
  

Low VRAM (12 GB and Below)
```
@echo off

set VENV_PATH=stable-diffusion-xl-demo\venv\Scripts\activate.bat

call "%VENV_PATH%"

set PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:128
set ENABLE_REFINER=false

python stable-diffusion-xl-demo\app2.py

pause
```

High VRAM (24 GB and above)
```
@echo off

set VENV_PATH=stable-diffusion-xl-demo\venv\Scripts\activate.bat

call "%VENV_PATH%"

set PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256
set ENABLE_REFINER=true

python stable-diffusion-xl-demo\app2.py

pause
```
