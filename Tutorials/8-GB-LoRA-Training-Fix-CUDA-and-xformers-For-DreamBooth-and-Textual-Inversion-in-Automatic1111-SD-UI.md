# 8 GB LoRA Training - Fix CUDA & xformers For DreamBooth and Textual Inversion in Automatic1111 SD UI

## Full tutorial link > https://www.youtube.com/watch?v=O01BrQwOd-Q

[![8 GB LoRA Training - Fix CUDA & xformers For DreamBooth and Textual Inversion in Automatic1111 SD UI](https://img.youtube.com/vi/O01BrQwOd-Q/sddefault.jpg)](https://www.youtube.com/watch?v=O01BrQwOd-Q "8 GB LoRA Training - Fix CUDA & xformers For DreamBooth and Textual Inversion in Automatic1111 SD UI")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/8-GB-LoRA-Training-Fix-CUDA-and-xformers-For-DreamBooth-and-Textual-Inversion-in-Automatic1111-SD-UI.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/8-GB-LoRA-Training-Fix-CUDA-and-xformers-For-DreamBooth-and-Textual-Inversion-in-Automatic1111-SD-UI.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


updated tutorial: [https://youtu.be/pom3nQejaTs](https://youtu.be/pom3nQejaTs) - Our Discord : [https://discord.gg/HbqgGaZVmr.](https://discord.gg/HbqgGaZVmr.) This video I am showing how to downgrade CUDA and xformers version for proper training and I am showing how to do LoRA training with 8GB GPU. If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Playlist of Stable Diffusion Tutorials, #Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, #LoRA, AI Upscaling, Pix2Pix, Img2Img:

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

This CUDA downgrade will not be necessary probably after the extensions get updated. However it is not certain when will they get updated. Meanwhile you can downgrade and use CUDA 11.6.

Stable Diffusion Playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

The commands you need to execute with order to downgrade CUDA

[https://gist.github.com/FurkanGozukara/e2db853d2016a4a9ae2cc32dc41d730a](https://gist.github.com/FurkanGozukara/e2db853d2016a4a9ae2cc32dc41d730a)

Run CMD as administrator if you get error

1:

activate

2:

pip uninstall torch torchvision

3:

pip uninstall torchaudio

4:

pip uninstall xformers

5:

pip install torch torchvision --extra-index-url [https://download.pytorch.org/whl/cu116](https://download.pytorch.org/whl/cu116)

6:

pip install -U -I --no-deps [https://github.com/C43H66N12O12S2/stable-diffusion-webui/releases/download/torch13/xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl](https://github.com/C43H66N12O12S2/stable-diffusion-webui/releases/download/torch13/xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl)

These below are specific hashes used in video but not necessary to use. You can install newest version of both DreamBooth and Automatic1111 and just downgrade CUDA with the above commands.

Automatic 1111 commit : dc8d1f4f8beb546089abd107db3432e03339c9c0

Dreambooth commit : c544ee11aee0085a7fbb7fdda65898dea2145f0c

Watch this video for learning how to use FileWords:

[https://youtu.be/KwxNcGhHuLY](https://youtu.be/KwxNcGhHuLY)

#xformers

OUTLINE

[00:00:00](https://youtu.be/O01BrQwOd-Q?t=0) Introduction to How to downgrade CUDA version

[00:01:46](https://youtu.be/O01BrQwOd-Q?t=106) Automatic1111 will ask you to upgrade CUDA. Don't yet.

[00:02:03](https://youtu.be/O01BrQwOd-Q?t=123) How to downgrade your CUDA version in your Automatic1111 installation folder

[00:04:30](https://youtu.be/O01BrQwOd-Q?t=270) How to install DreamBooth extension

[00:05:07](https://youtu.be/O01BrQwOd-Q?t=307) How to install and use dev branch of DreamBooth extension

[00:06:42](https://youtu.be/O01BrQwOd-Q?t=402) How to stash local changes to checkout different git branch

[00:07:13](https://youtu.be/O01BrQwOd-Q?t=433) How to start LoRA training for 8 GB VRAM GPUs

[00:08:22](https://youtu.be/O01BrQwOd-Q?t=502) Settings and setup for LoRA training

[00:13:36](https://youtu.be/O01BrQwOd-Q?t=816) How to generate ckpt file from LoRA training checkpoint

Sure, here are some additional details on how transformers can be used with CUDA-enabled NVIDIA hardware:

Transfer learning: Transfer learning is a technique that can be used to leverage pre-trained transformer models, such as BERT or GPT-2, to improve the performance of NLP tasks with limited training data. NVIDIA's hardware and software can be used to fine-tune these pre-trained models on specific NLP tasks, allowing for faster convergence and higher accuracy.

Customization and optimization: The flexibility of transformers allows for a wide range of customization options and optimization techniques. NVIDIA's software libraries can be used to implement custom activation functions, weight initialization schemes, and other architectural modifications to improve model performance. In addition, CUDA enables developers to optimize the transformer models for specific hardware configurations, such as different numbers of GPUs, to achieve the best performance.

Real-time applications: Transformers can be used for real-time NLP applications, such as chatbots and speech recognition, which require low latency and high throughput. NVIDIA's hardware and software can be used to optimize transformer models for real-time applications by reducing inference time and increasing throughput.

Natural language generation: Transformers can be used for natural language generation (NLG) tasks, such as text summarization and language translation. NVIDIA's hardware and software can be used to optimize transformer models for NLG tasks, by improving the generation speed and quality of the output.

Deployment: NVIDIA's software libraries, such as TensorRT, can be used to optimize and deploy transformer models to various production environments, such as cloud-based services and edge devices. This allows for the efficient deployment of transformer models in a variety of real-world applications.

Overall, transformers and CUDA-enabled NVIDIA hardware provide a powerful combination for accelerating NLP tasks, including training and inference of transformer models, transfer learning, customization and optimization, real-time applications, natural language generation, and deployment to production environments.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=0) Greetings everyone. This will be a short video&nbsp; to explain how to use CUDA 11.6 version after&nbsp;&nbsp;

- [00:00:07](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=7) the latest Automatic1111 update to be able to do&nbsp; training correctly by using either DreamBooth or&nbsp;&nbsp;

- [00:00:15](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=15) Textual Inversion. Moreover, I will show how&nbsp; to use dev branch of DreamBooth extension to&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=20) be able to use LoRA if you have 8GB VRAM having&nbsp; GPU. If you are interested in learning more,&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=26) I have very detailed several videos. So this is&nbsp; the playlist of my Stable Diffusion related videos&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=32) on my channel. If you are interested in to learn&nbsp; more information, I suggest you to watch with&nbsp;&nbsp;

- [00:00:39](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=39) this order: first Zero to Hero Stable Diffusion.&nbsp; Then how to do Stable Diffusion Textual Inversion.&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=45) Then how to inject your training subject, then&nbsp; DreamBooth Got Buffed 22 January Update. This&nbsp;&nbsp;

- [00:00:52](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=52) will teach you a lot of information related to&nbsp; Stable Diffusion and finally, you can watch my&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=58) older how to do Stable Diffusion LoRA training&nbsp; video. But this is not very up to date at the&nbsp;&nbsp;

- [00:01:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=63) moment and hopefully I will make much more updated&nbsp; one. So Automatic1111 recently updated its Torch&nbsp;&nbsp;

- [00:01:11](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=71) version and xformers version to latest ones or the&nbsp; more updated ones. You see the Torch version is&nbsp;&nbsp;

- [00:01:17](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=77) now 1.13 and CUDA version is 11.7. However, this&nbsp; is currently not very well supported by DreamBoot&nbsp;&nbsp;

- [00:01:25](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=85) or Textual Inversion training. How do I know?&nbsp; There are several issues, topics on the GitHub of&nbsp;&nbsp;

- [00:01:31](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=91) Automatic1111 and you see, don't use Torch 13. It&nbsp; is breaking the functionality. Or CUDA, use CUDA&nbsp;&nbsp;

- [00:01:39](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=99) 11.6. So in this video I will show you how you&nbsp; can revert back to older version of CUDA after&nbsp;&nbsp;

- [00:01:45](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=105) you have upgraded. By the way, it will ask you to&nbsp; upgrade your Torch version with this command line&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=112) argument. If you have already updated, watch&nbsp; this video to learn how to downgrade. Or if&nbsp;&nbsp;

- [00:01:58](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=118) you are doing a fresh installation, watch&nbsp; this video to learn how to do downgrade.&nbsp;&nbsp;

- [00:02:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=123) So for downgrading our Torch and CUDA version,&nbsp; we are entering our installation folder,&nbsp;&nbsp;

- [00:02:10](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=130) as you can see, Stable Diffusion Web UI master&nbsp; and enter inside the venv folder and inside here,&nbsp;&nbsp;

- [00:02:16](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=136) enter the scripts folder. Let me show you&nbsp; with zooming in. This is the folder where&nbsp;&nbsp;

- [00:02:21](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=141) you need to enter first the installation folder&nbsp; inside that venv folder and inside the scripts&nbsp;&nbsp;

- [00:02:27](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=147) folder. Then in here, type CMD. It will open CMD&nbsp; window with that path, as you can see right now.&nbsp;&nbsp;

- [00:02:36](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=156) Then, with the following order, we are going&nbsp; to execute each one of these commands inside&nbsp;&nbsp;

- [00:02:41](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=161) here. I will put all of these commands into the&nbsp; description of the video. So don't worry about&nbsp;&nbsp;

- [00:02:46](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=166) that. I am just copying and pasting them&nbsp; like this and hitting enter, one by one.&nbsp;&nbsp;

- [00:02:52](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=172) It will ask you to proceed and click and&nbsp; hit y letter and hit enter. By the way,&nbsp;&nbsp;

- [00:03:00](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=180) I got error because both of my CMD windows for&nbsp; running Stable Diffusion is open. Make sure&nbsp;&nbsp;

- [00:03:05](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=185) that you have closed them first. Once you closed&nbsp; your CMD windows you will see that successfully&nbsp;&nbsp;

- [00:03:12](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=192) uninstalled Torch Vision. Then execute the next&nbsp; command like this: and it's executed. Then execute&nbsp;&nbsp;

- [00:03:21](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=201) the next one like this: OK, it is asking. And&nbsp; hit y keyword and hit enter. Then we are going&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=208) to execute this command. This will take some&nbsp; time because it will download the CUDA version.&nbsp;&nbsp;

- [00:03:36](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=216) If you get a warning like this, it is just fine.&nbsp; Just ignore it. OK, in the end you will get a&nbsp;&nbsp;

- [00:03:42](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=222) message like this: Ignore this error message&nbsp; and focus on this message. You see successfully&nbsp;&nbsp;

- [00:03:48](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=228) installed Torch 1.13 and CUDA 11.6. Then the&nbsp; next command is the xformers installation.&nbsp;&nbsp;

- [00:03:56](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=236) Just copy and paste it in here and hit enter. OK,&nbsp; let me copy paste again. OK, now it is installing&nbsp;&nbsp;

- [00:04:06](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=246) that one as well. OK, now we are all ready.&nbsp; We can now start our application as usual.&nbsp;&nbsp;

- [00:04:13](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=253) I'm just starting with xformers and I am&nbsp; using the latest commit of the automatic&nbsp;&nbsp;

- [00:04:19](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=259) 1111. Let me show you which one it is. It is&nbsp; 12 minutes ago updated and its hash is this:&nbsp;&nbsp;

- [00:04:27](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=267) I will put this into the description of the video&nbsp; as well. OK, now we have started, like this,&nbsp;&nbsp;

- [00:04:32](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=272) with the newest installation and let's go to the&nbsp; extensions and click available, load from. And in&nbsp;&nbsp;

- [00:04:41](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=281) here let's install the DreamBooth extension, like&nbsp; this. You see, while installing, I am seeing now&nbsp;&nbsp;

- [00:04:49](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=289) the checking DreamBooth requirements and it is&nbsp; showing me the installed things. Torch version&nbsp;&nbsp;

- [00:04:54](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=294) is 1.13 and CUDA is 11.6 and Torch Vision is this&nbsp; one. So currently we are on the correct and after&nbsp;&nbsp;

- [00:05:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=303) installation is completed we need to restart&nbsp; CMD window. But before starting again now, I&nbsp;&nbsp;

- [00:05:09](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=309) will show you how to move to the developer branch&nbsp; of the DreamBooth extension. From here. Go to the&nbsp;&nbsp;

- [00:05:16](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=316) installer, click here. It will open the GitHub&nbsp; repository of the extension And in here currently&nbsp;&nbsp;

- [00:05:21](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=321) you are seeing the main branch. By default, it is&nbsp; installing the main branch. However, there is also&nbsp;&nbsp;

- [00:05:27](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=327) development branch and which is the most up to&nbsp; date branch. Actually, I think he just merged with&nbsp;&nbsp;

- [00:05:34](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=334) the main, but I will still show you the developer&nbsp; branch because in future you may need it. Yes,&nbsp;&nbsp;

- [00:05:43](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=343) he just updated while I started the video. So&nbsp; how we are going to load into the development&nbsp;&nbsp;

- [00:05:49](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=349) branch. We are going to enter our extensions&nbsp; folder. By the way, to do a fresh installation,&nbsp;&nbsp;

- [00:05:55](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=355) just delete this folder and you can then fresh&nbsp; install your extension and enter inside here&nbsp;&nbsp;

- [00:06:02](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=362) And in here we are running CMD. By the way, for&nbsp; git commands to work you need to have installed&nbsp;&nbsp;

- [00:06:08](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=368) Git Bash or any git repository handler. For&nbsp; example. If you type Git Bash, you can see it's&nbsp;&nbsp;

- [00:06:16](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=376) link in here and you can download it and install&nbsp; it. Then the git commands will work and then we&nbsp;&nbsp;

- [00:06:23](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=383) will pull the development branch. Git pull origin&nbsp; dev. It will pull the development branch. For me.&nbsp;&nbsp;

- [00:06:32](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=392) It says it's already up to date. Then you need to&nbsp; do git checkout dev. OK, now we are already in the&nbsp;&nbsp;

- [00:06:41](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=401) development branch. This is how you check out.&nbsp; If you encounter error, you can just do git&nbsp;&nbsp;

- [00:06:47](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=407) stash and it will stash the local changes. Then&nbsp; you will be able to check out the development&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=413) branch. Now I will check out the main again.&nbsp; So we can use the main and after doing that,&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=420) you see it is telling me switched to branch&nbsp; main. I will just restart CMD window. Which one?&nbsp;&nbsp;

- [00:07:09](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=429) Oh, we still didn't start the CMD yet. OK, sorry&nbsp; about that. Let's just click the start and now I&nbsp;&nbsp;

- [00:07:14](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=434) will show you how to do LoRA training and&nbsp; generate ckpt from saved Checkpoint. OK,&nbsp;&nbsp;

- [00:07:22](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=442) we are finally started and correct Torch Vision&nbsp; and xformers. Currently, we will use this CUDA&nbsp;&nbsp;

- [00:07:29](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=449) version. However, I am pretty sure that the&nbsp; developer will fix the problem with CUDA 11.7&nbsp;&nbsp;

- [00:07:35](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=455) in future. Then you won't be need to downgrade&nbsp; your CUDA version. Let's refresh our stable,&nbsp;&nbsp;

- [00:07:42](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=462) refresh our Automatic1111 web UI. Go to the&nbsp; Dreambooth tab And now for LoRA to appear,&nbsp;&nbsp;

- [00:07:50](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=470) first we need to pick LoRA and now LoRA drop downs&nbsp; will appear. Of course, we will first generate a&nbsp;&nbsp;

- [00:07:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=477) LoRA model as test one and you will see a new&nbsp; experimental thing: unfreeze model. Currently&nbsp;&nbsp;

- [00:08:05](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=485) I am working on to figure out the best settings to&nbsp; do LoRA training. However, it is taking time. I am&nbsp;&nbsp;

- [00:08:11](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=491) making this video to show you the latest changes.&nbsp; And when I get more information to train a better&nbsp;&nbsp;

- [00:08:19](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=499) LoRA model, hopefully I will make another video.&nbsp; So by I will use just the default settings for&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=505) now and just create model. However, you can still&nbsp; play with unfreeze model option. You see. You see&nbsp;&nbsp;

- [00:08:33](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=513) it says that unfreezes model layers and allows for&nbsp; potentially better training, but makes increased&nbsp;&nbsp;

- [00:08:38](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=518) VRAM usage more likely. Okay, once the model is&nbsp; generated, you will see this model is selected&nbsp;&nbsp;

- [00:08:45](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=525) here and we still didn't start the training.&nbsp; Therefore it is not appearing here. Then in&nbsp;&nbsp;

- [00:08:51](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=531) here I am. You can. I think they fixed. This class&nbsp; generate classification images using text2image.&nbsp;&nbsp;

- [00:08:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=537) Let's also try that. Let's say 500 epochs, zero,&nbsp; let's save model preview and model saving weights&nbsp;&nbsp;

- [00:09:06](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=546) every five epochs. And you see that these are the&nbsp; default learning rates. Actually, these these are&nbsp;&nbsp;

- [00:09:15](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=555) not very optimal right now. When I figure out the&nbsp; optimal ones, hopefully I will make another video.&nbsp;&nbsp;

- [00:09:20](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=560) Lets type our usual sanity prompt photo of ohwx&nbsp; man by Tomer Hanuka. If you watch my more detailed&nbsp;&nbsp;

- [00:09:29](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=569) videos you will learn more about how we, why we&nbsp; are doing sanity sample prompt and other settings.&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=576) Okay, in here I am selecting now FP16 because&nbsp; FP16 have better precision than BF16. Actually,&nbsp;&nbsp;

- [00:09:44](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=584) I was knowing incorrectly in my previous&nbsp; videos. So FP16 is supposed to have better&nbsp;&nbsp;

- [00:09:50](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=590) precision and better performance. If you check&nbsp; this cache latents, it will use more VRAM. So&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=596) if you have 8GB of VRAM GPU, then you may not&nbsp; want to check this, but I suggest you to first&nbsp;&nbsp;

- [00:10:04](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=604) try it. If you get out of memory error, then&nbsp; uncheck this and we are going to train UNET.&nbsp;&nbsp;

- [00:10:10](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=610) I think without this it is using about 7 GB of&nbsp; VRAM. So you can still train UNET with this.&nbsp;&nbsp;

- [00:10:18](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=618) And there is also another experimental thing&nbsp; which is freeze clip normalization layers.&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=624) Keep the normalization layers of clip frozen&nbsp; during training. Advanced usage, may increase&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=629) model performance and editability. However, again,&nbsp; this is very experimental and I am yet to figure&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=635) out the best working settings. I have been working&nbsp; on them for over two days and still I am not&nbsp;&nbsp;

- [00:10:42](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=642) figured out the best settings. And, as usual,&nbsp; let's set up our training directory and other&nbsp;&nbsp;

- [00:10:48](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=648) things. So I am going to use this training&nbsp; data set. This is 9 images. They are all&nbsp;&nbsp;

- [00:10:53](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=653) different backgrounds and different clothes.&nbsp; Okay, classification let's say example, okay,&nbsp;&nbsp;

- [00:11:01](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=661) instance token. And FileWords. So in my previous&nbsp; video I explained how to use FileWords. I am not&nbsp;&nbsp;

- [00:11:08](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=668) going to repeat it here. Let's just say, ohwx&nbsp; man and photo of man and photo of ohwx man. Okay,&nbsp;&nbsp;

- [00:11:19](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=679) these are the classical things. And let's say 100&nbsp; images per instance image. Okay, and in saving&nbsp;&nbsp;

- [00:11:28](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=688) you can generate a ckpt when training completes.&nbsp; But 500 epochs is very likely to over train.&nbsp;&nbsp;

- [00:11:35](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=695) Actually it is becoming too fast over trained with&nbsp; default settings. LoRA rank. This is also another&nbsp;&nbsp;

- [00:11:42](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=702) new thing. And as you increase LoRA rank, it is&nbsp; supposed to hold more data. But I tested that&nbsp;&nbsp;

- [00:11:48](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=708) and when I increased it to maximum, the results&nbsp; were much worse than the default for. So still,&nbsp;&nbsp;

- [00:11:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=717) I am yet to figure out the best settings&nbsp; and hopefully when I figure out I will make&nbsp;&nbsp;

- [00:12:01](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=721) another video. Generate LoRA weights when saving&nbsp; during training. With this way it will generate a&nbsp;&nbsp;

- [00:12:07](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=727) checkpoints for us. Then later we will be able to&nbsp; pick the checkpoint and generate a ckpt from that.&nbsp;&nbsp;

- [00:12:12](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=732) Okay, click save settings and click train. Let's&nbsp; see if it will generate the classification images.&nbsp;&nbsp;

- [00:12:26](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=746) [Inaudible] Okay, in here it is showing correctly&nbsp; the number of steps. So I am thinking that it&nbsp;&nbsp;

- [00:12:34](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=754) will generate now. Yes, it generated. Why there&nbsp; is text2img tab. so you can customize the image&nbsp;&nbsp;

- [00:12:44](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=764) generation from here. Alternatively, you can batch&nbsp; generate from here and give the folder path. I&nbsp;&nbsp;

- [00:12:51](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=771) will show you my previous training results because&nbsp; I just did a training before starting this video.&nbsp;&nbsp;

- [00:12:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=777) Okay, this is from my previous training with&nbsp; LoRA with the same settings as I just shown,&nbsp;&nbsp;

- [00:13:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=783) and you see, I lost stylizing out even after&nbsp; the 187 steps and when you divide it by 9,&nbsp;&nbsp;

- [00:13:13](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=793) it was just over 20 epochs and, as you see, the&nbsp; results are not very good and it takes a lot of&nbsp;&nbsp;

- [00:13:21](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=801) tries to get your results stylizing. I have used&nbsp; this specific checkpoint 1356 to generate ckpt and&nbsp;&nbsp;

- [00:13:34](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=814) generate images from that. So how do we generate&nbsp; ckpt? Go to the DreamBooth and in here select the&nbsp;&nbsp;

- [00:13:41](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=821) model. Okay, then make sure that you have selected&nbsp; use LoRA, and then you will see the generated ckpt&nbsp;&nbsp;

- [00:13:49](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=829) points. And in here, select the ckpt point that&nbsp; you want to generate a generated ckpt, select the&nbsp;&nbsp;

- [00:13:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=837) LoRA model checkpoint, then make sure that you&nbsp; clicked first, load settings, then click save&nbsp;&nbsp;

- [00:14:06](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=846) settings, otherwise it is not working. Actually,&nbsp; the last time I tried, I tried it was not working.&nbsp;&nbsp;

- [00:14:12](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=852) Once you see config saved, click generate&nbsp; ckpt and in here you will see the messages:&nbsp;&nbsp;

- [00:14:21](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=861) Okay, you see it has loaded. First test one 1356&nbsp; checkpoint. However, it generated a ckpt file&nbsp;&nbsp;

- [00:14:31](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=871) name with the latest step of the training.&nbsp; This is incorrect. I have reported this to&nbsp;&nbsp;

- [00:14:37](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=877) the developer and I am hoping that it will&nbsp; get fixed soon. After a ckpt is generated,&nbsp;&nbsp;

- [00:14:42](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=882) you can just click refresh and you can&nbsp; now start using your LoRA trained model.&nbsp;&nbsp;

- [00:14:50](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=890) And now, now let me show you the results I have&nbsp; got from my previous tries. I have used these&nbsp;&nbsp;

- [00:14:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=897) as command prompt. This is the positive prompt&nbsp; and this is the negative prompt. And now let me&nbsp;&nbsp;

- [00:15:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=903) show you the output. So you see, the outputs&nbsp; are all my face, the subject I teach by, but&nbsp;&nbsp;

- [00:15:10](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=910) the stylizing is very poor and the quality is also&nbsp; poor. I think it is already pretty overtrained and&nbsp;&nbsp;

- [00:15:20](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=920) so we need better settings. It certainly learns&nbsp; your subject, your face. However, it loses its&nbsp;&nbsp;

- [00:15:28](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=928) ability to stylize your face as in the DreamBooth,&nbsp; because the last video, the last video I made for&nbsp;&nbsp;

- [00:15:35](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=935) DreamBooth, was extremely successful, which you&nbsp; can watch in this video actually. So the LoRA&nbsp;&nbsp;

- [00:15:44](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=944) is currently very inferior than the DreamBooth&nbsp; with the default settings, but with new this,&nbsp;&nbsp;

- [00:15:50](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=950) with these new experimental settings, I am hoping&nbsp; that it will become much better once we figure&nbsp;&nbsp;

- [00:15:57](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=957) out the optimal settings. Still, you can stylize&nbsp; it, but it is much harder than DreamBooth. You&nbsp;&nbsp;

- [00:16:03](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=963) need to generate a lot of images and you need&nbsp; to test different cfg and perhaps checkpoints.&nbsp;&nbsp;

- [00:16:13](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=973) I hope you have enjoyed it. Please subscribe,&nbsp; like, comment, share and hopefully I will let&nbsp;&nbsp;

- [00:16:19](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=979) you know the news. If you also support us&nbsp; on patreon, I would appreciate it very much.&nbsp;&nbsp;

- [00:16:24](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=984) Currently we have 12 patrons and I appreciate them&nbsp; very much for supporting us. They are making me to&nbsp;&nbsp;

- [00:16:34](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=994) continue produce more quality content. You can&nbsp; also join our discord channel from here and I&nbsp;&nbsp;

- [00:16:40](https://www.youtube.com/watch?v=O01BrQwOd-Q&t=1000) will also put the discord channel link into the&nbsp; description. Hopefully see you in another video.
