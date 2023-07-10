# Tutorial For How To Install and Use SDXL On RunPod With A Decent Gradio Interface

## Tutorial video for this readme file : coming

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-SDXL-On-RunPod-Tutorial-Guide.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

## Register or Login Runpod : https://bit.ly/RunPodIO

* How to use runpodctl tutorial : [Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI](https://youtu.be/QN1vdGhjcRc)

## Auto Installer For RunPod

* Select RunPod Fast Stable Diffusion template
* Select at least 24 GB VRAM having pod
* Click customize development and make volume disk size min 200 GB
* Upload sdxl.sh to the workspace folder (download from here : https://www.patreon.com/posts/auto-sdxl-runpod-85845581)
* Execute below command and wait until you see this message : ```auto install of SDXL completed```
* It will take like 30 min depending on your Pod Speed (e.g. 1785 megabits per second pod)
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
* Click customize development and make volume disk size min 200 GB

* Register Hugging Face and login if you don't have an account already
* https://huggingface.co/join
* https://huggingface.co/login
* Open below links and accept terms and conditions - now auto approve official weights - just type anything to the form fill sections
* https://huggingface.co/stabilityai/stable-diffusion-xl-base-0.9
* https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9
* Generate your Hugging Face access token and save it somewhere
* https://huggingface.co/settings/tokens

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

```
cd /workspace
```

```
mv /root/.cache /workspace/.cache
ln -s /workspace/.cache /root/.cache
```

```
cd /workspace
```

```
git lfs clone https://YOUR_HUGGING_FACE_USERNAME:HUGGIN_FACE_TOKEN@huggingface.co/stabilityai/stable-diffusion-xl-base-0.9
```

```
find /workspace/stable-diffusion-xl-base-0.9 -type f -name "*.safetensors" -exec rm {} \;
```

```
mv /root/.cache /workspace/.cache
ln -s /workspace/.cache /root/.cache
```

```
cd /workspace
```

```
git lfs clone https://YOUR_HUGGING_FACE_USERNAME:HUGGIN_FACE_TOKEN@huggingface.co/stabilityai/stable-diffusion-xl-refiner-0.9
```

```
find /workspace/stable-diffusion-xl-refiner-0.9 -type f -name "*.safetensors" -exec rm {} \;
```

```
mv /root/.cache /workspace/.cache
ln -s /workspace/.cache /root/.cache
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
