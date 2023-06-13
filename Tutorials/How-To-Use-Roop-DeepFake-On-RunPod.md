

Main tutorial readme : https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/1-Click-DeepFake-Tutorial.md

Main tutorial youtube : https://youtu.be/OI1LEN-SgLM

Start your pod with template : RunPod Stable Diffusion v1.5+v2 - :web-automatic-8.0.3 (or newer ones)

Follow tutorial video of this (will be added top once published) and execute below commands as shown in tutorial 1 by 1

```
git clone https://github.com/s0md3v/roop
```

```
cd roop
```

latest commit working right now 7:57 PM (UTC+3) 10 June. The below commit hash set for 10 june testing
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
