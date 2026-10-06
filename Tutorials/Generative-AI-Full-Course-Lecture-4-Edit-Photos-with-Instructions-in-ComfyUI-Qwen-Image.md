# Generative AI Full Course - Lecture 4: Edit Photos with Instructions in ComfyUI (Qwen Image)

## Full tutorial link > https://www.youtube.com/watch?v=abWxRSQFQz8

[![Generative AI Full Course - Lecture 4: Edit Photos with Instructions in ComfyUI (Qwen Image)](https://i.ytimg.com/vi_webp/abWxRSQFQz8/maxresdefault.webp)](https://www.youtube.com/watch?v=abWxRSQFQz8 "Generative AI Full Course - Lecture 4: Edit Photos with Instructions in ComfyUI (Qwen Image)")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-4-Edit-Photos-with-Instructions-in-ComfyUI-Qwen-Image.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-4-Edit-Photos-with-Instructions-in-ComfyUI-Qwen-Image.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Edit a photo by describing the change, then inspect what changed around it. In Lecture 4 of this 14-lecture Generative AI course, we turn text-to-image into image-to-image, compare denoise strengths in one grid, switch to Qwen Image 2.1 instruction editing, inspect a difference map, replace words on a sign, transfer a jacket from a second photo, build a character storyboard and relight a portrait. The demonstrations run locally in ComfyUI on Windows.

🔗 Links:

Windows AI requirements guide: [ [https://www.patreon.com/posts/111553210](https://www.patreon.com/posts/111553210) ]

📦 Full course resource repository: [ [https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall](https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall) ]

▶️ Lecture 1 — Windows setup and your first image: [ [https://youtu.be/KgUhPAOjagI](https://youtu.be/KgUhPAOjagI) ]

▶️ Lecture 2 — ComfyUI workflows and updating: [ [https://youtu.be/T2_z7ZaffyI](https://youtu.be/T2_z7ZaffyI) ]

📺 Full course playlist: [ [https://www.youtube.com/playlist?list=PLUMEJUep1hiI](https://www.youtube.com/playlist?list=PLUMEJUep1hiI) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

🎯 You will learn how to replace an empty latent with an encoded photograph, read the denoise schedule, and compare 0.2, 0.4, 0.6 and 0.8 with a VAE round-trip reference in one grid. Then connect the photo to the instruction encoder, compare a short edit request with a preservation clause, build a difference map from core nodes and check the effect of the pixel budget. For multi-image work, name the image1 and image2 roles so the scene and character references have different jobs. Make a turnaround sheet, place the explorer in three scenes, compare a text-only description with image references, and combine several changes into one instruction after sequential edits drift.

🧩 Main topics include ComfyUI, Qwen Image 2.1, instruction image editing, image-to-image, denoise, KSampler, conditioning, VAE round trip, difference maps, bypass (Ctrl+B), clipspace, character consistency, storyboards, relighting and workflow JSON. Examples include a navy-to-green sweater, HARBOR BAKERY sign text, a jacket transfer, front/three-quarter/side character views, a railway platform, a sunrise hilltop and a lantern-lit workshop.

Use the chapters to jump to the denoise grid, instruction editing, the difference map, sign text, two references, the storyboard or relighting.

⏱️ Chapters:

[00:00:00](https://youtu.be/abWxRSQFQz8?t=0) Edit photos by instruction: today's results

[00:00:40](https://youtu.be/abWxRSQFQz8?t=40) Update ComfyUI with the Lecture Two route

[00:01:48](https://youtu.be/abWxRSQFQz8?t=108) Turn text-to-image into image-to-image

[00:04:50](https://youtu.be/abWxRSQFQz8?t=290) Compare four denoise strengths in one grid

[00:07:54](https://youtu.be/abWxRSQFQz8?t=474) Edit with the photo in the conditioning

[00:10:00](https://youtu.be/abWxRSQFQz8?t=600) Why denoise one is still editing

[00:11:14](https://youtu.be/abWxRSQFQz8?t=674) Measure changed pixels with a difference map

[00:15:16](https://youtu.be/abWxRSQFQz8?t=916) Pixel budget: detail versus time

[00:17:30](https://youtu.be/abWxRSQFQz8?t=1050) Replace words on a photographed sign

[00:18:59](https://youtu.be/abWxRSQFQz8?t=1139) Two references with named roles

[00:20:29](https://youtu.be/abWxRSQFQz8?t=1229) One character: a turnaround sheet

[00:21:51](https://youtu.be/abWxRSQFQz8?t=1311) Place the explorer in three storyboard scenes

[00:25:15](https://youtu.be/abWxRSQFQz8?t=1515) Five sequential edits and a clean rollback

[00:28:37](https://youtu.be/abWxRSQFQz8?t=1717) Relight a portrait by instruction

[00:29:42](https://youtu.be/abWxRSQFQz8?t=1782) Export the workflow and recap

Follow the course resource repository for released companion files. The Lecture 4 learner package contains the start and final workflows, 24 API graphs, eight input photos, all 24 results, the exact instructions, update commands and measurements. Start with README.md; model_sources.md lists the three model files and download folders. Model weights are downloaded separately.

The comparison graph highlights a thresholded, one-sided green-channel difference; it is a diagnostic view, not a complete measure of identity or image quality. Compare it with the VAE round trip and inspect the face, clothes and background in the pictures themselves. A preservation clause can guide an edit without locking every pixel.

For sign edits, quote the replacement words and specify what to keep. For characters, reuse the anchor image with the scene reference. If several edits accumulate unwanted changes, return to the clean references and combine the requested changes in one pass. The saved final graph opens on the portrait-relighting example; the chapter files identify the other examples.

The shown setup uses Qwen Image 2.1 INT8, 25 steps, CFG 1, Euler/simple and seed 314159. The 1024 pixel-budget setting and full 2048 input are compared in chapter 8. Measurements from the RTX 5090 setup are included with their settings; use them to understand that comparison rather than predict your own hardware.

After git pull --ff-only and python -m pip install -r requirements.txt, restart ComfyUI using the startup route from Lecture 2, then refresh the browser. The commands sheet includes environment activation; the learner guide explains the saved workflow state and API image paths.

For anyone who wants repeatable photo edits, character references and reusable local AI workflows.

💬 Check the pinned comment for resources and updates. Support the course on Patreon, join the SECourses Discord, or leave your workflow questions in the comments.

#ComfyUI #GenerativeAI #QwenImage #AIImageEditing #StableDiffusion



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=0) Greetings everyone. Today I am going to show you&nbsp; how to edit images with instructions in ComfyUI.&nbsp;&nbsp;

- [00:00:07](https://www.youtube.com/watch?v=abWxRSQFQz8&t=7) We will change 1 detail of a photo, and keep&nbsp; everything else. We will also replace words on a&nbsp;&nbsp;

- [00:00:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=18) sign, dress this man in a jacket from a 2nd photo,&nbsp; and keep 1 explorer consistent across 3 storyboard&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=28) scenes. Check out the tutorial description to&nbsp; see the chapters, and to download the workflow&nbsp;&nbsp;

- [00:00:35](https://www.youtube.com/watch?v=abWxRSQFQz8&t=35) and the photos we use. Let us get started.&nbsp; Before the new material, let us update ComfyUI&nbsp;&nbsp;

- [00:00:42](https://www.youtube.com/watch?v=abWxRSQFQz8&t=42) the same way we did in Lecture 2. I am opening&nbsp; our ComfyUI folder, which holds the application,&nbsp;&nbsp;

- [00:00:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=47) its virtual environment and the model path file we&nbsp; already prepared. In the address bar, type cmd and&nbsp;&nbsp;

- [00:00:54](https://www.youtube.com/watch?v=abWxRSQFQz8&t=54) press Enter. A Command Prompt opens directly in&nbsp; this folder, so every command we run next works&nbsp;&nbsp;

- [00:01:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=61) inside this ComfyUI installation. First, activate&nbsp; the virtual environment of this installation.&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=68) The environment name appears in front of the&nbsp; prompt, so the Python commands that follow use&nbsp;&nbsp;

- [00:01:14](https://www.youtube.com/watch?v=abWxRSQFQz8&t=74) the packages of this ComfyUI. Now pull the latest&nbsp; ComfyUI source with git. The fast forward option&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=83) moves our copy along the official history, and git&nbsp; lists every file that this update changes. Next,&nbsp;&nbsp;

- [00:01:32](https://www.youtube.com/watch?v=abWxRSQFQz8&t=92) install the requirements into this environment.&nbsp; Pip compares each package with the version the new&nbsp;&nbsp;

- [00:01:39](https://www.youtube.com/watch?v=abWxRSQFQz8&t=99) source asks for and installs only what changed.&nbsp; Lecture 2 explains every step in detail if you&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=abWxRSQFQz8&t=106) need it. The update is installed, and ComfyUI is&nbsp; running again. Refresh the browser to load the&nbsp;&nbsp;

- [00:01:54](https://www.youtube.com/watch?v=abWxRSQFQz8&t=114) new version. Then open the Qwen Image 2.1 workflow&nbsp; from Lecture 3; it is also in this lesson's files.&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=122) This is text-to-image. The Empty Latent Image is&nbsp; where sampling starts: pure noise. Denoise is 1,&nbsp;&nbsp;

- [00:02:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=128) so the sampler builds the whole picture from our&nbsp; words alone. To start from a photograph instead,&nbsp;&nbsp;

- [00:02:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=136) select the Empty Latent Image and press Delete.&nbsp; Then double-click the canvas, search for Load&nbsp;&nbsp;

- [00:02:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=143) Image, and add the node. It appears where we&nbsp; clicked. Now click choose file to upload. In&nbsp;&nbsp;

- [00:02:29](https://www.youtube.com/watch?v=abWxRSQFQz8&t=149) the file window, paste the path of the portrait&nbsp; from the lesson files and press Enter. The photo&nbsp;&nbsp;

- [00:02:36](https://www.youtube.com/watch?v=abWxRSQFQz8&t=156) is uploaded into ComfyUI's input folder. Our photo&nbsp; is 1024 pixels square. It shows a man with round&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=164) glasses and a trimmed beard, in a navy sweater, in&nbsp; front of a brick wall with shelves. Our request is&nbsp;&nbsp;

- [00:02:52](https://www.youtube.com/watch?v=abWxRSQFQz8&t=172) small: make the sweater dark green. Add a VAE&nbsp; Encode node. It turns pixels into a latent,&nbsp;&nbsp;

- [00:03:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=181) the compressed form in which the model works.&nbsp; Connect the image to pixels, and our VAE to&nbsp;&nbsp;

- [00:03:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=188) its vae input. Then connect the encoded latent to&nbsp; the sampler's latent image. The sampler no longer&nbsp;&nbsp;

- [00:03:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=196) starts from empty noise. It starts from our photo,&nbsp; with some noise added on top. For image-to-image,&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=203) the prompt describes the whole picture we want,&nbsp; including the change. Now I am pasting a full&nbsp;&nbsp;

- [00:03:29](https://www.youtube.com/watch?v=abWxRSQFQz8&t=209) description of this photo, with the sweater&nbsp; changed to dark green. Now set denoise to 0.2.&nbsp;&nbsp;

- [00:03:38](https://www.youtube.com/watch?v=abWxRSQFQz8&t=218) Denoise decides how much of the noise schedule we&nbsp; use. With 25 steps, ComfyUI builds a schedule of&nbsp;&nbsp;

- [00:03:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=227) 125 steps and runs only the last 25. Those last&nbsp; steps start where little noise remains. Give the&nbsp;&nbsp;

- [00:03:57](https://www.youtube.com/watch?v=abWxRSQFQz8&t=237) Save Image node a new file name prefix, so the&nbsp; results of this lesson are easy to find in the&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=abWxRSQFQz8&t=244) output folder. Open the settings and search for&nbsp; live preview, so we can watch the sampler work.&nbsp;&nbsp;

- [00:04:11](https://www.youtube.com/watch?v=abWxRSQFQz8&t=251) Set the live preview method to auto. The sampler&nbsp; node will then show its current estimate of the&nbsp;&nbsp;

- [00:04:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=258) picture while each step happens. Run the graph and&nbsp; watch the sampler. The photo is visible from the&nbsp;&nbsp;

- [00:04:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=268) very 1st step, because we started near the end of&nbsp; the schedule, where only a little noise remains.&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=abWxRSQFQz8&t=275) Open the result and compare it with&nbsp; the photo. The glasses, the beard,&nbsp;&nbsp;

- [00:04:39](https://www.youtube.com/watch?v=abWxRSQFQz8&t=279) the shelves and the brick wall are all as they&nbsp; were. But the sweater is still navy: at 0.2,&nbsp;&nbsp;

- [00:04:45](https://www.youtube.com/watch?v=abWxRSQFQz8&t=285) the sampler could not change its colour. Let&nbsp; us test several strengths in 1 run. Select the&nbsp;&nbsp;

- [00:04:53](https://www.youtube.com/watch?v=abWxRSQFQz8&t=293) sampler and press Ctrl+C. Then point where the&nbsp; copy should go and press Ctrl+Shift+V: the copy&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=301) keeps every input connection. Paste 2 more copies&nbsp; the same way. Now 4 samplers share the same model,&nbsp;&nbsp;

- [00:05:09](https://www.youtube.com/watch?v=abWxRSQFQz8&t=309) the same prompt and the same starting latent. Only&nbsp; their denoise values will differ. The 1st sampler&nbsp;&nbsp;

- [00:05:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=316) keeps 0.2. Set the 1st copy to 0.4, and the next&nbsp; copy to 0.6. Each larger value lets the sampler&nbsp;&nbsp;

- [00:05:24](https://www.youtube.com/watch?v=abWxRSQFQz8&t=324) redraw a larger share of the photo. Set the last&nbsp; copy to 0.8. Now collect the 4 results in 1 batch:&nbsp;&nbsp;

- [00:05:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=333) add a Batch Latents node below the 1st sampler. It&nbsp; gathers several latents into 1 list. Connect the&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=abWxRSQFQz8&t=342) VAE Encode output to its 1st input. That latent&nbsp; has no sampling at all, so the 1st picture will&nbsp;&nbsp;

- [00:05:50](https://www.youtube.com/watch?v=abWxRSQFQz8&t=350) show our photo after the VAE alone, a useful&nbsp; baseline. Then connect the 4 samplers in order,&nbsp;&nbsp;

- [00:05:59](https://www.youtube.com/watch?v=abWxRSQFQz8&t=359) starting with 0.2. Every new connection adds&nbsp; another input, and the batch keeps the order of&nbsp;&nbsp;

- [00:06:05](https://www.youtube.com/watch?v=abWxRSQFQz8&t=365) our denoise values, from left to right. Connect&nbsp; the batch to the VAE Decode node, which now&nbsp;&nbsp;

- [00:06:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=376) decodes all 5 latents. Then add a Make Image Grid&nbsp; node between the decoder and the Save Image node.&nbsp;&nbsp;

- [00:06:26](https://www.youtube.com/watch?v=abWxRSQFQz8&t=386) Connect the decoded images into the grid, and the&nbsp; grid into Save Image. The grid places the pictures&nbsp;&nbsp;

- [00:06:34](https://www.youtube.com/watch?v=abWxRSQFQz8&t=394) side by side. Set 5 columns, 1 for each of our 5&nbsp; pictures. Set the cell width to 1024 pixels. Now&nbsp;&nbsp;

- [00:06:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=404) the height, 1024 as well, so every picture&nbsp; keeps its full size inside the grid. Set a&nbsp;&nbsp;

- [00:06:51](https://www.youtube.com/watch?v=abWxRSQFQz8&t=411) new file name prefix, so the grid gets its own&nbsp; name in the output folder. Now run the graph,&nbsp;&nbsp;

- [00:06:58](https://www.youtube.com/watch?v=abWxRSQFQz8&t=418) and watch the samplers on the right. The 1st&nbsp; sampler's result comes from the cache, so only&nbsp;&nbsp;

- [00:07:05](https://www.youtube.com/watch?v=abWxRSQFQz8&t=425) the 3 new samplers run, one after another. Each&nbsp; one shows its own preview while it works. Open&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=abWxRSQFQz8&t=433) the grid. From left to right: the photo through&nbsp; the VAE with no sampling, then denoise 0.2, 0.4,&nbsp;&nbsp;

- [00:07:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=443) 0.6 and 0.8. Up to 0.6, the sweater stays navy.&nbsp; At 0.8 it finally turns a dark greenish grey,&nbsp;&nbsp;

- [00:07:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=453) but his face, his hair, the cup and the shelves&nbsp; have changed as well. That is the trade-off of&nbsp;&nbsp;

- [00:07:41](https://www.youtube.com/watch?v=abWxRSQFQz8&t=461) image-to-image: the colour changes only once the&nbsp; sampler may redraw everything else too. It stays&nbsp;&nbsp;

- [00:07:48](https://www.youtube.com/watch?v=abWxRSQFQz8&t=468) useful for gentle refinement, which returns&nbsp; later in the course. Now the 2nd mechanism,&nbsp;&nbsp;

- [00:07:56](https://www.youtube.com/watch?v=abWxRSQFQz8&t=476) with the same model, the same photo and the same&nbsp; request. Open the Lecture 3 workflow once more.&nbsp;&nbsp;

- [00:08:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=482) It replaces our image-to-image graph in this tab.&nbsp; Delete the Empty Latent Image here too, and add a&nbsp;&nbsp;

- [00:08:10](https://www.youtube.com/watch?v=abWxRSQFQz8&t=490) Load Image node. It already shows our portrait,&nbsp; because the photo is now in the input folder.&nbsp;&nbsp;

- [00:08:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=498) This time the photo does not become the starting&nbsp; latent. Connect it to image 1 of the Text Encode&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=505) Qwen Image 2.1 node. The text encoder now&nbsp; sees the picture. A 2nd image input appears,&nbsp;&nbsp;

- [00:08:32](https://www.youtube.com/watch?v=abWxRSQFQz8&t=512) for another reference; we will use it later.&nbsp; Connect the VAE as well, so the node also&nbsp;&nbsp;

- [00:08:38](https://www.youtube.com/watch?v=abWxRSQFQz8&t=518) encodes the photo as a reference latent. The&nbsp; node also offers a latent: an empty one with&nbsp;&nbsp;

- [00:08:46](https://www.youtube.com/watch?v=abWxRSQFQz8&t=526) the photo's size. Connect it to the sampler.&nbsp; Denoise stays at 1, so sampling now starts&nbsp;&nbsp;

- [00:08:53](https://www.youtube.com/watch?v=abWxRSQFQz8&t=533) from pure noise. CFG is 1, so, as in Lecture 3,&nbsp; the negative branch is skipped. Now write the&nbsp;&nbsp;

- [00:09:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=541) instruction the way you would ask a person, with a&nbsp; concrete verb, in English. Our instruction reads:&nbsp;&nbsp;

- [00:09:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=548) change his navy blue sweater to a dark green&nbsp; sweater. Give the Save Image a new file name&nbsp;&nbsp;

- [00:09:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=556) prefix, so the edits are easy to find. Now run&nbsp; it and watch the preview. It starts from noise,&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=563) yet the man and the café appear within the first&nbsp; few steps, because the photo guides every step.&nbsp;&nbsp;

- [00:09:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=571) Open the result. The sweater is now clearly green.&nbsp; Take a moment to compare the rest with the photo:&nbsp;&nbsp;

- [00:09:37](https://www.youtube.com/watch?v=abWxRSQFQz8&t=577) his face, glasses, beard and hands match, and&nbsp; so do the shelves and the brick wall behind&nbsp;&nbsp;

- [00:09:43](https://www.youtube.com/watch?v=abWxRSQFQz8&t=583) him. Compare that with the grid we made earlier.&nbsp; Image-to-image needed its strongest setting, 0.8,&nbsp;&nbsp;

- [00:09:52](https://www.youtube.com/watch?v=abWxRSQFQz8&t=592) to shift the colour, and it changed the man along&nbsp; with it. Here the change stayed where we asked.&nbsp;&nbsp;

- [00:10:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=600) Here is a question before we go on. The sampler&nbsp; started from pure noise, at denoise 1. So in what&nbsp;&nbsp;

- [00:10:06](https://www.youtube.com/watch?v=abWxRSQFQz8&t=606) sense is this still editing? Pause the video and&nbsp; think about it. The answer is in this connection.&nbsp;&nbsp;

- [00:10:17](https://www.youtube.com/watch?v=abWxRSQFQz8&t=617) The photo enters the conditioning, the information&nbsp; that guides the sampler at every step, together&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=abWxRSQFQz8&t=624) with our instruction. So the model redraws&nbsp; the whole picture, guided by the photo. This&nbsp;&nbsp;

- [00:10:30](https://www.youtube.com/watch?v=abWxRSQFQz8&t=630) is conditioned regeneration: the unchanged areas&nbsp; look the same, but they are near-identical, not&nbsp;&nbsp;

- [00:10:36](https://www.youtube.com/watch?v=abWxRSQFQz8&t=636) identical. A common tip is to add a preservation&nbsp; clause. Let us test it: keep his face, hairstyle&nbsp;&nbsp;

- [00:10:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=644) and the background exactly the same. The seed and&nbsp; everything else stay unchanged. Run it. Only the&nbsp;&nbsp;

- [00:10:52](https://www.youtube.com/watch?v=abWxRSQFQz8&t=652) words changed, so the photo, the seed and the&nbsp; size are exactly the same as in our 1st edit.&nbsp;&nbsp;

- [00:11:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=662) Open the result. It looks just like the 1st edit.&nbsp; To tell whether the clause helped, we need to&nbsp;&nbsp;

- [00:11:09](https://www.youtube.com/watch?v=abWxRSQFQz8&t=669) measure the changes instead of guessing. We will&nbsp; measure the change with nodes. Add a Blend Images&nbsp;&nbsp;

- [00:11:17](https://www.youtube.com/watch?v=abWxRSQFQz8&t=677) node; it can subtract one picture from another.&nbsp; Connect our edit, the output of the decoder, to&nbsp;&nbsp;

- [00:11:24](https://www.youtube.com/watch?v=abWxRSQFQz8&t=684) its 1st input, image 1. Connect the original photo&nbsp; to image 2. Set the blend mode to difference,&nbsp;&nbsp;

- [00:11:32](https://www.youtube.com/watch?v=abWxRSQFQz8&t=692) with a blend factor of 1: it subtracts image 2&nbsp; from image 1, so pixels turn brighter where our&nbsp;&nbsp;

- [00:11:39](https://www.youtube.com/watch?v=abWxRSQFQz8&t=699) edit is brighter than the photo. Real differences&nbsp; can be faint, so we turn them into a clear&nbsp;&nbsp;

- [00:11:45](https://www.youtube.com/watch?v=abWxRSQFQz8&t=705) map. Add a Convert Image to Mask node, which&nbsp; keeps 1 colour channel of an image as a mask.&nbsp;&nbsp;

- [00:11:57](https://www.youtube.com/watch?v=abWxRSQFQz8&t=717) Connect the blend to it, and choose the green&nbsp; channel, because green rises most where the navy&nbsp;&nbsp;

- [00:12:03](https://www.youtube.com/watch?v=abWxRSQFQz8&t=723) sweater became green. Then add a Threshold Mask&nbsp; node next to it. It turns values above a limit&nbsp;&nbsp;

- [00:12:10](https://www.youtube.com/watch?v=abWxRSQFQz8&t=730) white, and the rest black. Connect the mask, and&nbsp; set the value to 0.04. White will mean that green&nbsp;&nbsp;

- [00:12:17](https://www.youtube.com/watch?v=abWxRSQFQz8&t=737) rose by more than about 10 brightness levels out&nbsp; of 255. To open this map like any result, add a&nbsp;&nbsp;

- [00:12:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=745) Convert Mask to Image node. It turns the mask back&nbsp; into an ordinary picture that we can save. Connect&nbsp;&nbsp;

- [00:12:35](https://www.youtube.com/watch?v=abWxRSQFQz8&t=755) the threshold into it. Then add a Save Image node&nbsp; for the map, just like the one we already use for&nbsp;&nbsp;

- [00:12:42](https://www.youtube.com/watch?v=abWxRSQFQz8&t=762) our results. Connect the picture to it, and give&nbsp; it the file name prefix difference, so the maps&nbsp;&nbsp;

- [00:12:51](https://www.youtube.com/watch?v=abWxRSQFQz8&t=771) are easy to find in the output folder. Our edit&nbsp; is already saved, so let the main Save Image rest:&nbsp;&nbsp;

- [00:13:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=780) select it and press Ctrl+B. Bypassed, it turns&nbsp; purple and saves nothing. Now run the graph:&nbsp;&nbsp;

- [00:13:07](https://www.youtube.com/watch?v=abWxRSQFQz8&t=787) the edit itself comes from the cache. Open the&nbsp; map. White marks every pixel where green rose&nbsp;&nbsp;

- [00:13:14](https://www.youtube.com/watch?v=abWxRSQFQz8&t=794) by more than our limit. The whole sweater is&nbsp; white: our requested change. A fine speckle&nbsp;&nbsp;

- [00:13:20](https://www.youtube.com/watch?v=abWxRSQFQz8&t=800) also covers his hair, face and beard, where the&nbsp; model redrew tiny details. This map belongs to the&nbsp;&nbsp;

- [00:13:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=808) version with the clause. Now remove the clause&nbsp; from the instruction, so it reads as it did in&nbsp;&nbsp;

- [00:13:34](https://www.youtube.com/watch?v=abWxRSQFQz8&t=814) our 1st edit. Then run the graph again. Open the&nbsp; new map. The 2 maps look the same. The clause did&nbsp;&nbsp;

- [00:13:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=824) not reduce the changes, because the photo in the&nbsp; conditioning already carries the parts we wanted&nbsp;&nbsp;

- [00:13:50](https://www.youtube.com/watch?v=abWxRSQFQz8&t=830) to keep. So treat such a clause as a request,&nbsp; and then check it. But why is anything outside&nbsp;&nbsp;

- [00:13:56](https://www.youtube.com/watch?v=abWxRSQFQz8&t=836) the sweater white at all? Part of the answer is&nbsp; the VAE itself. Add a VAE Encode node. Every edit&nbsp;&nbsp;

- [00:14:06](https://www.youtube.com/watch?v=abWxRSQFQz8&t=846) passes the photo through the VAE, so let us see&nbsp; what that round trip alone does to the pixels.&nbsp;&nbsp;

- [00:14:14](https://www.youtube.com/watch?v=abWxRSQFQz8&t=854) Connect the photo to its pixels input, and the&nbsp; VAE to its vae input. Then add a VAE Decode node&nbsp;&nbsp;

- [00:14:21](https://www.youtube.com/watch?v=abWxRSQFQz8&t=861) right below it. It turns the latent straight back&nbsp; into pixels. Connect the latent and the VAE to the&nbsp;&nbsp;

- [00:14:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=873) decoder. Then connect this round trip to image 1&nbsp; of the blend, in place of our edit, and run. Open&nbsp;&nbsp;

- [00:14:43](https://www.youtube.com/watch?v=abWxRSQFQz8&t=883) the new map. Only a faint speckle remains, in fine&nbsp; textures like the hair, the beard and the knit.&nbsp;&nbsp;

- [00:14:51](https://www.youtube.com/watch?v=abWxRSQFQz8&t=891) That is what the VAE alone changes, with no image&nbsp; model involved. So the VAE explains only a small&nbsp;&nbsp;

- [00:14:59](https://www.youtube.com/watch?v=abWxRSQFQz8&t=899) part: the edit itself also redraws fine details&nbsp; in his hair and face. When pixels must stay&nbsp;&nbsp;

- [00:15:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=908) exactly the same, a mask and a final composite&nbsp; keep them; that is our next lecture. Next, the&nbsp;&nbsp;

- [00:15:17](https://www.youtube.com/watch?v=abWxRSQFQz8&t=917) input size. First, swap the 2 Save Images: select&nbsp; the main one and press Ctrl+B to bring it back,&nbsp;&nbsp;

- [00:15:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=925) then bypass the map's Save Image the same way,&nbsp; so that branch no longer runs. Now upload the&nbsp;&nbsp;

- [00:15:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=933) full-resolution copy of the portrait into the&nbsp; 1st Load Image, the same way as before. It is&nbsp;&nbsp;

- [00:15:40](https://www.youtube.com/watch?v=abWxRSQFQz8&t=940) 2048 pixels square. The resolution on the Text&nbsp; Encode node is a pixel budget. 1024 means about&nbsp;&nbsp;

- [00:15:49](https://www.youtube.com/watch?v=abWxRSQFQz8&t=949) 1 million pixels, so the node scales the large&nbsp; photo down before encoding it. Run it. Open the&nbsp;&nbsp;

- [00:15:58](https://www.youtube.com/watch?v=abWxRSQFQz8&t=958) result. The edit itself is right, just as before.&nbsp; Now look closely at the beard and the skin:&nbsp;&nbsp;

- [00:16:05](https://www.youtube.com/watch?v=abWxRSQFQz8&t=965) at 1 million pixels, the fine texture is slightly&nbsp; soft. Now open the console at the bottom of the&nbsp;&nbsp;

- [00:16:12](https://www.youtube.com/watch?v=abWxRSQFQz8&t=972) window. Its last lines show that this run took&nbsp; almost 9 seconds, with the sampler doing about&nbsp;&nbsp;

- [00:16:20](https://www.youtube.com/watch?v=abWxRSQFQz8&t=980) 4 steps per second. Now set the resolution&nbsp; to 0. 0 keeps each reference at its own size,&nbsp;&nbsp;

- [00:16:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=988) so the model now works on 4 times as many pixels.&nbsp; Run it again. Each step now has to handle 4 times&nbsp;&nbsp;

- [00:16:38](https://www.youtube.com/watch?v=abWxRSQFQz8&t=998) as many pixels, so every step takes much longer.&nbsp; Watch the progress line in the console slow down.&nbsp;&nbsp;

- [00:16:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1007) It took about 75 seconds, at over 2 seconds&nbsp; per step: about 8 times longer than the 1st&nbsp;&nbsp;

- [00:16:55](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1015) run. Now close the console. Open the result,&nbsp; and compare it with the 1st run. At full size,&nbsp;&nbsp;

- [00:17:03](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1023) the beard, the skin and the edges of the glasses&nbsp; show finer detail. The larger budget pays off when&nbsp;&nbsp;

- [00:17:11](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1031) you really need that detail, but it costs about&nbsp; 8 times the time. Most edits work well at 1024.&nbsp;&nbsp;

- [00:17:20](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1040) Keep 0 for when you need every pixel, because&nbsp; a large camera photo at its own size can take&nbsp;&nbsp;

- [00:17:27](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1047) a very long time. Qwen Image can also edit text&nbsp; inside a photo. Upload the bakery storefront from&nbsp;&nbsp;

- [00:17:34](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1054) the lesson files, and set the resolution back to&nbsp; 1024, the budget we use for most edits. For text,&nbsp;&nbsp;

- [00:17:45](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1065) quote the exact words. Replace the word RIVER on&nbsp; the large sign with HARBOR, and keep the letter&nbsp;&nbsp;

- [00:17:52](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1072) style, the colours and everything else unchanged.&nbsp; Run it. Open the result, and read the large sign&nbsp;&nbsp;

- [00:18:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1080) at the top of the picture. It now reads HARBOR&nbsp; BAKERY, in the same cream capital letters, and the&nbsp;&nbsp;

- [00:18:07](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1087) shop front around it is unchanged. Now a harder&nbsp; line, with mixed case, digits and punctuation.&nbsp;&nbsp;

- [00:18:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1096) Replace "Closed" on the small board with "Open&nbsp; 24/7 - Est. 1998". Run it. Open it. Now look at&nbsp;&nbsp;

- [00:18:30](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1110) the small board, and read it with me, letter by&nbsp; letter. Open, with a capital O. 24, slash, 7. A&nbsp;&nbsp;

- [00:18:40](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1120) dash. Est. and its period. 1998. Every character&nbsp; is right. One thing we did not specify changed:&nbsp;&nbsp;

- [00:18:48](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1128) the words now sit on 2 lines, and the board&nbsp; grew to fit them. Exact characters and exact&nbsp;&nbsp;

- [00:18:55](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1135) layout are separate checks. Now 2 references with&nbsp; different roles. Switch the 1st Load Image back to&nbsp;&nbsp;

- [00:19:03](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1143) the portrait: click the file name, and choose the&nbsp; portrait from the list. Add a 2nd Load Image node&nbsp;&nbsp;

- [00:19:13](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1153) below the text encoder. It will hold a mustard&nbsp; corduroy jacket: upload the jacket photo from the&nbsp;&nbsp;

- [00:19:20](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1160) lesson files the same way as before. Connect it&nbsp; to image 2. With 2 pictures, the instruction must&nbsp;&nbsp;

- [00:19:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1168) say which is which, so we use the tags image 1 and&nbsp; image 2, written in angle brackets. Dress the man&nbsp;&nbsp;

- [00:19:36](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1176) from &lt;image1&gt; in the mustard corduroy jacket from&nbsp; &lt;image2&gt;, buttoned over his shirt. Keep his face,&nbsp;&nbsp;

- [00:19:43](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1183) glasses, beard, hands, the cup and the café from&nbsp; &lt;image1&gt;. Run it. The sampler now reads 2 pictures&nbsp;&nbsp;

- [00:19:52](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1192) at every step: the portrait it edits, and the&nbsp; jacket it borrows from. Open the result. The&nbsp;&nbsp;

- [00:20:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1200) mustard corduroy jacket from image 2 arrived with&nbsp; its collar, its chest pockets and its buttons. His&nbsp;&nbsp;

- [00:20:07](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1207) face, the cup and the cafe come from image 1, and&nbsp; even the framing is unchanged. 2 named references,&nbsp;&nbsp;

- [00:20:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1216) 1 clean edit: image 1 is the picture being edited,&nbsp; and image 2 only lends its jacket. The same&nbsp;&nbsp;

- [00:20:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1223) pattern works for any product, fabric or pattern&nbsp; you want to transfer. Now 1 character across many&nbsp;&nbsp;

- [00:20:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1231) pictures. Upload the explorer from the lesson&nbsp; files into the 1st Load Image. He is our anchor:&nbsp;&nbsp;

- [00:20:38](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1238) a navy field jacket, a copper scarf, and a satchel&nbsp; with a square brass clasp. This edit needs only&nbsp;&nbsp;

- [00:20:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1247) 1 picture, so bypass the jacket node: select it&nbsp; and press Ctrl+B. It turns purple, and the graph&nbsp;&nbsp;

- [00:20:55](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1255) runs as if it were not there. Ask for a turnaround&nbsp; sheet: the same man 3 times, full body, in a front&nbsp;&nbsp;

- [00:21:03](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1263) view, a three-quarter view and a side profile,&nbsp; keeping his face and every part of his outfit.&nbsp;&nbsp;

- [00:21:11](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1271) Run it. 1 edit draws all 3 views side by side on&nbsp; the plain background: image 1 supplies the man,&nbsp;&nbsp;

- [00:21:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1278) and the instruction describes the layout. Open the&nbsp; sheet. It shows a front view, a three-quarter view&nbsp;&nbsp;

- [00:21:27](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1287) and a side profile of the same man. The face, the&nbsp; beard and the copper scarf match in all 3 views,&nbsp;&nbsp;

- [00:21:35](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1295) and the satchel stays across his body as he&nbsp; turns. A generated side or back view is an&nbsp;&nbsp;

- [00:21:41](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1301) invented design, not recovered information. That&nbsp; is why the anchor photo remains the reference we&nbsp;&nbsp;

- [00:21:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1307) return to whenever something drifts. Now 3&nbsp; scenes for a storyboard. Order matters here:&nbsp;&nbsp;

- [00:21:54](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1314) image 1 is the picture being edited, so the scene&nbsp; goes into the 1st slot, and the explorer into the&nbsp;&nbsp;

- [00:22:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1321) 2nd. Upload the railway platform into the 1st Load&nbsp; Image. Then unbypass the 2nd node with Ctrl+B,&nbsp;&nbsp;

- [00:22:09](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1329) and choose the explorer from its list, the same&nbsp; way we chose the portrait. The instruction names&nbsp;&nbsp;

- [00:22:17](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1337) both roles: place the explorer from image 2 on the&nbsp; platform in image 1, walking toward the camera,&nbsp;&nbsp;

- [00:22:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1345) and keep his face and outfit exactly as in image&nbsp; 2. Give the storyboard frames their own file name&nbsp;&nbsp;

- [00:22:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1353) prefix, so they stay together in the output&nbsp; folder. Then run it. Open it. The explorer&nbsp;&nbsp;

- [00:22:42](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1362) stands on the railway platform at dusk, in&nbsp; front of the lamps and the brick station.&nbsp;&nbsp;

- [00:22:49](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1369) The pose is calmer than we asked, but the jacket,&nbsp; the scarf and the satchel match the anchor. Next,&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1377) the hilltop photo from the lesson files. Upload it&nbsp; into the 1st Load Image, the same way as before.&nbsp;&nbsp;

- [00:23:05](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1385) Then change only the scene and the action: 1 hand&nbsp; rests on the stone cairn while he looks across&nbsp;&nbsp;

- [00:23:12](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1392) the valley. Run it. Open the result. This is the&nbsp; hilltop scene we uploaded, in the early light of&nbsp;&nbsp;

- [00:23:21](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1401) the sunrise. 1 hand rests on the cairn, and he&nbsp; looks out over the misty valley. His face and&nbsp;&nbsp;

- [00:23:28](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1408) his outfit match the anchor again. Why not simply&nbsp; describe him in words? Let us try it. Bypass both&nbsp;&nbsp;

- [00:23:35](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1415) Load Image nodes, so the encoder sees no picture&nbsp; at all. Then paste a written description of him in&nbsp;&nbsp;

- [00:23:42](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1422) the workshop. It describes his face, his clothes,&nbsp; the satchel with its brass clasp, the bench and&nbsp;&nbsp;

- [00:23:51](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1431) the lantern. Run it. Open it, and compare the&nbsp; man in this picture with our anchor photo from&nbsp;&nbsp;

- [00:24:00](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1440) the lesson files. This is a different man with&nbsp; another face, and his satchel lies on the bench,&nbsp;&nbsp;

- [00:24:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1448) not across his body. A repeated description&nbsp; is not an identity lock. Now the workshop,&nbsp;&nbsp;

- [00:24:14](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1454) this time with the references. Unbypass both&nbsp; Load Image nodes, so the pictures reach the&nbsp;&nbsp;

- [00:24:21](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1461) encoder again. Then upload the workshop&nbsp; into the 1st slot, the same way as before.&nbsp;&nbsp;

- [00:24:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1471) Paste the workshop instruction: he lifts the&nbsp; copper lantern beside the bench, turned toward&nbsp;&nbsp;

- [00:24:37](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1477) the window, with the same face and outfit as in&nbsp; image 2. Run it. Open it. He stands at the far&nbsp;&nbsp;

- [00:24:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1487) end of the bench, turned toward the window, and&nbsp; lifts a copper lantern. Notice that the bench&nbsp;&nbsp;

- [00:24:55](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1495) still holds its own lantern: the model added a 2nd&nbsp; one instead of moving it. These frames form our&nbsp;&nbsp;

- [00:25:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1502) storyboard. Search the assets for storyboard,&nbsp; and they appear in 1 list, with the text-only&nbsp;&nbsp;

- [00:25:09](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1509) attempt among them. In the video lectures, we will&nbsp; animate them. What happens if we keep editing the&nbsp;&nbsp;

- [00:25:16](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1516) latest result? Right-click the workshop frame&nbsp; in Save Image and choose Copy (Clipspace). Then&nbsp;&nbsp;

- [00:25:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1523) right-click the 1st Load Image and choose Paste&nbsp; (Clipspace). Bypass the explorer reference,&nbsp;&nbsp;

- [00:25:33](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1533) so each step edits only the previous picture. Then&nbsp; give these steps their own file name prefix, so&nbsp;&nbsp;

- [00:25:40](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1540) the 5 results stay together in the output folder.&nbsp; 1st step: make him smile warmly. The instruction&nbsp;&nbsp;

- [00:25:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1547) names 1 small change, and nothing else. Run&nbsp; it, and watch the sampler redraw the frame.&nbsp;&nbsp;

- [00:25:56](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1556) He smiles. Now copy this result into the Load&nbsp; Image the same way, through the clipspace. 2nd&nbsp;&nbsp;

- [00:26:03](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1563) step: make the copper lantern glow with a warm&nbsp; flame. Run it. 3rd step. Copy the new result into&nbsp;&nbsp;

- [00:26:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1578) the Load Image again, through the clipspace, just&nbsp; as before. This time, change the time of day to&nbsp;&nbsp;

- [00:26:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1585) evening, with blue dusk light in the window and&nbsp; the workshop lit mainly by the lantern. Run it.&nbsp;&nbsp;

- [00:26:37](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1597) Look at the textures in this result: the wood, the&nbsp; jacket and the floor grow harsher with every pass.&nbsp;&nbsp;

- [00:26:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1604) 4th step: copy the result into the Load Image&nbsp; once more, through the clipspace, just as before.&nbsp;&nbsp;

- [00:26:54](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1614) Add a rolled paper map under his left arm, and&nbsp; run it. The noise in the picture keeps growing,&nbsp;&nbsp;

- [00:27:01](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1621) even though each instruction is small. Last&nbsp; step. Copy the result in once more, through&nbsp;&nbsp;

- [00:27:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1628) the clipspace, as before. Now make him turn his&nbsp; head toward the window on the left, and run it.&nbsp;&nbsp;

- [00:27:23](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1643) Open it, and compare it with the 1st frame&nbsp; of this chain. The picture is badly degraded:&nbsp;&nbsp;

- [00:27:29](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1649) noisy textures, crushed shadows and harsh colour&nbsp; everywhere, although every instruction asked for&nbsp;&nbsp;

- [00:27:37](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1657) 1 small change. Each pass regenerated the&nbsp; whole frame from an already regenerated one,&nbsp;&nbsp;

- [00:27:44](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1664) and the small errors added up. Repeating the&nbsp; seed or the wording cannot undo that. The fix&nbsp;&nbsp;

- [00:27:51](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1671) is to go back to the clean anchor instead of&nbsp; repairing the weak pass. Unbypass the explorer,&nbsp;&nbsp;

- [00:27:58](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1678) and choose the workshop scene again in the 1st&nbsp; Load Image. Then ask for all the changes in 1&nbsp;&nbsp;

- [00:28:07](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1687) instruction: the smile, the glowing lantern,&nbsp; the map under his arm and the evening light,&nbsp;&nbsp;

- [00:28:14](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1694) keeping his face and outfit as in image 2. Run&nbsp; it. Open it. This result comes from 1 clean pass,&nbsp;&nbsp;

- [00:28:24](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1704) with the original scene and the anchor. He smiles,&nbsp; the lantern glows, the map is under his arm,&nbsp;&nbsp;

- [00:28:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1711) and the window shows the dusk, with clean textures&nbsp; everywhere. Last technique: relighting. First,&nbsp;&nbsp;

- [00:28:39](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1719) bypass the explorer again, so the encoder receives&nbsp; only the picture in the 1st slot. Then give the&nbsp;&nbsp;

- [00:28:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1727) relit pictures their own file name prefix, and&nbsp; choose the portrait from the list in the 1st Load&nbsp;&nbsp;

- [00:28:54](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1734) Image. Describe the light the way a photographer&nbsp; would. A night scene: the window is dark blue,&nbsp;&nbsp;

- [00:29:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1742) and a warm table lamp on the right lights his&nbsp; face from the right, so the shadows fall to&nbsp;&nbsp;

- [00:29:09](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1749) the left. Run it. Open the result, and check it&nbsp; carefully against each part of the instruction.&nbsp;&nbsp;

- [00:29:18](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1758) A lamp appeared on the right, his face is lit&nbsp; from that side, and the shadows fall toward the&nbsp;&nbsp;

- [00:29:25](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1765) window. The light follows what we described.&nbsp; Now check what else changed. The glasses,&nbsp;&nbsp;

- [00:29:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1771) the beard and the cup keep their shapes. The&nbsp; wall and the shelves darkened with the new light,&nbsp;&nbsp;

- [00:29:38](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1778) which relighting is expected to do. Let us save&nbsp; this workflow as a file. Open the workflow menu,&nbsp;&nbsp;

- [00:29:47](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1787) choose Export, and give it a clear name. The&nbsp; file keeps the nodes, the connections and our&nbsp;&nbsp;

- [00:29:55](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1795) last instruction, ready for the next session,&nbsp; on this computer or another one. Here it is, in&nbsp;&nbsp;

- [00:30:02](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1802) the lesson folder. The lesson files also contain&nbsp; the portrait, the anchor, the turnaround sheet,&nbsp;&nbsp;

- [00:30:08](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1808) the storyboard frames and every instruction we&nbsp; used today. Today we compared 2 ways to edit a&nbsp;&nbsp;

- [00:30:15](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1815) photo, with the same model and the same request.&nbsp; Image-to-image redraws a noisy copy of the photo;&nbsp;&nbsp;

- [00:30:24](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1824) the instruction editor regenerates it under&nbsp; the photo's guidance. We measured what changed&nbsp;&nbsp;

- [00:30:31](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1831) instead of trusting a clause. In the next lecture&nbsp; we decide where: masks, inpainting and layers, so&nbsp;&nbsp;

- [00:30:39](https://www.youtube.com/watch?v=abWxRSQFQz8&t=1839) pixels stay exactly where they must. Thank you for&nbsp; watching, and I will see you in the next tutorial.
