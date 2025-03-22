# Official SECourses Wan 2.1 Ultra Advanced Gradio App : https://www.patreon.com/posts/123105403
## 1-Click to install on Windows, RunPod and Massed Compute
## Supports RTX 5000 series and RIFE 2x, 4x FPS and video extending and batch video processing and all Wan 2.1 Models with fast LoRA loading and many more


# 19 March 2025 Update V45

- All models are uploaded as zip files that you can download from browser or with any app and extract. After extracting move models folder into your Wan 2.1 installation: https://huggingface.co/OwlMaster/wan21/tree/main
- This is only necessary if your model download fails - which happens rarely
- Model loading and reloading significantly improved after doing huge work on that
- So when you switch between models or generate consequent videos, your RAM shouldn2T get full and cause computer freeze, etc
- New amazing feature Extend Video Factor (1× = No Extension) added
- This feature is still not fully tested yet but you can try
- Click Extension Feature Info to see its info
- This new feature took huge time to make work. There can be still errors as i said please report back
- A new button Apply Fast Preset updated to be more robust
  - Now: Enables Teacache, set Teacache to 0.15, set step counts to 20 and set Sigma Shift to 10
- FP8 causes color changes in some cases, i will research it
- Windows_Update.bat should work, if fails make a fresh install and move models folder
- Hopefully many more features coming soon such as
- Adding 20+ LoRAs to auto download with their trigger word
- Having LoRA trigger word save load system
- Loading LoRAs from prompts

![](https://c10.patreonusercontent.com/4/patreon-media/p/post/123105403/dd45fa070e434c3bb04a006325b86e4b/eyJ3Ijo4MjB9/1.png?token-time=1743897600&token-hash=3oIPmtxVdLy2WjXvPxd9WUMaG-dzhSBrKgUb-CZUTRE%3D)

### 19 March 2025 Update V43

- Cancel button will cancel videos now immediately as soon as next step completed (not waiting all steps like before)
- Cancel batch processing button will do the same as above
- I had to modify pipeline myself to add this feature
  - I also made a pull request of this https://github.com/modelscope/DiffSynth-Studio/pull/463
- Prompt enhance button taken to the top after requested
- Windows_Update.bat should be sufficient but if fails make a fresh install and move model files


### 18 March 2025 Update V40

- It was not saving used CFG Scale and Sigma Shift to generated prompt files, now it will be, this error fixed
- A new button Apply Fast Preset added which does the following
- Enables Teacache, set Teacache to 0.15, set step counts to 20 and set Sigma Shift to 10
- I believe these settings are really good + really fast
- I have made a lot of comparisons here I am sharing links below
  - 1: [Simple prompt vs Detailed Prompt](https://www.reddit.com/r/SECourses/comments/1jdo4uu/left_one_is_50_steps_simple_prompt_right_one_is/)
  - 2: [Sigma Shift 6 vs Sigma Shift 10](https://www.reddit.com/r/SECourses/comments/1jdq3js/left_sigma_shift_6_and_right_one_sigma_shift_10/)
  - 3: [CFG 5 vs CFG 6](https://www.reddit.com/r/SECourses/comments/1jdqmgx/wan_21_cfg_5_vs_cfg_6/)
  - 4: [Teacache 0.15 vs 0.20](https://www.reddit.com/r/SECourses/comments/1jdqxog/wan21_teacache_015_vs_020/)
  - 5: [Teacache 0.15 (20 steps) vs 0.20 (20 steps) vs 0.25 (50 steps)](https://www.reddit.com/r/SECourses/comments/1jdrso5/wan21_teacache_015_20_steps_vs_020_20_steps_vs/)
  - 6: [Teacache 0.15 vs 0.25](https://www.reddit.com/r/SECourses/comments/1jdscqn/wan_21_teacache_015_vs_025_50_steps_720x1280_81/)
- Just running Windows updater should be sufficient from previous version


### 16 March 2025 Update V39

- An important bug regarding image to video models fixed
- We were supposed to load following model as FP32 but we were loading as BF16: models_clip_open-clip-xlm-roberta-large-vit-huge-14.pth
- Therefore, image to video models could have produced lower quality in some cases
- Moreover, it was preventing FP8 working on image to video models and now it is working perfect
  - FP8 LoRA fixed as well
- VRAM usage optimized and presets are all updated for the following VRAM GPUs for both FP8 (torch.float8_e4m3fn) and BF16 (torch.bfloat16) weights: 4, 6, 8, 10, 12, 16, 24, 48 and 80 GB
- You can see amazing chart regarding this here: https://www.reddit.com/r/SECourses/comments/1jcse0z/wan_21_vram_usages_very_detailed_chart_for_4_8_10/
  - Zip file also has this table image
  - When you change either model, or GPU preset or Dtype (FP8 vs BF16), the app will automatically set Number of Persistent Parameters In Dit (VRAM) for all GPUs and models
- Upgrading from V33: just run Windows_Update.bat
  - If fails, make a fresh install and move models folder
- Now, if you set a static seed like 200 and generate 5 images seeds will be like: 200, 201, 202, 203, 204


### 16 March 2025 Update V35

- New random prompt feature implemented
  - It is working like this <random:x,y,z> will pick randomly x,y,z words
    - .e.g: A <random: green, yellow, red, etc> car
      - A green car
      - A yellow car
      - A red car
    - It will trim the leading and ending space characters
- Auto Scale was not properly working
  - Now when Auto Scale selected it will automatically set target width and height resolution
- When batch processing it was not able to read and process images with accurate orientation in some cases like exif data
  - Now it will work if broken let me know
- Aspect ratio button change and GPU preset change was broken and now fixed
- Upgrading from V32: just run Windows_Update.bat


### 15 March 2025 Update V32

- A lot of errors regarding pipeline fixed and official Teacache arrived
- Now negative prompts load, save should work
  - Your older configs may need re-save / re-make
- New official Teacache brought amazing speed improvement with minimal quality loss
  - You can see a test here: https://www.reddit.com/r/SECourses/comments/1jbi0wt/secourses_v32_wan_21_app_huge_speed_improvement/
- For upgrade: I recommend fresh install and move models
  - Or, extract zip file into folder and overwrite previous installers
  - Delete Wan2.1\venv, Wan2.1\DiffSynth-Studio and run installer again
- **What is coming next?**
  - Still it is keeping a lot of RAM between consequent generations, I will try to solve this issue
  - Hopefully I am going to add continue from last frame of generate video feature to generate longer videos
  - FP8 Weight loading with image to video models still not working due to DiffSynth-Studio, I will try to solve this issue as well hopefully
  - Single model files will be used instead of multiple
    - This will be useful to train Wan 2.1
  - I will try to make GGUF models working if they work


### 14 March 2025 Update V31

- Multiple LoRA feature implemented
- You can pick up to 4 LoRA with different LoRA scale to each LoRA
- New Auto Scale feature implemented
  - When this option is selected, it will downscale your image to according to your selected model with keeping its aspect ratio
  - Final used version of your image will be saved in auto_pre_processed_images so check there
  - Final resolution of your image will be saved in prompts txt files now
- Default negative prompt is now "Overexposure, static, blurred details, subtitles, paintings, pictures, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, mutilated, redundant fingers, poorly painted hands, poorly painted faces, deformed, disfigured, deformed limbs, fused fingers, cluttered background, three legs, a lot of people in the background, upside down"
  - We changed default negative prompt what authors of Wan 2.1 recommend
- Windows_Update.bat should work
  - If fails, make a fresh install and move models
- FP8 was not working when image to video model used, this is fixed


### 13 March 2025 Update V30

- I have coded the Teacache speed up optimization since the DiffSynth-Studio devs still didnt do
  - **You won't see speed up at the beginning of steps but as moves to the end, steps speed will increase a lot with Teacache**
- I am not 100% sure my implementation is accurate but you can see examples in my pull request: https://github.com/modelscope/DiffSynth-Studio/pull/445
  - I am hoping this will push authors to implement even better version faster
- As a Teacache Threshold, 0.1 for 1.3b model and 0.15 for 14b models recommend
  - The bigger the value, it will be faster but it will reduce quality, you can test different values
- Some extra VRAM and RAM optimizations implemented - no change in quality
- To updating older installations, overwrite new zip file into your folder and replace all installers and run Windows_Update.bat
- If Windows_Update.bat fails, make a fresh install and move your model files
- Video generation durations were inaccurately logged to prompt txt files and now fixed


### 12 March 2025 Update V29 Zip File v2

- I just (23:33, Wednesday, March 12, 2025, Greenwich Mean Time (GMT)) pushed another update to [DiffSynth-Studio](https://github.com/modelscope/DiffSynth-Studio/pull/442) which reduced 8 minute LoRA loding to few seconds for some CPUs (especially intel)
  - So I recommend make a fresh install and move models
- ------------------------------------------------------------------------
- When loading Wan 2.1 LoRAs, it was using extra 30 GB RAM
  - Thus, it was taking huge time whoever doesnt have 96 GB RAM
- I have personally fixed this issue and made a pull request for you guys: https://github.com/modelscope/DiffSynth-Studio/pull/442
- I don't know when will be merged so here what you need to do
  - Extract new v29 zip file into your installation folder as usual and overwrite
  - Enter inside Wan2.1 folder and delete DiffSynth-Studio folder
  - Then run Windows_Install_ALL_GPUs.bat file again and that's it - it will install so fast
- Fresh install do not need to do anything


### 11 March 2025 Update V28

- New tutorial published:
  - Ultra Advanced Wan 2.1 App Updates & Famous Squish Effect to Generate Squishing Videos Locally
  - https://youtu.be/ueMrzmbdWBg


### 10 March 2025 Update V28

- 3 models were being duplicated when you downloaded all 4 models
  - Now the APP will handle them, they will be downloaded into models directory and skipped from downloading into individual folders
  - So previously all 4 models were taking 146 GB and now taking only 108 GB - saving 38 GB disk space and download bandwidth
  - APP is compatible with backwards so if you have previously downloaded models still will work with new system
- Downloader bat file updated and now it has Squish Effect LoRA which works great I tested - you can download it - trigger word is: sq41sh squish effect
- Installer got updated to latest Torch version with Torchvision and Torchaudio so I recommend a fresh install or delete venv, Practical-RIFE and DiffSynth-Studio and run installer again - when you make fresh install you can move models
  - Fresh install should fix who gets error when selecting FP8 - torch.float8_e4m3fn
- We are still eagerly waiting Teacache and the author replied finally i believe we will get hopefully soon: https://github.com/modelscope/DiffSynth-Studio/issues/415#issuecomment-2710108013


### 7 March 2025 Update V26

- With V27 update now most of the Wan 2.1 LoRAs working - maybe all
- Put your LoRA models into LoRAs folder inside main Wan2.1 folder
- If still a LoRA doesnt work, reply to the below post:
  - https://github.com/modelscope/DiffSynth-Studio/issues/381
- Run Windows_Update.bat file and it should work after update
- Example LoRAs I tested that works
  - https://civitai.com/models/1300505/lego-style-wan21-lora
  - https://civitai.com/models/1300432/fubuki-wan21-lora
- I am eagerly waiting Teacache to arrive: up to 100% to 200% speed up
  - You can reply to below post and request you need Teacache
    - https://github.com/modelscope/DiffSynth-Studio/issues/415
    - https://github.com/modelscope/DiffSynth-Studio/issues/387
    - 300% speed: https://github.com/ali-vilab/TeaCache/issues/43
- I am trying to compile Flash attention 3 but authors has to make fixes
  - You can reply to below post and request fix
  - https://github.com/Dao-AILab/flash-attention/issues/1524
- Hopefully Wan 2.1 training tutorial coming: https://github.com/kohya-ss/musubi-tuner


### 6 March 2025 Update V26

- Full-scale Config management added to the app
- It will remember your last used config
- E.g. saving a config or loading a config will make it last config
- It will save and load every parameter except Prompt
- Type config name and click save button to save your existing config and select and load to load it
- Clear_Triton_Cache.bat added for those who gets Triton related error for any reason
- Delete configs folder and restart to get back Default config

![](https://c10.patreonusercontent.com/4/patreon-media/p/post/123105403/adda9912859842a58206dbb8c59ba9e4/eyJ3Ijo4MjB9/1.png?token-time=1743897600&token-hash=NLyxezoYNydUZp8IIAQL-GaOS3XMMJTRJofjDwknIEE%3D)


### 4 March 2025 Update V25

- Please make a fresh install and move your old models or download newer models (better)
- All errors regarding Increase Video FPS with Practical-RIFE fixed
- With V25 now we download FP16 weights instead of FP32 weights
  - Therefore you can delete your older models folder and redownload models to save huge space
  - Currently we still download original FP32 weights of 1.3b model - FP16 not published yet
    - I will update FP16 weights of 1.3b model as soon as published hopefully
  - With this update e.g. 14b text to video model folder now takes 37.6 GB disk space - previously it was 64.3 GB
  - Moreover, with this update, it will be faster to read from disk, load into RAM and possibly use lesser RAM memory
- Windows_Update.bat file will now update Practical-RIFE and DiffSynth-Studio as well
- We have updated used Torch version to the latest 2.7.0.dev20250228
- Now we have unified Windows_Install_ALL_GPUs.bat - works on all GPUs
- RIFE was displaying error on CMD due to missing Audio file this is fixed (it was harmless but confusing)
- Now torch.float8_e4m3fn (FP8 precision) working on RTX 5000 series too but i feel like quality lower than torch.bfloat16 (BF16 precision)
- If you get triton related error please make sure you have installed CUDA, c++ tools as in requirements tutorial video and delete .triton cache folder inside C:\Users\YourUserName
- I did a monkey patch to the Practical-RIFE and now it works with numpy 1.26.4. Therefore, no more numpy mismatch error
- The following error fixed
  - ERROR: THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE

### 4 March 2025 Update

- With V18 now you can use LoRAs with our Wan AI APP
- Hopefully LoRA training tutorial coming soon
- When doing batch image to video, if you don't have a txt file as a prompt for that image, it will use whatever the prompt you enter into prompt box
  - It will use as a negative prompt whatever you enter into negative prompt box
- All used parameters will be logged when you enable Save prompt to file including used LoRA

### 3 March 2025 Update

- APP updated to V15 - running Windows_Update.bat should be sufficient from upgrade to V12
- Prompt enhance bug fixed where it was reloading model when you tried to improve a prompt consequently without generating a video
- Default negative prompt added: still and motionless picture, static
- Negative prompt will be saved in generated prompt txt files along with all other used parameters including seed
- RIFE FPS increase will work in batch image to video now
- Negative prompt will work at batch image to video now
- Hopefully LoRA feature coming soon
- Hopefully Teacache and SageAttention coming soon
- A bug was preventing accurate video generation when you use auto crop and image to video
- The auto cropped images were not accurate. This bug fixed
- Now all auto cropped images will be also saved in a folder named auto_pre_processed_images so you can verify them


### 2 March 2025 Update

- Huge improvements arrived
- I recommend make a fresh install and move your older models folder
- A new panel added which has the following features
  - Increase Video FPS with Practical-RIFE (SOTA video frame interpolation model)
  - Apply Practical-RIFE set auto true
  - FPS Multiplier: 2x or 4x
- CFG Scale Added to interface: default set to 6 which works best - before it was 5
- Sigma Shift Added to interface: default set to 6 which works best - before it was 5
- A new model download added to Windows_Download_Models.bat
  - Now you can download Qwen2.5-14B-Instruct which is used for prompt enhance
- Prompt enhance completely improved and now it does 4bit quantization thus uses like 10 GB VRAM - previously it was using like 40 GB VRAM
  - Therefore it is now very lightweight and ultra fast and works really good
- Since now we have Practical-RIFE FPS increase, you can save your video as 8 FPS (default is 16) and make 4x FPS increase and get 30 FPS 10 seconds video

![](https://c10.patreonusercontent.com/4/patreon-media/p/post/123105403/cee9962a57694ba8a32e9e1d9d335a7e/eyJ3Ijo4MjB9/1.png?token-time=1743897600&token-hash=ik_SuV7fqheIudopXpSLUa_2ir78XfEbtS4DtmXasXA%3D)


### 29 February 2025 Update v2

- If you are on older GPUs like RTX 1000 series or RTX 2000 series etc, that doesn't support flash attention, either make a complete fresh install or enter inside Wan2.1 and delete venv and DiffSynth-Studio folders and reinstall. This will make your GPUs work
- Step by step full Video Tutorial published: https://www.youtube.com/watch?v=hnAhveNy-8s
- Manual fixing and writing of Video Chapters and Subtitles still in progress
- This tutorial includes Windows, RunPod and Massed Compute setup
  - It shows even how to use multiple GPUs and generate multiple videos parallelly in same machine


### 27 February 2025 Update

- App updated to V10 just run Windows_Update.bat file
- When saving used prompts with videos now it will save all the used parameters
- Torch DType: torch.float8_e4m3fn (FP8) now works and reduces VRAM and RAM usages - especially RAM
  - This mode still not working for RTX 5000 series I have reported the error waiting fix to update presets
- Video to video errors fixed
- Now the app will auto process input video into same length of your output settings like (81 frames - 5 seconds) and convert it into accurate resolution
- If your video has lesser frames than target frames, it will reduce your target frames to match with your input video frame count
- Just tested on a video from Pexels that was giving error and another user error giving video both worked

### 26 February 2025 Update v3

- Installer file updated v6
- Now it will compose virtual RAM on RunPod and Massed Compute to prevent out of RAM errors
- Now we fully support Image to Video 480p model many times faster than 720p model
- Now it has Windows_Install_RTX_5000_Series.bat
- This will install newest official libraries for 5000 series
- Make sure that you have CUDA 12.8 installed and in your System Path: https://youtu.be/DrhUHnYfwC0
- I have tested and works amazing on RTX 5090


### 26 February 2025 Update

- APP updated to v3
- You can extract zip file into same folder and use Windows_Update.bat file to update
- We have added any custom resolution and preset aspect ratios
- Check the newest interface screenshot above
- Also we have added check box for Tiled VAE Decode (Disable for 1.3B model for 12GB or more GPUs)
- When you disable tiled it will use more VRAM but final step of video decoding will be almost instant
- Auto cropping added so you shouldn't get error regarding mismatched input image or video
