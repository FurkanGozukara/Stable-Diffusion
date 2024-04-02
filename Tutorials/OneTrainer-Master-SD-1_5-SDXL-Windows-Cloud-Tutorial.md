[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FOneTrainer-Master-SD-1_5-SDXL-Windows-Cloud-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

Register Massed Compute From Below Link (could be necessary to use our Special Coupon for A6000 GPU for 31 cents per hour): 
https://bit.ly/Furkan-Gözükara 

Then from here deploy your VM as shown in below image: https://vm.massedcompute.com/deploy

![image](https://github.com/FurkanGozukara/Stable-Diffusion/assets/19240467/da7b56fe-a452-41f2-9d75-f1ed17a75ec7)

Download thinlinc to connect and use VM : https://www.cendio.com/thinlinc/download/

Help Documents : https://vm-docs.massedcompute.com/docs/category/product-overview

Update / Installer Scripts & More : https://www.patreon.com/posts/101386817

### Requirements To Use OneTrainer & Other AI On Windows

* Please watch this amazing tutorial and install Python 3.10.11, Git, C++ Tools & FFmpeg exactly as shown step by step in the below tutorial
* https://youtu.be/-NjNy7afOQ0
* [**Essential AI Tools and Libraries: A Guide to Python, Git, C++ Compile Tools, FFmpeg, CUDA, PyTorch**](https://youtu.be/-NjNy7afOQ0)

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/uSxPD2Yav4JlLEAHQE5Dr.png)](https://youtu.be/-NjNy7afOQ0)

* After installing the requirements, you need to do git clone into any folder where you want to install
* I suggest like e.g. C:/OneTrainer
* So open a CMD on C drive and type ```git clone https://github.com/Nerogar/OneTrainer```
* Then double click and run ```install.bat``` file
* If you have previously installed, please run ```update.bat``` file to update

### How To Update OneTrainer To The Latest Version On MassedCompute Virtual Machine

* Open a terminal 
* Execute below commands to move into OneTrainer folder, activate its conda VENV and update it
```
cd /home/Ubuntu/apps/OneTrainer
source venv/bin/activate
./update.sh
```

#### How To Fix OneTrainer xFormers Version After Update On MassedCompute
```
cd /home/Ubuntu/apps/OneTrainer
conda activate ot
pip install https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/xformers-0.0.24-cp310-cp310-manylinux2014_x86_64.whl
```

#### How To Use Second GPU On MassedCompute To Start Second Training on Second GPU

* Edit home/scripts/run_onetrainer.sh file
* Add below code like shown in tutorial video
```
export CUDA_VISIBLE_DEVICES=1
```

### How To Update Automatic1111 SD Web UI On MassedCompute Virtual Machine

* Open a terminal 
* Execute below to move into Automatic1111 folder and update it to latest version
```
cd /home/Ubuntu/apps/stable-diffusion-webui
git pull
```

### How To Edit Automatic1111 SD Web UI Command Line Arguments On MassedCompute Virtual Machine

* Double click and start Stable Diffusion Settings on desktop
* Edit COMMANDLINE_ARGS having line as below and save
```
export COMMANDLINE_ARGS="--xformers --share --enable-insecure-extension-access"
```

### How To Update Kohya SS GUI Trainer UI On MassedCompute Virtual Machine

* Open a terminal 
* Execute below to move into Kohya folder and update it to latest version
```
cd /home/Ubuntu/apps/kohya_ss
git pull
```

#### How To Make Kohya SS GUI To Use Certain GPU On MassedCompute Virtual Machine

* Edit home/scripts/run_kohya.sh file
* Add below code like shown in tutorial video
```
export CUDA_VISIBLE_DEVICES=1
```

### Kohya Config Files
* The very best configs (as the date of April 2024) are shown in the tutorial video. However if the configs get updated in future with better parameters, you really should the ones on Patreon
* [The Very Best Workflow For SDXL DreamBooth / Full Fine Tuning - Results Of 100+ Full Trainings](https://www.patreon.com/posts/very-best-for-of-89213064)
* [The Very Best Kohya GUI Workflow & Config For SD 1.5 Based Models DreamBooth / Full Fine Tuning](https://www.patreon.com/posts/very-best-kohya-97379147)

### Download Links For Best Models For Training & Using
* Follow tutorial video to see how to download and move into accurate folder
* The folder path is
```/home/Ubuntu/apps/stable-diffusion-webui/models/Stable-diffusion```
* SDXL RealVisXL_V4 :  https://huggingface.co/SG161222/RealVisXL_V4.0/tree/main
* SD 1.5 Hyper Realism V3 : https://civitai.com/api/download/models/292213?token=c4ac691fbdba136b3da555eed088fcbe

### OneTrainer Config Files
* The very best configs (as the date of April 2024) are shown in the tutorial video. However if the configs get updated in future with better parameters, you really should the ones on Patreon
* [The Very Best OneTrainer Workflow & Config For SD 1.5 Based Models DreamBooth / Full Fine Tuning](https://www.patreon.com/posts/very-best-config-97381002)
* [OneTrainer Stable Diffusion XL (SDXL) Fine Tuning Best Presets](https://www.patreon.com/posts/96028218)

### Manually Prepared Ground Truth Regularazation / Classification Images

[Massive 4K Resolution Woman & Man Class Ground Truth Stable Diffusion Regularization Images Dataset](https://www.patreon.com/posts/massive-4k-woman-87700469)

### How To Select Folders Paths Quickly

* CTRL + L
* Path of Models of Automatic1111 : ```/home/Ubuntu/apps/stable-diffusion-webui/models/Stable-diffusion```

### How To See GPU Usage

* Open a CMD and type ```nvitop```
* To install ```pip install nvitop``` - You don't need to install on MassedCompute

### How To Execute Custom SH Scripts


* To Update Auto1111 To Latest Version & Install ADetailer & ControlNet & FaceFusion
* This will install accurate libraries for you to be able to use even InstantID & FaceFusion & IP Adapter Face ID
* Open a CMD inside the folder where you downloaded update_sd1111.sh file
* Run below commands
```
chmod +x update_sd1111.sh
./update_sd1111.sh
```

### TensorRT - Not Working As Date Of 3 April 2024 For Some Reason
* TensorRT brings up to 75% speed up with 0 quality loss
* Please watch this tutorial to learn it : https://youtu.be/eKnMVXVjVoU
* To Install TensorRT Extension On Automatic1111 SD Web UI
* Open a CMD inside the folder where you downloaded install_TensorRT.sh file
* Run below commands
```
chmod +x install_TensorRT.sh
./install_TensorRT.sh
```

### Additional Information For Automatic1111

* Don't forget to use Run_Stable_Diffusion_Settings and add --xformers to use xFormers for huge speed up
* You can also add --share parameter to use Automatic1111 on your computer or even on your phone

* To download following models automatically into the accurate folder where Stable Diffusion installed
* On massed compute it is ```/home/Ubuntu/apps```
* Then open a terminal inside this folder
* Execute below command to download Realistic_Vision_V6, SDXL Base 1.0 with fixed VAE, RealVisXL_V4 - very realistic model for training & most realistic SD 1.5 model Hyper_Realism_V3
* ```python download_models.py```

* To download all of the ControlNet models including Ip Adapter Face ID and InstantID use the following commands
* Full tutorial of ControlNet is here : https://youtu.be/3E5fhFQUVLo
* Using ip-adapter-faceid and instant_id_sdxl are not straight forward. 
* Please read the following threads:
* Ip Adapter Face ID of ControlNet : https://github.com/Mikubill/sd-webui-controlnet/discussions/2442
* InstantID of ControlNet : https://github.com/Mikubill/sd-webui-controlnet/discussions/2589
* Download commands
* ```python control_net_downloader.py```
* ```python download_ip_adapter_and_instantid.py```

### Notebook To Upload Models And Files Into Hugging Face

* Save as and run it with Jupyter Notebook
* https://gist.github.com/FurkanGozukara/84ad2cf9731c278d5679f7b5fcf5e44e

### The Used OneTrainer Version
* OneTrainer developer is really active and constantly fixing errors
* But still for some reason if you ever want to use exactly same version as this tutorial
* Edit update.bat file and add below code to under the ```%GIT% pull``` part
```
%GIT% checkout 9a35e7f8596988f672af668f474f8d489ff8f962
```
* Then double click and run the update.bat file
