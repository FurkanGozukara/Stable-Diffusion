# Tutorial For How To Install Kohya LoRA- Web UI On RunPod

## Tutorial video link will be added when video published

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Install-Kohya-LoRA-Web-UI-On-RunPod.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

## Original Kohya Tutorial

[**Generate Studio Quality Realistic Photos By Kohya LoRA Stable Diffusion Training - Full Tutorial**](https://youtu.be/TpuDOsuKIBo)

[![image](https://user-images.githubusercontent.com/19240467/235155355-83ff14e5-a3c8-4ae8-83a5-6d2573189a22.png)](https://youtu.be/TpuDOsuKIBo)

## How To Use RunPod Tutorial

[**Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI**](https://www.youtube.com/watch?v=QN1vdGhjcRc) 

[![image](https://user-images.githubusercontent.com/19240467/219958249-82ecb925-901b-4f87-b776-f592b0f5eaad.png)](https://www.youtube.com/watch?v=QN1vdGhjcRc)

### Hand-Picked Realistic Vision V2 - 2071 classification / regularization images

https://www.patreon.com/posts/realistic-vision-82085317

Realistic vision full model : https://huggingface.co/SG161222/Realistic_Vision_V2.0/resolve/main/Realistic_Vision_V2.0.safetensors

```wget https://huggingface.co/SG161222/Realistic_Vision_V2.0/resolve/main/Realistic_Vision_V2.0.safetensors```

Best vae : https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt

```wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt``` 


## Kohya LoRA GUI On RunPod

Kohya SS Gui Repo : https://github.com/bmaltais/kohya_ss

```
git clone https://github.com/bmaltais/kohya_ss.git

cd kohya_ss

python3 -m venv venv

source venv/bin/activate

./setup.sh -n
```

```
source venv/bin/activate

apt update

apt-get install python3.10-tk

pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

 ```
 bash gui.sh --share
 ```
