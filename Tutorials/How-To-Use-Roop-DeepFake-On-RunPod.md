[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Use-Roop-DeepFake-On-RunPod.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Use-Roop-DeepFake-On-RunPod.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# How to install and use Roop DeepFake on RunPod step by step Tutorial

## Tutorial video : https://youtu.be/jD1ZSd9aFHg

**1 Click RunPod installer (updated 3 July 2023) script and example video and images :** 
* https://www.patreon.com/posts/auto-installer-84511510

Main tutorial readme : 
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/1-Click-DeepFake-Tutorial.md

Main tutorial youtube : 
* https://youtu.be/OI1LEN-SgLM

RunPod Register :
* Register your RunPod account: https://bit.ly/RunPodIO
* RunPod main tutorial : https://youtu.be/QN1vdGhjcRc

Select template

* RunPod Fast Stable Diffusion (runpod/stable-diffusion:fast-stable-diffusion)
or
* RunPod Stable Diffusion (runpod/stable-diffusion:web-automatic)

Make runtime container disk size at least 15 GB

Follow tutorial video of this (https://youtu.be/jD1ZSd9aFHg) and execute below commands as shown in tutorial 1 by 1

```
git clone https://github.com/FurkanGozukara/roop
```

```
cd roop
```

```
python -m venv venv
```

```
source ./venv/bin/activate
```

```
pip install onnxruntime-gpu && pip install -r requirements.txt
```

```
apt update
```

```
yes | apt-get install -y python3.10-tk
```

```
yes | apt-get install ffmpeg
```

```
yes | apt-get install p7zip-full
```

```
apt install libcudnn8=8.7.0.84-1+cuda11.8 libcudnn8-dev=8.7.0.84-1+cuda11.8
```

## Info
* Roop does not support all video formats and types
* Especially NSFW not supported
* Upload your video and image file into the main Roop folder as shown in video
* Demo video and image files are shared on Patreon post : https://www.patreon.com/posts/1-click-deepfake-83785289
* For fast upload and download use runpodctl as shown in this tutorial (you can look chapters) : https://youtu.be/QN1vdGhjcRc
* Example upload video : runpodctl send video3.mp4

## How to use after installation

Open a new cmd window on jupyter notebook inside main roop folder

Execute below commands

```
cd /workspace/roop
```

```
source ./venv/bin/activate
```

Once you have uploaded files modify below file paths and execute command

Then modify your file names in the given below command and hit enter on the opened cmd window

### To Start With GPU

--execution-provider tensorrt, cuda, cpu

```
python run.py -s "face2.png" -t "video3.mp4" -o "face_changed_video.mp4" --keep-frames --keep-fps --temp-frame-quality 1 --output-video-quality 1 --execution-provider cuda
```
* The below code will also apply face enhancement. Will take longer
```
python run.py -s "face2.png" -t "video3.mp4" -o "face_restored_video.mp4" --keep-frames --keep-fps --temp-frame-quality 1 --output-video-quality 1 --execution-provider cuda --frame-processor face_swapper face_enhancer
```

## After you have turned off the pod or restarted the pod execute below commands 1 time. Do this after each restart or turned off pod and started again
Execute below commands 1 by 1 

* ```yes | apt-get install -y python3.10-tk```
* ```yes | apt-get install ffmpeg```
* ```yes | apt-get install p7zip-full```
* ```yes | apt install -y libcudnn8=8.7.0.84-1+cuda11.8 libcudnn8-dev=8.7.0.84-1+cuda11.8 --allow-change-held-packages```

# Upscaler Wiki
https://upscale.wiki/wiki/Model_Database
