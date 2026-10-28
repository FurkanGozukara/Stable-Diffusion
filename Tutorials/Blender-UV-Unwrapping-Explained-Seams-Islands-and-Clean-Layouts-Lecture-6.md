# Blender UV Unwrapping Explained: Seams, Islands and Clean Layouts | Lecture 6

## Full tutorial link > https://www.youtube.com/watch?v=SHUYYPLoz8M

[![Blender UV Unwrapping Explained: Seams, Islands and Clean Layouts | Lecture 6](https://i.ytimg.com/vi_webp/SHUYYPLoz8M/maxresdefault.webp)](https://www.youtube.com/watch?v=SHUYYPLoz8M "Blender UV Unwrapping Explained: Seams, Islands and Clean Layouts | Lecture 6")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Blender-UV-Unwrapping-Explained-Seams-Islands-and-Clean-Layouts-Lecture-6.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Blender-UV-Unwrapping-Explained-Seams-Islands-and-Clean-Layouts-Lecture-6.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Learn UV unwrapping, texture painting and baking in Blender through the Lumen Field Station. Lecture 6 connects a clean UV layout to saved image textures and a reusable material.

Files and resources:

Lecture 6 Blender files and checkpoints: [ [https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027/tree/main/week06](https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027/tree/main/week06) ]

Full course repository: [ [https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027](https://github.com/FurkanGozukara/Blender-Full-Tutorial-Lecture-2026-2027) ]

Blender Full Course playlist: [ [https://www.youtube.com/playlist?list=PLYUs-JVhJLWg](https://www.youtube.com/playlist?list=PLYUs-JVhJLWg) ]

Blender manual: [ [https://docs.blender.org/manual/en/latest/](https://docs.blender.org/manual/en/latest/) ]

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/invite/software-engineering-courses-secourses-772774097734074388](https://discord.com/invite/software-engineering-courses-secourses-772774097734074388) ]

You will learn how a flat image becomes a surface: how a UV map decides where each face samples an image, how seams and island packing shape that map, and why the mesh, the coordinates, the pixels and the material must agree. You unwrap a housing panel, a shallow lid and a bake receiver, check each layout with a checker image, paint an original station label and save the pixels separately from the scene.

Main topics include marking seams, Angle Based and Smart UV Project unwrapping, Average Islands Scale and packing, shared and overlapping UVs, Texture Paint with Fill and Draw, Closest and Linear interpolation, saving images explicitly, a tangent-space normal bake from a high-detail rock, a Diffuse color bake without lighting, a painted roughness map, a black metallic map, sRGB color versus Non-Color data, a transparent PNG decal with alpha, two UDIM tiles, and a dependency check that reopens the final scene. Recorded in Blender 5.2.2 LTS.

Use the chapters to jump to an operation. Each of the eight lecture parts has a checkpoint scene in the download, and its README lists the time to continue from.

Chapters:

[00:00:00](https://youtu.be/SHUYYPLoz8M?t=0) Geometry, coordinates, pixels and interpretation

[00:02:54](https://youtu.be/SHUYYPLoz8M?t=174) Choose cuts around a continuous label face

[00:05:20](https://youtu.be/SHUYYPLoz8M?t=320) Read selections and move coordinates deliberately

[00:06:37](https://youtu.be/SHUYYPLoz8M?t=397) Use automatic cuts where they suit the asset

[00:09:12](https://youtu.be/SHUYYPLoz8M?t=552) Orient, normalize and pack the panel layout

[00:10:51](https://youtu.be/SHUYYPLoz8M?t=651) Distinguish shared decoration from unique texture space

[00:12:59](https://youtu.be/SHUYYPLoz8M?t=779) Give the label its own color image

[00:14:50](https://youtu.be/SHUYYPLoz8M?t=890) Paint a small original station graphic

[00:17:20](https://youtu.be/SHUYYPLoz8M?t=1040) Choose pixels or editable text for the job

[00:19:44](https://youtu.be/SHUYYPLoz8M?t=1184) Save pixels and scene state explicitly

[00:21:22](https://youtu.be/SHUYYPLoz8M?t=1282) Add wear in surface and image space

[00:22:23](https://youtu.be/SHUYYPLoz8M?t=1343) Preserve the editable low mesh and its assumptions

[00:26:15](https://youtu.be/SHUYYPLoz8M?t=1575) Create an explicit normal bake target

[00:28:10](https://youtu.be/SHUYYPLoz8M?t=1690) Run the controlled high-to-low normal bake

[00:31:00](https://youtu.be/SHUYYPLoz8M?t=1860) Interpret the normal image and inspect its limits

[00:34:01](https://youtu.be/SHUYYPLoz8M?t=2041) Author a procedural color source on the same rock

[00:36:36](https://youtu.be/SHUYYPLoz8M?t=2196) Bake color without baking the lighting

[00:40:11](https://youtu.be/SHUYYPLoz8M?t=2411) Paint a roughness image as scalar data

[00:43:41](https://youtu.be/SHUYYPLoz8M?t=2621) Complete and reopen the four-map set

[00:46:50](https://youtu.be/SHUYYPLoz8M?t=2810) Paint and connect a separate transparent decal

[00:50:47](https://youtu.be/SHUYYPLoz8M?t=3047) Create, save and reopen two UDIM tiles

[00:55:08](https://youtu.be/SHUYYPLoz8M?t=3308) Transfer the seam reasoning to the shallow lid

[00:58:23](https://youtu.be/SHUYYPLoz8M?t=3503) Trace the saved label and normal connections

[01:00:05](https://youtu.be/SHUYYPLoz8M?t=3605) Reopen the dependency-complete station

Music: VHS warm pad by SamplingSamTheMarylandMan, example (consolidated)_2 by SamplingSamTheMarylandMan, sad pad looping (consolidated) by SamplingSamTheMarylandMan, Ballad by BuytheField, Lofi Jazz Organ Loop 95 BPM by holizna, Ambient Loop by YellowTree, Mix0786BPM by deleted_user_984625 (CC0 1.0).

Before you start: this lecture continues the Lumen Field Station from Lecture 5, and the download includes the prepared start scene, so you can begin here without the earlier files. Use Blender 5.2.2 LTS. Lecture 7 continues with cameras, lighting, volumes, EEVEE and Cycles.

Values used in the lesson: every image is 1024 × 1024; the label, base color, decal and tiles are sRGB; the normal, roughness and metallic maps are Non-Color. Packing margin 0.015625, which is 16 pixels on a 1024-pixel image. Normal bake in Cycles on the CPU with Selected to Active on, extrusion 0.035, maximum ray distance 0.1 and 16 pixels of padding. The color bake keeps only Color, with Selected to Active, Direct and Indirect off. UDIM tiles 1001 and 1002 are saved with Blender's UDIM token in the file name.

The download includes the three station scenes saved in the lesson (w06_station_v001, w06_station_prebake and w06_station_final), the label, normal, base color, roughness, metallic and decal images, the two-tile UDIM image, eight checkpoints, the prepared start scene, a scene reference and a practical guide with shortcuts and a table of what to inspect first when a texture or a bake looks wrong. Keep the folder structure together so Blender can find the textures. Save your own working copy before editing.

Questions are welcome in the comments or SECourses Discord. Support more tutorials on Patreon. #Blender #UVMapping #TexturePainting



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=8) Greetings everyone. We will build textures&nbsp; on our existing station, beginning with space&nbsp;&nbsp;

- [00:00:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=13) for its painted graphic. Select the nameplate&nbsp; first; moving it above the panel will preserve&nbsp;&nbsp;

- [00:00:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=19) the editable identifier while making the new&nbsp; artwork easier to read. Move the nameplate upward,&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=26) keeping its horizontal alignment. This gives the&nbsp; graphic a clear region of its own. The separate&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=32) identifier still belongs to the station, but&nbsp; it will no longer cover the checker or the&nbsp;&nbsp;

- [00:00:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=37) marks we are about to paint. Move the editable&nbsp; lettering by the same amount so it stays aligned&nbsp;&nbsp;

- [00:00:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=44) with its backing plate. This small layout&nbsp; decision protects both forms of information:&nbsp;&nbsp;

- [00:00:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=49) the text remains readable above the panel, and&nbsp; the painted surface stays available for the&nbsp;&nbsp;

- [00:00:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=55) texture lesson. Our station already has materials;&nbsp; today we will give its housing an authored label&nbsp;&nbsp;

- [00:01:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=62) and transfer fine rock detail into an image.&nbsp; Both results depend on 4 parts agreeing with&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=68) each other. Start with the housing panel and frame&nbsp; its broad face. The prepared checker makes texture&nbsp;&nbsp;

- [00:01:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=75) placement visible before we paint anything. Its&nbsp; colored squares reveal how coordinates distribute&nbsp;&nbsp;

- [00:01:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=81) image detail across this particular piece of&nbsp; geometry. Open UV Editing to see the surface&nbsp;&nbsp;

- [00:01:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=88) and its flat coordinates together. A UV map tells&nbsp; Blender where each face samples an image. These&nbsp;&nbsp;

- [00:01:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=94) islands describe locations; they do not contain&nbsp; the painted pixels themselves. Enter Edit Mode&nbsp;&nbsp;

- [00:01:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=100) and select the panel faces. The layout at the left&nbsp; belongs to the selected mesh. Follow 1 broad face&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=106) into its island, then compare the narrow side&nbsp; faces that wrap around the panel. The checker&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=112) image is a separate piece of data. Changing its&nbsp; pixels would change the sampled colors, while&nbsp;&nbsp;

- [00:01:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=119) moving these coordinates would change which pixels&nbsp; appear on the surface. Those are different edits&nbsp;&nbsp;

- [00:02:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=126) with different consequences. The material supplies&nbsp; the final interpretation. Open Shading and follow&nbsp;&nbsp;

- [00:02:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=132) the checker into Base Color. A valid image and&nbsp; a valid UV map still need this connection before&nbsp;&nbsp;

- [00:02:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=138) the shader uses the pixels as surface color.&nbsp; This wire carries color from the image into&nbsp;&nbsp;

- [00:02:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=144) the Principled shader. Later, roughness and normal&nbsp; images will carry different kinds of information.&nbsp;&nbsp;

- [00:02:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=151) Their sockets and color interpretation must match&nbsp; the data we intend to supply. Inspect the broad&nbsp;&nbsp;

- [00:02:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=158) face and the thin edge. Stretched checker shapes&nbsp; suggest a coordinate problem; soft pixels suggest&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=164) limited sampling detail. A bright highlight&nbsp; belongs to lighting and shading, so avoid&nbsp;&nbsp;

- [00:02:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=170) treating every visible difference as 1 fault. The&nbsp; panel has nonuniform object scale from modeling.&nbsp;&nbsp;

- [00:02:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=177) Apply that scale before evaluating its unwrap,&nbsp; preserving its visible dimensions. This gives the&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=183) unwrapping operation the proportions we intend&nbsp; to paint, instead of relying on an unapplied&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=189) transform. Return to UV Editing and face the panel&nbsp; directly. Think of opening a cardboard shell:&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=195) the broad label face should remain continuous,&nbsp; while the thin surrounding strip can open along&nbsp;&nbsp;

- [00:03:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=201) less noticeable edges. Choose the upper and lower&nbsp; front edges first. These boundaries separate&nbsp;&nbsp;

- [00:03:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=207) the label face from its thin side walls. We are&nbsp; designing where the flat pieces separate, without&nbsp;&nbsp;

- [00:03:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=213) removing or splitting the visible mesh geometry.&nbsp; Add the left and right edges around that same&nbsp;&nbsp;

- [00:03:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=220) face. Together, these 4 edges protect a single&nbsp; uninterrupted area for the graphic. The seam can&nbsp;&nbsp;

- [00:03:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=226) sit at the physical border instead of crossing&nbsp; through the painted symbol. Mark the selected&nbsp;&nbsp;

- [00:03:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=232) edges as seams. The seam marking guides the next&nbsp; unwrap; it does not create new image pixels. Look&nbsp;&nbsp;

- [00:03:58](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=238) for the marked boundary before moving on, so&nbsp; the cut placement remains an explicit design&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=244) decision. Isolate the panel with Local View, then&nbsp; turn to the back. Choose the upper and lower rear&nbsp;&nbsp;

- [00:04:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=251) boundaries. This clears the station supports from&nbsp; our view while keeping the panel itself unchanged,&nbsp;&nbsp;

- [00:04:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=258) so every selected edge stays visible. Include the&nbsp; 2 remaining back edges and mark that perimeter.&nbsp;&nbsp;

- [00:04:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=264) The result is a front face, a rear face and a&nbsp; surrounding strip. Separating these regions avoids&nbsp;&nbsp;

- [00:04:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=270) forcing the entire closed shell into 1 highly&nbsp; distorted island. Open the side strip at this&nbsp;&nbsp;

- [00:04:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=277) upper corner. 1 connecting seam lets the strip&nbsp; unfold instead of remaining a closed ring. It sits&nbsp;&nbsp;

- [00:04:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=284) away from the center of the label, where a texture&nbsp; discontinuity would attract more attention. Select&nbsp;&nbsp;

- [00:04:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=290) the faces and unwrap with Angle Based. Blender&nbsp; uses the marked cuts to flatten the surface. Judge&nbsp;&nbsp;

- [00:04:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=297) the resulting shapes against the physical panel; a&nbsp; tidy-looking arrangement alone does not prove that&nbsp;&nbsp;

- [00:05:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=303) the proportions are useful. Frame the islands and&nbsp; inspect the checker on the broad face again. The&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=310) large rectangular region serves the label, and the&nbsp; narrow strip serves the sides. This division gives&nbsp;&nbsp;

- [00:05:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=316) us a practical surface to paint and inspect.&nbsp; UV Sync Selection is currently off. With this&nbsp;&nbsp;

- [00:05:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=323) workflow, selecting a mesh face controls which&nbsp; coordinates are shown for editing. Choose the&nbsp;&nbsp;

- [00:05:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=329) front face so its island is easy to distinguish&nbsp; from the less important rear and side regions.&nbsp;&nbsp;

- [00:05:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=335) Select that visible island and move it a short&nbsp; distance horizontally. Watch the checker shift&nbsp;&nbsp;

- [00:05:41](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=341) across the panel while the panel itself stays&nbsp; still. This is coordinate editing: the mesh is now&nbsp;&nbsp;

- [00:05:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=347) sampling a different part of the same image. Move&nbsp; the island back by the same amount. The original&nbsp;&nbsp;

- [00:05:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=353) placement returns without repainting a single&nbsp; pixel. This distinction is especially useful when&nbsp;&nbsp;

- [00:05:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=359) a recognizable mark appears in the wrong place on&nbsp; an otherwise correct texture image. Enable UV Sync&nbsp;&nbsp;

- [00:06:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=366) Selection briefly and select the front face again.&nbsp; Mesh and UV selections now follow each other. This&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=372) can make correspondence easier to inspect, but&nbsp; it changes selection behavior, so always know&nbsp;&nbsp;

- [00:06:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=378) which mode you are using. Turn synchronization off&nbsp; again for the rest of this layout work. Select all&nbsp;&nbsp;

- [00:06:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=384) panel faces before selecting all UVs. That order&nbsp; makes the complete intended layout available,&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=391) rather than accidentally packing only the face&nbsp; that happened to be visible. Before revealing&nbsp;&nbsp;

- [00:06:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=398) the bake receiver, hide the earlier display rock&nbsp; that occupies its location. Keep that object as&nbsp;&nbsp;

- [00:06:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=404) a preserved source. Comparing coincident copies&nbsp; would make it difficult to tell which geometry and&nbsp;&nbsp;

- [00:06:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=410) material are responsible for the visible surface.&nbsp; Disable that display copy for rendering as well.&nbsp;&nbsp;

- [00:06:58](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=418) The named low receiver will become the production&nbsp; rock, while the source copies remain available&nbsp;&nbsp;

- [00:07:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=423) separately. This avoids an accidental overlap&nbsp; appearing only when we switch from a viewport&nbsp;&nbsp;

- [00:07:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=430) preview to the scene render. The rock receiver&nbsp; has a different job. Reveal the low rock and&nbsp;&nbsp;

- [00:07:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=435) frame it by itself. We need useful nonconflicting&nbsp; regions for a bake, while preserving its existing&nbsp;&nbsp;

- [00:07:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=442) geometry and the aligned high source for the later&nbsp; transfer. Select the revealed receiver and bring&nbsp;&nbsp;

- [00:07:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=449) its surface into view. Its name identifies the&nbsp; low mesh that will receive image data later. At&nbsp;&nbsp;

- [00:07:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=455) this stage we are judging coordinates, so the high&nbsp; source can remain out of the way. Select its faces&nbsp;&nbsp;

- [00:07:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=462) and run Smart UV Project. This automatic route&nbsp; chooses cuts by face angle, which is useful for&nbsp;&nbsp;

- [00:07:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=469) this small bake receiver. It does not know where a&nbsp; painted word or a decorative border should remain&nbsp;&nbsp;

- [00:07:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=474) continuous. Frame the resulting islands and&nbsp; inspect their separation. Automatic unwrapping&nbsp;&nbsp;

- [00:08:00](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=480) saves manual seam work here, but its result still&nbsp; needs inspection. A fast operation is useful when&nbsp;&nbsp;

- [00:08:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=486) its cuts, density and padding fit the actual&nbsp; purpose of the object. Select the station lid by&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=492) name for another manual example. We will frame it&nbsp; next. Seam placement should follow the shape being&nbsp;&nbsp;

- [00:08:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=499) unwrapped; an arrangement that works on one object&nbsp; may suit another poorly. Frame the shallow lid&nbsp;&nbsp;

- [00:08:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=507) and turn it enough to see its narrow side wall.&nbsp; The continuous broad surface and the surrounding&nbsp;&nbsp;

- [00:08:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=513) strip need different amounts of texture space.&nbsp; This view makes that geometric difference easier&nbsp;&nbsp;

- [00:08:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=519) to judge. Choose the upper front boundary of&nbsp; the lid and mark a seam. This is the start&nbsp;&nbsp;

- [00:08:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=524) of a deliberate unfolding plan. We will complete&nbsp; its remaining cuts later and compare the checker&nbsp;&nbsp;

- [00:08:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=531) density with the main housing label. Return to the&nbsp; panel with its completed seam layout. Manual and&nbsp;&nbsp;

- [00:08:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=537) automatic methods both produce coordinates; their&nbsp; usefulness depends on the surface. The label needs&nbsp;&nbsp;

- [00:09:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=543) continuity across its graphic, while the rock&nbsp; can tolerate more separated islands. Inspect the&nbsp;&nbsp;

- [00:09:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=552) front island before packing. Rotation changes&nbsp; the direction of the checker without changing&nbsp;&nbsp;

- [00:09:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=558) the mesh. A different island orientation can&nbsp; be perfectly valid, provided it supports the&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=563) design and leaves enough useful image area.&nbsp; Restore the starting orientation of the panel&nbsp;&nbsp;

- [00:09:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=570) coordinates. Letters and directional marks make&nbsp; rotation easy to judge, while an undirected noise&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=576) texture may not care. Choose an orientation that&nbsp; supports the information this surface carries.&nbsp;&nbsp;

- [00:09:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=583) Select every face and every island, then average&nbsp; island scale. This relates UV area to surface area&nbsp;&nbsp;

- [00:09:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=590) across the selected pieces. It helps their texture&nbsp; density agree, instead of giving a tiny side face&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=596) an outsized share of the image. Pack the islands&nbsp; with a fractional margin of 0.015625. At our image&nbsp;&nbsp;

- [00:10:05](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=605) size, that normalized amount corresponds to 16&nbsp; pixels. This is a starting value for inspection,&nbsp;&nbsp;

- [00:10:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=611) not a universal padding guarantee. Frame&nbsp; the packed layout and inspect the spaces&nbsp;&nbsp;

- [00:10:17](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=617) between islands and around the tile. Filtering&nbsp; samples neighboring pixels, and smaller image&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=622) levels combine information. A useful gutter&nbsp; helps unrelated regions stay separated as the&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=629) object becomes smaller on screen. Inspect the&nbsp; front-face checker after packing. Its diagonal&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=635) rows reflect the rotated island, while&nbsp; uneven squares would suggest distortion.&nbsp;&nbsp;

- [00:10:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=640) A larger image adds samples without repairing&nbsp; the coordinates, so evaluate their shape before&nbsp;&nbsp;

- [00:10:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=646) increasing resolution. This prepared station-panel&nbsp; variation repeats 1 image region across 2 faces.&nbsp;&nbsp;

- [00:10:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=656) Reveal it to inspect a legitimate use of shared&nbsp; coordinates. The 2nd face also mirrors the region,&nbsp;&nbsp;

- [00:11:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=664) which can be useful for an undirected decorative&nbsp; pattern. Select the repeated panel by name and&nbsp;&nbsp;

- [00:11:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=670) bring it into view. We will compare its 2 faces&nbsp; once they are framed. Their shared coordinates&nbsp;&nbsp;

- [00:11:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=676) demonstrate a deliberate space-saving choice&nbsp; that can suit repeated decoration. Enter Edit&nbsp;&nbsp;

- [00:11:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=682) Mode and select both faces. Their islands occupy&nbsp; the same area, deliberately reusing pixels. That&nbsp;&nbsp;

- [00:11:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=689) saves texture space for repeated decoration, but a&nbsp; unique identifier would be duplicated or reversed,&nbsp;&nbsp;

- [00:11:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=696) so the same arrangement would serve that purpose&nbsp; poorly. Run Select Overlap in the UV Editor. The&nbsp;&nbsp;

- [00:11:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=702) selection identifies shared regions; it does not&nbsp; decide whether sharing is appropriate. Here the&nbsp;&nbsp;

- [00:11:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=708) overlap is intentional, while our unique label&nbsp; and the normal bake need independently usable&nbsp;&nbsp;

- [00:11:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=714) receiving areas. Use Select by Winding to inspect&nbsp; the mirrored UV orientation. Winding describes the&nbsp;&nbsp;

- [00:12:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=721) order of coordinates around a flat face. Mesh face&nbsp; normals describe orientation in the 3-dimensional&nbsp;&nbsp;

- [00:12:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=727) surface; changing one is not automatically a&nbsp; repair for the other. Leave Edit Mode and hide&nbsp;&nbsp;

- [00:12:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=734) the repeated variant. Keep it as a named study&nbsp; rather than treating it as damaged geometry. A&nbsp;&nbsp;

- [00:12:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=740) diagnostic tells us what is present; the intended&nbsp; use tells us whether it needs changing. Select the&nbsp;&nbsp;

- [00:12:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=746) main housing panel and bring its surface back into&nbsp; view. Editing shared pixels changes both repeated&nbsp;&nbsp;

- [00:12:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=753) faces at once. Separate coordinates let us repaint&nbsp; 1 region without changing the area sampled by the&nbsp;&nbsp;

- [00:12:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=760) other. Inspect the checker at a smaller, useful&nbsp; viewing size. Fine squares need not remain&nbsp;&nbsp;

- [00:12:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=767) individually readable at every distance. The goal&nbsp; is a stable, well-proportioned surface at the&nbsp;&nbsp;

- [00:12:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=773) distance where the audience will actually see the&nbsp; finished station. Open Shading and make the panel&nbsp;&nbsp;

- [00:13:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=781) material a separate copy. The checker is also used&nbsp; by our prepared variations. A separate material&nbsp;&nbsp;

- [00:13:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=787) lets the label evolve while those comparison&nbsp; surfaces retain their original checker connection.&nbsp;&nbsp;

- [00:13:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=794) Return to UV Editing and create the label color&nbsp; image. Use a square image with 1024 pixels on&nbsp;&nbsp;

- [00:13:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=801) each side. This modest size is enough to teach the&nbsp; workflow without making texture size the central&nbsp;&nbsp;

- [00:13:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=807) lesson. Save the blank image before painting.&nbsp; The Blender image name and the saved filename&nbsp;&nbsp;

- [00:13:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=815) are different things. The textures folder keeps&nbsp; these pixels beside the course scene. Use this&nbsp;&nbsp;

- [00:13:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=822) descriptive filename so a later dependency check&nbsp; can identify the image without guessing which&nbsp;&nbsp;

- [00:13:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=827) generic file belongs to this material. Return to&nbsp; the panel material and add an Image Texture node.&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=835) Keep the checker node available as a reference.&nbsp; The new node will point at our saved label image,&nbsp;&nbsp;

- [00:14:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=841) while the existing shader continues to describe&nbsp; the surface response. Choose the label color&nbsp;&nbsp;

- [00:14:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=847) image in the new node. This is color artwork, so&nbsp; its normal interpretation here is sRGB. The image&nbsp;&nbsp;

- [00:14:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=854) contains color values that Blender converts&nbsp; appropriately for the lighting calculations&nbsp;&nbsp;

- [00:14:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=859) used by the shader. Connect Color to Base Color,&nbsp; replacing the checker connection on this material.&nbsp;&nbsp;

- [00:14:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=865) The blank image now supplies the panel color.&nbsp; A material can contain several image nodes, but&nbsp;&nbsp;

- [00:14:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=871) only the connected data contributes through this&nbsp; particular input. Select the label image node and&nbsp;&nbsp;

- [00:14:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=878) enter Texture Paint. Check the image shown at the&nbsp; left before making a mark. Selecting the object&nbsp;&nbsp;

- [00:14:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=884) alone does not prove that the intended image is&nbsp; the active paint target. Choose the Fill tool&nbsp;&nbsp;

- [00:14:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=891) and a warm ochre background. A quiet base gives&nbsp; the dark signal graphic enough contrast to read&nbsp;&nbsp;

- [00:14:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=897) clearly. We are authoring a simple course graphic,&nbsp; so no downloaded logo or texture is needed. Fill&nbsp;&nbsp;

- [00:15:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=903) the label image and inspect the panel response.&nbsp; The image changes and the material displays those&nbsp;&nbsp;

- [00:15:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=909) new pixels immediately. Keep your attention on&nbsp; both panes so an unexpected target or missing&nbsp;&nbsp;

- [00:15:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=915) connection becomes visible before more painting&nbsp; accumulates. Switch to Draw and choose a dark navy&nbsp;&nbsp;

- [00:15:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=922) color. Set a brush size that makes a confident&nbsp; mark at this viewing scale. We want a readable&nbsp;&nbsp;

- [00:15:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=927) handmade symbol, rather than tiny decorative&nbsp; details that disappear in the station view.&nbsp;&nbsp;

- [00:15:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=933) Paint the upper band across the front face. The&nbsp; stroke is applied through the visible surface&nbsp;&nbsp;

- [00:15:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=938) into its image coordinates. Stay inside the&nbsp; broad island, leaving room near the edge so&nbsp;&nbsp;

- [00:15:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=944) the mark does not depend on a seam lining up. Add&nbsp; the lower band with the same brush. These 2 marks&nbsp;&nbsp;

- [00:15:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=951) establish a visual frame for the central signal.&nbsp; A mouse drawing can remain slightly irregular; the&nbsp;&nbsp;

- [00:15:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=957) important result is a clear change whose target&nbsp; and placement we can explain. Reduce the brush&nbsp;&nbsp;

- [00:16:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=963) and draw the 1st rising diagonal of the signal.&nbsp; A few bold connected strokes read more clearly&nbsp;&nbsp;

- [00:16:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=969) than many small marks. The surface view makes it&nbsp; easy to judge the symbol in the proportions of the&nbsp;&nbsp;

- [00:16:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=975) actual panel. Continue with a descending diagonal&nbsp; through the center. The image stores the mark,&nbsp;&nbsp;

- [00:16:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=982) while the UV map decides where it lands. A&nbsp; stretched island would distort this drawing&nbsp;&nbsp;

- [00:16:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=988) even though the mouse stroke looks straightforward&nbsp; in the viewport. Finish the signal with another&nbsp;&nbsp;

- [00:16:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=993) rising stroke. Inspect the complete shape before&nbsp; adding anything else. This compact graphic gives&nbsp;&nbsp;

- [00:16:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=999) us recognizable edges for the interpolation&nbsp; comparison and a useful landmark when checking&nbsp;&nbsp;

- [00:16:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1005) whether image dependencies reopen correctly. Add&nbsp; a small identification mark near the lower right.&nbsp;&nbsp;

- [00:16:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1012) It distinguishes this authored panel from the&nbsp; checker variation without pretending to be precise&nbsp;&nbsp;

- [00:16:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1017) typography. Painted marks are useful for personal&nbsp; touches, wear and surface-specific decoration.&nbsp;&nbsp;

- [00:17:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1024) Turn the panel slightly and inspect the mark on&nbsp; the actual surface. Painting in the viewport is&nbsp;&nbsp;

- [00:17:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1030) convenient, but it still depends on the underlying&nbsp; coordinates. A seam or an overlapping island can&nbsp;&nbsp;

- [00:17:17](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1037) affect where the same brush stroke appears. Leave&nbsp; paint mode and return to the station nameplate.&nbsp;&nbsp;

- [00:17:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1042) This identifier is a text object with editable&nbsp; content. When wording must stay crisp, be read at&nbsp;&nbsp;

- [00:17:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1049) a distance or change later, text geometry is often&nbsp; the clearer authoring choice. Select the editable&nbsp;&nbsp;

- [00:17:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1055) lettering and inspect its outline closely. This&nbsp; object supplies a geometry-based reference beside&nbsp;&nbsp;

- [00:17:41](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1061) the painted graphic. Keeping its identity clear&nbsp; makes the later comparison about image sampling,&nbsp;&nbsp;

- [00:17:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1068) rather than about accidentally inspecting a&nbsp; different surface. Text still needs deliberate&nbsp;&nbsp;

- [00:17:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1074) placement and a material. Keeping it editable&nbsp; preserves the lettering while the design is&nbsp;&nbsp;

- [00:17:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1079) evolving; converting it to a mesh is a separate&nbsp; decision for a downstream requirement. Painting&nbsp;&nbsp;

- [00:18:05](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1085) remains useful for the handmade surface&nbsp; marks. Return to the painted panel for a&nbsp;&nbsp;

- [00:18:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1090) sampling comparison. Keep its UV layout, image&nbsp; size and lighting fixed. We will change only the&nbsp;&nbsp;

- [00:18:17](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1097) interpolation setting, so the difference&nbsp; we inspect has a clear and limited cause.&nbsp;&nbsp;

- [00:18:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1105) Set the image interpolation to Closest. At&nbsp; a sufficiently enlarged view, the sampled&nbsp;&nbsp;

- [00:18:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1110) pixels produce hard steps along the painted edges.&nbsp; This can support an intentional pixel-art style,&nbsp;&nbsp;

- [00:18:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1117) but it also exposes the finite resolution of the&nbsp; image. Switch to Linear with the same image and&nbsp;&nbsp;

- [00:18:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1124) coordinates. Neighboring samples are blended,&nbsp; so enlarged boundaries become smoother. That&nbsp;&nbsp;

- [00:18:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1130) smoothing does not recover detail that was never&nbsp; painted; it changes how the existing samples are&nbsp;&nbsp;

- [00:18:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1137) presented. Reduce the panel to a more typical&nbsp; viewing size. Many image texels may now contribute&nbsp;&nbsp;

- [00:19:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1143) to a smaller number of screen pixels. This is&nbsp; minification, and the useful question becomes&nbsp;&nbsp;

- [00:19:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1148) whether the graphic stays clear and stable in&nbsp; its actual context. Turn toward a grazing angle&nbsp;&nbsp;

- [00:19:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1154) and watch the thin detail. Prefiltered smaller&nbsp; image levels, called mipmaps, help represent a&nbsp;&nbsp;

- [00:19:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1160) texture as its screen footprint shrinks. They&nbsp; organize existing information; they do not&nbsp;&nbsp;

- [00:19:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1165) add newly authored detail to the label. Restore a&nbsp; comfortable working view and keep Linear for this&nbsp;&nbsp;

- [00:19:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1171) painted label. Interpolation alone does not expose&nbsp; or solve every filtering choice. Useful density,&nbsp;&nbsp;

- [00:19:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1178) adequate padding and inspection at the intended&nbsp; distance all contribute to a stable result.&nbsp;&nbsp;

- [00:19:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1184) Return to UV Editing and display the painted&nbsp; image. Its modified state tells us that the&nbsp;&nbsp;

- [00:19:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1190) pixels have changed since the earlier save. The&nbsp; scene and the external image are related assets,&nbsp;&nbsp;

- [00:19:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1196) with separate information that must be preserved.&nbsp; Save the image explicitly now. This writes the&nbsp;&nbsp;

- [00:20:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1203) painted pixels to the texture file we named&nbsp; earlier. Saving the scene preserves objects,&nbsp;&nbsp;

- [00:20:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1208) materials and links, but we should still verify&nbsp; where each external image is stored. Save a named&nbsp;&nbsp;

- [00:20:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1215) scene version beside the other course scenes. The&nbsp; texture stays a separate dependency. Use the 1st&nbsp;&nbsp;

- [00:20:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1223) station version for this completed label stage.&nbsp; The blend file belongs in the blend folder and the&nbsp;&nbsp;

- [00:20:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1229) color image belongs in textures. Their relative&nbsp; relationship makes the course project easier&nbsp;&nbsp;

- [00:20:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1235) to move as 1 organized folder. Inspect Blender’s&nbsp; Save Modified Images preference as an additional&nbsp;&nbsp;

- [00:20:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1242) safety net. It can help catch changed image data&nbsp; during a project save. Keep explicit image saves&nbsp;&nbsp;

- [00:20:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1249) and dependency checks in the workflow so the&nbsp; storage location remains a deliberate choice.&nbsp;&nbsp;

- [00:20:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1255) Reopen the saved image through the ordinary image&nbsp; file browser. This checks the saved file on disk,&nbsp;&nbsp;

- [00:21:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1262) not memory. Choose the station label color image&nbsp; from the textures folder. Inspect the signal,&nbsp;&nbsp;

- [00:21:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1269) both bands and the small identification mark&nbsp; after it opens. A successful file-open operation&nbsp;&nbsp;

- [00:21:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1275) is useful only when the reopened content is&nbsp; the result we meant to preserve. Return to&nbsp;&nbsp;

- [00:21:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1282) Texture Paint with the label image active. Add&nbsp; a restrained lighter wear mark near 1 edge of&nbsp;&nbsp;

- [00:21:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1288) the graphic. Surface painting is useful when&nbsp; the mark should follow a visible part of the&nbsp;&nbsp;

- [00:21:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1293) object rather than an abstract image location.&nbsp; Use a smaller brush for this short scuff. Keep&nbsp;&nbsp;

- [00:21:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1300) the wear subordinate to the main signal, so it&nbsp; adds surface variation without competing with&nbsp;&nbsp;

- [00:21:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1306) the graphic. Inspect the mark in context before&nbsp; deciding whether any further decoration is useful.&nbsp;&nbsp;

- [00:21:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1312) Add a separate variation directly in the image&nbsp; pane. Here the brush follows image coordinates,&nbsp;&nbsp;

- [00:21:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1317) and the UV layout determines which surfaces&nbsp; receive those pixels. The 2 painting views&nbsp;&nbsp;

- [00:22:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1324) edit the same image through different spatial&nbsp; relationships. Inspect the panel again and save&nbsp;&nbsp;

- [00:22:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1329) the revised pixels. A mark in the image pane&nbsp; may land on a different island than expected,&nbsp;&nbsp;

- [00:22:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1335) so verify its actual surface location. Saving&nbsp; becomes the final step after that inspection,&nbsp;&nbsp;

- [00:22:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1341) not a substitute for it. The rock transfer uses&nbsp; directional information instead of color artwork.&nbsp;&nbsp;

- [00:22:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1347) Reveal and select the low receiver, then return&nbsp; to Layout. We will preserve its editable source&nbsp;&nbsp;

- [00:22:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1353) before fixing the geometry assumptions used by the&nbsp; bake and the later export. Duplicate the low mesh&nbsp;&nbsp;

- [00:22:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1362) in place and give the copy a clear backup name.&nbsp; This preserves an editable source with the same&nbsp;&nbsp;

- [00:22:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1368) alignment. The original low object remains the&nbsp; receiver and the single-tile production prop used&nbsp;&nbsp;

- [00:22:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1374) later in the course. Hide the backup and disable&nbsp; it for rendering. A preserved source should not&nbsp;&nbsp;

- [00:23:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1381) accidentally overlap the evaluated receiver in&nbsp; our inspection. Select the original low object&nbsp;&nbsp;

- [00:23:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1387) again so the following geometry decision&nbsp; applies to the intended production asset.&nbsp;&nbsp;

- [00:23:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1393) Select the production receiver again before&nbsp; changing its evaluated geometry. The preserved&nbsp;&nbsp;

- [00:23:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1399) backup stays separate from this working object.&nbsp; That separation lets us inspect the production&nbsp;&nbsp;

- [00:23:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1405) result without accidentally modifying the copy&nbsp; intended for recovery. Add a Triangulate modifier&nbsp;&nbsp;

- [00:23:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1412) to make the evaluated diagonals explicit. This&nbsp; inherited low mesh already contains triangles,&nbsp;&nbsp;

- [00:23:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1418) so a dramatic shape change is not expected.&nbsp; The point is to preserve consistent evaluated&nbsp;&nbsp;

- [00:23:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1424) topology through baking and the later export.&nbsp; Show the wire overlay and inspect the low surface.&nbsp;&nbsp;

- [00:23:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1430) Tangent-space detail depends on the receiver’s&nbsp; coordinates and shading orientation as well as&nbsp;&nbsp;

- [00:23:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1435) its triangles. Changing those assumptions after&nbsp; baking can invalidate the match even when the&nbsp;&nbsp;

- [00:24:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1441) object still looks broadly similar. Return to a&nbsp; clean shaded view and enable the bake collections&nbsp;&nbsp;

- [00:24:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1448) for rendering. The source and receiver must be&nbsp; available to the operation. Hidden or excluded&nbsp;&nbsp;

- [00:24:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1454) collections are a different issue from an image&nbsp; node that merely lacks a connection. Enable the&nbsp;&nbsp;

- [00:24:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1460) receiving collection as well. A bake depends on&nbsp; the availability of both sides of the transfer.&nbsp;&nbsp;

- [00:24:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1466) Keeping the source and receiver in named&nbsp; collections makes that requirement easier&nbsp;&nbsp;

- [00:24:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1471) to inspect when a scene contains many other&nbsp; objects. Reveal the high source and inspect&nbsp;&nbsp;

- [00:24:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1477) its relationship to the low receiver. The&nbsp; inherited sculpt is preserved separately,&nbsp;&nbsp;

- [00:24:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1483) and this prepared source adds fine grain&nbsp; for a clearer transfer. That extra relief&nbsp;&nbsp;

- [00:24:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1488) is demonstration preparation, not detail already&nbsp; present in the low mesh. Enable the high object&nbsp;&nbsp;

- [00:24:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1495) for rendering and frame its prepared surface.&nbsp; The fine grain makes the transfer easier to&nbsp;&nbsp;

- [00:25:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1501) inspect. Preserve the original sculpt separately&nbsp; so this additional demonstration layer remains&nbsp;&nbsp;

- [00:25:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1508) distinguishable from the work completed in the&nbsp; earlier lecture. Select the prepared high source&nbsp;&nbsp;

- [00:25:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1514) and frame its surface closely. Its added grain is&nbsp; the detail we want the normal image to describe.&nbsp;&nbsp;

- [00:25:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1520) Compare that fine variation with the receiver&nbsp; while the alignment between the objects stays&nbsp;&nbsp;

- [00:25:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1526) the same. The 2 rocks occupy the same intended&nbsp; space. Their silhouettes are related, but the high&nbsp;&nbsp;

- [00:25:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1533) surface carries finer relief. Baking will describe&nbsp; part of that surface response on the receiver;&nbsp;&nbsp;

- [00:25:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1539) it will not add those source vertices to the&nbsp; low geometry. Select the low receiver and&nbsp;&nbsp;

- [00:25:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1545) open its material. Make a separate copy so the&nbsp; source sculpt retains its original appearance.&nbsp;&nbsp;

- [00:25:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1551) 1 receiving object and 1 material keep the&nbsp; image-target decision clear for this deliberately&nbsp;&nbsp;

- [00:25:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1557) small demonstration. Make the receiver material&nbsp; independent and give it its export name. The&nbsp;&nbsp;

- [00:26:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1563) object identity and the material identity answer&nbsp; different questions: which mesh receives the bake,&nbsp;&nbsp;

- [00:26:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1569) and which graph supplies its active image target.&nbsp; Keep both responsibilities visible here. In UV&nbsp;&nbsp;

- [00:26:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1576) Editing, select the receiver faces and inspect&nbsp; their islands. Average their scale and keep the&nbsp;&nbsp;

- [00:26:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1581) layout inside the 1st tile. The normal image&nbsp; needs nonconflicting receiving regions, because&nbsp;&nbsp;

- [00:26:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1588) different surface directions cannot safely write&nbsp; into the same pixels. Pack the receiver with the&nbsp;&nbsp;

- [00:26:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1594) same starting fractional margin and inspect the&nbsp; result. The image will also receive bake padding&nbsp;&nbsp;

- [00:26:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1599) around its islands. UV spacing and the bake’s&nbsp; edge extension work together, so both must suit&nbsp;&nbsp;

- [00:26:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1605) the final viewing conditions. Create the normal&nbsp; image at 1024 pixels square. Its initial blank&nbsp;&nbsp;

- [00:26:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1614) appearance is only a target waiting for data.&nbsp; Keeping this exercise small lets us inspect the&nbsp;&nbsp;

- [00:27:00](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1620) transfer without turning the lesson into a long&nbsp; processing wait. Return to Object Mode and add&nbsp;&nbsp;

- [00:27:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1627) an Image Texture node to the receiver material. A&nbsp; material can hold an image as a bake destination&nbsp;&nbsp;

- [00:27:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1633) even while another connection controls the visible&nbsp; preview. Choose the new normal image in this node.&nbsp;&nbsp;

- [00:27:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1640) This binds the destination pixels to the receiver&nbsp; material. The image can receive a bake without&nbsp;&nbsp;

- [00:27:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1646) contributing to Base Color; target selection&nbsp; and shader contribution are separate roles.&nbsp;&nbsp;

- [00:27:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1652) Set the image to Non-Color and select its node&nbsp; as the active target. Normal pixels encode&nbsp;&nbsp;

- [00:27:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1658) directions, so a display-color conversion would&nbsp; change their meaning. We will interpret those&nbsp;&nbsp;

- [00:27:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1663) values with a Normal Map node after the bake is&nbsp; complete. Save a pre-bake scene version before&nbsp;&nbsp;

- [00:27:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1669) changing the render controls. It preserves&nbsp; the receiver and its selected image. Name&nbsp;&nbsp;

- [00:27:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1675) this version as the pre-bake checkpoint. The high&nbsp; source remains aligned and the low material owns&nbsp;&nbsp;

- [00:28:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1682) the active target image. These are the first&nbsp; things to recheck if a later bake is blank or&nbsp;&nbsp;

- [00:28:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1687) reports that no image is available. Switch&nbsp; the scene engine to Cycles for baking. This&nbsp;&nbsp;

- [00:28:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1693) prepared example uses the CPU, keeping the small&nbsp; transfer independent of a particular graphics-card&nbsp;&nbsp;

- [00:28:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1699) configuration. The essential setup remains the&nbsp; same: a source, an active receiver and a selected&nbsp;&nbsp;

- [00:28:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1705) image target. Choose Normal as the bake type.&nbsp; The output for this exercise is tangent space,&nbsp;&nbsp;

- [00:28:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1712) using Blender’s displayed channel convention.&nbsp; Check the destination before changing channels;&nbsp;&nbsp;

- [00:28:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1717) a reflexive green-channel flip cannot repair&nbsp; incorrect coordinates or a missed source surface.&nbsp;&nbsp;

- [00:28:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1725) Select the high source first, then add the low&nbsp; receiver last. The low object must be active,&nbsp;&nbsp;

- [00:28:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1731) because it receives the result. The high object&nbsp; supplies surface information while the selected&nbsp;&nbsp;

- [00:28:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1737) image node in the low material supplies the&nbsp; destination. Add the low receiver to the&nbsp;&nbsp;

- [00:29:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1743) selection while leaving the high source selected.&nbsp; The active object is the destination, so selection&nbsp;&nbsp;

- [00:29:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1748) order matters here. Confirm the receiver name and&nbsp; its active outline before returning to the bake&nbsp;&nbsp;

- [00:29:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1755) controls. Enable Selected to Active and use the&nbsp; tested projection values for this aligned pair.&nbsp;&nbsp;

- [00:29:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1761) Extrusion is 0.035, and maximum ray distance is&nbsp; 0.1. These scene-specific values let rays reach&nbsp;&nbsp;

- [00:29:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1769) the intended source surface. Set bake padding&nbsp; to 16 pixels. The bake extends edge information&nbsp;&nbsp;

- [00:29:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1777) beyond the island boundary to support filtering.&nbsp; Padding needs enough surrounding UV space,&nbsp;&nbsp;

- [00:29:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1782) and its useful amount depends on resolution,&nbsp; distance and the final use of the asset.&nbsp;&nbsp;

- [00:29:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1788) Verify the receiver is enabled for rendering and&nbsp; keep its image node active. This is a useful final&nbsp;&nbsp;

- [00:29:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1795) checkpoint before the operation. Correct selection&nbsp; cannot compensate for an excluded object,&nbsp;&nbsp;

- [00:30:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1801) and a visible image is not automatically the&nbsp; active bake target. Start the bake and let the&nbsp;&nbsp;

- [00:30:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1807) operation complete. Rays compare the receiver&nbsp; with the source and encode the transferred&nbsp;&nbsp;

- [00:30:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1812) directions into the image. We will judge the&nbsp; resulting surface and seams before treating&nbsp;&nbsp;

- [00:30:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1818) the new pixels as a usable asset. Open UV Editing&nbsp; and display the normal image. Its changing colors&nbsp;&nbsp;

- [00:30:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1824) represent directions across the islands; they are&nbsp; not intended to become the rock’s visible purple&nbsp;&nbsp;

- [00:30:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1831) color. Inspect the coverage before saving&nbsp; the image or connecting it to the material.&nbsp;&nbsp;

- [00:30:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1836) Save the baked image as an external texture. A&nbsp; successful bake stays temporary until it is saved.&nbsp;&nbsp;

- [00:30:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1844) Use the rock normal filename in the textures&nbsp; folder. The name identifies the map’s role,&nbsp;&nbsp;

- [00:30:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1850) while the material connection will determine&nbsp; how it is used. If the bake shows patches or&nbsp;&nbsp;

- [00:30:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1855) unrelated imprints, diagnose the setup before&nbsp; accepting those pixels. Hide the high source&nbsp;&nbsp;

- [00:31:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1861) from the viewport and rendering before evaluating&nbsp; the receiver. Otherwise, its actual geometry could&nbsp;&nbsp;

- [00:31:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1867) disguise a failed transfer. Select the low rock&nbsp; again so the visible result is attributable to&nbsp;&nbsp;

- [00:31:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1874) the material we are building. Disable the high&nbsp; source for rendering as well, then select the&nbsp;&nbsp;

- [00:31:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1879) low receiver. The viewport and rendered result&nbsp; should now refer to the same evaluated object.&nbsp;&nbsp;

- [00:31:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1886) This keeps actual source geometry from concealing&nbsp; a missing or incorrectly interpreted normal&nbsp;&nbsp;

- [00:31:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1891) image. Select the low receiver so the following&nbsp; node connections affect the intended surface.&nbsp;&nbsp;

- [00:31:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1898) Hiding a source does not automatically make its&nbsp; receiver active. Checking this identity keeps the&nbsp;&nbsp;

- [00:31:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1905) shading comparison attached to the same production&nbsp; geometry. Return to Shading and add a Normal Map&nbsp;&nbsp;

- [00:31:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1911) node. This node interprets the directional image&nbsp; in tangent space. An Image Texture color output is&nbsp;&nbsp;

- [00:31:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1917) not itself a correctly interpreted surface normal,&nbsp; so it needs this conversion before reaching the&nbsp;&nbsp;

- [00:32:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1923) shader. Connect the normal image’s Color output&nbsp; to the Normal Map color input. The image remains&nbsp;&nbsp;

- [00:32:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1931) Non-Color because its channels encode data. Keep&nbsp; the interpreting node and the image together&nbsp;&nbsp;

- [00:32:17](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1937) in the graph so their relationship is easy to&nbsp; follow. Connect the interpreted Normal output&nbsp;&nbsp;

- [00:32:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1943) to the Principled Normal input. This replaces&nbsp; the earlier procedural bump connection on the&nbsp;&nbsp;

- [00:32:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1949) receiver. The baked directions now influence how&nbsp; the low surface responds to light without adding&nbsp;&nbsp;

- [00:32:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1956) geometry to its silhouette. Inspect the low rock&nbsp; with the normal effect enabled. Look for the fine&nbsp;&nbsp;

- [00:32:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1964) grain transferred from the prepared high surface.&nbsp; Use the same view and material conditions for&nbsp;&nbsp;

- [00:32:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1970) the next comparison, so a changing light cannot&nbsp; masquerade as newly transferred detail. Set the&nbsp;&nbsp;

- [00:32:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1977) Normal Map influence to 0 for a plain comparison.&nbsp; The receiver’s geometry and coordinates remain&nbsp;&nbsp;

- [00:33:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1983) unchanged. Watch the small relief disappear from&nbsp; its surface response while the outer boundary&nbsp;&nbsp;

- [00:33:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1989) retains the same low-mesh contour. Restore the&nbsp; influence to 1 and inspect the relief again.&nbsp;&nbsp;

- [00:33:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=1996) The difference belongs to shading directions,&nbsp; not added vertices. A normal map is useful for&nbsp;&nbsp;

- [00:33:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2001) fine surface detail, but it cannot reproduce&nbsp; every shape change in the high source’s outer&nbsp;&nbsp;

- [00:33:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2007) contour. Turn the receiver to inspect another&nbsp; angle and its boundary. Check seams and broad&nbsp;&nbsp;

- [00:33:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2013) lighting transitions as well as the attractive&nbsp; central detail. 1 successful-looking patch is&nbsp;&nbsp;

- [00:33:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2019) insufficient evidence that the whole receiving&nbsp; surface is ready to reuse. For a failed bake,&nbsp;&nbsp;

- [00:33:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2025) first identify the receiver and active image,&nbsp; then verify the engine, selection and source&nbsp;&nbsp;

- [00:33:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2030) availability. Inspect coordinates and projection&nbsp; next. A colored rock instead of directional relief&nbsp;&nbsp;

- [00:33:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2037) suggests that the image was connected to Base&nbsp; Color. Build a small color pattern using the Noise&nbsp;&nbsp;

- [00:34:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2043) Texture already present in the rock material.&nbsp; We are reusing last week’s node operation while&nbsp;&nbsp;

- [00:34:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2049) giving it a new purpose: an exportable color&nbsp; image that remains separate from the baked normal&nbsp;&nbsp;

- [00:34:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2055) directions. Add a Color Ramp for 2 earthy tones.&nbsp; The noise supplies a changing factor, and the ramp&nbsp;&nbsp;

- [00:34:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2062) turns that factor into the colors we choose.&nbsp; This is a bounded color study, rather than an&nbsp;&nbsp;

- [00:34:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2067) attempt to bake every aspect of a complex shader.&nbsp; Connect the noise factor to the ramp factor. This&nbsp;&nbsp;

- [00:34:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2074) wire determines where the 2 colors blend across&nbsp; the surface. The source remains procedural at&nbsp;&nbsp;

- [00:34:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2080) this stage, so its pattern is calculated by the&nbsp; graph instead of sampled from an authored color&nbsp;&nbsp;

- [00:34:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2086) image. Choose a darker earth color for the 1st&nbsp; ramp stop. A restrained range suits the station&nbsp;&nbsp;

- [00:34:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2094) rock and leaves the normal detail readable. Color&nbsp; decisions should support the whole object, rather&nbsp;&nbsp;

- [00:35:00](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2100) than overwhelm the lighting response we want&nbsp; to inspect. Set the 2nd ramp stop to a lighter&nbsp;&nbsp;

- [00:35:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2108) sandy color. These 2 colors define the range that&nbsp; the noise will blend. Keep the contrast moderate&nbsp;&nbsp;

- [00:35:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2115) so the color pattern supports the rock’s existing&nbsp; normal detail. Connect the ramp’s Color output to&nbsp;&nbsp;

- [00:35:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2121) Base Color and inspect the receiver. The surface&nbsp; now carries the earthy pattern while the normal&nbsp;&nbsp;

- [00:35:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2127) map supplies finer relief. Check this combination&nbsp; before preserving the procedural source. Name this&nbsp;&nbsp;

- [00:35:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2134) material as the procedural source, then return&nbsp; to Layout. The name records how these colors&nbsp;&nbsp;

- [00:35:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2140) are produced. Keeping that distinction clear&nbsp; will make the later comparison with saved image&nbsp;&nbsp;

- [00:35:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2147) textures easier to follow. Duplicate the textured&nbsp; rock beside the receiver and name the copy as the&nbsp;&nbsp;

- [00:35:54](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2154) procedural study. Both objects initially&nbsp; share the same material and coordinates.&nbsp;&nbsp;

- [00:35:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2159) This preserved example will let us compare the&nbsp; 2 representations later. Select the original low&nbsp;&nbsp;

- [00:36:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2166) receiver and make its material a separate copy.&nbsp; Name this material for export. The procedural&nbsp;&nbsp;

- [00:36:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2172) comparison keeps its existing graph, while the&nbsp; original receiver will switch to saved images&nbsp;&nbsp;

- [00:36:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2178) with explicit roles. Copy and name the receiver&nbsp; material before replacing its procedural inputs&nbsp;&nbsp;

- [00:36:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2184) with saved images. The nearby study keeps its&nbsp; existing graph. An independent material lets us&nbsp;&nbsp;

- [00:36:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2190) compare those representations without a later&nbsp; edit changing both objects together. Create a&nbsp;&nbsp;

- [00:36:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2196) new color image in UV Editing at the same modest&nbsp; resolution. The normal image is already preserved,&nbsp;&nbsp;

- [00:36:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2203) so this new target has a distinct role. Keeping&nbsp; separate map names prevents an accidental rebake&nbsp;&nbsp;

- [00:36:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2209) from replacing useful directional information. Add&nbsp; another Image Texture node for the color bake. Its&nbsp;&nbsp;

- [00:36:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2216) output will remain unconnected while it receives&nbsp; pixels. Enlarge the node so the destination image&nbsp;&nbsp;

- [00:37:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2222) is clear; the procedural ramp continues to supply&nbsp; the visible material color. Choose the base-color&nbsp;&nbsp;

- [00:37:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2231) image in the enlarged node. Its name distinguishes&nbsp; this destination from the normal map. Leave Color&nbsp;&nbsp;

- [00:37:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2238) unconnected: the ramp supplies the colors to&nbsp; bake, while this selected node tells Blender&nbsp;&nbsp;

- [00:37:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2244) where to store them. Select the new target and&nbsp; change the bake type to Diffuse. This time we&nbsp;&nbsp;

- [00:37:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2250) are baking the selected object’s own color. The&nbsp; high sculpt has no role in this operation, so the&nbsp;&nbsp;

- [00:37:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2256) selected-to-active setting must change from the&nbsp; normal-bake recipe. Disable Selected to Active,&nbsp;&nbsp;

- [00:37:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2263) Direct and Indirect, leaving Color enabled. These&nbsp; settings capture the diffuse color contribution&nbsp;&nbsp;

- [00:37:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2269) without baking the current illumination into it.&nbsp; This recipe is deliberately limited; it is not a&nbsp;&nbsp;

- [00:37:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2276) universal conversion for every possible shader.&nbsp; Bake into the base-color target and inspect the&nbsp;&nbsp;

- [00:38:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2282) resulting pixels. The image should preserve the&nbsp; authored pattern, while lighting remains part of&nbsp;&nbsp;

- [00:38:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2288) the later shader evaluation. A portable color&nbsp; map should not depend on a highlight from this&nbsp;&nbsp;

- [00:38:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2294) particular scene arrangement. Display the baked&nbsp; color image and open its save dialog. Keep the&nbsp;&nbsp;

- [00:38:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2301) directional map untouched. The texture set is&nbsp; growing through separate responsibilities: one&nbsp;&nbsp;

- [00:38:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2307) image carries the base colors, and another already&nbsp; carries the fine surface directions. Save the rock&nbsp;&nbsp;

- [00:38:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2314) base-color file beside its normal image. Its color&nbsp; interpretation remains sRGB in this exercise.&nbsp;&nbsp;

- [00:38:41](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2321) Clear naming makes the relationship obvious when&nbsp; someone later opens the course folder without&nbsp;&nbsp;

- [00:38:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2327) remembering the order of this demonstration.&nbsp; Return to Shading and connect the saved image&nbsp;&nbsp;

- [00:38:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2332) to Base Color. The procedural source copy&nbsp; remains available for comparison. The receiver&nbsp;&nbsp;

- [00:38:58](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2338) now gets its pattern from a file, while the shader&nbsp; continues to calculate the response to the current&nbsp;&nbsp;

- [00:39:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2344) lighting. Inspect the 2 rocks together under the&nbsp; same scene lighting. One uses the procedural color&nbsp;&nbsp;

- [00:39:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2351) graph and the other uses its saved image. Compare&nbsp; the pattern and surface response while remembering&nbsp;&nbsp;

- [00:39:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2358) that image resolution limits the baked version’s&nbsp; smallest detail. Select the area light and move&nbsp;&nbsp;

- [00:39:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2365) it sideways. The illumination changes while the&nbsp; image’s color pattern remains attached to the&nbsp;&nbsp;

- [00:39:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2371) receiver. This separates the saved base colors&nbsp; from a highlight or shadow that belongs to the&nbsp;&nbsp;

- [00:39:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2377) current lighting arrangement. Return the light&nbsp; to its original position and inspect the pair&nbsp;&nbsp;

- [00:39:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2383) again. A controlled comparison needs a repeatable&nbsp; baseline. Keep the procedural copy as a study,&nbsp;&nbsp;

- [00:39:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2390) then continue building the single-tile receiver’s&nbsp; remaining texture roles. Select the receiver and&nbsp;&nbsp;

- [00:39:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2397) inspect it under the restored lighting. The scene&nbsp; now returns to the comparison baseline. Keep that&nbsp;&nbsp;

- [00:40:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2403) baseline in mind while adding the remaining maps,&nbsp; so an unrelated lighting change does not hide a&nbsp;&nbsp;

- [00:40:10](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2410) surface difference. Create a separate roughness&nbsp; image for the receiver. Roughness controls a&nbsp;&nbsp;

- [00:40:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2415) surface response rather than its painted color. We&nbsp; will author a middle value with 1 lighter region,&nbsp;&nbsp;

- [00:40:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2422) then inspect how that region changes the&nbsp; reflected highlight. Add an Image Texture&nbsp;&nbsp;

- [00:40:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2428) node for a separate roughness input. Its role&nbsp; differs from the color and normal branches&nbsp;&nbsp;

- [00:40:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2434) already in this material. Enlarge the node before&nbsp; selecting the image so the destination stays&nbsp;&nbsp;

- [00:40:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2439) clear. Choose the roughness image in the enlarged&nbsp; node. This separate destination lets us paint the&nbsp;&nbsp;

- [00:40:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2446) reflection response without changing the rock’s&nbsp; color pattern. Confirm the image name before&nbsp;&nbsp;

- [00:40:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2452) changing how its pixel values are interpreted.&nbsp; Set this image to Non-Color before wiring it to&nbsp;&nbsp;

- [00:40:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2459) Roughness. These pixels represent scalar data in&nbsp; this material. A display-color conversion would&nbsp;&nbsp;

- [00:41:05](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2465) alter the numbers, so check the interpretation&nbsp; field beside the selected image. Connect the&nbsp;&nbsp;

- [00:41:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2471) image to Roughness, replacing the earlier&nbsp; procedural roughness connection. Select this&nbsp;&nbsp;

- [00:41:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2476) node as the paint target before entering Texture&nbsp; Paint. Multiple images can belong to 1 material,&nbsp;&nbsp;

- [00:41:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2483) so active target selection matters even when the&nbsp; correct object is selected. In Texture Paint,&nbsp;&nbsp;

- [00:41:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2488) check the image displayed in the left editor&nbsp; as well as the material’s active paint target.&nbsp;&nbsp;

- [00:41:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2494) Select the roughness image here, so the fill and&nbsp; brush strokes modify the intended pixels. Fill&nbsp;&nbsp;

- [00:41:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2500) the roughness image with a medium gray. In this&nbsp; data image, the scalar value has a direct material&nbsp;&nbsp;

- [00:41:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2506) meaning. It establishes a consistent baseline so&nbsp; the lighter painted area can demonstrate a change&nbsp;&nbsp;

- [00:41:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2513) without needing another object or texture pack.&nbsp; Choose a lighter gray and a broad drawing brush.&nbsp;&nbsp;

- [00:41:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2519) Paint 1 region on the front of the receiver.&nbsp; The lighter data increases roughness there; the&nbsp;&nbsp;

- [00:42:05](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2525) useful evidence will be the changed reflection,&nbsp; rather than simply the gray color visible in the&nbsp;&nbsp;

- [00:42:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2531) image. Draw the rougher region across part of the&nbsp; rock. Keep another area at the baseline value for&nbsp;&nbsp;

- [00:42:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2538) comparison. Painting on the surface helps place&nbsp; the change, while the packed UV islands determine&nbsp;&nbsp;

- [00:42:24](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2544) where those brush samples are stored in the image.&nbsp; Save this authored roughness image before judging&nbsp;&nbsp;

- [00:42:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2551) the material. It joins the baked maps, though&nbsp; painted directly. Use the rock roughness filename&nbsp;&nbsp;

- [00:42:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2559) in the textures folder. Keep its Non-Color&nbsp; interpretation when reconnecting it later.&nbsp;&nbsp;

- [00:42:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2564) The image’s gray appearance is a convenient way&nbsp; to view the values, not a request to turn the rock&nbsp;&nbsp;

- [00:42:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2570) itself gray. Return to Layout and move the area&nbsp; light across the receiver. Compare the painted&nbsp;&nbsp;

- [00:42:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2576) region with the remaining surface as the highlight&nbsp; travels. Higher roughness spreads the reflection,&nbsp;&nbsp;

- [00:43:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2582) so judge the actual highlight instead of inferring&nbsp; success from a saved filename. Select the area&nbsp;&nbsp;

- [00:43:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2589) light and move it across the receiver. Watch the&nbsp; reflection travel through the painted roughness&nbsp;&nbsp;

- [00:43:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2595) region and the surrounding surface. This moving&nbsp; highlight makes the difference easier to judge&nbsp;&nbsp;

- [00:43:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2601) than the image filename or a stationary view.&nbsp; Restore the light and frame the receiver again.&nbsp;&nbsp;

- [00:43:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2607) The base-color image, normal directions and&nbsp; roughness values now influence different parts&nbsp;&nbsp;

- [00:43:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2613) of 1 material. Keeping the lighting consistent&nbsp; makes those contributions easier to distinguish&nbsp;&nbsp;

- [00:43:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2619) during a connection check. Create the metallic&nbsp; image as a black image. This rock is a dielectric&nbsp;&nbsp;

- [00:43:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2625) surface, so 0 is the intended metallic value&nbsp; throughout. A uniform image is sufficient here;&nbsp;&nbsp;

- [00:43:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2630) complexity would not make the physical role more&nbsp; accurate. Save the black image beside the other&nbsp;&nbsp;

- [00:43:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2637) rock textures. It completes the map roles that&nbsp; this prop uses. Name the file for its metallic&nbsp;&nbsp;

- [00:44:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2644) role and preserve the pixels. A black metallic&nbsp; image and a black color image can look similar&nbsp;&nbsp;

- [00:44:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2651) in an editor, yet mean very different things.&nbsp; Their interpretation is established by the&nbsp;&nbsp;

- [00:44:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2656) material connection and the data settings.&nbsp; Add an Image Texture node for the metallic&nbsp;&nbsp;

- [00:44:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2662) map. This explicit branch documents the rock’s&nbsp; dielectric material choice alongside its other&nbsp;&nbsp;

- [00:44:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2667) maps. Enlarge the node so its image name and data&nbsp; interpretation are readable before connecting it.&nbsp;&nbsp;

- [00:44:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2676) Choose the metallic image and set its&nbsp; interpretation to Non-Color. The saved&nbsp;&nbsp;

- [00:44:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2680) black pixels represent 0 metallic response.&nbsp; Keeping this data setting explicit prevents a&nbsp;&nbsp;

- [00:44:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2687) later color-management change from altering the&nbsp; intended material values. Connect the 0-valued&nbsp;&nbsp;

- [00:44:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2693) metallic image to the Metallic input. The normal&nbsp; branch still passes through its interpreting node,&nbsp;&nbsp;

- [00:45:00](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2700) while roughness uses scalar data. Follow the graph&nbsp; by role so a misplaced image cannot hide behind a&nbsp;&nbsp;

- [00:45:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2707) plausible-looking filename. Reopen the base-color&nbsp; file from disk to verify the 1st map. A dependency&nbsp;&nbsp;

- [00:45:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2713) check should find real saved files, not images&nbsp; already loaded in memory. Open the rock base-color&nbsp;&nbsp;

- [00:45:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2721) image and inspect its earthy pattern. This is&nbsp; the color contribution captured without direct or&nbsp;&nbsp;

- [00:45:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2727) indirect lighting. The receiver’s shader can still&nbsp; respond to another light arrangement because that&nbsp;&nbsp;

- [00:45:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2733) illumination was not embedded in these pixels.&nbsp; Open the roughness file and inspect the painted&nbsp;&nbsp;

- [00:45:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2739) variation. Roughness stays separate from the&nbsp; color pattern. Choose the saved roughness image&nbsp;&nbsp;

- [00:45:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2746) and check the lighter region. This verifies the&nbsp; authored pixel file that supports the highlight&nbsp;&nbsp;

- [00:45:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2752) comparison. The map stays Non-Color when used&nbsp; by the material, preserving the intended numeric&nbsp;&nbsp;

- [00:45:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2759) interpretation of its channels. Open the metallic&nbsp; file to verify the uniform 0 map. A constant map&nbsp;&nbsp;

- [00:46:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2766) still documents the dielectric choice. Inspect&nbsp; the saved black metallic image. Its lack of a&nbsp;&nbsp;

- [00:46:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2773) decorative pattern is intentional. When debugging&nbsp; a texture set, judge whether a map supplies the&nbsp;&nbsp;

- [00:46:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2779) intended data rather than assuming that every&nbsp; nearly uniform image must have failed to generate.&nbsp;&nbsp;

- [00:46:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2786) Finally, reopen the normal image and inspect the&nbsp; directional pattern. This file belongs to the&nbsp;&nbsp;

- [00:46:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2791) receiving geometry. Choose the saved rock normal&nbsp; file and compare it with its distinct role. 4 map&nbsp;&nbsp;

- [00:46:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2799) types describe 4 contributions to the material.&nbsp; Their presence does not create multiple UV tiles;&nbsp;&nbsp;

- [00:46:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2805) this export prop still uses a single image&nbsp; tile for each role. Reveal the prepared&nbsp;&nbsp;

- [00:46:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2810) housing variation and its separate decal plane.&nbsp; The plane sits just in front of the surface,&nbsp;&nbsp;

- [00:46:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2817) leaving the original painted panel intact.&nbsp; This variation demonstrates an alpha-based&nbsp;&nbsp;

- [00:47:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2822) marking rather than changing the main label’s&nbsp; existing UV design. Reveal the decal plane and&nbsp;&nbsp;

- [00:47:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2829) frame it on the prepared housing. The small offset&nbsp; separates the surfaces without making the marking&nbsp;&nbsp;

- [00:47:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2836) appear detached. This geometry provides a clear&nbsp; place to inspect the difference between an opaque&nbsp;&nbsp;

- [00:47:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2842) background and an alpha-controlled mark. Select&nbsp; the decal plane and bring its relationship to the&nbsp;&nbsp;

- [00:47:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2849) housing into view. Its small separation prevents&nbsp; the surfaces from competing at the same depth.&nbsp;&nbsp;

- [00:47:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2855) The transparent portion should reveal the housing&nbsp; while the painted mark remains clearly visible.&nbsp;&nbsp;

- [00:47:41](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2861) Create a transparent image for the decal. Its&nbsp; blank background has 0 alpha, so unpainted regions&nbsp;&nbsp;

- [00:47:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2868) can remain invisible. This differs from the&nbsp; opaque background used by our main label, where&nbsp;&nbsp;

- [00:47:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2873) the entire panel was intended to carry color.&nbsp; Add an Image Texture node to the decal material.&nbsp;&nbsp;

- [00:48:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2882) This graph belongs to the separate marking plane.&nbsp; Enlarge the new node before assigning its image,&nbsp;&nbsp;

- [00:48:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2889) keeping the distinction between visible&nbsp; color and transparent background easy to&nbsp;&nbsp;

- [00:48:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2893) inspect. Choose the transparent decal image in the&nbsp; enlarged node. It belongs to this separate plane,&nbsp;&nbsp;

- [00:48:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2900) so the main station label remains intact. The&nbsp; node exposes color and alpha independently;&nbsp;&nbsp;

- [00:48:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2907) both contributions need their own connection.&nbsp; Connect Color to Base Color first. This&nbsp;&nbsp;

- [00:48:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2912) connection supplies the painted color values. The&nbsp; separate Alpha output will control which parts of&nbsp;&nbsp;

- [00:48:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2918) the plane remain visible, so keep both outputs&nbsp; available for the next connection. Connect Alpha&nbsp;&nbsp;

- [00:48:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2926) to the shader’s Alpha input. We are inspecting&nbsp; this study with Cycles, which evaluates this&nbsp;&nbsp;

- [00:48:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2931) transparency directly. Other engines and export&nbsp; destinations have their own transparency settings,&nbsp;&nbsp;

- [00:48:58](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2938) so verify the actual destination before&nbsp; assuming this appearance will carry over.&nbsp;&nbsp;

- [00:49:03](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2943) Select the decal image and enter Texture Paint.&nbsp; Choose the same navy accent used by the main&nbsp;&nbsp;

- [00:49:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2949) label. Keep the transparent background unfilled,&nbsp; because filling the entire image would remove the&nbsp;&nbsp;

- [00:49:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2956) empty regions that make this a decal. Paint a bold&nbsp; diagonal mark on the decal plane. The brush writes&nbsp;&nbsp;

- [00:49:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2963) visible color and opacity into its footprint while&nbsp; the untouched background remains transparent.&nbsp;&nbsp;

- [00:49:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2969) Inspect the housing behind the empty part of the&nbsp; image as well as the painted mark itself. Add the&nbsp;&nbsp;

- [00:49:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2977) 2nd stroke to make a compact angle symbol.&nbsp; A clear, simple mark makes the edge behavior&nbsp;&nbsp;

- [00:49:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2982) easier to inspect. The purpose of this variation&nbsp; is the relationship between color and alpha,&nbsp;&nbsp;

- [00:49:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2988) so extra decoration would make that evidence less&nbsp; clear. Save the decal image with its alpha channel&nbsp;&nbsp;

- [00:49:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=2995) intact. Correct wiring cannot recover transparency&nbsp; lost from the saved file. Save the station decal&nbsp;&nbsp;

- [00:50:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3002) as a PNG in the textures folder. Its transparent&nbsp; background is part of the authored result. Keep&nbsp;&nbsp;

- [00:50:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3008) this study separate from the single-tile rock&nbsp; texture set so the 2 demonstrations retain&nbsp;&nbsp;

- [00:50:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3014) their different purposes. Inspect the decal in&nbsp; Rendered mode using the actual scene engine.&nbsp;&nbsp;

- [00:50:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3020) Look for the housing through the unpainted regions&nbsp; and for clean boundaries around the strokes. This&nbsp;&nbsp;

- [00:50:26](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3026) is the evidence that the alpha connection and&nbsp; the saved image work together. Turn the view&nbsp;&nbsp;

- [00:50:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3032) slightly and inspect the edges again. The small&nbsp; separation between plane and housing avoids&nbsp;&nbsp;

- [00:50:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3038) coincident surfaces fighting for visibility. A&nbsp; decal remains geometry with placement decisions,&nbsp;&nbsp;

- [00:50:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3044) even when most of its image is transparent.&nbsp; Reveal the separate panel prepared for the&nbsp;&nbsp;

- [00:50:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3050) tiled-image study. Return to Material Preview&nbsp; and select this variation. The main label and&nbsp;&nbsp;

- [00:50:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3056) the rock keep their existing routes; this panel&nbsp; will demonstrate how coordinates can address&nbsp;&nbsp;

- [00:51:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3062) more than 1 numbered image tile. Hide the study&nbsp; housing and restore Material Preview for the next&nbsp;&nbsp;

- [00:51:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3068) variation. The decal remains saved with its image&nbsp; and material. Organizing these examples separately&nbsp;&nbsp;

- [00:51:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3075) keeps a change in image storage from accidentally&nbsp; becoming a change to the main label design. Reveal&nbsp;&nbsp;

- [00:51:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3082) and frame the tiled panel variation. Its&nbsp; geometry belongs to the same station family,&nbsp;&nbsp;

- [00:51:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3087) while its image will span neighboring regions of&nbsp; UV space. Keeping that connection visible helps&nbsp;&nbsp;

- [00:51:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3093) distinguish a storage demonstration&nbsp; from an unrelated modeling exercise.&nbsp;&nbsp;

- [00:51:39](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3099) Select the tiled panel and frame its faces before&nbsp; opening the image controls. This variation keeps&nbsp;&nbsp;

- [00:51:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3106) the familiar station form while changing how&nbsp; its pixels are organized. The geometry provides&nbsp;&nbsp;

- [00:51:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3112) a stable reference as we move between neighboring&nbsp; image regions. Make this panel’s checker material&nbsp;&nbsp;

- [00:51:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3119) a separate copy before editing it. A named tiled&nbsp; study prevents the shared comparison materials&nbsp;&nbsp;

- [00:52:06](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3126) from changing unexpectedly. The geometry is still&nbsp; a station panel, but its image organization will&nbsp;&nbsp;

- [00:52:12](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3132) differ from the single-tile label. Create a tiled&nbsp; color-grid image in UV Editing. The 1st tile is&nbsp;&nbsp;

- [00:52:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3139) numbered 1001. A generated grid gives us visible&nbsp; content for checking placement and reopening&nbsp;&nbsp;

- [00:52:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3145) without requiring another painted graphic or&nbsp; an external texture source. Add tile 1002 and&nbsp;&nbsp;

- [00:52:32](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3152) fill it with a color grid as well. This 2nd tile&nbsp; sits immediately to the right of the 1st in UV&nbsp;&nbsp;

- [00:52:38](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3158) space. Each tile has its own pixels, even though&nbsp; Blender presents them as 1 tiled image. Select the&nbsp;&nbsp;

- [00:52:45](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3165) panel faces and use Smart UV Project for this&nbsp; organization study. We already examined manual&nbsp;&nbsp;

- [00:52:52](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3172) seam design on the main label. Here the important&nbsp; change is where an island is placed relative to&nbsp;&nbsp;

- [00:52:58](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3178) the numbered image tiles. Turn to the back face&nbsp; and select its island with synchronization off.&nbsp;&nbsp;

- [00:53:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3184) Move that island 1 full tile to the right. The&nbsp; other faces stay in the 1st tile, while this face&nbsp;&nbsp;

- [00:53:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3191) now addresses the 2nd tile’s separate pixel data.&nbsp; Select all faces again and frame the complete&nbsp;&nbsp;

- [00:53:18](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3198) layout. Inspect the islands across the 2 numbered&nbsp; tiles. This is an organization choice for image&nbsp;&nbsp;

- [00:53:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3203) storage; it does not replace the need for sensible&nbsp; proportions, padding or an appropriate material&nbsp;&nbsp;

- [00:53:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3209) connection. Save the tiled image using Blender’s&nbsp; UDIM token in the filename. That token becomes the&nbsp;&nbsp;

- [00:53:36](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3216) tile number in each saved file. Save the station&nbsp; tiles into the same textures folder. Blender&nbsp;&nbsp;

- [00:53:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3223) writes a file for each populated tile using its&nbsp; number. The recognizable naming pattern makes the&nbsp;&nbsp;

- [00:53:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3230) set discoverable when it is reopened as 1 tiled&nbsp; image. Reopen the 1st numbered file through the&nbsp;&nbsp;

- [00:53:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3237) image browser. Blender finds the neighboring tile&nbsp; files itself. Choose the 1st station tile and&nbsp;&nbsp;

- [00:54:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3244) verify that both tiles return. The tiled image&nbsp; now refers to the saved files instead of only&nbsp;&nbsp;

- [00:54:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3251) generated pixels in memory. This completes the&nbsp; file responsibility that belongs to the 2-tile&nbsp;&nbsp;

- [00:54:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3256) variation. Return to the material and point its&nbsp; checker image node at the tiled image. The UV&nbsp;&nbsp;

- [00:54:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3263) coordinates select which numbered tile supplies&nbsp; a face. Inspect the front and back after this&nbsp;&nbsp;

- [00:54:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3269) connection so the organization is demonstrated on&nbsp; the actual geometry. Turn the panel and inspect&nbsp;&nbsp;

- [00:54:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3275) the 2nd tile’s face. A texture set names material&nbsp; roles such as color, roughness and normal,&nbsp;&nbsp;

- [00:54:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3282) while UDIM names a tiled storage layout. These&nbsp; concepts can be combined, but neither word is&nbsp;&nbsp;

- [00:54:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3288) a synonym for the other. Keep the course rock on&nbsp; its single-tile route for the later GLB lesson. A&nbsp;&nbsp;

- [00:54:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3295) destination must support the chosen tiled workflow&nbsp; before it becomes an exchange solution. Our saved&nbsp;&nbsp;

- [00:55:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3302) UDIM variation teaches organization without making&nbsp; an unsupported promise about every exporter. Hide&nbsp;&nbsp;

- [00:55:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3308) the tiled variation and return to the station lid.&nbsp; Its earlier seam marked the start of a different&nbsp;&nbsp;

- [00:55:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3314) unfolding problem. We will finish this shallow&nbsp; cover using the same reasoning, while letting its&nbsp;&nbsp;

- [00:55:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3321) proportions determine the useful island shapes.&nbsp; Select the shallow lid, frame it and apply its&nbsp;&nbsp;

- [00:55:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3327) scale. This preserves its visible proportions&nbsp; while preparing a useful basis for the unwrap. The&nbsp;&nbsp;

- [00:55:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3333) lid needs its own island shapes, even though the&nbsp; seam reasoning follows the earlier panel example.&nbsp;&nbsp;

- [00:55:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3342) Make the lid material independent and add a&nbsp; checker image node. This temporary-looking&nbsp;&nbsp;

- [00:55:47](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3347) diagnostic is a saved study of the actual cover,&nbsp; not an unrelated primitive. Its broad face and&nbsp;&nbsp;

- [00:55:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3353) narrow sides give us another useful test of&nbsp; density and distortion. Choose the prepared&nbsp;&nbsp;

- [00:56:01](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3361) checker and connect it to Base Color. The&nbsp; familiar pattern makes changes in proportion&nbsp;&nbsp;

- [00:56:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3367) visible. We are reusing the same diagnostic&nbsp; image, so differences between the lid and the&nbsp;&nbsp;

- [00:56:13](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3373) panel can be attributed to their coordinates&nbsp; and geometry. Return to UV Editing and select&nbsp;&nbsp;

- [00:56:19](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3379) the front perimeter of the lid. Its seam sits at&nbsp; a physical boundary, keeping the broad surface&nbsp;&nbsp;

- [00:56:25](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3385) continuous. This is the same design principle&nbsp; used by the label, applied to a much shallower&nbsp;&nbsp;

- [00:56:30](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3390) form. Select the upper and lower edges around the&nbsp; front surface of the lid. These boundaries belong&nbsp;&nbsp;

- [00:56:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3397) to the physical shape. Keeping the seam on that&nbsp; border preserves a continuous broad region for the&nbsp;&nbsp;

- [00:56:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3403) image while letting its narrow sides unfold. Add&nbsp; the 2 remaining front edges and mark the complete&nbsp;&nbsp;

- [00:56:50](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3410) boundary. Several valid layouts could unfold&nbsp; this cover. We will judge this choice through&nbsp;&nbsp;

- [00:56:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3416) checker proportions and useful image space, rather&nbsp; than treating its island orientation as the only&nbsp;&nbsp;

- [00:57:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3422) correct answer. Turn to the back and select its&nbsp; upper and lower boundaries. The thin side strip&nbsp;&nbsp;

- [00:57:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3428) needs room to unfold between the front and rear&nbsp; faces. Keeping those regions understandable makes&nbsp;&nbsp;

- [00:57:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3435) later painting or material variation easier to&nbsp; place deliberately. Complete the back perimeter&nbsp;&nbsp;

- [00:57:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3441) and mark it. This separates the rear face while&nbsp; preserving the actual mesh connections. A UV seam&nbsp;&nbsp;

- [00:57:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3448) changes the flat representation used for sampling;&nbsp; it does not automatically create a visible crack&nbsp;&nbsp;

- [00:57:34](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3454) in the modeled cover. Open the side strip at an&nbsp; upper corner, then select the faces. The corner&nbsp;&nbsp;

- [00:57:40](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3460) cut gives the surrounding ring somewhere to&nbsp; unfold. Its placement favors a less conspicuous&nbsp;&nbsp;

- [00:57:46](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3466) boundary, leaving the large face available for&nbsp; a continuous surface treatment. Unwrap the lid&nbsp;&nbsp;

- [00:57:53](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3473) and average its island scale. Compare the broad&nbsp; face with the thin side regions before packing.&nbsp;&nbsp;

- [00:57:59](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3479) Their physical proportions differ from the panel,&nbsp; so the resulting layout should reflect the cover&nbsp;&nbsp;

- [00:58:05](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3485) we are actually working on. Pack the islands with&nbsp; visible separation and frame the result. Inspect&nbsp;&nbsp;

- [00:58:11](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3491) the checker on the lid at a useful viewing&nbsp; distance. The operation is complete when the&nbsp;&nbsp;

- [00:58:17](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3497) layout serves the surface, rather than merely&nbsp; when the unwrap command finishes without an error.&nbsp;&nbsp;

- [00:58:23](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3503) Return to the main label material and inspect&nbsp; its image connection. The panel, UV coordinates,&nbsp;&nbsp;

- [00:58:29](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3509) saved pixels and shader still form the same 4-part&nbsp; contract. A missing wire can break the visible&nbsp;&nbsp;

- [00:58:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3515) result even when all the external files are&nbsp; present. Disconnect Base Color briefly to isolate&nbsp;&nbsp;

- [00:58:44](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3524) the role of that input. The authored image remains&nbsp; available in the node, but no longer supplies this&nbsp;&nbsp;

- [00:58:51](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3531) socket. This separates a connection problem from&nbsp; a missing-file problem or an incorrectly painted&nbsp;&nbsp;

- [00:58:57](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3537) target. Reconnect the label image’s Color output&nbsp; to Base Color and inspect the result. The graphic&nbsp;&nbsp;

- [00:59:04](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3544) returns through the intended material input. We&nbsp; have restored the connection directly, without&nbsp;&nbsp;

- [00:59:09](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3549) recreating the image or changing the coordinate&nbsp; layout. Select the low rock and trace its normal&nbsp;&nbsp;

- [00:59:16](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3556) branch again. Non-Color image data feeds the&nbsp; Normal Map node, then the interpreted normal feeds&nbsp;&nbsp;

- [00:59:22](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3562) the shader. The high source stays hidden so the&nbsp; visible detail belongs to the evaluated receiver.&nbsp;&nbsp;

- [00:59:31](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3571) Disconnect the shader’s Normal input for 1 final&nbsp; bypass comparison. The image and interpreting node&nbsp;&nbsp;

- [00:59:37](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3577) remain intact, but the receiver no longer uses&nbsp; their directional output. Its silhouette and saved&nbsp;&nbsp;

- [00:59:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3583) base-color pattern remain useful reference&nbsp; points during this change. Reconnect the&nbsp;&nbsp;

- [00:59:49](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3589) interpreted Normal output and inspect the restored&nbsp; relief. Keep the low mesh and its triangulation&nbsp;&nbsp;

- [00:59:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3596) assumptions with this map. A later geometry change&nbsp; can require another bake, even when the original&nbsp;&nbsp;

- [01:00:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3602) image remains perfectly readable on disk. Return&nbsp; to Layout and hide the procedural comparison rock.&nbsp;&nbsp;

- [01:00:08](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3608) The production receiver remains the single-tile&nbsp; asset, while named source and study objects stay&nbsp;&nbsp;

- [01:00:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3615) available separately. This keeps the final scene&nbsp; readable without discarding the evidence used&nbsp;&nbsp;

- [01:00:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3621) for our comparisons. Disable the procedural&nbsp; study for rendering and return to the main&nbsp;&nbsp;

- [01:00:27](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3627) panel. The comparison remains available in the&nbsp; project, but the final station uses the intended&nbsp;&nbsp;

- [01:00:33](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3633) production objects. Clear separation of studies&nbsp; and finished assets makes later inspection easier.&nbsp;&nbsp;

- [01:00:43](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3643) Save the final scene into the course blend&nbsp; folder. Pixels, paths and materials are 3&nbsp;&nbsp;

- [01:00:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3648) separate responsibilities. Use the final station&nbsp; filename for the completed texture workflow. This&nbsp;&nbsp;

- [01:00:56](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3656) version includes the label, cover layout, receiver&nbsp; maps and the saved variations. The high source&nbsp;&nbsp;

- [01:01:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3662) and editable backup remain separate assets,&nbsp; preserving the assumptions needed to explain&nbsp;&nbsp;

- [01:01:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3667) or revise the result. Open the saved scene again&nbsp; through the file browser. Reopening replaces the&nbsp;&nbsp;

- [01:01:15](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3675) scene you were editing. Choose the final station&nbsp; scene from the course folder. After it loads,&nbsp;&nbsp;

- [01:01:21](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3681) inspect the label and the receiver to confirm that&nbsp; the images resolve and the material connections&nbsp;&nbsp;

- [01:01:28](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3688) survived. Frame the housing, label and low&nbsp; rock together. The checker-tested layout,&nbsp;&nbsp;

- [01:01:35](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3695) authored graphic and baked relief now belong&nbsp; to 1 continuing station. Inspect the label at&nbsp;&nbsp;

- [01:01:42](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3702) its intended viewing size, then examine the low&nbsp; rock. Clear coordinates and correct data make&nbsp;&nbsp;

- [01:01:48](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3708) both results useful. Preview the next lesson by&nbsp; moving the area light across the textured scene.&nbsp;&nbsp;

- [01:01:55](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3715) The saved surface information stays attached&nbsp; to the objects while highlights and shadows&nbsp;&nbsp;

- [01:02:02](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3722) change. A reliable texture pipeline gives us&nbsp; a stable foundation for making those lighting&nbsp;&nbsp;

- [01:02:07](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3727) decisions. Return the light to the saved baseline&nbsp; and inspect the station once more. We have kept&nbsp;&nbsp;

- [01:02:14](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3734) the creative marks, the receiving geometry and&nbsp; the external files understandable. Next time,&nbsp;&nbsp;

- [01:02:20](https://www.youtube.com/watch?v=SHUYYPLoz8M&t=3740) those dependable surfaces will help&nbsp; us shape the scene through lighting.
