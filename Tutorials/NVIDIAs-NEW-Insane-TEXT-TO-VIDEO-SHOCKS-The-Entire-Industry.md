# NVIDIA's NEW Insane TEXT TO VIDEO SHOCKS The Entire Industry!

## Full tutorial link > https://www.youtube.com/watch?v=6FnlVCFjnJQ

[![NVIDIA's NEW Insane TEXT TO VIDEO SHOCKS The Entire Industry!](https://img.youtube.com/vi/6FnlVCFjnJQ/sddefault.jpg)](https://www.youtube.com/watch?v=6FnlVCFjnJQ "NVIDIA's NEW Insane TEXT TO VIDEO SHOCKS The Entire Industry!")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/NVIDIAs-NEW-Insane-TEXT-TO-VIDEO-SHOCKS-The-Entire-Industry.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/NVIDIAs-NEW-Insane-TEXT-TO-VIDEO-SHOCKS-The-Entire-Industry.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


I have reviewed NVIDIA's Align Your Latents: High-Resolution Video Synthesis with Latent Diffusion Models research release in this video. With the approach proposed, they turn the publicly available, state-of-the-art text-to-image LDM Stable Diffusion into an efficient and expressive text-to-video model with resolution up to 1280 x 2048. Our discord: [https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology & Science: News, Tips, Tutorials, Tricks, Best Applications, Guides, Reviews ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Playlist of #StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

Announcement page ⤵️

[https://research.nvidia.com/labs/toronto-ai/VideoLDM/](https://research.nvidia.com/labs/toronto-ai/VideoLDM/)

Research paper ⤵️

[https://arxiv.org/abs/2304.08818](https://arxiv.org/abs/2304.08818)

#videosynthesis

[00:00:00](https://youtu.be/6FnlVCFjnJQ?t=0) Introduction to Align Your Latents: High-Resolution Video Synthesis with Latent Diffusion Models

[00:00:17](https://youtu.be/6FnlVCFjnJQ?t=17) Text to HD video examples released by #NVIDIA

[00:01:04](https://youtu.be/6FnlVCFjnJQ?t=64) Model explanation made by NVIDIA in the paper

[00:01:38](https://youtu.be/6FnlVCFjnJQ?t=98) Detailed architecture about their model

[00:02:07](https://youtu.be/6FnlVCFjnJQ?t=127) Best part of their model, DreamBooth customized text to video

[00:02:15](https://youtu.be/6FnlVCFjnJQ?t=135) Era of personalized text to video generation

[00:03:03](https://youtu.be/6FnlVCFjnJQ?t=183) Synthesizing longer videos experimentations

[00:03:41](https://youtu.be/6FnlVCFjnJQ?t=221) Training a video LDM on the wild real driving scene videos

[00:04:09](https://youtu.be/6FnlVCFjnJQ?t=249) Trying to leverage by using specific driving scenario simulation

Abstract

Latent Diffusion Models (LDMs) enable high-quality image synthesis while avoiding excessive compute demands by training a diffusion model in a compressed lower-dimensional latent space. Here, authors apply the LDM paradigm to high-resolution video generation, a particularly resource-intensive task. authors first pre-train an LDM on images only; then, authors turn the image generator into a video generator by introducing a temporal dimension to the latent space diffusion model and fine-tuning on encoded image sequences, i.e., videos. Similarly, authors temporally align diffusion model upsamplers, turning them into temporally consistent video super resolution models. authors focus on two relevant real-world applications: Simulation of in-the-wild driving data and creative content creation with text-to-video modeling. In particular, authors validate their Video LDM on real driving videos of resolution 512 x 1024, achieving state-of-the-art performance. Furthermore, their approach can easily leverage off-the-shelf pre-trained image LDMs, as authors only need to train a temporal alignment model in that case. Doing so, authors turn the publicly available, state-of-the-art text-to-image LDM Stable Diffusion into an efficient and expressive text-to-video model with resolution up to 1280 x 2048. authors show that the temporal layers trained in this way generalize to different fine-tuned text-to-image LDMs. Utilizing this property, authors show the first results for personalized text-to-video generation, opening exciting directions for future content creation.

Video Latent Diffusion Models Applications

Authors validate their approach on two relevant but distinct applications: Generation of in-the-wild driving scene videos and creative content creation with text-to-video modeling. For driving video synthesis, their Video LDM enables generation of temporally coherent, multiple minute long videos at resolution 512 x 1024, achieving state-of-the-art performance. For text-to-video, authors demonstrate synthesis of short videos of several seconds lengths with resolution up to 1280 x 2048, leveraging Stable Diffusion as backbone image LDM as well as the Stable Diffusion upscaler. authors also explore the convolutional-in-time application of their models as an alternative approach to extend the length of videos. their main keyframe models only train the newly inserted temporal layers, but do not touch the layers of the backbone image LDM. Because of that the learnt temporal layers can be transferred to other image LDM backbones, for instance to ones that have been fine-tuned with DreamBooth. Leveraging this property, authors additionally show initial results for personalized text-to-video generation.

Text-to-Video Synthesis

Many generated videos can be found at the top of the page as well as here. The generated videos have a resolution of 1280 x 2048 pixels, consist of 113 frames and are rendered at 24 fps, resulting in 4.7 second long clips. their Video LDM for text-to-video generation is based on Stable Diffusion and has a total of 4.1B parameters, including all components except the CLIP text encoder. Only 2.7B of these parameters are trained on videos. This means that their models are significantly smaller than those of several concurrent works.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=0) Greetings everyone.

- [00:00:01](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=1) NVIDIA has announced their latest research Align Your Latents High Resolution Video Synthesis

- [00:00:07](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=7) with Latent Diffusion Models and it is really high resolution without watermark and it also

- [00:00:13](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=13) includes some of the newest features that we haven't seen before.

- [00:00:17](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=17) So here we are seeing the examples they did put in their announcement page.

- [00:00:23](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=23) They are really looking crazy high resolution, looking sharp, high quality.

- [00:00:27](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=27) The durations of the videos are not very long at the moment, but their model is also including

- [00:00:33](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=33) some of the new features that I will show you.

- [00:00:36](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=36) So when you hover your mouse over the video, it also shows the used prompt to generate

- [00:00:42](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=42) those short videos.

- [00:00:43](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=43) An astronaut flying in a space, 4K, high resolution.

- [00:00:47](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=47) So this is the video for that.

- [00:00:49](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=49) A fire dragon breathing, trending on art station, slow motion and you see it is exactly as the

- [00:00:55](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=55) prompt used for.

- [00:00:57](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=57) A fantasy landscape, trending on art station, 4K, high resolution.

- [00:01:01](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=61) This is also looking amazing for this prompt.

- [00:01:04](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=64) So in their paper, they explained that their model is able to generate videos up to an

- [00:01:11](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=71) amazing resolution, 1280 pixels by 2048 pixels.

- [00:01:16](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=76) This is really, really amazing.

- [00:01:18](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=78) They show the way they are generating videos.

- [00:01:20](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=80) Before temporal video fine tuning, different batch samples are generated.

- [00:01:25](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=85) After temporal video fine tuning samples are aligned to form a video sequence after applying

- [00:01:31](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=91) the LDM decoder.

- [00:01:33](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=93) So they explain their technical details.

- [00:01:35](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=95) And there is one more thing that I have liked very much.

- [00:01:38](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=98) They give details about their model.

- [00:01:40](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=100) They used 4.1 billion parameters and this is really small number of parameters.

- [00:01:46](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=106) This number of parameters having model would work on majority of the consumer grade graphic

- [00:01:52](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=112) cards right now being used.

- [00:01:53](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=113) So if they release their model, we will be able to use it in our computers.

- [00:01:58](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=118) I am presuming that with the optimizations, this model would work on even 8GB VRAM having

- [00:02:05](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=125) GPUs.

- [00:02:06](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=126) And the best part of their research is that you will be able to do DreamBooth training

- [00:02:11](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=131) on the model and then you will be able to generate personalized text to video.

- [00:02:16](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=136) This is amazing.

- [00:02:17](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=137) This is just amazing.

- [00:02:19](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=139) Text prompt: a SKS cat playing in the grass.

- [00:02:22](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=142) You will remember that the SKS is a very famous word used for DreamBooth training.

- [00:02:27](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=147) And this SKS cat is learned from these training images shown in the left.

- [00:02:33](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=153) Another prompt is a SKS cat getting up.

- [00:02:36](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=156) Let's play the videos.

- [00:02:38](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=158) So you see now it is displaying the SKS cat getting up.

- [00:02:42](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=162) Here we are seeing a SKS cat playing in the grass.

- [00:02:45](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=165) There is another example.

- [00:02:47](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=167) Training images for DreamBooth.

- [00:02:49](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=169) Text prompt: a SKS frog playing a guitar in a band.

- [00:02:53](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=173) Let's also see it.

- [00:02:54](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=174) A SKS frog playing a guitar in a band like this.

- [00:02:59](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=179) These are all famous images used in the previous research papers as well.

- [00:03:03](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=183) They also explored synthesizing slightly longer videos for free by applying their learned

- [00:03:09](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=189) temporal layers convolutionally in time.

- [00:03:12](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=192) The below videos consist of 175 frames rendered at 24 fps, resulting in 7.3 second long clips.

- [00:03:21](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=201) A minor degradation in quality can be observed.

- [00:03:24](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=204) Let's also play them.

- [00:03:25](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=205) So here we are seeing right now a teddy bear walking down 5th Avenue front view, beautiful

- [00:03:31](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=211) sunset, close up, high definition, 4K.

- [00:03:33](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=213) And in this video we are seeing waves crashing against a lone lighthouse, ominous lightning.

- [00:03:40](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=220) This is just amazing.

- [00:03:41](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=221) They also train a video LDM on the wild real driving scene videos and generate videos at

- [00:03:48](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=228) 512 by 1024 resolution.

- [00:03:51](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=231) So this is the first video they have released.

- [00:03:53](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=233) It is looking very very realistic.

- [00:03:55](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=235) It is looking amazing.

- [00:03:57](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=237) So here another demo video they have put.

- [00:03:59](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=239) It is looking just amazing.

- [00:04:01](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=241) Of course, when you look at the details, you notice that it is AI generated, but this is

- [00:04:05](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=245) really, really improved when compared to previous video generations.

- [00:04:10](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=250) They also try to leverage by using specific driving scenario simulation.

- [00:04:15](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=255) Let's also see the result of this approach as well.

- [00:04:25](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=265) The paper is published on Arxiv.

- [00:04:27](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=267) The link of the paper and also this page will be in the video description.

- [00:04:31](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=271) I hope you have enjoyed this video.

- [00:04:33](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=273) Please like, subscribe, turn on bell notifications to not miss any information regarding the

- [00:04:39](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=279) upcoming machine learning, technology related news and the tutorials that I am making.

- [00:04:44](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=284) You will find my tutorial videos on my channel.

- [00:04:47](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=287) Please also leave a comment.

- [00:04:48](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=288) If you also support me on Patreon or by joining YouTube, I would appreciate that very much.

- [00:04:53](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=293) Unfortunately, NVIDIA didn't release their model yet, but if they release, hopefully

- [00:04:57](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=297) I will make a full tutorial about how to use that model.

- [00:05:01](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=301) Moreover, they published more example videos in another page and the examples are looking

- [00:05:07](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=307) extremely promising.

- [00:05:09](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=309) because this is their initial release and by the time who knows how further well we

- [00:05:14](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=314) will get with text to video generation.

- [00:05:18](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=318) These are all looking amazing.

- [00:05:20](https://www.youtube.com/watch?v=6FnlVCFjnJQ&t=320) So make sure to subscribe and hopefully see you in another awesome video.
