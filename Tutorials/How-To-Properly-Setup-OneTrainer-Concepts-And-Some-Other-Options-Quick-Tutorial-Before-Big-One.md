# How To Properly Setup OneTrainer Concepts And Some Other Options - Quick Tutorial Before Big One

## Full tutorial link > https://www.youtube.com/watch?v=yPOadldf6bI

[![How To Properly Setup OneTrainer Concepts And Some Other Options - Quick Tutorial Before Big One](https://img.youtube.com/vi/yPOadldf6bI/sddefault.jpg)](https://www.youtube.com/watch?v=yPOadldf6bI "How To Properly Setup OneTrainer Concepts And Some Other Options - Quick Tutorial Before Big One")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Properly-Setup-OneTrainer-Concepts-And-Some-Other-Options-Quick-Tutorial-Before-Big-One.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Properly-Setup-OneTrainer-Concepts-And-Some-Other-Options-Quick-Tutorial-Before-Big-One.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


OneTrainer Stable Diffusion XL (SDXL) Fine Tuning Best Presets : [https://www.patreon.com/posts/96028218](https://www.patreon.com/posts/96028218)

The Very Best OneTrainer Workflow & Config For SD 1.5 Based Models DreamBooth / Full Fine Tuning :

[https://www.patreon.com/posts/97381002](https://www.patreon.com/posts/97381002)

Full Workflow For Newbie Stable Diffusion Trainers For SD 1.5 Models & SDXL Models Training With DreamBooth & LoRA :

[https://www.patreon.com/posts/full-workflow-sd-98620163](https://www.patreon.com/posts/full-workflow-sd-98620163)

5200 Ground Truth Regularization Images for Man & Woman (each one has 5200 images) :

[https://www.patreon.com/posts/massive-4k-woman-87700469](https://www.patreon.com/posts/massive-4k-woman-87700469)

OneTrainer repo : [https://github.com/Nerogar/OneTrainer](https://github.com/Nerogar/OneTrainer)



### Video Transcription


- [00:00:03](https://www.youtube.com/watch?v=yPOadldf6bI&t=3) in this video i going to Show you How to use our very best one trainer

- [00:00:05](https://www.youtube.com/watch?v=yPOadldf6bI&t=5) use our very best one trainer configurations actually i am working on

- [00:00:08](https://www.youtube.com/watch?v=yPOadldf6bI&t=8) configurations actually i am working on a full public tutorial Which in which i

- [00:00:11](https://www.youtube.com/watch?v=yPOadldf6bI&t=11) a full public tutorial Which in which i will Share All of The Hyper parameters

- [00:00:14](https://www.youtube.com/watch?v=yPOadldf6bI&t=14) will Share All of The Hyper parameters and settings in details and i will

- [00:00:16](https://www.youtube.com/watch?v=yPOadldf6bI&t=16) and settings in details and i will explain How to use One trainer but it is getting

- [00:00:18](https://www.youtube.com/watch?v=yPOadldf6bI&t=18) explain How to use One trainer but it is getting delayed therefore Today i going to Show

- [00:00:21](https://www.youtube.com/watch?v=yPOadldf6bI&t=21) delayed therefore Today i going to Show you How to use these

- [00:00:23](https://www.youtube.com/watch?v=yPOadldf6bI&t=23) you How to use these configurations We have configurations

- [00:00:25](https://www.youtube.com/watch?v=yPOadldf6bI&t=25) configurations We have configurations for 1.5 based mod

- [00:00:28](https://www.youtube.com/watch?v=yPOadldf6bI&t=28) for 1.5 based mod and

- [00:00:30](https://www.youtube.com/watch?v=yPOadldf6bI&t=30) and mod so it doesn't matter both of working

- [00:00:33](https://www.youtube.com/watch?v=yPOadldf6bI&t=33) mod so it doesn't matter both of working exactly Same downlo the that vram supports

- [00:00:38](https://www.youtube.com/watch?v=yPOadldf6bI&t=38) exactly Same downlo the that vram supports for example if you have 12 gab

- [00:00:41](https://www.youtube.com/watch?v=yPOadldf6bI&t=41) for example if you have 12 gab use the 10.6 gab if you have 16 gab use

- [00:00:45](https://www.youtube.com/watch?v=yPOadldf6bI&t=45) use the 10.6 gab if you have 16 gab use the Tire 2 if you have 24 gab use this

- [00:00:48](https://www.youtube.com/watch?v=yPOadldf6bI&t=48) the Tire 2 if you have 24 gab use this One it is Same for sxl As Well so Let's

- [00:00:52](https://www.youtube.com/watch?v=yPOadldf6bI&t=52) One it is Same for sxl As Well so Let's for example use this 14.5 GB sxl

- [00:01:04](https://www.youtube.com/watch?v=yPOadldf6bI&t=64) After downloading it go to One trainer installation and paste it

- [00:01:07](https://www.youtube.com/watch?v=yPOadldf6bI&t=67) to One trainer installation and paste it into Training presets folder so This is

- [00:01:11](https://www.youtube.com/watch?v=yPOadldf6bI&t=71) into Training presets folder so This is you need to put inside Training presets

- [00:01:15](https://www.youtube.com/watch?v=yPOadldf6bI&t=75) you need to put inside Training presets Start One trainer

- [00:01:36](https://www.youtube.com/watch?v=yPOadldf6bI&t=96) him from the settings configuration this was The

- [00:01:39](https://www.youtube.com/watch?v=yPOadldf6bI&t=99) settings configuration this was The downloaded One so what you need to

- [00:01:42](https://www.youtube.com/watch?v=yPOadldf6bI&t=102) downloaded One so what you need to change Here is change your workspace

- [00:01:44](https://www.youtube.com/watch?v=yPOadldf6bI&t=104) change Here is change your workspace directory according to Your hard Drive

- [00:01:46](https://www.youtube.com/watch?v=yPOadldf6bI&t=106) directory according to Your hard Drive for example Let's it As My F Drive and

- [00:01:51](https://www.youtube.com/watch?v=yPOadldf6bI&t=111) for example Let's it As My F Drive and Let's Say One

- [00:01:58](https://www.youtube.com/watch?v=yPOadldf6bI&t=118) trainer so All of theor

- [00:02:12](https://www.youtube.com/watch?v=yPOadldf6bI&t=132) and Select the folder and Get selected in Here you don't Need To anything el in

- [00:02:15](https://www.youtube.com/watch?v=yPOadldf6bI&t=135) in Here you don't Need To anything el in the mod Select mods downloading from

- [00:02:19](https://www.youtube.com/watch?v=yPOadldf6bI&t=139) the mod Select mods downloading from hugging Face repositories you canly give

- [00:02:21](https://www.youtube.com/watch?v=yPOadldf6bI&t=141) hugging Face repositories you canly give the mod from here

- [00:02:32](https://www.youtube.com/watch?v=yPOadldf6bI&t=152) cck supported model output Destination Now This is Super important you need to

- [00:02:34](https://www.youtube.com/watch?v=yPOadldf6bI&t=154) Now This is Super important you need to Give full pad Don't Forget that Give

- [00:02:37](https://www.youtube.com/watch?v=yPOadldf6bI&t=157) Give full pad Don't Forget that Give full pad with safe T Source

- [00:02:40](https://www.youtube.com/watch?v=yPOadldf6bI&t=160) full pad with safe T Source extension these are all the best

- [00:02:42](https://www.youtube.com/watch?v=yPOadldf6bI&t=162) extension these are all the best settings so You don't need to change

- [00:02:44](https://www.youtube.com/watch?v=yPOadldf6bI&t=164) settings so You don't need to change anything

- [00:02:46](https://www.youtube.com/watch?v=yPOadldf6bI&t=166) anything there in the

- [00:02:48](https://www.youtube.com/watch?v=yPOadldf6bI&t=168) there in the data enable latent

- [00:02:51](https://www.youtube.com/watch?v=yPOadldf6bI&t=171) data enable latent caching it increases the Speed ​​ and also

- [00:02:55](https://www.youtube.com/watch?v=yPOadldf6bI&t=175) caching it increases the Speed ​​and also reduces vram and the most important part is

- [00:02:59](https://www.youtube.com/watch?v=yPOadldf6bI&t=179) reduces vram and the most important part is concepts in the concepts you need to ADD your Concept

- [00:03:02](https://www.youtube.com/watch?v=yPOadldf6bI&t=182) concepts in the concepts you need to ADD your Concept One by One for example

- [00:03:05](https://www.youtube.com/watch?v=yPOadldf6bI&t=185) One by One for example Let's ADD Training images Concept so

- [00:03:08](https://www.youtube.com/watch?v=yPOadldf6bI&t=188) Let's ADD Training images Concept so After clicking there type As Training images

- [00:03:11](https://www.youtube.com/watch?v=yPOadldf6bI&t=191) After clicking there type As Training images Give any name you can enable or

- [00:03:14](https://www.youtube.com/watch?v=yPOadldf6bI&t=194) Give any name you can enable or disable concepts All of The enabled concepts will be Used

- [00:03:16](https://www.youtube.com/watch?v=yPOadldf6bI&t=196) disable concepts All of The enabled concepts will be Used One trainer doesn't have Dream

- [00:03:18](https://www.youtube.com/watch?v=yPOadldf6bI&t=198) One trainer doesn't have Dream

- [00:03:24](https://www.youtube.com/watch?v=yPOadldf6bI&t=204) however We are able to uti regularization images that We have from un

- [00:03:26](https://www.youtube.com/watch?v=yPOadldf6bI&t=206) regularization images that We have from un that i have collected Select the p of

- [00:03:30](https://www.youtube.com/watch?v=yPOadldf6bI&t=210) that i have collected Select the p of the images for example My images are

- [00:03:32](https://www.youtube.com/watch?v=yPOadldf6bI&t=212) the images for example My images are Here will Select them

- [00:03:35](https://www.youtube.com/watch?v=yPOadldf6bI&t=215) Here will Select them ok Here This is ST 1.5 based config so

- [00:03:40](https://www.youtube.com/watch?v=yPOadldf6bI&t=220) ok Here This is ST 1.5 based config so Let's Select the

- [00:03:43](https://www.youtube.com/watch?v=yPOadldf6bI&t=223) Let's Select the folder and in

- [00:03:46](https://www.youtube.com/watch?v=yPOadldf6bI&t=226) folder and in Here you need to set from text file Per

- [00:03:50](https://www.youtube.com/watch?v=yPOadldf6bI&t=230) Here you need to set from text file Per sample or from single text file so from text

- [00:03:54](https://www.youtube.com/watch?v=yPOadldf6bI&t=234) sample or from single text file so from text file Per sample means That it will

- [00:03:58](https://www.youtube.com/watch?v=yPOadldf6bI&t=238) file Per sample means That it will look for the captions with the same name

- [00:04:01](https://www.youtube.com/watch?v=yPOadldf6bI&t=241) look for the captions with the same name As the file name And it will read them

- [00:04:04](https://www.youtube.com/watch?v=yPOadldf6bI&t=244) As the file name And it will read them however i don't use captioning for

- [00:04:05](https://www.youtube.com/watch?v=yPOadldf6bI&t=245) however i don't use captioning for Training persons so make a caption Here

- [00:04:09](https://www.youtube.com/watch?v=yPOadldf6bI&t=249) Training persons so make a caption Here like Let's Say caption

- [00:04:12](https://www.youtube.com/watch?v=yPOadldf6bI&t=252) like Let's Say caption and Let's edit it OK Let's Open

- [00:04:17](https://www.youtube.com/watch?v=yPOadldf6bI&t=257) and Let's edit it OK Let's Open with it and type ohw Man or woman or

- [00:04:20](https://www.youtube.com/watch?v=yPOadldf6bI&t=260) with it and type ohw Man or woman or Whatever i will explain All of this in

- [00:04:23](https://www.youtube.com/watch?v=yPOadldf6bI&t=263) Whatever i will explain All of this in the Other video in details Select so it

- [00:04:27](https://www.youtube.com/watch?v=yPOadldf6bI&t=267) the Other video in details Select so it will use this caption for All of The

- [00:04:43](https://www.youtube.com/watch?v=yPOadldf6bI&t=283) humans and i don't know is doing en ring of Sampa i don't

- [00:04:46](https://www.youtube.com/watch?v=yPOadldf6bI&t=286) of Sampa i don't suggest All of these options are Dis update

- [00:04:50](https://www.youtube.com/watch?v=yPOadldf6bI&t=290) suggest All of these options are Dis update will see the updated im

- [00:05:07](https://www.youtube.com/watch?v=yPOadldf6bI&t=307) 1. Train ep it will repeat One Times these

- [00:05:10](https://www.youtube.com/watch?v=yPOadldf6bI&t=310) it will repeat One Times these Training

- [00:05:12](https://www.youtube.com/watch?v=yPOadldf6bI&t=312) Training images so it will be 15 steps with B

- [00:05:16](https://www.youtube.com/watch?v=yPOadldf6bI&t=316) images so it will be 15 steps with B size One for my Training images and Now

- [00:05:18](https://www.youtube.com/watch?v=yPOadldf6bI&t=318) size One for my Training images and Now i going to ADD the regularization images

- [00:05:21](https://www.youtube.com/watch?v=yPOadldf6bI&t=321) i going to ADD the regularization images so ADD Another Concept and

- [00:05:24](https://www.youtube.com/watch?v=yPOadldf6bI&t=324) so ADD Another Concept and İnel

- [00:05:49](https://www.youtube.com/watch?v=yPOadldf6bI&t=349) All L pat

- [00:06:12](https://www.youtube.com/watch?v=yPOadldf6bI&t=372) and edit it Forget and tye Man because these are all Man images that We are

- [00:06:14](https://www.youtube.com/watch?v=yPOadldf6bI&t=374) these are all Man images that We are using CL and Select see like selected

- [00:06:21](https://www.youtube.com/watch?v=yPOadldf6bI&t=381) using CL and Select see like selected and

- [00:06:30](https://www.youtube.com/watch?v=yPOadldf6bI&t=390) repeat Need div

- [00:06:32](https://www.youtube.com/watch?v=yPOadldf6bI&t=392) div 500 and put value Here What does this me

- [00:06:38](https://www.youtube.com/watch?v=yPOadldf6bI&t=398) 500 and put value Here What does this me this means that in Every ep it will use

- [00:06:41](https://www.youtube.com/watch?v=yPOadldf6bI&t=401) this means that in Every ep it will use only 15 images of regularization images

- [00:06:45](https://www.youtube.com/watch?v=yPOadldf6bI&t=405) only 15 images of regularization images randomly i have tested the effect of

- [00:06:48](https://www.youtube.com/watch?v=yPOadldf6bI&t=408) randomly i have tested the effect of this it is shared on the patreon As Well

- [00:06:50](https://www.youtube.com/watch?v=yPOadldf6bI&t=410) this it is shared on the patreon As Well This is improving the Training As

- [00:06:53](https://www.youtube.com/watch?v=yPOadldf6bI&t=413) This is improving the Training As expected and image augmentation also

- [00:06:56](https://www.youtube.com/watch?v=yPOadldf6bI&t=416) expected and image augmentation also Close update preview and is working

- [00:07:06](https://www.youtube.com/watch?v=yPOadldf6bI&t=426) Training Concept

- [00:07:09](https://www.youtube.com/watch?v=yPOadldf6bI&t=429) Concept Training number of you to train for exle

- [00:07:20](https://www.youtube.com/watch?v=yPOadldf6bI&t=440) fores 150 working nice and

- [00:07:32](https://www.youtube.com/watch?v=yPOadldf6bI&t=452) Can extremely important Now they have ADD Save file prefix Which i love it i

- [00:07:35](https://www.youtube.com/watch?v=yPOadldf6bI&t=455) ADD Save file prefix Which i love it i told The developer To ADD so you can Save

- [00:07:38](https://www.youtube.com/watch?v=yPOadldf6bI&t=458) told The developer To ADD so you can Save After Every ep and Get checkpoint

- [00:07:41](https://www.youtube.com/watch?v=yPOadldf6bI&t=461) After Every ep and Get checkpoint and you can Say like My Training One so

- [00:07:46](https://www.youtube.com/watch?v=yPOadldf6bI&t=466) and you can Say like My Training One so this will be the saved file names

- [00:07:48](https://www.youtube.com/watch?v=yPOadldf6bI&t=468) this will be the saved file names prefixes they will be saved inside your

- [00:07:51](https://www.youtube.com/watch?v=yPOadldf6bI&t=471) prefixes they will be saved inside your workspace folder Wherever you

- [00:07:53](https://www.youtube.com/watch?v=yPOadldf6bI&t=473) workspace folder Wherever you have ok hopefully see you in the full

- [00:07:56](https://www.youtube.com/watch?v=yPOadldf6bI&t=476) have ok hopefully see you in the full tutorial later
