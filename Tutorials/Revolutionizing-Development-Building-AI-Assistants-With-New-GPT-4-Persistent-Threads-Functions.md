# Revolutionizing Development: Building AI Assistants With New GPT-4 | Persistent Threads, Functions

## Full tutorial link > https://www.youtube.com/watch?v=cnVlYm9j9h4

[![Revolutionizing Development: Building AI Assistants With New GPT-4 | Persistent Threads, Functions](https://img.youtube.com/vi/cnVlYm9j9h4/sddefault.jpg)](https://www.youtube.com/watch?v=cnVlYm9j9h4 "Revolutionizing Development: Building AI Assistants With New GPT-4 | Persistent Threads, Functions")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Revolutionizing-Development-Building-AI-Assistants-With-New-GPT-4-Persistent-Threads-Functions.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Revolutionizing-Development-Building-AI-Assistants-With-New-GPT-4-Persistent-Threads-Functions.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


This video is Part 6 of #OpenAI #DevDay #GPT

Full Event : [https://www.youtube.com/watch?v=U9mJuUkhUzk](https://www.youtube.com/watch?v=U9mJuUkhUzk)

Credits : [https://www.youtube.com/watch?v=U9mJuUkhUzk](https://www.youtube.com/watch?v=U9mJuUkhUzk)

Embark on a journey through the frontier of software development with our latest video, "Revolutionizing Development: Building AI Assistants with the New Assistance API." Dive into the heart of innovation as we unravel the capabilities of the newest API designed to streamline the creation of intelligent agents. From the collaborative power of Shopify's sidekick to the customizable nature of Discord's moderator bots, witness firsthand how these tools have transformed but also challenged the development landscape. We're unveiling an easier way to build custom assistant experiences with our assistance API that boasts persistent threads, built-in retrieval, and a sandboxed Python interpreter. Get a front-row seat to a live demo led by our head of developer experience, showcasing the seamless integration of AI and UI, the simplicity of adding interactive assistants to apps, and the powerful new developer tools at your fingertips. Whether you're building the next big travel app or an innovative chatbot, this video is your gateway to mastering the assistance API and injecting AI into your projects with unprecedented ease.

[00:00:00](https://youtu.be/cnVlYm9j9h4?t=0) 🌐 Developers can build AI assistants using the new Assistance API, making it easier to create custom assistant experiences.

[00:00:56](https://youtu.be/cnVlYm9j9h4?t=56) 🧰 The Assistance API includes features like persistent threads, retrieval code interpreter, Python interpreter, and sandbox environment to simplify assistant development.

[00:02:44](https://youtu.be/cnVlYm9j9h4?t=164) 📝 Developers can easily create assistants with the Assistance API by specifying a model, tools, and integrating with threads and messages.

[00:03:35](https://youtu.be/cnVlYm9j9h4?t=215) 🔄 Function calling in the API now supports JSON output with no added latency and the ability to invoke multiple functions simultaneously.

[00:04:29](https://youtu.be/cnVlYm9j9h4?t=269) 📚 Retrieval capabilities allow assistants to extract knowledge from documents, making it easier to provide information and interact with files.

[00:05:19](https://youtu.be/cnVlYm9j9h4?t=319) The new stateful API simplifies handling conversation history and context, reducing complexity for developers while providing transparency in the developer dashboard.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=0) But this is a developer conference, and the&nbsp; coolest thing about this is that we're bringing&nbsp;&nbsp;

- [00:00:04](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=4) the same concept to the API. Many of you have&nbsp; already been building agent-like experiences&nbsp;&nbsp;

- [00:00:16](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=16) on the API. For example, Shopify's Sidekick,&nbsp; which lets you take actions on the platform;&nbsp;&nbsp;

- [00:00:23](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=23) Discord's CDE lets Discord moderators create&nbsp; custom personalities for; and Snap's My AI,&nbsp;&nbsp;

- [00:00:30](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=30) a customized chatbot that can be added to&nbsp; group chats and make recommendations. These&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=34) experiences are great, but they have been&nbsp; hard to build, sometimes taking months,&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=40) teams of dozens of engineers. There's&nbsp; a lot to handle to make this custom&nbsp;&nbsp;

- [00:00:44](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=44) assistant experience. So today, we're making&nbsp; that a lot easier with our new Assistance API.

- [00:00:56](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=56) The Assistance API includes persistent&nbsp; threads, so you don't have to figure out&nbsp;&nbsp;

- [00:01:00](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=60) how to deal with long conversation history,&nbsp; a built-in retrieval code interpreter,&nbsp;&nbsp;

- [00:01:06](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=66) a working Python interpreter, and a&nbsp; sandbox environment, and of course,&nbsp;&nbsp;

- [00:01:10](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=70) the improved function calling that we talked&nbsp; about earlier. So we'd like to show you a&nbsp;&nbsp;

- [00:01:16](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=76) demo of how this works, and here is Raman,&nbsp; our head of developer experience. Welcome.

- [00:01:20](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=80) R: Thank you, S. Good morning! Wow, it's fantastic&nbsp; to see you all here. It's been so inspiring to see&nbsp;&nbsp;

- [00:01:33](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=93) so many of you infusing AI into your apps. Today,&nbsp; we're launching new modalities in the API, but&nbsp;&nbsp;

- [00:01:40](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=100) we are also very excited to improve the developer&nbsp; experience for you all to build assistive agents.&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=106) So, let's dive right in. Imagine I'm building&nbsp; Wust, a travel app for global explorers,&nbsp;&nbsp;

- [00:01:52](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=112) and this is the landing page. I've actually used&nbsp; GP4 to come up with these destination ideas,&nbsp;&nbsp;

- [00:01:57](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=117) and for those of you with a keen eye, these&nbsp; illustrations are generated programmatically&nbsp;&nbsp;

- [00:02:02](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=122) using the new DALL-E 3 API, available to all of&nbsp; you today. So it's pretty remarkable. But let's&nbsp;&nbsp;

- [00:02:09](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=129) enhance this app by adding a very simple assistant&nbsp; to it. This is the screen we're going to come&nbsp;&nbsp;

- [00:02:14](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=134) back to in a second. First, I'm going to switch&nbsp; over to the new Assistant Playground. Creating&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=139) an assistant is easy; you just give it a name,&nbsp; some initial instructions, a model—in this case,&nbsp;&nbsp;

- [00:02:25](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=145) I'll pick GP4 Turbo—and here, I'll also&nbsp; go ahead and select some tools. I'll turn&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=150) on the code interpreter and retrieval and save.&nbsp; And that's it! Our assistant is ready to go. Next,&nbsp;&nbsp;

- [00:02:38](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=158) I can integrate with two new primitives of this&nbsp; Assistance API: threads and messages. Let's take a&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=164) quick look at the code. The process here is very&nbsp; simple. For each new user, I will create a new&nbsp;&nbsp;

- [00:02:51](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=171) thread, and as these users engage with their&nbsp; assistant, I will add their messages to the&nbsp;&nbsp;

- [00:02:56](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=176) threads—very simple. And then, I can simply run&nbsp; the assistant at any time to stream the responses&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=182) back to the app. So, we can return to the app and&nbsp; try that in action. If I say, "Hey, let's go to

- [00:03:10](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=190) Paris." Alright, that's it. With just a few lines&nbsp; of code, users can now have a very specialized&nbsp;&nbsp;

- [00:03:18](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=198) assistant right inside the app. And I'd like&nbsp; to highlight one of my favorite features here:&nbsp;&nbsp;

- [00:03:24](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=204) function calling. If you have not used it&nbsp; yet, function calling is really powerful,&nbsp;&nbsp;

- [00:03:29](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=209) and as Sam mentioned, we're taking it a step&nbsp; further today. It now guarantees JSON output&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=215) with no added latency, and you can invoke multiple&nbsp; functions at once for the first time. So here,&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=221) if I carry on and say, "Hey, what are the top 10&nbsp; things to do?" I'll have the assistant respond&nbsp;&nbsp;

- [00:03:49](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=229) to that again, and here, what's interesting&nbsp; is that the assistant knows about functions,&nbsp;&nbsp;

- [00:03:54](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=234) including those to annotate the map&nbsp; that you see on the right. And so now,&nbsp;&nbsp;

- [00:03:58](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=238) all of these pins are dropping in&nbsp; real-time here. Yeah, it's pretty

- [00:04:03](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=243) cool. And that integration allows our&nbsp; natural language interface to interact&nbsp;&nbsp;

- [00:04:12](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=252) fluidly with components and features of our&nbsp; app, and it truly showcases now the harmony&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=257) you can build between AI and UI, where the&nbsp; assistant is actually taking action. But next,&nbsp;&nbsp;

- [00:04:24](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=264) let's talk about retrieval. And retrieval is about&nbsp; giving our assistant more knowledge beyond the&nbsp;&nbsp;

- [00:04:29](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=269) immediate user messages. In fact, I got inspired,&nbsp; and I already booked my tickets to uh, to Paris,&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=275) so I'm just going to drag and drop here this&nbsp; PDF. While it's uploading, I can just sneak&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=280) peek at it—very typical United flight ticket.&nbsp; And behind the scene here, what's happening is&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=286) that retrieval is reading these files, and boom,&nbsp; the information about this PDF appeared on the

- [00:04:52](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=292) screen. And this is, of course, a very tiny PDF,&nbsp; but assistants can parse long-form documents from&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=301) extensive text to intricate product specs,&nbsp; depending on what you're building. In fact,&nbsp;&nbsp;

- [00:05:05](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=305) I also booked an Airbnb, so I'm just going to&nbsp; drag that over to the conversation as well.&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=310) And by the way, we've heard from so many of you&nbsp; developers how hard that is to build yourself.&nbsp;&nbsp;

- [00:05:15](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=315) You typically need to compute embeddings,&nbsp; you need to set up chunking algorithms. Now,&nbsp;&nbsp;

- [00:05:19](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=319) all of that is taken care of. And there's&nbsp; more than retrieval. With every API call,&nbsp;&nbsp;

- [00:05:25](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=325) you usually need to resend the entire conversation&nbsp; history, which means setting up a key-value store,&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=331) that means like handling the context window,&nbsp; serializing messages, and so forth. That&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=336) complexity now completely goes away with this new&nbsp; stateful API. But just because Aonia is managing&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=342) this API does not mean it's a black box. In fact,&nbsp; you can see the steps that the tools are taking&nbsp;&nbsp;

- [00:05:48](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=348) right inside your developer dashboard. So here,&nbsp; if I go ahead and click on threads, this is the&nbsp;&nbsp;

- [00:05:54](https://www.youtube.com/watch?v=cnVlYm9j9h4&t=354) thread I believe we're currently working on, and&nbsp; see, like these are all the steps incl the fun
