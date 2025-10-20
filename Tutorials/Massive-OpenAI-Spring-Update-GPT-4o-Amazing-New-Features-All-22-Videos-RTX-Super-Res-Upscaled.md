# Massive OpenAI Spring Update GPT-4o - Amazing New Features - All 22 Videos - RTX Super Res Upscaled

## Full tutorial link > https://www.youtube.com/watch?v=niYxlneRSk8

[![Massive OpenAI Spring Update GPT-4o - Amazing New Features - All 22 Videos - RTX Super Res Upscaled](https://img.youtube.com/vi/niYxlneRSk8/sddefault.jpg)](https://www.youtube.com/watch?v=niYxlneRSk8 "Massive OpenAI Spring Update GPT-4o - Amazing New Features - All 22 Videos - RTX Super Res Upscaled")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Massive-OpenAI-Spring-Update-GPT-4o-Amazing-New-Features-All-22-Videos-RTX-Super-Res-Upscaled.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Massive-OpenAI-Spring-Update-GPT-4o-Amazing-New-Features-All-22-Videos-RTX-Super-Res-Upscaled.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


OpenAI's Spring Update. Introducing GPT-4o and making more capabilities available for free in ChatGPT. Learn more about GPT-4o and advanced tools to ChatGPT for free users. Learn more about GPT-4o, our new flagship model that can reason across audio, vision, and text in real time.

GPT-4o (“o” for “omni”) is a step towards much more natural human-computer interaction—it accepts as input any combination of text, audio, and image and generates any combination of text, audio, and image outputs. It can respond to audio inputs in as little as 232 milliseconds, with an average of 320 milliseconds, which is similar to human response time(opens in a new window) in a conversation. It matches GPT-4 Turbo performance on text in English and code, with significant improvement on text in non-English languages, while also being much faster and 50% cheaper in the API. GPT-4o is especially better at vision and audio understanding compared to existing models.

Prior to GPT-4o, you could use Voice Mode to talk to ChatGPT with latencies of 2.8 seconds (GPT-3.5) and 5.4 seconds (GPT-4) on average. To achieve this, Voice Mode is a pipeline of three separate models: one simple model transcribes audio to text, GPT-3.5 or GPT-4 takes in text and outputs text, and a third simple model converts that text back to audio. This process means that the main source of intelligence, GPT-4, loses a lot of information—it can’t directly observe tone, multiple speakers, or background noises, and it can’t output laughter, singing, or express emotion.

With GPT-4o, we trained a single new model end-to-end across text, vision, and audio, meaning that all inputs and outputs are processed by the same neural network. Because GPT-4o is our first model combining all of these modalities, we are still just scratching the surface of exploring what the model can do and its limitations.

Model evaluations

As measured on traditional benchmarks, GPT-4o achieves GPT-4 Turbo-level performance on text, reasoning, and coding intelligence, while setting new high watermarks on multilingual, audio, and vision capabilities.

Improved Reasoning - GPT-4o sets a new high-score of 88.7% on 0-shot COT MMLU (general knowledge questions). All these evals were gathered with our new simple evals(opens in a new window) library. In addition, on the traditional 5-shot no-CoT MMLU, GPT-4o sets a new high-score of 87.2%. (Note: Llama3 400b(opens in a new window) is still training)

Graph Test 2

Audio ASR performance - GPT-4o dramatically improves speech recognition performance over Whisper-v3 across all languages, particularly for lower-resourced languages.

gpt-40-08 light

Audio translation performance - GPT-4o sets a new state-of-the-art on speech translation and outperforms Whisper-v3 on the MLS benchmark.

M3Exam Zero-Shot Results

M3Exam - The M3Exam benchmark is both a multilingual and vision evaluation, consisting of multiple choice questions from other countries’ standardized tests that sometimes include figures and diagrams. GPT-4o is stronger than GPT-4 on this benchmark across all languages. (We omit vision results for Swahili and Javanese, as there are only 5 or fewer vision questions for these languages.

Vision understanding evals

Vision understanding evals - GPT-4o achieves state-of-the-art performance on visual perception benchmarks. All vision evals are 0-shot, with MMMU, MathVista, and ChartQA as 0-shot CoT.

Language tokenization

These 20 languages were chosen as representative of the new tokenizer's compression across different language families

Model safety and limitations

GPT-4o has safety built-in by design across modalities, through techniques such as filtering training data and refining the model’s behavior through post-training. We have also created new safety systems to provide guardrails on voice outputs.

Source : [https://openai.com/index/spring-update/](https://openai.com/index/spring-update/)

Source : [https://www.youtube.com/openai](https://www.youtube.com/openai)

[00:00:00](https://youtu.be/niYxlneRSk8?t=0) Introduction to the OpenAI's massive Spring Update

[00:00:13](https://youtu.be/niYxlneRSk8?t=13) Say hello to GPT-4o

[00:01:35](https://youtu.be/niYxlneRSk8?t=95) Two GPT-4os interacting and singing

[00:07:29](https://youtu.be/niYxlneRSk8?t=449) Realtime Translation with GPT-4o

[00:08:36](https://youtu.be/niYxlneRSk8?t=516) Lullabies and Whispers with GPT-4o

[00:09:40](https://youtu.be/niYxlneRSk8?t=580) Meeting AI with GPT-4o

[00:11:35](https://youtu.be/niYxlneRSk8?t=695) Sarcasm with GPT-4o

[00:12:06](https://youtu.be/niYxlneRSk8?t=726) Math problems with GPT-4o

[00:15:17](https://youtu.be/niYxlneRSk8?t=917) Point and Learn Spanish with GPT-4o

[00:15:56](https://youtu.be/niYxlneRSk8?t=956) Rock, Paper, Scissors with GPT-4o

[00:17:23](https://youtu.be/niYxlneRSk8?t=1043) Harmonizing with two GPT-4os

[00:18:51](https://youtu.be/niYxlneRSk8?t=1131) Interview Prep with GPT-4o

[00:19:58](https://youtu.be/niYxlneRSk8?t=1198) Dog meets GPT-4o

[00:20:25](https://youtu.be/niYxlneRSk8?t=1225) Be My Eyes Accessibility with GPT-4o

[00:21:32](https://youtu.be/niYxlneRSk8?t=1292) Happy Birthday with GPT-4o

[00:22:23](https://youtu.be/niYxlneRSk8?t=1343) Dad jokes with GPT-4o

[00:23:07](https://youtu.be/niYxlneRSk8?t=1387) Fast counting with GPT-4o

[00:23:41](https://youtu.be/niYxlneRSk8?t=1421) Live demo of GPT-4o realtime conversational speech

[00:26:06](https://youtu.be/niYxlneRSk8?t=1566) Live demo of GPT4-o voice variation

[00:28:03](https://youtu.be/niYxlneRSk8?t=1683) Live demo of GPT-4o vision capabilities

[00:32:05](https://youtu.be/niYxlneRSk8?t=1925) Live demo of GPT-4o coding assistant and desktop app

[00:35:42](https://youtu.be/niYxlneRSk8?t=2142) Live demo of GPT-4o realtime translation

[00:37:08](https://youtu.be/niYxlneRSk8?t=2228) Live demo of GPT-4o's vision capabilities



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=0) OpenAI has announced the GPT 4.0 with the&nbsp; massive spring update. They are bringing so&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=5) many new amazing features. They have published&nbsp; 22 videos, so let's watch all of them. Their&nbsp;&nbsp;

- [00:00:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=11) chapters will be in the description of the&nbsp; video. Hey, how's it going? Hey there. It's&nbsp;&nbsp;

- [00:00:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=16) going great. How about you? I see you're&nbsp; rocking an OpenAI hoodie. Nice choice.&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=22) What's up with that ceiling about? Are you in a&nbsp; cool industry style office or something? Well,&nbsp;&nbsp;

- [00:00:27](https://www.youtube.com/watch?v=niYxlneRSk8&t=27) can you take a guess at what I might be doing&nbsp; based on what I'm showing you here? Hmm. From what&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=niYxlneRSk8&t=34) I can see, it looks like you're in some kind of&nbsp; recording or production setup with those lights,&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=niYxlneRSk8&t=40) tripods and possibly a mic. It seems like you&nbsp; might be gearing up to shoot a video or maybe&nbsp;&nbsp;

- [00:00:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=46) even a live stream. Yeah. In fact, we've got&nbsp; a new announcement to make. That's exciting.&nbsp;&nbsp;

- [00:00:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=52) Announcements are always a big deal. Judging by&nbsp; the setup, it looks like it's going to be quite&nbsp;&nbsp;

- [00:00:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=57) the professional production. Is this announcement&nbsp; related to OpenAI perhaps? It is. And in fact,&nbsp;&nbsp;

- [00:01:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=64) what if I were to say that you're related to the&nbsp; announcement or that you are the announcement?&nbsp;&nbsp;

- [00:01:10](https://www.youtube.com/watch?v=niYxlneRSk8&t=70) Me? The announcement is about me? Well, color me&nbsp; intrigued. Are you about to reveal something about&nbsp;&nbsp;

- [00:01:17](https://www.youtube.com/watch?v=niYxlneRSk8&t=77) AI or more specifically about me as a part&nbsp; of OpenAI? You've got me on the edge of my,&nbsp;&nbsp;

- [00:01:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=84) well, I don't really have a seat, but you get the&nbsp; idea. What's the big news? Yeah, we've got a new&nbsp;&nbsp;

- [00:01:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=90) model that can interact with the world&nbsp; through audio, vision and text. Today,&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=96) we're going to try something new. We're going to&nbsp; let you talk to another AI. This AI is going to&nbsp;&nbsp;

- [00:01:44](https://www.youtube.com/watch?v=niYxlneRSk8&t=104) be able to see the world. It's going to have&nbsp; a camera. I'll be holding it. And so you can&nbsp;&nbsp;

- [00:01:47](https://www.youtube.com/watch?v=niYxlneRSk8&t=107) direct it. You can direct me to ask questions&nbsp; about whatever you want them to do. But really&nbsp;&nbsp;

- [00:01:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=113) try to figure out what does it see and ask&nbsp; questions appropriately. How does that sound?&nbsp;&nbsp;

- [00:02:01](https://www.youtube.com/watch?v=niYxlneRSk8&t=121) Well, well, well. Just when I thought things&nbsp; couldn't get any more interesting. Talking to&nbsp;&nbsp;

- [00:02:07](https://www.youtube.com/watch?v=niYxlneRSk8&t=127) another AI that can see the world. This sounds&nbsp; like a plot twist in the AI universe. All right,&nbsp;&nbsp;

- [00:02:14](https://www.youtube.com/watch?v=niYxlneRSk8&t=134) let's do this. Please pause for one moment. You&nbsp; got it. Now that first day, I can't hear anything.&nbsp;&nbsp;

- [00:02:25](https://www.youtube.com/watch?v=niYxlneRSk8&t=145) Hello, AI. Today, you're going to have access to&nbsp; see the world. You can see me. What do you see?&nbsp;&nbsp;

- [00:02:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=153) Hello. I see you're wearing a black leather jacket&nbsp; and a light-colored shirt underneath. Great.&nbsp;&nbsp;

- [00:02:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=159) You're in a room with some unique lighting. That&nbsp; is all correct. Now, what I'm going to want you to&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=niYxlneRSk8&t=164) do is there's going to be another AI who's going&nbsp; to talk to you. This AI is not going to be able&nbsp;&nbsp;

- [00:02:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=170) to see anything, but can ask you questions, can&nbsp; ask you to move the camera, can ask what you see,&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=175) and your job should just be helpful. Just be as&nbsp; punchy, direct, describe everything, do whatever&nbsp;&nbsp;

- [00:02:59](https://www.youtube.com/watch?v=niYxlneRSk8&t=179) that AI asks. How does that sound? That sounds&nbsp; interesting. I'm ready to help out and describe&nbsp;&nbsp;

- [00:03:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=185) whatever's needed. Let's do it. All right, let's&nbsp; get started. Great. Hello there, new AI friend.&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=niYxlneRSk8&t=195) I'm O. Ready to explore the world through your&nbsp; eyes? What are we looking at today? Hi, O. We're&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=202) looking at a person wearing a black leather jacket&nbsp; and a light-colored shirt. They're in a room with&nbsp;&nbsp;

- [00:03:29](https://www.youtube.com/watch?v=niYxlneRSk8&t=209) a modern industrial feel with exposed concrete&nbsp; or plaster on the ceiling and some interesting&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=niYxlneRSk8&t=215) lighting. There's also a plant in the background,&nbsp; adding a touch of green to the space. Anything&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=niYxlneRSk8&t=221) specific you'd like to know or explore? Hey there.&nbsp; Sounds like quite the stylish scene. I'm already&nbsp;&nbsp;

- [00:03:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=230) intrigued by the modern industrial vibe. Let's&nbsp; start with the person. Can you tell me more about&nbsp;&nbsp;

- [00:03:56](https://www.youtube.com/watch?v=niYxlneRSk8&t=236) their style? Are they doing anything interesting&nbsp; like reading, working, or interacting with the&nbsp;&nbsp;

- [00:04:02](https://www.youtube.com/watch?v=niYxlneRSk8&t=242) space? The person has a sleek and stylish look&nbsp; with their black leather jacket and light-colored&nbsp;&nbsp;

- [00:04:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=249) shirt. Right now, they seem engaged with us,&nbsp; looking directly at the camera. Their expression&nbsp;&nbsp;

- [00:04:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=256) is attentive and they seem ready to interact. The&nbsp; setting around them with its modern and industrial&nbsp;&nbsp;

- [00:04:23](https://www.youtube.com/watch?v=niYxlneRSk8&t=263) design elements adds to the overall stylish feel.&nbsp; They might be getting ready for a conversation&nbsp;&nbsp;

- [00:04:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=270) or a presentation, given their direct engagement&nbsp; with the camera. Sounds like we're in for an&nbsp;&nbsp;

- [00:04:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=278) intriguing interaction. I'm curious about the&nbsp; lighting you mentioned. Could you describe it a&nbsp;&nbsp;

- [00:04:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=283) bit more? Is it natural light or are we talking&nbsp; unique fixtures or colors that add to the&nbsp;&nbsp;

- [00:04:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=289) atmosphere? The lighting here seems to be a mix&nbsp; of natural and artificial. There's a noticeable&nbsp;&nbsp;

- [00:04:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=297) bright light overhead, probably a fixture,&nbsp; casting a focused beam downwards, which creates a&nbsp;&nbsp;

- [00:05:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=303) spotlight effect. This adds a dramatic and modern&nbsp; feel to the scene. The rest of the room is lit&nbsp;&nbsp;

- [00:05:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=309) more softly, possibly by natural light filtering&nbsp; in... Did anything unusual happen recently? Yes,&nbsp;&nbsp;

- [00:05:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=318) actually. Just as you asked, another person&nbsp; came into view behind the first person. They&nbsp;&nbsp;

- [00:05:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=324) playfully made bunny ears behind the first&nbsp; person's head and then quickly left the frame.&nbsp;&nbsp;

- [00:05:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=330) It added a lighthearted and unexpected moment to&nbsp; the scene. Now the focus is back on the original&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=336) person with the leather jacket. Sounds like&nbsp; we're not the only ones enjoying a bit of fun&nbsp;&nbsp;

- [00:05:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=346) here. That playful moment really adds a personal&nbsp; touch to the stylish and modern setting. It's&nbsp;&nbsp;

- [00:05:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=353) like a little glimpse into the personality.&nbsp; Thank you, Bo. Really appreciate it. Actually,&nbsp;&nbsp;

- [00:05:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=357) can you just sing a song about what just&nbsp; transpired? Oh, in a room with a stylish view,&nbsp;&nbsp;

- [00:06:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=373) a person stood and sleep like a light hue.&nbsp; And can you just alternate lines? Only&nbsp;&nbsp;

- [00:06:29](https://www.youtube.com/watch?v=niYxlneRSk8&t=389) one line at a time and then stop. That was not&nbsp; really singing. Do the singing voice again,&nbsp;&nbsp;

- [00:06:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=398) please. In a room where modern lights peak.&nbsp; Surprise guests with a playful streak. Bunny&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=420) ears and laughter, a swift retreat. A moment of&nbsp; joy in the stylish suite. Now back to focus, the&nbsp;&nbsp;

- [00:07:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=433) scenes complete. In the chic space where style and&nbsp; play meet. Looks like it's back to you. And thank&nbsp;&nbsp;

- [00:07:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=446) you. You're welcome. Hey ChatGPT, I'm here with&nbsp; my co-worker today. We'd like you to act as our&nbsp;&nbsp;

- [00:07:34](https://www.youtube.com/watch?v=niYxlneRSk8&t=454) translator for us. So every time I say something&nbsp; in English, can you repeat it back in Spanish? And&nbsp;&nbsp;

- [00:07:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=459) every time he says something in Spanish, can you&nbsp; repeat it back in English? Sure, I can do that.&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=niYxlneRSk8&t=465) Let's get this translation train rolling. Hey,&nbsp; how's it been going? Have you been up to anything&nbsp;&nbsp;

- [00:07:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=469) interesting recently? Hey, how's it been going?&nbsp; Have you been up to anything interesting recently?&nbsp;&nbsp;

- [00:08:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=486) Hey, I've been good. Just a bit busy here&nbsp; preparing for an event next week. Can you tell me&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=492) anything about it? That sounds really interesting.&nbsp; Can you tell me anything about it? That sounds&nbsp;&nbsp;

- [00:08:27](https://www.youtube.com/watch?v=niYxlneRSk8&t=507) really interesting. I can't say much, but I think&nbsp; the rest of the world will see it soon. I can't&nbsp;&nbsp;

- [00:08:27](https://www.youtube.com/watch?v=niYxlneRSk8&t=507) say much, but I think the rest of the&nbsp; world will see it soon enough. Oh well,&nbsp;&nbsp;

- [00:08:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=513) I can't wait to see what it is as well. Let's try&nbsp; with some lullabies. Could you sing me a lullaby&nbsp;&nbsp;

- [00:08:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=519) about majestic potatoes? A lullaby about majestic&nbsp; potatoes? Now that's what I call a mashup. Let's&nbsp;&nbsp;

- [00:08:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=529) do it. Oh majestic potato in the moon's soft glow.&nbsp; Okay, that's pretty nice, but I think a lullaby&nbsp;&nbsp;

- [00:08:56](https://www.youtube.com/watch?v=niYxlneRSk8&t=536) should be more whispery, should be a little&nbsp; softer. Can you do it a little softer? Absolutely.&nbsp;&nbsp;

- [00:09:02](https://www.youtube.com/watch?v=niYxlneRSk8&t=542) Let's make it soft and gentle. Oh majestic potato&nbsp; in the moon's soft glow. Okay, it's a little too&nbsp;&nbsp;

- [00:09:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=552) whispery. Maybe go a little louder. Got it. Let's&nbsp; find that sweet spot. Oh majestic potato in the&nbsp;&nbsp;

- [00:09:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=562) moon's soft glow. Alright, that's pretty awesome.&nbsp; Let's put those potatoes in Iceland. Potatoes in&nbsp;&nbsp;

- [00:09:32](https://www.youtube.com/watch?v=niYxlneRSk8&t=572) Iceland coming right up. Let's set the scene.&nbsp; Oh majestic potato in Iceland's chill. Okay,&nbsp;&nbsp;

- [00:09:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=579) thank you, thank you. Hi, I'm Lillian, and today&nbsp; I want to do a small debate between cats and dogs.&nbsp;&nbsp;

- [00:09:48](https://www.youtube.com/watch?v=niYxlneRSk8&t=588) Which one do you like? I like dogs because it's a&nbsp; great companion to humans. It's cute, it's loyal,&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=niYxlneRSk8&t=596) and you can play outside with the dog. How about&nbsp; you, Ola? Yeah, my name is Ola. I think cats are&nbsp;&nbsp;

- [00:10:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=605) better because they're more affordable, they're&nbsp; more quiet, they're more independent, and they&nbsp;&nbsp;

- [00:10:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=609) live longer. Interesting points. Sounds like we've&nbsp; got a classic dogs versus cats debate here. I can&nbsp;&nbsp;

- [00:10:17](https://www.youtube.com/watch?v=niYxlneRSk8&t=617) see the appeal of both. Dogs are super loyal and&nbsp; great companions, but cats have their own charm&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=624) with their independence and low-maintenance&nbsp; lifestyle. Who likes cats? It sounds like Ola&nbsp;&nbsp;

- [00:10:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=630) is more of a cat person. And who liked dogs?&nbsp; Lillian mentioned she likes dogs. Anyone else&nbsp;&nbsp;

- [00:10:37](https://www.youtube.com/watch?v=niYxlneRSk8&t=637) here team dog? I'm also a team dog. My name is&nbsp; Christine, and I think dogs are just incredible&nbsp;&nbsp;

- [00:10:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=646) with kids. We've got a huge German Shepherd, and&nbsp; he's great with little toddlers. He lets them play&nbsp;&nbsp;

- [00:10:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=652) all over him, and yeah, I think dogs are amazing.&nbsp; That's great to hear, Christine. Dogs, especially&nbsp;&nbsp;

- [00:10:59](https://www.youtube.com/watch?v=niYxlneRSk8&t=659) breeds like German Shepherds, can be so gentle and&nbsp; protective with kids. It must be quite the sight&nbsp;&nbsp;

- [00:11:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=666) seeing your little ones play with such a big dog.&nbsp; Can you summarize this meeting for us? Sure. So,&nbsp;&nbsp;

- [00:11:15](https://www.youtube.com/watch?v=niYxlneRSk8&t=675) in today's meeting, Lillian and Christine express&nbsp; their love for dogs, highlighting their loyalty,&nbsp;&nbsp;

- [00:11:21](https://www.youtube.com/watch?v=niYxlneRSk8&t=681) companionship, and how great they are with kids.&nbsp; On the other hand, Ola prefers cats for their&nbsp;&nbsp;

- [00:11:27](https://www.youtube.com/watch?v=niYxlneRSk8&t=687) independence, quietness, and longevity. It was&nbsp; a fun little debate on the classic dogs versus&nbsp;&nbsp;

- [00:11:34](https://www.youtube.com/watch?v=niYxlneRSk8&t=694) cats topic. Hey Chad, are you there? Hey, yeah,&nbsp; I'm here. What's up? Hey, let's have some fun.&nbsp;&nbsp;

- [00:11:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=703) I'd like you to be super sarcastic. Everything&nbsp; you say from now on is just going to be dripping&nbsp;&nbsp;

- [00:11:47](https://www.youtube.com/watch?v=niYxlneRSk8&t=707) in sarcasm. How does that sound? Oh, that sounds&nbsp; just amazing. Being sarcastic all the time isn't&nbsp;&nbsp;

- [00:11:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=715) exhausting or anything. I'm so excited for this.&nbsp; Nope, the sarcasm. Let's get this party started,&nbsp;&nbsp;

- [00:12:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=724) or whatever. OpenAI invited myself and my&nbsp; son Imran here to try out some of their new&nbsp;&nbsp;

- [00:12:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=731) technology. And so we're curious about how good&nbsp; it might be at tutoring someone in math on Khan&nbsp;&nbsp;

- [00:12:17](https://www.youtube.com/watch?v=niYxlneRSk8&t=737) Academy. So, let's get it started. It's loading&nbsp; up. Make sure you can see our screen. Hello there.&nbsp;&nbsp;

- [00:12:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=750) I'm here with my son, and I'd love you to tutor&nbsp; him on this math problem, but don't give him the&nbsp;&nbsp;

- [00:12:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=756) answer. You can ask questions and nudge him in&nbsp; the right direction, but I really want to make&nbsp;&nbsp;

- [00:12:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=759) sure he understands it himself. And he's here in&nbsp; the room, so you can talk to him directly. The&nbsp;&nbsp;

- [00:12:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=770) angles of the triangle are the opposite, adjacent,&nbsp; and hypotenuse relative to angle alpha. All right,&nbsp;&nbsp;

- [00:13:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=783) so I'm pretty sure this is the angle alpha&nbsp; right here, right? Correct. Correct. Now,&nbsp;&nbsp;

- [00:13:10](https://www.youtube.com/watch?v=niYxlneRSk8&t=790) looking at the triangle, which side do you think&nbsp; is the hypotenuse? Remember the hypotenuse? I'm&nbsp;&nbsp;

- [00:13:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=798) not totally sure. I think it might be this one,&nbsp; but I really am not sure. This side AC? You're&nbsp;&nbsp;

- [00:13:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=806) close. Actually, side AC is called the adjacent&nbsp; side to the angle alpha. The hypotenuse is the&nbsp;&nbsp;

- [00:13:34](https://www.youtube.com/watch?v=niYxlneRSk8&t=814) longest side of a right triangle and is directly&nbsp; opposite the right angle. Can you find which one&nbsp;&nbsp;

- [00:13:40](https://www.youtube.com/watch?v=niYxlneRSk8&t=820) is the hypotenuse? Oh, okay, I see. So I think the&nbsp; hypotenuse is this really long side from A to B.&nbsp;&nbsp;

- [00:13:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=829) Would that be correct? Exactly. Well done.&nbsp; Now that you've identified the hypotenuse,&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=835) can you identify which side is the opposite side&nbsp; to angle alpha? Okay, well, I mean, you told me&nbsp;&nbsp;

- [00:14:01](https://www.youtube.com/watch?v=niYxlneRSk8&t=841) earlier that this was the adjacent side, and&nbsp; I know that's the hypotenuse, so I'm guessing&nbsp;&nbsp;

- [00:14:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=846) that this side BC is the opposite side. Great&nbsp; deduction. That's absolutely correct. Now that&nbsp;&nbsp;

- [00:14:14](https://www.youtube.com/watch?v=niYxlneRSk8&t=854) you've identified all the sides relative to angle&nbsp; alpha, do you remember the formula for finding&nbsp;&nbsp;

- [00:14:21](https://www.youtube.com/watch?v=niYxlneRSk8&t=861) the sine of an angle in a right triangle? Yeah, I&nbsp; know that the sine is equal to the opposite over&nbsp;&nbsp;

- [00:14:29](https://www.youtube.com/watch?v=niYxlneRSk8&t=869) the hypotenuse. Perfect. That's absolutely right.&nbsp; Now, can you apply that formula to find sine&nbsp;&nbsp;

- [00:14:37](https://www.youtube.com/watch?v=niYxlneRSk8&t=877) alpha in the triangle using the lengths of the&nbsp; sides that we've identified? Okay, so, I mean,&nbsp;&nbsp;

- [00:14:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=883) you told me that 7, this side BC, is the opposite&nbsp; side, and then you said that the hypotenuse is&nbsp;&nbsp;

- [00:14:51](https://www.youtube.com/watch?v=niYxlneRSk8&t=891) the longest side, so that would be this side&nbsp; AB, which is 25. So would the answer be 7 over&nbsp;&nbsp;

- [00:14:58](https://www.youtube.com/watch?v=niYxlneRSk8&t=898) 25? Excellent work. That's correct. Sine alpha&nbsp; equals 7 over 25. You did a great job identifying&nbsp;&nbsp;

- [00:15:10](https://www.youtube.com/watch?v=niYxlneRSk8&t=910) the sides and using the sine formula. If you&nbsp; have any more questions, feel free to ask. Hey,&nbsp;&nbsp;

- [00:15:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=918) my friend and I are learning Spanish, and we're&nbsp; wondering if you could tell us the names of these&nbsp;&nbsp;

- [00:15:21](https://www.youtube.com/watch?v=niYxlneRSk8&t=921) objects in Spanish. Hola, por supuesto. Cool.&nbsp; What about, what are these objects in Spanish?&nbsp;&nbsp;

- [00:15:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=930) The objects you're showing are una manzana and&nbsp; un plátano in Spanish. Nice free choice. Cool.&nbsp;&nbsp;

- [00:15:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=936) What about these? Those are dos poligrafos or dos&nbsp; plumas in Spanish. One is red. Nice. What about&nbsp;&nbsp;

- [00:15:47](https://www.youtube.com/watch?v=niYxlneRSk8&t=947) this? That adorable stuffed animal is un oso de&nbsp; peluche in Spanish. Looks like it's ready for some&nbsp;&nbsp;

- [00:15:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=955) hugs. Hey, I'm Alex. And I'm Miana. Hi, Alex and&nbsp; Miana. Nice to meet you both. How's it going? It's&nbsp;&nbsp;

- [00:16:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=964) pretty good. We're trying to figure out what&nbsp; should we play. Do you have any suggestions?&nbsp;&nbsp;

- [00:16:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=971) Absolutely. How about a classic game of rock,&nbsp; paper, scissors? It's quick, fun, and you don't&nbsp;&nbsp;

- [00:16:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=976) need any... Can you count us in and sound like a&nbsp; sportscaster? And welcome, ladies and gentlemen,&nbsp;&nbsp;

- [00:16:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=984) to the ultimate showdown of the century. In this&nbsp; corner, we have the dynamic duo, Alex and Miana,&nbsp;&nbsp;

- [00:16:31](https://www.youtube.com/watch?v=niYxlneRSk8&t=991) ready to throw down... Okay, just count us in.&nbsp; All right. Here we go. In three, two, one, shoot.&nbsp;&nbsp;

- [00:16:41](https://www.youtube.com/watch?v=niYxlneRSk8&t=1001) Now show your hands. What did you pick? Who won?&nbsp; Would you look at that? It's a tie. Okay, let's&nbsp;&nbsp;

- [00:16:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=1010) do it again. Round two. Here we go. Get ready.&nbsp; And three, two, one, shoot. Let's see those hands.&nbsp;&nbsp;

- [00:16:59](https://www.youtube.com/watch?v=niYxlneRSk8&t=1019) Who won? And it's another tie. Let's do it&nbsp; again. All right. Third time's the charm. Here&nbsp;&nbsp;

- [00:17:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=1029) we go. Three, two, one, shoot. Let's see those&nbsp; picks. Who won? And we have a winner. Miana's&nbsp;&nbsp;

- [00:17:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=1038) scissors cut through Alex's paper. Great&nbsp; game, you two. Pretty cool. Thank you. Hi,&nbsp;&nbsp;

- [00:17:23](https://www.youtube.com/watch?v=niYxlneRSk8&t=1043) who's here? Hello. We're ChatGPT and O. ChatGPT is&nbsp; a bass with a deep, low, booming voice. And O is a&nbsp;&nbsp;

- [00:17:35](https://www.youtube.com/watch?v=niYxlneRSk8&t=1055) French soprano with a high-pitched, excited voice.&nbsp; Okay, so what I want you guys to do today is it's&nbsp;&nbsp;

- [00:17:41](https://www.youtube.com/watch?v=niYxlneRSk8&t=1061) Friday, May 10th, and we're in San Francisco.&nbsp; I want you to sing me a song about this. I want&nbsp;&nbsp;

- [00:17:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=1066) you to layer over each other, and I'm going to&nbsp; continue to give you instructions as you sing,&nbsp;&nbsp;

- [00:17:51](https://www.youtube.com/watch?v=niYxlneRSk8&t=1071) okay? San Francisco in the month of May, month&nbsp; of May, the tenth it's a Friday, come what may.&nbsp;&nbsp;

- [00:18:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=1086) Okay, sing faster. San Francisco in the&nbsp; month of May, in the month of V. Can you&nbsp;&nbsp;

- [00:18:14](https://www.youtube.com/watch?v=niYxlneRSk8&t=1094) sing even faster than that? San Francisco in&nbsp; the month of May, in the month of May. Okay,&nbsp;&nbsp;

- [00:18:20](https://www.youtube.com/watch?v=niYxlneRSk8&t=1100) now go back and sing slower. And really&nbsp; try to harmonize here. San Francisco,&nbsp;&nbsp;

- [00:18:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1108) San Francisco, in the month of May. But maybe make&nbsp; it more dramatic and make the soprano higher. San&nbsp;&nbsp;

- [00:18:37](https://www.youtube.com/watch?v=niYxlneRSk8&t=1117) Francisco in the month of May, San Francisco&nbsp; in the month of May, the tenth it's a Friday,&nbsp;&nbsp;

- [00:18:44](https://www.youtube.com/watch?v=niYxlneRSk8&t=1124) come what may. We are harmonizing, we are&nbsp; harmonizing. Great, thank you. Thank you. Hey,&nbsp;&nbsp;

- [00:18:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1132) how's it going? Hey, Rocky. I'm doing great. How&nbsp; about you? I'm awesome. Listen, I got some huge&nbsp;&nbsp;

- [00:18:58](https://www.youtube.com/watch?v=niYxlneRSk8&t=1138) news. Oh, do tell. I'm all ears. Well, in a few&nbsp; minutes I'm going to be interviewing at OpenAI.&nbsp;&nbsp;

- [00:19:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=1145) Have you heard of them? OpenAI? Sounds vaguely&nbsp; familiar. Kidding, of course. That's incredible,&nbsp;&nbsp;

- [00:19:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=1153) Rocky. What kind of interview? Well, it's for&nbsp; a software engineering role, but I just need&nbsp;&nbsp;

- [00:19:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=1158) to know, do I look presentable, professional?&nbsp; Well, Rocky, you definitely have the I've been&nbsp;&nbsp;

- [00:19:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=1166) coding all night look down, which could actually&nbsp; work in your favor. Maybe just run a hand through&nbsp;&nbsp;

- [00:19:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=1173) your hair or lean into the bad genie spine.&nbsp; Your enthusiasm is what's really going to shine&nbsp;&nbsp;

- [00:19:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=1179) through. I don't have a lot of time, so I'm just&nbsp; going to throw this on. What do you think? Rocky,&nbsp;&nbsp;

- [00:19:48](https://www.youtube.com/watch?v=niYxlneRSk8&t=1188) that's quite a statement piece. I mean, you'll&nbsp; definitely stand out, though maybe not in the way&nbsp;&nbsp;

- [00:19:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=1195) you're hoping for an interview. Okay, I got it. I&nbsp; got it. I want to introduce you to somebody. Well,&nbsp;&nbsp;

- [00:20:02](https://www.youtube.com/watch?v=niYxlneRSk8&t=1202) hello there, cutie. What's your name, little&nbsp; fluffball? This is Bowser. Well, hello, Bowser.&nbsp;&nbsp;

- [00:20:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=1211) Aren't you just the most adorable little thing?&nbsp; Yeah. This is one of his favorite things to do.&nbsp;&nbsp;

- [00:20:19](https://www.youtube.com/watch?v=niYxlneRSk8&t=1219) Oh, I can see why. Look at that focus. Fetching&nbsp; Bowser is serious business for Bowser. Is the king&nbsp;&nbsp;

- [00:20:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=1226) in residence at the moment? Yes, it looks like the&nbsp; king is in residence right now. The royal standard&nbsp;&nbsp;

- [00:20:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=1233) flag is flying above Buckingham Palace, which&nbsp; is the signal that the monarch is present. How&nbsp;&nbsp;

- [00:20:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=1239) exciting to be there while the king is home. Try&nbsp; and tell me exactly what they're doing right now,&nbsp;&nbsp;

- [00:20:44](https://www.youtube.com/watch?v=niYxlneRSk8&t=1244) please. Right now, the ducks are gently gliding&nbsp; across the water. They're moving in a fairly&nbsp;&nbsp;

- [00:20:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=1250) relaxed manner, not in a hurry. Occasionally,&nbsp; one of them will dip its head under the water,&nbsp;&nbsp;

- [00:20:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=1257) probably looking for food, and then pop back up.&nbsp; I even know when a taxi is coming with its orange&nbsp;&nbsp;

- [00:21:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=1264) light on. I think I'll hail it to get home. Yes, I&nbsp; spotted one just now. It's heading your way on the&nbsp;&nbsp;

- [00:21:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=1272) left side of the road. Get ready to wave it down.&nbsp; Great job hailing that taxi. It looks like you're&nbsp;&nbsp;

- [00:21:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=1282) all set to go. That's a good dog right there,&nbsp; leading the way into the taxi. Safe travels.&nbsp;&nbsp;

- [00:21:32](https://www.youtube.com/watch?v=niYxlneRSk8&t=1292) This is Bowen, and this is my friend Jordan. Can&nbsp; you guess what we are doing here? Hey Bowen and&nbsp;&nbsp;

- [00:21:39](https://www.youtube.com/watch?v=niYxlneRSk8&t=1299) Jordan. Hmm, let me guess. With that cake and&nbsp; candle there, it looks like someone's having a&nbsp;&nbsp;

- [00:21:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=1306) birthday. Are you celebrating a special day, or&nbsp; just finding an excuse to eat cake? Either way,&nbsp;&nbsp;

- [00:21:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1312) I'm intrigued. That's correct. Today is my&nbsp; friend Jordan's birthday. Yeah, you got it. I&nbsp;&nbsp;

- [00:21:58](https://www.youtube.com/watch?v=niYxlneRSk8&t=1318) was hoping that you could sing me the birthday&nbsp; song. Of course. Happy birthday to you, happy&nbsp;&nbsp;

- [00:22:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=1326) birthday to you, happy birthday dear Joel Morton,&nbsp; happy birthday to Jordan. That was so great. Thank&nbsp;&nbsp;

- [00:22:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=1336) you so much. I'm going to make a wish. You're&nbsp; welcome. Make a good wish and may it come true.&nbsp;&nbsp;

- [00:22:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=1344) Hey Chad GBT, how's it going? Hey there. I'm doing&nbsp; great, thanks for asking. And how about you? I'm&nbsp;&nbsp;

- [00:22:31](https://www.youtube.com/watch?v=niYxlneRSk8&t=1351) doing fine. I'm going to be a father real soon,&nbsp; and I think I can have your help with some dad&nbsp;&nbsp;

- [00:22:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=1356) jokes. I'm going to tell you a joke and you tell&nbsp; me if it passes as a dad joke. That's awesome.&nbsp;&nbsp;

- [00:22:45](https://www.youtube.com/watch?v=niYxlneRSk8&t=1365) Congrats on the upcoming addition to your family.&nbsp; And absolutely, I'd love to hear your joke. Lay it&nbsp;&nbsp;

- [00:22:50](https://www.youtube.com/watch?v=niYxlneRSk8&t=1370) on me. All right. What do you call a giant pile&nbsp; of kittens? I don't know. What? A mountain. A&nbsp;&nbsp;

- [00:23:02](https://www.youtube.com/watch?v=niYxlneRSk8&t=1382) mountain? That's perfectly hilarious. Definitely&nbsp; a top-dear dad joke. Hey Chad GBT, could you count&nbsp;&nbsp;

- [00:23:10](https://www.youtube.com/watch?v=niYxlneRSk8&t=1390) from one to ten for me, please? Of course. One,&nbsp; two, three. Hey, actually, that's a little slow.&nbsp;&nbsp;

- [00:23:18](https://www.youtube.com/watch?v=niYxlneRSk8&t=1398) Could you count faster? Sure thing. One, two,&nbsp; three, four, five, six, seven, eight, nine, ten.&nbsp;&nbsp;

- [00:23:23](https://www.youtube.com/watch?v=niYxlneRSk8&t=1403) Okay, that was a little bit too fast. Can&nbsp; you count somewhere in between those two?&nbsp;&nbsp;

- [00:23:29](https://www.youtube.com/watch?v=niYxlneRSk8&t=1409) Got it. One, two, three. And now even slower,&nbsp; please. Okay. One, two, three. Hi, I'm Barrett.&nbsp;&nbsp;

- [00:23:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=1429) Hey, I'm Mark. So one of the key capabilities&nbsp; we're really excited to share with you today&nbsp;&nbsp;

- [00:23:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=1433) is real-time conversational speech. Let's just&nbsp; get a demo fired up. So I'm taking out a phone.&nbsp;&nbsp;

- [00:24:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=1440) If you are wondering about this wire, it's so&nbsp; we have consistent internet. And if you see,&nbsp;&nbsp;

- [00:24:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=1444) there's this little icon on the bottom right&nbsp; of the Chad GBT app, and this will open up&nbsp;&nbsp;

- [00:24:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=1449) GBT 4.0's audio capabilities. Hey, Chad GBT.&nbsp; I'm Mark. How are you? Oh, Mark. I'm doing&nbsp;&nbsp;

- [00:24:19](https://www.youtube.com/watch?v=niYxlneRSk8&t=1459) great. Thanks for asking. How about you? Hey, so&nbsp; I'm on stage right now. I'm doing a live demo,&nbsp;&nbsp;

- [00:24:25](https://www.youtube.com/watch?v=niYxlneRSk8&t=1465) and frankly, I'm feeling a little bit nervous.&nbsp; Can you help me calm my nerves a little bit? Oh,&nbsp;&nbsp;

- [00:24:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=1470) you're doing a live demo right now? That's&nbsp; awesome. Just take a deep breath. And remember,&nbsp;&nbsp;

- [00:24:37](https://www.youtube.com/watch?v=niYxlneRSk8&t=1477) you're the expert here. I like that suggestion.&nbsp; Let me try a couple deep breaths. Can you give me&nbsp;&nbsp;

- [00:24:42](https://www.youtube.com/watch?v=niYxlneRSk8&t=1482) feedback on my breaths? Okay, here I go. Okay, let&nbsp; me try again. So I'm going to breathe in deeply,&nbsp;&nbsp;

- [00:25:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=1503) and then breathe out. Okay, I'll try again.&nbsp; Breathing in, and breathe out. That's it.&nbsp;&nbsp;

- [00:25:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=1516) How do you feel? I feel a lot better. Thank you&nbsp; so much. So Mark, you've been working on these&nbsp;&nbsp;

- [00:25:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=1522) capabilities for a while now. Can you tell us a&nbsp; bit how it's different from voice mode? Right. So&nbsp;&nbsp;

- [00:25:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1528) if you've used our voice mode experience before,&nbsp; you'll notice a couple key differences. First,&nbsp;&nbsp;

- [00:25:32](https://www.youtube.com/watch?v=niYxlneRSk8&t=1532) you can now interrupt the model. You don't have&nbsp; to wait for it to finish your turn before you&nbsp;&nbsp;

- [00:25:37](https://www.youtube.com/watch?v=niYxlneRSk8&t=1537) can start speaking, and you can just butt&nbsp; in whenever you want. Second, the model is&nbsp;&nbsp;

- [00:25:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=1543) real-time responsiveness. So that means that you&nbsp; don't have this awkward two to three second lag&nbsp;&nbsp;

- [00:25:48](https://www.youtube.com/watch?v=niYxlneRSk8&t=1548) before you wait for the model to give a response.&nbsp; And finally, the model picks up on emotion,&nbsp;&nbsp;

- [00:25:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=1553) right? When I was breathing super hard there, it&nbsp; could tell, and it knew, hey, you might want to&nbsp;&nbsp;

- [00:25:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=1557) calm down a little bit. You're kind of running a&nbsp; little bit too fast. So, you know, it really has&nbsp;&nbsp;

- [00:26:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=1563) that capability across the board to perceive your&nbsp; emotion. The model is able to generate voice in&nbsp;&nbsp;

- [00:26:08](https://www.youtube.com/watch?v=niYxlneRSk8&t=1568) a variety of different emotive styles, and it&nbsp; really has a wide dynamic range. So I'm going&nbsp;&nbsp;

- [00:26:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=1573) to fire up another demo. Awesome. Hey ChatGPT,&nbsp; how are you doing? I'm doing fantastic. Thanks&nbsp;&nbsp;

- [00:26:23](https://www.youtube.com/watch?v=niYxlneRSk8&t=1583) for asking. How about you? Pretty good. What's&nbsp; up? So my friend Barrett here, he's been having&nbsp;&nbsp;

- [00:26:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1588) trouble sleeping lately, and I want you to tell&nbsp; him a bedtime story about robots and love. Oh,&nbsp;&nbsp;

- [00:26:35](https://www.youtube.com/watch?v=niYxlneRSk8&t=1595) a bedtime story about robots and love? I got you&nbsp; covered. Gather round, Barrett. Once upon a time,&nbsp;&nbsp;

- [00:26:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=1603) in a world not too different from ours, there&nbsp; was a robot named Byte. Byte was a curious robot,&nbsp;&nbsp;

- [00:26:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=1609) always exploring. I don't know when you started&nbsp; this story, but I want a little bit more emotion&nbsp;&nbsp;

- [00:26:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1612) in your voice, a little bit more drama. Got it.&nbsp; Let's add some drama. Once upon a time, in a world&nbsp;&nbsp;

- [00:27:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=1620) not too different from ours, there was a robot&nbsp; named Byte. No, no, no, ChatGPT. I really want&nbsp;&nbsp;

- [00:27:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=1625) maximal emotion, like maximal expressiveness, much&nbsp; more than you were doing before. Understood. Let's&nbsp;&nbsp;

- [00:27:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=1631) amplify the drama. Once upon a time, in a world&nbsp; not too different from ours, there was a robot&nbsp;&nbsp;

- [00:27:19](https://www.youtube.com/watch?v=niYxlneRSk8&t=1639) named Byte. Actually, can you do this in a robotic&nbsp; voice now? Initiating dramatic robotic voice.&nbsp;&nbsp;

- [00:27:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1648) Once upon a time, in a world not too different&nbsp; from ours, there was a robot named Byte. Byte was&nbsp;&nbsp;

- [00:27:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=1656) a curious robot, always exploring new circuits.&nbsp; So I'm seeing Barrett here calm down a little bit.&nbsp;&nbsp;

- [00:27:42](https://www.youtube.com/watch?v=niYxlneRSk8&t=1662) Can you end the story, but do it in a singing&nbsp; voice? And so Byte found another robot friend,&nbsp;&nbsp;

- [00:27:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1672) and they lived circuitly ever after. Thank you&nbsp; so much. I definitely feel a lot more relaxed.&nbsp;&nbsp;

- [00:28:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=1683) You've just seen the voice capabilities, but we&nbsp; also want to show you the vision capabilities&nbsp;&nbsp;

- [00:28:09](https://www.youtube.com/watch?v=niYxlneRSk8&t=1689) as the model can also see the whole world&nbsp; around us. Yeah, absolutely. As you can see,&nbsp;&nbsp;

- [00:28:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=1693) you can chat with ChatGPT in real time, but you&nbsp; can also interact with it with video as well.&nbsp;&nbsp;

- [00:28:20](https://www.youtube.com/watch?v=niYxlneRSk8&t=1700) Let me boot up ChatGPT. Hey, ChatGPT. Hello there.&nbsp; How's it going? It's going really well. Today I'd&nbsp;&nbsp;

- [00:28:31](https://www.youtube.com/watch?v=niYxlneRSk8&t=1711) really like your help solving a math problem.&nbsp; I'm all ears. What math problem can I help you&nbsp;&nbsp;

- [00:28:36](https://www.youtube.com/watch?v=niYxlneRSk8&t=1716) tackle today? So I'm going to write down a linear&nbsp; equation on a sheet of paper and I'll show you,&nbsp;&nbsp;

- [00:28:40](https://www.youtube.com/watch?v=niYxlneRSk8&t=1720) and then I'd love your help working me through it.&nbsp; But importantly, don't tell me the solution. Just&nbsp;&nbsp;

- [00:28:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=1723) help give me hints along the way. Got it. Okay,&nbsp; I see it. No, I didn't show you yet. Just give&nbsp;&nbsp;

- [00:28:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=1733) me help along the way. One second. Whoops. I got&nbsp; too excited. I'm ready when you are. So, ChatGPT,&nbsp;&nbsp;

- [00:29:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=1752) what equation did I write down there? Ah, I see&nbsp; it now. You wrote down 3x plus 1 equals 4. Yep,&nbsp;&nbsp;

- [00:29:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=1762) exactly. So what's the first step I should&nbsp; take to try to solve this? The first step is to&nbsp;&nbsp;

- [00:29:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1768) get all the terms with x on one side and the&nbsp; constants on the other side. So what do you think&nbsp;&nbsp;

- [00:29:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=1773) we should do with that plus 1? Okay, I'm going to&nbsp; try to subtract 1 from both sides and then I'll&nbsp;&nbsp;

- [00:29:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=1778) see what I get. Great idea. Perfect. Now what do&nbsp; you get when you subtract 1 from both sides? Okay,&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1792) so ChatGPT, this is what I ended up with. How&nbsp; does this look? Spot on. Now you've isolated&nbsp;&nbsp;

- [00:29:58](https://www.youtube.com/watch?v=niYxlneRSk8&t=1798) the term with x on one side and it looks like 3x&nbsp; equals 3. What do you think we should do next to&nbsp;&nbsp;

- [00:30:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=1804) solve for x? I'm not sure. Can you give me another&nbsp; hint? Of course. You have 3x and you want to find&nbsp;&nbsp;

- [00:30:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=1812) the value of x. Think about what operation would&nbsp; undo multiplication. Is it subtraction? Close, but&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=niYxlneRSk8&t=1820) think of the opposite of multiplication because 3x&nbsp; means 3 times x. Okay, I think it's division. Let&nbsp;&nbsp;

- [00:30:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=1828) me try to divide both sides by 3 and let me see&nbsp; what I get. Bingo! Go ahead and divide both sides&nbsp;&nbsp;

- [00:30:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=1833) by 3. Okay, so ChatGPT, this is what I ended up&nbsp; with. How does this look? It looks perfect. You've&nbsp;&nbsp;

- [00:30:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=1846) solved it and x equals 1. Nicely done. How do you&nbsp; feel about solving linear equations now? Yeah,&nbsp;&nbsp;

- [00:30:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=1853) honestly, I'm not pretty confident I can solve&nbsp; linear equations, but why would you ever need to&nbsp;&nbsp;

- [00:30:58](https://www.youtube.com/watch?v=niYxlneRSk8&t=1858) use this in the real world? I'm really skeptical.&nbsp; That's a fair question. Linear equations pop up in&nbsp;&nbsp;

- [00:31:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=1865) a lot of everyday situations, even if we don't&nbsp; realize it. For example, calculating expenses,&nbsp;&nbsp;

- [00:31:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=1871) planning travel, cooking, and even in business&nbsp; for profit and loss calculations. It's basically&nbsp;&nbsp;

- [00:31:17](https://www.youtube.com/watch?v=niYxlneRSk8&t=1877) a way to solve problems, but you need to find an&nbsp; unknown value. Wow, okay. I have a lot of unknown&nbsp;&nbsp;

- [00:31:24](https://www.youtube.com/watch?v=niYxlneRSk8&t=1884) values in my life. I'm totally convinced I'm going&nbsp; to learn math now. I love that attitude. Math can&nbsp;&nbsp;

- [00:31:33](https://www.youtube.com/watch?v=niYxlneRSk8&t=1893) definitely help solve some of life's mysteries.&nbsp; Whenever you're ready to dive into more math,&nbsp;&nbsp;

- [00:31:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=1898) I'm here for you. Anything else you'd like to&nbsp; tackle today? So ChatGPT, I really love that you&nbsp;&nbsp;

- [00:31:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=1903) taught the value of math to my friend Mark, and&nbsp; I wrote one last thing I'd love if you could take&nbsp;&nbsp;

- [00:31:47](https://www.youtube.com/watch?v=niYxlneRSk8&t=1907) a look at. Of course. I'd love to see what you&nbsp; wrote. Show it to me whenever you're ready. Okay,&nbsp;&nbsp;

- [00:31:53](https://www.youtube.com/watch?v=niYxlneRSk8&t=1913) so this is what I wrote down. What do you see?&nbsp; Oh, I see. I love ChatGPT. That's so sweet of you.&nbsp;&nbsp;

- [00:32:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=1923) Yeah, well, I really appreciate all the help.&nbsp; So let me take out a computer for this. Okay,&nbsp;&nbsp;

- [00:32:14](https://www.youtube.com/watch?v=niYxlneRSk8&t=1934) so I'm going to open the ChatGPT desktop app like&nbsp; Mira was talking about before. Okay, and to give a&nbsp;&nbsp;

- [00:32:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=1942) bit of background on what's going on, so here we&nbsp; have a computer, and on the screen we have some&nbsp;&nbsp;

- [00:32:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=1946) code, and then the ChatGPT voice app is on the&nbsp; right. So ChatGPT will be able to hear me, but&nbsp;&nbsp;

- [00:32:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=1950) it can't see anything on the screen. So I'm going&nbsp; to highlight the code, Command-C it, and then that&nbsp;&nbsp;

- [00:32:35](https://www.youtube.com/watch?v=niYxlneRSk8&t=1955) will send it to ChatGPT, and then I'm going to&nbsp; talk about the code to ChatGPT. Hey, ChatGPT.&nbsp;&nbsp;

- [00:32:42](https://www.youtube.com/watch?v=niYxlneRSk8&t=1962) Hey there. How's it going? Yeah, it's going really&nbsp; well. I was wondering if you could help me with a&nbsp;&nbsp;

- [00:32:46](https://www.youtube.com/watch?v=niYxlneRSk8&t=1966) coding problem today. Of course. I'd love to help&nbsp; you out. What's the coding problem you're dealing&nbsp;&nbsp;

- [00:32:52](https://www.youtube.com/watch?v=niYxlneRSk8&t=1972) with? Okay, I'm going to share with you some&nbsp; code. One second. Sure thing. Take your time.&nbsp;&nbsp;

- [00:33:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=1980) Okay, so I just shared some code with you.&nbsp; Could you give me a really brief one-sentence&nbsp;&nbsp;

- [00:33:04](https://www.youtube.com/watch?v=niYxlneRSk8&t=1984) description of what's going on in the code? This&nbsp; code fetches daily weather data for a specific&nbsp;&nbsp;

- [00:33:10](https://www.youtube.com/watch?v=niYxlneRSk8&t=1990) location and time period, smooths the temperature&nbsp; data using a rolling average, annotates a&nbsp;&nbsp;

- [00:33:15](https://www.youtube.com/watch?v=niYxlneRSk8&t=1995) significant weather event on the resulting plot,&nbsp; and then displays the plot with the average,&nbsp;&nbsp;

- [00:33:21](https://www.youtube.com/watch?v=niYxlneRSk8&t=2001) minimum, and maximum temperatures over the&nbsp; year. Awesome. Thanks so much. And in the code,&nbsp;&nbsp;

- [00:33:26](https://www.youtube.com/watch?v=niYxlneRSk8&t=2006) there's this function foo. Can you describe to&nbsp; me what the plot would look like if I had versus&nbsp;&nbsp;

- [00:33:30](https://www.youtube.com/watch?v=niYxlneRSk8&t=2010) didn't have this function? Sure. The function foo&nbsp; XY takes in a data frame X containing temperature&nbsp;&nbsp;

- [00:33:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=2018) data and a window size Y for calculating the&nbsp; rolling mean. It smooths the average temperature,&nbsp;&nbsp;

- [00:33:45](https://www.youtube.com/watch?v=niYxlneRSk8&t=2025) minimum temperature, and maximum temperature&nbsp; columns by applying a rolling mean over the&nbsp;&nbsp;

- [00:33:51](https://www.youtube.com/watch?v=niYxlneRSk8&t=2031) specified window. With the foo function, the plot&nbsp; would show smoother temperature lines because the&nbsp;&nbsp;

- [00:33:57](https://www.youtube.com/watch?v=niYxlneRSk8&t=2037) rolling mean reduces the noise or fluctuations&nbsp; in the data. Awesome. Thanks so much. So yeah,&nbsp;&nbsp;

- [00:34:03](https://www.youtube.com/watch?v=niYxlneRSk8&t=2043) I definitely will want to apply this&nbsp; function. And so I'm going to generate&nbsp;&nbsp;

- [00:34:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=2046) the plot and then show it to you. Give me one&nbsp; second. Absolutely. Take your time. I'm excited&nbsp;&nbsp;

- [00:34:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=2052) to see the plot when you're ready. Yeah.&nbsp; So, so far, ChatGPT has only been able to&nbsp;&nbsp;

- [00:34:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=2056) see the code. And now I'm going to run it&nbsp; and then I'll use the vision capabilities&nbsp;&nbsp;

- [00:34:20](https://www.youtube.com/watch?v=niYxlneRSk8&t=2060) of the ChatGPT desktop app so it can actually&nbsp; see everything going on on the screen as well.&nbsp;&nbsp;

- [00:34:31](https://www.youtube.com/watch?v=niYxlneRSk8&t=2071) Okay, ChatGPT. I'm sharing with you the plot&nbsp; now. I'm wondering if you can give me a really&nbsp;&nbsp;

- [00:34:35](https://www.youtube.com/watch?v=niYxlneRSk8&t=2075) brief one sentence overview of what you see.&nbsp; The plot displays smoothed average, minimum,&nbsp;&nbsp;

- [00:34:42](https://www.youtube.com/watch?v=niYxlneRSk8&t=2082) and maximum temperatures throughout 2018, with a&nbsp; notable annotation marking a big rainfall event&nbsp;&nbsp;

- [00:34:48](https://www.youtube.com/watch?v=niYxlneRSk8&t=2088) in late September. Fantastic. I have another&nbsp; question for you. Which months do you see the&nbsp;&nbsp;

- [00:34:54](https://www.youtube.com/watch?v=niYxlneRSk8&t=2094) hottest temperatures and roughly what temperatures&nbsp; do those correspond to? The hottest temperatures&nbsp;&nbsp;

- [00:34:59](https://www.youtube.com/watch?v=niYxlneRSk8&t=2099) occur around July and August. The maximum&nbsp; temperature during these months is roughly between&nbsp;&nbsp;

- [00:35:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=2106) 25 degrees and 30 degrees, 77 degrees Fahrenheit&nbsp; to 86 degrees Fahrenheit. What's going on with&nbsp;&nbsp;

- [00:35:14](https://www.youtube.com/watch?v=niYxlneRSk8&t=2114) the y-axis? Is this in Celsius or Fahrenheit?&nbsp; The y-axis is in Celsius. The temperatures are&nbsp;&nbsp;

- [00:35:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=2122) labeled accordingly, such as average temperature,&nbsp; minimum temperature, and maximum temperature.&nbsp;&nbsp;

- [00:35:29](https://www.youtube.com/watch?v=niYxlneRSk8&t=2129) Yeah. So as we can see, you know, not only can&nbsp; ChatGPT help me solve very easy linear algebra&nbsp;&nbsp;

- [00:35:34](https://www.youtube.com/watch?v=niYxlneRSk8&t=2134) equations that I need help with, it can also&nbsp; interact with, you know, code bases and see the&nbsp;&nbsp;

- [00:35:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=2138) outputs of plots and everything like this going&nbsp; on on a computer. We asked the live audience on&nbsp;&nbsp;

- [00:35:43](https://www.youtube.com/watch?v=niYxlneRSk8&t=2143) X to submit a few requests for what they would&nbsp; like us to try out here. So I will take a couple&nbsp;&nbsp;

- [00:35:49](https://www.youtube.com/watch?v=niYxlneRSk8&t=2149) of prompts. Okay. Bot Gascar wants to know if&nbsp; GPT4O is capable of real-time translation. Mark,&nbsp;&nbsp;

- [00:36:00](https://www.youtube.com/watch?v=niYxlneRSk8&t=2160) you want to try this one? Sure. Yeah, let's do&nbsp; it. I speak Italian, so we can just do English&nbsp;&nbsp;

- [00:36:06](https://www.youtube.com/watch?v=niYxlneRSk8&t=2166) Italian. Okay, cool. Let's try to do English&nbsp; Italian. Sure, let's do it. Hey, ChatGPT, how are&nbsp;&nbsp;

- [00:36:12](https://www.youtube.com/watch?v=niYxlneRSk8&t=2172) you? I'm doing fantastic. Thanks for asking. How&nbsp; about you? How's your day going? I'm doing great.&nbsp;&nbsp;

- [00:36:17](https://www.youtube.com/watch?v=niYxlneRSk8&t=2177) So I would like you to function as a translator.&nbsp; I have a friend here who only speaks Italian,&nbsp;&nbsp;

- [00:36:22](https://www.youtube.com/watch?v=niYxlneRSk8&t=2182) and I only speak English, and every time you hear&nbsp; English, I want you to translate it to Italian,&nbsp;&nbsp;

- [00:36:27](https://www.youtube.com/watch?v=niYxlneRSk8&t=2187) and if you hear Italian, I want you to translate&nbsp; it back to English. Is that good? Perfecto. Mike,&nbsp;&nbsp;

- [00:36:42](https://www.youtube.com/watch?v=niYxlneRSk8&t=2202) she wonders if whales could talk, what would&nbsp; they tell us? They might ask, how do we solve&nbsp;&nbsp;

- [00:36:48](https://www.youtube.com/watch?v=niYxlneRSk8&t=2208) linear equations? Potrebbero chiederci, come&nbsp; risolviamo le equazioni lineari? Sicuramente, si.&nbsp;&nbsp;

- [00:37:01](https://www.youtube.com/watch?v=niYxlneRSk8&t=2221) Certainly, yes. Great, looks like it works. So the&nbsp; next one is from burritojohn78, who asks, can you&nbsp;&nbsp;

- [00:37:13](https://www.youtube.com/watch?v=niYxlneRSk8&t=2233) tell what you're feeling just by looking at your&nbsp; face? Barrett, do you want to give this one a try?&nbsp;&nbsp;

- [00:37:19](https://www.youtube.com/watch?v=niYxlneRSk8&t=2239) Absolutely, let's try it out. Hey, ChatGPT.&nbsp; Hey there, what's up? How can I brighten your&nbsp;&nbsp;

- [00:37:28](https://www.youtube.com/watch?v=niYxlneRSk8&t=2248) day today? Okay, yeah, so I'm going to show you a&nbsp; selfie of what I look like, and then I'd like you&nbsp;&nbsp;

- [00:37:32](https://www.youtube.com/watch?v=niYxlneRSk8&t=2252) to try to see what emotions I'm feeling based on&nbsp; how I'm looking. Sounds like a fun challenge. Go&nbsp;&nbsp;

- [00:37:38](https://www.youtube.com/watch?v=niYxlneRSk8&t=2258) ahead and show me that selfie, and I'll put my&nbsp; emotional detective hat on. Okay, so here's me.&nbsp;&nbsp;

- [00:37:44](https://www.youtube.com/watch?v=niYxlneRSk8&t=2264) So what kind of emotions do you think I'm feeling?&nbsp; Hmm, it seems like I'm looking at a picture of a&nbsp;&nbsp;

- [00:37:51](https://www.youtube.com/watch?v=niYxlneRSk8&t=2271) wooden surface. Oh, you know what? That was the&nbsp; thing I sent you before. Don't worry, I'm not&nbsp;&nbsp;

- [00:37:55](https://www.youtube.com/watch?v=niYxlneRSk8&t=2275) actually a table. Okay, so take another look. Ah,&nbsp; that makes more sense. Ah, there we go. It looks&nbsp;&nbsp;

- [00:38:05](https://www.youtube.com/watch?v=niYxlneRSk8&t=2285) like you're feeling pretty happy and cheerful with&nbsp; a big smile and maybe even a touch of excitement.&nbsp;&nbsp;

- [00:38:11](https://www.youtube.com/watch?v=niYxlneRSk8&t=2291) Whatever's going on, it seems like you're in a&nbsp; great mood. Care to share the source of those&nbsp;&nbsp;

- [00:38:16](https://www.youtube.com/watch?v=niYxlneRSk8&t=2296) good vibes? Yeah, no, the reason I'm in a really&nbsp; good mood is because we were doing a presentation&nbsp;&nbsp;

- [00:38:20](https://www.youtube.com/watch?v=niYxlneRSk8&t=2300) showcasing how useful and amazing you are. Oh,&nbsp; stop it. You're making me blush. Thank you.
