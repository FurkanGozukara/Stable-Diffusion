[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fblob%2Fmain%2FTutorials%2FHow-To-Install-ControlNet-On-RunPod.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

First watch this tutorial learn the logic. When you get manual extension installation errors run below commands and try again.

Tutorial : 18.) RunPod - Automatic1111 Web UI - Cloud - Paid - No PC Is Required

[**Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI**](https://www.youtube.com/watch?v=QN1vdGhjcRc) 

[![image](https://user-images.githubusercontent.com/19240467/219958249-82ecb925-901b-4f87-b776-f592b0f5eaad.png)](https://www.youtube.com/watch?v=QN1vdGhjcRc)

## Use Stable Diffusion web-automatic-8.0.3 template - it comes with ControlNet by default

## Auto Updater & Downloader For RunPod
* Script : https://www.patreon.com/posts/84896373
* Select Stable Diffusion web-automatic-8.0.3 template
* It comes with ControlNet extension
* Download attached CND_runpod.py and upload it into your Workspace folder
* Run with below command
```
python CND_runpod.py
```
* Then restart your Automatic1111 Web ui
* It will clone/update ControlNet and then start downloading all ControlNet model pth files
* It will display status of downloads like can be seen here : Screenshot of downloads
* It will skip previously existing models but make sure that those models have been 100% downloaded. Otherwise they will give an error to you
* After all downloads have been completed restart your Automatic1111 Web UI. It will install requirements of ControlNet (if necessary).
* If you had previously installed ControlNet then it will just download the missing model files. You can also delete this folder for fresh install : stable-diffusion-webui\extensions\sd-webui-controlnet

Hopefully a tutorial is coming for ControlNet. This is a part of my hopefully upcoming ultra realistic beyond studio quality DreamBooth training workflow.



