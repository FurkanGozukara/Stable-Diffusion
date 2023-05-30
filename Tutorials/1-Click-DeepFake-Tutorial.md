## Prerequisites

### Full tutorial for python and git installation with venv
**https://youtu.be/B5U7LJOvH6g**

### Download and install Visual Studio 2015, 2017, 2019, and 2022 redistributable 
**https://aka.ms/vs/17/release/vc_redist.x64.exe**

### Download and install Microsoft C++ Build Tools
**https://visualstudio.microsoft.com/visual-cpp-build-tools/**

### Download and install Python 3.10.9 and git
**https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe**

**https://git-scm.com/downloads**

### GPU NOT WORKING ATM FOR NVIDIA WILL BE UPDATED LATER

### Download and setup ffmpeg

* https://github.com/GyanD/codexffmpeg/releases
* Download ffmpeg
* Extract into any folder you want
* Set Enviroment Path
* Here my path
* C:\ffmpeg-6.0-full_build hww

### Necessary Links and Files

https://github.com/s0md3v/roop

```

git clone https://github.com/s0md3v/roop

cd roop

python -m venv venv

cd venv

cd Scripts

activate

cd..
cd..

pip install -r requirements.txt

```

download and move into root folder : https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/inswapper_128.onnx

```python run.py```

```python run.py --keep-frames --keep-fps ```

Currently not very ram optimized. Therefore with a short clicp start with core 1. If works try 2, then 3, then 4 etc. Also if clip is too long you may also be need to reduce number of core counts. 

```python run.py --keep-frames --keep-fps --cores 1```

```WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ReadTimeoutError("HTTPSConnectionPool(host='pypi.org', port=443): Read timed out. (read timeout=15)")': /simple/tensorrt/```


### Full tutorial for how to install and use Stable Diffusion Automatic1111 Web UI: 
**1 - https://youtu.be/AZg6vzWHOTA**

**2 - https://youtu.be/aAyvsX-EpG4**
