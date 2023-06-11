# Tutorial link : https://youtu.be/OiMRlqcgDL0

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FDeep-Voice-Clone-Tutorial-Tortoise-TTS.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)


None of the things in this tutorial won't affect your other installations such as Stable Diffusion

Join our discord channel and ask any questions : https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

## prerequisites

To follow this video you need to have Python 3.10.x and Git to be installed on your computer and have basic knowladge about how to use

Git link : https://git-scm.com/download/win

Python 3.10.9 : https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe 

I have excellent tutorial for Python and Git installation here : https://youtu.be/B5U7LJOvH6g 

### Part 1 - Preparing training speech files
We will begin with pre-processing the speech training file

First accept the license terms on https://huggingface.co/pyannote/segmentation 

So you must have a free hugging face account to accept terms. Register hugging face : https://huggingface.co/join

To do that we will git clone and install ozen toolkit : https://github.com/devilismyfriend/ozen-toolkit

commit id : f5ea2ce4f95bfa54635ec9deac56cb546aa7d516

```git clone https://github.com/devilismyfriend/ozen-toolkit```

To be able to use this, you need to have installed Anaconda or Miniconda with Python 3.10

Anaconda download and install link : https://www.anaconda.com/download

Miniconda download and install link : https://docs.conda.io/en/latest/miniconda.html

If you fail to install Anaconda here my tutorial where I installed and shown : https://www.youtube.com/watch?v=YJebdQ30UZQ

Then double click and run "Set Up Ozen.bat" file inside directory 

Lets say something went wrong and you want to reinstall or, you had installed this repo before and you want to reinstall, then Anaconda will give you this message

```CondaValueError: prefix already exists: C:\Users\King\miniconda3\envs\ozen```

So open folder ```C:\Users\King\miniconda3\envs``` and delete the ```ozen``` directory 

Then after installation drag and drop the training speech file into Drag_Here.cmd

It will ask you hugging face token get it here : https://huggingface.co/settings/tokens

Merge multiple audio files into a single file : ```ffmpeg -i "concat:input1.mp3|input2.mp3|input3.mp3" -acodec copy output.mp3```


There are several key issues. It uses by default large model. If your GPU is not 12 GB you can either use CPU to transcribe or you can use medium or small model

Whisper tutorial : https://www.youtube.com/watch?v=msj3wuYf3d8

```
tiny	39 M	tiny.en	tiny	~1 GB	~32x
base	74 M	base.en	base	~1 GB	~16x
small	244 M	small.en	small	~2 GB	~6x
medium	769 M	medium.en	medium	~5 GB	~2x
large	1550 M	N/A	large	~10 GB	1x
```

Moreover, its transcribed txt file has encoding problem. So copy a all change encoding and paste again and save as I have shown in the tutorial video. I had to spend quite a bit time to find out this.

If you ever needed to install a missing package manually, to activate anaconda or miniconda venvs you need to open a anaconda cmd and type the generated venv name like

```conda activate ozen```

```pip uninstall torch```

https://pytorch.org/

```pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117```

Notepad++ to change transcription file encoding : https://notepad-plus-plus.org/downloads/ 

### Part 2 - Doing training and training settings

We will use DL-Art-School for training. It has a very nice GUI and makes training piece of cake

commit id : 5ab4d9ed415e0a5c0b7ce9aae02aa2e76fe0eccd

https://github.com/152334H/DL-Art-School

This also requires Anaconda or Miniconda with Python 3.10

Since we already installed it in the previous step you don't have to install again

If you want to reinstall this then you need to delete the venv generated in miniconda venvs

```C:\Users\King\miniconda3\envs```

Do git clone

```git clone https://github.com/152334H/DL-Art-School```

Double click Setup DLAS.bat 

It will make a venv in anaconda or miniconda and install everything. 

However you may encounter an error like i did related to torch. So we will reinstall torch manually

If you ever needed to install a missing package manually, to activate anaconda or miniconda venvs you need to open a anaconda cmd and type the generated venv name like

```conda activate DLAS```

```pip uninstall torch```

```pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117```

After installation double click "Start DLAS.cmd" file and it will open the GUI interface

Follow the steps I have shown in the video to start training.

I have explaine

* What does each step work
* Batch size effect on 1 epoch
* How total number of epochs calculated based on your batch size and number of training elements and total number of your set steps
* How to analyze and see loss value over time with a custom script and many more

I have even shown how you can continue training by using your last checkpoint.

### Part 3, generating cloned voice via tortoise-tts-fast

commit id : f4820a8eabdd559eb369a07d60cbe03960ddd54d

 https://github.com/152334H/tortoise-tts-fast

```git clone  https://github.com/152334H/tortoise-tts-fast```

```python -m venv venv```

activate venv

```
git clone https://github.com/152334H/tortoise-tts-fast
cd tortoise-tts-fast
pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
```

Then while venv is activated move into your main installation folder e.g.
F:\voice clone tutorial\tortoise-tts-fast

```
python -m pip install -e .
pip3 install git+https://github.com/152334H/BigVGAN.git
```

This is the folder where you need to run base command
(venv) your_install_path\tortoise-tts-fast\scripts>
e.g. (venv) F:\voice clone tutorial\tortoise-tts-fast\scripts>


```python tortoise_tts.py --preset fast --ar_checkpoint "F:\voice clone tutorial\DL-Art-School\experiments\voiceclone\models\40_gpt.pth" "Welcome to the software engineering courses channel."```

For the script I shared and shown to work first open **inference.py** under **\tortoise-tts-fast\tortoise folder**

copy paste this code and change function split_text

```
def split_text(text: str, text_split: str):
    if text_split:
        texts = text.split(";")
    else:
        texts = split_and_recombine_text(text)
    #
    if not texts:
        raise ValueError("no text provided")
    return texts
```

**decent quality (low VRAM) command below with additional output directory and iterations. Dont forget to change --ar_checkpoint path and output_dir path

```python tortoise_tts.py --seed 1 --candidates 3 --voicefixer True --no_cache False --low_vram True --text_split "gg" --diffusion_iterations 100 --output_dir "F:\voice clone tutorial\multi_sentences" --preset fast --ar_checkpoint "F:\DL-Art-School\experiments\test2\models\1480_gpt.pth" "Welcome to the software engineering courses channel.;This channel is the best source for learning technology and artificial intelligence.;Please subscribe."```

**best quality (high VRAM) command below with additional output directory and iterations. Dont forget to change --ar_checkpoint path and output_dir path

```python tortoise_tts.py --seed 1 --candidates 3 --voicefixer True --no_cache False --low_vram False --text_split "gg" --diffusion_iterations 1000 --output_dir "F:\voice clone tutorial\multi_sentences" --preset high_quality --ar_checkpoint "F:\DL-Art-School\experiments\test2\models\1480_gpt.pth" "Welcome to the software engineering courses channel.;This channel is the best source for learning technology and artificial intelligence.;Please subscribe."```

* ```--seed``` May improve consistency. Remove to get more randomness or try different seeds to get a better generation. Ask chatGPT to learn more about seeds in generative AI  
* ```--candidates``` Allows you to generate multiple variations of same speech in 1 run. Can be very useful to get better options
* ```--voicefixer``` I prefer voicefixer False and using adobe podcast enchance : https://podcast.adobe.com/enhance 
* ```--low_vram```Enable low_vram to reduce VRAM usage if you get out of memory exception
* ```--no_cache``` Enable no_cache to reduce VRAM usage if you get out of memory exception 
* ```--half```  Enable half to reduce VRAM usage if you get out of memory exception - this reduces quality
* ```--diffusion_iterations``` 250 and above said to generate good quality. This just increases processing time
* ```--output_dir``` Set your desired output folder where you want images to be saved
* ```--preset``` Significantly affects the quality. Choose according to your GPU among : ultra_fast - fast - standard - high_quality
* ```--ar_checkpoint``` Give the path of your trained voice model checkpoint file path
* The last input given inside "" is the text you want to be transcribed. If you apply the split_text function modification as show above, seperate each sentences with a semicolon ; 

adobe enchance speech
https://podcast.adobe.com/enhance

automatic processing script files shown in the video
https://www.patreon.com/posts/voice-clone-82712205

## the parameters you need to modify are as below

### in loss_graph.py 

install this pip package in your main python installation. start a cmd window and type below code

```pip install matplotlib```

Then modify the path variable in script. Change path in below part of script to your training log file

```
with open(r"F:\voice clone tutorial\DL-Art-School\experiments\bigtom\train_bigtom_230509-021906.log", 'r') as file:
    text = file.read()
```

Then start a cmd whereever this file is located and execute below code to display loss graphs. This script is safe to use during training to see values.

```python loss_graph.py ```

### in process_given_speech_text.bat

```call "F:\voice clone tutorial\tortoise-tts-fast\venv\Scripts\activate.bat"``` change with your venv installed path

```cd "F:\voice clone tutorial\tortoise-tts-fast\scripts"``` change with your tortoise-tts-fast installed path

```--voicefixer``` I suggest you to set this False and use adobe voice enhancer : https://podcast.adobe.com/enhance 

```set outputdir=``` : where you want your output speech files to be saved a folder path

```set voicesdir=``` : give your training voices directory path - optional i am not sure if makes difference atm

```set training_checkpoint_file=``` : where your trained checkpoint file located

```--diffusion_iterations``` - best suggested value is 250 and above but you can use either 50 20 1000 up to you. test each one depending on your GPU and speed you are expecting

```--seed``` if you don't provide a seed i think everytime it will be random thus you may get different output as expected in generative AI models

```--preset``` this really makes huge difference. it is flow worst to best like this. as you use better one it will be much more slower and will use more vram ultra_fast - fast - standard - high_quality

```--low_vram``` - you can make it true like this if you have low vram ```--low_vram True```

```--no_cache``` - you can make it true like this if you have low vram ```--no_cache True``` - use only if low_vram fails

```--half``` - you can make it true like this if you have low vram ```--half True``` - use only when all others fails

### in epoch_comparison.bat

```set CHECKPOINTS_DIR=``` : directory of your checkpoints

```set OUTPUT_BASE_DIR=``` : directory of where checkpoint results will be saved parent directory

other settings are as above

### in pre_process_given_text_file.py

```split_length``` : set your split length. by default maximum suggested is 200. if you go over it, it will start to hallucinate. too small sentences are also somewhat problematic. therefore, the script will automatically merge sentences when the merged sentence length is smaller than split_length

### in move_check_point_sound_files.py

This file will iterate your check point comparison generated sound files and put them into a new folder with the parent name so that it will be easier to test each checkpoint sound file easier

It will copy the files don't move

Just change the paths of the below lines

```
root_folder = r'F:\voice clone tutorial\check_point_comparison_v3'
target_folder = r'F:\voice clone tutorial\check_point_comparison_v3_all_files'
```

To run the file open cmd in that folder and execute as below

```python pre_process_given_text_file.py ```

# If you encounter any problem here the full pip freeze library versions

To get your version list: Open miniconda

```
conda activate dlas
```

```
pip freeze
```

Lets say your transformer version is higher and not working

While conda venv activated type

```
pip install transformers==4.28.1
```

```
(dlas) PS C:\Users\King> pip freeze
absl-py==1.4.0
antlr4-python3-runtime==4.9.3
appdirs==1.4.4
audio2numpy==0.1.2
audioread==3.0.0
audiotsm==0.1.2
axial-positional-embedding==0.2.1
bcrypt==4.0.1
bitsandbytes==0.35.0
brotlipy @ file:///D:/bld/brotlipy_1666764804378/work
cachetools==5.3.0
certifi==2023.5.7
cffi @ file:///D:/bld/cffi_1671179506518/work
charset-normalizer @ file:///home/conda/feedstock_root/build_artifacts/charset-normalizer_1678108872112/work
click==8.1.3
cmake==3.26.3
colorama==0.4.6
contourpy==1.0.7
cryptography @ file:///D:/bld/cryptography-split_1681508778756/work
customtkinter==5.1.3
cycler==0.11.0
Cython==0.29.34
darkdetect==0.8.0
decorator==5.1.1
einops==0.6.1
ffmpeg==1.4
filelock @ file:///home/conda/feedstock_root/build_artifacts/filelock_1681839547898/work
fonttools==4.39.3
fsspec==2023.5.0
ftfy==6.1.1
future==0.18.3
g-mlp-pytorch==0.1.5
google-auth==2.17.3
google-auth-oauthlib==1.0.0
grpcio==1.54.0
gsa-pytorch==0.2.2
huggingface-hub==0.14.1
idna @ file:///home/conda/feedstock_root/build_artifacts/idna_1663625384323/work
inflect==6.0.4
Jinja2 @ file:///home/conda/feedstock_root/build_artifacts/jinja2_1654302431367/work
jiwer==3.0.1
joblib==1.2.0
kiwisolver==1.4.4
kornia==0.6.12
lambda-networks==0.4.0
lazy_loader==0.2
librosa==0.10.0.post2
linear-attention-transformer==0.19.1
linformer==0.2.1
lion-pytorch==0.0.7
llvmlite==0.40.0
local-attention==1.8.6
Markdown==3.4.3
MarkupSafe @ file:///D:/bld/markupsafe_1674136027121/work
matplotlib==3.7.1
mpmath @ file:///home/conda/feedstock_root/build_artifacts/mpmath_1678228039184/work
msgpack==1.0.5
munch==2.5.0
mup==1.0.0
networkx @ file:///home/conda/feedstock_root/build_artifacts/networkx_1680692919326/work
numba==0.57.0
numpy @ file:///D:/bld/numpy_1682210442656/work
oauthlib==3.2.2
omegaconf==2.3.0
opencv-python==4.7.0.72
orjson==3.8.12
packaging==23.1
pandas==2.0.1
paramiko==3.1.0
Pillow @ file:///D:/bld/pillow_1675487397478/work
pooch==1.6.0
product-key-memory==0.1.10
protobuf==4.22.4
pyasn1==0.5.0
pyasn1-modules==0.3.0
pycparser @ file:///home/conda/feedstock_root/build_artifacts/pycparser_1636257122734/work
pydantic==1.10.7
PyNaCl==1.5.0
pyOpenSSL @ file:///home/conda/feedstock_root/build_artifacts/pyopenssl_1680037383858/work
pyparsing==3.0.9
PySocks @ file:///D:/bld/pysocks_1661604991356/work
python-dateutil==2.8.2
pytorch-fid==0.3.0
pytorch-ssim==0.1
pytube==12.1.2
pytz==2023.3
pyworld==0.3.3
PyYAML==6.0
rapidfuzz==2.13.7
regex==2023.5.5
requests @ file:///home/conda/feedstock_root/build_artifacts/requests_1682535435083/work
requests-oauthlib==1.3.1
rotary-embedding-torch==0.2.3
rsa==4.9
ruamel.yaml==0.17.24
ruamel.yaml.clib==0.2.7
scikit-learn==1.2.2
scipy==1.10.1
scp==0.14.5
seaborn==0.12.2
six==1.16.0
soundfile==0.12.1
soxr==0.3.5
sympy @ file:///home/conda/feedstock_root/build_artifacts/sympy_1679342554516/work
tensorboard==2.13.0
tensorboard-data-server==0.7.0
tgt==1.4.4
threadpoolctl==3.1.0
tokenizers==0.13.3
torch==1.13.1+cu117
torchaudio==0.13.1+cu117
torchvision==0.14.1+cu117
tqdm==4.65.0
transformers==4.28.1
triton @ https://huggingface.co/r4ziel/xformers_pre_built/resolve/main/triton-2.0.0-cp310-cp310-win_amd64.whl#sha256=91a6ec395022743269c942df7af01b210f642fb633d146a811be05a455adbae2
typing_extensions @ file:///home/conda/feedstock_root/build_artifacts/typing_extensions_1678559861143/work
tzdata==2023.3
Unidecode==1.3.6
urllib3 @ file:///home/conda/feedstock_root/build_artifacts/urllib3_1678635778344/work
vector-quantize-pytorch==1.4.1
wcwidth==0.2.6
Werkzeug==2.3.3
win-inet-pton @ file:///D:/bld/win_inet_pton_1667051142467/work
x-clip==0.12.1
x-transformers==1.0.4
```
