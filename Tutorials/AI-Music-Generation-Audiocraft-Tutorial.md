

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

Then we reinstall xformers
```
pip uninstall -y xformers
pip install xformers
```

Install Torch 2 with below command

```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```

Return back into main folder with below command and execute install requirements

```
cd..
cd..
pip install -e .
```

Then we are ready to start the application. Whenever you start the application you need to activate venv. For activating venv open a new cmd window in cloned repo, execute below command and it will work
```
call .\venv\Scripts\activate.bat
python app.py
```
