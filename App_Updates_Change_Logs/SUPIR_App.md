# Official SECourses SUPIR Ultra Advanced Gradio App : https://www.patreon.com/posts/99176057
## 1-Click to install on Windows, RunPod and Massed Compute
## Supports RTX 5000 series and older GPUs as well. SUPIR is still the very based standalone image upscaler method since it is diffusion based. 
### SECourses SUPIR app has so many features

### 22 November 2024 Update

- **Model downloading scripts updated**
  - Previously per model file downloading was limited to 40 MB / second
  - Now it will use your entire bandwidth so you can even download with 1000 MB / second speed
  - This is extra useful on cloud services like RunPod and Massed Compute
- Torch upgraded to 2.5.1
- Triton 3.1 installer added to Windows installer
- xFormers upgraded to 0.0.28.post3
- **Required RunPod template now :**
  - RunPod Pytorch 2.2.0
  - `runpod/pytorch:2.2.0-py3.10-cuda12.1.1`
- How to install on RunPod and Massed Compute V52 no audio video: [https://youtu.be/6oE3diDXu5w](https://youtu.be/6oE3diDXu5w)
- Massed Compute is 31 cents and like 2x speed to install and load models
- RunPod and Windows fresh install tested and runpod install logs added to the logs folder

### 15 September 2024 Update

- You can use `Windows_Update_Version.bat` to get this
- Default values set to most loyal upscale values which are **Text Guidance Scale = 3** (previously 7.5) and **Sampler to EDM** (previously DPMPP2M)
- A new model downloader added and this downloader is amazing
- It is fully multi-threaded, ultra robust, and fully resume capable
- `Windows_Resume_Fix_Model_Downloads.bat` added that you can use later to resume / fix your model downloads
- Faster installation on RunPod
- Torch version upgraded to **2.4 cu124** – you don't need cuda 12.4 installed on your system
- Accelerator version upgraded to **0.43.3** and xFormers to **0.0.27.post2**
- Windows installation problems fixed
- **And WE ARE WORKING ON A HUGE NEW UPDATES LOTS OF NEW FEATURES**
- Who are expert at setup, python, etc. can message me to get it and test it

### 23 August 2024 Update

- Just run `Windows_Update_Version.bat` file to update if you had recent new version like V46, 47
- New feature restore configuration / settings from saved PNG images in outputs folder added
- Load image into Outputs tab, it will display Metadata
- You will see **Apply Metadata** button; click it to restore used configuration
- Kaggle notebook fixed

### 7 May 2024 Update

- Updated to V48
- Now when you load a preset, it will not change your existing selected image to upscale

### 21 April 2024 Update

- Full Windows tutorial published that includes how to update, upgrade, and do a fresh install using downloaded models: [https://youtu.be/OYxVEvDf284](https://youtu.be/OYxVEvDf284)
- If you also upvote with [Reddit post](https://www.reddit.com/r/StableDiffusion/comments/1c947jn/supir_image_enhance_upscale_is_literally_like/), I appreciate that very much
- Added Juggernaut XL V10 auto download feature to the Download Checkpoints tab
- Just run `Windows_Update_Version.bat` file to get this version
- New feature **save and load presets** added
- If you find any preset you changed is not saved or loaded back, please let me know
- Moreover, `Windows_Install.bat` is improved and now will automatically install with accurate Python version if you have multiple Pythons and if you have installed Python launcher

### 17 April 2024 Update

- **Download Checkpoints Tab Added.** Tell me which models you want to see there and I will hopefully update that tab so that you can easily download any model you want 1 click (only SFW models)
- Now you can select only Face restoration and it will only restore face and the rest of the image will remain the same
- You can run `Windows_Update_Version.bat` file to update into this version
- `--outputs_folder_button` command line argument added to the start bat file so that you can quickly open outputs folder from the interface

### 14 April 2024 Update

- Quick RunPod tutorial published: [https://www.youtube.com/watch?v=RjMJh9fAO10](https://www.youtube.com/watch?v=RjMJh9fAO10)
- Massed Compute instructions and installers added
- Massed Compute is so many times better than RunPod
- No broken Pods, amazing download and HDD speed
- 31 cents per hour only for A6000 GPUs
- A new tutorial will hopefully be recorded but I have an amazing recent tutorial for Massed Compute
- You can watch this tutorial here: [https://youtu.be/0t5l6CP9eBg](https://youtu.be/0t5l6CP9eBg)
- Please register Massed Compute from here: [https://bit.ly/Furkan-Gözükara](https://bit.ly/Furkan-Gözükara)
- Please watch the above video and read `Massed_Compute_Instructions_READ.txt` file
- All files are renamed to be easier to understand inside the zip
- RunPod instructions improved
- For those whose models fail to download for some reason, here is a single zip file that includes all models. Extract into the SUPIR folder. 45 GB. You can download from a browser and resume, or use download software such as uGet (working with the latest version, no changes): [https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/supir_v45_models.zip](https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/supir_v45_models.zip)

### 18 March 2024 Update

SUPIR upgraded to V44

- Morve improvements and fixes
- New starting arguments added
- New full FP8 model precision support which reduces VRAM usage to around 7 GB for 1 Megapixel upscale
- New full FP16 support which means now we can use a free Kaggle account or older GPUs that do not have BF16 support
- Working Kaggle notebook included in the zip file
- `available_command_line_arguments.txt` file is updated – read it to see all arguments that you can add to your `start_SUPIR_Windows.bat` file
- `update_windows_requirements.bat` file updated and improved
- `run_linux.sh` and `start_SUPIR_Windows.bat` files updated and new options are added
- How to upgrade?
  - First, close SUPIR and run `update_windows_version.bat` file and see if it works or not
  - If that fails, close SUPIR and run `update_windows_requirements.bat` file
  - If this also fails, please do a fresh install under a new folder such as `c:/SUPIR_v44`

### 17 March 2024 Update

- **SUPIR updated to V41 and the changes are as follows:**
- Version info moved to the About tab
- Folder listing added to the Outputs-Metadata tab
- Interface is redesigned
- Auto Unload LLaVA to reduce VRAM is now under LLaVA options section in the interface
- All processes are now displayed properly, including steps which were not shown previously in the command line interface
- The back-end code is completely redesigned
- More starting arguments and their descriptions added
- `--use_fast_tile` option added – may impact quality (I haven't had time to test yet)
- `available_command_line_arguments.txt` file added inside the zip to make it easier to read
- This is a massive update with lots of changes; therefore, first install into a new folder such as `SUPIR_V40`, verify it is working, and then delete the older folder
- **When installing, do not name the parent folder SUPIR**
- Now you can use a video as an input
- It will let you select beginning and ending frames
- The middle icon displays the current frame on the screen
- Video final **output merge is not yet working fully**, but you can manually merge upscaled images which will be inside `outputs/extracted_frames`
- You can manually combine extracted frames with FFmpeg or any tool such as Davinci Resolve
- **Note:** The `extracted_frames` folder will be cleared each time you run a new video processing – be careful!
- Prompt Styles feature added
- Prompt Styles are useful according to your input image type
- Embedded image Metadata description improved
- Checkpoint Type added
- If you are using the SDXL Lightning model, check it – it will set steps count = 10 and Text Guidance Scale = 2 automatically for you
- I made a comprehensive comparison between the SDXL full model and the Lightning model with different parameters
- You can see comparison results here: [https://imgsli.com/MjQ3ODQ2](https://imgsli.com/MjQ3ODQ2)
- Play with the dropdown selections to compare different configurations
- Face restoration is working amazingly in some images (tested thoroughly)
- Carefully read all the options on the interface (expand all options for details)
- Please report any bugs and issues on our Discord channel
- The `downloader.py` file will automatically download the WildCardX-XL LIGHTNING model as the SDXL Lightning model into the `models/checkpoints` folder
- I compared several SDXL Lightning models and found this one to be the best
- `run_linux.sh` now makes starting the app easier with options for RunPod or Linux systems
- SUPIR now works on Kaggle (hopefully coming soon)
- SUPIR now supports 8 Bit loading – reduced VRAM (hopefully coming soon)
- There are new libraries so you need to run at least `update_windows_version.bat` and `update_windows_requirements.bat` files; however, I suggest doing a clean install

### 11 March 2024 Update V2

- Auto Deload LLaVA – **Free VRAM** checkbox added
- When this checkbox is checked, LLaVA will be deloaded from VRAM after captioning input images, including during batch folder processing
- **Apply Stage 1** checkbox fixed – this will be applied and displayed as output
- **Apply LLaVA** fixed – you will see the **Apply LLaVA** checkbox generated prompt in the prompt box
- You can check **Apply LLaVA** to get the image prompt. Don't forget to uncheck it if you change

