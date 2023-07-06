# [Tutorial] How To Use Stable Diffusion SDXL Locally And Also In Google Colab

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-Stable-Diffusion-SDXL-Locally-And-Also-In-Google-Colab.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses)

## On Google Colab

[Click to open Colab link](https://colab.research.google.com/github/FurkanGozukara/Stable-Diffusion/blob/main/ColabNotebooks/Stable_Diffusion_SDXL_on_Google_Colab.ipynb)

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

* Open below links and accept terms and conditions
* https://huggingface.co/nichijoufan777/stable-diffusion-xl-base-0.9
* https://huggingface.co/nichijoufan777/stable-diffusion-xl-refiner-0.9

* Generate your Hugging Face token
* https://huggingface.co/settings/tokens

* Enter inside cloned stable-diffusion-xl-demo folder
* Make a new venv. 
* ```
python -m venv ven
```

Low VRAM
```
!PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:128 ACCESS_TOKEN={access_token} ENABLE_REFINER=false python app.py
```

High VRAM
```
!PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 ACCESS_TOKEN={access_token} ENABLE_REFINER=true python app.py
```
