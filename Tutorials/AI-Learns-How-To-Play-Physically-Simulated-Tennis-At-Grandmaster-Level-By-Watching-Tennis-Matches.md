# AI Learns How To Play Physically Simulated Tennis At Grandmaster Level By Watching Tennis Matches

## Full tutorial link > https://www.youtube.com/watch?v=m8W4l-peEBk

[![AI Learns How To Play Physically Simulated Tennis At Grandmaster Level By Watching Tennis Matches](https://img.youtube.com/vi/m8W4l-peEBk/sddefault.jpg)](https://www.youtube.com/watch?v=m8W4l-peEBk "AI Learns How To Play Physically Simulated Tennis At Grandmaster Level By Watching Tennis Matches")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/AI-Learns-How-To-Play-Physically-Simulated-Tennis-At-Grandmaster-Level-By-Watching-Tennis-Matches.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/AI-Learns-How-To-Play-Physically-Simulated-Tennis-At-Grandmaster-Level-By-Watching-Tennis-Matches.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


A system has been developed that can learn a range of physically simulated tennis skills from a vast collection of broadcast video demonstrations of tennis play. The system employs hierarchical models that combine a low-level imitation policy and a high-level motion planning policy to control the character's movements based on motion embeddings learned from the broadcast videos. By utilizing simple rewards and without the need for explicit annotations of stroke types, the system is capable of learning complex tennis shotmaking skills and stringing together multiple shots into extended rallies.

To account for the low quality of motions extracted from the broadcast videos, the system utilizes physics-based imitation to correct estimated motion and a hybrid control policy that overrides erroneous aspects of the learned motion embedding with corrections predicted by the high-level policy. The resulting controllers for physically-simulated tennis players are able to hit the incoming ball to target positions accurately using a diverse array of strokes (such as serves, forehands, and backhands), spins (including topspins and slices), and playing styles (such as one/two-handed backhands and left/right-handed play).

Overall, the system is able to synthesize two physically simulated characters playing extended tennis rallies with simulated racket and ball dynamics, demonstrating the effectiveness of the approach.

Paper link ⤵️

[https://research.nvidia.com/labs/toronto-ai/vid2player3d/](https://research.nvidia.com/labs/toronto-ai/vid2player3d/)

Our Discord server ⤵️

[https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 ⤵️

[https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology & Science: News, Tips, Tutorials, Tricks, Best Applications, Guides, Reviews ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Playlist of StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

[00:00:00](https://youtu.be/m8W4l-peEBk?t=0) Introduction to amazing new AI technology that can learn playing tennis

[00:00:18](https://youtu.be/m8W4l-peEBk?t=18) The permission to upload video

[00:00:26](https://youtu.be/m8W4l-peEBk?t=26) The video of the paper starts with introduction

[00:01:08](https://youtu.be/m8W4l-peEBk?t=68) Motion capture has been the most common source of motion data for character animation

[00:02:13](https://youtu.be/m8W4l-peEBk?t=133) System Overview

[00:03:07](https://youtu.be/m8W4l-peEBk?t=187) Approach

[00:05:00](https://youtu.be/m8W4l-peEBk?t=300) Complex and Diverse Skills

[00:06:05](https://youtu.be/m8W4l-peEBk?t=365) Task Performance

[00:06:46](https://youtu.be/m8W4l-peEBk?t=406) Styles from Different Players

[00:07:16](https://youtu.be/m8W4l-peEBk?t=436) Two-Player Rallies

[00:08:13](https://youtu.be/m8W4l-peEBk?t=493) Ablation of Physics Correction

[00:08:36](https://youtu.be/m8W4l-peEBk?t=516) Ablation of Hybrid Control

[00:08:58](https://youtu.be/m8W4l-peEBk?t=538) Effects of Removing Residual Force Control

Computer animation faces a major challenge in developing controllers for physics-based character simulation and control. In recent years, a combination of deep reinforcement learning (DRL) and motion imitation techniques has yielded simulated characters with lifelike motions and athletic abilities. However, these systems typically rely on costly motion capture (mocap) data as a source of kinematic motions to imitate. Fortunately, video footage of athletic events is abundant and offers a rich source of in-activity motion data. This inspired a research paper by Zhang et al. that explores how video data can be leveraged to learn tennis skills.

The authors seek to answer several key questions, including how to use large-scale video databases of 3D tennis motion to produce controllers that can play full tennis rallies with simulated racket and ball dynamics, how to use state-of-the-art methods in data-driven and physically-based character animation to learn skills from video data, and how to learn character controllers with a diverse set of skills without explicit skill annotations.

To tackle these challenges, the authors propose a system that builds upon recent ideas in hierarchical physics-based character control. Their approach involves leveraging motions produced by physics-based imitation of example videos to learn a rich motion embedding for tennis actions. They then train a high-level motion controller that steers the character in the latent motion space to achieve higher-level task objectives, with low-level movements controlled by the imitation controller.

The system also addresses motion quality issues caused by perception errors in the learned motion embedding.

@article{

zhang2023vid2player3d,

author = {Zhang, Haotian and Yuan, Ye and Makoviychuk, Viktor and Guo, Yunrong and Fidler, Sanja and Peng, Xue Bin and Fatahalian, Kayvon},

title = {Learning Physically Simulated Tennis Skills from Broadcast Videos},

journal = {ACM Trans. Graph.},

issue_date = {August 2023},

numpages = {14},

doi = {10.1145/3592408},

publisher = {ACM},

address = {New York, NY, USA},

keywords = {physics-based character animation, imitation learning, reinforcement learning},

}



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=m8W4l-peEBk&t=0) Greetings everyone. A group of brilliant&nbsp; researchers has recently published a new&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=m8W4l-peEBk&t=5) research paper that enables AI to learn physically&nbsp; simulated tennis skills from broadcast videos.&nbsp;&nbsp;

- [00:00:11](https://www.youtube.com/watch?v=m8W4l-peEBk&t=11) Today I am excited to share their paper's amazing&nbsp; supplementary video in 4K super upscaled format. I&nbsp;&nbsp;

- [00:00:18](https://www.youtube.com/watch?v=m8W4l-peEBk&t=18) have obtained permission from the primary author&nbsp; of the paper and you can also find the link to&nbsp;&nbsp;

- [00:00:24](https://www.youtube.com/watch?v=m8W4l-peEBk&t=24) the paper in the video's description. In this&nbsp; paper, we present a system that allows physically&nbsp;&nbsp;

- [00:00:29](https://www.youtube.com/watch?v=m8W4l-peEBk&t=29) simulated characters to learn diverse and complex&nbsp; tennis skills from broadcast tennis videos.&nbsp;&nbsp;

- [00:00:37](https://www.youtube.com/watch?v=m8W4l-peEBk&t=37) Our simulated characters can hit&nbsp; consecutive incoming tennis balls&nbsp;&nbsp;

- [00:00:41](https://www.youtube.com/watch?v=m8W4l-peEBk&t=41) with a variety of tennis skills such as serve,&nbsp; forehand and backhand, topspin, and slice.&nbsp;&nbsp;

- [00:00:49](https://www.youtube.com/watch?v=m8W4l-peEBk&t=49) And the motions we generate resemble those of&nbsp; human players. The controllers can also be trained&nbsp;&nbsp;

- [00:00:55](https://www.youtube.com/watch?v=m8W4l-peEBk&t=55) using different players motion data, enabling&nbsp; the characters to adopt different playing styles.&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=m8W4l-peEBk&t=68) Motion capture has been the most common source&nbsp; of motion data for character animation. While&nbsp;&nbsp;

- [00:01:13](https://www.youtube.com/watch?v=m8W4l-peEBk&t=73) MoCap is able to record high-quality data, it&nbsp; can be difficult to use these systems to record&nbsp;&nbsp;

- [00:01:18](https://www.youtube.com/watch?v=m8W4l-peEBk&t=78) athletic motion, which can require large&nbsp; capture volumes and highly skilled actors.&nbsp;&nbsp;

- [00:01:25](https://www.youtube.com/watch?v=m8W4l-peEBk&t=85) On the other hand, human athletes are frequently&nbsp; recorded in videos, especially for sports. These&nbsp;&nbsp;

- [00:01:32](https://www.youtube.com/watch?v=m8W4l-peEBk&t=92) videos have the potential to be a valuable&nbsp; source of data for character animation by&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=m8W4l-peEBk&t=97) providing a vast volume of inactivity data of a&nbsp; highly specialized athletic motion. Despite being&nbsp;&nbsp;

- [00:01:44](https://www.youtube.com/watch?v=m8W4l-peEBk&t=104) large scale, the motion estimated from videos are&nbsp; usually in lower quality compared to mocap data.&nbsp;&nbsp;

- [00:01:51](https://www.youtube.com/watch?v=m8W4l-peEBk&t=111) While prior works have demonstrated&nbsp; learning skills from videos,&nbsp;&nbsp;

- [00:01:55](https://www.youtube.com/watch?v=m8W4l-peEBk&t=115) they are limited to reproducing short video clips.&nbsp; State-of-the-art, data-driven animation techniques&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=m8W4l-peEBk&t=122) typically require high-quality motion data.&nbsp; Directly applying these methods to video data&nbsp;&nbsp;

- [00:02:08](https://www.youtube.com/watch?v=m8W4l-peEBk&t=128) may not produce natural human-like motions,&nbsp; and motions may not be precise enough to hit&nbsp;&nbsp;

- [00:02:13](https://www.youtube.com/watch?v=m8W4l-peEBk&t=133) incoming tennis balls close to desired&nbsp; locations. To enable characters to learn&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=m8W4l-peEBk&t=139) skills from sports videos, we present a video&nbsp; imitation system that consists of four stages.&nbsp;&nbsp;

- [00:02:27](https://www.youtube.com/watch?v=m8W4l-peEBk&t=147) First, we estimate kinematic motions from source&nbsp; video clips. Secondly, a low-level imitation&nbsp;&nbsp;

- [00:02:34](https://www.youtube.com/watch?v=m8W4l-peEBk&t=154) policy is trained to imitate the kinematic&nbsp; motion for controlling the low-level behaviors&nbsp;&nbsp;

- [00:02:39](https://www.youtube.com/watch?v=m8W4l-peEBk&t=159) of the simulated character and generate physically&nbsp; corrected motion. Next, we fit conditional VAEs to&nbsp;&nbsp;

- [00:02:47](https://www.youtube.com/watch?v=m8W4l-peEBk&t=167) the corrected motion to learn a motion embedding&nbsp; that produces human-like tennis motions. Finally,&nbsp;&nbsp;

- [00:02:54](https://www.youtube.com/watch?v=m8W4l-peEBk&t=174) a high-level motion planning policy is trained&nbsp; to generate target kinematic motion from the&nbsp;&nbsp;

- [00:02:59](https://www.youtube.com/watch?v=m8W4l-peEBk&t=179) motion embedding, and then control a physically&nbsp; simulated character to perform a desired task.&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=m8W4l-peEBk&t=189) To build our tennis motion data set from&nbsp; raw videos, we use a combination of 2D and&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=m8W4l-peEBk&t=195) 3D pose estimators to reconstruct the&nbsp; player's poses and route trajectories.&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=m8W4l-peEBk&t=203) However, the estimated kinematic motions&nbsp; are pretty noisy, with jittering and foot&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=m8W4l-peEBk&t=208) skating artifacts. More importantly, the wrist&nbsp; motion for controlling the racket is inaccurate,&nbsp;&nbsp;

- [00:03:36](https://www.youtube.com/watch?v=m8W4l-peEBk&t=216) since it is difficult to estimate the wrist or the&nbsp; racket motion due to occlusion and motion blur.&nbsp;&nbsp;

- [00:03:47](https://www.youtube.com/watch?v=m8W4l-peEBk&t=227) To address these artifacts, we train a low-level&nbsp; imitation policy to control a physically&nbsp;&nbsp;

- [00:03:54](https://www.youtube.com/watch?v=m8W4l-peEBk&t=234) simulated character to track these noisy kinematic&nbsp; motions and output physically corrected motions.&nbsp;&nbsp;

- [00:04:01](https://www.youtube.com/watch?v=m8W4l-peEBk&t=241) The resulting motions after correction are more&nbsp; physically plausible and stable compared to the&nbsp;&nbsp;

- [00:04:06](https://www.youtube.com/watch?v=m8W4l-peEBk&t=246) original kinematic motions. With the corrected&nbsp; motion dataset, we can construct a kinematic&nbsp;&nbsp;

- [00:04:14](https://www.youtube.com/watch?v=m8W4l-peEBk&t=254) motion embedding by fitting conditional VAEs to&nbsp; the motion data. Given the same initial pose,&nbsp;&nbsp;

- [00:04:21](https://www.youtube.com/watch?v=m8W4l-peEBk&t=261) diverse motions can be generated by&nbsp; sampling different trajectories of latency.&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=m8W4l-peEBk&t=269) An additional benefit of the&nbsp; motion embedding is that it can&nbsp;&nbsp;

- [00:04:32](https://www.youtube.com/watch?v=m8W4l-peEBk&t=272) help smooth the motions and mitigate some of the&nbsp; jittering artifacts in the original motion data.&nbsp;&nbsp;

- [00:04:43](https://www.youtube.com/watch?v=m8W4l-peEBk&t=283) To address the inaccuracies in the wrist joint for&nbsp; precise control of the racket, we propose a hybrid&nbsp;&nbsp;

- [00:04:48](https://www.youtube.com/watch?v=m8W4l-peEBk&t=288) control structure where the full body motion&nbsp; is controlled by the reference trajectories&nbsp;&nbsp;

- [00:04:53](https://www.youtube.com/watch?v=m8W4l-peEBk&t=293) from the motion embedding, while the wrist motion&nbsp; is directly controlled by the high-level policy.&nbsp;&nbsp;

- [00:05:03](https://www.youtube.com/watch?v=m8W4l-peEBk&t=303) With our system, various tennis&nbsp; skills can be learned such as serve,&nbsp;&nbsp;

- [00:05:07](https://www.youtube.com/watch?v=m8W4l-peEBk&t=307) forehand topspin, backhand topspin,&nbsp; and backhand slice. These skills are&nbsp;&nbsp;

- [00:05:15](https://www.youtube.com/watch?v=m8W4l-peEBk&t=315) learned using data from a right-handed&nbsp; player who used a one-handed backhand.&nbsp;&nbsp;

- [00:05:27](https://www.youtube.com/watch?v=m8W4l-peEBk&t=327) The simulated character can hit fast-coming&nbsp; tennis balls with diverse and complex skills.&nbsp;&nbsp;

- [00:05:38](https://www.youtube.com/watch?v=m8W4l-peEBk&t=338) When given a target spin direction,&nbsp;&nbsp;

- [00:05:40](https://www.youtube.com/watch?v=m8W4l-peEBk&t=340) such as a backspin, the character&nbsp; will hit the ball with a slice.&nbsp;&nbsp;

- [00:05:50](https://www.youtube.com/watch?v=m8W4l-peEBk&t=350) Here we visualize the skills with the&nbsp; character model used in our physics simulation.&nbsp;&nbsp;

- [00:06:09](https://www.youtube.com/watch?v=m8W4l-peEBk&t=369) The simulated characters can hit incoming tennis&nbsp; balls close to random target locations with high&nbsp;&nbsp;

- [00:06:15](https://www.youtube.com/watch?v=m8W4l-peEBk&t=375) precision. They can hit the same incoming&nbsp; tennis ball to various target locations,&nbsp;&nbsp;

- [00:06:25](https://www.youtube.com/watch?v=m8W4l-peEBk&t=385) or hit different incoming&nbsp; tennis balls to the same target.&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=m8W4l-peEBk&t=391) In the extreme cases, the simulated characters can&nbsp; still complete the task with exceptional skill,&nbsp;&nbsp;

- [00:06:37](https://www.youtube.com/watch?v=m8W4l-peEBk&t=397) such as hitting consecutive balls that land on&nbsp; the court edges. When constructing the motion&nbsp;&nbsp;

- [00:06:44](https://www.youtube.com/watch?v=m8W4l-peEBk&t=404) embedding with different players' motion, the&nbsp; simulated character can learn tennis skills in&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=m8W4l-peEBk&t=413) different styles, such as a two-hand backhand&nbsp; swing learned using data from a right-handed&nbsp;&nbsp;

- [00:06:58](https://www.youtube.com/watch?v=m8W4l-peEBk&t=418) player who used a two-hand backhand,&nbsp; or holding the racket with the left&nbsp;&nbsp;

- [00:07:04](https://www.youtube.com/watch?v=m8W4l-peEBk&t=424) hand learned using data from a left-handed&nbsp; player who also used a two-hand backhand.&nbsp;&nbsp;

- [00:07:18](https://www.youtube.com/watch?v=m8W4l-peEBk&t=438) The learned controllers can further generate novel&nbsp; animations of tennis rallies between two players.&nbsp;&nbsp;

- [00:07:26](https://www.youtube.com/watch?v=m8W4l-peEBk&t=446) This rally is generated using controllers&nbsp; learned from two right-handed players.&nbsp;&nbsp;

- [00:07:42](https://www.youtube.com/watch?v=m8W4l-peEBk&t=462) This rally is generated using controllers learned&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=m8W4l-peEBk&t=465) from a left-handed player&nbsp; and a right-handed player.&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=m8W4l-peEBk&t=492) The physics correction is essential for&nbsp; constructing a good motion embedding for&nbsp;&nbsp;

- [00:08:16](https://www.youtube.com/watch?v=m8W4l-peEBk&t=496) generating natural tennis motions. Directly&nbsp; training the embedding from the uncorrected&nbsp;&nbsp;

- [00:08:21](https://www.youtube.com/watch?v=m8W4l-peEBk&t=501) kinematic motions will result in physically&nbsp; implausible motion that exhibits artifacts&nbsp;&nbsp;

- [00:08:27](https://www.youtube.com/watch?v=m8W4l-peEBk&t=507) such as foot skating and jittering. It also&nbsp; decreases precision when hitting the tennis balls.&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=m8W4l-peEBk&t=515) The proposed hybrid control is&nbsp; crucial for precisely controlling&nbsp;&nbsp;

- [00:08:39](https://www.youtube.com/watch?v=m8W4l-peEBk&t=519) the tennis racket. Without the hybrid&nbsp; control to correct the wrist motions,&nbsp;&nbsp;

- [00:08:43](https://www.youtube.com/watch?v=m8W4l-peEBk&t=523) the simulated character may hit the ball,&nbsp; but fail to return it close to the target.&nbsp;&nbsp;

- [00:09:20](https://www.youtube.com/watch?v=m8W4l-peEBk&t=560) More details are available in the&nbsp; paper. Thank you for watching.
