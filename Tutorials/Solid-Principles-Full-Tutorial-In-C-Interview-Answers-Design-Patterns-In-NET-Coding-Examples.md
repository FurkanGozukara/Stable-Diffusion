# Solid Principles Full Tutorial In C# - Interview Answers - Design Patterns In .NET - Coding Examples

## Full tutorial link > https://www.youtube.com/watch?v=034zM9MQdkU

[![Solid Principles Full Tutorial In C# - Interview Answers - Design Patterns In .NET - Coding Examples](https://img.youtube.com/vi/034zM9MQdkU/sddefault.jpg)](https://www.youtube.com/watch?v=034zM9MQdkU "Solid Principles Full Tutorial In C# - Interview Answers - Design Patterns In .NET - Coding Examples")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Solid-Principles-Full-Tutorial-In-C-Interview-Answers-Design-Patterns-In-NET-Coding-Examples.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Solid-Principles-Full-Tutorial-In-C-Interview-Answers-Design-Patterns-In-NET-Coding-Examples.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


In this lecture video I am explaining what are solid design principles. I am composing a .NET Core 7 WPF project to demonstrate each one of the principles of the solid design in C-Sharp programming language. I believe that the best methodology for learning something is doing an actual programming example. Therefore, we will make examples together.

SOLID is acronym of:

S - SRP - Single responsibility principle

O - OCP - Open/closed principle

L - LSP - Liskov substitution principle

I - ISP - Interface segregation principle

D - DIP - Dependency inversion principle

Foreach principle, I am composing 2 classes that shows violation and correct approach.

The source code of the lecture is available on : 🔗 [https://github.com/FurkanGozukara/Solid-Principles-Full-Tutorial-In-C-Interview-Answers-Design-Patterns-In-.NET-Coding-Examples](https://github.com/FurkanGozukara/Solid-Principles-Full-Tutorial-In-C-Interview-Answers-Design-Patterns-In-.NET-Coding-Examples)

The subtitles of the video is manually corrected so please watch with subtitles.

Please join Our Discord server for asking questions and have discussions: 🔗 [https://discord.gg/rfttctFewW](https://discord.gg/rfttctFewW)

Please follow us on Twitter: 🔗 [https://twitter.com/SECourses](https://twitter.com/SECourses)

Please follow us on Facebook: 🔗 [https://www.facebook.com/OfficialSECourses](https://www.facebook.com/OfficialSECourses)

If you are interested in programming our playlists will teach you how to program and code from scratch: 🔗 [https://www.youtube.com/c/SECourses/playlists](https://www.youtube.com/c/SECourses/playlists)

[1] Introduction to Programming Full Course with C# playlist

[2] Advanced Programming with C# Full Course Playlist

[3] Object Oriented Programming Full Course with C# playlist

[4] Asp #NETCore V5 - MVC Pattern - Bootstrap V5 - Responsive Web Programming with C# Full Course Playlist

[5] Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist

[6] Software Engineering Full Course playlist

[7] Security of Information Systems Full Course playlist



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=034zM9MQdkU&t=0) Hello everyone. I am Dr. Furkan Gözükara.&nbsp; Today I am going to explain to you what are&nbsp;&nbsp;

- [00:00:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=6) solid design principles. I will compose a .NET&nbsp; Core 7 WPF project to demonstrate each one of&nbsp;&nbsp;

- [00:00:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=12) the principles of the solid design in C-Sharp&nbsp; programming language. I believe that the best&nbsp;&nbsp;

- [00:00:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=18) methodology for learning something is doing an&nbsp; actual programming example. The code written&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=22) in this lecture will be uploaded to our public&nbsp; GitHub repository so that you can download and&nbsp;&nbsp;

- [00:00:27](https://www.youtube.com/watch?v=034zM9MQdkU&t=27) use it yourself. I will put the link of the&nbsp; repository in the description of the video.&nbsp;&nbsp;

- [00:00:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=33) So let's start with composing our WPF project.&nbsp; You see I have clicked create a new project in&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=40) Visual Studio Community Edition and&nbsp; I have filtered the result with WPF.&nbsp;&nbsp;

- [00:00:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=46) There are two versions of WPF. The first one&nbsp; is WPF application which is .NET Core and&nbsp;&nbsp;

- [00:00:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=53) there is also another version which is WPF of .NET&nbsp; Framework. .NET Framework is the older one and it&nbsp;&nbsp;

- [00:00:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=59) is not updated anymore. So be careful with that.&nbsp; I am picking the WPF application with .NET Core&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=69) and let's pick our folder name&nbsp; as solid design principles.&nbsp;&nbsp;

- [00:01:19](https://www.youtube.com/watch?v=034zM9MQdkU&t=79) I will pick the .NET 7 standard term support.&nbsp; Okay, so our application is starting. So&nbsp;&nbsp;

- [00:01:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=86) let's quickly review and understand what are the&nbsp; solid design principles and why do we need them.&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=97) Okay. Why do we need solid design principles?&nbsp; As a developer, we start developing applications&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=106) using our experience and knowledge. But over&nbsp; time, the applications might arise bugs.&nbsp;&nbsp;

- [00:01:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=113) We need to alter the application design for every&nbsp; change request or for a new feature request.&nbsp;&nbsp;

- [00:01:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=119) After some time we might need to put a lot of&nbsp; effort, even for simple tasks, it might require&nbsp;&nbsp;

- [00:02:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=124) the full working knowledge of the entire system.&nbsp; But we can't blame change or new feature requests&nbsp;&nbsp;

- [00:02:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=131) as they are part of the software development.&nbsp; We can't stop them and refuse them either.&nbsp;&nbsp;

- [00:02:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=137) So who is the culprit here? Obviously,&nbsp; it is the design of the application.&nbsp;&nbsp;

- [00:02:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=143) Okay, this is so true. I have 13 years of software&nbsp; development experience and I assure you that you&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=150) will have to fix and improve so many parts of&nbsp; your application after its initial release.&nbsp;&nbsp;

- [00:02:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=159) You will encounter bugs and you will&nbsp; and you will get a new feature request.&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=164) So if you design your application with following&nbsp; the state of art principles, then you will have&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=175) less problems. Okay, this is why solid design&nbsp; principles is really important in application&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=183) development. So let's continue reading.&nbsp; Advantages of solid design principles in C#.&nbsp;&nbsp;

- [00:03:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=192) As a developer, while you are designing&nbsp; and developing any software applications,&nbsp;&nbsp;

- [00:03:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=197) then you need to consider the following&nbsp; points. Maintainability. Nowadays,&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=203) maintaining the software is the biggest challenge&nbsp; for the industry. Day by day, the business grows&nbsp;&nbsp;

- [00:03:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=209) for the organization and as the business grows,&nbsp; you need to enhance the software with new changes.&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=215) So you need to design the software in such a way&nbsp; that it should accept future changes with minimum&nbsp;&nbsp;

- [00:03:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=220) effort and without any problem. Okay, I am pretty&nbsp; sure that you have already noticed this in the&nbsp;&nbsp;

- [00:03:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=228) applications that you use in your real life. You&nbsp; see that your applications always gets new updates&nbsp;&nbsp;

- [00:03:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=235) and gets new features. So this is something that&nbsp; you can't avoid in your software development life.&nbsp;&nbsp;

- [00:04:07](https://www.youtube.com/watch?v=034zM9MQdkU&t=247) Testability. Test-driven development TDD&nbsp; is one of the most important key aspects&nbsp;&nbsp;

- [00:04:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=254) nowadays when you need to design and develop a&nbsp; large-scale application. We need to design the&nbsp;&nbsp;

- [00:04:20](https://www.youtube.com/watch?v=034zM9MQdkU&t=260) application in such a way that we should test&nbsp; each individual functionalities. Okay, this is&nbsp;&nbsp;

- [00:04:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=265) another thing in the nowadays programming trends&nbsp; that your code has to be automatically testable.&nbsp;&nbsp;

- [00:04:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=275) This is also mandatory in continuous&nbsp; development and continuous integration scheme&nbsp;&nbsp;

- [00:04:42](https://www.youtube.com/watch?v=034zM9MQdkU&t=282) following application development. Okay.&nbsp;&nbsp;

- [00:04:50](https://www.youtube.com/watch?v=034zM9MQdkU&t=290) Flexibility and Extensibility.&nbsp;&nbsp;

- [00:04:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=294) Nowadays, flexibility and extensibility both are&nbsp; very much required for enterprise applications.&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=301) So we should design the application in such&nbsp; a way that it should be flexible so that it&nbsp;&nbsp;

- [00:05:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=305) can be adapted to work in different ways and&nbsp; extensible so that we can add new features&nbsp;&nbsp;

- [00:05:10](https://www.youtube.com/watch?v=034zM9MQdkU&t=310) easily with minimum modifications. Okay,&nbsp; this is also another important thing and&nbsp;&nbsp;

- [00:05:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=315) when we follow correct design principles,&nbsp; we won't have a hard time to achieve this.&nbsp;&nbsp;

- [00:05:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=324) Parallel Development. The parallel development&nbsp; of an application is one of the most important&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=331) key aspects. As we know, it is not possible&nbsp; to have the entire development team will work&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=336) on the same module at the same time. So&nbsp; we need to design the software in such a&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=034zM9MQdkU&t=342) way that different teams can work on different&nbsp; modules. The solid design principles and design&nbsp;&nbsp;

- [00:05:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=348) patterns play an important role in achieving&nbsp; all of the above key points. All right.&nbsp;&nbsp;

- [00:05:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=358) The solid design principles in C# are the design&nbsp; principles that basically used to manage most of&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=364) the software design problems that generally&nbsp; we encountered in our day-to-day programming.&nbsp;&nbsp;

- [00:06:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=369) These design principles are provided with some&nbsp; mechanism that will make the software designs&nbsp;&nbsp;

- [00:06:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=374) more understandable, flexible and maintainable.&nbsp; What is the main reason behind most of the&nbsp;&nbsp;

- [00:06:21](https://www.youtube.com/watch?v=034zM9MQdkU&t=381) unsuccessful applications? The following are the&nbsp; main reasons for most of the software failures.&nbsp;&nbsp;

- [00:06:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=388) Putting more functionalities on classes. In&nbsp; the simple word a lot of functionalities we&nbsp;&nbsp;

- [00:06:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=394) are putting into the class even though&nbsp; they are not related to the class.&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=399) Implementing tight coupling between the classes.&nbsp; If the classes are dependent on each other,&nbsp;&nbsp;

- [00:06:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=405) then a change in one class will&nbsp; affect the other classes also.&nbsp;&nbsp;

- [00:06:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=409) How to overcome the unsuccessful application&nbsp; development problem? We need to use the correct&nbsp;&nbsp;

- [00:06:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=416) architecture, (i.e. MVC, Layered, 3-tier, MVP,&nbsp; and so on) as per the project requirements.&nbsp;&nbsp;

- [00:07:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=425) As a developer, we need to follow the&nbsp; design principles, i.e. solid principles.&nbsp;&nbsp;

- [00:07:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=431) Again, we need to choose the correct design&nbsp; patterns as per the project requirements.&nbsp;&nbsp;

- [00:07:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=437) Introduction to solid design principles in&nbsp; C-sharp. The solid design principles are&nbsp;&nbsp;

- [00:07:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=444) basically used to manage most of the software&nbsp; design problems that generally as a developer&nbsp;&nbsp;

- [00:07:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=448) we face in our day-to-day programming. Solid&nbsp; principles represent five design principles&nbsp;&nbsp;

- [00:07:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=454) that basically used to make the software designs&nbsp; more understandable, flexible, and maintainable.&nbsp;&nbsp;

- [00:07:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=461) Solid acronym: Okay, this is important.&nbsp; Usually, nowadays, in the job interviews,&nbsp;&nbsp;

- [00:07:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=468) they are asking you what does solid mean. They&nbsp; are asking you to explain each one of these&nbsp;&nbsp;

- [00:07:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=475) design principles. I have been asked actually.&nbsp; And so let's try to memorize and understand them.&nbsp;&nbsp;

- [00:08:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=485) S stands for the single responsibility&nbsp; principle, which is also known as SRP. Okay,&nbsp;&nbsp;

- [00:08:10](https://www.youtube.com/watch?v=034zM9MQdkU&t=490) don't worry that I will explain each&nbsp; one of these principles with details.&nbsp;&nbsp;

- [00:08:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=498) O stands for the open-closed&nbsp; principle, which is also known as OSP.&nbsp;&nbsp;

- [00:08:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=504) L stands for the Liskov substitution&nbsp; principle, which is also known as LSP.&nbsp;&nbsp;

- [00:08:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=510) I stand for the interface segregation&nbsp; principle, which is also known as ISP.&nbsp;&nbsp;

- [00:08:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=516) D stands for dependency inversion&nbsp; principle, which is also known as DIP.&nbsp;&nbsp;

- [00:08:42](https://www.youtube.com/watch?v=034zM9MQdkU&t=522) What are the advantages of using&nbsp; solid design principles in C-sharp?&nbsp;&nbsp;

- [00:08:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=527) We will get the following advantages of using&nbsp; solid design principles in C-sharp. Achieve the&nbsp;&nbsp;

- [00:08:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=534) reduction in complexity of the code. Increase&nbsp; readability, extensibility, and maintenance.&nbsp;&nbsp;

- [00:09:02](https://www.youtube.com/watch?v=034zM9MQdkU&t=542) Reduce error and implement reusability. Achieve&nbsp; better testability. Reduce tight coupling. Okay,&nbsp;&nbsp;

- [00:09:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=551) so actually we can say that each one of&nbsp; these is matching these ones. The first&nbsp;&nbsp;

- [00:09:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=558) one achieves reduction in complexity of the&nbsp; code with single responsibility, because each&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=563) class is responsible for only one thing. Okay,&nbsp; one job, and it reduces complexity. You see,&nbsp;&nbsp;

- [00:09:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=571) open-closed principle increases readability,&nbsp; extensibility, and maintenance, because our&nbsp;&nbsp;

- [00:09:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=579) code will be closed to modify, but it will be&nbsp; open to extend, and with Liskov substitution&nbsp;&nbsp;

- [00:09:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=589) principle, we will reduce error and implement&nbsp; reusability. It will allow us to reuse our code&nbsp;&nbsp;

- [00:09:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=595) as much as possible with easiness, and with&nbsp; interface segregation principle, we will achieve&nbsp;&nbsp;

- [00:10:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=601) better testability, and with dependency inversion&nbsp; principle, we will reduce tight coupling. Okay,&nbsp;&nbsp;

- [00:10:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=609) so let's start programming with&nbsp; single responsibility principle.&nbsp;&nbsp;

- [00:10:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=615) Okay, so let's quickly read what does&nbsp; it do, what is the meaning of it.&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=624) What is the single responsibility principle&nbsp; in C#? The single responsibility principle&nbsp;&nbsp;

- [00:10:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=631) in C# states that each software module or&nbsp; class should have only one reason to change.&nbsp;&nbsp;

- [00:10:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=637) In other words, we can say that each module or&nbsp; class should have only one responsibility to do.&nbsp;&nbsp;

- [00:10:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=644) So we need to design the software in such a way&nbsp; that everything in a class or module should be&nbsp;&nbsp;

- [00:10:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=649) related to a single responsibility. That does not&nbsp; mean your class should contain only one method or&nbsp;&nbsp;

- [00:10:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=656) property, you can have multiple members, methods,&nbsp; or properties, as long as they are related to a&nbsp;&nbsp;

- [00:11:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=661) single responsibility or functionality. So with&nbsp; the help of SRP in C-sharp, the classes become&nbsp;&nbsp;

- [00:11:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=669) smaller and cleaner and thus easier to maintain.&nbsp; Okay, so you see why it is becoming easier to&nbsp;&nbsp;

- [00:11:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=675) maintain. So let's start with coding. The first&nbsp; example is the opposite of single responsibility.&nbsp;&nbsp;

- [00:11:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=682) Assume that we have invoice class. Let's&nbsp; start implementing it. All right. Okay,&nbsp;&nbsp;

- [00:11:32](https://www.youtube.com/watch?v=034zM9MQdkU&t=692) so the first example will be an example that&nbsp; violates single responsibility principle.&nbsp;&nbsp;

- [00:11:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=708) Okay. By the way, I have written&nbsp; this correctly, I think. Okay, let's&nbsp;&nbsp;

- [00:11:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=718) make it like this. Okay, example that&nbsp; violates single responsibility. Okay.&nbsp;&nbsp;

- [00:12:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=733) All right. So let's add a class. I'm going&nbsp; to add single responsibility violation class.&nbsp;&nbsp;

- [00:12:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=751) And I will copy-paste the code here. All right.&nbsp;&nbsp;

- [00:12:42](https://www.youtube.com/watch?v=034zM9MQdkU&t=762) Okay, so what do we have? Let's analyze&nbsp; it. We have a class invoice. It has a&nbsp;&nbsp;

- [00:12:51](https://www.youtube.com/watch?v=034zM9MQdkU&t=771) long invoice amount. We have daytime invoice&nbsp; date. They are, as you can see, attributes.&nbsp;&nbsp;

- [00:13:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=783) Okay, and we have add invoice method. You see&nbsp; it in add invoice method. We are also sending&nbsp;&nbsp;

- [00:13:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=791) an email. Okay. And if if an error happens,&nbsp; we are also logging the error. So this method&nbsp;&nbsp;

- [00:13:19](https://www.youtube.com/watch?v=034zM9MQdkU&t=799) actually doing three separate things. With direct&nbsp; implementation, we have delete invoice method.&nbsp;&nbsp;

- [00:13:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=818) Which also logs, as you can see here, and&nbsp; we have send invoice email. All right.&nbsp;&nbsp;

- [00:13:51](https://www.youtube.com/watch?v=034zM9MQdkU&t=831) And okay. Okay, so with this way, we are violating&nbsp; our principle. Why? Because we are doing three&nbsp;&nbsp;

- [00:14:07](https://www.youtube.com/watch?v=034zM9MQdkU&t=847) separate things in a single class like this. Okay,&nbsp; let me show single responsibility violation. Okay.&nbsp;&nbsp;

- [00:14:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=857) And&nbsp;&nbsp;

- [00:14:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=865) here we are just calling. Okay, these are&nbsp; not public or. Okay. We need to generate.&nbsp;&nbsp;

- [00:14:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=884) One second. Okay, we don't need actually this.&nbsp;&nbsp;

- [00:14:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=893) Like this. Violated invoice or&nbsp; let's say incorrect invoice.&nbsp;&nbsp;

- [00:15:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=906) And incorrect invoice. Add invoice. Okay, like&nbsp; this. So this usage is not the correct way. Okay.&nbsp;&nbsp;

- [00:15:16](https://www.youtube.com/watch?v=034zM9MQdkU&t=916) How then if it is incorrect, then how can we fix&nbsp; this? To fix this, we need to separate the tasks&nbsp;&nbsp;

- [00:15:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=926) that each the task here inside here into different&nbsp; classes. Okay, so first let's start adding with&nbsp;&nbsp;

- [00:15:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=938) a logger system. That login logger class will&nbsp; handle the logging if an error happens. Okay.&nbsp;&nbsp;

- [00:15:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=946) So to adding the logger system, I will&nbsp; just copy and paste this. You see,&nbsp;&nbsp;

- [00:15:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=952) all of these can be inside the parent class,&nbsp; but they will have different subclasses names.&nbsp;&nbsp;

- [00:15:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=959) So we are separating the concern. I mean, they&nbsp; can be inside this same CS file. Or you could&nbsp;&nbsp;

- [00:16:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=966) also do you could also insert different&nbsp; CS files as well. Maybe we should add&nbsp;&nbsp;

- [00:16:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=975) different CS files so it will be easier to&nbsp; manage. So let's add a logger CS file. Okay,&nbsp;&nbsp;

- [00:16:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=985) in parent class logger, so I will just change it.&nbsp;&nbsp;

- [00:16:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=993) Like this. Okay, so we have an interface and with&nbsp; interface we define which methods this inheriting&nbsp;&nbsp;

- [00:16:43](https://www.youtube.com/watch?v=034zM9MQdkU&t=1003) class or yes, inheriting class should have. So we&nbsp; have a logger class that uses interface iLogger&nbsp;&nbsp;

- [00:16:51](https://www.youtube.com/watch?v=034zM9MQdkU&t=1011) and inside we are constructing the methods.&nbsp; We have constructor, we have info method,&nbsp;&nbsp;

- [00:16:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=1018) we have debug method and we have error method. You&nbsp; can fill anything inside here. The purpose of this&nbsp;&nbsp;

- [00:17:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=1025) lecture to demonstrate how to do proper solid&nbsp; design principles following programming. So we&nbsp;&nbsp;

- [00:17:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=1034) also need to now modify our code. Oh, we also need&nbsp; to add another class for mail messaging. Okay.&nbsp;&nbsp;

- [00:17:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=1046) So let's add a mail sender class.&nbsp;&nbsp;

- [00:17:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=1054) All right, let's name it as mail&nbsp; sender. And inside here, make it as&nbsp;&nbsp;

- [00:17:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=1064) public class mail sender. You see mail sender&nbsp; has only one purpose and it is send email.&nbsp;&nbsp;

- [00:17:50](https://www.youtube.com/watch?v=034zM9MQdkU&t=1070) All right. Okay, now finally we can modify our&nbsp; invoice class properly to be following solid&nbsp;&nbsp;

- [00:18:00](https://www.youtube.com/watch?v=034zM9MQdkU&t=1080) design principles. And for that, okay, let's&nbsp; add another button. You know, you can fill&nbsp;&nbsp;

- [00:18:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=1089) anything inside these methods. Okay, and let's&nbsp; call it as proper single responsibility. Okay.&nbsp;&nbsp;

- [00:18:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=1110) All right, so I am going to add another&nbsp; class and I will say proper invoice.&nbsp;&nbsp;

- [00:18:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=1117) Okay, let's name it as proper invoice.&nbsp;&nbsp;

- [00:18:43](https://www.youtube.com/watch?v=034zM9MQdkU&t=1123) Okay, we can leave it as internal as well&nbsp; for the demo and let's copy and paste code.&nbsp;&nbsp;

- [00:18:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=1132) Okay, so I also need to change the constructor&nbsp; name. All right. So what is the difference in&nbsp;&nbsp;

- [00:19:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=1143) this case? In this case, you see, we have a logger&nbsp; and mail sender as injection dependency injection.&nbsp;&nbsp;

- [00:19:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=1157) Actually, not this. Okay. And then&nbsp; we use those initialized objects&nbsp;&nbsp;

- [00:19:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=1165) to add info or send email. Okay, you&nbsp; see, if an error occurs, then we are&nbsp;&nbsp;

- [00:19:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=1177) using the error method like here. All&nbsp; right. And why does it show error?&nbsp;&nbsp;

- [00:19:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=1187) Okay, because I need to send it like this. And&nbsp; in the other case, we also modify it like this.&nbsp;&nbsp;

- [00:19:57](https://www.youtube.com/watch?v=034zM9MQdkU&t=1197) You see, instead of sending email&nbsp; directly inside in the first case.&nbsp;&nbsp;

- [00:20:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=1203) In the violation method. In the violation method&nbsp; methodology, we were sending mail directly like&nbsp;&nbsp;

- [00:20:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=1211) this. The code was also written in the same&nbsp; class and we were also logging the errors like&nbsp;&nbsp;

- [00:20:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=1217) this. However, now we have separate classes for&nbsp; each task. We have mail sender class and we have&nbsp;&nbsp;

- [00:20:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=1225) file logger. Okay. And now we can use each one of&nbsp; them. So if we change anything in these separate&nbsp;&nbsp;

- [00:20:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=1236) classes that it won't affect anything in our&nbsp; application workflow runtime. This is a single&nbsp;&nbsp;

- [00:20:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=1248) responsibility principle. And let's see if&nbsp; the author of this article said anything.&nbsp;&nbsp;

- [00:20:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=1258) Okay. As you can see, the invoice class delegating&nbsp; the logging activity to the logger class.&nbsp;&nbsp;

- [00:21:07](https://www.youtube.com/watch?v=034zM9MQdkU&t=1267) In the same way, delegate the email&nbsp; sending activity to the mail sender class.&nbsp;&nbsp;

- [00:21:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=1273) Now the invoice class now only&nbsp; concentrates on invoice related activities.&nbsp;&nbsp;

- [00:21:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=1278) All right, now we can move to the next&nbsp; principle, which is open-closed principle.&nbsp;&nbsp;

- [00:21:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=1290) What is the open-closed principle in C-sharp?&nbsp;&nbsp;

- [00:21:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=1295) The open-closed principle states that software&nbsp; entities such as modules, classes, functions,&nbsp;&nbsp;

- [00:21:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=1301) etc. should be open for extension,&nbsp; but closed for modification.&nbsp;&nbsp;

- [00:21:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=1306) Let us understand the above definition in simple&nbsp; words. Here we need to understand two things.&nbsp;&nbsp;

- [00:21:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=1313) The first thing is open for extension and&nbsp; the second thing is closed for modification.&nbsp;&nbsp;

- [00:21:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=1319) The open for extension means we need to design&nbsp; the software modules / classes in such a way&nbsp;&nbsp;

- [00:22:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=1325) that the new responsibilities or functionalities&nbsp; should be added easily when new requirements come.&nbsp;&nbsp;

- [00:22:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=1331) On the other hand, closed for modification means&nbsp; we should not modify the class / module until we&nbsp;&nbsp;

- [00:22:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=1337) find some bugs. The reason for this is we have&nbsp; already developed a class / module and it has&nbsp;&nbsp;

- [00:22:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=1344) gone through the unit testing phase. So we&nbsp; should not have to change this as it affects&nbsp;&nbsp;

- [00:22:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=1349) the existing functionalities. In simple words, we&nbsp; can say that we should develop one module / class&nbsp;&nbsp;

- [00:22:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=1356) in such a way that it should allow its behavior&nbsp; to be extended without altering its source code.&nbsp;&nbsp;

- [00:22:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=1366) Implementation guidelines for the open-closed&nbsp; principle, OCP, in C-sharp. The easiest way&nbsp;&nbsp;

- [00:22:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=1374) to implement the open-closed principle in&nbsp; C-sharp is to add the new functionalities&nbsp;&nbsp;

- [00:22:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=1379) by creating new derived classes which should&nbsp; be inherited from the original base class.&nbsp;&nbsp;

- [00:23:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=1385) Another way is to allow the client to access&nbsp; the original class with an abstract interface.&nbsp;&nbsp;

- [00:23:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=1393) So, at any given point of time when there is&nbsp; a change in requirement or any new requirement&nbsp;&nbsp;

- [00:23:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=1398) comes then instead of touching the existing&nbsp; functionality, it's always better and suggested&nbsp;&nbsp;

- [00:23:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=1402) to create new derived classes and leave the&nbsp; original class implementation as it is. Okay,&nbsp;&nbsp;

- [00:23:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=1408) so this is the key issue, the key point. Whenever&nbsp; you need a new functionality, then you shouldn't&nbsp;&nbsp;

- [00:23:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=1416) change the existing implementation. You should&nbsp; extend it and then implement that new feature with&nbsp;&nbsp;

- [00:23:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=1425) that extension. Okay, this is really important,&nbsp; the key part of the open-closed principle.&nbsp;&nbsp;

- [00:23:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=1433) By the way, in an interview I was asked what is&nbsp; open-closed principle and I was asked to explain&nbsp;&nbsp;

- [00:24:00](https://www.youtube.com/watch?v=034zM9MQdkU&t=1440) it, so this is really important. Problems of not&nbsp; following the open-closed principle in C-sharp.&nbsp;&nbsp;

- [00:24:08](https://www.youtube.com/watch?v=034zM9MQdkU&t=1448) If you are not following the open-closed principle&nbsp; during the application development process,&nbsp;&nbsp;

- [00:24:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=1453) then you may end up your application development&nbsp; with the following problems. If you allow a class&nbsp;&nbsp;

- [00:24:20](https://www.youtube.com/watch?v=034zM9MQdkU&t=1460) or function to add new logic then as a developer&nbsp; you need to test the entire functionalities which&nbsp;&nbsp;

- [00:24:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=1465) include the old functionalities as well&nbsp; as new functionalities of the application.&nbsp;&nbsp;

- [00:24:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=1471) As a developer, it is also your responsibility&nbsp; to tell the QA, quality assurance, team about&nbsp;&nbsp;

- [00:24:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=1477) the changes in advance so that they can prepare&nbsp; themselves in advance for regression testing&nbsp;&nbsp;

- [00:24:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=1481) along with the new feature testing. If you&nbsp; are not following the open-closed principle,&nbsp;&nbsp;

- [00:24:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=1487) then it also breaks the single responsibility&nbsp; principle as the class or module is going to&nbsp;&nbsp;

- [00:24:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=1492) perform multiple responsibilities. If you&nbsp; are implementing all the functionalities in&nbsp;&nbsp;

- [00:24:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=1498) a single class, then the maintenance&nbsp; of the class becomes very difficult.&nbsp;&nbsp;

- [00:25:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=1506) Because of the above key points, we need to&nbsp; follow the open-closed principle in C-sharp&nbsp;&nbsp;

- [00:25:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=1512) while developing the application.&nbsp; Okay, so let's start coding it.&nbsp;&nbsp;

- [00:25:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=1518) The first example will be an example that&nbsp;&nbsp;

- [00:25:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=1523) breaks the open-closed principle. Let's name it&nbsp; as example breaks open-closed principle. Alright,&nbsp;&nbsp;

- [00:25:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=1549) let's copy and paste the code.&nbsp;&nbsp;

- [00:26:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=1572) So I'm going to add another&nbsp; class breaks open-closed.&nbsp;&nbsp;

- [00:26:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=1585) Okay, so let's check it out. And what&nbsp; does that mean? We have invoice class&nbsp;&nbsp;

- [00:26:32](https://www.youtube.com/watch?v=034zM9MQdkU&t=1592) and that invoice class has get invoice&nbsp; discount, which takes two parameters,&nbsp;&nbsp;

- [00:26:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=1598) which is amount and the invoice type.&nbsp; So according to the invoice type,&nbsp;&nbsp;

- [00:26:43](https://www.youtube.com/watch?v=034zM9MQdkU&t=1603) we are returning the discount amount. And&nbsp; what is wrong here? You see that this method&nbsp;&nbsp;

- [00:26:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=1616) is doing different tasks based on the invoice&nbsp; type. Okay, so if I want to add another invoice&nbsp;&nbsp;

- [00:27:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=1626) type here, let's say extra invoice, then what do I&nbsp; need to do for implementation? For implementation,&nbsp;&nbsp;

- [00:27:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=1634) then I need to add more else if like this.&nbsp; And you see as I add more invoice types,&nbsp;&nbsp;

- [00:27:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=1644) then I need to modify this existing class&nbsp; further. And this totally breaks open-closed&nbsp;&nbsp;

- [00:27:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=1653) principle because I am modifying the existing&nbsp; class method for extending its functionality.&nbsp;&nbsp;

- [00:27:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=1661) Okay, and this breaks the open-closed&nbsp; principle. And as explained in the article,&nbsp;&nbsp;

- [00:27:50](https://www.youtube.com/watch?v=034zM9MQdkU&t=1670) this forces us to retest all of the functionality&nbsp; and report to the quality assurance team and&nbsp;&nbsp;

- [00:27:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=1679) other things. So I need to modify this&nbsp; in a way that it won't break it anymore.&nbsp;&nbsp;

- [00:28:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=1686) Let's make example of this&nbsp; in our application. Okay,&nbsp;&nbsp;

- [00:28:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=1710) now let's fix it in a way that it won't break our&nbsp; functionality. I mean the open-closed principle.&nbsp;&nbsp;

- [00:28:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=1721) Okay, let's say proper open-closed principle.&nbsp;&nbsp;

- [00:29:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=1745) So what do we need to do is we need to generate a&nbsp; base class and extend it. In this case, it will be&nbsp;&nbsp;

- [00:29:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=1752) like this. Let's copy paste and analyze it. Let's&nbsp; add another class and name as proper open-closed.&nbsp;&nbsp;

- [00:29:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=1765) Okay, so now we have a base class as invoice and&nbsp; this invoice class has a virtual method. Virtual&nbsp;&nbsp;

- [00:29:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=1776) methods can be overridden by the inheriting&nbsp; classes and it has a get invoice discount&nbsp;&nbsp;

- [00:29:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=1787) and double amount. Okay, and it's just deducts 10&nbsp; point from the amount and return it. Then we have&nbsp;&nbsp;

- [00:29:57](https://www.youtube.com/watch?v=034zM9MQdkU&t=1797) final invoice, which has a get invoice discount&nbsp; method and it overrides the base method with&nbsp;&nbsp;

- [00:30:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=1805) double amount. Then it gets the base. It calls&nbsp; the base get invoice and minus 50. This is the&nbsp;&nbsp;

- [00:30:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=1814) final invoice. You see, these are the actual&nbsp; invoice types that we have in. Let me show again.&nbsp;&nbsp;

- [00:30:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=1823) Okay, here we had final invoice,&nbsp; which was deducting 100 percent.&nbsp;&nbsp;

- [00:30:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=1830) And we had proposed it, which was deducting 50 and&nbsp; we had extra invoice, which was deducting 75. So&nbsp;&nbsp;

- [00:30:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=1838) for final invoice, we need to deduct 90 actually&nbsp; to make it equal and for proper proposed invoice,&nbsp;&nbsp;

- [00:30:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=1847) it is minus 50. Yeah, this is correct. And&nbsp; okay, by the way, when we provide amount. Okay.&nbsp;&nbsp;

- [00:30:57](https://www.youtube.com/watch?v=034zM9MQdkU&t=1857) Yes, it's true. And there is a recurring&nbsp; invoice. Okay, let's fix this in this case.&nbsp;&nbsp;

- [00:31:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=1878) Yeah, now fix it. It is minus 30. Let's make&nbsp; it minus 65. Okay. So you see, this is how&nbsp;&nbsp;

- [00:31:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=1888) we are extending the functionality of the class&nbsp; with inheritance. Okay. I can add so many other&nbsp;&nbsp;

- [00:31:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=1899) new invoice types here like super invoice.&nbsp; Okay. And I can say that just minus five.&nbsp;&nbsp;

- [00:31:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=1909) Okay. So it is totally up to you to extend it.&nbsp; Now it looks much better. It is easier to read.&nbsp;&nbsp;

- [00:31:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=1915) It is easier to manage and it won't break our&nbsp; existing code. It won't require retesting and&nbsp;&nbsp;

- [00:32:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=1924) validating our existing code because it is just&nbsp; extending the base class. Okay. And let's make&nbsp;&nbsp;

- [00:32:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=1933) an example call of that. By the way, this is not&nbsp; valid anymore. Yeah. In this case, proper. Okay.&nbsp;&nbsp;

- [00:32:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=1948) So you see, now I can define each one of them.&nbsp; Let's say recurring invoice, recurring invoice.&nbsp;&nbsp;

- [00:32:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=1960) And then just I can say get invoice&nbsp; discount with something like this. Okay.&nbsp;&nbsp;

- [00:32:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=1969) All right. And yeah, they all&nbsp; made an example such that they.&nbsp;&nbsp;

- [00:32:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=1979) Now the invoice class is closed for modification,&nbsp;&nbsp;

- [00:33:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=1983) but it is open for the extension as it allows&nbsp; creating new classes deriving from the invoice&nbsp;&nbsp;

- [00:33:08](https://www.youtube.com/watch?v=034zM9MQdkU&t=1988) class, which clearly follows the open closed&nbsp; principle in C sharp. In the next article. Okay.&nbsp;&nbsp;

- [00:33:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=1995) So let's move to Liskov substitution principle and&nbsp; let's just read its definition. All right. Okay.&nbsp;&nbsp;

- [00:33:27](https://www.youtube.com/watch?v=034zM9MQdkU&t=2007) What is the Liskov substitution principle in&nbsp; C sharp? The Liskov substitution principle is&nbsp;&nbsp;

- [00:33:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=2015) a substitutability principle in object oriented&nbsp; programming language. This principle states that&nbsp;&nbsp;

- [00:33:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=2021) if S is a subtype of T, then objects of type T&nbsp; should be replaced with the objects of type S.&nbsp;&nbsp;

- [00:33:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=2029) In simple words we can say that, when we have a&nbsp; base class and child class relationships i.e.,&nbsp;&nbsp;

- [00:33:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=2035) inheritance relationships, then, if we can&nbsp; successfully replace the object / instance&nbsp;&nbsp;

- [00:34:00](https://www.youtube.com/watch?v=034zM9MQdkU&t=2040) of a parent class with an object / instance&nbsp; of the child class, without affecting the&nbsp;&nbsp;

- [00:34:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=2045) behavior of the base class instance, then it&nbsp; is said to be in Liskov substitution principle.&nbsp;&nbsp;

- [00:34:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=2051) If you are not getting this point properly, don't&nbsp; worry, we will see some real time examples to&nbsp;&nbsp;

- [00:34:16](https://www.youtube.com/watch?v=034zM9MQdkU&t=2056) understand this concept. For example, a father is&nbsp; a teacher whereas his son is a doctor. So here,&nbsp;&nbsp;

- [00:34:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=2065) in this case, the son can't simply replace his&nbsp; father even though both belong to the same family.&nbsp;&nbsp;

- [00:34:31](https://www.youtube.com/watch?v=034zM9MQdkU&t=2071) Okay, so let's make an example. First, we will&nbsp; make an example that violates Liskov's principle.&nbsp;&nbsp;

- [00:34:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=2098) Alright, so to demonstrate a violation of&nbsp; Liskov's principle, I will just add a class here.&nbsp;&nbsp;

- [00:35:20](https://www.youtube.com/watch?v=034zM9MQdkU&t=2120) Okay, and we have two classes. The first class is&nbsp; apple and the second class is orange. You know,&nbsp;&nbsp;

- [00:35:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=2128) apples and oranges are totally different&nbsp; things. So, we shouldn't be able to define apple&nbsp;&nbsp;

- [00:35:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=2140) as an orange and get its color. Okay, this is&nbsp; a violation. Let's see what does that mean.&nbsp;&nbsp;

- [00:35:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=2152) Okay, so let's define first, okay,&nbsp; Liskov violation, apple dot, okay, apple,&nbsp;&nbsp;

- [00:36:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=2163) and let's see, MessageBox.Show apple, and let's&nbsp; say, apple color. One second, sorry about that.&nbsp;&nbsp;

- [00:36:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=2183) And let's define orange. Okay, this will&nbsp; be an orange. Let's say orange color.&nbsp;&nbsp;

- [00:36:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=2204) And now I am going to define&nbsp;&nbsp;

- [00:36:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=2208) an apple from orange type. Okay, what does&nbsp; that mean? It means that something like this.&nbsp;&nbsp;

- [00:36:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=2216) Let's say apple, and let's get its color. Okay,&nbsp; apple orange color. Okay, orange type apple color.&nbsp;&nbsp;

- [00:37:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=2235) So, what we want in this case is to get the&nbsp; type of, get the color of orange, not the,&nbsp;&nbsp;

- [00:37:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=2243) I mean to get the type of apple, not the orange.&nbsp; Because this is apple type and orange can't&nbsp;&nbsp;

- [00:37:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=2250) replace it. However, in this case, we are going&nbsp; to get the color of orange instead of apple. Okay,&nbsp;&nbsp;

- [00:37:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=2258) so let's run our application to verify. We have&nbsp; apple color red, we have orange color red, and&nbsp;&nbsp;

- [00:37:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=2266) we have orange type color orange. Why do we have&nbsp; an error here? Let's fix it. Okay, now it will be,&nbsp;&nbsp;

- [00:37:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=2275) okay, apple color red, orange color orange,&nbsp; and we have orange type apple color orange. And&nbsp;&nbsp;

- [00:38:02](https://www.youtube.com/watch?v=034zM9MQdkU&t=2282) this is the violation of Liskov principle. Why?&nbsp; Because, as you can see in the above example,&nbsp;&nbsp;

- [00:38:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=2291) apple is the base class and orange is the child&nbsp; class i.e. there is a parent-child relationship.&nbsp;&nbsp;

- [00:38:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=2298) So, we can store the child class object in&nbsp; the parent reference variable i.e. apple&nbsp;&nbsp;

- [00:38:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=2303) apple equals new orange, and when we call&nbsp; the get color i.e. apple dot get color,&nbsp;&nbsp;

- [00:38:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=2308) then we are getting the color of the orange&nbsp; not the color of apple. That means once the&nbsp;&nbsp;

- [00:38:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=2313) child object is replaced i.e. apple storing the&nbsp; orange object, the behavior is also changed. Okay,&nbsp;&nbsp;

- [00:38:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=2320) this is the key issue. The behavior is changed&nbsp; and this is violation of Liskov substitution&nbsp;&nbsp;

- [00:38:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=2329) principle. This is against the LSP principle. The&nbsp; Liskov substitution principle in C sharp states&nbsp;&nbsp;

- [00:38:57](https://www.youtube.com/watch?v=034zM9MQdkU&t=2337) that even the child object is replaced with the&nbsp; parent, the behavior should not be changed. So,&nbsp;&nbsp;

- [00:39:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=2343) in this case, if we are getting the color of apple&nbsp; instead of orange, then it follows the Liskov&nbsp;&nbsp;

- [00:39:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=2349) substitution principle. So if we were seeing&nbsp; the color of apple then it would be following&nbsp;&nbsp;

- [00:39:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=2354) the Liskov substitution principle. That means&nbsp; there is some issue with our software design.&nbsp;&nbsp;

- [00:39:21](https://www.youtube.com/watch?v=034zM9MQdkU&t=2361) Let us see how to overcome the design&nbsp; issue and makes the application follow&nbsp;&nbsp;

- [00:39:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=2365) Liskov substitution principle. Okay,&nbsp; so let us make the proper example.&nbsp;&nbsp;

- [00:39:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=2379) Okay, I will name it as Liskov.&nbsp;&nbsp;

- [00:39:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=2395) All right, and let's add a new class as here&nbsp; proper Liskov. And let's copy and paste the code.&nbsp;&nbsp;

- [00:40:32](https://www.youtube.com/watch?v=034zM9MQdkU&t=2432) Okay, so let's check out the difference. So now&nbsp; we have an abstract class which is fruit. So in&nbsp;&nbsp;

- [00:40:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=2440) this abstract class, we have get color method&nbsp; and it is also abstract as you can see. So any&nbsp;&nbsp;

- [00:40:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=2448) class that inherits this abstract class has to&nbsp; define this method. So we have apple which has&nbsp;&nbsp;

- [00:40:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=2456) red and it is overriding the abstract class in the&nbsp; fruit abstract class abstract method in the in the&nbsp;&nbsp;

- [00:41:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=2466) abstract class of fruit and we have orange. You&nbsp; see, we didn't override the base class method. We&nbsp;&nbsp;

- [00:41:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=2474) overrided the abstract class method different than&nbsp; the first example. And now let's make our test&nbsp;&nbsp;

- [00:41:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=2486) in the same way. So this time it&nbsp; will be proper Liskov principle.&nbsp;&nbsp;

- [00:41:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=2499) Okay, and you see now I am not able to define&nbsp;&nbsp;

- [00:41:44](https://www.youtube.com/watch?v=034zM9MQdkU&t=2504) apple with the type of orange. Okay,&nbsp; so let's call this as fruit orange.&nbsp;&nbsp;

- [00:41:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=2513) And it will be fruit orange and&nbsp; you see how it makes sense now.&nbsp;&nbsp;

- [00:42:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=2521) Okay, fruit orange and fruit apple. Okay, yes, and&nbsp; now it is much more sense making and it will work&nbsp;&nbsp;

- [00:42:16](https://www.youtube.com/watch?v=034zM9MQdkU&t=2536) correctly. Okay, apple color red, orange color&nbsp; orange, fruit orange color orange and fruit&nbsp;&nbsp;

- [00:42:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=2543) apple color red. As expected, working perfectly&nbsp; fine and it's now follows the Liskov principle.&nbsp;&nbsp;

- [00:42:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=2553) Okay, now time to see interface&nbsp; segregation principle.&nbsp;&nbsp;

- [00:42:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=2565) What is the interface segregation principle in C&nbsp; sharp? The interface segregation principle states&nbsp;&nbsp;

- [00:42:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=2572) that clients should not be forced to implement&nbsp; any methods they don't use. Rather than one fat&nbsp;&nbsp;

- [00:42:58](https://www.youtube.com/watch?v=034zM9MQdkU&t=2578) interface, numerous little interfaces are&nbsp; preferred based on groups of methods with&nbsp;&nbsp;

- [00:43:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=2583) each interface serving one sub module. Let us&nbsp; break down the above definition into two parts.&nbsp;&nbsp;

- [00:43:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=2591) First, no class should be forced to implement&nbsp; any methods of an interface they don't use.&nbsp;&nbsp;

- [00:43:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=2598) Secondly, instead of creating large or you can say&nbsp; fat interfaces, create multiple smaller interfaces&nbsp;&nbsp;

- [00:43:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=2604) with the aim that the clients should only think&nbsp; about the methods that are of interest to them.&nbsp;&nbsp;

- [00:43:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=2609) Sorry about that, it was&nbsp; my baby child, my daughter.&nbsp;&nbsp;

- [00:43:37](https://www.youtube.com/watch?v=034zM9MQdkU&t=2617) Okay, as per the single responsibility principle&nbsp; of solid like classes, interfaces also should have&nbsp;&nbsp;

- [00:43:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=2625) a single responsibility. That means we shouldn't&nbsp; force any class to implement any methods which&nbsp;&nbsp;

- [00:43:51](https://www.youtube.com/watch?v=034zM9MQdkU&t=2631) they don't require. Okay, so you see how these&nbsp; principles are, let's say, tightly coupled. So&nbsp;&nbsp;

- [00:43:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=2639) one principle requires another principle and when&nbsp; you follow all of them, they are working like as&nbsp;&nbsp;

- [00:44:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=2646) a team. Okay, so let's start with a violation&nbsp; of interface segregation principle. All right.&nbsp;&nbsp;

- [00:44:21](https://www.youtube.com/watch?v=034zM9MQdkU&t=2661) Okay, let's call it as violation&nbsp; of interface segregation.&nbsp;&nbsp;

- [00:44:42](https://www.youtube.com/watch?v=034zM9MQdkU&t=2682) All right. And let's copy and paste our class. So&nbsp; let's add a new class first. Interface violation.&nbsp;&nbsp;

- [00:45:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=2703) And here, first, we have public interface, I&nbsp; printer tasks. Okay, and it defines four methods.&nbsp;&nbsp;

- [00:45:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=2714) We can define this abstract class method like this&nbsp; return. Okay, let's say "white". Okay, this will&nbsp;&nbsp;

- [00:45:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=2726) work. By the way, I need to. If I make it a method&nbsp; like this, I have to mark it as virtual so that it&nbsp;&nbsp;

- [00:45:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=2735) can it can be overridden. If I make it abstract&nbsp; like this, then I can't it can't have a body.&nbsp;&nbsp;

- [00:45:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=2745) Okay, so you can define body inside an abstract&nbsp; class with virtual methods that can be overridden.&nbsp;&nbsp;

- [00:45:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=2754) Or you can make it abstract and it won't have&nbsp; a body. It won't have a body in method. Okay.&nbsp;&nbsp;

- [00:46:02](https://www.youtube.com/watch?v=034zM9MQdkU&t=2762) Okay, so for demonstration, let's&nbsp; also have another class here as&nbsp;&nbsp;

- [00:46:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=2772) abstract class with body having method.&nbsp; And let's say virtual get color.&nbsp;&nbsp;

- [00:46:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=2794) Okay, so both methodology is fine. Okay,&nbsp; let's continue with our interface violation,&nbsp;&nbsp;

- [00:46:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=2801) interface principle violation. So we have&nbsp; I printer tasks and it has print, scan,&nbsp;&nbsp;

- [00:46:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=2807) fax and print duplex methods. Interfaces can have&nbsp; method implementation, but they can't have they&nbsp;&nbsp;

- [00:46:57](https://www.youtube.com/watch?v=034zM9MQdkU&t=2817) can't have fields, data fields like public int.&nbsp; Okay, my property. Now it says that interfaces&nbsp;&nbsp;

- [00:47:07](https://www.youtube.com/watch?v=034zM9MQdkU&t=2827) cannot contain instance fields. Okay, so this is&nbsp; also valid. Okay, let's return back to our topic.&nbsp;&nbsp;

- [00:47:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=2837) So we have I printer tasks. And not&nbsp; only that, we have. Okay, let's see.&nbsp;&nbsp;

- [00:47:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=2848) HP laser jet printer, which inherits I&nbsp; printer task interface. So interfaces&nbsp;&nbsp;

- [00:47:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=2856) are like blueprints and we have to implement&nbsp; each of the methods defined in the interface.&nbsp;&nbsp;

- [00:47:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=2866) In the abstract class that we don't have to&nbsp; implement all of them. Actually, that was also&nbsp;&nbsp;

- [00:47:52](https://www.youtube.com/watch?v=034zM9MQdkU&t=2872) another mistaken information that I have given.&nbsp; For example, let's say we have abstract get color.&nbsp;&nbsp;

- [00:48:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=2886) And these methods. Have to implement them, but. We&nbsp; can also define a body for that method and. Now.&nbsp;&nbsp;

- [00:48:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=2909) Oh, it was true, so in both cases&nbsp; we have to implement both. Okay,&nbsp;&nbsp;

- [00:48:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=2915) so let's just ignore that too. Okay, so I&nbsp; printer tasks is inherited with HP laser&nbsp;&nbsp;

- [00:48:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=2925) jet printer and now we are defining each one of&nbsp; the methods and. You see, we have print, scan,&nbsp;&nbsp;

- [00:48:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=2934) fax and print duplex. Each one of them, each&nbsp; one of the defined methods is also used here.&nbsp;&nbsp;

- [00:49:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=2941) However, let's say I also have another class&nbsp; that inherits the I printer tasks. Interface and&nbsp;&nbsp;

- [00:49:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=2952) this is liquid inject printer and in liquid inject&nbsp; printer. We don't have fax method or print duplex.&nbsp;&nbsp;

- [00:49:19](https://www.youtube.com/watch?v=034zM9MQdkU&t=2959) Therefore, they are not implemented exception.&nbsp; They are throwing not implemented exception.&nbsp;&nbsp;

- [00:49:27](https://www.youtube.com/watch?v=034zM9MQdkU&t=2967) And this is a violation of interface&nbsp; segregation principle. Why? Because&nbsp;&nbsp;

- [00:49:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=2973) we are inheriting an interface. But we are not&nbsp; using all of the methods that it requires. Okay,&nbsp;&nbsp;

- [00:49:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=2985) so how can we fix this problem? We can fix this&nbsp; problem by. Splitting this interface into multiple&nbsp;&nbsp;

- [00:49:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=2994) interfaces and implementing necessary&nbsp; multiple interfaces in each class. Okay,&nbsp;&nbsp;

- [00:50:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3001) so let's first define this example. Then move to&nbsp; the proper interface design. Okay, for example.&nbsp;&nbsp;

- [00:50:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=3028) Okay, now fix this interface violation problem.&nbsp;&nbsp;

- [00:50:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=3041) Okay, proper interface segregation.&nbsp;&nbsp;

- [00:51:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=3063) Let's fix the name segregation, yes.&nbsp;&nbsp;

- [00:51:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=3077) Okay. All right, so let's add another&nbsp; class. And see the example proper interface&nbsp;&nbsp;

- [00:51:46](https://www.youtube.com/watch?v=034zM9MQdkU&t=3106) segregation. All right, let's copy paste.&nbsp; The fixed interface class implementations.&nbsp;&nbsp;

- [00:52:08](https://www.youtube.com/watch?v=034zM9MQdkU&t=3128) Okay, so we did split the IPrinter tasks in&nbsp; the first case in the first example into three&nbsp;&nbsp;

- [00:52:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=3137) interfaces. The first one is IPrinter tasks.&nbsp; It has print and scan. What does this mean?&nbsp;&nbsp;

- [00:52:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=3144) This means that every class that inherits IPrinter&nbsp; tasks interface will have these two methods. Okay,&nbsp;&nbsp;

- [00:52:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=3153) so these are the basic methods that every&nbsp; printer will have print and scan. Then we&nbsp;&nbsp;

- [00:52:40](https://www.youtube.com/watch?v=034zM9MQdkU&t=3160) have I fax tasks, which means that whichever the&nbsp; class in inherits I fax tasks interface will have&nbsp;&nbsp;

- [00:52:48](https://www.youtube.com/watch?v=034zM9MQdkU&t=3168) fax method and whichever the class that inherits&nbsp; I printer duplex tasks will have print duplex.&nbsp;&nbsp;

- [00:52:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=3175) So since these are interfaces, we can have&nbsp; multiple interfaces inheritance. However,&nbsp;&nbsp;

- [00:53:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3181) for abstract classes that you&nbsp; can have only one implementation.&nbsp;&nbsp;

- [00:53:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=3189) Yes. Okay. For example, if we define two abstract&nbsp; classes, such as. Okay. And public abstract.&nbsp;&nbsp;

- [00:53:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=3203) class ab2. Then our class can inherit only one&nbsp; of them. For example, it can inherit ab1. And&nbsp;&nbsp;

- [00:53:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=3216) it has to come before any interfaces like&nbsp; this. However, if I also add ab2 here.&nbsp;&nbsp;

- [00:53:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=3225) Then it will say that the base class cannot have&nbsp; multiple base classes. I mean, the child class&nbsp;&nbsp;

- [00:53:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=3233) cannot have multiple base classes. However, it&nbsp; can have as many as interfaces as necessary.&nbsp;&nbsp;

- [00:54:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3241) Okay, so the HP laser jet printer will have both&nbsp; print, scan, fax and print duplex methods. All of&nbsp;&nbsp;

- [00:54:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=3251) them and the liquid inject printer will have only&nbsp; print and scan, which are the very basic functions&nbsp;&nbsp;

- [00:54:17](https://www.youtube.com/watch?v=034zM9MQdkU&t=3257) of printers. Okay, so this is the corrected way,&nbsp; the proper way of interface segregation principle.&nbsp;&nbsp;

- [00:54:30](https://www.youtube.com/watch?v=034zM9MQdkU&t=3270) Okay, now time to move the last one.&nbsp;&nbsp;

- [00:54:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=3274) The last principle in the solid design principles&nbsp; is what dependency inversion principle.&nbsp;&nbsp;

- [00:54:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=3285) What is the dependency&nbsp; inversion principle in C sharp?&nbsp;&nbsp;

- [00:54:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=3289) The dependency inversion principle DIP states&nbsp; that high level modules / classes should not&nbsp;&nbsp;

- [00:54:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=3295) depend on low level modules / classes.&nbsp; Both should depend upon abstractions.&nbsp;&nbsp;

- [00:55:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3301) Secondly, abstractions should not depend upon&nbsp; details. Details should depend upon abstractions.&nbsp;&nbsp;

- [00:55:10](https://www.youtube.com/watch?v=034zM9MQdkU&t=3310) The most important point that you need to&nbsp; remember while developing real time applications,&nbsp;&nbsp;

- [00:55:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=3314) always to try to keep the high level module and&nbsp; low level module as loosely coupled as possible.&nbsp;&nbsp;

- [00:55:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=3322) When a class knows about the design&nbsp; and implementation of another class,&nbsp;&nbsp;

- [00:55:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=3326) it raises the risk that if we do any changes to&nbsp; one class will break the other class. So we must&nbsp;&nbsp;

- [00:55:32](https://www.youtube.com/watch?v=034zM9MQdkU&t=3332) keep these high level and low level modules /&nbsp; classes loosely coupled as much as possible.&nbsp;&nbsp;

- [00:55:38](https://www.youtube.com/watch?v=034zM9MQdkU&t=3338) To do that, we need to make both of them dependent&nbsp; on abstractions instead of knowing each other.&nbsp;&nbsp;

- [00:55:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=3345) Okay, so let's start with an example&nbsp; to understand better. Okay. Okay,&nbsp;&nbsp;

- [00:55:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=3355) I'm adding a button.&nbsp;&nbsp;

- [00:56:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3361) Violation of dependency inversion.&nbsp;&nbsp;

- [00:56:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=3383) Let's click and oh, we also need to fix&nbsp; this as proper Interface separation.&nbsp;&nbsp;

- [00:56:36](https://www.youtube.com/watch?v=034zM9MQdkU&t=3396) Okay. And then I can call. Okay, so let's add&nbsp; a new class for dependency inversion violation.&nbsp;&nbsp;

- [00:56:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=3415) All right. And in here, let's copy and&nbsp; paste the code. Okay, we have a public&nbsp;&nbsp;

- [00:57:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=3423) class employee and it has four attributes,&nbsp; which are ID, name, department and salary.&nbsp;&nbsp;

- [00:57:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=3435) And we have public class employee business&nbsp; logic. Okay. And we have public class data&nbsp;&nbsp;

- [00:57:26](https://www.youtube.com/watch?v=034zM9MQdkU&t=3446) access factory. Let's paste it in above the&nbsp; employee data access and. Okay. We also have.&nbsp;&nbsp;

- [00:57:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=3465) Okay, one second. Here.&nbsp; Yes. Now all is fixed. Okay.&nbsp;&nbsp;

- [00:58:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3481) So we have employee class, which holds the data of&nbsp; each employee. We have employee data access class,&nbsp;&nbsp;

- [00:58:08](https://www.youtube.com/watch?v=034zM9MQdkU&t=3488) which implements the logic of accessing&nbsp; employee data. You see, it has a public&nbsp;&nbsp;

- [00:58:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=3495) method that returns employee data. It is named as&nbsp; get employee details. It takes ID of the employee.&nbsp;&nbsp;

- [00:58:24](https://www.youtube.com/watch?v=034zM9MQdkU&t=3504) Then it generates an employee, an&nbsp; example employee and returns it.&nbsp;&nbsp;

- [00:58:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=3509) Okay. And we have two other classes,&nbsp; which are data access factory.&nbsp;&nbsp;

- [00:58:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=3515) It has a public static method that returns a&nbsp; new instance of employee data access class.&nbsp;&nbsp;

- [00:58:45](https://www.youtube.com/watch?v=034zM9MQdkU&t=3525) Okay. We have employee business logic class,&nbsp; which implements employee data access.&nbsp;&nbsp;

- [00:58:55](https://www.youtube.com/watch?v=034zM9MQdkU&t=3535) Which uses employee data access and generates&nbsp; an instance of employee data access class in&nbsp;&nbsp;

- [00:59:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=3544) the constructor. And it returns the details. Okay.&nbsp; So how is this violating the dependency inversion?&nbsp;&nbsp;

- [00:59:19](https://www.youtube.com/watch?v=034zM9MQdkU&t=3559) Okay. Let's read it to find out. Let us&nbsp; compare the above example with the dependency&nbsp;&nbsp;

- [00:59:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=3569) inversion principle in C sharp. As per the&nbsp; dependency inversion principle definition,&nbsp;&nbsp;

- [00:59:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=3575) a high level module should not depend on low level&nbsp; modules. Both should depend on the abstraction.&nbsp;&nbsp;

- [00:59:43](https://www.youtube.com/watch?v=034zM9MQdkU&t=3583) So first we need to figure out which one is the&nbsp; high level module class and which one is the&nbsp;&nbsp;

- [00:59:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=3589) low level module class. In our example, a high&nbsp; level module is a module that always depends on&nbsp;&nbsp;

- [00:59:56](https://www.youtube.com/watch?v=034zM9MQdkU&t=3596) other modules. So in our example, the employee&nbsp; business logic class depends on employee data&nbsp;&nbsp;

- [01:00:03](https://www.youtube.com/watch?v=034zM9MQdkU&t=3603) access class. So here the employee business logic&nbsp; class is the high level module and the employee&nbsp;&nbsp;

- [01:00:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=3609) data access class is the low level module. So as&nbsp; per the first rule of the dependency inversion&nbsp;&nbsp;

- [01:00:16](https://www.youtube.com/watch?v=034zM9MQdkU&t=3616) principle in C sharp, the employee business logic&nbsp; class / module should not depend on the concrete&nbsp;&nbsp;

- [01:00:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=3622) employee data access class / module. Instead,&nbsp; both the classes should depend on abstraction.&nbsp;&nbsp;

- [01:00:29](https://www.youtube.com/watch?v=034zM9MQdkU&t=3629) The second rule of the dependency inversion&nbsp; principle state that abstractions should&nbsp;&nbsp;

- [01:00:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=3634) not depend on details. Details&nbsp; should depend on abstractions.&nbsp;&nbsp;

- [01:00:39](https://www.youtube.com/watch?v=034zM9MQdkU&t=3639) Before understanding this, let us first understand&nbsp; what is an abstraction. What is abstraction? In&nbsp;&nbsp;

- [01:00:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=3647) simple words, we can say that abstraction means&nbsp; something which is non concrete. So abstraction&nbsp;&nbsp;

- [01:00:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=3654) in programming means we need to create either&nbsp; an interface or abstract class which is non&nbsp;&nbsp;

- [01:00:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=3659) concrete so that we cannot create an instance&nbsp; of it. In our example, the employee business&nbsp;&nbsp;

- [01:01:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=3664) logic and employee data access are concrete&nbsp; classes that mean we can create objects of it.&nbsp;&nbsp;

- [01:01:11](https://www.youtube.com/watch?v=034zM9MQdkU&t=3671) As per the dependency inversion principle&nbsp; in C sharp, the employee business logic high&nbsp;&nbsp;

- [01:01:16](https://www.youtube.com/watch?v=034zM9MQdkU&t=3676) level module should not depend on the concrete&nbsp; employee data access low level module class.&nbsp;&nbsp;

- [01:01:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=3683) Both classes should depend on abstractions,&nbsp; meaning both classes should depend on either&nbsp;&nbsp;

- [01:01:28](https://www.youtube.com/watch?v=034zM9MQdkU&t=3688) an interface or an abstract class. OK, so let's&nbsp; see how employee business logic is depending on&nbsp;&nbsp;

- [01:01:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=3695) concrete employee data access in our application.&nbsp; And we are right away seeing it. So you see,&nbsp;&nbsp;

- [01:01:43](https://www.youtube.com/watch?v=034zM9MQdkU&t=3703) OK. OK, as you can see, it is dependent on the&nbsp; concrete instance of employee data access class&nbsp;&nbsp;

- [01:01:53](https://www.youtube.com/watch?v=034zM9MQdkU&t=3713) with here. And that is a violation of dependency&nbsp; inversion principle. So we need to modify our&nbsp;&nbsp;

- [01:02:05](https://www.youtube.com/watch?v=034zM9MQdkU&t=3725) logic with abstraction abstract classes or&nbsp; interfaces. Instead of depending on concrete&nbsp;&nbsp;

- [01:02:15](https://www.youtube.com/watch?v=034zM9MQdkU&t=3735) instance of a class. OK, so let's make an&nbsp; example of this with violation. Actually,&nbsp;&nbsp;

- [01:02:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=3761) that's the point is yes.&nbsp;&nbsp;

- [01:02:49](https://www.youtube.com/watch?v=034zM9MQdkU&t=3769) Yes,&nbsp;&nbsp;

- [01:03:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=3789) OK, so let's also see the proper fixed&nbsp; version of the dependency inversion. Right,&nbsp;&nbsp;

- [01:03:23](https://www.youtube.com/watch?v=034zM9MQdkU&t=3803) it will be proper dependency inversion.&nbsp;&nbsp;

- [01:03:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=3815) OK, and let's add another class and name it as&nbsp;&nbsp;

- [01:03:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=3827) proper dependent version. OK, so how are we&nbsp; going to separate? We are going to separate it as&nbsp;&nbsp;

- [01:03:59](https://www.youtube.com/watch?v=034zM9MQdkU&t=3839) an interface IEmployeeDataAccess which&nbsp; has employee get employee details method.&nbsp;&nbsp;

- [01:04:06](https://www.youtube.com/watch?v=034zM9MQdkU&t=3846) And we are going to have. OK, employee data&nbsp; access class which inherits IEmployeeDataAccess&nbsp;&nbsp;

- [01:04:14](https://www.youtube.com/watch?v=034zM9MQdkU&t=3854) interface. We have data access factory&nbsp; which still has the same method and we have&nbsp;&nbsp;

- [01:04:33](https://www.youtube.com/watch?v=034zM9MQdkU&t=3873) employee business logic. You see, in this case,&nbsp; it has a field of IEmployeeDataAccess. OK, and&nbsp;&nbsp;

- [01:04:50](https://www.youtube.com/watch?v=034zM9MQdkU&t=3890) IEmployeeDataAccess is an interface. Therefore,&nbsp; it is using the interface instead of concrete&nbsp;&nbsp;

- [01:05:04](https://www.youtube.com/watch?v=034zM9MQdkU&t=3904) instance of a class. So employee data access was&nbsp; a class. Therefore, this was a concrete instance.&nbsp;&nbsp;

- [01:05:13](https://www.youtube.com/watch?v=034zM9MQdkU&t=3913) However, in here we are just using the interface&nbsp; instead of a concrete instance of a class.&nbsp;&nbsp;

- [01:05:22](https://www.youtube.com/watch?v=034zM9MQdkU&t=3922) And this is the proper way of&nbsp; doing dependency inversion. OK,&nbsp;&nbsp;

- [01:05:35](https://www.youtube.com/watch?v=034zM9MQdkU&t=3935) that's it. We have implemented the dependency&nbsp; inversion principle in our example where the&nbsp;&nbsp;

- [01:05:41](https://www.youtube.com/watch?v=034zM9MQdkU&t=3941) high level module employee business logic and&nbsp; low level module employee data access depend&nbsp;&nbsp;

- [01:05:47](https://www.youtube.com/watch?v=034zM9MQdkU&t=3947) on abstraction IEmployeeDataAccess.&nbsp; Also abstraction IEmployeeDataAccess&nbsp;&nbsp;

- [01:05:54](https://www.youtube.com/watch?v=034zM9MQdkU&t=3954) does not depend on details employee data&nbsp; access, but details depend on abstraction.&nbsp;&nbsp;

- [01:06:01](https://www.youtube.com/watch?v=034zM9MQdkU&t=3961) Advantages of implementing the dependency&nbsp; inversion principle in C sharp.&nbsp;&nbsp;

- [01:06:07](https://www.youtube.com/watch?v=034zM9MQdkU&t=3967) Now the employee business logic and employee&nbsp; data access classes are loosely coupled classes&nbsp;&nbsp;

- [01:06:12](https://www.youtube.com/watch?v=034zM9MQdkU&t=3972) because employee business logic does not depend&nbsp; on concrete employee data access class. Instead,&nbsp;&nbsp;

- [01:06:18](https://www.youtube.com/watch?v=034zM9MQdkU&t=3978) it includes a reference of IEmployeeDataAccess&nbsp; interface. So now we can easily use another&nbsp;&nbsp;

- [01:06:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=3985) class that implements IEmployeeDataAccess with&nbsp; a different implementation. OK, this is it. And&nbsp;&nbsp;

- [01:06:34](https://www.youtube.com/watch?v=034zM9MQdkU&t=3994) let's also make an example of this. Proper&nbsp; dependency inversion. And we have IEmployee logic.&nbsp;&nbsp;

- [01:07:02](https://www.youtube.com/watch?v=034zM9MQdkU&t=4022) And now when we run our&nbsp; application, it will compile.&nbsp;&nbsp;

- [01:07:09](https://www.youtube.com/watch?v=034zM9MQdkU&t=4029) OK, if you have any questions, you&nbsp; can join our Discord channel. Also,&nbsp;&nbsp;

- [01:07:19](https://www.youtube.com/watch?v=034zM9MQdkU&t=4039) I will upload this into a GitHub repository&nbsp; and I will put the link of the repository in&nbsp;&nbsp;

- [01:07:25](https://www.youtube.com/watch?v=034zM9MQdkU&t=4045) the description of the video. So make sure that&nbsp; you check it out. Thank you for watching. I hope&nbsp;&nbsp;

- [01:07:32](https://www.youtube.com/watch?v=034zM9MQdkU&t=4052) you have enjoyed. Please make a comment and let&nbsp; me know what you think. Hopefully see you later.
