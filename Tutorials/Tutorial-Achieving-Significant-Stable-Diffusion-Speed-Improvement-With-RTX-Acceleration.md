[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Tutorial-Achieving-Significant-Stable-Diffusion-Speed-Improvement-With-RTX-Acceleration.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Tutorial-Achieving-Significant-Stable-Diffusion-Speed-Improvement-With-RTX-Acceleration.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# How To Get Huge Speed Up Boost With RTX Acceleration

## Full Tutorial Link : https://youtu.be/kvxX6NrPtEk

## Prerequisites

**Full tutorial for python and git installation**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.11 > https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe
* git > https://git-scm.com/downloads

## Auto Installer

* Installer Script Link : https://www.patreon.com/posts/automatic-for-ui-86307255
* The above installer will 1 click install Automatic1111 Web UI for you
* It will also automatically download following models
* * SDXL 1.0 Base, SDXL 1.0 Refiner, SDXL FP16 VAE (best VAE)
* * Realistic Vision 5.1, SD 1.5 Base Model, SD 1.5 based models best VAE
* It also has an option to download pre-compiled TensorRT files for:
* * Realistic Vision 5.1, SDXL 1.0, SD 1.5 Base and Rev Animated 1.2.2
 
## SDXL DreamBooth Config
* Config File > https://www.patreon.com/posts/very-best-for-of-89213064
* Quick Tutorial > https://www.youtube.com/watch?v=EEV8RPohsbw
* Amazing Prompts > https://www.patreon.com/posts/amazing-prompt-1-90346033

## Resources Links
* Announcement Link
* * https://www.nvidia.com/en-us/geforce/news/game-ready-driver-dlss-3-naraka-vermintide-rtx-vsr/
* Download latest NVIDIA driver
* * https://www.nvidia.com/en-us/geforce/drivers/
* Download older NVIDIA drivers
* * https://www.nvidia.com/download/find.aspx
* Stable-Diffusion-WebUI-TensorRT Extension
* * https://github.com/NVIDIA/Stable-Diffusion-WebUI-TensorRT
* My current driver : 536.23
* Download cuDNN v8.9.4 (August 8th, 2023), for CUDA 11.x
* * https://developer.nvidia.com/rdp/cudnn-archive
* * https://developer.nvidia.com/downloads/compute/cudnn/secure/8.9.4/local_installers/11.x/cudnn-windows-x86_64-8.9.4.25_cuda11-archive.zip/
* Compared driver : 545.84
* Detailed info about optimal resolutions in below link
* * https://github.com/NVIDIA/Stable-Diffusion-WebUI-TensorRT/issues/45


## Upgrade Pip

```python.exe -m pip install --upgrade pip```


