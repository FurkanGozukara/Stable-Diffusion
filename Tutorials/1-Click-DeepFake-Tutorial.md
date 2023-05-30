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

### Download and install install CUDA toolkit

Recommended versions: ```ONNX Runtime 1.9.0 CUDA EP``` - ```CUDA 11.4.3+cuDNN 8.2.4.15```

**Requires free account register and login**

**https://developer.nvidia.com/rdp/cudnn-archive**

**Download cuDNN v8.9.0 (April 11th, 2023), for CUDA 11.x**

**Download Installer according to your OS**

https://developer.nvidia.com/cuda-11-4-3-download-archive

Make a Folder named NVIDIA
Inside there CUDNN
Inside there a folder with version of CUDNN download. In my case it was 
Extract bin, lib, include folders from downloaded CUDNN into there
Everything is shown in the Tutorial video

Type search bar env
Open edit system enviroment variables
Add new
in my cases added values

C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\libnvvp
C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.4\bin
C:\NVIDIA\CUDNN\8.9.0.131\bin

All shown in video


### Necessary Links and Files

https://github.com/s0md3v/roop

```git clone https://github.com/s0md3v/roop```

```
python -m venv venv

cd venv

cd Scripts

activate

cd..
cd..

pip install -r requirements.txt

pip uninstall onnxruntime onnxruntime-gpu
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu114
pip install onnxruntime-gpu
```



```pip uninstall onnxruntime```

```pip uninstall onnxruntime-gpu```

```pip install onnxruntime-gpu```


```python run.py```

```python run.py --gpu```


```python run.py --keep-frames --keep-fps ```

```pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117```

```pip install nvidia-pyindex```

```pip install --upgrade nvidia-tensorrt```


```WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ReadTimeoutError("HTTPSConnectionPool(host='pypi.org', port=443): Read timed out. (read timeout=15)")': /simple/tensorrt/```
