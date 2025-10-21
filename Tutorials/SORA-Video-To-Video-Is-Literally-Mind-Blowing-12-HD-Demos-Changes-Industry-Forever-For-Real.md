# SORA Video To Video Is Literally Mind Blowing - 12 HD Demos - Changes Industry Forever For Real

## Full tutorial link > https://www.youtube.com/watch?v=a2yGs8bEeQg

[![SORA Video To Video Is Literally Mind Blowing - 12 HD Demos - Changes Industry Forever For Real](https://img.youtube.com/vi/a2yGs8bEeQg/sddefault.jpg)](https://www.youtube.com/watch?v=a2yGs8bEeQg "SORA Video To Video Is Literally Mind Blowing - 12 HD Demos - Changes Industry Forever For Real")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SORA-Video-To-Video-Is-Literally-Mind-Blowing-12-HD-Demos-Changes-Industry-Forever-For-Real.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SORA-Video-To-Video-Is-Literally-Mind-Blowing-12-HD-Demos-Changes-Industry-Forever-For-Real.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


I have combined all 12 Video To Video #SORA demos released by #OpenAI into 1 video with their used prompts and a amazing background music. You won't believe how this Video to Video will change entire movie, animation, social media industries forever. The results are just simply astonishing.

Our Discord Channel ⤵️

[https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388)

Our Patreon With Amazing AI Scripts & Tutorials ⤵️

[https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Prompts Of Each Demo Video (Public Post) ⤵️

[https://www.patreon.com/posts/98564118](https://www.patreon.com/posts/98564118)

Official Site ⤵️

[https://openai.com/sora](https://openai.com/sora)

[AI video generation] Sora element technology explanation

Sora's technical configuration

Although the paper has not been published, OpenAI has published an explanation page for the elemental technology, so I will refer to that page.

If you would like to see the original text, please click here

overall structure

Sora is said to consist of the following technical elements.

Turning visual data into patches

Video compression network

Spacetime latent patches

Scaling transformers for video generation

Variable durations, resolutions, aspect ratios

Sampling flexibility

Improved framing and composition

Language understanding

To summarize very simply, there are four main elements:

A technology that compresses video data into latent space and then converts it into a "spatiotemporal latent patch" that Transformer can use as a token.

Transformer-based video diffusion model

Dataset creation using high-precision video captioning using DALLE3

Looking at it this way, it doesn't seem like they're using particularly new technology.

Raise your level and hit it physically. You can clearly understand the importance of level (money/calculation resources) rather than small techniques.

Turning visual data into patches

First, let's look at how to create a "space-time potential patch."

(Source: [https://openai.com/research/video-generation-models-as-world-simulators](https://openai.com/research/video-generation-models-as-world-simulators))

As a pre-process to create a spatiotemporal latent patch, the input video (video data) is compressed into a latent space.

If you think of it as equivalent to VAE in image generation, I think it's mostly correct.

(In fact, since the paper on VAE is cited, I think it's safe to assume that it's just VAE.)

This greatly reduces the amount of calculation, and Sora trains with this compressed latent space. Masu.

In image generation, training begins immediately after conversion to VAE, but Sora includes another conversion process to create what is called a spatiotemporal latent patch.

This seems to correspond to a text token in LLM.

An image is worth 16x16 words: Transformers for image recognition at scale.

The patching method divides the image based on position (patching) and converts it into a one-dimensional vector (flatten/smoothing).

For those who want to know more ( [https://qiita.com/wakayama_90b/items/55bba80338615c7cce73](https://qiita.com/wakayama_90b/items/55bba80338615c7cce73) )

(Source: [https://arxiv.org/pdf/2010.11929.pdf](https://arxiv.org/pdf/2010.11929.pdf) )

Vivit: A video vision transformer.

There are two patching methods proposed here:

Similar to ViT, how to patch based on position and concatenate it in frame order (figure 2)

Capturing the input video three-dimensionally, extracting blocks (tubes) of t (number of frames) x h (patch height) x w (patch width) and compressing them into one dimension.

For those who want to know more ( [https://deideeplearning.com/2021/05/26/post-476/](https://deideeplearning.com/2021/05/26/post-476/) )

(Source: [https://arxiv.org/pdf/2103.15691.pdf](https://arxiv.org/pdf/2103.15691.pdf) )

Masked autoencoders are scalable vision learners.

Rather than a patching method, this paper is about efficiently learning patched images.

Effective as pre-learning for ViT

Input a masked part of a patched token and solve the task of restoring the masked part

For those who want to know more ( [https://zenn.dev/takoroy/articles/98400e156576df](https://zenn.dev/takoroy/articles/98400e156576df) )

(Source: [https://arxiv.org/pdf/2111.06377.pdf](https://arxiv.org/pdf/2111.06377.pdf) )

Patch n'Pack: NaViT, a Vision Transformer for any Aspect Ratio and Resolution.

A paper that allows you to freely change the resolution and aspect ratio of input data

By taking advantage of the fact that ViT can change the length of the input sequence and packing the sequence, it is now possible to input any resolution or aspect ratio.

Using this technology, Sora can be trained on videos and images of varying resolutions, lengths, and aspect ratios, allowing you to control the size of the videos produced during inference.

(Source: [https://arxiv.org/pdf/2307.06304.pdf](https://arxiv.org/pdf/2307.06304.pdf) )

Song: Unknown Brain - MATAFAKA (feat. Marvin Divine) [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/MATAFAKA](http://ncs.io/MATAFAKA)

Watch: [http://youtu.be/AlXfbVpDUdo](http://youtu.be/AlXfbVpDUdo)

Song: Warriyo - Mortals (feat. Laura Brehm) [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/mortals](http://ncs.io/mortals)

Watch: [http://youtu.be/yJg-Y5byMMw](http://youtu.be/yJg-Y5byMMw)

Song: Egzod, Maestro Chives, Neoni - Royalty [NCS Release]

Music provided by NoCopyrightSounds

Free Download/Stream: [http://ncs.io/Royalty](http://ncs.io/Royalty)

Watch: [http://youtu.be/C5fLxtJH2Qs](http://youtu.be/C5fLxtJH2Qs)



### Video Transcription


- [00:01:01](https://www.youtube.com/watch?v=a2yGs8bEeQg&t=61) f [Music]

- [00:01:23](https://www.youtube.com/watch?v=a2yGs8bEeQg&t=83) [Music] [Applause]

- [00:01:27](https://www.youtube.com/watch?v=a2yGs8bEeQg&t=87) [Applause] [Music]

- [00:01:28](https://www.youtube.com/watch?v=a2yGs8bEeQg&t=88) [Music] he
