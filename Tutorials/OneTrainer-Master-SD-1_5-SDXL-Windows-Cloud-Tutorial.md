Download : https://www.cendio.com/thinlinc/download/

Help Documents : https://vm-docs.massedcompute.com/docs/category/product-overview

### How To Update OneTrainer To The Latest Version On MassedCompute Virtual Machine

* Open a terminal 
* Execute below to move into accurate folder
* ```cd apps/OneTrainer```
* Execute below to activate VENV of OneTrainer
* ```conda activate ot```
* Execute below to update OneTrainer to the latest version
* ```./update.sh```

### How To Update Automatic1111 SD Web UI On MassedCompute Virtual Machine

* Open a terminal 
* Execute below to move into accurate folder
* ```cd apps/stable-diffusion-webui```
* Execute below to activate VENV of OneTrainer
* ```git pull```

### How To Edit Automatic1111 SD Web UI Command Line Arguments On MassedCompute Virtual Machine

* Double click and start Stable Diffusion Settings on desktop
* Edit COMMANDLINE_ARGS having line as below and save
* ```export COMMANDLINE_ARGS="--xformers"```

### Download Links For Best Models For Training & Using
* Follow tutorial video to see how to download and move into accurate folder
* SDXL RealVisXL_V4 :  https://huggingface.co/SG161222/RealVisXL_V4.0/tree/main
* SD 1.5 Hyper Realism V3 : https://civitai.com/models/158959/hyper-realism

### OneTrainer Config Files

* [The Very Best OneTrainer Workflow & Config For SD 1.5 Based Models DreamBooth / Full Fine Tuning](https://www.patreon.com/posts/very-best-config-97381002)
* [OneTrainer Stable Diffusion XL (SDXL) Fine Tuning Best Presets](https://www.patreon.com/posts/96028218)

### Manually Prepared Ground Truth Regularazation / Classification Images

[Massive 4K Resolution Woman & Man Class Ground Truth Stable Diffusion Regularization Images Dataset](https://www.patreon.com/posts/massive-4k-woman-87700469)

### How To Select Folders Paths Quickly

* CTRL + L
* Path of Models of Automatic1111 : ```/home/Ubuntu/apps/stable-diffusion-webui/models/Stable-diffusion```

### How To See GPU Usage

* Open a CMD and type ```nvitop```
* To install ```pip install nvitop```

### How To Execute Custom SH Scripts

* TensorRT brings up to 75% speed up with 0 quality loss
* Please watch this tutorial to learn it : https://youtu.be/eKnMVXVjVoU
* To Install TensorRT Extension On Automatic1111 SD Web UI
* Open a CMD inside the folder where you downloaded install_TensorRT.sh file
* Run below commands
```
chmod +x install_TensorRT.sh
./install_TensorRT.sh
```

* To Update Auto1111 To Latest Version & Install ADetailer & ControlNet & FaceFusion
* This will install accurate libraries for you to be able to use even InstantID & FaceFusion & IP Adapter Face ID
* Open a CMD inside the folder where you downloaded update_sd1111.sh file
* Run below commands
```
chmod +x update_sd1111.sh
./update_sd1111.sh
```

* Don't forget to use Run_Stable_Diffusion_Settings and add --xformers to use xFormers for huge speed up
* You can also add --share parameter to use Automatic1111 on your computer or even on your phone

* To download following models automatically into the accurate folder where Stable Diffusion installed
* On massed compute it is ```/home/Ubuntu/apps```
* Then open a terminal inside this folder
* Execute below command to download Realistic_Vision_V6, SDXL Base 1.0 with fixed VAE, RealVisXL_V4 - very realistic model for training & most realistic SD 1.5 model Hyper_Realism_V3
* ```python download_models.py```

* To download all of the ControlNet models including Ip Adapter Face ID and InstantID use the following commands
* Full tutorial of ControlNet is here : https://youtu.be/3E5fhFQUVLo
* Using ip-adapter-faceid and instant_id_sdxl are not straight forward. 
* Please read the following threads:
* Ip Adapter Face ID of ControlNet : https://github.com/Mikubill/sd-webui-controlnet/discussions/2442
* InstantID of ControlNet : https://github.com/Mikubill/sd-webui-controlnet/discussions/2589
* Download commands
* ```
chmod +x control_net_downloader.py
control_net_downloader.py
```
* ```
chmod +x download_ip_adapter_and_instantid.py
download_ip_adapter_and_instantid.py
```

### Notebook To Upload Models And Files Into Hugging Face

* Save as and run it with Jupyter Notebook
* https://gist.github.com/FurkanGozukara/84ad2cf9731c278d5679f7b5fcf5e44e
