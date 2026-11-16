# Blender Volumetric Lighting: Haze, Light Beams and Depth of Field Explained | Lecture 7

## Full tutorial link > https://www.youtube.com/watch?v=03T-CArVSW4

[![Blender Volumetric Lighting: Haze, Light Beams and Depth of Field Explained | Lecture 7](https://i.ytimg.com/vi_webp/03T-CArVSW4/maxresdefault.webp)](https://www.youtube.com/watch?v=03T-CArVSW4 "Blender Volumetric Lighting: Haze, Light Beams and Depth of Field Explained | Lecture 7")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Blender-Volumetric-Lighting-Haze-Light-Beams-and-Depth-of-Field-Explained-Lecture-7.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Blender-Volumetric-Lighting-Haze-Light-Beams-and-Depth-of-Field-Explained-Lecture-7.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Learn cameras, lighting and render cost in Blender. Lecture 7 turns the textured Lumen Field Station into a directed image of a courier arriving after sunset.

Files and resources:

Lecture 7 Blender files: [ [https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027/tree/main/week07](https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027/tree/main/week07) ]

Full course repository: [ [https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027](https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027) ]

Blender Full Course playlist: [ [https://www.youtube.com/playlist?list=PLYUs-JVhJLWg](https://www.youtube.com/playlist?list=PLYUs-JVhJLWg) ]

Cloud Layers HDRI on Poly Haven: [ [https://polyhaven.com/a/cloud_layers](https://polyhaven.com/a/cloud_layers) ]

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

You will learn to find the cause first: a weak camera, flat light and noise each need a different fix. You compose a hero camera, see why moving the camera changes perspective, light the courier with one key and a blue-hour sky, compare EEVEE and Cycles and time one frame to forecast a sequence.

Main topics include focal length versus position, orthographic projection and clipping, an area key with Track To, light size, a Poly Haven HDRI, Sky Texture with a matched Sun light, N dot L and distance falloff, light linking, depth of field, a bounded volume, samples, the denoiser, aliasing, diffuse bounces, the Texture Cache and Simplify. Recorded in Blender 5.2.2 LTS.

Use the chapters to jump to any step or comparison.

Chapters:

[00:00:00](https://youtu.be/03T-CArVSW4?t=0) The image we are building

[00:00:46](https://youtu.be/03T-CArVSW4?t=46) Three problems, three different fixes

[00:01:46](https://youtu.be/03T-CArVSW4?t=106) Noise, thumbnail size and the starting file

[00:03:03](https://youtu.be/03T-CArVSW4?t=183) Goals in the file, and the courier selected

[00:04:02](https://youtu.be/03T-CArVSW4?t=242) The courier's arrival

[00:05:06](https://youtu.be/03T-CArVSW4?t=306) A hero camera, aligned to a chosen view

[00:06:20](https://youtu.be/03T-CArVSW4?t=380) Lens or position: what actually changes

[00:08:06](https://youtu.be/03T-CArVSW4?t=486) Composition guides and a recorded baseline

[00:09:34](https://youtu.be/03T-CArVSW4?t=574) Projection: two equal markers

[00:11:21](https://youtu.be/03T-CArVSW4?t=681) Clipping, occlusion and focus are different questions

[00:12:47](https://youtu.be/03T-CArVSW4?t=767) Start from darkness

[00:14:39](https://youtu.be/03T-CArVSW4?t=879) Three positions for one key

[00:15:29](https://youtu.be/03T-CArVSW4?t=929) Size, then a modest world

[00:16:31](https://youtu.be/03T-CArVSW4?t=991) The metal post needs something to reflect

[00:17:12](https://youtu.be/03T-CArVSW4?t=1032) Download a free environment image

[00:18:00](https://youtu.be/03T-CArVSW4?t=1080) The environment as a world

[00:19:45](https://youtu.be/03T-CArVSW4?t=1185) A procedural sky that needs no file

[00:21:20](https://youtu.be/03T-CArVSW4?t=1280) A Sun light and its angle

[00:22:46](https://youtu.be/03T-CArVSW4?t=1366) Sky sun or Sun light in Cycles

[00:23:37](https://youtu.be/03T-CArVSW4?t=1417) The same route in EEVEE

[00:24:21](https://youtu.be/03T-CArVSW4?t=1461) Choose the route for this story

[00:26:08](https://youtu.be/03T-CArVSW4?t=1568) Light direction on a matte plate

[00:27:15](https://youtu.be/03T-CArVSW4?t=1635) Half the light at sixty degrees

[00:28:12](https://youtu.be/03T-CArVSW4?t=1692) The same dot product as nodes

[00:29:22](https://youtu.be/03T-CArVSW4?t=1762) Matching the diffuse sphere

[00:30:38](https://youtu.be/03T-CArVSW4?t=1838) Distance from a point light

[00:31:50](https://youtu.be/03T-CArVSW4?t=1910) A fill light, only where it is needed

[00:33:15](https://youtu.be/03T-CArVSW4?t=1995) Light linking

[00:34:17](https://youtu.be/03T-CArVSW4?t=2057) Remove what does not help

[00:34:49](https://youtu.be/03T-CArVSW4?t=2089) Depth of field

[00:36:02](https://youtu.be/03T-CArVSW4?t=2162) Motion blur, briefly

[00:36:15](https://youtu.be/03T-CArVSW4?t=2175) A bounded volume

[00:37:29](https://youtu.be/03T-CArVSW4?t=2249) The volume box

[00:38:53](https://youtu.be/03T-CArVSW4?t=2333) Density, absorption and direction

[00:40:05](https://youtu.be/03T-CArVSW4?t=2405) What the volume costs

[00:41:19](https://youtu.be/03T-CArVSW4?t=2479) Version one, with its settings

[00:42:21](https://youtu.be/03T-CArVSW4?t=2541) A reference render

[00:43:10](https://youtu.be/03T-CArVSW4?t=2590) A render region and the first engine

[00:44:30](https://youtu.be/03T-CArVSW4?t=2670) The same region in Cycles

[00:45:44](https://youtu.be/03T-CArVSW4?t=2744) One EEVEE tracing control, then clear the region

[00:47:20](https://youtu.be/03T-CArVSW4?t=2840) Samples and noise

[00:48:39](https://youtu.be/03T-CArVSW4?t=2919) The denoiser

[00:49:31](https://youtu.be/03T-CArVSW4?t=2971) One denoising stage, and aliasing

[00:50:36](https://youtu.be/03T-CArVSW4?t=3036) Smoothing the steps

[00:51:19](https://youtu.be/03T-CArVSW4?t=3079) A still is one frame: a short motion test

[00:52:41](https://youtu.be/03T-CArVSW4?t=3161) Render a short slice

[00:54:19](https://youtu.be/03T-CArVSW4?t=3259) From geometry to the picture on your screen

[00:55:24](https://youtu.be/03T-CArVSW4?t=3324) Light that bounces carries colour

[00:56:29](https://youtu.be/03T-CArVSW4?t=3389) Ambient occlusion is an approximation

[00:57:26](https://youtu.be/03T-CArVSW4?t=3446) Where this scene's cost really is

[00:59:38](https://youtu.be/03T-CArVSW4?t=3578) The Texture Cache

[01:00:45](https://youtu.be/03T-CArVSW4?t=3645) A texture-heavy test

[01:02:22](https://youtu.be/03T-CArVSW4?t=3742) Simplify

[01:03:08](https://youtu.be/03T-CArVSW4?t=3788) When memory runs out

[01:03:49](https://youtu.be/03T-CArVSW4?t=3829) Time one representative frame

[01:04:54](https://youtu.be/03T-CArVSW4?t=3894) Forecast the sequence

[01:05:27](https://youtu.be/03T-CArVSW4?t=3927) A provisional tier

[01:06:08](https://youtu.be/03T-CArVSW4?t=3968) When the full render is too slow

[01:07:03](https://youtu.be/03T-CArVSW4?t=4023) Full size and thumbnail

[01:08:05](https://youtu.be/03T-CArVSW4?t=4085) A second deliberate treatment

[01:10:00](https://youtu.be/03T-CArVSW4?t=4200) Compare the look and the cost

[01:10:47](https://youtu.be/03T-CArVSW4?t=4247) Questions to check your understanding

[01:11:57](https://youtu.be/03T-CArVSW4?t=4317) What comes next

Music: Cali by ItsWatR, TVARI - Tokyo Cafe by TVARI, Relaxation 04 by Lily J, Infinity by Arulo, Vastness by Andrew Ev, Nigh in Detroit 2 by knarmahfox, Once In Paris by Pumpupthemind (Ivan Ohanezov).

Before you start: this lecture continues the Lumen Field Station from Lecture 6. The download includes w07_station_entry, w07_station_v001 and w07_station_v002_golden, the reference and diagnosis renders, the Cloud Layers HDRI and the Texture Cache test script. Keep the folder together so Blender finds the files. Lecture 8 reuses assets and builds a Geometry Nodes scatter.

Values used in the lesson: hero lens 45 mm; key 200 W, 1 m across; fill 30 W, 70 cm, linked to the courier; sky elevation -4 degrees; beacon emission 12; F-Stop 4; 128 samples, denoiser on, AgX. Golden hour: sky at 6 degrees, Sun at 3000 K, key at 60 W. On an RTX 5090: 11.7 s at full size against 3.3 s at 50 percent; with 8192 × 8192 textures, peak memory about 3300 MB without the Texture Cache and just over 2000 MB with it; one frame about 4.1 s, so 240 frames with a quarter margin take about 20 minutes.

Questions are welcome in the comments or SECourses Discord. Support more tutorials on Patreon. #Blender #Lighting #Cycles



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=8) Greetings everyone. Today I am going to show you&nbsp; how to turn our textured station into a directed&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=14) image, with a deliberate camera, readable light&nbsp; and a render cost we have measured ourselves. This&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=20) is where we are going. A courier is arriving at&nbsp; a remote signal station after sunset. The courier&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=26) reads as 1 clear shape, and the signal is the&nbsp; brightest point in the frame. You can check out&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=32) the tutorial description to see the chapters. We&nbsp; will read an image first, then build the camera,&nbsp;&nbsp;

- [00:00:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=38) the light and the environment, and finish by&nbsp; comparing render engines and timing our renders.&nbsp;&nbsp;

- [00:00:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=46) Let's look at 3 versions of this station. Each one&nbsp; has a different problem, and each problem needs a&nbsp;&nbsp;

- [00:00:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=51) different fix. Finding the cause first saves us&nbsp; from changing settings that make no difference.&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=58) These renders were made in advance,&nbsp;&nbsp;

- [00:01:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=60) so we can study them as plain images.&nbsp; Shift Home fits the picture to the editor.&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=68) In the first one, the camera is the problem.&nbsp; This is the view our camera has had so far: from&nbsp;&nbsp;

- [00:01:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=73) high above, the courier merges with the station&nbsp; behind it, and most of the frame is empty space.&nbsp;&nbsp;

- [00:01:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=80) No render setting can fix that. Samples, denoising&nbsp; and resolution only change how the picture is&nbsp;&nbsp;

- [00:01:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=85) calculated. They cannot move the camera or tell&nbsp; your eye where to go. The second version has a&nbsp;&nbsp;

- [00:01:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=91) good camera but flat lighting. Light arrives&nbsp; evenly from every direction, so the courier's&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=97) sides look much more alike, and the signal&nbsp; stands out far less against its surroundings.&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=106) The latest version has the camera and the light&nbsp; we want, so its problem must lie somewhere else.&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=112) I open it the same way, by its file name. It&nbsp; is grainy: look at the ground and the shadows.&nbsp;&nbsp;

- [00:02:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=121) Dark areas show grain first, so I zoom in on the&nbsp; courier's shadow. Speckles cover the flat ground:&nbsp;&nbsp;

- [00:02:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=127) a sampling problem, and this time render settings&nbsp; are the right tool. Now let me check them at a&nbsp;&nbsp;

- [00:02:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=133) small size, the way a viewer meets a thumbnail.&nbsp; In the first version the courier shrinks to a&nbsp;&nbsp;

- [00:02:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=138) small block among the station's parts, while our&nbsp; final image still shows a clear shape and a bright&nbsp;&nbsp;

- [00:02:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=144) signal. Alt O opens the final render, so we judge&nbsp; both at one size. 4 renders share this folder;&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=150) clear names matter. Shrinking a picture is a&nbsp; quick test: details vanish, and only strong&nbsp;&nbsp;

- [00:02:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=157) shapes and contrast survive. So our 2 goals&nbsp; for today are a clear courier silhouette and&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=164) a bright signal against a quieter environment.&nbsp; Let's build that image from the beginning,&nbsp;&nbsp;

- [00:02:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=169) starting from last week's station. This entry file&nbsp; is an exact copy of last lecture's final station.&nbsp;&nbsp;

- [00:02:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=177) Working on a copy keeps the finished&nbsp; version safe for later comparisons.&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=182) Before we move anything, let's write&nbsp; our goals into the file. I change this&nbsp;&nbsp;

- [00:03:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=187) timeline area into a Text Editor and make it a&nbsp; little taller, so several lines stay readable.&nbsp;&nbsp;

- [00:03:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=192) Then I create a new text for the notes and goals&nbsp; of this lecture. The name shows its purpose.&nbsp;&nbsp;

- [00:03:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=201) Goal 1: the courier reads as a clear silhouette.&nbsp; Goal 2: the signal is the brightest point against&nbsp;&nbsp;

- [00:03:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=207) quieter surroundings. These notes are&nbsp; saved inside the blend file, and we will&nbsp;&nbsp;

- [00:03:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=211) judge every camera and light change against&nbsp; them. Short goals are easier to check later.&nbsp;&nbsp;

- [00:03:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=219) Our courier is standing on the platform,&nbsp; behind the housing. For the arrival story,&nbsp;&nbsp;

- [00:03:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=223) I bring it forward onto the terrain,&nbsp; where its whole outline is free.&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=229) The courier is built from 9 separate parts&nbsp; inside 1 collection. In the Outliner,&nbsp;&nbsp;

- [00:03:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=234) I right-click that collection and choose Select&nbsp; Objects, so all 9 parts are selected together.&nbsp;&nbsp;

- [00:04:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=242) With the global axes, I type G, X and -2.2,&nbsp; then G, Y and -1.6. Every part keeps its place&nbsp;&nbsp;

- [00:04:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=249) relative to the others, so the courier moves as 1&nbsp; piece. The header confirms every distance I enter.&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=257) The platform is 20 centimetres tall, so I&nbsp; lower the group by 0.2 metres. From the side,&nbsp;&nbsp;

- [00:04:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=263) the wheels now rest on the terrain&nbsp; instead of hovering in the air.&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=269) A low angle confirms our fix.&nbsp; Both wheels touch the ground,&nbsp;&nbsp;

- [00:04:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=273) and the courier stands clear of the station, with&nbsp; room around it for the camera and the lights.&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=280) 1 more detail competes for attention. In Material&nbsp; Preview, the colourful checker on the housing lid&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=286) stands out. It was our UV test from the last&nbsp; lecture. I give the lid the painted shell&nbsp;&nbsp;

- [00:04:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=291) material instead, so it stops pulling the eye away&nbsp; from the signal, then I return to Solid shading.&nbsp;&nbsp;

- [00:04:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=298) Typing a few letters filters the material list,&nbsp; which is faster than scrolling through every name.&nbsp;&nbsp;

- [00:05:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=306) Now the camera. This scene already has 1&nbsp; camera, and I want a clear name for it,&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=310) because later we will add a second camera for&nbsp; the animation. I press F2 and type CAM hero,&nbsp;&nbsp;

- [00:05:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=316) joined by an underscore. It is already the scene's&nbsp; active camera, as the Scene properties show.&nbsp;&nbsp;

- [00:05:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=325) The active camera is the one the render uses,&nbsp; whatever view we happen to be looking through.&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=331) I navigate the viewport to a lower view, with the&nbsp; courier on the left, the beacon near the centre&nbsp;&nbsp;

- [00:05:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=337) and some terrain in front. This is a viewpoint I&nbsp; like, but the camera is still somewhere else. From&nbsp;&nbsp;

- [00:05:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=343) the View menu, Align View, Align Active Camera to&nbsp; View moves the camera to this viewpoint. It copies&nbsp;&nbsp;

- [00:05:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=350) the position and direction but keeps its own&nbsp; lens, so the frame is a little wider than my view.&nbsp;&nbsp;

- [00:05:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=356) For small adjustments, the sidebar's View tab&nbsp; has Camera to View. While it is on, navigating&nbsp;&nbsp;

- [00:06:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=362) the viewport moves the camera itself, so I nudge&nbsp; the framing until the courier sits comfortably.&nbsp;&nbsp;

- [00:06:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=369) Then I turn it off again. Now I can&nbsp; orbit freely to inspect the scene,&nbsp;&nbsp;

- [00:06:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=374) and when I return to the camera view,&nbsp; the framing I chose is still there.&nbsp;&nbsp;

- [00:06:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=379) To experiment without losing our composition, I&nbsp; duplicate the hero camera, name the copy CAM test,&nbsp;&nbsp;

- [00:06:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=385) and make it the active camera with Control and&nbsp; Numpad 0. Then, with Camera to View switched on,&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=391) I centre the courier in this test camera's&nbsp; frame, with some breathing room. Its focal&nbsp;&nbsp;

- [00:06:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=398) length is 35 mm. At 85, with the camera exactly&nbsp; where it is, everything grows by the same amount.&nbsp;&nbsp;

- [00:06:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=405) A longer lens from the same position simply crops&nbsp; the picture. I keep the current view in the first&nbsp;&nbsp;

- [00:06:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=411) render slot to compare later. Each render slot&nbsp; holds its own picture, so the next preview goes&nbsp;&nbsp;

- [00:06:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=417) into slot 2 beside this one. At 24 mm, we see much&nbsp; more of the environment, about 74 degrees across,&nbsp;&nbsp;

- [00:07:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=426) 3 times wider than at 85. Again, nothing in the&nbsp; scene moved; the lens only widened our view.&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=433) Now the other route. I stay at 24 mm and move the&nbsp; camera toward the courier until it is as large&nbsp;&nbsp;

- [00:07:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=441) as in our 85 mm preview. Look at the station&nbsp; behind the courier: it shrinks and falls away.&nbsp;&nbsp;

- [00:07:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=447) I render this view into a second slot, and now&nbsp; I flip between the 2 previews: the courier is&nbsp;&nbsp;

- [00:07:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=453) the same size in each one. But from far away with&nbsp; the long lens, the station looms right behind it.&nbsp;&nbsp;

- [00:07:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=459) The relationship between near and far comes only&nbsp; from the camera's position. So, position changes&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=465) perspective, while focal length changes the field&nbsp; of view for a given sensor. Choose the combination&nbsp;&nbsp;

- [00:07:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=471) that tells your story, not a favourite number. I&nbsp; delete the test camera and make our hero camera&nbsp;&nbsp;

- [00:07:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=477) active again. The Outliner's search field&nbsp; finds it by name, even in a crowded scene.&nbsp;&nbsp;

- [00:08:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=486) Now I choose the hero lens. 45 mm is a&nbsp; little narrower than this camera's 35,&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=492) so the courier and the station fill the&nbsp; frame without crowding it. A small nudge&nbsp;&nbsp;

- [00:08:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=497) with Camera to View recentres the framing.&nbsp; Composition guides are references, not rules.&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=505) In Viewport Display, I turn on the guide that&nbsp; splits the frame into 3 columns and 3 rows.&nbsp;&nbsp;

- [00:08:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=511) The courier sits near the left line, with open&nbsp; sky around the beacon. Look for tangencies:&nbsp;&nbsp;

- [00:08:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=516) 2 outlines that touch read as one. The courier's&nbsp; head must not kiss a post or the roof. Ours is&nbsp;&nbsp;

- [00:08:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=522) clear, and a small nudge keeps that gap.&nbsp; Unticking Camera to View keeps the frame.&nbsp;&nbsp;

- [00:08:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=530) I also leave room above and to the right of the&nbsp; beacon. That space keeps the signal readable,&nbsp;&nbsp;

- [00:08:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=536) and it can hold a title later&nbsp; without covering our courier.&nbsp;&nbsp;

- [00:09:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=540) Once the framing works, the resolution belongs&nbsp; with it, because the frame's shape must match&nbsp;&nbsp;

- [00:09:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=545) the final video. In the Output properties, I&nbsp; search for Resolution. Our output is 3840 × 2160.&nbsp;&nbsp;

- [00:09:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=553) I add 1 line to our notes: the camera's&nbsp; name, its 45 mm lens and the output size.&nbsp;&nbsp;

- [00:09:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=559) The camera's position itself is saved with the&nbsp; file. The guides helped us place the courier and&nbsp;&nbsp;

- [00:09:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=566) the signal, but they would distract us while we&nbsp; judge the lighting, so I switch Thirds off again.&nbsp;&nbsp;

- [00:09:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=573) To see how a camera projects the scene,&nbsp; let's use a small, clean study of its own.&nbsp;&nbsp;

- [00:09:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=578) I create a new, empty scene with a clear name,&nbsp; so the station scene stays exactly as it is,&nbsp;&nbsp;

- [00:09:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=583) and both scenes are saved together in 1 blend&nbsp; file. A side view shows distances along Y.&nbsp;&nbsp;

- [00:09:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=590) I add a camera at the origin and rotate it 90&nbsp; degrees around X, so it looks along the Y axis,&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=596) the direction of our markers. Then I add a plane&nbsp; and scale it down to half a metre. Finally I stand&nbsp;&nbsp;

- [00:10:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=601) it up with another 90-degree turn: this square&nbsp; is our first marker, facing the camera directly.&nbsp;&nbsp;

- [00:10:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=608) Typed values keep the markers exact, which matters&nbsp; because we are about to compare their sizes.&nbsp;&nbsp;

- [00:10:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=616) I turn the view a little and frame&nbsp; the camera and the marker together,&nbsp;&nbsp;

- [00:10:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=620) so the distances along Y stay easy to see.&nbsp; Then I move the marker 2 metres along Y.&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=629) A copy goes 2 metres further, exactly twice&nbsp; as far, and each one sits on the centre line,&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=635) inside the camera's view pyramid. I hide the&nbsp; near one, so it cannot cover the far one.&nbsp;&nbsp;

- [00:10:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=641) Through the camera, the far marker spans about a&nbsp; sixth of the frame. Now I show the near one alone:&nbsp;&nbsp;

- [00:10:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=647) it is twice as wide in the picture. At twice&nbsp; the distance, the marker covers half as much.&nbsp;&nbsp;

- [00:10:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=653) That is perspective: size falls with distance.&nbsp; Now I switch the camera type to Orthographic and&nbsp;&nbsp;

- [00:10:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=659) set a smaller orthographic scale,&nbsp; so the markers are easy to see.&nbsp;&nbsp;

- [00:11:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=663) Showing each marker alone again,&nbsp; both now have the same width,&nbsp;&nbsp;

- [00:11:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=667) because an orthographic camera does not shrink&nbsp; distant objects. Orthographic Scale is the width&nbsp;&nbsp;

- [00:11:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=673) of the view in metres, so 3 metres makes&nbsp; our half metre markers easy to compare.&nbsp;&nbsp;

- [00:11:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=681) Back in perspective, the 2 markers have&nbsp; different sizes again. Now I slide the&nbsp;&nbsp;

- [00:11:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=685) near marker a little sideways. It now hides&nbsp; part of the far one. That is occlusion:&nbsp;&nbsp;

- [00:11:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=691) along each view direction, the nearest surface&nbsp; is the one we see. The far marker remains whole.&nbsp;&nbsp;

- [00:11:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=700) Clipping is a different control. The camera's&nbsp; Clip End is 1000 metres. If I set it to 3 metres,&nbsp;&nbsp;

- [00:11:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=706) the far marker disappears, because it lies&nbsp; outside the camera's visible depth range.&nbsp;&nbsp;

- [00:11:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=712) The marker is still there: the Outliner lists it,&nbsp; and when I set the clipping end to 1000 again,&nbsp;&nbsp;

- [00:11:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=718) it returns. Clipping only limits what the camera&nbsp; shows. The viewport has its own clip range,&nbsp;&nbsp;

- [00:12:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=725) in the View panel of the sidebar. Those values&nbsp; apply when you are not looking through a camera,&nbsp;&nbsp;

- [00:12:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=730) so check the camera's values when the camera&nbsp; image is wrong. Focus is a third question:&nbsp;&nbsp;

- [00:12:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=736) it decides which distance looks sharp, not&nbsp; what is visible. We will set it on our hero&nbsp;&nbsp;

- [00:12:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=741) camera soon. Let's return to the station&nbsp; scene. Each scene remembers its camera.&nbsp;&nbsp;

- [00:12:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=748) Back on the station, I switch our hero camera to&nbsp; orthographic for a moment. The depth flattens:&nbsp;&nbsp;

- [00:12:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=754) the station no longer shrinks behind the&nbsp; courier, like a technical drawing. Then&nbsp;&nbsp;

- [00:12:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=759) I return to perspective, which keeps the sense&nbsp; of distance that our arrival story depends on.&nbsp;&nbsp;

- [00:12:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=767) Before we light anything, I set Cycles to use&nbsp; the graphics card in the Render properties,&nbsp;&nbsp;

- [00:12:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=772) so previews update quickly. Then&nbsp; I switch the viewport to Rendered&nbsp;&nbsp;

- [00:12:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=776) shading and hide the overlays, so&nbsp; only the picture remains on screen.&nbsp;&nbsp;

- [00:13:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=783) Light describes form, so to see what each light&nbsp; really does, let's start from almost nothing.&nbsp;&nbsp;

- [00:13:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=789) In the Outliner, I turn off the 2 lights the&nbsp; station has carried since the early lectures,&nbsp;&nbsp;

- [00:13:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=795) the point light first and then the other one,&nbsp; for the viewport and for rendering. Switching&nbsp;&nbsp;

- [00:13:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=800) them off, rather than deleting them, keeps both&nbsp; lights available whenever we need them again.&nbsp;&nbsp;

- [00:13:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=807) Now the only light comes from this dark blue&nbsp; world. It barely separates the courier from the&nbsp;&nbsp;

- [00:13:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=812) ground. Let's add a single area light and make it&nbsp; our key, the main light that shapes the courier.&nbsp;&nbsp;

- [00:13:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=819) I name it L G T Key, joined by an underscore,&nbsp; and I want it to keep pointing at the courier&nbsp;&nbsp;

- [00:13:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=825) wherever I move it. In the Object Constraint&nbsp; properties, I add a Track To constraint,&nbsp;&nbsp;

- [00:13:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=830) which keeps it aimed for us. Without a target,&nbsp; the new constraint has nothing to follow.&nbsp;&nbsp;

- [00:13:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=838) I pick the courier's body as the target.&nbsp; The light turns toward it at once,&nbsp;&nbsp;

- [00:14:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=842) but it is still weak and sits low behind the&nbsp; crate, so it barely reaches the courier yet.&nbsp;&nbsp;

- [00:14:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=850) I set its power to 200 watts in the&nbsp; light properties; for an area light&nbsp;&nbsp;

- [00:14:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=855) this close to a small scene, that is&nbsp; plenty. Then, in the sidebar's Item tab,&nbsp;&nbsp;

- [00:14:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=860) I type its first position into the 3 location&nbsp; fields: front right and above the courier.&nbsp;&nbsp;

- [00:14:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=865) Watch the body's planes: one side bright, one side&nbsp; darker, and a clear shadow across the terrain.&nbsp;&nbsp;

- [00:14:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=871) That contrast between bright and dark&nbsp; planes is what lets us read the form.&nbsp;&nbsp;

- [00:14:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=879) This is position 1. Now the same light moves&nbsp; to the courier's side. Because it still tracks&nbsp;&nbsp;

- [00:14:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=884) its target, only its direction changes. From&nbsp; the side, the light skims across the body.&nbsp;&nbsp;

- [00:14:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=891) Every bevel catches a highlight, and the far side&nbsp; goes dark. It is dramatic, but the courier's front&nbsp;&nbsp;

- [00:14:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=896) now falls into shadow. The third position is&nbsp; behind the courier. Now only its outline glows,&nbsp;&nbsp;

- [00:15:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=903) and the front is in shadow. A light from behind&nbsp; separates a shape from its background, but it does&nbsp;&nbsp;

- [00:15:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=909) not show the form. Comparing the 3 positions, the&nbsp; front right one reads best: the courier's planes&nbsp;&nbsp;

- [00:15:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=915) stay distinct, its outline is clear and the beacon&nbsp; still stands apart. I type the first position&nbsp;&nbsp;

- [00:15:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=921) again to move the key back there, and close&nbsp; the sidebar. The courier's planes read clearly.&nbsp;&nbsp;

- [00:15:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=929) A light's size matters as much as its position.&nbsp; The key is 1 metre across right now. I keep its&nbsp;&nbsp;

- [00:15:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=935) power and its position exactly as they are,&nbsp; and in the light's properties I make it tiny:&nbsp;&nbsp;

- [00:15:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=940) just 10 centimetres, roughly the size of a palm.&nbsp; Watch the shadow edges beneath the courier now.&nbsp;&nbsp;

- [00:15:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=948) The shadows become crisp, with hard edges. At&nbsp; 3 metres, the same power spreads over a larger&nbsp;&nbsp;

- [00:15:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=954) source and the edges turn soft. What matters&nbsp; is how big the light looks from the courier's&nbsp;&nbsp;

- [00:15:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=959) position. A little world light keeps the shadow&nbsp; side readable, reaching corners the key misses.&nbsp;&nbsp;

- [00:16:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=966) But what does a strong world do to&nbsp; our 2 goals? In the World properties,&nbsp;&nbsp;

- [00:16:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=971) I search for the Strength value. Watch&nbsp; the shadows and the signal as I type 4.&nbsp;&nbsp;

- [00:16:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=979) Everything brightens, the shadows flatten&nbsp; and the signal stands out much less:&nbsp;&nbsp;

- [00:16:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=983) nothing guides the eye anymore. So I set the&nbsp; world back to 1 and let the key do the shaping.&nbsp;&nbsp;

- [00:16:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=991) The beacon post has the fully metallic material&nbsp; from Lecture 5. Let me look at it closely. In this&nbsp;&nbsp;

- [00:16:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=996) dark world, the metal looks dull and grey, even&nbsp; though its material is a bright, smooth metal.&nbsp;&nbsp;

- [00:16:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=1003) A metal shows almost no light of its&nbsp; own; it reflects what surrounds it,&nbsp;&nbsp;

- [00:16:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=1007) tinted by its colour. Here there is almost nothing&nbsp; around it, apart from the key, which shows up as&nbsp;&nbsp;

- [00:16:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=1013) this one narrow highlight line. If I lower the&nbsp; key, that highlight line turns much brighter,&nbsp;&nbsp;

- [00:16:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=1019) because the post now reflects it more&nbsp; directly toward us. The placement and&nbsp;&nbsp;

- [00:17:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=1024) shape of a light matter twice: they light the&nbsp; subject, and they appear in every reflection.&nbsp;&nbsp;

- [00:17:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=1031) To give the metal something to reflect, let's&nbsp; use a real captured environment. Poly Haven&nbsp;&nbsp;

- [00:17:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=1036) offers free high dynamic range images, and we can&nbsp; download them directly in the browser. I search&nbsp;&nbsp;

- [00:17:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=1043) for Cloud Layers and open the image by Greg Zaal.&nbsp; It is a bright outdoor sky with strong contrast,&nbsp;&nbsp;

- [00:17:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=1049) which shows reflections clearly. 4K resolution&nbsp; and the EXR format are already selected, so I go&nbsp;&nbsp;

- [00:17:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=1055) straight to the Download button. That format keeps&nbsp; the full brightness range that lighting needs.&nbsp;&nbsp;

- [00:17:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=1064) I save it in our course folder, next to the&nbsp; other project files, inside a folder called hdri,&nbsp;&nbsp;

- [00:17:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=1070) and the download begins. The blend&nbsp; file will store a path to this image,&nbsp;&nbsp;

- [00:17:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1075) so the image has to stay with the project files.&nbsp;&nbsp;

- [00:17:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=1079) In the World properties, I create a new world&nbsp; just for this comparison. The original dark&nbsp;&nbsp;

- [00:18:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=1084) world stays in the file, so we can switch between&nbsp; the two at any time. For now, it is simply a copy.&nbsp;&nbsp;

- [00:18:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=1094) To fill this new world with our image, I click&nbsp; the socket button beside Color and choose an&nbsp;&nbsp;

- [00:18:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=1099) Environment Texture. Its Open button shows the&nbsp; file browser, already inside our hdri folder.&nbsp;&nbsp;

- [00:18:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=1109) I type cloud layers, the sky file we got a moment&nbsp; ago, and open it. The sky and the field now&nbsp;&nbsp;

- [00:18:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=1115) surround the station. The metal post turns bright&nbsp; silver, and the station takes on the outdoor&nbsp;&nbsp;

- [00:18:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=1121) colours. To turn this sky, I switch the lower&nbsp; area to the Shader Editor and make it taller.&nbsp;&nbsp;

- [00:18:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=1130) The header switches this editor from the selected&nbsp; object to the environment, and Home frames the&nbsp;&nbsp;

- [00:18:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=1136) whole graph. Turning the sky needs extra building&nbsp; blocks that the panel on the right cannot offer.&nbsp;&nbsp;

- [00:19:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1143) With F3 I search for a Mapping node, a node that&nbsp; rotates directions, and put it beside the image.&nbsp;&nbsp;

- [00:19:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=1148) Then I add a Texture Coordinate node,&nbsp; whose Generated output feeds the Mapping.&nbsp;&nbsp;

- [00:19:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=1154) I connect Generated to the Mapping's vector&nbsp; and the Mapping into the image's vector. At&nbsp;&nbsp;

- [00:19:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=1159) a Z rotation of 90 degrees, the whole sky turns,&nbsp; and behind the post, a dirt track comes into view.&nbsp;&nbsp;

- [00:19:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=1168) At one hundred eighty, more of the field&nbsp; comes round, yet the station never moves.&nbsp;&nbsp;

- [00:19:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=1173) The image feeds the Background node, and the&nbsp; Mapping rotates the direction it is looked up in:&nbsp;&nbsp;

- [00:19:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=1179) the same tree the World properties show.&nbsp;&nbsp;

- [00:19:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=1185) Now a second route that needs no download.&nbsp; I remove this world from the scene, create a&nbsp;&nbsp;

- [00:19:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=1190) fresh one and name it, then choose a Sky Texture&nbsp; for its colour. Blender calculates this sky,&nbsp;&nbsp;

- [00:19:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=1196) so it travels with the blend file, and the&nbsp; post now reflects the sky's soft colours.&nbsp;&nbsp;

- [00:20:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=1204) This sky is physically bright, so I lower&nbsp; its strength until the station sits at a&nbsp;&nbsp;

- [00:20:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=1209) sensible brightness. It also contains its own&nbsp; sun: the Sun Disc option is on by default,&nbsp;&nbsp;

- [00:20:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=1214) and the disc casts these shadows. Its&nbsp; small size gives them crisp edges.&nbsp;&nbsp;

- [00:20:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=1220) The sky has a sun elevation. At 60 degrees&nbsp; it is midday: bright, neutral light.&nbsp;&nbsp;

- [00:20:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=1225) At 15 degrees the light turns warmer and lower,&nbsp; and the shadows stretch across the terrain.&nbsp;&nbsp;

- [00:20:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=1235) Notice how little of the sky the camera actually&nbsp; shows. The sky still lights everything, because&nbsp;&nbsp;

- [00:20:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=1240) light arrives from every direction it covers,&nbsp; including the large part behind and above the&nbsp;&nbsp;

- [00:20:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=1246) camera. Our station sits on a small terrain tile,&nbsp; so with an open sky its edge floats in space. I&nbsp;&nbsp;

- [00:20:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=1253) pick the ground plane in the Outliner and scale&nbsp; it by 100, so the land reaches the horizon. Then,&nbsp;&nbsp;

- [00:20:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=1259) in its material slot, I browse to a darker ground&nbsp; material, the olive terrain clay from Lecture 4.&nbsp;&nbsp;

- [00:21:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=1266) The plane had no material yet, so it rendered&nbsp; in Blender's default grey. The browse list holds&nbsp;&nbsp;

- [00:21:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=1272) every material already stored in this&nbsp; file, so nothing has to be brought in.&nbsp;&nbsp;

- [00:21:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=1280) The sky's own sun disc lights the scene right&nbsp; now. I switch it off and add a separate Sun light,&nbsp;&nbsp;

- [00:21:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=1285) and give it a clear name. A sun is so&nbsp; far away that only its direction matters,&nbsp;&nbsp;

- [00:21:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=1290) never its position. Its strength is&nbsp; light per square metre, not total power.&nbsp;&nbsp;

- [00:21:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=1297) Its light properties hold the 2 settings we need,&nbsp;&nbsp;

- [00:21:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=1300) its strength and its angle. I set the strength&nbsp; to 3, so its shadows read like the disc's.&nbsp;&nbsp;

- [00:21:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1309) Then I rotate it 75 degrees around X,&nbsp; tilting it low, and then 180 around Z,&nbsp;&nbsp;

- [00:21:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1315) to match the sky's glow. Its Angle controls&nbsp; how large the sun looks. At half a degree,&nbsp;&nbsp;

- [00:22:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=1322) like the real sun, the shadows are sharp. At 15&nbsp; degrees, they soften, the same lesson as the area&nbsp;&nbsp;

- [00:22:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=1327) light's size. Then I return it to half a degree.&nbsp; The sky's elevation and the Sun's rotation are&nbsp;&nbsp;

- [00:22:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=1333) separate controls. If I lower the sky's sun,&nbsp; the Sun light does not follow, and the shadows&nbsp;&nbsp;

- [00:22:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=1339) now disagree with the sky. The horizon warms,&nbsp; yet every shadow stays exactly where it was.&nbsp;&nbsp;

- [00:22:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=1346) So when you combine them, match them deliberately.&nbsp; The Sun's X angle is 90 degrees minus the sky's&nbsp;&nbsp;

- [00:22:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=1352) elevation, so I type 82. Its Z angle is&nbsp; 180 degrees minus the sky's rotation,&nbsp;&nbsp;

- [00:22:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1358) and that rotation stays at 180&nbsp; here. Both now describe 1 low sun.&nbsp;&nbsp;

- [00:22:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=1366) Now I switch the sky's sun disc back on&nbsp; while the Sun light stays. The backdrop and&nbsp;&nbsp;

- [00:22:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=1371) the ground around the courier turn brighter and&nbsp; warmer, because 2 suns light the scene at once.&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=1377) So choose 1 source for the sun. To compare them, I&nbsp; filter the Outliner to our Sun light and hide it,&nbsp;&nbsp;

- [00:23:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1383) for the viewport and for rendering: now&nbsp; the sky disc alone gives these shadows.&nbsp;&nbsp;

- [00:23:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=1391) Then I switch the disc off in the World&nbsp; properties, which leaves no sun at all,&nbsp;&nbsp;

- [00:23:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=1396) and bring the Sun back with its eye and&nbsp; camera icons: the shadows match again.&nbsp;&nbsp;

- [00:23:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=1404) The Sun light gives us direct, independent&nbsp; control, so I keep it: I can aim it,&nbsp;&nbsp;

- [00:23:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=1409) soften it with its Angle, and&nbsp; switch it off in the Outliner.&nbsp;&nbsp;

- [00:23:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=1416) Does our outdoor lighting hold in the other&nbsp; engine? In the Render properties I switch&nbsp;&nbsp;

- [00:23:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=1421) the engine to EEVEE. The sky still lights the&nbsp; scene, and our Sun casts the same crisp shadows.&nbsp;&nbsp;

- [00:23:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1429) EEVEE adds one setting of its own to&nbsp; the World properties, under Threshold:&nbsp;&nbsp;

- [00:23:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=1433) a Sun section that turns the brightest part&nbsp; of a captured sky into a sun with shadows.&nbsp;&nbsp;

- [00:23:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=1439) The light, the shadows and&nbsp; the sky agree in both engines,&nbsp;&nbsp;

- [00:24:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1443) and our separate Sun behaves the same in each,&nbsp; so this outdoor route works wherever we render.&nbsp;&nbsp;

- [00:24:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=1452) In the Render properties, I switch the engine back&nbsp; to Cycles, which still uses the graphics card,&nbsp;&nbsp;

- [00:24:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=1458) because each engine keeps its own settings. Now we&nbsp; compare three environments, switching between them&nbsp;&nbsp;

- [00:24:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=1464) with the browse menu in the properties.&nbsp; The first is World, the plain dark one.&nbsp;&nbsp;

- [00:24:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=1472) Against a dark background, a key light we place&nbsp; ourselves controls exactly where the eye goes.&nbsp;&nbsp;

- [00:24:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1478) An environment image gives believable fill&nbsp; light and reflections almost for free,&nbsp;&nbsp;

- [00:24:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=1483) straight from a photo. Most shots use both, and&nbsp; so will we, with this sky. The sun has just set,&nbsp;&nbsp;

- [00:24:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1489) so I lower the sky's elevation to -4&nbsp; degrees. After sunset the sky is darker,&nbsp;&nbsp;

- [00:24:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1495) so I raise its strength to one point five.&nbsp;&nbsp;

- [00:25:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=1501) Direct sunlight would contradict that sky, so I&nbsp; switch the Sun light off: the sky turns a quiet,&nbsp;&nbsp;

- [00:25:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=1506) deep blue, and the courier keeps its key. Now the&nbsp; signal should be the brightest point. I click the&nbsp;&nbsp;

- [00:25:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=1513) beacon's head to select it, then switch the lower&nbsp; area to the Shader Editor and make it taller,&nbsp;&nbsp;

- [00:25:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=1518) so its material's nodes stay easy to follow.&nbsp; The editor still showed the World's nodes;&nbsp;&nbsp;

- [00:25:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=1525) set to Object, it follows the&nbsp; selected beacon and its material.&nbsp;&nbsp;

- [00:25:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=1531) In the Principled BSDF node, the Emission panel is&nbsp; already open. The emission strength is 2. At 12,&nbsp;&nbsp;

- [00:25:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=1537) the beacon glows against the blue sky and warms&nbsp; the nearby posts. I return the lower area to our&nbsp;&nbsp;

- [00:25:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=1544) notes and record these choices: an area key&nbsp; from the front right, aimed with Track To,&nbsp;&nbsp;

- [00:25:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1549) and a blue hour sky with the sun below the&nbsp; horizon. Both goals now hold in the camera view:&nbsp;&nbsp;

- [00:25:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1555) a clear courier silhouette and a bright signal&nbsp; above it. 1 short line per decision is enough;&nbsp;&nbsp;

- [00:26:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=1561) later, these notes explain each&nbsp; choice without reopening every panel.&nbsp;&nbsp;

- [00:26:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=1568) Why does a surface facing the light look brighter?&nbsp; Let's isolate the idea in our test scene,&nbsp;&nbsp;

- [00:26:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=1573) the one we made for the projection markers. It&nbsp; has no world light at all, so only the lights&nbsp;&nbsp;

- [00:26:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=1579) we place can reach a surface. A new scene starts&nbsp; with EEVEE, so in the Render Properties I set its&nbsp;&nbsp;

- [00:26:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=1585) render engine to Cycles, which follows real&nbsp; light physics. Our 2 projection markers have&nbsp;&nbsp;

- [00:26:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=1592) their camera icons switched off in the Outliner,&nbsp; so they stay out of renders and add no light here.&nbsp;&nbsp;

- [00:26:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1598) I select the plate in the Outliner, and the&nbsp; period key on the number pad frames it in view.&nbsp;&nbsp;

- [00:26:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=1607) I prepared this plate with a plain white diffuse&nbsp; material, a little away from the markers.&nbsp;&nbsp;

- [00:26:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=1613) There is a single Sun shining straight&nbsp; down, with its default strength of 1,&nbsp;&nbsp;

- [00:26:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=1618) and a camera looking straight down from&nbsp; above, which I make the active camera.&nbsp;&nbsp;

- [00:27:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1623) The surface normal points straight out of&nbsp; the plate. Light arriving along that normal&nbsp;&nbsp;

- [00:27:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=1628) spreads over the least area, so the plate&nbsp; receives the most energy per square metre.&nbsp;&nbsp;

- [00:27:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=1635) I render it, and in the render I hold the&nbsp; left mouse button on the centre of the plate.&nbsp;&nbsp;

- [00:27:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=1640) The readout shows the pixel's linear red, green&nbsp; and blue values, all equal for this white surface.&nbsp;&nbsp;

- [00:27:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=1646) Then I go back to the viewport, select the plate&nbsp; and rotate it 60 degrees around X, so it no longer&nbsp;&nbsp;

- [00:27:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=1652) faces the sun directly. I render again and hold&nbsp; the mouse on the same spot: each value is now half&nbsp;&nbsp;

- [00:27:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1658) as large as before. From about 0.32, it falls to&nbsp; 0.16. That half is the cosine of 60 degrees. The&nbsp;&nbsp;

- [00:27:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=1666) dot product of the unit normal and the unit&nbsp; direction toward the light gives this cosine.&nbsp;&nbsp;

- [00:27:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=1671) For this one-sided diffuse surface, light follows&nbsp; the larger of 0 and N dot L. The display can show&nbsp;&nbsp;

- [00:27:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=1678) these 2 pixels quite differently, because the&nbsp; view transform maps scene light to screen values.&nbsp;&nbsp;

- [00:28:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=1685) The sample readout gives the scene's linear&nbsp; values, which is where the half really holds.&nbsp;&nbsp;

- [00:28:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=1692) Blender can calculate that same dot product for&nbsp; us. Beside the plate I prepared 2 spheres with&nbsp;&nbsp;

- [00:28:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=1698) nothing underneath them, so only the Sun lights&nbsp; them. To find them, I use the Outliner's search.&nbsp;&nbsp;

- [00:28:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=1706) I show both with their eye icons; the star in the&nbsp; search matters, because exact matching is on here.&nbsp;&nbsp;

- [00:28:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=1713) In Rendered shading, the period key frames the&nbsp; selected sphere, and I turn the view to face the&nbsp;&nbsp;

- [00:28:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1718) pair. The right sphere has the plain diffuse&nbsp; material, so Cycles shades it from the light.&nbsp;&nbsp;

- [00:28:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=1726) The left one will get a material built from the&nbsp; surface normal; for now it is black all over.&nbsp;&nbsp;

- [00:28:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=1732) I open the lower area as a Shader Editor and make&nbsp; it taller. It shows the left sphere's material,&nbsp;&nbsp;

- [00:28:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=1737) which so far holds only its output. With F3 I&nbsp; search for a Geometry node: its Normal output&nbsp;&nbsp;

- [00:29:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1743) gives the surface normal at every shading point.&nbsp; Next comes a Vector Math node set to Dot Product.&nbsp;&nbsp;

- [00:29:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=1750) I connect the normal to its first vector, and&nbsp; set the second vector to X 0, Y 0 and Z 1,&nbsp;&nbsp;

- [00:29:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=1756) the straight up direction, which points toward our&nbsp; Sun. I move the output to the right to make room,&nbsp;&nbsp;

- [00:29:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=1764) and search for a Maximum node. It outputs the&nbsp; larger of its 2 inputs, so with 0 as its second&nbsp;&nbsp;

- [00:29:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=1771) value, negative results become 0: a surface&nbsp; facing away from the light receives nothing.&nbsp;&nbsp;

- [00:29:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=1779) I connect the dot product into it, and add an&nbsp; Emission shader. The Maximum result drives the&nbsp;&nbsp;

- [00:29:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=1784) emission colour, and the emission goes into the&nbsp; material output, so it now shades the left sphere.&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=1792) Its strength becomes 0.318, 1/π, because a&nbsp; white diffuse surface spreads what it receives&nbsp;&nbsp;

- [00:29:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=1799) over every direction. Now the 2 spheres&nbsp; match: bright on top, dark at the equator.&nbsp;&nbsp;

- [00:30:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=1805) Here the light shines straight down, so its&nbsp; direction happens to be straight up. In the next&nbsp;&nbsp;

- [00:30:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=1810) lecture, the same dot product compares the normal&nbsp; with the up direction to find flat ground for&nbsp;&nbsp;

- [00:30:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=1816) scattering rocks. Before the next study, I hide&nbsp; the 2 spheres and return the lower area to our&nbsp;&nbsp;

- [00:30:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=1822) notes, so the viewport gets its full height back&nbsp; for the renders that follow. Then I select the&nbsp;&nbsp;

- [00:30:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=1828) plate in the Outliner and clear its rotation with&nbsp; Alt R, so it lies flat again for the next study.&nbsp;&nbsp;

- [00:30:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=1838) Distance answers a different question. I select&nbsp; the Sun at the end of the Outliner and delete it,&nbsp;&nbsp;

- [00:30:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=1843) then add a point light, which has 0 radius&nbsp; by default and a power of 10 watts. In the&nbsp;&nbsp;

- [00:30:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1849) sidebar I type its location: 6, 0 and 2, which&nbsp; puts it 2 metres above the centre of the plate.&nbsp;&nbsp;

- [00:30:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1855) Its power stays fixed from here on. I render&nbsp; the plate and hold the mouse on its centre:&nbsp;&nbsp;

- [00:31:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1863) the reading is about 0.063. Then I&nbsp; move the light up by 2 more metres,&nbsp;&nbsp;

- [00:31:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=1869) to 4 metres above the plate. Nothing else changes:&nbsp; the same plate, the same light and the same power,&nbsp;&nbsp;

- [00:31:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=1875) only twice the distance. I render again and read&nbsp; the same pixel. The plate looks much darker.&nbsp;&nbsp;

- [00:31:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=1881) The new reading, about 0.016, is a quarter of the&nbsp; first. Twice the distance spreads the same light&nbsp;&nbsp;

- [00:31:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=1887) over 4 times the area. A sun has no such falloff,&nbsp; and a large nearby area light does not behave like&nbsp;&nbsp;

- [00:31:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=1894) a point source either. That is why moving a&nbsp; key closer changes its brightness so quickly,&nbsp;&nbsp;

- [00:31:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=1900) while a sun stays the same everywhere. Let's&nbsp; return to the station and its blue hour sky.&nbsp;&nbsp;

- [00:31:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=1909) Look at the courier's wheels. They are almost&nbsp; black, so the courier's lower half sinks into&nbsp;&nbsp;

- [00:31:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1915) its own shadow. That is a visible problem, and a&nbsp; visible problem deserves a solution. I add a small&nbsp;&nbsp;

- [00:32:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=1923) area light. In the sidebar I type its position:&nbsp; low, near the ground, in front of the courier&nbsp;&nbsp;

- [00:32:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=1928) and on the left of the frame. Then I name it L G&nbsp; T Fill, a name that says its job, because a fill&nbsp;&nbsp;

- [00:32:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=1934) only supports the key. Sitting low, the fill can&nbsp; reach the wheels that the key leaves in shadow.&nbsp;&nbsp;

- [00:32:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=1943) In its light properties, I make it 70 centimetres&nbsp; across and give it 30 watts. The key has 200,&nbsp;&nbsp;

- [00:32:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=1949) but it hangs more than 5 metres away. The fill&nbsp; sits only about 1.5 metres from the courier, so up&nbsp;&nbsp;

- [00:32:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=1956) close 30 watts is plenty, and it lights this side&nbsp; even more than the key does. Then I aim it at the&nbsp;&nbsp;

- [00:32:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=1962) courier with the same Track To constraint as the&nbsp; key, with the courier's body as its target. Now&nbsp;&nbsp;

- [00:32:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=1968) the fill keeps pointing at the courier wherever&nbsp; we later move either of them. Watch the courier's&nbsp;&nbsp;

- [00:32:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=1975) lower half as I switch the fill off and on&nbsp; again in the Outliner. The wheels and the shadow&nbsp;&nbsp;

- [00:33:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=1980) side lift. But the fill also paints a bright&nbsp; patch on the ground in front of the courier,&nbsp;&nbsp;

- [00:33:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=1986) which pulls the eye down. That bright patch&nbsp; works against our goal of quiet surroundings.&nbsp;&nbsp;

- [00:33:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=1994) Moving or dimming the fill would weaken it on&nbsp; the courier. Light linking solves this instead:&nbsp;&nbsp;

- [00:33:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=2001) we tell the light which objects&nbsp; receive it. In Object Properties,&nbsp;&nbsp;

- [00:33:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=2004) the Shading panel has Light Linking. By&nbsp; default, every object receives the fill.&nbsp;&nbsp;

- [00:33:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=2011) Its receiver field takes a collection,&nbsp; so I pick the courier's own collection.&nbsp;&nbsp;

- [00:33:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=2016) Its 9 parts now receive the fill, and nothing&nbsp; else does. The patch on the ground disappears,&nbsp;&nbsp;

- [00:33:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=2022) while the wheels still read clearly. A receiver&nbsp; list hidden inside a light is easy to forget. So I&nbsp;&nbsp;

- [00:33:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=2028) rename the light L G T Fill Courier and add a line&nbsp; to our notes. Weeks later, that note explains why&nbsp;&nbsp;

- [00:33:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=2034) this fill reaches the courier and nothing else.&nbsp; Naming the feature also points to the right panel.&nbsp;&nbsp;

- [00:34:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=2042) Below it, Shadow Linking is the companion control:&nbsp;&nbsp;

- [00:34:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=2045) it chooses which objects block this light. Our&nbsp; fill has nothing in its way, so it stays empty.&nbsp;&nbsp;

- [00:34:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2050) If every light in a scene needs a list, the&nbsp; lights are probably in the wrong places.&nbsp;&nbsp;

- [00:34:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=2057) Now let's test the station's old area light.&nbsp; I switch it back on. It lights everything from&nbsp;&nbsp;

- [00:34:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2062) above: the courier's sides flatten, and the roof&nbsp; and the ground get almost as bright as the signal.&nbsp;&nbsp;

- [00:34:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=2072) Every light should have a job. This one works&nbsp; against both of our goals, so I delete it,&nbsp;&nbsp;

- [00:34:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2077) together with the old point light, which was&nbsp; already switched off. The image is stronger,&nbsp;&nbsp;

- [00:34:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=2082) and every light we remove is 1&nbsp; less for the renderer to sample.&nbsp;&nbsp;

- [00:34:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=2088) Depth of field keeps 1 distance sharp and&nbsp; lets nearer and farther distances soften,&nbsp;&nbsp;

- [00:34:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=2093) like a real lens. I select the hero camera in&nbsp; the Outliner and open its camera properties.&nbsp;&nbsp;

- [00:34:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=2099) Searching for F-Stop in the properties shows the&nbsp; whole Depth of Field panel, with its checkbox&nbsp;&nbsp;

- [00:35:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=2105) in the header, and I turn it on. Then I set&nbsp; Focus on Object to the courier's body, so the&nbsp;&nbsp;

- [00:35:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2110) sharp distance is wherever the courier is. With&nbsp; the default F-Stop, very little changes so far.&nbsp;&nbsp;

- [00:35:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=2116) Rendered view shows every change live. The F-Stop&nbsp; sets how strong the effect is. At 0.5, the courier&nbsp;&nbsp;

- [00:35:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=2124) stays sharp and the far horizon turns soft. The&nbsp; nearer posts and the beacon soften only slightly.&nbsp;&nbsp;

- [00:35:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=2133) A blurred environment is not automatically&nbsp; cinematic. At an F-Stop of 4, the horizon is&nbsp;&nbsp;

- [00:35:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=2138) crisp again, and the focus still&nbsp; follows the courier. I note that&nbsp;&nbsp;

- [00:35:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=2141) choice. Larger F-Stop numbers keep more&nbsp; depth in focus, just as on real cameras.&nbsp;&nbsp;

- [00:35:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=2150) Because the focus follows the courier's body,&nbsp; it stays correct when the courier moves later&nbsp;&nbsp;

- [00:35:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=2155) in the course. A fixed focus distance&nbsp; would need adjusting by hand every time.&nbsp;&nbsp;

- [00:36:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=2162) Motion blur looks similar but has a different&nbsp; cause. It comes from movement during the camera's&nbsp;&nbsp;

- [00:36:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=2167) exposure. Our still frame has nothing moving,&nbsp; so this panel waits for the animation lectures.&nbsp;&nbsp;

- [00:36:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=2175) I add a spot light for a soft beam from&nbsp; the station toward the arriving courier.&nbsp;&nbsp;

- [00:36:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=2179) Our clear air stays the baseline, so I press&nbsp; M and move the light into a new collection,&nbsp;&nbsp;

- [00:36:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=2185) W07_Volume_Study, which keeps the whole&nbsp; experiment apart. 1 collection means a&nbsp;&nbsp;

- [00:36:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=2190) single checkbox can later switch the entire study&nbsp; off. A clear name says what the collection holds.&nbsp;&nbsp;

- [00:36:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=2199) In the sidebar I type its location,&nbsp; which puts it above the platform,&nbsp;&nbsp;

- [00:36:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=2203) just under the roof. For now, its blue&nbsp; direction line points straight down.&nbsp;&nbsp;

- [00:36:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=2212) To keep the light on the courier&nbsp; wherever it drives later,&nbsp;&nbsp;

- [00:36:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=2215) I add the same Track To constraint as our&nbsp; other lights, aimed at the courier's body.&nbsp;&nbsp;

- [00:37:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=2223) Watch the light's blue direction line: once the&nbsp; target is set, it swings toward the courier.&nbsp;&nbsp;

- [00:37:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2230) A spot light is a point light limited to a cone.&nbsp; In its light properties I narrow the cone to&nbsp;&nbsp;

- [00:37:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=2236) 25 degrees and raise the power to 500 watts. In&nbsp; clear air, it only brightens the ground where&nbsp;&nbsp;

- [00:37:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=2243) it lands; the beam itself is invisible.&nbsp; Its pool surrounds the courier's wheels.&nbsp;&nbsp;

- [00:37:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=2249) A beam needs something in the air to scatter&nbsp; light. I add a cube, and with M I move it into&nbsp;&nbsp;

- [00:37:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=2254) the same collection as the spot; typing&nbsp; part of the name finds it in the list,&nbsp;&nbsp;

- [00:37:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=2259) and Enter moves it there. Any watertight mesh&nbsp; can hold a volume; a simple box is the easiest&nbsp;&nbsp;

- [00:37:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=2265) shape to fit around the beam. It starts 2&nbsp; metres across. In the sidebar I give the&nbsp;&nbsp;

- [00:37:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=2271) cube a position and dimensions of 2.7, 2.6 and&nbsp; 2.4 metres. Now it encloses the beam from the&nbsp;&nbsp;

- [00:37:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=2279) spot down to the ground around the courier.&nbsp; The cube's shape defines where the volume is.&nbsp;&nbsp;

- [00:38:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=2288) I switch the lower area to the&nbsp; Shader Editor, make it taller,&nbsp;&nbsp;

- [00:38:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=2291) and press Home over the viewport, so&nbsp; the whole camera frame fits again.&nbsp;&nbsp;

- [00:38:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=2295) Then I give the cube a new material for the&nbsp; volume and name it MAT Volume, as on screen.&nbsp;&nbsp;

- [00:38:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2302) A new material starts as an opaque surface,&nbsp; so the cube still hides much of the station.&nbsp;&nbsp;

- [00:38:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=2309) Its Principled B S D F describes a surface,&nbsp; which this box should not have, so I delete it.&nbsp;&nbsp;

- [00:38:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=2316) Then I search for a Principled Volume, the shader&nbsp; for the space inside a mesh, and set it down.&nbsp;&nbsp;

- [00:38:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=2324) Linked to the output's Volume input,&nbsp; it fills the box with dense haze,&nbsp;&nbsp;

- [00:38:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=2328) and the beam glows inside the volume. Density sets&nbsp; how strongly the haze catches light. The default&nbsp;&nbsp;

- [00:38:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=2336) of 1 washes out the courier and hides the crates;&nbsp; at 0.1, the beam shows and the courier reads.&nbsp;&nbsp;

- [00:39:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=2344) Scattering redirects light in new directions, some&nbsp; of it toward the camera, and absorption removes&nbsp;&nbsp;

- [00:39:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=2349) it. To see Absorption Color clearly, I raise the&nbsp; density to 0.5 and choose orange. The beam and&nbsp;&nbsp;

- [00:39:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=2356) the haze turn warm, because the volume now absorbs&nbsp; the blue and green parts of the light, and mostly&nbsp;&nbsp;

- [00:39:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2362) the red and orange part travels on. Then I set the&nbsp; colour back to black and the density back to 0.1,&nbsp;&nbsp;

- [00:39:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=2369) for a restrained beam that leaves the courier&nbsp; readable. The crates come back into view.&nbsp;&nbsp;

- [00:39:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=2378) Back at the low density, Anisotropy sets the&nbsp; preferred scattering direction. At 0.6, most&nbsp;&nbsp;

- [00:39:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=2384) light keeps travelling forward along the beam,&nbsp; so less of it turns sideways toward our camera,&nbsp;&nbsp;

- [00:39:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=2390) and from here the beam looks fainter. This&nbsp; haze is a volume shader inside a plain box,&nbsp;&nbsp;

- [00:39:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=2396) the cube named in the Shader Editor. No fluid&nbsp; simulation is needed; a later lecture feeds smoke&nbsp;&nbsp;

- [00:40:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=2402) density into the same shader. Volumes can cost&nbsp; render time, so let's measure. I render the frame&nbsp;&nbsp;

- [00:40:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=2409) with the beam and read the render time in the&nbsp; header. The time sits at the top left, next to the&nbsp;&nbsp;

- [00:40:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=2414) frame number and the memory in use. With the beam,&nbsp; this frame took just under 9 seconds to finish.&nbsp;&nbsp;

- [00:40:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2422) Then I go back to the viewport. In the Outliner,&nbsp; I search for the volume collection and untick its&nbsp;&nbsp;

- [00:40:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=2428) checkbox, which excludes it. Now I render the&nbsp; same frame without the beam, into the second slot.&nbsp;&nbsp;

- [00:40:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=2434) Excluding a collection removes it from the view&nbsp; layer completely, so neither the viewport nor the&nbsp;&nbsp;

- [00:40:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=2440) render evaluates it, while its contents stay saved&nbsp; in the file. Denoising runs last, once all samples&nbsp;&nbsp;

- [00:40:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=2446) are done. Compare the 2 times: they are close,&nbsp; and their order can even flip from one run to the&nbsp;&nbsp;

- [00:40:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=2453) next, because this volume is sparse, uniform&nbsp; and kept inside a small box. Denser, larger&nbsp;&nbsp;

- [00:40:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=2459) or textured volumes usually cost much more, and&nbsp; they also need more samples to clear their noise.&nbsp;&nbsp;

- [00:41:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=2465) So the beam stays a study for now. Its collection&nbsp; stays excluded, and the hero returns to clear air,&nbsp;&nbsp;

- [00:41:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=2471) ready to save as our baseline. Below,&nbsp; our notes return in the Text Editor.&nbsp;&nbsp;

- [00:41:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=2478) This is our baseline. With Shift, Control and S,&nbsp;&nbsp;

- [00:41:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=2481) the shortcut for File, Save As,&nbsp; I save it as w07_station_v001,&nbsp;&nbsp;

- [00:41:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=2486) next to the working file. A new version keeps&nbsp; this exact state for every later comparison.&nbsp;&nbsp;

- [00:41:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=2494) For the baseline renders, I raise the render&nbsp; samples from 16 to 128 and keep the denoiser&nbsp;&nbsp;

- [00:41:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=2501) on. That is enough for a clean preview of&nbsp; this scene. The Sampling panel has 2 halves:&nbsp;&nbsp;

- [00:41:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=2507) Viewport for the live preview, and Render for&nbsp; the final image. Each keeps its own samples and&nbsp;&nbsp;

- [00:41:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=2513) its own denoiser. Final renders use this half.&nbsp; The settings that shape the picture go into our&nbsp;&nbsp;

- [00:41:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=2519) notes. In the Render Properties we have Cycles on&nbsp; the GPU, with OpenImageDenoise as the denoiser;&nbsp;&nbsp;

- [00:42:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=2526) colour management uses the AgX view&nbsp; transform, and we render 128 samples.&nbsp;&nbsp;

- [00:42:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=2531) A short note like this lets us rebuild exactly the&nbsp; same picture later, even after many experiments.&nbsp;&nbsp;

- [00:42:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=2541) For a small reference image, I set the&nbsp; resolution scale in the Output Properties&nbsp;&nbsp;

- [00:42:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=2546) to 50 percent. 50 percent of each side is a&nbsp; quarter of the pixels, so it renders faster.&nbsp;&nbsp;

- [00:42:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=2552) Then F12 starts the render. While Cycles renders,&nbsp; the header counts the samples, and when it&nbsp;&nbsp;

- [00:42:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2557) finishes, the header shows how long the frame&nbsp; took, here only a few seconds on the RTX 5090.&nbsp;&nbsp;

- [00:42:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=2564) With Alt and S, the shortcut for Image, Save As,&nbsp; I save the image next to the scene as a reference&nbsp;&nbsp;

- [00:42:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=2571) render, with the version number in its name. A&nbsp; reference image shows this version exactly as&nbsp;&nbsp;

- [00:42:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=2576) it was. P N G compresses without loss. With&nbsp; the file, the image and the notes together,&nbsp;&nbsp;

- [00:43:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=2583) any later change can be measured against&nbsp; this baseline instead of our memory.&nbsp;&nbsp;

- [00:43:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2590) Before we compare, Control S writes our&nbsp; settings and notes into version 1. Let's&nbsp;&nbsp;

- [00:43:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=2595) compare the 2 render engines on the same&nbsp; question: contact shadows, reflections and&nbsp;&nbsp;

- [00:43:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=2600) light bouncing inside the open housing. A render&nbsp; region keeps this comparison fast and inexpensive.&nbsp;&nbsp;

- [00:43:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=2607) In camera view, Control and B lets me&nbsp; draw a rectangle around the open housing&nbsp;&nbsp;

- [00:43:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=2612) and the base of the post. Only this region will&nbsp; render, and the rest of the frame stays empty.&nbsp;&nbsp;

- [00:43:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2617) In the Output Properties, the Render Region option&nbsp; is now ticked; Blender switched it on for us.&nbsp;&nbsp;

- [00:43:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=2624) First, EEVEE. The render engine lives at the&nbsp; top of the Render Properties, together with&nbsp;&nbsp;

- [00:43:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=2629) the device. Searching for Device brings both rows&nbsp; up, and I switch the engine from Cycles to EEVEE.&nbsp;&nbsp;

- [00:43:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=2638) The render window opens with F eleven, and F12&nbsp; renders only the region into it, almost at once.&nbsp;&nbsp;

- [00:44:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=2647) EEVEE finished this region&nbsp; in about a third of a second;&nbsp;&nbsp;

- [00:44:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2650) keep that in mind for Cycles. Speed is only half&nbsp; of the comparison, so I zoom in on the region.&nbsp;&nbsp;

- [00:44:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=2660) Look at the inner walls of the box, the light&nbsp; inside it, and the shadow where the housing meets&nbsp;&nbsp;

- [00:44:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=2666) the platform; Cycles will show them a little&nbsp; differently. Now Cycles, with the same camera,&nbsp;&nbsp;

- [00:44:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=2672) materials and lights. I switch the engine back&nbsp; to Cycles and render into slot 2, so both results&nbsp;&nbsp;

- [00:44:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2677) share exactly the same frame. Its time is in&nbsp; the header too, so we can compare the 2 engines&nbsp;&nbsp;

- [00:44:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=2683) on cost as well. I zoom in on the same corner.&nbsp; Flipping between the slots, the differences are in&nbsp;&nbsp;

- [00:44:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=2689) the details: the contact shadows, the highlight&nbsp; on the lid and the light inside the open box.&nbsp;&nbsp;

- [00:44:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=2695) Both images are useful, so the real choice depends&nbsp; on which difference matters for our scene. Cycles&nbsp;&nbsp;

- [00:45:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=2701) took about twice as long here. The reason lies in&nbsp; how each engine operates. EEVEE projects triangles&nbsp;&nbsp;

- [00:45:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=2707) onto the screen, like a game engine, and adds&nbsp; traced effects on top. Cycles traces light through&nbsp;&nbsp;

- [00:45:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=2713) the scene and averages many samples. Ray tracing&nbsp; means following a ray to find what it hits.&nbsp;&nbsp;

- [00:45:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=2719) Cycles goes further: it chains those rays bounce&nbsp; after bounce and estimates the light they carry,&nbsp;&nbsp;

- [00:45:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=2726) which is why it needs samples. This method is&nbsp; called path tracing. The engine and the device&nbsp;&nbsp;

- [00:45:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=2731) are separate choices. Cycles can render on the&nbsp; processor or on a supported graphics card. On&nbsp;&nbsp;

- [00:45:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2737) weaker hardware, EEVEE gives a quick preview, and&nbsp; Cycles on the processor still works, only slower.&nbsp;&nbsp;

- [00:45:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=2744) EEVEE 5.2 improved its screen tracing. I switch&nbsp; back to EEVEE and, in the Raytracing panel,&nbsp;&nbsp;

- [00:45:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=2751) tick its checkbox, because ray tracing is&nbsp; off by default. Its method can be Light&nbsp;&nbsp;

- [00:45:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=2756) Probe or Screen Trace. Light Probe reuses&nbsp; light stored in probes and in the world:&nbsp;&nbsp;

- [00:46:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=2761) quick, but less precise. Screen Trace&nbsp; follows rays across the screen, so it&nbsp;&nbsp;

- [00:46:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=2765) only reflects what the camera sees. I render&nbsp; Light Probe into the first of the 2 slots.&nbsp;&nbsp;

- [00:46:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=2772) Then I switch the method to Screen Trace&nbsp; and render into the second slot. Watch&nbsp;&nbsp;

- [00:46:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=2777) the metal post while I flip between them: with&nbsp; Screen Trace, it reflects much more of the scene,&nbsp;&nbsp;

- [00:46:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2782) and the floor in the box loses its violet tint.&nbsp; Screen Trace only uses what the camera already&nbsp;&nbsp;

- [00:46:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=2788) sees, so objects outside the frame never appear&nbsp; in these reflections. Both renders took about&nbsp;&nbsp;

- [00:46:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=2794) 3/10 of a second, so in this region cost does not&nbsp; decide between the methods; the reflections do.&nbsp;&nbsp;

- [00:46:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=2803) EEVEE in 5.2 also handles repeated objects more&nbsp; efficiently. That happens automatically, with no&nbsp;&nbsp;

- [00:46:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=2810) switch to turn on. In the next lecture, we will&nbsp; scatter many repeated rocks across the terrain.&nbsp;&nbsp;

- [00:46:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=2816) Now the important cleanup. Control, Alt&nbsp; and B clears the region. If you forget it,&nbsp;&nbsp;

- [00:47:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=2821) every later render is cropped to that rectangle,&nbsp; and a long overnight render can come back with an&nbsp;&nbsp;

- [00:47:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=2827) empty border. So I check the Output Properties:&nbsp; the Render Region option is off again,&nbsp;&nbsp;

- [00:47:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=2833) and the next render covers the whole&nbsp; frame. Check it before long renders.&nbsp;&nbsp;

- [00:47:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=2840) Back in Cycles for the next question: noise. I&nbsp; switch the render engine to Cycles again. Each&nbsp;&nbsp;

- [00:47:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=2845) Cycles sample adds 1 more estimate of the light&nbsp; in every pixel, and the pixel shows their average;&nbsp;&nbsp;

- [00:47:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=2851) with few estimates, that average still wanders&nbsp; from its true value. I draw a new region around&nbsp;&nbsp;

- [00:47:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=2857) the courier and the edge of the platform and&nbsp; set the render samples to 4. Then I switch the&nbsp;&nbsp;

- [00:47:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=2862) denoiser off, so we see the raw estimate, exactly&nbsp; as Cycles computes it. Nothing else in the scene&nbsp;&nbsp;

- [00:47:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=2868) changes, so any difference comes from the samples&nbsp; alone. The viewport keeps its own denoiser on.&nbsp;&nbsp;

- [00:47:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=2877) With 4 samples and no denoising, the region&nbsp; is grainy. I zoom in: the grain is strongest&nbsp;&nbsp;

- [00:48:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=2882) in the shadows, where only a few rays find&nbsp; a lamp. Even the ground shows bright specks.&nbsp;&nbsp;

- [00:48:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=2890) Now I go back and raise the render samples to 128,&nbsp; up to 32 times as many estimates for every pixel,&nbsp;&nbsp;

- [00:48:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=2898) and render into the second slot. The&nbsp; grain fades and fine edges settle,&nbsp;&nbsp;

- [00:48:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2902) but the render takes slightly longer: 0.73 seconds&nbsp; instead of 0.64. More samples reduce noise;&nbsp;&nbsp;

- [00:48:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=2910) they do not change what the light is doing, so the&nbsp; shadows keep exactly the same shape and position.&nbsp;&nbsp;

- [00:48:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=2919) Now I try 16 samples with the denoiser switched&nbsp; back on, and render into the first slot,&nbsp;&nbsp;

- [00:48:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=2925) over the grainy version. The denoiser estimates&nbsp; the clean image from the noisy one, guided by the&nbsp;&nbsp;

- [00:48:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=2930) colours and normals of the surfaces. The result&nbsp; looks almost as smooth as 128 samples, from 1/8&nbsp;&nbsp;

- [00:48:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=2938) of the samples. I zoom into the label and the&nbsp; ground, and flip between the 2 slots to compare&nbsp;&nbsp;

- [00:49:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=2944) them. The label stays crisp in both, while the&nbsp; ground's fine grain and texture are smoothed away:&nbsp;&nbsp;

- [00:49:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=2949) the denoiser can soften fine detail, so judge&nbsp; it at full size. The J key swaps slots in place,&nbsp;&nbsp;

- [00:49:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=2956) revealing small changes. Adaptive sampling helps&nbsp; too. The noise threshold lets Cycles stop early in&nbsp;&nbsp;

- [00:49:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=2962) pixels that are already clean. A lower threshold&nbsp; gives a cleaner image and a longer render;&nbsp;&nbsp;

- [00:49:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=2968) I keep the default value. Denoising can&nbsp; also happen later, in the compositor,&nbsp;&nbsp;

- [00:49:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=2973) with a separate Denoise step. Use one of them,&nbsp; never the two together. Our compositor is empty,&nbsp;&nbsp;

- [00:49:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=2979) so the denoising happens inside the render itself.&nbsp; Noise is random grain. Aliasing is different:&nbsp;&nbsp;

- [00:49:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=2986) jagged steps along thin edges. To see it on its&nbsp; own, I draw a region around the cable and a roof&nbsp;&nbsp;

- [00:49:52](https://www.youtube.com/watch?v=03T-CArVSW4&t=2992) post. I set the samples back to 128 and switch the&nbsp; denoiser off. The pixel filter decides how widely&nbsp;&nbsp;

- [00:49:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=2999) each sample spreads across neighbouring pixels.&nbsp; In the Film panel I narrow it to its minimum,&nbsp;&nbsp;

- [00:50:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=3005) so every sample lands in exactly 1 pixel.&nbsp; 0.01 is the smallest width Blender allows.&nbsp;&nbsp;

- [00:50:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=3011) It belongs only in a test like this one; final&nbsp; renders usually stay near the default value.&nbsp;&nbsp;

- [00:50:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=3020) I render into the first slot, and when the&nbsp; region appears, I zoom in on the cable.&nbsp;&nbsp;

- [00:50:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=3027) Along the cable there is no grain, only steps:&nbsp; each edge pixel is fully cable or fully sky.&nbsp;&nbsp;

- [00:50:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=3032) More samples would not smooth this staircase. Now&nbsp; I set the filter back to its default of 1.5 pixels&nbsp;&nbsp;

- [00:50:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=3039) and render into the second slot. Each sample now&nbsp; spreads a little into the neighbouring pixels,&nbsp;&nbsp;

- [00:50:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=3044) so the edge pixels mix cable and&nbsp; sky. I zoom in on the same cable:&nbsp;&nbsp;

- [00:50:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3049) the steps blend into a smooth edge, like the rest&nbsp; of the frame. The render time barely changes,&nbsp;&nbsp;

- [00:50:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3054) because a wider filter adds no extra samples.&nbsp; Flipping between the two, the difference is&nbsp;&nbsp;

- [00:50:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=3059) clear. Denoising cannot repair aliasing well, so&nbsp; recognise the symptom first, and only then change&nbsp;&nbsp;

- [00:51:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=3066) a setting. Finally, I switch the denoiser back&nbsp; on and clear the region with Control, Alt and B.&nbsp;&nbsp;

- [00:51:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=3072) With the filter at its default and the denoiser&nbsp; on, our Cycles settings match the baseline again.&nbsp;&nbsp;

- [00:51:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=3078) A clean still is only 1 frame. Detail cleaned&nbsp; up by the denoiser can shimmer when the picture&nbsp;&nbsp;

- [00:51:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=3084) moves. To test that, I duplicate our&nbsp; hero camera, name the copy CAM motion,&nbsp;&nbsp;

- [00:51:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=3089) joined by an underscore, and&nbsp; make the copy the active camera.&nbsp;&nbsp;

- [00:51:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=3094) A right click cancels the move, so the copy sits&nbsp; exactly on the original, which stays safe for&nbsp;&nbsp;

- [00:51:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=3099) our stills. Control Numpad 0 switches cameras. Our&nbsp; short will run 240 frames at 24 frames per second,&nbsp;&nbsp;

- [00:51:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=3108) so in the Output Properties I set the end frame to&nbsp; 240. Then I switch the lower area to the Timeline,&nbsp;&nbsp;

- [00:51:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=3115) where keyframes appear. At frame 1, I insert a&nbsp; location keyframe: I press I while the pointer&nbsp;&nbsp;

- [00:52:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=3121) is over the location in the sidebar. The fields&nbsp; turn yellow: a keyframe now sits on this frame.&nbsp;&nbsp;

- [00:52:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=3129) On the final frame, I move the camera 0.4 metres&nbsp; sideways and insert a second location keyframe.&nbsp;&nbsp;

- [00:52:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=3136) The viewport stays in Solid, so playback&nbsp; runs smoothly. In playback, the camera&nbsp;&nbsp;

- [00:52:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=3141) glides slowly sideways past the courier, a slow&nbsp; move that makes any shimmer easy to spot. I stop,&nbsp;&nbsp;

- [00:52:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=3147) go back to frame 1, and return to Rendered and to&nbsp; our notes. Keyframes get their own lecture later.&nbsp;&nbsp;

- [00:52:33](https://www.youtube.com/watch?v=03T-CArVSW4&t=3153) The yellow diamond at the end of the Timeline&nbsp; marks the second keyframe, on frame 240.&nbsp;&nbsp;

- [00:52:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=3161) Now I render a short slice of the move: frames&nbsp; 97 to 120, the middle of the animation. In the&nbsp;&nbsp;

- [00:52:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=3167) Render Properties I lower the samples to 16 and&nbsp; keep the denoiser on. In the Output Properties I&nbsp;&nbsp;

- [00:52:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3174) set that frame range and a resolution scale of&nbsp; 25 percent, so each frame is small and quick.&nbsp;&nbsp;

- [00:53:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=3180) These are lower settings than our baseline on&nbsp; purpose: a fast test is enough to judge motion.&nbsp;&nbsp;

- [00:53:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=3186) That range holds 24 frames, exactly 1 second&nbsp; of the move, enough for the eye to judge any&nbsp;&nbsp;

- [00:53:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=3193) shimmer. The keyframes stay where they are.&nbsp; At 25 percent, both sides shrink to a quarter,&nbsp;&nbsp;

- [00:53:20](https://www.youtube.com/watch?v=03T-CArVSW4&t=3200) so each test frame has 1/16 of the full frame's&nbsp; pixels. Render time drops sharply. The output&nbsp;&nbsp;

- [00:53:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=3207) goes into a new folder in our renders folder. The&nbsp; folder icon opens Blender's own file browser, and&nbsp;&nbsp;

- [00:53:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=3214) its new folder button creates the folder, which&nbsp; I name w07_motion_test, joined by underscores.&nbsp;&nbsp;

- [00:53:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=3220) Then Render Animation, Control and F12, renders&nbsp; every frame of the range into it. Blender writes&nbsp;&nbsp;

- [00:53:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=3226) each finished frame as a numbered image, and the&nbsp; header counts the frames. Each frame takes only&nbsp;&nbsp;

- [00:53:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=3233) a moment on this computer. The header shows the&nbsp; current frame number, and Last gives the previous&nbsp;&nbsp;

- [00:53:58](https://www.youtube.com/watch?v=03T-CArVSW4&t=3238) frame's time, between 1 and 1.5 seconds.&nbsp; Frames look grainy until the denoiser runs.&nbsp;&nbsp;

- [00:54:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=3245) Playing the frames back with View Animation, watch&nbsp; the fine textures on the terrain and the housing.&nbsp;&nbsp;

- [00:54:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=3251) If they shimmer in your animation, raise the&nbsp; samples rather than trusting a single clean still.&nbsp;&nbsp;

- [00:54:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=3259) Let's trace how a frame is made. The scene&nbsp; begins as editable geometry. Object transforms,&nbsp;&nbsp;

- [00:54:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=3265) like this camera's location, place everything in&nbsp; the world, and the camera projects it into the&nbsp;&nbsp;

- [00:54:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=3270) frame we chose. Location and rotation fix where&nbsp; the camera stands and looks; the courier's own&nbsp;&nbsp;

- [00:54:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=3276) transform puts it inside that view. For each&nbsp; pixel, the renderer finds the visible surface,&nbsp;&nbsp;

- [00:54:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=3283) shades it with lights and materials,&nbsp; and averages its samples into 1 value.&nbsp;&nbsp;

- [00:54:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=3288) That value is scene light, not yet a screen&nbsp; colour. The last step is the display transform,&nbsp;&nbsp;

- [00:54:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3294) which turns the scene light into the colours a&nbsp; screen can actually show. It sits in the Color&nbsp;&nbsp;

- [00:55:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=3300) Management panel of the Render Properties,&nbsp; which a search for Exposure brings into view.&nbsp;&nbsp;

- [00:55:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=3307) Watch the image as I switch the view transform&nbsp; from AgX to Standard: the scene is identical,&nbsp;&nbsp;

- [00:55:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=3313) but bright areas clip and colours&nbsp; harden. Then I switch back to AgX,&nbsp;&nbsp;

- [00:55:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=3318) which restores the gentle tones and&nbsp; keeps the beacon soft and readable.&nbsp;&nbsp;

- [00:55:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=3324) Back in our studies scene, let's watch light carry&nbsp; colour. On a white floor stands a red card, like&nbsp;&nbsp;

- [00:55:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=3330) a small wall, each with a plain diffuse material;&nbsp; the render shows their colours. Outside this view,&nbsp;&nbsp;

- [00:55:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=3337) a rectangular light sits low in front of the&nbsp; card, aimed at it with a Track To constraint.&nbsp;&nbsp;

- [00:55:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=3341) It lights the card and the floor before it; a dim&nbsp; grey background adds a little light from the sky.&nbsp;&nbsp;

- [00:55:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3349) The render camera, outside this view, looks&nbsp; at the corner where the card meets the floor.&nbsp;&nbsp;

- [00:55:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=3355) Everything else stays fixed from here on. In the&nbsp; render properties, I set diffuse bounces to 0.&nbsp;&nbsp;

- [00:56:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=3361) Light hits the card and the floor once, and goes&nbsp; no further, so the floor beside the card stays&nbsp;&nbsp;

- [00:56:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=3367) clean and neutral. At 4 bounces, light reflected&nbsp; from that small wall reaches the floor, and a red&nbsp;&nbsp;

- [00:56:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=3373) glow appears beside it. More samples would only&nbsp; reduce noise; the bounce limit decides which&nbsp;&nbsp;

- [00:56:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=3379) light reaches the image at all. In this simple&nbsp; scene, extra bounces barely change render time.&nbsp;&nbsp;

- [00:56:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=3389) Ambient occlusion only darkens corners where&nbsp; nearby surfaces block the world's light,&nbsp;&nbsp;

- [00:56:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=3394) so it carries grey from the sky,&nbsp; but never the card's red glow.&nbsp;&nbsp;

- [00:56:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=3398) Cycles offers it as Fast G I&nbsp; Approximation, set to replace bounces,&nbsp;&nbsp;

- [00:56:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=3402) and its A O Distance of half a metre&nbsp; sets how far it looks for blockers.&nbsp;&nbsp;

- [00:56:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3409) Against 4 bounces, the corner darkens, but loses&nbsp; the red glow, and saves almost no time. I switch&nbsp;&nbsp;

- [00:56:55](https://www.youtube.com/watch?v=03T-CArVSW4&t=3415) Fast G I off again. EEVEE calculates indirect&nbsp; light in its own way: here its corner shows no red&nbsp;&nbsp;

- [00:57:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=3421) glow at all, unlike Cycles at 4 bounces. Always&nbsp; judge indirect light in your final render engine.&nbsp;&nbsp;

- [00:57:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=3428) EEVEE finished in about a quarter of&nbsp; a second, 3 times faster than Cycles,&nbsp;&nbsp;

- [00:57:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=3434) but without the coloured bounce. Each&nbsp; scene keeps its own render engine,&nbsp;&nbsp;

- [00:57:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=3439) so the studies go back to Cycles before we&nbsp; return to the station. This menu switches scenes.&nbsp;&nbsp;

- [00:57:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=3446) Before changing performance settings, find out&nbsp; where the cost is. With nothing selected and the&nbsp;&nbsp;

- [00:57:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=3451) Statistics overlay on, the viewport shows&nbsp; about 9000 triangles in the whole scene.&nbsp;&nbsp;

- [00:57:39](https://www.youtube.com/watch?v=03T-CArVSW4&t=3459) To check the images, I switch the lower&nbsp; area to an Image Editor, make it taller,&nbsp;&nbsp;

- [00:57:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=3464) and pick the rock's colour texture. Its&nbsp; Image tab in the sidebar shows the size,&nbsp;&nbsp;

- [00:57:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3469) and every image texture on the station itself&nbsp; is 1024 pixels square. The list shows every&nbsp;&nbsp;

- [00:57:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=3476) texture the file holds. One at 1024 square, with 4&nbsp; 8-bit channels, needs about 4 megabytes of memory.&nbsp;&nbsp;

- [00:58:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=3486) I return the lower area to our notes. So&nbsp; geometry and textures are small in this scene.&nbsp;&nbsp;

- [00:58:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=3491) Our 2 largest costs are the output size,&nbsp; over 8 million pixels at full size,&nbsp;&nbsp;

- [00:58:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=3496) and the samples each pixel needs. Halving the&nbsp; width and height leaves a quarter of the pixels.&nbsp;&nbsp;

- [00:58:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=3503) The full size is 3840 × 2160. In Sampling, Max&nbsp; Samples sets the upper limit for each pixel,&nbsp;&nbsp;

- [00:58:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=3510) and the Noise Threshold lets clean pixels stop&nbsp; early. The viewport has separate settings.&nbsp;&nbsp;

- [00:58:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=3516) Let's time the 2 sizes. I set the resolution&nbsp; scale to 100 percent and render: at full size,&nbsp;&nbsp;

- [00:58:42](https://www.youtube.com/watch?v=03T-CArVSW4&t=3522) the header shows how long the frame&nbsp; takes. The percentage scales the output,&nbsp;&nbsp;

- [00:58:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=3528) while Resolution X and Y stay the same,&nbsp; so the full size is kept in those fields.&nbsp;&nbsp;

- [00:58:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3534) Rendering at full size takes a while, and&nbsp; part of every render, preparing the scene,&nbsp;&nbsp;

- [00:58:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=3539) costs the same at any size. Then Shift Home fits&nbsp; the whole image in the editor. The header reads&nbsp;&nbsp;

- [00:59:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=3546) about 11.7 seconds at full size. Half resolution&nbsp; should take far less, so I set 50 percent.&nbsp;&nbsp;

- [00:59:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=3557) Rendered again at half size, the preview&nbsp; takes about 3.3 seconds against 11.7,&nbsp;&nbsp;

- [00:59:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=3563) a little more than a quarter of the time. At&nbsp; the same fitted size, the courier and the signal&nbsp;&nbsp;

- [00:59:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=3570) read just as well, so previews use 50 percent&nbsp; from now on, and I add that line to our notes.&nbsp;&nbsp;

- [00:59:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=3578) Cycles in Blender 5.2 adds a Texture Cache. In&nbsp; the Performance panel, it is enabled by default.&nbsp;&nbsp;

- [00:59:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=3584) It loads texture tiles at the resolution each&nbsp; pixel needs, and its tooltip names the goal:&nbsp;&nbsp;

- [00:59:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=3590) less memory. It works from prepared files with&nbsp; the extension dot T X. Generate creates them now,&nbsp;&nbsp;

- [00:59:59](https://www.youtube.com/watch?v=03T-CArVSW4&t=3599) and Auto Generate creates them while rendering.&nbsp; By default they go into a blender T X folder&nbsp;&nbsp;

- [01:00:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=3604) next to the original images, but a folder set&nbsp; in the Preferences can move them elsewhere.&nbsp;&nbsp;

- [01:00:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=3610) A dot T X file stores the image as&nbsp; a pyramid of ever smaller versions.&nbsp;&nbsp;

- [01:00:14](https://www.youtube.com/watch?v=03T-CArVSW4&t=3614) A rock that fills a small part of the frame needs&nbsp; only a small level, read as a few small tiles.&nbsp;&nbsp;

- [01:00:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=3621) The .tx files cost disk space and preparation&nbsp; time, and the original images must stay,&nbsp;&nbsp;

- [01:00:27](https://www.youtube.com/watch?v=03T-CArVSW4&t=3627) because the cache is rebuilt from them.&nbsp; Check the drive's free space before you&nbsp;&nbsp;

- [01:00:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=3631) let Blender generate them automatically. I&nbsp; add their location to our notes right away.&nbsp;&nbsp;

- [01:00:36](https://www.youtube.com/watch?v=03T-CArVSW4&t=3636) If a project moves to another computer, copy these&nbsp; files too, or allow time to rebuild the cache.&nbsp;&nbsp;

- [01:00:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=3644) Our small station cannot show a memory&nbsp; difference. I save it, then open a test&nbsp;&nbsp;

- [01:00:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3649) copy whose textures are 8000 pixels square,&nbsp; made from the station's own textures.&nbsp;&nbsp;

- [01:00:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=3656) Both renders of this file will differ only in the&nbsp; cache, so the header shows its effect alone. For&nbsp;&nbsp;

- [01:01:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=3663) the first render, the cache goes off, so I search&nbsp; the Render Properties for its checkbox. Unticking&nbsp;&nbsp;

- [01:01:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=3669) the checkbox turns the whole cache off, so Cycles&nbsp; loads every full image into memory. Even distant&nbsp;&nbsp;

- [01:01:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=3675) ones. With the cache off, F12 renders this frame,&nbsp; at only 16 samples, because memory, not noise,&nbsp;&nbsp;

- [01:01:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=3682) is the question here. The header reads about&nbsp; 8.6 seconds and a peak of about 3300 megabytes.&nbsp;&nbsp;

- [01:01:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=3692) For the second render, I switch the cache back&nbsp; on, and this time I also tick Auto Generate.&nbsp;&nbsp;

- [01:01:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=3697) Then I render the same frame again, and the&nbsp; .tx files are created during this first render.&nbsp;&nbsp;

- [01:01:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=3706) With the cache, the peak memory is just&nbsp; over 2 thousand megabytes; without it,&nbsp;&nbsp;

- [01:01:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=3711) about thirty three hundred. The pictures look&nbsp; identical, but the cached render took longer.&nbsp;&nbsp;

- [01:01:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=3717) So this is a memory tool for scenes with many&nbsp; large images, not a guaranteed speed boost.&nbsp;&nbsp;

- [01:02:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=3722) A small scene like ours may not change at all&nbsp; with the Texture Cache on. I go back to version&nbsp;&nbsp;

- [01:02:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=3728) 1 without saving the test copy. Leaving the test&nbsp; copy unsaved keeps it as supplied, and our notes&nbsp;&nbsp;

- [01:02:15](https://www.youtube.com/watch?v=03T-CArVSW4&t=3735) return with version 1, because they live inside&nbsp; that file. The preview and cache lines remain.&nbsp;&nbsp;

- [01:02:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=3742) Simplify sets global limits without editing the&nbsp; scene. In Render Properties, I enable Simplify&nbsp;&nbsp;

- [01:02:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=3748) and set the viewport's Texture Size Limit to&nbsp; 128 pixels. In the viewport, the brown rock's&nbsp;&nbsp;

- [01:02:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=3754) texture turns soft and blurry. That keeps a heavy&nbsp; viewport responsive. The render side has its own&nbsp;&nbsp;

- [01:02:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=3761) Texture Size Limit, still at No Limit, so final&nbsp; frames keep full detail. If a render limit stays&nbsp;&nbsp;

- [01:02:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=3767) on after a test, every final frame quietly loses&nbsp; detail. Simplify can also reduce subdivision and&nbsp;&nbsp;

- [01:02:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3774) child particles. I set the viewport limit back,&nbsp; switch Simplify off and write that in our notes,&nbsp;&nbsp;

- [01:03:00](https://www.youtube.com/watch?v=03T-CArVSW4&t=3780) because our scene does not need it at this stage.&nbsp; The viewport shows the brown rock sharp again.&nbsp;&nbsp;

- [01:03:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=3787) A noisy render needs samples, and a flat&nbsp; render needs light. An out of memory error&nbsp;&nbsp;

- [01:03:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=3792) needs something else: less data in the scene.&nbsp; Fewer samples barely change how much data has&nbsp;&nbsp;

- [01:03:18](https://www.youtube.com/watch?v=03T-CArVSW4&t=3798) to fit in memory. Check the large textures&nbsp; first, then subdivision and dense geometry,&nbsp;&nbsp;

- [01:03:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=3803) then repeated objects, the output size&nbsp; and your device's memory. A 4K image&nbsp;&nbsp;

- [01:03:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=3808) on a small rock can often become 2K with no&nbsp; visible loss. Instances help with repetition,&nbsp;&nbsp;

- [01:03:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=3815) because each copy reuses 1 mesh instead of&nbsp; storing it again. Large instance counts still&nbsp;&nbsp;

- [01:03:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=3821) need processing and shading, which we will&nbsp; measure when we scatter rocks next lecture.&nbsp;&nbsp;

- [01:03:49](https://www.youtube.com/watch?v=03T-CArVSW4&t=3829) Now let's measure. I render 1 representative&nbsp; frame, and a benchmark only means something with&nbsp;&nbsp;

- [01:03:54](https://www.youtube.com/watch?v=03T-CArVSW4&t=3834) the real settings, so I check them first:&nbsp; the hero camera, and Cycles on the GPU.&nbsp;&nbsp;

- [01:04:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=3842) Measured at 16 samples, this&nbsp; frame would look far cheaper&nbsp;&nbsp;

- [01:04:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=3846) than the sequence we will actually render,&nbsp; so I set the render samples to 128 again.&nbsp;&nbsp;

- [01:04:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=3853) The same goes for the output size, so&nbsp; in the Output Properties I check that&nbsp;&nbsp;

- [01:04:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=3857) the resolution scale is still at 50 percent.&nbsp; Then I open the render window and press F12.&nbsp;&nbsp;

- [01:04:24](https://www.youtube.com/watch?v=03T-CArVSW4&t=3864) Watch the noise clear as the samples build&nbsp; up, and then the denoiser finishes the frame.&nbsp;&nbsp;

- [01:04:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=3871) The header shows how long the frame&nbsp; took on this computer, an RTX 5090.&nbsp;&nbsp;

- [01:04:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=3875) That number belongs to this scene, these settings&nbsp; and this card, so I write all 3 into our notes.&nbsp;&nbsp;

- [01:04:43](https://www.youtube.com/watch?v=03T-CArVSW4&t=3883) The note reads about 4.1 seconds a frame, counting&nbsp; every stage, the denoiser's pass included; this is&nbsp;&nbsp;

- [01:04:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=3890) the figure our forecast starts from. A sequence&nbsp; estimate is simple arithmetic: the seconds per&nbsp;&nbsp;

- [01:04:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=3896) frame times 240 frames. Then I add about a quarter&nbsp; as a safety margin. The margin covers what 1 frame&nbsp;&nbsp;

- [01:05:04](https://www.youtube.com/watch?v=03T-CArVSW4&t=3904) cannot show: starting the render, preparing&nbsp; the scene, frames that cost more than this one,&nbsp;&nbsp;

- [01:05:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=3910) compositing and writing every file to the drive.&nbsp; The course plan uses an example to make the method&nbsp;&nbsp;

- [01:05:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=3916) clear: 20 seconds a frame for 240 frames is 4800&nbsp; seconds, which is 80 minutes, plus overhead time.&nbsp;&nbsp;

- [01:05:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=3926) So which delivery level do we plan&nbsp; for? With our test render's time,&nbsp;&nbsp;

- [01:05:30](https://www.youtube.com/watch?v=03T-CArVSW4&t=3930) all 240 frames take about 20 minutes, margin&nbsp; included, so that is our provisional level.&nbsp;&nbsp;

- [01:05:38](https://www.youtube.com/watch?v=03T-CArVSW4&t=3938) This scene is roughly half built. Scattered rocks,&nbsp; the signal display, the rig, the animation, the&nbsp;&nbsp;

- [01:05:44](https://www.youtube.com/watch?v=03T-CArVSW4&t=3944) banner simulation and the compositing are still&nbsp; to come, and each one will add more render time.&nbsp;&nbsp;

- [01:05:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=3951) So today's number is a starting figure,&nbsp; not a promise. In lecture 13 we measure&nbsp;&nbsp;

- [01:05:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=3956) the finished scene again and choose&nbsp; the final delivery level from that&nbsp;&nbsp;

- [01:06:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=3961) measurement. Then I press Control S,&nbsp; which keeps these notes with version 1.&nbsp;&nbsp;

- [01:06:07](https://www.youtube.com/watch?v=03T-CArVSW4&t=3967) If your computer cannot render the&nbsp; sequence, render a short slice,&nbsp;&nbsp;

- [01:06:11](https://www.youtube.com/watch?v=03T-CArVSW4&t=3971) like our 24-frame test playing here from Render,&nbsp; View Animation. The viewport plays the full move.&nbsp;&nbsp;

- [01:06:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=3979) For the full move, I search the output properties&nbsp; for the frame range and set it back to 1 to 240.&nbsp;&nbsp;

- [01:06:29](https://www.youtube.com/watch?v=03T-CArVSW4&t=3989) Then I search the Outliner for the motion&nbsp; camera and click it, because Control numpad&nbsp;&nbsp;

- [01:06:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=3994) 0 needs it selected. Control numpad 0 makes&nbsp; the selected camera active and looks through&nbsp;&nbsp;

- [01:06:41](https://www.youtube.com/watch?v=03T-CArVSW4&t=4001) it. Material Preview is not the final quality,&nbsp; but it plays smoothly and costs almost nothing.&nbsp;&nbsp;

- [01:06:47](https://www.youtube.com/watch?v=03T-CArVSW4&t=4007) Here is the whole move, all 240 frames,&nbsp; and the courier stays inside the picture&nbsp;&nbsp;

- [01:06:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=4013) throughout. Then I go back to frame 1,&nbsp; because F12 renders the current frame.&nbsp;&nbsp;

- [01:07:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=4023) Let's judge the hero image. The&nbsp; hero camera becomes active again:&nbsp;&nbsp;

- [01:07:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=4026) I find it with the Outliner&nbsp; search and press Control numpad 0.&nbsp;&nbsp;

- [01:07:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=4032) A critique needs Rendered view and full&nbsp; resolution, because flaws like faceted edges hide&nbsp;&nbsp;

- [01:07:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=4037) at preview size and only show when every pixel is&nbsp; there. So the scale returns to 100 percent, full&nbsp;&nbsp;

- [01:07:23](https://www.youtube.com/watch?v=03T-CArVSW4&t=4043) size. F12 renders it at full size, and we judge it&nbsp; not by taste, but against the goals in our notes.&nbsp;&nbsp;

- [01:07:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=4052) The courier's outline reads clearly, and the warm&nbsp; signal is the brightest point against the blue.&nbsp;&nbsp;

- [01:07:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=4060) At thumbnail size, the same hierarchy holds.&nbsp; 1 decision that clearly worked is the fill&nbsp;&nbsp;

- [01:07:46](https://www.youtube.com/watch?v=03T-CArVSW4&t=4066) limited to the courier: the wheels read&nbsp; clearly, with no bright patch on the terrain.&nbsp;&nbsp;

- [01:07:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=4071) The next useful refinement is the beacon's&nbsp; outline: zoomed in, its sphere shows small flat&nbsp;&nbsp;

- [01:07:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=4077) facets. That is a small, specific change, which&nbsp; is better than another blind round of settings.&nbsp;&nbsp;

- [01:08:05](https://www.youtube.com/watch?v=03T-CArVSW4&t=4085) Now a second lighting treatment with the same&nbsp; geometry and the same camera. First I render&nbsp;&nbsp;

- [01:08:10](https://www.youtube.com/watch?v=03T-CArVSW4&t=4090) version 1 at the 50 percent preview into slot&nbsp; 1, for a fair comparison later. Then I save&nbsp;&nbsp;

- [01:08:16](https://www.youtube.com/watch?v=03T-CArVSW4&t=4096) it as version 2, golden, so version 1 stays our&nbsp; baseline. A red name field warns that this name&nbsp;&nbsp;

- [01:08:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=4102) already exists, and saving now would overwrite&nbsp; version 1. A version number and a short purpose&nbsp;&nbsp;

- [01:08:28](https://www.youtube.com/watch?v=03T-CArVSW4&t=4108) in the name, like golden, make each treatment&nbsp; easy to find later. For a golden hour arrival,&nbsp;&nbsp;

- [01:08:34](https://www.youtube.com/watch?v=03T-CArVSW4&t=4114) I raise the sky's elevation to 6 degrees and lower&nbsp; its strength, so a low, soft sky lights the scene.&nbsp;&nbsp;

- [01:08:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=4120) Once the sky's sun clears the horizon, the scene&nbsp; floods with light, so the strength drops to 0.15.&nbsp;&nbsp;

- [01:08:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=4130) Then I switch the Sun light back on and align it&nbsp; with the sky's sun. A colour temperature of 3000&nbsp;&nbsp;

- [01:08:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=4136) kelvin gives it the warm colour of an evening&nbsp; sun. Switching the Sun light on brings crisp,&nbsp;&nbsp;

- [01:09:03](https://www.youtube.com/watch?v=03T-CArVSW4&t=4143) long shadows. Light that low throws shadows many&nbsp; times longer than the objects are tall. 84 on X&nbsp;&nbsp;

- [01:09:09](https://www.youtube.com/watch?v=03T-CArVSW4&t=4149) is 90 minus 6, the sky's elevation, and 180 on Z&nbsp; matches the sky's 0 rotation. The shadows agree.&nbsp;&nbsp;

- [01:09:17](https://www.youtube.com/watch?v=03T-CArVSW4&t=4157) Temperature uses a blackbody colour, so the&nbsp; light stays natural. Lower kelvin means warmer:&nbsp;&nbsp;

- [01:09:22](https://www.youtube.com/watch?v=03T-CArVSW4&t=4162) 6500 is neutral daylight, while 3000 turns amber.&nbsp; I select the key light with the Outliner search,&nbsp;&nbsp;

- [01:09:32](https://www.youtube.com/watch?v=03T-CArVSW4&t=4172) because in this version it only supports&nbsp; the courier. To let the warm sun lead,&nbsp;&nbsp;

- [01:09:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=4177) I search its light properties for Power&nbsp; and lower it from 2 hundred to 60 watts.&nbsp;&nbsp;

- [01:09:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=4185) The signal no longer dominates, so this version&nbsp; tells a different story: an arrival in warm&nbsp;&nbsp;

- [01:09:51](https://www.youtube.com/watch?v=03T-CArVSW4&t=4191) evening light. I keep the camera, the engine and&nbsp; the samples unchanged, so the comparison stays&nbsp;&nbsp;

- [01:09:57](https://www.youtube.com/watch?v=03T-CArVSW4&t=4197) fair. I render this version at the same 50 percent&nbsp; preview into slot 2, with the baseline in slot 1.&nbsp;&nbsp;

- [01:10:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=4206) Compare the 2 times in the header: about 3 seconds&nbsp; for version 1, and about 3.7 for golden hour.&nbsp;&nbsp;

- [01:10:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=4213) Lighting changes the look, and it can change the&nbsp; cost as well. Cool blue first, then golden hour.&nbsp;&nbsp;

- [01:10:19](https://www.youtube.com/watch?v=03T-CArVSW4&t=4219) The same camera serves each version, because the&nbsp; framing already separates the courier and the&nbsp;&nbsp;

- [01:10:25](https://www.youtube.com/watch?v=03T-CArVSW4&t=4225) signal. A change of camera would be a separate&nbsp; decision, made after we compare the lighting.&nbsp;&nbsp;

- [01:10:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=4231) I add 1 last line to our notes,&nbsp; then save. For a fair comparison,&nbsp;&nbsp;

- [01:10:35](https://www.youtube.com/watch?v=03T-CArVSW4&t=4235) use the 2 header times we just saw, because&nbsp; both renders ran back to back. Frames will&nbsp;&nbsp;

- [01:10:40](https://www.youtube.com/watch?v=03T-CArVSW4&t=4240) cost different amounts once the courier moves, so&nbsp; we will time several of them later. Let's check&nbsp;&nbsp;

- [01:10:48](https://www.youtube.com/watch?v=03T-CArVSW4&t=4248) what we learned. Pause the video and answer each&nbsp; question first. Can more samples fix a crowded&nbsp;&nbsp;

- [01:10:53](https://www.youtube.com/watch?v=03T-CArVSW4&t=4253) composition? They cannot. They reduce noise, but&nbsp; the camera still decides where everything sits.&nbsp;&nbsp;

- [01:11:02](https://www.youtube.com/watch?v=03T-CArVSW4&t=4262) Are a closer camera and a longer lens&nbsp; the same? Not at all. Moving the camera&nbsp;&nbsp;

- [01:11:06](https://www.youtube.com/watch?v=03T-CArVSW4&t=4266) changes the relationship between near and far&nbsp; objects. From 1 position, a longer lens only&nbsp;&nbsp;

- [01:11:12](https://www.youtube.com/watch?v=03T-CArVSW4&t=4272) crops the view. Our hero lens is 45 mm; this&nbsp; field alone never changes the perspective.&nbsp;&nbsp;

- [01:11:21](https://www.youtube.com/watch?v=03T-CArVSW4&t=4281) Why did the metal post change under the&nbsp; sky when its material stayed the same?&nbsp;&nbsp;

- [01:11:26](https://www.youtube.com/watch?v=03T-CArVSW4&t=4286) Because metal reflects its surroundings, and&nbsp; the sky gave it something worth reflecting.&nbsp;&nbsp;

- [01:11:31](https://www.youtube.com/watch?v=03T-CArVSW4&t=4291) Is the Texture Cache always a speed boost? Not&nbsp; always. It manages memory for scenes with large&nbsp;&nbsp;

- [01:11:37](https://www.youtube.com/watch?v=03T-CArVSW4&t=4297) textures, and it costs preparation time and disk&nbsp; space. In our test, the render even took longer.&nbsp;&nbsp;

- [01:11:45](https://www.youtube.com/watch?v=03T-CArVSW4&t=4305) Why time a representative frame? It gives&nbsp; a real starting figure for these settings&nbsp;&nbsp;

- [01:11:50](https://www.youtube.com/watch?v=03T-CArVSW4&t=4310) on this computer. A margin covers the&nbsp; overhead and the frames that cost more.&nbsp;&nbsp;

- [01:11:56](https://www.youtube.com/watch?v=03T-CArVSW4&t=4316) Next time, we reuse assets, starting with a&nbsp; small rock, and build a Geometry Nodes scatter&nbsp;&nbsp;

- [01:12:01](https://www.youtube.com/watch?v=03T-CArVSW4&t=4321) to fill the terrain. The open space around&nbsp; the courier is where that new detail will go.&nbsp;&nbsp;

- [01:12:08](https://www.youtube.com/watch?v=03T-CArVSW4&t=4328) Keep this baseline, its notes and the&nbsp; environment image together in your project&nbsp;&nbsp;

- [01:12:13](https://www.youtube.com/watch?v=03T-CArVSW4&t=4333) folder. Thank you for watching,&nbsp; and see you in the next lecture.
