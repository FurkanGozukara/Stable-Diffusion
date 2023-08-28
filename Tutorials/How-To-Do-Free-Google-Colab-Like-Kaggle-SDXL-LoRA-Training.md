# How To Do Free SDXL Google Colab Like Free Kaggle Account SDXL LoRA Training With Kohya SS GUI
* You can use Kaggle to do SD 1.5 based models training as well

# Download Kaggle Notebook Used In This Tutorial : https://www.patreon.com/posts/kohya-sdxl-lora-88397937
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
* * [How To Do Stable Diffusion LORA Training By Using Web UI On Different Models - Tested SD 1.5, SD 2.1]
* SDXL very comprehensive LoRA training video
* * [Become A Master Of SDXL Training With Kohya SS LoRAs - Combine Power Of Automatic1111 & SDXL LoRAs](https://youtu.be/sBFGitIvD2A)
* SDXL training on a RunPod which is another cloud service similar to Kaggle but this one don't provide free GPU
* * [How To Do SDXL LoRA Training On RunPod With Kohya SS GUI Trainer & Use LoRAs With Automatic1111 UI](https://youtu.be/-xEwaQ54DI4)

### How To Use Kaggle Free Account To Run Automatic1111 Web UI
* A tutorial for this will be made hopefully and the link will be shared here hopefully
* Stay subscribed

## How To Install And Do LoRA Training
* Start a new Notebook as shown in tutorial video and follow the steps
* SDXL Hugging Face repo name ```stabilityai/stable-diffusion-xl-base-1.0```
* The used Optimizer Arguments ```scale_parameter=False relative_step=False warmup_init=False```
* The used Additional Parameters ```--lowram```

## Ground Truth Classification / Regularazation Images
* All images for both man and woman class are provided in below link
* * https://www.patreon.com/posts/massive-4k-woman-87700469
* The used scripts to prepare these images are shared in below videos
* * [Human Cropping Script & 4K+ Resolution Class / Reg Images For Stable Diffusion DreamBooth / LoRA](https://youtu.be/QTYX0tgA5ho)
  * * The updated script of subject cropper (no new video available yet) : https://www.patreon.com/posts/sota-subject-and-88391247
* * [Stable Diffusion 2 NEW Image Post Processing Scripts And Best Class / Regularization Images Datasets](https://youtu.be/olX1mySE8HA)
* New image resizer script that focuses face and much better than Automatic1111 Web UI (no video available yet)
* * https://www.patreon.com/posts/sota-subject-and-88391247

