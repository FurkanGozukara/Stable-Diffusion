# How To Install New DreamBooth Extension On RunPod - Automatic1111 Web UI - Stable Diffusion

## Full tutorial link > https://www.youtube.com/watch?v=oI0GEnrySS0

[![How To Install New DreamBooth Extension On RunPod - Automatic1111 Web UI - Stable Diffusion](https://img.youtube.com/vi/oI0GEnrySS0/sddefault.jpg)](https://www.youtube.com/watch?v=oI0GEnrySS0 "How To Install New DreamBooth Extension On RunPod - Automatic1111 Web UI - Stable Diffusion")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-New-DreamBooth-Extension-On-RunPod-Automatic1111-Web-UI-Stable-Diffusion.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-New-DreamBooth-Extension-On-RunPod-Automatic1111-Web-UI-Stable-Diffusion.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Updated video : [https://youtu.be/zA4LksIVas8](https://youtu.be/zA4LksIVas8)  - RunPod: [https://bit.ly/RunPodIO.](https://bit.ly/RunPodIO.) Discord : [https://bit.ly/SECoursesDiscord.](https://bit.ly/SECoursesDiscord.) How to install and start using #DreamBooth extension on #RunPod SD Web UI template. If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

DreamBooth extension: [https://github.com/d8ahazard/sd_dreambooth_extension](https://github.com/d8ahazard/sd_dreambooth_extension)

Main video : [https://youtu.be/sRdtVanSRl4](https://youtu.be/sRdtVanSRl4)

Playlist of #StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img:

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

pip install -r requirements.txt

[00:00:00](https://youtu.be/oI0GEnrySS0?t=0) How to install and use Web UI DreamBooth extension on RunPod Pods

[00:00:31](https://youtu.be/oI0GEnrySS0?t=31) Which RunPod template you should pick for Automatic1111 Web UI and DreamBooth

[00:00:43](https://youtu.be/oI0GEnrySS0?t=43) What to do after new Pod has been started

[00:00:50](https://youtu.be/oI0GEnrySS0?t=50) How use git pull to update Web UI version

[00:00:55](https://youtu.be/oI0GEnrySS0?t=55) How to clone DreamBooth extension aka download install

[00:01:10](https://youtu.be/oI0GEnrySS0?t=70) How to update already installed extension

[00:01:30](https://youtu.be/oI0GEnrySS0?t=90) How to install requirements of DreamBooth

[00:02:08](https://youtu.be/oI0GEnrySS0?t=128) How to modify relauncher.py in the correct way

[00:02:20](https://youtu.be/oI0GEnrySS0?t=140) How to fix requirements version confliction problem

[00:02:57](https://youtu.be/oI0GEnrySS0?t=177) Why we are changing requirements versions

[00:03:20](https://youtu.be/oI0GEnrySS0?t=200) How to terminate initially started Web UI instance

thumbnail freepik pikisuperstar



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=oI0GEnrySS0&t=0) Greetings everyone, in this video I will show you how to install and run DreamBooth extension

- [00:00:06](https://www.youtube.com/watch?v=oI0GEnrySS0&t=6) on the web UI template on RunPods after their newest template changes.

- [00:00:11](https://www.youtube.com/watch?v=oI0GEnrySS0&t=11) I have been getting asked too many times so this will be a short video that I will only

- [00:00:15](https://www.youtube.com/watch?v=oI0GEnrySS0&t=15) explain how to install and run DreamBooth extension on RunPods.

- [00:00:19](https://www.youtube.com/watch?v=oI0GEnrySS0&t=19) So the most important thing is getting high RAM having RunPod like 62 GB and getting a

- [00:00:25](https://www.youtube.com/watch?v=oI0GEnrySS0&t=25) decent VRAM having graphic card like RTX A4500.

- [00:00:30](https://www.youtube.com/watch?v=oI0GEnrySS0&t=30) Let's click deploy.

- [00:00:32](https://www.youtube.com/watch?v=oI0GEnrySS0&t=32) Select the template here.

- [00:00:33](https://www.youtube.com/watch?v=oI0GEnrySS0&t=33) This is really important.

- [00:00:34](https://www.youtube.com/watch?v=oI0GEnrySS0&t=34) I am selecting RunPod Stable Diffusion 1.5.

- [00:00:37](https://www.youtube.com/watch?v=oI0GEnrySS0&t=37) Set your persistent volume as usual like 100 GBs.

- [00:00:41](https://www.youtube.com/watch?v=oI0GEnrySS0&t=41) Deploy.

- [00:00:42](https://www.youtube.com/watch?v=oI0GEnrySS0&t=42) Okay the pod has been started.

- [00:00:43](https://www.youtube.com/watch?v=oI0GEnrySS0&t=43) Let's connect.

- [00:00:44](https://www.youtube.com/watch?v=oI0GEnrySS0&t=44) Okay fresh pod is here.

- [00:00:46](https://www.youtube.com/watch?v=oI0GEnrySS0&t=46) First enter the Stable Diffusion web UI folder.

- [00:00:48](https://www.youtube.com/watch?v=oI0GEnrySS0&t=48) Start a new terminal.

- [00:00:50](https://www.youtube.com/watch?v=oI0GEnrySS0&t=50) Just type git pull.

- [00:00:52](https://www.youtube.com/watch?v=oI0GEnrySS0&t=52) Why?

- [00:00:53](https://www.youtube.com/watch?v=oI0GEnrySS0&t=53) Because we are updating if there is a newer version of the web UI then enter inside extensions

- [00:00:57](https://www.youtube.com/watch?v=oI0GEnrySS0&t=57) folder.

- [00:00:58](https://www.youtube.com/watch?v=oI0GEnrySS0&t=58) Start a new terminal here.

- [00:01:00](https://www.youtube.com/watch?v=oI0GEnrySS0&t=60) Copy the URL of the extension.

- [00:01:03](https://www.youtube.com/watch?v=oI0GEnrySS0&t=63) Type git clone and the extension URL.

- [00:01:06](https://www.youtube.com/watch?v=oI0GEnrySS0&t=66) It will clone it in here.

- [00:01:08](https://www.youtube.com/watch?v=oI0GEnrySS0&t=68) You see if you already have installed the extension and if you want to update it enter

- [00:01:12](https://www.youtube.com/watch?v=oI0GEnrySS0&t=72) inside the folder.

- [00:01:14](https://www.youtube.com/watch?v=oI0GEnrySS0&t=74) Open a new terminal here.

- [00:01:15](https://www.youtube.com/watch?v=oI0GEnrySS0&t=75) Type git pull.

- [00:01:16](https://www.youtube.com/watch?v=oI0GEnrySS0&t=76) This will update the extension.

- [00:01:18](https://www.youtube.com/watch?v=oI0GEnrySS0&t=78) Currently Automatic1111 web UI extension update mechanism is broken through the interface

- [00:01:25](https://www.youtube.com/watch?v=oI0GEnrySS0&t=85) so you should use git pull.

- [00:01:26](https://www.youtube.com/watch?v=oI0GEnrySS0&t=86) Okay now inside this extension folder we are going to install requirements.

- [00:01:32](https://www.youtube.com/watch?v=oI0GEnrySS0&t=92) To install them we will run a very simple command which is pip install -r requirements.txt

- [00:01:40](https://www.youtube.com/watch?v=oI0GEnrySS0&t=100) and that's it.

- [00:01:41](https://www.youtube.com/watch?v=oI0GEnrySS0&t=101) It will install all of the dependencies.

- [00:01:44](https://www.youtube.com/watch?v=oI0GEnrySS0&t=104) So this is the command you need to execute inside this folder.

- [00:01:49](https://www.youtube.com/watch?v=oI0GEnrySS0&t=109) Make sure that you are inside this folder where you are executing this command.

- [00:01:53](https://www.youtube.com/watch?v=oI0GEnrySS0&t=113) To open command window inside this folder press new launcher terminal and you will see

- [00:01:59](https://www.youtube.com/watch?v=oI0GEnrySS0&t=119) the terminal started inside this folder as you can see.

- [00:02:02](https://www.youtube.com/watch?v=oI0GEnrySS0&t=122) Okay everything was installed successfully.

- [00:02:04](https://www.youtube.com/watch?v=oI0GEnrySS0&t=124) You can just ignore these pip dependencies resolver message and then let's go back to

- [00:02:09](https://www.youtube.com/watch?v=oI0GEnrySS0&t=129) our web UI.

- [00:02:11](https://www.youtube.com/watch?v=oI0GEnrySS0&t=131) In here you need to change relauncher.py and prevent it relaunching again and again because

- [00:02:17](https://www.youtube.com/watch?v=oI0GEnrySS0&t=137) we are going to kill.

- [00:02:18](https://www.youtube.com/watch?v=oI0GEnrySS0&t=138) n&lt;1 and we also need the fix requirements version confliction.

- [00:02:25](https://www.youtube.com/watch?v=oI0GEnrySS0&t=145) This is the requirements version of web UI and then go back into the inside of extensions

- [00:02:30](https://www.youtube.com/watch?v=oI0GEnrySS0&t=150) folder inside DreamBooth extension open requirements txt and compare the versions.

- [00:02:35](https://www.youtube.com/watch?v=oI0GEnrySS0&t=155) If there are conflicting ones use the ones that are written in DreamBooth extension.

- [00:02:40](https://www.youtube.com/watch?v=oI0GEnrySS0&t=160) For example accelerate.

- [00:02:42](https://www.youtube.com/watch?v=oI0GEnrySS0&t=162) I am going to change accelerate version and then there is also transformers version.

- [00:02:46](https://www.youtube.com/watch?v=oI0GEnrySS0&t=166) This one.

- [00:02:47](https://www.youtube.com/watch?v=oI0GEnrySS0&t=167) I will also change the transformers version as well.

- [00:02:50](https://www.youtube.com/watch?v=oI0GEnrySS0&t=170) So here I have changed it and there is also one another one which is git python.

- [00:02:56](https://www.youtube.com/watch?v=oI0GEnrySS0&t=176) I am also changing the git python version.

- [00:02:58](https://www.youtube.com/watch?v=oI0GEnrySS0&t=178) Why we are doing this because when you restart your web UI it will overwrite the versions

- [00:03:03](https://www.youtube.com/watch?v=oI0GEnrySS0&t=183) of libraries and it will cause problems.

- [00:03:06](https://www.youtube.com/watch?v=oI0GEnrySS0&t=186) Once you're done all of this you need to restart your pod.

- [00:03:09](https://www.youtube.com/watch?v=oI0GEnrySS0&t=189) Go to the my pods section click restart pod.

- [00:03:12](https://www.youtube.com/watch?v=oI0GEnrySS0&t=192) Okay the pod has been restarted.

- [00:03:14](https://www.youtube.com/watch?v=oI0GEnrySS0&t=194) All we need to do is now kill the initial instance and then restart web UI.

- [00:03:20](https://www.youtube.com/watch?v=oI0GEnrySS0&t=200) So I am opening a terminal inside Stable Diffusion web UI folder type fuser dash -k 3000/tcp.

- [00:03:28](https://www.youtube.com/watch?v=oI0GEnrySS0&t=208) They added fuser command now it works then type python relauncher.py and it is going

- [00:03:36](https://www.youtube.com/watch?v=oI0GEnrySS0&t=216) to relaunch and we will get our DreamBooth extension working very well.

- [00:03:40](https://www.youtube.com/watch?v=oI0GEnrySS0&t=220) Okay it has been started but we have forgotten to add share command line arguments so we

- [00:03:45](https://www.youtube.com/watch?v=oI0GEnrySS0&t=225) are not getting Gradio link.

- [00:03:47](https://www.youtube.com/watch?v=oI0GEnrySS0&t=227) Let's edit and restart again.

- [00:03:49](https://www.youtube.com/watch?v=oI0GEnrySS0&t=229) Okay I need to first kill the previous instance.

- [00:03:52](https://www.youtube.com/watch?v=oI0GEnrySS0&t=232) When you click the instance you will see this is also terminated then retype python relauncher.py.

- [00:03:59](https://www.youtube.com/watch?v=oI0GEnrySS0&t=239) Okay it started as you can see when I click this URL now I will see the web UI on run

- [00:04:04](https://www.youtube.com/watch?v=oI0GEnrySS0&t=244) pod with the DreamBooth extension and yes it is working.

- [00:04:09](https://www.youtube.com/watch?v=oI0GEnrySS0&t=249) Thank you very much for watching.

- [00:04:10](https://www.youtube.com/watch?v=oI0GEnrySS0&t=250) If you have enjoyed please like subscribe support us by joining support us on Patreon.

- [00:04:15](https://www.youtube.com/watch?v=oI0GEnrySS0&t=255) I would appreciate that very much.

- [00:04:17](https://www.youtube.com/watch?v=oI0GEnrySS0&t=257) You will find the Patreon link in the description of the video and also in the comment section

- [00:04:22](https://www.youtube.com/watch?v=oI0GEnrySS0&t=262) of the video.

- [00:04:23](https://www.youtube.com/watch?v=oI0GEnrySS0&t=263) Also make sure that you have watched this video.

- [00:04:25](https://www.youtube.com/watch?v=oI0GEnrySS0&t=265) This is an excellent video that I have done on run pod so you will enjoy this very much.

- [00:04:31](https://www.youtube.com/watch?v=oI0GEnrySS0&t=271) Hopefully see you in another video.
