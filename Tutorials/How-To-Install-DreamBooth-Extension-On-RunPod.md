The older video is now outdated. Here new video

New instructions

First modify relauncher.py as shown in video and restart the pod (only 1 time necessary)

```
while (n<1):
```

Then download auto installer posted on Patreon (install1.sh and install2.sh - upload to workspace) or follow below steps

Auto installer script on Patreon :

```
chmod +x install1.sh
./install1.sh
```

```
chmod +x install2.sh
./install2.sh
```

After install lets say you want to manually start web ui instance, or you turned off pod and started again later here below command
```
fuser -k 3000/tcp
cd /workspace/stable-diffusion-webui
python relauncher.py
```

Below manual installation

