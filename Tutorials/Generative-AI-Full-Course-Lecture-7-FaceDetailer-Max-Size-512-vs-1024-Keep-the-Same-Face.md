# Generative AI Full Course - Lecture 7: FaceDetailer Max Size 512 vs 1024 - Keep the Same Face

## Full tutorial link > https://www.youtube.com/watch?v=mZ37pzoRrsI

[![Generative AI Full Course - Lecture 7: FaceDetailer Max Size 512 vs 1024 - Keep the Same Face](https://i.ytimg.com/vi/mZ37pzoRrsI/maxresdefault.jpg)](https://www.youtube.com/watch?v=mZ37pzoRrsI "Generative AI Full Course - Lecture 7: FaceDetailer Max Size 512 vs 1024 - Keep the Same Face")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-7-FaceDetailer-Max-Size-512-vs-1024-Keep-the-Same-Face.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-7-FaceDetailer-Max-Size-512-vs-1024-Keep-the-Same-Face.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Turn a good AI generation into a file you can deliver. In ComfyUI, take one 1024 px image to 4K with Lanczos, Real-ESRGAN, tiled diffusion and SeedVR2, repair faces and colour drift, colorize a 1961 NASA photo and measure what changed, export a 16-bit print master to a written specification and check every file with ImageMagick and ExifTool.

🔗 Links:

Windows AI requirements guide: [ [https://www.patreon.com/posts/111553210](https://www.patreon.com/posts/111553210) ]

📦 Full course resource repository: [ [https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall](https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall) ]

📺 Full course playlist: [ [https://www.youtube.com/playlist?list=PLUMEJUep1hiI](https://www.youtube.com/playlist?list=PLUMEJUep1hiI) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

🎯 Learn how to update ComfyUI and start it with a course launcher, build a Lanczos resize, a Real-ESRGAN x4 route and a tiled diffusion pass with the core tile list nodes, run SeedVR2 from ComfyUI's official template, and compare all four at the same zoom: preserve or invent? Then save one latent and decode it with VAE Decode and VAE Decode (Tiled) while watching GPU memory, install ImageMagick and ExifTool, fix a small face with FaceDetailer, repair a face with Qwen-Image 2.1 crop and stitch plus Transfer Color, colorize a photo and keep its original luminance, write a destination specification, export a 16-bit sRGB PNG with Save Image Advanced, read the prompt and workflow hidden in a PNG, switch to a --disable-metadata client launcher and run the full restore, detail, colour match, grain and save chain.

📊 Measured on camera: Real-ESRGAN x4 turned the label 5,862 into 5,002 (1,893 into 1,003 and 2,581 into 2,681) on a 640 × 400 chart, while ImageMagick's -filter Lanczos -resize 400% kept 5,862. Decoding the same latent of a 2048 × 2048 Z-Image Turbo image on an RTX 5090, nvidia-smi showed the whole GPU's used memory, 1,509 to 1,637 MiB at rest, peaking at 12,261 MiB with VAE Decode (Prompt executed in 1.39 seconds, VAE load included) and at 3,338 MiB with VAE Decode (Tiled), 512 px tiles with 64 px overlap (Prompt executed in 2.75 seconds). FaceDetailer sampled the explorer's 192 × 270 face crop at 728 × 1024 with its default sizes and at 364 × 512 with max size 512. ImageMagick's RMSE against the black-and-white original: 0.00993996 for the colorized photo recombined with its original luminance, 0.0925738 for the regenerated image. ExifTool read the first print master as 4096x4096, 16-bit, RGB with Alpha, the second as RGB after Split Image with Alpha, and the delivery as 2688x1536, 8-bit RGB with no Prompt or Workflow.

✅ Before you deliver: write the destination first (pixel size, colour space, bit depth, alpha, metadata), set Convert Image Color Space and the saver's input colour space to the same value, read every number and letter at full size, label colorized photographs as colorized, and keep the recipe JSON beside the files when the delivered image carries no workflow.

🧩 Z-Image Turbo, Real-ESRGAN x4plus, SeedVR2 3B INT8, VAE Decode (Tiled), Impact Pack FaceDetailer, Qwen-Image 2.1, Inpaint Crop and Stitch, Transfer Color, Convert Image Color Space, Save Image Advanced, ImageMagick 7.1.1 and ExifTool 13.59.

Use the chapters to jump to each route, comparison, repair and delivery check.

⏱️ Chapters:

[00:00:00](https://youtu.be/mZ37pzoRrsI?t=0) Sharp but wrong: what this lecture fixes

[00:01:07](https://youtu.be/mZ37pzoRrsI?t=67) Update ComfyUI and start it with the course launcher

[00:02:52](https://youtu.be/mZ37pzoRrsI?t=172) Generate a 1024 pixel test image with Z-Image Turbo

[00:03:55](https://youtu.be/mZ37pzoRrsI?t=235) Lanczos resize: the honest 4K baseline

[00:05:16](https://youtu.be/mZ37pzoRrsI?t=316) GAN upscaler: download and run Real-ESRGAN 4x

[00:07:28](https://youtu.be/mZ37pzoRrsI?t=448) Tiled diffusion with core tile list nodes

[00:10:46](https://youtu.be/mZ37pzoRrsI?t=646) SeedVR2 one-step restoration from the official template

[00:13:58](https://youtu.be/mZ37pzoRrsI?t=838) Compare four routes: preserve or invent?

[00:15:16](https://youtu.be/mZ37pzoRrsI?t=916) Tiled VAE decode: same latent, lower memory

[00:18:07](https://youtu.be/mZ37pzoRrsI?t=1087) Check ImageMagick, install exiftool, add it to PATH

[00:21:05](https://youtu.be/mZ37pzoRrsI?t=1265) FaceDetailer: why the working size matters

[00:23:52](https://youtu.be/mZ37pzoRrsI?t=1432) Qwen face repair and Transfer Color drift fix

[00:26:43](https://youtu.be/mZ37pzoRrsI?t=1603) Colorize a 1961 NASA photo and check what changed

[00:29:54](https://youtu.be/mZ37pzoRrsI?t=1794) Destination spec, color space and 16-bit export

[00:33:31](https://youtu.be/mZ37pzoRrsI?t=2011) What the file tells a stranger: metadata and the client launcher

[00:35:07](https://youtu.be/mZ37pzoRrsI?t=2107) The chart test: AI upscaler vs ImageMagick Lanczos

[00:36:40](https://youtu.be/mZ37pzoRrsI?t=2200) The complete delivery chain and final verification

[00:38:39](https://youtu.be/mZ37pzoRrsI?t=2319) Recap and next lecture

Music: Cali by ItsWatR, TVARI - Tokyo Cafe by TVARI (Pixabay Content License); Relaxation 04 by Lily J, Infinity by Arulo, Vastness by Andrew Ev, Smooth Jazz by Francisco Alvear (Mixkit Stock Music Free License); Electro Beat Bgm Ver. 2 by Ncone (CC0 1.0).

Materials include the course notes with every prompt and command, both launchers, the course workflows and images, the recorded graphs and the original results. Download model weights separately.

💬 Ask in the comments or Discord. Support SECourses on Patreon for more guides and resources.

#ComfyUI #AIUpscaling #SeedVR2



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=8) Greetings everyone. Today I am going to show&nbsp; you how to turn a good generation into a file&nbsp;&nbsp;

- [00:00:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=13) you can deliver: enlargement, restoration, face&nbsp; detail, colour, export and the checks that catch&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=20) silent mistakes. Look at this chart after an AI&nbsp; upscaler enlarged it 4 times. It looks sharper,&nbsp;&nbsp;

- [00:00:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=27) yet 5,862 now reads 5,002. Sharp and wrong is the&nbsp; most dangerous result in this lecture. Here is the&nbsp;&nbsp;

- [00:00:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=37) same watch dial enlarged by 4 different methods.&nbsp; Each method decided something different about&nbsp;&nbsp;

- [00:00:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=43) those tiny numerals. Choosing between preserving&nbsp; the original and inventing plausible detail is the&nbsp;&nbsp;

- [00:00:50](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=50) decision you will practise today. Check out the&nbsp; tutorial description to see the chapters. We start&nbsp;&nbsp;

- [00:00:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=56) with the familiar update routine, then build every&nbsp; comparison in ComfyUI, install 2 free command line&nbsp;&nbsp;

- [00:01:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=63) tools, and finish with a complete delivery chain.&nbsp; First, the update routine from Lecture 2. Open the&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=69) ComfyUI folder, type cmd in its address bar and&nbsp; press Enter: a Command Prompt opens right in this&nbsp;&nbsp;

- [00:01:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=75) folder, ready for our commands. Now activate the&nbsp; environment of this installation, so everything we&nbsp;&nbsp;

- [00:01:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=82) install from here stays in this ComfyUI copy. Its&nbsp; name then appears in brackets at the start of the&nbsp;&nbsp;

- [00:01:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=88) prompt, which shows that it is active. Pull the&nbsp; latest code, then install its requirements in the&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=96) same environment. Keep the output visible until&nbsp; the prompt returns. If Git reports a conflict,&nbsp;&nbsp;

- [00:01:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=102) solve that conflict first and run the update&nbsp; again. The requirements step installs or updates&nbsp;&nbsp;

- [00:01:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=108) the Python packages the new code expects. When it&nbsp; ends without red error lines, the update is done.&nbsp;&nbsp;

- [00:01:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=114) Pip compares every requirement with the installed&nbsp; packages; most are already satisfied, so it only&nbsp;&nbsp;

- [00:02:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=121) fetches and replaces the packages that are new.&nbsp; This lecture uses 2 small launch files from the&nbsp;&nbsp;

- [00:02:10](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=130) course download. Close the prompt, open the course&nbsp; folder and then its launchers folder, and select&nbsp;&nbsp;

- [00:02:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=136) both files there. Copy them, go back up, and&nbsp; paste them into the ComfyUI folder. One starts&nbsp;&nbsp;

- [00:02:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=142) ComfyUI normally; the other, named client, adds&nbsp; a privacy flag we will need later in the lecture.&nbsp;&nbsp;

- [00:02:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=152) double-click the normal launch file. Its console&nbsp; window shows the server starting with the updated&nbsp;&nbsp;

- [00:02:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=157) code, and the browser page at port 8189 loads&nbsp; the new interface. Refresh the open page once,&nbsp;&nbsp;

- [00:02:45](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=165) so the browser loads the updated interface files&nbsp; too. Our test image is 1 fresh generation from&nbsp;&nbsp;

- [00:02:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=174) the Z-Image Turbo workflow we built in Lecture&nbsp; 2. Open it from the course files, then paste the&nbsp;&nbsp;

- [00:03:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=180) watchmaker prompt from the course prompt file into&nbsp; its prompt box. Replace the old prompt in full.&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=189) The prompt asks for small gears, a loupe, a pocket&nbsp; watch and a grey beard. Those details are exactly&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=195) where enlargement methods disagree, so they reveal&nbsp; each method clearly. Keep the size at 1024 by 1024&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=203) and set the seed to 2026, so you can reproduce&nbsp; the same picture. Then run the workflow. Open the&nbsp;&nbsp;

- [00:03:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=212) result. At this size the face, the gears and the&nbsp; watch dial look convincing. Zoom into the dial,&nbsp;&nbsp;

- [00:03:38](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=218) though, and the numerals are only a few blurry&nbsp; pixels. Every route in this chapter starts from&nbsp;&nbsp;

- [00:03:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=227) this exact image, so any difference you see&nbsp; comes from the enlargement method, not from a&nbsp;&nbsp;

- [00:03:52](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=232) new generation. The first route is a plain resize.&nbsp; Add an Upscale Image node; a double click on an&nbsp;&nbsp;

- [00:04:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=240) empty part of the canvas opens the search, where&nbsp; you type its name. Then connect the decoded image&nbsp;&nbsp;

- [00:04:05](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=245) to it, so the resize receives our picture. Set&nbsp; its method to Lanczos, a filter that weighs many&nbsp;&nbsp;

- [00:04:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=253) neighbouring pixels for each new one. Then type&nbsp; 4096 for the width and the same for the height.&nbsp;&nbsp;

- [00:04:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=260) Nothing is learned here; this is pure resampling.&nbsp; Choose the method by the job: area for shrinking,&nbsp;&nbsp;

- [00:04:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=267) Lanczos for enlarging, and nearest exact for pixel&nbsp; art. Now add a Save Image node, so this route&nbsp;&nbsp;

- [00:04:33](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=273) writes its own file, and wire the resized image&nbsp; into it, exactly as we did before. Its prefix&nbsp;&nbsp;

- [00:04:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=282) decides the file name. Type a prefix that saves&nbsp; this file as lanczos inside our Lecture07 folder,&nbsp;&nbsp;

- [00:04:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=288) so every route keeps its own file name. Save&nbsp; Image shows a test result; run it again. Open&nbsp;&nbsp;

- [00:04:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=295) the 4K result from the Save Image node's menu;&nbsp; once it opens, look at the dial: larger, but soft,&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=301) because a filter cannot invent detail. This soft&nbsp; picture is our honest baseline. Whatever the&nbsp;&nbsp;

- [00:05:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=308) learned routes add on top of it is invented by a&nbsp; model, so we will compare every route against this&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=314) one. The second route is a GAN upscaler. Comfy&nbsp; Org hosts Real-ESRGAN as a safetensors file.&nbsp;&nbsp;

- [00:05:23](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=323) Open its download page and download the x4plus&nbsp; model; it is only about 67 MB. At that size it&nbsp;&nbsp;

- [00:05:30](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=330) arrives in seconds, and the download bubble shows&nbsp; it as done. Show the file in its folder and cut&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=336) it. Go up 1 level, open the ComfyUI folder, then&nbsp; models, then the folder for upscale models. Moving&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=342) the file, rather than copying it, leaves no second&nbsp; copy behind in the downloads folder. Click inside&nbsp;&nbsp;

- [00:05:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=349) the file list and paste the file. Upscale models&nbsp; always live in this folder of their own, apart&nbsp;&nbsp;

- [00:05:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=355) from the diffusion models we load elsewhere. Back&nbsp; in ComfyUI, close the download tab and press R to&nbsp;&nbsp;

- [00:06:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=361) refresh the model lists. Then add a Load Upscale&nbsp; Model node. Our new file is the only 1 in that&nbsp;&nbsp;

- [00:06:07](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=367) folder, so the loader shows it already. Now add an&nbsp; Upscale Image using Model node. It takes 2 inputs,&nbsp;&nbsp;

- [00:06:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=374) a model and an image: first connect the model from&nbsp; the loader, then connect our decoded image from&nbsp;&nbsp;

- [00:06:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=380) the generation. The loader only reads the model&nbsp; file from disk; the upscale node is where the&nbsp;&nbsp;

- [00:06:25](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=385) network actually runs over our picture. Its image&nbsp; input takes the decoded picture. There is no scale&nbsp;&nbsp;

- [00:06:33](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=393) setting on this node. The 4 times factor is baked&nbsp; into the model file, so a 4 times model always&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=399) returns 4 times the pixels, here 4096. Add another&nbsp; Save Image node. Each route gets its own saver, so&nbsp;&nbsp;

- [00:06:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=407) we can open and compare every result later, file&nbsp; by file. Then wire the output of the upscaler into&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=413) this saver. Its prefix names the file gan, inside&nbsp; the same Lecture07 folder. Run the workflow;&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=420) it finishes in a few seconds, including loading&nbsp; the model. Open the result from the Save Image&nbsp;&nbsp;

- [00:07:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=428) node's menu. Once it opens at full size: crisp&nbsp; edges, smoother skin, and sharp new dial marks.&nbsp;&nbsp;

- [00:07:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=435) A GAN predicts pixels in 1 pass. It is fast and&nbsp; repeatable, yet the sharpness it adds is learned&nbsp;&nbsp;

- [00:07:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=442) texture: those crisp dial marks are a guess about&nbsp; numerals that were never readable. The third route&nbsp;&nbsp;

- [00:07:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=448) regenerates detail with the diffusion model&nbsp; itself. A 4K image is far too large to sample&nbsp;&nbsp;

- [00:07:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=454) at once, so we cut the enlarged picture into&nbsp; overlapping tiles and refine each tile. Add&nbsp;&nbsp;

- [00:07:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=461) a Split Image into List of Tiles node, which cuts&nbsp; 1 picture into many pictures, and connect the GAN&nbsp;&nbsp;

- [00:07:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=467) output to this splitter. Keep the tiles at 1024&nbsp; pixels, with an overlap of 128 pixels, so every&nbsp;&nbsp;

- [00:07:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=476) pair of neighbouring tiles shares a border. The&nbsp; output is a list, not a batch. A batch is a single&nbsp;&nbsp;

- [00:08:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=483) block of equal images; a list passes separate&nbsp; items along, one after another. Every node after&nbsp;&nbsp;

- [00:08:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=489) the split now runs once for each tile. Add a VAE&nbsp; Encode node, so the tiles become latents again.&nbsp;&nbsp;

- [00:08:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=496) Connect the tiles from the split to the pixels&nbsp; input of the encoder. Then connect our VAE loader&nbsp;&nbsp;

- [00:08:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=502) to its VAE input as well, so the encoding matches&nbsp; the model that will refine every tile. Now copy&nbsp;&nbsp;

- [00:08:30](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=510) our KSampler and paste it with its connections,&nbsp; using Ctrl+Shift+V. The copy keeps our model&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=515) and both prompt inputs. Then connect the encoded&nbsp; tiles as its latent image. Set its denoise to 0.3,&nbsp;&nbsp;

- [00:08:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=523) so each tile keeps its content and only refines&nbsp; the texture. A full denoise of 1 would paint&nbsp;&nbsp;

- [00:08:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=528) a new picture in every tile. Add a VAE Decode&nbsp; node, which turns the refined latent tiles back&nbsp;&nbsp;

- [00:08:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=535) into pictures. Connect the sampler output to its&nbsp; samples input, and then the same VAE loader once&nbsp;&nbsp;

- [00:09:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=542) more. Every refined tile comes back as a picture.&nbsp; Then add Merge List of Tiles to Image, the node&nbsp;&nbsp;

- [00:09:11](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=551) that puts the tiles back together, and connect the&nbsp; decoded tiles to it. The merge blends neighbouring&nbsp;&nbsp;

- [00:09:17](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=557) tiles across their shared border. That hides the&nbsp; seams. Type 4096 for the final width and the final&nbsp;&nbsp;

- [00:09:26](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=566) height, and keep the same overlap of 128 pixels,&nbsp; so the borders line up exactly. Finish the route&nbsp;&nbsp;

- [00:09:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=575) with 1 more Save Image node, so the tiled result&nbsp; lands in its own file. Wire the merged image into&nbsp;&nbsp;

- [00:09:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=581) the new saver. Then type a prefix that names this&nbsp; file tiles, again inside the Lecture07 folder.&nbsp;&nbsp;

- [00:09:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=588) Each route keeps its own name, so the 4 results&nbsp; never overwrite each other. Now run the workflow.&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=596) 25 tiles are refined one by one, so this route&nbsp; takes about a minute on this card. The console&nbsp;&nbsp;

- [00:10:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=602) counts the 8 sampling steps of every tile as it&nbsp; goes. That is 200 steps in all. When the counter&nbsp;&nbsp;

- [00:10:11](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=611) finishes, open the merged result and look closely&nbsp; at the face and the dial. Open the merged result&nbsp;&nbsp;

- [00:10:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=618) from the node's menu, and once it opens, look at&nbsp; it at full size: the beard gains fine new hairs,&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=624) the skin looks cleaner, and the dial gets new&nbsp; numerals. 2 settings matter most here. Higher&nbsp;&nbsp;

- [00:10:31](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=631) denoise invents more and can create seams between&nbsp; tiles, while a larger overlap hides seams at the&nbsp;&nbsp;

- [00:10:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=637) cost of extra tiles. Ultimate SD Upscale packages&nbsp; the same idea in a single custom node with seam&nbsp;&nbsp;

- [00:10:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=643) fixing. Route number 4 is SeedVR2, a 1 step&nbsp; diffusion restoration model that ComfyUI now&nbsp;&nbsp;

- [00:10:51](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=651) runs with core nodes. Open ComfyUI's own image&nbsp; upscale template for it from the course files;&nbsp;&nbsp;

- [00:10:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=656) it uses the 3-billion-parameter INT8 model.&nbsp; ComfyUI reports 3 issues. Open the details:&nbsp;&nbsp;

- [00:11:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=663) 2 models are missing, the 3-billion-parameter&nbsp; diffusion model of about 3.2 GB, and its own VAE.&nbsp;&nbsp;

- [00:11:10](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=670) Comfy Org hosts both files on Hugging Face. Open&nbsp; the page of the VAE file and download it, then do&nbsp;&nbsp;

- [00:11:17](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=677) the same for the diffusion model. The large file&nbsp; needs a few minutes to arrive, while the VAE file&nbsp;&nbsp;

- [00:11:23](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=683) is only a fraction of its size. The diffusion&nbsp; model is the large file of the 2, a little over&nbsp;&nbsp;

- [00:11:30](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=690) 3 gigabytes in this int 8 version. It is the model&nbsp; that restores the picture. The downloads list&nbsp;&nbsp;

- [00:11:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=696) in the browser toolbar shows the progress; once&nbsp; both files read complete, they are ready to move.&nbsp;&nbsp;

- [00:11:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=702) Let both finish completely; a partly downloaded&nbsp; model is of no use. Show the downloads in their&nbsp;&nbsp;

- [00:11:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=709) folder. Cut the larger file, go up to the ComfyUI&nbsp; folder, and open models and then diffusion models,&nbsp;&nbsp;

- [00:11:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=715) where every diffusion model belongs. The model&nbsp; loader lists only the files inside this folder.&nbsp;&nbsp;

- [00:12:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=722) Click into the file list and paste it there.&nbsp; Then go back up to the course folders and open&nbsp;&nbsp;

- [00:12:07](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=727) the download folder again, where the smaller VAE&nbsp; file is still waiting for us. There it is. Select&nbsp;&nbsp;

- [00:12:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=736) it and cut it. Go up 1 level, open the ComfyUI&nbsp; folder, then models, and then the VAE folder,&nbsp;&nbsp;

- [00:12:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=741) which holds every VAE file of this installation.&nbsp; Click into the list and paste it there. Like every&nbsp;&nbsp;

- [00:12:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=748) first download, this happens only once; later&nbsp; lectures reuse these files. Back in ComfyUI, close&nbsp;&nbsp;

- [00:12:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=755) the download tab and press R to refresh the model&nbsp; lists. The template wraps its nodes in a subgraph.&nbsp;&nbsp;

- [00:12:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=761) Open it: SeedVR2 resizes the input with Lanczos,&nbsp; encodes it, samples 1 single step and decodes it&nbsp;&nbsp;

- [00:12:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=767) again. Notice that the encode and decode nodes&nbsp; are already the tiled versions. That is tiled VAE,&nbsp;&nbsp;

- [00:12:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=775) a memory saving for the conversion steps, and&nbsp; we will measure it later in this lecture. Back&nbsp;&nbsp;

- [00:13:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=782) outside, the Load Image still names the template's&nbsp; example picture. Bring in our watchmaker through&nbsp;&nbsp;

- [00:13:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=788) the clipspace: in the first tab, right-click its&nbsp; result and choose Copy (Clipspace). Return to&nbsp;&nbsp;

- [00:13:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=796) the template tab, then right-click Load Image and&nbsp; choose Paste (Clipspace); the node now shows our&nbsp;&nbsp;

- [00:13:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=801) watchmaker. Keep the multiplier at 4, which makes&nbsp; the result 4 times as wide as the source, and run&nbsp;&nbsp;

- [00:13:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=808) the workflow. Even at 4K the whole restoration&nbsp; takes only seconds on an RTX 5090, including&nbsp;&nbsp;

- [00:13:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=817) the time it needs to load the new model the first&nbsp; time. Open the result from the Save Image node's&nbsp;&nbsp;

- [00:13:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=823) menu to see it at full size: a sharper photograph&nbsp; rather than a painting. Click the dial to zoom in:&nbsp;&nbsp;

- [00:13:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=829) crisp numerals, and even an invented brand name&nbsp; above the hands. That brand was never there.&nbsp;&nbsp;

- [00:13:58](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=838) Now put the 4 results side by side at the same&nbsp; scale: the Lanczos baseline, the GAN upscaler,&nbsp;&nbsp;

- [00:14:04](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=844) the tiled diffusion pass and SeedVR2. At full&nbsp; view they look surprisingly similar. Zoom all&nbsp;&nbsp;

- [00:14:10](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=850) 4 into the same part of the dial. Lanczos keeps&nbsp; the blur that was really there. The 3 learned&nbsp;&nbsp;

- [00:14:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=856) routes each produce confident numerals,&nbsp; and none of them agrees with the others.&nbsp;&nbsp;

- [00:14:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=862) Now the face at the same zoom. The GAN result&nbsp; flattens the skin into smooth, waxy patches;&nbsp;&nbsp;

- [00:14:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=867) the pass with tiles smooths it further but adds&nbsp; fine hairs; and SeedVR2 adds rich wrinkles and&nbsp;&nbsp;

- [00:14:33](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=873) hair while keeping the expression. Pause here and&nbsp; decide. For a client's product photo, which route&nbsp;&nbsp;

- [00:14:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=880) would you deliver? And which one would you choose&nbsp; for a poster where invented detail is welcome? For&nbsp;&nbsp;

- [00:14:46](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=886) a photo that must stay true, deliver the Lanczos&nbsp; baseline or check SeedVR2 very carefully, because&nbsp;&nbsp;

- [00:14:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=893) every invented numeral is a factual change.&nbsp; For artwork, SeedVR2 or the tiled pass give the&nbsp;&nbsp;

- [00:14:59](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=899) richest detail. An aligned slider shows the change&nbsp; best. Sweep between the baseline and SeedVR2 over&nbsp;&nbsp;

- [00:15:06](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=906) the dial and the hands: the shapes stay in place,&nbsp; while texture and lettering appear from nowhere.&nbsp;&nbsp;

- [00:15:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=916) 1 setting deserves its own test: tiled VAE. From&nbsp; the course files, open the first small workflow&nbsp;&nbsp;

- [00:15:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=922) and run it. This workflow generates the watchmaker&nbsp; at 2048 pixels, and Save Latent keeps the exact&nbsp;&nbsp;

- [00:15:30](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=930) latent before decoding. Save Latent writes into&nbsp; the output folder, while Load Latent only reads&nbsp;&nbsp;

- [00:15:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=937) from the input folder. So open the ComfyUI folder,&nbsp; then output and latents, where the new latent file&nbsp;&nbsp;

- [00:15:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=943) is waiting. It ends in latent. That file holds the&nbsp; compressed picture. Cut the file, go up 2 levels,&nbsp;&nbsp;

- [00:15:51](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=951) open the input folder of the same installation,&nbsp; click into the file list and paste it there. Now&nbsp;&nbsp;

- [00:15:57](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=957) Load Latent can find the file. There it is. Back&nbsp; in ComfyUI, press R so the new file is listed,&nbsp;&nbsp;

- [00:16:05](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=965) then open the second workflow. Both branches&nbsp; load the same latent and the same VAE,&nbsp;&nbsp;

- [00:16:10](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=970) and the tiled branch is bypassed for now. 1 branch&nbsp; uses the ordinary decode node. The other uses VAE&nbsp;&nbsp;

- [00:16:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=978) Decode Tiled, which converts the latent in&nbsp; tiles of 512 pixels, with an overlap of 64&nbsp;&nbsp;

- [00:16:25](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=985) pixels between them. Unload the models first, so&nbsp; the memory starts low: open the menu, then Edit,&nbsp;&nbsp;

- [00:16:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=992) and choose Unload Models. Now the measurement&nbsp; starts from low memory. Start the GPU memory&nbsp;&nbsp;

- [00:16:39](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=999) window from the course files. In Explorer, go&nbsp; up to the course folders, open Lecture07_Files,&nbsp;&nbsp;

- [00:16:45](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1005) and double-click gpu_memory. It prints the used&nbsp; graphics memory 5 times a second, which catches&nbsp;&nbsp;

- [00:16:51](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1011) short peaks. Place the window beside ComfyUI and&nbsp; run the ordinary decode alone. Watch the numbers:&nbsp;&nbsp;

- [00:17:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1021) the used memory jumps close to 12 GB for a&nbsp; moment, and ComfyUI's log reports under 1 and&nbsp;&nbsp;

- [00:17:07](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1027) a half seconds for the whole run. Now bypass that&nbsp; branch, enable the tiled one, and run again. Watch&nbsp;&nbsp;

- [00:17:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1035) the same 2 numbers: memory should barely rise this&nbsp; time, by less than 2 gigabytes, and the run should&nbsp;&nbsp;

- [00:17:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1041) still end within 3 seconds. Compare the 2 pictures&nbsp; with the slider. They look the same side by side,&nbsp;&nbsp;

- [00:17:31](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1051) because the overlap blends neighbouring tiles.&nbsp; On very flat areas, a too small overlap would&nbsp;&nbsp;

- [00:17:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1056) show faint tile borders. Move the slider across&nbsp; the place where 2 tiles meet: the full decode&nbsp;&nbsp;

- [00:17:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1063) and the decode in tiles match there too, so&nbsp; the saving costs nothing visible. Even here,&nbsp;&nbsp;

- [00:17:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1068) the 2 halves match. Now return to the decode&nbsp; workflow. Keep the 2 ideas apart. Tiled VAE splits&nbsp;&nbsp;

- [00:17:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1076) only the conversion between latent and pixels,&nbsp; so it changes memory, not the picture. Tiled&nbsp;&nbsp;

- [00:18:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1081) diffusion splits the sampling itself, and that is&nbsp; where new detail appears. ComfyUI's savers stop at&nbsp;&nbsp;

- [00:18:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1088) the file. 2 free command line tools do the rest of&nbsp; our delivery work: ImageMagick for exact resizing&nbsp;&nbsp;

- [00:18:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1094) and profiles, and ExifTool for reading what a&nbsp; file carries. First, check whether ImageMagick&nbsp;&nbsp;

- [00:18:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1101) is already installed: open a Command Prompt&nbsp; here and type magick -version. If it answers,&nbsp;&nbsp;

- [00:18:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1108) no new installation is needed; the first line&nbsp; names the installed version, and yours may be&nbsp;&nbsp;

- [00:18:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1114) newer. If yours reports that magick is not&nbsp; recognized, download the Windows installer&nbsp;&nbsp;

- [00:18:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1120) from the official ImageMagick website and tick add&nbsp; application directory to your system path on the&nbsp;&nbsp;

- [00:18:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1127) additional tasks page. ExifTool comes as a zip&nbsp; from its official website. Download the Windows&nbsp;&nbsp;

- [00:18:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1134) executable and show it in its folder. Choose&nbsp; the 64 bit Windows zip; the program inside runs&nbsp;&nbsp;

- [00:19:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1140) without any installer. The zip is small. The zip&nbsp; lands in the lesson's download folder, where every&nbsp;&nbsp;

- [00:19:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1148) earlier download of this lecture landed too. Give&nbsp; command line programs a home of their own. Cut the&nbsp;&nbsp;

- [00:19:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1155) zip, go up 1 level and create a new folder next to&nbsp; the course folders, called tools, which will hold&nbsp;&nbsp;

- [00:19:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1161) every command line tool of this course. Open the&nbsp; new tools folder, click into its empty file list&nbsp;&nbsp;

- [00:19:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1168) and paste the zip in there, so the download folder&nbsp; stays clean. Extract it there with Extract All and&nbsp;&nbsp;

- [00:19:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1174) open the extracted folder. The readme tells you&nbsp; which file to use from the command line, so read&nbsp;&nbsp;

- [00:19:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1180) it first. When the extraction finishes, open the&nbsp; folder, select the readme and turn on the preview&nbsp;&nbsp;

- [00:19:46](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1186) pane with Alt and P: its text names the one&nbsp; executable we rename for command line use. Rename&nbsp;&nbsp;

- [00:19:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1194) exiftool(-k).exe to exiftool.exe, and keep its&nbsp; files folder next to it. The k version waits for&nbsp;&nbsp;

- [00:20:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1201) a key press, which is handy for double-clicking&nbsp; but blocks automated use. Now add this folder to&nbsp;&nbsp;

- [00:20:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1208) the PATH variable, just as Lecture 1 did for&nbsp; the video encoder. Copy the folder address,&nbsp;&nbsp;

- [00:20:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1213) search for environment variables in the Start&nbsp; menu, and open the variables of your own account&nbsp;&nbsp;

- [00:20:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1218) on this computer. Press Enter to open them.&nbsp; Select Path, choose Edit, then New, and paste&nbsp;&nbsp;

- [00:20:26](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1226) the folder address. Confirm every window with OK.&nbsp; Only Command Prompt windows opened from now on see&nbsp;&nbsp;

- [00:20:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1232) the new entry. Open a new Command Prompt in the&nbsp; course files folder. A fresh window matters here:&nbsp;&nbsp;

- [00:20:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1240) it reads the Path variable again, including our&nbsp; new tools folder. Type magick -version, then&nbsp;&nbsp;

- [00:20:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1247) exiftool -ver, each exactly, with its single dash.&nbsp; If 1 is not recognized, check the Path entry for a&nbsp;&nbsp;

- [00:20:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1254) typo and open another window. Read each answer as&nbsp; it appears: 2 version numbers, so both are ready&nbsp;&nbsp;

- [00:21:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1260) for the metadata and chart demonstrations. Small&nbsp; faces are where generations break first, because&nbsp;&nbsp;

- [00:21:07](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1267) a tiny face cannot keep its detail. Open the face&nbsp; detailer workflow from the workflows folder of the&nbsp;&nbsp;

- [00:21:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1274) course files. ComfyUI reports 3 issues: 2 nodes&nbsp; come from a missing pack, FaceDetailer and its&nbsp;&nbsp;

- [00:21:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1280) detector loader. Open the details. The missing&nbsp; packs are the Impact Pack and its Subpack, which&nbsp;&nbsp;

- [00:21:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1287) provides the face detector loader. Choose Install&nbsp; All, and wait until both packs report installed.&nbsp;&nbsp;

- [00:21:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1294) The Manager fetches both packs from GitHub for&nbsp; you. Both packs now read installed. Then choose&nbsp;&nbsp;

- [00:21:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1301) Apply Changes. ComfyUI restarts its backend, runs&nbsp; the install scripts and reloads the workflow.&nbsp;&nbsp;

- [00:21:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1307) The Subpack's installer also downloads the face&nbsp; detection model it needs. When the page is back,&nbsp;&nbsp;

- [00:21:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1313) FaceDetailer shows all of its inputs and settings:&nbsp; the installation is done. The detection model sits&nbsp;&nbsp;

- [00:22:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1320) in models/ultralytics/bbox, where the detector&nbsp; loader looks for it: here is face YOLO v 8 m. Then&nbsp;&nbsp;

- [00:22:06](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1326) upload our explorer from Lecture 4. Our explorer&nbsp; portrait is waiting in the course images folder;&nbsp;&nbsp;

- [00:22:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1333) open it, and the Load Image node shows&nbsp; the whole picture. He stands in full body,&nbsp;&nbsp;

- [00:22:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1340) so his face is only about 90 pixels tall.&nbsp; A detailer finds the face, enlarges it,&nbsp;&nbsp;

- [00:22:25](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1345) regenerates it with our Z-Image Turbo model and&nbsp; pastes it back in place. Keep the denoise at 0.4,&nbsp;&nbsp;

- [00:22:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1352) so the new face stays close to the old one, and&nbsp; run it with the default sizes. The console reports&nbsp;&nbsp;

- [00:22:38](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1358) the crop region and the size used for sampling.&nbsp; Find the line that names the sampling size. The&nbsp;&nbsp;

- [00:22:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1367) 90-pixel face and its surroundings were enlarged&nbsp; to 728 × 1024 before sampling, close to the size&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1377) this model was trained for. Open the result&nbsp; and look up close: sharp eyes and natural beard&nbsp;&nbsp;

- [00:23:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1383) texture. We want this quality for every face.&nbsp; Now go back to the workflow. Now lower max size&nbsp;&nbsp;

- [00:23:11](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1391) to 512, leave every other setting as it is, and&nbsp; run it again. The console reads 364 × 512. Open&nbsp;&nbsp;

- [00:23:19](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1399) the new face and remember it: the model drew a&nbsp; harsher, different face. Compare the original, the&nbsp;&nbsp;

- [00:23:29](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1409) 512 result and the 1024 result at 400%. The larger&nbsp; working size keeps his features and identity;&nbsp;&nbsp;

- [00:23:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1417) the small 1 changes the person. Older tutorials&nbsp; say: raise guide size to 1024. Guide size sets the&nbsp;&nbsp;

- [00:23:44](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1424) target face size, but max size caps the whole&nbsp; crop first, so read the console line instead&nbsp;&nbsp;

- [00:23:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1429) of trusting old advice. FaceDetailer cannot drive&nbsp; edit models like Qwen-Image 2.1, because its crop&nbsp;&nbsp;

- [00:23:57](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1437) does not carry their reference image. The working&nbsp; alternative is Lecture 5's crop and stitch route,&nbsp;&nbsp;

- [00:24:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1443) with the edit model working on that crop alone.&nbsp; Open the Qwen face repair workflow from the course&nbsp;&nbsp;

- [00:24:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1449) files. Its Load Image already holds our explorer,&nbsp; so right-click the picture and open it in the mask&nbsp;&nbsp;

- [00:24:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1456) editor, where we paint the region the model&nbsp; may change. Choose the mask pen and raise its&nbsp;&nbsp;

- [00:24:21](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1461) opacity to 1, so the painted mask is solid rather&nbsp; than see-through, then set the brush thickness to&nbsp;&nbsp;

- [00:24:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1467) 40 pixels, wide enough to cover his face in 2&nbsp; strokes. Now paint over the explorer's face,&nbsp;&nbsp;

- [00:24:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1474) from his hair down to his beard, and save the&nbsp; mask. Inpaint Crop cuts out that region with&nbsp;&nbsp;

- [00:24:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1480) some context and enlarges it to 1024 pixels for&nbsp; the model. The instruction asks Qwen to restore&nbsp;&nbsp;

- [00:24:47](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1487) the face with natural detail while keeping the&nbsp; man, his expression and the colours. This model&nbsp;&nbsp;

- [00:24:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1493) also decodes an alpha channel, so Split Image with&nbsp; Alpha keeps only the red, green and blue channels.&nbsp;&nbsp;

- [00:25:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1500) Save Image shows our earlier test result. Run&nbsp; it: Qwen sees the original crop as it repairs the&nbsp;&nbsp;

- [00:25:06](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1506) face, so it can keep its colours, and stitches it&nbsp; back into the picture. Some models shift a face's&nbsp;&nbsp;

- [00:25:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1513) colours, so once we have checked this result,&nbsp; we add a small safeguard against colour drift&nbsp;&nbsp;

- [00:25:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1518) to the workflow as well. Up close, only the face&nbsp; has changed, while the scarf, the light and the&nbsp;&nbsp;

- [00:25:26](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1526) background stay exactly the same. Add Transfer&nbsp; Color between the split and the stitch. Search&nbsp;&nbsp;

- [00:25:32](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1532) for it by name, drop it below the split node, and&nbsp; connect the repaired crop from Split Image with&nbsp;&nbsp;

- [00:25:38](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1538) Alpha as its target image. Connect the original&nbsp; crop from Inpaint Crop as the reference image,&nbsp;&nbsp;

- [00:25:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1549) then send the matched result into the stitch&nbsp; in place of the split, and set the method to&nbsp;&nbsp;

- [00:25:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1554) histogram. Run the workflow again. This time&nbsp; Transfer Color matches the repaired crop to the&nbsp;&nbsp;

- [00:26:04](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1564) original crop before the stitch, so the new patch&nbsp; takes on the colours around it. Sweep the slider&nbsp;&nbsp;

- [00:26:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1574) between the original and the matched repair: the&nbsp; regenerated face blends in, because its colours&nbsp;&nbsp;

- [00:26:20](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1580) are the photograph's own. Colour matching belongs&nbsp; after every inpaint, tile pass or face repair.&nbsp;&nbsp;

- [00:26:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1588) The node offers 3 methods. Reinhard and&nbsp; MKL match colour statistics in Lab space;&nbsp;&nbsp;

- [00:26:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1594) histogram matches the full distribution. For&nbsp; video, the target frame option keeps 1 baseline,&nbsp;&nbsp;

- [00:26:40](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1600) so colour does not drift between frames. Next,&nbsp; colorization. This NASA photograph of the Mercury&nbsp;&nbsp;

- [00:26:46](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1606) 7 astronauts from 1961 is public domain, and it&nbsp; exists in colour. That lets us compare invented&nbsp;&nbsp;

- [00:26:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1613) colours with the recorded ones. Turn it into black&nbsp; and white with 1 command from the course notes:&nbsp;&nbsp;

- [00:26:59](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1619) magick, the file name, -colorspace Gray,&nbsp; and an output name. It makes an old style&nbsp;&nbsp;

- [00:27:05](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1625) photograph with a known answer. Copying the&nbsp; command from the course notes avoids typing&nbsp;&nbsp;

- [00:27:10](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1630) mistakes in long file names and options. Paste&nbsp; it into the console. The colour original stays&nbsp;&nbsp;

- [00:27:17](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1637) untouched beside the new file, so we can always&nbsp; compare our result with the recorded colours.&nbsp;&nbsp;

- [00:27:25](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1645) Open the Qwen edit workflow from Lecture 4 and&nbsp; upload the black and white file. Then copy the&nbsp;&nbsp;

- [00:27:31](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1651) colorization instruction from the course&nbsp; notes into the prompt: natural colours,&nbsp;&nbsp;

- [00:27:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1656) while preserving the composition, faces, text and&nbsp; fine structure. The model only sees grey values,&nbsp;&nbsp;

- [00:27:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1662) so every colour it adds will be an educated guess.&nbsp; It has never seen the colours of this scene.&nbsp;&nbsp;

- [00:27:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1668) An instruction that names what must not change&nbsp; gives the model fewer chances to redraw details&nbsp;&nbsp;

- [00:27:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1674) that matter to us. Paste it into the prompt&nbsp; box. Set the reference resolution to 1536,&nbsp;&nbsp;

- [00:28:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1682) so the model works on more detail, and run it.&nbsp; Qwen needs about 20 seconds to return the colour&nbsp;&nbsp;

- [00:28:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1688) version of the photograph. The queue panel at&nbsp; the top shows the sampler's progress as a running&nbsp;&nbsp;

- [00:28:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1694) percentage. Now compare it with the real colours.&nbsp; 3 of the flight suits were bright orange, 2 life&nbsp;&nbsp;

- [00:28:23](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1703) vests yellow and the ladder yellow. The model&nbsp; painted every suit khaki and the ladder grey,&nbsp;&nbsp;

- [00:28:29](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1709) because those colours are likely. Colorization&nbsp; chooses probable colours, not recorded ones,&nbsp;&nbsp;

- [00:28:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1716) so a colorized historical photograph should always&nbsp; carry a colorized label. Zoom to 600 percent on&nbsp;&nbsp;

- [00:28:44](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1724) the small rescue sign beside the intake. The&nbsp; original reads rescue clearly. The colorized&nbsp;&nbsp;

- [00:28:50](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1730) version redrew the letters into shapes that spell&nbsp; nothing. When structure must stay exact, keep the&nbsp;&nbsp;

- [00:28:58](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1738) original brightness and borrow only the colour.&nbsp; ImageMagick's luminize compose does this: the&nbsp;&nbsp;

- [00:29:04](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1744) generated picture supplies hue and saturation, the&nbsp; original supplies luminance. Run the command from&nbsp;&nbsp;

- [00:29:12](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1752) the notes: it puts the generated colours on the&nbsp; original's brightness and saves a recombined file.&nbsp;&nbsp;

- [00:29:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1758) Then measure the brightness difference against the&nbsp; black and white original, first for the recombined&nbsp;&nbsp;

- [00:29:24](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1764) file, then for the regenerated image. Each command&nbsp; prints a single number, the root mean square&nbsp;&nbsp;

- [00:29:30](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1770) error, where 0 would mean identical brightness.&nbsp; Now copy the second measurement from the notes&nbsp;&nbsp;

- [00:29:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1776) and run it. 0.01 against 0.09: the recombined&nbsp; file is 9 times closer. Look at the rescue sign&nbsp;&nbsp;

- [00:29:45](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1785) once more. With the original brightness kept, the&nbsp; letters read rescue again, now with the generated&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1792) colours around them. Before exporting, write the&nbsp; destination down. For our watchmaker print master:&nbsp;&nbsp;

- [00:29:58](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1798) 4096 pixels on each side, sRGB, 16-bit PNG,&nbsp; no alpha, and no workflow inside the file.&nbsp;&nbsp;

- [00:30:06](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1806) Plain Save Image writes 8-bit PNG with a fixed&nbsp; compression and no choices. Save Image Advanced&nbsp;&nbsp;

- [00:30:12](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1812) is the delivery node: search for it by name and&nbsp; add it. Its format list shows every file type it&nbsp;&nbsp;

- [00:30:19](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1819) can save. It saves PNG at 8 or 16 bits, EXR in&nbsp; floating point, or AVIF. Then close the list.&nbsp;&nbsp;

- [00:30:29](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1829) Add Convert Image Color Space before the saver,&nbsp; so the pixels are in the right colour space when&nbsp;&nbsp;

- [00:30:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1835) they are written. It sits between the restoration&nbsp; and the saver. Wire the restored image into it,&nbsp;&nbsp;

- [00:30:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1843) and connect its converted output to the&nbsp; images input of Save Image Advanced. Its&nbsp;&nbsp;

- [00:30:50](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1850) tooltip states the rule: set the save node to the&nbsp; same colour space as the destination here. Both&nbsp;&nbsp;

- [00:30:55](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1855) stay at sRGB for this print master. Keep PNG&nbsp; and choose 16-bit in Save Image Advanced. 16&nbsp;&nbsp;

- [00:31:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1863) bits per channel keeps smooth gradients free&nbsp; from banding. Name the file print master and&nbsp;&nbsp;

- [00:31:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1869) check that the input colour space reads sRGB.&nbsp; While you type, remember the destination:&nbsp;&nbsp;

- [00:31:14](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1874) 16 bits, sRGB, no alpha channel. Then run the&nbsp; workflow. The export takes only a few seconds.&nbsp;&nbsp;

- [00:31:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1882) Reopen the export with ExifTool: copy the check&nbsp; command from the course notes and paste it&nbsp;&nbsp;

- [00:31:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1888) below the test check already in the console.&nbsp; There it is: 4096 pixels square and 16 bits,&nbsp;&nbsp;

- [00:31:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1895) as written down, but the colour type reads RGB&nbsp; with alpha, and our destination says no alpha.&nbsp;&nbsp;

- [00:31:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1902) The restoration template carries the alpha channel&nbsp; of the loaded image through to its output. Add a&nbsp;&nbsp;

- [00:31:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1908) Split Image with Alpha node to separate it. Place&nbsp; the node right before the colour space converter.&nbsp;&nbsp;

- [00:31:54](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1914) It drops into place. Wire the restored image&nbsp; into it, then connect its image output to the&nbsp;&nbsp;

- [00:32:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1922) converter. It passes the colour on and drops the&nbsp; alpha. Run the workflow again, and when the second&nbsp;&nbsp;

- [00:32:08](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1928) export is saved, run the same ExifTool check once&nbsp; more. Copy the same check command from the course&nbsp;&nbsp;

- [00:32:15](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1935) notes and run it once more; this time ExifTool&nbsp; reads both print masters. The new file reads RGB&nbsp;&nbsp;

- [00:32:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1942) without alpha, so this export finally matches the&nbsp; destination we wrote down. ComfyUI never embeds&nbsp;&nbsp;

- [00:32:28](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1948) a colour profile; everything is treated as sRGB.&nbsp; When a print client asks for an embedded profile,&nbsp;&nbsp;

- [00:32:35](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1955) attach it afterwards with ImageMagick or ExifTool.&nbsp; Here is why the 2 colour space fields must agree.&nbsp;&nbsp;

- [00:32:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1961) Set the converter's destination to linear, keep&nbsp; the saver at sRGB, and run the same image again.&nbsp;&nbsp;

- [00:32:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1968) This run writes a second print master from&nbsp; the very same pixels; only the colour space&nbsp;&nbsp;

- [00:32:53](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1973) settings differ between the 2 files. Compare the&nbsp; 2 exports with the slider. The mismatched file&nbsp;&nbsp;

- [00:33:02](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1982) comes out much darker, because the saver reads&nbsp; every linear value as if it were sRGB. Now switch&nbsp;&nbsp;

- [00:33:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1989) back to the workflow. Set the destination&nbsp; back to sRGB before the next export, so the&nbsp;&nbsp;

- [00:33:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=1996) print master keeps its correct brightness. AVIF&nbsp; can store 10-bit HDR, but only 1 or 3 channels,&nbsp;&nbsp;

- [00:33:24](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2004) so a transparent asset needs PNG. Match the format&nbsp; to the destination before you press run. Every&nbsp;&nbsp;

- [00:33:31](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2011) PNG that ComfyUI saves carries the prompt and&nbsp; the whole workflow by default. Run exiftool -a&nbsp;&nbsp;

- [00:33:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2017) -G1 on our first watchmaker image and read what a&nbsp; stranger would see. Its output is long; we scroll&nbsp;&nbsp;

- [00:33:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2023) to the beginning. Here is the complete prompt, and&nbsp; here is the workflow with every model file name,&nbsp;&nbsp;

- [00:33:52](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2032) from the Z-Image Turbo weights to the text&nbsp; encoder. Handing this file to a client hands them&nbsp;&nbsp;

- [00:33:58](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2038) your complete process. Sometimes that is exactly&nbsp; what you want, for teaching or portfolio work. For&nbsp;&nbsp;

- [00:34:05](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2045) client work, use the course's client launch file.&nbsp; It starts the same ComfyUI with 1 extra flag:&nbsp;&nbsp;

- [00:34:12](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2052) --disable-metadata. Stop the server by closing&nbsp; its console window, then double-click the client&nbsp;&nbsp;

- [00:34:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2058) launch file instead, and watch the new console&nbsp; start the same ComfyUI. Nothing in the workflow&nbsp;&nbsp;

- [00:34:23](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2063) changes; only the launch flag is new. It decides&nbsp; which hidden details the saved files carry. Run&nbsp;&nbsp;

- [00:34:33](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2073) the export again on the client server; this time&nbsp; it saves print master number 4. When the file is&nbsp;&nbsp;

- [00:34:41](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2081) saved, copy the same ExifTool check from the&nbsp; course notes, paste it into the console and&nbsp;&nbsp;

- [00:34:46](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2086) run it on the new print master. Compare it with&nbsp; the first listing: the long prompt and workflow&nbsp;&nbsp;

- [00:34:52](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2092) rows never appear in this one. Only technical&nbsp; rows remain. Keep both launch files and pick 1 on&nbsp;&nbsp;

- [00:35:00](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2100) purpose each time. Metadata is also separate from&nbsp; visible watermarks: a clean file can still show a&nbsp;&nbsp;

- [00:35:05](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2105) logo. Now the chart, a different kind of picture.&nbsp; Load this small sales chart from the course files.&nbsp;&nbsp;

- [00:35:13](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2113) Every value label is only about 7 pixels tall, so&nbsp; each digit depends on a handful of pixels. Drag&nbsp;&nbsp;

- [00:35:19](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2119) from the chart's image output. Connect it to the&nbsp; same Real-ESRGAN upscaler and run. The result is 4&nbsp;&nbsp;

- [00:35:26](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2126) times larger and looks sharper than the original.&nbsp; Now zoom in and read the numbers carefully.&nbsp;&nbsp;

- [00:35:33](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2133) 5,862 now reads 5,002. 1,893 became 1,003,&nbsp; and 2,581 now looks like 2,681. The upscaler&nbsp;&nbsp;

- [00:35:50](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2150) did not blur the digits; it replaced them with&nbsp; confident new ones. In a financial chart that&nbsp;&nbsp;

- [00:35:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2156) is not an aesthetic problem, it is a factual&nbsp; error that nobody would notice at a glance.&nbsp;&nbsp;

- [00:36:04](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2164) Now enlarge the same chart with 1 command:&nbsp; magick, the file, -filter Lanczos, -resize 400%,&nbsp;&nbsp;

- [00:36:11](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2171) and an output name. Nothing is learned, so nothing&nbsp; new can appear. The Lanczos version is softer,&nbsp;&nbsp;

- [00:36:18](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2178) but every digit is the original digit: the label&nbsp; still reads 5,862. For text, charts and diagrams,&nbsp;&nbsp;

- [00:36:25](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2185) choose preservation over invented sharpness. The&nbsp; best answer is to render the chart again from&nbsp;&nbsp;

- [00:36:31](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2191) its source data or vector file at the size you&nbsp; need. Otherwise, resample deterministically and&nbsp;&nbsp;

- [00:36:37](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2197) read every number before you deliver. Finally,&nbsp; the whole delivery chain in the right order.&nbsp;&nbsp;

- [00:36:43](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2203) Open the delivery chain workflow from the course&nbsp; files. It reads left to right: restore, detail,&nbsp;&nbsp;

- [00:36:49](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2209) colour match, grain, colour space and save.&nbsp; Each stage feeds the next. SeedVR2 restores the&nbsp;&nbsp;

- [00:36:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2216) explorer at twice the size. FaceDetailer then&nbsp; works on the enlarged face, where it has real&nbsp;&nbsp;

- [00:37:01](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2221) pixels to start from, and Transfer Color holds the&nbsp; palette to the original. Add Noise to Image adds&nbsp;&nbsp;

- [00:37:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2229) a very light grain; its strength is 0.02. Before&nbsp; an 8-bit save, that tiny noise breaks up smooth&nbsp;&nbsp;

- [00:37:16](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2236) gradients, so the grey background does not turn&nbsp; into visible bands. Sharpening, if you need it,&nbsp;&nbsp;

- [00:37:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2242) belongs at the very end, at the delivery size,&nbsp; because sharpening before a resize wastes the&nbsp;&nbsp;

- [00:37:27](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2247) effort and creates halos. Our destination here is&nbsp; an 8-bit sRGB PNG. This server still runs from the&nbsp;&nbsp;

- [00:37:36](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2256) client launch file, so the saved image carries no&nbsp; workflow. Run the chain. The first run loads every&nbsp;&nbsp;

- [00:37:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2262) model, then the 4 stages finish in sequence. Each&nbsp; node lights up while it works. The saver writes&nbsp;&nbsp;

- [00:37:48](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2268) the delivery. Check the delivery against its&nbsp; specification: copy the delivery check from the&nbsp;&nbsp;

- [00:37:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2276) course notes, paste it into the console and run&nbsp; it. ExifTool shows the size, 8 bits per channel,&nbsp;&nbsp;

- [00:38:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2283) colour type RGB, and no prompt or workflow. At&nbsp; full size the face keeps its restored detail,&nbsp;&nbsp;

- [00:38:11](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2291) and the light grain keeps the grey backdrop&nbsp; smooth, without visible steps between the shades.&nbsp;&nbsp;

- [00:38:17](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2297) Because the delivered file has no workflow,&nbsp; keep the recipe separately. Export the workflow&nbsp;&nbsp;

- [00:38:22](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2302) as a JSON file and save it beside the course&nbsp; workflows under a clear name. Name it delivery&nbsp;&nbsp;

- [00:38:29](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2309) chain recipe and save it: with the recipe beside&nbsp; the course workflows, you can always rebuild this&nbsp;&nbsp;

- [00:38:34](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2314) exact delivery from the same file. Let's recap. A&nbsp; plain resize preserves, learned upscalers invent,&nbsp;&nbsp;

- [00:38:42](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2322) tiled diffusion invents more, and SeedVR2 restores&nbsp; convincingly. Colour matching keeps every repair&nbsp;&nbsp;

- [00:38:50](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2330) in the original's colours: on this slider the&nbsp; repaired face is cleaner, yet its skin tones and&nbsp;&nbsp;

- [00:38:56](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2336) the scarf around it are still the photograph's own&nbsp; colours. Check numbers and text by reading them,&nbsp;&nbsp;

- [00:39:03](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2343) label colorized photographs, choose metadata on&nbsp; purpose, and verify every export against a written&nbsp;&nbsp;

- [00:39:09](https://www.youtube.com/watch?v=mZ37pzoRrsI&t=2349) specification. Next lecture turns this chain into&nbsp; a reusable subgraph and an automated workflow.
