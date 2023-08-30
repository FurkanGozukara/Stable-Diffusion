[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Do-Free-Google-Colab-Like-Kaggle-SDXL-LoRA-Training.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# How To Do Free SDXL Google Colab Like Free Kaggle Account SDXL LoRA Training With Kohya SS GUI
* You can use Kaggle to do SD 1.5 based models training as well

## The Tutorial Video Link Will Be Added Once Published

## Download Kaggle Notebook Used In This Tutorial 
* **https://www.patreon.com/posts/kohya-sdxl-lora-88397937**
* Alternatively by watching the video you can type yourself
* Writing is not hard but if you support me on Patreon I would appreciate that very much 

## Register A Free Kaggle Account

* Register your account from here https://www.kaggle.com/account/login?phase=startRegisterTab
* You can register by using email or register with Google
* After registration you need to verify your Phone number
* This is mandatory to be able to use GPUs for free
* Verify your Phone number from here : https://www.kaggle.com/settings
* Once it is done you are ready to use 30 hours per week dual GPU for free
* If your Phone doesn't work you need to email their support : https://www.kaggle.com/contact#/account/activate/phone

## Suggested Resources Before Doing Training

* I suggest you to watch below 3 tutorials before doing SDXL LoRA training
* The Logic of LoRA explained in this video
* * [How To Do Stable Diffusion LORA Training By Using Web UI On Different Models - Tested SD 1.5, SD 2.1](https://youtu.be/mfaqqL5yOO4)
* SDXL very comprehensive LoRA training video
* * [Become A Master Of SDXL Training With Kohya SS LoRAs - Combine Power Of Automatic1111 & SDXL LoRAs](https://youtu.be/sBFGitIvD2A)
* SDXL training on a RunPod which is another cloud service similar to Kaggle but this one don't provide free GPU
* * [How To Do SDXL LoRA Training On RunPod With Kohya SS GUI Trainer & Use LoRAs With Automatic1111 UI](https://youtu.be/-xEwaQ54DI4)
* Sort generated images with similarity to find best ones easily
* * [How To Find Best Stable Diffusion Generated Images By Using DeepFace AI - DreamBooth / LoRA Training](https://youtu.be/343I11mhnXs)
* 765 Styles that you can use. Don't forget to change extension to .csv > [styles.txt](https://github.com/FurkanGozukara/Stable-Diffusion/files/12458705/styles.txt)


### How To Use Kaggle Free Account To Run Automatic1111 Web UI
* A tutorial for this will be made hopefully and the link will be shared here hopefully
* Stay subscribed

## How To Install And Do LoRA Training
* Start a new Notebook as shown in tutorial video and follow the steps
* SDXL Hugging Face repo name ```stabilityai/stable-diffusion-xl-base-1.0```
* The used Optimizer Arguments ```scale_parameter=False relative_step=False warmup_init=False```
* The used Additional Parameters ```--lowram```

**Copy paste the below codes into a new Notebook or download from Patreon post. Alternatively watch video and follow code shared there**

```%cd /kaggle/working```

```!git clone https://github.com/bmaltais/kohya_ss.git```

```%cd /kaggle/working/kohya_ss```

```!./setup.sh -n```

**After installation has been completed use below code to start Kohya GUI**

```!bash gui.sh --share --headless```


## Ground Truth Classification / Regularazation Images
* All images for both man and woman class are provided in below link
* * https://www.patreon.com/posts/massive-4k-woman-87700469
* The used scripts to prepare these images are shared in below videos
* * [Human Cropping Script & 4K+ Resolution Class / Reg Images For Stable Diffusion DreamBooth / LoRA](https://youtu.be/QTYX0tgA5ho)
  * * The updated script of subject cropper (no new video available yet) : https://www.patreon.com/posts/sota-subject-and-88391247
* * [Stable Diffusion 2 NEW Image Post Processing Scripts And Best Class / Regularization Images Datasets](https://youtu.be/olX1mySE8HA)
* New image resizer script that focuses face and much better than Automatic1111 Web UI (no video available yet)
* * https://www.patreon.com/posts/sota-subject-and-88391247

