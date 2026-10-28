# Laptop Without a Graphics Card? Run Full ComfyUI on Google Colab Instead (Free T4, 4 Steps)

## Full tutorial link > https://www.youtube.com/watch?v=xZrlD-WVT8s

[![Laptop Without a Graphics Card? Run Full ComfyUI on Google Colab Instead (Free T4, 4 Steps)](https://i.ytimg.com/vi_webp/xZrlD-WVT8s/maxresdefault.webp)](https://www.youtube.com/watch?v=xZrlD-WVT8s "Laptop Without a Graphics Card? Run Full ComfyUI on Google Colab Instead (Free T4, 4 Steps)")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Laptop-Without-a-Graphics-Card-Run-Full-ComfyUI-on-Google-Colab-Instead-Free-T4-4-Steps.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Laptop-Without-a-Graphics-Card-Run-Full-ComfyUI-on-Google-Colab-Instead-Free-T4-4-Steps.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Run full ComfyUI with ComfyUI-Manager on Google Colab from a browser tab: no graphics card and nothing installed on your computer. Our ComfyUI Colab Master Notebook installs ComfyUI, reads your GPU memory and system RAM to download the matching Qwen Image 2.1 files, and prints a Cloudflare link that opens ComfyUI with the official-settings workflow already loaded. It ships inside our ComfyUI installer zip (V143) next to the one-click Windows installer, the RunPod and Massed Compute scripts and 99 ready presets.

Links:

ComfyUI Colab Master Notebook (inside our ComfyUI installer zip, V143 and newer): [ [https://www.patreon.com/SECourses/posts/comfyui-auto-2-105023709](https://www.patreon.com/SECourses/posts/comfyui-auto-2-105023709) ]

Full ComfyUI tutorial: interface, ready presets and 16 FLUX 3 Klein examples: [ [https://youtu.be/nxsCBTcCVp4](https://youtu.be/nxsCBTcCVp4) ]

Google Colab: [ [https://colab.research.google.com/](https://colab.research.google.com/) ]

You will learn the whole Colab route: upload the notebook from the zip, choose Runtime, Change runtime type and connect a free T4, then run four cells. Step 1 installs the newest stable ComfyUI with ComfyUI-Manager (38 seconds in our recorded T4 session). Step 2 reads 15 GB VRAM and 12.7 GB system RAM on the T4 and downloads the INT8 diffusion model with the W4A8 text encoder, 14.2 GB in about two minutes. Step 3 is a built-in model downloader: paste up to four direct links, choose a folder or let it read the folder from Comfy-Org links, with finished files skipped, broken downloads resumed and a token field for gated models. Step 4 starts ComfyUI through a Cloudflare link that needs no account. Then you type a prompt, press Run and download your image, save your workflow and export its JSON. You also upload your own images through Load Image, videos and many files through Colab's Files panel into ComfyUI's input folder, and open workflows from your computer.

Main topics include step 5, which packs your outputs, saved workflows, optional inputs and a manifest into one ZIP (model weights are left out on purpose); what survives on Colab and what does not: stopping and restarting step 4 keeps models, outputs and saved workflows, while changing the runtime type, deleting the runtime or terminating the session wipes the machine, so download first. On Colab Pro the same notebook ran on an A100 with 40 GB VRAM and 83 GB system RAM and switched to the official INT8 + INT8 files, 17.3 GB, by itself. Free Colab GPU availability varies and is not guaranteed; the first T4 image in our session took about 3.5 minutes including model loading. The notebook opens in your own Google account, and the Cloudflare link is public, so keep it to yourself.

Use the chapters to jump to any notebook step, the upload options, the ZIP backup or the A100 part.

Chapters:

[00:00:00](https://youtu.be/xZrlD-WVT8s?t=0) Full ComfyUI on a free Colab T4 GPU

[00:00:20](https://youtu.be/xZrlD-WVT8s?t=20) Four steps and a link with the workflow loaded

[00:00:32](https://youtu.be/xZrlD-WVT8s?t=32) The notebook picks the right models for your GPU

[00:00:45](https://youtu.be/xZrlD-WVT8s?t=45) One ZIP backs up your whole session

[00:00:57](https://youtu.be/xZrlD-WVT8s?t=57) A100 on Colab Pro, chosen automatically

[00:01:20](https://youtu.be/xZrlD-WVT8s?t=80) Keep or wipe: one Colab action deletes your files

[00:01:32](https://youtu.be/xZrlD-WVT8s?t=92) Get the notebook from the ComfyUI zip V143

[00:01:46](https://youtu.be/xZrlD-WVT8s?t=106) Download and open the zip

[00:01:59](https://youtu.be/xZrlD-WVT8s?t=119) Upload the notebook to Google Colab

[00:02:11](https://youtu.be/xZrlD-WVT8s?t=131) Pick a GPU: Runtime, Change runtime type

[00:02:24](https://youtu.be/xZrlD-WVT8s?t=144) Connect and check the T4: 15 GB VRAM, 12.7 GB RAM

[00:02:36](https://youtu.be/xZrlD-WVT8s?t=156) Simple forms and run order

[00:02:58](https://youtu.be/xZrlD-WVT8s?t=178) Step 1: install ComfyUI + Manager

[00:03:10](https://youtu.be/xZrlD-WVT8s?t=190) Installed in 38 seconds

[00:03:22](https://youtu.be/xZrlD-WVT8s?t=202) Step 2: the three Qwen Image 2.1 files

[00:03:34](https://youtu.be/xZrlD-WVT8s?t=214) Auto precision: INT8 + W4A8 on the T4

[00:04:00](https://youtu.be/xZrlD-WVT8s?t=240) All models in about two minutes

[00:04:13](https://youtu.be/xZrlD-WVT8s?t=253) Step 3: built-in model downloader

[00:04:25](https://youtu.be/xZrlD-WVT8s?t=265) Auto folder from the link, up to four files

[00:04:47](https://youtu.be/xZrlD-WVT8s?t=287) Step 4: start ComfyUI, Cloudflare link

[00:05:00](https://youtu.be/xZrlD-WVT8s?t=300) Full ComfyUI opens with the workflow loaded

[00:05:11](https://youtu.be/xZrlD-WVT8s?t=311) Type a prompt and press Run

[00:05:24](https://youtu.be/xZrlD-WVT8s?t=324) The first run loads the models

[00:05:36](https://youtu.be/xZrlD-WVT8s?t=336) Result from the free T4

[00:06:07](https://youtu.be/xZrlD-WVT8s?t=367) Upload images with Load Image

[00:06:18](https://youtu.be/xZrlD-WVT8s?t=378) Upload videos through Colab Files

[00:06:38](https://youtu.be/xZrlD-WVT8s?t=398) Open your own workflows

[00:06:50](https://youtu.be/xZrlD-WVT8s?t=410) Step 5: one-ZIP backup

[00:07:13](https://youtu.be/xZrlD-WVT8s?t=433) Download the ZIP from the Files panel

[00:07:33](https://youtu.be/xZrlD-WVT8s?t=453) What survives a restart of step 4

[00:07:46](https://youtu.be/xZrlD-WVT8s?t=466) What wipes the machine

[00:07:58](https://youtu.be/xZrlD-WVT8s?t=478) Download first: the tab is not a backup

[00:08:30](https://youtu.be/xZrlD-WVT8s?t=510) Auto picks the INT8 + INT8 files (17.3 GB)

[00:08:42](https://youtu.be/xZrlD-WVT8s?t=522) Terminate the session when you finish

[00:08:52](https://youtu.be/xZrlD-WVT8s?t=532) Learn ComfyUI fully: the full tutorial

[00:09:05](https://youtu.be/xZrlD-WVT8s?t=545) What the Patreon zip gives you

[00:09:18](https://youtu.be/xZrlD-WVT8s?t=558) The whole route in one sentence

This video is for anyone who wants full ComfyUI without a strong local GPU: students, laptop users and creators who want to test workflows on Colab before installing locally. The same zip includes our one-click Windows installer and the RunPod and Massed Compute scripts when you are ready for your own machine or a bigger cloud GPU.

New to ComfyUI itself? Watch the full ComfyUI tutorial linked above: it teaches the interface, the ready presets and 16 FLUX 3 Klein examples step by step.

If you have any questions or need help, comment below or message us on Patreon. Subscribe for more ComfyUI, Colab and AI image tutorials.



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=8) This picture was just generated by full ComfyUI&nbsp; running on Google Colab. A free T4 GPU did all&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=14) the work, and all I used was a browser tab.&nbsp; No graphics card, and nothing installed on&nbsp;&nbsp;

- [00:00:19](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=19) my computer. Getting here takes four simple&nbsp; steps. They install ComfyUI with its Manager,&nbsp;&nbsp;

- [00:00:25](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=25) download Qwen Image 2.1, and print a link that&nbsp; opens ComfyUI with the workflow already loaded.&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=32) The notebook even reads your GPU memory and system&nbsp; RAM, then picks the right model files by itself. A&nbsp;&nbsp;

- [00:00:38](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=38) free T4 gets compact INT8 and 4-bit files, while&nbsp; bigger GPUs get the official template files. When&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=45) you finish, one cell packs all your outputs and&nbsp; saved workflows, plus your uploads if you want,&nbsp;&nbsp;

- [00:00:51](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=51) into a single ZIP for your computer, so nothing&nbsp; is lost when Colab recycles the machine. And&nbsp;&nbsp;

- [00:00:57](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=57) with Colab Pro, the same notebook runs on&nbsp; an A100 with 40 GB of VRAM, and it switches&nbsp;&nbsp;

- [00:01:04](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=64) to the bigger model files automatically.&nbsp; This is our ComfyUI Colab Master Notebook,&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=69) a ready-made ComfyUI setup for Google Colab.&nbsp; It ships inside our ComfyUI installer package,&nbsp;&nbsp;

- [00:01:15](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=75) right next to the Windows, RunPod and&nbsp; Massed Compute installers. In this tutorial,&nbsp;&nbsp;

- [00:01:21](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=81) I will show you the whole route, from uploading&nbsp; the notebook to downloading your results. I will&nbsp;&nbsp;

- [00:01:26](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=86) also show you which Colab action keeps your&nbsp; files, and which one quietly wipes them. So,&nbsp;&nbsp;

- [00:01:33](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=93) let's get the notebook. It comes with our ComfyUI&nbsp; installer zip in this Patreon post, and the link&nbsp;&nbsp;

- [00:01:40](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=100) to the post will be in the description of the&nbsp; video. Version 143 added the Colab notebook.&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=106) Download the latest zip and open it. Next to the&nbsp; Windows installer, the RunPod and Massed Compute&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=112) scripts, 99 ready presets and the prompt guides,&nbsp; you will find the ComfyUI Colab Master Notebook.&nbsp;&nbsp;

- [00:01:59](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=119) Now open Google Colab, click Upload notebook,&nbsp; then Browse, and pick that file. The notebook&nbsp;&nbsp;

- [00:02:05](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=125) opens in your own Google account right away, and&nbsp; nothing has been installed on Colab yet. First,&nbsp;&nbsp;

- [00:02:12](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=132) you need to pick the hardware. Open Runtime, then&nbsp; Change runtime type, select T4 GPU and save it.&nbsp;&nbsp;

- [00:02:18](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=138) Free accounts can use the T4, although free GPUs&nbsp; are not always available. Click Connect, and open&nbsp;&nbsp;

- [00:02:25](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=145) the resources panel. We received a Tesla T4 with&nbsp; 15 GB of GPU memory and 12.7 GB of system RAM.&nbsp;&nbsp;

- [00:02:33](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=153) The notebook uses both numbers in a moment. Every&nbsp; step is a simple form, so you only pick options in&nbsp;&nbsp;

- [00:02:39](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=159) these fields. Show code reveals the Python behind&nbsp; each step if you are curious, but you never need&nbsp;&nbsp;

- [00:02:45](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=165) to edit a single line. Run the steps one by&nbsp; one from the top, instead of Run all. Step 4&nbsp;&nbsp;

- [00:02:52](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=172) keeps running while you use ComfyUI, so each cell&nbsp; gets its turn and you can read what it reports.&nbsp;&nbsp;

- [00:02:59](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=179) Step 1 installs the newest stable ComfyUI, the&nbsp; built-in ComfyUI Manager and the Cloudflare tunnel&nbsp;&nbsp;

- [00:03:05](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=185) tool. It keeps Colab's own PyTorch, so nothing&nbsp; heavy has to be rebuilt. Done in 38 seconds.&nbsp;&nbsp;

- [00:03:11](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=191) The output lists our Tesla T4, ComfyUI 0.41.3,&nbsp; Manager 4.2.2, and PyTorch 2.11 with CUDA 13.&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=202) Step 2 downloads Qwen Image 2.1. It comes as&nbsp; three files: the diffusion model that paints,&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=208) the text encoder that reads your prompt, and&nbsp; the VAE that turns the result into pixels.&nbsp;&nbsp;

- [00:03:34](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=214) Leave the precision on auto. When GPU memory&nbsp; or system RAM is below 20 GB, like on this T4,&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=221) it takes INT8 with a W4A8 text encoder, 14.2&nbsp; GB in total. Run it, and the cell prints its&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=229) decision before downloading anything: 15 GB of&nbsp; VRAM and 13 of RAM, so INT8 with W4A8. Finished&nbsp;&nbsp;

- [00:03:57](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=237) files are skipped, and broken downloads resume.&nbsp; On our T4, all three files finished in about two&nbsp;&nbsp;

- [00:04:03](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=243) minutes. They now sit inside the runtime's ComfyUI&nbsp; models folders, and you can browse them in Colab's&nbsp;&nbsp;

- [00:04:10](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=250) Files panel like folders on your computer. Step&nbsp; 3 is a built-in model downloader for LoRAs,&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=257) upscalers or any other model. On Hugging Face,&nbsp; open the file page, then use the Download menu and&nbsp;&nbsp;

- [00:04:22](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=262) choose "Copy download link". Paste it, then choose&nbsp; the destination folder. Auto reads the folder from&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=269) the link for Comfy-Org files. Our example is&nbsp; an upscaler, so it goes into upscale_models,&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=275) and empty rows are simply skipped. Run the cell,&nbsp; and the file lands exactly where ComfyUI's loader&nbsp;&nbsp;

- [00:04:41](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=281) looks for it. You can add up to four links per&nbsp; run, and there is a token field for gated models.&nbsp;&nbsp;

- [00:04:48](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=288) Step 4 starts ComfyUI, and about 20 seconds later&nbsp; it prints a trycloudflare link. No account and no&nbsp;&nbsp;

- [00:04:55](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=295) token are needed. Keep this cell running, because&nbsp; it shows ComfyUI's live log. Click the link,&nbsp;&nbsp;

- [00:05:00](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=300) and full ComfyUI opens in a new tab with&nbsp; the Qwen Image 2.1 workflow already loaded,&nbsp;&nbsp;

- [00:05:06](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=306) using the official settings. It is also saved in&nbsp; the Workflows sidebar. Now type your prompt. Ours&nbsp;&nbsp;

- [00:05:13](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=313) describes a male explorer at a wooden workbench,&nbsp; with a bright window farther behind him. The size&nbsp;&nbsp;

- [00:05:19](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=319) and sampler stay at the official values, so you&nbsp; can press Run. The first run also loads all three&nbsp;&nbsp;

- [00:05:25](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=325) models into memory, so give the T4 a few minutes&nbsp; for this first image. You can watch the progress&nbsp;&nbsp;

- [00:05:32](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=332) right on the nodes. And here is our result from&nbsp; Colab's free T4: the explorer, the brass compass&nbsp;&nbsp;

- [00:05:41](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=341) on the workbench and the bright window, all&nbsp; placed the way the prompt asked. To keep it,&nbsp;&nbsp;

- [00:05:47](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=347) use the image's download button. It is saved&nbsp; to your computer like any other download, so it&nbsp;&nbsp;

- [00:05:52](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=352) stays yours even after the Colab machine is gone.&nbsp; Save your workflow in the Workflows panel too,&nbsp;&nbsp;

- [00:05:59](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=359) and export its JSON file to your computer. The&nbsp; workflow is your recipe, and it brings back every&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=364) node and setting next time. Your own images go in&nbsp; through a Load Image node. Click "choose file to&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=372) upload" and pick the image on your computer. It&nbsp; is sent to the Colab machine and previewed right&nbsp;&nbsp;

- [00:06:17](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=377) away. For videos or many files at once, open&nbsp; Colab's Files panel, go into ComfyUI's input&nbsp;&nbsp;

- [00:06:23](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=383) folder and upload them there. Then refresh ComfyUI&nbsp; and pick the new file in your loader. Here our&nbsp;&nbsp;

- [00:06:30](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=390) uploaded clip is selected in a video loader, and&nbsp; its preview plays right inside the node, straight&nbsp;&nbsp;

- [00:06:36](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=396) from the Colab machine. Workflows from your own&nbsp; computer open with ComfyUI's normal Open command.&nbsp;&nbsp;

- [00:06:42](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=402) Then select the input files you uploaded, because&nbsp; a local path like your C: drive does not exist on&nbsp;&nbsp;

- [00:06:48](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=408) the Colab machine. When you are done, stop step 4&nbsp; with its square button, then go to step 5. Leave&nbsp;&nbsp;

- [00:06:56](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=416) the folder field blank to pack all outputs,&nbsp; or type a subfolder for just one experiment.&nbsp;&nbsp;

- [00:07:02](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=422) Tick INCLUDE_INPUTS if you want your uploaded&nbsp; files in the backup too. Model weights are left&nbsp;&nbsp;

- [00:07:08](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=428) out on purpose, because they are gigabytes&nbsp; you can download again at any time. Run it,&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=433) and the cell prints the path of the new ZIP. In&nbsp; the Files panel, open the exports folder, then use&nbsp;&nbsp;

- [00:07:19](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=439) the menu beside the ZIP to download it. On your&nbsp; computer you get the outputs, the saved workflows,&nbsp;&nbsp;

- [00:07:25](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=445) your inputs, and a manifest that lists every&nbsp; file with its size. That is a complete backup&nbsp;&nbsp;

- [00:07:31](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=451) of the whole session. Now, the answer I promised.&nbsp; Stopping step 4 only stops ComfyUI. Run it again,&nbsp;&nbsp;

- [00:07:38](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=458) and you get a fresh link, with your models,&nbsp; outputs and saved workflows still in place.&nbsp;&nbsp;

- [00:07:47](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=467) But changing the runtime type, deleting the&nbsp; runtime or terminating the session wipes the&nbsp;&nbsp;

- [00:07:52](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=472) whole content folder: models, outputs, everything.&nbsp; That is exactly why the ZIP comes first. Closing&nbsp;&nbsp;

- [00:07:58](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=478) the browser tab is not a backup either.&nbsp; Colab can keep that machine running for&nbsp;&nbsp;

- [00:08:03](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=483) a while or recycle it at any moment, so always&nbsp; download first. Google can stop free sessions&nbsp;&nbsp;

- [00:08:10](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=490) that mainly serve a web interface, so for longer&nbsp; work, Colab Pro is the more reliable route. There&nbsp;&nbsp;

- [00:08:16](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=496) you can choose the A100 in Change runtime type.&nbsp; We received an A100 with 40 GB of GPU memory and&nbsp;&nbsp;

- [00:08:24](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=504) over 80 GB of system RAM. That is more than&nbsp; double the T4's GPU memory. Run step 2 here,&nbsp;&nbsp;

- [00:08:31](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=511) and auto picks the official template files&nbsp; instead: INT8 for both the diffusion model and the&nbsp;&nbsp;

- [00:08:37](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=517) text encoder, 17.3 GB. You change nothing. When&nbsp; you finish, open Runtime, then Manage sessions,&nbsp;&nbsp;

- [00:08:45](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=525) and terminate the session. That stops the&nbsp; paid machine, while your notebook and your&nbsp;&nbsp;

- [00:08:50](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=530) downloaded ZIP stay safe. New to ComfyUI itself?&nbsp; Our full ComfyUI tutorial teaches the interface,&nbsp;&nbsp;

- [00:08:58](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=538) ready presets and 16 FLUX 3 Klein examples step&nbsp; by step. It is linked in the description and on&nbsp;&nbsp;

- [00:09:04](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=544) the end screen. Our Patreon zip gives you that&nbsp; one-click Windows installer, the cloud installers,&nbsp;&nbsp;

- [00:09:10](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=550) 99 presets and this Colab notebook, with frequent&nbsp; updates and our support whenever you need help.&nbsp;&nbsp;

- [00:09:18](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=558) So the whole route is simple: upload the&nbsp; notebook, pick a GPU, run four steps, open the&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=xZrlD-WVT8s&t=563) link and create, then download your ZIP. Get the&nbsp; notebook from the post linked in the description.
