# How to Run and Convert Stable Diffusion Diffusers (.bin  Weights) & Dreambooth Models to CKPT File

## Full tutorial link > https://www.youtube.com/watch?v=-6CA18MS0pY

[![How to Run and Convert Stable Diffusion Diffusers (.bin  Weights) & Dreambooth Models to CKPT File](https://img.youtube.com/vi/-6CA18MS0pY/sddefault.jpg)](https://www.youtube.com/watch?v=-6CA18MS0pY "How to Run and Convert Stable Diffusion Diffusers (.bin  Weights) & Dreambooth Models to CKPT File")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Run-and-Convert-Stable-Diffusion-Diffusers-bin-Weights-and-Dreambooth-Models-to-CKPT-File.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Run-and-Convert-Stable-Diffusion-Diffusers-bin-Weights-and-Dreambooth-Models-to-CKPT-File.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Our Discord : [https://discord.gg/HbqgGaZVmr.](https://discord.gg/HbqgGaZVmr.) In this video, I am explaining how to run Stable Diffusion models that not provided in .ckpt file format. If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Playlist of Stable Diffusion Tutorials, #Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img:

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

In this video, I am step by step explaining how to convert these .bin training weight / model files into a .ckpt file to use in Automatic1111 Web UI and other interfaces. Furthermore, I am explaining how to use generated #ckpt file to teach your face or new subjects into this model by DreamBooth.

If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Stable Diffusion - Dreambooth - txt2img - img2img  - Embedding - Hypernetwork - AI Image Upscale Playlist :

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

How to install and run Python in your computer by Visual Studio video : [https://www.youtube.com/watch?v=eWN4Ng08Y4U](https://www.youtube.com/watch?v=eWN4Ng08Y4U)

Visual Studio Community Edition official page : [https://visualstudio.microsoft.com/vs/community/](https://visualstudio.microsoft.com/vs/community/)

The model used in this tutorial video : [https://huggingface.co/lambdalabs/dreambooth-avatar](https://huggingface.co/lambdalabs/dreambooth-avatar)

Yaml file used in this video : [https://gist.github.com/FurkanGozukara/fe72f3d13ea393cf4af3cb0adb8d622a](https://gist.github.com/FurkanGozukara/fe72f3d13ea393cf4af3cb0adb8d622a)

Torch install pip command : conda install pytorch torchvision torchaudio pytorch-cuda=11.7 -c pytorch -c nvidia

If you already have installed Torch but without CUDA, run this command twice and reinstall as above: pip3 uninstall torch

Installing #diffusers : pip install diffusers

Git Bash download link : [https://git-scm.com/downloads](https://git-scm.com/downloads)

Move to c drive in Git Bash : cd c:

convert_diffusers_to_original_stable_diffusion Python file : [https://raw.githubusercontent.com/huggingface/diffusers/main/scripts/convert_diffusers_to_original_stable_diffusion.py](https://raw.githubusercontent.com/huggingface/diffusers/main/scripts/convert_diffusers_to_original_stable_diffusion.py)

Convert to ckpt command : python convert_diffusers_to_original_stable_diffusion.py --model_path "C:\dreambooth-avatar" --checkpoint_path "C:\Users\King\Documents\PythonApplication1\dreambooth_avatar.ckpt"

[00:00:00](https://youtu.be/-6CA18MS0pY?t=0) How to run Stable Diffusion Diffuser (.bin / weight) models

[00:00:41](https://youtu.be/-6CA18MS0pY?t=41) How to install Visual Studio Community edition and Python

[00:01:26](https://youtu.be/-6CA18MS0pY?t=86) How to compose a Visual Studio Python project

[00:02:40](https://youtu.be/-6CA18MS0pY?t=160) How to install necessary libraries in a Visual Studio Python project such as CUDA enabled/compiled PyTorch, Torch, Diffusers, Transformers

[00:05:43](https://youtu.be/-6CA18MS0pY?t=343) How to install Accelerate in a Visual Studio Python project

[00:06:04](https://youtu.be/-6CA18MS0pY?t=364) How to run / start Hugging Face Diffusers or any type Hugging Face Python project inside a Visual Studio Python project

[00:09:12](https://youtu.be/-6CA18MS0pY?t=552) How to convert Stable Diffusion Diffuser project / model into a ckpt file

[00:10:00](https://youtu.be/-6CA18MS0pY?t=600) How to download / clone entire repository of a Hugging Face model while preserving its structure and file names by using Git Bash

[00:11:29](https://youtu.be/-6CA18MS0pY?t=689) How to download and use convert_diffusers_to_original_stable_diffusion.py script to generate ckpt file

[00:14:04](https://youtu.be/-6CA18MS0pY?t=844) How to load generated ckpt file into the Automatic1111 web UI application

[00:15:31](https://youtu.be/-6CA18MS0pY?t=931) How to fix size mismatch for model.diffusion_model.input_blocks error happened on the new generated ckpt file

[00:16:13](https://youtu.be/-6CA18MS0pY?t=973) We generated our first artworks of lambdalabs/dreambooth-avatar

[00:16:29](https://youtu.be/-6CA18MS0pY?t=989) How to teach your own face to lambdalabs/dreambooth-avatar model by DreamBooth to generate your avatar portrait artwork

[00:17:59](https://youtu.be/-6CA18MS0pY?t=1079) How to join our Discord channel to get help and support us on Patreon

Text Transformer AI

Text Transformer AI is an advanced machine learning model that is designed to analyze and transform text in a variety of ways. This technology has numerous applications, including language translation, text summarization, and even creative writing. With Text Transformer AI, creative professionals can quickly and easily generate written content that is grammatically correct, engaging, and on-brand.

One of the most exciting applications of Text Transformer AI is in the field of generative art. By feeding the model with text prompts, the model can generate a wide range of images and artwork. This technology is particularly useful for artists who want to explore new ideas and concepts but may not have the necessary technical skills to create the artwork themselves. With Text Transformer AI, they can simply provide a few keywords, and the model will do the rest.

Image Generation

Image Generation is another exciting technology that is transforming the creative industry. With this technology, AI models can create realistic and visually stunning images from scratch. This has numerous applications, including virtual fashion design, architecture, and even filmmaking.

CLIP

Finally, we have CLIP, a machine learning model that is designed to understand the relationship between images text.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=-6CA18MS0pY&t=0) Greetings everyone.

- [00:00:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1) In this video, I am going to show you how you can use different kind of diffusers in

- [00:00:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=6) your computer.

- [00:00:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=8) As we know, we usually use a CKPT file released by the model trainers.

- [00:00:15](https://www.youtube.com/watch?v=-6CA18MS0pY&t=15) But in this case, this Dreambooth avatar released by Lambda Labs doesn't have a CKPT file.

- [00:00:22](https://www.youtube.com/watch?v=-6CA18MS0pY&t=22) It is like this: As you see, it has different type of files.

- [00:00:27](https://www.youtube.com/watch?v=-6CA18MS0pY&t=27) So how can you run this in your computer?

- [00:00:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=29) To run this in our computer, we are going to run this Python code And I find that the

- [00:00:36](https://www.youtube.com/watch?v=-6CA18MS0pY&t=36) most easiest way is using Visual Studio Community Edition.

- [00:00:41](https://www.youtube.com/watch?v=-6CA18MS0pY&t=41) Just type Google or your search engine Visual Studio Community Edition and you will get

- [00:00:45](https://www.youtube.com/watch?v=-6CA18MS0pY&t=45) into this page.

- [00:00:46](https://www.youtube.com/watch?v=-6CA18MS0pY&t=46) As you can see, I will put this link into the description.

- [00:00:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=50) Click download and when installing, what you need to be careful is selecting Python installation.

- [00:00:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=57) If you are not sure how to install Visual Studio Community Edition, I have a video on

- [00:01:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=61) that.

- [00:01:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=62) Just go to our channel and in here click playlist and in here go to technology and science videos.

- [00:01:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=68) And in this playlist you will see, at the 11th index currently, how to debug your Python

- [00:01:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=73) code properly by using Visual Studio Community 2022.

- [00:01:20](https://www.youtube.com/watch?v=-6CA18MS0pY&t=80) In this video, I'm explaining how to install your Visual Studio.

- [00:01:23](https://www.youtube.com/watch?v=-6CA18MS0pY&t=83) And once you have installed your Visual Studio with Python we are ready.

- [00:01:27](https://www.youtube.com/watch?v=-6CA18MS0pY&t=87) So type to your search bar as Visual Studio.

- [00:01:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=93) You will get the program from Apps stuff here: Visual Studio 2022.

- [00:01:37](https://www.youtube.com/watch?v=-6CA18MS0pY&t=97) OK, this is the beginning screen of Visual Studio.

- [00:01:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=102) I am going to click create a new project.

- [00:01:44](https://www.youtube.com/watch?v=-6CA18MS0pY&t=104) In here from templates, we need to select Python, so I am typing Python to the search

- [00:01:48](https://www.youtube.com/watch?v=-6CA18MS0pY&t=108) bar.

- [00:01:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=110) It may take a while for it to arrive.

- [00:01:52](https://www.youtube.com/watch?v=-6CA18MS0pY&t=112) OK, it has listed me Python as a Python application in the first case.

- [00:01:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=117) This is the application type we need.

- [00:02:00](https://www.youtube.com/watch?v=-6CA18MS0pY&t=120) Click next.

- [00:02:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=122) Click define its name and your location, as you wish.

- [00:02:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=126) Click create.

- [00:02:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=128) OK, our Python application has been opened and I am just dragging it like this.

- [00:02:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=134) So, by default, it is going to use the Python version you have installed.

- [00:02:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=138) If you have installed it during the initial installation, or you can alternatively install

- [00:02:24](https://www.youtube.com/watch?v=-6CA18MS0pY&t=144) other Python as well.

- [00:02:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=145) Currently, we have Python 3.9.

- [00:02:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=149) As you can see.

- [00:02:30](https://www.youtube.com/watch?v=-6CA18MS0pY&t=150) Watching that video will help you greatly, by the way.

- [00:02:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=153) OK, authors of this model have explained how it is easier to use.

- [00:02:37](https://www.youtube.com/watch?v=-6CA18MS0pY&t=157) However, there are some catchy things.

- [00:02:40](https://www.youtube.com/watch?v=-6CA18MS0pY&t=160) You see, we are importing Torch, Diffusers and Autocast libraries.

- [00:02:47](https://www.youtube.com/watch?v=-6CA18MS0pY&t=167) To be able to use them, first we need to install Torch.

- [00:02:51](https://www.youtube.com/watch?v=-6CA18MS0pY&t=171) And how we are going to install Torch?

- [00:02:54](https://www.youtube.com/watch?v=-6CA18MS0pY&t=174) From this command if you install, you are going to get error.

- [00:02:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=177) First, we need to install PyTorch from its official website command.

- [00:03:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=182) Which is package pipe python cuda 11.7.

- [00:03:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=188) It is the latest version and I am copying this command.

- [00:03:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=191) Then, returning back to my application, in here, I am right clicking my application name

- [00:03:17](https://www.youtube.com/watch?v=-6CA18MS0pY&t=197) here.

- [00:03:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=198) And I am opening command prompt here.

- [00:03:21](https://www.youtube.com/watch?v=-6CA18MS0pY&t=201) And I am right clicking with right click to your mouse, or you can right click here and

- [00:03:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=205) from here paste.

- [00:03:27](https://www.youtube.com/watch?v=-6CA18MS0pY&t=207) Pasting the command and clicking enter.

- [00:03:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=209) This will install PyTorch with enabled CUDA.

- [00:03:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=213) OK, therefore, we will be able to use CUDA enabled PyTorch.

- [00:03:38](https://www.youtube.com/watch?v=-6CA18MS0pY&t=218) If you just go and install this command, it will not work.

- [00:03:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=223) You will get an error.

- [00:03:45](https://www.youtube.com/watch?v=-6CA18MS0pY&t=225) So you should follow my steps.

- [00:03:46](https://www.youtube.com/watch?v=-6CA18MS0pY&t=226) I will put these links and commands into the description of the video.

- [00:03:51](https://www.youtube.com/watch?v=-6CA18MS0pY&t=231) So don't worry about them.

- [00:03:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=233) By the way, previously somehow if you have installed PyTorch version but not with CUDA

- [00:04:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=241) enabled.

- [00:04:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=242) Then you need to uninstall your Torch version.

- [00:04:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=246) Then you need to reinstall this one with CUDA enabled version.

- [00:04:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=253) OK, cuda enabled version.

- [00:04:16](https://www.youtube.com/watch?v=-6CA18MS0pY&t=256) Installation has been done.

- [00:04:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=258) You see, because we have selected CUDA, not CPU.

- [00:04:21](https://www.youtube.com/watch?v=-6CA18MS0pY&t=261) And, as I said, if you have previously installed PyTorch, somehow, you just need to call pip3

- [00:04:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=269) uninstall Torch.

- [00:04:31](https://www.youtube.com/watch?v=-6CA18MS0pY&t=271) You may need to run this command twice.

- [00:04:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=273) Then just copy and paste this command and run it and it will install.

- [00:04:38](https://www.youtube.com/watch?v=-6CA18MS0pY&t=278) Now let's return back to our model.

- [00:04:40](https://www.youtube.com/watch?v=-6CA18MS0pY&t=280) Now we need to install the diffusers.

- [00:04:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=282) I am copying the diffusers from here, going back to my command window, and I am typing:

- [00:04:48](https://www.youtube.com/watch?v=-6CA18MS0pY&t=288) pip install diffusers.

- [00:04:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=290) It is going to install diffusers.

- [00:04:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=293) It shouldn't take long.

- [00:04:54](https://www.youtube.com/watch?v=-6CA18MS0pY&t=294) Then I am copying this code here completely and I am pasting it into my project.

- [00:05:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=301) OK, I have pasted into my project.

- [00:05:05](https://www.youtube.com/watch?v=-6CA18MS0pY&t=305) Now, just you need to click start button and it will click and generate images in the style

- [00:05:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=311) you want.

- [00:05:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=313) OK, let's see.

- [00:05:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=314) Also, it will download the necessary files first.

- [00:05:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=318) Oh, it says that we are still missing a library: transformers library.

- [00:05:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=325) Let's also install it.

- [00:05:26](https://www.youtube.com/watch?v=-6CA18MS0pY&t=326) It is so easy: Just pip install transformers, OK.

- [00:05:35](https://www.youtube.com/watch?v=-6CA18MS0pY&t=335) OK, installation of transformers also has been completed.

- [00:05:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=342) OK, one final thing is left.

- [00:05:44](https://www.youtube.com/watch?v=-6CA18MS0pY&t=344) We also need to pip install Accelerate.

- [00:05:46](https://www.youtube.com/watch?v=-6CA18MS0pY&t=346) Now, I am going to do that.

- [00:05:48](https://www.youtube.com/watch?v=-6CA18MS0pY&t=348) To do that, now we can safely copy this command here and run it because we have installed

- [00:05:54](https://www.youtube.com/watch?v=-6CA18MS0pY&t=354) the other necessary things.

- [00:05:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=355) OK, I have copy pasted it.

- [00:05:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=357) Now it will install other necessary stuff and then we will be ready.

- [00:06:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=362) OK, it has been done.

- [00:06:04](https://www.youtube.com/watch?v=-6CA18MS0pY&t=364) Let's click F5..

- [00:06:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=366) F5 means running it.

- [00:06:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=368) You can also click the start button.

- [00:06:10](https://www.youtube.com/watch?v=-6CA18MS0pY&t=370) OK, now we.

- [00:06:12](https://www.youtube.com/watch?v=-6CA18MS0pY&t=372) Now we will see that it is going to download necessary files into our cache folder And

- [00:06:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=378) then we are going to get this prompt run.

- [00:06:21](https://www.youtube.com/watch?v=-6CA18MS0pY&t=381) And then we will see the saved outputs images in the folder, where it will be inside our

- [00:06:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=389) application folder to go the right click Python application.

- [00:06:32](https://www.youtube.com/watch?v=-6CA18MS0pY&t=392) Oh, and in here, open folder file in Explorer, So they will be saved here.

- [00:06:39](https://www.youtube.com/watch?v=-6CA18MS0pY&t=399) Let's see what's happening so far, OK.

- [00:06:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=403) OK, it has starting downloading the necessary model files and other things in the cache.

- [00:06:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=410) Once they are cached, they won't be read on, loaded again, So don't worry about that.

- [00:06:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=415) Currently downloading the biggest file, the model file.

- [00:06:59](https://www.youtube.com/watch?v=-6CA18MS0pY&t=419) I think it is inside files and versions.

- [00:07:03](https://www.youtube.com/watch?v=-6CA18MS0pY&t=423) In here.

- [00:07:04](https://www.youtube.com/watch?v=-6CA18MS0pY&t=424) It is inside, Let's see, Yes, inside UNET.

- [00:07:09](https://www.youtube.com/watch?v=-6CA18MS0pY&t=429) You see the diffusion_pytorch_model.bin file.

- [00:07:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=433) OK, so our code has been run and the images has been generated have been.

- [00:07:22](https://www.youtube.com/watch?v=-6CA18MS0pY&t=442) You see, there are four images because we have made the samples 4.

- [00:07:26](https://www.youtube.com/watch?v=-6CA18MS0pY&t=446) Let's see them with large icons or extra large icons.

- [00:07:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=449) OK, you see, these are the images.

- [00:07:32](https://www.youtube.com/watch?v=-6CA18MS0pY&t=452) They are saved with this numbering format, as you can see.

- [00:07:38](https://www.youtube.com/watch?v=-6CA18MS0pY&t=458) So let's change our input to something else.

- [00:07:41](https://www.youtube.com/watch?v=-6CA18MS0pY&t=461) OK, I am changing the input as photo of Keanu Reeves avatar avatar style.

- [00:07:47](https://www.youtube.com/watch?v=-6CA18MS0pY&t=467) The avatar is the keyword that they use to train their model.

- [00:07:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=470) I am going to generate 10 samples.

- [00:07:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=473) By the way, currently it is using my graphic card because, you see, we are converting them

- [00:07:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=477) to GPU.

- [00:08:00](https://www.youtube.com/watch?v=-6CA18MS0pY&t=480) Now to execute it, I'm just going to restart the application.

- [00:08:03](https://www.youtube.com/watch?v=-6CA18MS0pY&t=483) And now we will see that it is not going to read-download the files.

- [00:08:07](https://www.youtube.com/watch?v=-6CA18MS0pY&t=487) Let's also check out the GPU usage.

- [00:08:10](https://www.youtube.com/watch?v=-6CA18MS0pY&t=490) Meanwhile, it is generating artworks.

- [00:08:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=494) OK, let's see.

- [00:08:17](https://www.youtube.com/watch?v=-6CA18MS0pY&t=497) By the way, it doesn't show any progress or something.

- [00:08:20](https://www.youtube.com/watch?v=-6CA18MS0pY&t=500) You see, the VRAM usage, because it is The VRAM right now.

- [00:08:26](https://www.youtube.com/watch?v=-6CA18MS0pY&t=506) OK, I did get a GPU error because I have increased the number to 10.

- [00:08:32](https://www.youtube.com/watch?v=-6CA18MS0pY&t=512) And since I already have some other applications open, my 12 GB GPU VRAM was not enough.

- [00:08:40](https://www.youtube.com/watch?v=-6CA18MS0pY&t=520) I am going to therefore reduce samples to 4.

- [00:08:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=523) Back again.

- [00:08:45](https://www.youtube.com/watch?v=-6CA18MS0pY&t=525) If you can't stop the application, just forcibly close your project and restart.

- [00:08:51](https://www.youtube.com/watch?v=-6CA18MS0pY&t=531) It just did.

- [00:08:52](https://www.youtube.com/watch?v=-6CA18MS0pY&t=532) OK.

- [00:08:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=533) Currently, I am generating 4 new images of the photo of Keanu Reeves.

- [00:08:56](https://www.youtube.com/watch?v=-6CA18MS0pY&t=536) You see, it is displaying progress, actually, right now.

- [00:09:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=542) OK, the images have been generated like this.

- [00:09:07](https://www.youtube.com/watch?v=-6CA18MS0pY&t=547) It has overridden the previous files because it is starting from zero.

- [00:09:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=551) OK, everyone, now I am going to show you how you can convert these model into a CKPT file.

- [00:09:18](https://www.youtube.com/watch?v=-6CA18MS0pY&t=558) And from the CKPT file that you can train your own face or other things and use it in

- [00:09:26](https://www.youtube.com/watch?v=-6CA18MS0pY&t=566) the web UI, as we have shown numerous times in our channel, in our playlist.

- [00:09:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=573) Let me show you: You already may be know, but in our stable diffusion DreamBooth playlist

- [00:09:40](https://www.youtube.com/watch?v=-6CA18MS0pY&t=580) we are always using CKPT file.

- [00:09:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=583) So how are we going to convert this into a CKPT file?

- [00:09:48](https://www.youtube.com/watch?v=-6CA18MS0pY&t=588) First, we need to download entire repository into our drive.

- [00:09:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=593) To do that, we are going to use Git Bash.

- [00:09:56](https://www.youtube.com/watch?v=-6CA18MS0pY&t=596) So if you wonder what is Git Bash, just type Git Bash into Google.

- [00:10:00](https://www.youtube.com/watch?v=-6CA18MS0pY&t=600) It's a free, open source software and then run it after installing it like this.

- [00:10:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=608) OK, then let me zoom in a little bit.

- [00:10:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=614) Move your C drive cd c: like this.

- [00:10:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=619) Now we are in the C drive.

- [00:10:22](https://www.youtube.com/watch?v=-6CA18MS0pY&t=622) Then type git clone OK.

- [00:10:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=625) And in here, copy this URL like this and paste it into here.

- [00:10:31](https://www.youtube.com/watch?v=-6CA18MS0pY&t=631) So it will clone entire directory into the C drive.

- [00:10:36](https://www.youtube.com/watch?v=-6CA18MS0pY&t=636) Currently I am doing that.

- [00:10:38](https://www.youtube.com/watch?v=-6CA18MS0pY&t=638) It is taking a lot of time and it is not showing what is happening.

- [00:10:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=642) You see, currently it is downloading the big files with 100 megabits per second.

- [00:10:48](https://www.youtube.com/watch?v=-6CA18MS0pY&t=648) This is my speed And let me show you When I enter the directory that it is copying,

- [00:10:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=655) you can see they are getting downloaded right now.

- [00:10:59](https://www.youtube.com/watch?v=-6CA18MS0pY&t=659) OK, the first binary file were downloaded.

- [00:11:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=662) Now it is downloading the other ones.

- [00:11:04](https://www.youtube.com/watch?v=-6CA18MS0pY&t=664) Once this is done, we can move to the next step, to convert our to generate our CKPT

- [00:11:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=671) file.

- [00:11:12](https://www.youtube.com/watch?v=-6CA18MS0pY&t=672) OK, all of the files have been downloaded.

- [00:11:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=674) You see, it is done.

- [00:11:17](https://www.youtube.com/watch?v=-6CA18MS0pY&t=677) And now waiting, our new command.

- [00:11:20](https://www.youtube.com/watch?v=-6CA18MS0pY&t=680) Let's go to our folder and check them out in the vae folder.

- [00:11:24](https://www.youtube.com/watch?v=-6CA18MS0pY&t=684) Yes, we see binary file in the UNET.

- [00:11:27](https://www.youtube.com/watch?v=-6CA18MS0pY&t=687) We see as well.

- [00:11:28](https://www.youtube.com/watch?v=-6CA18MS0pY&t=688) So the next step.

- [00:11:31](https://www.youtube.com/watch?v=-6CA18MS0pY&t=691) For the next step, we need convert_diffusers_to_original_stable_diffusion py file.

- [00:11:37](https://www.youtube.com/watch?v=-6CA18MS0pY&t=697) And if you wonder where to find it, you can just type into the Google like this And it

- [00:11:44](https://www.youtube.com/watch?v=-6CA18MS0pY&t=704) should first open the Google here and then type it and you will get the link of it.

- [00:11:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=710) I will also put this link into the description of our video.

- [00:11:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=715) So how are you going to download it?

- [00:11:56](https://www.youtube.com/watch?v=-6CA18MS0pY&t=716) To download it, click raw.

- [00:11:59](https://www.youtube.com/watch?v=-6CA18MS0pY&t=719) It will open the raw file.

- [00:12:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=721) Then right click and click Save As.

- [00:12:03](https://www.youtube.com/watch?v=-6CA18MS0pY&t=723) So I am going to save it into my downloads folder.

- [00:12:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=726) Then I will copy and paste it.

- [00:12:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=728) By the way, we are going to save it as py file, not the txt file.

- [00:12:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=731) So I am going to download it like this.

- [00:12:15](https://www.youtube.com/watch?v=-6CA18MS0pY&t=735) OK, it has been downloaded.

- [00:12:17](https://www.youtube.com/watch?v=-6CA18MS0pY&t=737) Let's click show in folder right click, copy it.

- [00:12:21](https://www.youtube.com/watch?v=-6CA18MS0pY&t=741) Then open our project file in here.

- [00:12:24](https://www.youtube.com/watch?v=-6CA18MS0pY&t=744) Right click, open a folder in file explorer and paste this pasted here.

- [00:12:30](https://www.youtube.com/watch?v=-6CA18MS0pY&t=750) OK, we are ready.

- [00:12:32](https://www.youtube.com/watch?v=-6CA18MS0pY&t=752) Now we need to set our folder names.

- [00:12:36](https://www.youtube.com/watch?v=-6CA18MS0pY&t=756) So the folder of our DreamBooth avatar is here.

- [00:12:39](https://www.youtube.com/watch?v=-6CA18MS0pY&t=759) I am clicking here to copy its path like this: Then let's give the folder path.

- [00:12:45](https://www.youtube.com/watch?v=-6CA18MS0pY&t=765) Don't worry, I will also put this command into the description of the video.

- [00:12:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=770) Then at the checkpoint path I am going to output it into my Python application folder.

- [00:12:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=777) So I am opening once again here.

- [00:12:58](https://www.youtube.com/watch?v=-6CA18MS0pY&t=778) I am copying it like this.

- [00:13:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=781) Then let's paste it like this: And in here let's define a path.

- [00:13:07](https://www.youtube.com/watch?v=-6CA18MS0pY&t=787) Let's say dreambooth_avatar: OK, like this: .ckpt file.

- [00:13:16](https://www.youtube.com/watch?v=-6CA18MS0pY&t=796) OK, now how we are going to run this command?

- [00:13:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=799) We are going to run this command by copy the command like this: Copy then come right click

- [00:13:26](https://www.youtube.com/watch?v=-6CA18MS0pY&t=806) our project and in here open command prompt.

- [00:13:30](https://www.youtube.com/watch?v=-6CA18MS0pY&t=810) Here.

- [00:13:31](https://www.youtube.com/watch?v=-6CA18MS0pY&t=811) Right click and click enter.

- [00:13:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=813) Now it is supposed to generate the ckpt file.

- [00:13:36](https://www.youtube.com/watch?v=-6CA18MS0pY&t=816) OK, you see, it has started processing.

- [00:13:41](https://www.youtube.com/watch?v=-6CA18MS0pY&t=821) And it is done.

- [00:13:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=822) It was really quick.

- [00:13:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=823) Let's check out whether it was generated or not.

- [00:13:45](https://www.youtube.com/watch?v=-6CA18MS0pY&t=825) So right click our project, open folder in explorer and in here.

- [00:13:51](https://www.youtube.com/watch?v=-6CA18MS0pY&t=831) Let's see if our ckpt file.

- [00:13:53](https://www.youtube.com/watch?v=-6CA18MS0pY&t=833) Yes, our ckpt file is in here: dreambooth_avatar ckpt file.

- [00:13:58](https://www.youtube.com/watch?v=-6CA18MS0pY&t=838) OK, since it is 1.5 version based, we don't need a special YAML file for it.

- [00:14:05](https://www.youtube.com/watch?v=-6CA18MS0pY&t=845) So I am going to cut this and paste it into our stable diffusion.

- [00:14:09](https://www.youtube.com/watch?v=-6CA18MS0pY&t=849) OK, in here, stable diffusion: web UI.

- [00:14:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=853) In here we have, as you know, models and in here we have stable diffusion.

- [00:14:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=859) Pasting it here.

- [00:14:20](https://www.youtube.com/watch?v=-6CA18MS0pY&t=860) Then I am running my web UI to see whether it is working or not.

- [00:14:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=865) OK, we have started our web UI.

- [00:14:28](https://www.youtube.com/watch?v=-6CA18MS0pY&t=868) By the way, I was using several text embeddings, so I'm going to remove them.

- [00:14:38](https://www.youtube.com/watch?v=-6CA18MS0pY&t=878) They are inside embeddings folder.

- [00:14:40](https://www.youtube.com/watch?v=-6CA18MS0pY&t=880) I'm going to delete them to not affect our results.

- [00:14:43](https://www.youtube.com/watch?v=-6CA18MS0pY&t=883) Then I'm going to load to our new model, which is dreambooth avatar ckpt OK, it is getting

- [00:14:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=890) loaded.

- [00:14:51](https://www.youtube.com/watch?v=-6CA18MS0pY&t=891) And then let's type our command with, which was?

- [00:14:56](https://www.youtube.com/watch?v=-6CA18MS0pY&t=896) This one.

- [00:14:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=897) OK, we have an error.

- [00:14:59](https://www.youtube.com/watch?v=-6CA18MS0pY&t=899) Let's see the error.

- [00:15:03](https://www.youtube.com/watch?v=-6CA18MS0pY&t=903) Even though we generated the ckpt file.

- [00:15:11](https://www.youtube.com/watch?v=-6CA18MS0pY&t=911) OK, let's see.

- [00:15:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=914) OK, looks like we have a shape error.

- [00:15:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=919) Yeah, we need to fix this, probably.

- [00:15:28](https://www.youtube.com/watch?v=-6CA18MS0pY&t=928) OK, I have solved the problem.

- [00:15:32](https://www.youtube.com/watch?v=-6CA18MS0pY&t=932) It was a very weird solution actually.

- [00:15:35](https://www.youtube.com/watch?v=-6CA18MS0pY&t=935) So, even though the model owner said that they have trained it on version 1.5.

- [00:15:42](https://www.youtube.com/watch?v=-6CA18MS0pY&t=942) I thought that maybe they were using version 2.1 YAML file.

- [00:15:47](https://www.youtube.com/watch?v=-6CA18MS0pY&t=947) So I tried the version 2.1 YAML file in the model folder.

- [00:15:52](https://www.youtube.com/watch?v=-6CA18MS0pY&t=952) However, it wasn't producing any images.

- [00:15:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=955) Then I have compared it version 2.1 and 1.5 YAML files.

- [00:16:01](https://www.youtube.com/watch?v=-6CA18MS0pY&t=961) Then I started deleting the differences.

- [00:16:04](https://www.youtube.com/watch?v=-6CA18MS0pY&t=964) After I have deleted parameterization from the YAML file of 2.1.

- [00:16:12](https://www.youtube.com/watch?v=-6CA18MS0pY&t=972) It started working as you can see.

- [00:16:14](https://www.youtube.com/watch?v=-6CA18MS0pY&t=974) Now I am able to use this new model file that we have generated: dreambooth_avatar.ckpt.

- [00:16:23](https://www.youtube.com/watch?v=-6CA18MS0pY&t=983) So let's say you want to teach your faces into this model.

- [00:16:28](https://www.youtube.com/watch?v=-6CA18MS0pY&t=988) What you need to do is just go to Dreambooth tab, generate your model and, as a source

- [00:16:33](https://www.youtube.com/watch?v=-6CA18MS0pY&t=993) checkpoint, select your dreambooth_avatar.ckpt file and give it a name, and the rest is same.

- [00:16:41](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1001) Hopefully I will also upload a new video about full Dreambooth training and it will be available

- [00:16:47](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1007) on our channel playlist.

- [00:16:50](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1010) So it will be available in this playlist.

- [00:16:52](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1012) If you don't know how to use them, you can also watch these playlist videos.

- [00:16:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1017) I also have opened bug reports in the diffuser Github and also in the stable diffusion web

- [00:17:06](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1026) UI.

- [00:17:07](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1027) So hopefully this bug will be fixed, maybe in very soon.

- [00:17:12](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1032) So also this model.

- [00:17:15](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1035) This error could be only related to this model.

- [00:17:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1039) Therefore, I think you may not encounter such error.

- [00:17:24](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1044) So this is the YAML file that I have generated.

- [00:17:27](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1047) Let me show you.

- [00:17:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1049) So you see, this is the dreambooth_avatar.ckpt file and this is the YAML file that I have

- [00:17:34](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1054) generated.

- [00:17:35](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1055) I will also put this YAML file into the description of the video.

- [00:17:41](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1061) So you will be able to use this if you want to use this particular model.

- [00:17:49](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1069) And if you have any questions, just join our Github page and ask me any questions there.

- [00:17:55](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1075) Let me show you our Github page link.

- [00:17:57](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1077) So our Github page is existing on our about page.

- [00:18:00](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1080) I mean our Discord channel.

- [00:18:02](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1082) Sorry about that.

- [00:18:03](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1083) So you can join our Discord channel from this link, clicking there, and you can ask me any

- [00:18:08](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1088) questions you want.

- [00:18:09](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1089) Please like, subscribe and share our videos.

- [00:18:13](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1093) And if you support us on Patreon, we would appreciate that very much.

- [00:18:19](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1099) So far, we have only one patrons, but I am hoping that you will be our next patron.

- [00:18:25](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1105) So feel free to ask any questions through comments or from Discord.

- [00:18:29](https://www.youtube.com/watch?v=-6CA18MS0pY&t=1109) Hopefully, see you in another video.
