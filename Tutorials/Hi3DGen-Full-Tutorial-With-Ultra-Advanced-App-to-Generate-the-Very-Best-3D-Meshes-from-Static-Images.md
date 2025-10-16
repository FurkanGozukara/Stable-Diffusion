# Hi3DGen Full Tutorial With Ultra Advanced App to Generate the Very Best 3D Meshes from Static Images

## Full tutorial link > https://www.youtube.com/watch?v=HjbD20B2C1g

[![Hi3DGen Full Tutorial With Ultra Advanced App to Generate the Very Best 3D Meshes from Static Images](https://img.youtube.com/vi/HjbD20B2C1g/sddefault.jpg)](https://www.youtube.com/watch?v=HjbD20B2C1g "Hi3DGen Full Tutorial With Ultra Advanced App to Generate the Very Best 3D Meshes from Static Images")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Hi3DGen-Full-Tutorial-With-Ultra-Advanced-App-to-Generate-the-Very-Best-3D-Meshes-from-Static-Images.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Hi3DGen-Full-Tutorial-With-Ultra-Advanced-App-to-Generate-the-Very-Best-3D-Meshes-from-Static-Images.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Hi3DGen is the newest state of the art image to 3D mesh generation model. In this tutorial I will show you step by step how to install and use this amazing open source AI model to generate the very best 3D meshes from static images and use in your projects.

🔗Follow below link to download the zip file that contains App installer - the one used in the tutorial ⤵️

▶️ [https://www.patreon.com/posts/The-App-Installer-130766890](https://www.patreon.com/posts/The-App-Installer-130766890)

🔗 Requirements - Python, Git, CUDA, C++, FFMPEG, MSVC installation tutorial ⤵️

▶️ [https://youtu.be/DrhUHnYfwC0](https://youtu.be/DrhUHnYfwC0)

🔗 SECourses Official Discord 10500+ Members ⤵️

▶️ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388)

🔗 Stable Diffusion, FLUX, Generative AI Tutorials and Resources GitHub ⤵️

▶️ [https://github.com/FurkanGozukara/Stable-Diffusion](https://github.com/FurkanGozukara/Stable-Diffusion)

🔗 SECourses Official Reddit - Stay Subscribed To Learn All The News and More ⤵️

▶️ [https://www.reddit.com/r/SECourses/](https://www.reddit.com/r/SECourses/)

🔗 SUPIR Image Upscaling App Tutorial for Upscaling Images With Really Adding New Details ⤵️

▶️ [https://youtu.be/OYxVEvDf284](https://youtu.be/OYxVEvDf284)

DetailVerse: The Fuel for High-Fidelity

High-quality models require high-quality data. The researchers found that existing 3D datasets like Objaverse, while large, are dominated by objects with simple geometry and plain surfaces. Training on such data inherently limits a model's ability to generate complex details.

To solve this, they built DetailVerse, a massive synthetic dataset of 700,000 high-quality 3D assets specifically designed to be rich in geometric complexity. The creation pipeline is a feat of engineering in itself:

Text Prompt Curation: Starting with 14 million text prompts, they used LLMs to filter, classify, and standardize them to describe diverse, single-objects with clear geometric attributes.

High-Quality Image Generation: The state-of-the-art text-to-image model Flux.1-Dev was used to generate images from these prompts, with specific instructions for isometric views and high detail.

Robust 3D Synthesis: The powerful image-to-3D model Trellis was used to convert these images into 3D meshes.

Rigorous Quality Control: The resulting 3D assets underwent a strict filtering process, using both automated checks (a DINOv2-based quality classifier) and human expert evaluation to ensure only the highest-quality, artifact-free models made it into the final DetailVerse dataset.

Results: Setting a New State of the Art

Hi3DGen's performance was rigorously evaluated, and the results speak for themselves.

Qualitative Superiority: As seen in numerous visual comparisons, Hi3DGen consistently generates 3D models with superior detail and fidelity to the input image. It excels at capturing complex textures, sharp edges, and subtle surface variations that other models miss entirely.

Quantitative Dominance: In quantitative benchmarks for normal estimation, NiRNE significantly outperforms both regression-based and diffusion-based methods on key metrics like Normal Error (NE) and Sharp Normal Error (SNE).

User-Approved: In a user study involving both amateur 3D users and professional 3D artists, Hi3DGen's results were overwhelmingly preferred over five other leading models, including Hunyuan3D-2.0, Dora, Clay, Tripo-2.5, and Trellis.

Hi3DGen represents a significant leap forward in single-image 3D generation. By rejecting the direct 2D-to-3D approach and instead adopting a "normal bridging" strategy, the framework effectively decomposes a complex problem into solvable parts. The combination of a specialized normal estimator (NiRNE), a regularized geometry generator (NoRLD), and a purpose-built, detail-rich dataset (DetailVerse) creates a synergistic system that achieves unprecedented fidelity.

Video Chapters

[00:00:00](https://youtu.be/HjbD20B2C1g?t=0) Introducing Hi3DGen: State-of-the-Art Image-to-3D Model

[00:00:34](https://youtu.be/HjbD20B2C1g?t=34) Advanced Gradio App Features & One-Click Installation

[00:01:17](https://youtu.be/HjbD20B2C1g?t=77) In-Depth App UI Features: Presets & 3D Result Analysis

[00:02:14](https://youtu.be/HjbD20B2C1g?t=134) How to Download & Install Hi3DGen App on Windows

[00:02:55](https://youtu.be/HjbD20B2C1g?t=175) Starting the Fully Automatic Windows Installation Process

[00:03:38](https://youtu.be/HjbD20B2C1g?t=218) Pro Tip: Upscale Input Images with SUPIR for Best Quality

[00:04:25](https://youtu.be/HjbD20B2C1g?t=265) App Parameter Guide and Batch Processing Folder Setup

[00:05:12](https://youtu.be/HjbD20B2C1g?t=312) How to Install and Use on Cloud GPUs (RunPod & Massed Compute)

[00:05:46](https://youtu.be/HjbD20B2C1g?t=346) Installation Complete & How to Resume Failed Model Downloads

[00:06:11](https://youtu.be/HjbD20B2C1g?t=371) Starting The App & Running Your First 3D Generation

[00:06:54](https://youtu.be/HjbD20B2C1g?t=414) Understanding the Generation Process & The Slow xatlas Step

[00:08:04](https://youtu.be/HjbD20B2C1g?t=484) Analyzing The First Generated 3D Mesh in The UI

[00:08:26](https://youtu.be/HjbD20B2C1g?t=506) Locating & Checking The Automatically Saved 3D Files (OBJ, GLB, STL)

[00:08:54](https://youtu.be/HjbD20B2C1g?t=534) How to Set Up & Start Batch Processing Multiple Images

[00:09:39](https://youtu.be/HjbD20B2C1g?t=579) Monitoring Batch Progress & Using The Cancel Feature

[00:10:15](https://youtu.be/HjbD20B2C1g?t=615) Detailed Step-by-Step Guide for RunPod Installation

[00:10:55](https://youtu.be/HjbD20B2C1g?t=655) Detailed Step-by-Step Guide for Massed Compute Installation

[00:11:41](https://youtu.be/HjbD20B2C1g?t=701) Teaser: Ultimate Video Upscaling App Coming Soon

Some background music by NoCopyrightSounds  : [https://gist.github.com/FurkanGozukara/681667e5d7051b073f2e795794c46170](https://gist.github.com/FurkanGozukara/681667e5d7051b073f2e795794c46170)



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=HjbD20B2C1g&t=0) Greetings everyone. Today I am going&nbsp; to introduce you to Hi3DGen. This is&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=HjbD20B2C1g&t=5) the state-of-the-art image-to-3D mesh&nbsp; generation model. By state-of-the-art,&nbsp;&nbsp;

- [00:00:11](https://www.youtube.com/watch?v=HjbD20B2C1g&t=11) I don't exaggerate. As you can see here, Hi3DGen&nbsp; is performing better than Hunyuan-3D 2.0, Clay,&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=HjbD20B2C1g&t=22) and Trellis. They have made an interactive&nbsp; website where you can compare results,&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=HjbD20B2C1g&t=28) as you are seeing right now. So truly,&nbsp; this model is the very best right now.

- [00:00:34](https://www.youtube.com/watch?v=HjbD20B2C1g&t=34) And for this model, I have developed&nbsp; a very advanced Gradio application,&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=HjbD20B2C1g&t=40) one-click to install on Windows, on RunPod,&nbsp; and on Massed Compute. So if you don't have&nbsp;&nbsp;

- [00:00:46](https://www.youtube.com/watch?v=HjbD20B2C1g&t=46) a very powerful GPU, you can run this on&nbsp; the cloud, but it is not very demanding,&nbsp;&nbsp;

- [00:00:51](https://www.youtube.com/watch?v=HjbD20B2C1g&t=51) so it should work on most of the newer GPUs.&nbsp; The application I have developed is extremely&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=HjbD20B2C1g&t=58) advanced, and it has all the features that&nbsp; you would need, like batch processing,&nbsp;&nbsp;

- [00:01:02](https://www.youtube.com/watch?v=HjbD20B2C1g&t=62) parameter guide, being able to set all of the&nbsp; parameters, automatically saving OBJ files,&nbsp;&nbsp;

- [00:01:10](https://www.youtube.com/watch?v=HjbD20B2C1g&t=70) GLB files, STL files, and PLY files. It&nbsp; allows you to quickly analyze the result&nbsp;&nbsp;

- [00:01:17](https://www.youtube.com/watch?v=HjbD20B2C1g&t=77) like this. It allows you to change between&nbsp; point cloud to see it how it is, or wireframe&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=HjbD20B2C1g&t=83) like this. So you can see the output, analyze&nbsp; it on this interface without anything else.

- [00:01:29](https://www.youtube.com/watch?v=HjbD20B2C1g&t=89) Moreover, it allows you to set up your&nbsp; preset. When you one-click install it,&nbsp;&nbsp;

- [00:01:34](https://www.youtube.com/watch?v=HjbD20B2C1g&t=94) it will show you default and high-quality preset,&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=HjbD20B2C1g&t=96) but you can set your preset as you wish.&nbsp; There are also some examples that you can set.&nbsp;&nbsp;

- [00:01:42](https://www.youtube.com/watch?v=HjbD20B2C1g&t=102) It also has a cancel feature for batch processing.&nbsp; So whatever you may need to use this application,&nbsp;&nbsp;

- [00:01:49](https://www.youtube.com/watch?v=HjbD20B2C1g&t=109) this application has all of it. I have spent huge&nbsp; time to develop this application. Moreover, this&nbsp;&nbsp;

- [00:01:54](https://www.youtube.com/watch?v=HjbD20B2C1g&t=114) application utilizes the CPU offloading and flash&nbsp; attention so that you will get amazing results.&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=HjbD20B2C1g&t=122) And as we can see that they are really, truly&nbsp; generating the amazing results as they claim.&nbsp;&nbsp;

- [00:02:08](https://www.youtube.com/watch?v=HjbD20B2C1g&t=128) So this is currently state-of-the-art&nbsp; image-to-3D mesh generation model.

- [00:02:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=134) So how you can download and install this&nbsp; application on your Windows computer? The link of&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=HjbD20B2C1g&t=139) this page will be in the description of the video,&nbsp; so download the latest zip file. Before starting&nbsp;&nbsp;

- [00:02:24](https://www.youtube.com/watch?v=HjbD20B2C1g&t=144) installation, make sure that you have followed&nbsp; our requirements tutorial. This is mandatory, but&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=HjbD20B2C1g&t=150) this is mandatory only for one time. After that,&nbsp; you will be able to use all of the applications&nbsp;&nbsp;

- [00:02:37](https://www.youtube.com/watch?v=HjbD20B2C1g&t=157) that I have developed. And we have a massive&nbsp; amount of applications on our Patreon page.&nbsp;&nbsp;

- [00:02:42](https://www.youtube.com/watch?v=HjbD20B2C1g&t=162) So after downloading this zip file, move it into&nbsp; any disk where you want to install. For example,&nbsp;&nbsp;

- [00:02:48](https://www.youtube.com/watch?v=HjbD20B2C1g&t=168) let's install into our Q drive. Right-click,&nbsp; extract all, extract here. Then all you need to&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=HjbD20B2C1g&t=175) do is just double-click windows_install.bat file,&nbsp; more info, run anyway. And it will automatically&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=HjbD20B2C1g&t=182) start the installation. It will generate&nbsp; a virtual environment folder and install&nbsp;&nbsp;

- [00:03:07](https://www.youtube.com/watch?v=HjbD20B2C1g&t=187) all of the necessary libraries into it. So it&nbsp; will be totally isolated. It will not break or&nbsp;&nbsp;

- [00:03:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=194) modify any other applications that you have&nbsp; on your computer. You can follow the entire&nbsp;&nbsp;

- [00:03:19](https://www.youtube.com/watch?v=HjbD20B2C1g&t=199) status of installation here. I have pre-compiled&nbsp; the libraries for you, so this application works&nbsp;&nbsp;

- [00:03:25](https://www.youtube.com/watch?v=HjbD20B2C1g&t=205) on RTX 5000 series as well, as well as RTX&nbsp; 4000 series, 3000 series. I didn't test on&nbsp;&nbsp;

- [00:03:32](https://www.youtube.com/watch?v=HjbD20B2C1g&t=212) 2000 and 1000 series. It should work, but it is&nbsp; working starting from 3000 series to 5000 series.

- [00:03:38](https://www.youtube.com/watch?v=HjbD20B2C1g&t=218) Moreover, you see that this image is really high&nbsp; quality, or this image compared to what they&nbsp;&nbsp;

- [00:03:43](https://www.youtube.com/watch?v=HjbD20B2C1g&t=223) provide on their website. I have used our SUPIR application. It is also one-click to install,&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=HjbD20B2C1g&t=229) and you see the difference of upscaling these&nbsp; images. The model works best with 1024-pixel&nbsp;&nbsp;

- [00:03:57](https://www.youtube.com/watch?v=HjbD20B2C1g&t=237) images. So you can upscale your 3D images first,&nbsp; then use. And it will improve your results. It&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=HjbD20B2C1g&t=244) will improve the quality of your application.&nbsp; And you see this is the quality improvement of&nbsp;&nbsp;

- [00:04:09](https://www.youtube.com/watch?v=HjbD20B2C1g&t=249) the SUPIR application that we have. It is just&nbsp; mind-blowingly amazing. This is the really,&nbsp;&nbsp;

- [00:04:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=254) really very best image upscaling application&nbsp; still. It also has so many features. We also&nbsp;&nbsp;

- [00:04:21](https://www.youtube.com/watch?v=HjbD20B2C1g&t=261) have a tutorial for this, so if you need it,&nbsp; just reply me, and I will give you the link.

- [00:04:25](https://www.youtube.com/watch?v=HjbD20B2C1g&t=265) Since we have too many options here, if you&nbsp; want to learn what they do, you can go to&nbsp;&nbsp;

- [00:04:30](https://www.youtube.com/watch?v=HjbD20B2C1g&t=270) parameter guide and read all of the details, learn&nbsp; whichever the parameter function, what they do,&nbsp;&nbsp;

- [00:04:38](https://www.youtube.com/watch?v=HjbD20B2C1g&t=278) and change your settings accordingly. After doing&nbsp; a few tests, you will find the very best settings&nbsp;&nbsp;

- [00:04:44](https://www.youtube.com/watch?v=HjbD20B2C1g&t=284) for your workflow. Moreover, when you give the&nbsp; input folder path and output folder path, it&nbsp;&nbsp;

- [00:04:50](https://www.youtube.com/watch?v=HjbD20B2C1g&t=290) will process all of the images inside that folder&nbsp; and generate the meshes, which I am going to show&nbsp;&nbsp;

- [00:04:56](https://www.youtube.com/watch?v=HjbD20B2C1g&t=296) you. The installation is still continuing. It is&nbsp; fully automatic. You don't need to do anything. It&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=HjbD20B2C1g&t=301) will also download the model files as well into&nbsp; the accurate folders for you, fully automatic.

- [00:05:07](https://www.youtube.com/watch?v=HjbD20B2C1g&t=307) So what about if you want to install on RunPod and&nbsp; Massed Compute? It is so easy. I recommend Massed&nbsp;&nbsp;

- [00:05:12](https://www.youtube.com/watch?v=HjbD20B2C1g&t=312) Compute. Just open the Massed Compute instructions&nbsp; TXT file and follow the instructions here. If you&nbsp;&nbsp;

- [00:05:18](https://www.youtube.com/watch?v=HjbD20B2C1g&t=318) don't know how to use Massed Compute, we have an&nbsp; example tutorial here. For RunPod, again, just&nbsp;&nbsp;

- [00:05:23](https://www.youtube.com/watch?v=HjbD20B2C1g&t=323) open the RunPod instructions TXT file and follow&nbsp; the instructions here. They are all one-click&nbsp;&nbsp;

- [00:05:29](https://www.youtube.com/watch?v=HjbD20B2C1g&t=329) to install. If you don't know how to use RunPod,&nbsp; just follow this tutorial, and you will learn how&nbsp;&nbsp;

- [00:05:34](https://www.youtube.com/watch?v=HjbD20B2C1g&t=334) to use it. You see our installation is continuing.&nbsp; Now it is downloading the models automatically for&nbsp;&nbsp;

- [00:05:39](https://www.youtube.com/watch?v=HjbD20B2C1g&t=339) us with the maximum speed because everything I do&nbsp; is fully optimized for maximum efficiency always.

- [00:05:46](https://www.youtube.com/watch?v=HjbD20B2C1g&t=346) All right, so the installation has been completed,&nbsp; and all of the models have been downloaded. You&nbsp;&nbsp;

- [00:05:51](https://www.youtube.com/watch?v=HjbD20B2C1g&t=351) can see that download completed, press any&nbsp; key to continue. You can scroll up and see&nbsp;&nbsp;

- [00:05:56](https://www.youtube.com/watch?v=HjbD20B2C1g&t=356) if there are any errors or not. You shouldn't&nbsp; have any errors, and it is done. If you get&nbsp;&nbsp;

- [00:06:01](https://www.youtube.com/watch?v=HjbD20B2C1g&t=361) errors during model download, you can click&nbsp; windows_resume_model_download.bat file, and&nbsp;&nbsp;

- [00:06:06](https://www.youtube.com/watch?v=HjbD20B2C1g&t=366) it will resume and fix your download, hopefully.&nbsp; After that, to start the application, just click&nbsp;&nbsp;

- [00:06:11](https://www.youtube.com/watch?v=HjbD20B2C1g&t=371) windows_start.bat file, more info, run anyway. And&nbsp; it will start the application. During the start,&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=HjbD20B2C1g&t=378) it will verify downloaded files and load them&nbsp; one by one. You see it is verifying all of the&nbsp;&nbsp;

- [00:06:23](https://www.youtube.com/watch?v=HjbD20B2C1g&t=383) downloaded files. So the application started.&nbsp; It will be automatically opened like this. I&nbsp;&nbsp;

- [00:06:28](https://www.youtube.com/watch?v=HjbD20B2C1g&t=388) recommend you to first test an image from here.&nbsp; So let's select this as an example. You see the&nbsp;&nbsp;

- [00:06:35](https://www.youtube.com/watch?v=HjbD20B2C1g&t=395) default config is set, and generate 3D mesh. Then&nbsp; follow what is happening on the CMD window. You&nbsp;&nbsp;

- [00:06:43](https://www.youtube.com/watch?v=HjbD20B2C1g&t=403) can see the messages here, and it will start the&nbsp; generation right away almost because the models&nbsp;&nbsp;

- [00:06:48](https://www.youtube.com/watch?v=HjbD20B2C1g&t=408) are not that too big. You will see the progress&nbsp; like this. There is one progress step that&nbsp;&nbsp;

- [00:06:54](https://www.youtube.com/watch?v=HjbD20B2C1g&t=414) takes too much time, which is xatlas generate.&nbsp; Unfortunately, we are not able to see the progress&nbsp;&nbsp;

- [00:07:01](https://www.youtube.com/watch?v=HjbD20B2C1g&t=421) here because this is a third-party library, and&nbsp; there is no way to get progress, the percentage.&nbsp;&nbsp;

- [00:07:07](https://www.youtube.com/watch?v=HjbD20B2C1g&t=427) So you just need to wait here patiently until it&nbsp; is completed. And it is showing us that input mesh&nbsp;&nbsp;

- [00:07:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=434) vertices count, faces count. This model is really,&nbsp; really the state of the art right now among the&nbsp;&nbsp;

- [00:07:19](https://www.youtube.com/watch?v=HjbD20B2C1g&t=439) open-source models. There is no other better model&nbsp; than this one, and they also show it on their&nbsp;&nbsp;

- [00:07:26](https://www.youtube.com/watch?v=HjbD20B2C1g&t=446) project website. You can also see the progress&nbsp; here. You see it is showing the progress. It&nbsp;&nbsp;

- [00:07:31](https://www.youtube.com/watch?v=HjbD20B2C1g&t=451) is not taking very long, but this part, starting&nbsp; xatlas generate, is taking a lot. So therefore,&nbsp;&nbsp;

- [00:07:37](https://www.youtube.com/watch?v=HjbD20B2C1g&t=457) you can even use 50 sampling steps. These values&nbsp; are based on the default values that the original&nbsp;&nbsp;

- [00:07:43](https://www.youtube.com/watch?v=HjbD20B2C1g&t=463) developers has been suggested, but of course,&nbsp; you can play with this and see if you are getting&nbsp;&nbsp;

- [00:07:49](https://www.youtube.com/watch?v=HjbD20B2C1g&t=469) better results than these ones. This part may take&nbsp; a lot, so you just need to wait. Okay, it has been&nbsp;&nbsp;

- [00:07:56](https://www.youtube.com/watch?v=HjbD20B2C1g&t=476) completed. So that part took like 90 seconds, and&nbsp; this is the generated 3D mesh. So from here, you&nbsp;&nbsp;

- [00:08:04](https://www.youtube.com/watch?v=HjbD20B2C1g&t=484) can change the view to see it. This is like point&nbsp; cloud. This is wireframe. You can zoom in to see&nbsp;&nbsp;

- [00:08:11](https://www.youtube.com/watch?v=HjbD20B2C1g&t=491) the vertices, the points. And are they saved? Yes.&nbsp; Since we are automatically saving these formats,&nbsp;&nbsp;

- [00:08:18](https://www.youtube.com/watch?v=HjbD20B2C1g&t=498) I can just open the open outputs folder, which is&nbsp; just the outputs folder inside the Hi3DGen folder.&nbsp;&nbsp;

- [00:08:26](https://www.youtube.com/watch?v=HjbD20B2C1g&t=506) So this was the first generation, and you can&nbsp; see all the files here. The generated GLB file,&nbsp;&nbsp;

- [00:08:32](https://www.youtube.com/watch?v=HjbD20B2C1g&t=512) OBJ file, PLY file, and STL file, the&nbsp; info of the generation, the normal map,&nbsp;&nbsp;

- [00:08:40](https://www.youtube.com/watch?v=HjbD20B2C1g&t=520) and the material MTL file. So everything is saved.&nbsp; You can also download them from here. You see,&nbsp;&nbsp;

- [00:08:47](https://www.youtube.com/watch?v=HjbD20B2C1g&t=527) OBJ download 3D mesh, and it will download as you&nbsp; are seeing right now. So these are the features.

- [00:08:54](https://www.youtube.com/watch?v=HjbD20B2C1g&t=534) For batch processing, all you need to do is&nbsp; just give the folder path. So, for example,&nbsp;&nbsp;

- [00:09:01](https://www.youtube.com/watch?v=HjbD20B2C1g&t=541) let's enter inside the examples here, inside&nbsp; assets, inside example images, this folder.&nbsp;&nbsp;

- [00:09:06](https://www.youtube.com/watch?v=HjbD20B2C1g&t=546) Then I need to give a folder where I want to save&nbsp; them. So for example, let's save them inside this&nbsp;&nbsp;

- [00:09:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=554) folder. So I will just copy path of it, paste&nbsp; it, then I will say start batch processing,&nbsp;&nbsp;

- [00:09:20](https://www.youtube.com/watch?v=HjbD20B2C1g&t=560) and it will start the batch processing. You can&nbsp; follow everything here, what is happening here. It&nbsp;&nbsp;

- [00:09:26](https://www.youtube.com/watch?v=HjbD20B2C1g&t=566) shows that there are 33 images, and it will start&nbsp; processing each one individually. And we will&nbsp;&nbsp;

- [00:09:33](https://www.youtube.com/watch?v=HjbD20B2C1g&t=573) see them; they will be get saved here with the&nbsp; same file name folders. We will see in a moment.

- [00:09:39](https://www.youtube.com/watch?v=HjbD20B2C1g&t=579) Okay, so the first processing has been&nbsp; completed. We can see that it generated&nbsp;&nbsp;

- [00:09:43](https://www.youtube.com/watch?v=HjbD20B2C1g&t=583) folder zero. Why? Because the file name is 0.png.&nbsp; When I enter inside it, I will see the OBJ file,&nbsp;&nbsp;

- [00:09:52](https://www.youtube.com/watch?v=HjbD20B2C1g&t=592) the other files, and this generated file. The&nbsp; second one has been also completed like this.&nbsp;&nbsp;

- [00:09:58](https://www.youtube.com/watch?v=HjbD20B2C1g&t=598) So it will process everything like this. You can&nbsp; also cancel the process from by clicking cancel.&nbsp;&nbsp;

- [00:10:05](https://www.youtube.com/watch?v=HjbD20B2C1g&t=605) It will cancel whenever it is available. It cannot&nbsp; cancel immediately, so just wait patiently. So&nbsp;&nbsp;

- [00:10:10](https://www.youtube.com/watch?v=HjbD20B2C1g&t=610) this is everything about this application. It&nbsp; is extremely useful if you are working with 3D.

- [00:10:15](https://www.youtube.com/watch?v=HjbD20B2C1g&t=615) And what about using on RunPod and Massed Compute&nbsp; if you don't have a powerful GPU? Just open the&nbsp;&nbsp;

- [00:10:21](https://www.youtube.com/watch?v=HjbD20B2C1g&t=621) RunPod instructions TXT file. Please use this&nbsp; link to register. Then select this PyTorch file,&nbsp;&nbsp;

- [00:10:28](https://www.youtube.com/watch?v=HjbD20B2C1g&t=628) upload files into the workspace, extract, then&nbsp; execute this command. Wait for installation to&nbsp;&nbsp;

- [00:10:34](https://www.youtube.com/watch?v=HjbD20B2C1g&t=634) be completed. It takes a lot of time on RunPod,&nbsp; but it will install and download everything.&nbsp;&nbsp;

- [00:10:39](https://www.youtube.com/watch?v=HjbD20B2C1g&t=639) Then just use this command, and it will start&nbsp; a Gradio live share Gradio interface which you&nbsp;&nbsp;

- [00:10:45](https://www.youtube.com/watch?v=HjbD20B2C1g&t=645) will be able to use. Then you can download from&nbsp; the interface like we have downloaded from here,&nbsp;&nbsp;

- [00:10:51](https://www.youtube.com/watch?v=HjbD20B2C1g&t=651) like this download OBJ, or you can&nbsp; download the outputs folder directly.

- [00:10:55](https://www.youtube.com/watch?v=HjbD20B2C1g&t=655) For Massed Compute, just open the Massed Compute&nbsp; instructions TXT file. Please use this link to&nbsp;&nbsp;

- [00:11:02](https://www.youtube.com/watch?v=HjbD20B2C1g&t=662) register, I appreciate that. Then select SECourses image, apply our coupon. Now our coupon&nbsp;&nbsp;

- [00:11:08](https://www.youtube.com/watch?v=HjbD20B2C1g&t=668) works on all of the GPUs, and you can see the&nbsp; prices here. Let me show you. This is a public&nbsp;&nbsp;

- [00:11:14](https://www.youtube.com/watch?v=HjbD20B2C1g&t=674) article, and you can see the comparative prices&nbsp; between RunPod and Massed Compute, and Massed&nbsp;&nbsp;

- [00:11:20](https://www.youtube.com/watch?v=HjbD20B2C1g&t=680) Compute speed is way better, installation speed.&nbsp; Then upload the files onto the Massed Compute,&nbsp;&nbsp;

- [00:11:27](https://www.youtube.com/watch?v=HjbD20B2C1g&t=687) extract, then use this command, and then&nbsp; once the installation has been completed,&nbsp;&nbsp;

- [00:11:32](https://www.youtube.com/watch?v=HjbD20B2C1g&t=692) use this command. If you don't know how&nbsp; to do them, follow this tutorial and also&nbsp;&nbsp;

- [00:11:36](https://www.youtube.com/watch?v=HjbD20B2C1g&t=696) follow this tutorial. They show that. You can&nbsp; always ask me any questions that you want.

- [00:11:41](https://www.youtube.com/watch?v=HjbD20B2C1g&t=701) And before I end this tutorial, currently I am&nbsp; actually working on ultimate video processing&nbsp;&nbsp;

- [00:11:48](https://www.youtube.com/watch?v=HjbD20B2C1g&t=708) application. This will be hopefully many times&nbsp; better than, I say better, better quality than&nbsp;&nbsp;

- [00:11:54](https://www.youtube.com/watch?v=HjbD20B2C1g&t=714) the Topaz AI latest model. How? Because this&nbsp; application is based on STAR model. It's a&nbsp;&nbsp;

- [00:12:01](https://www.youtube.com/watch?v=HjbD20B2C1g&t=721) diffusion-based model, and it supports prompts.&nbsp; So therefore, with accurate prompting, you really&nbsp;&nbsp;

- [00:12:09](https://www.youtube.com/watch?v=HjbD20B2C1g&t=729) add new details. What kind of new details?&nbsp; The new details like the SUPIR application&nbsp;&nbsp;

- [00:12:15](https://www.youtube.com/watch?v=HjbD20B2C1g&t=735) adds. You see the SUPIR application adds new&nbsp; details because it is diffusion-based model,&nbsp;&nbsp;

- [00:12:20](https://www.youtube.com/watch?v=HjbD20B2C1g&t=740) and STAR model is exactly same. With STAR model,&nbsp; we will be adding new details. I have improved&nbsp;&nbsp;

- [00:12:26](https://www.youtube.com/watch?v=HjbD20B2C1g&t=746) the interface significantly. We have so many&nbsp; features like scene split, output comparison,&nbsp;&nbsp;

- [00:12:33](https://www.youtube.com/watch?v=HjbD20B2C1g&t=753) batch upscaling, FPS increase, so many features. I&nbsp; am trying to add everything into this application.&nbsp;&nbsp;

- [00:12:39](https://www.youtube.com/watch?v=HjbD20B2C1g&t=759) Hopefully, it will be published soon. So&nbsp; stay subscribed, and hopefully see you later.

- [00:12:44](https://www.youtube.com/watch?v=HjbD20B2C1g&t=764) By the way, the Bronze subscription price will be&nbsp; increased before publishing this application. So&nbsp;&nbsp;

- [00:12:50](https://www.youtube.com/watch?v=HjbD20B2C1g&t=770) subscribe it right now. The existing subscribers&nbsp; will not be impacted from the price increase&nbsp;&nbsp;

- [00:12:57](https://www.youtube.com/watch?v=HjbD20B2C1g&t=777) forever. So as long as you are subscribed, your&nbsp; price will never change. By the way, I also need&nbsp;&nbsp;

- [00:13:02](https://www.youtube.com/watch?v=HjbD20B2C1g&t=782) to mention that I have forked this repository and&nbsp; developed my app based on that from scratch. So&nbsp;&nbsp;

- [00:13:09](https://www.youtube.com/watch?v=HjbD20B2C1g&t=789) I need to thank them because they have made some&nbsp; improvements. So thank you so much. See you later.
