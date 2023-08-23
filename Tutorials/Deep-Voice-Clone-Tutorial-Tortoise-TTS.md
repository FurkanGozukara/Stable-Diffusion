# Tutorial link : https://youtu.be/OiMRlqcgDL0

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FDeep-Voice-Clone-Tutorial-Tortoise-TTS.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

None of the things in this tutorial won't affect your other installations such as Stable Diffusion

Join our discord channel and ask any questions : https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

## prerequisites

To follow this video you need to have Python 3.10.x and Git to be installed on your computer and have basic knowladge about how to use

Git link : https://git-scm.com/download/win

Python 3.10.9 : https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe 

I have excellent tutorial for Python and Git installation here : https://youtu.be/B5U7LJOvH6g 

Also install Miniconda and if you already have it upgade it

```conda update -n base -c defaults conda```

### Part 1 - Preparing training speech files
We will begin with pre-processing the speech training file

First accept the license terms on https://huggingface.co/pyannote/segmentation 

So you must have a free hugging face account to accept terms. Register hugging face : https://huggingface.co/join

To do that we will git clone and install ozen toolkit (my fork for fixed requirements) : https://github.com/FurkanGozukara/ozen-toolkit

```git clone https://github.com/FurkanGozukara/ozen-toolkit```

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

### Transcribe into other language via ozen toolkit
* Open utils.py file inside modules and change line 188 into below
* ```prediction = pipe(audio_file, generate_kwargs = {"language":"<|de|>","task":"transcribe"})["text"]```
* Don't forget to change de into your desired language 

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

```pip install transformers==4.28.1```

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

```
git clone https://github.com/152334H/tortoise-tts-fast
cd tortoise-tts-fast
python -m venv venv
cd venv
cd scripts
activate
cd..
cd..
pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
```

Then while venv is activated move into your main installation folder e.g.
F:\voice clone tutorial\tortoise-tts-fast

```
python -m pip install -e .
pip3 install git+https://github.com/152334H/BigVGAN.git
pip install transformers==4.29.2
```


### This is the folder where you need to run base command
* (venv) your_install_path\tortoise-tts-fast\scripts>
* e.g. (venv) F:\voice clone tutorial\tortoise-tts-fast\scripts>

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

## For DLAS
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

## For TTS-FAST

```
(venv) F:\voice clone\tortoise-tts-fast\venv>pip freeze
accelerate==0.18.0
ae-ffmpeg==1.1.1
aiofiles==22.1.0
aiohttp==3.8.4
aiosignal==1.3.1
aiosqlite==0.18.0
altair==4.2.2
antlr4-python3-runtime==4.9.3
anyio==3.6.2
appdirs==1.4.4
argon2-cffi==21.3.0
argon2-cffi-bindings==21.2.0
arrow==1.2.3
asttokens==2.2.1
async-generator==1.10
async-timeout==4.0.2
attrs==22.2.0
-e git+https://github.com/facebookresearch/audiocraft@0c75a46321e6e4b15b1e6c751d9c69ff9cbdda69#egg=audiocraft
audioread==3.0.0
audiotsm==0.1.2
auraloss==0.4.0
auto-editor==23.15.1
av==10.0.0
Babel==2.12.1
backcall==0.2.0
beautifulsoup4==4.11.2
BigVGAN==0.0.1
bleach==6.0.0
blinker==1.5
blis==0.7.9
blobfile==2.0.1
boltons==23.0.0
cachetools==5.3.0
catalogue==2.0.8
certifi==2022.12.7
cffi==1.15.1
charset-normalizer==3.0.1
clean-fid==0.1.35
click==8.1.3
clip==1.0
clip-anytorch==2.5.2
cloudpickle==2.2.1
colorama==0.4.6
coloredlogs==15.0.1
colorlog==6.7.0
comm==0.1.2
confection==0.0.4
contourpy==1.0.7
cycler==0.11.0
cymem==2.0.7
Cython==0.29.35
debugpy==1.6.6
decorator==4.4.2
defusedxml==0.7.1
demucs==4.0.0
diffq==0.2.4
docker-pycreds==0.4.0
docopt==0.6.2
docstring-parser==0.15
dora-search==0.1.12
einops==0.6.0
entrypoints==0.4
exceptiongroup==1.1.1
executing==1.2.0
face-alignment==1.3.5
fastapi==0.95.0
fastjsonschema==2.16.3
ffmpeg-python==0.2.0
ffmpy==0.3.0
filelock==3.9.0
flashy==0.0.2
flatbuffers==23.3.3
fonttools==4.38.0
fqdn==1.5.1
frozenlist==1.3.3
fsspec==2023.3.0
ftfy==6.1.1
future==0.18.3
gdown==4.7.1
gitdb==4.0.10
GitPython==3.1.30
google-api-core==2.11.0
google-api-python-client==2.83.0
google-auth==2.17.1
google-auth-httplib2==0.1.0
google-auth-oauthlib==1.0.0
googleapis-common-protos==1.59.0
gradio==3.25.0
gradio_client==0.1.0
h11==0.14.0
httpcore==0.17.0
httplib2==0.22.0
httpx==0.24.0
huggingface-hub==0.14.1
humanfriendly==10.0
hydra-colorlog==1.2.0
hydra-core==1.3.2
idna==3.4
image-grid==0.0.4
imageio==2.26.0
imageio-ffmpeg==0.4.8
importlib-metadata==6.0.0
inflect==6.0.4
ipykernel==6.21.3
ipython==8.11.0
ipython-genutils==0.2.0
ipywidgets==8.0.6
isoduration==20.11.0
jedi==0.18.2
Jinja2==3.1.2
joblib==1.2.0
json5==0.9.11
jsonmerge==1.9.0
jsonpointer==2.3
jsonschema==4.17.3
julius==0.2.7
jupyter==1.0.0
jupyter-console==6.6.3
jupyter-events==0.6.3
jupyter-ydoc==0.2.3
jupyter_client==8.0.3
jupyter_core==5.2.0
jupyter_server==2.4.0
jupyter_server_fileid==0.8.0
jupyter_server_terminals==0.4.4
jupyter_server_ydoc==0.6.1
jupyterlab==3.6.1
jupyterlab-pygments==0.2.2
jupyterlab-widgets==3.0.7
jupyterlab_server==2.20.0
k-diffusion==0.0.14
kandinsky2==0.0.0
kiwisolver==1.4.4
kornia==0.6.12
lameenc==1.4.2
langcodes==3.3.0
lazy_loader==0.1
librosa==0.8.1
lightning-utilities==0.8.0
linkify-it-py==1.0.3
llvmlite==0.39.1
lxml==4.9.2
Mako==1.2.4
markdown-it-py==2.1.0
MarkupSafe==2.1.2
matplotlib==3.7.0
matplotlib-inline==0.1.6
mdit-py-plugins==0.3.3
mdurl==0.1.2
mistune==2.0.5
more-itertools==9.0.0
moviepy==2.0.0.dev2
mpmath==1.2.1
multidict==6.0.4
murmurhash==1.0.9
mypy-extensions==1.0.0
natsort==8.3.1
nbclassic==0.5.3
nbclient==0.7.2
nbconvert==7.2.9
nbformat==5.7.3
nest-asyncio==1.5.6
networkx==3.0
notebook==6.5.3
notebook_shim==0.2.2
num2words==0.5.12
numba==0.56.4
numpy==1.23.5
oauthlib==3.2.2
omegaconf==2.3.0
onnxruntime==1.14.1
openai-whisper @ git+https://github.com/openai/whisper.git@248b6cb124225dd263bb9bd32d060b6517e067f8
opencv-contrib-python==4.7.0.72
opencv-python==4.7.0.68
openunmix==1.2.1
orjson==3.8.10
outcome==1.2.0
packaging==23.0
pandas==1.5.3
pandocfilters==1.5.0
parso==0.8.3
pathlib==1.0.1
pathtools==0.1.2
pathy==0.10.1
pesq==0.0.4
pickleshare==0.7.5
Pillow==9.5.0
platformdirs==3.1.1
pooch==1.6.0
preshed==3.0.8
proglog==0.1.10
progressbar==2.5
prometheus-client==0.16.0
prompt-toolkit==3.0.38
protobuf==3.20.3
psutil==5.9.4
punctuators==0.0.3
pure-eval==0.2.2
py3nvml==0.2.7
pyarrow==11.0.0
pyasn1==0.4.8
pyasn1-modules==0.2.8
pycparser==2.21
pycryptodomex==3.17
pycuda==2022.2.2
pydantic==1.10.7
pydeck==0.8.0
pydub==0.25.1
Pygments==2.14.0
Pympler==1.0.1
pynvml==11.5.0
pyparsing==3.0.9
pyre-extensions==0.0.29
pyreadline3==3.4.1
pyrsistent==0.19.3
PySocks==1.7.1
PySoundFile==0.9.0.post1
python-dateutil==2.8.2
python-json-logger==2.0.7
python-multipart==0.0.6
pytools==2022.1.14
pytorch-lightning==2.0.1
pytube==12.1.2
pytz==2022.7.1
pytz-deprecation-shim==0.1.0.post0
PyWavelets==1.4.1
pywin32==305
pywinpty==2.0.10
PyYAML==6.0
pyzmq==25.0.0
qtconsole==5.4.2
QtPy==2.3.1
regex==2022.10.31
requests==2.28.2
requests-oauthlib==1.3.1
resampy==0.4.2
resize-right==0.0.2
retrying==1.3.4
rfc3339-validator==0.1.4
rfc3986-validator==0.1.1
rich==13.3.1
rotary-embedding-torch==0.2.3
rsa==4.9
scikit-image==0.20.0
scikit-learn==1.2.1
scipy==1.10.1
selenium==4.9.1
semantic-version==2.10.0
semver==2.13.0
Send2Trash==1.8.0
sentencepiece==0.1.97
sentry-sdk==1.23.1
setproctitle==1.3.2
simple-parsing==0.0.21.post1
six==1.16.0
smart-open==6.3.0
smmap==5.0.0
sniffio==1.3.0
sortedcontainers==2.4.0
soundfile==0.12.1
soupsieve==2.4
spacy==3.5.2
spacy-legacy==3.0.12
spacy-loggers==1.0.4
srsly==2.4.6
stack-data==0.6.2
starlette==0.26.1
streamlit==1.18.1
submitit==1.4.5
sympy==1.11.1
terminado==0.17.1
thinc==8.1.10
threadpoolctl==3.1.0
tifffile==2023.2.28
tiktoken==0.3.1
tinycss2==1.2.1
tokenizers==0.13.3
toml==0.10.2
tomli==2.0.1
toolz==0.12.0
torch==2.0.1+cu118
torchaudio==2.0.2+cu118
torchdiffeq==0.2.3
torchlibrosa==0.0.7
torchmetrics==0.11.4
torchsde==0.2.5
torchvision==0.15.2+cu118
tornado==6.2
-e git+https://github.com/152334H/tortoise-tts-fast@f4820a8eabdd559eb369a07d60cbe03960ddd54d#egg=tortoise
tqdm==4.64.1
traitlets==5.9.0
trampoline==0.1.2
transformers==4.29.2
treetable==0.2.5
trio==0.22.0
trio-websocket==0.10.2
typer==0.7.0
typing-inspect==0.8.0
typing_extensions==4.4.0
tzdata==2022.7
tzlocal==4.2
uc-micro-py==1.0.1
Unidecode==1.3.6
uri-template==1.2.0
uritemplate==4.1.1
urllib3==1.26.14
uvicorn==0.21.1
validators==0.20.0
voicefixer==0.1.2
wandb==0.15.3
wasabi==1.1.1
watchdog==2.2.1
wcwidth==0.2.6
webcolors==1.12
webencodings==0.5.1
websocket-client==1.5.1
websockets==11.0.1
wget==3.2
widgetsnbextension==4.0.7
wsproto==1.2.0
xformers==0.0.20
xmltodict==0.13.0
y-py==0.5.9
yarl==1.8.2
youtube-dl==2021.12.17
youtube-transcript-api==0.5.0
ypy-websocket==0.8.2
zipp==3.13.0
```

## For OZEN toolkit
```
(ozen) PS C:\Users\King> pip freeze
absl-py==1.4.0
aiohttp==3.8.4
aiosignal==1.3.1
alembic==1.10.4
antlr4-python3-runtime==4.9.3
asteroid-filterbanks==0.4.0
async-timeout==4.0.2
attrs==23.1.0
audioread==3.0.0
audiotsm==0.1.2
backports.cached-property==1.0.2
Brotli==1.0.9
brotlipy @ file:///D:/bld/brotlipy_1666764804378/work
cachetools==5.3.0
certifi==2023.5.7
cffi @ file:///D:/bld/cffi_1671179506518/work
charset-normalizer @ file:///home/conda/feedstock_root/build_artifacts/charset-normalizer_1678108872112/work
click @ file:///D:/bld/click_1666798499870/work
cloudpickle @ file:///home/conda/feedstock_root/build_artifacts/cloudpickle_1674202310934/work
cmaes==0.9.1
colorama @ file:///home/conda/feedstock_root/build_artifacts/colorama_1666700638685/work
colorlog==6.7.0
contourpy==1.0.7
cryptography @ file:///D:/bld/cryptography-split_1681508778756/work
cycler==0.11.0
cytoolz @ file:///D:/bld/cytoolz_1666829685081/work
dask @ file:///home/conda/feedstock_root/build_artifacts/dask-core_1682704095490/work
decorator==5.1.1
docopt==0.6.2
einops==0.3.2
filelock @ file:///home/conda/feedstock_root/build_artifacts/filelock_1681839547898/work
fonttools==4.39.3
frozenlist==1.3.3
fsspec @ file:///home/conda/feedstock_root/build_artifacts/fsspec_1683494881189/work
google-auth==2.17.3
google-auth-oauthlib==1.0.0
greenlet==2.0.2
grpcio==1.54.0
hmmlearn==0.2.8
huggingface==0.0.1
huggingface-hub==0.14.1
HyperPyYAML==1.2.0
idna @ file:///home/conda/feedstock_root/build_artifacts/idna_1663625384323/work
imagecodecs @ file:///D:/bld/imagecodecs_1674483284983/work
imageio @ file:///home/conda/feedstock_root/build_artifacts/imageio_1683031833737/work
importlib-metadata @ file:///home/conda/feedstock_root/build_artifacts/importlib-metadata_1682176699712/work
Jinja2 @ file:///home/conda/feedstock_root/build_artifacts/jinja2_1654302431367/work
joblib==1.2.0
julius==0.2.7
kiwisolver==1.4.4
lazy_loader @ file:///home/conda/feedstock_root/build_artifacts/lazy_loader_1679784563552/work
librosa==0.9.2
llvmlite==0.40.0
locket @ file:///home/conda/feedstock_root/build_artifacts/locket_1650660393415/work
Mako==1.2.4
Markdown==3.4.3
markdown-it-py==2.2.0
MarkupSafe @ file:///D:/bld/markupsafe_1674136027121/work
matplotlib==3.7.1
mdurl==0.1.2
mpmath @ file:///home/conda/feedstock_root/build_artifacts/mpmath_1678228039184/work
multidict==6.0.4
mutagen==1.46.0
networkx==2.8.8
numba==0.57.0
numpy @ file:///D:/bld/numpy_1682210442656/work
oauthlib==3.2.2
omegaconf==2.3.0
optuna==3.1.1
packaging @ file:///home/conda/feedstock_root/build_artifacts/packaging_1681337016113/work
pandas==2.0.1
partd @ file:///home/conda/feedstock_root/build_artifacts/partd_1681246756246/work
Pillow @ file:///D:/bld/pillow_1675487397478/work
platformdirs @ file:///home/conda/feedstock_root/build_artifacts/platformdirs_1682644429438/work
pooch @ file:///home/conda/feedstock_root/build_artifacts/pooch_1679580333621/work
primePy==1.3
protobuf==3.20.1
pyannote.audio==2.1.1
pyannote.core==4.5
pyannote.database==4.1.3
pyannote.metrics==3.2.1
pyannote.pipeline==2.3
pyasn1==0.5.0
pyasn1-modules==0.3.0
pycparser @ file:///home/conda/feedstock_root/build_artifacts/pycparser_1636257122734/work
pycryptodomex==3.17
pyDeprecate==0.3.2
pydub==0.25.1
pyfiglet==0.8.post1
Pygments==2.15.1
pyOpenSSL @ file:///home/conda/feedstock_root/build_artifacts/pyopenssl_1680037383858/work
pyparsing==3.0.9
PySocks @ file:///D:/bld/pysocks_1661604991356/work
python-dateutil==2.8.2
pytorch-lightning==1.6.5
pytorch-metric-learning==1.7.3
pytube==12.1.2
pytz==2023.3
PyWavelets @ file:///D:/bld/pywavelets_1673082559203/work
PyYAML @ file:///D:/bld/pyyaml_1666772550103/work
regex==2023.5.5
requests @ file:///home/conda/feedstock_root/build_artifacts/requests_1682535435083/work
requests-oauthlib==1.3.1
resampy==0.4.2
rich==13.3.5
rsa==4.9
ruamel.yaml==0.17.24
ruamel.yaml.clib==0.2.7
scikit-image @ file:///D:/bld/scikit-image_1681313283062/work
scikit-learn==1.2.2
scipy==1.10.1
semver==2.13.0
sentencepiece==0.1.99
shellingham==1.5.0.post1
simplejson==3.19.1
singledispatchmethod==1.0
six==1.16.0
sortedcontainers==2.4.0
SoundFile==0.10.3.post1
speechbrain==0.5.14
SQLAlchemy==2.0.12
sympy @ file:///home/conda/feedstock_root/build_artifacts/sympy_1679342554516/work
tabulate==0.9.0
tensorboard==2.13.0
tensorboard-data-server==0.7.0
termcolor==2.3.0
threadpoolctl==3.1.0
tifffile @ file:///home/conda/feedstock_root/build_artifacts/tifffile_1681364231336/work
tokenizers==0.13.3
toolz @ file:///home/conda/feedstock_root/build_artifacts/toolz_1657485559105/work
torch==1.13.1+cu117
torch-audiomentations==0.11.0
torch-pitch-shift==1.2.4
torchaudio==0.13.1
torchmetrics==0.11.4
torchvision==0.14.1+cu117
tqdm==4.65.0
transformers==4.28.1
typer==0.9.0
typing_extensions @ file:///home/conda/feedstock_root/build_artifacts/typing_extensions_1678559861143/work
tzdata==2023.3
urllib3 @ file:///home/conda/feedstock_root/build_artifacts/urllib3_1678635778344/work
websockets==11.0.3
Werkzeug==2.3.3
win-inet-pton @ file:///D:/bld/win_inet_pton_1667051142467/work
yarl==1.9.2
yt-dlp==2023.3.4
zipp @ file:///home/conda/feedstock_root/build_artifacts/zipp_1677313463193/work
```
