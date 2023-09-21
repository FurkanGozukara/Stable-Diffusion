# How To Do SDXL DreamBooth (Full Fine Tuning) Training By Using Kohya SS GUI
## Tutorial video > coming soon hopefully
### This Tutorial Readme File Will Be Updated In Future If Something Gets Broken

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Do-SDXL-DreamBooth-Training-With-Best-Settings.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

## Prerequisites

### Full tutorial for Python and Git installation and extra info regarding venv (virtual enviroment)
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)
* Python 3.10.11 (I know prefer 3.10.11 since latest xFormers requires this)
* * https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe
* * https://www.python.org/downloads/release/python-31011/
* Git > https://git-scm.com/downloads
 
### Auto Automatic1111 Web UI Installer
* Auto clones, installs, downloads SDXL and correct VAE into correct folders
* https://www.patreon.com/posts/automatic-for-ui-86307255

### Download and install Visual Studio 2015, 2017, 2019, and 2022 redistributable 
* https://aka.ms/vs/17/release/vc_redist.x64.exe
