
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Generative-AI/DreamBooth-Training-on-SDXL-Anime-Model-&-Comparing-Ground-Truth-Regularization-Images-Effect.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Generative-AI/DreamBooth-Training-on-SDXL-Anime-Model-&-Comparing-Ground-Truth-Regularization-Images-Effect.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

# DreamBooth Training on SDXL Anime Model & Comparing Ground Truth Regularization Images Effect

It was requested of me to test ground truth Regularization / Classification images effect during Stable Diffusion XL (SDXL) DreamBooth training.


So for this experimentation I have used an anime SDXL model name as : Starlight XL 星光 Animated V3.


I used the configuration I shared here currently. It has been discovered after 120 different full trainings experimentation : [https://www.patreon.com/posts/very-best-for-of-89213064](https://www.patreon.com/posts/very-best-for-of-89213064)


Hopefully I will make a full big tutorial of DreamBooth training and show all the settings.


For training Kohya SS GUI is used. If you don’t know how to install and use Kohya SS GUI here the tutorial you need &gt; [https://youtu.be/sBFGitIvD2A](https://youtu.be/sBFGitIvD2A)


And here is the tutorial that shows how to use shared configuration both on Windows and RunPod &gt; [https://www.youtube.com/watch?v=EEV8RPohsbw](https://www.youtube.com/watch?v=EEV8RPohsbw)


 


So I used the below images as training images dataset.


This training dataset is at best medium quality because it has repeating backgrounds, repeating clothing and missing fully body pose.


![](https://miro.medium.com/v2/resize:fit:1225/1*UDQgkWt1IevNLyUSCSx2aw.png)


Then for training configuration I did the following.


When training with regularization images, I did 1 epoch and 150 repeating. So more regularization images are used. And saved checkpoints at every 30 epochs. To make it that way calculate the number of steps you need to save. It is easy. 15 * 30 * 2 + 1


When training without regularization images, i set the repeating 1, trained up to 150 epochs and saved checkpoints at every 30 epoch. That is also why model names has different format. One has epoch number 1 has steps number.


I have used ultra high quality manually picked Unsplash real images having man dataset as regularization images dataset. This means they were ground truth regularization images like how Stable Diffusion was initially trained.


You can download dataset from &gt; [https://www.patreon.com/posts/massive-4k-woman-87700469](https://www.patreon.com/posts/massive-4k-woman-87700469)


5200 images for both man and woman. Perfect quality cropped and resized to many common resolutions.


![](https://miro.medium.com/v2/resize:fit:1225/1*-R_vx1C_FjdJceD6P6wSGA.png)


All training images and reg images were 1024x1024 pixels.


I used the 275 Fooocus amazing styles file to generate images with models so that I could pick later on.


You can find styles file (styles . csv) and styles file generator script here : [https://www.patreon.com/posts/all-amazing-of-95143823](https://www.patreon.com/posts/all-amazing-of-95143823)


I saved both After Detailer (ADetailer) before and after images. So some images are ADetailer used and some not. This is in settings panel to set both. For after detailer I used 0.7 inpainting denoise and 80 steps manually set. Improves quality.


And here the results.


First I will compare anime


The png info as below. I used batch PNG info extractor to get them easier : [https://www.patreon.com/posts/batch-image-for-95176238](https://www.patreon.com/posts/batch-image-for-95176238)
```

parameters: picture of (ohwx man:1.1) with shirt in anime style, anime movie, anime cartoon, anime battle, muscular, anime screenshot
Negative prompt: shirtless,topless,nsfw
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 9, Seed: 1382869474, Size: 1024x1024, Model hash: f31347de70, Model: me_15_StarlightXLAnimatedV3_noREG-000030, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.5, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Script: X/Y/Z plot, X Type: Checkpoint name, X Values: "me_15_StarlightXLAnimatedV3_noREG-000030.safetensors [f31347de70],me15img\\model\\me_15_StarlightXLAnimatedV3-step00000901.safetensors [4610bf5599]", Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*HObcAUg7rjf0nkfcetMHxQ.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*EEV1bfSrjbkn3XfeOzeIbQ.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*Pak_JZm0mx4evb20lVBzzA.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*ubrD1XUZNV0ZJkmWta79EQ.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*G87vZ-UTwJd1xDCGyvEEnw.png)


As you can see above, the regularization images affect is making it more like us. However, it reduced the stylization capability. It adds realism and more likeliness.


Now here second prompt compared. This one is realistic image instead of anime.
```

parameters: luxury product style portrait of ohwx man . elegant, sophisticated, high-end, luxurious, professional, highly detailed
Negative prompt: cheap, noisy, blurry, unattractive, amateurish
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 2811753849, Size: 1024x1024, Model hash: f31347de70, Model: me_15_StarlightXLAnimatedV3_noREG-000030, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Script: X/Y/Z plot, X Type: Checkpoint name, X Values: "me_15_StarlightXLAnimatedV3_noREG-000030.safetensors [f31347de70],me15img\\model\\me_15_StarlightXLAnimatedV3-step00000901.safetensors [4610bf5599]", Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*zB6keKjOvZTcbCiPvrgLig.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*kYP3_3Hl2LPAGMK55F2A0w.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*LM1yk79ZSu8aDEhxB-apDA.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*SejhSRJTVcXj9Nc-1cg8fg.png)


![](https://miro.medium.com/v2/resize:fit:1225/1*LLGXnkKWSgO6HPnJaTcnbg.png)


As can be seen above again, the reg images improved likeliness and realism quality.


And here some other good images I generated
```

parameters: retro game art portrait of ohwx man . 16-bit, vibrant colors, pixelated, nostalgic, charming, fun
Negative prompt: realistic, photorealistic, 35mm film, deformed, glitch, low contrast, noisy
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 2542262511, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*wTMMVAiuWkqli_VMAK0_5g.png)
```

parameters: breathtaking illustration from adult comic book presenting portrait of ohwx man. fabulous artwork. best quality, high resolution
Negative prompt: deformed, ugly, low quality, low resolution
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 427502473, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*6NcwwgeFIsG-GC-CFc5UaA.png)
```

parameters: closeshot picture of (ohwx man:1.1) wearing shirt, 3D render, 3D art, 3d character, muscular game, cgi, artstation 
Negative prompt: ugly, deformed, noisy, blurry, low contrast, grunge, sloppy, unkempt, photograph, photo, realistic, nsfw, shirtless, topless 
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 1171263453, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*UVDaZsEWJC6aaq96VQVuFw.png)
```

parameters: picture of (ohwx man:1.1) in Photorealistic chibi art style,   facing the viewers , artistic, artist, simple volumetric light background, swirling clouds, ColorART, many cute ghosts with tongues out, chibi,
Negative prompt: gaussian noise worst quality lowres oversaturated undersaturated overexposred underexposed grayscale bw bad photo bad photography bad art blur blurry grainy morbid ugly asymmetrical mutated malformed mutilated poorly lit bad shadow draft cropped out of frame cut off censored jpeg artifacts out of focus glitch duplicate pixelated soft focus color fringing overprocessed oversharpened
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 3576768970, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*1YIMqvwA_xQZCH6ZNIBJ5A.png)
```

parameters: portrait of (ohwx man:1.1), painting by sargent and rhads and leyendecker and greg hildebrandt evening sky
Negative prompt: gaussian noise worst quality lowres oversaturated undersaturated overexposed underexposed grayscale bw bad photo bad photography bad art blur blurry grainy morbid ugly asymmetrical mutated malformed mutilated poorly lit bad shadow draft cropped out of frame cut off censored jpeg artifacts out of focus glitch duplicate pixelated soft focus color fringing overprocessed oversharpened
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 1252309971, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*Bf8oHHLsHSaCqHbaV0Pc-g.png)
```

parameters: Watercolor style painting, portrait of ohwx man , visible paper texture, colorwash, watercolor
Negative prompt: ugly, deformed, noisy, blurry, low contrast, photo, realistic
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 3204333295, Size: 1024x1024, Model hash: 29bbb5ce43, Model: me_15_StarlightXLAnimatedV3-step00001802, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*0e4DPydK52pUJ1ClFX_OYg.png)
```

parameters: Flat 2D Art, portrait of ohwx man , simple flat color, 2-dimensional, Flat 2D Art Style
Negative prompt: ugly, deformed, noisy, blurry, low contrast, 3D, photo, realistic
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 998589366, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*qVvL9fFSWVmE-_zKWeLJwQ.png)
```

parameters: pixel-art portrait of ohwx man . low-res, blocky, pixel art style, 8-bit graphics
Negative prompt: sloppy, messy, blurry, noisy, highly detailed, ultra textured, photo, realistic
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 3068779067, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*VKlw88DpTNsIEKebLsqkJQ.png)
```

parameters: comic portrait of ohwx man . graphic illustration, comic art, graphic novel art, vibrant, highly detailed
Negative prompt: photograph, deformed, glitch, noisy, realistic, stock photo
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 2542262511, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, ADetailer model: face_yolov8n.pt, ADetailer confidence: 0.3, ADetailer mask only top k largest: 1, ADetailer dilate erode: 4, ADetailer mask blur: 4, ADetailer denoising strength: 0.7, ADetailer inpaint only masked: True, ADetailer inpaint padding: 32, ADetailer use separate steps: True, ADetailer steps: 80, ADetailer version: 23.11.1, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*H4xVJ6f5DG-JccGaS48P2Q.png)
```

parameters: breathtaking illustration from adult comic book presenting portrait of ohwx man. fabulous artwork. best quality, high resolution
Negative prompt: deformed, ugly, low quality, low resolution
Steps: 20, Sampler: DPM++ 2M SDE Karras, CFG scale: 7, Seed: 427502468, Size: 1024x1024, Model hash: f8f06f0d73, Model: me_15_StarlightXLAnimatedV3-step00002703, Version: v1.7.0-133-gde03882d
```


![](https://miro.medium.com/v2/resize:fit:1225/1*rN4rGvCVlVLAjLYTUyfhbg.png)
