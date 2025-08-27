[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-ControlNet-On-RunPod.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-ControlNet-On-RunPod.md) 

[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)

First please watch below tutorials

18.) RunPod - Automatic1111 Web UI - Cloud - Paid - No PC Is Required

[**Ultimate RunPod Tutorial For Stable Diffusion - Automatic1111 - Data Transfers, Extensions, CivitAI**](https://www.youtube.com/watch?v=QN1vdGhjcRc) 

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/NLbuo08ixbjt5t3iG5ioG.png)](https://www.youtube.com/watch?v=QN1vdGhjcRc)

39.) Automatic1111 Web UI - PC - Free + RunPod

[**Zero to Hero ControlNet Tutorial: Stable Diffusion Web UI Extension | Complete Feature Guide**](https://youtu.be/3E5fhFQUVLo)

[![image](https://cdn-uploads.huggingface.co/production/uploads/6345bd89fe134dfd7a0dba40/3I25wwnG6IfYLBo-Ie6ZJ.png)](https://youtu.be/3E5fhFQUVLo)

## The Template Selection
* Select Stable Diffusion stable-diffusion:web-ui template
* It comes with ControlNet extension
* Select like 200 GB volume disk

## Auto Updater & Downloader For RunPod - Much Easier To Use
* Script : https://www.patreon.com/posts/84896373
* Read instructions written on Patreon post
* Download attached CND_runpod.py and upload it into your Workspace folder
* Run with below command
```
python CND_runpod.py
```
* It will clone/update ControlNet and then start downloading all ControlNet model pth files
* It will display status of downloads like can be seen here : Screenshot of downloads
* It will skip previously existing models but make sure that those models have been 100% downloaded. Otherwise they will give an error to you
* After all downloads have been completed Start your Automatic1111 Web UI as below. Start a new terminal and copy paste
```
fuser -k 3000/tcp
```
```
cd /workspace/stable-diffusion-webui
```
```
python relauncher.py
```
* If you had previously installed ControlNet then it will just download the missing model files. You can also delete this folder for fresh install : stable-diffusion-webui\extensions\sd-webui-controlnet





