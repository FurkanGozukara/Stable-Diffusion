# Generative AI Full Course - Lecture 2: Build a ComfyUI Workflow from Scratch with Z-Image Turbo

## Full tutorial link > https://www.youtube.com/watch?v=T2_z7ZaffyI

[![Generative AI Full Course - Lecture 2: Build a ComfyUI Workflow from Scratch with Z-Image Turbo](https://i.ytimg.com/vi_webp/T2_z7ZaffyI/maxresdefault.webp)](https://www.youtube.com/watch?v=T2_z7ZaffyI "Generative AI Full Course - Lecture 2: Build a ComfyUI Workflow from Scratch with Z-Image Turbo")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-2-Build-a-ComfyUI-Workflow-from-Scratch-with-Z-Image-Turbo.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-2-Build-a-ComfyUI-Workflow-from-Scratch-with-Z-Image-Turbo.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Build a ComfyUI image workflow from individual nodes and follow the data from a written prompt to saved pixels. In Lecture 2 of this 14-lecture Generative AI course, we use Z-Image-Turbo on Windows to connect the model loaders, conditioning, latent, sampler and decoder, then test the controls on real outputs.

🔗 Links:

Windows AI requirements guide: [ [https://www.patreon.com/posts/111553210](https://www.patreon.com/posts/111553210) ]

📦 Full course resource repository: [ [https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall](https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall) ]

▶️ Lecture 1 — Windows setup and your first image: [ [https://youtu.be/KgUhPAOjagI](https://youtu.be/KgUhPAOjagI) ]

📺 Full course playlist: [ [https://www.youtube.com/playlist?list=PLUMEJUep1hiI](https://www.youtube.com/playlist?list=PLUMEJUep1hiI) ]

Official ComfyUI manual installation: [ [https://docs.comfy.org/installation/manual_install](https://docs.comfy.org/installation/manual_install) ]

Z-Image Turbo workflow and model downloads: [ [https://docs.comfy.org/tutorials/image/z-image/z-image-turbo](https://docs.comfy.org/tutorials/image/z-image/z-image-turbo) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

🎯 You will learn how to update an existing ComfyUI installation, inspect a grouped template, refresh model files, build and connect the graph, read socket types, measure warm generation time, test repeatability, compare resolution, sampling steps and guidance, and recover a workflow from its original PNG.

🧩 Main topics include CLIP conditioning, latent images, ModelSamplingAuraFlow, KSampler, VAE Decode, fixed and random seeds, execution caching, CFG, controlled comparisons, PNG metadata and workflow JSON.

Use the chapters to follow the build or jump to a particular setting and comparison.

⏱️ Chapters:

[00:00:00](https://youtu.be/T2_z7ZaffyI?t=0) From the first image to its workflow

[00:01:06](https://youtu.be/T2_z7ZaffyI?t=66) Update ComfyUI and its matching Python dependencies

[00:03:53](https://youtu.be/T2_z7ZaffyI?t=233) Open the packaged workflow and trace its stages

[00:05:21](https://youtu.be/T2_z7ZaffyI?t=321) Refresh model files without restarting the server

[00:06:35](https://youtu.be/T2_z7ZaffyI?t=395) Load the three models and connect their roles

[00:08:41](https://youtu.be/T2_z7ZaffyI?t=521) Turn the prompt into conditioning for the model

[00:10:00](https://youtu.be/T2_z7ZaffyI?t=600) Connect the latent and choose the sampling settings

[00:12:50](https://youtu.be/T2_z7ZaffyI?t=770) Decode the sampled latent and save the image

[00:14:21](https://youtu.be/T2_z7ZaffyI?t=861) Run the complete graph and inspect the result

[00:15:40](https://youtu.be/T2_z7ZaffyI?t=940) Change the prompt and watch cached stages

[00:16:44](https://youtu.be/T2_z7ZaffyI?t=1004) Compare resolution and the actual computation cost

[00:20:07](https://youtu.be/T2_z7ZaffyI?t=1207) Test fixed seeds and explore with random seeds

[00:23:00](https://youtu.be/T2_z7ZaffyI?t=1380) Compare sampling steps on the Turbo model

[00:25:21](https://youtu.be/T2_z7ZaffyI?t=1521) Inspect guidance changes on this distilled model

[00:27:33](https://youtu.be/T2_z7ZaffyI?t=1653) Test the negative branch at guidance one

[00:29:19](https://youtu.be/T2_z7ZaffyI?t=1759) Change one variable and explain the difference

[00:30:41](https://youtu.be/T2_z7ZaffyI?t=1841) Recover the workflow from PNG and export JSON

[00:33:02](https://youtu.be/T2_z7ZaffyI?t=1982) Follow the restored graph to the saved image

This video is for anyone who has a working ComfyUI installation and wants to understand the graph behind an image. Follow Lecture 1 first if you need the Windows setup.

💬 For help, check the pinned comment, join our Discord, or leave a comment. Support SECourses on Patreon for more guides, scripts and resources.

#ComfyUI #GenerativeAI #ZImageTurbo



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=0) Greetings everyone. Today I am going to show&nbsp; you how to build an image workflow in ComfyUI.&nbsp;&nbsp;

- [00:00:06](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=6) We will start with this result and follow the&nbsp; connections that create it. In our 1st lecture,&nbsp;&nbsp;

- [00:00:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=12) we used this Z-Image-Turbo workflow. You can see&nbsp; the prompt on the left and the generated image on&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=20) the right. This picture started as a written&nbsp; description. The large node contains several&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=26) operations. It loads the models, processes our&nbsp; words, and generates the image. We will open it,&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=34) then build those operations ourselves on an empty&nbsp; canvas. You will also see what the seed, steps,&nbsp;&nbsp;

- [00:00:41](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=41) and guidance change. We will compare actual images&nbsp; while keeping the other settings fixed. That makes&nbsp;&nbsp;

- [00:00:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=49) each difference much easier to understand. You&nbsp; can find the chapters and workflow files in the&nbsp;&nbsp;

- [00:00:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=55) tutorial description. 1st, let us update the&nbsp; installation from the previous lecture. Then&nbsp;&nbsp;

- [00:01:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=61) we will use that environment for our comparisons.&nbsp; Let us update ComfyUI before building our graph.&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=69) This is the official update page. We installed&nbsp; the manual version in the 1st lecture, so&nbsp;&nbsp;

- [00:01:14](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=74) choose the Manual Installation tab here. A manual&nbsp; update has 2 parts. Git updates the source code,&nbsp;&nbsp;

- [00:01:22](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=82) and the requirements command installs its matching&nbsp; Python dependencies. Both belong to the existing&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=89) installation, using its own Python environment.&nbsp; Open File Explorer and go to the ComfyUI folder&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=97) you created in the 1st lecture. I am entering the&nbsp; complete path in the address bar, then pressing&nbsp;&nbsp;

- [00:01:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=104) Enter to open it. This folder contains the&nbsp; application and its virtual environment. We will&nbsp;&nbsp;

- [00:01:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=110) update this copy. Your model files remain in their&nbsp; existing model folders, and the shared model path&nbsp;&nbsp;

- [00:01:57](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=117) configuration stays in place. Click the address&nbsp; bar, type CMD, and press Enter. That opens a&nbsp;&nbsp;

- [00:02:05](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=125) Command Prompt inside this folder. Check the path&nbsp; at the prompt before entering the update commands.&nbsp;&nbsp;

- [00:02:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=132) 1st, activate this installation's virtual&nbsp; environment. Type this command and press Enter.&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=139) The prompt now starts with (venv). That prefix&nbsp; identifies the active virtual environment in&nbsp;&nbsp;

- [00:02:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=146) this window. Let us check which Python is active.&nbsp; Type this command and press Enter. The 1st result&nbsp;&nbsp;

- [00:02:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=154) should point inside the virtual environment of&nbsp; this ComfyUI installation. That is the interpreter&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=160) we want. Now update the source code. Type this Git&nbsp; command and press Enter. The fast forward option&nbsp;&nbsp;

- [00:02:48](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=168) accepts the update only when Git can advance&nbsp; directly from the current commit to the new&nbsp;&nbsp;

- [00:02:54](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=174) 1. The source update has finished. Next, install&nbsp; the requirements with this command. Using Python&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=182) followed by the module option runs pip through&nbsp; our active interpreter, keeping the dependencies&nbsp;&nbsp;

- [00:03:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=188) in this virtual environment. The requirements file&nbsp; describes the packages this source version needs.&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=195) These include the browser interface and packaged&nbsp; workflows. Updating the code and its requirements&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=202) together keeps those parts of the installation&nbsp; aligned. The installer has returned to the prompt.&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=208) The code and dependencies are now updated.&nbsp; Restart ComfyUI next so the running server&nbsp;&nbsp;

- [00:03:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=214) loads that updated installation, then refresh its&nbsp; page in the browser. ComfyUI has restarted with&nbsp;&nbsp;

- [00:03:42](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=222) the updated code. Refresh its browser page to&nbsp; load the matching interface. We are back at the&nbsp;&nbsp;

- [00:03:48](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=228) same workflow, ready to look inside the grouped&nbsp; image generator. Click the small arrow in the&nbsp;&nbsp;

- [00:03:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=235) upper corner of the grouped generator to open&nbsp; it. This single box contains a connected graph.&nbsp;&nbsp;

- [00:04:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=241) Each node performs an operation, and each wire&nbsp; carries a particular data type. Start with these&nbsp;&nbsp;

- [00:04:09](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=249) 3 loaders. 1 loads the image generation model, 1&nbsp; loads the text encoder, and 1 loads the VAE. This&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=257) workflow keeps those model components in separate&nbsp; files. Follow the text encoder connection into the&nbsp;&nbsp;

- [00:04:24](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=264) prompt node. It turns our words into conditioning&nbsp; for the image model. That conditioning reaches&nbsp;&nbsp;

- [00:04:31](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=271) the sampler, while the zeroed branch supplies&nbsp; the other conditioning input. The empty latent&nbsp;&nbsp;

- [00:04:37](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=277) defines the image dimensions before any pixels&nbsp; exist. The sampler uses that latent, the model,&nbsp;&nbsp;

- [00:04:43](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=283) and the conditioning. Its seed chooses the&nbsp; starting noise, and its steps control the&nbsp;&nbsp;

- [00:04:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=289) sampling iterations. The sampler produces&nbsp; a latent, rather than a finished picture.&nbsp;&nbsp;

- [00:04:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=295) Follow its output into the decoder. The decoder&nbsp; uses the matching VAE to turn that representation&nbsp;&nbsp;

- [00:05:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=303) into pixels we can display and save. Press Escape&nbsp; to return to the outer workflow. The group sends&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=310) its image through this blue connection to Save&nbsp; Image. We will build the same stages ourselves,&nbsp;&nbsp;

- [00:05:17](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=317) so every connection has a clear purpose. Model&nbsp; files can live in the shared folders we configured&nbsp;&nbsp;

- [00:05:25](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=325) in the 1st lecture. Open the VAE folder in File&nbsp; Explorer. This contains the decoder file that our&nbsp;&nbsp;

- [00:05:33](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=333) workflow already uses. Let us add a copy in a new&nbsp; subfolder. Select the decoder file and copy it.&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=342) Create a folder named LectureTwo. Subfolders help&nbsp; organize model files while keeping them available&nbsp;&nbsp;

- [00:05:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=350) to the loader. Open the new folder and paste the&nbsp; file here. This is a copy of the same decoder,&nbsp;&nbsp;

- [00:05:57](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=357) so its weights have not changed. We are testing&nbsp; how the interface discovers a newly added model&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=364) path. Back in ComfyUI, press R to refresh the&nbsp; available model lists. Then open the VAE selector&nbsp;&nbsp;

- [00:06:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=371) in the grouped workflow. The new entry includes&nbsp; its subfolder name, making the copied file easy to&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=378) identify. Select the new entry. ComfyUI can now&nbsp; use this file without restarting the server. The&nbsp;&nbsp;

- [00:06:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=386) original entry remains available too. When you add&nbsp; a different model, place it in the matching folder&nbsp;&nbsp;

- [00:06:32](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=392) and refresh this list. Click the plus beside&nbsp; the workflow tabs to start an empty graph.&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=399) Double click on the left side of the canvas. This&nbsp; opens the node search panel, where we can find&nbsp;&nbsp;

- [00:06:45](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=405) individual operations. Type Load Diffusion Model&nbsp; and press Enter. Then click on the canvas to place&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=413) the node. This loader will provide the image model&nbsp; used by our sampler. We will connect its output&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=420) after adding the next stage. The model field shows&nbsp; our Z-Image-Turbo file. Leave the weight data type&nbsp;&nbsp;

- [00:07:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=428) at default. The purple output carries the loaded&nbsp; model, which we will connect to the next operation&nbsp;&nbsp;

- [00:07:16](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=436) in the sampling path. Double click beside the&nbsp; loader and add ModelSamplingAuraFlow. This&nbsp;&nbsp;

- [00:07:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=443) operation configures how the model interprets&nbsp; the sampling process. We are using the same&nbsp;&nbsp;

- [00:07:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=450) model-specific setup as the working template we&nbsp; just opened. Drag the purple model output into the&nbsp;&nbsp;

- [00:07:37](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=457) purple model input. Both sockets carry the same&nbsp; type. Set shift to 3 and leave sampling at flow,&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=465) matching this Turbo workflow. Its output&nbsp; now supplies the configured model. Add Load&nbsp;&nbsp;

- [00:07:52](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=472) CLIP below the diffusion loader. Despite this&nbsp; familiar node name, it can load several text&nbsp;&nbsp;

- [00:07:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=478) encoder families. We will use the Qwen encoder&nbsp; required by this Z-Image-Turbo workflow. The&nbsp;&nbsp;

- [00:08:07](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=487) encoder file is selected here. Set the loader type&nbsp; to lumina2, as the template requires. That setting&nbsp;&nbsp;

- [00:08:15](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=495) tells the loader how to handle this encoder.&nbsp; The yellow output will connect to our prompt&nbsp;&nbsp;

- [00:08:21](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=501) node. Add Load VAE beneath the text encoder. This&nbsp; 3rd loader provides the decoder that converts the&nbsp;&nbsp;

- [00:08:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=510) generated latent into pixels. Its red output&nbsp; will join the sampler output at the VAE Decode&nbsp;&nbsp;

- [00:08:39](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=519) node. Add CLIP Text Encode to the right of&nbsp; the text encoder. This node holds our prompt.&nbsp;&nbsp;

- [00:08:47](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=527) It uses the loaded encoder to turn those words&nbsp; into conditioning for the image model. Connect the&nbsp;&nbsp;

- [00:08:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=535) yellow CLIP output to the matching input on the&nbsp; prompt node. The loader supplies the encoder. The&nbsp;&nbsp;

- [00:09:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=543) prompt node applies it to our text and produces&nbsp; conditioning at the orange output. Enter the&nbsp;&nbsp;

- [00:09:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=551) workstation description from the lesson files.&nbsp; It names the subject, the university laboratory,&nbsp;&nbsp;

- [00:09:16](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=556) and the lighting. These concrete details&nbsp; give us a clear starting point when we&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=563) compare prompt changes later. Add Conditioning&nbsp; Zero Out below the prompt. The working template&nbsp;&nbsp;

- [00:09:31](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=571) uses this operation for the negative branch. We&nbsp; will keep that arrangement for our 1st image,&nbsp;&nbsp;

- [00:09:38](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=578) then test what guidance changes later. Connect&nbsp; the prompt conditioning output to this input. Zero&nbsp;&nbsp;

- [00:09:46](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=586) Out creates a matching conditioning structure with&nbsp; its values zeroed. The original prompt output will&nbsp;&nbsp;

- [00:09:53](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=593) feed the positive branch, while this output will&nbsp; feed the negative branch. Add EmptySD3LatentImage&nbsp;&nbsp;

- [00:10:02](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=602) below the conditioning nodes. This supplies the&nbsp; latent shape required by our image model. Its name&nbsp;&nbsp;

- [00:10:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=608) reflects its origin, but the 16-channel layout&nbsp; also fits this workflow. Set the width and height&nbsp;&nbsp;

- [00:10:16](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=616) to 1024, with a batch size of 1. We are requesting&nbsp; 1 square image. These dimensions determine the&nbsp;&nbsp;

- [00:10:25](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=625) latent size before the sampler begins its work.&nbsp; Add KSampler to the right of these stages. It&nbsp;&nbsp;

- [00:10:33](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=633) brings together the configured model, positive and&nbsp; negative conditioning, and the starting latent.&nbsp;&nbsp;

- [00:10:39](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=639) Its controls determine how the sampling process&nbsp; produces a new latent. Connect the configured&nbsp;&nbsp;

- [00:10:47](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=647) model output to the sampler model input. Follow&nbsp; the purple route from the diffusion loader,&nbsp;&nbsp;

- [00:10:53](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=653) through AuraFlow, into KSampler. This is the model&nbsp; that will perform the image generation. Connect&nbsp;&nbsp;

- [00:11:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=661) the prompt output to positive. Then connect&nbsp; Zero Out to negative. Both orange wires carry&nbsp;&nbsp;

- [00:11:07](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=667) conditioning, but the input labels tell us their&nbsp; roles. Trace each wire back to its source before&nbsp;&nbsp;

- [00:11:14](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=674) running the graph. Connect the latent output&nbsp; to the sampler latent image input. We now have&nbsp;&nbsp;

- [00:11:21](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=681) all 4 inputs connected. The sampler will use this&nbsp; shape and its seed to begin the sampling process&nbsp;&nbsp;

- [00:11:28](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=688) at our chosen resolution. Enter the seed from the&nbsp; reference workflow. This number determines the&nbsp;&nbsp;

- [00:11:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=696) initial random noise used for sampling. Keeping it&nbsp; fixed helps us compare changes to another setting&nbsp;&nbsp;

- [00:11:43](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=703) without changing the starting noise at the same&nbsp; time. Set control after generate to fixed. This&nbsp;&nbsp;

- [00:11:51](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=711) keeps the displayed seed unchanged after a run.&nbsp; Later, we will use randomize to explore variations&nbsp;&nbsp;

- [00:11:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=718) and compare that behavior with deliberate&nbsp; experiments using a fixed seed. Set steps to 8&nbsp;&nbsp;

- [00:12:06](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=726) and guidance to 1, matching our Turbo template.&nbsp; This model is designed for a short sampling&nbsp;&nbsp;

- [00:12:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=732) run. We will compare these controls separately&nbsp; after confirming that the complete graph works.&nbsp;&nbsp;

- [00:12:21](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=741) Choose res_multistep as the sampler, then simple&nbsp; as the scheduler. These are the 2 selections used&nbsp;&nbsp;

- [00:12:28](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=748) by our working template. Keeping the same&nbsp; recipe gives us a reliable baseline for the&nbsp;&nbsp;

- [00:12:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=754) comparisons that follow. Keep denoise at 1 for&nbsp; this text-to-image workflow. We begin from an&nbsp;&nbsp;

- [00:12:41](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=761) empty latent shape, so we use the full sampling&nbsp; schedule. The pink output carries the sampled&nbsp;&nbsp;

- [00:12:46](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=766) latent that we will decode next. Add VAE Decode&nbsp; to the right of the sampler. Sampling produces a&nbsp;&nbsp;

- [00:12:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=775) latent representation. This node uses our loaded&nbsp; decoder to turn that representation into the&nbsp;&nbsp;

- [00:13:02](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=782) visible pixels of an image. Connect the sampler&nbsp; latent output to samples on the decode node.&nbsp;&nbsp;

- [00:13:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=792) Follow this pink wire from the operation that&nbsp; generates the latent to the operation that&nbsp;&nbsp;

- [00:13:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=798) converts it into an image we can inspect. Connect&nbsp; the red output from Load VAE to the decoder input.&nbsp;&nbsp;

- [00:13:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=806) The decode node now has both the sampled latent&nbsp; and the model needed to convert it. Its blue&nbsp;&nbsp;

- [00:13:32](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=812) output will carry the image. Add Save Image below&nbsp; the decoder. This final operation writes the image&nbsp;&nbsp;

- [00:13:41](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=821) to the ComfyUI output folder and displays a&nbsp; preview. It also makes the end of our graph&nbsp;&nbsp;

- [00:13:47](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=827) explicit: we want a saved image. Connect the blue&nbsp; image output to Save Image. The graph now has a&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=835) complete route from its model loaders and prompt&nbsp; through sampling and decoding. Every required&nbsp;&nbsp;

- [00:14:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=841) input should have the matching connection we just&nbsp; created. Set the filename prefix to this lesson&nbsp;&nbsp;

- [00:14:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=848) folder and Reference. ComfyUI adds a numbered&nbsp; suffix when it saves each image. This keeps the&nbsp;&nbsp;

- [00:14:15](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=855) results together while giving each generated file&nbsp; its own name. Click Run to execute the complete&nbsp;&nbsp;

- [00:14:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=863) graph. ComfyUI follows the connections needed to&nbsp; produce our saved image. Watch the active stages&nbsp;&nbsp;

- [00:14:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=870) as the prompt is encoded, the latent is sampled,&nbsp; and the result is decoded. The image now appears&nbsp;&nbsp;

- [00:14:37](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=877) in Save Image. A completed run confirms that these&nbsp; connected stages work together. We still need to&nbsp;&nbsp;

- [00:14:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=884) inspect the picture itself, because successful&nbsp; execution does not guarantee that every prompt&nbsp;&nbsp;

- [00:14:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=890) detail was followed. Right click the image&nbsp; preview to access its image commands. We will&nbsp;&nbsp;

- [00:14:56](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=896) open the result at a larger size, then compare&nbsp; what the prompt requested with the objects and&nbsp;&nbsp;

- [00:15:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=903) lighting that actually appeared. Choose Open Image&nbsp; to inspect the saved result. The central monitor,&nbsp;&nbsp;

- [00:15:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=912) colorful shapes, speakers, and laboratory setting&nbsp; are recognizable. This gives us a useful baseline,&nbsp;&nbsp;

- [00:15:19](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=919) but the foreground hardware needs a closer look.&nbsp; Look at the keyboard in the foreground. It has&nbsp;&nbsp;

- [00:15:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=926) merged with the body of a graphics card instead&nbsp; of showing 2 separate objects. This is why we&nbsp;&nbsp;

- [00:15:33](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=933) inspect relationships and shapes, rather than&nbsp; judging only overall sharpness. Return to the&nbsp;&nbsp;

- [00:15:41](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=941) graph and replace only the lighting sentence. We&nbsp; will ask for cool overhead fluorescent lighting.&nbsp;&nbsp;

- [00:15:47](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=947) Keep the seed, dimensions, and sampling recipe&nbsp; unchanged so that the prompt is the variable we&nbsp;&nbsp;

- [00:15:54](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=954) are testing. Run the edited prompt. The unchanged&nbsp; model loaders can reuse their previous results.&nbsp;&nbsp;

- [00:16:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=961) The changed text must be encoded again, and its&nbsp; new conditioning causes sampling and decoding&nbsp;&nbsp;

- [00:16:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=968) to execute for the new image. The new image has a&nbsp; cooler room and visible overhead lights. The desk&nbsp;&nbsp;

- [00:16:15](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=975) and object arrangement also changed. A prompt edit&nbsp; can affect the whole composition, even when the&nbsp;&nbsp;

- [00:16:21](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=981) seed and every sampling setting stay fixed. Open&nbsp; this result and compare its foreground with the&nbsp;&nbsp;

- [00:16:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=990) 1st image. The graphics card is now separate from&nbsp; the keyboard. Our lighting edit changed more than&nbsp;&nbsp;

- [00:16:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=996) color, so describe the observed result without&nbsp; assuming a perfectly isolated visual effect.&nbsp;&nbsp;

- [00:16:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1004) Return to the graph and restore the original&nbsp; prompt. We are starting a different comparison&nbsp;&nbsp;

- [00:16:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1009) now. Keep the fixed seed and 8-step recipe,&nbsp; then reduce both latent dimensions to 512.&nbsp;&nbsp;

- [00:16:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1018) Set width and height to 512, leaving batch&nbsp; size at 1. This requests a smaller square&nbsp;&nbsp;

- [00:17:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1024) image. Its smaller latent gives the model&nbsp; less spatial work at each sampling step.&nbsp;&nbsp;

- [00:17:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1031) Run this smaller version and watch the sampler&nbsp; finish. We will compare it with the larger result&nbsp;&nbsp;

- [00:17:17](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1037) using the same model and recipe. Actual timing&nbsp; depends on the hardware and whether the models&nbsp;&nbsp;

- [00:17:24](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1044) are already loaded. Open the smaller output for&nbsp; inspection. It contains the same broad subject,&nbsp;&nbsp;

- [00:17:31](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1051) but the hardware arrangement differs and fine&nbsp; detail is limited. Changing resolution changes&nbsp;&nbsp;

- [00:17:37](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1057) the noise layout too, even with the same displayed&nbsp; seed. Choose Open Image and inspect the monitor&nbsp;&nbsp;

- [00:17:45](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1065) and foreground hardware. At this resolution,&nbsp; small edges have fewer pixels to describe them.&nbsp;&nbsp;

- [00:17:51](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1071) The result is also a different composition, rather&nbsp; than a simple reduced copy of our baseline. Return&nbsp;&nbsp;

- [00:17:59](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1079) to the graph and set both dimensions back to&nbsp; 1024. Doubling each side gives 4 times as many&nbsp;&nbsp;

- [00:18:06](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1086) output pixels. The work inside the model need&nbsp; not increase by exactly that same factor. Run the&nbsp;&nbsp;

- [00:18:13](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1093) larger version again. Both comparison runs now&nbsp; use models that have already been loaded. This&nbsp;&nbsp;

- [00:18:19](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1099) avoids confusing initial loading time with the&nbsp; cost of generating a larger latent and decoding&nbsp;&nbsp;

- [00:18:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1106) more pixels. The larger result returns to our&nbsp; reference composition. Use the recorded timings&nbsp;&nbsp;

- [00:18:32](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1112) with their resolution and hardware details when&nbsp; comparing performance. Model loading, sampling,&nbsp;&nbsp;

- [00:18:38](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1118) and decoding are different costs, so keep those&nbsp; measurements separate. Open the Console panel to&nbsp;&nbsp;

- [00:18:46](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1126) inspect the generation log. Sampling progress and&nbsp; completed-prompt timing describe different parts&nbsp;&nbsp;

- [00:18:52](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1132) of the work. Read each measurement with its units&nbsp; before using it to compare the 2 resolutions.&nbsp;&nbsp;

- [00:19:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1141) These 2 warm runs completed in about 0.97 seconds&nbsp; and 3.23 seconds. The larger image took longer on&nbsp;&nbsp;

- [00:19:10](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1150) this machine, but neither number represents&nbsp; sampling alone. The larger run reports about&nbsp;&nbsp;

- [00:19:16](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1156) 2.8 iterations per second. Inverting that&nbsp; rate gives roughly 0.36 seconds per step.&nbsp;&nbsp;

- [00:19:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1163) This sampling measure excludes the separate image&nbsp; decoding stage. The memory messages describe model&nbsp;&nbsp;

- [00:19:31](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1171) loading and allocation, not a complete peak-memory&nbsp; measurement. Our companion measurements include&nbsp;&nbsp;

- [00:19:38](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1178) sampled device usage. They include resident models&nbsp; and other allocations, so they cannot isolate the&nbsp;&nbsp;

- [00:19:45](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1185) cost of the larger latent. Return to the graph.&nbsp; Increasing both dimensions produces more latent&nbsp;&nbsp;

- [00:19:53](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1193) patches for the model to process. Attention&nbsp; connects information across those patches,&nbsp;&nbsp;

- [00:19:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1198) so total computation and memory need not scale&nbsp; in a simple pixel-count ratio. Now let us test a&nbsp;&nbsp;

- [00:20:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1208) fixed seed with a fresh calculation. An unchanged&nbsp; graph can reuse its previous image, which would&nbsp;&nbsp;

- [00:20:15](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1215) not test repeatability. Open the ComfyUI menu&nbsp; so we can clear its execution cache. Open the&nbsp;&nbsp;

- [00:20:24](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1224) Edit menu and find the option to unload models and&nbsp; the execution cache. This removes stored execution&nbsp;&nbsp;

- [00:20:31](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1231) results. It leaves the nodes, connections,&nbsp; prompt, and chosen settings in our workflow&nbsp;&nbsp;

- [00:20:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1236) intact. Choose Unload Models and Execution Cache.&nbsp; The next run will calculate the result again and&nbsp;&nbsp;

- [00:20:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1244) reload the required models. We are keeping the&nbsp; graph settings unchanged, including the seed and&nbsp;&nbsp;

- [00:20:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1249) the original prompt. Run the unchanged workflow&nbsp; again. Watch the active sampling stage so we know&nbsp;&nbsp;

- [00:20:57](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1257) this is a new calculation. Repeating the same&nbsp; seed is meaningful only when the other inputs&nbsp;&nbsp;

- [00:21:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1263) and execution conditions also stay the same.&nbsp; The regenerated image matches our reference,&nbsp;&nbsp;

- [00:21:09](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1269) including the fused keyboard and graphics card.&nbsp; The saved pixel comparison confirms the match&nbsp;&nbsp;

- [00:21:14](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1274) in this environment. Different hardware, software&nbsp; versions, or computation settings can still change&nbsp;&nbsp;

- [00:21:22](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1282) results elsewhere. Enter a different starting seed&nbsp; and set control after generate to randomize. After&nbsp;&nbsp;

- [00:21:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1290) each run, this control chooses another seed&nbsp; for the next request. That makes it useful for&nbsp;&nbsp;

- [00:21:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1296) exploration instead of a controlled comparison.&nbsp; Run this variation with the new starting seed.&nbsp;&nbsp;

- [00:21:43](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1303) The prompt and sampling recipe remain unchanged.&nbsp; We are exploring another starting noise pattern,&nbsp;&nbsp;

- [00:21:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1309) which can change the placement and appearance&nbsp; of objects throughout the image. This variation&nbsp;&nbsp;

- [00:21:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1315) separates the graphics card and places a&nbsp; closed laptop in the foreground. Notice that&nbsp;&nbsp;

- [00:22:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1321) the displayed seed has changed after generation.&nbsp; The saved image records the seed actually used for&nbsp;&nbsp;

- [00:22:09](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1329) that result. Run once more using the newly&nbsp; displayed seed. Compare the monitor, desk,&nbsp;&nbsp;

- [00:22:16](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1336) and foreground objects with the previous result.&nbsp; Keep the output files when exploring, because each&nbsp;&nbsp;

- [00:22:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1343) image belongs to the seed used for its own&nbsp; generation. Return the seed control to fixed&nbsp;&nbsp;

- [00:22:29](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1349) for our next comparison. These variations help us&nbsp; search for a useful composition, but they do not&nbsp;&nbsp;

- [00:22:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1356) isolate another setting. Fixed control keeps the&nbsp; chosen seed from changing after each run. Restore&nbsp;&nbsp;

- [00:22:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1364) our original reference seed before changing the&nbsp; sampling steps. We want each step count to begin&nbsp;&nbsp;

- [00:22:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1370) from the same noise pattern. Keeping the prompt,&nbsp; dimensions, and guidance unchanged will make the&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1377) comparison easier to interpret. Set steps to 2&nbsp; while keeping the reference seed, prompt, and&nbsp;&nbsp;

- [00:23:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1384) guidance fixed. We will compare 2, 4, and 8 steps.&nbsp; This tests sampling effort within the same Turbo&nbsp;&nbsp;

- [00:23:12](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1392) recipe, rather than changing several controls&nbsp; together. Run the 2-step version. It finishes&nbsp;&nbsp;

- [00:23:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1398) quickly, but inspect the monitor gradients&nbsp; and foreground hardware before judging it.&nbsp;&nbsp;

- [00:23:23](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1403) Fewer sampling steps reduce work, while the visual&nbsp; trade-off depends on the model and the particular&nbsp;&nbsp;

- [00:23:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1410) image. Open the result to inspect those details.&nbsp; The monitor colors are less cleanly formed,&nbsp;&nbsp;

- [00:23:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1416) and the foreground hardware looks fragmented. A&nbsp; fast completed job is useful only if its image&nbsp;&nbsp;

- [00:23:43](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1423) is good enough for your purpose. Choose Open&nbsp; Image and examine the monitor edges and the&nbsp;&nbsp;

- [00:23:49](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1429) hardware on the desk. This is our 2-step result.&nbsp; Keep these details in mind while we increase the&nbsp;&nbsp;

- [00:23:56](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1436) sampling effort without changing the other inputs.&nbsp; Return to the graph and set steps to 4. The same&nbsp;&nbsp;

- [00:24:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1444) seed keeps this comparison anchored to the same&nbsp; starting noise. Run it again, then inspect whether&nbsp;&nbsp;

- [00:24:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1451) the extra sampling work improves the details we&nbsp; just identified. The 4-step result has cleaner&nbsp;&nbsp;

- [00:24:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1458) monitor edges and a distinct graphics card in&nbsp; the foreground. Open this image for comparison.&nbsp;&nbsp;

- [00:24:25](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1465) In this particular example, the card is separated&nbsp; more clearly than in our 8-step baseline. Choose&nbsp;&nbsp;

- [00:24:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1474) Open Image and look at the 3 fans on the graphics&nbsp; card. The object is visibly separate here.&nbsp;&nbsp;

- [00:24:41](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1481) More steps do not guarantee that every requested&nbsp; relationship improves monotonically, even with&nbsp;&nbsp;

- [00:24:48](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1488) the same model and seed. Return to the graph&nbsp; and restore 8 steps. Run the reference recipe&nbsp;&nbsp;

- [00:24:54](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1494) again to complete the comparison. We retain all&nbsp; 3 outputs and their settings, so the choice can&nbsp;&nbsp;

- [00:25:00](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1500) be based on actual detail and generation cost. The&nbsp; reference image returns, including its foreground&nbsp;&nbsp;

- [00:25:07](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1507) object fusion. 8 steps remains the recipe used&nbsp; by this working template. Our small comparison&nbsp;&nbsp;

- [00:25:14](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1514) shows why a recommended starting point still&nbsp; needs inspection against the image you actually&nbsp;&nbsp;

- [00:25:20](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1520) want. Now change guidance from 1 to 3 and keep&nbsp; the other inputs fixed. Guidance changes how&nbsp;&nbsp;

- [00:25:28](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1528) conditioning influences sampling. The useful&nbsp; range depends on the model, and this distilled&nbsp;&nbsp;

- [00:25:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1536) Turbo workflow begins at 1. Run at guidance 3 and&nbsp; inspect the result. The colors become stronger,&nbsp;&nbsp;

- [00:25:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1544) while the scene loses some natural detail. Higher&nbsp; guidance is not an automatic quality improvement,&nbsp;&nbsp;

- [00:25:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1550) particularly when it moves away from&nbsp; this model-specific recipe. Open this&nbsp;&nbsp;

- [00:25:56](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1556) output to compare the monitor and desk with the&nbsp; baseline. The stronger colors are easy to notice,&nbsp;&nbsp;

- [00:26:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1563) but also check whether the requested objects&nbsp; remain present and whether their shapes still make&nbsp;&nbsp;

- [00:26:10](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1570) sense. Choose Open Image and inspect the keyboard&nbsp; and bright monitor. The separate graphics card is&nbsp;&nbsp;

- [00:26:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1578) missing from this result. A stronger response in&nbsp; 1 visible feature does not mean the whole prompt&nbsp;&nbsp;

- [00:26:25](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1585) was followed more accurately. Return to the graph,&nbsp; set guidance to 7, and run the same prompt again.&nbsp;&nbsp;

- [00:26:33](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1593) This deliberately extends the comparison beyond&nbsp; the template setting. Keep watching the actual&nbsp;&nbsp;

- [00:26:38](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1598) image instead of treating the guidance value&nbsp; as a quality score. The image is now heavily&nbsp;&nbsp;

- [00:26:44](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1604) clipped and fragmented, with intense colors and&nbsp; damaged shapes. Open it to see the difference&nbsp;&nbsp;

- [00:26:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1610) clearly. This setting has degraded our result,&nbsp; despite using a numerically larger guidance value.&nbsp;&nbsp;

- [00:26:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1618) Choose Open Image and inspect how much structure&nbsp; has been lost. Bright areas are clipped and the&nbsp;&nbsp;

- [00:27:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1624) hardware shapes have broken apart. For this model&nbsp; and workflow, we will return to guidance 1 before&nbsp;&nbsp;

- [00:27:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1631) continuing. Return to the graph and restore&nbsp; guidance 1. These results describe this Turbo&nbsp;&nbsp;

- [00:27:19](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1639) recipe, not a universal rule for every distilled&nbsp; model. Use each model documentation and working&nbsp;&nbsp;

- [00:27:26](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1646) example as the starting point for its own tests.&nbsp; Add another CLIP Text Encode node below the&nbsp;&nbsp;

- [00:27:36](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1656) decoder loader. This gives us a place to write&nbsp; real negative text. We will connect it to the&nbsp;&nbsp;

- [00:27:42](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1662) same text encoder as our positive prompt. Connect&nbsp; the yellow encoder output to this new prompt node.&nbsp;&nbsp;

- [00:27:50](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1670) Both text fields now use the same encoder. Their&nbsp; conditioning outputs will have different roles&nbsp;&nbsp;

- [00:27:56](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1676) because of the sampler inputs we connect them to.&nbsp; Enter blurry, low quality, distorted shapes, and&nbsp;&nbsp;

- [00:28:04](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1684) oversaturated colors as the negative text. These&nbsp; are terms we want to test against the result.&nbsp;&nbsp;

- [00:28:10](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1690) Leave the original positive prompt unchanged for&nbsp; this comparison. Connect this conditioning output&nbsp;&nbsp;

- [00:28:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1698) to the sampler negative input, replacing the Zero&nbsp; Out connection. Keep guidance at 1. We are testing&nbsp;&nbsp;

- [00:28:25](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1705) whether changing the negative branch affects the&nbsp; image under this exact recipe. Run the graph with&nbsp;&nbsp;

- [00:28:32](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1712) the real negative text connected. The positive&nbsp; prompt, seed, dimensions, and sampling recipe are&nbsp;&nbsp;

- [00:28:39](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1719) still fixed. We can therefore compare this output&nbsp; directly with the reference generated under those&nbsp;&nbsp;

- [00:28:45](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1725) same conditions. The result matches the reference&nbsp; image, and the saved pixel comparison confirms&nbsp;&nbsp;

- [00:28:51](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1731) it. In this sampler configuration, guidance 1&nbsp; skips the negative prediction. Changing those&nbsp;&nbsp;

- [00:28:57](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1737) negative words therefore has no effect on these&nbsp; output pixels. Reconnect Zero Out to the negative&nbsp;&nbsp;

- [00:29:05](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1745) input to restore the original graph. The text&nbsp; test helped explain why this working recipe&nbsp;&nbsp;

- [00:29:11](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1751) uses that branch. Other models and guidance&nbsp; configurations can use negative conditioning&nbsp;&nbsp;

- [00:29:17](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1757) differently. Suppose you change the seed and the&nbsp; prompt together, and the next image looks better.&nbsp;&nbsp;

- [00:29:24](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1764) Which change caused the improvement? Pause here&nbsp; and decide what this comparison can actually tell&nbsp;&nbsp;

- [00:29:30](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1770) you before continuing. You know that the combined&nbsp; change produced a result you prefer. You cannot&nbsp;&nbsp;

- [00:29:42](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1782) identify which change caused it. Hold&nbsp; the seed fixed to test the prompt,&nbsp;&nbsp;

- [00:29:48](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1788) or hold the prompt fixed to compare starting&nbsp; noise. Our earlier comparisons used this method:&nbsp;&nbsp;

- [00:29:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1795) lighting changed with the seed fixed, then seeds&nbsp; changed with the prompt fixed. Keep each output&nbsp;&nbsp;

- [00:30:01](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1801) beside its actual settings so that a visual&nbsp; difference has a traceable cause. The same&nbsp;&nbsp;

- [00:30:08](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1808) care applies to the graph connections. Socket&nbsp; colors tell us the data type, while the model&nbsp;&nbsp;

- [00:30:14](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1814) family determines the required latent structure.&nbsp; Our 16-channel latent and matching decoder belong&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1820) to this working image pipeline. A matching socket&nbsp; type alone does not prove that 2 model components&nbsp;&nbsp;

- [00:30:27](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1827) are compatible. Use the encoder, latent layout,&nbsp; and decoder specified for the chosen model. This&nbsp;&nbsp;

- [00:30:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1834) working graph records that complete combination&nbsp; for later reuse. Let us recover the workflow from&nbsp;&nbsp;

- [00:30:43](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1843) its saved image. Open the lesson output folder in&nbsp; File Explorer. The original PNG contains the graph&nbsp;&nbsp;

- [00:30:51](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1851) and generation settings, as well as the pixels we&nbsp; inspected. Create a new empty workflow in ComfyUI,&nbsp;&nbsp;

- [00:30:59](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1859) leaving the completed graph available in its own&nbsp; tab. We will load the saved image into this empty&nbsp;&nbsp;

- [00:31:05](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1865) workspace so the recovered nodes and connections&nbsp; are easy to recognize. Drag the original reference&nbsp;&nbsp;

- [00:31:13](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1873) image from Explorer onto the empty ComfyUI canvas.&nbsp; The embedded workflow restores the nodes and&nbsp;&nbsp;

- [00:31:20](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1880) their settings. This works because we kept the&nbsp; original file with its workflow metadata intact.&nbsp;&nbsp;

- [00:31:28](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1888) Inspect the restored prompt, seed, and model&nbsp; selections. They match the reference we saved.&nbsp;&nbsp;

- [00:31:34](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1894) The image carries the workflow description,&nbsp; but it does not contain the model weights;&nbsp;&nbsp;

- [00:31:40](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1900) those files must still be installed. Open&nbsp; the ComfyUI menu and its File submenu. We&nbsp;&nbsp;

- [00:31:47](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1907) will export the restored graph as a JSON file.&nbsp; This preserves an editable document that can&nbsp;&nbsp;

- [00:31:55](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1915) travel independently of the image metadata. Choose&nbsp; Export to create the ordinary workflow file. This&nbsp;&nbsp;

- [00:32:03](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1923) format preserves the visible nodes, their layout,&nbsp; connections, and widget values. It is the version&nbsp;&nbsp;

- [00:32:10](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1930) another ComfyUI user can open to inspect and edit&nbsp; the graph. Give the file a recognizable name,&nbsp;&nbsp;

- [00:32:18](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1938) then confirm the export. The browser downloads&nbsp; the workflow as a separate document. Keep this&nbsp;&nbsp;

- [00:32:24](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1944) original file with the reference image so you can&nbsp; reopen the graph later. Open the exported file in&nbsp;&nbsp;

- [00:32:33](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1953) a text editor. The document records node types,&nbsp; connections, and widget values. You do not need&nbsp;&nbsp;

- [00:32:39](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1959) to edit these fields by hand to use the workflow,&nbsp; but they make its configuration inspectable. Keep&nbsp;&nbsp;

- [00:32:46](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1966) the workflow, original output, and matching model&nbsp; links together. Image services may remove embedded&nbsp;&nbsp;

- [00:32:52](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1972) metadata when they process uploads. The separate&nbsp; workflow file gives the next person another way to&nbsp;&nbsp;

- [00:32:58](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1978) reopen the demonstrated setup. We have built the&nbsp; image pipeline from individual nodes and followed&nbsp;&nbsp;

- [00:33:06](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1986) it from text to saved pixels. The prompt becomes&nbsp; conditioning, the sampler produces a latent,&nbsp;&nbsp;

- [00:33:13](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=1993) and the decoder turns that latent into the image.&nbsp; You can now change 1 input, inspect its effect,&nbsp;&nbsp;

- [00:33:20](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=2000) and keep a reproducible workflow with the result.&nbsp; The demonstrated files and chapter links are in&nbsp;&nbsp;

- [00:33:27](https://www.youtube.com/watch?v=T2_z7ZaffyI&t=2007) the description. In the next lecture, we will&nbsp; develop these image-generation choices further.
