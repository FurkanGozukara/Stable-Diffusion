

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

Install Torch 2 with below command

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```
