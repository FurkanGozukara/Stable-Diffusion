
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Generative-AI/Generate-Photos-Of-Yourself-In-Different-Cities-&-Different-Fancy-Suits-With-SDXL-DreamBooth-Training-For-Free.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Generative-AI/Generate-Photos-Of-Yourself-In-Different-Cities-&-Different-Fancy-Suits-With-SDXL-DreamBooth-Training-For-Free.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# Generate Photos Of Yourself In Different Cities & Different Fancy Suits With SDXL DreamBooth Training For Free


To train this model I have used Stable Diffusion XL (SDXL) 1.0 Base model. I still find base model best for realism.


I used the configuration I shared here currently. It has been discovered after 120 different full trainings experimentation : [https://www.patreon.com/posts/very-best-for-of-89213064](https://www.patreon.com/posts/very-best-for-of-89213064)


Hopefully I will make a full big tutorial of DreamBooth training and show all the settings.


For training Kohya SS GUI is used. If you don’t know how to install and use Kohya SS GUI here the tutorial you need &gt; [https://youtu.be/sBFGitIvD2A](https://youtu.be/sBFGitIvD2A)


And here is the tutorial that shows how to use shared configuration both on Windows and RunPod &gt; [https://www.youtube.com/watch?v=EEV8RPohsbw](https://www.youtube.com/watch?v=EEV8RPohsbw)


 


If you are <strong>not my Patreon supporter</strong> currently I have full public tutorial for LoRA training of SDXL that requires 12 GB VRAM &gt; [https://youtu.be/sBFGitIvD2A](https://youtu.be/sBFGitIvD2A)


If you don’t have a strong GPU and PC you can use Free Kaggle notebook for SDXL DreamBooth training &gt; [https://youtu.be/16-b1AjvyBE](https://youtu.be/16-b1AjvyBE)


So I used the below images as training images dataset.


This training dataset is at best medium quality because it has repeating backgrounds, repeating clothing and missing fully body pose. All these causes overtraining and lesser generalization.


![](https://miro.medium.com/v2/resize:fit:875/1*UDQgkWt1IevNLyUSCSx2aw.png)


Then for training configuration I did the following.


When training with regularization images, I did 1 epoch and 150 repeating. So more regularization images are used. And saved checkpoints at every 30 epochs. To make it that way calculate the number of steps you need to save. It is easy. 15 * 30 * 2 + 1


The images are generated from epoch 150 so it is a little bit overtrained.


I have used ultra high quality manually picked Unsplash real images having man dataset as regularization images dataset. This means they were ground truth regularization images like how Stable Diffusion was initially trained.


You can download dataset from &gt; [https://www.patreon.com/posts/massive-4k-woman-87700469](https://www.patreon.com/posts/massive-4k-woman-87700469)


5200 images for both man and woman. Perfect quality cropped and resized to many common resolutions.


![](https://miro.medium.com/v2/resize:fit:875/1*-R_vx1C_FjdJceD6P6wSGA.png)


All training images and reg images were 1024x1024 pixels.


Used dynamic prompting so multiple color suits are generated.


Used prompts are as below.


<strong>Positive</strong>
<blockquote>


ohwx:0.98 man slightly smiling wearing and wearing an expensive {red|blue|white|black|brown|gold} suit , photoshoot in a sunny day in a city , hd, hdr, uhd, 2k, 4k, 8k
</blockquote>


<strong>Negative</strong>
<blockquote>


sunglasses, illustration, 3d, 2d, painting, cartoons, sketch, squinting eyes, blurry
</blockquote>


In the after detailer (ADetailer) the following settings are used.


<strong>Prompt</strong>
<blockquote>


photo of ohwx man slightly smiling
</blockquote>


0.7 denoiose and 29 steps. Rest are default.


Here below full png info
```

parameters

ohwx:0.98 man slightly smiling wearing and wearing an expensive gold suit , photoshoot in a sunny day in a city , hd, hdr, uhd, 2k, 4k, 8k,
Negative prompt: sunglasses, illustration, 3d, 2d, painting, cartoons, sketch, squinting eyes, blurry
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 744692608, Size: 1024x1024, Model hash: eef545047f, Model: me15img_150repeat, ADetailer model: face_yolov8n.pt, ADetailer prompt: photo of ohwx man slightly smiling, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 29, ADetailer version: 23.11.1, Version: v1.7.0-133-gde03882d
```


And here the results.


![](https://miro.medium.com/v2/resize:fit:1250/1*7idf6CZGiVg21H6O2C9Ofw.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*Y0JGf84Zh-rg3a1owE_EeQ.png)


![](https://miro.medium.com/v2/resize:fit:875/1*SqZUJzvGPUGuryN0d4Px1Q.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*22lVY7NTwo6Em4MAH9RarQ.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*dEXz0t6sTuhdA2wWZixb0w.png)


![](https://miro.medium.com/v2/resize:fit:875/1*jgKHdPNBhrNcTHpzJJKxRA.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*DEJcGIttQEDiXYb93Hek-A.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*qlKvNKLuSzgaNoqr52cbRg.png)


![](https://miro.medium.com/v2/resize:fit:875/1*nF6NZFAWSJds1oIeN2NHJg.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*kS40t5dCLuoiHlD39UwU9w.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*cwDn9qg6Eiz0Xxoy5ZbpmA.png)


![](https://miro.medium.com/v2/resize:fit:875/1*9ZKzt8nYnqmUWSktm9DiXg.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*J5I6Sgw6BA8MnAcLasV-Tg.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*39V5pbNnnbfR6YsptQqE4A.png)


![](https://miro.medium.com/v2/resize:fit:875/1*sk_hwsMXobf4hKtiXVXvfQ.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*W4rCZmhOopCiMaUIue-7YA.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*FeR_T8D6ZCsVWzArupKN8g.png)


![](https://miro.medium.com/v2/resize:fit:875/1*1w4pyNPQZedd6bpE4q2QCg.png)


![](https://miro.medium.com/v2/resize:fit:1250/1*DYD3FncK1JJEEvbALcHNMQ.png)


![](https://miro.medium.com/v2/resize:fit:875/1*89CZzxVAG9wE6k9TlEq12w.png)
