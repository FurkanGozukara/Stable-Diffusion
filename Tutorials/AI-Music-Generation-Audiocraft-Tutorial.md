# Tutorial Video Link > coming soon

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFurkanGozukara%2FStable-Diffusion%2Fedit%2Fmain%2FTutorials%2FAI-Music-Generation-Audiocraft-Tutorial.md&count_bg=%2379C83D&title_bg=%239E0F0F&icon=apachespark.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com) [![Twitter Follow](https://img.shields.io/twitter/follow/GozukaraFurkan?label=Follow&style=social)](https://twitter.com/GozukaraFurkan) [![YouTube Channel](https://img.shields.io/badge/YouTube-Channel-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses) [![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-f96854?style=for-the-badge&logo=patreon)](https://www.patreon.com/your_patreon_page)

## Colab
Google Colab Link Works with GPU for free : https://colab.research.google.com/drive/1fxGqfg96RBUvGxZ1XXN07s3DthrKUl4-?usp=sharing

## Example Resources and More Help
**Auto install and run scripts : https://www.patreon.com/posts/ai-music-auto-84334460**

Stable Diffusion tutorials : https://github.com/FurkanGozukara/Stable-Diffusion

## Prerequisites

### Step 1 : Python

**Full tutorial for python and git installation with venv**

https://youtu.be/B5U7LJOvH6g

**Download and install Python 3.10.x and git**

https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe

https://git-scm.com/downloads

## Installation

Repo url : https://github.com/facebookresearch/audiocraft

Enter inside the drive or folder where you want to install

Open cmd type 
```
git clone https://github.com/facebookresearch/audiocraft
```

Move into cloned folder audiocraft. Make a new venv with the below command

```
cd audiocraft
python -m venv venv
```

Enter incide venv - scripts and activate

```
cd venv
cd scripts
activate
```

Install Torch 2 and gradio with below command

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

Return back into main folder with below command and execute install requirements

```
cd..
cd..
pip install -e .
```

Then we reinstall xformers and we install gradio
```
pip uninstall -y xformers
pip install xformers
pip install gradio
```

Then we are ready to start the application. Whenever you start the application you need to activate venv. For activating venv open a new cmd window in cloned repo, execute below command and it will work
```
call .\venv\Scripts\activate.bat
python app.py
```
