[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FHow-To-Install-And-Use-Kohya-GUI-And-Do-Ultra-Realistic-SDXL-Training-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/) 

# [Tutorial] How To Install And Use Kohya GUI And Do Ultra Realistic SDXL Training


Kohya GUI Repo : https://github.com/bmaltais/kohya_ss

* How To Find Best Stable Diffusion Generated Images By Using DeepFace AI - DreamBooth / LoRA Training
* YouTube Tutorial : https://youtu.be/343I11mhnXs
* Script : https://www.patreon.com/posts/sort-ai-images-82478694

* How To Use ComfyUI Tutorial Readme : [click here](https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Use-ComfyUI-On-Your-PC-On-RunPod-On-Colab-With-SDXL.md)
* The video for this tutorial coming : 


## Use Versions And Pip Freeze

* Kohya SS GUI Commit Id : 5c44ba372c6d94f996f98bbcb1d2a60731ba3080
* VENV Pip Freeze

```
D:\97 kohya\kohya_ss\venv\Scripts>activate

(venv) D:\97 kohya\kohya_ss\venv\Scripts>pip freeze
absl-py==1.4.0
accelerate==0.19.0
aiofiles==23.1.0
aiohttp==3.8.4
aiosignal==1.3.1
albumentations==1.3.0
altair==4.2.2
annotated-types==0.5.0
anyio==3.7.1
appdirs==1.4.4
astunparse==1.6.3
async-timeout==4.0.2
attrs==23.1.0
bitsandbytes==0.35.0
cachetools==5.3.1
certifi==2022.12.7
charset-normalizer==2.1.1
click==8.1.4
colorama==0.4.6
contourpy==1.1.0
cycler==0.11.0
dadaptation==3.1
diffusers==0.17.1
docker-pycreds==0.4.0
easygui==0.98.3
einops==0.6.0
entrypoints==0.4
exceptiongroup==1.1.2
fairscale==0.4.13
fastapi==0.100.0
ffmpy==0.3.0
filelock==3.9.0
flatbuffers==23.5.26
fonttools==4.40.0
frozenlist==1.3.3
fsspec==2023.6.0
ftfy==6.1.1
gast==0.4.0
gitdb==4.0.10
GitPython==3.1.32
google-auth==2.22.0
google-auth-oauthlib==1.0.0
google-pasta==0.2.0
gradio==3.36.1
gradio_client==0.2.8
grpcio==1.56.0
h11==0.14.0
h5py==3.9.0
httpcore==0.17.3
httpx==0.24.1
huggingface-hub==0.16.4
idna==3.4
imageio==2.31.1
importlib-metadata==6.8.0
jax==0.4.13
Jinja2==3.1.2
joblib==1.3.1
jsonschema==4.18.0
jsonschema-specifications==2023.6.1
keras==2.12.0
kiwisolver==1.4.4
lazy_loader==0.3
libclang==16.0.0
-e git+https://github.com/bmaltais/kohya_ss@5c44ba372c6d94f996f98bbcb1d2a60731ba3080#egg=library
lightning-utilities==0.9.0
linkify-it-py==2.0.2
lion-pytorch==0.0.6
lycoris-lora==1.8.0.dev6
Markdown==3.4.3
markdown-it-py==2.2.0
MarkupSafe==2.1.2
matplotlib==3.7.2
mdit-py-plugins==0.3.3
mdurl==0.1.2
ml-dtypes==0.2.0
mpmath==1.2.1
multidict==6.0.4
mypy-extensions==1.0.0
networkx==3.0
numpy==1.23.5
oauthlib==3.2.2
open-clip-torch==2.20.0
opencv-python==4.7.0.68
opencv-python-headless==4.8.0.74
opt-einsum==3.3.0
orjson==3.9.2
packaging==23.1
pandas==2.0.3
pathtools==0.1.2
Pillow==9.3.0
prodigyopt==1.0
protobuf==3.20.3
psutil==5.9.5
pyasn1==0.5.0
pyasn1-modules==0.3.0
pydantic==2.0.2
pydantic_core==2.1.2
pydub==0.25.1
Pygments==2.15.1
pyparsing==3.0.9
pyre-extensions==0.0.29
python-dateutil==2.8.2
python-multipart==0.0.6
pytorch-lightning==1.9.0
pytz==2023.3
PyWavelets==1.4.1
PyYAML==6.0
qudida==0.0.4
referencing==0.29.1
regex==2023.6.3
requests==2.28.1
requests-oauthlib==1.3.1
rich==13.4.1
rpds-py==0.8.10
rsa==4.9
safetensors==0.3.1
scikit-image==0.21.0
scikit-learn==1.3.0
scipy==1.11.1
semantic-version==2.10.0
sentencepiece==0.1.99
sentry-sdk==1.28.0
setproctitle==1.3.2
six==1.16.0
smmap==5.0.0
sniffio==1.3.0
starlette==0.27.0
sympy==1.11.1
tensorboard==2.12.3
tensorboard-data-server==0.7.1
tensorflow==2.12.0
tensorflow-estimator==2.12.0
tensorflow-intel==2.12.0
tensorflow-io-gcs-filesystem==0.31.0
termcolor==2.3.0
threadpoolctl==3.1.0
tifffile==2023.7.10
timm==0.6.12
tk==0.1.0
tokenizers==0.13.3
toml==0.10.2
toolz==0.12.0
torch==2.0.1+cu118
torchmetrics==1.0.0
torchvision==0.15.2+cu118
tqdm==4.65.0
transformers==4.30.2
typing-inspect==0.9.0
typing_extensions==4.7.1
tzdata==2023.3
uc-micro-py==1.0.2
urllib3==1.26.13
uvicorn==0.22.0
voluptuous==0.13.1
wandb==0.15.0
wcwidth==0.2.6
websockets==11.0.3
Werkzeug==2.3.6
wrapt==1.14.1
xformers==0.0.20
yarl==1.9.2
zipp==3.16.0
```

