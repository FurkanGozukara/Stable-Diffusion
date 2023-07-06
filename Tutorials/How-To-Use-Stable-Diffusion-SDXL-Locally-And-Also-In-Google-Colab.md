# [Tutorial] How To Use Stable Diffusion SDXL Locally And Also In Google Colab

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-Stable-Diffusion-SDXL-Locally-And-Also-In-Google-Colab.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses)

## On Google Colab

[Click to open Colab link](https://colab.research.google.com/github/FurkanGozukara/Stable-Diffusion/blob/main/ColabNotebooks/Stable_Diffusion_SDXL_on_Google_Colab.ipynb)

## On Windows - WIP

Auto Installer Script : WIP

```
git clone https://github.com/FurkanGozukara/stable-diffusion-xl-demo
```

```
git lfs clone https://huggingface.co/nichijoufan777/stable-diffusion-xl-base-0.9
```

```
git lfs clone https://huggingface.co/nichijoufan777/stable-diffusion-xl-refiner-0.9
```

Low VRAM
```
!PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:128 ACCESS_TOKEN={access_token} ENABLE_REFINER=false python app.py
```

High VRAM
```
!PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 ACCESS_TOKEN={access_token} ENABLE_REFINER=true python app.py
```
