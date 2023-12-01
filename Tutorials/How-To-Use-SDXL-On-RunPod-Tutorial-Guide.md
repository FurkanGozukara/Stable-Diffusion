[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-SDXL-On-RunPod-Tutorial-Guide.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# Tutorial For How To Install and Use SDXL On RunPod With A Decent Gradio Interface
* **2 September 2023 Files Updated For SDXL 1.0**

## Tutorial video for this readme file : https://www.youtube.com/watch?v=gTdPRm-R-14

## Register or Login Runpod : https://bit.ly/RunPodIO

* How to use runpodctl tutorial
* [Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI](https://youtu.be/QN1vdGhjcRc)

* [How To Use Stable Diffusion XL (SDXL 1.0) On Google Colab For Free](https://youtu.be/s2MQqmv6yAg)
* [Stable Diffusion XL (SDXL) Locally On Your PC - 8GB VRAM - Easy Tutorial With Automatic Installer](https://youtu.be/__7VNmnn5iU)

## Auto Installer For RunPod

* Select RunPod Fast Stable Diffusion template
* Select at least 24 GB VRAM having pod
* Customize deployment and make Container Disk size 30 GB
* * This container size is really important. It will be downloaded into container space and download will be much smaller
* Upload sdxl.sh to the workspace folder (download from here : https://www.patreon.com/posts/auto-sdxl-runpod-85845581)
* Execute below command and wait until you see this message : ```auto install of SDXL completed```
* For Auto installer you don't need token I handled it for you
  
```
chmod +x sdxl.sh
./sdxl.sh
```

* After installation all you need is running below command everyone
* If you don't want to use refiner, make ```ENABLE_REFINER=false```
* The installation is permanent. 1 time install and use until you delete your Pod 

```
cd /workspace/stable-diffusion-xl-demo
source venv/bin/activate
PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 SHARE=true ENABLE_REFINER=true python app7.py
```

The generated images will be saved inside below folder
* /workspace/stable-diffusion-xl-demo/stable-diffusion-xl-demo/outputs

## Manually Install On RunPod Step By Step

* Select RunPod Fast Stable Diffusion template
* Select at least 24 GB VRAM having pod
* Customize deployment and make Container Disk size 30 GB
* * This container size is really important. It will be downloaded into container space and download will be much smaller
* No Need Token Anymore - Files Updated To SDXL 1.0

* Start a new terminal and execute below commands 1 by 1

```
apt update
```
```
apt install git-lfs
```
```
cd /workspace
```

```
git clone https://github.com/FurkanGozukara/stable-diffusion-xl-demo
```

```
cd /workspace/stable-diffusion-xl-demo
```

```
python -m venv venv
```

```
source venv/bin/activate
```

```
pip install -r requirements4.txt
```


* After installation all you need is running below command everyone
* If you don't want to use refiner, make ```ENABLE_REFINER=false```
* The installation is permanent. 1 time install and use until you delete your Pod 

```
cd /workspace/stable-diffusion-xl-demo
source venv/bin/activate
PYTORCH_CUDA_ALLOC_CONF=max_split_size_mb:256 SHARE=true ENABLE_REFINER=true python app7.py
```

* This above code will give you public Gradio link. Click it and start using

* The generated images will be saved inside below folder
* * /workspace/stable-diffusion-xl-demo/stable-diffusion-xl-demo/outputs
