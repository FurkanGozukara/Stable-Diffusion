# How To Install & Use SUPIR : SOTA Image Upscaler On RunPod - 1 Click Easy Install & Run

## Full tutorial link > https://www.youtube.com/watch?v=RjMJh9fAO10

[![How To Install & Use SUPIR : SOTA Image Upscaler On RunPod - 1 Click Easy Install & Run](https://img.youtube.com/vi/RjMJh9fAO10/sddefault.jpg)](https://www.youtube.com/watch?v=RjMJh9fAO10 "How To Install & Use SUPIR : SOTA Image Upscaler On RunPod - 1 Click Easy Install & Run")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-and-Use-SUPIR-SOTA-Image-Upscaler-On-RunPod-1-Click-Easy-Install-and-Run.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-and-Use-SUPIR-SOTA-Image-Upscaler-On-RunPod-1-Click-Easy-Install-and-Run.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Download installation scripts here : [https://www.patreon.com/posts/99176057](https://www.patreon.com/posts/99176057)

Register RunPod here : [https://runpod.io?ref=1aka98lq](https://runpod.io?ref=1aka98lq)

Hello everyone, in this video I am going to show you how to install our custom-designed, the very best upscaler right now, the SUPIR

installation on RunPod on a very cheap GPU, and I will explain to you the likely errors that you are going to encounter so you will not have any issues while you are installing our application on RunPod. You see, currently, this is 3090 GPU and only 26 cents per hour, it is super cheap and it is working amazingly. You see, this is 2 megapixels upscale and I can upscale up to 5, 6, 8 megapixels on this GPU, maybe even more. So let's begin. Okay guys, in this video I am going to show you how to install SUPIR on RunPod quickly because some people are having problems. Download zip file, then let's go to our RunPod, log in your RunPod, click Pod Deploy GPU Pod, I'm going to deploy onto Community Cloud, select extreme speed here. Now you can pick any GPU that has over 24 GB. For this tutorial, I will show RTX 3090, but you can also get A6000 GPU, so it is up to you. Let's get 3090, you can also click Change template and type PyTorch to get it like this, edit Pod, make it volume disk like at least 80 GB like this, set override and Deploy on demand. Now go to my pods, here there is a very important thing that you have to be careful of, make sure that you Pod has a minimum of 31 GB. In some cases, it is giving you 20 GB RAM memory and if you get such RAM memory, it will not work. Make sure that your Pod has over 31 GB RAM memory otherwise it may not work accurately. So this pod has 31 GB, therefore it should work very well. After the connect button appeared, click connect, connect to Jupyter lab. Okay, it's not ready yet, so you need to wait until it becomes ready. Let's refresh. Okay, not ready yet, let's look at the logs.

Okay yeah, it became ready, so it may take a while. This Ram is extremely important, also if you want more speed, you should get A6000 GPU. I will show A6000 on Massed Compute because it will be better for you to use on Massed Compute, it is much cheaper. So let's upload all the extracted files into there, then open the RunPod instructions, by the way, instructions are the same for every GPU, it doesn't matter. Okay, open a terminal, copy-paste this command, this is for installation. Now wait and look at the messages carefully to see whether there are any errors or not. You see, this Pod is very slow, you see the download speed, therefore I will not wait and I will get a new Pod, and also there were some yellow icon here, so if your Pod is slow like this, do not wait, just delete it and get a new pod. So I will get a new pod because there are so many pods on the RunPod which are not good to use, unfortunately. I will also this time filter for NVMe SSD disk so it should be better. Okay, everything is set, let's set the volume disk one more time, Deploy on demand. Let's go to My Pods, okay this one has 23 GB so it will not work, so let's delete this one too, unfortunately, this is something that you have to try. Let's try again, so let's make the system gigabyte per GPU like 48 GB, yes and let's go 3090, okay, edit template, let's make this 80 and Deploy on demand, My Pods. Okay this time I have an amazing Pod, the speed not looking good for the hard drive but it has 77 GB Ram, let's see what we will get. Okay, new GPU Pod started, let's connect to Jupyterlab and see the speed of this one, the previous one was very bad. I'm not going to delete this parts of the video because these are the most common errors that you encounter and then think it doesn't work because of the RunPod system. I'm going to introduce you Massed Compute which is much better, hopefully, I will make a tutorial for that. Okay, it is starting, let's see, this one looks faster than the previous one, yeah the speed of this Pod is many times better, many many times better so it was a good choice to delete the previous one and load this one. This one has over 100 megabytes per second, previous one were struggling with 2 megabytes per second.

You see, getting a fast Pod is super important, it is downloading models with 90 MB per second. If you can find a faster Pod your installation will be faster. Alright, everything installed, you see, all the models are downloaded also verify that you don't have major errors, this is not important, we fix that, and you see, all the messages are here so we are ready. Then few options to start the SUPIR gradio. Okay, since this is a 24 GB GPU, I'm going to start as fp8. I'm going to use tiling, tiling is really slowing down the speed, but it allows you to generate much higher resolution so I am going to start with using tiled one.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=RjMJh9fAO10&t=0) Hello everyone, in this video I am going to&nbsp; show you how to install our custom-designed,&nbsp;&nbsp;

- [00:00:06](https://www.youtube.com/watch?v=RjMJh9fAO10&t=6) the very best upscaler right now, the SUPIR installation on RunPod on a very cheap GPU,&nbsp;&nbsp;

- [00:00:16](https://www.youtube.com/watch?v=RjMJh9fAO10&t=16) and I will explain to you the likely errors&nbsp; that you are going to encounter so you will&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=RjMJh9fAO10&t=22) not have any issues while you are installing&nbsp; our application on RunPod. You see, currently,&nbsp;&nbsp;

- [00:00:30](https://www.youtube.com/watch?v=RjMJh9fAO10&t=30) this is 3090 GPU and only 26 cents per hour, it is&nbsp; super cheap and it is working amazingly. You see,&nbsp;&nbsp;

- [00:00:39](https://www.youtube.com/watch?v=RjMJh9fAO10&t=39) this is 2 megapixels upscale and I can upscale&nbsp; up to 5, 6, 8 megapixels on this GPU, maybe even&nbsp;&nbsp;

- [00:00:46](https://www.youtube.com/watch?v=RjMJh9fAO10&t=46) more. So let's begin. Okay guys, in this video I&nbsp; am going to show you how to install SUPIR on RunPod&nbsp;&nbsp;

- [00:00:53](https://www.youtube.com/watch?v=RjMJh9fAO10&t=53) quickly because some people are having problems.&nbsp; Download zip file, then let's go to our RunPod,&nbsp;&nbsp;

- [00:01:00](https://www.youtube.com/watch?v=RjMJh9fAO10&t=60) log in your RunPod, click Pod Deploy GPU Pod,&nbsp; I'm going to deploy onto Community Cloud,&nbsp;&nbsp;

- [00:01:06](https://www.youtube.com/watch?v=RjMJh9fAO10&t=66) select extreme speed here. Now you can pick&nbsp; any GPU that has over 24 GB. For this tutorial,&nbsp;&nbsp;

- [00:01:14](https://www.youtube.com/watch?v=RjMJh9fAO10&t=74) I will show RTX 3090, but you can also get&nbsp; A6000 GPU, so it is up to you. Let's get 3090,&nbsp;&nbsp;

- [00:01:22](https://www.youtube.com/watch?v=RjMJh9fAO10&t=82) you can also click Change template and type&nbsp; PyTorch to get it like this, edit Pod, make&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=RjMJh9fAO10&t=89) it volume disk like at least 80 GB like this, set&nbsp; override and Deploy on demand. Now go to my pods,&nbsp;&nbsp;

- [00:01:39](https://www.youtube.com/watch?v=RjMJh9fAO10&t=99) here there is a very important thing that you&nbsp; have to be careful of, make sure that you Pod&nbsp;&nbsp;

- [00:01:44](https://www.youtube.com/watch?v=RjMJh9fAO10&t=104) has a minimum of 31 GB. In some cases, it is&nbsp; giving you 20 GB RAM memory and if you get such&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=RjMJh9fAO10&t=112) RAM memory, it will not work. Make sure that your&nbsp; Pod has over 31 GB RAM memory otherwise it may not&nbsp;&nbsp;

- [00:02:00](https://www.youtube.com/watch?v=RjMJh9fAO10&t=120) work accurately. So this pod has 31 GB, therefore&nbsp; it should work very well. After the connect button&nbsp;&nbsp;

- [00:02:07](https://www.youtube.com/watch?v=RjMJh9fAO10&t=127) appeared, click connect, connect to Jupyter&nbsp; lab. Okay, it's not ready yet, so you need&nbsp;&nbsp;

- [00:02:12](https://www.youtube.com/watch?v=RjMJh9fAO10&t=132) to wait until it becomes ready. Let's refresh.&nbsp; Okay, not ready yet, let's look at the logs.

- [00:02:20](https://www.youtube.com/watch?v=RjMJh9fAO10&t=140) Okay yeah, it became ready, so it may take a&nbsp; while. This Ram is extremely important, also if&nbsp;&nbsp;

- [00:02:31](https://www.youtube.com/watch?v=RjMJh9fAO10&t=151) you want more speed, you should get A6000 GPU. I&nbsp; will show A6000 on Massed Compute because it will&nbsp;&nbsp;

- [00:02:39](https://www.youtube.com/watch?v=RjMJh9fAO10&t=159) be better for you to use on Massed Compute, it is&nbsp; much cheaper. So let's upload all the extracted&nbsp;&nbsp;

- [00:02:47](https://www.youtube.com/watch?v=RjMJh9fAO10&t=167) files into there, then open the RunPod instructions,&nbsp; by the way, instructions are the same for every&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=RjMJh9fAO10&t=175) GPU, it doesn't matter. Okay, open a terminal,&nbsp; copy-paste this command, this is for installation.&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=RjMJh9fAO10&t=183) Now wait and look at the messages carefully to&nbsp; see whether there are any errors or not. You see,&nbsp;&nbsp;

- [00:03:11](https://www.youtube.com/watch?v=RjMJh9fAO10&t=191) this Pod is very slow, you see the download speed,&nbsp; therefore I will not wait and I will get a new&nbsp;&nbsp;

- [00:03:17](https://www.youtube.com/watch?v=RjMJh9fAO10&t=197) Pod, and also there were some yellow icon here,&nbsp; so if your Pod is slow like this, do not wait,&nbsp;&nbsp;

- [00:03:24](https://www.youtube.com/watch?v=RjMJh9fAO10&t=204) just delete it and get a new pod. So I will get&nbsp; a new pod because there are so many pods on the&nbsp;&nbsp;

- [00:03:32](https://www.youtube.com/watch?v=RjMJh9fAO10&t=212) RunPod which are not good to use, unfortunately.&nbsp; I will also this time filter for NVMe SSD disk&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=RjMJh9fAO10&t=221) so it should be better. Okay, everything is set,&nbsp; let's set the volume disk one more time, Deploy on&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=RjMJh9fAO10&t=229) demand. Let's go to My Pods, okay this one has&nbsp; 23 GB so it will not work, so let's delete this&nbsp;&nbsp;

- [00:03:56](https://www.youtube.com/watch?v=RjMJh9fAO10&t=236) one too, unfortunately, this is something that you&nbsp; have to try. Let's try again, so let's make the&nbsp;&nbsp;

- [00:04:06](https://www.youtube.com/watch?v=RjMJh9fAO10&t=246) system gigabyte per GPU like 48 GB, yes and let's&nbsp; go 3090, okay, edit template, let's make this 80 and&nbsp;&nbsp;

- [00:04:19](https://www.youtube.com/watch?v=RjMJh9fAO10&t=259) Deploy on demand, My Pods. Okay this time I have&nbsp; an amazing Pod, the speed not looking good for the&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=RjMJh9fAO10&t=269) hard drive but it has 77 GB Ram, let's see what&nbsp; we will get. Okay, new GPU Pod started, let's&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=RjMJh9fAO10&t=275) connect to Jupyterlab and see the speed of this&nbsp; one, the previous one was very bad. I'm not going&nbsp;&nbsp;

- [00:04:42](https://www.youtube.com/watch?v=RjMJh9fAO10&t=282) to delete this parts of the video because these&nbsp; are the most common errors that you encounter&nbsp;&nbsp;

- [00:04:48](https://www.youtube.com/watch?v=RjMJh9fAO10&t=288) and then think it doesn't work because of the RunPod&nbsp; system. I'm going to introduce you Massed Compute&nbsp;&nbsp;

- [00:04:56](https://www.youtube.com/watch?v=RjMJh9fAO10&t=296) which is much better, hopefully, I will make a&nbsp; tutorial for that. Okay, it is starting, let's&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=RjMJh9fAO10&t=301) see, this one looks faster than the previous one,&nbsp; yeah the speed of this Pod is many times better,&nbsp;&nbsp;

- [00:05:08](https://www.youtube.com/watch?v=RjMJh9fAO10&t=308) many many times better so it was a good choice to&nbsp; delete the previous one and load this one. This&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=RjMJh9fAO10&t=314) one has over 100 megabytes per second, previous&nbsp; one were struggling with 2 megabytes per second.

- [00:05:22](https://www.youtube.com/watch?v=RjMJh9fAO10&t=322) You see, getting a fast Pod is super important,&nbsp; it is downloading models with 90 MB per second.&nbsp;&nbsp;

- [00:05:30](https://www.youtube.com/watch?v=RjMJh9fAO10&t=330) If you can find a faster Pod your installation&nbsp; will be faster. Alright, everything installed,&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=RjMJh9fAO10&t=336) you see, all the models are downloaded also&nbsp; verify that you don't have major errors,&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=RjMJh9fAO10&t=342) this is not important, we fix that, and you see,&nbsp; all the messages are here so we are ready. Then&nbsp;&nbsp;

- [00:05:57](https://www.youtube.com/watch?v=RjMJh9fAO10&t=357) few options to start the SUPIR gradio.&nbsp; Okay, since this is a 24 GB GPU, I'm going to&nbsp;&nbsp;

- [00:06:07](https://www.youtube.com/watch?v=RjMJh9fAO10&t=367) start as fp8. I'm going to use tiling, tiling is&nbsp; really slowing down the speed, but it allows you&nbsp;&nbsp;

- [00:06:16](https://www.youtube.com/watch?v=RjMJh9fAO10&t=376) to generate much higher resolution so I am going&nbsp; to start with using tiled one. I am going to keep&nbsp;&nbsp;

- [00:06:24](https://www.youtube.com/watch?v=RjMJh9fAO10&t=384) the GPU always in the VRAM memory so it will be&nbsp; faster, so I will say keep models always in GPU&nbsp;&nbsp;

- [00:06:33](https://www.youtube.com/watch?v=RjMJh9fAO10&t=393) and I will start with light theme and that's it,&nbsp; if you get 48 GB GPU you can make this non-tiled&nbsp;&nbsp;

- [00:06:41](https://www.youtube.com/watch?v=RjMJh9fAO10&t=401) and you can get double speed. Okay, it started on&nbsp; the local URL, then it should start on the gradio,&nbsp;&nbsp;

- [00:06:50](https://www.youtube.com/watch?v=RjMJh9fAO10&t=410) yes we have, and click the gradio, hopefully,&nbsp; I will add new features and make a much better,&nbsp;&nbsp;

- [00:06:56](https://www.youtube.com/watch?v=RjMJh9fAO10&t=416) much bigger tutorial soon. So let's upload an&nbsp; image from our downloads, for example, let's see,&nbsp;&nbsp;

- [00:07:05](https://www.youtube.com/watch?v=RjMJh9fAO10&t=425) okay, let's upscale this, this a very small image,&nbsp; only 300 pixels, and the final pixel will be 2&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=RjMJh9fAO10&t=433) megapixel so apply LLavA, by default, we are using&nbsp; Juggernaut XL, and when you use that you have&nbsp;&nbsp;

- [00:07:21](https://www.youtube.com/watch?v=RjMJh9fAO10&t=441) to reduce the text CFG if you don't want the model&nbsp; to age it or change it too much so I will set this&nbsp;&nbsp;

- [00:07:30](https://www.youtube.com/watch?v=RjMJh9fAO10&t=450) as like 6 and that's it and process single, then&nbsp; it is going to load the first LLaVA, then it will&nbsp;&nbsp;

- [00:07:38](https://www.youtube.com/watch?v=RjMJh9fAO10&t=458) load the model. On the RunPod, sometimes loading&nbsp; may take too much time because of the Pod itself,&nbsp;&nbsp;

- [00:07:46](https://www.youtube.com/watch?v=RjMJh9fAO10&t=466) let's see if this one will be fast or not,&nbsp; I think loading the LLaVA is pretty fast,&nbsp;&nbsp;

- [00:07:51](https://www.youtube.com/watch?v=RjMJh9fAO10&t=471) you can see here so it should start getting the&nbsp; caption with the LLaVA, yes, moving LLavA to GPU,&nbsp;&nbsp;

- [00:07:59](https://www.youtube.com/watch?v=RjMJh9fAO10&t=479) LLaVA move to GPU and it is now processing with&nbsp; LLaVA. The first time run will be always slow,&nbsp;&nbsp;

- [00:08:08](https://www.youtube.com/watch?v=RjMJh9fAO10&t=488) LLavA processed it and it is going to load the&nbsp; SUPIR into the VRAM, let's see, initially it will&nbsp;&nbsp;

- [00:08:14](https://www.youtube.com/watch?v=RjMJh9fAO10&t=494) load everything onto memory then it will move&nbsp; them to the GPU memory so having high Ram Pod

- [00:08:21](https://www.youtube.com/watch?v=RjMJh9fAO10&t=501) is extremely useful and important. Okay, loading&nbsp; model from the disk right now, let's refresh, okay,&nbsp;&nbsp;

- [00:08:31](https://www.youtube.com/watch?v=RjMJh9fAO10&t=511) you see, the ram is increasing, so it's is reading&nbsp; the model from the hard drive into the ram.

- [00:08:38](https://www.youtube.com/watch?v=RjMJh9fAO10&t=518) The first model loading is taking huge time, this&nbsp; happens on some GPUs but you have to wait it&nbsp;

- [00:08:46](https://www.youtube.com/watch?v=RjMJh9fAO10&t=526) for the first time, then we will not wait it&nbsp; anymore, once it is loaded, so it is fine. Okay,&nbsp;&nbsp;

- [00:08:52](https://www.youtube.com/watch?v=RjMJh9fAO10&t=532) the first image generation took forever, 460&nbsp; seconds, because model loading take ages,&nbsp;&nbsp;

- [00:09:00](https://www.youtube.com/watch?v=RjMJh9fAO10&t=540) so let's try again, this time I will not apply&nbsp; LLaVA because we got the prompt here, so let's&nbsp;&nbsp;

- [00:09:07](https://www.youtube.com/watch?v=RjMJh9fAO10&t=547) process a single image, this time it will not load&nbsp; the model again because we keep the model on the VRAM&nbsp;&nbsp;

- [00:09:14](https://www.youtube.com/watch?v=RjMJh9fAO10&t=554) already and it is only using 42%, therefore we&nbsp; can even upscale into higher resolution like&nbsp;&nbsp;

- [00:09:21](https://www.youtube.com/watch?v=RjMJh9fAO10&t=561) 4 megapixels, 5 megapixels, and you see, it&nbsp; started already, it is going to do 50 steps.

- [00:09:29](https://www.youtube.com/watch?v=RjMJh9fAO10&t=569) Second upscale took only 85 seconds, and if we&nbsp; were not using tiled, it will take like 40 seconds,&nbsp;&nbsp;

- [00:09:37](https://www.youtube.com/watch?v=RjMJh9fAO10&t=577) maybe less. So this is it, hopefully see&nbsp; you in the bigger and next tutorials later.
