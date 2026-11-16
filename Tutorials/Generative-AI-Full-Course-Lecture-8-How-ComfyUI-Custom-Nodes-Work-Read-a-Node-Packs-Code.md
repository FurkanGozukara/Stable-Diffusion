# Generative AI Full Course - Lecture 8: How ComfyUI Custom Nodes Work - Read a Node Pack's Code

## Full tutorial link > https://www.youtube.com/watch?v=RTVazGmuLJs

[![Generative AI Full Course - Lecture 8: How ComfyUI Custom Nodes Work - Read a Node Pack's Code](https://i.ytimg.com/vi_webp/RTVazGmuLJs/maxresdefault.webp)](https://www.youtube.com/watch?v=RTVazGmuLJs "Generative AI Full Course - Lecture 8: How ComfyUI Custom Nodes Work - Read a Node Pack's Code")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-8-How-ComfyUI-Custom-Nodes-Work-Read-a-Node-Packs-Code.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Generative-AI-Full-Course-Lecture-8-How-ComfyUI-Custom-Nodes-Work-Read-a-Node-Packs-Code.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Turn a ComfyUI workflow that grew over seven lectures into something you can reuse, share, automate and repair. Package part of a 67-node graph as a subgraph blueprint, run only what changed, build an App Mode form, export the API JSON and drive ComfyUI from Python, read a real custom node pack, triage a pack's code before you trust it and recover a broken install in an isolated copy. Nothing new is generated: this lecture engineers what you already have.

🔗 Links:

Windows AI requirements guide: [ [https://www.patreon.com/posts/111553210](https://www.patreon.com/posts/111553210) ]

📦 Full course resource repository: [ [https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall](https://github.com/FurkanGozukara/Generative-AI-Tools-And-Tecniques-2026-2027-Fall) ]

📺 Full course playlist: [ [https://www.youtube.com/playlist?list=PLUMEJUep1hiI](https://www.youtube.com/playlist?list=PLUMEJUep1hiI) ]

Comfy Registry standards: [ [https://docs.comfy.org/registry/standards](https://docs.comfy.org/registry/standards) ]

Comfy Python SDK: [ [https://github.com/Comfy-Org/comfy-python-sdk](https://github.com/Comfy-Org/comfy-python-sdk) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

🎯 Update ComfyUI with git pull and pip install -r requirements.txt in its venv, read each node's cnr_id and ver in Properties, turn an upscale chain into a subgraph with Edit Subgraph Widgets and named slots, publish it as a blueprint and drag in a fresh instance. Run one branch with Execute to selected output nodes, bypass a LoRA (Ctrl+B), mute a saver (Ctrl+M) and watch the cache skip unchanged nodes; build an App Mode form, run it, narrow the window, export it and read its linearData inputs and outputs.

🐍 Export the API JSON and follow a [node_id, output_index] link, then read the standard-library Python client before running it: how JSON becomes a dictionary, the checks that refuse a wrong node ID, the one-line prompt substitution and the /prompt, /history and /view routes. Dry run, one real job, its record folder and image, execution_cached and /object_info; pip lists comfy-sdk 0.5.0; a three-prompt queue with one cancellation and the code that labels completed, failed, cancelled and unknown jobs.

🔍 Read the Inpaint Crop and Stitch pack (mappings, one node's INPUT_TYPES, RETURN_TYPES, FUNCTION and CATEGORY, pyproject.toml), one of its tests and its Registry releases (3.0.20 newest, 3.0.17 installed). Triage the Impact Pack: subprocess, eval, exec, environment variables and network calls, a Hugging Face model download the text search misses, unpinned requirements with a git dependency, and certutil's SHA256 of the model its installer fetches.

🛟 Record the commit and a pip freeze lock file, save a ComfyUI-Manager snapshot with cm-cli and compare the two, raise security_level to strong, read the start-up log's Import times list, start an isolated copy with --disable-all-custom-nodes, then bring back one pack with --whitelist-custom-nodes; compare Colab's /content/ComfyUI with extra_model_paths.yaml.

✅ Before you trust a workflow or a node pack: keep a snapshot and a lock file, check advice against the live /object_info schema, read a pack's code before installing it, test updates in an isolated copy and check a job ID in the history before resubmitting it.

🧩 Subgraphs and blueprints, partial execution, bypass and mute, the execution cache, App Mode, API JSON, POST /prompt, /history, /object_info, Comfy API v2, custom node anatomy, supply-chain triage, ComfyUI-Manager security levels, --disable-all-custom-nodes, isolated test copies and environment roots.

Use the chapters to jump to each technique, script and recovery step.

⏱️ Chapters:

[00:00:00](https://youtu.be/RTVazGmuLJs?t=0) Seven lectures of nodes: what this lecture fixes

[00:00:47](https://youtu.be/RTVazGmuLJs?t=47) Update ComfyUI and start the server

[00:01:33](https://youtu.be/RTVazGmuLJs?t=93) Four questions about a sixty-seven node graph

[00:02:27](https://youtu.be/RTVazGmuLJs?t=147) Package the upscale chain as a subgraph

[00:04:28](https://youtu.be/RTVazGmuLJs?t=268) Run less: partial execution, bypass, mute and the cache

[00:05:52](https://youtu.be/RTVazGmuLJs?t=352) Turn a workflow into an app form

[00:08:22](https://youtu.be/RTVazGmuLJs?t=502) Export the API format and read it

[00:09:34](https://youtu.be/RTVazGmuLJs?t=574) Drive ComfyUI from Python: a dry run and one real job

[00:13:43](https://youtu.be/RTVazGmuLJs?t=823) A small queue: three prompts and one cancellation

[00:15:35](https://youtu.be/RTVazGmuLJs?t=935) Live schemas beat stale advice

[00:17:25](https://youtu.be/RTVazGmuLJs?t=1045) Supply-chain triage: what a node pack can do

[00:22:04](https://youtu.be/RTVazGmuLJs?t=1324) Read the log, then recover through isolation

[00:25:04](https://youtu.be/RTVazGmuLJs?t=1504) Recap and next lecture

Course files for this lecture: the workflows, the API export, the inspector, client and queue scripts, and every command line used on camera. The next lecture trains our own LoRA; in Lecture 10, video workflows make subgraphs and partial execution necessary, and Lecture 14's final pipeline reuses today's snapshot, dependency record and API script.

💬 Ask in the comments or Discord, and see the pinned comment. Support SECourses on Patreon for more guides and resources.

#ComfyUI #ComfyUIAPI #CustomNodes



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=RTVazGmuLJs&t=8) Greetings everyone. Today we take a workflow that&nbsp; grew over 7 lectures and make it something you&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=RTVazGmuLJs&t=14) can reuse, share, automate and repair. Nothing&nbsp; new gets generated; we engineer what we already&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=20) have. This is that workflow: 67 nodes, crossing&nbsp; wires, 2 copies of the same upscale chain and&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=RTVazGmuLJs&t=28) 3 experiments switched off. It still works, but&nbsp; in 6 months nobody could maintain it. Check out&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=RTVazGmuLJs&t=34) the tutorial description to see the chapters.&nbsp; We update ComfyUI, package part of this graph,&nbsp;&nbsp;

- [00:00:39](https://www.youtube.com/watch?v=RTVazGmuLJs&t=39) build a simple app form, drive ComfyUI from&nbsp; Python, read a real node pack and plan a&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=RTVazGmuLJs&t=45) safe recovery. First, the update routine&nbsp; from Lecture 2. Open the ComfyUI folder,&nbsp;&nbsp;

- [00:00:51](https://www.youtube.com/watch?v=RTVazGmuLJs&t=51) type cmd in its address bar and press Enter, then&nbsp; activate the environment of this installation.&nbsp;&nbsp;

- [00:01:00](https://www.youtube.com/watch?v=RTVazGmuLJs&t=60) Pull the latest code, then install its&nbsp; requirements in the same environment. Keep&nbsp;&nbsp;

- [00:01:05](https://www.youtube.com/watch?v=RTVazGmuLJs&t=65) the output visible until the prompt returns;&nbsp; a red error line would need attention before&nbsp;&nbsp;

- [00:01:10](https://www.youtube.com/watch?v=RTVazGmuLJs&t=70) we continue. Through this Python, pip installs&nbsp; into the environment, exactly the packages that&nbsp;&nbsp;

- [00:01:16](https://www.youtube.com/watch?v=RTVazGmuLJs&t=76) the requirements file lists. Close the prompt and&nbsp; double-click the launch file we made last lecture.&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=83) The console starts the updated server at port&nbsp; 8189; refresh the browser page so it loads the&nbsp;&nbsp;

- [00:01:30](https://www.youtube.com/watch?v=RTVazGmuLJs&t=90) new interface as well. Look at this graph&nbsp; as an engineer and ask 4 questions. First:&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=RTVazGmuLJs&t=96) which part do I actually reuse? This upscale chain&nbsp; runs after almost every image, and a second copy&nbsp;&nbsp;

- [00:01:42](https://www.youtube.com/watch?v=RTVazGmuLJs&t=102) of it sits down here. Second: which node pack&nbsp; does each node come from, and at what version?&nbsp;&nbsp;

- [00:01:49](https://www.youtube.com/watch?v=RTVazGmuLJs&t=109) Right-click the FaceDetailer and open Properties.&nbsp; The cnr_id field names its pack, the Impact Pack,&nbsp;&nbsp;

- [00:01:55](https://www.youtube.com/watch?v=RTVazGmuLJs&t=115) and ver records version 8.28.3. A core node shows&nbsp; comfy-core and the ComfyUI version it was added&nbsp;&nbsp;

- [00:02:03](https://www.youtube.com/watch?v=RTVazGmuLJs&t=123) with. Nodes from templates and shared workflows&nbsp; carry these 2 fields, so the file itself tells&nbsp;&nbsp;

- [00:02:09](https://www.youtube.com/watch?v=RTVazGmuLJs&t=129) you what it needs. Question 3: if it breaks after&nbsp; an update, how do I find out why? And question 4:&nbsp;&nbsp;

- [00:02:16](https://www.youtube.com/watch?v=RTVazGmuLJs&t=136) how do I run it 100 times without clicking?&nbsp; Today's lecture answers all 4 with ordinary&nbsp;&nbsp;

- [00:02:22](https://www.youtube.com/watch?v=RTVazGmuLJs&t=142) software habits: modules, versions, automation&nbsp; and recovery. Let's answer the first question,&nbsp;&nbsp;

- [00:02:28](https://www.youtube.com/watch?v=RTVazGmuLJs&t=148) and zoom in on the upscale chain until its titles&nbsp; are readable. Select the 3 nodes of the chain:&nbsp;&nbsp;

- [00:02:34](https://www.youtube.com/watch?v=RTVazGmuLJs&t=154) the upscale model loader, the upscale with the&nbsp; model and the final resize. Then click Convert&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=RTVazGmuLJs&t=160) Selection to Subgraph. The 3 nodes collapse into&nbsp; 1 node. ComfyUI found every wire that crosses the&nbsp;&nbsp;

- [00:02:49](https://www.youtube.com/watch?v=RTVazGmuLJs&t=169) border of the selection and turned each one into&nbsp; an input or an output of the subgraph. Now design&nbsp;&nbsp;

- [00:02:56](https://www.youtube.com/watch?v=RTVazGmuLJs&t=176) its interface. Click Edit Subgraph Widgets.&nbsp; The panel lists the parameters hidden inside;&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=RTVazGmuLJs&t=182) show only the 3 a user should change: the upscale&nbsp; model, the width and the height. The resize method&nbsp;&nbsp;

- [00:03:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=192) and the crop stay hidden. A good subgraph exposes&nbsp; a few meaningful knobs, not every setting inside&nbsp;&nbsp;

- [00:03:18](https://www.youtube.com/watch?v=RTVazGmuLJs&t=198) it. Give it a clear name too: click the pencil&nbsp; beside the title and type upscale and resize.&nbsp;&nbsp;

- [00:03:26](https://www.youtube.com/watch?v=RTVazGmuLJs&t=206) Double-click the node to step inside. The input&nbsp; node on the left and the output node on the right&nbsp;&nbsp;

- [00:03:31](https://www.youtube.com/watch?v=RTVazGmuLJs&t=211) are the interface, and the 3 original nodes&nbsp; keep all their connections. Press Escape to&nbsp;&nbsp;

- [00:03:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=218) go back up. Inside nested groups, an error points&nbsp; to its location as a chain of numbers, like 1:2:3;&nbsp;&nbsp;

- [00:03:45](https://www.youtube.com/watch?v=RTVazGmuLJs&t=225) each number is 1 level of nesting. The outputs&nbsp; still have generic names. Right-click the first&nbsp;&nbsp;

- [00:03:52](https://www.youtube.com/watch?v=RTVazGmuLJs&t=232) output dot and choose Rename Slot, then type 4x&nbsp; image. Rename the second one to final image. Now&nbsp;&nbsp;

- [00:03:58](https://www.youtube.com/watch?v=RTVazGmuLJs&t=238) anyone reading the node knows which picture comes&nbsp; out where. Now publish it. With the node selected,&nbsp;&nbsp;

- [00:04:05](https://www.youtube.com/watch?v=RTVazGmuLJs&t=245) click Publish Subgraph, keep its name and confirm.&nbsp; It is saved as a blueprint in your user folder,&nbsp;&nbsp;

- [00:04:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=252) separate from this workflow. Open the&nbsp; library panel. Under My Blueprints,&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=RTVazGmuLJs&t=257) upscale and resize is ready; drag a fresh instance&nbsp; onto the canvas. Each instance is independent:&nbsp;&nbsp;

- [00:04:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=263) changing 1 copy never changes the others. Second&nbsp; skill: run only what you need. Select the 2 savers&nbsp;&nbsp;

- [00:04:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=272) of the watercolor branch from Lecture 3, then&nbsp; click the play button in the selection toolbox:&nbsp;&nbsp;

- [00:04:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=278) execute to selected output nodes. Only that&nbsp; branch runs; the watchmaker, the upscalers and the&nbsp;&nbsp;

- [00:04:45](https://www.youtube.com/watch?v=RTVazGmuLJs&t=285) detailer stay idle. Open the result: the Aquarelle&nbsp; LoRA gives this soft, washed watercolor look with&nbsp;&nbsp;

- [00:04:51](https://www.youtube.com/watch?v=RTVazGmuLJs&t=291) a paper texture. Now select the LoRA loader and&nbsp; press Ctrl+B. It turns purple: bypassed. The model&nbsp;&nbsp;

- [00:05:00](https://www.youtube.com/watch?v=RTVazGmuLJs&t=300) passes straight through it, as if the LoRA were&nbsp; not there at all. Then select the thumbnail saver&nbsp;&nbsp;

- [00:05:07](https://www.youtube.com/watch?v=RTVazGmuLJs&t=307) and press Ctrl+M. A muted node turns grey and&nbsp; does not execute. Bypass passes data through; mute&nbsp;&nbsp;

- [00:05:13](https://www.youtube.com/watch?v=RTVazGmuLJs&t=313) stops execution at that node. Select both savers&nbsp; again and run the same button. Watch the canvas:&nbsp;&nbsp;

- [00:05:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=320) the loaders and the prompt encoder do not light&nbsp; up, because nothing they depend on has changed.&nbsp;&nbsp;

- [00:05:28](https://www.youtube.com/watch?v=RTVazGmuLJs&t=328) ComfyUI caches every node's result and runs again&nbsp; only what depends on a change. The job queue lists&nbsp;&nbsp;

- [00:05:33](https://www.youtube.com/watch?v=RTVazGmuLJs&t=333) both runs; this one took less time, because no&nbsp; loader ran again. Open the new result. Without&nbsp;&nbsp;

- [00:05:41](https://www.youtube.com/watch?v=RTVazGmuLJs&t=341) the LoRA, the same seed number gives a crisp&nbsp; painted scene; with it, soft washes and paper&nbsp;&nbsp;

- [00:05:46](https://www.youtube.com/watch?v=RTVazGmuLJs&t=346) texture. 1 key press, 1 comparison, no rewiring.&nbsp; Next, an interface for people who never want to&nbsp;&nbsp;

- [00:05:55](https://www.youtube.com/watch?v=RTVazGmuLJs&t=355) see the graph. Open the delivery workflow from&nbsp; the course files: the watchmaker generation,&nbsp;&nbsp;

- [00:06:00](https://www.youtube.com/watch?v=RTVazGmuLJs&t=360) our upscale and resize blueprint and the Save&nbsp; Image node at the end. Switch from Graph to&nbsp;&nbsp;

- [00:06:06](https://www.youtube.com/watch?v=RTVazGmuLJs&t=366) App with the switch at the top left, then click&nbsp; Build app. The nodes change to a form layout,&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=372) and a 3-step guide appears at the top. Step 1,&nbsp; inputs: click the parameters a user may set.&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=RTVazGmuLJs&t=378) The prompt text, the seed number and the file name&nbsp; prefix; each one appears in the list on the right.&nbsp;&nbsp;

- [00:06:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=385) Step 2, outputs: click Next, then click the&nbsp; Save Image node. Its saved picture is what&nbsp;&nbsp;

- [00:06:30](https://www.youtube.com/watch?v=RTVazGmuLJs&t=390) the app shows as the result. Step 3, preview:&nbsp; click Next. This is the layout a user sees,&nbsp;&nbsp;

- [00:06:37](https://www.youtube.com/watch?v=RTVazGmuLJs&t=397) the inputs on the right and the results in&nbsp; the middle. Click Save as, name it watchmaker&nbsp;&nbsp;

- [00:06:42](https://www.youtube.com/watch?v=RTVazGmuLJs&t=402) app and choose App, so this file opens as a&nbsp; form by default. Save it, then view the app.&nbsp;&nbsp;

- [00:06:52](https://www.youtube.com/watch?v=RTVazGmuLJs&t=412) The form opens with the workflow's own prompt&nbsp; still in the text field, so first select all of&nbsp;&nbsp;

- [00:06:57](https://www.youtube.com/watch?v=RTVazGmuLJs&t=417) it. Type a new prompt into the form: a lighthouse&nbsp; keeper polishing a brass lamp. Then press Run.&nbsp;&nbsp;

- [00:07:04](https://www.youtube.com/watch?v=RTVazGmuLJs&t=424) Behind the form, the same graph runs, with our&nbsp; blueprint inside it. The result appears in the&nbsp;&nbsp;

- [00:07:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=432) middle. The user saw 3 fields and 1 button: the&nbsp; graph is the implementation, and the form is its&nbsp;&nbsp;

- [00:07:18](https://www.youtube.com/watch?v=RTVazGmuLJs&t=438) interface. Shrink the window, like a phone or&nbsp; a small laptop screen. The layout switches to&nbsp;&nbsp;

- [00:07:24](https://www.youtube.com/watch?v=RTVazGmuLJs&t=444) separate pages, so the form and the results take&nbsp; turns rather than sitting side by side. To share&nbsp;&nbsp;

- [00:07:30](https://www.youtube.com/watch?v=RTVazGmuLJs&t=450) it, open the workflow actions menu and choose&nbsp; Export, then save the file in our course folder.&nbsp;&nbsp;

- [00:07:36](https://www.youtube.com/watch?v=RTVazGmuLJs&t=456) Comfy Cloud can create share links; on a local&nbsp; install, the JSON file is what you share. Bring&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=RTVazGmuLJs&t=465) the exported file back in: it opens straight into&nbsp; the form. The receiver also needs the same models&nbsp;&nbsp;

- [00:07:51](https://www.youtube.com/watch?v=RTVazGmuLJs&t=471) and custom packs; the file describes the workflow,&nbsp; it does not contain them. Curious what that file&nbsp;&nbsp;

- [00:07:57](https://www.youtube.com/watch?v=RTVazGmuLJs&t=477) stores? Open the exported app in the editor. Near&nbsp; its end, linear data lists the inputs we chose:&nbsp;&nbsp;

- [00:08:03](https://www.youtube.com/watch?v=RTVazGmuLJs&t=483) node 5's text, node 8's seed number and node 10's&nbsp; file name prefix. Its outputs hold a single entry,&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=492) node 10, the Save Image node. Everything else is&nbsp; the ordinary graph, so an app file is simply a&nbsp;&nbsp;

- [00:08:18](https://www.youtube.com/watch?v=RTVazGmuLJs&t=498) workflow plus a short list of what the form&nbsp; shows. Now the bridge to automation. Switch&nbsp;&nbsp;

- [00:08:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=503) back to the graph and open the File menu. Older&nbsp; guides say Export (API) stays hidden until you&nbsp;&nbsp;

- [00:08:29](https://www.youtube.com/watch?v=RTVazGmuLJs&t=509) enable Dev Mode; in this version it is already&nbsp; here. That is our first lesson in stale advice:&nbsp;&nbsp;

- [00:08:36](https://www.youtube.com/watch?v=RTVazGmuLJs&t=516) check the interface in front of you. Choose&nbsp; Export (API), type watchmaker_API as the file&nbsp;&nbsp;

- [00:08:41](https://www.youtube.com/watch?v=RTVazGmuLJs&t=521) name and save it into the API folder of our course&nbsp; files, next to the client scripts. Open it in the&nbsp;&nbsp;

- [00:08:50](https://www.youtube.com/watch?v=RTVazGmuLJs&t=530) editor. The normal export stores positions, sizes&nbsp; and colours for the canvas. The API export keeps&nbsp;&nbsp;

- [00:08:56](https://www.youtube.com/watch?v=RTVazGmuLJs&t=536) only what the server needs to run the job. Every&nbsp; node is a numbered entry with its class type and&nbsp;&nbsp;

- [00:09:02](https://www.youtube.com/watch?v=RTVazGmuLJs&t=542) its inputs. The sampler's positive input is a&nbsp; short list: node 5, output 0. That is a wire,&nbsp;&nbsp;

- [00:09:08](https://www.youtube.com/watch?v=RTVazGmuLJs&t=548) written as the source node and its output index.&nbsp; Follow it to node 5, the prompt encoder. Its text&nbsp;&nbsp;

- [00:09:15](https://www.youtube.com/watch?v=RTVazGmuLJs&t=555) is a literal value, just a string that a script&nbsp; can replace, and that is exactly what our client&nbsp;&nbsp;

- [00:09:21](https://www.youtube.com/watch?v=RTVazGmuLJs&t=561) will do. The blueprint's inner parts get IDs like&nbsp; 11:12: the subgraph first, then the part inside.&nbsp;&nbsp;

- [00:09:28](https://www.youtube.com/watch?v=RTVazGmuLJs&t=568) This is the same numbering idea we saw for nested&nbsp; errors. The course files include a small client&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=RTVazGmuLJs&t=576) that uses only Python's standard library. Open&nbsp; a command prompt in the API folder and activate&nbsp;&nbsp;

- [00:09:41](https://www.youtube.com/watch?v=RTVazGmuLJs&t=581) the ComfyUI environment we already have. First,&nbsp; inspect the export offline. The inspector lists&nbsp;&nbsp;

- [00:09:51](https://www.youtube.com/watch?v=RTVazGmuLJs&t=591) each node, its class type, every link and the&nbsp; prompt text, so you can find the node to change:&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=RTVazGmuLJs&t=596) here, node 5. Before changing anything, read&nbsp; what the inspector just read. Python loads&nbsp;&nbsp;

- [00:10:04](https://www.youtube.com/watch?v=RTVazGmuLJs&t=604) this JSON file as a dictionary: curly braces&nbsp; become a dictionary, square brackets a list,&nbsp;&nbsp;

- [00:10:10](https://www.youtube.com/watch?v=RTVazGmuLJs&t=610) and each node ID stays in quotes, so it is text,&nbsp; not a number. The inspector's load function checks&nbsp;&nbsp;

- [00:10:17](https://www.youtube.com/watch?v=RTVazGmuLJs&t=617) that every node has a class type and inputs. The&nbsp; normal editor export has neither, so it is refused&nbsp;&nbsp;

- [00:10:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=623) with a clear message instead of failing later.&nbsp; Now the client itself. It starts with its options:&nbsp;&nbsp;

- [00:10:30](https://www.youtube.com/watch?v=RTVazGmuLJs&t=630) the workflow file, the prompt node, the new&nbsp; text, the server address and a dry run switch.&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=RTVazGmuLJs&t=635) You choose all of them on the command line. Then&nbsp; 2 checks protect you. If the node ID is not in&nbsp;&nbsp;

- [00:10:41](https://www.youtube.com/watch?v=RTVazGmuLJs&t=641) this export, the client stops; if the chosen&nbsp; input is a link or a number rather than text,&nbsp;&nbsp;

- [00:10:46](https://www.youtube.com/watch?v=RTVazGmuLJs&t=646) it stops as well. That matters, because IDs belong&nbsp; to 1 export. The readme's example uses number 6,&nbsp;&nbsp;

- [00:10:53](https://www.youtube.com/watch?v=RTVazGmuLJs&t=653) but in our export, 6 is the zero-out step, so&nbsp; a copied ID is refused before anything goes to&nbsp;&nbsp;

- [00:11:00](https://www.youtube.com/watch?v=RTVazGmuLJs&t=660) the server. Then 1 line does the real work:&nbsp; it replaces the text of the chosen input.&nbsp;&nbsp;

- [00:11:06](https://www.youtube.com/watch?v=RTVazGmuLJs&t=666) The request is the whole graph plus a client ID,&nbsp; and with dry run the client prints it and stops,&nbsp;&nbsp;

- [00:11:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=672) before any network call. For a real run, the&nbsp; client stores the request, posts it to the prompt&nbsp;&nbsp;

- [00:11:18](https://www.youtube.com/watch?v=RTVazGmuLJs&t=678) route, then asks the history route about this ID&nbsp; until the job completes or fails. Last, it fetches&nbsp;&nbsp;

- [00:11:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=685) every output file through the view route, one by&nbsp; one. 2 warnings. The local server has no password,&nbsp;&nbsp;

- [00:11:34](https://www.youtube.com/watch?v=RTVazGmuLJs&t=694) so keep it on your own computer; starting it with&nbsp; the listen option opens it to your network. And&nbsp;&nbsp;

- [00:11:40](https://www.youtube.com/watch?v=RTVazGmuLJs&t=700) these routes can change between releases, so pin&nbsp; the ComfyUI version your scripts rely on. Now a&nbsp;&nbsp;

- [00:11:47](https://www.youtube.com/watch?v=RTVazGmuLJs&t=707) dry run. The client replaces node 5's text with a&nbsp; new prompt and prints the request it would send,&nbsp;&nbsp;

- [00:11:53](https://www.youtube.com/watch?v=RTVazGmuLJs&t=713) without contacting the server. Read it before&nbsp; you send it. Execute the same command, this&nbsp;&nbsp;

- [00:12:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=721) time for real. The client posts the workflow,&nbsp; gets back a prompt ID, then polls the history&nbsp;&nbsp;

- [00:12:06](https://www.youtube.com/watch?v=RTVazGmuLJs&t=726) until the job is done and saves the image to disk.&nbsp; Submission is not completion. The ID is a receipt;&nbsp;&nbsp;

- [00:12:14](https://www.youtube.com/watch?v=RTVazGmuLJs&t=734) only the history entry tells you whether the job&nbsp; succeeded, failed or is still running. The client&nbsp;&nbsp;

- [00:12:21](https://www.youtube.com/watch?v=RTVazGmuLJs&t=741) also saved its own record, in a folder named after&nbsp; the run: the exact request, the server's answer,&nbsp;&nbsp;

- [00:12:27](https://www.youtube.com/watch?v=RTVazGmuLJs&t=747) the history and the downloaded image. That record&nbsp; lets you reproduce or audit the job. Here is that&nbsp;&nbsp;

- [00:12:35](https://www.youtube.com/watch?v=RTVazGmuLJs&t=755) folder: the request we sent, the server's answer,&nbsp; the finished history entry and the saved image,&nbsp;&nbsp;

- [00:12:42](https://www.youtube.com/watch?v=RTVazGmuLJs&t=762) side by side. Select the image: the lighthouse&nbsp; keeper from our new prompt, made without touching&nbsp;&nbsp;

- [00:12:48](https://www.youtube.com/watch?v=RTVazGmuLJs&t=768) the browser. Now open the history in the&nbsp; browser. The newest entry holds the outputs,&nbsp;&nbsp;

- [00:12:55](https://www.youtube.com/watch?v=RTVazGmuLJs&t=775) the status and a list called execution cached:&nbsp; the nodes the server did not rerun because their&nbsp;&nbsp;

- [00:13:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=781) results were unchanged. Next, the live schema:&nbsp; /object_info. Open it for a single sampler,&nbsp;&nbsp;

- [00:13:07](https://www.youtube.com/watch?v=RTVazGmuLJs&t=787) the KSampler. Every input, its type, default&nbsp; and range comes from the running server itself,&nbsp;&nbsp;

- [00:13:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=792) custom nodes included. The official Comfy Python&nbsp; SDK packs the same steps into a clean client for&nbsp;&nbsp;

- [00:13:19](https://www.youtube.com/watch?v=RTVazGmuLJs&t=799) Comfy API v2: load the workflow, set an input,&nbsp; run, then fetch the outputs. Our raw client shows&nbsp;&nbsp;

- [00:13:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=805) each of those steps by hand. If you choose the&nbsp; SDK, pin it like any other dependency. Ask pip&nbsp;&nbsp;

- [00:13:33](https://www.youtube.com/watch?v=RTVazGmuLJs&t=813) which versions exist: 0.5.0 is the newest today,&nbsp; so install exactly that one. With a local ComfyUI,&nbsp;&nbsp;

- [00:13:40](https://www.youtube.com/watch?v=RTVazGmuLJs&t=820) it connects through Comfy's small API proxy. Now&nbsp; 3 prompts. The queue script in the course files&nbsp;&nbsp;

- [00:13:46](https://www.youtube.com/watch?v=RTVazGmuLJs&t=826) reuses the same client: 1 workflow, 3 prompts&nbsp; from a text file, and a unique file name prefix&nbsp;&nbsp;

- [00:13:52](https://www.youtube.com/watch?v=RTVazGmuLJs&t=832) for each job. Run the script. The client submits&nbsp; every prompt, then cancels the last one while it&nbsp;&nbsp;

- [00:13:59](https://www.youtube.com/watch?v=RTVazGmuLJs&t=839) is still queued, to show the difference&nbsp; between a cancelled job and a failed one.&nbsp;&nbsp;

- [00:14:06](https://www.youtube.com/watch?v=RTVazGmuLJs&t=846) The summary lists every job ID with its outcome:&nbsp; 2 completed with their files, 1 cancelled before&nbsp;&nbsp;

- [00:14:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=852) it started. A rejected request never gets an ID;&nbsp; a failed job has an error in its history. And if&nbsp;&nbsp;

- [00:14:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=860) the client times out, the outcome is unknown, not&nbsp; failed. Check the job ID in the history first,&nbsp;&nbsp;

- [00:14:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=865) because resubmitting blindly can run the same job&nbsp; twice. Here is the run folder from the summary.&nbsp;&nbsp;

- [00:14:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=872) Each submitted job left its request, the 2&nbsp; completed ones left their history and their&nbsp;&nbsp;

- [00:14:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=878) images, and the cancelled job left only its&nbsp; request. Here are the lighthouse keeper and&nbsp;&nbsp;

- [00:14:44](https://www.youtube.com/watch?v=RTVazGmuLJs&t=884) the bookbinder. Now read how the script works.&nbsp; It imports the request helper from our client,&nbsp;&nbsp;

- [00:14:53](https://www.youtube.com/watch?v=RTVazGmuLJs&t=893) so the code that talks to the server exists only&nbsp; once. For each prompt it makes a fresh copy of&nbsp;&nbsp;

- [00:15:02](https://www.youtube.com/watch?v=RTVazGmuLJs&t=902) the graph, writes in the prompt and a numbered&nbsp; file name prefix, and submits it. A request&nbsp;&nbsp;

- [00:15:07](https://www.youtube.com/watch?v=RTVazGmuLJs&t=907) the server refuses gets no ID, so it is marked&nbsp; rejected right away. Cancelling is a request too:&nbsp;&nbsp;

- [00:15:16](https://www.youtube.com/watch?v=RTVazGmuLJs&t=916) the script asks the queue for its waiting&nbsp; jobs and deletes the last one only while&nbsp;&nbsp;

- [00:15:21](https://www.youtube.com/watch?v=RTVazGmuLJs&t=921) it is still waiting. Then it polls each&nbsp; remaining ID. Completed fetches the files,&nbsp;&nbsp;

- [00:15:29](https://www.youtube.com/watch?v=RTVazGmuLJs&t=929) an error in the history means failed, and running&nbsp; out of time means unknown, never a failure. Pause&nbsp;&nbsp;

- [00:15:35](https://www.youtube.com/watch?v=RTVazGmuLJs&t=935) here and predict. A coding assistant recommends&nbsp; installing a node pack whose feature has been in&nbsp;&nbsp;

- [00:15:42](https://www.youtube.com/watch?v=RTVazGmuLJs&t=942) ComfyUI's core for a year. What would have caught&nbsp; that mistake? The live schema. /object_info lists&nbsp;&nbsp;

- [00:15:48](https://www.youtube.com/watch?v=RTVazGmuLJs&t=948) every node this server really has. Ask it for&nbsp; InpaintCropImproved: the crop and stitch pack&nbsp;&nbsp;

- [00:15:54](https://www.youtube.com/watch?v=RTVazGmuLJs&t=954) from Lecture 5 answers with its exact inputs. Now&nbsp; open that pack's __init__.py file in the editor.&nbsp;&nbsp;

- [00:16:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=961) 2 dictionaries register everything: the class&nbsp; mappings tie each internal name to Python code,&nbsp;&nbsp;

- [00:16:06](https://www.youtube.com/watch?v=RTVazGmuLJs&t=966) and the display name mappings give the scissors&nbsp; titles you see in search. In the main file, the&nbsp;&nbsp;

- [00:16:13](https://www.youtube.com/watch?v=RTVazGmuLJs&t=973) stitch node fits on 1 screen. INPUT_TYPES declares&nbsp; 2 inputs, the stitcher and the inpainted image;&nbsp;&nbsp;

- [00:16:19](https://www.youtube.com/watch?v=RTVazGmuLJs&t=979) RETURN_TYPES says that it outputs 1 image.&nbsp; FUNCTION names the call ComfyUI makes when it&nbsp;&nbsp;

- [00:16:26](https://www.youtube.com/watch?v=RTVazGmuLJs&t=986) runs, and CATEGORY places it in the library. That&nbsp; is the whole contract of a classic custom class.&nbsp;&nbsp;

- [00:16:33](https://www.youtube.com/watch?v=RTVazGmuLJs&t=993) Finally, the pyproject.toml file. Its version,&nbsp; 3.0.17, is exactly what a workflow records as ver,&nbsp;&nbsp;

- [00:16:40](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1000) and the publisher entry makes the pack a&nbsp; Registry package. Reading the code is 1 check;&nbsp;&nbsp;

- [00:16:46](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1006) the pack's health is another. Its folder has a&nbsp; tests folder and no requirements file: this pack&nbsp;&nbsp;

- [00:16:52](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1012) adds no Python packages, so installing it cannot&nbsp; change what your other nodes rely on. Open 1 test.&nbsp;&nbsp;

- [00:16:58](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1018) It makes a random image and a mask, crops a&nbsp; 40-pixel square to 64 pixels and checks the&nbsp;&nbsp;

- [00:17:04](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1024) exact size of the result. Tests like this catch&nbsp; a broken update before your workflow does. Then&nbsp;&nbsp;

- [00:17:10](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1030) check its releases on the registry page. Version&nbsp; 3.0.20 came out on October 21, and we run 3.0.17.&nbsp;&nbsp;

- [00:17:19](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1039) Regular releases are a good sign; read the&nbsp; changes, then try them on a test copy. A&nbsp;&nbsp;

- [00:17:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1045) custom node is Python running with your user's&nbsp; rights, with network access and with any keys&nbsp;&nbsp;

- [00:17:31](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1051) in your environment. So before you install one,&nbsp; look at what it does. Let's check the Impact Pack,&nbsp;&nbsp;

- [00:17:36](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1056) from a command prompt opened right in its folder.&nbsp; Search all of its Python files for subprocess,&nbsp;&nbsp;

- [00:17:43](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1063) download, eval and exec. This is triage, not&nbsp; a security review, but it shows where the code&nbsp;&nbsp;

- [00:17:49](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1069) reaches outside ComfyUI. 2 places matter. The&nbsp; install script downloads a Segment Anything model&nbsp;&nbsp;

- [00:17:56](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1076) from Meta's server, a pickle-format file, and a&nbsp; helper runs pip install for onnxruntime when it is&nbsp;&nbsp;

- [00:18:02](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1082) missing. Compare that with the Registry's rules:&nbsp; no eval or exec, no pip installs at runtime,&nbsp;&nbsp;

- [00:18:08](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1088) no obfuscated source files. A popular pack can&nbsp; predate a rule; your job is to know, not to panic.&nbsp;&nbsp;

- [00:18:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1100) Now a second search, for environment variables,&nbsp; tokens and network calls. The install script reads&nbsp;&nbsp;

- [00:18:26](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1106) 2 folder variables, and then copies the whole&nbsp; environment into the process it starts. The 2&nbsp;&nbsp;

- [00:18:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1112) requests lines are tests that only talk to this&nbsp; computer. That copy matters. Any token in your&nbsp;&nbsp;

- [00:18:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1118) environment, a Hugging Face token or a paid&nbsp; API key, reaches every process a pack starts,&nbsp;&nbsp;

- [00:18:43](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1123) so launch ComfyUI from a console without&nbsp; unrelated keys. But 1 network call slips past&nbsp;&nbsp;

- [00:18:49](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1129) the search. The classifier node hands a Hugging&nbsp; Face repository name to the transformers library,&nbsp;&nbsp;

- [00:18:55](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1135) which fetches that model the first time the node&nbsp; runs. That is why a text search is only triage.&nbsp;&nbsp;

- [00:19:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1141) Next, its requirements file: 10 packages and&nbsp; not a single version number. One of them, SAM 2,&nbsp;&nbsp;

- [00:19:07](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1147) comes straight from a git address. Unpinned means&nbsp; the next install may pull different versions,&nbsp;&nbsp;

- [00:19:12](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1152) and the Manager treats a git address as a&nbsp; high risk source. Last, record the hash of the&nbsp;&nbsp;

- [00:19:24](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1164) model the install script downloaded. certutil&nbsp; prints it in a second. The file is a pickle,&nbsp;&nbsp;

- [00:19:29](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1169) which can run code when it loads, so this&nbsp; hash proves you have the same file next time.&nbsp;&nbsp;

- [00:19:39](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1179) Keep a record that can rebuild this state. In&nbsp; the ComfyUI prompt, write the current commit&nbsp;&nbsp;

- [00:19:44](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1184) and the exact Python package versions into&nbsp; 2 text files. The first line from the notes&nbsp;&nbsp;

- [00:19:50](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1190) asks git for the exact commit of this folder&nbsp; and saves it in a text file. The second line,&nbsp;&nbsp;

- [00:19:57](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1197) pip freeze, lists every installed package&nbsp; with its exact version: our lock file.&nbsp;&nbsp;

- [00:20:04](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1204) Open them. The commit names the precise core&nbsp; code, and the lock file pins every package,&nbsp;&nbsp;

- [00:20:09](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1209) torch included. Together with the node pack&nbsp; versions, this is your last working state. The&nbsp;&nbsp;

- [00:20:15](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1215) Manager can write all of this into 1 single file,&nbsp; and that file is called a snapshot. Open a prompt&nbsp;&nbsp;

- [00:20:22](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1222) in the ComfyUI folder straight from the address&nbsp; bar, so everything we type stays short and simple,&nbsp;&nbsp;

- [00:20:28](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1228) just like before. Then activate the environment&nbsp; by typing the location of its activate script.&nbsp;&nbsp;

- [00:20:34](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1234) This environment also holds the Manager's&nbsp; command line tool, so there is nothing&nbsp;&nbsp;

- [00:20:39](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1239) else to install. The tool needs to know where&nbsp; ComfyUI is, so set that to the current folder,&nbsp;&nbsp;

- [00:20:49](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1249) then save a snapshot right next to our records.&nbsp; Open it. The first line is the ComfyUI commit,&nbsp;&nbsp;

- [00:20:58](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1258) the same one our text file holds. Below it, every&nbsp; registry pack with its exact version: Impact Pack&nbsp;&nbsp;

- [00:21:04](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1264) 8.28.3, Crop and Stitch 3.0.17. Then every Python&nbsp; package with its version, like our lock file. So&nbsp;&nbsp;

- [00:21:15](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1275) the lock file pins Python packages only, while the&nbsp; snapshot adds the core commit and the node packs.&nbsp;&nbsp;

- [00:21:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1280) Neither holds your models or workflows;&nbsp; keep those, with their hashes, yourself.&nbsp;&nbsp;

- [00:21:31](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1291) Restoring is 1 command too. Its help lists the&nbsp; options: restore snapshot puts every pack back&nbsp;&nbsp;

- [00:21:37](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1297) to its recorded version, and these pip options&nbsp; restore the Python packages as well. Last,&nbsp;&nbsp;

- [00:21:43](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1303) the Manager's own setting. Open config.ini in the&nbsp; manager folder of the user directory, change the&nbsp;&nbsp;

- [00:21:48](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1308) security level from normal to strong and save the&nbsp; file. Strong blocks high and middle risk actions,&nbsp;&nbsp;

- [00:21:55](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1315) from git address installs to ordinary installs&nbsp; and updates, until you lower it again. The change&nbsp;&nbsp;

- [00:22:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1321) applies when ComfyUI restarts. If something&nbsp; breaks, first read what the server printed,&nbsp;&nbsp;

- [00:22:07](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1327) before you change anything. It keeps a copy in the&nbsp; user folder, and near the end of the start-up it&nbsp;&nbsp;

- [00:22:13](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1333) shows every custom pack with its loading time in&nbsp; seconds. When an extension fails, its line says&nbsp;&nbsp;

- [00:22:19](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1339) import failed, and the error just above it names&nbsp; the missing module or the clashing package. that&nbsp;&nbsp;

- [00:22:26](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1346) one line tells you which extension to suspect, so&nbsp; you do not have to guess. Most errors name their&nbsp;&nbsp;

- [00:22:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1352) class in the message. Missing node types means a&nbsp; missing pack; value not in list, a missing model;&nbsp;&nbsp;

- [00:22:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1358) a shape mismatch, the wrong model family; then&nbsp; out of memory, and failed imports. Name the class&nbsp;&nbsp;

- [00:22:44](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1364) first, then look for the fix. Inside ComfyUI the&nbsp; same log is 1 click away: the Console button opens&nbsp;&nbsp;

- [00:22:50](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1370) it in the bottom panel. Read the full log there,&nbsp; not only the short pop-up in the corner. When an&nbsp;&nbsp;

- [00:22:58](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1378) update breaks something, never experiment&nbsp; on your working install. This second copy,&nbsp;&nbsp;

- [00:23:02](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1382) ComfyUI_Isolated_Test, has its own folder and&nbsp; its own environment, built from that record. Its&nbsp;&nbsp;

- [00:23:11](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1391) launch file adds the --disable-all-custom-nodes&nbsp; flag and uses another port. Double-click it,&nbsp;&nbsp;

- [00:23:17](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1397) and the console confirms that every custom&nbsp; node pack was skipped, every single one. If&nbsp;&nbsp;

- [00:23:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1403) the problem disappears now, a custom node causes&nbsp; it. Bring packs back half at a time with the&nbsp;&nbsp;

- [00:23:29](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1409) --whitelist-custom-nodes flag, and a few restarts&nbsp; find the culprit. The client and the API workflow&nbsp;&nbsp;

- [00:23:37](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1417) stay in our course folder, not in this copy, so&nbsp; go back up and open the API folder there. Now send&nbsp;&nbsp;

- [00:23:44](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1424) our API workflow to this copy. Open a prompt in&nbsp; the API folder, activate the environment and run&nbsp;&nbsp;

- [00:23:50](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1430) the client with the server address on port 8190.&nbsp; Core nodes only, and the job completes: the same&nbsp;&nbsp;

- [00:23:58](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1438) graph and the same models, running in a separate&nbsp; environment that was rebuilt from the record.&nbsp;&nbsp;

- [00:24:03](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1443) The record folder holds the picture this restored&nbsp; copy made: the same lighthouse keeper our working&nbsp;&nbsp;

- [00:24:10](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1450) install made, from the same graph and models, in&nbsp; an environment we rebuilt from our records. Now&nbsp;&nbsp;

- [00:24:17](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1457) narrow it down for real. This second launch file&nbsp; has the same options, plus whitelist custom nodes&nbsp;&nbsp;

- [00:24:23](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1463) followed by 1 folder name, the Crop and Stitch&nbsp; folder. Close the running copy and start this one.&nbsp;&nbsp;

- [00:24:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1472) The import list now shows a single pack. If the&nbsp; problem comes back, that pack is your suspect; if&nbsp;&nbsp;

- [00:24:38](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1478) not, allow the next half. The same idea explains&nbsp; Lecture 6's Colab notebook. There, the environment&nbsp;&nbsp;

- [00:24:46](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1486) root is /content/ComfyUI, and every model goes&nbsp; into its models folders. On this computer the root&nbsp;&nbsp;

- [00:24:54](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1494) is our ComfyUI folder, and extra_model_paths.yaml&nbsp; adds shared folders. The workflow names its files;&nbsp;&nbsp;

- [00:25:01](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1501) each environment decides where they live. Let's&nbsp; recap. A subgraph packages a reusable part behind&nbsp;&nbsp;

- [00:25:08](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1508) a few named controls, partial execution and&nbsp; the cache keep iteration fast, and an app form&nbsp;&nbsp;

- [00:25:13](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1513) hides the graph from its users. The API export&nbsp; plus a small client runs jobs without clicking,&nbsp;&nbsp;

- [00:25:20](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1520) and the job ID with its history tells you the&nbsp; real outcome. The live schema and the pack's own&nbsp;&nbsp;

- [00:25:25](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1525) source beat old advice. Keep a dependency record,&nbsp; test in an isolated copy and raise the Manager's&nbsp;&nbsp;

- [00:25:32](https://www.youtube.com/watch?v=RTVazGmuLJs&t=1532) security level. Next lecture trains our own LoRA,&nbsp; where a dataset becomes a scripting problem.
