[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Use-Automatic1111-Web-UI-On-A-Free-Kaggle-Notebook-Like-Google-Colab.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# How To Use Automatic1111 SD Web UI On A Free Kaggle Notebook Without Having A Strong Computer - Use As Easy As On Your Computer
* This tutorial runs on Cloud. Therefore, you don't even need a computer to follow this tutorial
* If you have a computer but don't have a strong GPU or RAM, you can use Free Kaggle to use Automatic1111 like as in your own very strong computer

## Download Kaggle Notebook Used In This Tutorial 
* **https://www.patreon.com/posts/run-on-free-like-88714330**
* Alternatively by watching the video you can type yourself
* Writing is not hard but if you support me on Patreon I would appreciate that very much 

## The Tutorial Video Link > https://youtu.be/dpM02YMj8FY?feature=shared

## Register A Free Kaggle Account

* Register your account from here https://www.kaggle.com/account/login?phase=startRegisterTab
* You can register by using email or register with Google
* After registration you need to verify your Phone number
* This is mandatory to be able to use GPUs for free
* Verify your Phone number from here : https://www.kaggle.com/settings
* Once it is done you are ready to use 30 hours per week dual GPU for free
* If your Phone doesn't work you need to email their support
* * https://www.kaggle.com/contact#/account/activate/phone
 
## Suggested Resources Before Doing Training

* ControlNet SDXL development discussion thread
* * https://github.com/Mikubill/sd-webui-controlnet/discussions/2039
* I suggest you to watch below 2 tutorials before start using Kaggle based Automatic1111 SD Web UI
* Free Kaggle Based SDXL LoRA Training
* * [How to Do SDXL Training For FREE with Kohya LoRA - Kaggle - NO GPU Required - Pwns Google Colab](https://youtu.be/JF2P7BIUpIU)
* Grandmaster Level Automatic1111 ControlNet Tutorial
* * [Zero to Hero ControlNet Tutorial: Stable Diffusion Web UI Extension | Complete Feature Guide](https://youtu.be/3E5fhFQUVLo)
* More related tutorials will be added later
* Hopefully planning a full comprehensive tutorial about SDXL ControlNet

## How To Install And Start Using Automatic1111 SD Web UI On A Free Kaggle Acount

**Start a new notebook and copy paste below codes and run them**

```!apt update```

```!yes | apt install libgoogle-perftools-dev```

```!git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui```

```%cd /kaggle/working/stable-diffusion-webui```

```!wget https://github.com/FurkanGozukara/Stable-Diffusion/files/12458705/styles.txt -O /kaggle/working/stable-diffusion-webui/styles.csv```

```!chmod +x webui.sh```

```!mkdir -p /kaggle/temp/models```

```!mkdir -p /kaggle/temp/cnmodels```

* The logic of downloading models
* For example SDXL base model shared on Hugging Face. Strategy is same for all models on Hugging Face. You can use any custom model hosted on Hugging Face
* Repo name : https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0
* Open it. Go files and versions. Copy download link of sd_xl_base_1.0.safetensors
* Replace the below command for other models. The logic is wget link then the file name
* We will download into ```/kaggle/temp/models/``` because temp folder has about 75 GB space while working directory has 20 GB space

### Download SDXL base model into the models folder. Same rule apply for CivitAI models
!wget https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors -O /kaggle/temp/models/sd_xl_base_1.0.safetensors

### Download SDXL best VAE into the VAE folder. Same strategy applies to SD 1.5 based VAEs as well
!wget https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors -O /kaggle/working/stable-diffusion-webui/models/VAE/sdxl_vae.safetensors


### For example download Realistic Vision From CivitAI
* Click download options, right click and copy download link, replace download link and replace name
!wget https://civitai.com/api/download/models/130072?type=Model&format=SafeTensor&size=full&fp=fp16 -O /kaggle/temp/models/Realistic_Vision_V5.1.safetensors

### Before starting Automatic1111 we will clone ControlNet extension so it will be automatically installed
```%cd /kaggle/working/stable-diffusion-webui/extensions```

```!git clone https://github.com/Mikubill/sd-webui-controlnet```

```%cd /kaggle/working/stable-diffusion-webui```

* Then you need to download ControlNet models into the ```/kaggle/temp/cnmodels``` folder
* Example download of SD 1.5 Canny model below

```!wget -O /kaggle/temp/cnmodels/control_v11p_sd15_canny.pth "https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control_v11p_sd15_canny.pth"```

* The same strategy applies to all models of ControlNet
* You can find all SD 1.5 based ControlNet models in below repo (can be used with any SD 1.5 based model such as Realistic Vision 5.1)
* * https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main
* You can find all SDXL ControlNet models in below repo (can be used with any SDXL like Base 1.0 or Realistic Vision XL)
* * https://huggingface.co/lllyasviel/sd_control_collection/tree/main
* Hugging Face downloads are same for all Hugging Face hosted files
* AFter Automatic1111 Web UI started you need to go to the settings and set ControlNet models folder as ```/kaggle/temp/cnmodels``` as shown in video. After that apply and not restart needed

### How to download and use custom LoRAs from CivitAI
* This below code will download pixel art SDXL lora from civit AI. this is the format to download others
* right click download button and copy link and replace yours as below
* We download LoRAs intot he defualt folder
```!mkdir -p /kaggle/working/stable-diffusion-webui/models/Lora```

```!wget https://civitai.com/api/download/models/135931 -O /kaggle/working/stable-diffusion-webui/models/Lora/Pixel_Art_XL_1_1.safetensors```

### How to upload and use your own LoRA checkpoints
* To use your own LoRAs you need to first upload them into a Kaggle dataset you compose yourself as shown in tutorial video
* Then when starting Automatic1111 web you we define a custom LoRA folder path like below
```--lora-dir "/kaggle/input/my-loras"```

## Where to find and see all Automatic1111 Web UI starting command line arguments
* Read this page > https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings

## How To Start Automatic1111 Web UI After Installation Has Been Completed With Above Steps
```
!./webui.sh \
    -f \
    --xformers \
    --share \
    --ckpt-dir "/kaggle/temp/models" \
    --enable-insecure-extension-access \
    --no-half-vae \
    #--lora-dir "/kaggle/input/my-loras" \
```
* As you are seeing above, if you want to use your own custom LoRA remove dash (#) in fron of your own LoRA dataset path - change it with your path


    
