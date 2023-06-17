The older video is now outdated. Here new video

New instructions

First modify relauncher.py as shown in video and restart the pod (only 1 time necessary)

```
while (n<1):
```

Then download auto installer posted on Patreon (install.sh - upload to workspace) or follow below steps

Auto installer script on Patreon :

```
chmod +x install.sh
./install.sh
```

Below manual installation



dreambooth extension commit id : 926ae204ef5de17efca2059c334b6098492a0641

sd web ui commit : 20ae71faa8ef035c31aa3a410b707d792c8203a3

fuser -k 3000/tcp

python relauncher.py

```pip3 install torch==1.13.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117```

```pip uninstall xformers```

```pip install https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/xformers-0.0.21.dev541-cp310-cp310-manylinux2014_x86_64.whl```

```pip install -r requirements.txt```

```wget https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt```

```wget https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt```

https://github.com/d8ahazard/sd_dreambooth_extension

lora extended: https://github.com/KohakuBlueleaf/a1111-sd-webui-locon

