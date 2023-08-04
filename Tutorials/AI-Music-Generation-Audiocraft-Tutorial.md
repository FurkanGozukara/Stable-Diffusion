# AI Music Generation Audiocraft & MusicGen Tutorial with Example (Free Text-to-Music Model)
## Updated 4 August Tutorial Video Link > https://youtu.be/v-YpvPkhdO4

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FAI-Music-Generation-Audiocraft-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan) [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) 


[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles)

## Colab
Google Colab Link Works with GPU for free : https://colab.research.google.com/github/camenduru/MusicGen-colab/blob/main/MusicGen_colab.ipynb

## Example Resources and More Help
**Auto install and run scripts : https://www.patreon.com/posts/ai-music-auto-84334460**

**My all Patreon sharings list : https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md**

Stable Diffusion tutorials : https://github.com/FurkanGozukara/Stable-Diffusion

## Prerequisites

### Step 1 : Python 3.10.11

**Full tutorial for python and git installation with venv**

https://youtu.be/B5U7LJOvH6g

**Download and install Python 3.10.11 and git**

https://www.python.org/downloads/release/python-31011/

https://git-scm.com/downloads

### Step 2 : Download and setup ffmpeg

A tutorial that shows how to install (2:56) : https://youtu.be/OI1LEN-SgLM?t=176

* https://github.com/GyanD/codexffmpeg/releases
* Download ffmpeg
* Extract into any folder you want
* Don't forget to have exe files in the folder
* Set Enviroment Path
* Here my path
* C:\ffmpeg-6.0-full_build hww

## Installation

Main Repo url (broken 4 August 2023 so use my fork) : https://github.com/facebookresearch/audiocraft

My working fork : https://github.com/FurkanGozukara/audiocraft

Enter inside the drive or folder where you want to install

Open cmd type 
```
git clone https://github.com/FurkanGozukara/audiocraft
```

Move into cloned folder

```
cd audiocraft
```

Make a new venv with the below command

```
python -m venv venv
```

Enter incide venv - scripts and activate

```
cd venv
cd scripts
activate
```

Execute below commands all 1 by 1 or you can use our [auto installer](https://www.patreon.com/posts/ai-music-auto-84334460)

```
cd ..
cd ..
```

```
pip install -e .
```

```
pip uninstall torch -y
```

```
pip uninstall torchvision -y
```

```
pip uninstall torchaudio -y
```

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

This will install latest development version xformers. This may not work with older cards. 
```
pip install -U --pre xformers
```

Then we are ready to start the application. Whenever you start the application you need to activate venv. For activating venv open a new cmd window in cloned repo, execute below command and it will work

```
call .\venv\Scripts\activate.bat
cd demos
python musicgen_app.py
```


### New commands
The new commands added to the launch options. You can also modify my Patreon bat file and add these to bat file
```
--listen        Specify which IP address to listen on (0.0.0.0 for all interfaces
--server_port   Specify the port to listen on (7860 is the default)
--share         Create a Gradio public share link
--username      Specify a username to log into the Gradio public link 
--password      Specify a password to log into the Gradio public link
--inbrowser     Automatically open the Gradio link in web browser
```

### Some prompting info from @Duemellon

But, here's a generality:

120bpm - beats per minute. Typical dance songs are 120. Most ballads are 90-100. A real slow song is 70-85. 140+ is the kinda stuff for raves, techno, & dub

320kbps 48khz - these ensure quality of the recordings, reducing hiss & usually expanding the sound range. These numbers are just rather high for an MP3 recording but not near the values of a raw audio recording. Don't apply this to sound that is supposed to be LOFI (like Lofi hip hop) because it undoes their intent : ) 22kbps quality should start sounding like you're listening to a song through a telephone or through a megaphone

4/4, 3/4, 5/4, 2/4, etc -- This would have to get into a bit more about music theory that would be applicable here. Just know the majority of American pop songs (the huge VAST majority) is 4/4. Slow jams & waltz are 3/4 (ballads & such). 5/4 & others are more for non-US audiences that have a Spanish influence. 13/8, 11/8, 10/7, etc. "weird" numbers would be for jazz

Have fun with that stuff!

All together it looks like:

* 4/4 100bpm 320kbps 48khz motown groove
* 3/4 105bpm 320kbps 48khz piano only baroque
* 110bpm 64kbps 16khz lofi hiphop summer smooth

### More info about Top-k, Top-p, Temperature and Classifier Free Guidance from ChatGPT


Top-k: Top-k is a parameter used in text generation models, including music generation models. It determines the number of most likely next tokens to consider at each step of the generation process. The model ranks all possible tokens based on their predicted probabilities, and then selects the top-k tokens from the ranked list. The model then samples from this reduced set of tokens to determine the next token in the generated sequence. A smaller value of k results in a more focused and deterministic output, while a larger value of k allows for more diversity in the generated music.

Top-p (or nucleus sampling): Top-p, also known as nucleus sampling or probabilistic sampling, is another method used for token selection during text generation. Instead of specifying a fixed number like top-k, top-p considers the cumulative probability distribution of the ranked tokens. It selects the smallest possible set of tokens whose cumulative probability exceeds a certain threshold (usually denoted as p). The model then samples from this set to choose the next token. This approach ensures that the generated output maintains a balance between diversity and coherence, as it allows for a varying number of tokens to be considered based on their probabilities.

Temperature: Temperature is a parameter that controls the randomness of the generated output. It is applied during the sampling process, where a higher temperature value results in more random and diverse outputs, while a lower temperature value leads to more deterministic and focused outputs. In the context of music generation, a higher temperature can introduce more variability and creativity into the generated music, but it may also lead to less coherent or structured compositions. On the other hand, a lower temperature can produce more repetitive and predictable music.

Classifier-Free Guidance: Classifier-Free Guidance refers to a technique used in some music generation models where a separate classifier network is trained to provide guidance or control over the generated music. This classifier is trained on labeled data to recognize specific musical characteristics or styles. During the generation process, the output of the generator model is evaluated by the classifier, and the generator is encouraged to produce music that aligns with the desired characteristics or style. This approach allows for more fine-grained control over the generated music, enabling users to specify certain attributes they want the model to capture.

These parameters, such as top-k, top-p, temperature, and classifier-free guidance, provide different ways to influence the output of a music generation model and strike a balance between creativity, diversity, coherence, and control. The specific values for these parameters can be tuned based on the desired outcome and user preferences.


### My venv installed libraries full list. 

**obtained via ```pip freeze```**

My python is 3.10.11

For installing specific version of a library use following format

```pip install treetable==0.2.5```

```
Microsoft Windows [Version 10.0.19045.3208]
(c) Microsoft Corporation. All rights reserved.

F:\music gen\audiocraft\venv\Scripts>activate

(venv) F:\music gen\audiocraft\venv\Scripts>pip freeze
aiofiles==23.1.0
aiohttp==3.8.5
aiosignal==1.3.1
altair==5.0.1
antlr4-python3-runtime==4.9.3
anyio==3.7.1
appdirs==1.4.4
async-timeout==4.0.2
attrs==23.1.0
-e git+https://github.com/FurkanGozukara/audiocraft@fefb6efa6312762a373dc8f869be715a93856ae0#egg=audiocraft
audioread==3.0.0
av==10.0.0
blis==0.7.10
catalogue==2.0.9
certifi==2023.7.22
cffi==1.15.1
charset-normalizer==3.2.0
click==8.1.6
cloudpickle==2.2.1
colorama==0.4.6
colorlog==6.7.0
confection==0.1.1
contourpy==1.1.0
cycler==0.11.0
cymem==2.0.7
Cython==3.0.0
decorator==5.1.1
demucs==4.0.0
diffq==0.2.4
docopt==0.6.2
dora-search==0.1.12
einops==0.6.1
encodec==0.1.1
exceptiongroup==1.1.2
fastapi==0.100.1
ffmpy==0.3.1
filelock==3.12.2
flashy==0.0.2
fonttools==4.42.0
frozenlist==1.4.0
fsspec==2023.6.0
gradio==3.39.0
gradio_client==0.3.0
h11==0.14.0
httpcore==0.17.3
httpx==0.24.1
huggingface-hub==0.16.4
hydra-colorlog==1.2.0
hydra-core==1.3.2
idna==3.4
Jinja2==3.1.2
joblib==1.3.1
jsonschema==4.18.6
jsonschema-specifications==2023.7.1
julius==0.2.7
kiwisolver==1.4.4
lameenc==1.5.1
langcodes==3.3.0
lazy_loader==0.3
librosa==0.10.0.post2
lightning-utilities==0.9.0
linkify-it-py==2.0.2
llvmlite==0.40.1
markdown-it-py==2.2.0
MarkupSafe==2.1.3
matplotlib==3.7.2
mdit-py-plugins==0.3.3
mdurl==0.1.2
mpmath==1.3.0
msgpack==1.0.5
multidict==6.0.4
murmurhash==1.0.9
mypy-extensions==1.0.0
networkx==3.1
num2words==0.5.12
numba==0.57.1
numpy==1.24.4
omegaconf==2.3.0
openunmix==1.2.1
orjson==3.9.2
packaging==23.1
pandas==2.0.3
pathy==0.10.2
Pillow==10.0.0
pooch==1.6.0
preshed==3.0.8
pycparser==2.21
pydantic==1.10.12
pydub==0.25.1
pyparsing==3.0.9
pyre-extensions==0.0.29
python-dateutil==2.8.2
python-multipart==0.0.6
pytz==2023.3
PyYAML==6.0.1
referencing==0.30.1
regex==2023.6.3
requests==2.31.0
retrying==1.3.4
rpds-py==0.9.2
safetensors==0.3.1
scikit-learn==1.3.0
scipy==1.11.1
semantic-version==2.10.0
sentencepiece==0.1.99
six==1.16.0
smart-open==6.3.0
sniffio==1.3.0
soundfile==0.12.1
soxr==0.3.5
spacy==3.5.2
spacy-legacy==3.0.12
spacy-loggers==1.0.4
srsly==2.4.7
starlette==0.27.0
submitit==1.4.5
sympy==1.12
thinc==8.1.10
threadpoolctl==3.2.0
tokenizers==0.13.3
toolz==0.12.0
torch==2.0.1+cu118
torchaudio==2.0.2+cu118
torchmetrics==1.0.2
torchvision==0.15.2+cu118
tqdm==4.65.0
transformers==4.31.0
treetable==0.2.5
typer==0.7.0
typing-inspect==0.9.0
typing_extensions==4.7.1
tzdata==2023.3
uc-micro-py==1.0.2
urllib3==2.0.4
uvicorn==0.23.2
wasabi==1.1.2
websockets==11.0.3
xformers==0.0.21.dev578
yarl==1.9.2

(venv) F:\music gen\audiocraft\venv\Scripts>
```
