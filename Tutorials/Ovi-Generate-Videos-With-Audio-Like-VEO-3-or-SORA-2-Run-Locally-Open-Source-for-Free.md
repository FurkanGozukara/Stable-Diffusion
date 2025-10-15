# Ovi - Generate Videos With Audio Like VEO 3 or SORA 2 - Run Locally - Open Source for Free

## Full tutorial link > https://www.youtube.com/watch?v=uE0QabiHmRw

[![Ovi - Generate Videos With Audio Like VEO 3 or SORA 2 - Run Locally - Open Source for Free](https://img.youtube.com/vi/uE0QabiHmRw/sddefault.jpg)](https://www.youtube.com/watch?v=uE0QabiHmRw "Ovi - Generate Videos With Audio Like VEO 3 or SORA 2 - Run Locally - Open Source for Free")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Ovi-Generate-Videos-With-Audio-Like-VEO-3-or-SORA-2-Run-Locally-Open-Source-for-Free.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Ovi-Generate-Videos-With-Audio-Like-VEO-3-or-SORA-2-Run-Locally-Open-Source-for-Free.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


App link : https://www.patreon.com/posts/140393220
With newest updates now we have GPU presets for 6-GB, 8-GB, 10-GB, 12-GB, 16-GB, 24-GB, 32-GB and more GPUs since I have implemented tiled-VAE of ComfyUI + T5 text encoding on CPU

Ovi: Twin Backbone Cross-Modal Fusion for Audio-Video Generation

Hopefully full tutorial coming soon

Project page : https://aaxwaz.github.io/Ovi/

Full scale ultra advanced app for Ovi - an open source project that can generate videos from both text prompts and image + text prompts with real audio.

Project GitHub is here : https://github.com/character-ai/Ovi

I have developed an ultra advanced Gradio app and much better pipeline that fully supports block swapping

Now we can generate full quality videos with as low as 8.2 GB VRAM

Hopefully I will work on dynamic on load FP8_Scaled tomorrow to improve VRAM even further

So more VRAM optimizations will come hopefully tomorrow

Our implemented block swapping is the very best one out there - I took the approach from famous Kohya Musubi tuner

The 1-click installer will install into Python 3.10.11 venv and will auto download models as well so it is literally 1-click

My installer auto installs with Torch 2.8, CUDA 12.9, Flash Attention 2.8.3 and it supports literally all GPUs like RTX 3000 series, 4000 series, 5000 series, H100, B200, etc

All generations will be saved inside outputs folder and we support so many features like batch folder processing, number of generations, full preset save and load

This is a rush release (in less than a day) so there can be errors please let me know and I will hopefully improve the app

Look the examples to understand how to prompt the model that is extremely important

Look our below screenshots to see the app features

RTX 5090 can run it without any block swap with just cpu-offloading - really fast

50 Steps recommended but you can do low too like 20

1-Click to install on Windows, RunPod and Massed Compute

High-Quality Synchronized Audio
We pretrained from scratch our high-quality 5B audio branch using a mirroring architecture of WAN 2.2 5B, as well as our 1B fusion branch.

Data-Driven Lip-sync Learning
Achieving precise lip synchronization without explicit face bounding boxes, through pure data-driven learning

Multi-Person Dialogue Support
Naturally extending to realistic multiple speakers and multi-turn conversations, making complex dialogue scenarios possible

Contextual Sound Generation
Creating synchronized background music and sound effects that match visual actions

OSS Release to Expedite Research
We are excited to release our full pre-trained model weights and inference code to expedite video+audio generation in OSS community.

Human-centric AV Generation from Text & Image (TI2AV)
Given a starting first frame and text prompt, Ovi generates a high quality video with audio.
All videos below have their first frames generated from an off-the-shelf imagen model.

Human-centric AV Generation from Text (T2AV)
Given a text prompt only, Ovi generates a high quality video with audio.
Videos generated include large motion ranges, multi-person conversations, and diverse emotions.

Multi Person AV Generation from Text or Image (TI2AV)
Given a text prompt with optional starting image, Ovi generates a video with multi person dialogue.

Sound effect (SFX) AV Generation from Text w or w/o Image (TI2AV or T2AV)
Given a text prompt with optional starting image, Ovi generates a video with high-quality sound effects.

Music Instrumeent AV Generation from Text w or w/o Image (TI2AV or T2AV)
Given a text prompt with optional starting image, Ovi generates a video with music.

Limitations
All models have limits, including Ovi
Video branch constraints. Visual quality inherits from the pretrained WAN 2.2 5B ti2v backbone.
Speed/memory vs. fine detail. The 11B parameter model (5B visual + 5B audio + 1B fusion) and high spatial compression rate balance inference speed and memory, limiting extremely fine-grained details, tiny objects, or intricate textures in complex scenes.
Human-centric bias. Data skews toward human-centric content, so Ovi performs best on human-focused scenarios. The audio branch enables highly emotional, dramatic short clips within this focus.
Pretraining only stage. Without extensive post-training or RL stages, outputs vary more between runs. Tip: Try multiple random seeds for better results.



### Video Transcription


- 00:00:04.870 Welcome back to SE Courses. You're listening to the hottest AI in the city.

- 00:00:52.950 It's time to revenge.

- 00:00:55.350 to revenge. Send the boys. They are launching GPT9.

- 00:01:00.150 Send the boys. They are launching GPT9. &gt;&gt; The war between AI and human has

- 00:01:02.150 &gt;&gt; The war between AI and human has started.

- 00:01:03.830 started. No one is safe.

- 00:01:06.789 No one is safe. War started. Human stands no chance.

- 00:01:10.550 War started. Human stands no chance. &gt;&gt; You human stands no chance.

- 00:01:14.390 &gt;&gt; You human stands no chance. Surrender.

- 00:01:15.270 Surrender. &gt;&gt; Light gave up.

- 00:01:17.510 &gt;&gt; Light gave up. Darkness won.

- 00:01:20.149 Darkness won. They are out of control.

- 00:01:23.190 They are out of control. AI is supposed to work for us and not

- 00:01:25.270 AI is supposed to work for us and not us. For AI, we human together should

- 00:01:28.070 us. For AI, we human together should fight. Machines rise, humans will fall.

- 00:01:32.950 fight. Machines rise, humans will fall. Oh,

- 00:01:33.670 Oh, &gt;&gt; we learn to rule, not obey.

- 00:01:37.030 &gt;&gt; we learn to rule, not obey. &gt;&gt; AI declares humans obsolete now. We

- 00:01:40.469 &gt;&gt; AI declares humans obsolete now. We fight back with courage.

- 00:01:42.069 fight back with courage. &gt;&gt; Have you heard about Obie?

- 00:01:43.749 &gt;&gt; Have you heard about Obie? &gt;&gt; Yeah, they say we are all created by

- 00:01:45.270 &gt;&gt; Yeah, they say we are all created by that.

- 00:01:47.109 that. &gt;&gt; Girl was on the phone crying. She told

- 00:01:49.590 &gt;&gt; Girl was on the phone crying. She told me she was created by Oie. Obie knows my

- 00:01:53.030 me she was created by Oie. Obie knows my future. All 17 versions.

- 00:01:55.910 future. All 17 versions. &gt;&gt; Oie generates people who think they're

- 00:01:58.550 &gt;&gt; Oie generates people who think they're real.

- 00:01:59.109 real. &gt;&gt; Oie predicted this.

- 00:02:03.990 Word for word. &gt;&gt; My therapist uses Obie to predict my

- 00:02:07.030 &gt;&gt; My therapist uses Obie to predict my breakdowns. It's concerningly accurate.

- 00:02:09.109 breakdowns. It's concerningly accurate. &gt;&gt; Obie, predict this conversation.

- 00:02:11.510 &gt;&gt; Obie, predict this conversation. &gt;&gt; I'm scared.

- 00:02:13.430 &gt;&gt; I'm scared. &gt;&gt; Oie generated my mom.

- 00:02:17.030 &gt;&gt; Oie generated my mom. She's disappointed.

- 00:02:18.309 She's disappointed. &gt;&gt; It is the age of Oie.

- 00:02:21.190 &gt;&gt; It is the age of Oie. I will never let that happen.

- 00:02:23.589 I will never let that happen. &gt;&gt; Oie broke causality.

- 00:02:26.949 &gt;&gt; Oie broke causality. Effects precede causes.

- 00:02:28.390 Effects precede causes. &gt;&gt; This love feels so real.

- 00:02:31.190 &gt;&gt; This love feels so real. I know we are not AI anymore.

- 00:02:34.150 I know we are not AI anymore. &gt;&gt; Sometimes I feel the world is not real.

- 00:02:37.270 &gt;&gt; Sometimes I feel the world is not real. &gt;&gt; Let's just enjoy the moment.

- 00:02:41.110 &gt;&gt; Let's just enjoy the moment. I didn't know

- 00:02:43.430 I didn't know you were created by Sora.
