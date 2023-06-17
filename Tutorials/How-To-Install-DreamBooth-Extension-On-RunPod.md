The older video is now outdated. Here new video

## Initial Instruction for Both Automatic and Manual Installation

First modify relauncher.py as shown in video and restart the pod (only 1 time necessary)

```
while (n<1):
```

## Automatic Script Installation

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

If you decide to install other extension install extension first

Then open ```webui-user.sh``` file in Stable Diffusion folder and remove ```--skip-install```

Save webui-user.sh file

Restart Web UI

If Dreambooth gets broken run below code again

```
chmod +x install2.sh
./install2.sh
```

## Manual Step by Step Installation

