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



