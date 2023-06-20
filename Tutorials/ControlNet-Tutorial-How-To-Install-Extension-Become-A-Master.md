# [Tutorial] Complete Guide to ControlNet for Stable Diffusion Automatic1111 Web UI Extension
* This readme file will get updated if be necessary so always checkout this file if something not working and open an issue thread on our GitHub repo
* How to download and install Stable Diffusion Automatic1111 Web UI
* How to download and install ControlNet extension for Automatic1111 Web UI
* How to use ControlNet features such as Canny, Tiling, 

## Full tutorial video link for this guide will be added once published

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FControlNet-Tutorial-How-To-Install-Extension-Become-A-Master.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

## Prerequisites

**Full tutorial for python and git installation with venv**
* [How To Install Python, Setup Virtual Environment VENV, Set Default Python System Path & Install Git](https://youtu.be/B5U7LJOvH6g)

**Download and install Python 3.10.x (3.10.6, 3.10.9, 3.10.11) and git**
* 3.10.9 > https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe
* git > https://git-scm.com/downloads

## Installation

Bat script that automatically installs Automatic1111 Web UI
* https://www.patreon.com/posts/auto-installer-84773926

Bat script that automatically installs ControlNet and downloads all models
* https://www.patreon.com/posts/automatic-and-84875387
* [Screenshot](https://s3.amazonaws.com/moonup/production/uploads/6345bd89fe134dfd7a0dba40/KBJqoSet0mBipEqhkdVTY.png)

All Patreon posts index
* https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Patreon-Posts-Index.md

Our Discord channel for help (free - 3000+ members) 
* https://discord.com/servers/software-engineering-courses-secourses-772774097734074388

### Step 1

Install Automatic1111 Web UI

Clone the official repo into any folder you want to install. If you are not expert clone into C drive
* https://github.com/AUTOMATIC1111/stable-diffusion-webui

```
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
```

Edit webui-user.bat file and add this argument :
```
set COMMANDLINE_ARGS=--xformers
```
You can find all arguments for below link
* https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings

Double click and start webui-user.bat for fresh clean install

### Step 2
Updating xformers to latest. Start a new cmd inside web ui folder and type below code. All shown in the tutorial video so watch it
```
call .\venv\Scripts\activate.bat
pip install xformers==dev
```
Look for latest xformers and install it e.g. All shown in the tutorial video so watch it
```
pip install xformers== 0.0.21.dev551
```
### Step 3
Clone main ControlNet repo (https://github.com/Mikubill/sd-webui-controlnet) into this folder : ```\automatic_web_ui\extensions```
```
git clone https://github.com/Mikubill/sd-webui-controlnet
```
From below link download the models you wish to use and put them inside ```automatic_web_ui\extensions\sd-webui-controlnet\models folder```
* https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main

Restart Automatic1111 Web UI and you will be ready to use

Follow the video for more information and detailed how to steps

### Used Versions

ControlNet Commit 
```
git checkout 5fc952793aa97bdd0078574b3be8bc98e1fcf2cd
```
Automatic1111 Web UI Commit
```
git checkout baf6946e06249c5af9851c60171692c44ef633e0
```
Pip Freeze Below

