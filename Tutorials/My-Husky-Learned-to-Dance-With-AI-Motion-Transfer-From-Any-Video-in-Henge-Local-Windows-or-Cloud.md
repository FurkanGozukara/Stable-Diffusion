# My Husky Learned to Dance With AI: Motion Transfer From Any Video in Henge (Local Windows or Cloud)

## Full tutorial link > https://www.youtube.com/watch?v=yysvBBZEskM

[![My Husky Learned to Dance With AI: Motion Transfer From Any Video in Henge (Local Windows or Cloud)](https://i.ytimg.com/vi_webp/yysvBBZEskM/maxresdefault.webp)](https://www.youtube.com/watch?v=yysvBBZEskM "My Husky Learned to Dance With AI: Motion Transfer From Any Video in Henge (Local Windows or Cloud)")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/My-Husky-Learned-to-Dance-With-AI-Motion-Transfer-From-Any-Video-in-Henge-Local-Windows-or-Cloud.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/My-Husky-Learned-to-Dance-With-AI-Motion-Transfer-From-Any-Video-in-Henge-Local-Windows-or-Cloud.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Henge is an all-in-1 AI video studio that runs on your own NVIDIA GPU: Character Swap, Motion Transfer, Head Swap, First Frame editing, new backgrounds and Sharpness in one browser page, built on the MiniMax H3 video model. In this 4K showcase every example is a real Henge run on one RTX 5090, with the picture you give it, the guide video and the result side by side: a man becomes a knight, our husky dances a German shepherd's dance, a sea captain's head replaces another, two people turn into an astronaut and a gladiator at once, one edited frame puts knight armour on a man for the whole clip, and a gladiator kicks in a neon city. The times on screen run from Generate to the finished video, planning included: about 2.5 to 5 minutes for a 10 to 12 second clip at 480p, then Henge's own Sharpness pass takes it to 1080p.

Links:

Main ZIP download - Henge 1-click installer and model downloader (Patreon): [ [https://www.patreon.com/SECourses/posts/henge-is-all-in-174217342](https://www.patreon.com/SECourses/posts/henge-is-all-in-174217342) ]

Requirements installer tutorial (Python, Git, CUDA, 1-time setup): [ [https://youtu.be/DrhUHnYfwC0](https://youtu.be/DrhUHnYfwC0) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

You will see what each studio does on real clips. Character Swap replaces a person with the character in your picture and keeps the motion, the camera and the scene. Motion Transfer moves anyone or anything with the guide's performance, even animals. Head Swap changes only the head, and Henge writes the prompt for you. With several people, you click each one and SAM 3.1 tracks them, each with their own picture. First Frame lets you edit one frame of the guide with FIBO 2.0 in seconds, and the change carries through the whole clip. New background puts the people in front of your own picture as a moving plate that follows the camera. Sharpness makes any clip crisper and bigger, 1080p or 2K. A planner model reads your video and pictures and shows its plan before anything renders, a live preview shows the sampling, and a studio assistant can pick the mode and mark people for you. Every result keeps its comparison videos, a zip and the ComfyUI workflow. The second half shows the setup that makes this easy. Our 1-click installer puts Henge, its own ComfyUI with the Henge nodes, a Python 3.12 environment, portable Node.js and FFmpeg into one folder that touches nothing else on your PC, with PyTorch 2.13, CUDA 13 and precompiled SageAttention, Flash Attention, TorchAO and xFormers for Windows; our clean install took 95 seconds with the packages already downloaded once. The model library has 14 bundles, from the Motion Transfer essentials to all 159 GB of public models, downloaded in parallel pieces over 8 connections, resumable, and every file checked against its source hash: all 43 files took about 44 minutes on our connection. After that, Henge, its bridge and ComfyUI were ready about 11 seconds after the double-click.

Main topics include AI character swap in video, motion transfer, AI head swap, swapping two people at once with SAM 3.1 tracking, first-frame video editing with FIBO 2.0, AI background replacement with a moving plate, video sharpening to 1080p, the MiniMax H3 video model, ComfyUI, RTX 5090 render times, a local AI video studio, a 1-click Windows installer with PyTorch 2.13 and CUDA 13, a fast verified model downloader with 159 GB of models, a studio assistant that picks the mode and marks people for you, and RunPod and Massed Compute cloud GPUs.

Use the chapters to jump to each studio, the render times and how to get the installer.

Chapters:

[00:00:00](https://youtu.be/yysvBBZEskM?t=0) Character Swap: the man becomes a knight

[00:00:21](https://youtu.be/yysvBBZEskM?t=21) Motion Transfer: our husky dances

[00:00:33](https://youtu.be/yysvBBZEskM?t=33) Head Swap: the sea captain

[00:00:45](https://youtu.be/yysvBBZEskM?t=45) Two people at once: astronaut and gladiator

[00:00:57](https://youtu.be/yysvBBZEskM?t=57) First Frame: edit one frame, the whole clip follows

[00:01:07](https://youtu.be/yysvBBZEskM?t=67) New background: a neon city

[00:01:19](https://youtu.be/yysvBBZEskM?t=79) Sharpness and everything in one studio

[00:02:05](https://youtu.be/yysvBBZEskM?t=125) Render times on an RTX 5090 and how to get it

Music: "Captain" by Topher Mohr and Alex Elena (YouTube Audio Library).

Henge is made by Alisson Anjos; our part is the 1-click installer, the launchers and the model downloader.

This showcase is for anyone who wants to swap characters, move anything with a performance or change a scene in their own videos, on their own PC. Every result here is a real Henge run on an RTX 5090 with the default settings.

How to get it: join on Patreon from the link above, download the Henge installer zip, run Windows_Install_Or_Update_Henge.bat, then Windows_Start_Model_Downloader.bat to pick the models, then Windows_Start_Henge.bat. RunPod and Massed Compute installers are included for cloud GPUs.

For support, questions, feature requests, installation issues or future updates, check the links in this description, the pinned comment, Patreon, Discord and the video comments. Thank you for watching.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=yysvBBZEskM&t=0) Hey, hey, hey, hey, hey, hey, hey, hey, hey, hey, [music]

- [00:00:36](https://www.youtube.com/watch?v=yysvBBZEskM&t=36) [music] &gt;&gt; N

- [00:00:47](https://www.youtube.com/watch?v=yysvBBZEskM&t=47) hey. [music]

- [00:00:54](https://www.youtube.com/watch?v=yysvBBZEskM&t=54) Heat. &gt;&gt; [music]

- [00:01:23](https://www.youtube.com/watch?v=yysvBBZEskM&t=83) &gt;&gt; Heat. Heat. [music]

- [00:01:44](https://www.youtube.com/watch?v=yysvBBZEskM&t=104) Heat. [music]

- [00:02:14](https://www.youtube.com/watch?v=yysvBBZEskM&t=134) Heat. Heat. [music]
