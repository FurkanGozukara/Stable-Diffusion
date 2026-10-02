# Generative AI Full Course - Lecture 3: Civitai Models & Watercolor LoRAs in ComfyUI

## Full tutorial link > https://www.youtube.com/watch?v=A6s6Qhl9YBk

[![Generative AI Full Course - Lecture 3: Civitai Models & Watercolor LoRAs in ComfyUI](https://i.ytimg.com/vi_webp/A6s6Qhl9YBk/maxresdefault.webp)](https://www.youtube.com/watch?v=A6s6Qhl9YBk "Generative AI Full Course - Lecture 3: Civitai Models & Watercolor LoRAs in ComfyUI")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-3-Civitai-Models-and-Watercolor-LoRAs-in-ComfyUI.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-3-Civitai-Models-and-Watercolor-LoRAs-in-ComfyUI.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Turn a vague image request into a deliberate, reproducible ComfyUI recipe. In Lecture 3 of this 14-lecture Generative AI course, we improve poster prompts, compare layouts at fixed seeds, generate text with Qwen Image, explore guidance, then install a Civitai fine-tune and watercolor LoRA and compare its strengths. Follow the complete Windows workflow from prompt to saved result.

🔗 Links:

Windows AI requirements guide: [ [https://www.patreon.com/posts/111553210](https://www.patreon.com/posts/111553210) ]

📦 Full course resource repository: [ [https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall](https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall) ]

▶️ Lecture 1 — Windows setup and your first image: [ [https://youtu.be/KgUhPAOjagI](https://youtu.be/KgUhPAOjagI) ]

▶️ Lecture 2 — ComfyUI workflows and updating: [ [https://youtu.be/T2_z7ZaffyI](https://youtu.be/T2_z7ZaffyI) ]

📺 Full course playlist: [ [https://www.youtube.com/playlist?list=PLUMEJUep1hiI](https://www.youtube.com/playlist?list=PLUMEJUep1hiI) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

🎯 You will learn how to trace prompt conditioning, give explicit layout instructions, compare fixed seeds, inspect generated text, distinguish conventional CFG from embedded guidance, choose compatible Civitai versions, read an author recipe and license, install models in the right folders, connect a LoRA, compare strengths while keeping the other settings fixed, and compare weight precision with the same text encoders.

🧩 Main topics include ComfyUI, Z-Image Turbo, illustrative tokenization, Qwen Image, FLUX, Klein 9B, Civitai fine-tunes, LoRA adapters, trigger words, watercolor style, seeds, CFG, samplers, schedulers, scaled FP8 and workflow JSON.

Use the chapters to jump to prompt layout, generated text, guidance, Civitai installation or the watercolor LoRA comparison.

⏱️ Chapters:

[00:00:00](https://youtu.be/A6s6Qhl9YBk?t=0) Turn a vague request into a directed image

[00:01:01](https://youtu.be/A6s6Qhl9YBk?t=61) Reuse the update route from Lecture Two

[00:02:31](https://youtu.be/A6s6Qhl9YBk?t=151) Follow text through the encoder into conditioning

[00:03:47](https://youtu.be/A6s6Qhl9YBk?t=227) Inspect token pieces with the illustrative tokenizer

[00:05:31](https://youtu.be/A6s6Qhl9YBk?t=331) Generate a poster from the vague prompt

[00:06:41](https://youtu.be/A6s6Qhl9YBk?t=401) Specify the subject, layout and quoted title

[00:08:04](https://youtu.be/A6s6Qhl9YBk?t=484) Reserve clear sky above the focal subject

[00:09:34](https://youtu.be/A6s6Qhl9YBk?t=574) Test the same instruction on more seeds

[00:12:48](https://youtu.be/A6s6Qhl9YBk?t=768) Load the matching Qwen Image components together

[00:14:18](https://youtu.be/A6s6Qhl9YBk?t=858) Generate the exact title and ticket price

[00:15:39](https://youtu.be/A6s6Qhl9YBk?t=939) Trace positive and negative predictions through guidance

[00:17:33](https://youtu.be/A6s6Qhl9YBk?t=1053) Compare warm sampling at two guidance values

[00:19:58](https://youtu.be/A6s6Qhl9YBk?t=1198) Separate embedded guidance from conventional two-branch CFG

[00:21:01](https://youtu.be/A6s6Qhl9YBk?t=1261) Find the exact compatible community model version

[00:24:02](https://youtu.be/A6s6Qhl9YBk?t=1442) Install the diffusion model and matched components

[00:25:40](https://youtu.be/A6s6Qhl9YBk?t=1540) Inspect the fine-tuned model on a product brief

[00:27:05](https://youtu.be/A6s6Qhl9YBk?t=1625) Find the watercolor adapter for FLUX dev

[00:29:18](https://youtu.be/A6s6Qhl9YBk?t=1758) Connect the adapter to its own FLUX graph

[00:30:30](https://youtu.be/A6s6Qhl9YBk?t=1830) Keep the prompt fixed while bypassing the adapter

[00:31:39](https://youtu.be/A6s6Qhl9YBk?t=1899) Compare three strengths around the author setting

[00:34:05](https://youtu.be/A6s6Qhl9YBk?t=2045) Compare weight precision with the encoder held fixed

[00:36:24](https://youtu.be/A6s6Qhl9YBk?t=2184) Identify the sampler and its noise schedule

[00:37:23](https://youtu.be/A6s6Qhl9YBk?t=2243) Choose the workflow for the actual brief

[00:38:59](https://youtu.be/A6s6Qhl9YBk?t=2339) Save the graph and exact source versions

[00:39:57](https://youtu.be/A6s6Qhl9YBk?t=2397) Use deliberate prompts and reproducible model choices

Use the supplied workflows and model source manifest. Community weights are not included; model_sources.md lists the Civitai pages, exact files, hashes and terms. The exact local FLUX FP8 download is unverified; the materials provide a verified BF16 route.

The tokenizer demonstration is illustrative; its token counts are not the image models’ counts.

After git pull --ff-only and python -m pip install -r requirements.txt, restart ComfyUI using the startup route from Lecture 2, then refresh the browser. A browser refresh alone does not load updated backend code.

This video is for anyone who wants more control over local AI images and a repeatable way to compare prompts, models and adapters.

💬 Check the pinned comment for resources and updates. Support the course on Patreon, join the SECourses Discord, or leave your workflow questions in the comments.

#ComfyUI #GenerativeAI #Civitai #LoRA #FLUX



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=0) Greetings everyone. Today I am going to&nbsp; show you how to direct image generation&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=5) in ComfyUI. We will turn this vague travel&nbsp; request into a poster with a clear subject,&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=14) layout, and title. I am opening another result&nbsp; from Qwen Image. We will inspect its title and&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=22) the ticket price at full size. This example&nbsp; gives us exact lettering to compare with the&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=28) generated scene. The red funicular sits below the&nbsp; title, with 2 birds at the upper right. This model&nbsp;&nbsp;

- [00:00:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=36) also writes our ticket price correctly. We will&nbsp; compare prompts, guidance, compatible models,&nbsp;&nbsp;

- [00:00:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=43) and a watercolor adapter. Check out the tutorial&nbsp; description for the chapters and workflow files.&nbsp;&nbsp;

- [00:00:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=50) We are continuing from the graph in Lecture 2.&nbsp; First, let us briefly update that installation,&nbsp;&nbsp;

- [00:00:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=56) then follow our words through the graph. I&nbsp; am opening the existing ComfyUI folder. We&nbsp;&nbsp;

- [00:01:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=63) will reuse the update procedure from Lecture&nbsp; 2. This copy contains the application and its&nbsp;&nbsp;

- [00:01:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=70) virtual environment, alongside the model&nbsp; path configuration we already prepared.&nbsp;&nbsp;

- [00:01:16](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=76) Use the address bar to open a Command Prompt&nbsp; in this folder. Check the working path before&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=83) continuing. We will use the existing virtual&nbsp; environment for both the source update and its&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=89) matching Python dependencies. First activate the&nbsp; virtual environment in this installation. This&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=96) keeps the following Python command attached to the&nbsp; environment we already use. Check the environment&nbsp;&nbsp;

- [00:01:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=102) name beside the prompt before continuing with&nbsp; the update. Now run the source update command.&nbsp;&nbsp;

- [00:01:49](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=109) The fast forward option keeps this operation on&nbsp; the existing source history. When it finishes,&nbsp;&nbsp;

- [00:01:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=115) the prompt returns so we can install the&nbsp; dependencies for that version. Next, install&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=122) the requirements through this environment. The&nbsp; command keeps the Python packages aligned with the&nbsp;&nbsp;

- [00:02:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=128) source. You can follow the complete explanation in&nbsp; Lecture 2 if you are doing this for the 1st time.&nbsp;&nbsp;

- [00:02:17](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=137) The update has finished, and ComfyUI is open.&nbsp; Refresh the browser to load the updated interface.&nbsp;&nbsp;

- [00:02:23](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=143) Now let us open our familiar Z-Image Turbo graph&nbsp; and inspect its text input. Our prompt enters&nbsp;&nbsp;

- [00:02:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=152) this text encoding node. I am using a short&nbsp; sentence about a copper robot carrying a blue&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=160) umbrella. Follow the connection from the encoder&nbsp; loader into this node. Text first becomes tokens&nbsp;&nbsp;

- [00:02:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=167) according to the selected tokenizer. A token can&nbsp; represent a word, part of a word, or punctuation.&nbsp;&nbsp;

- [00:02:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=174) The resulting identifiers refer to entries in that&nbsp; tokenizer vocabulary. The text encoder processes&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=182) those identifiers in context. Copper describes&nbsp; our robot, while blue describes the umbrella.&nbsp;&nbsp;

- [00:03:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=188) Their positions and surrounding words help form&nbsp; the features passed toward the image model.&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=195) This orange output carries conditioning. Follow&nbsp; its wire into the sampler, where it influences&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=202) generation. The token identifiers themselves&nbsp; are not colours or pixels. The decoder produces&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=208) pixels after the sampling stage. This graph does&nbsp; not display its tokenizer pieces. Let us use the&nbsp;&nbsp;

- [00:03:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=216) official OpenAI tokenizer to see the mechanism. It&nbsp; uses a different tokenizer, so its counts do not&nbsp;&nbsp;

- [00:03:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=223) describe our image model. Here is the tokenizer&nbsp; selection at the top. I am keeping the selected&nbsp;&nbsp;

- [00:03:52](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=232) mode and entering the same copper robot sentence.&nbsp; The coloured pieces below show how this particular&nbsp;&nbsp;

- [00:03:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=238) tokenizer divides that text. The display shows 8&nbsp; tokens for this sentence. Look at the full stop:&nbsp;&nbsp;

- [00:04:06](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=246) it has its own piece. Spaces also appear with&nbsp; the following words here. Counting words alone&nbsp;&nbsp;

- [00:04:12](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=252) would miss that punctuation token. You can&nbsp; switch from coloured text to token identifiers.&nbsp;&nbsp;

- [00:04:19](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=259) Each number names a vocabulary entry. A larger&nbsp; identifier does not mean a more important word,&nbsp;&nbsp;

- [00:04:25](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=265) a brighter colour, or stronger influence on the&nbsp; image. Now I am returning to the text view and&nbsp;&nbsp;

- [00:04:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=272) changing the punctuation. Watch the pieces&nbsp; and total update. The tokenizer decides how&nbsp;&nbsp;

- [00:04:39](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=279) these characters are grouped; punctuation does&nbsp; not follow a universal 1-token rule. Let us&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=286) replace robot with a longer compound word. Watch&nbsp; which coloured pieces cover the new word. Token&nbsp;&nbsp;

- [00:04:53](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=293) boundaries depend on the vocabulary, so a long&nbsp; word can occupy several entries instead of just 1.&nbsp;&nbsp;

- [00:05:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=300) Adding another sentence increases the text the&nbsp; encoder must process. More words help when they&nbsp;&nbsp;

- [00:05:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=307) add useful direction. Repetition and conflicting&nbsp; details can make the brief harder to satisfy,&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=314) even when they fit the context. Back in ComfyUI,&nbsp; we keep the tokenizer and encoder matched to this&nbsp;&nbsp;

- [00:05:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=321) model. Its own prompt wrappers and special tokens&nbsp; can add to the sequence. Our next step is to make&nbsp;&nbsp;

- [00:05:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=328) the visible brief more useful. Let us start with&nbsp; the vague request: make a beautiful travel poster.&nbsp;&nbsp;

- [00:05:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=335) I am entering it in the positive prompt. Our&nbsp; seed is fixed, and the size and sampling recipe&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=342) stay unchanged during this comparison. Run the&nbsp; graph and watch the image appear. The model has&nbsp;&nbsp;

- [00:05:49](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=349) to choose the destination, subject, layout, and&nbsp; lettering from a very broad request. We have given&nbsp;&nbsp;

- [00:05:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=356) it an intention rather than a detailed scene.&nbsp; Let us open the 1st poster result. We can inspect&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=364) the full image here, keeping the composition&nbsp; visible while checking the details requested in&nbsp;&nbsp;

- [00:06:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=370) the prompt. This result shows a traveller facing&nbsp; the mountains. The large travel word is readable,&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=378) but the smaller lettering is malformed. It looks&nbsp; like a poster, while inventing information we&nbsp;&nbsp;

- [00:06:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=384) never asked it to include. Now let us decide&nbsp; what the poster should contain. We want a red&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=391) funicular, a green hillside, blue sea, and a cream&nbsp; title. Those details give us specific features to&nbsp;&nbsp;

- [00:06:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=398) inspect after generation. I am replacing the&nbsp; vague request with the full example from the&nbsp;&nbsp;

- [00:06:45](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=405) lesson files. It names the subject and setting&nbsp; first. Then it specifies the title, the 2 birds,&nbsp;&nbsp;

- [00:06:52](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=412) and the flat watercolor style. The quoted title&nbsp; is Hill and Sea. We also place the birds at the&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=420) upper right. This gives the generator visible&nbsp; relationships to follow, instead of asking it to&nbsp;&nbsp;

- [00:07:06](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=426) decide what beautiful should mean. Our seed and&nbsp; sampling settings remain fixed. Let us run this&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=433) prompt and open the result. Keeping those settings&nbsp; stable makes it easier to connect the new visual&nbsp;&nbsp;

- [00:07:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=441) direction with the changes we see. Let us open the&nbsp; directed poster result. We can inspect the full&nbsp;&nbsp;

- [00:07:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=449) image here, keeping the composition visible while&nbsp; checking the details requested in the prompt. The&nbsp;&nbsp;

- [00:07:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=456) red funicular is now the focal subject. We have a&nbsp; green hillside and blue sea, with the cream title&nbsp;&nbsp;

- [00:07:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=463) above. Look at the upper right: the 2 birds are&nbsp; also present in this result. A direct generation&nbsp;&nbsp;

- [00:07:49](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=469) prompt describes the result to create. Editing&nbsp; prompts can instead ask to replace or remove&nbsp;&nbsp;

- [00:07:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=476) something from an input image. The useful wording&nbsp; follows the task and the model inputs. Let us give&nbsp;&nbsp;

- [00:08:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=484) the title more breathing room. I am adding 1&nbsp; instruction: keep the funicular entirely in the&nbsp;&nbsp;

- [00:08:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=490) lower half. The subject, colours, title, seed, and&nbsp; sampling settings remain the same. Before running,&nbsp;&nbsp;

- [00:08:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=498) look at where the funicular begins in the current&nbsp; image. Which relationship should the new sentence&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=505) change? Pause here and compare the subject height&nbsp; with the space behind the title. Return to the&nbsp;&nbsp;

- [00:08:37](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=517) graph with our revised prompt ready. Now run this&nbsp; version. We kept the original subject and style&nbsp;&nbsp;

- [00:08:44](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=524) while adding 1 placement instruction, so we can&nbsp; compare the vehicle height after sampling. Let us&nbsp;&nbsp;

- [00:08:51](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=531) open the revised layout. We can inspect the full&nbsp; image here, keeping the composition visible while&nbsp;&nbsp;

- [00:08:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=538) checking the details requested in the prompt.&nbsp; The funicular now sits lower in the frame,&nbsp;&nbsp;

- [00:09:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=544) leaving more clear sky. Other details change&nbsp; too, including the car shape and hillside. A&nbsp;&nbsp;

- [00:09:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=550) close view changes scale, while a low viewpoint&nbsp; changes where we look from. Background blur and&nbsp;&nbsp;

- [00:09:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=558) viewpoint describe different visual choices too.&nbsp; Treat camera words as directions to the generator.&nbsp;&nbsp;

- [00:09:25](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=565) Then inspect the image, just as we inspect this&nbsp; placement instruction, to see whether it fits the&nbsp;&nbsp;

- [00:09:31](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=571) brief. 1 useful result is a starting point. Let&nbsp; us repeat the same prompt pair on 2 more seeds.&nbsp;&nbsp;

- [00:09:39](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=579) Each seed gets both the original prompt and the&nbsp; lower-half instruction, with the same model and&nbsp;&nbsp;

- [00:09:46](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=586) recipe. I am changing the seed for the next pair.&nbsp; The model, dimensions, and sampling settings stay&nbsp;&nbsp;

- [00:09:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=594) fixed. We will run the original prompt first,&nbsp; then compare it with the same added placement&nbsp;&nbsp;

- [00:10:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=600) instruction. Here is the original prompt again.&nbsp; I am keeping its full wording and running it with&nbsp;&nbsp;

- [00:10:06](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=606) the new seed. This gives us the baseline image for&nbsp; the 2nd pair in our comparison. Let us open the&nbsp;&nbsp;

- [00:10:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=614) original result for this seed before changing its&nbsp; prompt. The upper edge of the funicular gives us a&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=622) starting position to compare with the next image.&nbsp; Add the same lower-half instruction to the prompt.&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=629) We are keeping the starting noise and every other&nbsp; recipe choice unchanged. With that ready, run the&nbsp;&nbsp;

- [00:10:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=636) graph and compare the revised vehicle position.&nbsp; Let us open the 2nd revised result. We can inspect&nbsp;&nbsp;

- [00:10:46](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=646) the full image here, keeping the composition&nbsp; visible while checking the details requested in&nbsp;&nbsp;

- [00:10:52](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=652) the prompt. The 2nd pair also moves the funicular&nbsp; lower. Notice the space between the title and the&nbsp;&nbsp;

- [00:10:59](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=659) vehicle. The lettering style changes at the same&nbsp; time, so we should inspect the rest of the brief&nbsp;&nbsp;

- [00:11:05](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=665) as well. Now repeat the pair on our 3rd seed.&nbsp; We are checking the placement instruction across&nbsp;&nbsp;

- [00:11:11](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=671) starting noises while holding the other recipe&nbsp; choices steady. I am changing that seed before&nbsp;&nbsp;

- [00:11:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=678) restoring the original prompt. Run the original&nbsp; prompt with this 3rd seed. We keep each baseline&nbsp;&nbsp;

- [00:11:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=686) beside its revised version, so the comparison&nbsp; stays matched. A different seed for each prompt&nbsp;&nbsp;

- [00:11:33](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=693) would mix 2 changes together. Let us open the&nbsp; original result for this seed before changing its&nbsp;&nbsp;

- [00:11:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=700) prompt. The upper edge of the funicular gives us a&nbsp; starting position to compare with the next image.&nbsp;&nbsp;

- [00:11:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=707) Add the same lower-half instruction to the prompt.&nbsp; We are keeping the starting noise and every other&nbsp;&nbsp;

- [00:11:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=714) recipe choice unchanged. With that ready, run the&nbsp; graph and compare the revised vehicle position.&nbsp;&nbsp;

- [00:12:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=724) Let us open the 3rd revised result. We can inspect&nbsp; the full image here, keeping the composition&nbsp;&nbsp;

- [00:12:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=730) visible while checking the details requested in&nbsp; the prompt. In this 3rd pair, the revised vehicle&nbsp;&nbsp;

- [00:12:17](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=737) again begins below the middle of the frame.&nbsp; Across all 3 pairs, the added sentence helps this&nbsp;&nbsp;

- [00:12:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=744) layout. The car, birds, and letter sizes still&nbsp; vary between results. If a required relationship&nbsp;&nbsp;

- [00:12:33](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=753) keeps failing, first simplify conflicting&nbsp; instructions. You can also use a reference image&nbsp;&nbsp;

- [00:12:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=758) or structural control. Those later tools help when&nbsp; text alone leaves too much freedom in the layout.&nbsp;&nbsp;

- [00:12:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=767) Now let us use Qwen Image 2.1 for the exact-text&nbsp; task. Open the Qwen workflow supplied with the&nbsp;&nbsp;

- [00:12:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=774) lesson. We will inspect its matched components&nbsp; before changing the prompt or copying settings&nbsp;&nbsp;

- [00:13:01](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=781) from another model. The diffusion loader selects&nbsp; the image model. The text encoder is the matching&nbsp;&nbsp;

- [00:13:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=787) Qwen3-VL 8B model. Its encoder path is different&nbsp; from the Z-Image graph we used a moment ago.&nbsp;&nbsp;

- [00:13:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=798) This text node prepares the positive and negative&nbsp; conditioning for Qwen Image. Follow both outputs&nbsp;&nbsp;

- [00:13:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=804) toward the sampler. The node belongs to this model&nbsp; recipe, so we keep it when adapting the workflow&nbsp;&nbsp;

- [00:13:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=812) to our poster. The decoder is the Qwen Image 2.1&nbsp; VAE. It belongs with this model and its latent&nbsp;&nbsp;

- [00:13:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=820) representation. A matching socket colour alone&nbsp; is not enough to choose a different family of&nbsp;&nbsp;

- [00:13:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=827) decoder. I am setting the landscape dimensions&nbsp; for our poster. The workflow uses 25 steps,&nbsp;&nbsp;

- [00:13:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=834) Euler sampling, the simple schedule, and&nbsp; guidance 1. Keep those matched settings&nbsp;&nbsp;

- [00:13:59](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=839) while we test the words we want it to draw. Our&nbsp; title stays the same. Below it, we will add the&nbsp;&nbsp;

- [00:14:05](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=845) exact ticket line from the lesson files. This&nbsp; gives us letters, a currency symbol, digits,&nbsp;&nbsp;

- [00:14:12](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=852) a decimal point, and punctuation to inspect in&nbsp; the result. I am entering the complete poster&nbsp;&nbsp;

- [00:14:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=860) prompt with its quoted ticket line. The price is&nbsp; $12.99. Let us run the graph, then inspect the&nbsp;&nbsp;

- [00:14:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=868) actual text instead of judging only the overall&nbsp; design. Let us open the exact-text result. We&nbsp;&nbsp;

- [00:14:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=874) can inspect the full image here, keeping the&nbsp; composition visible while checking the details&nbsp;&nbsp;

- [00:14:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=880) requested in the prompt. The title reads Hill&nbsp; and Sea correctly. Look at the smaller line next.&nbsp;&nbsp;

- [00:14:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=887) Tickets has the requested capital letter, followed&nbsp; by the dollar sign, the price, and the exclamation&nbsp;&nbsp;

- [00:14:53](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=893) mark at the end. The decimal point separates&nbsp; 12 from 99. Both final digits are present.&nbsp;&nbsp;

- [00:15:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=900) This result satisfies our written text request,&nbsp; so we can now inspect the picture itself with that&nbsp;&nbsp;

- [00:15:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=908) part of the brief accounted for. There are 2 birds&nbsp; at the upper right. The red funicular sits on the&nbsp;&nbsp;

- [00:15:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=914) green hillside, with the sea behind it. Correct&nbsp; lettering and a convincing scene are separate&nbsp;&nbsp;

- [00:15:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=920) checks, and this example lets us inspect both.&nbsp; For a ticket price that you need to edit later,&nbsp;&nbsp;

- [00:15:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=926) keep the artwork and text separate. A&nbsp; deterministic text layer lets you change&nbsp;&nbsp;

- [00:15:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=932) the exact amount directly, while keeping the&nbsp; generated scene you already prefer. Let us turn&nbsp;&nbsp;

- [00:15:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=940) to guidance in a conventional 2-branch recipe.&nbsp; This is the base version of Klein 9B. It uses&nbsp;&nbsp;

- [00:15:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=948) its own matched encoder, decoder, latent, and&nbsp; sampling setup, rather than the Turbo defaults.&nbsp;&nbsp;

- [00:15:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=956) Our positive prompt describes a copper teapot on&nbsp; the left and a blue cup on the right. It also asks&nbsp;&nbsp;

- [00:16:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=963) for a wooden table and soft light from the left.&nbsp; Those details make adherence easy to inspect. The&nbsp;&nbsp;

- [00:16:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=970) positive and negative text nodes feed this guider.&nbsp; The negative field is empty here. Conventional&nbsp;&nbsp;

- [00:16:17](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=977) guidance compares the model prediction from the&nbsp; positive conditioning with another prediction from&nbsp;&nbsp;

- [00:16:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=982) the negative or empty conditioning. The scale&nbsp; controls how those predictions are combined.&nbsp;&nbsp;

- [00:16:30](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=990) Start with the negative prediction, then add the&nbsp; scaled difference between positive and negative.&nbsp;&nbsp;

- [00:16:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=996) The formula describes the same 2 branches you&nbsp; can follow in this graph. What happens when the&nbsp;&nbsp;

- [00:16:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1002) scale is 1? Look at the 2 negative terms in that&nbsp; expression. Pause here and decide which prediction&nbsp;&nbsp;

- [00:16:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1010) remains after the difference is added back to&nbsp; the starting negative prediction. At 1, the&nbsp;&nbsp;

- [00:17:02](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1022) negative terms cancel and the positive prediction&nbsp; remains. Ordinary ComfyUI sampling can skip the&nbsp;&nbsp;

- [00:17:09](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1029) negative prediction in this case. That removes&nbsp; work from the denoiser, even though the negative&nbsp;&nbsp;

- [00:17:15](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1035) connection still exists. Above 1, both predictions&nbsp; generally contribute, sometimes through a batch.&nbsp;&nbsp;

- [00:17:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1041) The negative prompt steers away from a competing&nbsp; description. It does not erase named pixels from a&nbsp;&nbsp;

- [00:17:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1048) completed picture, and its effect depends on this&nbsp; guidance path. We will compare guidance 5 with&nbsp;&nbsp;

- [00:17:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1056) guidance 1 using the same product prompt and seed.&nbsp; The dimensions, 20 steps, sampler, and schedule&nbsp;&nbsp;

- [00:17:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1063) stay fixed. Both measurements use the model after&nbsp; it has already loaded. First run the recommended&nbsp;&nbsp;

- [00:17:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1070) higher setting. We will inspect whether the result&nbsp; follows the 2 requested objects, their positions,&nbsp;&nbsp;

- [00:17:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1076) and the wooden surface. Keeping a specific brief&nbsp; makes this guidance comparison easier to judge.&nbsp;&nbsp;

- [00:18:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1084) Let us open the higher-guidance result. We&nbsp; can inspect the full image here, keeping the&nbsp;&nbsp;

- [00:18:11](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1091) composition visible while checking the details&nbsp; requested in the prompt. There is a copper teapot&nbsp;&nbsp;

- [00:18:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1098) with a fitted lid on the left, a blue cup on the&nbsp; right, and a wooden table beneath them. Those&nbsp;&nbsp;

- [00:18:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1104) features match the object and surface choices in&nbsp; our brief. Return to the graph for the 2nd sample.&nbsp;&nbsp;

- [00:18:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1112) Change the guidance scale to 1 while keeping&nbsp; the other settings fixed. Then run again so we&nbsp;&nbsp;

- [00:18:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1118) can compare the objects and surface in the result.&nbsp; Let us open the guidance-1 result. We can inspect&nbsp;&nbsp;

- [00:18:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1128) the full image here, keeping the composition&nbsp; visible while checking the details requested&nbsp;&nbsp;

- [00:18:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1134) in the prompt. The image changes substantially.&nbsp; The pot is open, a saucer appears under the cup,&nbsp;&nbsp;

- [00:19:02](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1142) and the tabletop no longer has the same clear wood&nbsp; grain. Compare those differences with the specific&nbsp;&nbsp;

- [00:19:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1148) objects we requested. For this brief, I prefer the&nbsp; higher setting because it follows the requested&nbsp;&nbsp;

- [00:19:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1154) objects and surface more closely. Guidance is&nbsp; part of the model recipe. Increasing it further&nbsp;&nbsp;

- [00:19:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1160) is not automatically a useful next step. Our warm&nbsp; reference sampler took about 24 seconds at 5,&nbsp;&nbsp;

- [00:19:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1168) and about 12 seconds at 1. Those are the sampling&nbsp; intervals in this comparison. Model loading,&nbsp;&nbsp;

- [00:19:36](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1176) text encoding, and decoding add other work around&nbsp; that stage. We also changed the starting noise&nbsp;&nbsp;

- [00:19:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1183) between warm-up and measurement. That makes the&nbsp; sampler execute again. Reusing a fully cached&nbsp;&nbsp;

- [00:19:51](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1191) output would measure the cache response instead&nbsp; of the computation we wanted to compare. Now&nbsp;&nbsp;

- [00:19:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1198) look at the working FLUX dev graph. This node&nbsp; is called Flux Guidance, while the sampler has&nbsp;&nbsp;

- [00:20:05](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1205) a separate CFG value. The similar names can hide&nbsp; an important difference in how the model works.&nbsp;&nbsp;

- [00:20:12](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1212) Flux Guidance supplies an embedded guidance value&nbsp; learned by this model. We are using 3.5 there.&nbsp;&nbsp;

- [00:20:19](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1219) The sampler scale remains 1, so that embedded&nbsp; value does not mean the sampler is combining&nbsp;&nbsp;

- [00:20:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1226) 2 predictions at 3.5. Use the model template as&nbsp; the starting point for both controls. A distilled&nbsp;&nbsp;

- [00:20:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1234) recipe can require guidance 1. Copying the higher&nbsp; Klein setting into this graph would mix settings&nbsp;&nbsp;

- [00:20:41](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1241) from 2 different sampling arrangements. The same&nbsp; compatibility principle applies when we choose&nbsp;&nbsp;

- [00:20:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1248) a community model. We need its exact family,&nbsp; component files, and sampling recipe. Let us&nbsp;&nbsp;

- [00:20:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1255) keep those questions in mind as we select the next&nbsp; model. Let us find a community model. In Google,&nbsp;&nbsp;

- [00:21:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1263) search for Civitai. The 1st result shows the&nbsp; official address, civitai.com, so I am opening&nbsp;&nbsp;

- [00:21:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1270) it. This is Civitai, where people share models&nbsp; and adapters. The model we need is FasciumKLEIN9B.&nbsp;&nbsp;

- [00:21:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1280) I am typing its name into the search box and&nbsp; pressing Enter. The search finds 4 models with&nbsp;&nbsp;

- [00:21:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1289) similar names. 1 is built for Klein 4B, and 2 are&nbsp; GGUF conversions from another uploader. A similar&nbsp;&nbsp;

- [00:21:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1298) name is not enough to choose a file. So let us&nbsp; filter by the base model. I type Flux and choose&nbsp;&nbsp;

- [00:21:46](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1306) Flux.2 Klein 9B. Now only models made for that&nbsp; family remain. The GGUF entry is a conversion by&nbsp;&nbsp;

- [00:21:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1315) another user. We want the original model from its&nbsp; author, Fascium. I am opening FasciumKLEIN9B. The&nbsp;&nbsp;

- [00:22:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1324) model page opens on its newest version, called&nbsp; LAST_MERGE. That is the exact version we will&nbsp;&nbsp;

- [00:22:11](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1331) use. The details list a checkpoint merge built&nbsp; on Flux.2 Klein 9B. Before downloading, read&nbsp;&nbsp;

- [00:22:19](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1339) the author's description. It often contains the&nbsp; settings the model was tested with. I am opening&nbsp;&nbsp;

- [00:22:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1346) the full text and scrolling to the recommended&nbsp; settings. The author's tested configuration&nbsp;&nbsp;

- [00:22:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1354) uses CFG 2, 15 steps, and Euler ancestral. The&nbsp; resolution for a landscape image is 1536 by 1024,&nbsp;&nbsp;

- [00:22:44](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1364) which matches our graph. Further down, the&nbsp; technical details say this is a step-distilled&nbsp;&nbsp;

- [00:22:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1370) model. Distilled models usually run with very few&nbsp; steps at CFG 1, but this author tested 15 steps&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1377) at CFG 2. Now the terms. The license entry links&nbsp; the non-commercial FLUX license from Black Forest&nbsp;&nbsp;

- [00:23:06](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1386) Labs. The green icons are the permissions the&nbsp; uploader selected on this site. The base model's&nbsp;&nbsp;

- [00:23:13](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1393) license still applies to a merge built on it.&nbsp; Non-commercial terms allow learning and personal&nbsp;&nbsp;

- [00:23:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1401) experiments. Read the linked license before any&nbsp; commercial use. Now back up to the download box.&nbsp;&nbsp;

- [00:23:27](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1407) This version offers 2 variants of the same model,&nbsp; so I open the list to compare them before choosing&nbsp;&nbsp;

- [00:23:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1414) a file. The 16-bit file is about 17 gigabytes. The&nbsp; 8-bit file is about 8.5 gigabytes, roughly 1 byte&nbsp;&nbsp;

- [00:23:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1423) for each of the 9 billion diffusion model weights.&nbsp; So this file holds only the diffusion model. The&nbsp;&nbsp;

- [00:23:51](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1431) text encoder and the VAE come separately, and we&nbsp; already have the matching Klein 9B components.&nbsp;&nbsp;

- [00:23:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1438) We will use the 8-bit file. I click the download&nbsp; button of the 8-bit file. My browser asks where to&nbsp;&nbsp;

- [00:24:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1447) save it. Because this file is a diffusion model,&nbsp; it belongs in the diffusion models folder. I paste&nbsp;&nbsp;

- [00:24:13](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1453) the full path of that folder, followed by the&nbsp; file name, and save. In a standard installation&nbsp;&nbsp;

- [00:24:19](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1459) it is ComfyUI, models, diffusion models. Your&nbsp; drive letter can be different. If your browser&nbsp;&nbsp;

- [00:24:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1466) saves to the downloads folder instead, move the&nbsp; file into this folder afterwards. The download&nbsp;&nbsp;

- [00:24:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1472) is running now, and this large file takes a while.&nbsp; The download has finished. In the downloads list,&nbsp;&nbsp;

- [00:24:41](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1481) I use Show in folder. Here is the Fascium&nbsp; file inside the diffusion models folder,&nbsp;&nbsp;

- [00:24:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1487) where ComfyUI looks for diffusion models. I close&nbsp; this folder window and switch back to the ComfyUI&nbsp;&nbsp;

- [00:24:53](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1493) tab in the browser. The graph for this model&nbsp; family is the one from the guidance chapter.&nbsp;&nbsp;

- [00:25:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1500) I open that Klein workflow again. ComfyUI was&nbsp; already running when the new file arrived,&nbsp;&nbsp;

- [00:25:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1507) so I press R to refresh the model lists. In the&nbsp; diffusion model loader, I choose the Fascium file,&nbsp;&nbsp;

- [00:25:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1514) so only the diffusion weights change. The&nbsp; Qwen3 8B text encoder and the FLUX.2 VAE stay,&nbsp;&nbsp;

- [00:25:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1522) because they match the Klein 9B family. You should&nbsp; not swap in the Klein 4B encoder. The 4B and 9B&nbsp;&nbsp;

- [00:25:31](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1531) models use text encoders of different sizes, and&nbsp; each diffusion model expects features from its own&nbsp;&nbsp;

- [00:25:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1538) encoder. Now I apply the author's tested settings.&nbsp; CFG goes from 5 to 2. Because CFG is above 1,&nbsp;&nbsp;

- [00:25:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1548) the empty negative branch is computed as well, as&nbsp; we saw in the guidance chapter. The steps go from&nbsp;&nbsp;

- [00:25:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1555) 20 to 15, and the sampler becomes Euler ancestral.&nbsp; The author calls it a scheduler, but in ComfyUI&nbsp;&nbsp;

- [00:26:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1563) it is the sampler choice. The FLUX.2 scheduler&nbsp; node stays. I also change the file name prefix,&nbsp;&nbsp;

- [00:26:11](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1571) so this result is easy to find. The prompt, seed,&nbsp; and size stay the same as in the guidance chapter.&nbsp;&nbsp;

- [00:26:19](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1579) Let us run it. Now open the result, and let&nbsp; us check it against the brief 1 request at&nbsp;&nbsp;

- [00:26:27](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1587) a time. There is 1 polished copper teapot on&nbsp; the left and 1 blue ceramic cup on the right,&nbsp;&nbsp;

- [00:26:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1595) on a wooden table with clear grain. Look at the&nbsp; copper surface: it even reflects the blue cup. The&nbsp;&nbsp;

- [00:26:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1603) light comes from the left, the background stays&nbsp; neutral grey, and there are no extra objects or&nbsp;&nbsp;

- [00:26:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1610) text. This fine-tune follows our product brief&nbsp; with its author's recipe. Next, a style adapter.&nbsp;&nbsp;

- [00:26:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1618) It belongs to a different model family, so we&nbsp; return to Civitai. Back in the Civitai tab,&nbsp;&nbsp;

- [00:27:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1627) I search for the adapter. I type watercolor&nbsp; painting into the search box and press Enter.&nbsp;&nbsp;

- [00:27:17](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1637) The search finds hundreds of results, far too many&nbsp; to check 1 by 1, so we need the filters again.&nbsp;&nbsp;

- [00:27:25](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1645) This time the base model is Flux.1 D, which is&nbsp; the FLUX dev family. I type Flux.1 and choose it&nbsp;&nbsp;

- [00:27:33](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1653) from the list. The model type is LoRA. A LoRA is&nbsp; an adapter for a compatible model, not a complete&nbsp;&nbsp;

- [00:27:40](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1660) model, so it only works with its own base family.&nbsp; The 1st result is Watercolor painting by Adel_AI,&nbsp;&nbsp;

- [00:27:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1670) with many downloads and positive reviews. I am&nbsp; opening it. Each version can target a different&nbsp;&nbsp;

- [00:27:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1678) base model. Version 7 shows Z-Image Turbo&nbsp; as its base model. Version 4 shows Flux.1 D,&nbsp;&nbsp;

- [00:28:06](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1686) which is the one we want. The trigger word is&nbsp; AquarelleIV, written as 1 word. We will put it at&nbsp;&nbsp;

- [00:28:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1694) the start of our prompt, as the author does in the&nbsp; examples. The version notes recommend a strength&nbsp;&nbsp;

- [00:28:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1700) around 0.65, 25 steps, dpmpp_2m with sgm_uniform,&nbsp; and guidance 3.5. The examples on this page use a&nbsp;&nbsp;

- [00:28:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1715) FLUX-based merge called Fluxmania. We will use&nbsp; the original FLUX dev model from this lecture,&nbsp;&nbsp;

- [00:28:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1722) from the same FLUX.1 family. Open the tensor&nbsp; list. Every entry starts with lora_unet,&nbsp;&nbsp;

- [00:28:51](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1731) which means these weights patch the diffusion&nbsp; model. This file has no text encoder weights. The&nbsp;&nbsp;

- [00:28:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1738) adapter file is only about 18 megabytes, because&nbsp; it stores small changes instead of a whole model.&nbsp;&nbsp;

- [00:29:05](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1745) I click download. In the save dialog, I paste&nbsp; the path of the loras folder in the same models&nbsp;&nbsp;

- [00:29:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1754) directory, with the file name, and save. Back&nbsp; in ComfyUI, I open the FLUX dev graph from the&nbsp;&nbsp;

- [00:29:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1761) guidance chapter. This adapter was trained&nbsp; for FLUX.1 dev, so it belongs on this graph,&nbsp;&nbsp;

- [00:29:26](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1766) not on the Klein 9B graph. Its weights are shaped&nbsp; for the layers of FLUX.1. Klein 9B has a different&nbsp;&nbsp;

- [00:29:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1774) architecture, so those layers do not match, even&nbsp; though both model names contain FLUX. I press R&nbsp;&nbsp;

- [00:29:41](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1781) to refresh the lists. Then I double-click an&nbsp; empty part of the canvas and search for Load&nbsp;&nbsp;

- [00:29:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1788) LoRA. The new node follows the pointer until I&nbsp; click. The search offered 2 loaders. Load LoRA&nbsp;&nbsp;

- [00:29:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1795) patches only the diffusion model, and the Model&nbsp; and CLIP version also patches the text encoder.&nbsp;&nbsp;

- [00:30:01](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1801) The tensor list showed only diffusion weights. I&nbsp; connect the diffusion model output to its model&nbsp;&nbsp;

- [00:30:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1808) input. Then its output goes to the sampler model&nbsp; input, and replaces the old connection. The file&nbsp;&nbsp;

- [00:30:16](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1816) list already shows the Aquarelle file. The&nbsp; strength model value scales how strongly the&nbsp;&nbsp;

- [00:30:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1822) adapter changes the diffusion model; 1 means its&nbsp; full trained change. Now the watercolor prompt. It&nbsp;&nbsp;

- [00:30:32](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1832) starts with the trigger word AquarelleIV, followed&nbsp; by a stone lighthouse on a rocky coast, soft blue&nbsp;&nbsp;

- [00:30:39](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1839) sea, and loose watercolor washes on paper. First,&nbsp; the baseline without the adapter. I select the&nbsp;&nbsp;

- [00:30:46](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1846) LoRA loader and press Control B to bypass it. The&nbsp; model now passes through unchanged. The seed stays&nbsp;&nbsp;

- [00:30:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1855) 271828, with 25 steps and guidance 3.5, exactly&nbsp; as in the guidance chapter. I name this output&nbsp;&nbsp;

- [00:31:04](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1864) watercolor bypass, so the file is easy to find&nbsp; later, and then I run the graph. Now open the&nbsp;&nbsp;

- [00:31:13](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1873) result. Even without the adapter, FLUX dev paints&nbsp; a watercolor-like lighthouse, because our prompt&nbsp;&nbsp;

- [00:31:21](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1881) asks for washes on paper. The rocks are smooth,&nbsp; rounded boulders with firm outlines. The house has&nbsp;&nbsp;

- [00:31:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1888) a clean red roof, and the sea fills the lower half&nbsp; with even blue washes. Keep this baseline in mind,&nbsp;&nbsp;

- [00:31:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1895) because it tells us what the adapter adds. Now&nbsp; I enable the adapter again with Control B and&nbsp;&nbsp;

- [00:31:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1903) set the model strength to the author's 0.65.&nbsp; Everything else stays the same. I name this&nbsp;&nbsp;

- [00:31:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1910) output Watercolor_065 and run it. Every image&nbsp; in this comparison uses the same prompt, seed,&nbsp;&nbsp;

- [00:31:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1918) steps, and guidance. Now open this result and&nbsp; compare it with the baseline we just saw. At 0.65,&nbsp;&nbsp;

- [00:32:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1928) the washes on the rocks become mottled, with ochre&nbsp; and grey pigment, and the outlines soften. The&nbsp;&nbsp;

- [00:32:15](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1935) view also changes, with a beach and a more distant&nbsp; lighthouse. So the strength changes composition as&nbsp;&nbsp;

- [00:32:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1942) well as texture, not only the painting style. Now&nbsp; 0.4, a weaker setting. I return to the graph and&nbsp;&nbsp;

- [00:32:30](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1950) change only the model strength on the LoRA loader,&nbsp; leaving every other value as it was. I name the&nbsp;&nbsp;

- [00:32:37](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1957) output Watercolor_040, so each file carries its&nbsp; strength, and I run the graph again. Now open&nbsp;&nbsp;

- [00:32:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1967) the result for 0.4. The rocks are still firm and&nbsp; angular, with darker shadows and clearer outlines.&nbsp;&nbsp;

- [00:32:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1974) It sits between the baseline and the author's&nbsp; setting. Finally 0.8, a stronger setting. Back in&nbsp;&nbsp;

- [00:33:01](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1981) the graph, I again change only the model strength&nbsp; on the LoRA loader and keep everything else as it&nbsp;&nbsp;

- [00:33:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1987) was. I name this output Watercolor_080, then I&nbsp; run the graph 1 more time with everything else&nbsp;&nbsp;

- [00:33:15](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=1995) unchanged. Now open the result for 0.8 and look&nbsp; closely at the rocks. The washes there become&nbsp;&nbsp;

- [00:33:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2004) blotchier, and a handwritten signature appears&nbsp; in the lower right corner. The adapter can carry&nbsp;&nbsp;

- [00:33:31](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2011) habits from its training images, such as that&nbsp; signature. So inspect each result for unwanted&nbsp;&nbsp;

- [00:33:39](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2019) marks before you use it. Here are all 4 results&nbsp; side by side. Higher strength is not automatically&nbsp;&nbsp;

- [00:33:45](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2025) better. For this brief, I would keep 0.65: clear&nbsp; watercolor washes without the signature. Keep the&nbsp;&nbsp;

- [00:33:53](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2033) trigger and strength with each result, because&nbsp; the adapter's influence changes with them. Next,&nbsp;&nbsp;

- [00:33:58](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2038) we set the adapter aside and look at the FLUX dev&nbsp; weights themselves. Let us compare 2 precisions of&nbsp;&nbsp;

- [00:34:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2047) the same FLUX dev image model. The text encoders&nbsp; remain unchanged. I am keeping the prompt, seed,&nbsp;&nbsp;

- [00:34:13](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2053) dimensions, sampler, schedule, and guidance&nbsp; fixed while switching the diffusion weights.&nbsp;&nbsp;

- [00:34:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2060) The 1st file uses 16-bit floating point weights.&nbsp; The scaled 8-bit file compresses supported weights&nbsp;&nbsp;

- [00:34:27](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2067) using scale factors. Some tensors keep higher&nbsp; precision, so this file contains more than 1&nbsp;&nbsp;

- [00:34:34](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2074) numerical format. The larger file is about 24&nbsp; gigabytes, while the scaled file is about 12&nbsp;&nbsp;

- [00:34:41](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2081) gigabytes. That is storage size. The memory&nbsp; used during a run also includes the encoder,&nbsp;&nbsp;

- [00:34:48](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2088) intermediate tensors, and other GPU allocations.&nbsp; Both reference measurements use a loaded model and&nbsp;&nbsp;

- [00:34:55](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2095) fresh sampling. The larger version takes about 17&nbsp; seconds, and the smaller version also takes about&nbsp;&nbsp;

- [00:35:01](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2101) 17 seconds. Here, reducing the stored weights does&nbsp; not produce a useful speed gain. Sampled device&nbsp;&nbsp;

- [00:35:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2108) memory reaches about 29 gibibytes with the larger&nbsp; weights, and 16 with the scaled version. This&nbsp;&nbsp;

- [00:35:16](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2116) reading includes other allocations on the device.&nbsp; It is separate from the file size. Let us open the&nbsp;&nbsp;

- [00:35:24](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2124) larger-precision reference result. We can inspect&nbsp; the full image here, keeping the composition&nbsp;&nbsp;

- [00:35:30](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2130) visible while checking the details requested in&nbsp; the prompt. Now inspect both images. The copper&nbsp;&nbsp;

- [00:35:38](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2138) pot and blue cup have nearly the same arrangement,&nbsp; while the highlights and small details differ.&nbsp;&nbsp;

- [00:35:44](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2144) The smaller weights are useful here because&nbsp; they preserve this brief with substantially less&nbsp;&nbsp;

- [00:35:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2150) memory. Now open the scaled-precision reference&nbsp; beside the comparison in mind. Check the pot&nbsp;&nbsp;

- [00:35:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2156) highlights, the cup rim, and the shadow edges. We&nbsp; are looking for changes that matter to this brief,&nbsp;&nbsp;

- [00:36:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2163) rather than expecting identical pixels. If a&nbsp; precision change damages an important feature,&nbsp;&nbsp;

- [00:36:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2170) compare another supported format before changing&nbsp; the prompt. Keep the encoder precision fixed&nbsp;&nbsp;

- [00:36:18](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2178) during that test. Otherwise, you would be changing&nbsp; 2 parts of the pipeline together. 2 more fields&nbsp;&nbsp;

- [00:36:25](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2185) belong in our saved recipe: the sampler and&nbsp; scheduler. The sampler chooses how to update the&nbsp;&nbsp;

- [00:36:31](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2191) latent at each step. The scheduler determines the&nbsp; noise levels used along that sequence. Here we are&nbsp;&nbsp;

- [00:36:39](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2199) using the selected DPM++ 2M sampler with the SGM&nbsp; uniform schedule. The step count determines how&nbsp;&nbsp;

- [00:36:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2207) many updates this recipe performs before decoding&nbsp; the result. Those choices work with the model and&nbsp;&nbsp;

- [00:36:54](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2214) any adapter applied to it. Start from the matched&nbsp; recipe before comparing another supported pair. A&nbsp;&nbsp;

- [00:37:00](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2220) larger step count alone does not tell you whether&nbsp; the resulting image will satisfy the prompt. Our&nbsp;&nbsp;

- [00:37:07](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2227) saved graph includes the numerical method, the&nbsp; schedule, and the guidance settings together.&nbsp;&nbsp;

- [00:37:14](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2234) Keeping all of them makes the result easier to&nbsp; reproduce than saving only a prompt and the name&nbsp;&nbsp;

- [00:37:20](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2240) of a model. Let us choose for the actual task.&nbsp; For quick exploration of this poster layout,&nbsp;&nbsp;

- [00:37:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2248) the Z-Image graph gave us useful iterations. The&nbsp; explicit placement sentence helped across the 3&nbsp;&nbsp;

- [00:37:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2255) seeds we inspected. Open the Qwen poster again for&nbsp; the exact-text decision. We will keep its title,&nbsp;&nbsp;

- [00:37:43](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2263) price, and scene visible together while deciding&nbsp; which part should remain editable when this&nbsp;&nbsp;

- [00:37:50](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2270) design is used. For the exact-text example, Qwen&nbsp; Image produced the requested title and price. We&nbsp;&nbsp;

- [00:37:57](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2277) checked every character before accepting it. A&nbsp; result that looks attractive can still need a&nbsp;&nbsp;

- [00:38:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2283) different route for editable information. Suppose&nbsp; the ticket price changes tomorrow and must be&nbsp;&nbsp;

- [00:38:09](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2289) exact. Would you regenerate the entire poster,&nbsp; or edit a text layer over the artwork? Pause&nbsp;&nbsp;

- [00:38:16](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2296) here and decide which operation gives you direct&nbsp; control over those digits. Use the separate text&nbsp;&nbsp;

- [00:38:28](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2308) layer for that requirement. It lets you type the&nbsp; new price without asking the image model to redraw&nbsp;&nbsp;

- [00:38:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2315) the scene. Choose generation for the artwork and&nbsp; a direct text tool for the final information.&nbsp;&nbsp;

- [00:38:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2322) For a product image or watercolor style, use&nbsp; the compatible recipe whose result fits the&nbsp;&nbsp;

- [00:38:49](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2329) brief. Compare the visible qualities you need,&nbsp; then consider memory and runtime. A model name&nbsp;&nbsp;

- [00:38:56](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2336) alone does not make that decision. Let us save&nbsp; the selected graph as an ordinary workflow file.&nbsp;&nbsp;

- [00:39:03](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2343) Give it a name that identifies the example and&nbsp; recipe. The file keeps its nodes, connections,&nbsp;&nbsp;

- [00:39:10](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2350) widget values, and the arrangement you can see&nbsp; here. Here is the exported file in the lesson&nbsp;&nbsp;

- [00:39:16](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2356) folder. Open it in a new ComfyUI tab and inspect&nbsp; the restored prompt and seed. Keep the original&nbsp;&nbsp;

- [00:39:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2362) graph available while you compare the 2 copies.&nbsp; The model selections and sampling settings are&nbsp;&nbsp;

- [00:39:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2369) restored too. The workflow describes which weights&nbsp; to load; it does not contain those weights. Keep&nbsp;&nbsp;

- [00:39:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2375) the source links and exact versions with the&nbsp; graph so you can obtain the same components.&nbsp;&nbsp;

- [00:39:42](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2382) For the adapter example, also keep the trigger&nbsp; and strength. For our prompt experiment,&nbsp;&nbsp;

- [00:39:47](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2387) keep the full seed list and both prompts. Those&nbsp; small records make your next comparison much&nbsp;&nbsp;

- [00:39:53](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2393) easier to understand and repeat. We started with a&nbsp; vague request and turned it into visible choices.&nbsp;&nbsp;

- [00:40:01](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2401) You have seen how words become conditioning,&nbsp; how layout instructions behave across seeds,&nbsp;&nbsp;

- [00:40:08](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2408) and why exact text needs its own inspection. You&nbsp; can now compare guidance, select compatible model&nbsp;&nbsp;

- [00:40:15](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2415) components, and test an adapter against its&nbsp; baseline. Keep the result beside the complete&nbsp;&nbsp;

- [00:40:22](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2422) recipe. Then change the part that matters to&nbsp; the image you want to create. The workflow files&nbsp;&nbsp;

- [00:40:29](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2429) and chapters are in the tutorial description. In&nbsp; the next lecture, we will build on these choices&nbsp;&nbsp;

- [00:40:35](https://www.youtube.com/watch?v=A6s6Qhl9YBk&t=2435) using reference images for editing. Thank you for&nbsp; watching, and I will see you in the next tutorial.
