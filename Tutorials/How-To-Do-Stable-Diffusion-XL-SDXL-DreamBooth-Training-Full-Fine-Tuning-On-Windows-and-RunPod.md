# How To Do Stable Diffusion XL (SDXL) DreamBooth Training (Full Fine Tuning) On Windows and RunPod

## Full tutorial link > https://www.youtube.com/watch?v=EEV8RPohsbw

[![How To Do Stable Diffusion XL (SDXL) DreamBooth Training (Full Fine Tuning) On Windows and RunPod](https://img.youtube.com/vi/EEV8RPohsbw/sddefault.jpg)](https://www.youtube.com/watch?v=EEV8RPohsbw "How To Do Stable Diffusion XL (SDXL) DreamBooth Training (Full Fine Tuning) On Windows and RunPod")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Do-Stable-Diffusion-XL-SDXL-DreamBooth-Training-Full-Fine-Tuning-On-Windows-and-RunPod.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Do-Stable-Diffusion-XL-SDXL-DreamBooth-Training-Full-Fine-Tuning-On-Windows-and-RunPod.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Patreon post for config files ⤵️

[https://www.patreon.com/posts/89213064](https://www.patreon.com/posts/89213064)

SECourses Discord To Get Full Support ⤵️

[https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388)

My LinkedIn ⤵️

[https://www.linkedin.com/in/furkangozukara/](https://www.linkedin.com/in/furkangozukara/)

My Instagram ⤵️

[https://www.instagram.com/gozukarafurkan/](https://www.instagram.com/gozukarafurkan/)

My Medium ⤵️

@FurkanGozukara [https://medium.com/@furkangozukara](https://medium.com/@furkangozukara)

My CivitAI ⤵️

[https://civitai.com/user/SECourses](https://civitai.com/user/SECourses)



### Video Transcription


- [00:00:03](https://www.youtube.com/watch?v=EEV8RPohsbw&t=3) greetings everyone in this video i will Show you How to do Dream Training on stable diffusion

- [00:00:06](https://www.youtube.com/watch?v=EEV8RPohsbw&t=6) you How to do Dream Training on stable diffusion

- [00:00:43](https://www.youtube.com/watch?v=EEV8RPohsbw&t=43) you don't know how to run it and Set up it on ramp use

- [00:00:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=46) know how to run it and Set up it on ramp use Watch this

- [00:00:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=48) Watch this amazing you see This is over 30 Minutes

- [00:00:51](https://www.youtube.com/watch?v=EEV8RPohsbw&t=51) amazing you see This is over 30 Minutes so i am going to assume that you have

- [00:00:54](https://www.youtube.com/watch?v=EEV8RPohsbw&t=54) so i am going to assume that you have already installed your K on R or Windows

- [00:00:58](https://www.youtube.com/watch?v=EEV8RPohsbw&t=58) already installed your K on R or Windows and you are ready to use this

- [00:01:00](https://www.youtube.com/watch?v=EEV8RPohsbw&t=60) and you are ready to use this configuration Files so i'm going to Show

- [00:01:03](https://www.youtube.com/watch?v=EEV8RPohsbw&t=63) configuration Files so i'm going to Show both Run and also Windows in this Quick

- [00:01:06](https://www.youtube.com/watch?v=EEV8RPohsbw&t=66) both Run and also Windows in this Quick tutorial

- [00:01:08](https://www.youtube.com/watch?v=EEV8RPohsbw&t=68) tutorial video let me Start My latest koh version

- [00:01:13](https://www.youtube.com/watch?v=EEV8RPohsbw&t=73) video let me Start My latest koh version from gub

- [00:01:16](https://www.youtube.com/watch?v=EEV8RPohsbw&t=76) from gub file ok it is started Let's open the

- [00:01:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=87) URL so there are F settings 16 GB 24 GB and 48 GB 48 gab oath 24 gab are Same

- [00:01:32](https://www.youtube.com/watch?v=EEV8RPohsbw&t=92) and 48 GB 48 gab oath 24 gab are Same Quality only the Speed ​​ is different 16 gab Has

- [00:01:35](https://www.youtube.com/watch?v=EEV8RPohsbw&t=95) Quality only the Speed ​​is different 16 gab Has

- [00:02:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=135) from Here and Close All of The applications so try to reduce Your

- [00:02:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=138) applications so try to reduce Your dedicated gpu Memory usage before

- [00:02:20](https://www.youtube.com/watch?v=EEV8RPohsbw&t=140) dedicated gpu Memory usage before starting Training This is Super

- [00:02:22](https://www.youtube.com/watch?v=EEV8RPohsbw&t=142) starting Training This is Super important so Let's download 24 GB B Jon

- [00:02:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=147) important so Let's download 24 GB B Jon file then We are going to Dream Boot top

- [00:02:31](https://www.youtube.com/watch?v=EEV8RPohsbw&t=151) file then We are going to Dream Boot top configuration

- [00:02:33](https://www.youtube.com/watch?v=EEV8RPohsbw&t=153) configuration Open from download Let's open the best

- [00:02:37](https://www.youtube.com/watch?v=EEV8RPohsbw&t=157) Open from download Let's open the best json and All of The settings are downloaded

- [00:02:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=159) json and All of The settings are downloaded First of all Select your

- [00:02:41](https://www.youtube.com/watch?v=EEV8RPohsbw&t=161) First of all Select your stable diffusion XL model on Windows

- [00:02:45](https://www.youtube.com/watch?v=EEV8RPohsbw&t=165) stable diffusion XL model on Windows Just Click

- [00:02:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=166) Just Click on Windows Just Click Here so My

- [00:02:50](https://www.youtube.com/watch?v=EEV8RPohsbw&t=170) on Windows Just Click Here so My model is inside Here you see i selected

- [00:02:53](https://www.youtube.com/watch?v=EEV8RPohsbw&t=173) model is inside Here you see i selected And it is selected

- [00:02:55](https://www.youtube.com/watch?v=EEV8RPohsbw&t=175) And it is selected Other than that All you need to do is

- [00:02:57](https://www.youtube.com/watch?v=EEV8RPohsbw&t=177) Other than that All you need to do is Setting up your like

- [00:03:10](https://www.youtube.com/watch?v=EEV8RPohsbw&t=190) Select the folder of Training images these are all sh in the tutorial

- [00:03:14](https://www.youtube.com/watch?v=EEV8RPohsbw&t=194) images these are all sh in the tutorial videos in tutorial so Watch to learn so

- [00:03:19](https://www.youtube.com/watch?v=EEV8RPohsbw&t=199) videos in tutorial so Watch to learn so i will Select My Pictures from Here

- [00:03:43](https://www.youtube.com/watch?v=EEV8RPohsbw&t=223) data is you have download Select folder Destination

- [00:03:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=226) folder Destination directory Where i want to be sav

- [00:03:49](https://www.youtube.com/watch?v=EEV8RPohsbw&t=229) directory Where i want to be sav so Save as in test

- [00:03:54](https://www.youtube.com/watch?v=EEV8RPohsbw&t=234) so Save as in test Here

- [00:04:00](https://www.youtube.com/watch?v=EEV8RPohsbw&t=240) Can Here stable

- [00:04:02](https://www.youtube.com/watch?v=EEV8RPohsbw&t=242) Here stable diffusion mod stable diffusion and Let's

- [00:04:06](https://www.youtube.com/watch?v=EEV8RPohsbw&t=246) diffusion mod stable diffusion and Let's Say test example so if you Save them

- [00:04:10](https://www.youtube.com/watch?v=EEV8RPohsbw&t=250) Say test example so if you Save them inside this folder You will be able to

- [00:04:12](https://www.youtube.com/watch?v=EEV8RPohsbw&t=252) inside this folder You will be able to use them later automatically in your

- [00:04:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=255) use them later automatically in your automatic cck prepare Training data then

- [00:04:20](https://www.youtube.com/watch?v=EEV8RPohsbw&t=260) automatic cck prepare Training data then Watch Of course the messages here Click

- [00:04:23](https://www.youtube.com/watch?v=EEV8RPohsbw&t=263) Watch Of course the messages here Click copy inf to folder and you are set then

- [00:04:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=267) copy inf to folder and you are set then hit Training need to change anything

- [00:04:30](https://www.youtube.com/watch?v=EEV8RPohsbw&t=270) hit Training need to change anything else so Let's hit Start Training we will

- [00:04:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=274) else so Let's hit Start Training we will see the vram usage

- [00:04:41](https://www.youtube.com/watch?v=EEV8RPohsbw&t=281) increase ok so the Training is getting started by the way it May cause some ble

- [00:04:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=286) started by the way it May cause some ble neck because i also recording a video

- [00:04:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=288) neck because i also recording a video ok first it is going to cch the

- [00:05:05](https://www.youtube.com/watch?v=EEV8RPohsbw&t=305) because if then will move to Start using shaded

- [00:05:09](https://www.youtube.com/watch?v=EEV8RPohsbw&t=309) if then will move to Start using shaded gpu Memory you see Here and if it uses

- [00:05:13](https://www.youtube.com/watch?v=EEV8RPohsbw&t=313) gpu Memory you see Here and if it uses shaded GP Memory it will be 10 Maybe

- [00:05:16](https://www.youtube.com/watch?v=EEV8RPohsbw&t=316) shaded GP Memory it will be 10 Maybe even More Slower so You Will Get

- [00:05:19](https://www.youtube.com/watch?v=EEV8RPohsbw&t=319) even More Slower so You Will Get terrible Training

- [00:05:21](https://www.youtube.com/watch?v=EEV8RPohsbw&t=321) terrible Training speeds i willst this video twit will of pat i

- [00:05:28](https://www.youtube.com/watch?v=EEV8RPohsbw&t=328) speeds i willst this video twit will of pat i will also post this in linkedin

- [00:05:31](https://www.youtube.com/watch?v=EEV8RPohsbw&t=331) will also post this in linkedin the link will be in the com section of

- [00:05:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=334) the link will be in the com section of the linkedin and i will post on Other

- [00:05:36](https://www.youtube.com/watch?v=EEV8RPohsbw&t=336) the linkedin and i will post on Other platforms so Make sure that you Check

- [00:05:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=339) platforms so Make sure that you Check the link of this patreon post Wherever i

- [00:05:42](https://www.youtube.com/watch?v=EEV8RPohsbw&t=342) the link of this patreon post Wherever i have posted ok

- [00:05:44](https://www.youtube.com/watch?v=EEV8RPohsbw&t=344) have posted ok Let's Watch the Training

- [00:05:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=348) Let's Watch the Training progress and the Training has started

- [00:05:50](https://www.youtube.com/watch?v=EEV8RPohsbw&t=350) progress and the Training has started you see it is using

- [00:05:52](https://www.youtube.com/watch?v=EEV8RPohsbw&t=352) you see it is using 19.5 GB vram and We Are Not even using

- [00:05:56](https://www.youtube.com/watch?v=EEV8RPohsbw&t=356) 19.5 GB vram and We Are Not even using xers To reduce vam usage Speed ​​ up am Now

- [00:06:01](https://www.youtube.com/watch?v=EEV8RPohsbw&t=361) xers To reduce vam usage Speed ​​up am Now recording a video with also Voice

- [00:06:04](https://www.youtube.com/watch?v=EEV8RPohsbw&t=364) recording a video with also Voice cleaning it is Super slow than it should

- [00:06:08](https://www.youtube.com/watch?v=EEV8RPohsbw&t=368) cleaning it is Super slow than it should be so This is how you do Training on

- [00:06:11](https://www.youtube.com/watch?v=EEV8RPohsbw&t=371) be so This is how you do Training on Windows Now i will Show the Training on Run

- [00:06:14](https://www.youtube.com/watch?v=EEV8RPohsbw&t=374) Windows Now i will Show the Training on Run before showing the models will be saved

- [00:06:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=378) before showing the models will be saved in this folder remember that You

- [00:06:20](https://www.youtube.com/watch?v=EEV8RPohsbw&t=380) in this folder remember that You Will Find your full checkpoints

- [00:06:23](https://www.youtube.com/watch?v=EEV8RPohsbw&t=383) Will Find your full checkpoints there so to do Training on R

- [00:06:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=387) there so to do Training on R log Need

- [00:06:35](https://www.youtube.com/watch?v=EEV8RPohsbw&t=395) gel maxum exed

- [00:06:38](https://www.youtube.com/watch?v=EEV8RPohsbw&t=398) exed rx90 good

- [00:06:40](https://www.youtube.com/watch?v=EEV8RPohsbw&t=400) rx90 good one's let selectable diffusion We

- [00:06:44](https://www.youtube.com/watch?v=EEV8RPohsbw&t=404) one's let selectable diffusion We template Select container 15 set override continue deploy

- [00:06:47](https://www.youtube.com/watch?v=EEV8RPohsbw&t=407) template Select container 15 set override continue deploy Let's go to

- [00:06:58](https://www.youtube.com/watch?v=EEV8RPohsbw&t=418) mys Wow Another forten w D have lost so much money Because

- [00:07:12](https://www.youtube.com/watch?v=EEV8RPohsbw&t=432) Of ok it is starting i have also automatic installer

- [00:07:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=435) starting i have also automatic installer for R for koh open the R tutorial

- [00:07:20](https://www.youtube.com/watch?v=EEV8RPohsbw&t=440) for R for koh open the R tutorial link You Will Find automatic

- [00:07:24](https://www.youtube.com/watch?v=EEV8RPohsbw&t=444) link You Will Find automatic installer

- [00:07:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=447) installer exps easy to

- [00:07:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=468) Jupiter ok first Let's upload relaunch from download Here relaunch

- [00:08:07](https://www.youtube.com/watch?v=EEV8RPohsbw&t=487) ok Connect you need to do restart One Time

- [00:08:16](https://www.youtube.com/watch?v=EEV8RPohsbw&t=496) important ok rest hased Let's go to workspace let upload

- [00:08:19](https://www.youtube.com/watch?v=EEV8RPohsbw&t=499) hased Let's go to workspace let upload the

- [00:08:21](https://www.youtube.com/watch?v=EEV8RPohsbw&t=501) the inster

- [00:08:23](https://www.youtube.com/watch?v=EEV8RPohsbw&t=503) inster terminal

- [00:08:26](https://www.youtube.com/watch?v=EEV8RPohsbw&t=506) terminal [Music]

- [00:08:28](https://www.youtube.com/watch?v=EEV8RPohsbw&t=508) [Music] instructions so We Just need to run this Let

- [00:08:32](https://www.youtube.com/watch?v=EEV8RPohsbw&t=512) instructions so We Just need to run this Let 's run it it will install the

- [00:08:36](https://www.youtube.com/watch?v=EEV8RPohsbw&t=516) 's run it it will install the kya meanwhile Auto installation is going

- [00:08:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=519) kya meanwhile Auto installation is going on let's upload our Training images so i

- [00:08:42](https://www.youtube.com/watch?v=EEV8RPohsbw&t=522) on let's upload our Training images so i make a Train folder Let's Click

- [00:08:45](https://www.youtube.com/watch?v=EEV8RPohsbw&t=525) make a Train folder Let's Click upload from Pictures and me size 1024 Let

- [00:08:51](https://www.youtube.com/watch?v=EEV8RPohsbw&t=531) upload from Pictures and me size 1024 Let 's upload them you can also download

- [00:08:54](https://www.youtube.com/watch?v=EEV8RPohsbw&t=534) 's upload them you can also download the regularization

- [00:08:55](https://www.youtube.com/watch?v=EEV8RPohsbw&t=535) the regularization images so to Find the best

- [00:08:57](https://www.youtube.com/watch?v=EEV8RPohsbw&t=537) images so to Find the best regularization images Let's go to

- [00:08:59](https://www.youtube.com/watch?v=EEV8RPohsbw&t=539) regularization images Let's go to patreon Exclusive post index from

- [00:09:29](https://www.youtube.com/watch?v=EEV8RPohsbw&t=569) Here ok from Here sorry was a some delay Search this massive 4K resolution

- [00:09:33](https://www.youtube.com/watch?v=EEV8RPohsbw&t=573) delay Search this massive 4K resolution woman and Man Class Ground images dataset

- [00:09:35](https://www.youtube.com/watch?v=EEV8RPohsbw&t=575) woman and Man Class Ground images dataset All instructions are WR Here you

- [00:09:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=579) All instructions are WR Here you can download All of The links from Here

- [00:09:41](https://www.youtube.com/watch?v=EEV8RPohsbw&t=581) can download All of The links from Here but for Now i w use regularization

- [00:09:44](https://www.youtube.com/watch?v=EEV8RPohsbw&t=584) but for Now i w use regularization images and our images are uploaded into

- [00:09:47](https://www.youtube.com/watch?v=EEV8RPohsbw&t=587) images and our images are uploaded into Train

- [00:09:49](https://www.youtube.com/watch?v=EEV8RPohsbw&t=589) Train directory i also latest regularization images

- [00:09:53](https://www.youtube.com/watch?v=EEV8RPohsbw&t=593) directory i also latest regularization images dat link to Dream configuration

- [00:09:58](https://www.youtube.com/watch?v=EEV8RPohsbw&t=598) dat link to Dream configuration files

- [00:10:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=634) the prev started instance with Command let me Show this

- [00:10:40](https://www.youtube.com/watch?v=EEV8RPohsbw&t=640) with Command let me Show this you see hit enter And it will Kill the

- [00:10:42](https://www.youtube.com/watch?v=EEV8RPohsbw&t=642) you see hit enter And it will Kill the previously started instance Now When i

- [00:10:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=646) previously started instance Now When i Look at the gpu Memory i will see Zer

- [00:10:49](https://www.youtube.com/watch?v=EEV8RPohsbw&t=649) Look at the gpu Memory i will see Zer Per usage also This is Now

- [00:10:53](https://www.youtube.com/watch?v=EEV8RPohsbw&t=653) Per usage also This is Now Gone Let's just have a little bit More until

- [00:10:57](https://www.youtube.com/watch?v=EEV8RPohsbw&t=657) Gone Let's just have a little bit More until This is getting refresh

- [00:10:59](https://www.youtube.com/watch?v=EEV8RPohsbw&t=659) This is getting refresh and meanwhile Let's Start our koh

- [00:11:03](https://www.youtube.com/watch?v=EEV8RPohsbw&t=663) and meanwhile Let's Start our koh instance so for starting it Just going to Follow

- [00:11:06](https://www.youtube.com/watch?v=EEV8RPohsbw&t=666) instance so for starting it Just going to Follow this Command from Here Let's copy paste it

- [00:11:10](https://www.youtube.com/watch?v=EEV8RPohsbw&t=670) this Command from Here Let's copy paste it and Let's see Yes you see

- [00:11:13](https://www.youtube.com/watch?v=EEV8RPohsbw&t=673) and Let's see Yes you see now gpu Memory Us is % on ramp Make sure

- [00:11:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=678) now gpu Memory Us is % on ramp Make sure that the gpu Memory Us is % before

- [00:11:21](https://www.youtube.com/watch?v=EEV8RPohsbw&t=681) that the gpu Memory Us is % before starting

- [00:11:23](https://www.youtube.com/watch?v=EEV8RPohsbw&t=683) starting Training ok it started Let's Connect it

- [00:11:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=687) Training ok it started Let's Connect it from shared gradio

- [00:11:30](https://www.youtube.com/watch?v=EEV8RPohsbw&t=690) from shared gradio al Right you can also enable this Port this

- [00:11:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=694) al Right you can also enable this Port this

- [00:11:41](https://www.youtube.com/watch?v=EEV8RPohsbw&t=701) 7860 on your to Connect directly Via Proxy from Here like that all right so

- [00:11:45](https://www.youtube.com/watch?v=EEV8RPohsbw&t=705) Proxy from Here like that all right so Now all i need to do is upload My

- [00:11:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=708) Now all i need to do is upload My configuration file into workspace so

- [00:11:51](https://www.youtube.com/watch?v=EEV8RPohsbw&t=711) configuration file into workspace so Click upload Let's go to downloads this

- [00:11:54](https://www.youtube.com/watch?v=EEV8RPohsbw&t=714) Click upload Let's go to downloads this is my configuration file copy pad then

- [00:11:59](https://www.youtube.com/watch?v=EEV8RPohsbw&t=719) is my configuration file copy pad then in the Dre in the configuration Put a

- [00:12:02](https://www.youtube.com/watch?v=EEV8RPohsbw&t=722) in the Dre in the configuration Put a Back always put in Run cck load and

- [00:12:08](https://www.youtube.com/watch?v=EEV8RPohsbw&t=728) Back always put in Run cck load and entire configuration is loaded First of

- [00:12:10](https://www.youtube.com/watch?v=EEV8RPohsbw&t=730) entire configuration is loaded First of all We need to Give the sxl Base version

- [00:12:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=735) all We need to Give the sxl Base version file pad Which is Here so copy

- [00:12:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=738) file pad Which is Here so copy pad remove this put It Like that on R you w

- [00:12:22](https://www.youtube.com/watch?v=EEV8RPohsbw&t=742) pad remove this put It Like that on R you w to you

- [00:12:36](https://www.youtube.com/watch?v=EEV8RPohsbw&t=756) My Training images ins Train folder CY and Put a Back this i not going to

- [00:12:41](https://www.youtube.com/watch?v=EEV8RPohsbw&t=761) CY and Put a Back this i not going to use regularization images in this Case

- [00:12:43](https://www.youtube.com/watch?v=EEV8RPohsbw&t=763) use regularization images in this Case but you can use them and the Destination

- [00:12:46](https://www.youtube.com/watch?v=EEV8RPohsbw&t=766) but you can use them and the Destination directory Let's Make the Destination

- [00:12:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=768) directory Let's Make the Destination directory inside models of stable

- [00:12:50](https://www.youtube.com/watch?v=EEV8RPohsbw&t=770) directory inside models of stable diffusion folder so we will be able to

- [00:12:53](https://www.youtube.com/watch?v=EEV8RPohsbw&t=773) diffusion folder so we will be able to use later

- [00:12:55](https://www.youtube.com/watch?v=EEV8RPohsbw&t=775) use later automatic stable diffusion aomi

- [00:13:40](https://www.youtube.com/watch?v=EEV8RPohsbw&t=820) İmes really Fast and we will see the Speed ​​ wait up to 10 minutes to see How

- [00:13:45](https://www.youtube.com/watch?v=EEV8RPohsbw&t=825) Speed ​​wait up to 10 minutes to see How much Speed ​​ it will Get currently it is

- [00:13:48](https://www.youtube.com/watch?v=EEV8RPohsbw&t=828) much Speed ​​it will Get currently it is 1.4 Seconds Per it Which is very decent

- [00:13:52](https://www.youtube.com/watch?v=EEV8RPohsbw&t=832) 1.4 Seconds Per it Which is very decent soti is

- [00:14:01](https://www.youtube.com/watch?v=EEV8RPohsbw&t=841) to Memory Used am here GP utilization Here it is using 70

- [00:14:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=855) so it is only using like 16.8 GB vram so You Can Do this Training on 20 gab model

- [00:14:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=858) You Can Do this Training on 20 gab model As Well on 20 gab gpu As Well if you also enable

- [00:14:21](https://www.youtube.com/watch?v=EEV8RPohsbw&t=861) As Well on 20 gab gpu As Well if you also enable

- [00:15:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=918) Let's download our prompt list PDF file from Here so Let's

- [00:15:22](https://www.youtube.com/watch?v=EEV8RPohsbw&t=922) prompt list PDF file from Here so Let's Open our prom list and We

- [00:15:25](https://www.youtube.com/watch?v=EEV8RPohsbw&t=925) Open our prom list and We have of promt here As Well so Which image do i

- [00:15:30](https://www.youtube.com/watch?v=EEV8RPohsbw&t=930) have of promt here As Well so Which image do i want to generate Let's

- [00:15:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=934) want to generate Let's generate images in this Style cck download

- [00:15:36](https://www.youtube.com/watch?v=EEV8RPohsbw&t=936) generate images in this Style cck download it will download the image Save

- [00:15:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=939) it will download the image Save As into the downloads Let's go to the

- [00:15:42](https://www.youtube.com/watch?v=EEV8RPohsbw&t=942) As into the downloads Let's go to the stable diffusion png info Let's load it

- [00:15:45](https://www.youtube.com/watch?v=EEV8RPohsbw&t=945) stable diffusion png info Let's load it from Here so it will load All of The

- [00:15:47](https://www.youtube.com/watch?v=EEV8RPohsbw&t=947) from Here so it will load All of The parameters let Send to the Generation

- [00:15:51](https://www.youtube.com/watch?v=EEV8RPohsbw&t=951) parameters let Send to the Generation also i will Select my best model from

- [00:15:54](https://www.youtube.com/watch?v=EEV8RPohsbw&t=954) also i will Select my best model from Here i using fp

- [00:15:57](https://www.youtube.com/watch?v=EEV8RPohsbw&t=957) Here i using fp 16xl so also going to use

- [00:16:02](https://www.youtube.com/watch?v=EEV8RPohsbw&t=962) 16xl so also going to use After detailer with Let's Say denoising

- [00:16:07](https://www.youtube.com/watch?v=EEV8RPohsbw&t=967) After detailer with Let's Say denoising Zer 40

- [00:16:10](https://www.youtube.com/watch?v=EEV8RPohsbw&t=970) Zer 40 Per Let's Make the sampling steps 4 and Let's generate 12 images

- [00:16:14](https://www.youtube.com/watch?v=EEV8RPohsbw&t=974) Per Let's Make the sampling steps 4 and Let's generate 12 images

- [00:17:18](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1038) using After detailer some of the images will have lesser degree of stylization

- [00:17:22](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1042) will have lesser degree of stylization and will have More realism so you can

- [00:17:24](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1044) and will have More realism so you can Delete this phot and try again or reduce

- [00:17:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1047) Delete this phot and try again or reduce the in painting masking Deno strength or

- [00:17:32](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1052) the in painting masking Deno strength or Turn off After detailer When generating

- [00:17:34](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1054) Turn off After detailer When generating stylized images but the results are

- [00:17:36](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1056) stylized images but the results are amazing you can Get amazing images with

- [00:17:39](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1059) amazing you can Get amazing images with this strategy i also have so many Other

- [00:17:43](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1063) this strategy i also have so many Other amazing proms in that prom list so you

- [00:17:47](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1067) amazing proms in that prom list so you can also use that prom list to generate

- [00:17:50](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1070) can also use that prom list to generate amazing images let me Show some of the

- [00:17:53](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1073) amazing images let me Show some of the images i generated with this Dre

- [00:17:56](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1076) images i generated with this Dre tutorial configuration and

- [00:17:59](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1079) tutorial configuration and amaz

- [00:18:07](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1087) forle and i have even mod Now the model i generated these

- [00:18:08](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1088) i generated these images so i am also still working on

- [00:18:12](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1092) images so i am also still working on finding even better configuration

- [00:18:15](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1095) finding even better configuration hopefully before i do The Final tutorial

- [00:18:20](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1100) hopefully before i do The Final tutorial i will have even better

- [00:18:23](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1103) i will have even better configuration this so much for

- [00:18:27](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1107) configuration this so much for pat subbing me and i Hope you Share this

- [00:18:31](https://www.youtube.com/watch?v=EEV8RPohsbw&t=1111) pat subbing me and i Hope you Share this sharing As Well hope See you later
