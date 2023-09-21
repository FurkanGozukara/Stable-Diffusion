# How To Do SDXL DreamBooth (Full Fine Tuning) Training By Using Kohya SS GUI
## Tutorial video > coming soon hopefully
### This Tutorial Readme File Will Be Updated In Future If Something Gets Broken

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Do-SDXL-DreamBooth-Training-With-Best-Settings.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

## Prerequisites

### Full tutorial for Python and Git installation and extra info regarding venv (virtual enviroment)
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)
* Python 3.10.11 (I know prefer 3.10.11 since latest xFormers requires this)
* * https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe
* * https://www.python.org/downloads/release/python-31011/
* Git > https://git-scm.com/downloads
 
### Auto Automatic1111 Web UI Installer
* Auto clones, installs, downloads SDXL and correct VAE into correct folders, and more. Amazing script
* https://www.patreon.com/posts/automatic-for-ui-86307255
* More info @ : https://twitter.com/GozukaraFurkan/status/1704979192746479696

### Download and install Visual Studio 2015, 2017, 2019, and 2022 redistributable 
* https://aka.ms/vs/17/release/vc_redist.x64.exe

### Automatic1111 SD Web UI Repo : https://github.com/AUTOMATIC1111/stable-diffusion-webui
```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```
* Command Line Arguments Automatic1111 SD Web UI
* * https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings

### Kohya GUI Repo : https://github.com/bmaltais/kohya_ss
```
git clone https://github.com/bmaltais/kohya_ss
```

### Resources
* How To Find Best Stable Diffusion Generated Images By Using DeepFace AI - DreamBooth / LoRA Training
* * YouTube Tutorial : https://youtu.be/343I11mhnXs
* Script : https://www.patreon.com/posts/sort-ai-images-82478694
*
* What is DreamBooth training, rare tokens, class images master tutorial below
* * [Zero To Hero Stable Diffusion DreamBooth Tutorial By Using Automatic1111 Web UI - Ultra Detailed](https://youtu.be/Bdl-jWR3Ukc)
*
* Ground truth Classification / Regularization images dataset (512px, 768px, 1024px, 1280px, 1536px & raw)
* * https://www.patreon.com/posts/4k-2700-real-84053021
* * [Human Cropping Script & 4K+ Resolution Class / Reg Images For Stable Diffusion DreamBooth / LoRA](https://youtu.be/QTYX0tgA5ho)
* * [Stable Diffusion 2 NEW Image Post Processing Scripts And Best Class / Regularization Images Datasets](https://youtu.be/olX1mySE8HA)
* * More info @ : https://twitter.com/GozukaraFurkan/status/1704276686089421218
*
* SDXL fp16 VAE
* * https://huggingface.co/madebyollin/sdxl-vae-fp16-fix
*
* Kohya repeating logic : https://github.com/kohya-ss/sd-scripts/issues/640
*
* Using ground truth regularization / classification images approach
* * https://github.com/victorchall/EveryDream2trainer/blob/main/doc/NOTDREAMBOOTH.md
*
* Image Validator Script : https://www.patreon.com/posts/image-validator-85618765
*
* Best realism workflow with SD 1.5 models
* * [The END of Photography - Use AI to Make Your Own Studio Photos, FREE Via DreamBooth Training](https://youtu.be/g0wXIcRhkJk)
*
* [How To Get Amazing Prompts With ChatGPT For Stable Diffusion](https://www.patreon.com/posts/how-to-get-with-87038686)
 
### How To Install Kohya GUI On RunPod

* Manual Install Tutorial Video: https://youtu.be/3uzCNrQao3o
* 1 Click Automatic Installer Script For RunPod: https://www.patreon.com/posts/84898806
* Tutorial for RunPod
* * [How To Do SDXL LoRA Training On RunPod With Kohya SS GUI Trainer & Use LoRAs With Automatic1111 UI](https://youtu.be/-xEwaQ54DI4)

### SDXL Base 1.0 Direct Download Links

* Main repo : https://huggingface.co/stabilityai
* 
* Fixed VAE
* * https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors
* 1.0 (broken VAE embedded which I use for training)
* * https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
* 1.0 Refiner (uses same VAE of base)
* * https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors

### How To Install Kohya GUI On Windows
* Do a git clone of repository
* Run setup.bat file
* Follow the tutorial [video](https://youtu.be/sBFGitIvD2A)
* For linux you can watch RunPod tutorial

### How To Do Training On Second GPU
* Edit gui.bat file
* Add below command
* ```set CUDA_VISIBLE_DEVICES=1```

### Optimizer Extra Arguments For SDXL
```
scale_parameter=False relative_step=False warmup_init=False weight_decay=0.01
```

### Used Training Json File Attached As .txt So Change Extension To .json

* Json config : [test_video_lowVRAM.txt](https://github.com/FurkanGozukara/Stable-Diffusion/files/12267056/test_video_lowVRAM.txt)

### Used Training Command

```
accelerate launch --num_cpu_threads_per_process=4 "./sdxl_train.py" --pretrained_model_name_or_path="F:/0 models/sd_xl_base_1.0.safetensors" --train_data_dir="E:/SD web ui with controlnet/stable-diffusion-webui/models/Stable-diffusion\img" --reg_data_dir="E:/SD web ui with controlnet/stable-diffusion-webui/models/Stable-diffusion\reg" --resolution="1024,1024" --output_dir="E:/SD web ui with controlnet/stable-diffusion-webui/models/Stable-diffusion\model" --logging_dir="E:/SD web ui with controlnet/stable-diffusion-webui/models/Stable-diffusion\log" --save_model_as=safetensors --full_bf16 --output_name="SDXL_DB_Tuto" --lr_scheduler_num_cycles="8" --max_data_loader_n_workers="0" --learning_rate="1e-05" --lr_scheduler="constant" --train_batch_size="1" --max_train_steps="8320" --save_every_n_epochs="1" --mixed_precision="bf16" --save_precision="bf16" --cache_latents --cache_latents_to_disk --optimizer_type="Adafactor" --optimizer_args scale_parameter=False relative_step=False warmup_init=False weight_decay=0.01 --max_data_loader_n_workers="0" --bucket_reso_steps=64 --xformers --bucket_no_upscale --noise_offset=0.0
```

### Used Prompts

#### Used prompts to generate images shown in intro of the tutorial

```
photo ohwx man dressage riding a saber-toothed tiger , sunny day, 35mm photograph,film,professional,4k,highly detailed

<lora:12gb_settings-000007:1>
Negative prompt: drawing,painting,crayon,sketch,graphite,impressionist,noisy,blurry,soft,deformed,ugly
Steps: 20, Sampler: Euler a, CFG scale: 7, Seed: 1935425320, Size: 1280x720, Model hash: 31e35c80fc, Model: sd_xl_base_1.0, Denoising strength: 0.5, ADetailer model: face_yolov8n.pt, ADetailer prompt: "face photo of ohwx man <lora:12gb_settings-000007:1>", ADetailer confidence: 0.3, ADetailer dilate/erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.4, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer version: 23.7.11, Hires upscale: 1.6, Hires upscaler: Latent, Lora hashes: "12gb_settings-000007: f9b455fdd697", Version: v1.5.1
```
```
breathtaking closeshot photo of ohwx man riding a dinosaur <lora:24gb_settings-000007:1> . award-winning, professional, highly detailed
Negative prompt: deformed, ugly, deformed, noisy, blurry, distorted, grainy
Steps: 20, Sampler: Euler a, CFG scale: 7, Seed: 4007836056, Size: 1280x720, Model hash: 31e35c80fc, Model: sd_xl_base_1.0, Denoising strength: 0.5, ADetailer model: face_yolov8n.pt, ADetailer prompt: "ohwx man <lora:24gb_settings-000007:1>", ADetailer confidence: 0.3, ADetailer dilate/erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.4, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer version: 23.7.11, Hires upscale: 2, Hires upscaler: Latent, Lora hashes: "24gb_settings-000007: f99b38a8f85d", Version: v1.5.1
Template: closeshot photo of ohwx man riding a dinosaur <lora:24gb_settings-000007:1>
Negative Template: deformed
```
```
cinematic photo ohwx man riding dinosaur in a jungle with mud, sunny day shiny clear sky . 35mm photograph,film,professional,4k,highly detailed

<lora:24gb_settings-000007:1>
Negative prompt: drawing,painting,crayon,sketch,graphite,impressionist,noisy,blurry,soft,deformed,ugly
Steps: 20, Sampler: Euler a, CFG scale: 7, Seed: 4114707048, Size: 1280x720, Model hash: 31e35c80fc, Model: sd_xl_base_1.0, Denoising strength: 0.5, ADetailer model: face_yolov8n.pt, ADetailer prompt: "face photo of ohwx man <lora:24gb_settings-000007:1>", ADetailer confidence: 0.3, ADetailer dilate/erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.4, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer version: 23.7.11, Hires upscale: 1.6, Hires upscaler: Latent, Lora hashes: "24gb_settings-000007: f99b38a8f85d", Version: v1.5.1
Template: cinematic photo ohwx man riding dinosaur in a jungle with mud, sunny day shiny clear sky . 35mm photograph,film,professional,4k,highly detailed

<lora:24gb_settings-000007:1>
Negative Template: drawing,painting,crayon,sketch,graphite,impressionist,noisy,blurry,soft,deformed,ugly
```

#### Used prompts to generated 2000+ images
```
closeshot photo of ohwx:1.2 man with eyeglasses wearing an expensive white  suit, looking at the viewer, award winning photography, highres, best quality, absurdres, detailed, hasselblad, aperture f/2.8, high resolution, analog style, cinematic illumination, sharp focus   <lora:12gb_settings-000007:1>
```

* Then change color of the suit such as below

```
closeshot photo of ohwx:1.2 man with eyeglasses wearing an expensive black  suit, looking at the viewer, award winning photography, highres, best quality, absurdres, detailed, hasselblad, aperture f/2.8, high resolution, analog style, cinematic illumination, sharp focus   <lora:12gb_settings-000007:1>
```

Negative
```
worst quality, low quality, bad quality, lowres, blurry, out of focus, deformed, ugly, fat, obese, poorly drawn face, poorly drawn eyes, poorly drawn eyelashes, bad proportions, bad anatomy, arthropod limbs, poorly drawn hands, too many fingers, bad hands, fused fingers, mutated, warped, discoloration, rash, jpeg artifacts, bored, boring, poorly drawn iris, milky isis, missing pupils, oversized limb, big head, long neck, mutant hand, deformed fingers, forehead bulge, dented face, forehead dent, double chin, long chin, double mouth, extra mouth, iso grain, noise
```

#### Some Others
* Realism 
```
portrait photo of (ohwx man:1.1) wearing an expensive White suit, white background, fit <lora:12gb_settings-000007:1>
```

```
(blue eyes, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), fat, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck
```

* GTA 5
```
portrait photo of ohwx:0.8 man in gta 5 style, game character, digital drawing, digital artwork <lora:12gb_settings-000007:1>
```
No negatives

* Pixar
```
photo of ohwx:0.9 man as a pixar character <lora:12gb_settings-000007:1>
```

```
low, bad, blurry, worse, worst, ugly, tiling, deformed, mutated, low quality
```

* van gogh in automatic 1111 web ui
```
painting of ohwx man in van gogh style <lora:12gb_settings-000007:1>
```

```
realistic, realism, photo, picture, canon, hdr, studioshot , photoshoot, low quality, bad, blurry, ugly, tiling, poorly drawn, low, low quality, worse, worst
```

* miniature in automatic 1111 web ui
```
ohwx man as a plastic figurine, miniature product photography <lora:12gb_settings-000007:1>
```

## Use Versions And Pip Freeze

* Kohya SS GUI Commit Id : ed4e3b0239a40506de9a17e550e6cf2d0b867a4f -  tag: v21.8.9
* VENV Pip Freeze

```
(venv) F:\kohya_ss>pip freeze
absl-py==2.0.0
accelerate==0.19.0
aiofiles==23.2.1
aiohttp==3.8.5
aiosignal==1.3.1
altair==4.2.2
annotated-types==0.5.0
anyio==3.7.1
appdirs==1.4.4
astunparse==1.6.3
async-timeout==4.0.3
attrs==23.1.0
bitsandbytes==0.35.0
cachetools==5.3.1
certifi==2022.12.7
charset-normalizer==2.1.1
click==8.1.7
colorama==0.4.6
contourpy==1.1.1
cycler==0.11.0
dadaptation==3.1
diffusers==0.18.2
docker-pycreds==0.4.0
easygui==0.98.3
einops==0.6.0
entrypoints==0.4
exceptiongroup==1.1.3
fairscale==0.4.13
fastapi==0.103.1
ffmpy==0.3.1
filelock==3.9.0
flatbuffers==23.5.26
fonttools==4.42.1
frozenlist==1.4.0
fsspec==2023.9.1
ftfy==6.1.1
gast==0.4.0
gitdb==4.0.10
GitPython==3.1.36
google-auth==2.23.0
google-auth-oauthlib==1.0.0
google-pasta==0.2.0
gradio==3.36.1
gradio_client==0.5.1
grpcio==1.58.0
h11==0.14.0
h5py==3.9.0
httpcore==0.18.0
httpx==0.25.0
huggingface-hub==0.15.1
idna==3.4
importlib-metadata==6.8.0
invisible-watermark==0.2.0
jax==0.4.16
Jinja2==3.1.2
jsonschema==4.19.1
jsonschema-specifications==2023.7.1
keras==2.12.0
kiwisolver==1.4.5
libclang==16.0.6
-e git+https://github.com/bmaltais/kohya_ss@ed4e3b0239a40506de9a17e550e6cf2d0b867a4f#egg=library
lightning-utilities==0.9.0
linkify-it-py==2.0.2
lion-pytorch==0.0.6
lycoris-lora==1.8.3
Markdown==3.4.4
markdown-it-py==2.2.0
MarkupSafe==2.1.2
matplotlib==3.8.0
mdit-py-plugins==0.3.3
mdurl==0.1.2
ml-dtypes==0.3.0
mpmath==1.2.1
multidict==6.0.4
networkx==3.0
numpy==1.23.5
oauthlib==3.2.2
open-clip-torch==2.20.0
opencv-python==4.7.0.68
opt-einsum==3.3.0
orjson==3.9.7
packaging==23.1
pandas==2.1.1
pathtools==0.1.2
Pillow==9.3.0
prodigyopt==1.0
protobuf==3.20.3
psutil==5.9.5
pyasn1==0.5.0
pyasn1-modules==0.3.0
pydantic==2.3.0
pydantic_core==2.6.3
pydub==0.25.1
Pygments==2.16.1
pyparsing==3.1.1
python-dateutil==2.8.2
python-multipart==0.0.6
pytorch-lightning==1.9.0
pytz==2023.3.post1
PyWavelets==1.4.1
PyYAML==6.0.1
referencing==0.30.2
regex==2023.8.8
requests==2.28.1
requests-oauthlib==1.3.1
rich==13.4.1
rpds-py==0.10.3
rsa==4.9
safetensors==0.3.1
scipy==1.11.2
semantic-version==2.10.0
sentencepiece==0.1.99
sentry-sdk==1.31.0
setproctitle==1.3.2
six==1.16.0
smmap==5.0.1
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
timm==0.6.12
tk==0.1.0
tokenizers==0.13.3
toml==0.10.2
toolz==0.12.0
torch==2.0.1+cu118
torchmetrics==1.1.2
torchvision==0.15.2+cu118
tqdm==4.66.1
transformers==4.30.2
typing_extensions==4.8.0
tzdata==2023.3
uc-micro-py==1.0.2
urllib3==1.26.13
uvicorn==0.23.2
voluptuous==0.13.1
wandb==0.15.0
wcwidth==0.2.6
websockets==11.0.3
Werkzeug==2.3.7
wrapt==1.14.1
xformers==0.0.21
yarl==1.9.2
zipp==3.17.0

(venv) F:\kohya_ss>
```

