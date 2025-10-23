# SOTA Image PreProcessing Scripts For Stable Diffusion Training - Auto Subject Crop & Face Focus

## Full tutorial link > https://www.youtube.com/watch?v=Fbuyu35TkE4

[![SOTA Image PreProcessing Scripts For Stable Diffusion Training - Auto Subject Crop & Face Focus](https://img.youtube.com/vi/Fbuyu35TkE4/sddefault.jpg)](https://www.youtube.com/watch?v=Fbuyu35TkE4 "SOTA Image PreProcessing Scripts For Stable Diffusion Training - Auto Subject Crop & Face Focus")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SOTA-Image-PreProcessing-Scripts-For-Stable-Diffusion-Training-Auto-Subject-Crop-and-Face-Focus.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/SOTA-Image-PreProcessing-Scripts-For-Stable-Diffusion-Training-Auto-Subject-Crop-and-Face-Focus.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


One of the most important aspect of Stable Diffusion training is the preparation of training images. In this tutorial video I will show you how to fully automatically preprocess training images with perfect zoom, crop and resize. These scripts will hugely improve your training success and accuracy.

Scripts Download Link ⤵️

[https://www.patreon.com/posts/120352012](https://www.patreon.com/posts/120352012)

Massive and excellent quality classification / regularization preprocessed and raw images datasets for both man and woman ⤵️

[https://www.patreon.com/posts/massive-4k-woman-87700469](https://www.patreon.com/posts/massive-4k-woman-87700469)

The scripts are utilizing Yolo V7 and Retina Face AI models. These are the very best state of the art AI models. Moreover they are very well coded. They will work super optimized and accurate.

With these scripts with 1 click you will preprocess all of your training images into the desired target resolution with very possible way and quality.

SECourses Discord To Get Full Support ⤵️

[https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388)

My LinkedIn ⤵️

[https://www.linkedin.com/in/furkangozukara/](https://www.linkedin.com/in/furkangozukara/)

My Instagram ⤵️

[https://www.instagram.com/gozukarafurkan/](https://www.instagram.com/gozukarafurkan/)

My Medium ⤵️

Furkan Gözükara[https://medium.com/@furkangozukara](https://medium.com/@furkangozukara)

My CivitAI ⤵️

[https://civitai.com/user/SECourses](https://civitai.com/user/SECourses)

[00:00:00](https://youtu.be/Fbuyu35TkE4?t=0) Introduction to the very best training images preprocessing scripts for Stable Diffusion training

[00:05:48](https://youtu.be/Fbuyu35TkE4?t=348) How to install and use auto cropper / zoom-in script - first stage

[00:07:25](https://youtu.be/Fbuyu35TkE4?t=445) Which file to edit and set processing folder path for cropper script

[00:07:52](https://youtu.be/Fbuyu35TkE4?t=472) How to add or remove new aspect ratios

[00:10:18](https://youtu.be/Fbuyu35TkE4?t=618) Full cropping supported classes of Yolo V7

[00:11:42](https://youtu.be/Fbuyu35TkE4?t=702) How to install and run image resizer / downscaler with face focus with Retina Face

[00:12:51](https://youtu.be/Fbuyu35TkE4?t=771) How to edit and run resizer script for perfect downscale and preparation of training images

[00:14:37](https://youtu.be/Fbuyu35TkE4?t=877) Comparison of raw images vs final processed images



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=0) So let's say you are going to do Stable Diffusion training.

- [00:00:03](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=3) You have images like this.

- [00:00:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=4) It is over 45 megapixels.

- [00:00:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=7) If you depend on the training scripts to pre-process your images, you will end up using this image

- [00:00:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=13) during the training.

- [00:00:14](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=14) However, if you use my 2 state-of-the-art (SOTA) scripts that I am going to share and

- [00:00:20](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=20) explain in this tutorial video, you will be using this image fully automatically.

- [00:00:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=25) So this raw image, you see this huge raw image will be turned into this 1024 to 1024 image

- [00:00:33](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=33) from this 45 megapixels image instead of this very, very bad aspect ratio having image.

- [00:00:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=42) So you shouldn't depend on the training scripts.

- [00:00:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=45) You should pre-process images yourself.

- [00:00:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=47) And in this tutorial video with the provided scripts, you will be able to generate any

- [00:00:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=53) aspect ratio, any resolution fully automatically with the best, very best possible resolution

- [00:01:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=60) as you are seeing right now.

- [00:01:01](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=61) Greetings everyone.

- [00:01:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=62) In this video, I am going to show you the very best subject cropper and face-focused

- [00:01:08](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=68) image resizer scripts.

- [00:01:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=69) You may wonder what are these for?

- [00:01:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=72) If you are doing Stable Diffusion training, these 2 scripts will make your life much easier.

- [00:01:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=77) They will make your job much easier.

- [00:01:20](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=80) Because when we are doing training, we should focus on the person, on the subject.

- [00:01:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=85) If your image is like this, let me show you.

- [00:01:28](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=88) You really need to focus this person, not the environment.

- [00:01:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=92) And instead of doing this manually, I have prepared the very amazing scripts for that.

- [00:01:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=98) What I mean by that, let me show you.

- [00:01:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=100) For example, let's say you want to focus this person with 1 to 1 aspect ratio.

- [00:01:46](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=106) So let's enter inside our desired aspect ratio.

- [00:01:50](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=110) And this is the focused image.

- [00:01:52](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=112) As you are seeing right now we focused this person as much as possible with 1 to 1 ratio.

- [00:01:58](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=118) And it is exactly 1 to 1 ratio.

- [00:02:01](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=121) Or let's say you want to focus this person face with 1 to 1 ratio.

- [00:02:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=125) And let's look at it.

- [00:02:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=127) This is the focused image.

- [00:02:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=129) Unfortunately, this image can't be focused 1 to 1 because the script will not crop the

- [00:02:15](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=135) body parts of the person.

- [00:02:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=137) So what we are going to do is: we are going to use Retina Face using very best quality

- [00:02:23](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=143) image resizer script.

- [00:02:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=145) So after we focus on face and resize this script, let's see the final output.

- [00:02:30](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=150) This is the final output.

- [00:02:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=152) You see the script cropped it properly and resized it to 512 to 512.

- [00:02:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=158) Or let's look at this image.

- [00:02:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=160) These images are huge images from my classification, regularization images data set that I have

- [00:02:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=165) shared on the Patreon.

- [00:02:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=167) For example, this image is 45 megapixels, 5000 to 9000 pixels.

- [00:02:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=173) And my script will crop this image for any aspect ratio you want fully automatically.

- [00:02:57](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=177) For example, let's look at this aspect ratio.

- [00:02:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=179) These are aspect ratios, not the resolutions, but to make it easier, I am writing like this.

- [00:03:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=184) Let's look at this aspect ratio.

- [00:03:06](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=186) You see, the image is fully cropped like this, and then we use the resizer script and let's

- [00:03:11](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=191) see the final image.

- [00:03:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=193) You see, it is perfectly resized to 1280 to 1536, the desired resolution we wanted.

- [00:03:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=201) And the best part of these scripts are they are generating their own virtual environment.

- [00:03:27](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=207) So they will not conflict with your other installations.

- [00:03:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=212) They are going to have their own virtual environment, both the auto cropper and the resizer script.

- [00:03:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=218) Now I will show you how to download and use them.

- [00:03:41](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=221) But before that, let's say you have thousands of images.

- [00:03:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=225) So this script will help you significantly.

- [00:03:48](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=228) For example, let me show you I have processed thousands of images as you are seeing right

- [00:03:54](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=234) now.

- [00:03:55](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=235) This is how I am preparing my classification, regularization images that I have shared on

- [00:04:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=240) the Patreon post.

- [00:04:01](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=241) These scripts will make your life much easier.

- [00:04:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=244) And before I show you how to install and use these scripts, there is one more thing.

- [00:04:08](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=248) I have added a new feature to this script with today's update.

- [00:04:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=252) You see now it will also save images like this if you wish.

- [00:04:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=257) So it will save with the items it classified.

- [00:04:20](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=260) For example, it classified this as a baseball bat, this is not accurate.

- [00:04:24](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=264) But you see, this is the person it classified.

- [00:04:27](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=267) Let's open another one here.

- [00:04:29](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=269) Person is classified.

- [00:04:30](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=270) OK, let's open another one here.

- [00:04:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=272) The person is classified like this with 97 confidence.

- [00:04:36](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=276) And there is also truck and car.

- [00:04:39](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=279) The truck is not much having the confidence, but it says that this is 80 percent car.

- [00:04:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=284) And yes, it is accurate.

- [00:04:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=285) You see, it also classified this as a car.

- [00:04:48](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=288) So with the new advanced version of the script, now you can also see which items are being

- [00:04:54](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=294) classified in each image.

- [00:04:56](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=296) For example, potted plants with 27 confidence.

- [00:05:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=300) It is classified potted plant here also.

- [00:05:03](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=303) Here a vase, you see, and here a TV.

- [00:05:06](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=306) It is classified as a TV.

- [00:05:08](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=308) Here a person, a potted plant.

- [00:05:10](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=310) So this is the power of YOLO.

- [00:05:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=312) With YOLO version 7, we are able to very accurately classify persons.

- [00:05:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=318) You see, the person is classified like this and it is fully accurate.

- [00:05:22](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=322) This is how we are zooming in person with the desired aspect ratio.

- [00:05:26](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=326) Then with using the Retina Face using resizer script, we focus on face and then we resize

- [00:05:34](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=334) it to the exact resolution that we want.

- [00:05:37](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=337) Everything is fully automatically working.

- [00:05:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=338) They are all saved in the folders that you will define.

- [00:05:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=342) And they are just one click to do.

- [00:05:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=344) For example, these are all the resized images.

- [00:05:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=347) So how are you going to use these scripts?

- [00:05:50](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=350) First of all, you should run the cropper script, which will focus on the person with the maximum

- [00:05:57](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=357) resolution and the desired aspect ratio.

- [00:05:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=359) Then you should use the resizer script.

- [00:06:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=362) So click here to download most up to date cropper script.

- [00:06:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=365) You should download updated version because I just updated it today.

- [00:06:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=369) Then move into the folder where you want to install.

- [00:06:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=372) Let's install it inside my G drive and let's say video example, right click and extract

- [00:06:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=378) it.

- [00:06:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=379) This is a zip file so you can directly extract it on Windows.

- [00:06:22](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=382) Then just double click install.bat file.

- [00:06:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=385) It will generate a virtual environment and install everything automatically for you.

- [00:06:29](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=389) For this script to work, you need to have git installed.

- [00:06:33](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=393) You see when I type git, I have git and you need to have Python installed.

- [00:06:36](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=396) And when I type Python, you see my Python version is 3.10.11.

- [00:06:41](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=401) I also suggest you to use this version.

- [00:06:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=404) This is working perfectly fine with Large Language Models (LLMs) with Stable Diffusion,

- [00:06:49](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=409) Automatic1111 Web UI, with ComfyUI or whatever the AI application that may come to your mind.

- [00:06:56](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=416) This is the most supported version right now.

- [00:06:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=419) So I suggest you to also use this Python version.

- [00:07:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=422) The installation is a fully automated process.

- [00:07:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=425) You don't need to do anything.

- [00:07:06](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=426) Just patiently wait.

- [00:07:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=427) So the installation has been completed.

- [00:07:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=429) You see it shows this message.

- [00:07:11](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=431) Press any key to continue.

- [00:07:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=433) Then let me show you how this is working.

- [00:07:15](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=435) So I'm going to delete these 2 folders.

- [00:07:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=437) Test2 will be my main folder from here.

- [00:07:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=441) Let's go back to our installation, which is video example.

- [00:07:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=445) All you need to do is edit this cropper_v7.py file.

- [00:07:29](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=449) I will use Notepad++.

- [00:07:31](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=451) So this is the file.

- [00:07:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=452) You need to set input folder.

- [00:07:34](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=454) This is the folder where your images are located that you want to auto zoom, auto crop.

- [00:07:39](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=459) So this is test2.

- [00:07:41](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=461) Output folder.

- [00:07:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=462) Lets output into the new_cropped and Yolo detected folder.

- [00:07:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=465) I will make it like this Yolo detected.

- [00:07:48](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=468) And do you want to save Yolo detected folder?

- [00:07:50](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=470) Let's make it true.

- [00:07:52](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=472) One another thing is that this is the array where you define your aspect ratios.

- [00:07:57](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=477) Let's add a new aspect ratio.

- [00:07:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=479) So put a comma.

- [00:08:01](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=481) Enter brackets like this.

- [00:08:03](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=483) So let's make 768 to 1368.

- [00:08:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=487) And let's add another one like this, 1368 to 768.

- [00:08:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=492) So we added a new aspect ratio.

- [00:08:15](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=495) You can also delete other ones.

- [00:08:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=498) These are aspect ratios, not resolutions.

- [00:08:20](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=500) So it will try to zoom in, cropping your images with obeying this aspect ratio with maximum

- [00:08:27](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=507) resolution.

- [00:08:28](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=508) Then we will use the downscaler resizer for this.

- [00:08:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=512) Then all you need to do is just double click run.bat file.

- [00:08:35](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=515) It will activate the virtual environment and it will start auto cropping them.

- [00:08:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=520) This is a hugely, hugely optimized script.

- [00:08:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=524) It is working very, very fast.

- [00:08:46](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=526) It is using also your GPU.

- [00:08:48](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=528) So it is starting to cropping.

- [00:08:51](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=531) By the way you can also define number of threads in the script.

- [00:08:54](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=534) It is there, but I don't suggest.

- [00:08:56](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=536) The 1 thread is already working very good.

- [00:08:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=539) So we can see the Yolo detected images.

- [00:09:03](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=543) When we open this image, we will see that it detected donut.

- [00:09:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=547) It is not very accurate, but it detected person with this confidence as you are seeing right

- [00:09:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=552) now.

- [00:09:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=553) It is extremely well detection.

- [00:09:15](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=555) It also detected bench and it detected bench.

- [00:09:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=559) Yes.

- [00:09:20](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=560) So these are the detections.

- [00:09:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=561) So these are the cropped images.

- [00:09:24](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=564) Let's look at the 768 to 1368.

- [00:09:27](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=567) This aspect ratio is a very rare aspect ratio.

- [00:09:30](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=570) For example, let's look at this image and let's resize the 768 and you see it was perfectly

- [00:09:36](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=576) cropped.

- [00:09:37](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=577) Why?

- [00:09:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=578) Because this was the raw image and the cropper script were able to perfectly zoom the person

- [00:09:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=584) in with full resolution.

- [00:09:46](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=586) So the original resolution is right now 2886 to 5142.

- [00:09:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=593) With the resizer script, we will be perfectly able to get 768 to 1368.

- [00:09:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=599) However, this will not work with all of the images.

- [00:10:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=602) For example, let's look at this image.

- [00:10:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=605) This image is not perfectly cropped.

- [00:10:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=607) Why?

- [00:10:08](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=608) Because the script will not crop to human body parts.

- [00:10:11](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=611) It will only crop image without cropping the body parts the human in this case.

- [00:10:16](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=616) It also supports other classes.

- [00:10:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=618) You can see the full supported classes here as you are seeing right now.

- [00:10:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=621) So the original image of this one, let's open it too was this.

- [00:10:26](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=626) From this image, it tried to obey our desired aspect ratio without cropping the body part

- [00:10:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=632) and it turned out to be this image.

- [00:10:34](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=634) When we look at the opposite aspect ratio, 1368 to 768, let's look how it was cropped.

- [00:10:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=642) Let's open this so it was 1368 to 971.

- [00:10:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=647) This is still not perfectly croppable, but when we apply the resizer, we will see that

- [00:10:52](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=652) it will also crop the body parts and will make the perfect sized image for us.

- [00:10:58](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=658) In most cases it will work.

- [00:11:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=660) For example, let's look at the 1 to 1 aspect ratio.

- [00:11:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=664) Let's open, for example, this image.

- [00:11:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=665) And for example, let's make it 1024.

- [00:11:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=667) It is almost perfect, not perfect.

- [00:11:10](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=670) Or let's look at this image 1024.

- [00:11:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=672) It is perfectly cropped 1 to 1.

- [00:11:15](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=675) Let's look at this image.

- [00:11:16](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=676) It is also perfectly cropped 1 to 1.

- [00:11:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=679) Let's also open the original image of this image.

- [00:11:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=681) So you will see how much time it is saving.

- [00:11:24](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=684) So you see this person was fully zoomed in as much as possible with the best aspect ratio.

- [00:11:31](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=691) Let's look at the another aspect ratio of this image, for example, 768 to 1024.

- [00:11:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=698) You see, it is perfectly cropped.

- [00:11:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=700) OK, so how are we going to use the resizer to make them perfect sizes?

- [00:11:46](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=706) Most of the training scripts are already downscaling them, but they will not be perfect as this

- [00:11:52](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=712) script.

- [00:11:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=713) Because this script is using Retina Face to focus on faces.

- [00:11:57](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=717) It is many, many times better than, for example, the integrated downscaler resizer script of

- [00:12:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=722) the Automatic1111 Web UI.

- [00:12:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=724) So click here to download it.

- [00:12:06](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=726) By the way you can also see them in the attachments.

- [00:12:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=729) So downloading from here is actually better.

- [00:12:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=733) Then move into another folder where we want to install.

- [00:12:16](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=736) Let's install it inside resize video.

- [00:12:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=739) OK, here extracted as usual.

- [00:12:22](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=742) This will also make its own virtual environment.

- [00:12:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=745) Double click install.bat file and it will install everything automatically for us.

- [00:12:29](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=749) The installation has been completed.

- [00:12:31](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=751) You see it says press any key to continue.

- [00:12:33](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=753) Then we will give the new cropped folder because these are the cropped folders.

- [00:12:39](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=759) So copy the path of it.

- [00:12:41](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=761) So you see for copying the path, I just move my mouse here and control C. Then let's enter

- [00:12:46](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=766) inside the script we installed.

- [00:12:49](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=769) All you need to do is edit resizer_v3.py file.

- [00:12:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=773) I am using Notepad++.

- [00:12:55](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=775) Here we are giving each folder and the desired resolution.

- [00:13:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=780) So since these are aspect ratios, you can give any resolution that is matching with

- [00:13:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=785) that aspect ratio.

- [00:13:06](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=786) So let's change all these folders.

- [00:13:09](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=789) I will do replace and I will replace them like this.

- [00:13:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=793) Replace all.

- [00:13:14](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=794) All the folder paths are changed to my new folder path.

- [00:13:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=797) The resolutions are staying.

- [00:13:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=799) Let's also add the new resolutions.

- [00:13:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=801) So let's copy paste this and paste this and the new resolutions are 768 to 1368.

- [00:13:28](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=808) 1368 to 768 like this.

- [00:13:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=812) We also need to change this part to that like this.

- [00:13:36](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=816) This can be made automated possibly, but you know, this way it is better.

- [00:13:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=820) OK, we added the new aspect ratio, new resolution as well.

- [00:13:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=824) And where you want output folder, you can define any output folder.

- [00:13:48](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=828) Let's define the output folder like this test2 fixed faces.

- [00:13:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=833) This will use Retina Face.

- [00:13:54](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=834) You can also define number of threads.

- [00:13:56](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=836) If you have a lot cores you can increase number of threads.

- [00:14:00](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=840) Let's make this 4 for example.

- [00:14:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=842) It is fully supporting multithreading and this is working on CPU right now.

- [00:14:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=847) It is using Retina Face, the very best face recognizing library.

- [00:14:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=852) So then all you need to do is just run.bat file.

- [00:14:16](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=856) It will start the resize process.

- [00:14:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=858) The resize process may be a slow if you run it with only single thread.

- [00:14:22](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=862) But as I said, it is fully supporting multithreading.

- [00:14:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=865) So you see, it is starting to process.

- [00:14:28](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=868) Currently it will first process all of the images with 512 to 512.

- [00:14:34](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=874) Let's look at the fixed faces and see.

- [00:14:37](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=877) You see, all of the images are now resized to 512 to 512.

- [00:14:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=882) Let's open this and this is the image.

- [00:14:44](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=884) So from which raw image we got this.

- [00:14:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=887) Let's open the raw version of this image to compare.

- [00:14:50](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=890) Actually, I will make a new canva to show you.

- [00:14:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=893) OK, so this is our 512 and this was the original image.

- [00:14:58](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=898) Let's open it.

- [00:14:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=899) The original image was so big.

- [00:15:01](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=901) Yes, still so big.

- [00:15:02](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=902) So let's make this like also, 512.

- [00:15:04](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=904) Actually, this is a better way to compare.

- [00:15:07](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=907) So you see, if you had used it as it is, you will be doing training on this image.

- [00:15:12](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=912) However, with my auto cropping and auto resizer script, you will do the training on this image.

- [00:15:17](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=917) You see the huge difference.

- [00:15:19](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=919) Instead of training on this image, we are training on this image with fully automatically

- [00:15:24](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=924) 2 step processing and the difference will be huge.

- [00:15:28](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=928) Difference will be huge.

- [00:15:29](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=929) Let's also make comparison for also this image.

- [00:15:32](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=932) So this image would become like this 512.

- [00:15:35](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=935) OK, let's open a bigger canva, for example.

- [00:15:39](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=939) OK, like this.

- [00:15:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=940) And let's also open the 512 version.

- [00:15:43](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=943) So this is the 512 version and here the difference.

- [00:15:47](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=947) So you see, instead of training with this version of the image, if you had depended

- [00:15:52](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=952) on the training script that you use, you will be training with this image.

- [00:15:58](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=958) Can you see the difference?

- [00:15:59](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=959) The difference is just humongous for 512.

- [00:16:03](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=963) Let's also compare for 1024.

- [00:16:05](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=965) So we got the 1024 faces.

- [00:16:08](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=968) OK, let's do the comparison for 1024.

- [00:16:11](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=971) So this is the 1024.

- [00:16:13](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=973) With 1024 it is looking better.

- [00:16:16](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=976) So this will be the 1024 image.

- [00:16:18](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=978) And let's look at the 1024 here.

- [00:16:21](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=981) And this will be the raw image if you had just used the raw image.

- [00:16:25](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=985) You see the humongous difference.

- [00:16:27](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=987) This is why my scripts are extremely important.

- [00:16:33](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=993) Instead of training with this image, we will do the training with this image.

- [00:16:36](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=996) And this is how you use it.

- [00:16:38](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=998) Message me on Patreon.

- [00:16:40](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1000) Message me from Discord.

- [00:16:41](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1001) Hopefully I will help you.

- [00:16:42](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1002) If the scripts get broken, I will update them, fix them.

- [00:16:45](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1005) And I am constantly working on scripts to upgrade them.

- [00:16:49](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1009) The links will be in the description of the video and also in the comment section of the

- [00:16:53](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1013) video.

- [00:16:54](https://www.youtube.com/watch?v=Fbuyu35TkE4&t=1014) Hopefully see you later in another amazing tutorial and script video.
