[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Use-Roop-DeepFake-On-RunPod.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

# How to install and use Roop DeepFake on RunPod step by step Tutorial

**1 Click RunPod installer script and example video and images :** 
* https://www.patreon.com/posts/auto-installer-84511510

Main tutorial readme : 
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/1-Click-DeepFake-Tutorial.md

Main tutorial youtube : 
* https://youtu.be/OI1LEN-SgLM

RunPod Register :
* Register your RunPod account: https://bit.ly/RunPodIO
* RunPod main tutorial : https://youtu.be/QN1vdGhjcRc

Start your pod with template : RunPod Stable Diffusion v1.5+v2 - :web-automatic-8.0.3 (or newer ones)

Follow tutorial video of this (will be added top once published) and execute below commands as shown in tutorial 1 by 1

```
git clone https://github.com/s0md3v/roop
```

```
cd roop
```

latest commit working right now 6:57 PM (UTC+3) 13 June. The below commit hash set for 13 june testing
```
git checkout 1f8409eebfb5c9009e48b32dcd8bd88a7fb4d2b8
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
wget https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/inswapper_128.onnx
```

```
apt update
```

```
apt-get install python3.10-tk
```

```
pip uninstall torch torchvision torchaudio
```

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
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

Execute below command

```
source ./venv/bin/activate
```

Once you have uploaded files modify below file paths and execute command

```
python run.py -f "face2.png" -t "video3.mp4" -o "face_changed_video.mp4" --keep-frames --keep-fps --gpu-vendor nvidia
```

# Upscaler Wiki
https://upscale.wiki/wiki/Model_Database
