# BF16 vs GGUF, FP8 Scaled, NVFP4 Speed & Quality Compared + ComfyUI CUDA 13 Gains + FLUX 2 Klein 9B

## Full tutorial link > https://www.youtube.com/watch?v=XDzspWgnzxI

[![BF16 vs GGUF, FP8 Scaled, NVFP4 Speed & Quality Compared + ComfyUI CUDA 13 Gains + FLUX 2 Klein 9B](https://img.youtube.com/vi/XDzspWgnzxI/sddefault.jpg)](https://www.youtube.com/watch?v=XDzspWgnzxI "BF16 vs GGUF, FP8 Scaled, NVFP4 Speed & Quality Compared + ComfyUI CUDA 13 Gains + FLUX 2 Klein 9B")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/BF16-vs-GGUF-FP8-Scaled-NVFP4-Speed-and-Quality-Compared-ComfyUI-CUDA-13-Gains-FLUX-2-Klein-9B.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/BF16-vs-GGUF-FP8-Scaled-NVFP4-Speed-and-Quality-Compared-ComfyUI-CUDA-13-Gains-FLUX-2-Klein-9B.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


It was always wondered how much quality and speed difference exists between BF16, GGUF, FP8 Scaled and NVFP4 precisions. In this tutorial I have compared all these precision and quantization variants for both speed and quality. The results are pretty surprising. Moreover, we have developed and published NVFP4 model quant generator app and FP8 Scaled quant generator apps. The links of the apps are below if you want to use them. Furthermore, upgrading ComfyUI to CUDA 13 with properly compiled libraries is now very much recommended. We have observed some noticeable performance gains with CUDA 13. So for both SwarmUI and ComfyUI solo users, CUDA 13 ComfyUI is now recommended.

📂 Resources & Links:

📥 Download ComfyUI CUDA 13 Installer: [ [https://www.patreon.com/posts/ComfyUI-Installers-105023709](https://www.patreon.com/posts/ComfyUI-Installers-105023709) ]

📥 SwarmUI & ComfyUI Unified Model Downloader: [ [https://www.patreon.com/posts/SwarmUI-Install-Download-Models-Presets-114517862](https://www.patreon.com/posts/SwarmUI-Install-Download-Models-Presets-114517862) ]

🤖 NVFP4 Model Quantizer App: [ [https://www.patreon.com/posts/nvfp4-quantizer-app-148217625](https://www.patreon.com/posts/nvfp4-quantizer-app-148217625) ]

🤖 SECourses Musubi Trainer (FP8 Scaled Quantization App): [ [https://www.patreon.com/posts/nvfp4-quantizer-app-148217625](https://www.patreon.com/posts/nvfp4-quantizer-app-148217625)  ]

🛠️ Image Comparison Slider Tool: [ [https://www.patreon.com/posts/image-video-comparison-slider-app-133935178](https://www.patreon.com/posts/image-video-comparison-slider-app-133935178) ]

☁️ SimplePod AI: [ [https://simplepod.ai/ref?user=secourses](https://simplepod.ai/ref?user=secourses) ]

New Model FLUX 2 Klein 9B: [ [https://huggingface.co/black-forest-labs/FLUX.2-klein-9B](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B) ]

🎥 FLUX 1 Kontext Dev Tutorial (inpaint - outpaint - image fix): [ [https://youtu.be/XWzZ2wnzNuQ](https://youtu.be/XWzZ2wnzNuQ) ]

🎥 Previous ComfyUI Installation Tutorial: [ [https://youtu.be/yOj9PYq3XYM](https://youtu.be/yOj9PYq3XYM) ]

How to Use SwarmUI Presets & Workflows in ComfyUI + Custom Model Paths Setup for ComfyUI & SwarmUI Tutorial: [ [https://youtu.be/EqFilBM3i7s](https://youtu.be/EqFilBM3i7s) ]

SECourses Discord Channel for 7/24 Support: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

SECourses Musubi Tuner Tutorial: [ [https://youtu.be/DPX3eBTuO_Y](https://youtu.be/DPX3eBTuO_Y) ]

NVIDIA NVFP4 Blog Post to learn More: [ [https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/](https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/) ]

⏱️ Video Chapters:

[00:00:00](https://youtu.be/XDzspWgnzxI?t=0) Introduction: GGUF Q8 vs NVFP4 vs BF16 vs FP8 Precision Comparison

[00:00:38](https://youtu.be/XDzspWgnzxI?t=38) FP8 Quantization & New NVFP4 Model Quantizer App in Musubi Trainer

[00:01:08](https://youtu.be/XDzspWgnzxI?t=68) The New FLUX SRPO Mixed NVFP4 Model & FLUX 2 Klein 9B Announcement

[00:01:56](https://youtu.be/XDzspWgnzxI?t=116) Speed Comparison Setup: ComfyUI CUDA 13 & Compiled Libraries

[00:02:41](https://youtu.be/XDzspWgnzxI?t=161) Z Image Turbo Speed Test: GGUF Q8 vs NVFP4 (87% Faster)

[00:03:09](https://youtu.be/XDzspWgnzxI?t=189) Z Image Turbo Speed Test: BF16 vs FP8 Scaled vs GGUF Improvements

[00:03:32](https://youtu.be/XDzspWgnzxI?t=212) Installing & Using Image Comparison Slider Tool for Quality Check

[00:03:55](https://youtu.be/XDzspWgnzxI?t=235) Z Image Turbo Quality: BF16 vs GGUF Q8 vs FP8 Scaled

[00:04:13](https://youtu.be/XDzspWgnzxI?t=253) Z Image Turbo Quality: NVFP4 Degradation Analysis

[00:04:27](https://youtu.be/XDzspWgnzxI?t=267) FLUX 2 Dev Speed Test: GGUF Q8 vs NVFP4 (100% Faster)

[00:04:43](https://youtu.be/XDzspWgnzxI?t=283) FLUX 2 Dev Speed Test: FP8 Scaled vs BF16 Performance

[00:05:12](https://youtu.be/XDzspWgnzxI?t=312) FLUX 2 Dev Quality: BF16 vs GGUF Q8 vs Mixed FP8 Scaled

[00:05:38](https://youtu.be/XDzspWgnzxI?t=338) FLUX 2 Dev Quality: NVFP4 Mixed Precision Analysis

[00:05:54](https://youtu.be/XDzspWgnzxI?t=354) Benchmark Settings: 2048px Resolution & Quality 1 Preset Details

[00:06:25](https://youtu.be/XDzspWgnzxI?t=385) FLUX 1 Dev Speed Test: GGUF Q8 vs NVFP4 (118% Faster)

[00:07:21](https://youtu.be/XDzspWgnzxI?t=441) FLUX 1 Dev Speed Test: BF16 & FP8 Scaled Performance Stats

[00:07:42](https://youtu.be/XDzspWgnzxI?t=462) FLUX 1 Dev Quality: BF16 vs GGUF Q8 vs FP8 Scaled

[00:07:55](https://youtu.be/XDzspWgnzxI?t=475) FLUX 1 Dev Quality: NVFP4 Visual Degradation Review

[00:08:06](https://youtu.be/XDzspWgnzxI?t=486) FLUX 1 Kontext Dev: Model Intro & Outpainting Tutorial Reference

[00:08:40](https://youtu.be/XDzspWgnzxI?t=520) FLUX 1 Kontext Dev Speed: GGUF Q8 vs NVFP4 (93% Faster)

[00:08:59](https://youtu.be/XDzspWgnzxI?t=539) FLUX 1 Kontext Dev Speed: BF16 & FP8 Scaled Comparisons

[00:09:12](https://youtu.be/XDzspWgnzxI?t=552) FLUX 1 Kontext Dev Quality: Original vs Edited Image (Hair Change)

[00:09:36](https://youtu.be/XDzspWgnzxI?t=576) FLUX 1 Kontext Dev Quality: BF16 vs GGUF Q8 vs FP8 Scaled

[00:09:51](https://youtu.be/XDzspWgnzxI?t=591) How to Use SwarmUI Unified Model Downloader & Bundles

[00:10:36](https://youtu.be/XDzspWgnzxI?t=636) Downloading Models via URL from CivitAI & Hugging Face to Cloud

[00:11:45](https://youtu.be/XDzspWgnzxI?t=705) SECourses Musubi Trainer: Creating Custom FP8 Quantized Models

[00:12:44](https://youtu.be/XDzspWgnzxI?t=764) The New FLUX SRPO NVFP4 Mixed Precision Model Overview

[00:13:15](https://youtu.be/XDzspWgnzxI?t=795) Live Demo: FLUX SRPO NVFP4 Speed Test on RTX 5090 (5.7s)

[00:13:52](https://youtu.be/XDzspWgnzxI?t=832) VRAM Usage Analysis: NVFP4 on RTX 5090 (14GB Usage)

[00:14:16](https://youtu.be/XDzspWgnzxI?t=856) Live Comparison: BF16 Speed & VRAM Test on RTX 5090

[00:15:15](https://youtu.be/XDzspWgnzxI?t=915) Troubleshooting: Fixing Low RAM/VRAM Issues with Arguments

[00:16:25](https://youtu.be/XDzspWgnzxI?t=985) Why You Should Upgrade to ComfyUI CUDA 13 Version

[00:16:51](https://youtu.be/XDzspWgnzxI?t=1011) SimplePod AI: Updated Instructions & Template Setup

[00:17:29](https://youtu.be/XDzspWgnzxI?t=1049) RTX 6000 Blackwell Fix & nvitop Utilization Verification

[00:18:18](https://youtu.be/XDzspWgnzxI?t=1098) Conclusion, Contact Info & Support Channels

In this video, you will learn:

Speed differences between GGUF Q8, NVFP4, BF16, and FP8.

Visual quality analysis using the Image Comparison Slider.

How to use the new NVFP4 and FP8 Quantizer tools.

How to fix Low VRAM/RAM issues with specific arguments.

Performance benchmarks on RTX 5090 and RTX 6000.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=XDzspWgnzxI&t=0) Greetings everyone. Today I am going to make&nbsp; comparison of the performance for the GGUF Q8,&nbsp;&nbsp;

- [00:00:08](https://www.youtube.com/watch?v=XDzspWgnzxI&t=8) NVFP4, BF16, and FP8 scaled precisions&nbsp; for the Z Image Turbo, FLUX 2 Dev,&nbsp;&nbsp;

- [00:00:18](https://www.youtube.com/watch?v=XDzspWgnzxI&t=18) FLUX 1 Dev, FLUX 1 Kontext Dev models. Moreover,&nbsp; I will compare their quality 1 by 1, side by side,&nbsp;&nbsp;

- [00:00:25](https://www.youtube.com/watch?v=XDzspWgnzxI&t=25) so you will see how much quality degrades or&nbsp; changes between these precisions. Moreover,&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=XDzspWgnzxI&t=32) I will show how you can download&nbsp; them and I will talk about my FP8&nbsp;&nbsp;

- [00:00:38](https://www.youtube.com/watch?v=XDzspWgnzxI&t=38) quantization application implemented into&nbsp; SECourses Musubi Trainer. And furthermore,&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=XDzspWgnzxI&t=45) my new NVFP4 model quantizer application.&nbsp; To develop this application, I did spend&nbsp;&nbsp;

- [00:00:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=52) massive amount of time and money. I have used&nbsp; the SimplePod RTX PRO 6000 GPU over a 1 day to&nbsp;&nbsp;

- [00:01:02](https://www.youtube.com/watch?v=XDzspWgnzxI&t=62) make this application work. This was not a&nbsp; trivial task. However, as a result, we got&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=XDzspWgnzxI&t=68) an amazing FLUX SRPO mixed NVFP4 model. You will&nbsp; see how quality it is and how much faster it is.

- [00:01:16](https://www.youtube.com/watch?v=XDzspWgnzxI&t=76) Moreover, FLUX just published a new model called&nbsp; as FLUX 2 Klein 9 billion parameters. Hopefully,&nbsp;&nbsp;

- [00:01:24](https://www.youtube.com/watch?v=XDzspWgnzxI&t=84) I will also cover this model. This model&nbsp; is supposed to be better trainable and&nbsp;&nbsp;

- [00:01:30](https://www.youtube.com/watch?v=XDzspWgnzxI&t=90) since it is much smaller compared to the&nbsp; official FLUX 2, it will work much faster.&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=XDzspWgnzxI&t=97) I hope the quality is amazing so that we can&nbsp; start using this model as well. Hopefully,&nbsp;&nbsp;

- [00:01:42](https://www.youtube.com/watch?v=XDzspWgnzxI&t=102) I will cover it fully with presets, with 1&nbsp; click downloads. You see the BF16 is only&nbsp;&nbsp;

- [00:01:47](https://www.youtube.com/watch?v=XDzspWgnzxI&t=107) 18 GB. FLUX 2 was 60 GB as a BF16. So this is&nbsp; another model, a tutorial is coming hopefully.

- [00:01:56](https://www.youtube.com/watch?v=XDzspWgnzxI&t=116) So let's begin with the speed differences.&nbsp; To obtain these speeds you need to install&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=XDzspWgnzxI&t=122) ComfyUI CUDA 13 version. Our ComfyUI installer&nbsp; already updated for CUDA 13 version with the&nbsp;&nbsp;

- [00:02:09](https://www.youtube.com/watch?v=XDzspWgnzxI&t=129) latest libraries. I have compiled every one&nbsp; of them myself for you. My compiled libraries,&nbsp;&nbsp;

- [00:02:16](https://www.youtube.com/watch?v=XDzspWgnzxI&t=136) Flash Attention, Sage Attention, xFormers,&nbsp; are compiled for these CUDA archs. Therefore,&nbsp;&nbsp;

- [00:02:22](https://www.youtube.com/watch?v=XDzspWgnzxI&t=142) they are working for every GPU out&nbsp; there that you can think of. If you&nbsp;&nbsp;

- [00:02:26](https://www.youtube.com/watch?v=XDzspWgnzxI&t=146) have watched my latest tutorial, you&nbsp; will learn how to install and use this&nbsp;&nbsp;

- [00:02:31](https://www.youtube.com/watch?v=XDzspWgnzxI&t=151) latest ComfyUI version. The link will&nbsp; be in the description of the video.

- [00:02:34](https://www.youtube.com/watch?v=XDzspWgnzxI&t=154) So let's begin with the speed comparison.&nbsp; The first model is Z Image Turbo and GGUF Q8&nbsp;&nbsp;

- [00:02:41](https://www.youtube.com/watch?v=XDzspWgnzxI&t=161) speed is 2.26 IT per second. This is for 1536 to&nbsp; 1536 pixel image generation. When we look at the&nbsp;&nbsp;

- [00:02:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=172) NVFP4 variant precision, it becomes 4.23 IT per&nbsp; second. It is 87 percentage faster compared to the&nbsp;&nbsp;

- [00:03:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=181) GGUF Q8. The BF16 version is only 10 percentage&nbsp; faster. I saw a significant speed up with the CUDA&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=XDzspWgnzxI&t=189) 13 version for GGUF models so the ComfyUI team is&nbsp; cooking. They are improving the GGUF significantly&nbsp;&nbsp;

- [00:03:17](https://www.youtube.com/watch?v=XDzspWgnzxI&t=197) and you need CUDA 13 version for this one. With&nbsp; the FP8 scaled, it is only 7 percentage faster&nbsp;&nbsp;

- [00:03:24](https://www.youtube.com/watch?v=XDzspWgnzxI&t=204) than the GGUF Q8. So the GGUF is becoming much&nbsp; faster compared to before for Z Image Turbo.

- [00:03:32](https://www.youtube.com/watch?v=XDzspWgnzxI&t=212) What about the quality? For quality comparison, I&nbsp; am going to use image comparison slider. You can&nbsp;&nbsp;

- [00:03:37](https://www.youtube.com/watch?v=XDzspWgnzxI&t=217) download it from here and install. Installation&nbsp; is so simple. All you need to do is install&nbsp;&nbsp;

- [00:03:43](https://www.youtube.com/watch?v=XDzspWgnzxI&t=223) update up .bat file then start image comparison&nbsp; .bat file. The link will be in the description&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=XDzspWgnzxI&t=229) of the video. So I have selected my files. Let's&nbsp; full screen. On the left we see the BF16 version,&nbsp;&nbsp;

- [00:03:55](https://www.youtube.com/watch?v=XDzspWgnzxI&t=235) the highest quality. And on the right now&nbsp; we see the GGUF Q8. You see the GGUF Q8&nbsp;&nbsp;

- [00:04:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=241) is almost same as BF16. There isn't visible&nbsp; quality degradation so it is working amazing.&nbsp;&nbsp;

- [00:04:07](https://www.youtube.com/watch?v=XDzspWgnzxI&t=247) When we switch to FP8 scaled, the quality is&nbsp; still very good. We don't see quality degrade,&nbsp;&nbsp;

- [00:04:13](https://www.youtube.com/watch?v=XDzspWgnzxI&t=253) almost same quality. When we look at the NVFP4,&nbsp; we see some quality degrade for the Z Image&nbsp;&nbsp;

- [00:04:20](https://www.youtube.com/watch?v=XDzspWgnzxI&t=260) Turbo. Maybe a better variant, a better version&nbsp; of the NVFP4 will be published. We will see that.

- [00:04:27](https://www.youtube.com/watch?v=XDzspWgnzxI&t=267) Let's look at the FLUX 2 Dev version. With the&nbsp; FLUX 2 Dev version, the GGUF Q8 is very slow,&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=XDzspWgnzxI&t=275) 7.97 second IT. When we look at the NVFP4,&nbsp; it is 100 percentage faster compared to&nbsp;&nbsp;

- [00:04:43](https://www.youtube.com/watch?v=XDzspWgnzxI&t=283) the GGUF Q8. The FP8 scaled version is still&nbsp; significantly faster than the GGUF Q8. Therefore,&nbsp;&nbsp;

- [00:04:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=292) you should use the FP8 scaled variants for&nbsp; FLUX 2. There is a massive difference. And&nbsp;&nbsp;

- [00:04:57](https://www.youtube.com/watch?v=XDzspWgnzxI&t=297) BF16 version is also slow even though I have&nbsp; did test on RTX 6000 PRO. So for FLUX 2 Dev,&nbsp;&nbsp;

- [00:05:06](https://www.youtube.com/watch?v=XDzspWgnzxI&t=306) I recommend either NVFP4 or FP8 scaled. Let's&nbsp; look at the quality difference. So these are&nbsp;&nbsp;

- [00:05:12](https://www.youtube.com/watch?v=XDzspWgnzxI&t=312) the images. Now on the left we see the BF16 and on&nbsp; the right we see the GGUF Q8. Almost same image,&nbsp;&nbsp;

- [00:05:20](https://www.youtube.com/watch?v=XDzspWgnzxI&t=320) there is no quality degrade. When&nbsp; we look at the mixed FP8 scaled,&nbsp;&nbsp;

- [00:05:24](https://www.youtube.com/watch?v=XDzspWgnzxI&t=324) we see almost same quality. Mixed means&nbsp; that some of the layers of the model is&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=XDzspWgnzxI&t=331) not quantized. So they are BF16 precision&nbsp; in this case. So it is almost same quality,&nbsp;&nbsp;

- [00:05:38](https://www.youtube.com/watch?v=XDzspWgnzxI&t=338) really cool. When we look at the NVFP4, we see&nbsp; some degrade in quality but still very good.&nbsp;&nbsp;

- [00:05:45](https://www.youtube.com/watch?v=XDzspWgnzxI&t=345) Still perfectly usable. Therefore, you can use the&nbsp; NVFP4 variant for the FLUX 2 Dev model. Amazing.

- [00:05:54](https://www.youtube.com/watch?v=XDzspWgnzxI&t=354) Before we move to the FLUX 1 Dev variant,&nbsp; I need to tell you that I have generated&nbsp;&nbsp;

- [00:05:58](https://www.youtube.com/watch?v=XDzspWgnzxI&t=358) with 2048 pixel resolution and Quality&nbsp; 1 preset. Our Quality 1 preset is using&nbsp;&nbsp;

- [00:06:07](https://www.youtube.com/watch?v=XDzspWgnzxI&t=367) heavy sampler, seeds 2. Therefore,&nbsp; it is 2x slow. It also applies to&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=XDzspWgnzxI&t=372) our Z Image Turbo and other presets as&nbsp; well. I am usually using heavy sampler,&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=XDzspWgnzxI&t=378) therefore they are twice slower. So these&nbsp; tests are made with the best quality.

- [00:06:25](https://www.youtube.com/watch?v=XDzspWgnzxI&t=385) So with the FLUX 1 Dev variant, we see GGUF&nbsp; Q8 is 3.54 IT per second. You need to think&nbsp;&nbsp;

- [00:06:33](https://www.youtube.com/watch?v=XDzspWgnzxI&t=393) about the relative speeds, not the exact speeds&nbsp; because exact speeds depends on your resolution,&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=XDzspWgnzxI&t=399) your preset, your GPU. However, relative&nbsp; speeds are valid for same GPU. I have done&nbsp;&nbsp;

- [00:06:46](https://www.youtube.com/watch?v=XDzspWgnzxI&t=406) the tests on SimplePod AI and for every test I&nbsp; did generate multiple images because the initial&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=XDzspWgnzxI&t=413) image is slow and subsequent images will be&nbsp; faster generation. And in the debug menu,&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=XDzspWgnzxI&t=420) I looked the final second IT or IT per&nbsp; second and the duration. This is how I&nbsp;&nbsp;

- [00:07:06](https://www.youtube.com/watch?v=XDzspWgnzxI&t=426) have calculated the durations. So when we&nbsp; look at the NVFP4, it is 118 percent faster&nbsp;&nbsp;

- [00:07:14](https://www.youtube.com/watch?v=XDzspWgnzxI&t=434) than the GGUF Q8. Massive speed difference.&nbsp; BF16 is still 28 percentage faster than the&nbsp;&nbsp;

- [00:07:21](https://www.youtube.com/watch?v=XDzspWgnzxI&t=441) GGUF and FP8 scaled is still 19 percentage&nbsp; faster than GGUF. So for FLUX Dev model,&nbsp;&nbsp;

- [00:07:28](https://www.youtube.com/watch?v=XDzspWgnzxI&t=448) use FP8 scaled or NVFP4 if you are slow, but&nbsp; not GGUF. GGUF is still slow for FLUX Dev.

- [00:07:36](https://www.youtube.com/watch?v=XDzspWgnzxI&t=456) Let's look at the quality of the FLUX Dev&nbsp; model. So the left one is BF16 and the&nbsp;&nbsp;

- [00:07:42](https://www.youtube.com/watch?v=XDzspWgnzxI&t=462) right one is now GGUF. GGUF is almost same as&nbsp; the BF16. But when we look at the FP8 scaled,&nbsp;&nbsp;

- [00:07:50](https://www.youtube.com/watch?v=XDzspWgnzxI&t=470) just a little bit difference, still very&nbsp; good quality. Can be perfectly used. However,&nbsp;&nbsp;

- [00:07:55](https://www.youtube.com/watch?v=XDzspWgnzxI&t=475) when we look at the NVFP4, we see&nbsp; some degrade in quality. It is a&nbsp;&nbsp;

- [00:08:00](https://www.youtube.com/watch?v=XDzspWgnzxI&t=480) noticeable quality degrade. So it is up&nbsp; to you to use or not, you can test it.

- [00:08:06](https://www.youtube.com/watch?v=XDzspWgnzxI&t=486) So let's also look at the FLUX Kontext&nbsp; Dev model speed differences and quality&nbsp;&nbsp;

- [00:08:11](https://www.youtube.com/watch?v=XDzspWgnzxI&t=491) differences. This is editing model. If you don't&nbsp; know how to use this model or what it does,&nbsp;&nbsp;

- [00:08:16](https://www.youtube.com/watch?v=XDzspWgnzxI&t=496) I have an excellent tutorial for it. The link will&nbsp; be in the description of the video. This tutorial,&nbsp;&nbsp;

- [00:08:21](https://www.youtube.com/watch?v=XDzspWgnzxI&t=501) when you open this tutorial and&nbsp; when you look at the video chapters,&nbsp;&nbsp;

- [00:08:26](https://www.youtube.com/watch?v=XDzspWgnzxI&t=506) you will see how to do outpainting, how&nbsp; to use FLUX Kontext to fix images and&nbsp;&nbsp;

- [00:08:31](https://www.youtube.com/watch?v=XDzspWgnzxI&t=511) more information. This is a really good&nbsp; tutorial. So I recommend you to watch&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=XDzspWgnzxI&t=515) this tutorial as well if you don't know&nbsp; how to use this FLUX Kontext Dev model.

- [00:08:40](https://www.youtube.com/watch?v=XDzspWgnzxI&t=520) So we see that GGUF Q8 speed is 1.83 IT per&nbsp; second. The NVFP4 is 93 percentage faster than&nbsp;&nbsp;

- [00:08:50](https://www.youtube.com/watch?v=XDzspWgnzxI&t=530) GGUF Q8. BF16 is 14 percentage faster than&nbsp; GGUF and FP8 scaled is almost same as GGUF,&nbsp;&nbsp;

- [00:08:59](https://www.youtube.com/watch?v=XDzspWgnzxI&t=539) only 9 percentage faster. So you can use GGUF&nbsp; or FP8 scaled for this model. NVFP4 is very&nbsp;&nbsp;

- [00:09:06](https://www.youtube.com/watch?v=XDzspWgnzxI&t=546) fast. But what about the quality difference? So&nbsp; let's select the files. This is how you select&nbsp;&nbsp;

- [00:09:12](https://www.youtube.com/watch?v=XDzspWgnzxI&t=552) multiple files. And let's full screen. Okay,&nbsp; on the left we see the original image and on&nbsp;&nbsp;

- [00:09:17](https://www.youtube.com/watch?v=XDzspWgnzxI&t=557) the right we see the Kontext Edit image. So I&nbsp; changed my hair, I made it longer. This was the&nbsp;&nbsp;

- [00:09:24](https://www.youtube.com/watch?v=XDzspWgnzxI&t=564) prompt. You see the face is almost not changed,&nbsp; very good. Only the hair is changed. This is the&nbsp;&nbsp;

- [00:09:29](https://www.youtube.com/watch?v=XDzspWgnzxI&t=569) test case. So let's select BF16 and GGUF Q8. We&nbsp; almost don't see any difference. It is almost&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=XDzspWgnzxI&t=576) unnoticeable. When we look at the FP8 scaled,&nbsp; still very good quality, almost no noticeable&nbsp;&nbsp;

- [00:09:43](https://www.youtube.com/watch?v=XDzspWgnzxI&t=583) difference. And this FP8 quant scaled is a&nbsp; model that I have generated myself. It is in our&nbsp;&nbsp;

- [00:09:51](https://www.youtube.com/watch?v=XDzspWgnzxI&t=591) downloader application. If you don't know how to&nbsp; use our downloader application, it is so simple.&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=XDzspWgnzxI&t=596) You download the latest SwarmUI model downloader&nbsp; SwarmUI installer from this post. Extract it into&nbsp;&nbsp;

- [00:10:03](https://www.youtube.com/watch?v=XDzspWgnzxI&t=603) your SwarmUI installation folder. Then just double&nbsp; click Windows start download models up .bat file.&nbsp;&nbsp;

- [00:10:10](https://www.youtube.com/watch?v=XDzspWgnzxI&t=610) Then you will get to this screen. You can give&nbsp; your custom model paths, you can download anywhere&nbsp;&nbsp;

- [00:10:15](https://www.youtube.com/watch?v=XDzspWgnzxI&t=615) you want. We have image bundles. You see NVFP4&nbsp; images bundle, Z Image Turbo models core bundle,&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=XDzspWgnzxI&t=622) FLUX models core bundle. You can download&nbsp; every file individually or as a bundle.

- [00:10:28](https://www.youtube.com/watch?v=XDzspWgnzxI&t=628) One another thing is that downloading models on&nbsp; cloud machines are much harder than downloading&nbsp;&nbsp;

- [00:10:36](https://www.youtube.com/watch?v=XDzspWgnzxI&t=636) and using on our computer. Therefore, our unified&nbsp; model downloader also supports URL downloader so&nbsp;&nbsp;

- [00:10:42](https://www.youtube.com/watch?v=XDzspWgnzxI&t=642) that you can download models from CivitAI, from&nbsp; Hugging Face or any other platform. Just paste&nbsp;&nbsp;

- [00:10:49](https://www.youtube.com/watch?v=XDzspWgnzxI&t=649) the link here and select the folder wherever&nbsp; you want to download. Then it will download&nbsp;&nbsp;

- [00:10:55](https://www.youtube.com/watch?v=XDzspWgnzxI&t=655) it with maximum speed with hash calculation,&nbsp; hash verification. For example, as a demo,&nbsp;&nbsp;

- [00:11:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=661) let's download this model. So I will right click&nbsp; and copy link address of this model and paste it&nbsp;&nbsp;

- [00:11:07](https://www.youtube.com/watch?v=XDzspWgnzxI&t=667) here and I will download it into here. Then I will&nbsp; click download. It will start the download with&nbsp;&nbsp;

- [00:11:15](https://www.youtube.com/watch?v=XDzspWgnzxI&t=675) maximum speed of my internet connection. You see&nbsp; it is downloading with 16 connection. Therefore,&nbsp;&nbsp;

- [00:11:21](https://www.youtube.com/watch?v=XDzspWgnzxI&t=681) I am reaching 100 megabytes per second on my&nbsp; personal Windows computer. On cloud you can&nbsp;&nbsp;

- [00:11:27](https://www.youtube.com/watch?v=XDzspWgnzxI&t=687) reach to 1 gigabytes per second. This download&nbsp; tool is extremely useful if you want to use it.&nbsp;&nbsp;

- [00:11:33](https://www.youtube.com/watch?v=XDzspWgnzxI&t=693) You can search for the files from here like&nbsp; "Kontext" and it will list me all the files.&nbsp;&nbsp;

- [00:11:39](https://www.youtube.com/watch?v=XDzspWgnzxI&t=699) You see FLUX Kontext Dev quantized model.&nbsp; And to make this quantization we are using&nbsp;&nbsp;

- [00:11:45](https://www.youtube.com/watch?v=XDzspWgnzxI&t=705) SECourses Musubi Trainer application. The link&nbsp; will be in the description of the video. And we&nbsp;&nbsp;

- [00:11:50](https://www.youtube.com/watch?v=XDzspWgnzxI&t=710) have a full tutorial of how to use SECourses&nbsp; Musubi Trainer. It is in this tutorial so you&nbsp;&nbsp;

- [00:11:55](https://www.youtube.com/watch?v=XDzspWgnzxI&t=715) can also watch this or Wan 2.2 training tutorial.&nbsp; Either of them works. So this application has&nbsp;&nbsp;

- [00:12:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=721) FP8 model converter. Normally we were using&nbsp; Musubi style but I have recently added quant&nbsp;&nbsp;

- [00:12:09](https://www.youtube.com/watch?v=XDzspWgnzxI&t=729) version. This is much more advanced. It is&nbsp; using specific quantization. This is how I&nbsp;&nbsp;

- [00:12:15](https://www.youtube.com/watch?v=XDzspWgnzxI&t=735) generated this amazing FLUX Kontext Dev Quant&nbsp; FP8 scaled. I used that also to generate FLUX&nbsp;&nbsp;

- [00:12:22](https://www.youtube.com/watch?v=XDzspWgnzxI&t=742) Dev Quant FP8 scaled. These are myself generated&nbsp; models. They are available in our downloader.

- [00:12:30](https://www.youtube.com/watch?v=XDzspWgnzxI&t=750) So we don't see any quality difference. It is&nbsp; amazing quality, almost as BF16. And when we&nbsp;&nbsp;

- [00:12:36](https://www.youtube.com/watch?v=XDzspWgnzxI&t=756) look at the NVFP4, NVFP4 also did amazing job. It&nbsp; is still very good quality so perfectly usable.&nbsp;&nbsp;

- [00:12:44](https://www.youtube.com/watch?v=XDzspWgnzxI&t=764) And finally, the new FLUX SRPO model NVFP4 mixed&nbsp; precision. To make this model I spent literally&nbsp;&nbsp;

- [00:12:53](https://www.youtube.com/watch?v=XDzspWgnzxI&t=773) 2 days, a lot of money because quantization is&nbsp; only possible with 48 GB GPUs. Therefore I had&nbsp;&nbsp;

- [00:13:02](https://www.youtube.com/watch?v=XDzspWgnzxI&t=782) to use PRO 6000 on SimplePod. So you see there&nbsp; is almost no quality difference. They are both&nbsp;&nbsp;

- [00:13:08](https://www.youtube.com/watch?v=XDzspWgnzxI&t=788) amazing and it is extremely fast. Let's make&nbsp; a live demonstration. This is running locally,&nbsp;&nbsp;

- [00:13:15](https://www.youtube.com/watch?v=XDzspWgnzxI&t=795) my local SwarmUI. And let me show you my nvitop&nbsp; as well. So let's generate 8 images with the FLUX&nbsp;&nbsp;

- [00:13:22](https://www.youtube.com/watch?v=XDzspWgnzxI&t=802) SRPO mixed NVFP4. You will be shocked by the&nbsp; speed of it. So it started generation. Okay&nbsp;&nbsp;

- [00:13:30](https://www.youtube.com/watch?v=XDzspWgnzxI&t=810) it is generating. You are watching it live. It&nbsp; takes like 5 seconds for 40 steps and the highest&nbsp;&nbsp;

- [00:13:37](https://www.youtube.com/watch?v=XDzspWgnzxI&t=817) quality. You see the quality is amazing. It is&nbsp; working amazing. It is taking only 5.7 seconds&nbsp;&nbsp;

- [00:13:44](https://www.youtube.com/watch?v=XDzspWgnzxI&t=824) to generate on RTX 5090. And how much memory it&nbsp; is using? It is using 14 GB of VRAM memory. It&nbsp;&nbsp;

- [00:13:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=832) would use lesser memory if I had a lower end GPU&nbsp; like 8 GB GPU. However, it is working amazing.

- [00:13:59](https://www.youtube.com/watch?v=XDzspWgnzxI&t=839) By the way, NVFP4 models bringing speed only on&nbsp; RTX 5000 series but you can use it on other GPUs&nbsp;&nbsp;

- [00:14:08](https://www.youtube.com/watch?v=XDzspWgnzxI&t=848) as well. Other models like 4000, 3000 series. So&nbsp; it is amazing. When we compare it with the BF16,&nbsp;&nbsp;

- [00:14:16](https://www.youtube.com/watch?v=XDzspWgnzxI&t=856) let's look at the BF16 difference. So here. It&nbsp; will take more than twice time. It will take like&nbsp;&nbsp;

- [00:14:23](https://www.youtube.com/watch?v=XDzspWgnzxI&t=863) 12 seconds. So now it is loading the model and it&nbsp; will also use much more VRAM. So if you have 5000&nbsp;&nbsp;

- [00:14:29](https://www.youtube.com/watch?v=XDzspWgnzxI&t=869) series GPUs, like 5060 or 5070, 5080, this will&nbsp; work amazing. Okay it is loading the model. Yes,&nbsp;&nbsp;

- [00:14:38](https://www.youtube.com/watch?v=XDzspWgnzxI&t=878) it is using 26 GB of VRAM. As I said numerous&nbsp; times, don't worry about your VRAM. Even if you&nbsp;&nbsp;

- [00:14:46](https://www.youtube.com/watch?v=XDzspWgnzxI&t=886) have 8 GB GPU or 6 GB GPU, it will still work&nbsp; as long as you have RAM memory. Because ComfyUI&nbsp;&nbsp;

- [00:14:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=892) is automatically doing all the block swapping,&nbsp; VRAM streaming for you. So it will still work&nbsp;&nbsp;

- [00:14:57](https://www.youtube.com/watch?v=XDzspWgnzxI&t=897) very fast and it will work on low end GPUs. As&nbsp; long as you have RAM memory don't worry about&nbsp;&nbsp;

- [00:15:03](https://www.youtube.com/watch?v=XDzspWgnzxI&t=903) it. So it is taking like 14 seconds. It is more&nbsp; than twice. This is an amazing speed difference.

- [00:15:10](https://www.youtube.com/watch?v=XDzspWgnzxI&t=910) However, recently since ComfyUI is doing a&nbsp; lot of updates, you may be needed to add some&nbsp;&nbsp;

- [00:15:15](https://www.youtube.com/watch?v=XDzspWgnzxI&t=915) arguments to your ComfyUI or SwarmUI backend.&nbsp; Which are them? If you are on low RAM memory,&nbsp;&nbsp;

- [00:15:22](https://www.youtube.com/watch?v=XDzspWgnzxI&t=922) RAM memory not VRAM, you can use&nbsp; cache none. If you use cache none,&nbsp;&nbsp;

- [00:15:26](https://www.youtube.com/watch?v=XDzspWgnzxI&t=926) it will not keep any model on the&nbsp; RAM or VRAM. It will deload them,&nbsp;&nbsp;

- [00:15:31](https://www.youtube.com/watch?v=XDzspWgnzxI&t=931) even VAE or text encoder. So this will be minimal&nbsp; RAM and VRAM usage. Or you can add this disable&nbsp;&nbsp;

- [00:15:38](https://www.youtube.com/watch?v=XDzspWgnzxI&t=938) smart memory and it will return back to older&nbsp; VRAM management. How you do that? You add it&nbsp;&nbsp;

- [00:15:45](https://www.youtube.com/watch?v=XDzspWgnzxI&t=945) into here and it will use it. Or in ComfyUI,&nbsp; as I have shown in our previous tutorials,&nbsp;&nbsp;

- [00:15:52](https://www.youtube.com/watch?v=XDzspWgnzxI&t=952) you edit this run GPU .bat file like this and&nbsp; you add that like this. So it will use that&nbsp;&nbsp;

- [00:16:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=961) argument. This is how you add arguments to your&nbsp; ComfyUI installation or SwarmUI installation that&nbsp;&nbsp;

- [00:16:06](https://www.youtube.com/watch?v=XDzspWgnzxI&t=966) uses the our ComfyUI installation. And they will&nbsp; fix your out of VRAM errors or stuck or freeze&nbsp;&nbsp;

- [00:16:13](https://www.youtube.com/watch?v=XDzspWgnzxI&t=973) errors. Because ComfyUI is updating, they are&nbsp; fixing, sometimes they are breaking. So you can&nbsp;&nbsp;

- [00:16:19](https://www.youtube.com/watch?v=XDzspWgnzxI&t=979) use these arguments to fix the issues. But I can&nbsp; say that you should definitely upgrade to ComfyUI&nbsp;&nbsp;

- [00:16:25](https://www.youtube.com/watch?v=XDzspWgnzxI&t=985) to the CUDA 13. Why? Because it is faster overall&nbsp; and especially faster for GGUF models and it will&nbsp;&nbsp;

- [00:16:33](https://www.youtube.com/watch?v=XDzspWgnzxI&t=993) be from now on developed better and better.&nbsp; Therefore, it is recommended from now on.

- [00:16:40](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1000) Our installers are all up to date, updated.&nbsp; We have all the presets. I also have converted&nbsp;&nbsp;

- [00:16:46](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1006) these presets into ComfyUI so you can use&nbsp; that. Moreover, if you are remembering in&nbsp;&nbsp;

- [00:16:51](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1011) our latest tutorial, we had introduced you the&nbsp; SimplePod AI. I have updated all the zip files.&nbsp;&nbsp;

- [00:16:59](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1019) So you can just run "run pod SimplePod comfyui&nbsp; instructions". You will have all the links. So&nbsp;&nbsp;

- [00:17:05](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1025) please use these links to register. Use this&nbsp; link as a template. And the team fixed the&nbsp;&nbsp;

- [00:17:11](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1031) errors. So when you selected this template,&nbsp; edit and use, deploy your persistent volume,&nbsp;&nbsp;

- [00:17:16](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1036) set your mount storage as workspace. You can also&nbsp; use without persistent storage then it will be&nbsp;&nbsp;

- [00:17:24](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1044) ready to use. Select any GPU you want. And if you&nbsp; had watched the previous tutorial, you remember&nbsp;&nbsp;

- [00:17:29](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1049) that the RTX 6000 Blackwell GPUs were not working.&nbsp; They fixed that issue. I did run this test on the&nbsp;&nbsp;

- [00:17:36](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1056) RTX PRO 6000 GPUs and it is working perfect with&nbsp; 100 percentage utilization. Let me demonstrate&nbsp;&nbsp;

- [00:17:44](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1064) you. For example, this is running on SimplePod&nbsp; AI. Let's continue. Open a terminal. Let's pip&nbsp;&nbsp;

- [00:17:50](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1070) install nvitop. And nvitop. We see that 600 watts&nbsp; is being used so it is fully utilizing. Moreover,&nbsp;&nbsp;

- [00:17:58](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1078) they have added also extract option to the Jupyter&nbsp; Lab interface. So now you can extract zip files&nbsp;&nbsp;

- [00:18:07](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1087) as well. You see when I right click, extract&nbsp; archive is there. So it is also fixed and working.

- [00:18:13](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1093) And you can see that how much time and&nbsp; tests I have done. Let me show you. You&nbsp;&nbsp;

- [00:18:18](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1098) see all these mixed precisions NVFP4 tests.&nbsp; All of them were failing. I did a lot of,&nbsp;&nbsp;

- [00:18:25](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1105) a lot of testing and fixing. So this NVFP4&nbsp; converter application was really hard to&nbsp;&nbsp;

- [00:18:31](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1111) program. I did spend huge money and time on it.&nbsp; All of the links will be in the description of&nbsp;&nbsp;

- [00:18:37](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1117) the video. Like any other of my videos, you&nbsp; see I put the links like this. So this is how&nbsp;&nbsp;

- [00:18:43](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1123) you will find the links. You can contact me&nbsp; by replying to my videos or by joining our&nbsp;&nbsp;

- [00:18:49](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1129) Discord server. The link is here. You can also&nbsp; message me from LinkedIn. You can also send me&nbsp;&nbsp;

- [00:18:54](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1134) an email. Everything is fine. I reply all of&nbsp; them. Discord is the best way to contact me or&nbsp;&nbsp;

- [00:19:01](https://www.youtube.com/watch?v=XDzspWgnzxI&t=1141) Patreon or replying to the YouTube. Hopefully&nbsp; see you in another amazing tutorial video.
