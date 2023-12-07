
[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FGenerative-AI%2FPIXART-a-First-Open-Source-Rival-to-Midjourney-Better-Than-Stable-Diffusion-SDXL-Full-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


[**PIXART-α : First Open Source Rival to Midjourney - Better Than Stable Diffusion SDXL - Full Tutorial**](https://youtu.be/ZiUXf_idIR4)

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/NccIesCaYHEpKshYB-jF0.png)](https://youtu.be/ZiUXf_idIR4)

Introduction to the new PixArt-α (PixArt Alpha) text to image model which is for real better than Stable Diffusion models even from SDXL. PixArt-α is close to the Midjourney level meanwhile being open source and supporting full fine tuning and DreamBooth training. In this tutorial I show how to install and use PixArt-α both locally and on a cloud service RunPod with automatic installers and step by step guidance. 

The link to download resources ⤵️
https://www.patreon.com/posts/pixart-alpha-for-93614549

Stable Diffusion GitHub repository ⤵️
https://github.com/FurkanGozukara/Stable-Diffusion

SECourses Discord To Get Full Support ⤵️
https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

#PixArt #StableDiffusion #SDXL

0:00 Introduction to PixArt-α: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis and the tutorial content
* 2:38 What are the requirements to follow this tutorial and install PixArt Alpha
* 3:05 How to install PixArt Alpha on your machine and start using it
* 3:59 Where Hugging Face models are downloaded by default and how to change this default cache folder
* 5:44 How to return back to using default Hugging Face cache folder
* 6:08 How to fix corrupted files error during installation
* 6:29 How to start PixArt Web APP after installation has been completed 
* 7:24 How to use PixArt Web APP and its features
* 7:59 Comparing a dragon prompt with SDXL base version
* 8:14 How to use provided styles csv file
* 8:40 How to start Automatic1111 SD Web UI on your second GPU
* 8:50 Where the PixArt Web APP generated images are saved
* 9:30 How to set parameters in your Automatic1111 SD Web UI to generate high quality images
* 9:49 PixArt generated image vs SDXL generated image for same simple prompt
* 10:15 Anime style same prompt comparison
* 10:55 One another strong aspect of the PixArt Alpha model
* 11:29 Fantasy art style comparison of SDXL vs PixArt-α
* 11:52 3D style comparison of SDXL vs PixArt-α
* 12:16 Manga style image generation comparison between SDXL vs PixArt-α
* 12:44 Comparing PixArt vs SDXL vs Midjourney with same prompt
* 13:41 How to use LLaVA for captioning and obtaining prompt ideas and generating more amazing images
* 16:12 Comparison of PixArt vs SDXL prompt following in details
* 17:29 Getting prompt idea from ChatGPT and comparing SDXL and PixArt prompt following
* 19:46 PixArt owns hard the SDXL with this new detailed prompt
* 22:00 How to install PixArt on a RunPod pod / machine
* 23:54 How to set default Hugging Face cache folder on RunPod / Linux machines
* 25:05 How to understand RunPod machine / pod is not working correctly and fix it
* 26:00 How to properly delete files / folders on RunPod machines / pods
* 26:51 How to connect and use PixArt web UI on a RunPod machine after it was started
* 28:20 How to download all of the generated images on RunPod with runpodctl very fast

The paper introduces PIXART-α, a Transformer-based text-to-image (T2I) diffusion model designed to significantly lower training costs while maintaining high image generation quality, competitive with leading models like Imagen and Midjourney. It achieves high-resolution synthesis up to 1024x1024 pixels at reduced training costs.

Key Innovations:

Training Strategy Decomposition: The process is divided into three steps focusing on pixel dependency, text-image alignment, and image aesthetic quality. This approach reduces learning costs by starting with a low-cost class-condition model and then pretraining and fine-tuning on data rich in information density and aesthetic quality.

Efficient T2I Transformer: Built on the Diffusion Transformer (DiT) framework, it includes cross-attention modules for text conditions and streamlines computation. A reparameterization technique enables loading parameters from class-condition models, leveraging prior knowledge from ImageNet, thus accelerating training.

High-informative Data: To overcome deficiencies in existing text-image datasets, the paper introduces an auto-labeling pipeline using a vision-language model (LLaVA) to generate captions on the SAM dataset. This dataset is selected for its diverse collection of objects, aiding in creating high-information-density text-image pairs for efficient alignment learning.

Image Quality: The model excels in image quality, artistry, and semantic control, surpassing existing models in user studies and benchmarks.

Broader Implications: The paper suggests that PIXART-α's approach allows individual researchers and startups to develop high-quality T2I models at lower costs, potentially democratizing access to advanced AI-generated content.

The paper concludes with the hope that PIXART-α will inspire the AIGC community and enable more entities to build their own generative models efficiently and affordably.
