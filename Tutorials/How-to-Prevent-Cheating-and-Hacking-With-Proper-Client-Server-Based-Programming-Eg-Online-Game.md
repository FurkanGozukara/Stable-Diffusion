# How to Prevent Cheating and Hacking With Proper Client + Server Based Programming. E.g. Online Game

## Full tutorial link > https://www.youtube.com/watch?v=MFk6x-r6HEw

[![How to Prevent Cheating and Hacking With Proper Client + Server Based Programming. E.g. Online Game](https://img.youtube.com/vi/MFk6x-r6HEw/sddefault.jpg)](https://www.youtube.com/watch?v=MFk6x-r6HEw "How to Prevent Cheating and Hacking With Proper Client + Server Based Programming. E.g. Online Game")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Prevent-Cheating-and-Hacking-With-Proper-Client-Server-Based-Programming-Eg-Online-Game.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Prevent-Cheating-and-Hacking-With-Proper-Client-Server-Based-Programming-Eg-Online-Game.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


In this video (4K ultra-HD – English language); we are doing client-server-based #programming to build our simple online game application. For client-side we are using .NET 6 (.NET Core) #WPF framework with C# programming language. For the server-side, we are using ASP.NET 6 (.NET Core) #MVC framework with C# programming. For the database, we are using MSSQL Server 2019 Developer edition.

The source code and example database SQL script + a backup file are fully available on this GitHub repository for free: [https://github.com/FurkanGozukara/server-client-based-application-programming-and-development](https://github.com/FurkanGozukara/server-client-based-application-programming-and-development)

Discord channel link of our channel. Yes, you can come and ask any questions regarding this video or any other programming-related problems on our Discord channel. Just use the general chat section: [https://discord.gg/rfttctFewW](https://discord.gg/rfttctFewW)

How to use Discord: [https://youtu.be/AEwPtYiLvsQ](https://youtu.be/AEwPtYiLvsQ)

My name is Furkan Gözükara and I am a Ph.D. computer engineer from Turkey: [https://www.linkedin.com/in/furkangozukara/](https://www.linkedin.com/in/furkangozukara/)

Some of my students have been asking me how to do proper client-server-based programming to prevent cheating and hacking. They were having a hard time understanding the concept and the logic of the client-server-based methodology.

Whatever you put in client software can always be fully observed and modified by using proper reverse engineering or memory inspecting and editing tools. Therefore, as a programmer, you can never trust the data that comes from the client side. Then how can we ensure the safety of our application/software?

The answer is simple. The client-side has to be only responsible for taking user action requests. Then those requests have to be validated at the server side and processed accordingly. Then the results of these actions should be sent back to the client for the user to see the results of their actions.

With this kind of approach, there is no way to hack the software you have developed as long as you do the programming according to the safety rules.

So in this video, you will see that I will develop 2 different applications. The first application is the client side that will be distributed to the users. The second application is the server-side application that will be hosted and run on the server. The server-side application will handle all the database operations and users/clients will have no direct access to the server.

All of the communication between the client and the server will be done with WEB / HTTP API calls.

The programmed client-side application is a simple online game that can be turned into an MMORPG easily. Currently, the game is not advanced because the video aims to teach you how to do proper client-server-based programming. The developed game is about hunting Monsters. So, every user has a character that can hunt Monsters and gain EXP. With gaining EXP, the users’ characters get level and get stronger.

All of the data is kept on the server. Therefore, users cannot ever modify/alter the data for cheating. Only the actions of users are processed at the server like executing an attack.

Since MVC separates the model layer, the same model classes in the server-side application are also used on the client side to display data to the user or send data from the client-side to the server.

The challenges I have to overcome during this programming can be listed as follows:

How to keep user information including their character as an object instance and process

How to keep enemy Monster information as an object instance and process

How to do async client to server web API HTTP post requests and process the results

How to send data to the server with properly encapsulating (Serialization) data objects as Json and retrieve server returned data and turn back into instances of class objects (Deserialization)

How to design a properly structured database

How to execute database commands as parameterized queries to prevent SQL injection/hacking

How to do user authentication in a client-server-based programming

How to setup Windows Server 2019 as a Web Server to host ASP.NET MVC application as a web service to do API requests

How to code ASP.NET MVC to do WEB API requests

How to configure ASP.NET MVC as a web service

If you are interested in programming but you lack experience and skills I suggest you watch our playlists: [https://www.youtube.com/c/SECourses/playlists](https://www.youtube.com/c/SECourses/playlists)

[1] Introduction to Programming Full Course with C# playlist

[2] Advanced #Programming with C# Full Course Playlist

[3] Object Oriented Programming Full Course with C# playlist

[4] Asp.NET Core V5 - MVC Pattern - Bootstrap V5 - Responsive Web #Programming with C# Full Course Playlist

[5] Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist

[6] Software Engineering Full Course playlist

[7] Security of Information Systems Full Course playlist

Thumb: [https://www.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_11668583.htm](https://www.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_11668583.htm)



### Video Transcription


- [00:00:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2) hello everyone welcome to my channel again this is uh fukuoka i am a phd

- [00:00:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4) again this is uh fukuoka i am a phd computer engineer from turkey i have

- [00:00:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6) computer engineer from turkey i have been developing software for over 13

- [00:00:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9) been developing software for over 13 years

- [00:00:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10) years uh i have a phd in computer engineering

- [00:00:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12) uh i have a phd in computer engineering uh so if you wonder who am i you can

- [00:00:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14) uh so if you wonder who am i you can just check out my link in profile with

- [00:00:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=18) just check out my link in profile with typing linkedin for kangaskhara

- [00:00:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=25) and check out my profile so today i'm going to explain to you

- [00:00:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=28) so today i'm going to explain to you show to you the proper

- [00:00:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=31) show to you the proper relationship between

- [00:00:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=33) relationship between server and client-based applications

- [00:00:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=37) server and client-based applications this was a question that i was getting

- [00:00:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=39) this was a question that i was getting recently from my students they were

- [00:00:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=41) recently from my students they were asking me to how to properly

- [00:00:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=44) asking me to how to properly code an application that can't be hacked

- [00:00:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=48) code an application that can't be hacked that can't be cheated

- [00:00:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=51) that can't be cheated and how to

- [00:00:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=53) and how to ensure the safety of the application

- [00:00:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=57) ensure the safety of the application with using a

- [00:00:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=58) with using a proper uh server based

- [00:01:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=61) proper uh server based uh authentication database operations or

- [00:01:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=64) uh authentication database operations or synchronization

- [00:01:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=66) synchronization uh so when you develop a client-based

- [00:01:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=68) uh so when you develop a client-based application

- [00:01:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=70) application then uh if that application will be

- [00:01:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=73) then uh if that application will be uh will have

- [00:01:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=75) uh will have uh

- [00:01:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=76) uh shared database operations or other

- [00:01:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=78) shared database operations or other things

- [00:01:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=79) things uh then you also have to have a service

- [00:01:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=83) uh then you also have to have a service uh the logic between these two is not

- [00:01:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=86) uh the logic between these two is not very easy to understand uh how to

- [00:01:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=88) very easy to understand uh how to properly

- [00:01:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=90) properly connect the server uh how to how to

- [00:01:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=92) connect the server uh how to how to ensure the safety of the of the

- [00:01:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=94) ensure the safety of the of the application that your server won't get

- [00:01:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=97) application that your server won't get hacked or that your server

- [00:01:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=99) hacked or that your server that your application won't get cheated

- [00:01:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=102) that your application won't get cheated like in games

- [00:01:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=104) like in games uh so i will make a desktop application

- [00:01:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=107) uh so i will make a desktop application that will communicate

- [00:01:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=113) with a server running application for desktop application i will use

- [00:01:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=116) for desktop application i will use net core c sharp version 6

- [00:01:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=119) net core c sharp version 6 with visual studio 2022

- [00:02:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=122) with visual studio 2022 for database i will use mssql developer

- [00:02:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=124) for database i will use mssql developer edition 2019

- [00:02:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=127) edition 2019 uh for server i will install a windows

- [00:02:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=130) uh for server i will install a windows server for testing purposes

- [00:02:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=133) server for testing purposes on vmware

- [00:02:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=135) on vmware and the application

- [00:02:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=137) and the application at the back end at the server that will

- [00:02:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=140) at the back end at the server that will run

- [00:02:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=141) run will be asp.net mvc

- [00:02:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=143) will be asp.net mvc with net core 6 again

- [00:02:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=146) with net core 6 again so i will be i will use all the latest

- [00:02:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=149) so i will be i will use all the latest technologies that.net provides us

- [00:02:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=153) technologies that.net provides us and

- [00:02:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=154) and you can also you will be you can also

- [00:02:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=158) you can also you will be you can also re replicate what i do and test what i

- [00:02:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=161) re replicate what i do and test what i do in your computer for free

- [00:02:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=164) do in your computer for free all those uh things that i will use are

- [00:02:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=167) all those uh things that i will use are either free or

- [00:02:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=168) either free or trial are available

- [00:02:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=171) trial are available so let's start with composing our client

- [00:02:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=174) so let's start with composing our client okay

- [00:03:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=180) i plan to do a simple uh game

- [00:03:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=181) game that will have a login

- [00:03:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=184) that will have a login and multiplayer operations it will be

- [00:03:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=187) and multiplayer operations it will be very simple actually uh just to

- [00:03:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=189) very simple actually uh just to illustrate you and just to explain to

- [00:03:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=191) illustrate you and just to explain to you

- [00:03:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=192) you uh

- [00:03:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=193) uh how how does a client

- [00:03:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=196) how how does a client server-based application works in real

- [00:03:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=199) server-based application works in real real life you see i have selected a vpf

- [00:03:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=202) real life you see i have selected a vpf c sharp

- [00:03:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=203) c sharp it uses

- [00:03:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=206) it uses uh

- [00:03:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=207) uh net course let's

- [00:03:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=209) net course let's just

- [00:03:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=212) just pick our folders as desktop and let's

- [00:03:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=215) pick our folders as desktop and let's name it as

- [00:03:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=217) name it as a

- [00:03:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=218) a simple game project

- [00:03:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=224) or client server-based project

- [00:03:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=227) client server-based project and let's see

- [00:03:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=234) client servers project yeah i will name it as that as

- [00:03:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=236) it as that as like that

- [00:03:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=239) like that so here project same directory

- [00:04:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=242) so here project same directory yes and this is location

- [00:04:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=246) yes and this is location so dotnet

- [00:04:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=247) so dotnet version six

- [00:04:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=250) version six okay

- [00:04:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=252) okay okay so our project file is

- [00:04:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=254) okay so our project file is opened

- [00:04:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=256) opened uh did the desktop basic application

- [00:04:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=259) uh did the desktop basic application this will be our client this will be the

- [00:04:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=261) this will be our client this will be the thing that we will distribute to our end

- [00:04:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=263) thing that we will distribute to our end users

- [00:04:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=265) users uh so with this interface with this

- [00:04:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=268) uh so with this interface with this application they will uh communicate

- [00:04:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=271) application they will uh communicate through with our backend servers

- [00:04:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=275) through with our backend servers uh

- [00:04:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=275) uh this is the actual thing that we will

- [00:04:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=278) this is the actual thing that we will get the actions of the user okay

- [00:04:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=283) get the actions of the user okay so let's just uh add a register

- [00:04:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=285) so let's just uh add a register a simple one

- [00:04:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=287) a simple one by the way if you want to learn how to

- [00:04:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=289) by the way if you want to learn how to do proper programming you should check

- [00:04:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=291) do proper programming you should check out our with my other videos in the

- [00:04:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=294) out our with my other videos in the channel so i won't be focusing on

- [00:04:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=298) channel so i won't be focusing on good programming or how to do

- [00:05:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=300) good programming or how to do programming in this video my focus will

- [00:05:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=303) programming in this video my focus will be

- [00:05:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=303) be to explain to you to make you understand

- [00:05:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=306) to explain to you to make you understand the relationship between client and

- [00:05:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=310) the relationship between client and server okay

- [00:05:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=312) server okay so let's name this as

- [00:05:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=319) first of all let's add a let's say

- [00:05:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=321) let's say top

- [00:05:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=323) top okay

- [00:05:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=331) all right and let's just put this inside yes

- [00:06:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=384) register all right and

- [00:06:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=385) and let's add a simple label i am still

- [00:06:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=389) let's add a simple label i am still showing you the simple basic

- [00:06:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=393) showing you the simple basic i know maybe you know all of these bots

- [00:06:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=395) i know maybe you know all of these bots let's just make

- [00:06:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=397) let's just make proper bay

- [00:06:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=399) proper bay password okay

- [00:06:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=402) password okay and let's just add a button for

- [00:06:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=409) registration okay i just

- [00:06:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=414) registered all right uh now we have a simple uh

- [00:06:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=418) all right uh now we have a simple uh client

- [00:07:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=424) and how we are going to do registration okay

- [00:07:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=425) okay this will be our client and our first

- [00:07:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=428) this will be our client and our first client server-based uh

- [00:07:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=431) client server-based uh challenge comes

- [00:07:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=438) challenge uh comes yes uh so can i add my database connection

- [00:07:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=441) so can i add my database connection directly

- [00:07:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=443) directly into my client application like

- [00:07:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=445) into my client application like uh

- [00:07:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=447) uh like use my existing uh

- [00:07:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=451) like use my existing uh db connection class like i showed in my

- [00:07:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=454) db connection class like i showed in my previous

- [00:07:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=455) previous video

- [00:07:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=456) video like this one

- [00:07:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=457) like this one and do the database operations directly

- [00:07:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=460) and do the database operations directly no definitely not

- [00:07:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=462) no definitely not because in this case um all of your

- [00:07:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=465) because in this case um all of your information would be available to the

- [00:07:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=469) information would be available to the uh

- [00:07:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=470) uh cheaters hackers

- [00:07:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=472) cheaters hackers uh

- [00:07:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=473) uh everyone basically that

- [00:07:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=475) everyone basically that have your client so you can never have

- [00:07:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=479) have your client so you can never have your database class your database

- [00:08:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=481) your database class your database connections anything related to your

- [00:08:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=483) connections anything related to your database in

- [00:08:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=485) database in uh your client because whatever you type

- [00:08:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=489) uh your client because whatever you type in your client can be seen

- [00:08:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=498) with by the hackers for example let me show you what i mean with that

- [00:08:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=500) let me show you what i mean with that for example let's say i am going to add

- [00:08:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=503) for example let's say i am going to add protected

- [00:08:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=507) uh database let's say sitting database

- [00:08:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=512) database let's say sitting database password and i will type as

- [00:08:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=516) password and i will type as dv password

- [00:08:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=518) dv password okay and when i compile my application

- [00:08:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=522) okay and when i compile my application even with publishing let me show

- [00:08:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=526) even with publishing let me show for example i will do a publish folder

- [00:08:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=530) for example i will do a publish folder and it really is yes it's fine

- [00:08:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=532) and it really is yes it's fine okay this is now published

- [00:08:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=535) okay this is now published portable

- [00:08:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=536) portable it's inside by binary

- [00:08:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=539) it's inside by binary bin folder

- [00:09:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=540) bin folder let me open it here

- [00:09:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=548) catch your project being released

- [00:09:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=550) being released where is the release

- [00:09:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=558) already published we didn't publish it yet okay

- [00:09:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=559) yet okay now

- [00:09:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=560) now publishing

- [00:09:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=562) publishing okay now it's published

- [00:09:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=569) and here we have an exam we have dln file and other things

- [00:09:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=572) file and other things now i can see what is inside this

- [00:09:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=575) now i can see what is inside this exhibit um

- [00:09:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=584) let's let's check yes this ai dot x there i

- [00:09:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=586) let's check yes this ai dot x there i think this was the

- [00:09:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=588) think this was the easy to check there could be of course

- [00:09:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=591) easy to check there could be of course more sophisticated ways to publish your

- [00:09:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=593) more sophisticated ways to publish your application with um

- [00:09:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=596) application with um what was it called it was called as

- [00:10:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=603) uh observation board of supplication

- [00:10:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=605) board of supplication yes you can

- [00:10:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=607) yes you can you can use this code observation means

- [00:10:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=609) you can use this code observation means that

- [00:10:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=611) that when you publish your application it

- [00:10:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=613) when you publish your application it will make it harder to decompile

- [00:10:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=617) will make it harder to decompile reverse engineer

- [00:10:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=619) reverse engineer for example uh

- [00:10:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=621) for example uh let's check out this image

- [00:10:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=629) this kind of uh code like you see

- [00:10:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=630) you see properly named uh

- [00:10:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=632) properly named uh methods and other code becomes like this

- [00:10:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=636) methods and other code becomes like this the code becomes

- [00:10:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=638) the code becomes observated however

- [00:10:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=640) observated however still it is reverse engineerable so

- [00:10:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=643) still it is reverse engineerable so whatever the password or anything you

- [00:10:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=647) whatever the password or anything you put inside your application

- [00:10:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=649) put inside your application can

- [00:10:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=651) can still be

- [00:10:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=653) still be found by

- [00:10:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=655) found by hackers or

- [00:10:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=658) hackers or by malicious

- [00:11:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=660) by malicious uh

- [00:11:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=662) uh people

- [00:11:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=663) people so

- [00:11:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=664) so let's talk about this

- [00:11:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=678) is this no no

- [00:11:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=692) okay one second okay i have found the application uh it

- [00:11:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=695) okay i have found the application uh it is called sdn spy let's download it from

- [00:11:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=698) is called sdn spy let's download it from github

- [00:11:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=699) github uh it's an open source uh software uh to

- [00:11:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=705) uh it's an open source uh software uh to let's say reverseengineer.net

- [00:11:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=708) let's say reverseengineer.net applications

- [00:12:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=722) okay i think i can open it with this the ends

- [00:12:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=725) i think i can open it with this the ends file

- [00:12:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=725) file let's just open our exit from

- [00:12:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=731) let's just open our exit from server project release

- [00:12:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=739) okay so our project is now open here

- [00:12:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=741) here it shows all the generated assembly and

- [00:12:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=744) it shows all the generated assembly and other codes file header optional

- [00:12:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=748) other codes file header optional sections data

- [00:12:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=755) okay so let's see what can we find

- [00:13:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=787) i think it is supposed to show oh i know i know the reason

- [00:13:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=790) oh i know i know the reason uh probably the reason is we didn't use

- [00:13:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=792) uh probably the reason is we didn't use this anywhere

- [00:13:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=793) this anywhere so let's just

- [00:13:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=795) so let's just uh use it somewhere and it will be

- [00:13:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=798) uh use it somewhere and it will be there for example when i click register

- [00:13:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=801) there for example when i click register button let's show let's say

- [00:13:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=803) button let's show let's say show

- [00:13:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=805) show uh you see the

- [00:13:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=807) uh you see the dotnet makes a lot of optimizations

- [00:13:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=810) dotnet makes a lot of optimizations rebuilds

- [00:13:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=812) rebuilds okay let's say publish

- [00:13:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=819) okay publish it let's open the file once again

- [00:13:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=823) let's open the file once again give those headers

- [00:13:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=835) maybe it's in the dln file i'm not sure maybe here

- [00:14:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=840) okay the other foil

- [00:14:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=847) yes in the dlr file i see main window.bml

- [00:14:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=849) window.bml okay you see everything is very

- [00:14:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=852) okay you see everything is very readable

- [00:14:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=854) readable let's find out

- [00:14:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=857) let's find out the

- [00:14:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=858) the application backend

- [00:14:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=860) application backend and

- [00:14:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=881) i'm not very familiar to use this application

- [00:14:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=884) application these are all seems like references

- [00:15:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=917) main window okay and

- [00:15:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=927) go to here i'm not very good with reverse

- [00:15:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=929) i'm not very good with reverse engineering i just know

- [00:15:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=933) engineering i just know how to

- [00:15:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=934) how to make the application safer oh

- [00:15:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=938) make the application safer oh okay may window main window

- [00:15:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=951) okay register click and you see it shows this database

- [00:15:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=953) and you see it shows this database password when i click it and it shows

- [00:15:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=956) password when i click it and it shows the password yes here

- [00:15:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=958) the password yes here okay

- [00:16:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=960) okay as you can see

- [00:16:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=961) as you can see what we have typed in our application at

- [00:16:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=964) what we have typed in our application at the client is fully visible

- [00:16:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=967) the client is fully visible to the

- [00:16:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=969) to the malicious

- [00:16:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=970) malicious people

- [00:16:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=972) people okay

- [00:16:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=974) okay therefore we can never embed uh critical

- [00:16:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=977) therefore we can never embed uh critical stuff

- [00:16:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=979) stuff in our

- [00:16:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=980) in our client application

- [00:16:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=983) client application that is a very big mistake that's a

- [00:16:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=985) that is a very big mistake that's a fatal mistake that we could do even if

- [00:16:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=988) fatal mistake that we could do even if even if we observate our code

- [00:16:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=991) even if we observate our code they still can be reverse engineered

- [00:16:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=994) they still can be reverse engineered therefore it is not

- [00:16:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=995) therefore it is not safe all right

- [00:16:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=997) safe all right so now uh

- [00:16:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1000) so now uh i will compose our

- [00:16:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1003) i will compose our server side application which will be

- [00:16:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1007) server side application which will be an asp.net mvc project

- [00:16:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1010) an asp.net mvc project okay

- [00:16:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1011) okay so let's start with it

- [00:16:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1015) so let's start with it create new project

- [00:16:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1017) create new project and here

- [00:17:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1020) and here i will pick

- [00:17:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1025) let me see [Music]

- [00:17:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1031) okay so that net core web up model weave controller and we see is this the

- [00:17:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1033) controller and we see is this the correct one

- [00:17:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1034) correct one yes c sharp okay

- [00:17:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1037) yes c sharp okay so let's just pick our uh

- [00:17:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1041) so let's just pick our uh folder let's name it as

- [00:17:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1043) folder let's name it as parallel side of

- [00:17:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1045) parallel side of line solver

- [00:17:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1052) okay let's name it as server side application

- [00:17:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1058) authentication none configure https none we don't need that right now not net six

- [00:17:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1060) we don't need that right now not net six okay

- [00:17:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1070) all right uh now it is generated with default viv and other things

- [00:17:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1073) default viv and other things from controllers so if you don't know

- [00:17:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1076) from controllers so if you don't know what is mvc and how to do mvc

- [00:17:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1078) what is mvc and how to do mvc programming

- [00:18:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1080) programming let me open our

- [00:18:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1083) let me open our channel

- [00:18:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1087) here we have full courses for

- [00:18:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1089) for c programming

- [00:18:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1092) c programming [Music]

- [00:18:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1093) [Music] or for mvc programming

- [00:18:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1096) or for mvc programming you can see s2.net core v5 and we see

- [00:18:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1099) you can see s2.net core v5 and we see full course

- [00:18:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1100) full course uh with 17 videos you can watch all of

- [00:18:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1103) uh with 17 videos you can watch all of them

- [00:18:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1105) them and for c sharp we have a introduction

- [00:18:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1108) and for c sharp we have a introduction to programming

- [00:18:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1110) to programming with 14 videos then we have

- [00:18:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1113) with 14 videos then we have advanced programming

- [00:18:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1116) advanced programming here

- [00:18:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1117) here which has

- [00:18:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1119) which has 14 cores

- [00:18:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1120) 14 cores again and then we have

- [00:18:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1124) again and then we have uh object oriented programming

- [00:18:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1127) uh object oriented programming with

- [00:18:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1128) with 14 videos

- [00:18:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1130) 14 videos so if you watch all of them then

- [00:18:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1133) so if you watch all of them then you will learn how to do programming how

- [00:18:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1135) you will learn how to do programming how to do

- [00:18:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1136) to do [Music]

- [00:18:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1138) [Music] mvc programming and other things

- [00:19:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1141) mvc programming and other things okay so these will be our server side

- [00:19:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1143) okay so these will be our server side application it will

- [00:19:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1150) run in our windows servers by the way let's download windows server iso i

- [00:19:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1152) let's download windows server iso i didn't download it yet

- [00:19:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1177) so how do we download it here download this iso

- [00:19:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1193) it in our download server a server side application

- [00:19:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1198) okay [Music]

- [00:20:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1200) [Music] and

- [00:20:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1201) and [Music]

- [00:20:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1204) [Music] okay meanwhile when they are getting

- [00:20:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1206) okay meanwhile when they are getting downloaded

- [00:20:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1209) downloaded uh let's go let's uh continue with our

- [00:20:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1212) uh let's go let's uh continue with our application development

- [00:20:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1214) application development so what we are going to do is we will

- [00:20:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1216) so what we are going to do is we will have

- [00:20:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1218) have a db connection class in here

- [00:20:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1227) okay maybe connection

- [00:20:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1230) maybe connection and

- [00:20:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1231) and let's start with composing our database

- [00:20:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1234) let's start with composing our database new database

- [00:20:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1235) new database let's say

- [00:20:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1237) let's say simple

- [00:20:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1238) simple game

- [00:20:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1241) game we will have users here

- [00:20:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1244) we will have users here okay being table

- [00:20:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1249) say use this

- [00:20:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1250) use this id

- [00:20:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1255) just use this name

- [00:20:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1257) name okay let's say and one character 50

- [00:21:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1261) okay let's say and one character 50 let's say user password

- [00:21:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1264) let's say user password okay i will make this hashed therefore i

- [00:21:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1267) okay i will make this hashed therefore i will make it as

- [00:21:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1269) will make it as charge 64. okay

- [00:21:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1274) all right okay and user password so the user

- [00:21:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1278) right okay and user password so the user id will be primary k let's make it um

- [00:21:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1283) id will be primary k let's make it um let's make it identity specification

- [00:21:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1287) let's make it identity specification is

- [00:21:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1288) is identity yes true

- [00:21:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1291) identity yes true and this is our users table

- [00:21:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1297) okay and then we are going to have

- [00:21:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1300) and then we are going to have user characters

- [00:21:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1307) the game will have simple characters uh that that we will keep

- [00:21:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1309) that that we will keep let's say level of the character

- [00:21:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1311) let's say level of the character attack

- [00:21:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1313) attack hp defense of the character uh simple

- [00:21:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1316) hp defense of the character uh simple like that so this table will be composed

- [00:21:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1319) like that so this table will be composed of

- [00:22:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1324) character id okay

- [00:22:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1326) okay okay user id

- [00:22:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1329) okay user id if you allow only one character for per

- [00:22:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1331) if you allow only one character for per user

- [00:22:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1333) user then we can only keep user id here so we

- [00:22:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1336) then we can only keep user id here so we wouldn't need character id but if we are

- [00:22:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1339) wouldn't need character id but if we are going to allow multiple characters then

- [00:22:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1341) going to allow multiple characters then we will need

- [00:22:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1342) we will need separate character id and user id

- [00:22:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1347) separate character id and user id okay and

- [00:22:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1348) okay and i

- [00:22:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1349) i let's have

- [00:22:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1351) let's have a hp of character let's say small

- [00:22:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1355) a hp of character let's say small integers

- [00:22:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1357) integers attack of characters

- [00:23:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1387) you see for level it puts brackets

- [00:23:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1389) brackets right and left side of the

- [00:23:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1391) right and left side of the column name because

- [00:23:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1393) column name because level is a special keyword for sql

- [00:23:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1396) level is a special keyword for sql database

- [00:23:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1402) and so we need to rename it if we want to use as it is

- [00:23:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1404) to use as it is or

- [00:23:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1405) or we can use it as

- [00:23:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1407) we can use it as if we are going to put a

- [00:23:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1409) if we are going to put a space we we need to use it as

- [00:23:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1412) space we we need to use it as character level like this if you're

- [00:23:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1414) character level like this if you're going to have special character then you

- [00:23:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1416) going to have special character then you need to make it start with

- [00:23:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1419) need to make it start with brackets like this

- [00:23:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1425) actually i am designing the game concept right now in my mind

- [00:23:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1429) the game concept right now in my mind so if we make hp attack and defense

- [00:23:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1432) so if we make hp attack and defense static then we wouldn't need

- [00:23:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1435) static then we wouldn't need to keep them

- [00:24:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1441) okay um

- [00:24:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1442) um how should we do it

- [00:24:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1449) okay i'm not sure yeah let's just remove them and

- [00:24:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1451) yeah let's just remove them and [Music]

- [00:24:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1454) [Music] let's just keep only hp or

- [00:24:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1458) let's just keep only hp or an uh hp of the character as well

- [00:24:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1462) an uh hp of the character as well no no let's make them separate values

- [00:24:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1464) no no let's make them separate values okay so

- [00:24:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1466) okay so what's up maybe we can add some more

- [00:24:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1469) what's up maybe we can add some more details

- [00:24:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1470) details and pass your

- [00:24:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1475) and pass your problem

- [00:24:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1481) all right let's make the default value is one

- [00:24:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1483) is one one

- [00:24:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1485) one j1 and hp let's make it 10

- [00:24:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1488) j1 and hp let's make it 10 this is purely conceptual that it is

- [00:24:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1491) this is purely conceptual that it is totally related to you

- [00:24:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1493) totally related to you let's make character id also

- [00:24:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1496) let's make character id also identity

- [00:24:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1498) identity auto increments okay and

- [00:25:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1502) auto increments okay and we also need

- [00:25:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1509) use the characters we also need another index k

- [00:25:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1514) we also need another index k for character id and user id for faster

- [00:25:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1518) for character id and user id for faster operations

- [00:25:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1519) operations i know this by

- [00:25:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1520) i know this by my experience

- [00:25:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1523) my experience but you may not understand it

- [00:25:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1525) but you may not understand it immediately

- [00:25:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1528) immediately okay so

- [00:25:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1529) okay so let me compose that index with sniff

- [00:25:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1534) let me compose that index with sniff i think

- [00:25:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1536) i think where is it

- [00:25:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1538) where is it tables

- [00:25:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1545) okay for here in nexus

- [00:25:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1546) in nexus new index okay to be able to generate

- [00:25:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1549) new index okay to be able to generate index i need to close uh design top

- [00:25:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1552) index i need to close uh design top okay non-clustered index

- [00:25:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1556) okay non-clustered index and let's say his next name uh

- [00:26:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1560) and let's say his next name uh church

- [00:26:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1563) okay it is an unclustered it will be unique

- [00:26:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1567) it is an unclustered it will be unique and

- [00:26:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1569) and in this key column will be

- [00:26:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1571) in this key column will be user id yes by default the primary k

- [00:26:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1575) user id yes by default the primary k index is already included

- [00:26:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1577) index is already included so i don't need to include it this is

- [00:26:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1579) so i don't need to include it this is just for purely performance

- [00:26:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1582) just for purely performance wise okay and we can generate other

- [00:26:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1585) wise okay and we can generate other tables as we progress

- [00:26:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1588) tables as we progress so

- [00:26:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1589) so now we have our tables and

- [00:26:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1592) now we have our tables and let me close this

- [00:26:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1594) let me close this now

- [00:26:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1595) now we can start coding our

- [00:26:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1598) we can start coding our server site application which will be

- [00:26:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1602) server site application which will be asp.net mvc application

- [00:26:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1605) asp.net mvc application so our database name is simple game

- [00:26:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1609) so our database name is simple game if you wonder how did i write this

- [00:26:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1613) if you wonder how did i write this class then you should watch my

- [00:26:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1616) class then you should watch my channel other videos

- [00:26:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1618) channel other videos we need to install

- [00:27:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1620) we need to install [Music]

- [00:27:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1627) system data sql here from we get packages because it is not by default

- [00:27:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1630) packages because it is not by default coming in dot net core

- [00:27:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1633) coming in dot net core okay so i'm not an escrow client

- [00:27:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1655) okay and

- [00:27:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1662) okay it's installed here now there is no error

- [00:27:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1663) error we will use windows authentication for

- [00:27:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1665) we will use windows authentication for now and

- [00:27:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1668) now and all right

- [00:27:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1673) okay so

- [00:27:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1673) so now our database class is ready now we

- [00:27:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1676) now our database class is ready now we need to

- [00:28:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1684) compose web api okay to communicate with our software

- [00:28:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1687) our software uh

- [00:28:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1688) uh so whatever we do

- [00:28:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1690) so whatever we do at the client

- [00:28:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1691) at the client will base it on web api calls

- [00:28:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1699) okay so uh first web api that we need to write

- [00:28:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1703) uh first web api that we need to write is registers

- [00:28:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1705) is registers okay so that the user user can register

- [00:28:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1709) okay so that the user user can register okay uh

- [00:28:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1716) i don't remember my

- [00:28:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1717) my memory memory that how we were writing

- [00:28:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1719) memory memory that how we were writing web api

- [00:28:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1722) web api let me check it so

- [00:28:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1725) let me check it so there are templates of web api i see but

- [00:28:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1728) there are templates of web api i see but we don't need it

- [00:28:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1730) we don't need it okay

- [00:28:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1731) okay there is

- [00:28:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1733) there is a controller empty

- [00:29:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1743) okay this is another good example actually

- [00:29:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1746) this is another good example actually let's see this is an article

- [00:29:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1754) okay okay when we add controller that is

- [00:29:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1757) okay when we add controller that is web api controller okay

- [00:29:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1763) okay let's add a web app

- [00:29:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1765) a web app api controller

- [00:29:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1770) there is empty

- [00:29:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1771) empty yeah

- [00:29:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1772) yeah it is changed

- [00:29:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1774) it is changed there is api yeah

- [00:29:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1776) there is api yeah api empty read write actions

- [00:29:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1785) read like endpoints we are not going to use entity framework

- [00:29:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1788) we are not going to use entity framework let's add this one i wonder how well it

- [00:29:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1790) let's add this one i wonder how well it will be

- [00:29:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1798) okay value as controller it says let's name it as registers

- [00:30:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1805) okay register controller the road is by default api controller we

- [00:30:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1808) road is by default api controller we will change it

- [00:30:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1810) will change it so that is get

- [00:30:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1811) so that is get okay

- [00:30:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1813) okay so they have examples there is id get

- [00:30:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1827) okay and there is from what's in value as well

- [00:30:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1828) as well okay

- [00:30:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1847) we need a model for registration that we will send

- [00:30:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1851) for registration that we will send okay i am going to add a class

- [00:31:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1868) okay in the registration module what we are going to have

- [00:31:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1878) username and password okay

- [00:31:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1881) and password okay so

- [00:31:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1883) so let's have string

- [00:31:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1887) let's have string username

- [00:31:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1893) password okay and this

- [00:31:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1908) okay that is http post pull delete okay i think i will use this post

- [00:31:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1911) okay i think i will use this post and i will use model of registration to

- [00:31:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1915) and i will use model of registration to be able to use that using

- [00:31:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1918) be able to use that using google's okay so

- [00:32:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1921) google's okay so application logos okay

- [00:32:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1924) application logos okay now the model will appear here

- [00:32:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1927) now the model will appear here and registration model

- [00:32:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1930) and registration model my

- [00:32:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1931) my model okay

- [00:32:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1933) model okay we will get this data

- [00:32:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1939) the post all right okay um

- [00:32:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1941) all right okay um [Music]

- [00:32:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1942) [Music] so let's change um

- [00:32:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1945) so let's change um the

- [00:32:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1946) the note of this registers

- [00:32:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1949) note of this registers and

- [00:32:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1950) and [Music]

- [00:32:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1951) [Music] first we need to verify if this is

- [00:32:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1953) first we need to verify if this is working or not

- [00:32:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1956) working or not first thing is rpg it could be my model

- [00:32:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1959) first thing is rpg it could be my model dot

- [00:32:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1961) dot username

- [00:32:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1962) username and

- [00:32:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1963) and something

- [00:32:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1965) something of course

- [00:32:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1966) of course i will put a breakpoint here

- [00:32:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1969) i will put a breakpoint here and then um

- [00:32:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1974) we are going to make a post to our

- [00:32:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1977) make a post to our api

- [00:32:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1979) api to do that i will use

- [00:33:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1982) to do that i will use http client

- [00:33:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1985) http client which is

- [00:33:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1987) which is explained here

- [00:33:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1991) explained here okay

- [00:33:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1992) okay so for to be able to use this we need to

- [00:33:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1995) so for to be able to use this we need to add

- [00:33:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=1999) some references system.net

- [00:33:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2002) references system.net http okay so

- [00:33:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2006) http okay so i'm not going to use it as post

- [00:33:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2007) i'm not going to use it as post asynchronous

- [00:33:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2017) actually we can make this as a circular shoulder say

- [00:34:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2047) okay so

- [00:34:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2056) okay for clients it is recommended to have a private static rate only client

- [00:34:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2059) have a private static rate only client application byte

- [00:34:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2061) application byte okay

- [00:34:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2063) okay and

- [00:34:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2065) and average response content

- [00:35:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2108) okay yes i think let's change it

- [00:35:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2111) yes i think let's change it okay as for the values i think we need

- [00:35:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2114) okay as for the values i think we need to use

- [00:35:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2117) to use same model named parameters

- [00:35:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2121) same model named parameters let's see

- [00:35:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2122) let's see so

- [00:35:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2128) in our model we have username and password

- [00:35:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2140) oh i think yeah we need to make this like this

- [00:35:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2145) okay and password

- [00:35:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2150) okay so the username will teach the username

- [00:35:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2151) username text

- [00:35:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2153) text password will be

- [00:36:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2164) thing by the way uh we also need to encrypt

- [00:36:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2167) by the way uh we also need to encrypt this password

- [00:36:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2169) this password so let's add

- [00:36:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2170) so let's add another class

- [00:36:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2177) okay let's say extensions

- [00:36:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2194) let's find a message

- [00:36:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2217) um actually we should use salted password for better security but i'm not

- [00:36:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2219) password for better security but i'm not going to spend time with it you can see

- [00:37:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2222) going to spend time with it you can see salted password hashing

- [00:37:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2224) salted password hashing in my videos

- [00:37:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2235) yes okay

- [00:37:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2236) okay uh so the proper way is salted password

- [00:37:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2239) uh so the proper way is salted password hashing

- [00:37:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2246) and then we need to use compute hash

- [00:37:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2248) compute hash as a password

- [00:37:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2250) as a password all right so for the url uh let's run

- [00:37:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2253) all right so for the url uh let's run this application um

- [00:37:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2256) this application um it gave an error meanwhile trying to run

- [00:37:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2259) it gave an error meanwhile trying to run because we have removed

- [00:37:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2262) because we have removed the road here

- [00:37:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2265) the road here in our app controllers which is here

- [00:37:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2270) in our app controllers which is here therefore we need to set a default

- [00:37:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2273) therefore we need to set a default here as

- [00:38:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2285) yes and i will make it as registered all right

- [00:38:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2292) and from the options web browser i will make it opera

- [00:38:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2303) okay so it is this one current it is opening our index page but it is not

- [00:38:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2305) opening our index page but it is not important for us this is our url

- [00:38:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2307) important for us this is our url currently we will change it to windows

- [00:38:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2310) currently we will change it to windows server later

- [00:38:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2313) server later so let's type our url here and our post

- [00:38:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2318) so let's type our url here and our post url will be

- [00:38:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2320) url will be equal to

- [00:38:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2322) equal to api do register

- [00:38:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2326) api do register okay

- [00:38:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2327) okay like this

- [00:38:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2332) all right so and in here let's return success

- [00:39:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2343) and how do we return value here we can just return value with a string

- [00:39:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2355) debugging proposals right now uh we will change it later

- [00:39:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2358) we will change it later all right so

- [00:39:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2360) all right so let's test if it is working so far or

- [00:39:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2363) let's test if it is working so far or not

- [00:39:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2381) but right now it will tell us that it is not available

- [00:40:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2408) okay it will tell us that it we need to return

- [00:40:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2418) actually i hate this kind of programming

- [00:40:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2432) all right let's just put a breakpoint here too

- [00:40:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2441) okay so do we have a response no we didn't get because we didn't get

- [00:40:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2446) didn't get because we didn't get a call here as well

- [00:41:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2461) okay round completion results start scored for all four because not found

- [00:41:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2465) scored for all four because not found so it didn't find

- [00:41:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2468) so it didn't find this url let's say

- [00:41:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2474) okay currently our [Music]

- [00:41:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2477) [Music] api route is not working

- [00:41:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2486) because it is only for both let's also make it

- [00:41:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2489) both let's also make it actually let's test it with

- [00:41:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2495) tests registers

- [00:41:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2500) maybe we need to add a slash here to what probably we don't need

- [00:43:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2589) since this is api controller maybe that is why we can't just access it but it

- [00:43:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2592) is why we can't just access it but it shouldn't be this way

- [00:43:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2614) at the moment okay now let's run again

- [00:43:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2618) okay now let's run again okay api

- [00:43:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2621) okay api is this okay

- [00:43:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2623) is this okay so we were missing uh this beginning

- [00:43:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2626) so we were missing uh this beginning slash

- [00:43:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2627) slash obviously

- [00:44:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2643) okay and yes our response string is here you see

- [00:44:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2649) unsupported media type such four one five trace id

- [00:44:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2651) five trace id okay we didn't get

- [00:44:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2654) okay we didn't get uh

- [00:44:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2655) uh our

- [00:44:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2663) true message so api do register has failed and why

- [00:45:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2715) let's look for this unsupported media type

- [00:46:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2777) um yes we use it for but how do we stand it

- [00:46:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2805) okay c-sharp post let's see

- [00:46:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2807) let's see if we have post

- [00:46:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2809) if we have post okay

- [00:47:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2846) so i will pause when you're here to find out okay i have found another

- [00:47:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2848) out okay i have found another methodology and with this methodology i

- [00:47:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2851) methodology and with this methodology i think we can use our existing model

- [00:47:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2855) think we can use our existing model uh so to be able to use our model first

- [00:47:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2864) okay one moment first we will

- [00:47:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2873) publish our application as dll okay [Music]

- [00:47:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2876) [Music] let's see

- [00:47:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2878) let's see let's publish it into

- [00:48:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2880) let's publish it into publish folders

- [00:48:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2900) okay i only need to actually have this model

- [00:48:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2905) so let me check how can we only publish

- [00:48:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2907) let me check how can we only publish that part

- [00:48:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2928) we only d need our model to be published which is here

- [00:49:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2944) another video model no not this one

- [00:49:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2945) no not this one yeah we only need to publish this one

- [00:49:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2948) yeah we only need to publish this one so can we publish it

- [00:49:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2962) i think inside models yes the model is published

- [00:49:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2965) inside models yes the model is published like this

- [00:49:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2966) like this so we are going to use that model in our

- [00:49:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2969) so we are going to use that model in our clients at

- [00:49:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2971) clients at existing item

- [00:49:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2978) here inside release publish models

- [00:49:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2985) yes okay it is same actually just copy pasting

- [00:49:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2988) same actually just copy pasting and

- [00:49:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2990) and now we can use our model in here

- [00:49:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2994) now we can use our model in here how we're going to use that

- [00:49:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2996) how we're going to use that use that list using

- [00:49:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=2999) use that list using okay

- [00:50:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3001) okay server side application dot

- [00:50:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3005) server side application dot models

- [00:50:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3007) models and our model name is registration model

- [00:50:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3024) equal to new registration model user object dot username txt

- [00:50:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3028) object dot username txt text

- [00:50:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3030) text and user object.password

- [00:50:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3050) then we need to have newton's off json serializers

- [00:51:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3071) okay this is our object our url is this

- [00:51:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3077) electron soft or neutral slot

- [00:51:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3095) create one minute

- [00:51:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3112) this is the serialize and the settlers object

- [00:52:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3127) okay to be able to use this we need to add reference

- [00:52:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3134) and our object is here this is our serialized object

- [00:52:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3137) this is our serialized object okay let's see what happens now

- [00:52:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3140) okay let's see what happens now and we will return through

- [00:52:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3152) and we will use this method this time let's just also run our application

- [00:52:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3167) okay let's try something okay result contents through

- [00:52:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3171) okay result contents through oh since there it was inside

- [00:53:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3195) okay api method address why this is not the url that we did send

- [00:53:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3203) oh i see because

- [00:53:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3206) because we did incorrect

- [00:53:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3220) yes as you can see now we are in our server site

- [00:53:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3222) now we are in our server site application and let's see if we did

- [00:53:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3224) application and let's see if we did receive our model

- [00:53:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3226) receive our model yes password and username is received

- [00:53:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3229) yes password and username is received perfectly fine

- [00:53:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3231) perfectly fine as you can see so i can read the

- [00:53:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3234) as you can see so i can read the username and password from the model

- [00:53:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3236) username and password from the model model is verified

- [00:53:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3239) model is verified okay actually we need to add model

- [00:54:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3241) okay actually we need to add model verify as well

- [00:54:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3246) so is model one

- [00:54:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3248) is model one it's is right or something like this

- [00:54:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3256) okay okay

- [00:54:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3272) yeah model state is right but we don't have model state right now

- [00:54:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3286) let's say yes and foreign

- [00:55:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3309) okay and we need to add some

- [00:55:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3311) some okay

- [00:55:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3312) okay requirements to our model

- [00:55:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3340) to be able to have them so i don't remember exactly

- [00:55:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3346) let's check from our mvc courses

- [00:55:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3354) here and let's open lecture 5 for example

- [00:56:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3363) from our models i am sure we can see not use

- [00:56:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3395) um yeah i mean linked amongst

- [00:56:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3409) available because we need that data annotations

- [00:56:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3412) annotations okay so mean length of a username is

- [00:56:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3414) okay so mean length of a username is three

- [00:56:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3415) three username minimum three characters

- [00:57:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3425) and what is our database design

- [00:57:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3428) what is our database design 50

- [00:57:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3430) 50 okay max is 50

- [00:57:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3446) and for password we need only required and it has to be

- [00:57:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3447) and it has to be exactly as

- [00:57:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3457) 64 but yeah it will be six

- [00:57:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3458) yeah it will be six off

- [00:57:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3460) off and you have to enter a password or

- [00:57:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3463) and you have to enter a password or something

- [00:58:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3484) why i do make it like this because it will always come as 64 character

- [00:58:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3489) will always come as 64 character because

- [00:58:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3491) because we

- [00:58:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3492) we use

- [00:58:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3494) use here's

- [00:58:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3499) let me show hashing by the way i am removing this because we

- [00:58:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3501) by the way i am removing this because we don't need it

- [00:58:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3504) don't need it and based on this result content we will

- [00:58:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3507) and based on this result content we will return true or false

- [00:58:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3519) arrows with return

- [00:58:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3520) return false

- [00:58:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3522) false and

- [00:58:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3523) and it will not contain success

- [00:58:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3533) okay can we return the error message

- [00:58:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3536) can we return the error message um

- [00:59:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3541) yes probably we can return the error message

- [00:59:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3554) actually we can do something like this it is totally related to our design yeah

- [00:59:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3556) it is totally related to our design yeah i won't make it more complex here

- [00:59:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3565) and now we have our model we need to check whether that user has registered

- [00:59:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3568) check whether that user has registered before or not

- [00:59:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3571) before or not uh so

- [00:59:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3572) uh so to be able to check that i will use from

- [00:59:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3575) to be able to check that i will use from my

- [00:59:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3576) my mimi connection

- [00:59:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3579) mimi connection and

- [00:59:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3580) and select data

- [00:59:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3583) select data select

- [00:59:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3584) select query with cmd select pretty

- [00:59:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3589) query with cmd select pretty okay

- [00:59:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3590) okay command will listen if you want for

- [01:00:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3610) username equal to username and

- [01:00:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3611) and this is commands i need what parameter

- [01:00:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3613) this is commands i need what parameter names this is by my design but there can

- [01:00:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3616) names this is by my design but there can be more optimized

- [01:00:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3618) be more optimized designs of course

- [01:00:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3620) designs of course or

- [01:00:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3622) or second value is

- [01:00:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3625) second value is its parameters which are username

- [01:00:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3633) and name list

- [01:00:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3634) list object

- [01:00:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3636) object will be

- [01:00:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3639) will be my model that

- [01:00:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3641) my model that usually okay

- [01:00:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3643) usually okay and this will return data table

- [01:00:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3650) okay for data table i need to add using system data

- [01:01:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3668) bigger than 0 that means that user already exists return

- [01:01:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3671) already exists return and what is users already exists okay

- [01:01:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3680) okay incorrect when you incorrect registration

- [01:01:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3692) and other than that we just need to register

- [01:01:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3695) other than that we just need to register with

- [01:01:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3696) with the connection

- [01:01:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3699) the connection okay see i'm updated quickly

- [01:01:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3702) okay see i'm updated quickly insert into users

- [01:01:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3716) okay username and user password user name

- [01:02:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3723) user password and the values are

- [01:02:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3734) user password and i will provide

- [01:02:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3737) and i will provide value names

- [01:02:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3751) and [Music]

- [01:02:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3753) [Music] parameters

- [01:02:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3763) which are model state but

- [01:02:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3764) but not motor state

- [01:02:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3766) not motor state my model dot username

- [01:02:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3769) my model dot username without

- [01:02:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3772) without password

- [01:02:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3774) password and this will be returned

- [01:03:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3782) if your results

- [01:03:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3809) i don't know whatever has happened raised regulators

- [01:03:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3812) raised regulators and unknown airbrush

- [01:03:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3815) and unknown airbrush let's have a please try

- [01:03:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3818) let's have a please try again

- [01:03:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3829) all right so our register api is ready and

- [01:03:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3831) and we need to update our registration model

- [01:03:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3833) we need to update our registration model as well so

- [01:03:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3835) as well so to do that let's just click publish

- [01:03:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3838) to do that let's just click publish or not this one actually

- [01:04:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3841) or not this one actually registration control over here

- [01:04:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3852) okay publish then we will add

- [01:04:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3863) okay it already exists so we need to delete this i think

- [01:04:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3870) at least item

- [01:04:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3875) okay and in here if it contains

- [01:04:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3880) and in here if it contains error i will actually return

- [01:04:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3883) error i will actually return string here

- [01:04:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3899) and [Music]

- [01:05:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3901) [Music] then message for show

- [01:05:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3905) okay results alright okay let's try

- [01:05:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3913) first let's try with two letters it should fail

- [01:05:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3914) should fail okay we didn't get any results why

- [01:05:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3923) oh i see because our uh application is not running first we need

- [01:05:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3926) application is not running first we need to

- [01:05:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3928) to run it

- [01:05:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3929) run it as a server now our server is open

- [01:05:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3933) as a server now our server is open let's just run it

- [01:05:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3934) let's just run it a

- [01:05:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3936) a okay so

- [01:05:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3938) okay so one or more validation errors

- [01:05:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3940) one or more validation errors usernames can be minimum three

- [01:05:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3942) usernames can be minimum three characters

- [01:05:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3943) characters so it has returned an entire thing

- [01:05:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3947) so it has returned an entire thing and

- [01:05:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3948) and to parse it properly

- [01:05:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3955) okay there is title there is status trace id and errors okay

- [01:06:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3966) so i can deserialize it this dynamically and pass

- [01:06:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3969) deserialize it this dynamically and pass it as

- [01:06:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3971) it as success or error

- [01:06:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3987) change errors

- [01:06:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3989) errors let's just dynamically pass it

- [01:06:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3992) let's just dynamically pass it okay

- [01:06:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=3994) okay there's another device

- [01:07:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4021) maybe we can get

- [01:07:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4022) we can get here

- [01:07:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4024) here with debugging

- [01:07:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4035) let's see there is status quote bad request

- [01:07:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4043) and that is headers

- [01:07:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4051) there is a request message public numbers

- [01:07:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4053) public numbers response now

- [01:07:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4056) response now and in there is forms

- [01:07:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4059) and in there is forms in the content

- [01:07:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4066) oh i have to first get here because this is asynchronous

- [01:07:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4068) get here because this is asynchronous okay

- [01:07:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4070) okay so now the content is

- [01:08:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4080) like this when i click the content there are

- [01:08:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4086) let's see i don't see anything

- [01:08:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4088) i don't see anything let's check headers

- [01:08:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4102) okay the content type is as you can see jason

- [01:08:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4104) as you can see jason and the volume

- [01:08:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4106) and the volume is not the thing we are looking for

- [01:08:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4127) okay i think i need to deselect this json

- [01:08:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4129) json into dynamic class

- [01:09:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4147) okay and then without for json we need to add

- [01:09:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4157) install is that the web pages now please here let's just install this

- [01:09:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4168) okay now

- [01:09:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4169) now they are not available why

- [01:10:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4202) innocence yeah this is not the thing that we need to

- [01:10:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4204) this is not the thing that we need to install

- [01:10:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4206) install let's just try json

- [01:10:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4242) okay and

- [01:10:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4256) yeah now it should work like this

- [01:10:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4259) like this and this is ours

- [01:11:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4286) using origins maybe this

- [01:11:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4298) okay now it's explored this users need to solve

- [01:11:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4301) this users need to solve so let's just remove the other installed

- [01:11:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4304) so let's just remove the other installed package

- [01:11:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4305) package yes we don't need it

- [01:11:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4308) yes we don't need it okay

- [01:11:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4314) okay okay now let's

- [01:11:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4317) now let's try again or we have an error somewhere

- [01:12:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4354) so we have errors oh i see this isn't it

- [01:12:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4368) okay well the parasites

- [01:12:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4371) well the parasites okay so when we pass what do we have we

- [01:12:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4373) okay so when we pass what do we have we have type

- [01:13:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4380) okay we have errors we have status title trace id type

- [01:13:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4382) trace id type so in the errors we can have

- [01:13:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4386) so in the errors we can have like this so

- [01:13:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4388) like this so how do we gonna access it

- [01:13:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4391) how do we gonna access it we're gonna access it with i think

- [01:13:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4396) we're gonna access it with i think errors

- [01:13:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4416) yes and the error in the uh in the panel of errors then

- [01:13:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4418) in the panel of errors then we have other dynamics top

- [01:13:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4421) we have other dynamics top so we need to iterate water

- [01:13:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4425) so we need to iterate water okay um for each

- [01:13:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4431) address i don't know if this will work

- [01:14:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4442) probably we can't iterate we can just show this actually

- [01:14:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4448) it will be more logical this can be improved but but i will do it later

- [01:14:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4452) improved but but i will do it later okay so

- [01:14:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4455) okay so okay

- [01:14:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4456) okay let's just also get a

- [01:14:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4459) let's just also get a access one

- [01:14:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4476) in the successful case let's see what do we get

- [01:14:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4477) we get for example

- [01:14:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4479) for example eg111

- [01:14:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4493) success message okay therefore we can just use it like

- [01:14:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4496) okay therefore we can just use it like that

- [01:14:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4497) that it has to be like this

- [01:15:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4502) okay now it will work let's also check out our

- [01:15:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4505) let's also check out our user

- [01:15:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4506) user table yes it is registered let's try

- [01:15:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4509) table yes it is registered let's try again

- [01:15:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4518) you see this is how we use web api to access database we don't do it

- [01:15:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4522) to access database we don't do it directly in the client

- [01:15:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4524) directly in the client click on i will make the password as one

- [01:15:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4528) click on i will make the password as one register success you have registered

- [01:15:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4529) register success you have registered successfully okay and our user is

- [01:15:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4534) successfully okay and our user is generated then we should do automatic

- [01:15:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4537) generated then we should do automatic login

- [01:15:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4538) login so the user can log in

- [01:15:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4541) so the user can log in for the login we need authentication

- [01:15:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4545) for the login we need authentication and for that we need

- [01:15:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4551) um another table

- [01:15:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4553) another table which will be

- [01:15:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4558) let's say user id

- [01:16:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4563) alt ports for example this will be a setting

- [01:16:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4567) ports for example this will be a setting i think we can generate

- [01:16:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4578) let's see what kind of token we can generate

- [01:17:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4628) yeah i knew why they should work so it's a base 64. how much length does

- [01:17:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4631) so it's a base 64. how much length does it generate i am not sure

- [01:17:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4633) it generate i am not sure first let's

- [01:17:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4635) first let's go to our login api

- [01:17:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4639) go to our login api okay

- [01:17:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4640) okay okay uh so

- [01:17:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4641) okay uh so let's start with um

- [01:17:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4645) let's start with um testing

- [01:17:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4649) new gu id

- [01:17:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4650) gu id so for that i'm going to add

- [01:17:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4671) okay let's say remote

- [01:17:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4673) remote operations

- [01:17:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4674) operations controllers

- [01:17:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4679) okay so i will rename this as reload

- [01:18:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4681) so i will rename this as reload operations

- [01:18:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4684) operations and

- [01:18:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4690) so this will do registers okay and they are going to have

- [01:18:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4695) okay and they are going to have a

- [01:18:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4696) a login method

- [01:18:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4698) login method so for login method we can just copy and

- [01:18:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4701) so for login method we can just copy and paste this

- [01:18:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4708) okay here's the pause let's say go login

- [01:18:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4715) let's change the names in registers

- [01:18:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4719) change the names in registers okay and

- [01:18:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4726) okay the do login will take same as

- [01:18:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4727) same as registration model because but for

- [01:18:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4730) registration model because but for logging in we need username and password

- [01:18:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4734) logging in we need username and password incorrect login

- [01:18:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4736) incorrect login values are provided and

- [01:19:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4740) values are provided and in this case we are going to select

- [01:19:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4744) in this case we are going to select whether the provided information are

- [01:19:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4747) whether the provided information are correct or not and

- [01:19:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4766) the password equal to user password uh we need

- [01:19:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4769) uh we need um

- [01:19:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4774) what we need check

- [01:19:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4776) check we need the same methods of

- [01:19:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4779) we need the same methods of extensions in

- [01:19:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4782) extensions in here as well

- [01:19:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4784) here as well so let's add

- [01:19:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4787) so let's add a folder as

- [01:19:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4789) a folder as actually we don't need a folder

- [01:19:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4792) actually we don't need a folder and let's see let's just add

- [01:19:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4795) and let's see let's just add extensions

- [01:19:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4797) extensions so

- [01:19:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4798) so i will publish this but there is no

- [01:20:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4801) i will publish this but there is no publishing it

- [01:20:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4807) okay so i can just publish this and add the dll

- [01:20:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4810) i can just publish this and add the dll file let me show you

- [01:20:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4817) since it is client-side it should work let's add a reference

- [01:20:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4827) right existing item perhaps let's add as a reference

- [01:20:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4839) conversants bros

- [01:20:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4854) okay the reference is added and

- [01:20:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4858) the reference is added and where can we see it we can see it here

- [01:21:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4861) where can we see it we can see it here you see as assembly

- [01:21:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4863) you see as assembly enough

- [01:21:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4865) enough in

- [01:21:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4866) in remote operations

- [01:21:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4869) remote operations uh

- [01:21:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4870) uh we are going to

- [01:21:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4873) we are going to change

- [01:21:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4874) change password let's say

- [01:21:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4883) actually password will be equal to my model dot

- [01:21:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4884) model dot password through

- [01:21:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4887) password through hash complete hash but to be able to use

- [01:21:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4890) hash complete hash but to be able to use it i need to add

- [01:21:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4892) it i need to add using

- [01:21:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4894) using chrysler server project

- [01:21:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4901) okay when i edit i think

- [01:21:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4903) i think i can use computers yes

- [01:21:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4906) i can use computers yes you see

- [01:21:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4907) you see i am using the same

- [01:21:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4909) i am using the same methods uh to ensure

- [01:21:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4912) methods uh to ensure synchronization

- [01:21:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4918) okay username equal to username user password equal to user password

- [01:22:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4921) password equal to user password and i need to provide the values

- [01:22:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4924) and i need to provide the values [Music]

- [01:22:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4927) [Music] and the object as

- [01:22:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4929) and the object as username and

- [01:22:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4931) username and passion password

- [01:22:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4934) passion password if this is equal to zero

- [01:22:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4940) actually we we can say return errors

- [01:22:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4946) you have entered incorrect username

- [01:22:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4950) entered incorrect username or password

- [01:22:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4961) all right and if it is success then we need to generate a

- [01:22:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4963) we need to generate a uh authentication idea that we will use

- [01:22:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4967) uh authentication idea that we will use in every call

- [01:22:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4970) in every call okay um

- [01:22:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4976) let's say return

- [01:23:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4983) success you have successfully logged in

- [01:23:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=4995) new view id

- [01:23:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5000) okay um to checking that out we need to add

- [01:23:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5003) to checking that out we need to add login panel

- [01:23:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5005) login panel yes

- [01:23:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5007) yes login

- [01:23:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5009) login okay in the login we are going to same

- [01:23:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5011) okay in the login we are going to same they have two text box

- [01:23:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5015) they have two text box text box and txt user's name login

- [01:23:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5024) migrate is not the

- [01:23:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5030) and move your name

- [01:23:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5033) move your name let's copy paste it

- [01:23:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5035) let's copy paste it i should know it with this bomb near the

- [01:23:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5037) i should know it with this bomb near the password box

- [01:24:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5043) okay here and this will be

- [01:24:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5046) and this will be let's find a patch

- [01:24:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5061) of copy here

- [01:24:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5063) here and let's add a button for login

- [01:24:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5078) okay and in the login

- [01:24:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5081) and in the login we will do the same

- [01:24:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5085) we will do the same okay

- [01:24:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5093) by the way we are using using clients uh although we could use this one as well

- [01:24:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5098) although we could use this one as well i think using client is better than this

- [01:24:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5099) i think using client is better than this approach

- [01:25:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5101) approach i will use this

- [01:25:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5104) i will use this and in this case

- [01:25:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5107) and in this case okay we will just send

- [01:25:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5115) oh we we will send yeah yeah we don't need to

- [01:25:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5118) yeah yeah we don't need to compute hash here again

- [01:25:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5121) compute hash here again because we can

- [01:25:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5123) because we can hash it in the

- [01:25:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5125) hash it in the client

- [01:25:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5130) okay and

- [01:25:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5132) and yeah it looks correct

- [01:25:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5134) yeah it looks correct instead of do register now we will use

- [01:25:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5137) instead of do register now we will use login

- [01:25:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5143) and when the user logged in we need to return out code okay

- [01:25:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5146) return out code okay we will do that don't worry about it

- [01:25:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5158) okay this has to be an assignments method that first

- [01:26:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5168) okay um login okay and let's wait this little

- [01:26:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5170) okay and let's wait this little registers

- [01:26:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5182) okay and

- [01:26:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5184) and here we will

- [01:26:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5186) here we will log in like this

- [01:26:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5196) okay what is wrong right now

- [01:26:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5205) okay this has to return strange

- [01:26:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5206) strange and

- [01:26:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5219) all right now we should be able to

- [01:27:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5222) now we should be able to get in here

- [01:27:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5240) okay maybe we didn't reach that let's retry

- [01:27:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5242) let's retry okay and

- [01:27:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5246) okay and all right

- [01:27:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5247) all right okay i think i am entering password

- [01:27:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5251) okay i think i am entering password incorrectly

- [01:27:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5256) so let me register again one one one one

- [01:27:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5259) let me register again one one one one one registers

- [01:27:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5265) okay so the

- [01:27:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5267) so the new gear id is generated like this and

- [01:27:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5271) new gear id is generated like this and how many characteristics

- [01:28:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5283) i'm assuming the new uid will generate every time same let's

- [01:28:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5286) uid will generate every time same let's check out these methods

- [01:29:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5340) okay they say that we should use random number generator class

- [01:29:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5343) number generator class so

- [01:29:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5344) so from this class what can we use

- [01:29:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5394) okay create strange

- [01:30:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5438) okay i think it takes size yeah this should work

- [01:30:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5441) it takes size yeah this should work let's generate 64

- [01:30:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5444) let's generate 64 uh character sizes

- [01:30:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5447) uh character sizes random numbers

- [01:30:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5449) random numbers this will be applied at the server side

- [01:30:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5453) this will be applied at the server side so therefore i am going to add

- [01:30:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5457) so therefore i am going to add an extensions class

- [01:31:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5466) okay let's say abstentions this will be a public setup plus

- [01:31:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5469) this will be a public setup plus in the server side

- [01:31:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5471) in the server side okay probably someone get unique in size

- [01:31:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5475) okay probably someone get unique in size to be able to use random number

- [01:31:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5477) to be able to use random number generators

- [01:31:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5478) generators we are going to use

- [01:31:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5481) we are going to use uh system security

- [01:31:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5484) uh system security cryptography and

- [01:31:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5487) cryptography and system text

- [01:31:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5494) [Music] charge length where is this charge oh

- [01:31:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5496) charge length where is this charge oh charges here

- [01:31:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5506) like this okay okay so our unique

- [01:31:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5515) will be generated in our login methods here

- [01:31:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5517) here so let's say

- [01:32:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5520) so let's say i think

- [01:32:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5526) will be equal to 64

- [01:32:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5532) and to be able to use this i need to

- [01:32:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5534) i need to give full pads as extensions

- [01:32:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5542) that's going to okay okay okay let's retry

- [01:32:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5556) and yes i think it is 64

- [01:32:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5559) yes i think it is 64 with english character set and it looks

- [01:32:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5562) with english character set and it looks pretty

- [01:32:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5563) pretty random

- [01:32:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5565) random all right and

- [01:32:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5567) all right and we need to return

- [01:32:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5570) we need to return this out code

- [01:32:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5578) for users [Music]

- [01:33:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5580) [Music] so i will append it in the end of the

- [01:33:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5583) so i will append it in the end of the message

- [01:33:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5585) message like this

- [01:33:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5586) like this with the semicolon

- [01:33:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5588) with the semicolon and in the client sides we are going to

- [01:33:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5592) and in the client sides we are going to have

- [01:33:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5594) have outcode okay so with this authentication

- [01:33:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5597) outcode okay so with this authentication code

- [01:33:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5600) code we will have our

- [01:33:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5607) logged in model so the logged in model

- [01:33:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5614) okay will be also kept in here

- [01:33:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5616) will be also kept in here so let's add a class here as users

- [01:33:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5621) so let's add a class here as users bloggers

- [01:33:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5622) bloggers users

- [01:33:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5624) users okay in local user class we are going to

- [01:33:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5627) okay in local user class we are going to have

- [01:33:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5629) have string username user email we can keep

- [01:33:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5637) no we are not going to keep it we are going to have public int

- [01:34:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5640) going to have public int users

- [01:34:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5641) users id

- [01:34:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5643) id we are going to have public strange

- [01:34:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5649) use out code we can also have

- [01:34:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5652) out code we can also have user of expiration date

- [01:34:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5664) okay let's say uh

- [01:34:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5665) uh alt

- [01:34:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5666) alt expiration

- [01:34:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5672) date okay auto expiration date

- [01:34:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5675) okay auto expiration date so we can access we can

- [01:34:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5679) so we can access we can update this date

- [01:34:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5686) i don't know i will i won't make it more complex than

- [01:34:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5687) complex than it is but you can edit if you want

- [01:34:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5690) it is but you can edit if you want and inside this class

- [01:34:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5693) and inside this class we need to have character of the user

- [01:34:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5696) we need to have character of the user publish

- [01:34:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5697) publish plus

- [01:34:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5699) plus okay um

- [01:35:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5701) okay um actually it will be like this we are

- [01:35:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5702) actually it will be like this we are going to have public

- [01:35:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5705) going to have public mass uh

- [01:35:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5707) mass uh users characters

- [01:35:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5712) info okay and inside here's

- [01:35:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5720) inc no citrine actually how we're gonna keep the user characters

- [01:35:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5722) how we're gonna keep the user characters currently they are set as

- [01:35:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5725) currently they are set as i think

- [01:35:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5736) okay we are going to have character id

- [01:35:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5747) we are going to have we don't need user id because we are

- [01:35:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5748) we don't need user id because we are going to keep it here

- [01:35:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5750) going to keep it here so with this approach we would keep only

- [01:35:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5754) so with this approach we would keep only we will

- [01:35:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5755) we will give one character

- [01:35:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5757) give one character to one user

- [01:35:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5758) to one user yeah it's fine we don't need it more

- [01:36:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5760) yeah it's fine we don't need it more complex here right now

- [01:36:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5762) complex here right now because our purpose is in this video to

- [01:36:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5767) because our purpose is in this video to get you to learn the server side and

- [01:36:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5769) get you to learn the server side and client side approach

- [01:36:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5772) client side approach okay

- [01:36:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5773) okay child hp

- [01:36:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5780) okay let's just go to paste fif attack defense

- [01:36:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5792) character level i think we also need to keep character

- [01:36:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5795) i think we also need to keep character hp

- [01:36:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5802) i mean the experience so let's add

- [01:36:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5808) char experience i will also make it integers

- [01:37:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5822) okay so we are going to have an instance of

- [01:37:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5825) so we are going to have an instance of character in for in the locate users

- [01:37:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5829) character in for in the locate users let's say

- [01:37:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5834) publish character info

- [01:37:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5841) chart info okay

- [01:37:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5843) okay so we also need to add

- [01:37:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5846) so we also need to add something in registration i mean

- [01:37:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5850) something in registration i mean something extra

- [01:37:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5852) something extra which is generation of user characters

- [01:37:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5861) so when a person registers we need to add user character

- [01:37:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5864) add user character as well

- [01:37:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5867) as well [Music]

- [01:37:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5873) okay so

- [01:38:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5883) in the user character menu we have hp 10 attack 1

- [01:38:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5884) attack 1 defense 1 character level 1 character

- [01:38:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5888) defense 1 character level 1 character experience 0

- [01:38:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5889) experience 0 okay

- [01:38:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5891) okay and insert into

- [01:38:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5905) which values we are going to insert user id only the others the rest is automatic

- [01:38:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5910) id only the others the rest is automatic okay

- [01:38:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5912) okay and i also need to get user id

- [01:38:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5915) and i also need to get user id so with my current

- [01:39:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5947) okay then we need to check or let's say get a

- [01:39:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5949) or let's say get a user id

- [01:39:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=5991) okay and what we need to provide is

- [01:40:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6030) zero we need to return these are the case that should never

- [01:40:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6032) these are the case that should never happen actually

- [01:40:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6043) and now we have the [Music]

- [01:40:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6051) we have the parable and we have the value

- [01:40:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6057) okay and

- [01:41:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6083) if this is incorrect we need to delete the users

- [01:41:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6093) change delete from

- [01:41:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6102) equal to yeah let's make it like this

- [01:42:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6121) okay now when we register we will also register the user character

- [01:42:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6125) register the user character as well

- [01:42:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6128) as well all right

- [01:42:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6129) all right and

- [01:42:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6137) now each user will have only one character

- [01:42:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6141) okay and when

- [01:42:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6142) and when user login we will set character values

- [01:42:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6167) all right character id characteristic attack defense

- [01:42:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6170) attack defense character level character experience

- [01:42:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6177) let's name them as character defense

- [01:42:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6179) defense we could use the same

- [01:43:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6181) we could use the same uh names of the table as well but it is

- [01:43:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6183) uh names of the table as well but it is not necessary

- [01:43:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6190) okay so then user login we need to return authentication code

- [01:43:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6194) return authentication code but not only that we need to insert

- [01:43:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6197) but not only that we need to insert authentication code into

- [01:43:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6201) authentication code into user authentications table

- [01:43:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6204) user authentications table so we need another table which will have

- [01:43:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6207) so we need another table which will have user id actually

- [01:43:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6210) user id actually yeah usually

- [01:43:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6212) yeah usually okay out

- [01:43:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6213) okay out code

- [01:43:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6215) code let's make this as character 64. this is

- [01:43:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6218) let's make this as character 64. this is totally up to you by your design

- [01:43:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6224) and let's say login date

- [01:43:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6230) okay time i will make this as universal time

- [01:44:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6244) okay it is a

- [01:44:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6252) utc date time i'm not able to pronounce it very well

- [01:44:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6253) it very well okay and

- [01:44:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6255) okay and these two will be the primary k and

- [01:44:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6259) these two will be the primary k and usually out

- [01:44:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6261) usually out so this k will be very crucial for us to

- [01:44:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6265) so this k will be very crucial for us to verify the inputs that we receive from

- [01:44:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6268) verify the inputs that we receive from clients okay

- [01:44:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6270) clients okay and we are going to insert into this

- [01:44:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6273) and we are going to insert into this table the this table the user

- [01:44:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6275) table the this table the user authentication

- [01:44:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6278) authentication and okay so once that is fine first we

- [01:44:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6282) and okay so once that is fine first we will delete

- [01:44:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6285) will delete the existing authentications

- [01:45:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6307) okay okay

- [01:45:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6323) all right and then

- [01:45:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6325) and then we will insert into our

- [01:45:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6342) [Music] the column names are authentication

- [01:45:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6345) the column names are authentication codes

- [01:45:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6351) and user id the order doesn't matter as long as you follow the orders

- [01:45:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6353) long as you follow the orders values will be equal to

- [01:45:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6356) values will be equal to [Music]

- [01:45:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6357) [Music] let's make this ass

- [01:46:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6379) and user id all rights

- [01:46:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6396) [Music] the

- [01:46:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6401) we are not going to have anything else here actually

- [01:46:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6419) oh i see since we imported this they are conflicting

- [01:47:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6420) conflicting but we are not using it right now so i

- [01:47:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6422) but we are not using it right now so i will just remove it okay

- [01:47:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6425) will just remove it okay all right and we have registration model

- [01:47:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6430) all right and we have registration model and we are returning the authentication

- [01:47:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6432) and we are returning the authentication code

- [01:47:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6434) code okay it all looks correct

- [01:47:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6437) okay it all looks correct we just need to export this logo to

- [01:47:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6440) we just need to export this logo to users

- [01:47:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6443) users and in edit into our

- [01:47:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6458) okay so we are going to have result content

- [01:47:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6460) content and in result contents

- [01:47:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6468) this is the login results which will i can hear if we have keyword

- [01:47:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6472) will i can hear if we have keyword errors

- [01:48:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6495) oh yeah yeah this is the key

- [01:48:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6520) okay okay if login is successful we also need to load

- [01:48:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6523) need to load values of user we will do that in a

- [01:48:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6526) values of user we will do that in a moment

- [01:48:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6528) moment let's say yes another noise okay

- [01:48:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6532) let's say yes another noise okay so

- [01:49:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6558) by the way we need to split this to not

- [01:49:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6559) to not display users

- [01:49:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6567) the authentication code okay if results contain success

- [01:49:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6570) okay if results contain success we need to add

- [01:49:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6586) okay i'm going to make it as oblique

- [01:49:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6589) oblique static

- [01:49:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6592) users to be able to

- [01:49:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6594) to be able to english

- [01:50:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6601) against one side of the project

- [01:50:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6606) no better side application

- [01:50:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6624) you're going to this viewers

- [01:50:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6626) viewers instance okay

- [01:50:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6643) and here we need to have initialization method

- [01:50:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6649) refresh instance

- [01:50:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6655) all rights okay

- [01:51:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6664) what we are going to do is in extensions

- [01:51:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6673) using instance that your outcode will be equal to

- [01:51:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6683) and then we will call refresh method

- [01:51:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6686) refresh method of using instance

- [01:51:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6690) of using instance and in here

- [01:51:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6693) and in here of course is also in extensions

- [01:51:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6700) in here we are

- [01:51:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6701) we are going to need to

- [01:51:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6703) going to need to get the values

- [01:51:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6706) get the values of user characters

- [01:51:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6714) okay to be able to get it okay um

- [01:52:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6722) let's add rp refresh your

- [01:52:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6725) refresh your product

- [01:52:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6745) okay we are not able to see it

- [01:52:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6760) okay users

- [01:52:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6774) we are going to get all the parameters data dt

- [01:52:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6776) data dt table okay dt

- [01:52:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6779) table okay dt users

- [01:53:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6787) select data table

- [01:53:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6793) and actually

- [01:53:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6795) actually the one you're coming through here

- [01:53:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6798) the one you're coming through here maybe

- [01:53:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6806) it is not safe it is not safe therefore we need to use the new connection select

- [01:53:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6810) we need to use the new connection select cmd select query which is parameterize

- [01:53:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6813) cmd select query which is parameterize it

- [01:53:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6814) it let's just write it first here selecting

- [01:53:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6818) let's just write it first here selecting star from

- [01:53:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6821) star from users characters let me replace the cage

- [01:53:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6831) values write equal to one actually user

- [01:53:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6833) actually user equal to

- [01:53:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6835) equal to select i need a join here for

- [01:53:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6838) select i need a join here for out code

- [01:54:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6847) out equal to this

- [01:54:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6853) yes now it should work okay this will be our query

- [01:54:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6857) okay this will be our query and we will add

- [01:54:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6859) and we will add code

- [01:54:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6865) uh yeah now it should work let's provide the values

- [01:54:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6893) so if

- [01:55:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6904) log out users and message user that there have been an

- [01:55:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6905) message user that there have been an error

- [01:55:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6914) let's say i wrote unknown algorithms and keywords

- [01:55:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6923) and otherwise we need to return

- [01:55:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6936) uh client i think we can return data table

- [01:55:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6942) yeah to do that let's open

- [01:55:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6950) jason the way if we install it with thumbs up json now

- [01:55:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6952) thumbs up json now let's just install it

- [01:56:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6980) actually we don't need that we just need to serialize it

- [01:56:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6983) we just need to serialize it i mean the scene lies there

- [01:56:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6986) i mean the scene lies there which are not swallowed with

- [01:56:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6996) ok json convert okay yes

- [01:56:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=6998) yes and

- [01:56:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7000) and we are going to call this refresh in our

- [01:56:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7005) we are going to call this refresh in our extensions here

- [01:56:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7008) extensions here with

- [01:56:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7009) with this code

- [01:57:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7026) actually we are going to provide uh

- [01:57:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7028) uh pensions dot user instance

- [01:57:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7032) pensions dot user instance and now we should work

- [01:57:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7034) and now we should work we need to add the references

- [01:57:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7054) all right and this will be

- [01:57:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7056) and this will be i think like actually i need my business

- [01:58:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7105) all right it looks correct and we will call api

- [01:58:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7107) call api refresh you see we are sending our

- [01:58:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7111) refresh you see we are sending our authentication code

- [01:58:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7113) authentication code and based on that we are

- [01:58:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7121) reading the user values because we need to keep an attend we need to have an

- [01:58:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7124) to keep an attend we need to have an authentication code otherwise the server

- [01:58:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7127) authentication code otherwise the server cannot know whether we are out and

- [01:58:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7130) cannot know whether we are out and authenticated or not

- [01:59:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7180) this also has to be asynchronous otherwise it won't work

- [02:00:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7205) either of them we need to log out the users

- [02:00:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7212) it's like chase

- [02:00:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7227) only each task or

- [02:00:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7231) which falls otherwise

- [02:01:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7265) i hope that the data table is serializable it may not be

- [02:01:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7269) serializable it may not be i'm not sure if it is not

- [02:01:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7272) i'm not sure if it is not deserializable it will not work

- [02:01:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7275) deserializable it will not work or stabilizable

- [02:01:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7292) and here's the results

- [02:02:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7332) okay now once we receive the [Music]

- [02:02:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7333) [Music] values

- [02:02:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7348) this objects data

- [02:03:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7395) why did i write an extension like this because i will use it to set

- [02:03:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7399) because i will use it to set uh

- [02:03:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7399) uh user values

- [02:03:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7401) user values which is using instance dot

- [02:03:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7405) which is using instance dot character info dot character experience

- [02:03:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7408) character info dot character experience will be equal to detail user values

- [02:03:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7416) okay let's make it actually first row

- [02:03:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7439) all right yeah now we should work

- [02:04:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7441) yeah now we should work so the character experience to int will

- [02:04:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7445) so the character experience to int will be equal to s

- [02:04:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7451) we look okay here

- [02:04:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7466) we are going to have hp of the user characters

- [02:04:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7489) we are going to have level of the characters

- [02:05:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7505) oh this one's incredible

- [02:05:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7521) and it's cut up there level okay this will set the values of the

- [02:05:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7525) okay this will set the values of the user characters

- [02:05:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7541) yes i think it should work now let's return to

- [02:05:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7544) return to our logit in windows

- [02:05:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7548) our logit in windows for that i am going to add another tab

- [02:05:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7550) for that i am going to add another tab item

- [02:06:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7572) i will copy paste it actually top yay

- [02:06:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7583) why not visible and let's remove that

- [02:06:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7596) login and name

- [02:06:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7599) and name well

- [02:06:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7600) well play

- [02:06:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7602) play another fundamental thing is that we

- [02:06:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7605) another fundamental thing is that we never trust

- [02:06:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7607) never trust uh any user input okay anybody here

- [02:06:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7611) uh any user input okay anybody here that comes from user we never trust them

- [02:06:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7615) that comes from user we never trust them so here we will display some labels as

- [02:06:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7619) so here we will display some labels as for example maybe

- [02:07:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7620) for example maybe [Music]

- [02:07:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7622) [Music] users

- [02:07:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7627) okay and let's say

- [02:07:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7637) and enable to display user character information

- [02:07:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7650) the same as character info

- [02:07:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7657) moments okay

- [02:07:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7664) and under the character info

- [02:07:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7674) i will display the items in the list box

- [02:08:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7682) okay like this by the way currently i am making a

- [02:08:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7683) by the way currently i am making a simple design because the design is not

- [02:08:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7687) simple design because the design is not the primary ah not the primary aim here

- [02:08:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7691) the primary ah not the primary aim here okay let's lst box with characters

- [02:08:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7696) okay let's lst box with characters we will display the character in from

- [02:08:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7698) we will display the character in from here

- [02:08:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7713) okay let's set the values okay

- [02:08:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7714) okay by the way to be able to access

- [02:08:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7718) by the way to be able to access this we need to have another thing here

- [02:08:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7726) publish main window

- [02:08:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7737) we will set this to an instance

- [02:09:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7744) object static by the way and when we are going to set the

- [02:09:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7745) and when we are going to set the reference is yes

- [02:09:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7753) this it will be in the extensions

- [02:09:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7758) not in this and

- [02:09:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7761) and let's set this as a null in the

- [02:09:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7763) let's set this as a null in the beginning

- [02:09:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7769) yes and

- [02:09:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7771) and here's me in this dots

- [02:09:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7775) here's me in this dots you will love it user equal to

- [02:09:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7784) okay uh user instance user id plus

- [02:09:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7794) sounds usually name like this

- [02:09:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7796) like this and this will of

- [02:09:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7798) and this will of course content

- [02:10:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7802) course content and for the list box we are going to

- [02:10:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7828) and search all ads let's add first

- [02:10:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7829) first character

- [02:10:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7830) character experience

- [02:11:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7901) okay i think these are all the things that we have and

- [02:11:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7903) that we have and now let's login register and login

- [02:11:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7912) also let's run our server side this data table um

- [02:11:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7914) server side this data table um [Music]

- [02:11:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7918) [Music] serialization may not work

- [02:12:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7920) serialization may not work so we need to

- [02:12:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7922) so we need to test it

- [02:12:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7923) test it first one

- [02:12:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7925) first one register

- [02:12:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7927) register let's login

- [02:12:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7939) so we did get an error somewhere and where it is

- [02:12:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7947) okay so refresh user is not

- [02:12:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7950) refresh user is not called yet

- [02:12:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7952) called yet because after user login

- [02:12:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7959) which happens in

- [02:12:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7961) in login tab by the way let's fix also tabs

- [02:12:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7964) login tab by the way let's fix also tabs as

- [02:12:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7976) let's go to false actually filter through

- [02:13:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7994) okay and after user

- [02:13:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=7997) after user registers

- [02:13:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8006) we need to type logging

- [02:13:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8007) logging is focused equal to blue

- [02:13:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8023) yes it's selected true and after user logins

- [02:13:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8027) and after user logins top registers

- [02:13:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8030) top registers please enable order uh enable equal to

- [02:13:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8033) please enable order uh enable equal to false

- [02:14:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8041) we didn't add logos yet and top play is enabled

- [02:14:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8054) and okay so we have

- [02:14:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8057) okay so we have refresh user instance so let's try why

- [02:14:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8061) refresh user instance so let's try why it didn't work

- [02:14:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8075) oh it did give errors based

- [02:14:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8091) it says we have failed to login correctly

- [02:14:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8093) correctly because you see we are getting the

- [02:14:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8095) because you see we are getting the incorrect values txt username login txt

- [02:15:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8105) yeah it is not that

- [02:15:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8113) txt name

- [02:15:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8115) name password

- [02:15:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8128) just one test run

- [02:15:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8139) success okay

- [02:15:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8157) this call is not awaited execution of securing method continues

- [02:15:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8159) securing method continues okay we need to await this one

- [02:16:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8166) otherwise it won't work yes now it should work

- [02:16:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8177) okay so unexpected json.table

- [02:16:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8185) inside here we had an error so let's put a breakpoint here

- [02:16:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8194) okay [Music]

- [02:16:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8196) [Music] so the result is something like this

- [02:16:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8217) okay and

- [02:17:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8234) send local users but

- [02:17:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8263) okay we are sending user instance user instance is type of

- [02:18:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8285) okay i see we have the character info serialized well very nice

- [02:18:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8295) okay it is sending the application now it will

- [02:18:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8296) it will call refresh user character

- [02:18:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8300) call refresh user character which is here

- [02:18:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8303) which is here ah i see i didn't add

- [02:18:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8306) ah i see i didn't add the slush

- [02:18:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8308) the slush actually

- [02:18:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8310) actually do we add the slice down or not

- [02:18:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8314) do we add the slice down or not oh we don't add the slush

- [02:18:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8317) oh we don't add the slush okay when we

- [02:18:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8319) okay when we await results it is not

- [02:18:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8322) await results it is not coming here

- [02:19:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8352) okay so we have an error

- [02:19:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8355) so we have an error somewhere

- [02:19:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8367) and what is it we have http localhost okay we have the

- [02:19:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8370) okay we have the refresh user characters

- [02:19:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8384) but we are not reaching this endpoint

- [02:20:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8454) okay i see so currently when we generate a new logout users

- [02:20:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8458) when we generate a new logout users this is null by default okay

- [02:21:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8466) so we need to set it in

- [02:21:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8476) we need to send it in let me check here

- [02:21:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8478) here okay

- [02:21:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8480) okay and

- [02:21:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8489) why it gets broken

- [02:22:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8562) dots user instance dots nothing appears

- [02:23:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8595) let's set them as string but empty perhaps

- [02:23:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8623) yes now it is checking the model state it was

- [02:23:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8624) it was expecting that value to be sent

- [02:23:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8628) expecting that value to be sent otherwise it was isn't entering here

- [02:23:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8632) otherwise it was isn't entering here and yes i think serialization has worked

- [02:24:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8641) yes it is working and enough

- [02:24:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8644) enough okay we had another error somewhere

- [02:24:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8647) okay we had another error somewhere we were going very well but

- [02:24:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8649) we were going very well but where did we crash

- [02:24:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8657) i think we crashed somewhere here yeah

- [02:24:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8658) yeah we didn't set the username so we need to

- [02:24:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8661) we didn't set the username so we need to set user name and user id

- [02:25:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8724) we need to return an object type i think we need to return using instance type

- [02:25:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8738) so instead of this let's [Music]

- [02:26:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8770) i will save it as empty

- [02:26:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8775) and i need to add

- [02:26:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8785) okay so that's

- [02:26:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8786) that's how should we do it

- [02:26:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8797) or we can directly edit i think we need to edit i will add it as an exists

- [02:26:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8800) to edit i will add it as an exists existing item

- [02:26:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8807) like this so it is coming from server side application

- [02:26:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8809) side application uh

- [02:26:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8819) yeah we already have it why do we add it here

- [02:27:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8827) okay so i will just return a logo to the first let me publish it

- [02:27:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8829) a logo to the first let me publish it since i have updated it

- [02:27:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8848) i will make this yes yes this is the way i have to do

- [02:27:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8865) user r code equal to user output

- [02:27:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8872) username equal to username

- [02:27:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8874) username actually let's also

- [02:27:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8876) actually let's also select username from the servers

- [02:28:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8880) select username from the servers because user may type it

- [02:28:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8883) because user may type it not uppercase lowercase or whatever

- [02:28:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8904) usually user id

- [02:28:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8935) where it is oh it was past english

- [02:29:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8956) then we will return it with their serialization

- [02:29:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8968) okay let's just publish it publish this again

- [02:29:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8971) publish it publish this again and we are going to delete this

- [02:29:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8978) and add

- [02:29:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8979) add existing item and robot users

- [02:29:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=8985) okay and

- [02:30:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9001) okay user instance here i have to set this

- [02:30:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9002) set this into

- [02:30:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9003) into this

- [02:30:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9031) watch it now we should have all the info

- [02:30:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9033) now we should have all the info [Music]

- [02:30:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9035) [Music] okay

- [02:30:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9050) okay the problem is we need to run our server

- [02:31:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9071) okay do we have an iron off we shouldn't

- [02:31:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9072) we shouldn't [Music]

- [02:31:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9073) [Music] passed this

- [02:31:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9084) we have success okay but why did we show this we

- [02:31:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9086) okay but why did we show this we shouldn't have shown this

- [02:31:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9088) shouldn't have shown this let's just remove this

- [02:31:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9095) and okay let's run again

- [02:31:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9110) okay so it says column character does not belong to the table

- [02:32:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9122) column character level why we have such column

- [02:32:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9124) column let's

- [02:32:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9125) let's check it out

- [02:32:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9146) i see so we don't put brackets here it is only necessary in the

- [02:32:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9149) is only necessary in the sql servers

- [02:32:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9157) yes as you can see now

- [02:32:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9159) as you can see now uh we are able to login our character

- [02:32:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9162) uh we are able to login our character information is here

- [02:32:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9165) information is here now

- [02:32:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9166) now we are going to add

- [02:32:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9171) most of the feeds button

- [02:32:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9173) button this will defeat monsters at the server

- [02:32:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9175) this will defeat monsters at the server side and update the relative information

- [02:32:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9178) side and update the relative information based on that

- [02:33:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9181) based on that so let's say okay

- [02:33:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9183) so let's say okay defeat monsters or let's say hans

- [02:33:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9186) defeat monsters or let's say hans monsters

- [02:33:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9192) intern monsters

- [02:33:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9199) so for this we need to have another

- [02:33:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9202) we need to have another method here

- [02:33:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9204) method here in the server side

- [02:33:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9206) in the server side which will be as let's say hans monsters

- [02:33:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9219) okay and it is going to check the out code

- [02:33:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9222) and it is going to check the out code and if it is

- [02:33:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9225) and if it is um

- [02:33:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9233) refresh it it will work how it will work it will work like this

- [02:33:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9236) it will work like this so in our refresh model which is here

- [02:34:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9250) yeah we need to have same thing

- [02:34:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9259) in there as well

- [02:35:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9321) and let's just compress for this time of

- [02:36:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9365) and i need this extension so

- [02:36:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9366) so i will

- [02:36:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9368) i will update this

- [02:36:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9377) from blindside project

- [02:36:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9401) okay we just deleted something important yes

- [02:36:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9417) random num random number generators

- [02:37:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9437) it is not a problem for now we are missing

- [02:37:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9438) missing which method

- [02:37:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9441) which method get unity less

- [02:37:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9464) yes it does open

- [02:37:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9472) okay and

- [02:37:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9474) and okay

- [02:37:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9476) okay okay now we did set

- [02:37:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9479) okay now we did set uh values of the users

- [02:38:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9483) uh values of the users and [Music]

- [02:38:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9485) [Music] okay

- [02:38:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9486) okay now let's say

- [02:38:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9488) now let's say what level monster will

- [02:38:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9490) what level monster will user encounter and the result of battle

- [02:38:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9495) user encounter and the result of battle to display that to the user we need to

- [02:38:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9498) to display that to the user we need to have

- [02:38:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9499) have another class

- [02:38:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9501) another class another model

- [02:38:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9503) another model and a model here

- [02:38:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9506) and a model here basically a class

- [02:38:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9512) user battle okay

- [02:38:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9513) okay in this user battle class we are going

- [02:38:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9516) in this user battle class we are going to have public

- [02:38:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9527) let's not set the most name public int

- [02:38:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9529) public int monster level appeared monster level

- [02:38:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9533) monster level appeared monster level let's say public ins you see it's

- [02:38:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9535) let's say public ins you see it's automatically telling the skill level

- [02:38:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9537) automatically telling the skill level but

- [02:38:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9538) but i will say that

- [02:39:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9554) okay so we can also have turns turns messages so

- [02:39:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9558) we can also have turns turns messages so we can display the and output result to

- [02:39:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9561) we can display the and output result to the user

- [02:39:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9563) the user okay most of hp

- [02:39:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9566) okay most of hp most attacked most of defense

- [02:39:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9593) okay by the way our default attack and defense values are solo

- [02:39:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9597) defense values are solo so

- [02:39:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9598) so let's just change them to by default

- [02:40:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9602) let's just change them to by default 10.

- [02:40:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9613) let's make the hp 50 by default

- [02:40:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9615) by default these are all

- [02:40:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9618) these are all trivial things that are not important or

- [02:40:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9620) trivial things that are not important or the concept of of this video

- [02:40:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9623) the concept of of this video so what else will we we will need

- [02:40:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9626) so what else will we we will need we are going to also need to keep

- [02:40:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9628) we are going to also need to keep information as

- [02:40:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9639) let's do turn

- [02:40:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9641) turn results

- [02:40:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9659) okay so when user attacks we are going to

- [02:41:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9663) when user attacks we are going to generate an instance of

- [02:41:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9665) generate an instance of user battle

- [02:41:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9671) and we also need to decide the

- [02:41:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9673) the monsters level let's say

- [02:41:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9676) monsters level let's say london

- [02:41:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9683) random random dot next

- [02:41:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9685) next we can make this basis on the user level

- [02:41:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9687) we can make this basis on the user level so it will

- [02:41:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9688) so it will be minimum and maximum so the

- [02:41:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9692) be minimum and maximum so the minimum is inclusive and the maximum is

- [02:41:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9697) minimum is inclusive and the maximum is exclusive so the exclusive will be

- [02:41:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9700) exclusive so the exclusive will be okay

- [02:41:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9702) okay you

- [02:41:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9703) you instance

- [02:41:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9712) channel okay

- [02:41:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9714) okay plus

- [02:41:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9716) plus for example

- [02:41:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9718) for example three

- [02:41:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9719) three okay

- [02:42:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9721) okay and this will be the uh

- [02:42:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9724) and this will be the uh user battle.

- [02:42:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9733) level and based on the monster level we can

- [02:42:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9735) and based on the monster level we can set

- [02:42:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9737) set uh most of ghanians private smallhit

- [02:42:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9742) uh most of ghanians private smallhit sets mostly starts

- [02:42:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9745) sets mostly starts it will take user better

- [02:42:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9748) it will take user better not using better

- [02:42:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9754) since the reference type it will return a reference

- [02:42:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9757) a reference it will update the values i mean

- [02:42:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9759) it will update the values i mean okay

- [02:42:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9760) okay use your bedroom thoughts

- [02:42:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9771) weapon dots monsters level

- [02:43:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9782) these are all just okay let's say hp multiplier y3

- [02:43:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9787) okay let's say hp multiplier y3 arbitrary numbers currently

- [02:43:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9790) arbitrary numbers currently i'm just doing some arbitrary things

- [02:43:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9794) i'm just doing some arbitrary things level one

- [02:43:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9795) level one and what else we have okay nothing

- [02:43:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9799) and what else we have okay nothing stop

- [02:43:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9801) stop we need to have a while true while true

- [02:43:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9815) equal to zero let's say one

- [02:43:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9822) let's inflict damage first let's say which one's level bigger

- [02:43:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9826) first let's say which one's level bigger infinite damage

- [02:43:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9829) infinite damage faster

- [02:43:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9830) faster okay

- [02:43:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9832) okay so i need to call this right away

- [02:44:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9840) if okay use a better

- [02:44:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9842) use a better dots

- [02:44:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9844) dots bigger than

- [02:44:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9846) bigger than in your instance

- [02:44:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9853) okay uh but i forgot

- [02:44:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9855) but i forgot level

- [02:44:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9858) level okay let's say

- [02:44:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9861) okay let's say let's also put some

- [02:44:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9863) let's also put some things

- [02:45:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9902) monster attack minus

- [02:45:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9909) defense if

- [02:45:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9926) you put one and let's add the

- [02:45:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9930) one and let's add the message to the user model

- [02:45:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9941) okay add

- [02:45:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=9947) change uh turn

- [02:47:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10025) and then if characters info is character hp is zero

- [02:47:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10037) and it has only rush character invite and

- [02:47:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10043) the characters has been repeated

- [02:47:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10049) oh by the way we need to add another thing

- [02:47:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10070) okay here let's make them also get on set

- [02:48:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10080) okay and here's

- [02:48:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10102) else by the way we also need to inflict damage

- [02:48:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10104) damage as user damage equal to

- [02:48:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10114) okay then this will be equal to

- [02:48:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10117) this will be equal to actually

- [02:48:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10119) actually quite a different

- [02:48:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10120) quite a different way

- [02:48:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10122) way user instance characteristic

- [02:48:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10125) user instance characteristic attack

- [02:48:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10137) user background that's monster events

- [02:49:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10141) monster events user pattern dots

- [02:49:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10155) is putting same name is not very good

- [02:49:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10158) name is not very good equal to

- [02:49:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10160) equal to usual damage by the i also need to set

- [02:49:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10162) usual damage by the i also need to set user damage as

- [02:49:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10164) user damage as like this

- [02:49:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10171) okay and we need to

- [02:49:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10173) and we need to have message as

- [02:49:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10186) how much damage did we inflict like this

- [02:49:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10188) like this enemy and then we almost

- [02:49:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10195) alt reduce it to

- [02:50:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10202) okay if in the state is it like this

- [02:50:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10215) equal to zero by the way we need to also set something here's

- [02:50:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10218) set something here's oh we don't need to set up

- [02:50:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10221) oh we don't need to set up we your character has defeated

- [02:50:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10224) we your character has defeated was

- [02:50:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10225) was deleted

- [02:50:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10233) and then we monsters in time and again it's let's say

- [02:51:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10276) okay uh

- [02:51:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10277) uh so

- [02:51:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10278) so let's see your character has gained it

- [02:51:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10281) let's see your character has gained it how much experience let's say most level

- [02:51:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10285) how much experience let's say most level multiplied with seven

- [02:51:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10299) okay experience

- [02:51:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10312) all right everything looks good but we don't want to have

- [02:51:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10316) don't want to have we don't want to have a

- [02:51:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10318) we don't want to have a duplicate code

- [02:52:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10324) therefore we need to minimize the duplicate code

- [02:52:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10325) duplicate code with okay let's say

- [02:52:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10335) users attack first equal to true

- [02:52:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10343) and if this is the case make it false

- [02:52:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10346) make it false let's just remove this and modify that

- [02:52:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10348) let's just remove this and modify that code

- [02:52:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10358) and calculate user damage

- [02:52:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10363) okay and

- [02:53:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10383) then it will be as like this

- [02:53:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10398) okay and i have to check

- [02:53:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10402) uh whether user means or not

- [02:53:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10420) how do i check it i need to check it one time

- [02:53:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10437) i can do that which of course once again i would wait

- [02:53:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10439) i would wait will

- [02:54:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10440) will check by the end it's

- [02:54:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10448) this is going to get instance of user battle

- [02:54:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10455) okay this one

- [02:54:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10464) as return false you see we also need to keep turn count

- [02:54:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10467) you see we also need to keep turn count in user better it will make our job

- [02:54:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10470) in user better it will make our job easier

- [02:54:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10497) hmm i'm trying to avoid duplicating codes

- [02:54:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10499) i'm trying to avoid duplicating codes with which you should always try to do

- [02:55:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10502) with which you should always try to do also

- [02:55:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10503) also you should never have duplicate code

- [02:55:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10506) you should never have duplicate code private voice both by the way this can

- [02:55:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10509) private voice both by the way this can be as it is looking cool

- [02:55:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10511) be as it is looking cool true

- [02:55:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10513) true okay

- [02:55:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10514) okay of course cannot be avoided at the same

- [02:55:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10517) of course cannot be avoided at the same time

- [02:55:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10526) and we will do a check battle here

- [02:55:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10539) if user attack first then it can do that

- [02:55:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10550) actually let's also add something into user model

- [02:56:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10588) since this is a reference type it will update those values

- [02:56:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10590) update those values whatever we update here will be

- [02:56:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10593) whatever we update here will be will affect the

- [02:56:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10595) will affect the object since it's a reference type

- [02:56:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10599) object since it's a reference type okay and if

- [02:56:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10618) okay then the enemy will attack which will be like this

- [02:57:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10628) by the way we also need to add diamonds left to zero

- [02:57:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10677) oh we also need to provide user instances

- [02:58:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10691) okay and it's coming from this

- [02:58:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10712) all right and

- [02:58:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10732) we are making things complicated but anyway this is fine

- [02:59:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10758) minimum wage in first case

- [02:59:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10759) in first case users

- [02:59:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10761) users will inflict

- [02:59:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10764) will inflict damage

- [02:59:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10765) damage the user will get damage in second case

- [02:59:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10769) the user will get damage in second case user will get damage

- [02:59:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10773) user will get damage then

- [03:00:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10804) so it will be still some duplicate code but

- [03:00:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10813) and let's add this and

- [03:00:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10814) and if

- [03:00:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10817) if there's a battle that's

- [03:00:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10823) written in and it by the way we also need to set

- [03:00:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10825) need to set using one

- [03:00:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10832) let's throw here we need to have bridge

- [03:01:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10870) okay in the second phase it will be like this

- [03:01:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10891) okay we still have some duplicate code it could be improved but i won't spend

- [03:01:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10893) it could be improved but i won't spend time anymore

- [03:01:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10899) all right everything is looking good finally we need to have update in the

- [03:01:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10903) finally we need to have update in the database as

- [03:01:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10908) db connection okay

- [03:01:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10916) okay we update that as query updates

- [03:02:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10935) for example hp equal to

- [03:02:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10937) hp equal to hq minus 1

- [03:02:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10939) hq minus 1 or whatever

- [03:02:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10941) or whatever like type like this

- [03:02:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10943) like type like this character level equal to this for

- [03:02:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10946) character level equal to this for example rush

- [03:02:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10948) example rush correct

- [03:02:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10950) correct okay

- [03:02:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10952) okay and

- [03:02:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10958) we also need to set level with based on experience

- [03:02:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10979) okay character experience equal to user barrier

- [03:03:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10981) barrier since these are all at the server side

- [03:03:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10984) since these are all at the server side the user can never cheat modify values

- [03:03:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10988) the user can never cheat modify values whatever because they have no access to

- [03:03:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10990) whatever because they have no access to any code that will run on the server

- [03:03:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10992) any code that will run on the server okay

- [03:03:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=10999) okay that experience let's set the level as

- [03:03:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11007) characters level equal to

- [03:03:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11010) equal to character experience

- [03:03:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11017) over time yes in this case

- [03:03:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11018) in this case uh

- [03:03:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11025) yeah let's make this as the new level

- [03:03:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11037) if is bigger than character level the character level in new level

- [03:04:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11040) the character level in new level and characters

- [03:04:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11043) and characters hpa codes so

- [03:04:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11051) by then we also need to set maximum hp oh let's let's just not remove the

- [03:04:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11054) oh let's let's just not remove the character hp so it will be full in every

- [03:04:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11057) character hp so it will be full in every level

- [03:04:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11058) level so

- [03:04:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11059) so let's

- [03:04:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11060) let's set the new values as

- [03:04:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11064) set the new values as so for power level we give 10 other case

- [03:04:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11066) so for power level we give 10 other case with defense

- [03:04:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11069) with defense and yeah let's make it like this

- [03:04:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11087) attack hp and other things in the database

- [03:04:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11094) or we need to change the default values yes

- [03:04:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11099) if we use this formula oh this is the monster thing though yeah

- [03:05:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11102) oh this is the monster thing though yeah yeah so we will make it different for

- [03:05:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11116) attack will be turned turn 1 and 50

- [03:05:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11118) and 50 so it will be

- [03:05:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11133) turn the password away

- [03:05:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11135) the password away turn okay

- [03:05:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11136) turn okay and the character experience

- [03:05:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11139) and the character experience okay

- [03:05:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11141) okay yes

- [03:05:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11143) yes so the character experience will be

- [03:05:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11147) so the character experience will be like this

- [03:05:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11148) like this character level will be

- [03:05:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11151) character level will be like this

- [03:05:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11157) now we have attack and defense

- [03:05:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11159) attack and defense attack will be

- [03:06:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11162) attack will be this and

- [03:06:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11172) okay character experience attack fans

- [03:06:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11174) fans and hps

- [03:06:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11182) so let's set the values attack is

- [03:06:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11185) attack is is

- [03:06:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11186) is the fast is

- [03:06:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11189) the fast is this and the hp is

- [03:06:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11192) this and the hp is is okay character id will be

- [03:06:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11206) all right okay

- [03:06:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11219) if character gains

- [03:07:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11220) gains a

- [03:07:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11222) a level

- [03:07:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11265) and let's change the random numbers level algorithm uh with

- [03:07:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11268) level algorithm uh with like this yes

- [03:07:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11272) like this yes okay uh

- [03:07:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11275) okay uh research values everything then we need

- [03:07:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11278) research values everything then we need to return

- [03:08:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11284) a serialization of the

- [03:08:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11286) of the user button

- [03:08:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11298) we can also have another table to lock uh user battles uh like

- [03:08:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11302) to lock uh user battles uh like let's say

- [03:08:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11304) let's say battles

- [03:08:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11310) actually it's gonna be based on

- [03:08:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11330) then a monster level

- [03:09:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11340) okay users gain it experience

- [03:09:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11343) it experience for example you can keep any value you

- [03:09:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11345) for example you can keep any value you want

- [03:09:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11354) and use

- [03:09:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11355) use yeah you can understand it from that

- [03:09:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11358) yeah you can understand it from that identity specification

- [03:09:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11365) tool let's say it has users by the logs

- [03:09:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11379) the inserts into the user level let's refresh the intellisense

- [03:09:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11387) uh uses better blocks okay we need to insert you dry the

- [03:09:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11390) okay we need to insert you dry the battery time better time will have

- [03:09:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11392) battery time better time will have default value

- [03:09:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11394) default value which is

- [03:10:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11407) and that's yeah that's export uh monster level

- [03:10:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11410) uh monster level using the experience

- [03:10:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11412) using the experience uh okay

- [03:10:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11415) uh okay one years will be like that as well

- [03:10:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11441) right so the first one here will be

- [03:10:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11444) so the first one here will be user instance that

- [03:10:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11446) user instance that user id

- [03:10:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11448) user id seconds will be

- [03:10:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11452) okay user battle

- [03:10:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11459) using battle dots

- [03:11:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11461) dots okay monster level

- [03:11:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11471) and third one let's also we can also have another

- [03:11:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11473) have another thing uh term count

- [03:11:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11487) you see the design is totally up to you these are not important but i'm just

- [03:11:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11489) these are not important but i'm just adding it to see

- [03:11:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11497) user better but gain it experience and

- [03:11:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11501) gain it experience and finally

- [03:11:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11503) finally use the weather but

- [03:11:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11511) turn counts okay one final thing is we need to

- [03:11:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11514) okay one final thing is we need to increase turn count after each

- [03:11:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11516) increase turn count after each turn

- [03:12:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11526) here's all right everything is looking good this will be hans monster

- [03:12:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11530) good this will be hans monster and when user clicks hands monster we

- [03:12:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11533) and when user clicks hands monster we need to have

- [03:12:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11535) need to have xbox here's

- [03:12:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11538) xbox here's it for me

- [03:12:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11547) the medal results i met this here okay

- [03:12:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11550) i met this here okay this name this as

- [03:12:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11557) results okay

- [03:12:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11558) okay and then use a click hands monsters

- [03:12:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11579) refresh which we know here's me show

- [03:13:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11591) let's say a task okay

- [03:13:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11592) okay execute

- [03:13:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11598) hunting so the execute hunting will go hunt

- [03:13:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11600) so the execute hunting will go hunt monsters

- [03:13:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11602) monsters here

- [03:13:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11603) here with user instance

- [03:13:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11606) with user instance and meanwhile executing hbt and

- [03:13:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11611) and meanwhile executing hbt and is enabled will be equal to false

- [03:13:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11614) is enabled will be equal to false then we will call average

- [03:13:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11632) okay [Music]

- [03:14:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11647) then we will deserialize it

- [03:14:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11655) yes by the way to be able to designate it

- [03:14:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11664) i need to add that class let's just first publish it

- [03:14:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11667) let's just first publish it which is user battle

- [03:14:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11673) okay let's edit

- [03:14:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11687) spotting results

- [03:14:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11693) then an estimated result items players

- [03:14:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11696) players for each

- [03:15:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11717) item source will be equal to better results

- [03:15:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11720) better results yes

- [03:15:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11721) yes i think this should work

- [03:15:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11735) it won't be known that we arranged and yes

- [03:15:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11737) yes okay

- [03:15:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11738) okay and whatever do we have

- [03:15:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11752) connections generic okay

- [03:15:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11755) okay let's run it

- [03:15:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11757) let's run it let's run this too

- [03:16:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11763) by the way let's add this to server sides which are better

- [03:16:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11766) sides which are better we don't get this error here because

- [03:16:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11769) we don't get this error here because they are getting added by default

- [03:16:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11772) they are getting added by default but let's just make it same

- [03:16:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11775) but let's just make it same in either case

- [03:16:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11781) okay test let's register again press two that's two

- [03:16:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11784) press two that's two registers test two that's two

- [03:16:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11788) registers test two that's two okay we have zero experience character

- [03:16:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11790) okay we have zero experience character hd attack and whatever and let's hunt

- [03:16:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11811) turned on zero damage

- [03:16:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11813) damage okay everything is looking good yeah

- [03:16:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11816) okay everything is looking good yeah this one

- [03:16:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11817) this one so i know the error reason let me fix it

- [03:17:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11820) so i know the error reason let me fix it quickly

- [03:17:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11826) when we initiate list we need to

- [03:17:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11828) initiate list we need to initiate it like this let's restart

- [03:17:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11832) initiate it like this let's restart let's also make the same

- [03:17:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11836) let's also make the same change here

- [03:17:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11840) okay [Music]

- [03:17:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11843) [Music] login test2

- [03:17:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11850) you see it is disabled okay

- [03:17:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11852) okay we had an address somewhere which is

- [03:17:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11856) we had an address somewhere which is a requesting stack trace

- [03:17:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11867) okay and

- [03:17:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11873) where do we have the sql error one of our command is incorrect

- [03:17:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11878) let's create sql error table as well to see

- [03:18:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11887) okay sql errors [Music]

- [03:18:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11888) [Music] i will just add it to our new

- [03:18:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11892) i will just add it to our new simple game yes now we can see the

- [03:18:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11894) simple game yes now we can see the sequel errors happening

- [03:18:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11897) sequel errors happening and fix it

- [03:18:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11906) okay oh wow

- [03:18:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11908) oh wow the result has returned

- [03:18:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11910) the result has returned but we have an error somewhere let's see

- [03:18:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11913) but we have an error somewhere let's see [Music]

- [03:18:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11915) [Music] let's see are the sql errors

- [03:18:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11923) okay we have an error as cannot decide where that's going table

- [03:18:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11925) where that's going table battle locks user id monster level user

- [03:18:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11928) battle locks user id monster level user gain return count

- [03:19:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11942) is this identity

- [03:19:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11945) identity ah this has to be identity

- [03:19:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11948) ah this has to be identity okay now it will work

- [03:19:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11960) enemy hb is reduced minus

- [03:19:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11961) minus 448

- [03:19:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11972) okay let's verify our algorithm which is happening here

- [03:19:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11980) yeah of course if it will be lower or equal to zero

- [03:19:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11984) lower or equal to zero and same apply here

- [03:19:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11986) and same apply here okay

- [03:19:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11988) okay now let's fight again

- [03:19:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=11999) okay your character has defeated enemy monster in zero time yeah

- [03:20:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12023) okay we have some mistakes here let's see

- [03:20:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12038) we do a battle check here ah i see i see the error reason

- [03:20:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12040) the error reason uh if better ended

- [03:21:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12061) we should display more information user attacker first and damage enemy monsters

- [03:21:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12064) attacker first and damage enemy monsters that's at their

- [03:21:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12067) that's at their level

- [03:22:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12156) okay i think we don't need to add this to every information so let's change it

- [03:22:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12176) okay so before starting the battle

- [03:23:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12180) so before starting the battle we need to add a new message

- [03:23:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12188) bottom is starting

- [03:23:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12190) starting with level

- [03:23:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12222) okay and

- [03:23:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12224) and we have some

- [03:23:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12226) we have some turnarounds which i don't think seems

- [03:24:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12247) no it should work perfectly fine oh by the way i will change one more

- [03:24:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12249) oh by the way i will change one more thing

- [03:24:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12256) um yes

- [03:24:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12258) yes i will change the random

- [03:24:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12260) i will change the random maximum level with five times yes

- [03:24:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12263) maximum level with five times yes so we may perhaps lose sometimes

- [03:24:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12276) okay we are still we have no experience that is

- [03:24:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12278) that is wrong actually

- [03:24:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12280) wrong actually let's check out the sql errors

- [03:24:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12283) let's check out the sql errors do we have any simple errors

- [03:24:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12286) do we have any simple errors no

- [03:24:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12293) and you also need to call refresh starts after each battle which

- [03:24:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12296) refresh starts after each battle which will happen here

- [03:24:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12299) will happen here okay uh

- [03:25:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12301) okay uh extensions

- [03:25:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12330) okay and i think

- [03:25:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12332) i think when we set the source it should be

- [03:25:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12336) when we set the source it should be source widgets

- [03:25:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12338) source widgets automatically updated i mean

- [03:25:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12344) yeah they are being automatic live tablets

- [03:25:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12346) tablets okay but we are not getting any

- [03:25:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12348) okay but we are not getting any experience anything else so

- [03:26:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12361) i think our error is here okay so i did put a breakpoint here to

- [03:26:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12364) okay so i did put a breakpoint here to verify uh

- [03:26:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12367) verify uh or find out the error cause

- [03:26:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12371) or find out the error cause when we hunt here let's uh

- [03:26:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12373) when we hunt here let's uh f11

- [03:26:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12375) f11 and this is the query

- [03:26:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12385) okay the character id is zero so we are not setting character id

- [03:26:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12388) so we are not setting character id properly obviously

- [03:26:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12394) where are we supposed to set the character id

- [03:26:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12401) is in user instance okay and the user instance is coming from

- [03:26:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12404) and the user instance is coming from here so

- [03:26:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12407) here so we need to set character id

- [03:26:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12413) and okay [Music]

- [03:27:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12428) okay now i will play with multiple users

- [03:27:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12432) play with multiple users okay at the same time

- [03:27:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12437) okay start without debugging start without

- [03:27:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12439) start without debugging start without debugging

- [03:27:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12441) debugging okay let's uh login with test two

- [03:27:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12448) okay let's just do some play you see values are changing

- [03:27:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12457) okay and here are the feedings let's register

- [03:27:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12460) here are the feedings let's register first s3

- [03:27:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12463) first s3 let's login

- [03:27:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12466) let's login okay let's continue playing

- [03:27:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12474) okay you see mode is working i can even open more instances

- [03:27:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12478) i can even open more instances all right everything is working great

- [03:28:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12480) all right everything is working great let's check out the battle locks

- [03:28:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12486) okay and

- [03:28:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12488) and yes we can see the battle log storm

- [03:28:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12490) yes we can see the battle log storm comes gained experiences oh

- [03:28:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12493) comes gained experiences oh this time the user id is not added so we

- [03:28:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12497) this time the user id is not added so we also need to fix that

- [03:28:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12499) also need to fix that in here insert into user better logs

- [03:28:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12503) in here insert into user better logs okay in the user instance we need to set

- [03:28:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12506) okay in the user instance we need to set user id

- [03:28:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12524) that's no we can't trust it

- [03:28:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12526) no we can't trust it so i need to select

- [03:28:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12529) so i need to select user id as well

- [03:28:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12533) user id as well oh you already have it yes yes yes

- [03:28:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12537) oh you already have it yes yes yes i changed

- [03:28:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12539) i changed it

- [03:29:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12540) it here

- [03:29:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12541) here now it should work

- [03:29:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12543) now it should work let's just

- [03:29:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12544) let's just try it again

- [03:29:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12549) okay our authentication should still work

- [03:29:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12554) okay and

- [03:29:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12560) okay now i will log in again and we will see the authentication is broken

- [03:29:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12563) see the authentication is broken in the previous one

- [03:29:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12565) in the previous one let me show test

- [03:29:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12567) let me show test two test two

- [03:29:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12568) two test two okay test two user id five

- [03:29:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12572) okay test two user id five which is open in here when i click this

- [03:29:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12574) which is open in here when i click this it should

- [03:29:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12575) it should i rush yes it is crash it because the

- [03:29:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12579) i rush yes it is crash it because the authentication code

- [03:29:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12581) authentication code has been renewed

- [03:29:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12583) has been renewed but this this one should

- [03:29:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12585) but this this one should work

- [03:29:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12586) work okay it is working but this is not

- [03:29:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12589) okay it is working but this is not getting updated this time

- [03:29:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12592) getting updated this time and why

- [03:29:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12593) and why why it is not getting updated

- [03:30:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12600) in this one yes

- [03:30:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12602) yes so we have an error somewhere

- [03:30:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12608) sequel errors okay here's

- [03:30:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12615) we already have arithmetic data full of errors in

- [03:30:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12617) errors in user character we need to change

- [03:30:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12625) hp and other things to integers let's

- [03:30:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12626) let's let's just change them

- [03:30:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12628) let's just change them now okay they are getting updated okay

- [03:30:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12632) now okay they are getting updated okay working very good

- [03:30:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12634) working very good wow our hp level everything is

- [03:30:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12636) wow our hp level everything is increasing so fast

- [03:30:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12639) increasing so fast because our algorithm is working is

- [03:30:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12641) because our algorithm is working is there okay

- [03:30:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12644) there okay all right uh the game is working as we

- [03:30:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12648) all right uh the game is working as we have designed it now the one final thing

- [03:30:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12650) have designed it now the one final thing one final step has left

- [03:30:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12653) one final step has left uh which is that i will install windows

- [03:30:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12657) uh which is that i will install windows server and

- [03:30:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12658) server and we will publish our

- [03:31:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12661) we will publish our server site there and we will connect to

- [03:31:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12663) server site there and we will connect to that server okay

- [03:31:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12666) that server okay to install windows server i will use

- [03:31:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12668) to install windows server i will use vmware workstation let's just create a

- [03:31:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12671) vmware workstation let's just create a new virtual machine

- [03:31:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12673) new virtual machine typical

- [03:31:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12675) typical okay let's

- [03:31:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12676) okay let's select our

- [03:31:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12683) one mode okay let's select our windows server eso

- [03:31:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12687) okay let's select our windows server eso which is

- [03:31:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12689) which is this one

- [03:31:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12693) okay and windows servers

- [03:31:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12695) and windows servers yeah it is not available here

- [03:31:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12700) yeah it is not available here because it is windows server 2022

- [03:31:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12703) because it is windows server 2022 [Music]

- [03:31:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12704) [Music] let's name it as 2022

- [03:31:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12706) let's name it as 2022 [Music]

- [03:31:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12707) [Music] okay

- [03:31:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12709) okay okay whatever it is i will

- [03:31:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12712) okay whatever it is i will just go with the default settings

- [03:31:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12714) just go with the default settings because it's not very important

- [03:31:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12717) because it's not very important now it will get

- [03:31:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12719) now it will get installed

- [03:32:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12734) okay it didn't work i think i need to perhaps download

- [03:32:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12740) the other one i will delete this

- [03:32:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12767) okay i will use i will download windows servers 2000

- [03:32:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12770) servers 2000 so

- [03:33:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12785) oh it requires registration

- [03:33:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12808) i think we can find it from uh

- [03:33:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12819) okay the link looks correct uh let's copy link address

- [03:33:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12823) uh let's copy link address here

- [03:33:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12824) here it's an official microsoft home

- [03:33:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12828) it's an official microsoft home so it should work yes it is getting

- [03:33:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12830) so it should work yes it is getting downloaded when it all not finishes i

- [03:33:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12832) downloaded when it all not finishes i will uh continue

- [03:33:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12834) will uh continue okay the download has been completed now

- [03:33:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12837) okay the download has been completed now i am going to

- [03:33:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12839) i am going to install it from desktop

- [03:34:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12843) install it from desktop okay it is automatically detected let's

- [03:34:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12846) okay it is automatically detected let's make it standard

- [03:34:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12849) make it standard okay without a key

- [03:34:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12852) okay without a key okay let's just start it

- [03:34:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12868) and then i will show you how we are going to publish it in

- [03:34:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12871) going to publish it in windows servers

- [03:34:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12873) windows servers and how can we access it

- [03:34:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12875) and how can we access it i am hoping that we will be able to

- [03:34:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12877) i am hoping that we will be able to access it with the ip that it is going

- [03:34:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12879) access it with the ip that it is going to get

- [03:34:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12881) to get usually

- [03:34:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12882) usually i always tested such things with on my

- [03:34:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12886) i always tested such things with on my remote servers

- [03:34:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12889) remote servers so this will be the first time

- [03:34:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12895) okay yes we need desktop experience as well

- [03:35:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12928) is that real it should work maybe i need to go mod from another source

- [03:35:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12931) to go mod from another source let's try one more time

- [03:35:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12945) okay data center evaluation let's try this perhaps doesn't work

- [03:35:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12952) um okay this is not working i will know not

- [03:35:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12955) okay this is not working i will know not from another verse the trial

- [03:35:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12958) from another verse the trial let's just delete this as well

- [03:36:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12970) okay i have downloaded another one from microsoft official website i'm

- [03:36:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12972) from microsoft official website i'm hoping that this one will

- [03:36:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12974) hoping that this one will work

- [03:36:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=12990) it doesn't work then we need to try another one

- [03:37:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13041) okay it looks like the cause was uh easy installation

- [03:37:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13043) easy installation after i have changed it now i see the

- [03:37:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13046) after i have changed it now i see the screen

- [03:37:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13048) screen hopefully

- [03:37:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13058) okay i hope this time it will work though i am not sure

- [03:37:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13061) though i am not sure i see maybe

- [03:37:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13062) i see maybe maybe it will crash

- [03:37:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13065) maybe it will crash at this time okay custom next

- [03:37:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13070) at this time okay custom next okay okay it is working

- [03:37:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13072) okay okay it is working so the easy installation was because

- [03:37:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13075) so the easy installation was because i am installing

- [03:37:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13077) i am installing the default result that i have

- [03:37:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13079) the default result that i have downloaded from the windows

- [03:38:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13082) downloaded from the windows because of

- [03:38:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13084) because of page

- [03:38:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13085) page once the installation is done i will

- [03:38:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13087) once the installation is done i will continue

- [03:38:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13089) continue okay

- [03:38:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13090) okay let's enter the password as

- [03:38:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13096) test one two three four

- [03:38:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13098) one two three four first one two three four okay

- [03:38:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13105) let's continue or

- [03:38:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13106) or test on totally both

- [03:38:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13121) all right so what about

- [03:38:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13123) what about that

- [03:39:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13181) okay now we can use our graphic drivers let's just restart

- [03:40:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13206) okay i will download ms square servers and

- [03:40:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13208) and then i will continue video

- [03:40:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13212) then i will continue video okay

- [03:40:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13232) okay you see there is not even explorers dash

- [03:40:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13238) okay i am installing sql servers developer

- [03:40:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13241) i am installing sql servers developer edition with default install

- [03:41:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13263) all right okay the installation has been completed

- [03:41:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13265) okay the installation has been completed and you see the instance name is mssql

- [03:41:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13268) and you see the instance name is mssql server which is our most important thing

- [03:41:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13271) server which is our most important thing to connect

- [03:41:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13273) to connect okay

- [03:41:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13274) okay and

- [03:41:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13279) okay yes now i will install

- [03:41:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13282) yes now i will install sql management studio

- [03:41:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13288) okay let's just install it

- [03:41:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13297) okay meanwhile uh let's extract our database

- [03:41:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13299) database as a script

- [03:41:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13304) okay [Music]

- [03:41:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13305) [Music] entire table

- [03:41:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13307) entire table save as

- [03:41:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13310) save as okay open in new clear window which

- [03:41:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13313) okay open in new clear window which should work fine

- [03:42:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13326) all right so let's just delete this copy everything

- [03:42:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13337) okay uh circle management studio is also

- [03:42:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13341) circle management studio is also installed

- [03:42:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13363) okay okay let's

- [03:42:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13365) okay let's generate our

- [03:42:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13379) okay so we have a mistake somewhere

- [03:43:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13383) we have a mistake somewhere okay i will do

- [03:43:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13385) okay i will do a more simpler thing i will just

- [03:43:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13388) a more simpler thing i will just backup it

- [03:43:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13395) okay okay actually we don't need a backup we

- [03:43:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13397) okay actually we don't need a backup we just need to compose the database

- [03:43:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13399) just need to compose the database ourselves

- [03:43:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13401) ourselves okay let's make it

- [03:43:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13408) then [Music]

- [03:43:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13414) after it is set after it is composed

- [03:43:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13416) after it is composed we will just

- [03:43:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13418) we will just yes

- [03:43:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13429) yes it is now done with all the tables and everything

- [03:43:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13431) and everything okay so

- [03:43:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13433) okay so are we done yet no uh

- [03:43:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13435) are we done yet no uh we need to install

- [03:43:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13438) we need to install asv.net

- [03:44:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13446) iis actually internet okay

- [03:44:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13448) okay service

- [03:44:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13449) service provider

- [03:44:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13451) provider let me show you okay

- [03:44:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13453) let me show you okay [Music]

- [03:44:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13455) [Music] okay from here

- [03:44:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13461) we have to install web ios yes

- [03:44:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13472) no [Music]

- [03:44:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13478) i think we don't need any of this only web servers

- [03:44:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13484) from here's sweet.net

- [03:44:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13487) sweet.net okay let's just install all of them

- [03:44:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13498) okay and we need anything else

- [03:45:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13513) okay as i said i have never done this on the local

- [03:45:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13516) the local uh

- [03:45:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13523) i mean on the vmware i always access i always have accessed my

- [03:45:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13526) i always have accessed my windows server from

- [03:45:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13530) windows server from a domain

- [03:45:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13532) a domain [Music]

- [03:46:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13563) okay probably we don't need all of them but i'm just adding them

- [03:46:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13570) okay and install okay once these all of these are installed i will continue

- [03:46:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13573) these are installed i will continue okay it looks like installation has been

- [03:46:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13575) okay it looks like installation has been completed

- [03:46:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13577) completed so let's

- [03:46:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13579) so let's open

- [03:46:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13580) open uh iis

- [03:46:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13583) uh iis okay let's find it

- [03:46:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13596) okay internet information services

- [03:46:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13597) services and let's add our website as

- [03:46:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13602) and let's add our website as website name will be

- [03:46:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13604) website name will be game

- [03:46:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13615) okay and physical fat will be inet pop wwe brood

- [03:47:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13621) all assign it first name okay we don't have any

- [03:47:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13622) have any hostname so that's kind of a problem but

- [03:47:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13625) hostname so that's kind of a problem but let's say game

- [03:47:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13629) let's say game okay so

- [03:47:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13631) okay so when we open it on

- [03:47:14](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13634) when we open it on http

- [03:47:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13636) http okay of course this won't work

- [03:47:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13643) so how can we explore it locally

- [03:47:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13663) okay this is running on localhost so we need to

- [03:47:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13669) [Music] advanced settings

- [03:48:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13681) actually we can use localhost why we are just changing it here

- [03:48:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13689) okay netflop www

- [03:48:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13705) well i click explore yeah inside www okay

- [03:48:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13707) okay and so

- [03:48:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13717) okay yes it should directly work

- [03:48:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13727) okay i will now copy all of them

- [03:48:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13735) and paste into rules

- [03:48:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13736) rules which i need to

- [03:48:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13739) which i need to make them zip file

- [03:49:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13761) okay and now our local swaps or not

- [03:49:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13774) by the way we need to get them inside here

- [03:49:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13778) and oh

- [03:50:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13804) okay we test this one

- [03:50:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13835) so there is plenty of dependents

- [03:50:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13837) plenty of dependents portable

- [03:50:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13839) portable action

- [03:51:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13872) okay let me search for this okay um i think i have an idea

- [03:51:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13875) i think i have an idea okay

- [03:51:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13877) okay let's just remove this

- [03:51:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13880) let's just remove this let's add another one

- [03:51:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13882) let's add another one again physical pad will be

- [03:51:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13885) again physical pad will be next pop

- [03:51:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13887) next pop www

- [03:51:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13890) www let's

- [03:51:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13891) let's generate a new phone game

- [03:51:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13895) generate a new phone game okay and i will name it as gametest.com

- [03:51:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13901) okay [Music]

- [03:51:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13903) [Music] okay

- [03:51:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13904) okay so

- [03:51:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13905) so we also need to change host file

- [03:51:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13910) we also need to change host file okay it was inside system.

- [03:52:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13923) yes okay and host file with the host file it's called inside

- [03:52:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13926) with the host file it's called inside etc yeah here

- [03:52:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13928) etc yeah here okay

- [03:52:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13930) okay i will change the ips

- [03:52:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13933) i will change the ips 001

- [03:52:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13936) 001 okaygametest.com

- [03:52:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13942) now when i open this it should open

- [03:52:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13945) it should open okay the website is complete okay

- [03:52:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13947) okay the website is complete okay so

- [03:52:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13948) so uh

- [03:52:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13949) uh one more thing

- [03:52:32](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13952) one more thing we have published that zip file we go to

- [03:52:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13957) we have published that zip file we go to game folders extract all here

- [03:52:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13966) okay and

- [03:52:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13972) i need to extract them like this okay now let's refresh

- [03:53:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13989) okay i swept for unknown what is the errors

- [03:53:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=13996) what is the cause of this error let's see application proof game

- [03:53:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14000) let's see application proof game dot net sierra okay it looks correct

- [03:53:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14004) dot net sierra okay it looks correct there's www run times publish and model

- [03:53:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14011) okay why do we have an errors

- [03:53:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14026) okay let me install chrome here i am installing

- [03:53:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14028) here i am installing the chrome

- [03:53:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14038) okay so our address is international

- [03:54:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14052) let's see why we may be getting this error

- [03:54:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14069) okay [Music]

- [03:54:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14070) [Music] okay so net core 6 runtime yeah probably

- [03:54:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14073) okay so net core 6 runtime yeah probably we need this

- [03:54:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14093) okay gametest.com [Music]

- [03:55:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14101) okay and

- [03:55:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14113) all right let's test it out yes now our

- [03:55:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14116) yes now our uh

- [03:55:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14117) uh game is working

- [03:55:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14119) game is working one final thing is

- [03:55:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14122) one final thing is now we need to be able to connect this

- [03:55:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14129) from our computer so our ip is

- [03:55:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14140) okay um let's test it out

- [03:55:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14153) okay it is working now when i change my client sites

- [03:55:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14158) now when i change my client sites it should work and to do that i'm going

- [03:56:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14161) it should work and to do that i'm going to define

- [03:56:03](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14163) to define a global variable as url

- [03:56:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14182) and i will replace all of the existing local

- [03:56:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14186) i will replace all of the existing local hospitals

- [03:56:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14188) hospitals okay global url

- [03:56:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14197) can you press all see do we have another localhost

- [03:56:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14201) see do we have another localhost let's know this

- [03:56:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14206) remove this okay and this will be from

- [03:56:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14208) and this will be from extension starts

- [03:56:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14211) extension starts go about url and

- [03:56:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14218) okay this will be also that

- [03:57:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14228) okay test2

- [03:57:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14230) test2 okay it won't work because we have no

- [03:57:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14232) okay it won't work because we have no such account so let's just register

- [03:57:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14241) and what happens okay probably we are not able to access

- [03:57:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14243) okay probably we are not able to access it

- [03:57:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14245) it so let's try to access from our browser

- [03:57:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14247) so let's try to access from our browser first

- [03:57:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14262) okay currently we are trying to access vmware

- [03:57:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14267) maybe just let's try as ip not http

- [03:57:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14272) just let's try as ip not http we need to access it as ip

- [03:58:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14282) okay this is working here but

- [03:58:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14286) this is working here but not working here

- [03:58:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14311) eight thousand maybe we need to add the port

- [03:58:33](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14313) port like this

- [03:58:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14315) like this now

- [03:58:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14338) okay okay okay it has arrived it took some time but it is not working

- [03:59:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14340) some time but it is not working very good

- [03:59:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14345) i don't know why it took time but it's not working

- [03:59:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14348) it took time but it's not working so

- [03:59:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14350) so let's copy paste

- [03:59:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14353) let's copy paste and try again

- [03:59:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14367) change widths

- [03:59:35](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14375) we can access from browser but not from our

- [03:59:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14376) our client yet

- [03:59:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14392) okay api test registers let's test tested

- [03:59:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14396) if it's working or not it's just too

- [04:00:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14408) slow let's test it localhost as well

- [04:00:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14417) yeah it is working on localhost what's on

- [04:00:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14419) on my p basic configuration

- [04:00:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14441) maybe if i modify my host file this may work

- [04:00:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14443) work yeah let me do that

- [04:00:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14445) yeah let me do that okay this is my own host file so i'm

- [04:00:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14448) okay this is my own host file so i'm going to change

- [04:00:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14451) going to change okay gametest.com

- [04:01:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14466) okay now it's working but it was too slow let's say game

- [04:01:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14469) slow let's say game cast.com

- [04:01:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14471) cast.com api test registers

- [04:01:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14475) api test registers yes now it's working

- [04:01:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14478) yes now it's working okay so

- [04:01:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14479) okay so um [Music]

- [04:01:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14489) let's modify our url once again as bmt

- [04:01:30](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14490) bmt test.com

- [04:01:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14502) i don't know why it is too slow and not working in the application but

- [04:01:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14505) working in the application but it is working in

- [04:01:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14507) it is working in browsers

- [04:02:12](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14532) it is working on browser as well but just too slow

- [04:02:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14560) this is definitely related to hosting server on

- [04:02:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14567) there maybe some firewall or something is preventing me

- [04:02:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14569) firewall or something is preventing me to access

- [04:02:56](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14576) windows servers slowly but assume that

- [04:02:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14579) assume that this was your

- [04:03:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14580) this was your vps hosting or dedicated hosting it will

- [04:03:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14584) vps hosting or dedicated hosting it will just run

- [04:03:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14585) just run too fast

- [04:03:06](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14586) too fast something definitely causing this to be

- [04:03:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14589) something definitely causing this to be run slow

- [04:03:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14593) however you get the logic

- [04:03:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14595) you get the logic and this is the logic of

- [04:03:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14598) and this is the logic of server-based

- [04:03:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14601) server-based programming it says that an existing

- [04:03:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14604) programming it says that an existing okay an existing connection was forced

- [04:03:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14607) okay an existing connection was forced to play

- [04:03:28](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14608) to play by cl closet

- [04:03:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14614) which i don't know if we can make the client property is better like

- [04:03:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14623) okay let's see if there is a timeout or something

- [04:03:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14625) something yeah let's make the timeout for example

- [04:03:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14628) yeah let's make the timeout for example three thousands

- [04:03:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14637) okay it's get from time spawn so new time spawn

- [04:04:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14640) time spawn let's make it as

- [04:04:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14641) let's make it as zero [Music]

- [04:04:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14644) [Music] and five minutes or four minutes maybe

- [04:04:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14647) and five minutes or four minutes maybe this time it will work

- [04:04:51](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14691) maybe i need to change the [Music]

- [04:04:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14695) [Music] network type

- [04:04:58](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14698) network type currently it is as not

- [04:05:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14701) currently it is as not maybe i need to

- [04:05:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14710) make it bridget i'm not sure we are still waiting

- [04:05:46](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14746) they're still waiting the connection is still waiting

- [04:06:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14767) taking forever let's try bridget maybe topic that time

- [04:06:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14769) try bridget maybe topic that time tomorrow

- [04:06:24](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14784) okay now our ip is 157

- [04:06:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14796) okay and

- [04:06:37](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14797) and [Music]

- [04:06:39](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14799) [Music] game.test.com

- [04:06:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14807) okay now it is super fast now it should work yes let's restart

- [04:07:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14822) okay not working

- [04:07:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14824) not working this is so weird it is working in here

- [04:07:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14829) this is so weird it is working in here oh it is not refreshing now

- [04:07:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14833) oh it is not refreshing now something happened

- [04:07:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14842) okay it is not working here readers oh i have to change host file here again

- [04:08:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14887) you see test register api is getting called

- [04:08:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14891) from the this ip address from my host ip which is

- [04:08:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14895) this ip address from my host ip which is this one

- [04:08:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14901) and it says it is 200 so it says it is return it correctly

- [04:08:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14923) oh it returns 3 0 4 so

- [04:08:45](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14925) so what is the three zero fourth

- [04:08:48](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14928) what is the three zero fourth oh these are test registers and where is

- [04:08:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14930) oh these are test registers and where is the other call

- [04:09:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14942) it appears [Music]

- [04:09:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14951) let's try one more time and see if this is logged in

- [04:09:34](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14974) yeah working very well

- [04:09:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14978) yes it is registered

- [04:09:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14980) it is registered this is able to access it

- [04:09:42](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14982) this is able to access it but from my clients

- [04:09:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=14995) but you don't understand how it works what is the logic of servers

- [04:10:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15010) oh i am trying logging i need to try register first okay

- [04:10:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15016) okay client base address is gametest.com

- [04:10:25](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15025) okay we okay

- [04:10:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15027) we okay and when i say wait

- [04:11:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15076) and we don't see it is called from our

- [04:11:19](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15079) our application

- [04:11:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15080) application only i see this mozilla suffering

- [04:11:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15091) connection never reaches here

- [04:11:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15101) maybe it is blocked by some configuration here

- [04:11:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15112) maybe i need to change connection type here

- [04:12:41](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15161) okay anyway um this is it now i will

- [04:12:44](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15164) now i will upload them to a github repository so

- [04:12:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15167) upload them to a github repository so that you can access it

- [04:12:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15170) that you can access it download the source code

- [04:12:52](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15172) download the source code and do whatever you want

- [04:13:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15180) let's save the script okay

- [04:13:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15181) okay um

- [04:13:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15182) um i'm going to remove the pattern so first

- [04:13:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15185) i'm going to remove the pattern so first you need to generate

- [04:13:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15187) you need to generate um

- [04:13:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15195) a database named a simple game then use this script

- [04:13:22](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15202) here i will also

- [04:13:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15216) command server projects database generate

- [04:13:38](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15218) generate database

- [04:13:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15234) a backup of it back up

- [04:13:55](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15235) back up okay

- [04:14:04](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15244) okay i also put a backup okay i have composite

- [04:14:07](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15247) okay i have composite repository

- [04:14:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15256) i will merge

- [04:14:17](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15257) merge both project into a single

- [04:14:21](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15261) both project into a single folder

- [04:14:29](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15269) okay server side client sites let's make a new folder as

- [04:14:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15293) okay and see the desktop so satellites and application

- [04:14:54](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15294) so satellites and application programming click status

- [04:15:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15308) by the way if there is any bigger file that then it won't work you know there

- [04:15:10](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15310) that then it won't work you know there is no bigger file yes there is no bigger

- [04:15:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15313) is no bigger file yes there is no bigger file as well

- [04:15:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15316) file as well okay and let's add

- [04:15:49](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15349) and yes everything is uploaded github call

- [04:16:00](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15360) and repositories our client sites projects

- [04:16:09](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15369) this is client side and this is the server side

- [04:16:16](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15376) yes everything is looking great let's look at the script as well

- [04:16:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15400) all right please also check the description of the video i will put a

- [04:16:43](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15403) description of the video i will put a github link and our discord server link

- [04:16:47](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15407) github link and our discord server link so if you get any questions regarding

- [04:16:50](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15410) so if you get any questions regarding this project or for any other

- [04:16:53](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15413) this project or for any other projects and and such

- [04:16:57](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15417) projects and and such please join our discord

- [04:16:59](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15419) please join our discord channel and ask me any questions that

- [04:17:01](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15421) channel and ask me any questions that you want

- [04:17:02](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15422) you want you can find our discord channel link on

- [04:17:05](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15425) you can find our discord channel link on about page and you hit you see there is

- [04:17:08](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15428) about page and you hit you see there is official discourse link this is my

- [04:17:11](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15431) official discourse link this is my uh linkedin

- [04:17:13](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15433) uh linkedin this is the game that i develop

- [04:17:15](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15435) this is the game that i develop also in every video i have

- [04:17:18](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15438) also in every video i have uh you can see the

- [04:17:20](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15440) uh you can see the links under there like as the source

- [04:17:23](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15443) links under there like as the source code discord channel how to discord my

- [04:17:26](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15446) code discord channel how to discord my link it in

- [04:17:27](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15447) link it in and my other uh playlists please also

- [04:17:31](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15451) and my other uh playlists please also like and subscribe

- [04:17:36](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15456) okay thank you so much see you later hopefully at another

- [04:17:40](https://www.youtube.com/watch?v=MFk6x-r6HEw&t=15460) much see you later hopefully at another video
