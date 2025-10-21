# Improve Stable Diffusion Prompt Following & Image Quality Significantly With Incantations Extension

## Full tutorial link > https://www.youtube.com/watch?v=lMQ7DIPmrfI

[![Improve Stable Diffusion Prompt Following & Image Quality Significantly With Incantations Extension](https://img.youtube.com/vi/lMQ7DIPmrfI/sddefault.jpg)](https://www.youtube.com/watch?v=lMQ7DIPmrfI "Improve Stable Diffusion Prompt Following & Image Quality Significantly With Incantations Extension")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Improve-Stable-Diffusion-Prompt-Following-and-Image-Quality-Significantly-With-Incantations-Extension.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Improve-Stable-Diffusion-Prompt-Following-and-Image-Quality-Significantly-With-Incantations-Extension.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Stable Diffusion Incantations extension is the newest improvement to the text to image generation pipeline. With Incantations extension by using Perturbed Attention Guidance, Multi-Concept T2I-Zero and Seek for Incantations you can improve your image generation quality significantly. By utilizing these newest SOTA algorithms, Stable Diffusion SD 1.5 and SDXL models can follow your prompts significantly better. In this tutorial, I will show you how to install Incantations extension on Stable Diffusion Automatic1111 SD Web UI and utilize Perturbed Attention Guidance, Multi-Concept T2I-Zero and Seek for Incantations algorithms.

Latest Stable Diffusion Automatic1111 Web UI Installer ⤵️

[https://www.patreon.com/posts/86307255](https://www.patreon.com/posts/86307255)

Automatic1111 SD Web UI Incantations Extension ⤵️

[https://github.com/v0xie/sd-webui-incantations](https://github.com/v0xie/sd-webui-incantations)

Forge Extension & ComfyUI Basic Node ⤵️

[https://github.com/pamparamm/sd-perturbed-attention](https://github.com/pamparamm/sd-perturbed-attention)

How To Install Python, GIT & Automatic1111 Manually ⤵️

[https://youtu.be/-NjNy7afOQ0](https://youtu.be/-NjNy7afOQ0)

OneTrainer Full Fine Tuning / DreamBooth Tutorial ⤵️

[https://youtu.be/0t5l6CP9eBg](https://youtu.be/0t5l6CP9eBg)

After Detailer Extension ⤵️

[https://github.com/Bing-su/adetailer](https://github.com/Bing-su/adetailer)

CivitAI My Profile To Find Prompts ⤵️

[https://civitai.com/user/SECourses/images](https://civitai.com/user/SECourses/images)

CivitAI My Profile To Find Prompts ⤵️

[https://civitai.com/user/SECourses/posts](https://civitai.com/user/SECourses/posts)

CivitAI Excellent Tutorials ⤵️

[https://civitai.com/user/SECourses/articles](https://civitai.com/user/SECourses/articles)

Perturbed Attention Guidance:

[https://arxiv.org/abs/2403.17377](https://arxiv.org/abs/2403.17377)

An alternative/complementary method to CFG (Classifier-Free Guidance) that increases sampling quality.

Controls

PAG Scale: Controls the intensity of effect of PAG on the generated image.

Also check out the paper authors' official project page:

[https://ku-cvlab.github.io/Perturbed-Attention-Guidance/](https://ku-cvlab.github.io/Perturbed-Attention-Guidance/)

Multi-Concept T2I-Zero / Attention Regulation:

Implements Corrections by Similarities and Cross-Token Non-Maximum Suppression from [https://arxiv.org/abs/2310.07419](https://arxiv.org/abs/2310.07419)

Also implements some methods from "Enhancing Semantic Fidelity in Text-to-Image Synthesis: Attention Regulation in Diffusion Models" [https://arxiv.org/abs/2403.06381](https://arxiv.org/abs/2403.06381)

Corrections by Similarities

Reduces the contribution of tokens on far away or conceptually unrelated tokens.

Cross-Token Non-Maximum Suppression

Attempts to reduces the mixing of features of unrelated concepts.

Controls:

Step End: After this step, the effect of both CbS and CTNMS ends.

Correction by Similarities Window Size: The number of adjacent tokens on both sides that can influence each token

CbS Score Threshold: Tokens with similarity below this threshold have their effect reduced

CbS Correction Strength: How much the Correction by Similarities effects the image.

Alpha for Cross-Token Non-Maximum Suppression: Controls how much effect the attention maps of CTNMS affects the image.

EMA Smoothing Factor: Smooths the results based on the average of the results of the previous steps. 0 is disabled.

Known Issues:

Can error out with image dimensions which are not a multiple of 64

Also check out the paper authors' official project pages:

[https://multi-concept-t2i-zero.github.io/](https://multi-concept-t2i-zero.github.io/)

[https://github.com/YaNgZhAnG-V5/attention_regulation](https://github.com/YaNgZhAnG-V5/attention_regulation)

Seek for Incantations:

An incomplete implementation of a "prompt-upsampling" method from [https://arxiv.org/abs/2401.06345](https://arxiv.org/abs/2401.06345)

Generates an image following the prompt, then uses CLIP text/image similarity to add on to the prompt and generate a new image.

Controls:

Append Generated Caption: If true, will append an additional interrogated caption to the prompt. For Deepbooru Interrogate, recommend disabling.

Deepbooru Interrogate: Uses Deepbooru to interrogate instead of CLIP.

Delimiter: The word to separate the original prompt and the generated prompt. Recommend trying BREAK, AND, NOT, etc.

Word Replacement: The word/token to replace dissimilar words with.

Gamma: Replaces words below this level of similarity with the Word Replacement.

For example, if your prompt is "a blue dog", delimiter is "BREAK", and word replacement is "-", and the level of similarity of the word "blue" in the generated image is below gamma, then the new prompt will be "a blue dog BREAK a - dog"

A WIP implementation of the "prompt optimization" methods are available in branch "s4a-dev2"

Credits

The authors of the papers for their methods:

Seek for Incantations: Towards Accurate Text-to-Image Diffusion Synthesis through Prompt Engineering

Chang Yu and Junran Peng and Xiangyu Zhu and Zhaoxiang Zhang and Qi Tian and Zhen Lei

Multi-Concept T2I-Zero: Tweaking Only The Text Embeddings and Nothing Else

Hazarapet Tunanyan and Dejia Xu and Shant Navasardyan and Zhangyang Wang and Humphrey Shi

Self-Rectifying Diffusion Sampling with Perturbed-Attention Guidance

Donghoon Ahn and Hyoungwon Cho and Jaewon Min and Wooseok Jang and Jungwoo Kim and SeonHwa Kim and Hyun Hee Park and Kyong Hwan Jin and Seungryong Kim



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=0) Greetings everyone. In this tutorial, I am&nbsp; going to introduce you to a new extension&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=5) SD Web UI Incantations. So this extension will&nbsp; allow us to use the very newest algorithms&nbsp;&nbsp;

- [00:00:12](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=12) Perturbed Attention Guidance. It is known as PAG&nbsp; Scale and this attention mechanism allows us to&nbsp;&nbsp;

- [00:00:21](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=21) generate images that follow our prompts better as&nbsp; you are seeing right now. Multi-Concept T2I-Zero&nbsp;&nbsp;

- [00:00:27](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=27) / Attention Regulation. This also allows us to&nbsp; generate better images that follow our prompts&nbsp;&nbsp;

- [00:00:35](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=35) better. You can read their papers. The links are&nbsp; all here and also seek for Incantations. So how&nbsp;&nbsp;

- [00:00:43](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=43) we are going to install and use this extension.&nbsp; This is my Automatic1111 Web installation folder.&nbsp;&nbsp;

- [00:00:50](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=50) So first I will update it to the latest version.&nbsp; So I started CMD and I do get full. If you don't&nbsp;&nbsp;

- [00:00:56](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=56) know how to install Stable Diffusion Automatic SD&nbsp; Web UI, then follow this tutorial. I will put the&nbsp;&nbsp;

- [00:01:04](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=64) link of this tutorial into the description of&nbsp; the video and you will be able to install and&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=69) start it from scratch. Moreover, I also have&nbsp; an automated installer for Stable Diffusion&nbsp;&nbsp;

- [00:01:15](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=75) Web UI. I will put the link of this into the&nbsp; description as well. So how we are going to&nbsp;&nbsp;

- [00:01:20](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=80) install this extension. Let me start my Web UI&nbsp; currently. This is the latest version as you are&nbsp;&nbsp;

- [00:01:27](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=87) seeing one point nine point zero and it started.&nbsp; Let's go to the extensions and from here I will&nbsp;&nbsp;

- [00:01:34](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=94) install from URL you see here and copy the link.&nbsp; I will put the link into the description. Don't&nbsp;&nbsp;

- [00:01:40](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=100) worry and click install. This extension is amazing&nbsp; to inpaint your generated faces automatically to&nbsp;&nbsp;

- [00:01:47](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=107) improve the faces quality. I will also put an&nbsp; install. Then follow what is happening in here.&nbsp;&nbsp;

- [00:01:53](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=113) Since I already have After Detailer installed it&nbsp; gave me error after doing this operation. Close&nbsp;&nbsp;

- [00:01:59](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=119) your terminal and start your Stable Diffusion&nbsp; Web UI again. I prefer you to do this operation&nbsp;&nbsp;

- [00:02:07](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=127) so it will be better. It will install necessary&nbsp; new packages and our installation is ready so we&nbsp;&nbsp;

- [00:02:14](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=134) can see the new extension here Incantations.&nbsp; There is also After Detailer extension and we&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=139) can see Perturbed Attention Guidance Multi-Concept&nbsp; T2I-Zero and Seek for Incantations. So how we are&nbsp;&nbsp;

- [00:02:27](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=147) going to test them. This is my CivitAI profile.&nbsp; I am going to test them on these hard to generate&nbsp;&nbsp;

- [00:02:33](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=153) images. These are hard images and these images&nbsp; contain PNG info. These images generated with my&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=160) one trainer fine-tuned model of myself. I have&nbsp; recently published this amazing tutorial. It&nbsp;&nbsp;

- [00:02:46](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=166) is over two hours. You can watch this tutorial to&nbsp; learn how to train yourself if you are interested&nbsp;&nbsp;

- [00:02:52](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=172) in that. However, to use this extension you&nbsp; don't need a custom model. You don't need a&nbsp;&nbsp;

- [00:02:58](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=178) trained model. You can use this extension&nbsp; on any model simply. So let's right-click&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=183) and save this image as into the downloads.&nbsp; Go to the PNG info. Let's load the image.&nbsp;&nbsp;

- [00:03:10](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=190) Send text to the image tab. I don't know why but&nbsp; Automatic1111 Web UI activating high resolution&nbsp;&nbsp;

- [00:03:17](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=197) fix even though I didn't use it. So just turn it&nbsp; off and the sampling method and schedule type is&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=202) selected. Schedule type is now displayed here. I&nbsp; find that DPM++ 2M SDE Karras as best. These are&nbsp;&nbsp;

- [00:03:30](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=210) the default values that I have used. This is the&nbsp; seed. I also need to enable After Detailer. Let me&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=215) show you my After Detailer settings detection.&nbsp; I detect only the first face in the image mask&nbsp;&nbsp;

- [00:03:42](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=222) processing. I don't change it in painting. I only&nbsp; change inpainting denoising strength to 0.5 and I&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=229) use separate steps to get better face quality and&nbsp; then there is Incantations. I didn't use them yet.&nbsp;&nbsp;

- [00:03:55](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=235) So let's first get the original image. Generate&nbsp; the speed is currently 3 it per second. Which is&nbsp;&nbsp;

- [00:04:01](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=241) generated. However, it is not exactly the same.&nbsp; The face probably this is because the scheduler&nbsp;&nbsp;

- [00:04:08](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=248) is changed. So use a separate sampler select&nbsp; SDE from here and also Karras here. Then I will&nbsp;&nbsp;

- [00:04:15](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=255) generate the image again to get the exact same&nbsp; image and I got the same base image as you are&nbsp;&nbsp;

- [00:04:22](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=262) seeing right now. So time to test the improvement&nbsp; of Incantations. First, let's try Perturbed&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=269) Attention Guidance activated and generate the&nbsp; image again and we got the output. Are there&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=275) any differences? So let's save this image as&nbsp; well. I say with the previous one. Then let's&nbsp;&nbsp;

- [00:04:41](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=281) go to imgsli.com. Make a new album. Let's load&nbsp; the images first one and the second one to see&nbsp;&nbsp;

- [00:04:49](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=289) the effect of the Perturbed Attention Guidance.&nbsp; So here it is. Let's make it full screen. Okay,&nbsp;&nbsp;

- [00:04:55](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=295) the left one is the original and the right one&nbsp; is the new improvement. Are there improvement?&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=301) Yes. For example, look at the hands here. This is&nbsp; the original and this is the new one. You see the&nbsp;&nbsp;

- [00:05:08](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=308) head is automatically improved. I can see that.&nbsp; And there is also some other improvements in this&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=314) part. So overall, there is an improvement without&nbsp; anything else. You see this is a free improvement&nbsp;&nbsp;

- [00:05:20](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=320) to our images image generation. And I like it.&nbsp; Why not use it while we can get an improvement.&nbsp;&nbsp;

- [00:05:27](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=327) So this was the first test. What happens if you&nbsp; increase it as you increase it more the quality&nbsp;&nbsp;

- [00:05:32](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=332) degrades unfortunately. So the one is a sweet spot&nbsp; probably. Then let's try Multi-Concept T2I-Zero.&nbsp;&nbsp;

- [00:05:40](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=340) There are so many options. I tried all of them.&nbsp; However, there aren't that many improvements.&nbsp;&nbsp;

- [00:05:46](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=346) So let's make the ending step 40 because we are&nbsp; generating images with 40 steps. Then there is&nbsp;&nbsp;

- [00:05:52](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=352) one thing that I have found improving the quality&nbsp; which is EMA Smoothing Factor I make it one this&nbsp;&nbsp;

- [00:05:58](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=358) really improves. And that's it. Let's generate&nbsp; the image. When you activate both of them,&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=364) both Incantations and Multi-Concept T2I-Zero, it&nbsp; doesn't bring improvement. Actually, they conflict&nbsp;&nbsp;

- [00:06:11](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=371) I think so you don't get better images and we are&nbsp; getting the results. Okay, the image is generated.&nbsp;&nbsp;

- [00:06:16](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=376) Let's go back to the image SLI. And let's make&nbsp; another comparison default or to print attention&nbsp;&nbsp;

- [00:06:23](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=383) guidance. And let's also add the Multi-Concept&nbsp; T2I and upload all. Okay, let's make full screen&nbsp;&nbsp;

- [00:06:29](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=389) again. So this is default versus Perturbed&nbsp; Attention. And there is also now Multi-Concept.&nbsp;&nbsp;

- [00:06:35](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=395) Let's see the difference. So the right one is&nbsp; Multi-Concept and the left one is the default.&nbsp;&nbsp;

- [00:06:41](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=401) There are some improvements such as the hands&nbsp; are better. The overall image is I don't know,&nbsp;&nbsp;

- [00:06:48](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=408) looking good, not much improvement, but looking&nbsp; good. And like this maybe didn't work on this&nbsp;&nbsp;

- [00:06:55](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=415) image very well. But I see some improvements. For&nbsp; example, the eyes of the dinosaur are certainly&nbsp;&nbsp;

- [00:07:01](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=421) improved. You see from this to this, this one has&nbsp; like some error, this is the eye and is the eye&nbsp;&nbsp;

- [00:07:06](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=426) but this has better eyes and the environment&nbsp; I think environment is also better as you are&nbsp;&nbsp;

- [00:07:12](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=432) seeing right now. So these also improved. Let's&nbsp; compare with Perturbed Attention guidance and&nbsp;&nbsp;

- [00:07:17](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=437) Multi-Concept text image zero. So the right&nbsp; one and left one, as you are seeing right now,&nbsp;&nbsp;

- [00:07:24](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=444) I don't know which one is better. It is like a&nbsp; personal opinion, but yeah, from left to right&nbsp;&nbsp;

- [00:07:31](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=451) from left to right. So it is up to you, you can&nbsp; use either of them to get some improvements. This&nbsp;&nbsp;

- [00:07:37](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=457) is pre improvement. So you can decide which one&nbsp; to use both of them is good. So what happens if&nbsp;&nbsp;

- [00:07:44](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=464) we activate both of them at the same time? Okay,&nbsp; I have activated both Perturbed Attention guidance&nbsp;&nbsp;

- [00:07:50](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=470) and Multi-Concept text image zero at the same&nbsp; time. And let's see what happens. By the way,&nbsp;&nbsp;

- [00:07:56](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=476) my speed is degraded greatly right now, because&nbsp; both of the algorithms are activated. And this&nbsp;&nbsp;

- [00:08:01](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=481) is the output when both of the algorithms&nbsp; are activated. Let's also compare it. So&nbsp;&nbsp;

- [00:08:07](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=487) this will be both. Let's make a new album default,&nbsp; Perturbed Attention, Multi-Concept and both of the&nbsp;&nbsp;

- [00:08:16](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=496) attentions. Okay. And here the results. So let's&nbsp; compare both and default. Okay, on the right,&nbsp;&nbsp;

- [00:08:22](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=502) there is both and on the left original. Let's see,&nbsp; it doesn't look like there is much improvement&nbsp;&nbsp;

- [00:08:29](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=509) here. As you are seeing the eyes are worse. I&nbsp; don't know the teeth are looking decent. But&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=515) this is it. So you can play with it and see which&nbsp; one is working best. However, this is supposed to&nbsp;&nbsp;

- [00:08:42](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=522) improve all of your images without making anything&nbsp; extra. There is also Seek for Incantations. Let's&nbsp;&nbsp;

- [00:08:49](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=529) also try it. I couldn't get better images with&nbsp; Seek for Incantations. Also, this may give you&nbsp;&nbsp;

- [00:08:55](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=535) some errors. I think it is using the BLIP model as&nbsp; like a prompting like IP adapter. So let's see the&nbsp;&nbsp;

- [00:09:04](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=544) result. Currently, only active is selected. There&nbsp; is also append generated caption and Deepbooru&nbsp;&nbsp;

- [00:09:09](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=549) Interrogate. So we will see. And this is the&nbsp; result of Seek for Incantations. You can see&nbsp;&nbsp;

- [00:09:16](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=556) from left to right image. I don't know if there is&nbsp; much improvement. Actually, there looks like some&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=563) degrade, but it is up to you to decide. So let's&nbsp; try the other options. Let's also append generated&nbsp;&nbsp;

- [00:09:30](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=570) caption. You can see both of the images from here&nbsp; you see from this and this one you see. Okay,&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=576) let's also try append generated caption.&nbsp; When append generated caption is selected,&nbsp;&nbsp;

- [00:09:42](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=582) we can see the generated caption here you see&nbsp; dinosaur writing. So these are the generated&nbsp;&nbsp;

- [00:09:48](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=588) captions. And I think they're appended to my&nbsp; original prompt. So let's see what we will get.&nbsp;&nbsp;

- [00:09:54](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=594) Okay, this is the result when we appended more&nbsp; captions. I don't know if there is improvement,&nbsp;&nbsp;

- [00:10:00](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=600) but you can see it. I think the face is now not&nbsp; very good compared to the original face. The hands&nbsp;&nbsp;

- [00:10:08](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=608) don't look better either. And the position&nbsp; and nothing is looking better if you ask my&nbsp;&nbsp;

- [00:10:13](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=613) opinion. So let's also use Deepbooru Interrogate.&nbsp; There was an explanation here regarding Deepbooru&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=622) Interrogate uses Deepbooru to interrogate instead&nbsp; of CLIP. And there was some tips if I remember&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=629) if through will append. Okay, it says that for&nbsp; Deepbooru Interrogate recommend that disabling.&nbsp;&nbsp;

- [00:10:36](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=636) So when this option is selected, we will disable&nbsp; this and try again and see what will happen.&nbsp;&nbsp;

- [00:10:42](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=642) Deepbooru style of tagging is like this one boy&nbsp; against three animal bamboo bamboo forest blue&nbsp;&nbsp;

- [00:10:49](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=649) shirt branch and these other tokens added to the&nbsp; prompt so it is going to generate a very different&nbsp;&nbsp;

- [00:10:57](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=657) image. And you see it is like this. So on the left&nbsp; original image and on the right, this is the new&nbsp;&nbsp;

- [00:11:03](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=663) image. I don't know why this exists, but in some&nbsp; cases, this might give you better images. However,&nbsp;&nbsp;

- [00:11:10](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=670) in my dream boots trained model image generation,&nbsp; it doesn't. But in this image, we can notice that&nbsp;&nbsp;

- [00:11:16](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=676) the environment is better than the original image,&nbsp; I think. So you can play with these options and&nbsp;&nbsp;

- [00:11:22](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=682) see which one is working best for you. Also, on my&nbsp; CivitAI profile, you can find a lot of prompts and&nbsp;&nbsp;

- [00:11:31](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=691) amazing images. All of them have PNG info embedded&nbsp; so you can download them and look in the PNG info&nbsp;&nbsp;

- [00:11:39](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=699) tab and see the prompt and which settings do&nbsp; I use to generate such images. I hope you have&nbsp;&nbsp;

- [00:11:47](https://www.youtube.com/watch?v=lMQ7DIPmrfI&t=707) enjoyed please subscribe like and hopefully&nbsp; see you in another amazing tutorial video.
