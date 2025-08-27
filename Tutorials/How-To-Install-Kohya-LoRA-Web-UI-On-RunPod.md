[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-Kohya-LoRA-Web-UI-On-RunPod.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-Kohya-LoRA-Web-UI-On-RunPod.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# Tutorial For How To Install Kohya LoRA- Web UI On RunPod - Updated 11 August 2023

## Tutorial link for this readme file : https://youtu.be/-xEwaQ54DI4
* Tutorial Video Used .json config file
* Download attached txt file and remove txt extension
* * [test1.json.txt](https://github.com/FurkanGozukara/Stable-Diffusion/files/12327860/test1.json.txt)

https://www.runpod.io/

### Auto Installer For RunPod - Updated 11 August 2023
* Scripts : https://www.patreon.com/posts/84898806
* Upload downloadSDXL.sh
* Open a new terminal and execute command below to auto download SDXL model files into /workspace/
```
chmod +x downloadSDXL.sh
./downloadSDXL.sh
```


* Upload kohya_installer.sh
* Open a new terminal and execute commands below for initial install
```
chmod +x kohya_installer.sh
./kohya_installer.sh
```
* Patiently wait until all operations get completed - [Screenshot](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/rT5O74VPhrFlNdjdkX2dv.png)
* Then start with below command. It will give you gradio link wait it
* Use below command everytime you want to use Kohya LoRA
* You may be need to hit enter twice after copy paste

```
apt update 
yes | apt-get install python3.10-tk
fuser -k 7860/tcp
cd /workspace/kohya_ss
source venv/bin/activate
export CUDA_VISIBLE_DEVICES=0
bash gui.sh --share --headless
```

### Use pre-downloaded ckpt or safetensors for training as source model - mandatory - otherwise you will get error
* Example base training model settings ```/workspace/stable-diffusion-webui/models/Stable-diffusion/v1-5-pruned.ckpt```
* Quick destination folder ```/workspace/stable-diffusion-webui/models/Lora```
* [Screenshot of custom model selection](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/YPU7_TfhK9xOIbynF9Jft.png)

## Kohya Tutorials Recent To Old - Watch Them To Learn With Details

SDXL > [**Become A Master Of SDXL Training With Kohya SS LoRAs - Combine Power Of Automatic1111 & SDXL LoRAs**](https://youtu.be/sBFGitIvD2A)

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/rXbRquLxFaDGaGlkl-SUp.png)](https://youtu.be/sBFGitIvD2A)

SD 1.5 Models > [**Generate Studio Quality Realistic Photos By Kohya LoRA Stable Diffusion Training - Full Tutorial**](https://youtu.be/TpuDOsuKIBo)

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/QA9woGfjeql37J9JepbrW.png)](https://youtu.be/TpuDOsuKIBo)

## Find Best Images With DeepFace AI Library

[**How To Find Best Stable Diffusion Generated Images By Using DeepFace AI - DreamBooth / LoRA Training**](https://youtu.be/343I11mhnXs)

[![image](https://user-images.githubusercontent.com/19240467/236293388-6254ff84-0866-4bd4-a5d4-2db3c42be3f0.png)](https://youtu.be/343I11mhnXs)

## How To Use RunPod Tutorial

[**Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI**](https://www.youtube.com/watch?v=QN1vdGhjcRc) 

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/NLbuo08ixbjt5t3iG5ioG.png)](https://www.youtube.com/watch?v=QN1vdGhjcRc)

## Resources

* 2700 Ground Truth (Real Person Images) Regularazation / Classification Images With Many Different Aspect Ratios
* https://www.patreon.com/posts/4k-2700-real-84053021
* https://www.patreon.com/posts/1k-resolution-0-85976249
* Video tutorial of these images : https://www.youtube.com/watch?v=QTYX0tgA5ho
* 1 Click RunPodCTL installer script > https://www.patreon.com/posts/1-click-bat-file-87505171
* Network Rank (Dimension) Effect : https://twitter.com/GozukaraFurkan/status/1688613661034635264
* 1 Click Automatic1111 Web UI RunPod Updater / Installer : https://www.patreon.com/posts/1-click-runpod-86438018
 
Realistic Vision V5.1 
```
wget https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE/resolve/main/Realistic_Vision_V5.1.safetensors
```

SD 1.5 Best VAE
```
wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt
```

SDXL Best VAE
```
wget https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors
```

## Optimizer Extra Arguments For SDXL (Adafactor Optimizer)
```
scale_parameter=False relative_step=False warmup_init=False
```

## How To Install Kohya GUI On RunPod

* Select stable-diffusion:web-ui or stable-diffusion:fast-stable-diffusion templates
* Make container disk size at least 15 GB

Kohya SS Gui Repo : https://github.com/bmaltais/kohya_ss

Patiently wait it can take up to 15 minutes total to install.

```
apt update
```

```
apt-get install python3.10-tk
```

```
cd /workspace
```

```
git clone https://github.com/bmaltais/kohya_ss.git
```

```
cd kohya_ss
```

```
python3 -m venv venv
```

```
source venv/bin/activate
```

```
pip install fastapi==0.99.1
```

```
./setup.sh -n
```

## Usage after install

* Start a new terminal
* Copy paste below code
* You may be need to hit enter twice after copy paste

```
apt update
yes | apt-get install python3.10-tk
fuser -k 7860/tcp
cd /workspace/kohya_ss
source venv/bin/activate
pip install fastapi==0.99.1
bash gui.sh --share --headless
```

## How To Kill Automatic1111 Web UI Instance Before Training And Start Web UI Manually

1 Time modify relauncher.py file as below and do a Pod restart
```
while launch_counter < 1:
```

To kill Automatic1111 Web UI instance
```
fuser -k 3000/tcp
```

To start Automatic1111 Web UI instance again
```
cd /workspace/stable-diffusion-webui
python relauncher.py
```

