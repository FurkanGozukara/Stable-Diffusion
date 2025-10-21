# SORA : Unbelieve New Text To Video AI Model By OpenAI - 37 Demo Videos - Still Can't Believe Real

## Full tutorial link > https://www.youtube.com/watch?v=VlJYmHNRQZQ

[![SORA : Unbelieve New Text To Video AI Model By OpenAI - 37 Demo Videos - Still Can't Believe Real](https://img.youtube.com/vi/VlJYmHNRQZQ/sddefault.jpg)](https://www.youtube.com/watch?v=VlJYmHNRQZQ "SORA : Unbelieve New Text To Video AI Model By OpenAI - 37 Demo Videos - Still Can't Believe Real")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SORA-Unbelieve-New-Text-To-Video-AI-Model-By-OpenAI-37-Demo-Videos-Still-Cant-Believe-Real.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SORA-Unbelieve-New-Text-To-Video-AI-Model-By-OpenAI-37-Demo-Videos-Still-Cant-Believe-Real.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Sora is an AI model that can create realistic and imaginative scenes from text instructions. It is just published by OpenAI today. The quality level is so good that I am super skeptical how can this be real. The quality, coherency, details, everything is just mind blowing. I have merged 37 demo videos they published in 4K quality.

Our Discord Channel ⤵️

[https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388)

Our Patreon With Amazing AI Scripts & Tutorials ⤵️

[https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Prompts Of Each Demo Video (Public Post) ⤵️

[https://www.patreon.com/posts/98564118](https://www.patreon.com/posts/98564118)

Official Site ⤵️

[https://openai.com/sora](https://openai.com/sora)

Technical Report:

Video generation models as world simulators

We explore large-scale training of generative models on video data. Specifically, we train text-conditional diffusion models jointly on videos and images of variable durations, resolutions and aspect ratios. We leverage a transformer architecture that operates on spacetime patches of video and image latent codes. Our largest model, Sora, is capable of generating a minute of high fidelity video. Our results suggest that scaling video generation models is a promising path towards building general purpose simulators of the physical world.

This technical report focuses on (1) our method for turning visual data of all types into a unified representation that enables large-scale training of generative models, and (2) qualitative evaluation of Sora’s capabilities and limitations. Model and implementation details are not included in this report.

Much prior work has studied generative modeling of video data using a variety of methods, including recurrent networks,1,2,3 generative adversarial networks,4,5,6,7 autoregressive transformers,8,9 and diffusion models.10,11,12 These works often focus on a narrow category of visual data, on shorter videos, or on videos of a fixed size. Sora is a generalist model of visual data—it can generate videos and images spanning diverse durations, aspect ratios and resolutions, up to a full minute of high definition video.

Turning visual data into patches

We take inspiration from large language models which acquire generalist capabilities by training on internet-scale data.13,14 The success of the LLM paradigm is enabled in part by the use of tokens that elegantly unify diverse modalities of text—code, math and various natural languages. In this work, we consider how generative models of visual data can inherit such benefits. Whereas LLMs have text tokens, Sora has visual patches. Patches have previously been shown to be an effective representation for models of visual data.15,16,17,18 We find that patches are a highly-scalable and effective representation for training generative models on diverse types of videos and images.

At a high level, we turn videos into patches by first compressing videos into a lower-dimensional latent space,19 and subsequently decomposing the representation into spacetime patches.

Video compression network

We train a network that reduces the dimensionality of visual data.20 This network takes raw video as input and outputs a latent representation that is compressed both temporally and spatially. Sora is trained on and subsequently generates videos within this compressed latent space. We also train a corresponding decoder model that maps generated latents back to pixel space.

Spacetime Latent Patches

Given a compressed input video, we extract a sequence of spacetime patches which act as transformer tokens. This scheme works for images too since images are just videos with a single frame. Our patch-based representation enables Sora to train on videos and images of variable resolutions, durations and aspect ratios. At inference time, we can control the size of generated videos by arranging randomly-initialized patches in an appropriately-sized grid.

In this work, we find that diffusion transformers scale effectively as video models as well. Below, we show a comparison of video samples with fixed seeds and inputs as training progresses. Sample quality improves markedly as training compute increases.

Base compute

Variable durations, resolutions, aspect ratios

Past approaches to image and video generation typically resize, crop or trim videos to a standard size – e.g., 4 second videos at 256x256 resolution. We find that instead training on data at its native size provides several benefits.

Music:

Song: Jim Yosef - Firefly [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/jyfirefly](http://ncs.io/jyfirefly)

Watch: [http://youtu.be/x_OwcYTNbHs](http://youtu.be/x_OwcYTNbHs)

Song: Egzod, Maestro Chives, Neoni - Royalty [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/Royalty](http://ncs.io/Royalty)

Watch: [http://youtu.be/C5fLxtJH2Qs](http://youtu.be/C5fLxtJH2Qs)

Song: Lost Sky x ANGELPLAYA x Chris Linton - Unbreakable [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/Unbreakable](http://ncs.io/Unbreakable)

Watch: [http://ncs.lnk.to/UnbreakableAT/youtube](http://ncs.lnk.to/UnbreakableAT/youtube)



### Video Transcription


- [00:00:02](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=2) can you believe that this video that you are seeing right now is 100% generated

- [00:00:06](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=6) are seeing right now is 100% generated by AI which just takes proms nothing

- [00:00:09](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=9) by AI which just takes proms nothing else look at the details look at the

- [00:00:12](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=12) else look at the details look at the realism look at the Quality the

- [00:00:15](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=15) realism look at the Quality the coherence everything is looking perfect

- [00:00:18](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=18) coherence everything is looking perfect the video is as almost as captured by a

- [00:00:22](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=22) the video is as almost as captured by a professional photographer in a real life

- [00:00:25](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=25) professional photographer in a real life this video released by open AI with a

- [00:00:28](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=28) this video released by open AI with a newly announced model Sora so today I am

- [00:00:31](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=31) newly announced model Sora so today I am going to show you all of their example

- [00:00:33](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=33) going to show you all of their example videos with their captions but I am

- [00:00:35](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=35) videos with their captions but I am skeptical until we can try them on

- [00:00:39](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=39) skeptical until we can try them on ourselves so this is a new model Sora an

- [00:00:42](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=42) ourselves so this is a new model Sora an AI model that can create realistic and

- [00:00:44](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=44) AI model that can create realistic and imaginative scenes from the textt

- [00:00:47](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=47) imaginative scenes from the textt [Music]

- [00:00:58](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=58) [Music] instructions

- [00:01:00](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=60) instructions [Music]

- [00:01:39](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=99) [Applause] [Music]

- [00:01:48](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=108) [Music] [Applause] [Music]

- [00:02:01](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=121) yeah [Music]

- [00:02:28](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=148) [Music] w

- [00:03:28](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=208) [Music] 3

- [00:03:59](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=239) I [Music]

- [00:04:30](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=270) w [Music]

- [00:04:35](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=275) [Music] [Applause]

- [00:04:38](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=278) [Applause] [Music]

- [00:04:51](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=291) [Music] [Applause]

- [00:06:29](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=389) a [Music]

- [00:06:58](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=418) [Music] a

- [00:07:00](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=420) a [Music]

- [00:07:18](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=438) [Applause] [Music]

- [00:08:28](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=508) [Music] n

- [00:08:30](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=510) n [Music]

- [00:08:58](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=538) [Music] oh

- [00:09:01](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=541) oh [Applause]

- [00:09:39](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=579) [Applause] [Music]

- [00:09:59](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=599) w [Music]

- [00:10:28](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=628) [Music] oh

- [00:10:29](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=629) oh [Music]

- [00:11:03](https://www.youtube.com/watch?v=VlJYmHNRQZQ&t=663) [Music] oh
