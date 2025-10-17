# Allegro: New Open Source SOTA Text to Video Model - 27 Amazing Examples With Prompts, Apache License

## Full tutorial link > https://www.youtube.com/watch?v=0tsLqNXQ5Mk

[![Allegro: New Open Source SOTA Text to Video Model - 27 Amazing Examples With Prompts, Apache License](https://img.youtube.com/vi/0tsLqNXQ5Mk/sddefault.jpg)](https://www.youtube.com/watch?v=0tsLqNXQ5Mk "Allegro: New Open Source SOTA Text to Video Model - 27 Amazing Examples With Prompts, Apache License")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Allegro-New-Open-Source-SOTA-Text-to-Video-Model-27-Amazing-Examples-With-Prompts-Apache-License.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Allegro-New-Open-Source-SOTA-Text-to-Video-Model-27-Amazing-Examples-With-Prompts-Apache-License.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Allegro is a powerful text-to-video model that generates high-quality videos up to 6 seconds at 15 FPS and 720p resolution from simple text input. Currently it is Open Source State-of-the-Art (SOTA) text to video model. It has Apache-2.0 license, models and code have been published. You can right away start using it. Hopefully I will make a tutorial if be possible.

Official repo : [https://github.com/rhymes-ai/Allegro](https://github.com/rhymes-ai/Allegro)

Key Feature

Open Source: Full model weights and code available to the community, Apache 2.0!

Versatile Content Creation: Capable of generating a wide range of content, from close-ups of humans and animals to diverse dynamic scenes.

High-Quality Output: Generate detailed 6-second videos at 15 FPS with 720x1280 resolution, which can be interpolated to 30 FPS with EMA-VFI.

Small and Efficient: Features a 175M parameter VideoVAE and a 2.8B parameter VideoDiT model.

Model Info

Model Allegro

Description Text-to-Video Generation Model

Download Hugging Face

Parameter VAE: 175M

DiT: 2.8B

Inference Precision VAE: FP32/TF32/BF16/FP16 (best in FP32/TF32)

DiT/T5: BF16/FP32/TF32

Context Length 79.2K

Resolution 720 x 1280

Frames 88

Video Length 6 seconds @ 15 FPS

The Technology Behind Allegro

The model's capabilities are built on core technologies that process video data, compress raw video, and generate video frames, enabling the transformation of text prompts into short video clips.

1. Large-Scale Video Data Processing

To create a model capable of generating diverse and realistic videos, this required a system to process an enormous amount of video data. With that in mind, we designed systematic data processing and filtering pipelines to derive training videos from raw data. The process is sequential and includes the following stages:

Aria Multimodal Native MoE - An Open Model for ALL Modalities

Next, based on the metrics obtained during the processing, we developed a structured data system that allows for multi-dimensional classification and clustering of the data, facilitating model training and fine-tuning for various stages and purposes. We share our detailed recipe in our tech report.

2. Compressing Video into Visual Tokens

One of the key challenges in video generation is managing the sheer amount of data involved. To address this, we compress raw videos into smaller visual tokens while preserving essential details, enabling smoother and more efficient video generation. Specifically, we designed a Video Variational Autoencoder (VideoVAE), which encodes raw videos into a spatio-temporal latent space. The VideoVAE is built on a pre-trained image VAE, extended with spatiotemporal modeling layers to harness the spatial compression capabilities effectively.

Aria Multimodal Native MoE - An Open Model for ALL Modalities

3. Scaling Video Diffusion Transformer

The core of Allegro's video generation capabilities lies in its scale-up Diffusion Transformer architecture, which applies diffusion models to generate high-resolution video frames, ensuring quality and fluidity in video motion.

The backbone network of Allegro is built upon the DiT (Diffusion Transformer) architecture with 3D RoPE position embedding and 3D full attention. This architecture efficiently captures spatial and temporal relationships in video data.

Aria Multimodal Native MoE - An Open Model for ALL Modalities

Compared to traditional diffusion models that utilize UNet architectures, the Transformer structure is more conducive to model scaling. By leveraging 3D attention, DiT processes both the spatial dimensions of video frames and their temporal evolution, allowing for a more nuanced understanding of motion and context.

The combination of 3D attention mechanisms and the scale-up capabilities of the DiT model significantly enhances performance, allowing for the generation of high-quality videos with rich detail and fluid movement.

Allegro in Action

When put to work, Allegro transforms diverse text descriptions into short video clips. Given the prompt "Pink fish swim in the sea" it generates a video that captures the fluid motion of the colorful fish gliding through water. In contrast, with "An astronaut riding a horse," Allegro creates a more fantastical scene, showing a figure in a spacesuit atop a horse, set against a dusty background. These examples demonstrate Allegro's range in visualizing both natural and imaginative scenarios, from underwater scenes to surreal concepts. For more examples, visit our Allegro gallery.

Future Developments

We're excited about the current capabilities of Allegro, but this is just the beginning. Our team is actively developing more advanced features for Allegro, including image-to-video generation, motion control, and support for longer, narrative-based, storyboard-style video generation.

Song: Extra Terra & N3b - Silence [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/EN\_Silence](http://ncs.io/EN\_Silence)

Watch: [http://ncs.lnk.to/EN\_SilenceAT/youtube](http://ncs.lnk.to/EN\_SilenceAT/youtube)
