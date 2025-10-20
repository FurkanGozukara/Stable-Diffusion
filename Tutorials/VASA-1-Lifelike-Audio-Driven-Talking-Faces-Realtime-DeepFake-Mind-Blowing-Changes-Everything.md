# VASA-1: Lifelike Audio-Driven Talking Faces - Realtime DeepFake - Mind Blowing - Changes Everything

## Full tutorial link > https://www.youtube.com/watch?v=nQ1EuRF5x30

[![VASA-1: Lifelike Audio-Driven Talking Faces - Realtime DeepFake - Mind Blowing - Changes Everything](https://img.youtube.com/vi/nQ1EuRF5x30/sddefault.jpg)](https://www.youtube.com/watch?v=nQ1EuRF5x30 "VASA-1: Lifelike Audio-Driven Talking Faces - Realtime DeepFake - Mind Blowing - Changes Everything")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/VASA-1-Lifelike-Audio-Driven-Talking-Faces-Realtime-DeepFake-Mind-Blowing-Changes-Everything.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/VASA-1-Lifelike-Audio-Driven-Talking-Faces-Realtime-DeepFake-Mind-Blowing-Changes-Everything.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


VASA-1: Lifelike Audio-Driven Talking Faces Generated in Real Time. TL;DR: single portrait photo + speech audio = hyper-realistic talking face video with precise lip-audio sync, lifelike facial behavior, and naturalistic head movements, generated in real time.

Abstract

Microsoft introduce VASA, a framework for generating lifelike talking faces of virtual characters with appealing visual affective skills (VAS), given a single static image and a speech audio clip. Microsoft's premiere model, VASA-1, is capable of not only producing lip movements that are exquisitely synchronized with the audio, but also capturing a large spectrum of facial nuances and natural head motions that contribute to the perception of authenticity and liveliness. The core innovations include a holistic facial dynamics and head movement generation model that works in a face latent space, and the development of such an expressive and disentangled face latent space using videos. Through extensive experiments including evaluation on a set of new metrics, Microsoft shows that Microsoft's method significantly outperforms previous methods along various dimensions comprehensively. Microsoft's method not only delivers high video quality with realistic facial and head dynamics but also supports the online generation of 512x512 videos at up to 40 FPS with negligible starting latency. It paves the way for real-time engagements with lifelike avatars that emulate human conversational behaviors.

Official Website : [https://www.microsoft.com/en-us/research/project/vasa-1/](https://www.microsoft.com/en-us/research/project/vasa-1/)

Paper Link : [https://arxiv.org/pdf/2404.10667.pdf](https://arxiv.org/pdf/2404.10667.pdf)

Risks and responsible AI considerations

Microsoft's research focuses on generating visual affective skills for virtual AI avatars, aiming for positive applications. It is not intended to create content that is used to mislead or deceive. However, like other related content generation techniques, it could still potentially be misused for impersonating humans. Microsoft is opposed to any behavior to create misleading or harmful contents of real persons, and are interested in applying Microsoft's technique for advancing forgery detection. Currently, the videos generated by this method still contain identifiable artifacts, and the numerical analysis shows that there's still a gap to achieve the authenticity of real videos.

While acknowledging the possibility of misuse, it's imperative to recognize the substantial positive potential of Microsoft's technique. The benefits – ranging from enhancing educational equity, improving accessibility for individuals with communication challenges, and offering companionship or therapeutic support to those in need – underscore the importance of Microsoft's research and other related explorations. Microsoft is dedicated to developing AI responsibly, with the goal of advancing human well-being.

Microsoft have no plans to release an online demo, API, product, additional implementation details, or any related offerings until Microsoft is certain that the technology will be used responsibly and in accordance with proper regulations.



### Video Transcription


- [00:00:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=3) yo I'm a Paparazzi I don't play no yachi I

- [00:00:04](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=4) I go my cameras will prevent those

- [00:00:07](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=7) go my cameras will prevent those cavities from getting worse and prevent

- [00:00:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=10) cavities from getting worse and prevent new cavities I'm not surprised not

- [00:00:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=14) new cavities I'm not surprised not everything last you stand up all the

- [00:00:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=16) everything last you stand up all the time I'm a standup comedian improviser

- [00:00:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=18) time I'm a standup comedian improviser by trade you had me on one of the most

- [00:00:20](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=20) by trade you had me on one of the most fun experiences of my life as I was on

- [00:00:22](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=22) fun experiences of my life as I was on the show in Chicago and I attempted to

- [00:00:24](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=24) the show in Chicago and I attempted to eat two Italian beef sandwiches in under

- [00:00:26](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=26) eat two Italian beef sandwiches in under a minute I would say that we as readers

- [00:00:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=28) a minute I would say that we as readers are not meant to look at him in any

- [00:00:31](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=31) are not meant to look at him in any other way but with disdain especially in

- [00:00:33](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=33) other way but with disdain especially in how he treats um but you can imagine I

- [00:00:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=35) how he treats um but you can imagine I have a lot of questions so um I'd love

- [00:00:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=39) have a lot of questions so um I'd love to begin with you firstly just because I

- [00:00:41](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=41) to begin with you firstly just because I I read that you started out in

- [00:00:48](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=48) advertising but you know what I decided to do I decided to focus I just listened

- [00:00:53](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=53) to do I decided to focus I just listened listened and we introduce Vasa a

- [00:00:56](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=56) listened and we introduce Vasa a framework for generating lifelike

- [00:00:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=58) framework for generating lifelike talking faces yes these videos that we

- [00:01:01](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=61) talking faces yes these videos that we have seen were all AI generated from

- [00:01:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=63) have seen were all AI generated from scratch from image and the audio nothing

- [00:01:07](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=67) scratch from image and the audio nothing else this is a new mindblowing model

- [00:01:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=70) else this is a new mindblowing model announced by Microsoft Wasa one so with

- [00:01:13](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=73) announced by Microsoft Wasa one so with this model you are able to input an

- [00:01:15](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=75) this model you are able to input an image and audio and generate amazing

- [00:01:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=78) image and audio and generate amazing mindblowing video animations let's look

- [00:01:21](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=81) mindblowing video animations let's look some of them the first thing we need to

- [00:01:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=83) some of them the first thing we need to look at is the letter H so the H sound

- [00:01:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=85) look at is the letter H so the H sound at the beginning you see it is almost as

- [00:01:29](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=89) at the beginning you see it is almost as authentic as a real video not like AI

- [00:01:32](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=92) authentic as a real video not like AI generated these are 1 minute long so it

- [00:01:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=95) generated these are 1 minute long so it is very very powerful for a long AI

- [00:01:38](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=98) is very very powerful for a long AI video generation as well let's look at

- [00:01:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=100) video generation as well let's look at this one too have you ever had maybe

- [00:01:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=102) this one too have you ever had maybe you're in that place right now where you

- [00:01:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=104) you're in that place right now where you want to turn your life around and you

- [00:01:46](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=106) want to turn your life around and you know somewhere deep in your soul you see

- [00:01:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=109) know somewhere deep in your soul you see it is very very Lively it is almost as

- [00:01:53](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=113) it is very very Lively it is almost as real the Expressions the emotions

- [00:01:56](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=116) real the Expressions the emotions everything is great this is not text to

- [00:01:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=118) everything is great this is not text to sound these principles will not only

- [00:02:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=120) sound these principles will not only make your user's Journey more pleasant

- [00:02:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=122) make your user's Journey more pleasant they'll contribute to Better Business

- [00:02:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=123) they'll contribute to Better Business metrics as well if you plan to go for a

- [00:02:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=126) metrics as well if you plan to go for a run and you don't have enough time to do

- [00:02:08](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=128) run and you don't have enough time to do a full run well these are amazing

- [00:02:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=130) a full run well these are amazing amazing examples at the end of this

- [00:02:12](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=132) amazing examples at the end of this video I will put all of them so you can

- [00:02:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=134) video I will put all of them so you can watch all of them at once it also

- [00:02:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=136) watch all of them at once it also provides you to control the Generation

- [00:02:20](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=140) provides you to control the Generation The Gaze what I mean let's see I would

- [00:02:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=143) The Gaze what I mean let's see I would say that we as readers are not meant to

- [00:02:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=145) say that we as readers are not meant to look at him in any other way but with

- [00:02:27](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=147) look at him in any other way but with disdain especially in how he treats okay

- [00:02:30](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=150) disdain especially in how he treats okay so what you need to be careful at this

- [00:02:33](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=153) so what you need to be careful at this one is that you see the eyes Direction

- [00:02:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=155) one is that you see the eyes Direction and according to the provided eyes

- [00:02:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=157) and according to the provided eyes Direction it is even able to generate

- [00:02:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=159) Direction it is even able to generate such videos this is just Next Level

- [00:02:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=162) such videos this is just Next Level there is nothing like this at the moment

- [00:02:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=164) there is nothing like this at the moment it is also allowing you to set the face

- [00:02:47](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=167) it is also allowing you to set the face direction and distance as you are seeing

- [00:02:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=169) direction and distance as you are seeing in these images let's see um but you can

- [00:02:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=172) in these images let's see um but you can imagine I have a lot of questions so um

- [00:02:55](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=175) imagine I have a lot of questions so um I'd love to begin with you firstly just

- [00:02:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=178) I'd love to begin with you firstly just because I I read that you started out an

- [00:03:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=180) because I I read that you started out an advertising this is just mindblowing

- [00:03:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=182) advertising this is just mindblowing there is also Expressions providing as

- [00:03:05](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=185) there is also Expressions providing as you are seeing in this example let's see

- [00:03:07](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=187) you are seeing in this example let's see look at these yellow faces they are the

- [00:03:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=190) look at these yellow faces they are the driving inputs do stand up all the time

- [00:03:12](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=192) driving inputs do stand up all the time I'm a standup comedian improviser by

- [00:03:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=194) I'm a standup comedian improviser by trade you had me on one of the most fun

- [00:03:17](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=197) trade you had me on one of the most fun experiences of my life as I was on the

- [00:03:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=198) experiences of my life as I was on the show in Chicago and I attempted to eat

- [00:03:21](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=201) show in Chicago and I attempted to eat two Italian beef sandwiches in under a

- [00:03:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=203) two Italian beef sandwiches in under a minute yeah this is just mind-blowing

- [00:03:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=205) minute yeah this is just mind-blowing when you look them carefully you can

- [00:03:27](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=207) when you look them carefully you can notice it is AI but this is just

- [00:03:29](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=209) notice it is AI but this is just mindblowing it opens so many new ways of

- [00:03:33](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=213) mindblowing it opens so many new ways of interacting it is also able to generate

- [00:03:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=215) interacting it is also able to generate videos from non-real images like these

- [00:03:38](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=218) videos from non-real images like these ones as well and it also has a real time

- [00:03:41](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=221) ones as well and it also has a real time efficiency as

- [00:03:48](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=228) well but you know what I decided to do I decided to focus I just listened

- [00:03:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=232) decided to focus I just listened listened and we introduce Vasa a

- [00:03:55](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=235) listened and we introduce Vasa a framework for generating lifelike

- [00:03:57](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=237) framework for generating lifelike talking faces imagine that you can use

- [00:04:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=240) talking faces imagine that you can use an AI image and Avatar in real time when

- [00:04:04](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=244) an AI image and Avatar in real time when you are talking with other people that

- [00:04:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=246) you are talking with other people that is just mindblowing however Microsoft is

- [00:04:09](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=249) is just mindblowing however Microsoft is not going to publish this model yet but

- [00:04:12](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=252) not going to publish this model yet but they publish it the paper and I believe

- [00:04:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=254) they publish it the paper and I believe that there might be open sourced

- [00:04:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=256) that there might be open sourced versions of this based on the paper new

- [00:04:19](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=259) versions of this based on the paper new researches because the paper is

- [00:04:21](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=261) researches because the paper is published it so we will see and now

- [00:04:24](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=264) published it so we will see and now let's see all of the videos they have

- [00:04:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=265) let's see all of the videos they have published so you know sometimes nothing

- [00:04:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=268) published so you know sometimes nothing happens and sometimes everything happens

- [00:04:30](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=270) happens and sometimes everything happens all at once and you just got to deal

- [00:04:31](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=271) all at once and you just got to deal with it and it's also just strange to

- [00:04:34](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=274) with it and it's also just strange to both be extremely worried about

- [00:04:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=277) both be extremely worried about different things and have your anxiety

- [00:04:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=279) different things and have your anxiety levels like Peak to the highest they've

- [00:04:41](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=281) levels like Peak to the highest they've ever been and then also be extremely

- [00:04:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=284) ever been and then also be extremely happy and grateful that you were able to

- [00:04:46](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=286) happy and grateful that you were able to buy an apartment you know it's all these

- [00:04:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=289) buy an apartment you know it's all these conflicting emotions they had their way

- [00:04:51](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=291) conflicting emotions they had their way with me let's just say I had so many

- [00:04:54](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=294) with me let's just say I had so many opportunities to practice what I preach

- [00:04:57](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=297) opportunities to practice what I preach so I tried my best to take a care of

- [00:05:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=300) so I tried my best to take a care of myself I tried my best to stay mindful

- [00:05:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=303) myself I tried my best to stay mindful to meditate um just really listening and

- [00:05:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=306) to meditate um just really listening and responding to what I needed and I do

- [00:05:09](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=309) responding to what I needed and I do believe that having a practice like that

- [00:05:11](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=311) believe that having a practice like that really does help and then fun little

- [00:05:13](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=313) really does help and then fun little addition to that as well is that we had

- [00:05:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=316) addition to that as well is that we had four days together my boyfriend and I in

- [00:05:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=318) four days together my boyfriend and I in Madrid um we booked it like um I don't

- [00:05:21](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=321) Madrid um we booked it like um I don't know when we did that like maybe

- [00:05:24](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=324) know when we did that like maybe December or have you ever had maybe

- [00:05:26](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=326) December or have you ever had maybe you're in that place right now where you

- [00:05:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=328) you're in that place right now where you want to turn your life around and you

- [00:05:30](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=330) want to turn your life around and you know somewhere deep in your soul there

- [00:05:33](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=333) know somewhere deep in your soul there could be some decisions that you have to

- [00:05:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=335) could be some decisions that you have to make like you know like it's like things

- [00:05:38](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=338) make like you know like it's like things were something was decided for you and

- [00:05:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=340) were something was decided for you and instead of trying to make something that

- [00:05:43](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=343) instead of trying to make something that is done work it's like the invitation is

- [00:05:47](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=347) is done work it's like the invitation is to make the decision commit to that and

- [00:05:50](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=350) to make the decision commit to that and to start creating what comes next but

- [00:05:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=352) to start creating what comes next but here's the thing when we say no to

- [00:05:55](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=355) here's the thing when we say no to something we're saying yes to something

- [00:05:57](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=357) something we're saying yes to something else but that involves a lot of UN known

- [00:06:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=360) else but that involves a lot of UN known and that is scary I have many videos as

- [00:06:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=363) and that is scary I have many videos as to why that is scary actually you can

- [00:06:04](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=364) to why that is scary actually you can check one out right here but the unknown

- [00:06:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=366) check one out right here but the unknown is scary and so we we're doing the best

- [00:06:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=370) is scary and so we we're doing the best we can with it with like what is

- [00:06:12](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=372) we can with it with like what is available and if you want to turn your

- [00:06:15](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=375) available and if you want to turn your life around I I want to share a couple

- [00:06:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=376) life around I I want to share a couple things one it's okay to choose again

- [00:06:19](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=379) things one it's okay to choose again it's okay to want something different

- [00:06:21](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=381) it's okay to want something different for yourself it's okay the first thing

- [00:06:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=383) for yourself it's okay the first thing we need to look at is the letter H so

- [00:06:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=385) we need to look at is the letter H so the H sound at the beginning it depends

- [00:06:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=388) the H sound at the beginning it depends what country you're from many Native

- [00:06:30](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=390) what country you're from many Native languages have a problem with um putting

- [00:06:32](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=392) languages have a problem with um putting too much tightness in the throat and it

- [00:06:34](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=394) too much tightness in the throat and it can become more of a h sound so it's

- [00:06:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=397) can become more of a h sound so it's very important not to OV exaggerate this

- [00:06:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=400) very important not to OV exaggerate this sound it's a very soft very relaxed

- [00:06:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=402) sound it's a very soft very relaxed sound in English so just softly release

- [00:06:45](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=405) sound in English so just softly release the sound H help okay so that's the

- [00:06:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=409) the sound H help okay so that's the first thing the second sound is an e

- [00:06:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=412) first thing the second sound is an e sound like in my name Elliot the tongue

- [00:06:55](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=415) sound like in my name Elliot the tongue is in the middle of the mouth we're

- [00:06:57](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=417) is in the middle of the mouth we're slightly smiling and that's because the

- [00:06:59](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=419) slightly smiling and that's because the tongue is at the front of the mouth okay

- [00:07:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=422) tongue is at the front of the mouth okay when the tongue comes to the front of

- [00:07:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=423) when the tongue comes to the front of the mouth the lips will spread slightly

- [00:07:05](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=425) the mouth the lips will spread slightly look at my face my tongue is in the

- [00:07:07](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=427) look at my face my tongue is in the middle area of my mouth at the front

- [00:07:11](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=431) middle area of my mouth at the front e

- [00:07:17](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=437) e now this is where it starts to get difficult we have the dark l so in

- [00:07:20](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=440) difficult we have the dark l so in English we have the light l l the my

- [00:07:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=443) English we have the light l l the my cellers the milks the cleansing bombs

- [00:07:26](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=446) cellers the milks the cleansing bombs the oils they are really great for a

- [00:07:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=448) the oils they are really great for a drier skin skin a mature skin that first

- [00:07:32](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=452) drier skin skin a mature skin that first step cleanse uh that removing makeup so

- [00:07:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=455) step cleanse uh that removing makeup so for me they kind of sit into that breing

- [00:07:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=457) for me they kind of sit into that breing if you plan to go for a run and you

- [00:07:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=460) if you plan to go for a run and you don't have enough time to do a full run

- [00:07:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=462) don't have enough time to do a full run do part of a run if you plan to go to

- [00:07:45](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=465) do part of a run if you plan to go to the gym today but you don't have the

- [00:07:47](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=467) the gym today but you don't have the full hour that you normally work out do

- [00:07:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=469) full hour that you normally work out do some push-ups run up and down the stairs

- [00:07:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=472) some push-ups run up and down the stairs go out surprises me still I ran it on

- [00:07:54](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=474) go out surprises me still I ran it on someone just last night uh it was

- [00:07:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=478) someone just last night uh it was fascinating you she had complained of

- [00:08:01](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=481) fascinating you she had complained of she had complained of shoulder like pain

- [00:08:03](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=483) she had complained of shoulder like pain in her arm it was

- [00:08:05](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=485) in her arm it was excruciating so I said okay let's run

- [00:08:07](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=487) excruciating so I said okay let's run this my girl asked me she was like babe

- [00:08:09](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=489) this my girl asked me she was like babe what's your love

- [00:08:11](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=491) what's your love language I'm like

- [00:08:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=494) language I'm like what she's like you know your love

- [00:08:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=496) what she's like you know your love language like how do you convey love to

- [00:08:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=498) language like how do you convey love to your partners and loved ones like for

- [00:08:20](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=500) your partners and loved ones like for example a love language could be words

- [00:08:22](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=502) example a love language could be words of

- [00:08:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=503) of affirmation um but you can imagine I

- [00:08:25](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=505) affirmation um but you can imagine I have a lot of questions so um I'd love

- [00:08:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=508) have a lot of questions so um I'd love to begin with you firstly just because I

- [00:08:31](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=511) to begin with you firstly just because I I read that you started out in

- [00:08:32](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=512) I read that you started out in advertising and now you run a wellness

- [00:08:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=515) advertising and now you run a wellness business these principles will not only

- [00:08:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=517) business these principles will not only make your user's Journey more pleasant

- [00:08:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=519) make your user's Journey more pleasant they'll contribute to Better Business

- [00:08:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=520) they'll contribute to Better Business metrics as well users hate being

- [00:08:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=522) metrics as well users hate being interrupted and they hate getting broken

- [00:08:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=524) interrupted and they hate getting broken experiences keeping these principles in

- [00:08:46](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=526) experiences keeping these principles in mind in your app design makes for a

- [00:08:48](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=528) mind in your app design makes for a better user Journey yo I'm a Paparazzi I

- [00:08:51](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=531) better user Journey yo I'm a Paparazzi I don't play no Yi I

- [00:08:53](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=533) don't play no Yi I go my cameras up your crotch see I tell

- [00:08:56](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=536) go my cameras up your crotch see I tell the truth from what I see and sell it to

- [00:08:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=538) the truth from what I see and sell it to per tilty don't call me scy making money

- [00:09:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=542) per tilty don't call me scy making money that's my job celeb photography what

- [00:09:04](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=544) that's my job celeb photography what hell no I'm not needy I'm Legit not

- [00:09:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=546) hell no I'm not needy I'm Legit not stalk ay don't act toy I

- [00:09:10](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=550) stalk ay don't act toy I know that you from

- [00:09:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=568) JY will prevent those cavities from getting worse and prevent new cavities

- [00:09:32](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=572) getting worse and prevent new cavities just because you treat cavities it

- [00:09:34](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=574) just because you treat cavities it doesn't mean they can't get cavities in

- [00:09:36](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=576) doesn't mean they can't get cavities in any other tooth or around those other

- [00:09:38](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=578) any other tooth or around those other cavities why did the cavities happen in

- [00:09:40](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=580) cavities why did the cavities happen in the first place let say you don't want

- [00:09:42](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=582) the first place let say you don't want to see this person again I still think

- [00:09:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=584) to see this person again I still think that you should follow up with them you

- [00:09:46](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=586) that you should follow up with them you know just ghosting somebody after you

- [00:09:48](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=588) know just ghosting somebody after you guys had a good time together is not the

- [00:09:49](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=589) guys had a good time together is not the nicest thing to do you know you want to

- [00:09:51](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=591) nicest thing to do you know you want to text that person and let her know that

- [00:09:52](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=592) text that person and let her know that you're still thinking about her even you

- [00:09:54](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=594) you're still thinking about her even you stand up all the time I'm a stand up

- [00:09:56](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=596) stand up all the time I'm a stand up comedian improviser by trade you had me

- [00:09:58](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=598) comedian improviser by trade you had me on one of the most fun experiences my

- [00:10:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=600) on one of the most fun experiences my life as I was on the show in Chicago and

- [00:10:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=602) life as I was on the show in Chicago and I attempted to eat two Italian beef

- [00:10:04](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=604) I attempted to eat two Italian beef sandwiches in under a minute um but you

- [00:10:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=606) sandwiches in under a minute um but you can imagine I have a lot of questions so

- [00:10:09](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=609) can imagine I have a lot of questions so um I'd love to begin with you firstly

- [00:10:12](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=612) um I'd love to begin with you firstly just because I I read that you started

- [00:10:13](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=613) just because I I read that you started out in advertising and now you run a

- [00:10:17](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=617) out in advertising and now you run a wellness business I would say that we as

- [00:10:19](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=619) wellness business I would say that we as readers are not meant to look at him in

- [00:10:22](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=622) readers are not meant to look at him in any other way but with disdain

- [00:10:24](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=624) any other way but with disdain especially in how he treats her his

- [00:10:26](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=626) especially in how he treats her his daughter okay but of course he is able

- [00:10:28](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=628) daughter okay but of course he is able to clearly see through Morris and

- [00:10:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=639) he but you know what I decided to do I decided to focus all my attention all my

- [00:10:44](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=644) decided to focus all my attention all my time on listening so instead of doing

- [00:10:47](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=647) time on listening so instead of doing something else I just listened listened

- [00:10:50](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=650) something else I just listened listened and listened because I'm a True Believer

- [00:10:53](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=653) and listened because I'm a True Believer that if you're really bad at something

- [00:10:55](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=655) that if you're really bad at something like listening for example it only shows

- [00:10:57](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=657) like listening for example it only shows you that hey you have to practice

- [00:11:00](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=660) you that hey you have to practice listening as much as you

- [00:11:02](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=662) listening as much as you can we introduce Vasa a framework for

- [00:11:06](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=666) can we introduce Vasa a framework for generating lifelike talking faces with

- [00:11:08](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=668) generating lifelike talking faces with appealing visual effective skills given

- [00:11:11](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=671) appealing visual effective skills given a single static image and a speech audio

- [00:11:14](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=674) a single static image and a speech audio clip our model is capable of not only

- [00:11:16](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=676) clip our model is capable of not only producing lip movements that are

- [00:11:18](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=678) producing lip movements that are exquisitely synchronized with the audio

- [00:11:20](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=680) exquisitely synchronized with the audio but also capturing a large spectrum of

- [00:11:23](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=683) but also capturing a large spectrum of facial nuances and natural head motions

- [00:11:26](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=686) facial nuances and natural head motions that contribute to the perception of

- [00:11:27](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=687) that contribute to the perception of authenticity and livel

- [00:11:29](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=689) authenticity and livel the core Innovations include a holistic

- [00:11:31](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=691) the core Innovations include a holistic facial Dynamics and head movement

- [00:11:33](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=693) facial Dynamics and head movement generation model that works in a face

- [00:11:35](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=695) generation model that works in a face latent space and the development of such

- [00:11:37](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=697) latent space and the development of such an expressive and disentangled face

- [00:11:39](https://www.youtube.com/watch?v=nQ1EuRF5x30&t=699) an expressive and disentangled face latent space using videos
