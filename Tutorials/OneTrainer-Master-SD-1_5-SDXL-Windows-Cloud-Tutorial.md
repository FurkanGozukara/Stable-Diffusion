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

### How To Update Auto1111 To Latest Version & Install ADetailer & ControlNet

* Open a CMD inside the folder where you downloaded update_sd1111.sh file
* Run below commands
```
chmod +x update_sd1111.sh
./update_sd1111.sh
```
