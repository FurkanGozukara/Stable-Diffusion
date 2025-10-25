# Get Ready to be Blown Away! NVIDIA's Crazy New Neural Engine is Redefining Realism in Graphics!

## Full tutorial link > https://www.youtube.com/watch?v=RTWbCuDhC3c

[![Get Ready to be Blown Away! NVIDIA's Crazy New Neural Engine is Redefining Realism in Graphics!](https://img.youtube.com/vi/RTWbCuDhC3c/sddefault.jpg)](https://www.youtube.com/watch?v=RTWbCuDhC3c "Get Ready to be Blown Away! NVIDIA's Crazy New Neural Engine is Redefining Realism in Graphics!")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Get-Ready-to-be-Blown-Away-NVIDIAs-Crazy-New-Neural-Engine-is-Redefining-Realism-in-Graphics.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Get-Ready-to-be-Blown-Away-NVIDIAs-Crazy-New-Neural-Engine-is-Redefining-Realism-in-Graphics.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Real-Time Neural Appearance Models. Hello everyone! Today, we're talking about the latest breakthrough from #NVIDIA. They've developed a new neural engine that can render ultra-realistic video in real-time. This means we're entering a new era of graphics and video processing that's faster and more advanced than ever before. In this video, we'll explore what this new technology can do, and how it's set to revolutionize a range of industries. So, without further ado, let's dive in!

Our Discord server ⤵️

[https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 ⤵️

[https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology & Science: News, Tips, Tutorials, Tricks, Best Applications, Guides, Reviews ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Playlist of StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

Paper and the video link ⤵️

[https://research.nvidia.com/labs/rtr/neural_appearance_models/](https://research.nvidia.com/labs/rtr/neural_appearance_models/)

Info from the paper

Abstract

We present a complete system for real-time #rendering of scenes with complex appearance previously reserved for offline use. This is achieved with a combination of algorithmic and system level innovations.

Our appearance model utilizes learned hierarchical textures that are interpreted using neural decoders, which produce reflectance values and importance-sampled directions. To best utilize the modeling capacity of the decoders, we equip the decoders with two graphics priors. The first prior—transformation of directions into learned shading frames—facilitates accurate reconstruction of mesoscale effects. The second prior—a microfacet sampling distribution—allows the neural decoder to perform importance sampling efficiently. The resulting appearance model supports anisotropic sampling and level-of-detail rendering, and allows baking deeply layered material graphs into a compact unified neural representation.

By exposing hardware accelerated tensor operations to ray tracing shaders, we show that it is possible to inline and execute the neural decoders efficiently inside a real-time path tracer. We analyze scalability with increasing number of neural materials and propose to improve performance using code optimized for coherent and divergent execution. Our neural material shaders can be over an order of magnitude faster than non-neural layered materials. This opens up the door for using film-quality visuals in real-time applications such as games and live previews.

1 INTRODUCTION

Recent progress in rendering algorithms, light transport methods, and ray tracing hardware have pushed the limits of image quality that can be achieved in real time. However, progress in real-time material models has noticeably lagged behind. While deeply layered materials and sophisticated node graphs are commonplace in offline rendering, such approaches are often far too costly to be used in real-time applications. Aside from computational cost, sophisticated materials pose additional challenges for importance sampling and filtering: highly detailed materials will alias severely under minification, and the complex multi-lobe reflectance of layered materials causes high variance if not sampled properly.

Recent work in neural appearance modelling [Kuznetsov et al. 2022; Sztrajman et al. 2021; Zheng et al. 2021] has shown that multilayer perceptrons (MLPs) can be an effective tool for appearance modelling, importance sampling, and filtering. Nevertheless, these models do not support film-quality appearance; a scalable solution that can handle high-fidelity visuals at real time has yet to be demonstrated.

In this paper, we set our goal accordingly: to render film-quality materials, such as those used in the #VFX industry, in real time. These materials prioritize realism and visual fidelity, relying on very high-resolution textures. Layering of reflectance components, rather than an uber-shader, is used to generate material appearance yielding arbitrary BRDF combinations with hundreds of parameters. For these reasons, porting to real-time application is challenging.

In order to render film-quality appearance in real time we i) carefully cherry-pick components from prior works, ii) introduce algorithmic innovations, and iii) develop a scalable solution for inlining neural networks in the innermost rendering loop, both for classical rasterization and path tracing. We choose to forgo editability in favor of performance, effectively “baking” the reference material into a neural texture interpreted by neural networks. Our model can thus be viewed as an optimized representation for fast rendering, which is baked (via optimization) after editing has taken place.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=0) Greetings everyone. NVIDIA's New Neural Engine&nbsp; is going to shock the entire Real-Time Graphics&nbsp;&nbsp;

- [00:00:06](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=6) industry! The article and the original&nbsp; video link will be in the description.&nbsp;&nbsp;

- [00:00:10](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=10) Let see their supplementary amazing video while&nbsp; listening the paper from a reporter style voice.

- [00:00:16](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=16) According to this paper, a complete&nbsp; system for real-time rendering of scenes&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=20) with complex appearance, which was previously&nbsp; reserved for offline use, has been introduced.

- [00:00:26](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=26) This system is a result of a combination of&nbsp; algorithmic and system level innovations.

- [00:00:31](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=31) The appearance model of the system&nbsp; incorporates learned hierarchical textures,&nbsp;&nbsp;

- [00:00:35](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=35) which are interpreted using neural decoders,&nbsp;&nbsp;

- [00:00:38](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=38) producing reflectance values and&nbsp; importance-sampled directions.

- [00:00:42](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=42) To enhance the modeling capacity of the decoders,&nbsp; two graphics priors are equipped - the first one&nbsp;&nbsp;

- [00:00:47](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=47) facilitates accurate reconstruction of mesoscale&nbsp; effects by transforming directions into learned&nbsp;&nbsp;

- [00:00:53](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=53) shading frames, and the second one allows&nbsp; the neural decoder to perform importance&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=58) sampling efficiently by incorporating&nbsp; a microfacet sampling distribution. &nbsp;

- [00:01:02](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=62) The resulting appearance model allows anisotropic&nbsp; sampling and level-of-detail rendering,&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=68) and enables baking deeply layered material graphs&nbsp; into a compact unified neural representation.

- [00:01:14](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=74) By exposing hardware accelerated tensor operations&nbsp; to ray tracing shaders, the system has made it&nbsp;&nbsp;

- [00:01:20](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=80) possible to efficiently inline and execute the&nbsp; neural decoders inside a real-time path tracer.

- [00:01:26](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=86) The scalability analysis of the&nbsp; system with increasing number&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=89) of neural materials has been carried out,&nbsp; and a proposal to enhance the performance&nbsp;&nbsp;

- [00:01:34](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=94) using code optimized for coherent and&nbsp; divergent execution has been made.

- [00:01:40](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=100) The neural material shaders of&nbsp; this system have been reported to&nbsp;&nbsp;

- [00:01:43](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=103) be over an order of magnitude faster&nbsp; than non-neural layered materials.

- [00:01:48](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=108) This development opens up the&nbsp; possibility of using film-quality&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=112) visuals in real-time applications&nbsp; such as games and live previews.

- [00:01:56](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=116) In conclusion, the system utilizes&nbsp; appearance models, neural networks,&nbsp;&nbsp;

- [00:02:01](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=121) and real-time rendering to achieve a breakthrough&nbsp; in the field of graphics and visual effects.

- [00:02:07](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=127) According to this research, advances in&nbsp; rendering algorithms, light transport methods,&nbsp;&nbsp;

- [00:02:12](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=132) and ray tracing hardware have significantly&nbsp; improved real-time image quality .

- [00:02:18](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=138) However, real-time material models&nbsp; have not kept up with the progress,&nbsp;&nbsp;

- [00:02:22](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=142) as highly detailed materials and&nbsp; complex node graphs used in offline&nbsp;&nbsp;

- [00:02:27](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=147) rendering are often too expensive to&nbsp; be used in real-time applications.

- [00:02:31](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=151) In addition to computational cost&nbsp; , sophisticated materials pose&nbsp;&nbsp;

- [00:02:36](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=156) challenges for importance sampling and filtering.

- [00:02:38](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=158) Recent work in neural appearance modeling has&nbsp; shown promise in addressing these challenges.

- [00:02:45](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=165) Multi-layer perceptrons have been&nbsp; effective in appearance modeling,&nbsp;&nbsp;

- [00:02:49](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=169) importance sampling, and filtering.

- [00:02:51](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=171) However, these models do not yet support&nbsp; film-quality appearance in real-time.

- [00:02:56](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=176) The goal of this paper is to&nbsp; develop a scalable solution to&nbsp;&nbsp;

- [00:03:00](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=180) render film-quality materials used&nbsp; in the VFX industry in real-time,&nbsp;&nbsp;

- [00:03:05](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=185) despite the challenges posed by high-resolution&nbsp; textures and layered reflectance components.

- [00:03:10](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=190) The approach involves "baking"&nbsp; reference material into a neural&nbsp;&nbsp;

- [00:03:14](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=194) texture interpreted by neural networks,&nbsp; sacrificing editability for performance.

- [00:03:19](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=199) The model consists of an encoder and two&nbsp; decoders, with the neural texture in between.

- [00:03:25](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=205) The encoder maps BRDF&nbsp; parameters to a latent space,&nbsp;&nbsp;

- [00:03:30](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=210) and the latent texture is decoded using&nbsp; two networks for evaluation and sampling.

- [00:03:35](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=215) Algorithmic innovations involve embedding&nbsp; fixed-function elements or graphics priors&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=221) in the two neural decoders to efficiently utilize&nbsp; the limited expressive power of small networks.

- [00:03:47](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=227) A method for inlining fully fused neural&nbsp; networks in rendering code is also presented.

- [00:03:53](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=233) This is the first complete and scalable system&nbsp;&nbsp;

- [00:03:56](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=236) for running neural material shaders&nbsp; inside real-time shading languages.

- [00:04:00](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=240) The execution model efficiently&nbsp; handles divergent code paths and&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=244) allows fast inferencing in any shader stage,&nbsp; including ray tracing and fragment shaders.

- [00:04:11](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=251) The system can render complex materials&nbsp; that are the norm in offline rendering&nbsp;&nbsp;

- [00:04:15](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=255) and achieve the visual fidelity of highly&nbsp; detailed assets with layered materials.

- [00:04:21](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=261) The joint evolution of models and systems is&nbsp; crucial to bringing neural shaders to real-time,&nbsp;&nbsp;

- [00:04:26](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=266) and this paper provides a solid&nbsp; foundation for such developments.

- [00:04:31](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=271) Moreover, the authors aim to provide an optimized&nbsp; representation for fast rendering, which is&nbsp;&nbsp;

- [00:04:37](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=277) achieved by "baking" the reference material into&nbsp; a neural texture interpreted by neural networks.

- [00:04:43](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=283) The resulting model is a system&nbsp; that fits their criteria,&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=286) but it naturally comes with limitations, which&nbsp; the authors hope to address in future work.

- [00:04:51](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=291) The model consists of an encoder and two decoders,&nbsp; with the neural (latent) texture in between.

- [00:04:58](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=298) The encoder maps BRDF parameters to a latent&nbsp; space, which is then converted into a single&nbsp;&nbsp;

- [00:05:05](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=305) multi-channel latent texture.

- [00:05:07](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=307) The latent texture is decoded using two networks,&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=310) an evaluation network that infers the&nbsp; BRDF value for a given pair of directions,&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=314) and a sampling network that maps random&nbsp; numbers to sampled (outgoing) directions.

- [00:05:20](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=320) The authors introduce several algorithmic&nbsp;&nbsp;

- [00:05:22](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=322) innovations to support materials&nbsp; with high-resolution textures.

- [00:05:26](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=326) For example, they embed fixed-function elements,&nbsp;&nbsp;

- [00:05:30](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=330) graphics priors, in the two neural&nbsp; decoders, such as a standard rotation&nbsp;&nbsp;

- [00:05:35](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=335) operation between trainable components of the&nbsp; BRDF decoder to handle normal mapped surfaces.

- [00:05:40](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=340) They also utilize a network-driven microfacet&nbsp; distribution for importance sampling.

- [00:05:46](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=346) These priors are necessary to efficiently utilize&nbsp; the limited expressive power of small networks.

- [00:05:52](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=352) At the system level, the authors present an&nbsp; efficient method for inlining fully fused&nbsp;&nbsp;

- [00:05:57](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=357) neural networks in rendering code, which&nbsp; is the first complete and scalable system&nbsp;&nbsp;

- [00:06:02](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=362) for running neural material shaders&nbsp; inside real-time shading languages.

- [00:06:07](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=367) The authors' execution model utilizes tensor&nbsp; operations whenever possible and efficiently&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=372) handles divergent code paths, allowing&nbsp; fast inferencing in any shader stage,&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=378) including ray tracing and fragment shaders,&nbsp;&nbsp;

- [00:06:20](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=380) which is essential for adoption in game&nbsp; engines and interactive applications.

- [00:06:24](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=384) The authors demonstrate graceful&nbsp; cost scaling in scenes with many&nbsp;&nbsp;

- [00:06:28](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=388) different neural materials running&nbsp; inside a real-time path tracer.

- [00:06:33](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=393) Their neural model has a fixed evaluation&nbsp; cost, independent of the material complexity,&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=399) allowing them to render complex materials&nbsp; that are the norm in offline rendering.

- [00:06:44](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=404) To demonstrate this, they authored&nbsp; several highly detailed assets with&nbsp;&nbsp;

- [00:06:48](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=408) layered materials that provide visual detail&nbsp; down to a 10 centimeters viewing distance.

- [00:06:53](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=413) They were able to reproduce the visual&nbsp; fidelity of such complex assets,&nbsp;&nbsp;

- [00:06:57](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=417) with shading being up to 10 times faster than the&nbsp; original, moderately optimized shading models,&nbsp;&nbsp;

- [00:07:03](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=423) while also providing additional&nbsp; sampling and filtering facilities.

- [00:07:07](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=427) The authors' work represents&nbsp; a significant step forward&nbsp;&nbsp;

- [00:07:10](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=430) in rendering film-quality materials in real time.

- [00:07:13](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=433) By developing a system that is both&nbsp; efficient and scalable, the authors&nbsp;&nbsp;

- [00:07:17](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=437) have laid a solid foundation&nbsp; for future work in this area.

- [00:07:21](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=441) They believe that the joint evolution of models&nbsp; and systems is crucial to bringing neural shaders&nbsp;&nbsp;

- [00:07:27](https://www.youtube.com/watch?v=RTWbCuDhC3c&t=447) to real-time, and they have built their system&nbsp; to serve as a platform for this evolution.
