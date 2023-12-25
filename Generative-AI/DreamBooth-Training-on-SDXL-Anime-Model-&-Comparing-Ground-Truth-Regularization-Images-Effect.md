
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FGenerative-AI%2FDreamBooth-Training-on-SDXL-Anime-Model-%2526-Comparing-Ground-Truth-Regularization-Images-Effect.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# Ground Truth Regularization / Classification Images Effect on Stable Diffusion XL (SDXL) DreamBooth Training

It was requested of me to test ground truth Regularization / Classification images effect during Stable Diffusion XL (SDXL) DreamBooth training.

For this experimentation, I have used an anime SDXL model name as: Starlight XL 星光 Animated V3.

I used the configuration I shared [here](https://www.patreon.com/posts/very-best-for-of-89213064) currently. It has been discovered after 120 different full trainings experimentation.

Hopefully, I will make a full big tutorial of DreamBooth training and show all the settings.

For training, Kohya SS GUI is used. If you don’t know how to install and use Kohya SS GUI, here the tutorial you need > [https://youtu.be/sBFGitIvD2A](https://youtu.be/sBFGitIvD2A)

And here is the tutorial that shows how to use shared configuration both on Windows and RunPod > [https://www.youtube.com/watch?v=EEV8RPohsbw](https://www.youtube.com/watch?v=EEV8RPohsbw)

## Training Images Dataset

So I used the below images as training images dataset.

![Training Images Dataset](https://miro.medium.com/v2/resize:fit:1225/1*UDQgkWt1IevNLyUSCSx2aw.png)

This training dataset is at best medium quality because it has repeating backgrounds, repeating clothing, and missing fully body pose.

## Training Configuration

Then for training configuration, I did the following.

When training with regularization images, I did 1 epoch and 150 repeating. So more regularization images are used. And saved checkpoints at every 30 epochs. To make it that way, calculate the number of steps you need to save. It is easy. 15 * 30 * 2 + 1

When training without regularization images, I set the repeating 1, trained up to 150 epochs and saved checkpoints at every 30 epoch. That is also why model names have different format. One has epoch number 1 has steps number.

I have used ultra-high-quality manually picked Unsplash real images having man dataset as regularization images dataset. This means they were ground truth regularization images like how Stable Diffusion was initially trained.

You can download the dataset from > [https://www.patreon.com/posts/massive-4k-woman-87700469](https://www.patreon.com/posts/massive-4k-woman-87700469)

5200 images for both man and woman. Perfect quality cropped and resized to many common resolutions.

![Regularization Images Dataset](https://miro.medium.com/v2/resize:fit:1225/1*-R_vx1C_FjdJceD6P6wSGA.png)

All training images and reg images were 1024x1024 pixels.

I used the 275 Fooocus amazing styles file to generate images with models so that I could pick later on.

You can find styles file (styles .csv) and styles file generator script here: [https://www.patreon.com/posts/all-amazing-of-95143823](https://www.patreon.com/posts/all-amazing-of-95143823)

I saved both After Detailer (ADetailer) before and after images. So some images are ADetailer used and some not. This is in settings panel to set both. For after detailer, I used 0.7 inpainting denoise and 80 steps manually set. Improves quality.

## Results

First, I will compare anime.

The png info as below. I used batch PNG info extractor to get them easier: [https://www.patreon.com/posts/batch-image-for-95176238](https://www.patreon.com/posts/batch-image-for-95176238)

```
parameters: picture of (ohwx man:1.1) with shirt in anime style, anime movie, anime cartoon, anime battle, muscular, anime screenshot
Negative prompt: shirtless,topless,nsfw
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 9, Seed: 1382869474, Size: 1024x1024, Model hash: f31347de70, Model: me_15_StarlightXLAnimatedV3_noREG-000030, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.5, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Script: X/Y/Z plot, X Type: Checkpoint name, X Values: "me_15_StarlightXLAnimatedV3_noREG-000030.safetensors [f31347de70],me15img\model\me_15_StarlightXLAnimatedV3-step00000901.safetensors [4610bf5599]", Version: v1.7.0-133-gde03882d
```

![Result 1](https://miro.medium.com/v2/resize:fit:1225/1*HObcAUg7rjf0nkfcetMHxQ.png)
![Result 2](https://miro.medium.com/v2/resize:fit:1225/1*EEV1bfSrjbkn3XfeOzeIbQ.png)
![Result 3](https://miro.medium.com/v2/resize:fit:1225/1*Pak_JZm0mx4evb20lVBzzA.png)
![Result 4](https://miro.medium.com/v2/resize:fit:1225/1*ubrD1XUZNV0ZJkmWta79EQ.png)
![Result 5](https://miro.medium.com/v2/resize:fit:1225/1*G87vZ-UTwJd1xDCGyvEEnw.png)

As you can see above, the regularization images affect is making it more like us. However, it reduced the stylization capability. It adds realism and more likeliness.

Now here second prompt compared. This one is realistic image instead of anime.

```
parameters: luxury product style portrait of ohwx man . elegant, sophisticated, high-end, luxurious, professional, highly detailed
Negative prompt: cheap, noisy, blurry, unattractive, amateurish
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 2811753849, Size: 1024x1024, Model hash: f31347de70, Model: me_15_StarlightXLAnimatedV3_noREG-000030, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetail
```
