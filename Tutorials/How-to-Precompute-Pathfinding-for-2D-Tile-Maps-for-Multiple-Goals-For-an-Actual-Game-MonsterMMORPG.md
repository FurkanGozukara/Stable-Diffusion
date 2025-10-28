# How to Precompute Pathfinding for 2D Tile Maps for Multiple Goals - For an Actual Game MonsterMMORPG

## Full tutorial link > https://www.youtube.com/watch?v=jRTA0iLjv6M

[![How to Precompute Pathfinding for 2D Tile Maps for Multiple Goals - For an Actual Game MonsterMMORPG](https://img.youtube.com/vi/jRTA0iLjv6M/sddefault.jpg)](https://www.youtube.com/watch?v=jRTA0iLjv6M "How to Precompute Pathfinding for 2D Tile Maps for Multiple Goals - For an Actual Game MonsterMMORPG")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Precompute-Pathfinding-for-2D-Tile-Maps-for-Multiple-Goals-For-an-Actual-Game-MonsterMMORPG.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Precompute-Pathfinding-for-2D-Tile-Maps-for-Multiple-Goals-For-an-Actual-Game-MonsterMMORPG.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


In this video (4K ultra HD); we are #programming a software to pre-calculate / pre-compute all of the possible paths from all coordinates to all coordinates in 2d RPGMaker style tiled maps.

The source code and example database SQL script is available on this GitHub repository : [https://github.com/FurkanGozukara/pathfinding-2d-tile-map](https://github.com/FurkanGozukara/pathfinding-2d-tile-map)

Discord channel link of our channel. Yes you can come and ask any questions regarding this video or any other programming related problems : [https://discord.gg/6Mrb8MwteQ](https://discord.gg/6Mrb8MwteQ)

How to use Discord : [https://discord.gg/rfttctFewW](https://discord.gg/rfttctFewW)

My name is Furkan Gözükara and I am a PhD computer engineer from Turkey : [https://www.linkedin.com/in/furkangozukara/](https://www.linkedin.com/in/furkangozukara/)

I have been developing a Pokemon 3rd generation style free-to-play browser based MMORPG game MonsterMMORPG since 2009.

I am planning to add semi-automatic Monster searching functionality to the game. For this purpose, I decided to pre-calculate all of the possible pathings to make things easier and faster at the server side since maps are fixed and static.

In this video, we develop an algorithm to as efficiently as possible calculating all of the paths from all coordinates to all coordinates. So basically we are preparing an instant #pathfinder.

For software development, we use .NET core Version 6, C# and #WPF framework.

For IDE, we use Microsoft Visual Studio 2022 Community Edition.

For database, we use #MSSQLserver 2019.

The video is actually merge 2 different sessions. In the first part of the video which is around 6 hours 47 minutes, we build the software as version 1. It works but it has some flaws and errors.

In the second session (starts after 6 hours 47 min) which was recorded 5 days later, we apply several performance improvements, fix some algorithm errors, debug and fix the memory leak.

For figuring out the cause of memory leak, we use Microsoft Visual Studio's debugging tools. Especially .NET Performance Profiler. You will be quite surprised when you learn the cause of the memory leak.

The software is fully multi-threaded coded with main function being a recursive function. Multi-threaded programming is a major challenge when you use recursive function methodology.

In this video you will learn how to truly code a multi-threaded software with proper object oriented approach. Moreover, you will learn how to ensure thread-safety of objects in such a robust multithreaded recursive methodology using software. Furthermore you will learn how to prevent thread-race condition in a multithreaded application.

To achieve fully multithreaded and efficient programming, we utilize the following concepts of C# programming: Hashset, Dictionary, Hashing, Lock, List, Task, Class, Parallel Foreach, Reference Types.

If you are interested in programming but you lack experience and skills I suggest you to watch our following programming lecture videos. They are complete lectures and totally free.

[1] Introduction to Programming Full Course with C# playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o](https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o)

[2] Advanced #Programming with C# Full Course Playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4](https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4)

[3] Object Oriented Programming Full Course with C# playlist  : [https://www.youtube.com/playlist?list=PL_pbwdIyffsnH3XJb66FDIHh1yHwWC26I](https://www.youtube.com/playlist?list=PL_pbwdIyffsnH3XJb66FDIHh1yHwWC26I)

[4] Asp.NET Core V5 - MVC Pattern - Bootstrap V5 - Responsive Web #Programming with C# Full Course Playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffsnAWtgk4ja3HN3xgMKF7BOE](https://www.youtube.com/playlist?list=PL_pbwdIyffsnAWtgk4ja3HN3xgMKF7BOE)

[5] Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist: [https://www.youtube.com/playlist?list=PL_pbwdIyffskVschrADCL6KEnL_nqDtgD](https://www.youtube.com/playlist?list=PL_pbwdIyffskVschrADCL6KEnL_nqDtgD)

[6] Software Engineering Full Course playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffslgxMVyXhnHiSn_EWTvx1G-](https://www.youtube.com/playlist?list=PL_pbwdIyffslgxMVyXhnHiSn_EWTvx1G-)

[7] Security of Information Systems Full Course playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffslM_o92NwkaUzD7C6Fekx26](https://www.youtube.com/playlist?list=PL_pbwdIyffslM_o92NwkaUzD7C6Fekx26)

[8] (Turkish) Bilgisayar Becerileri Tam Ders playlist : [https://www.youtube.com/playlist?list=PL_pbwdIyffsmyE2e909ea1MXLcMb8MenG](https://www.youtube.com/playlist?list=PL_pbwdIyffsmyE2e909ea1MXLcMb8MenG)

thumb source : [https://www.freepik.com/free-vector/maze-kids-template_11377102.htm](https://www.freepik.com/free-vector/maze-kids-template_11377102.htm)



### Video Transcription


- [00:00:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3) hello everyone welcome to uh my channel again uh today we are going to

- [00:00:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7) again uh today we are going to program a software uh to pre-calculate

- [00:00:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10) program a software uh to pre-calculate uh

- [00:00:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11) uh pathfinding uh for the game that i

- [00:00:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13) pathfinding uh for the game that i develop

- [00:00:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15) develop uh i would like to first uh introduce

- [00:00:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18) uh i would like to first uh introduce the game so that you will understand the

- [00:00:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20) the game so that you will understand the concept of pet finding uh that we are

- [00:00:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23) concept of pet finding uh that we are going to develop

- [00:00:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25) going to develop the game is a text-based and

- [00:00:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27) the game is a text-based and two-dimensional game it uses a map

- [00:00:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31) two-dimensional game it uses a map system which is composed of

- [00:00:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=34) system which is composed of two-dimensional coordinates x and i-axis

- [00:00:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=38) two-dimensional coordinates x and i-axis so let's

- [00:00:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=39) so let's make a

- [00:00:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=41) make a dummy account to show you how the game

- [00:00:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=44) dummy account to show you how the game works by the way to find this game just

- [00:00:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=46) works by the way to find this game just type

- [00:00:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=47) type monster mmrpg to google

- [00:00:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=51) monster mmrpg to google and you will see

- [00:00:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=54) and you will see the gaming dash also

- [00:00:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=56) the gaming dash also if you are wondering who am i i am

- [00:01:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=65) and you can see my linkedin profile uh as like this let me turn this into

- [00:01:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=69) uh as like this let me turn this into english

- [00:01:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=71) english sorry about that

- [00:01:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=81) uh i'm a phd computer engineer from turkey i have been developing this

- [00:01:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=84) from turkey i have been developing this game since 2009

- [00:01:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=86) game since 2009 as my graduation project

- [00:01:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=89) as my graduation project okay anyway let's continue

- [00:01:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=101) so these things are not important uh for the thing that we would like to see

- [00:01:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=103) the thing that we would like to see okay

- [00:01:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=104) okay so this is our uh

- [00:01:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=107) so this is our uh game system map system

- [00:01:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=110) game system map system as you can see uh

- [00:01:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=112) as you can see uh we are using two-dimensional game uh

- [00:01:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=115) we are using two-dimensional game uh two-dimensional map we have coordinates

- [00:01:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=118) two-dimensional map we have coordinates as you can see like here

- [00:02:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=120) as you can see like here and how these coordinates are composed

- [00:02:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=124) and how these coordinates are composed uh let me show you our

- [00:02:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=127) uh let me show you our map designing software this is a

- [00:02:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=129) map designing software this is a software that my graduation project

- [00:02:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=134) software that my graduation project friend

- [00:02:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=135) friend developed and after we have graduated

- [00:02:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=139) developed and after we have graduated they didn't

- [00:02:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=141) they didn't develop anything i have been developing

- [00:02:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=143) develop anything i have been developing as a single developer solo developer

- [00:02:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=146) as a single developer solo developer since 2009

- [00:02:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=148) since 2009 so we are at the

- [00:02:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=151) so we are at the map

- [00:02:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=152) map [Music]

- [00:02:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=154) [Music] starfall town let's open it

- [00:02:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=158) starfall town let's open it from here first i am trying to explain

- [00:02:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=160) from here first i am trying to explain you our mapping system then we will uh

- [00:02:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=164) you our mapping system then we will uh move to the

- [00:02:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=166) move to the pet binding

- [00:02:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=168) pet binding okay and here's

- [00:02:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=171) okay and here's powerpoint

- [00:03:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=181) by the way i will also upload the code

- [00:03:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=183) upload the code that we have developed to the github so

- [00:03:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=185) that we have developed to the github so you will be able to access it

- [00:03:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=187) you will be able to access it okay so this is how the our map system

- [00:03:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=189) okay so this is how the our map system is designed as you can see we split

- [00:03:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=193) is designed as you can see we split uh

- [00:03:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=194) uh the map image into 16 pixels 16 by 16

- [00:03:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=198) the map image into 16 pixels 16 by 16 pixels

- [00:03:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=199) pixels so this map is uh

- [00:03:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=202) so this map is uh 64 columns and 64 rows

- [00:03:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=206) 64 columns and 64 rows like here these are the columns and

- [00:03:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=208) like here these are the columns and these are the rows

- [00:03:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=210) these are the rows and the coordinates start from 1 2 3 4

- [00:03:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=213) and the coordinates start from 1 2 3 4 this will be 65 as you can see this will

- [00:03:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=215) this will be 65 as you can see this will be

- [00:03:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=225) as you can see because it is row 3 and column 1 which means

- [00:03:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=228) and column 1 which means 3 minus 1

- [00:03:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=230) 3 minus 1 multiply with 64 plus 1 okay

- [00:03:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=234) multiply with 64 plus 1 okay so this is the logic of our

- [00:03:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=237) so this is the logic of our map system

- [00:03:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=239) map system uh in this map system we have of course

- [00:04:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=242) uh in this map system we have of course uh the shape types like

- [00:04:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=245) uh the shape types like uh let's load the map

- [00:04:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=247) uh let's load the map okay it's filled

- [00:04:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=249) okay it's filled and when we click the physical map so

- [00:04:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=251) and when we click the physical map so these areas are impossible

- [00:04:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=254) these areas are impossible that you cannot pass through these are

- [00:04:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=257) that you cannot pass through these are walkable possible areas

- [00:04:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=259) walkable possible areas and for example

- [00:04:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=262) and for example let's see

- [00:04:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=264) let's see okay this is a grass area where the

- [00:04:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=266) okay this is a grass area where the monsters appear like here so we have

- [00:04:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=269) monsters appear like here so we have this kind of different shape types

- [00:04:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=272) this kind of different shape types movable walkable jumpable and such

- [00:04:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=274) movable walkable jumpable and such things

- [00:04:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=276) things so what we want to achieve is

- [00:04:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=279) so what we want to achieve is directing users

- [00:04:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=281) directing users to the closest

- [00:04:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=282) to the closest [Music]

- [00:04:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=284) [Music] monster appearing area automatically

- [00:04:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=287) monster appearing area automatically for example when i am here the closest

- [00:04:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=289) for example when i am here the closest location

- [00:04:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=294) where i can hunt monsters is here you see this

- [00:04:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=297) hunt monsters is here you see this location so currently i am at uh

- [00:05:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=300) location so currently i am at uh 3250

- [00:05:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=306) which means let's see let's reopen map so it will be

- [00:05:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=310) let's reopen map so it will be looking better

- [00:05:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=313) looking better start from town

- [00:05:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=318) okay okay

- [00:05:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=319) okay so

- [00:05:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=320) so currently we are at

- [00:05:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=323) currently we are at 000 3250

- [00:05:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=325) 000 3250 which is something like

- [00:05:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=329) okay [Music]

- [00:05:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=336) here so the closest point to me right now is

- [00:05:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=339) so the closest point to me right now is this area this is where i can hunt

- [00:05:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=343) this area this is where i can hunt i could calculate this with pet finding

- [00:05:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=345) i could calculate this with pet finding algorithms

- [00:05:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=347) algorithms but

- [00:05:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=348) but i want to pre-calculate

- [00:05:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=351) i want to pre-calculate every padding

- [00:05:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=352) every padding from every point

- [00:05:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=354) from every point so that i can quickly load them

- [00:05:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=357) so that i can quickly load them and

- [00:05:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=358) and navigate user to there without any

- [00:06:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=361) navigate user to there without any real calculation

- [00:06:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=363) real calculation what we want to do is we want to check

- [00:06:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=367) what we want to do is we want to check every possible navigation from every

- [00:06:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=370) every possible navigation from every point

- [00:06:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=371) point every

- [00:06:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=372) every [Music]

- [00:06:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=374) [Music] coordinate

- [00:06:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=375) coordinate and quickly directing user to the

- [00:06:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=379) and quickly directing user to the nearest

- [00:06:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=381) nearest monster hunting area okay

- [00:06:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=385) monster hunting area okay so how do we keep

- [00:06:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=387) so how do we keep these coordinates we have map table

- [00:06:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=395) okay as you can see here which

- [00:06:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=396) which keeps the root id

- [00:06:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=398) keeps the root id the root is the

- [00:06:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=400) the root is the map where the user is currently in which

- [00:06:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=403) map where the user is currently in which is starfall town

- [00:06:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=405) is starfall town uh when we click

- [00:06:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=408) uh when we click that we can see the root details here

- [00:06:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=410) that we can see the root details here it's another page

- [00:06:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=412) it's another page and what else we keep we keep the square

- [00:06:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=415) and what else we keep we keep the square id which is the coordinate

- [00:06:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=418) id which is the coordinate so the coordinate is here as you can see

- [00:07:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=421) so the coordinate is here as you can see so it starts from 1 to

- [00:07:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=424) so it starts from 1 to let's see

- [00:07:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=425) let's see let's

- [00:07:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=427) let's pick more and more

- [00:07:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=434) it starts from 1 to of course 4 000 4096

- [00:07:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=440) it holds every coordinates in the database this database design

- [00:07:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=443) database this database design uh is probably not

- [00:07:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=446) uh is probably not most optimal day because we had designed

- [00:07:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=449) most optimal day because we had designed it in back in 2009 when we had uh

- [00:07:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=454) it in back in 2009 when we had uh really

- [00:07:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=456) really lesser experience in development and we

- [00:07:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=459) lesser experience in development and we keep the coordinates shape types so we

- [00:07:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=461) keep the coordinates shape types so we have another table shapes here so the

- [00:07:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=465) have another table shapes here so the one is not possible that means the user

- [00:07:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=467) one is not possible that means the user cannot move to that and we have plain

- [00:07:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=470) cannot move to that and we have plain terrain and we have grass

- [00:07:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=473) terrain and we have grass plain terrain means walkable area but

- [00:07:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=475) plain terrain means walkable area but nothing happens grass means where the

- [00:07:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=478) nothing happens grass means where the monsters appear

- [00:08:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=480) monsters appear and we have other some types so where

- [00:08:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=483) and we have other some types so where the monsters appear are three grass

- [00:08:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=485) the monsters appear are three grass types and 11 waters

- [00:08:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=488) types and 11 waters and

- [00:08:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=489) and then we have not possible and play

- [00:08:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=491) then we have not possible and play internet

- [00:08:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=492) internet and we have also wrote

- [00:08:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=495) and we have also wrote uh in the road table we keep each raw

- [00:08:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=497) uh in the road table we keep each raw details like root id root name uh max

- [00:08:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=500) details like root id root name uh max column maxwell because

- [00:08:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=502) column maxwell because dimension of maps changes we have

- [00:08:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=505) dimension of maps changes we have uh classic classically

- [00:08:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=508) uh classic classically regularly

- [00:08:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=509) regularly 64 to 64 and

- [00:08:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=511) 64 to 64 and 32-33 and we have one very big map which

- [00:08:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=515) 32-33 and we have one very big map which is

- [00:08:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=515) is 192-192

- [00:08:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=522) and there are some other information that we keep

- [00:08:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=527) for the game all right now we have the idea of how

- [00:08:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=529) all right now we have the idea of how the maps are

- [00:08:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=531) the maps are composites

- [00:08:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=533) composites so that we can start development i'm

- [00:08:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=535) so that we can start development i'm going to use visual studio 2002 latest

- [00:08:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=538) going to use visual studio 2002 latest version and

- [00:09:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=540) version and i'm going to

- [00:09:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=542) i'm going to generate a vpf.net

- [00:09:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=545) generate a vpf.net core application

- [00:09:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=546) core application for this

- [00:09:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=549) for this uh

- [00:09:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=550) uh let's

- [00:09:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=551) let's uh

- [00:09:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=552) uh compose a new folder

- [00:09:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=554) compose a new folder uh name it as

- [00:09:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=557) uh name it as pets or let's say yeah pet finding

- [00:09:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=561) pets or let's say yeah pet finding projects

- [00:09:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=562) projects for example whatever we want

- [00:09:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=565) for example whatever we want and let's name the project as

- [00:09:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=568) and let's name the project as path

- [00:09:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=570) path filing

- [00:09:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=572) filing project

- [00:09:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=574) project okay

- [00:09:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=575) okay next it will be.net six dot net core by

- [00:09:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=579) next it will be.net six dot net core by the way this

- [00:09:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=595) all right the project is composed with default elements

- [00:09:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=598) composed with default elements um

- [00:10:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=605) we are going to use a database class we could use entity framework but i

- [00:10:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=607) we could use entity framework but i prefer to use my own

- [00:10:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=609) prefer to use my own database class i will also upload this

- [00:10:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=612) database class i will also upload this into

- [00:10:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=620) the guitar folders it is named as a db connection

- [00:10:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=621) connection and this is a class that i have

- [00:10:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=623) and this is a class that i have developed as you can see sql connection

- [00:10:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=625) developed as you can see sql connection is not defined because in.net core

- [00:10:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=629) is not defined because in.net core it doesn't come

- [00:10:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=631) it doesn't come by default so we are going to use browse

- [00:10:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=633) by default so we are going to use browse sql connection

- [00:10:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=639) okay [Music]

- [00:11:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=662) yeah system that is sql client let's install it

- [00:11:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=665) let's install it okay

- [00:11:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=667) okay accept

- [00:11:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=673) after this library is installed it should start working

- [00:11:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=677) should start working yeah so these are uh sql connection

- [00:11:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=680) yeah so these are uh sql connection class

- [00:11:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=681) class uh it will connect us to pathfinding

- [00:11:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=682) uh it will connect us to pathfinding database so we are we will be able to

- [00:11:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=685) database so we are we will be able to execute queries like select query select

- [00:11:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=687) execute queries like select query select data table

- [00:11:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=689) data table select data row

- [00:11:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=691) select data row update tell it and we have

- [00:11:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=694) update tell it and we have parameterized queries as well

- [00:11:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=696) parameterized queries as well by the way i explain all of this in my

- [00:11:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=699) by the way i explain all of this in my lecture videos

- [00:11:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=701) lecture videos so in my

- [00:11:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=702) so in my channel

- [00:11:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=709) you can find all of my uh lecture videos and watch them to learn

- [00:11:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=711) lecture videos and watch them to learn how to program if you are

- [00:11:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=713) how to program if you are not sure how to do programming like

- [00:11:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=715) not sure how to do programming like introduction to programming object

- [00:11:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=717) introduction to programming object oriented

- [00:11:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=718) oriented and we have advanced programming here

- [00:12:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=721) and we have advanced programming here you can watch all of them

- [00:12:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=723) you can watch all of them okay and

- [00:12:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=726) okay and let's start to development

- [00:12:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=730) let's start to development first let's start with designing our

- [00:12:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=733) first let's start with designing our database table where we will keep

- [00:12:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=737) database table where we will keep pre-compiled pathfinding

- [00:12:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=741) pre-compiled pathfinding to do this what will what we need is

- [00:12:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=743) to do this what will what we need is root id

- [00:12:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=744) root id and

- [00:12:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=746) and that's current coordinates

- [00:12:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=749) that's current coordinates and the closest

- [00:12:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=752) and the closest and the path to the closest coordinate

- [00:12:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=754) and the path to the closest coordinate so that the user can be

- [00:12:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=757) so that the user can be directed to that

- [00:12:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=765) let's start with

- [00:12:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=767) start with table

- [00:12:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=769) table so i'm going to make this as um

- [00:12:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=776) compilot parts

- [00:12:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=779) parts okay let's name it like this actually

- [00:13:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=781) okay let's name it like this actually this is the column i'm sorry about that

- [00:13:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=782) this is the column i'm sorry about that so this will be

- [00:13:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=784) so this will be auto id

- [00:13:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=786) auto id and our rows are

- [00:13:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=789) and our rows are on segments

- [00:13:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=796) okay i think they are small integer yes so this will be small

- [00:13:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=798) small integer yes so this will be small integers

- [00:13:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=801) integers and we have coordinate

- [00:13:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=808) or let's say currents current location current location

- [00:13:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=810) current location so the location is

- [00:13:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=813) so the location is let's also check that

- [00:13:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=816) let's also check that integers because we have all 32

- [00:13:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=819) integers because we have all 32 thousands

- [00:13:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=821) thousands and we are going to have the next that

- [00:13:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=824) and we are going to have the next that interrupted me

- [00:13:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=826) interrupted me we are going to have the next location

- [00:13:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=829) we are going to have the next location uh coordinate so

- [00:13:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=831) uh coordinate so uh

- [00:13:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=832) uh which location it can move as next is

- [00:13:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=836) which location it can move as next is actually it can move to left right

- [00:13:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=838) actually it can move to left right bottom top right

- [00:14:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=840) bottom top right so we can just keep the direction of the

- [00:14:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=842) so we can just keep the direction of the movement

- [00:14:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=844) movement and um

- [00:14:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=846) and um execute it uh in the chord behind

- [00:14:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=849) execute it uh in the chord behind actually it define it is dependent on

- [00:14:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=851) actually it define it is dependent on how you have

- [00:14:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=853) how you have uh designed your

- [00:14:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=856) uh designed your application

- [00:14:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=858) application in this case

- [00:14:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=859) in this case the game

- [00:14:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=860) the game or whatever the map system you are using

- [00:14:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=863) or whatever the map system you are using but in our game indeed in my game we

- [00:14:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=866) but in our game indeed in my game we could use the direction that the player

- [00:14:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=869) could use the direction that the player need to move to reach the

- [00:14:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=872) need to move to reach the uh closest possible location

- [00:14:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=875) uh closest possible location so the directions can will be

- [00:14:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=878) so the directions can will be 0 1 2 3 for example or so we can add

- [00:14:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=883) 0 1 2 3 for example or so we can add 9 direction column and it will be

- [00:14:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=887) 9 direction column and it will be tiny okay

- [00:14:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=888) tiny okay so let's say

- [00:14:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=889) so let's say one will be

- [00:14:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=892) one will be right and two will be bottom three will

- [00:14:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=895) right and two will be bottom three will be left and four will be

- [00:14:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=897) be left and four will be north okay

- [00:14:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=899) north okay and why if

- [00:15:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=902) and why if we don't we are not going to set a

- [00:15:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=904) we don't we are not going to set a default

- [00:15:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=910) and do we need an a on any other information i think we don't need

- [00:15:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=912) information i think we don't need so our primary k will be root id and the

- [00:15:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=915) so our primary k will be root id and the current location okay

- [00:15:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=918) current location okay let's save it as

- [00:15:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=926) focused at okay

- [00:15:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=935) okay so our pathfinding table is ready uh now

- [00:15:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=937) uh now let's add a button

- [00:15:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=940) let's add a button to our

- [00:15:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=942) to our application

- [00:15:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=947) okay here and let's name it as start

- [00:15:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=951) and let's name it as start at

- [00:15:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=952) at my link

- [00:15:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=954) my link okay whatever you want

- [00:16:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=968) right okay we are going to process every route uh

- [00:16:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=973) we are going to process every route uh in the game and calculate every possible

- [00:16:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=976) in the game and calculate every possible location

- [00:16:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=978) location so for each

- [00:16:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=980) so for each i'm going to export each and my

- [00:16:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=983) i'm going to export each and my connection class

- [00:16:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=985) connection class set data table and i'm going to select

- [00:16:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=990) set data table and i'm going to select everything from

- [00:16:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=992) everything from where i'm going to select everything

- [00:16:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=994) where i'm going to select everything from row

- [00:16:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=995) from row okay

- [00:16:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1002) and i'm going to iterate through every row

- [00:16:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1004) row this is the data row

- [00:16:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1006) this is the data row and to be able to use that arrow using

- [00:17:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1021) okay so we are going to get the road id

- [00:17:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1024) so we are going to get the road id and

- [00:17:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1025) and we are going to get uh

- [00:17:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1028) we are going to get uh the

- [00:17:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1028) the max column and max drop

- [00:17:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1031) max column and max drop to calculate each

- [00:17:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1035) to calculate each location position

- [00:17:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1044) which has over 200 000 rows let me show

- [00:17:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1058) yes actually over 2 million so i am going to

- [00:17:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1067) preload that into ram memory so it will be faster and we won't be doing

- [00:17:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1069) be faster and we won't be doing uh sql uh queries each time

- [00:17:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1073) uh sql uh queries each time to keep that

- [00:17:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1075) to keep that as we needed is how can we keep it

- [00:17:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1079) as we needed is how can we keep it we can keep it in a

- [00:18:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1082) we can keep it in a um

- [00:18:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1083) um class that we will compose public

- [00:18:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1086) class that we will compose public or struct

- [00:18:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1088) or struct yes truck would be better

- [00:18:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1091) yes truck would be better but actually still

- [00:18:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1093) but actually still let's make a public

- [00:18:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1096) let's make a public uh map

- [00:18:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1098) uh map format

- [00:18:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1100) format and it will have a int

- [00:18:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1105) and it will have a int id

- [00:18:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1107) id and

- [00:18:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1113) um okay let's

- [00:18:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1114) okay let's just think about it

- [00:18:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1117) just think about it how can we keep it we will have root id

- [00:18:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1119) how can we keep it we will have root id square id and shape id

- [00:18:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1125) yeah so

- [00:18:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1126) so we will have a dictionary for this and a

- [00:18:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1128) we will have a dictionary for this and a dictionary for this

- [00:18:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1130) dictionary for this yeah

- [00:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1131) yeah so rather than this i think i will

- [00:18:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1135) so rather than this i think i will make it another dictionary like

- [00:18:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1138) make it another dictionary like public dictionary

- [00:19:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1140) public dictionary first will be hints it will be road id

- [00:19:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1143) first will be hints it will be road id and then we will have another dictionary

- [00:19:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1147) and then we will have another dictionary and this the first will

- [00:19:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1149) and this the first will um

- [00:19:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1151) um square id and the other will reshape id

- [00:19:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1154) square id and the other will reshape id shape type of whatever we want

- [00:19:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1157) shape type of whatever we want we have formats yeah

- [00:19:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1161) we have formats yeah this will be initialized around the

- [00:19:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1162) this will be initialized around the application first word id

- [00:19:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1166) application first word id and

- [00:19:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1168) and square id and shape id okay

- [00:19:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1172) square id and shape id okay so let's initialize it

- [00:19:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1174) so let's initialize it uh private in it

- [00:19:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1178) uh private in it dictionary

- [00:19:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1189) okay in here we are going to initialize it with

- [00:19:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1192) it with each data row in

- [00:20:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1205) and what it is going to do is let's parse it first

- [00:20:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1207) let's parse it first range involved id equal to

- [00:20:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1222) info and let's type the name

- [00:20:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1223) name and the roles id

- [00:20:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1229) link and actually it didn't

- [00:20:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1232) and actually it didn't yeah we need to use one restaurant

- [00:20:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1248) okay and now we are going to have a

- [00:20:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1249) a square id

- [00:20:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1259) by the way i am using integer even though some of them are small integer or

- [00:21:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1261) though some of them are small integer or tiny integers

- [00:21:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1263) tiny integers so we could also optimize that for

- [00:21:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1265) so we could also optimize that for lesser memory and actually let's

- [00:21:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1267) lesser memory and actually let's optimize it so wrote id is small ins

- [00:21:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1271) optimize it so wrote id is small ins and which would make in 16.

- [00:21:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1275) and which would make in 16. uh therefore it will change

- [00:21:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1278) uh therefore it will change okay this one is

- [00:21:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1280) okay this one is 16

- [00:21:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1286) and square id is integer and shape type is tiny ins therefore this will be

- [00:21:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1289) is tiny ins therefore this will be ins page

- [00:21:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1291) ins page or

- [00:21:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1295) what s5

- [00:21:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1296) s5 as short

- [00:21:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1306) um one seconds

- [00:21:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1318) so about that i didn't remember it yeah you end eight

- [00:22:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1345) no we need uh unsign it so it is bike yes

- [00:22:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1357) all right we have optimized it now and we are going to have convert cable

- [00:22:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1365) yes and it will be

- [00:22:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1368) and it will be shape type

- [00:22:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1373) by the way we don't need to select mpc id therefore we can even

- [00:22:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1376) id therefore we can even further optimize that

- [00:22:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1379) further optimize that mpc id is totally not

- [00:23:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1381) mpc id is totally not related to our application right now

- [00:23:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1385) related to our application right now and this will be

- [00:23:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1387) and this will be yes but

- [00:23:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1394) you can buy it let's say shape type okay

- [00:23:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1403) and what else we are going to do is if a niche

- [00:23:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1403) niche format contains key

- [00:23:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1406) format contains key vote id equal to pulse

- [00:23:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1416) it is going to add actually this doesn't need to be

- [00:23:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1418) actually this doesn't need to be let's check

- [00:23:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1421) let's check dictionary

- [00:23:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1422) dictionary it can only be a tuple yes

- [00:23:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1426) it can only be a tuple yes so let's turn it into a tuple

- [00:23:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1431) so let's turn it into a tuple okay like this it will take lesser place

- [00:23:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1436) okay like this it will take lesser place and we are going to add

- [00:23:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1438) and we are going to add why why i am doing this i will show you

- [00:24:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1453) and name tuple it autocomplete perhaps and it will be square id

- [00:24:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1456) and it will be square id and

- [00:24:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1462) okay and if it

- [00:24:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1464) and if it exists already in the dictionary

- [00:24:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1467) exists already in the dictionary we are going to just use

- [00:24:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1475) this approach oh we need to set it like this one

- [00:24:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1477) oh we need to set it like this one seconds

- [00:24:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1489) yeah and our problem is

- [00:24:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1498) this whole single volume but we need to have

- [00:24:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1499) have multiple values so it can't be tuple but

- [00:25:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1508) it has to be dictionary okay this the first design was

- [00:25:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1510) this the first design was correct

- [00:25:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1512) correct oh

- [00:25:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1513) oh it will be as

- [00:25:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1529) a dictionary can be designed as

- [00:25:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1532) can be designed as item okay

- [00:25:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1552) yeah okay

- [00:26:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1605) dictionary means white

- [00:26:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1608) means white dictionary

- [00:26:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1611) dictionary shapes

- [00:27:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1625) since uh every square id is unique we don't need to make a check here

- [00:27:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1628) don't need to make a check here spread out the shape type and let's do

- [00:27:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1631) spread out the shape type and let's do it here

- [00:27:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1636) and in this case we will just make an add and it will be

- [00:27:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1645) okay now it's correct so uh first we need to initialize our uh

- [00:27:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1649) so uh first we need to initialize our uh dictionary

- [00:27:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1650) dictionary let's see if it is working or not

- [00:27:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1654) let's see if it is working or not because you should always progress with

- [00:27:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1658) because you should always progress with step to step

- [00:27:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1659) step to step not quote everything and try to make it

- [00:27:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1662) not quote everything and try to make it running

- [00:27:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1672) okay and let's see we have

- [00:27:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1674) let's see we have key

- [00:27:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1676) key while here let's continue eleven wait

- [00:28:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1680) while here let's continue eleven wait okay

- [00:28:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1682) okay yeah

- [00:28:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1684) yeah all right now we have our table as in

- [00:28:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1687) all right now we have our table as in dictionary so that we can quickly

- [00:28:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1690) dictionary so that we can quickly access them

- [00:28:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1697) you could also do a sql connection

- [00:28:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1700) a sql connection sql select every time uh

- [00:28:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1702) sql select every time uh if you don't have enough ram memory but

- [00:28:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1705) if you don't have enough ram memory but i have

- [00:28:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1706) i have lots of remember memory in my computer

- [00:28:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1709) lots of remember memory in my computer therefore i can load entire

- [00:28:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1712) therefore i can load entire database table into ram memory and

- [00:28:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1719) make my application faster so

- [00:28:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1722) so we will start uh from the first uh

- [00:28:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1725) we will start uh from the first uh squiff and

- [00:28:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1727) squiff and uh check

- [00:28:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1729) uh check it's

- [00:28:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1731) it's let's say

- [00:29:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1744) within our target shape type which are monsters

- [00:29:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1746) target shape type which are monsters grass area and water area where the

- [00:29:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1748) grass area and water area where the monsters appear

- [00:29:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1755) so how we gonna know uh which

- [00:29:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1756) which ones

- [00:29:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1757) ones can be

- [00:29:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1763) checked so we can calculate the boundaries of

- [00:29:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1766) so we can calculate the boundaries of each map

- [00:29:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1768) each map with

- [00:29:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1769) with like this

- [00:29:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1780) first we need to read max column and mean column

- [00:29:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1784) max column and mean column when i say column and row count

- [00:29:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1786) when i say column and row count road

- [00:29:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1795) okay we don't need an optimization here we

- [00:29:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1797) we don't need an optimization here we can just use integers

- [00:29:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1799) can just use integers so in our routes we check the

- [00:30:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1803) so in our routes we check the max row like this

- [00:30:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1826) so we now we know the minimum and maximum

- [00:30:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1829) maximum locations as

- [00:30:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1832) locations as like this

- [00:30:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1838) yes okay so this will be our um

- [00:30:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1842) so this will be our um neighbors

- [00:30:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1844) neighbors that's

- [00:30:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1845) that's actually our coordinates that

- [00:30:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1847) actually our coordinates that user can

- [00:30:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1850) user can walk through

- [00:30:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1857) in the map each coordinates as we have seen

- [00:31:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1860) as we have seen here you see

- [00:31:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1862) here you see these are the coordinates

- [00:31:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1864) these are the coordinates and we have

- [00:31:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1867) and we have theirs

- [00:31:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1873) shape types in our dictionary okay so until we find

- [00:31:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1877) okay so until we find closest the closest part

- [00:31:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1881) closest the closest part we need to check

- [00:31:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1883) we need to check every possible

- [00:31:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1884) every possible [Music]

- [00:31:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1886) [Music] jump points that the user can

- [00:31:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1889) jump points that the user can go

- [00:31:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1891) go here we need to have some

- [00:31:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1893) here we need to have some algorithm design

- [00:31:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1896) algorithm design so let's say user starts from

- [00:31:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1903) square id one but this coil is

- [00:31:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1905) but this coil is impossible

- [00:31:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1907) impossible okay

- [00:31:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1909) okay so

- [00:31:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1910) so if the

- [00:31:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1911) if the location is impossible

- [00:32:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1921) we don't need to edit into our pathfinding

- [00:32:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1923) pathfinding table right

- [00:32:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1925) table right so first let's start with checking that

- [00:32:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1927) so first let's start with checking that if

- [00:32:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1928) if a dictionary makes a map format

- [00:32:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1932) a dictionary makes a map format uh and

- [00:32:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1940) let's get it as we let's get the root id as well

- [00:32:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1950) okay we get root id then we get the uh location which is let's rename this as

- [00:32:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1955) location which is let's rename this as um

- [00:32:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1956) um block

- [00:32:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1964) so it's gonna be more sense making equal to what is our impossible shape

- [00:32:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1967) equal to what is our impossible shape type

- [00:32:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1968) type we know it from our

- [00:32:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1970) we know it from our database shapes in possible shape type

- [00:32:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1973) database shapes in possible shape type is one

- [00:32:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1975) is one equal to one

- [00:33:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1980) not possible to move this location

- [00:33:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1982) move this location now we can just continue okay

- [00:33:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1985) now we can just continue okay so we just bypass it uh

- [00:33:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1989) so we just bypass it uh the locations that user cannot ever move

- [00:33:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1992) the locations that user cannot ever move on so a user can never be on any of

- [00:33:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1996) on so a user can never be on any of these tiles okay

- [00:33:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=1999) these tiles okay so let's assume that user is here okay

- [00:33:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2004) so let's assume that user is here okay in this style the user cannot move left

- [00:33:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2007) in this style the user cannot move left cannot move up but can move to right and

- [00:33:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2009) cannot move up but can move to right and can move to

- [00:33:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2011) can move to bottom okay

- [00:33:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2013) bottom okay so we are going to check

- [00:33:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2015) so we are going to check each

- [00:33:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2016) each direction each time

- [00:33:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2020) direction each time until the user

- [00:33:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2022) until the user reaches

- [00:33:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2024) reaches the

- [00:33:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2030) target area which is for example the closest could be here or here

- [00:33:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2034) closest could be here or here and then

- [00:33:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2035) and then according to that shortest path added to

- [00:33:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2038) according to that shortest path added to the

- [00:34:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2047) since this will be only a one-time run i am not going to make optimizations just

- [00:34:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2049) am not going to make optimizations just uh do some brute force programming

- [00:34:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2055) all right so

- [00:34:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2058) so we also need to check boundaries of the

- [00:34:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2060) we also need to check boundaries of the user for example let's say a user is

- [00:34:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2064) user for example let's say a user is here so the user cannot move to the

- [00:34:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2067) here so the user cannot move to the right anymore

- [00:34:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2069) right anymore so if the location

- [00:34:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2071) so if the location when the location is divided to

- [00:34:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2075) when the location is divided to a column count if the leftover is zero

- [00:34:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2084) then user cannot move to right right

- [00:34:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2085) right for example

- [00:34:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2087) for example over 64 15 and there is no left over

- [00:34:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2092) over 64 15 and there is no left over same applies to the rows if the

- [00:34:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2096) same applies to the rows if the [Music]

- [00:35:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2100) [Music] let's see how can we calculate it yeah

- [00:35:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2107) if the location is

- [00:35:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2108) location is smaller than

- [00:35:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2110) smaller than the column count then the user cannot

- [00:35:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2113) the column count then the user cannot move to up

- [00:35:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2120) so let's write them if the location is smaller than the max

- [00:35:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2124) if the location is smaller than the max column

- [00:35:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2126) column count

- [00:35:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2127) count the users cannot move you up

- [00:35:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2136) okay if the left overs of the

- [00:35:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2138) of the location divided

- [00:35:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2142) by max volume

- [00:35:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2144) max volume is zero

- [00:35:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2145) is zero the user can not move

- [00:35:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2148) the user can not move right

- [00:35:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2150) right okay

- [00:35:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2151) okay and

- [00:36:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2170) minus one over seconds

- [00:36:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2184) yeah okay if the leftover is one then the user

- [00:36:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2186) if the leftover is one then the user cannot move to left

- [00:36:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2189) cannot move to left so

- [00:36:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2197) in one the user cannot move left and finally the final resurrection

- [00:36:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2201) and finally the final resurrection is if the left

- [00:36:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2203) is if the left overs

- [00:37:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2221) okay so if we divide by uh max rho is over is equal to actually let's say

- [00:37:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2225) is over is equal to actually let's say this

- [00:37:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2226) this if the

- [00:37:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2228) if the location divided

- [00:37:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2233) by [Music]

- [00:37:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2235) [Music] max row

- [00:37:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2245) all right uh i did come up uh with an idea of how to do uh

- [00:37:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2250) idea of how to do uh this algorithm design

- [00:37:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2253) this algorithm design and i and i think it will be uh pretty

- [00:37:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2256) and i and i think it will be uh pretty efficient as well

- [00:37:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2258) efficient as well uh so we are going to keep

- [00:37:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2261) uh so we are going to keep uh every pad in a dictionary and

- [00:37:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2266) uh every pad in a dictionary and uh at the end of the pad we will um mark

- [00:37:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2270) uh at the end of the pad we will um mark it as

- [00:37:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2272) it as set it as whether

- [00:37:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2274) set it as whether we have

- [00:37:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2276) we have arrived at the

- [00:37:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2278) arrived at the target destination or it ended up with

- [00:38:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2281) target destination or it ended up with an

- [00:38:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2282) an [Music]

- [00:38:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2283) [Music] impossible in uh not a

- [00:38:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2286) impossible in uh not a movable location or another location not

- [00:38:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2289) movable location or another location not a monster hunting area

- [00:38:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2293) a monster hunting area so to do that

- [00:38:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2295) so to do that for each route we are going to have a

- [00:38:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2297) for each route we are going to have a different dictionary so that it won't

- [00:38:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2300) different dictionary so that it won't take too much

- [00:38:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2302) take too much uh it won't take too much space in our

- [00:38:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2309) [Music] memory

- [00:38:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2311) memory and the key of this dictionary will be

- [00:38:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2313) and the key of this dictionary will be the

- [00:38:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2314) the paths

- [00:38:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2316) paths as any as a as an integer list

- [00:38:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2319) as any as a as an integer list so that we will be able to

- [00:38:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2321) so that we will be able to sort it uh at the end

- [00:38:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2324) sort it uh at the end to find out the shortest path and it

- [00:38:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2326) to find out the shortest path and it will have a boolean value

- [00:38:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2329) will have a boolean value uh

- [00:38:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2330) uh that will tell us whether uh

- [00:38:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2334) that will tell us whether uh we

- [00:38:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2335) we reached our destination uh the monster

- [00:38:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2338) reached our destination uh the monster hunting area or not whether it was

- [00:39:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2340) hunting area or not whether it was successful padding or

- [00:39:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2342) successful padding or it wasn't a successful padding let's

- [00:39:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2345) it wasn't a successful padding let's call this as

- [00:39:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2347) call this as per road mappings

- [00:39:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2350) per road mappings okay

- [00:39:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2355) um dictionary list

- [00:39:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2357) dictionary list bold

- [00:39:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2389) all right so

- [00:39:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2390) so um

- [00:39:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2393) we will generate each type at least

- [00:39:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2397) generate each type at least of temporary a temporary list

- [00:40:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2400) of temporary a temporary list as

- [00:40:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2401) as locations

- [00:40:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2404) locations padding

- [00:40:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2406) padding equal to

- [00:40:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2408) equal to new lists

- [00:40:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2410) new lists and

- [00:40:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2412) and actually not this uh

- [00:40:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2414) actually not this uh it will be like this let's say

- [00:40:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2417) it will be like this let's say so we have current location

- [00:40:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2420) so we have current location and

- [00:40:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2429) so right uh left

- [00:40:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2439) um okay

- [00:40:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2450) a current lock bigger than or let's say smaller than

- [00:40:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2453) bigger than or let's say smaller than uh the road column count

- [00:41:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2463) okay this is the um criteria that we want at

- [00:41:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2468) up therefore

- [00:41:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2477) okay it won't be like this so let's

- [00:41:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2478) let's first

- [00:41:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2483) okay now this requires some planning

- [00:41:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2487) now this requires some planning we are going to have a list we are going

- [00:41:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2489) we are going to have a list we are going to have up

- [00:41:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2491) to have up right

- [00:41:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2493) right down left

- [00:41:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2499) and we will recursively

- [00:41:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2502) recursively add more

- [00:41:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2518) let's make an s like this there will be a

- [00:42:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2520) a different patterns

- [00:42:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2539) okay let's try a recursive approach uh so

- [00:42:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2540) so i will write several functions as

- [00:42:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2545) i will write several functions as private void check

- [00:42:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2547) private void check top movement

- [00:42:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2550) top movement uh it will take

- [00:42:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2552) uh it will take a

- [00:42:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2553) a check location

- [00:42:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2560) and it will take a dictionary of this

- [00:42:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2567) we will give it as a reference therefore it won't generate a new dictionary

- [00:42:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2570) it won't generate a new dictionary so this will check um

- [00:42:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2573) so this will check um if

- [00:42:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2575) if i also need to give

- [00:42:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2576) i also need to give box and

- [00:42:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2579) box and max raw count and column count

- [00:43:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2582) max raw count and column count as well count

- [00:43:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2592) so if check location

- [00:43:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2604) hd is smaller than the max column count

- [00:43:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2620) possible one and then go over them

- [00:43:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2621) go over them so

- [00:43:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2630) let's see let's say we are at this square we are giving this square

- [00:43:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2634) square we are giving this square and we will

- [00:43:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2635) and we will check these squares and if it is valid

- [00:44:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2640) check these squares and if it is valid we will add this as a list to the

- [00:44:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2645) we will add this as a list to the uh

- [00:44:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2646) uh dictionary right

- [00:44:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2649) dictionary right however when we check the next list

- [00:44:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2658) okay so this should take a list another check location like this

- [00:44:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2661) a list another check location like this okay

- [00:44:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2663) okay list

- [00:44:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2664) list ins

- [00:44:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2666) ins okay

- [00:44:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2667) okay and this check location will append

- [00:44:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2676) a neat one and so uh last location

- [00:44:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2679) uh last location equal to

- [00:44:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2683) check location let's call this address will check

- [00:44:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2686) let's call this address will check locations

- [00:44:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2693) hotel uh that lasts so this is gonna

- [00:44:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2695) so this is gonna give us the last location

- [00:44:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2697) give us the last location and the next top location will be equal

- [00:45:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2700) and the next top location will be equal to

- [00:45:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2721) okay i don't know why but video got passwords

- [00:45:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2722) passwords but we didn't lose much

- [00:45:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2724) but we didn't lose much uh so we are going to have last location

- [00:45:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2726) uh so we are going to have last location next location

- [00:45:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2728) next location and we are going to check

- [00:45:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2731) and we are going to check whether the

- [00:45:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2733) whether the these locations exist in the our

- [00:45:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2735) these locations exist in the our dictionary or not if it is existing in

- [00:45:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2738) dictionary or not if it is existing in our dictionary that means that we

- [00:45:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2739) our dictionary that means that we already

- [00:45:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2742) already checked this path okay

- [00:45:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2744) checked this path okay and if it is not existing then we will

- [00:45:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2746) and if it is not existing then we will check whether our new next top location

- [00:45:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2751) check whether our new next top location uh

- [00:45:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2752) uh is existing in our

- [00:45:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2755) is existing in our map squares uh which is map formats

- [00:46:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2760) map squares uh which is map formats yeah here and if it is not existing in

- [00:46:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2763) yeah here and if it is not existing in that that means that that location is

- [00:46:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2765) that that means that that location is invalid we could also use this one

- [00:46:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2767) invalid we could also use this one however i didn't use i used a web square

- [00:46:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2771) however i didn't use i used a web square format table

- [00:46:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2772) format table it is same actually

- [00:46:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2774) it is same actually and then we will add that uh padding as

- [00:46:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2779) and then we will add that uh padding as uh

- [00:46:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2780) uh false so we didn't reach any monster

- [00:46:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2782) false so we didn't reach any monster searching area

- [00:46:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2784) searching area uh

- [00:46:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2785) uh then

- [00:46:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2788) then we are going to check the shape types uh

- [00:46:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2791) we are going to check the shape types uh the not possible shape types is one

- [00:46:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2795) the not possible shape types is one and then

- [00:46:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2797) and then rotate is 12 okay so if any of these

- [00:46:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2800) rotate is 12 okay so if any of these areas are the need

- [00:46:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2803) areas are the need location then they are also false that

- [00:46:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2806) location then they are also false that means that we didn't reach

- [00:46:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2812) our monster searching area or 14 okay

- [00:46:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2815) 14 okay let's see 14

- [00:47:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2821) here so in this case we are still going to

- [00:47:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2823) so in this case we are still going to edit as a false and which one

- [00:47:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2827) edit as a false and which one and then we are going to add the success

- [00:47:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2831) and then we are going to add the success if it is success then we will return as

- [00:47:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2833) if it is success then we will return as well so the success is a grass

- [00:47:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2836) well so the success is a grass which where the monster appears true

- [00:47:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2840) which where the monster appears true and

- [00:47:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2841) and where others

- [00:47:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2844) where others we have water 11

- [00:47:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2852) and we have cave surface where

- [00:47:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2858) monsters to appear [Music]

- [00:47:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2860) [Music] actually

- [00:47:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2861) actually i will check it one moment but which

- [00:47:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2864) i will check it one moment but which types are appearing

- [00:47:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2866) types are appearing monsters

- [00:47:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2868) monsters okay i have checked it from the

- [00:47:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2871) okay i have checked it from the source code of the project 19 and 15.

- [00:47:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2875) source code of the project 19 and 15. so 15 and 19 these are the

- [00:47:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2879) so 15 and 19 these are the location types where shape types where

- [00:48:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2882) location types where shape types where monsters appear

- [00:48:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2884) monsters appear so this will be true and return

- [00:48:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2887) so this will be true and return and otherwise uh

- [00:48:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2889) and otherwise uh we are going to

- [00:48:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2898) uh add as a false however however uh

- [00:48:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2900) uh we will

- [00:48:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2901) we will continue

- [00:48:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2903) continue adding

- [00:48:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2904) adding a checking mosf

- [00:48:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2906) a checking mosf how we're going to do that is we will

- [00:48:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2908) how we're going to do that is we will call the function itself

- [00:48:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2911) call the function itself with a

- [00:48:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2913) with a nave

- [00:48:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2914) nave list here

- [00:48:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2917) list here and dictionary years

- [00:48:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2920) and dictionary years and

- [00:48:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2921) and column counts and

- [00:48:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2924) column counts and road id okay

- [00:48:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2935) for the next location we use this by the way um

- [00:49:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2942) instead of copy pasting this just add here uh

- [00:49:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2948) movement direction okay so let's say string

- [00:49:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2951) direction okay so let's say string meaning

- [00:49:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2952) meaning direction

- [00:49:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2954) direction actually we can use for this enum

- [00:49:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2957) actually we can use for this enum so let's

- [00:49:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2959) so let's make our

- [00:49:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2975) left and volume okay

- [00:49:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2983) actually in our database we are going to give them

- [00:49:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2984) give them a volume so

- [00:49:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2987) a volume so top boot let's say one

- [00:49:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2990) top boot let's say one right or two

- [00:49:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2992) right or two let's say

- [00:49:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2995) let's say bottom

- [00:49:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=2996) bottom load three and left most four okay

- [00:50:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3005) so this is how we are going to keep them in the database

- [00:50:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3008) in the database and yeah

- [00:50:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3010) and yeah so we are going to get this type of i

- [00:50:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3013) so we are going to get this type of i know

- [00:50:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3016) know and based on this enumeration value we

- [00:50:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3019) and based on this enumeration value we are going to

- [00:50:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3020) are going to generate our next stop location

- [00:50:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3024) generate our next stop location so switch

- [00:50:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3027) so switch this

- [00:50:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3029) this and by the way it will be you know not

- [00:50:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3031) and by the way it will be you know not this let me fix it

- [00:50:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3034) this let me fix it switch

- [00:50:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3036) switch movements direction

- [00:50:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3055) i will try okay it fill it automatically as you can

- [00:50:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3057) okay it fill it automatically as you can see

- [00:50:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3057) see it's a great feature

- [00:50:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3059) it's a great feature okay so we did right top already if it

- [00:51:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3062) okay so we did right top already if it is right

- [00:51:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3064) is right how will

- [00:51:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3065) how will how we will calculate the next

- [00:51:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3067) how we will calculate the next we also need finding no column count

- [00:51:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3070) we also need finding no column count wrong count

- [00:51:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3075) if it is right okay from here to here it is just plus

- [00:51:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3078) okay from here to here it is just plus one

- [00:51:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3086) and if it is bottom

- [00:51:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3092) it will be plus uh column

- [00:51:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3094) uh column actually we don't need raw count in

- [00:51:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3096) actually we don't need raw count in anywhere

- [00:51:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3098) anywhere let me

- [00:51:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3099) let me consider

- [00:51:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3101) consider yeah we don't even need this in our

- [00:51:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3103) yeah we don't even need this in our current design

- [00:51:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3105) current design uh so if it is

- [00:51:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3108) uh so if it is bottom it will be plus column count

- [00:51:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3118) and if it is left it will be just minus one okay

- [00:52:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3120) one okay and

- [00:52:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3122) and this will also change

- [00:52:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3128) same way which

- [00:52:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3134) okay so

- [00:52:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3135) so uh if it is top we will call

- [00:52:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3139) uh if it is top we will call top with which parameters check

- [00:52:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3141) top with which parameters check locations dictionary

- [00:52:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3144) locations dictionary column count route id and finally the

- [00:52:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3147) column count route id and finally the movement direction it will be

- [00:52:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3151) movement direction it will be as top

- [00:52:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3153) as top okay

- [00:52:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3155) okay and if it is right it will be just

- [00:52:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3158) and if it is right it will be just right it's a recursive method actually

- [00:52:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3161) right it's a recursive method actually it will call itself it is bottom

- [00:52:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3164) it will call itself it is bottom it is bottom

- [00:52:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3166) it is bottom and if it is left it's already left yeah

- [00:52:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3170) and if it is left it's already left yeah so this method will continue calling

- [00:52:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3173) so this method will continue calling itself

- [00:52:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3175) itself until one of the

- [00:52:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3177) until one of the uh return criteria is met

- [00:53:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3181) uh return criteria is met and

- [00:53:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3185) yeah i think we have designed it correctly we will also check it

- [00:53:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3187) correctly we will also check it how we're gonna check it is we will call

- [00:53:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3190) how we're gonna check it is we will call check let's rename this

- [00:53:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3192) check let's rename this check

- [00:53:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3194) check possible

- [00:53:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3203) okay and we will just give the current location

- [00:53:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3205) location and

- [00:53:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3206) and uh this dictionary that which will be

- [00:53:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3210) uh this dictionary that which will be generated for each

- [00:53:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3212) generated for each route

- [00:53:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3225) and we will give a road id and

- [00:53:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3226) and we will give moment direction

- [00:53:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3233) uh so we will give up actually we can iterate moment directions

- [00:53:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3236) iterate moment directions let's create a new

- [00:53:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3238) let's create a new t-shirt

- [00:54:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3251) it here okay

- [00:54:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3252) okay so

- [00:54:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3253) so in our case our animals is this

- [00:54:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3258) in our case our animals is this this

- [00:54:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3259) this this

- [00:54:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3261) this and it's leg shell

- [00:54:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3265) and it's leg shell so it's when it's right

- [00:54:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3267) so it's when it's right it will be

- [00:54:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3269) it will be like this okay

- [00:54:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3279) and current location is not valid because it is expecting

- [00:54:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3283) not valid because it is expecting a list

- [00:54:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3287) um therefore we will give it as an empty

- [00:54:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3289) therefore we will give it as an empty list which will generally have only

- [00:54:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3291) list which will generally have only current location okay

- [00:54:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3294) current location okay now time to debug and see whether our

- [00:54:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3297) now time to debug and see whether our algorithm will work or not

- [00:55:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3302) algorithm will work or not all right okay we have an error which is

- [00:55:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3306) all right okay we have an error which is yeah we changed the

- [00:55:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3308) yeah we changed the name so it will

- [00:55:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3309) name so it will change it here too

- [00:55:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3320) okay yes

- [00:55:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3321) yes so the first location is

- [00:55:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3324) so the first location is uh

- [00:55:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3325) uh 741

- [00:55:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3327) 741 and we are in the root one okay which

- [00:55:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3330) and we are in the root one okay which route is root one

- [00:55:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3333) route is root one let's first find it

- [00:55:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3335) let's first find it starfall town it is where we are

- [00:55:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3338) starfall town it is where we are and the first possible location is that

- [00:55:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3341) and the first possible location is that it has

- [00:55:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3342) it has found

- [00:55:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3344) found not here

- [00:55:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3354) that is possible to reach for 741

- [00:55:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3358) for 741 and where could it be 741

- [00:56:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3364) here okay currently the algorithm is checking

- [00:56:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3367) okay currently the algorithm is checking this location

- [00:56:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3368) this location so the top is not movable

- [00:56:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3372) so the top is not movable left is not removable but right is

- [00:56:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3375) left is not removable but right is movable

- [00:56:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3381) so let's enter inside our method call with

- [00:56:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3382) with uh

- [00:56:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3384) uh step into

- [00:56:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3386) step into now we are here

- [00:56:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3388) now we are here and the last location is there

- [00:56:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3391) and the last location is there 741 the next stop location is

- [00:56:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3396) 741 the next stop location is 677 and

- [00:56:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3403) okay since it is top we won't recalculate next stop location

- [00:56:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3406) recalculate next stop location and we are going to have check locations

- [00:56:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3408) and we are going to have check locations as this one

- [00:56:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3410) as this one and the

- [00:56:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3411) and the our

- [00:56:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3412) our more raw parallel mappings is empty

- [00:56:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3416) more raw parallel mappings is empty so it checks whether it contains

- [00:56:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3419) so it checks whether it contains this

- [00:57:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3422) this oh yeah yeah we have an error here

- [00:57:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3429) or not average okay and it will check whether the types is

- [00:57:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3432) and it will check whether the types is whether any of them yes it is therefore

- [00:57:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3435) whether any of them yes it is therefore it will return

- [00:57:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3437) it will return and it will continue with the next

- [00:57:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3439) and it will continue with the next direction which is right and in the

- [00:57:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3441) direction which is right and in the right

- [00:57:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3442) right yes it should be

- [00:57:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3444) yes it should be with a

- [00:57:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3446) with a possible

- [00:57:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3449) possible okay now the

- [00:57:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3451) okay now the new location will be

- [00:57:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3453) new location will be 742

- [00:57:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3456) 742 and it will edit

- [00:57:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3460) as yeah it is added to our

- [00:57:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3463) yeah it is added to our uh

- [00:57:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3465) uh patting but as you can see it is false

- [00:57:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3467) patting but as you can see it is false because we still didn't reach one of the

- [00:57:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3471) because we still didn't reach one of the monster hunting areas

- [00:57:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3474) monster hunting areas which are

- [00:57:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3475) which are uh

- [00:57:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3476) uh for example in this map this

- [00:57:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3478) for example in this map this uh

- [00:58:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3480) uh grass area okay we got a monster yes

- [00:58:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3484) grass area okay we got a monster yes all right let's continue

- [00:58:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3486) all right let's continue now it will call

- [00:58:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3492) right but yeah we have a mistake here

- [00:58:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3495) yeah we have a mistake here um

- [00:58:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3497) um we should call every direction

- [00:58:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3500) we should call every direction not only right

- [00:58:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3502) not only right because for each newly found direction

- [00:58:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3506) because for each newly found direction yeah we need to call all of them

- [00:58:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3509) yeah we need to call all of them so this will be

- [00:58:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3515) like this

- [00:58:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3522) and the current location will change with

- [00:58:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3524) with this

- [00:58:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3531) and column count will be changed with this and

- [00:58:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3533) this and yeah

- [00:58:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3535) yeah okay

- [00:58:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3536) okay so

- [00:58:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3538) so let's do fifth continue and see

- [00:59:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3545) there we go okay let's come

- [00:59:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3547) okay let's come let's continue until here

- [00:59:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3559) okay so uh the new checking one is 742 with the direction of top

- [00:59:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3563) 742 with the direction of top 742

- [00:59:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3565) 742 in top is as you can see

- [00:59:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3568) in top is as you can see not possible

- [00:59:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3570) not possible and the next one will be right and right

- [00:59:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3573) and the next one will be right and right is possible here

- [00:59:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3576) is possible here and then it will check

- [00:59:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3578) and then it will check top

- [00:59:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3579) top again

- [00:59:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3580) again because now we are in the

- [00:59:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3582) because now we are in the uh

- [00:59:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3584) uh 743

- [00:59:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3586) 743 uh let's see and verify it

- [00:59:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3590) uh let's see and verify it yes as you can see our petting is

- [00:59:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3593) yes as you can see our petting is getting composite currently our pending

- [00:59:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3595) getting composite currently our pending is this one

- [00:59:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3597) is this one and in this case top and right are

- [00:59:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3599) and in this case top and right are invalid

- [01:00:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3601) invalid so this will be not valid this will be

- [01:00:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3603) so this will be not valid this will be not valid and now it will continue with

- [01:00:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3606) not valid and now it will continue with the

- [01:00:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3608) the bottom

- [01:00:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3609) bottom so bottom is valid and

- [01:00:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3612) so bottom is valid and 807

- [01:00:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3614) 807 so let's see

- [01:00:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3616) so let's see yes and it will now check each one

- [01:00:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3619) yes and it will now check each one and in the top since we have

- [01:00:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3622) and in the top since we have previously check it it should now bypass

- [01:00:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3625) previously check it it should now bypass it

- [01:00:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3625) it let's answer

- [01:00:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3631) okay so our oh we have another mistake

- [01:00:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3635) oh we have another mistake which is you see we have duplicate

- [01:00:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3637) which is you see we have duplicate volume

- [01:00:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3638) volume so if our

- [01:00:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3640) so if our next location is existing in our

- [01:00:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3644) next location is existing in our uh

- [01:00:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3645) uh copy locations we just need to buy uh

- [01:00:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3648) copy locations we just need to buy uh continue i i mean return if

- [01:00:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3652) continue i i mean return if lst check locations contains

- [01:00:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3656) lst check locations contains next stop location

- [01:00:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3659) next stop location just return okay

- [01:01:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3662) just return okay all right now let's continue

- [01:01:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3673) okay so let's get to until the same

- [01:01:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3676) let's get to until the same yes

- [01:01:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3678) yes yes okay

- [01:01:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3681) yes okay you see with debugging you can only

- [01:01:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3683) you see with debugging you can only improve your programming or you can only

- [01:01:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3686) improve your programming or you can only fix your errors debugging is extremely

- [01:01:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3689) fix your errors debugging is extremely important when you are doing programming

- [01:01:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3692) important when you are doing programming so you need to learn how to do properly

- [01:01:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3694) so you need to learn how to do properly debug

- [01:01:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3695) debug uh

- [01:01:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3698) uh check value is okay

- [01:01:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3699) check value is okay now we are checking top and when we

- [01:01:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3702) now we are checking top and when we checked up it will just

- [01:01:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3704) checked up it will just uh

- [01:01:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3705) uh return since we fixed that error yes

- [01:01:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3707) return since we fixed that error yes return it now we will check

- [01:01:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3710) return it now we will check uh

- [01:01:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3712) uh right

- [01:01:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3714) right and right is in uh impossible

- [01:01:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3718) and right is in uh impossible not impossible but impossible

- [01:02:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3721) not impossible but impossible that means the user cannot

- [01:02:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3723) that means the user cannot move that so it will just continue so

- [01:02:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3726) move that so it will just continue so when it checks the rights now it will

- [01:02:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3729) when it checks the rights now it will check

- [01:02:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3731) check okay

- [01:02:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3732) okay yes

- [01:02:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3733) yes um 807 808 and 809 we are right there

- [01:02:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3744) which is 807 800 809 now it will continue with 873

- [01:02:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3757) yes 873 [Music]

- [01:02:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3758) [Music] and it will check the all possible

- [01:02:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3760) and it will check the all possible locations 937

- [01:02:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3767) which is here here and then it will check each all of

- [01:02:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3769) here and then it will check each all of the sides

- [01:02:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3771) the sides so instead of

- [01:02:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3773) so instead of going all let's see when it pounds

- [01:02:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3777) going all let's see when it pounds okay

- [01:02:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3779) okay and let's see the pattern okay so this

- [01:03:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3781) and let's see the pattern okay so this is the padding

- [01:03:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3797) okay let me reload this map as a star holder

- [01:03:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3807) so this is our starting point right

- [01:03:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3808) right here

- [01:03:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3809) here and the shortest path would be

- [01:03:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3811) and the shortest path would be these three

- [01:03:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3813) these three let's

- [01:03:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3813) let's copy them

- [01:03:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3816) copy them and

- [01:03:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3831) and for example here okay so this will be one of the paths that it

- [01:03:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3834) so this will be one of the paths that it would

- [01:03:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3839) find and let's see if this matching if it is the first font map

- [01:04:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3842) it is the first font map or not

- [01:04:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3845) or not okay

- [01:04:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3846) okay it's not the matching one but in the end

- [01:04:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3849) it's not the matching one but in the end we should obtain one of these because

- [01:04:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3852) we should obtain one of these because currently we are checking every possible

- [01:04:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3854) currently we are checking every possible way

- [01:04:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3856) way and therefore it may not be most optimal

- [01:04:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3859) and therefore it may not be most optimal one

- [01:04:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3865) oh uh okay

- [01:04:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3877) which is we are adding every direction to our patting list

- [01:04:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3881) to our patting list right

- [01:04:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3883) right but

- [01:04:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3889) we should generate yeah we should generate new lists

- [01:05:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3901) to be able to verify this first we need to run all

- [01:05:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3903) to run all and then see

- [01:05:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3905) and then see and how we gonna do that is

- [01:05:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3908) and how we gonna do that is very easy

- [01:05:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3910) very easy once all uh is checked

- [01:05:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3914) once all uh is checked all locations

- [01:05:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3915) all locations we will

- [01:05:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3916) we will uh sort it with

- [01:05:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3919) uh sort it with we will we are going to leave like this

- [01:05:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3921) we will we are going to leave like this verse okay

- [01:05:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3923) verse okay i'm going to write a link here

- [01:05:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3935) here that value equal to hello

- [01:05:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3940) uh and i'm then i need to sort it

- [01:05:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3959) okay so not map format but our

- [01:06:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3968) so dictionary then i will sort it

- [01:06:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3971) then i will sort it by the when i make conditional i need to

- [01:06:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3976) key and

- [01:06:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3978) and i need to redefine key value

- [01:06:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3981) i need to redefine key value okay like this

- [01:06:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3994) and then i need to sort it's okay orders by

- [01:06:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=3995) by okay order by pair dots key

- [01:06:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4009) not this length or count yes so this will be a scanning order

- [01:06:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4012) so this will be a scanning order and then i will

- [01:06:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4014) and then i will need to

- [01:07:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4022) okay this will give me uh only true patterns

- [01:07:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4024) only true patterns yes

- [01:07:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4026) yes okay let's

- [01:07:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4028) okay let's done

- [01:07:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4029) done i want to print them

- [01:07:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4036) i want to get a value of our

- [01:07:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4037) our uh

- [01:07:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4039) uh 741

- [01:07:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4042) 741 okay we are

- [01:07:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4044) okay we are where we are

- [01:07:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4046) where we are equal to this is just for

- [01:07:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4049) equal to this is just for uh debugging proposals

- [01:07:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4052) uh debugging proposals so that i can verify whether my

- [01:07:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4054) so that i can verify whether my methodology is working or not

- [01:07:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4057) methodology is working or not quiche equal not quiche

- [01:07:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4065) so how can i take it as key

- [01:07:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4067) key dot

- [01:07:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4068) dot first value equal to

- [01:07:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4071) first value equal to this one

- [01:07:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4073) this one and then i'm going to get it

- [01:07:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4076) and then i'm going to get it yeah now it should work

- [01:07:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4078) yeah now it should work i need to also get its value

- [01:08:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4086) for it yeah it should work let's try it

- [01:08:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4097) okay it's taking more round than i expected

- [01:08:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4099) expected we might have a

- [01:08:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4102) we might have a some memory here it's taking huge amount

- [01:08:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4105) some memory here it's taking huge amount of ram memory

- [01:08:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4113) okay let's put a break point and see where we are

- [01:08:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4135) yes yes we need to fix adding all locations

- [01:08:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4138) adding all locations you see we are adding all locations

- [01:09:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4141) you see we are adding all locations to our

- [01:09:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4144) to our list and which is not

- [01:09:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4147) list and which is not correct way

- [01:09:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4148) correct way for each location we need to have a

- [01:09:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4150) for each location we need to have a separate list

- [01:09:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4153) separate list so we want to uh going back and forth

- [01:09:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4156) so we want to uh going back and forth what i mean is let's say we started here

- [01:09:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4158) what i mean is let's say we started here we check it here then we check here in

- [01:09:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4161) we check it here then we check here in the same list so it is like being

- [01:09:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4163) the same list so it is like being uh

- [01:09:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4164) uh like this let me show

- [01:09:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4166) like this let me show first we start with

- [01:09:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4168) first we start with let's say first we start with

- [01:09:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4171) let's say first we start with this one uh

- [01:09:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4172) this one uh 1178

- [01:09:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4174) 1178 then we check

- [01:09:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4176) then we check this one

- [01:09:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4177) this one 1188

- [01:09:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4184) 88 then we return and add this to the list like this

- [01:09:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4187) list like this you see it is extremely illogical

- [01:09:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4190) you see it is extremely illogical we also we only need to

- [01:09:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4193) we also we only need to have

- [01:09:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4194) have one direction we never should

- [01:09:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4197) one direction we never should go backwards okay

- [01:10:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4207) we never need we never should go backwards

- [01:10:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4210) backwards uh

- [01:10:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4211) uh how can we fix that that's a really good

- [01:10:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4214) how can we fix that that's a really good uh

- [01:10:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4216) uh question

- [01:10:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4244) okay in each case maybe we shouldn't call all of them but only call the

- [01:10:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4246) call all of them but only call the direction that we came yeah

- [01:10:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4249) direction that we came yeah now it may fix it

- [01:10:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4257) i'm not sure but we need to test it out it could be as the first way that we

- [01:10:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4259) it could be as the first way that we have written it as

- [01:11:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4267) and we will just give it

- [01:11:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4274) oh we don't even need this just copy paste this

- [01:11:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4276) paste this and put this here

- [01:11:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4279) and put this here and let's see if this will fix

- [01:11:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4281) and let's see if this will fix probably it will fix but i need to test

- [01:11:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4287) okay [Music]

- [01:11:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4289) [Music] let's hope it works

- [01:11:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4292) let's hope it works yes yes with only 600 megabytes

- [01:11:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4296) yes yes with only 600 megabytes we found pads

- [01:11:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4298) we found pads and in our path we should have one year

- [01:11:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4310) okay wow this is weird

- [01:11:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4316) okay it found all the patterns but we only need

- [01:12:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4328) okay this is weird why because this shouldn't be here because it's false

- [01:12:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4341) probably i need to generate a new one because when we do two dictionary i need

- [01:12:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4343) because when we do two dictionary i need to generate a new dictionary

- [01:12:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4346) to generate a new dictionary yes that is the

- [01:12:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4347) yes that is the reason

- [01:12:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4348) reason and from this i need to sort it here now

- [01:12:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4351) and from this i need to sort it here now it will work

- [01:12:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4356) because these two dictionary will generate a new dictionary

- [01:12:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4358) generate a new dictionary yes it it returns a dictionary not sort

- [01:12:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4361) yes it it returns a dictionary not sort already existing one

- [01:12:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4363) already existing one now we should have only

- [01:12:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4370) one but we don't have any

- [01:12:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4372) we don't have any now this is the earth let's see the name

- [01:12:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4374) now this is the earth let's see the name dictionary

- [01:12:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4379) okay it has none why

- [01:13:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4397) okay we are here

- [01:13:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4398) we are here and it didn't find any

- [01:13:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4430) okay we need to prevent backwards so this is not the way working

- [01:13:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4433) this is not the way working okay we need to modify i think

- [01:13:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4437) okay we need to modify i think next location think

- [01:14:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4455) we have started from here

- [01:14:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4461) we did for bottom like this and then it came here

- [01:14:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4468) so the if if there is a value that is bigger than

- [01:14:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4476) the name here then it means that it is going backwards

- [01:14:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4479) then it means that it is going backwards right

- [01:14:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4487) may that happen for example here here here

- [01:14:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4498) let's say the user is here i mean let's say here it need to go

- [01:15:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4524) yes that logic still wouldn't work

- [01:15:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4535) after it checks like let's say here i need i shouldn't check here

- [01:15:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4539) need i shouldn't check here it should be a separate list because it

- [01:15:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4541) it should be a separate list because it can be accessed from here

- [01:16:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4595) for so many values

- [01:16:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4603) okay i think i have a logical uh fix for this it is not the best way but

- [01:16:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4608) fix for this it is not the best way but when we think about

- [01:16:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4610) when we think about the most

- [01:16:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4615) distant location

- [01:16:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4617) location that could be reached from let's say

- [01:17:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4620) that could be reached from let's say here to here won't be equal to

- [01:17:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4628) like this right no we don't allow that

- [01:17:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4631) no we don't allow that so it can be

- [01:17:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4637) like this yeah

- [01:17:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4638) yeah uh so let's calculate it as

- [01:17:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4642) uh so let's calculate it as for example here

- [01:17:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4651) yeah it can be maximum up to a column plus row count

- [01:17:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4653) plus row count so if the length of the list

- [01:17:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4656) so if the length of the list bypasses that we can just return like

- [01:17:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4660) bypasses that we can just return like this if

- [01:17:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4662) this if count

- [01:17:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4668) okay well it's

- [01:17:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4670) well it's count

- [01:17:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4672) count bigger than column plus

- [01:17:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4675) bigger than column plus all right uh the video got paused and

- [01:17:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4678) all right uh the video got paused and meanwhile i have figured out

- [01:18:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4681) meanwhile i have figured out uh the problem we have and the solution

- [01:18:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4684) uh the problem we have and the solution so we are going to keep extra

- [01:18:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4686) so we are going to keep extra information uh regarding that whether

- [01:18:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4690) information uh regarding that whether we are moving to right or top or down or

- [01:18:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4694) we are moving to right or top or down or left

- [01:18:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4695) left so if we are moving right

- [01:18:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4697) so if we are moving right then we won't allow algorithm to

- [01:18:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4700) then we won't allow algorithm to go left or we are going top then we

- [01:18:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4702) go left or we are going top then we won't allow algorithm before bottom okay

- [01:18:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4706) won't allow algorithm before bottom okay and so how we are going to

- [01:18:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4709) and so how we are going to keep that information

- [01:18:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4716) let's see how can we do that so we have a

- [01:18:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4718) a list list

- [01:18:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4719) list list to keep

- [01:18:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4721) to keep our uh checking locations

- [01:18:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4725) our uh checking locations and we can also uh

- [01:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4731) let's see what how can we do

- [01:18:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4739) we can also pass a class object

- [01:19:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4742) pass a class object to keep the

- [01:19:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4751) all right let's

- [01:19:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4752) let's let's try some uh

- [01:19:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4755) let's try some uh plus

- [01:19:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4756) plus one

- [01:19:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4761) cs jordan

- [01:19:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4762) jordan direction

- [01:19:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4769) okay and in this case we can have

- [01:19:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4781) let's see we can have 4

- [01:19:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4784) we can have 4 moving parameters

- [01:19:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4786) moving parameters okay left

- [01:19:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4794) okay left right bottom top

- [01:19:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4797) left right bottom top right

- [01:19:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4798) right yeah

- [01:19:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4799) yeah pop

- [01:20:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4801) pop yeah

- [01:20:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4806) i'm not sure if this will work but we can try

- [01:20:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4808) we can try and this parameter will be generated for

- [01:20:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4810) and this parameter will be generated for each

- [01:20:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4812) each current location

- [01:20:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4817) uh actually we should generate it inside

- [01:20:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4820) actually we should generate it inside perhaps here yes or no

- [01:20:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4823) perhaps here yes or no let me think

- [01:20:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4826) let me think uh about it let's generate it here and

- [01:20:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4830) uh about it let's generate it here and see chosen a

- [01:20:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4833) see chosen a direction

- [01:20:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4835) direction let's name it like that right

- [01:20:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4855) let's um

- [01:21:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4863) let's write the conditions if csr direction

- [01:21:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4866) csr direction via bottom

- [01:21:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4867) via bottom rule then return

- [01:21:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4870) rule then return okay as

- [01:21:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4878) we are tap equipment through okay

- [01:21:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4880) okay yeah i think this should work

- [01:21:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4882) yeah i think this should work then

- [01:21:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4883) then if

- [01:21:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4885) if here left is true then we are right is

- [01:21:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4889) here left is true then we are right is true

- [01:21:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4900) and then let's see

- [01:21:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4903) then let's see if bl uh

- [01:21:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4905) if bl uh top is true

- [01:21:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4907) top is true and return otherwise we and bottom is

- [01:21:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4910) and return otherwise we and bottom is true

- [01:21:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4912) true yeah this should prevent

- [01:21:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4919) of unnecessary

- [01:22:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4925) moments okay so let's

- [01:22:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4926) so let's see if our returns are

- [01:22:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4929) see if our returns are working

- [01:22:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4943) our major major problem oh we also need to

- [01:22:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4951) provide this since this is a reference

- [01:22:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4953) reference uh therefore we should have an instance

- [01:22:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4956) uh therefore we should have an instance of this reference

- [01:22:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4958) of this reference and to be able to have that

- [01:22:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4963) and to be able to have that okay um

- [01:23:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4981) i'm not sure but let's just provide this and see if it is working or not

- [01:23:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4984) and see if it is working or not maybe we need a new instance of that but

- [01:23:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4987) maybe we need a new instance of that but i'm not sure

- [01:23:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=4998) okay we have a patch did come quickly okay

- [01:23:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5000) did come quickly okay finally we have something

- [01:23:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5006) uh but

- [01:23:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5007) but i'm not sure if this is what we are

- [01:23:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5009) i'm not sure if this is what we are looking for

- [01:23:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5019) let's see there's current no non-public members

- [01:23:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5024) okay so

- [01:23:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5025) so okay

- [01:23:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5026) okay yes

- [01:23:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5027) yes yes it's kind of looking good

- [01:23:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5031) yes it's kind of looking good and

- [01:23:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5033) and are they duplicate they shouldn't be

- [01:23:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5036) are they duplicate they shouldn't be okay let's write them into a

- [01:24:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5040) okay let's write them into a let's format them so we can see

- [01:24:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5046) for each we are by the vr pet is type of key

- [01:24:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5049) we are by the vr pet is type of key value appear and list

- [01:24:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5052) value appear and list yeah

- [01:24:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5054) yeah okay um so

- [01:24:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5057) okay um so q value pairs

- [01:24:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5059) q value pairs and it has list okay

- [01:24:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5061) and it has list okay so

- [01:24:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5062) so uh as our path

- [01:24:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5064) uh as our path it go to uh value

- [01:24:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5067) it go to uh value [Music]

- [01:24:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5068) [Music] and let's just leave that join

- [01:24:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5081) like this okay and let's put every point here too

- [01:24:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5091) okay and

- [01:24:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5093) and let's run our pathfinding

- [01:24:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5096) let's run our pathfinding and let's see how our path looking

- [01:24:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5099) and let's see how our path looking oh

- [01:25:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5100) oh not the value but

- [01:25:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5105) yes key we need to

- [01:25:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5107) we need to [Music]

- [01:25:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5109) [Music] join the key by the way i think this is

- [01:25:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5114) join the key by the way i think this is 21

- [01:25:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5129) okay 21 and yes

- [01:25:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5132) and yes so this is the

- [01:25:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5133) so this is the shortest path our algorithm found

- [01:25:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5142) and let's see if it is true this one then

- [01:25:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5144) this one then it goes to here i will um

- [01:25:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5152) i will just highlight it all right one second

- [01:25:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5155) all right one second this is the

- [01:25:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5156) this is the circle town

- [01:26:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5163) okay so here we start one moment it's taking a while okay

- [01:26:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5167) one moment it's taking a while okay then we go here

- [01:26:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5169) then we go here and then here and then here's

- [01:26:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5173) and then here and then here's done here's here's

- [01:26:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5175) done here's here's here's yes

- [01:26:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5177) here's yes yes true

- [01:26:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5179) yes true and here's

- [01:26:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5181) and here's and here i am matching the values here

- [01:26:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5183) and here i am matching the values here and here if you are watching

- [01:26:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5186) and here if you are watching this this this this this this

- [01:26:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5195) and yes as you can see this is one of the shortest paths it has

- [01:26:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5197) this is one of the shortest paths it has found

- [01:26:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5200) found uh

- [01:26:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5201) uh but it has found many other paths as

- [01:26:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5203) but it has found many other paths as well

- [01:26:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5204) well for example let's see

- [01:26:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5207) for example let's see how many pets it has found actually

- [01:26:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5211) how many pets it has found actually one moment let me check

- [01:26:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5213) one moment let me check okay it has found

- [01:26:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5215) okay it has found four thousand

- [01:26:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5217) four thousand nine hundred sixteen pets

- [01:26:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5219) nine hundred sixteen pets but only one of them is uh the shortest

- [01:27:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5222) but only one of them is uh the shortest one

- [01:27:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5224) one um

- [01:27:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5226) um can we export this to the exile i wonder

- [01:27:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5230) can we export this to the exile i wonder oh it doesn't show the values

- [01:27:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5232) oh it doesn't show the values yeah

- [01:27:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5233) yeah we can't see

- [01:27:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5236) we can't see the value is here but we need them

- [01:27:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5240) the value is here but we need them actually

- [01:27:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5242) actually we could only select

- [01:27:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5251) 13 part of them so we could export exported banners dot

- [01:27:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5253) exported banners dot open key

- [01:27:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5255) open key yes

- [01:27:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5256) yes by the way this will change in that case

- [01:27:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5259) by the way this will change in that case it may be like this

- [01:27:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5261) it may be like this okay let's see

- [01:27:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5272) all right and now when we click weave

- [01:27:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5275) now when we click weave okay it shows the list count 21 22 23 24

- [01:28:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5281) okay it shows the list count 21 22 23 24 23 yes

- [01:28:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5283) 23 yes the um

- [01:28:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5286) the um biggest pet has 23 elements

- [01:28:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5291) biggest pet has 23 elements okay and

- [01:28:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5293) okay and yes now we can see the elements like

- [01:28:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5295) yes now we can see the elements like this

- [01:28:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5297) this as you can see they are probably

- [01:28:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5299) as you can see they are probably slightly different paths

- [01:28:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5302) slightly different paths but uh this is the shortest path

- [01:28:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5305) but uh this is the shortest path let's also

- [01:28:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5306) let's also uh see the shortest path from here yes i

- [01:28:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5309) uh see the shortest path from here yes i wonder that

- [01:28:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5311) wonder that okay i will change the algorithm

- [01:28:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5315) okay i will change the algorithm to be square and

- [01:28:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5318) to be square and let's see what we are going to get

- [01:28:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5328) by the way it will take a while until we get there

- [01:28:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5330) get there okay do we have a memory leak somewhere

- [01:28:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5339) okay i think our object is getting

- [01:29:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5341) object is getting bigger which object if you ask

- [01:29:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5345) bigger which object if you ask uh it's probably terrible routing have

- [01:29:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5347) uh it's probably terrible routing have roots mappings

- [01:29:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5350) roots mappings okay let's see what's its

- [01:29:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5357) size okay my video may get stopped as well if

- [01:29:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5359) okay my video may get stopped as well if i hit the memory limits

- [01:29:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5370) okay still didn't

- [01:29:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5372) still didn't get that let's put a breakpoint here

- [01:29:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5376) get that let's put a breakpoint here okay so

- [01:29:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5378) okay so wow this has 17 million

- [01:29:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5382) wow this has 17 million 94.

- [01:29:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5399) a solution for this would be keeping them in database and

- [01:30:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5402) them in database and indexing them

- [01:30:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5409) but that would slow down so how can we further tune

- [01:30:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5415) i think yeah i think i will just

- [01:30:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5418) yeah i think i will just reset this for every location and then

- [01:30:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5421) reset this for every location and then it should work perish

- [01:30:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5431) so it won't take that much ram memory it will be a little bit loose um

- [01:30:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5434) it will be a little bit loose um slow perhaps it won't be even slower

- [01:30:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5438) slow perhaps it won't be even slower okay

- [01:30:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5457) okay we are still using too many

- [01:31:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5461) we are still using too many [Music]

- [01:31:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5464) [Music] memory i don't know why

- [01:31:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5467) memory i don't know why oh this is still going to be why

- [01:31:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5494) you see they have different number of path values

- [01:31:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5505) okay perhaps

- [01:31:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5511) how can we further improve it

- [01:32:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5520) this is weird why it is taking this much time

- [01:32:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5532) this is not what i expect okay

- [01:32:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5534) what i expect okay this one has fifty thousand

- [01:32:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5538) this one has fifty thousand then twenty thousand

- [01:32:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5540) then twenty thousand if five thousand

- [01:32:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5543) if five thousand yeah some of them are really low

- [01:32:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5547) yeah some of them are really low and why that happened okay this one is

- [01:32:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5549) and why that happened okay this one is taking more time

- [01:32:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5556) i mean what what changes so we probably have another error

- [01:32:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5559) so we probably have another error somewhere

- [01:32:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5573) oh i have an idea i think we can keep the shortest

- [01:32:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5574) the shortest and

- [01:32:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5576) and and if uh

- [01:32:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5578) and if uh value exceeds it then we can

- [01:33:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5581) value exceeds it then we can just stop the algorithm yes

- [01:33:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5585) just stop the algorithm yes that would

- [01:33:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5586) that would make our algorithm faster so let's add

- [01:33:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5591) make our algorithm faster so let's add shortest

- [01:33:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5593) shortest pound let's set it as

- [01:33:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5596) pound let's set it as 999

- [01:33:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5599) 999 okay and

- [01:33:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5606) yeah this should make it uh easier if um counts legal numbers are equal to

- [01:33:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5610) um counts legal numbers are equal to shortest founds

- [01:33:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5612) shortest founds in

- [01:33:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5616) cs shooting direction shortest phone than which one yes

- [01:33:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5621) shortest phone than which one yes i think this will make our

- [01:33:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5629) application even faster then whenever we find

- [01:33:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5631) then whenever we find uh

- [01:33:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5633) uh here as true

- [01:33:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5635) here as true we will add yeah shortest font equal to

- [01:34:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5642) okay count yes

- [01:34:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5645) count yes by the way if this is only

- [01:34:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5680) okay this is working it is not calling off

- [01:34:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5682) off metal again and again this is a huge

- [01:34:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5684) metal again and again this is a huge improvement but

- [01:34:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5687) improvement but still we are

- [01:34:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5688) still we are slow because

- [01:34:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5689) slow because 8

- [01:34:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5691) 8 million

- [01:34:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5692) million 522 is

- [01:34:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5697) okay we have true at 30

- [01:35:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5706) then we have another other a lot of charities which is making our

- [01:35:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5708) charities which is making our application

- [01:35:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5714) false i know why i know why

- [01:35:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5717) i know why i know why because we need to add this check here

- [01:35:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5720) because we need to add this check here yes now it will make it much faster

- [01:35:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5724) yes now it will make it much faster even faster actually

- [01:35:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5726) even faster actually okay let's try again

- [01:35:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5736) okay 33

- [01:35:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5738) 33 13

- [01:35:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5739) 13 3000 yes nice much better

- [01:35:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5743) 3000 yes nice much better and

- [01:35:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5748) what we want to find is this one

- [01:35:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5750) find is this one if

- [01:35:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5751) if equal to

- [01:36:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5762) okay okay let's see

- [01:36:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5770) let's see how fast we will get that by the way in the debug mode it is slower

- [01:36:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5772) the way in the debug mode it is slower but when i run without debug mode it

- [01:36:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5775) but when i run without debug mode it will run faster

- [01:36:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5781) we are getting a lot of garbage collection

- [01:36:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5790) but the ram memory is increasing okay it is a huge garbage collection here

- [01:36:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5793) is a huge garbage collection here that means that we will never get out of

- [01:36:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5796) that means that we will never get out of uh

- [01:36:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5797) uh think

- [01:36:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5811) okay we are still getting increasing here stratos

- [01:37:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5838) this is still slower than i expected um

- [01:37:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5862) okay 29 yes that is why it is continuing to check

- [01:37:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5864) to check okay

- [01:38:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5887) random usage keep increasing this is not this should not happen

- [01:38:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5907) this happens because currently we are checking every possible

- [01:38:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5911) currently we are checking every possible uh package for example it starts here

- [01:38:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5914) uh package for example it starts here then it calls check up to here as well

- [01:38:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5916) then it calls check up to here as well here here everywhere

- [01:38:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5918) here here everywhere it is checking everywhere and we are not

- [01:38:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5921) it is checking everywhere and we are not just stopping

- [01:38:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5923) just stopping whenever we find one true

- [01:38:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5928) so let's run the application without

- [01:38:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5931) let's run the application without debugging and see

- [01:38:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5933) debugging and see how it happens

- [01:38:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5935) how it happens i will just

- [01:38:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5938) i will just write it

- [01:38:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5939) write it to the file to verify whether our method

- [01:39:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5942) to the file to verify whether our method is working or not

- [01:39:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5944) is working or not we are making lots of unnecessary

- [01:39:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5948) we are making lots of unnecessary calculation

- [01:39:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5951) calculation to find the shortest path since this

- [01:39:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5953) to find the shortest path since this will run only one time

- [01:39:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5955) will run only one time uh that shouldn't be very much problem

- [01:39:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5960) uh that shouldn't be very much problem right or

- [01:39:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5962) right or let's say text

- [01:39:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5965) let's say text palms

- [01:39:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5967) palms txt

- [01:39:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5968) txt [Music]

- [01:39:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5969) [Music] sr pads

- [01:39:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5971) sr pads okay

- [01:39:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5973) okay then i will just return

- [01:39:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5976) then i will just return and actually for returning let's just

- [01:39:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5979) and actually for returning let's just pop a message box show

- [01:39:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5989) let's see if the speed will be faster i am also going to make the project

- [01:39:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5991) am also going to make the project targets

- [01:39:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5993) targets uh

- [01:39:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=5995) uh 64 platform so it should run even faster

- [01:40:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6001) 64 platform so it should run even faster okay i convert the application into 64

- [01:40:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6004) okay i convert the application into 64 bits

- [01:40:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6006) bits run without debugging

- [01:40:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6033) but currently we are not able to see where we are right

- [01:40:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6035) where we are right so let's

- [01:40:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6036) so let's uh

- [01:40:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6038) uh move our application into

- [01:40:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6045) tasks multitrading in order to in order to do that

- [01:40:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6050) in order to in order to do that i am going to add some labels

- [01:40:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6054) i am going to add some labels okay this will show us current uh

- [01:40:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6057) okay this will show us current uh check it location

- [01:40:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6059) check it location current root id okay

- [01:41:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6070) and then i'm going to copy and paste it as

- [01:41:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6072) i'm going to copy and paste it as let's say

- [01:41:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6074) let's say current

- [01:41:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6075) current coordinates

- [01:41:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6085) and one more okay

- [01:41:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6086) okay dictionary

- [01:41:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6098) we are going to uh

- [01:41:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6099) uh update them with

- [01:41:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6102) update them with a

- [01:41:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6103) a task factory

- [01:41:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6109) involved in sharp

- [01:41:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6114) actually not transferred forward these patches

- [01:42:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6120) okay we are going to begin invoke by the way not in rogue

- [01:42:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6141) all right and where we are going to write them we are

- [01:42:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6143) where we are going to write them we are going to write them i think

- [01:42:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6152) we go like this okay

- [01:42:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6154) okay vbl and

- [01:42:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6157) vbl and content equal to

- [01:43:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6184) then what else we are going to write we are going to write

- [01:43:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6192) okay um the sub count

- [01:43:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6204) size and we are going to write the current

- [01:43:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6207) and we are going to write the current location let's write it here

- [01:43:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6210) location let's write it here we want location

- [01:43:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6216) and it can be here yes

- [01:43:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6219) yes okay

- [01:43:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6220) okay and we are not still done yet we need to

- [01:43:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6223) and we are not still done yet we need to move this into a new method

- [01:43:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6239) and we need to call this as a task so it won't block r

- [01:44:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6242) won't block r okay um

- [01:44:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6259) it won't block our main threads which is also running our interface so our

- [01:44:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6262) also running our interface so our interface won't get blocked

- [01:44:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6265) interface won't get blocked let's start

- [01:44:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6267) let's start and see whether it's working yes road

- [01:44:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6269) and see whether it's working yes road id1 current

- [01:44:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6272) id1 current coordinates okay

- [01:44:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6274) coordinates okay [Music]

- [01:44:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6281) okay we are blocked right now or we got an error why

- [01:45:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6310) yeah probably we try to update interface too fast

- [01:45:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6315) we try to update interface too fast in here

- [01:45:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6317) in here uh

- [01:45:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6318) uh so

- [01:45:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6320) so we should only update

- [01:45:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6323) we should only update if this is something

- [01:45:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6325) if this is something like somebody give

- [01:45:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6332) let's say count person one thousand equal to zero

- [01:45:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6339) yeah so we will only see per one thousand

- [01:45:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6342) so we will only see per one thousand because if you try to update interface

- [01:45:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6344) because if you try to update interface too fast it will still block

- [01:45:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6351) based on your computer power yes dictionary size is extremely fast as

- [01:45:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6355) yes dictionary size is extremely fast as you can see

- [01:45:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6357) you can see or we have to addiction size

- [01:46:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6363) yes because not current id but the the

- [01:46:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6366) because not current id but the the reaction size

- [01:46:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6369) reaction size if i current router id this will leave

- [01:46:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6372) if i current router id this will leave your current

- [01:46:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6373) your current coordinates yes now it should work

- [01:46:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6387) current location here the dictionary site is still too big

- [01:46:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6397) so we need further tuning probably yes we definitely need

- [01:46:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6401) tuning probably yes we definitely need further tuning

- [01:47:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6433) perhaps we can remove dictionary at all

- [01:47:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6435) at all because at this point i think

- [01:47:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6443) um this is only

- [01:47:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6456) slower so i will just remove these this

- [01:47:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6470) and let's see if this will make our application faster

- [01:48:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6493) we only keep the true

- [01:48:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6516) improve our speed with multi trading but we are already using one core fully

- [01:48:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6531) cpu core count we can start these directions as

- [01:48:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6534) we can start these directions as different

- [01:49:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6553) however it is it will be still too small

- [01:49:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6557) it is it will be still too small so

- [01:49:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6558) so which

- [01:49:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6559) which furthers

- [01:49:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6569) let's just print

- [01:49:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6571) print one of

- [01:49:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6572) one of let's just print them into the text file

- [01:49:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6575) let's just print them into the text file to see how they look okay

- [01:50:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6607) oh no it's not an okay we can just remove this

- [01:50:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6610) remove this okay so

- [01:50:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6625) print them after each

- [01:50:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6627) after each iteration

- [01:50:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6630) iteration inside here

- [01:50:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6632) inside here and how we're going to do that is

- [01:50:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6635) and how we're going to do that is name writers

- [01:50:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6644) the stream writer and the text file name will be

- [01:50:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6646) will be current location plus txt

- [01:51:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6667) okay and item dots key yes

- [01:51:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6669) key yes and don't join

- [01:51:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6680) okay we hit separator like this plus

- [01:51:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6687) top top and the items volume

- [01:51:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6695) okay i will make this and i will just flush it

- [01:51:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6697) flush it and close it

- [01:51:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6701) and close it i will also make

- [01:51:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6703) i will also make buttons through

- [01:51:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6709) all right let's start tight finding

- [01:51:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6719) okay and let's see what kind of values that we get

- [01:52:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6725) i didn't click the correct things open folder i think in here here here

- [01:52:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6731) open folder i think in here here here okay i will just open it with

- [01:52:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6733) okay i will just open it with yeah edit charge

- [01:52:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6736) yeah edit charge all right we see the package

- [01:52:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6764) it looks pretty good okay

- [01:52:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6767) pretty good okay here's

- [01:52:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6768) here's and here are they duplicate

- [01:52:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6779) but we can't have duplicates since it's a dictionary

- [01:53:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6781) a dictionary so there is something wrong

- [01:53:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6807) it can't be sure so this is this and this is this one

- [01:53:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6818) yes only one value is different as you can see

- [01:53:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6825) however how is this possible from 11 33

- [01:53:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6829) how is this possible from 11 33 it jumped

- [01:53:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6835) we have an algorithmic error probably 11 33

- [01:53:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6836) 33 where it is let's find it

- [01:54:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6842) 11 33

- [01:54:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6852) okay 11 33 is here it jumped into uh right

- [01:54:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6857) this place or

- [01:54:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6859) or this place

- [01:54:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6861) this place okay after

- [01:54:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6862) okay after 11

- [01:54:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6868) it jumps here okay from here it can also jump here yes

- [01:54:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6871) okay from here it can also jump here yes it is working correctly

- [01:54:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6873) it is working correctly so we are checking both this pads

- [01:54:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6876) so we are checking both this pads and this pad yes

- [01:54:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6879) and this pad yes it's not an air rush it is checking

- [01:54:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6881) it's not an air rush it is checking every possible

- [01:54:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6883) every possible combination

- [01:54:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6890) so how can we tune it furnish i think we have quite a bit

- [01:54:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6892) have quite a bit tune it

- [01:55:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6900) perhaps we can just stop whenever the first time we find true

- [01:55:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6907) actually it's fine through pretty quickly

- [01:55:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6917) or after that it shouldn't add these at all because we have two already yes this

- [01:55:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6920) all because we have two already yes this is some error

- [01:55:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6921) is some error that we can tune

- [01:55:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6924) that we can tune and which algorithmic error do we have

- [01:55:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6941) yes we are giving chosen direction to each patting and it is making the error

- [01:55:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6944) each patting and it is making the error problem

- [01:55:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6945) problem let's just change this

- [01:55:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=6951) and let's see what kind of output we will get this time

- [01:56:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7009) okay this is fine true but this the others one difference

- [01:57:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7020) i think instead of this we are going to keep

- [01:57:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7027) since we are running a single threaded um

- [01:57:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7032) actually i will just remove this from here

- [01:57:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7034) here and i'm going to have

- [01:57:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7042) a global version in case we want to uh change it into a multithreaded

- [01:57:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7046) uh change it into a multithreaded application

- [01:57:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7047) application so it is going to keep

- [01:57:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7049) so it is going to keep root id as in 16

- [01:57:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7052) root id as in 16 and it's going to keep the short spawn

- [01:57:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7055) and it's going to keep the short spawn i think it doesn't matter

- [01:57:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7069) how we were checking it we were changing it here

- [01:57:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7070) it here so we are going to go if

- [01:57:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7072) so we are going to go if contains key

- [01:57:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7077) root id then

- [01:58:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7092) okay actually it will just check its value

- [01:58:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7096) actually it will just check its value and

- [01:58:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7097) and if not

- [01:58:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7099) if not if it doesn't contains

- [01:58:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7114) equal to this one you won't return of course

- [01:58:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7117) you won't return of course as

- [01:58:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7134) account yes

- [01:58:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7135) yes now

- [01:59:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7148) oh by the way this wouldn't work either because we all we don't only need

- [01:59:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7167) we also need to keep the location therefore this will be location not the

- [01:59:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7171) therefore this will be location not the road id based

- [01:59:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7180) so it will be each time reset here i defined it here so that i can access

- [01:59:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7182) i defined it here so that i can access it in other places as well

- [01:59:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7186) it in other places as well okay and

- [01:59:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7187) okay and [Music]

- [01:59:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7189) [Music] let's see if it will work now

- [01:59:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7191) let's see if it will work now i am resetting it with each

- [01:59:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7194) i am resetting it with each location

- [02:00:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7201) ah i will resonate with each road might be location yes

- [02:00:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7203) be location yes okay

- [02:00:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7205) okay because we are already keeping

- [02:00:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7207) because we are already keeping uh

- [02:00:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7208) uh the current location

- [02:00:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7210) the current location which will be

- [02:00:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7219) okay to have the current location i can just get the

- [02:00:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7221) just get the first one

- [02:00:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7238) like this and here and what's also ideal about

- [02:00:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7240) and here and what's also ideal about this

- [02:00:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7242) this actually um

- [02:00:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7244) actually um that's the funny thing

- [02:00:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7247) that's the funny thing um it's an origin

- [02:00:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7254) it's like this and instead of copy pasting that

- [02:00:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7257) and instead of copy pasting that variable

- [02:00:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7259) variable checking

- [02:01:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7265) all right and now

- [02:01:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7269) and now i think it will work

- [02:01:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7284) okay just reload

- [02:01:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7290) yes now uh

- [02:01:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7291) uh the first true one is found here

- [02:01:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7293) the first true one is found here okay but i still see equal number of

- [02:01:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7298) okay but i still see equal number of uh elements are

- [02:01:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7300) uh elements are processed

- [02:01:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7307) yeah but not the bigger ones so it's okay

- [02:01:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7308) okay but still we can make a further tuning

- [02:01:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7311) but still we can make a further tuning beat

- [02:01:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7318) it will be a kind of tuning but it will be better

- [02:02:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7354) interesting okay anyway so how many one there are how many there

- [02:02:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7357) so how many one there are how many there are

- [02:02:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7359) are yes as you can see we are checking each

- [02:02:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7363) yes as you can see we are checking each direction and it has 33 000

- [02:02:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7371) and let's see how fast this time our application will go wow still too many

- [02:03:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7395) okay i am going to further tune it ha if you ask

- [02:03:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7409) okay uh let's just stop this and i will explain

- [02:03:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7411) let's just stop this and i will explain you how we are going to further tune it

- [02:03:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7420) all right uh starfall

- [02:03:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7421) starfall where it is

- [02:03:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7423) where it is here

- [02:03:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7428) so let's say from this point we started and we found

- [02:03:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7430) from this point we started and we found this path right

- [02:03:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7433) this path right so we have this

- [02:03:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7435) so we have this let's copy and paste them

- [02:03:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7438) let's copy and paste them now we are checking this one starting

- [02:04:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7441) now we are checking this one starting point

- [02:04:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7442) point we already have a shortest path

- [02:04:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7452) that includes this right this is the shortest path and from that

- [02:04:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7454) this is the shortest path and from that point

- [02:04:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7464) we can just cut true

- [02:04:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7471) if we already have a shortcut pad calculated yes yes this should work much

- [02:04:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7473) calculated yes yes this should work much better if you ask me

- [02:04:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7483) okay ah so however we're gonna do that yes

- [02:04:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7489) and the okay

- [02:04:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7490) okay let's see

- [02:05:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7500) we are not going to reset it here because we are going to

- [02:05:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7510) yeah let's rename this shortest phone paths

- [02:05:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7514) let's rename this shortest phone paths counts

- [02:05:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7515) counts so we won't get confused

- [02:05:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7526) okay i have renamed it and

- [02:05:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7528) and so let's say

- [02:05:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7530) so let's say i have a location and i need to check

- [02:05:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7534) i have a location and i need to check whether

- [02:05:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7535) whether any of my

- [02:05:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7542) uh dictionary content actually after each

- [02:05:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7545) dictionary content actually after each route

- [02:05:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7548) route i can just split them and add them as a

- [02:05:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7552) i can just split them and add them as a new one yes

- [02:06:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7562) and that would make my application much

- [02:06:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7565) my application much faster okay

- [02:06:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7567) faster okay so whenever we find a true

- [02:06:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7576) like here and if it is

- [02:06:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7578) and if it is the shortest

- [02:06:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7580) the shortest right

- [02:06:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7581) right so this is the shortest

- [02:06:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7584) so this is the shortest uh what i am going to do is i am going

- [02:06:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7588) uh what i am going to do is i am going to for each

- [02:06:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7596) okay let's think about this

- [02:06:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7597) about this i will start

- [02:06:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7599) i will start from this location

- [02:06:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7605) i will add the rest then i will remove this yeah

- [02:06:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7614) uh okay i will start from this index

- [02:06:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7616) okay i will start from this index address this index address yes so it

- [02:06:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7619) address this index address yes so it will be like this for

- [02:07:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7621) will be like this for uh then

- [02:07:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7623) uh then locations count

- [02:07:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7629) and and and and

- [02:07:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7647) let's see how can we make it faster i can also have another dictionary that

- [02:07:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7650) i can also have another dictionary that will hold

- [02:08:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7686) yes but it would scan the entire memory

- [02:08:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7689) but it would scan the entire memory so

- [02:08:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7695) i'm not sure if it will work or not let's see probably it would work

- [02:08:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7698) let's see probably it would work okay lsd check

- [02:08:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7700) okay lsd check locations locations.com it will start

- [02:08:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7703) locations locations.com it will start from the first index

- [02:08:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7708) and we will get

- [02:08:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7718) as it will be list

- [02:08:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7719) list okay each

- [02:08:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7721) okay each listing time will be equal to

- [02:08:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7733) so index will be i okay and the count will be

- [02:09:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7742) not like this of course count minus i

- [02:09:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7744) i let's see if it's right with correct or

- [02:09:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7747) let's see if it's right with correct or not

- [02:09:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7758) okay this is currently empty we have 21 starting from 741

- [02:09:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7766) we have 20 starting from this okay it looks great and in the next

- [02:09:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7768) okay it looks great and in the next store

- [02:09:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7770) store we need to start here

- [02:09:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7772) we need to start here that's 806

- [02:09:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7776) that's 806 okay we start from 806 and continue

- [02:09:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7783) okay we start from yes

- [02:09:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7787) we start from yes all right so

- [02:09:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7788) all right so these are the

- [02:09:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7790) these are the currently found

- [02:09:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7792) currently found shortest paths

- [02:09:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7796) shortest paths for each

- [02:09:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7798) for each location okay i will just make it easier

- [02:10:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7802) location okay i will just make it easier it's not a more complex and harder one i

- [02:10:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7805) it's not a more complex and harder one i mean an easy solution

- [02:10:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7808) mean an easy solution for that

- [02:10:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7810) for that i am going to

- [02:10:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7832) yes yes it's very logical uh i even thought a more

- [02:10:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7834) thought a more faster logical way which is

- [02:10:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7838) faster logical way which is if

- [02:10:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7839) if contains key

- [02:10:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7842) contains key this one

- [02:10:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7849) by the way does this generate a new one probably

- [02:10:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7851) probably equal to pulse

- [02:11:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7862) and true okay not only this

- [02:11:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7864) not only this we are also going to check

- [02:11:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7873) if contains key

- [02:11:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7876) contains key so this will be containing

- [02:11:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7879) so this will be containing the first element of this key

- [02:11:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7887) include calls and just edit as a purchase pad

- [02:11:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7889) purchase pad yes this should

- [02:11:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7890) yes this should this will make our application extremely

- [02:11:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7893) this will make our application extremely fast

- [02:11:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7894) fast oh if you ask

- [02:11:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7897) oh if you ask okay let's say

- [02:11:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7899) okay let's say it's

- [02:11:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7904) shortest blog

- [02:11:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7910) post okay just

- [02:11:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7912) okay just add

- [02:11:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7914) add this and

- [02:11:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7917) this and this one count

- [02:11:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7918) this one count by the way if you can't understand this

- [02:12:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7921) by the way if you can't understand this then you need to do debugging and check

- [02:12:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7924) then you need to do debugging and check each one values i will just show in a

- [02:12:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7926) each one values i will just show in a minute

- [02:12:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7932) all right else else we will just

- [02:12:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7933) we will just update the value

- [02:12:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7935) update the value out if you ask

- [02:12:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7938) out if you ask if

- [02:12:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7941) if for smoke

- [02:12:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7944) for smoke is

- [02:12:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7945) is bigger

- [02:12:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7947) bigger than

- [02:12:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7949) than count

- [02:12:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7961) this one i'm not sure if we if we will ever get here but

- [02:12:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7963) ever get here but let's just put some breakpoints to and

- [02:12:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7966) let's just put some breakpoints to and explain to you okay

- [02:12:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7973) all right how many times did we create i must choose

- [02:12:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7975) must choose i think we did click oh yes

- [02:12:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7977) i think we did click oh yes two times

- [02:13:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7986) okay so we have found a shortest path now i am going to add each one of these

- [02:13:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7988) now i am going to add each one of these as a new shorts other shortest paths

- [02:13:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7991) as a new shorts other shortest paths that we have found

- [02:13:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7993) that we have found i did add our

- [02:13:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7995) i did add our rose per mappings

- [02:13:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7998) rose per mappings like this

- [02:13:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=7999) like this and i am going to update shortest path

- [02:13:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8003) and i am going to update shortest path counts here

- [02:13:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8004) counts here for 805 we have 20

- [02:13:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8008) for 805 we have 20 okay

- [02:13:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8009) okay so when we when we move to the next

- [02:13:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8011) so when we when we move to the next location

- [02:13:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8012) location if that exists in our previous

- [02:13:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8016) if that exists in our previous findings we will just bypass them

- [02:13:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8020) findings we will just bypass them what i mean is for example

- [02:13:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8023) what i mean is for example let's see

- [02:13:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8024) let's see okay

- [02:13:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8026) okay let's move to a new one so that we can i

- [02:13:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8028) let's move to a new one so that we can i can show

- [02:13:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8031) can show okay

- [02:13:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8032) okay just move here

- [02:13:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8034) just move here okay

- [02:13:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8035) okay uh

- [02:13:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8036) uh 700 um

- [02:13:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8039) 700 um do we have that in our shortest path

- [02:14:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8041) do we have that in our shortest path counts

- [02:14:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8042) counts 742

- [02:14:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8049) okay let's see let's see let's see let's see

- [02:14:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8051) see no we don't have that let's continue

- [02:14:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8053) no we don't have that let's continue yes and 700 for the three do we have

- [02:14:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8056) yes and 700 for the three do we have that

- [02:14:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8057) that and the shortest path okay let's see 744

- [02:14:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8081) for the age i think these are just

- [02:14:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8084) i think these are just not possible once let's move here

- [02:14:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8088) not possible once let's move here okay and 752 yes

- [02:14:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8091) okay and 752 yes and let's check do we have that 752

- [02:14:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8095) and let's check do we have that 752 [Music]

- [02:15:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8102) no okay let's just continue

- [02:15:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8107) okay 795 once we calculate

- [02:15:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8110) 795 once we calculate a lot of paths it will just

- [02:15:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8113) a lot of paths it will just make our application much faster

- [02:15:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8117) make our application much faster as we move okay let's let's move here

- [02:15:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8120) as we move okay let's let's move here put a breakpoint here to

- [02:15:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8123) put a breakpoint here to show you what i mean

- [02:15:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8126) show you what i mean so we are already calculating a lot of

- [02:15:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8129) so we are already calculating a lot of borders paths

- [02:15:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8136) which application is currently just checking the other locations

- [02:15:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8139) checking the other locations you can see

- [02:15:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8141) you can see oh no

- [02:15:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8142) oh no what are we waiting for then

- [02:15:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8144) what are we waiting for then maybe writing to the stream writer yes

- [02:15:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8147) maybe writing to the stream writer yes probably

- [02:15:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8149) probably probably writing with stream writers

- [02:15:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8152) probably writing with stream writers as you can see it is writing

- [02:16:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8163) okay now

- [02:16:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8164) now let's

- [02:16:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8166) let's okay we have

- [02:16:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8167) okay we have 805

- [02:16:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8169) 805 i think we have that already in here

- [02:16:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8173) i think we have that already in here yes 805 now what is going to happen

- [02:16:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8175) yes 805 now what is going to happen let's see

- [02:16:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8178) let's see i will just enter

- [02:16:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8180) i will just enter inside this method

- [02:16:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8183) inside this method and origin location is 805

- [02:16:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8186) and origin location is 805 okay just these are not important and

- [02:16:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8190) okay just these are not important and yes shortest path we have 805

- [02:16:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8195) yes shortest path we have 805 and [Music]

- [02:16:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8197) [Music] we will already get

- [02:16:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8199) we will already get the count of 805

- [02:16:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8209) and we will quickly find the biggest possible one

- [02:16:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8212) the biggest possible one or each time now it is writing the

- [02:16:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8214) or each time now it is writing the dictionary i have to remove it

- [02:16:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8217) dictionary i have to remove it yeah

- [02:16:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8218) yeah that's taking huge time

- [02:17:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8224) i just need to remove that to show you when it's all right

- [02:17:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8228) to show you when it's all right let's just

- [02:17:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8229) let's just okay

- [02:17:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8232) okay it is like this

- [02:17:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8239) let's just run start the debugging and see the speed

- [02:17:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8258) i think we don't need to recalculate

- [02:17:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8260) recalculate if it already exists here

- [02:17:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8262) if it already exists here i mean

- [02:17:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8271) let's say if my shortest path is included in here i can just continue

- [02:17:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8274) is included in here i can just continue yes that should be the way

- [02:18:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8316) this was also taking a lot of time each round and

- [02:18:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8319) each round and one final uh optimization will be if

- [02:18:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8324) one final uh optimization will be if it's shorter since we are checking every

- [02:18:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8326) it's shorter since we are checking every possible path

- [02:18:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8329) possible path contains

- [02:18:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8330) contains a

- [02:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8331) a location continue yes

- [02:18:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8335) location continue yes now it should be super fast

- [02:18:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8338) now it should be super fast let's see

- [02:19:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8340) let's see i think we have made it most optimized

- [02:19:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8343) i think we have made it most optimized way

- [02:19:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8343) way possible

- [02:19:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8352) okay after this big second it should become much faster

- [02:19:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8369) because we will avoid risking okay

- [02:19:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8385) wow my hundredths

- [02:19:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8387) my hundredths and also take a lot of time

- [02:20:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8401) okay we are using six gigabyte which is a large

- [02:20:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8440) i think i have an idea to optimize this cs6 first but it is

- [02:20:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8443) to optimize this cs6 first but it is using a lot of ram memory

- [02:20:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8446) using a lot of ram memory currently so we need to make a little

- [02:20:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8448) currently so we need to make a little bit more optimization

- [02:21:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8461) dictionary shortest found paths yes and this will keep

- [02:21:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8469) [Music] the

- [02:21:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8471) the location

- [02:21:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8485) actually this can only hold the lists yes

- [02:21:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8496) no i need at least yes so

- [02:21:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8497) so what i mean is

- [02:21:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8503) like this and shoulders font shoulders form pet

- [02:21:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8507) and shoulders font shoulders form pet scan shoulders petcons

- [02:21:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8510) scan shoulders petcons let's just

- [02:21:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8511) let's just rename this so we won't get

- [02:21:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8519) one seconds it should rename every

- [02:22:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8522) it should rename every reference

- [02:22:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8574) uh font pass contains

- [02:23:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8580) okay original location

- [02:23:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8591) okay just adds

- [02:23:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8601) actually we can remove this so it will become even

- [02:24:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8642) we won't need this anymore just we are just simplifying our

- [02:24:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8645) just simplifying our application

- [02:24:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8664) okay big for itself

- [02:24:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8690) and act yes

- [02:24:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8696) okay i think now it will work and with this approach

- [02:25:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8707) and by the way we need to restart this at each route

- [02:25:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8710) at each route why would it lose or not why does it

- [02:25:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8712) why would it lose or not why does it give me an error

- [02:25:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8723) we have missing a parenthesis

- [02:25:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8725) a parenthesis and now we should fix it

- [02:25:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8728) and now we should fix it let's see

- [02:25:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8730) let's see okay and one final thing is left

- [02:25:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8734) okay and one final thing is left we are going to restart reset um

- [02:25:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8751) and one final thing is

- [02:25:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8757) if the shortest path on paths contains current location just

- [02:26:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8760) on paths contains current location just continue

- [02:26:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8762) continue and

- [02:26:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8763) and [Music]

- [02:26:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8765) [Music] we are just going to

- [02:26:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8775) the value of path as like this

- [02:26:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8786) by the way we cannot be sure if this is existing in there or not so what we need

- [02:26:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8789) existing in there or not so what we need to do is if

- [02:26:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8791) to do is if contains key

- [02:26:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8794) contains key is

- [02:26:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8806) as the team

- [02:26:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8813) yes now it should work let's restart the application

- [02:27:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8829) okay it has found wow we already moved

- [02:27:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8831) wow we already moved the road id5 this is not

- [02:27:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8835) the road id5 this is not this is crazy why

- [02:27:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8843) okay we need some debugging um [Music]

- [02:27:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8846) [Music] let's see

- [02:27:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8857) zero still zero y

- [02:27:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8860) still zero y uh

- [02:28:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8930) okay we have only 755

- [02:28:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8932) 755 and

- [02:29:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8960) and let's find it out but where did we broke something

- [02:29:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8962) broke something these are all the returns

- [02:29:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=8988) okay once um

- [02:30:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9005) restart we didn't change anything here so the arrow could be somewhere here

- [02:30:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9054) but why do we start dash we were starting with different id

- [02:30:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9057) we were starting with different id previously

- [02:31:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9074) current location one and when we move here

- [02:31:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9076) here we are at the current location

- [02:31:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9078) we are at the current location 741

- [02:31:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9102) okay yes we are checking

- [02:31:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9105) yes we are checking top

- [02:31:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9110) okay it's just returning then

- [02:32:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9133) 742 [Music]

- [02:32:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9165) i think we have forgotten to recall our methods

- [02:32:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9178) yes here you see we are returning which is extremely

- [02:33:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9181) is extremely incorrect

- [02:33:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9184) okay so yes now it should work

- [02:33:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9188) so yes now it should work you see you're putting one extra return

- [02:33:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9194) makes your application behaving completely

- [02:33:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9197) your application behaving completely different

- [02:33:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9198) different so that is why you need to do

- [02:33:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9201) so that is why you need to do properly debugging

- [02:33:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9203) properly debugging all right now

- [02:33:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9205) all right now um

- [02:33:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9206) um we already had edit it where if you ask

- [02:33:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9214) um where did we added

- [02:33:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9223) okay we have four here yes this is where we made the mistake

- [02:33:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9226) this is where we made the mistake okay

- [02:33:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9228) okay and

- [02:34:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9242) you see we had some parentheses error and

- [02:34:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9244) and that caused us this problem

- [02:34:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9246) that caused us this problem okay now working

- [02:34:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9248) okay now working [Music]

- [02:34:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9256) by the way i will add another value another

- [02:34:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9264) pound protest

- [02:34:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9266) protest ads

- [02:34:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9274) okay and this will be updated

- [02:34:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9283) let's say after

- [02:35:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9304) yeah we can update just that value here i think

- [02:35:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9324) add cold

- [02:35:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9326) cold will be equal to

- [02:35:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9329) will be equal to this one

- [02:35:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9337) all right now

- [02:35:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9339) now let's see

- [02:35:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9346) how many pets we find okay we have found seven pads

- [02:35:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9348) seven pads with once again 71 as you see it is

- [02:35:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9350) with once again 71 as you see it is increasing

- [02:36:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9373) and you see ram memory usage is in line

- [02:36:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9377) within the proper way

- [02:37:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9429) i think it's [Music]

- [02:37:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9431) [Music] we need the memory

- [02:37:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9438) after certain point yes yes it did this is totally automatic based on your

- [02:37:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9440) this is totally automatic based on your computer's

- [02:37:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9455) okay and

- [02:38:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9499) yeah 1971 is almost as the one of the biggest uh pet calculation

- [02:38:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9502) one of the biggest uh pet calculation way

- [02:38:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9503) way that you can almost calculate every

- [02:38:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9505) that you can almost calculate every possible path

- [02:38:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9507) possible path it is like the left top corner of the

- [02:38:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9510) it is like the left top corner of the map

- [02:38:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9512) map [Music]

- [02:38:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9515) [Music] so it should include

- [02:38:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9524) another shortest path oh i see we have another arrow

- [02:38:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9532) because we only keep one uh

- [02:38:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9533) one uh single shortest path so the others are

- [02:38:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9537) single shortest path so the others are not getting stored and ignored

- [02:39:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9555) yes still this is not the most optimal way

- [02:39:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9558) way what i mean is

- [02:39:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9560) what i mean is let's say we started from

- [02:39:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9562) let's say we started from here and we check it up until here here

- [02:39:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9567) here and we check it up until here here here and

- [02:39:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9572) then we just stop since we have a shorter path

- [02:39:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9573) since we have a shorter path so all this

- [02:39:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9576) so all this finding is wasted

- [02:39:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9579) finding is wasted and i am probably reaching to my

- [02:39:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9593) so either i will not just stop

- [02:40:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9611) of uh i will release ram memory because the possible number of pets is just huge

- [02:40:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9627) as you can see it is up to 44 it's 44

- [02:40:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9630) it's 44 and when we check the shortest paths for

- [02:40:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9648) what what was our current [Music]

- [02:40:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9651) [Music] okay

- [02:41:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9680) okay when we find one shortest path

- [02:41:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9684) when we find one shortest path uh we are just ignoring the further ones

- [02:41:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9688) uh we are just ignoring the further ones and that is

- [02:41:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9690) and that is preventing us

- [02:41:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9692) preventing us to

- [02:41:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9694) to find out other locations shortest paths

- [02:41:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9713) and with this way uh

- [02:41:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9714) uh the number of shortest paths that we are

- [02:41:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9717) the number of shortest paths that we are going to find

- [02:41:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9719) going to find during the scan which will might will be

- [02:42:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9721) during the scan which will might will be much

- [02:42:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9722) much higher as you can see

- [02:42:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9732) yes now it is working as intended but for this to work

- [02:42:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9744) have lesser memory size memory usage

- [02:42:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9746) memory usage and

- [02:42:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9748) and therefore

- [02:42:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9760) okay let's just uh disable dictionary check

- [02:42:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9762) disable dictionary check which is

- [02:42:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9769) watching how we gonna what happens if we disable it

- [02:43:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9786) okay let's see what happens now

- [02:43:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9799) watch okay let's see what happens now

- [02:43:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9806) it will use lesser memory but with one scan

- [02:43:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9807) scan i will have lots of

- [02:43:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9809) i will have lots of [Music]

- [02:43:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9811) [Music] settings

- [02:43:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9816) scan it yes

- [02:43:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9823) so now we will avoid scanning same

- [02:43:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9831) locations again and again and we have already scanned 201 locations

- [02:43:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9835) already scanned 201 locations and this map have 4000 locations

- [02:43:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9839) and this map have 4000 locations okay

- [02:44:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9847) i think instead of dictionary size let's just

- [02:44:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9853) keep number of scans let's just

- [02:44:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9855) let's just uh keep an indicator to see how many

- [02:44:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9859) uh keep an indicator to see how many tips come

- [02:44:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9871) you see with just almost single location it has found

- [02:44:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9873) it has found 204

- [02:44:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9882) and the dictionary size increases bits where where do we add

- [02:44:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9885) where where do we add we add whenever we find a true

- [02:44:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9899) okay let's see what we are scanning right now

- [02:45:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9901) right now can we folder

- [02:45:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9906) uh optimize it i wonder so it is going on

- [02:45:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9911) optimize it i wonder so it is going on down to 33 2 32

- [02:45:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9915) down to 33 2 32 3 2

- [02:45:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9925) which is like somewhere around here yes so we continue

- [02:45:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9927) so we continue from here to here

- [02:45:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9929) from here to here you see

- [02:45:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9931) you see and

- [02:45:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9938) this number will increase a lot when we reach

- [02:45:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9949) target point which is the most appealing area

- [02:45:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9957) but i wanna can we somehow predict how many scan is left

- [02:46:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9978) i think right now we can multithread the application

- [02:46:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9981) multithread the application so it will take lesser time

- [02:46:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=9991) let's see if our application is [Music]

- [02:46:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10004) our application is uh switching to multi-trading or not

- [02:46:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10006) switching to multi-trading or not we share this this this

- [02:46:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10009) we share this this this and chosen direction is shaded

- [02:46:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10013) and chosen direction is shaded will be shared between threats

- [02:47:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10028) we will make the mods trading here so it should work

- [02:47:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10035) only lacking these fair load mappings is necessary

- [02:47:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10053) okay let's just add some more volumes so we don't need this

- [02:47:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10073) okay i already know this and this let's remove this as well

- [02:48:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10107) okay and

- [02:48:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10108) and i'm going to make it even

- [02:48:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10110) i'm going to make it even more optimized we don't need this

- [02:48:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10114) more optimized we don't need this just around that

- [02:48:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10129) okay and

- [02:48:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10130) and yeah we just we only just need to lock

- [02:48:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10133) yeah we just we only just need to lock this

- [02:49:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10140) so i will put a lot here like and to able

- [02:49:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10141) able to locking it let's define the privates

- [02:49:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10148) block change why would we by the way this

- [02:49:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10150) change why would we by the way this would be an object object

- [02:49:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10155) object a control

- [02:49:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10162) object i am going to turn it into a multithreaded programming with parallel

- [02:49:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10164) multithreaded programming with parallel for each

- [02:49:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10183) by the way when we do parallel for each it should work it should just work fine

- [02:49:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10187) it should work it should just work fine okay we made anothers

- [02:50:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10204) let's just check it out okay it says unreachable code is

- [02:50:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10206) okay it says unreachable code is detected

- [02:50:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10209) detected why

- [02:50:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10214) oh this is another error we have we don't we won't return here

- [02:50:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10217) don't we won't return here we will return here

- [02:50:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10233) we were making same mistake again

- [02:50:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10236) same mistake again okay we will return here

- [02:50:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10245) let's see this is the log if yes off yes

- [02:50:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10247) yes all right now we are ready for parallel

- [02:50:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10250) all right now we are ready for parallel for each

- [02:50:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10258) okay let's just find

- [02:51:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10272) for this to be as parallel for each we are going to have

- [02:51:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10282) moving directions this will be up to four cores

- [02:51:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10285) this will be up to four cores okay

- [02:51:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10287) okay but it could be further in products if

- [02:51:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10289) but it could be further in products if you want

- [02:51:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10290) you want later just add the direction

- [02:51:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10297) and here we are going to provide this this will be direction

- [02:51:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10299) this will be direction [Music]

- [02:51:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10301) [Music] and

- [02:52:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10322) comment this out and also parallel for each options

- [02:52:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10326) and also parallel for each options rather opens people

- [02:52:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10330) rather opens people new options po dot max daily or terminal

- [02:52:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10334) new options po dot max daily or terminal equal to 4

- [02:52:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10336) equal to 4 and let's just provide it here

- [02:52:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10342) yes yes we have even made it further

- [02:52:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10347) yes we have even made it further faster improved now it will use four

- [02:52:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10349) faster improved now it will use four cores

- [02:52:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10351) cores i have 16 cores

- [02:52:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10362) okay now we have another error probably and what is its

- [02:53:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10396) to each type rights bottom

- [02:53:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10419) okay let's just restart and see the directions coming

- [02:53:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10426) top bottom

- [02:53:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10427) bottom left right

- [02:53:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10429) left right top

- [02:53:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10430) top top right right top

- [02:53:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10434) top right right top okay this looks correct

- [02:54:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10440) but do we have an error here

- [02:54:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10442) do we have an error here no

- [02:54:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10452) uh okay why don't we see anything in the screen then

- [02:54:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10465) okay so we have an error so much what's that

- [02:54:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10474) okay i even see the shortest paths and let's see 741 yeah it looks correct

- [02:54:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10492) okay and yes this is another one

- [02:55:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10512) application current let's play with the reason let's try

- [02:55:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10513) let's play with the reason let's try again

- [02:55:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10522) okay still not getting oh the application is frozen but why

- [02:55:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10546) should not happen why did this appraise our application

- [02:56:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10580) then we should start this

- [02:56:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10588) as task factor perhaps unless but this is also inside the task

- [02:56:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10592) but this is also inside the task why do we get

- [02:56:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10603) let me just comment things on return page

- [02:56:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10606) comment things on return page to our original

- [02:56:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10614) yeah the screen is still freezing twice again

- [02:57:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10628) because some updates is happening too fast

- [02:57:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10640) oh i know i know the reason this this is the

- [02:57:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10643) i know the reason this this is the reason

- [02:57:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10644) reason this is the culprit because this is

- [02:57:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10645) this is the culprit because this is never getting increasing

- [02:57:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10647) never getting increasing therefore it's always zero and therefore

- [02:57:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10650) therefore it's always zero and therefore it's always trying to update the user

- [02:57:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10652) it's always trying to update the user interface

- [02:57:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10654) interface and that is blocking our application

- [02:57:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10657) and that is blocking our application interface yes now

- [02:57:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10660) interface yes now when i comment out

- [02:57:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10663) when i comment out and command this it will work

- [02:58:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10683) now we should also using four first but it is not using four threads

- [02:58:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10685) first but it is not using four threads so [Music]

- [02:58:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10694) i think i can even further improve it with

- [02:58:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10696) with let's just make this something like this

- [02:58:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10702) okay and [Music]

- [02:58:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10706) [Music] here's

- [02:58:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10717) put it here and

- [02:58:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10719) and yes

- [02:59:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10757) okay interface is still active

- [02:59:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10770) so what's happening it is using 25 percent

- [03:00:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10821) 20 and one direction bottom

- [03:00:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10828) left left

- [03:00:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10830) left top

- [03:00:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10836) 18 19 20

- [03:00:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10838) 20 19

- [03:00:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10840) 19 20

- [03:00:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10842) 20 20.

- [03:00:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10844) 20. so what's happening what

- [03:00:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10858) let's try without debugging and see how it works maybe debugging makes it

- [03:01:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10861) it works maybe debugging makes it further slows

- [03:01:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10901) and let's add another culture this content will be

- [03:01:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10907) processed it's possible locations

- [03:02:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10925) i will show you how to do truly uh increments and reading

- [03:02:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10927) increments and reading with mods threading

- [03:02:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10929) with mods threading so this value will be increased

- [03:02:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10933) so this value will be increased with every checking

- [03:02:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10935) with every checking internal rockets

- [03:02:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10938) internal rockets to be able to use interlocutors probably

- [03:02:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10940) to be able to use interlocutors probably we need

- [03:02:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10942) we need to add

- [03:02:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10943) to add a reference

- [03:02:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10947) yeah okay

- [03:02:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10949) okay increment

- [03:02:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10951) increment the [Music]

- [03:02:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10954) [Music] process of possible locations

- [03:02:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10956) process of possible locations so this is thread safe increments

- [03:02:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10959) so this is thread safe increments and i will add another

- [03:02:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10965) label to see processed location columns

- [03:03:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10983) okay we are going to check

- [03:03:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10984) check it as if

- [03:03:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10987) it as if our lockets

- [03:03:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10989) our lockets reads

- [03:03:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10996) locations or some

- [03:03:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10998) or some let's say

- [03:03:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=10999) let's say like this equal to zero

- [03:03:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11011) let's just update the new label

- [03:03:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11020) that processes will be equal to

- [03:03:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11029) okay to string let's also format it

- [03:03:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11031) to string let's also format it or you can see better

- [03:04:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11044) all right as you can see this is our speed

- [03:04:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11046) speed let's also make a timer to compare

- [03:04:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11066) okay let's

- [03:04:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11067) let's do

- [03:04:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11069) do a test

- [03:04:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11076) in one minute let's see how many we will process

- [03:04:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11078) process you see how much faster it is when we

- [03:04:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11080) you see how much faster it is when we are doing a

- [03:04:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11082) are doing a non-debugging mode

- [03:04:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11093) by the way this will be processed pet count not found

- [03:04:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11097) count not found okay our speed is

- [03:04:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11098) okay our speed is [Music]

- [03:05:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11115) but this is not included that is the way it thinks

- [03:05:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11125) maybe we need to knock every process of pads

- [03:05:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11126) pads we could be reprocessing their

- [03:05:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11128) we could be reprocessing their duplicates

- [03:05:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11133) yeah this is not normal

- [03:05:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11136) this is not normal okay

- [03:05:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11137) okay so let's remove the

- [03:05:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11141) so let's remove the parallel for each here and let's return

- [03:05:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11144) parallel for each here and let's return back to older version

- [03:06:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11160) let's see the speed and the font comes okay

- [03:06:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11162) comes okay so the parallel for each in that causing

- [03:06:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11166) so the parallel for each in that causing some problem

- [03:06:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11168) some problem probably a referencing problem with the

- [03:06:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11171) probably a referencing problem with the direction so it

- [03:06:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11172) direction so it is reiterating

- [03:06:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11176) is reiterating and this is even faster yes

- [03:06:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11178) and this is even faster yes this is weird

- [03:06:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11185) how many threads are we using oh we are already using four threads as

- [03:06:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11188) oh we are already using four threads as expected so we don't need mult paradigm

- [03:06:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11190) expected so we don't need mult paradigm for each here

- [03:06:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11192) for each here because it's already running with four

- [03:06:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11195) because it's already running with four threads as we started here

- [03:06:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11198) threads as we started here yeah

- [03:06:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11199) yeah that was breaking our application

- [03:06:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11211) 300 million paddings

- [03:07:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11226) okay we can also add longest processes paths as another statistic

- [03:07:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11235) give a long rest process

- [03:07:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11236) process part

- [03:07:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11261) we will just uh restart this with every location like this

- [03:07:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11264) location like this and

- [03:07:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11266) and it will be

- [03:07:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11272) right in hear if

- [03:08:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11284) oh bigger not the

- [03:08:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11299) this and we will update

- [03:08:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11301) we will update our invoke

- [03:08:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11315) yes now it should work so we can also see the longest process

- [03:08:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11317) so we can also see the longest process pad so far

- [03:09:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11362) okay [Music]

- [03:09:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11368) yeah they were overriding each other's because we are already using that level

- [03:09:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11382) yes now 73 is processed so far

- [03:09:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11389) 73 means like

- [03:10:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11411) but our found shortest path counts increase which is good because we won't

- [03:10:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11414) increase which is good because we won't process them

- [03:10:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11416) process them again

- [03:10:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11441) say a text file

- [03:10:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11443) a text file private word screens

- [03:11:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11477) it's found okay and we also need an object for

- [03:11:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11485) lock rates

- [03:11:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11487) rates and shortest

- [03:11:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11492) okay so this will ensure our multi-trading is

- [03:11:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11495) so this will ensure our multi-trading is in synchronization

- [03:11:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11507) take shortest pounds

- [03:11:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11508) pounds by then you also need

- [03:11:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11509) by then you also need [Music]

- [03:11:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11511) [Music] a root id for this but i will just

- [03:11:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11514) a root id for this but i will just ignore it for now

- [03:11:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11517) ignore it for now so we have keys and values

- [03:12:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11539) well i can't even use a um ninja

- [03:12:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11542) ninja yes

- [03:12:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11544) yes now the key plus

- [03:12:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11561) yeah that's one minute

- [03:12:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11569) okay [Music]

- [03:13:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11588) ah ah i know the reason

- [03:13:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11590) ah i know the reason we didn't

- [03:13:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11592) we didn't call this we need to call this

- [03:13:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11596) call this we need to call this here

- [03:13:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11600) and here

- [03:13:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11607) okay and then we need to start this with

- [03:13:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11617) uh give this the input parameters

- [03:13:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11626) now it will work hopefully

- [03:13:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11634) all right and let's open it yes

- [03:13:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11635) yes so the shortest path of

- [03:13:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11637) so the shortest path of uh 741

- [03:14:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11640) uh 741 is this one

- [03:14:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11641) is this one for this one this one yes it is looking

- [03:14:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11644) for this one this one yes it is looking great

- [03:14:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11650) these are the shortest paths for example for

- [03:14:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11652) for 2088 let's check it out

- [03:14:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11697) somewhere around here okay this

- [03:14:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11698) here okay this then it goes uh 2152

- [03:15:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11702) then it goes uh 2152 probably here

- [03:15:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11704) probably here this

- [03:15:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11705) this and this this this this this

- [03:15:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11712) and yes

- [03:15:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11713) yes as you can see this is the path it has

- [03:15:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11715) as you can see this is the path it has font

- [03:15:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11726) okay we have found shortest path for already 204

- [03:15:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11730) shortest path for already 204 how many of them are we using almost

- [03:15:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11732) how many of them are we using almost nothing

- [03:15:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11733) nothing but it is just taking time

- [03:15:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11744) the longest path we found is so far this one

- [03:16:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11794) well it has processed it over 1 billion already

- [03:16:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11804) maybe we should add a stopping criteria

- [03:16:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11806) stopping criteria to move to next

- [03:16:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11809) to move to next location next starting location

- [03:17:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11827) probably checking every possible way but it shouldn't be this many

- [03:17:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11831) way but it shouldn't be this many because this map is not that big

- [03:17:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11838) okay found another one why still fun finding

- [03:17:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11844) i'm sure we could optimize this further but how

- [03:17:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11846) but how how can we optimize it even further

- [03:18:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11898) how can we optimize it when purge okay okay it is finding shortest paths for

- [03:18:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11901) okay it is finding shortest paths for example let's see the latest one

- [03:18:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11905) example let's see the latest one here

- [03:18:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11927) it starts from here then we go here's

- [03:18:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11930) then we go here's here

- [03:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11931) here and

- [03:18:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11932) and here's

- [03:18:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11934) here's here's

- [03:18:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11935) here's right yes

- [03:18:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11938) right yes then it goes business

- [03:19:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11944) okay it's gonna go this way to autumn here i think yes

- [03:19:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11963) with the neighbors locations it will be much faster since

- [03:19:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11965) locations it will be much faster since we already have

- [03:19:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11967) we already have processed them

- [03:19:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11984) this is a brute force methodology of course there are other ways

- [03:19:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11987) of course there are other ways to make this faster

- [03:19:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11994) for example we can stop whenever we find a shortest path

- [03:19:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=11997) a shortest path and then it would be

- [03:20:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12000) and then it would be much faster

- [03:20:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12003) much faster but

- [03:20:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12004) but since we will run this only one time

- [03:20:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12007) since we will run this only one time it could be toleratable but still

- [03:20:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12017) it is taking too much time how further we can reduce it

- [03:20:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12043) okay i will pause video uh

- [03:20:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12044) uh and

- [03:20:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12046) and return when it moves to next location

- [03:20:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12055) all right it is being too slow so let's just uh

- [03:20:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12058) let's just uh write a

- [03:20:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12059) write a logarithm

- [03:21:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12062) logarithm to see

- [03:21:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12063) to see what kind of values are

- [03:21:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12065) what kind of values are being processed

- [03:21:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12068) being processed let's time stream private static

- [03:21:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12077) rights temp

- [03:21:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12079) temp locks equal to

- [03:21:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12102) okay and let's set this as

- [03:21:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12105) let's set this as autoflush rule

- [03:21:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12116) write the process at locations okay

- [03:22:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12123) uh in here yes lock

- [03:22:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12125) lock all right stem blocks

- [03:22:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12150) okay let's see whether we are having a lot of duplicate checks or

- [03:22:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12153) lot of duplicate checks or what is the cut rate that

- [03:22:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12156) what is the cut rate that causes our application to run very slow

- [03:22:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12160) causes our application to run very slow this log file will

- [03:22:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12162) this log file will of course

- [03:22:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12164) of course grow a lot

- [03:23:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12198) the important thing is that we don't we never should have any duplicate lines

- [03:24:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12244) okay 40 million okay

- [03:24:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12262) okay let's just stop the application and try to analyze it

- [03:24:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12269) all right let's reload

- [03:24:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12271) let's reload reload reload

- [03:24:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12274) reload reload relativity notes relax

- [03:24:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12286) let's just close it and open again because it is causing some

- [03:24:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12288) because it is causing some problem

- [03:24:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12297) okay it is only the four gigabyte of data

- [03:25:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12300) data oh it's soft

- [03:25:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12306) for example these are the patterns that we find

- [03:25:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12337) we need to check whether we are going backwards or

- [03:25:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12349) we should only need to move one direction

- [03:26:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12416) okay i think we have duplicates how did i know if you ask

- [03:26:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12418) how did i know if you ask me so

- [03:27:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12420) me so once again i will show you

- [03:27:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12427) and these duplicates are killing our application

- [03:27:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12429) application making it run forever

- [03:27:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12431) making it run forever okay this is line 5 million

- [03:27:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12435) okay this is line 5 million then

- [03:27:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12440) this is 95 million 900

- [03:27:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12453) so where do we have errors that causes duplicates

- [03:27:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12463) i think we can fix this with a much easier way

- [03:27:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12465) easier way yes

- [03:27:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12473) yes yes yes yes yes just it just came to my mind we are going to use an headset

- [03:27:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12475) my mind we are going to use an headset and

- [03:27:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12477) and a hashing algorithm

- [03:28:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12486) c sharp okay

- [03:28:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12491) uh it will prevent us from having duplicates and

- [03:28:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12494) from having duplicates and [Music]

- [03:28:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12496) [Music] also

- [03:28:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12508) and also it will be a very fast way to check

- [03:28:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12510) check uh process its

- [03:28:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12517) paths privates okay static

- [03:28:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12519) okay static page set

- [03:28:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12521) page set string

- [03:28:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12523) string okay uh

- [03:28:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12524) okay uh page s

- [03:28:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12526) page s okay take it

- [03:28:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12528) okay take it paths

- [03:28:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12534) and we are going to prevent

- [03:28:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12535) prevent checking

- [03:29:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12541) same path again and again and

- [03:29:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12556) okay let's say i'm private

- [03:29:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12562) let's add a class or yes

- [03:29:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12563) yes let's add another class

- [03:29:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12565) let's add another class so this is getting crowded

- [03:29:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12572) let's say moment extensions

- [03:29:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12584) and and

- [03:29:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12590) there is our new computations here

- [03:29:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12598) okay public static string

- [03:30:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12600) string return shoot

- [03:30:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12603) return shoot one year

- [03:30:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12605) one year part

- [03:30:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12606) part and we will take this

- [03:30:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12609) and we will take this list

- [03:30:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12617) okay uh let's still patch and it's from return

- [03:30:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12622) okay by the for this we need to have

- [03:30:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12628) this okay

- [03:30:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12630) okay six inch drawing

- [03:30:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12635) let's say okay lst part

- [03:30:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12639) okay lst part then

- [03:30:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12641) then we will calculate the hash value

- [03:30:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12649) this okay complete hash

- [03:30:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12653) so where we were doing check

- [03:31:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12668) we have returning here's yeah let's just double check here

- [03:31:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12675) okay instead of this since this is not empty we are going to go if

- [03:31:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12679) empty we are going to go if or let's say hash uh stink and

- [03:31:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12683) or let's say hash uh stink and path equal to

- [03:31:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12690) let's check locations and

- [03:31:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12691) and return hash value patch

- [03:31:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12699) then we will we need a lock tool team synchronization for our

- [03:31:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12703) team synchronization for our headset which is

- [03:31:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12706) headset which is actually defined

- [03:31:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12718) okay object reload

- [03:32:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12734) okay contains

- [03:32:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12743) by the way let's even further optimize it and put

- [03:32:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12746) let's even further optimize it and put it

- [03:32:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12750) here yes it will be further optimized

- [03:32:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12757) if it contains return okay

- [03:32:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12758) okay else

- [03:32:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12760) else it will add

- [03:32:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12763) it will add uh

- [03:32:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12765) uh england actually right

- [03:32:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12773) like this yes now this will prevent us from having

- [03:32:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12775) from having uh duplicates

- [03:32:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12777) uh duplicates this will be if

- [03:33:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12783) and let's just check whether we have duplicates or not

- [03:33:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12785) duplicates or not the duplicate value of us

- [03:33:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12789) the duplicate value of us okay i just closed it anyway another

- [03:33:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12791) okay i just closed it anyway another problem

- [03:33:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12797) oh as you can see the current location is

- [03:33:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12799) as you can see the current location is improving

- [03:33:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12801) improving yeah we were having so many duplicate

- [03:33:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12803) yeah we were having so many duplicate checks so many

- [03:33:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12809) and these are okay we are moving very fast we are finding all the shortest

- [03:33:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12812) fast we are finding all the shortest paths

- [03:33:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12814) paths let's fix it up

- [03:33:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12815) let's fix it up all the problems and

- [03:33:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12818) all the problems and [Music]

- [03:33:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12820) [Music] when we open this

- [03:33:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12822) when we open this oh it is overriding each

- [03:33:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12824) oh it is overriding each currently each route

- [03:33:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12827) currently each route so let's just

- [03:33:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12835) okay one second let's just put a breakpoint here

- [03:33:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12837) breakpoint here so we will prevent

- [03:33:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12839) so we will prevent overriding

- [03:34:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12847) okay and

- [03:34:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12854) yeah now we should be able to see [Music]

- [03:34:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12861) yes these are all the shortest paths found

- [03:34:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12862) found in this route

- [03:34:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12865) in this route but i mean in this car location

- [03:34:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12867) but i mean in this car location when we put a breakpoint here we will

- [03:34:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12869) when we put a breakpoint here we will see the root id yes let's see how many

- [03:34:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12872) see the root id yes let's see how many did it find

- [03:34:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12874) did it find okay it has found

- [03:34:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12876) okay it has found 376.

- [03:34:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12877) 376. [Music]

- [03:34:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12892) okay so by the way

- [03:34:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12894) by the way uh if it is already a monster area

- [03:34:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12899) uh if it is already a monster area uh [Music]

- [03:35:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12901) [Music] then

- [03:35:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12908) it is not finding any shortest paths okay

- [03:35:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12909) okay 376 and how many

- [03:35:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12912) 376 and how many possible location we have in

- [03:35:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12915) possible location we have in this road

- [03:35:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12919) okay well map

- [03:35:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12921) well map left

- [03:35:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12923) left and shape type

- [03:35:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12926) and shape type equal to i think it was

- [03:35:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12936) oh we have more than that so we have an error somewhat

- [03:36:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12966) locations such as for example let's see

- [03:36:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12973) yeah this is not process it for example and why

- [03:36:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12976) and why why it did not process it to solve this

- [03:36:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12979) why it did not process it to solve this misery mystery

- [03:36:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12982) misery mystery let's say if

- [03:36:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12995) let's put a breakpoint here and let's see what happens

- [03:36:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=12997) see what happens when our current location is

- [03:36:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13000) when our current location is 1880

- [03:36:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13005) okay uh shortest paths oh

- [03:36:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13009) uh shortest paths oh because we are returning here probably

- [03:36:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13012) because we are returning here probably i'm not sure

- [03:36:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13013) i'm not sure let's just remove this

- [03:37:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13021) okay it is not the case you also need to remove this by the way

- [03:37:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13024) you also need to remove this by the way okay and

- [03:37:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13048) by the way we need to remove

- [03:37:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13056) parallel options to be able to debug this properly

- [03:37:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13059) this properly let's just remove this and

- [03:37:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13062) let's just remove this and make a parallelism one

- [03:37:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13069) so now we can see what's happening in reality okay

- [03:37:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13071) reality okay so the current until the current

- [03:37:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13073) so the current until the current location comes

- [03:38:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13084) all right and so the original location is this

- [03:38:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13104) okay i think it will be contained in the hash

- [03:38:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13115) okay i think we can prevent this bit

- [03:38:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13118) we can prevent this bit only adds

- [03:38:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13120) only adds uh

- [03:38:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13122) uh shortest path then

- [03:38:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13125) shortest path then we reached end of the

- [03:38:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13128) we reached end of the uh

- [03:38:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13129) uh map like this

- [03:38:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13130) map like this okay

- [03:38:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13132) okay so let's make this a

- [03:39:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13141) command i will exploit that mesh

- [03:39:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13159) okay and if this is the case just add hash

- [03:39:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13181) if this is the key at hash and if it is in the key at hash

- [03:39:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13185) and if it is in the key at hash actually we don't even need them here

- [03:39:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13187) actually we don't even need them here and here

- [03:39:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13194) yes only here this is the end but not only here and also where we

- [03:39:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13197) but not only here and also where we return is we return

- [03:40:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13200) return is we return here and here yes

- [03:40:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13202) here and here yes so this will prevent duplicate checks

- [03:40:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13212) of course now it won't work faster before

- [03:40:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13218) but now we should be able to get all of the possible

- [03:40:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13221) the possible locations without missing any

- [03:40:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13224) locations without missing any and let's see

- [03:40:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13230) yeah and meet pro preventing duplicate checkings

- [03:40:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13255) all right it has found over 175

- [03:41:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13279) and let's see if our hash is working as intended with

- [03:41:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13296) one seconds we may have removed it as well

- [03:41:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13302) oh we don't use hash checking right okay

- [03:41:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13309) yes we need to have a checking

- [03:42:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13337) we will add only at 14 points and we will do check

- [03:42:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13339) will do check regularly

- [03:42:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13340) regularly like before

- [03:42:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13342) like before so this will prevent duplicates being

- [03:42:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13345) so this will prevent duplicates being checked

- [03:42:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13350) and let's see

- [03:42:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13352) let's see if speed looks fast

- [03:42:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13363) okay and

- [03:42:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13369) now let's verify our return is working or not

- [03:43:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13389) i should only have nine hundred

- [03:43:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13392) nine hundred fifty thousand okay

- [03:43:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13424) it will still speed up but not very much

- [03:44:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13441) we can reverse end at

- [03:44:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13442) at the previous points as well

- [03:44:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13445) the previous points as well yeah

- [03:44:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13447) yeah that would make

- [03:44:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13449) that would make the application faster

- [03:44:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13456) okay i think yes that makes sense

- [03:44:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13458) that makes sense so whenever we reach an add point

- [03:44:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13461) so whenever we reach an add point endpoint

- [03:44:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13463) endpoint uh

- [03:44:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13464) uh we are going to

- [03:44:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13466) we are going to add traversed paths

- [03:44:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13481) let me show you what i mean so we found an endpoint here

- [03:44:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13485) so we found an endpoint here and

- [03:44:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13486) and we have copycat location stamp

- [03:44:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13490) we have copycat location stamp let's say

- [03:44:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13496) let's say check it

- [03:44:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13497) check it pad

- [03:44:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13499) pad and

- [03:45:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13501) and we don't need this anymore

- [03:45:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13526) watching one one two

- [03:45:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13544) yes okay let's see now if we ever get luck or not i reach on yes now we have

- [03:45:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13548) luck or not i reach on yes now we have return

- [03:45:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13549) return which

- [03:45:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13551) which uh

- [03:45:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13552) uh okay this is wrong

- [03:46:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13573) ever zero but

- [03:46:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13574) but i'll be this will be copy check

- [03:46:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13576) i'll be this will be copy check locations not this one

- [03:46:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13579) locations not this one so it will be like this

- [03:46:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13582) so it will be like this yeah this is an error

- [03:46:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13593) yes do we have any other let's see

- [03:46:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13596) let's see should never use this

- [03:46:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13604) okay at range we should never use it again

- [03:46:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13608) at range we should never use it again yes now i'm looking through

- [03:46:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13611) yes now i'm looking through oh let's see

- [03:47:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13621) okay and

- [03:47:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13623) and all right now looks like working

- [03:47:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13627) all right now looks like working as intended

- [03:47:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13633) okay now we should we looks like much faster than

- [03:47:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13636) we should we looks like much faster than that

- [03:47:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13643) we are processing much less

- [03:47:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13679) our speed decreases a lot and why it's can't it could be

- [03:48:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13681) can't it could be maybe because the headset is too rich

- [03:48:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13688) instead of dictionary size we can print the headset size actually

- [03:48:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13710) okay the real memory usage increases because we are keeping them in the

- [03:48:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13712) because we are keeping them in the headset

- [03:48:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13720) and this hashed fats need to be composed

- [03:49:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13742) okay and let's just print instead of dictionary

- [03:49:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13744) instead of dictionary i set size

- [03:49:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13758) okay and

- [03:49:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13760) and let's run without debugging and let's

- [03:49:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13762) let's run without debugging and let's see the speeds

- [03:50:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13807) how much mmo did we use 800 megabytes pretty much

- [03:50:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13809) pretty much we are also logging

- [03:50:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13811) we are also logging the check it paths here

- [03:50:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13814) the check it paths here so that we can analyze whether any

- [03:50:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13816) so that we can analyze whether any duplicates are

- [03:50:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13817) duplicates are checked or not

- [03:50:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13831) all right i will pause video and see let's see how it works

- [03:50:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13834) let's see how it works okay i have checked the locks and i see

- [03:50:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13837) okay i have checked the locks and i see that we are still having

- [03:50:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13839) that we are still having duplicates

- [03:50:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13841) duplicates as you can see

- [03:50:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13843) as you can see so we have another error somewhere

- [03:50:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13852) so this is a processed patch but

- [03:50:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13854) patch but still we are reprocessing it

- [03:50:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13857) still we are reprocessing it therefore

- [03:51:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13876) reiterate this so inside this add hash

- [03:52:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13921) okay we need to add this hash in more places perhaps

- [03:52:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13923) places perhaps like this

- [03:52:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13965) okay any other possible location

- [03:52:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13966) location [Music]

- [03:52:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13976) okay let's see if we will get any others uh duplicate or not

- [03:53:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=13982) we still couldn't prevent duplicates perfectly

- [03:53:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14019) uh you see when you design such application you really need

- [03:53:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14022) design such application you really need to be careful with duplicates

- [03:53:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14025) to be careful with duplicates because

- [03:53:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14031) it will make your application much slower

- [03:53:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14033) slower inaccurate in many cases

- [03:53:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14039) not work as intended

- [03:54:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14063) let's check the shortest font

- [03:54:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14094) now check and that's whether now let's check whether we have any duplicates or

- [03:54:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14095) check whether we have any duplicates or not

- [03:54:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14097) not okay not this one you

- [03:55:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14106) okay and let's see

- [03:55:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14107) let's see what exactly

- [03:55:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14119) okay let's just be sure

- [03:55:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14131) okay i see still duplicates

- [03:55:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14133) still duplicates are being

- [03:55:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14140) checked these two are duplicates so there's they are checking twice

- [03:56:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14169) so the last location three thousand two hundred fifty eight

- [03:56:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14178) three thousand two hundred fifty eight percolating

- [03:56:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14204) here okay this is

- [03:56:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14206) okay this is a

- [03:57:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14251) we will have another methodology which will be

- [03:58:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14289) here's i will just add hash

- [03:58:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14292) i will just add hash now let's see how it works

- [03:58:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14330) okay let's run it without debugging so faster

- [03:58:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14332) faster testing

- [03:58:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14334) testing in this case since we reached the end

- [03:58:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14336) in this case since we reached the end point we also add the previous patterns

- [03:59:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14346) okay but i'm not sure if we provide an idea

- [03:59:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14372) i'm not sure if it would be the wise idea probably won't be

- [03:59:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14375) idea probably won't be device idea

- [03:59:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14388) yeah yeah this is not the correct way

- [03:59:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14390) yeah this is not the correct way actually

- [04:02:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14539) okay i think this will change

- [04:02:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14564) so this is the only way we only bash only place where we call

- [04:02:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14566) only place where we call this method right yes

- [04:03:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14592) i think we don't need these animals it will just

- [04:03:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14594) will just it will just increase our

- [04:03:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14596) it will just increase our operation count

- [04:04:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14651) we use return hashtag for me okay

- [04:04:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14653) okay let's see

- [04:04:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14660) i think after calling this it was getting modified

- [04:04:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14680) wow now much faster i think we made it working this time not

- [04:04:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14683) i think we made it working this time not sure though

- [04:04:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14685) sure though but it is much faster than before

- [04:05:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14711) yeah looking much better let's see uh

- [04:05:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14712) uh whether we have

- [04:05:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14714) whether we have and duplicates or not

- [04:05:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14717) and duplicates or not i hope we don't have

- [04:05:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14719) i hope we don't have okay we have one yes no duplicates

- [04:05:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14722) okay we have one yes no duplicates finally finally no duplicates

- [04:05:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14726) finally finally no duplicates and

- [04:05:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14728) and okay these are all different nice

- [04:05:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14731) okay these are all different nice nice very nice finally it is working

- [04:05:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14734) nice very nice finally it is working so let's start now debugging and see the

- [04:05:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14737) so let's start now debugging and see the speed

- [04:05:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14750) okay and

- [04:05:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14753) and we should

- [04:05:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14754) we should end the application

- [04:05:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14757) end the application when we are end of the

- [04:06:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14760) when we are end of the road so that we will uh we won't

- [04:06:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14763) road so that we will uh we won't overwrite our font

- [04:06:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14767) overwrite our font hashings which what i mean is

- [04:06:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14775) after reaching this point i will just return

- [04:06:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14777) return so for the current route we will see the

- [04:06:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14779) so for the current route we will see the results okay

- [04:06:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14782) results okay okay now i will pause video until the

- [04:06:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14789) root ends

- [04:06:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14794) all right even though we did a lot of optimization

- [04:06:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14796) optimization we are still

- [04:06:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14802) rechecking the same path with just a tiny little bit of different

- [04:06:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14805) tiny little bit of different uh

- [04:06:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14807) uh let's say

- [04:06:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14809) let's say locations for example

- [04:06:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14815) let uh show this location is uh check it again and

- [04:06:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14818) this location is uh check it again and again a very long location

- [04:07:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14821) again a very long location with just

- [04:07:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14822) with just very little different uh

- [04:07:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14825) very little different uh paddings so we need

- [04:07:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14828) paddings so we need another optimization

- [04:07:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14831) another optimization this will

- [04:07:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14832) this will this may prevent us from finding the

- [04:07:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14835) this may prevent us from finding the most optimal pads but

- [04:07:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14840) most optimal pads but it should make our application much

- [04:07:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14842) it should make our application much faster

- [04:07:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14845) faster so what we are going to do is

- [04:07:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14848) so what we are going to do is actually we had done it in the

- [04:07:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14855) previous methodology but we are going to use it again

- [04:07:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14860) and it will be like this yes

- [04:07:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14867) okay let's just negate these logs

- [04:07:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14869) logs so we won't be checking the

- [04:07:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14872) so we won't be checking the further ones then from our closest path

- [04:08:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14880) still we should be able to cover all of the locations

- [04:08:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14882) the locations and it should be faster

- [04:08:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14885) and it should be faster we don't have any duplicate checkings

- [04:08:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14886) we don't have any duplicate checkings but

- [04:08:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14888) but we need faster checking

- [04:08:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14897) okay and let's see how it will work so the longest process pad is 30

- [04:08:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14907) now this should cut our checking a lot

- [04:08:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14923) some shortest paths

- [04:08:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14926) shortest paths with algorithmic let's say deciding oh

- [04:09:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14941) let's say after a certain number of iteration if we don't find any

- [04:09:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14945) iteration if we don't find any new shorter paths we can just

- [04:09:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14951) move okay we are moving

- [04:09:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14954) we are moving with the new locations

- [04:09:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14985) but let's see

- [04:09:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14987) let's see what kind of results we are going to get

- [04:09:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14996) okay these are the shortest paths we have found they look okay

- [04:09:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=14999) have found they look okay if you ask me

- [04:10:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15058) 12 shortest path finding we can stop iteration

- [04:11:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15090) so we need kind of heuristic approach to make is it faster

- [04:11:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15100) okay i will pause video again okay after uh

- [04:11:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15102) okay after uh so many iterations the

- [04:11:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15104) so many iterations the shortest path we find

- [04:11:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15107) shortest path we find never gets better so

- [04:11:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15110) never gets better so let's add another heuristic

- [04:11:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15117) to make this faster

- [04:11:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15119) this faster now let's found

- [04:12:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15122) now let's found uh

- [04:12:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15124) uh best paths

- [04:12:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15125) best paths iteration equal to zero

- [04:12:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15135) and where we are going to use this is here

- [04:12:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15157) we can make it like this equal to

- [04:12:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15160) equal to or let's say

- [04:12:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15175) okay uh entire slot

- [04:12:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15179) uh entire slot and sets

- [04:13:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15181) and sets exchange at

- [04:13:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15191) sets available specifically to especially one and returns the original

- [04:13:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15194) especially one and returns the original number okay then exchange

- [04:13:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15215) [Music] iteration and here's we can lock it

- [04:13:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15220) iteration and here's we can lock it reads

- [04:13:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15222) reads web

- [04:13:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15227) latest fonts pressing the possible locations okay

- [04:13:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15230) pressing the possible locations okay and we will also set it here

- [04:13:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15234) and we will also set it here and we are going to make a

- [04:13:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15237) and we are going to make a [Music]

- [04:14:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15240) [Music] let's say

- [04:14:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15242) let's say charging

- [04:14:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15244) charging why do we change let's make this

- [04:14:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15245) why do we change let's make this changing

- [04:14:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15247) changing if

- [04:14:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15257) okay that a large latest font passport iteration

- [04:14:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15259) iteration is bigger than

- [04:14:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15263) is bigger than in time like it's read

- [04:14:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15268) a large process of possible locations

- [04:14:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15271) process of possible locations minus let's say one

- [04:14:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15274) minus let's say one million then we can just return

- [04:14:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15296) to a new value whenever we change location so

- [04:15:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15311) equal to zero yes

- [04:15:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15317) and after 1 million iteration we will just

- [04:15:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15319) after 1 million iteration we will just move to next location

- [04:15:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15321) move to next location oh by the way

- [04:15:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15338) made our application snowball a lot

- [04:16:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15377) actually this will be smaller yes

- [04:16:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15384) um and

- [04:16:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15404) okay let's put the parentheses there and there

- [04:16:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15406) there we go see now what happens yes

- [04:16:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15410) we go see now what happens yes okay now

- [04:16:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15412) okay now working

- [04:17:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15423) to different locations faster now

- [04:17:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15425) locations faster now as supposed to happen

- [04:17:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15434) this is kind of heuristic and

- [04:18:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15484) okay we have a lock for this of course and why don't why we didn't have it i

- [04:18:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15486) and why don't why we didn't have it i don't know

- [04:18:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15489) don't know okay um

- [04:18:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15490) okay um okay we have a lot here but we didn't

- [04:18:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15492) okay we have a lot here but we didn't like it

- [04:18:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15493) like it yes

- [04:18:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15501) okay and let's copy this

- [04:18:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15514) yeah now looking correct and we also need to have a lot here

- [04:18:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15518) and we also need to have a lot here okay

- [04:18:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15520) okay okay let's also

- [04:18:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15522) okay let's also disable logging so

- [04:18:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15524) disable logging so it is also slowing us down because

- [04:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15531) and let's

- [04:18:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15532) let's check that was our logins

- [04:19:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15549) and okay let's start with

- [04:19:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15552) okay let's start with debugging without

- [04:19:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15581) but it is not finding from some of them i'm not sure

- [04:20:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15615) this looks like a pretty uh

- [04:20:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15616) uh big one 12 28

- [04:20:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15655) okay 12 28 is here so the shortest possible path for it

- [04:20:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15657) so the shortest possible path for it would be like

- [04:20:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15659) would be like for here

- [04:21:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15661) for here and here

- [04:21:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15663) and here and how many that is

- [04:21:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15675) let's see and that will be a plus two yeah it looks like pretty correct

- [04:21:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15681) watching uh it starts from

- [04:21:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15683) uh it starts from [Music]

- [04:21:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15684) [Music] 11

- [04:21:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15685) 11 [Music]

- [04:21:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15687) [Music] 63

- [04:21:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15692) which is rush

- [04:21:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15702) here then it goes here

- [04:21:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15706) then it goes here and then

- [04:21:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15707) and then it follows this path yeah exactly same

- [04:21:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15711) it follows this path yeah exactly same there is no shorter path and i think

- [04:21:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15714) there is no shorter path and i think it's pretty good decent

- [04:22:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15720) for example this looks long

- [04:22:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15731) the another important thing is that we need to cover every one of the

- [04:22:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15735) need to cover every one of the possible

- [04:22:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15736) possible locations and we can calculate that with

- [04:22:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15740) locations and we can calculate that with where shape type is true or shape type

- [04:22:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15743) where shape type is true or shape type is

- [04:22:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15747) [Music] three

- [04:22:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15757) one we need to find exactly 1166

- [04:22:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15768) we have found so far 763

- [04:22:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15770) 763 and that is definitely not enough

- [04:22:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15777) but we still have a lot more location to check

- [04:23:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15816) until it finds a shortest path it continues to scan

- [04:23:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15820) shortest path it continues to scan that's another thing

- [04:23:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15823) that's another thing twenty twenty two minutes six twenty

- [04:23:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15826) twenty twenty two minutes six twenty three two two uh

- [04:23:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15828) three two two uh 26 let's find it

- [04:23:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15831) 26 let's find it twenty six

- [04:24:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15840) okay around somewhere here yeah yeah the shortest path from here would

- [04:24:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15842) yeah the shortest path from here would be

- [04:24:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15846) like okay let's calculate

- [04:24:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15849) okay let's calculate let's say come here

- [04:24:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15858) and that's this

- [04:24:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15866) um plus three

- [04:24:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15872) okay still couldn't find any in toilet 326

- [04:25:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15953) okay there is definitely a pad from there but it still couldn't find it

- [04:26:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15963) and there aren't that many way to go maybe going from dash

- [04:26:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15966) way to go maybe going from dash i'm not sure

- [04:26:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15973) and since we disabled the patterns we can't see it right now yeah

- [04:26:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15977) can't see it right now yeah and that was a mistake

- [04:26:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=15998) this is still processing through the three parts

- [04:26:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16006) okay it's passive that let's see the font parts

- [04:27:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16025) oh it didn't find 23 26 we have a mistake somewhere else

- [04:27:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16027) we have a mistake somewhere else probably

- [04:27:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16049) okay let's see why we didn't find anything with 23-26

- [04:27:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16070) 2326 where it is

- [04:27:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16076) yes transfer it on 6 and i will enable

- [04:28:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16081) transfer it on 6 and i will enable logging again

- [04:28:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16090) here and i'll just run the application to see

- [04:28:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16107) check the logs i was

- [04:28:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16109) i was it's moving

- [04:28:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16117) okay it goes and ends and finish

- [04:30:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16239) i think our mistake is that we are only going from

- [04:30:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16240) going from single

- [04:30:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16242) single way

- [04:30:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16243) way you see

- [04:30:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16246) you see we are going

- [04:30:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16247) we are going from only we are we continue to from

- [04:30:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16250) from only we are we continue to from only one location or not

- [04:30:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16254) only one location or not yeah

- [04:30:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16255) yeah what i mean is let me show

- [04:31:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16264) so you see only one way is currently going because we are doing a recursive

- [04:31:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16267) going because we are doing a recursive method

- [04:31:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16269) method and we need to fix that

- [04:31:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16271) and we need to fix that we need to accurately go from each

- [04:31:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16275) we need to accurately go from each direction

- [04:31:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16282) so how can we how are we going to do that

- [04:31:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16285) that let's see let's check our codes

- [04:31:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16288) let's see let's check our codes currently we are only moving from top or

- [04:31:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16291) currently we are only moving from top or left but

- [04:31:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16293) left but we need to equally move

- [04:31:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16295) we need to equally move from

- [04:31:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16297) from that starting point what i mean is let's

- [04:31:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16299) that starting point what i mean is let's say our application starts from here

- [04:31:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16301) say our application starts from here then only follow

- [04:31:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16303) then only follow this path but it should actually go this

- [04:31:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16306) this path but it should actually go this way this way this way and this way

- [04:31:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16309) way this way this way and this way so whichever direction reaches first

- [04:31:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16319) it will make our application much faster and to prevent it what can we

- [04:32:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16333) um [Music]

- [04:32:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16361) so each one should start independently and move independently

- [04:33:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16410) okay 23 43 for this one but it is definitely nothing wrong

- [04:33:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16416) this way where was it 23

- [04:34:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16443) here and it says 2407.

- [04:34:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16449) okay oh it looks correct

- [04:34:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16470) but where are the others for example 3188 where is it where it is

- [04:34:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16473) 3188 where is it where it is is missing

- [04:34:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16475) is missing and which is an error

- [04:34:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16478) and which is an error because when we start like this

- [04:34:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16485) we are giving a reference here

- [04:34:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16491) a reference here direction

- [04:34:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16493) direction i think it is not a reference

- [04:34:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16499) and this is also a direction chosen direction

- [04:35:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16500) direction so this is getting modified

- [04:35:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16507) with each one

- [04:35:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16508) one therefore it is lost

- [04:35:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16513) therefore it is lost so i need a copy

- [04:35:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16515) so i need a copy shallow copy so

- [04:35:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16523) public cs chosen direction this will be a constructor

- [04:35:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16525) a constructor okay

- [04:35:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16532) it will take to direction instance

- [04:35:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16539) and it will copy this br bottom equivalent instance

- [04:35:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16543) bottom equivalent instance the bottom

- [04:35:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16544) the bottom is we are left equal to

- [04:35:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16548) is we are left equal to instance left is there

- [04:35:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16551) instance left is there what

- [04:35:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16553) what distance

- [04:35:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16555) distance right this vr

- [04:35:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16559) right this vr go to the top equation instance

- [04:36:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16562) go to the top equation instance all right

- [04:36:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16564) all right so now with this constructor we also

- [04:36:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16567) so now with this constructor we also need a default constructor of course

- [04:36:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16584) and these will be an anti-constructors this

- [04:36:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16601) let's say let's make this like this

- [04:36:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16603) let's make this like this and let's make this ask me

- [04:36:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16606) and let's make this ask me using direction yes

- [04:36:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16609) using direction yes this yes this will create a deep copy

- [04:36:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16614) this yes this will create a deep copy a deep

- [04:36:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16615) a deep copy of class

- [04:36:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16618) copy of class like object

- [04:37:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16621) like object and now

- [04:37:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16642) still didn't work i think yeah

- [04:37:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16644) yeah we are still missing

- [04:37:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16660) our location loop is not

- [04:38:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16688) okay i am trying to figure out the arrows

- [04:38:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16690) arrows these are starting

- [04:38:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16693) these are starting but there is no waiting

- [04:38:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16722) so these are getting colds without this being

- [04:38:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16739) this moment direction is enumeration so it's not a class type

- [04:39:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16741) it's not a class type we

- [04:39:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16747) get shallow copy perhaps i need to give it here as i move

- [04:39:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16750) it here as i move yeah

- [04:39:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16751) yeah just keep it as i need

- [04:39:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16753) just keep it as i need frozen direction

- [04:39:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16761) like this show it it will give a new instance for each one

- [04:39:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16765) it will give a new instance for each one probably we won't need this anymore

- [04:39:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16784) okay we will apply same logic

- [04:39:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16787) we will apply same logic in

- [04:39:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16789) in here too

- [04:40:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16801) yeah i see we have named it bad

- [04:40:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16805) i see we have named it bad okay enough

- [04:40:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16807) okay enough let's see

- [04:40:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16815) you can still we have oh no this time it is finding more

- [04:40:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16819) oh no this time it is finding more you see how important it is to

- [04:40:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16822) you see how important it is to have deeper knowledge about

- [04:40:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16825) have deeper knowledge about reference types how references are

- [04:40:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16827) reference types how references are passed

- [04:40:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16829) passed we have found many much

- [04:40:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16831) we have found many much but still it could not be enough

- [04:40:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16835) but still it could not be enough i'm not sure we will see

- [04:40:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16838) i'm not sure we will see okay now we have it

- [04:40:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16840) okay now we have it so let's now run the entire application

- [04:40:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16852) okay so instead of this let's start as this one and see how many we are going

- [04:40:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16854) this one and see how many we are going to find

- [04:41:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16861) all right so they will get completed

- [04:41:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16889) okay we still have some problems somewhere but

- [04:41:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16902) okay late found best iteration has to be for

- [04:41:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16906) each location

- [04:41:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16908) location therefore this has errors

- [04:41:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16911) therefore this has errors so let's uh

- [04:41:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16913) so let's uh remove this

- [04:42:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16927) but this won't be enough as well

- [04:42:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16933) i'm not sure maybe it will be enough let's see

- [04:42:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16945) one example this is

- [04:42:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16947) this is 795

- [04:42:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16962) i think i need to give new instances here as well

- [04:42:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16963) here as well so this is a new list

- [04:42:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16966) so this is a new list and here i need to give a new list

- [04:43:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16988) if it doesn't work i'm going to write and i'll check it box

- [04:43:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16994) okay this is a new list

- [04:43:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=16997) this is a new list now i don't need a deeper copy but it's

- [04:43:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17001) now i don't need a deeper copy but it's fine

- [04:43:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17002) fine now let's try again

- [04:43:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17018) okay found shortest path counts also got some i think

- [04:43:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17020) some i think overridden or something

- [04:43:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17031) let's also check whether it is fully monstrated or not

- [04:43:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17034) monstrated or not again we have it here we have it here

- [04:44:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17066) can we see the process it's launched

- [04:44:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17078) let's see which logs are getting generated

- [04:44:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17082) logs are getting generated i keep opening it with the wrong one

- [04:45:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17102) all right so now [Music]

- [04:45:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17103) [Music] we all see

- [04:45:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17105) we all see 795

- [04:45:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17108) 795 where is the others

- [04:45:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17126) okay now our stopping criteria is not working

- [04:45:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17141) extra stopping criteria of course it will be faster but not the fastest

- [04:45:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17146) will be faster but not the fastest okay

- [04:46:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17178) a counter yes yes i think i have an idea

- [04:46:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17190) okay let's remove this and go paste box and see

- [04:46:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17195) go paste box and see what is status

- [04:46:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17201) okay we can see different draws are getting processed

- [04:46:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17205) but majorly it is

- [04:46:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17207) majorly it is 795

- [04:46:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17209) 795 still

- [04:46:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17212) still you see the c-sharp the.net puts them

- [04:46:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17214) you see the c-sharp the.net puts them into a stair a queer

- [04:46:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17218) into a stair a queer in the stack and then process them

- [04:47:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17220) in the stack and then process them so until 795 ends

- [04:47:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17224) so until 795 ends it continued

- [04:47:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17229) so i have to keep max iteration count for patch

- [04:47:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17231) for patch location

- [04:47:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17233) location okay and

- [04:47:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17236) okay and therefore we will make it something like

- [04:47:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17238) therefore we will make it something like this

- [04:47:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17244) okay dictionary

- [04:47:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17252) integers and integer pitch patch location

- [04:47:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17254) location and marks iteration

- [04:47:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17257) and marks iteration it could will dictionary

- [04:47:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17259) it could will dictionary we are going to make this as

- [04:47:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17262) we are going to make this as new instance for perforate

- [04:48:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17284) okay let's remove them we are going to increase it after each

- [04:48:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17287) we are going to increase it after each iteration

- [04:48:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17291) in here's lock

- [04:48:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17297) all right iteration i could also use unlocking objects

- [04:48:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17300) unlocking objects let's put fastest

- [04:48:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17326) so whenever we use this we are going to use this lock

- [04:49:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17345) what else we need yeah it should work

- [04:49:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17367) iteration and if

- [04:49:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17374) contains key

- [04:49:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17398) and its original location its value in one

- [04:50:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17400) one as we will just increase it

- [04:50:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17413) and we had a return so much where was it

- [04:50:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17429) it was here so we are going to modify this as

- [04:50:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17433) so we are going to modify this as possible we can lock

- [04:50:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17441) acceleration and inside here if

- [04:51:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17465) and okay

- [04:51:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17466) okay we need another criteria which is

- [04:51:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17470) we need another criteria which is lock

- [04:51:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17476) shortest phone pads contains key

- [04:51:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17482) porsche original location

- [04:51:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17485) original location eq

- [04:51:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17486) eq by the way we need to first lock this

- [04:51:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17494) water spawn pads and if

- [04:51:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17510) erase this whenever we find a shortest path

- [04:51:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17514) this whenever we find a shortest path okay

- [04:51:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17516) okay now it should no longer than one million

- [04:52:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17520) now it should no longer than one million process

- [04:52:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17521) process one roots

- [04:52:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17534) do we increase the number somewhere yeah

- [04:52:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17535) yeah for example here

- [04:52:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17537) for example here let's see the iterations

- [04:52:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17539) let's see the iterations okay we see 200 thousands on some of

- [04:52:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17543) okay we see 200 thousands on some of them

- [04:52:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17544) them okay this one has over one million

- [04:52:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17548) okay this one has over one million so it is stupid i think already

- [04:52:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17553) so it is stupid i think already yes you see this the count is increasing

- [04:52:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17572) all right let's see the knobs

- [04:53:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17585) so these are the processor blocks we can see different locations are being

- [04:53:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17589) see different locations are being processed

- [04:53:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17590) processed let's see the shortest part

- [04:53:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17601) okay what we still did find lesser than expected

- [04:53:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17611) let's see which one is being currently processed and how

- [04:53:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17626) okay so currently it is checking different

- [04:53:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17630) so currently it is checking different uh roads

- [04:53:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17636) for example this one these are on this one

- [04:54:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17640) all right and it couldn't find them

- [04:54:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17644) right and it couldn't find them it couldn't find the shortest path for

- [04:54:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17646) it couldn't find the shortest path for them for example 19

- [04:54:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17649) them for example 19 46

- [04:54:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17657) okay it is already found waiting for the edge

- [04:54:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17674) so with maximum um

- [04:54:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17675) um let's say

- [04:54:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17677) let's say 100

- [04:54:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17679) 100 100

- [04:54:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17683) or 20 million

- [04:54:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17684) 20 million processes path we should

- [04:54:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17687) processes path we should be able to

- [04:54:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17694) get the job done so we are almost half of it i think

- [04:54:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17698) so we are almost half of it i think all right i will

- [04:55:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17711) check possible moments so this will be done then

- [04:55:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17713) done then all of the

- [04:55:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17724) no i'm not sure so currently what prevents

- [04:55:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17726) prevents my swordfish

- [04:55:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17727) my swordfish oh i see

- [04:55:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17734) i think this is already returned so it is not moving to nearest

- [04:55:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17741) four inches yes so i have to find a way for all of these

- [04:55:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17744) so i have to find a way for all of these tasks

- [04:55:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17745) tasks to be

- [04:55:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17747) to be finished

- [04:55:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17759) that is the second part you see currently yes it is

- [04:56:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17761) you see currently yes it is processing this one

- [04:56:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17764) processing this one but um

- [04:56:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17770) it is not waiting for road one the current road to be finished

- [04:56:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17773) road one the current road to be finished for continuing

- [04:56:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17775) for continuing so i have to wait

- [04:56:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17781) uh all the started tasks to be ended before

- [04:56:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17789) i can move to next okay it has fonts 833 pretty good

- [04:56:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17794) okay it has fonts 833 pretty good and the maximum is 1166.

- [04:56:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17802) these are the shape types where users can

- [04:56:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17804) can be in this

- [04:56:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17811) map so until um

- [04:56:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17813) until um all these tasks are done

- [04:56:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17817) all these tasks are done i have to wait

- [04:57:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17820) i have to wait for starting this

- [04:57:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17823) for starting this next

- [04:57:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17824) next route

- [04:57:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17826) route and how am i going to do that

- [04:57:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17835) okay we start each direction here it works

- [04:57:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17836) works but

- [04:57:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17838) but we have a problem

- [04:57:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17854) yeah okay let's first verify this is working

- [04:57:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17858) okay let's first verify this is working with single root

- [04:57:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17862) then we can solve the second problem

- [04:57:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17869) okay we should be close to the end

- [04:57:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17878) let's see which ones are being process it's right now

- [04:58:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17889) um over three gigabytes very notch

- [04:58:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17933) okay we have five shortest paths for pretty much all of

- [04:58:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=17934) pretty much all of the locations

- [05:00:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18012) all right we are getting close to the ants i will

- [05:00:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18014) we are getting close to the ants i will pause video

- [05:00:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18021) alright uh so processing has ended with 1119

- [05:00:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18028) uh actually 1126.

- [05:00:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18036) uh but this seems like missing some of them

- [05:00:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18037) them so first let's figure out which ones are

- [05:00:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18039) so first let's figure out which ones are missing

- [05:00:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18057) is nothing but

- [05:01:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18062) yes so i am going to use a query

- [05:01:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18065) so i am going to use a query and

- [05:01:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18067) and okay square id not in

- [05:01:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18076) okay so the software has missed 50 squares

- [05:01:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18080) the software has missed 50 squares like uh

- [05:01:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18082) like uh 844 and why

- [05:01:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18084) 844 and why why might it be

- [05:01:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18087) why might it be 844 where are you

- [05:01:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18097) okay it is true that 844

- [05:01:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18099) it is true that 844 doesn't have an exit path so the

- [05:01:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18102) doesn't have an exit path so the software did it correctly

- [05:01:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18111) 852 as well so this is our mapping error actually we shouldn't

- [05:01:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18112) actually we shouldn't uh set this as

- [05:01:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18114) uh set this as a possible location

- [05:01:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18116) a possible location and then one thousand eight hundred

- [05:02:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18120) and then one thousand eight hundred uh

- [05:02:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18121) uh one thousand seven

- [05:02:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18123) one thousand seven seven hundred seventy nine let's see

- [05:02:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18125) seven hundred seventy nine let's see where it is

- [05:02:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18137) here yes this is

- [05:02:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18140) yes this is uh

- [05:02:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18140) uh i'm not sure let's fill the map to see

- [05:02:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18143) i'm not sure let's fill the map to see it

- [05:02:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18149) okay yes this location is also uh impossible to move

- [05:02:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18152) uh impossible to move and 2070

- [05:02:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18155) and 2070 uh where could it be

- [05:02:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18158) uh where could it be so these are our mapping errors actually

- [05:02:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18161) so these are our mapping errors actually not the

- [05:02:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18163) not the software we just

- [05:02:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18165) software we just coded

- [05:02:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18168) coded okay

- [05:02:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18174) 2017 yeah these areas all impossible

- [05:02:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18176) impossible okay i think one of these

- [05:03:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18189) here and 2017

- [05:03:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18191) 2017 let's find out

- [05:03:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18201) okay 2017 actually 2017

- [05:03:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18203) actually 2017 has

- [05:03:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18204) has a ratio

- [05:03:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18209) yeah 2017 has a very

- [05:03:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18213) 2017 has a very art but it couldn't work why

- [05:03:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18221) okay now this is an error because 2017 certainly can reach

- [05:03:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18228) so let's try to figure out why it didn't work for

- [05:03:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18231) try to figure out why it didn't work for 2017

- [05:04:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18244) and after first fourth i will just break

- [05:04:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18256) we need to remove this return and break later

- [05:04:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18258) later these are for just testing proposals

- [05:04:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18275) okay just and it's weird

- [05:05:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18303) 20 and it has only one patch

- [05:05:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18305) and it has only one patch as you can see

- [05:05:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18307) as you can see the bottom

- [05:05:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18310) the bottom is the only exit exit it can go here

- [05:05:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18314) is the only exit exit it can go here then it costs 35

- [05:05:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18317) then it costs 35 okay it looks perfect

- [05:05:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18320) okay it looks perfect or it can go 33 yeah that's also correct

- [05:05:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18327) i'm in 34 33

- [05:05:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18329) 33 32

- [05:05:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18340) 273 where it is

- [05:05:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18346) okay 28 i'm in 27 00 27

- [05:05:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18351) i'm in 27 00 27 03

- [05:05:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18353) 03 3.

- [05:05:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18356) 3. it goes here

- [05:06:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18362) but why it doesn't pull the other paddings

- [05:06:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18364) paddings why it stops

- [05:06:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18376) i see only it's once from this path

- [05:06:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18379) once from this path and it didn't follow the other parts

- [05:06:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18381) and it didn't follow the other parts which are

- [05:06:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18394) okay it goes here and it doesn't go this way why

- [05:06:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18399) oh it falls there too okay

- [05:06:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18400) okay this is that thing okay

- [05:06:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18413) it goes out until 21 42

- [05:07:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18425) years yes then it should go to 2 thousands

- [05:07:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18434) okay after 20 20 or 40 it stops and that is certainly an airlock

- [05:07:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18441) okay and why

- [05:07:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18454) to the need when the name is this one

- [05:08:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18486) all right we came to that

- [05:08:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18488) we came to that location let's verify it

- [05:08:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18491) location let's verify it okay

- [05:08:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18496) then what do we have

- [05:08:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18526) yeah now it's it's supposed to start new months okay

- [05:08:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18536) so not this one

- [05:08:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18539) not this one not this one

- [05:09:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18545) okay we need another breakpoint to get into that one or just i will make

- [05:09:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18550) to get into that one or just i will make um

- [05:09:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18552) um parallel for each options as well

- [05:09:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18563) but it still wouldn't really get me that okay so

- [05:09:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18592) okay so we are there and which direction we are

- [05:09:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18595) we are there and which direction we are going

- [05:09:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18596) going left

- [05:09:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18598) left so currently

- [05:10:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18600) so currently right is selected

- [05:10:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18602) right is selected so left will move okay

- [05:10:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18605) so left will move okay now we are going bottom currently bottom

- [05:10:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18609) now we are going bottom currently bottom is true

- [05:10:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18610) is true okay so we can go bottom

- [05:10:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18613) okay so we can go bottom oh i see

- [05:10:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18621) for going there we have chosen bottom but

- [05:10:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18622) but now we can move only top

- [05:10:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18629) okay in this case

- [05:10:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18643) we have to go to top okay

- [05:10:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18649) therefore i need to restart this

- [05:11:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18668) this prevented us from [Music]

- [05:11:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18670) [Music] going back and forth

- [05:11:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18672) going back and forth until now but

- [05:11:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18676) until now but now we have encountered the problem

- [05:11:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18678) now we have encountered the problem because we have to go bottom then we

- [05:11:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18679) because we have to go bottom then we have to go up

- [05:11:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18688) the only way from getting out of here is trader vehicle bottom left

- [05:11:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18690) trader vehicle bottom left and then right

- [05:11:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18705) rare situation so we have to follow this path

- [05:11:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18708) so we have to follow this path to be able to reach

- [05:12:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18773) okay tasks are getting

- [05:13:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18798) okay the only way is i think

- [05:13:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18805) we have to check next top location whether it is impossible or not

- [05:13:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18814) so both

- [05:13:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18839) and we make that check here if

- [05:14:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18842) we make that check here if this is true

- [05:14:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18844) this is true let me just return

- [05:14:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18869) and at next possible location before the pause

- [05:15:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18902) okay true

- [05:15:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18903) true false

- [05:15:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18905) false full false true false yes

- [05:15:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18909) full false true false yes now let's see

- [05:15:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18912) now let's see how we will

- [05:15:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18913) how we will get

- [05:15:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18919) what kind of results you are going to get

- [05:15:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18920) get with this way this approach

- [05:15:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18958) which is something that's happening right now

- [05:16:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18979) oh i know the address

- [05:16:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=18985) we have to add this into

- [05:16:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19007) enough that's not here

- [05:18:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19095) okay it was causing an error but since we are

- [05:18:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19098) it was causing an error but since we are inside a task it wasn't

- [05:18:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19101) inside a task it wasn't throwing and causing application to

- [05:18:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19103) throwing and causing application to break

- [05:19:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19191) yeah this is not possible too next location is 2006

- [05:19:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19195) location is 2006 2006 2006 because we didn't calculate

- [05:19:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19199) 2006 2006 because we didn't calculate next location yet

- [05:20:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19222) change and modify this

- [05:20:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19231) okay let's leave a little bit

- [05:20:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19234) let's leave a little bit yes

- [05:20:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19236) yes yes

- [05:20:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19237) yes yes

- [05:21:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19284) 2017 i think 71 19

- [05:21:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19291) 14 20 21 to

- [05:21:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19294) 20 21 to 34

- [05:21:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19296) 34 that's the only location it can go

- [05:21:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19310) yes this is the correct one so

- [05:21:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19312) so okay

- [05:21:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19314) okay let's go

- [05:22:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19342) all right now we will move to the next case

- [05:22:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19343) case so let's

- [05:22:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19345) so let's move it here

- [05:22:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19347) move it here okay so

- [05:22:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19351) okay so check locations is like this

- [05:22:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19365) okay next location is

- [05:22:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19366) is yeah

- [05:22:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19370) oh wait

- [05:23:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19380) you know 2017

- [05:24:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19449) yes the hashtag size is like this but still still

- [05:24:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19451) still still we have another roof

- [05:24:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19457) after 2440 it didn't

- [05:24:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19468) so let's add this here and see what happens

- [05:24:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19478) okay then

- [05:24:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19483) movement direction is right but the next step location is

- [05:24:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19488) but the next step location is okay

- [05:24:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19497) okay not this one i need to check the original location

- [05:25:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19512) yes okay now the moment direction is

- [05:25:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19523) currently we went bottom but the next location

- [05:25:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19524) location is

- [05:25:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19525) is 2078

- [05:25:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19533) 76 or something so we are

- [05:25:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19534) so we are it's here

- [05:26:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19564) so when it tries to go here it is impossible

- [05:26:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19566) it is impossible therefore

- [05:26:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19575) uh i need to change chosen direction and recall another

- [05:26:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19577) recall another method

- [05:26:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19585) which will be plus

- [05:26:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19586) plus two yes to call count

- [05:27:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19626) another check location yeah this is going to be

- [05:27:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19628) yeah this is going to be a complex thing

- [05:27:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19631) a complex thing which

- [05:27:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19644) remove at

- [05:27:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19653) count minus one and add and a list of

- [05:27:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19673) avoid listening so it's just removes done

- [05:27:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19675) done what can i do

- [05:28:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19686) okay this is the remote

- [05:28:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19710) select range

- [05:28:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19728) changes range zero

- [05:28:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19730) zero okay uh check locations

- [05:28:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19739) minus one so i'm not going to get

- [05:29:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19746) the last element so we have count minus one

- [05:29:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19749) we have count minus one then to list

- [05:29:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19751) then to list then at

- [05:29:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19757) okay i am going to add a new location which will be

- [05:29:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19766) here s minus

- [05:31:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19882) where is the arrow here why i can't see it right now

- [05:31:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19891) okay this is versions [Music]

- [05:31:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19894) [Music] the this is weird

- [05:31:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19917) and change this volume

- [05:32:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19938) okay the direction

- [05:32:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19946) will come from yes

- [05:32:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19952) okay the movement direction will be top yes

- [05:32:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19965) so this is going to make a small to do top

- [05:32:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19976) this should enter here only when we are at the last location

- [05:32:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19979) at the last location you're 21 35 okay turn around 25 there

- [05:33:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19983) you're 21 35 okay turn around 25 there it is

- [05:33:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19994) 21 35 you can try that it's fine

- [05:33:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=19998) you can try that it's fine then we have

- [05:33:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20000) then we have this one

- [05:33:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20008) this one this one okay it continues to recall itself or

- [05:33:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20010) okay it continues to recall itself or something

- [05:34:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20061) check location possible

- [05:34:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20063) possible or removable

- [05:34:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20083) okay this is already published why we can't use this

- [05:35:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20109) and it's going to be a turn off

- [05:35:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20144) and this

- [05:35:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20146) this okay if it is not moving

- [05:35:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20157) also this will be the way

- [05:36:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20197) okay and one

- [05:36:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20200) and one last step

- [05:36:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20204) last step can we fix them

- [05:37:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20230) okay now let's try what happens let's see

- [05:37:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20258) okay we didn't come here and that is a mistake

- [05:38:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20284) okay so

- [05:38:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20291) we are here and next location is this one

- [05:38:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20292) one twenty two fourth

- [05:38:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20294) twenty two fourth true

- [05:38:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20297) then the movement direction is

- [05:38:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20309) [Music] yes okay

- [05:38:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20338) so forth

- [05:40:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20445) okay now tomorrow

- [05:40:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20447) tomorrow tomorrow october 4th 21 34 is

- [05:41:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20466) is here and just

- [05:41:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20468) and just okay

- [05:41:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20473) no no

- [05:41:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20474) no yes this is the

- [05:41:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20476) yes this is the location

- [05:41:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20478) location so the name the ad location is 2 000

- [05:41:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20483) so the name the ad location is 2 000 okay and what happens

- [05:42:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20569) okay and then it's going to add this one yes

- [05:42:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20579) i also need to keep nearly edited so i won't be adding them

- [05:43:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20582) nearly edited so i won't be adding them again

- [05:43:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20588) and how am i gonna do that is a mystery

- [05:43:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20599) yeah it can be like this

- [05:43:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20601) it can be like this if

- [05:43:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20603) if contains

- [05:44:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20679) okay it has to come here so i'm not going to move that

- [05:47:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20851) with these two lists we are actually generating a hard copy

- [05:47:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20874) okay and we got an error somewhere or something

- [05:48:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20934) okay now this is the uh knife

- [05:48:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20939) okay bottom two right through talk to me yeah that is the mistake

- [05:49:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20966) the error mean god is starting here actually i think

- [05:49:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20977) okay so this has bottom two right through top three

- [05:49:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20980) bottom two right through top three this is the mistake

- [05:49:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=20981) this is the mistake why it is going that way

- [05:50:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21001) so why why not working

- [05:50:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21014) right on top to the bottom false but when we get inside of here

- [05:50:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21040) this is also getting changed until that task is started

- [05:51:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21067) okay wow

- [05:51:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21068) wow now we have a problem or something

- [05:51:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21071) now we have a problem or something oh no it did work exactly as it should

- [05:51:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21074) oh no it did work exactly as it should be

- [05:51:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21075) be all right so now it's

- [05:51:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21090) okay the shortest path now it has found is this one and let's

- [05:51:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21092) it has found is this one and let's verify whether it is true or not

- [05:51:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21096) verify whether it is true or not 2017.

- [05:51:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21108) starting point then 21 24th here's 2125

- [05:51:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21110) 2125 years

- [05:51:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21113) years and it goes until here then

- [05:51:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21116) and it goes until here then 74

- [05:51:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21118) 74 10

- [05:52:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21120) 10 okay true

- [05:52:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21123) okay true and then here's

- [05:52:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21126) and then here's okay

- [05:53:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21203) okay let's figure it out

- [05:53:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21212) okay it did come here

- [05:53:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21223) yeah then uh 13 79

- [05:53:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21224) 79 here 10 13 15

- [05:53:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21228) here 10 13 15 years

- [05:53:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21229) years 10 13 16 years

- [05:53:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21233) 10 13 16 years okay until here 13 20

- [05:53:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21237) okay until here 13 20 true

- [05:54:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21248) yes yes it is working okay finally it is working it could have

- [05:54:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21250) okay finally it is working it could have found here but it didn't but it is

- [05:54:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21253) found here but it didn't but it is totally fine

- [05:54:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21259) all right snuff now we have

- [05:54:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21260) now we have another

- [05:54:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21262) another final step but it is already too late

- [05:54:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21265) final step but it is already too late for me so i will take a break and

- [05:54:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21267) for me so i will take a break and hopefully i will continue tomorrow

- [05:54:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21270) hopefully i will continue tomorrow which are

- [05:54:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21272) which are let me show

- [05:54:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21278) first i will make sure that at least

- [05:54:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21280) at least two tiles are

- [05:54:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21285) found what i mean is

- [05:55:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21305) okay if this is the case and

- [05:55:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21319) oh yeah

- [05:55:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21337) for example if it starts on a grass area let's say

- [05:55:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21338) let's say here

- [05:56:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21412) and how did that happen okay it happens from this one

- [05:56:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21415) from this one [Music]

- [05:57:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21422) as you know we check we add

- [05:57:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21424) we add the remaining parts

- [05:57:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21427) the remaining parts with this method

- [05:57:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21437) so if the lst term is

- [05:57:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21441) if phone equal to one

- [05:57:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21444) phone equal to one we will just continue yes now we should

- [05:57:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21448) we will just continue yes now we should let's fix it i don't want single

- [05:57:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21450) let's fix it i don't want single locations to be added into my path

- [05:57:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21453) locations to be added into my path finding

- [05:57:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21454) finding so that my application will work

- [05:57:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21458) so that my application will work correctly as my intention

- [05:57:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21460) correctly as my intention it depends on all it depends

- [05:57:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21464) it depends on all it depends on your design

- [05:58:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21523) because we didn't print it yes we need to print it here as well

- [06:00:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21607) okay so

- [06:00:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21609) so the last thing left

- [06:00:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21612) the last thing left uh now is evading all of these

- [06:00:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21622) iterations to be completed in this case since we are using task

- [06:00:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21625) in this case since we are using task factory here

- [06:00:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21627) factory here we have to wait them

- [06:00:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21643) okay actually i won't use a trust factory but just like this

- [06:00:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21646) use a trust factory but just like this so it won't be

- [06:00:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21658) okay and yeah we also need to make this for

- [06:01:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21662) and yeah we also need to make this for other locations as well

- [06:01:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21683) so for bottom we use the top for left we will use right

- [06:01:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21685) will use right okay

- [06:01:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21686) okay so it will be like this

- [06:01:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21695) and this time we will make

- [06:01:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21717) and we will give nice true

- [06:01:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21719) true yeah

- [06:02:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21728) we give top dash we set top through top

- [06:02:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21731) we set top through top and in this case we give

- [06:02:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21734) and in this case we give right

- [06:02:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21736) right and reset

- [06:02:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21745) right through yes this will be true and this will be false

- [06:02:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21750) okay and same thing will apply to

- [06:02:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21754) and same thing will apply to so we said right through that false and

- [06:02:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21757) so we said right through that false and the right

- [06:02:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21759) the right same thing will apply to left

- [06:02:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21761) same thing will apply to left this time

- [06:02:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21763) this time for left it will be minus one

- [06:02:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21769) it can be false through and this will be left yes

- [06:02:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21773) through and this will be left yes and the one final

- [06:02:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21776) and the one final thing is for

- [06:02:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21779) thing is for top

- [06:03:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21781) top in this case it's very plus

- [06:03:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21788) this will be true this is going to fall and we will give

- [06:03:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21791) and we will give one yes

- [06:03:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21793) one yes okay it's

- [06:03:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21795) okay it's getting pretty messy

- [06:03:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21798) getting pretty messy and one final thing is

- [06:03:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21801) and one final thing is evading

- [06:03:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21808) uh the roads by the way i will modify this with

- [06:03:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21815) road id so we can lock them and check them later

- [06:03:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21816) check them later why i'm going to give this is shortest

- [06:03:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21819) why i'm going to give this is shortest path found

- [06:03:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21822) path found let's roll tidy

- [06:03:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21825) let's roll tidy yes and whenever this is

- [06:03:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21830) yes and whenever this is let's just give you a remote id

- [06:04:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21844) the one final things we still couldn't get that

- [06:04:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21848) here it will be like list

- [06:04:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21850) it will be like list task

- [06:04:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21854) that is the asks tasks completely in this task

- [06:04:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21858) asks tasks completely in this task and

- [06:04:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21859) and now i mean task

- [06:04:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21862) now i mean task this is interesting task id i add lsd

- [06:04:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21865) this is interesting task id i add lsd tasks

- [06:04:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21867) tasks [Music]

- [06:04:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21868) [Music] and that and trust wait all

- [06:04:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21873) and that and trust wait all with lst tasks

- [06:04:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21877) with lst tasks why i am making this is that

- [06:04:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21888) okay task material params tasks task to any

- [06:04:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21895) okay because if i don't wait the starter

- [06:04:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21898) because if i don't wait the starter tasks to be completed

- [06:05:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21902) tasks to be completed then

- [06:05:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21906) it will move to the new root id without waiting

- [06:05:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21909) move to the new root id without waiting okay

- [06:05:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21910) okay so now when i make these two

- [06:05:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21933) okay now it should scan all of the roots and

- [06:05:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21935) and write the values

- [06:05:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21937) write the values by the way i will pass video here

- [06:05:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21940) by the way i will pass video here so until tomorrow

- [06:05:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21943) so until tomorrow hopefully

- [06:05:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21945) hopefully it will find all of pets

- [06:05:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21952) meanwhile i am sleeping so our application should be pretty much

- [06:05:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21955) so our application should be pretty much ready

- [06:06:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21970) wow lowe's process part is very low if it is true

- [06:06:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21971) it is true it should be

- [06:06:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21978) okay sure this one

- [06:06:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=21979) sure this one volunteers

- [06:06:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22007) yeah pretty fast okay i'm going to pause the video

- [06:06:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22009) the video all right uh during the night uh it has

- [06:06:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22014) all right uh during the night uh it has processed 22

- [06:06:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22016) processed 22 rules successfully for example the route

- [06:07:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22020) rules successfully for example the route 22 is fully

- [06:07:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22023) 22 is fully process it and all of the notes are

- [06:07:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22025) process it and all of the notes are found

- [06:07:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22026) found i checked but in 23 row 23 we had an

- [06:07:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22031) i checked but in 23 row 23 we had an error so it didn't go

- [06:07:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22033) error so it didn't go correctly i don't know why into row 20

- [06:07:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22036) correctly i don't know why into row 20 we have also found all of the paths

- [06:07:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22041) we have also found all of the paths uh so

- [06:07:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22043) uh so yesterday i have found a tiny error

- [06:07:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22046) yesterday i have found a tiny error after pausing the video which was

- [06:07:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22050) after pausing the video which was we had to add a check here

- [06:07:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22053) we had to add a check here and i just noticed another error

- [06:07:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22057) and i just noticed another error that

- [06:07:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22058) that we are restarting the checked paths but

- [06:07:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22061) we are restarting the checked paths but we need to

- [06:07:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22063) we need to lock it first

- [06:07:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22066) lock it first okay like

- [06:08:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22080) yes okay

- [06:08:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22081) okay um [Music]

- [06:08:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22084) [Music] so why wrote 23 was

- [06:08:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22093) not complete let's find it

- [06:08:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22098) also add also enable our

- [06:08:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22112) for this login let's add a parameter here

- [06:08:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22128) okay so not each time we won't make it as

- [06:09:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22145) all right and now let's try i am suspicious that

- [06:09:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22147) am suspicious that our addition to here uh

- [06:09:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22155) for certain maps because of that i mean for certain locations we are

- [06:09:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22157) i mean for certain locations we are changing direction

- [06:09:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22160) changing direction so

- [06:09:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22162) so row 23 is

- [06:09:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22164) row 23 is each pathway

- [06:09:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22166) each pathway bridge pathway

- [06:09:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22168) bridge pathway probably has some kind of jump points it

- [06:09:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22172) probably has some kind of jump points it can be causing errors

- [06:09:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22182) yes yes

- [06:09:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22184) yes okay in this

- [06:09:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22186) okay in this path

- [06:09:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22192) yeah we have jump points from here to here and

- [06:09:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22194) here and probably that is calling

- [06:09:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22197) probably that is calling on errors

- [06:09:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22199) on errors but it won't be able to find

- [06:10:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22208) it won't be able to process jump points and when it's jump point

- [06:10:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22211) and when it's jump point uh

- [06:10:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22212) uh we have to think as

- [06:10:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22220) that it is

- [06:10:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22221) it is unpassable location probably for our

- [06:10:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22224) unpassable location probably for our application

- [06:10:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22226) application okay

- [06:10:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22243) okay and let's return to our shape types

- [06:10:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22256) i think it is 12 1 3 12 14 14 3

- [06:10:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22257) 3 5

- [06:11:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22266) and 14 is jump point yes

- [06:11:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22269) 14 is jump point yes 12 and 14

- [06:11:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22313) okay currently it is working maybe the error was something else i'm not sure

- [06:11:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22315) error was something else i'm not sure we are just checking it right now

- [06:12:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22340) well we already count them as not moving 12 and 17 14.

- [06:12:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22356) and let's see how many of them are bought already

- [06:12:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22365) for example let's say here

- [06:12:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22367) let's say here did we get there

- [06:12:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22374) no not yet but

- [06:12:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22377) but no none of them are spawned yet

- [06:13:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22380) no none of them are spawned yet early processing like here's

- [06:13:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22383) early processing like here's huge

- [06:13:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22385) huge i think

- [06:13:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22420) okay yeah looking good progressing good

- [06:13:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22424) yeah looking good progressing good for example progressing this

- [06:13:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22426) for example progressing this and now here's

- [06:14:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22442) okay yeah good

- [06:14:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22459) okay for example this is a jump point from this point the user jumps here

- [06:14:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22462) from this point the user jumps here it is like passing through under the

- [06:14:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22465) it is like passing through under the bridge

- [06:14:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22466) bridge since our game is

- [06:14:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22468) since our game is uh

- [06:14:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22469) uh our game uses single uh static image we

- [06:14:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22472) our game uses single uh static image we don't have

- [06:14:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22473) don't have layered images therefore

- [06:14:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22476) layered images therefore we don't have animation or anything to

- [06:14:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22479) we don't have animation or anything to pass under the bridge

- [06:14:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22481) pass under the bridge so we are jumping user from

- [06:14:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22483) so we are jumping user from this point to this point

- [06:14:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22489) or change actually

- [06:14:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22491) actually from jump points it could use from here

- [06:14:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22494) from jump points it could use from here to here but

- [06:14:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22496) to here but it would make the platforming even

- [06:14:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22499) it would make the platforming even hardest

- [06:15:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22501) hardest and unnecessary

- [06:15:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22519) also the user can stand on here and work on that

- [06:15:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22521) on that only this should be impossible yes

- [06:15:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22525) only this should be impossible yes okay

- [06:15:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22526) okay 1488 location

- [06:15:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22537) by the way these area will take more time because from here it will go dash

- [06:16:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22568) okay 15 49.

- [06:16:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22583) it's slowly progressing all these notations now

- [06:16:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22600) 15 51 and 15 52 is gonna go

- [06:17:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22631) yeah it's working as intended as you can see it is picking the

- [06:17:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22634) as you can see it is picking the longer paths

- [06:17:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22636) longer paths because we didn't implement jump points

- [06:17:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22640) because we didn't implement jump points therefore the application is not able to

- [06:17:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22644) therefore the application is not able to use them

- [06:17:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22650) we could make it use actually those points

- [06:17:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22657) but we have to implement jumping

- [06:17:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22659) jumping so if the next location comes here

- [06:17:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22662) so if the next location comes here we will make it equal to here

- [06:17:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22669) okay and with that approach the application will

- [06:17:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22671) with that approach the application will be able to

- [06:18:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22681) we can do that actually but i need to add them to here it's possible

- [06:18:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22684) i need to add them to here it's possible though

- [06:18:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22693) should i edit i wonder okay

- [06:18:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22720) so in the application when the nearest

- [06:18:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22722) when the nearest location is calculated

- [06:18:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22725) location is calculated new looking

- [06:18:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22727) new looking location is calculated

- [06:19:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22743) it will jump to the next location so

- [06:19:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22745) so after next stop location edit

- [06:19:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22765) but that would even make the things further complicated let's just

- [06:19:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22785) yeah it's processing pretty good 18

- [06:19:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22787) 18 14 right now

- [06:19:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22797) maybe he had an error here it could have an error here for example

- [06:19:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22799) it could have an error here for example it will go from there's there

- [06:20:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22802) it will go from there's there no we should be able to find it

- [06:20:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22805) no we should be able to find it but let's say start from here it will go

- [06:20:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22807) but let's say start from here it will go top

- [06:20:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22809) top the bottom

- [06:20:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22810) the bottom i'm not sure very big

- [06:20:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22818) i'm suspicious that [Music]

- [06:20:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22820) [Music] since we add a new location here it

- [06:20:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22822) since we add a new location here it could be causing some kind of

- [06:20:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22826) could be causing some kind of uh

- [06:20:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22832) loop but it shouldn't i'm not sure let's see

- [06:20:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22844) okay just here right now

- [06:20:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22853) meanwhile we can code the next step the next step is

- [06:20:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22856) next step is adding font shapes

- [06:21:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22864) adding font roots to our database i mean the pathfinding bridge

- [06:21:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22868) i mean the pathfinding bridge so i didn't define it

- [06:21:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22872) so i didn't define it okay here the shortest path

- [06:21:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22874) okay here the shortest path i will also

- [06:21:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22876) i will also um

- [06:21:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22881) i will also lock the font cut as well

- [06:21:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22888) pull that this will be

- [06:21:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22895) box again

- [06:21:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22908) as a backup in case we want to use full pad

- [06:21:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22913) it's not necessary it's it's totally up to your design

- [06:21:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22914) to your design so how we gonna do it it is extremely

- [06:21:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22917) so how we gonna do it it is extremely simple

- [06:22:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22922) when the processing of the root

- [06:22:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22924) the processing of the root is done

- [06:22:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22927) is done which is here

- [06:22:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22929) which is here we will just iterate through

- [06:22:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22934) we will just iterate through the

- [06:22:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22935) the front shortest paths

- [06:22:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22938) front shortest paths shortest phone pads

- [06:22:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22944) pad then

- [06:22:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22950) uh we will add them into the our shortest path table

- [06:22:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22953) our shortest path table so let's refresh the intensity

- [06:22:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22959) okay let's open an

- [06:22:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22960) let's open an inquiry intellisense refresh

- [06:22:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22964) inquiry intellisense refresh insert into

- [06:22:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22967) insert into shortest paths

- [06:22:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22969) shortest paths and let's write the

- [06:22:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22971) and let's write the column names it is the embedder approach

- [06:22:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22974) column names it is the embedder approach node id

- [06:22:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22976) node id gear id

- [06:23:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22982) you can also name it as location let's

- [06:23:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22983) let's let's

- [06:23:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=22985) let's let's name it as coordinate originate

- [06:23:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23000) i'm not sure if this is correct for english or

- [06:23:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23011) um no no no i am changing and correcting off

- [06:23:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23012) off this will cause a lot of problem

- [06:23:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23019) one second it's great i mean

- [06:23:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23022) it's great i mean i need to change the others uh

- [06:23:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23028) design shortest paths yeah road id current location

- [06:24:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23043) then we can use generate i don't know

- [06:24:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23045) generate i don't know insert into

- [06:24:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23048) insert into row tidy by the way if your

- [06:24:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23051) row tidy by the way if your column doesn't have spaces

- [06:24:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23053) column doesn't have spaces you don't need to use these parentheses

- [06:24:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23056) you don't need to use these parentheses but if that has spaces

- [06:24:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23058) but if that has spaces you have to use or special characters

- [06:24:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23061) you have to use or special characters column names like this

- [06:24:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23063) column names like this this ensures that it is a column name

- [06:24:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23066) this ensures that it is a column name it's totally fine

- [06:24:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23068) it's totally fine how you use it

- [06:24:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23071) how you use it and then values

- [06:24:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23073) and then values okay this will be our

- [06:24:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23075) okay this will be our query

- [06:24:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23077) query and if you want to execute them as a

- [06:24:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23079) and if you want to execute them as a batch we can also execute them as a page

- [06:24:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23082) batch we can also execute them as a page i will show you how to do that

- [06:24:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23084) i will show you how to do that instead of each time opening database

- [06:24:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23086) instead of each time opening database connection and think

- [06:24:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23089) connection and think okay so far this is going go 2204

- [06:24:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23097) which is on the bridge i think

- [06:25:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23116) yeah here's somewhere around here okay

- [06:25:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23117) okay let's make it continue

- [06:25:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23119) let's make it continue for batch

- [06:25:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23120) for batch batching i will use string rulers

- [06:25:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23124) batching i will use string rulers queries

- [06:25:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23137) okay uh we will append

- [06:25:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23139) uh we will append uh a plant in line

- [06:25:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23142) uh a plant in line uh let's see we'll split four months

- [06:25:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23146) uh let's see we'll split four months so the road id will be the road id we

- [06:25:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23149) so the road id will be the road id we have already

- [06:25:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23157) then uh current location will be

- [06:25:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23159) uh current location will be location id

- [06:26:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23165) okay it is like this then

- [06:26:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23177) for the direction [Music]

- [06:26:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23179) [Music] we are going to use

- [06:26:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23187) okay we need to calculate the direction from

- [06:26:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23189) we need to calculate the direction from the

- [06:26:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23204) and we don't keep the direction information

- [06:26:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23205) information actually it would be better for us to

- [06:26:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23208) actually it would be better for us to keep direction information it would save

- [06:26:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23210) keep direction information it would save us time

- [06:27:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23225) we would need to recalculate the direction

- [06:27:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23235) so this will work as when the user is on this tile we need to check the next

- [06:27:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23237) this tile we need to check the next style and calculate the direction

- [06:27:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23253) since this is the dictionary first i will put all of them into a list

- [06:27:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23256) first i will put all of them into a list so that i can accelerate properly

- [06:27:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23263) okay lists

- [06:28:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23304) okay we just need the next actually to find the color uh

- [06:28:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23306) to find the color uh direction

- [06:28:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23313) yeah we don't need this yeah yeah we can just make it work

- [06:28:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23318) okay so uh the original

- [06:28:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23320) the original location

- [06:28:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23321) location [Music]

- [06:28:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23322) [Music] will be not the current location but

- [06:28:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23325) will be not the current location but since this is

- [06:28:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23327) since this is this will run after

- [06:28:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23329) this will run after you process it all the

- [06:28:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23337) will be the key not current location

- [06:29:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23340) not current location then

- [06:29:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23341) then we are going to make it like this

- [06:29:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23343) we are going to make it like this [Music]

- [06:29:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23368) one here but not the value it will be the first one not the

- [06:29:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23371) the first one not the i mean the second value because the

- [06:29:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23373) i mean the second value because the first one here is the

- [06:29:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23375) first one here is the key

- [06:29:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23376) key and the next one here is the next

- [06:29:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23378) and the next one here is the next location since we have we keep

- [06:29:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23381) location since we have we keep every location as a separate key entity

- [06:29:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23385) every location as a separate key entity uh we don't need to make extra

- [06:29:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23387) uh we don't need to make extra calculation okay

- [06:29:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23390) calculation okay okay it did work this time so the error

- [06:29:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23392) okay it did work this time so the error must have been at some other place

- [06:29:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23397) must have been at some other place it found

- [06:29:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23399) it found 961 and let's verify it

- [06:30:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23403) 961 and let's verify it okay

- [06:30:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23405) okay 196 961

- [06:30:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23407) 196 961 [Music]

- [06:30:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23409) [Music] so why it's

- [06:30:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23411) so why it's with me

- [06:30:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23413) with me yes

- [06:30:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23416) yes 961.

- [06:30:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23425) okay it is close we also need to exclude 12.

- [06:30:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23435) okay and

- [06:30:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23437) and 14 we also need excellent 14

- [06:30:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23449) yeah it is working

- [06:30:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23457) we even have extra few more i wonder something else seems

- [06:31:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23485) i wonder if we could include those two as well

- [06:31:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23499) so i will remove 12 and 14

- [06:31:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23508) since there are jump points

- [06:31:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23510) jump points and road gates

- [06:31:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23512) and road gates i will just make it like this i wonder

- [06:31:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23514) i will just make it like this i wonder how good it's from

- [06:31:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23517) how good it's from i need four corners

- [06:32:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23521) okay because theoretically only the user user

- [06:32:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23524) because theoretically only the user user can be here

- [06:32:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23527) can be here or the user can be

- [06:32:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23529) or the user can be here at the starting point the rotate

- [06:32:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23533) here at the starting point the rotate but it can never be on an impossible

- [06:32:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23535) but it can never be on an impossible location so theoretically the user could

- [06:32:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23538) location so theoretically the user could start there

- [06:32:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23543) and let's also continue writing our insert

- [06:32:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23546) let's also continue writing our insert query this is the final step

- [06:32:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23548) query this is the final step where was it

- [06:32:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23554) okay here and

- [06:32:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23555) and next so now we need to calculate the

- [06:32:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23557) next so now we need to calculate the direction

- [06:32:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23559) direction uh

- [06:32:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23560) uh if you remember we have made directions

- [06:32:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23563) if you remember we have made directions like this top one right two bottom three

- [06:32:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23565) like this top one right two bottom three left four

- [06:32:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23568) left four we will just

- [06:32:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23570) we will just get the direction private

- [06:32:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23572) get the direction private void

- [06:32:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23576) return direction

- [06:32:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23578) direction it will take in here

- [06:33:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23581) it will take in here let's see here

- [06:33:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23582) let's see here first

- [06:33:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23583) first years

- [06:33:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23586) years second

- [06:33:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23592) and so so if next if

- [06:33:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23595) so if next if your second equals

- [06:33:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23597) your second equals okay i am extremely sorry that i see

- [06:33:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23599) okay i am extremely sorry that i see that the recording was stopped

- [06:33:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23602) that the recording was stopped for some reason i don't know

- [06:33:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23604) for some reason i don't know when i just started writing the return

- [06:33:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23607) when i just started writing the return direction method so the for the return

- [06:33:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23609) direction method so the for the return direction method we did get first second

- [06:33:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23612) direction method we did get first second and max column count

- [06:33:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23614) and max column count so if it is equal to first plus one that

- [06:33:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23617) so if it is equal to first plus one that means it is the direction right so we

- [06:33:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23620) means it is the direction right so we are returning the value of uh

- [06:33:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23622) are returning the value of uh enumeration direction right

- [06:33:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23624) enumeration direction right it is minus one it's a direction left

- [06:33:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23627) it is minus one it's a direction left if it is uh

- [06:33:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23633) first minus max column count it is direction top and if it is first plus

- [06:33:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23635) direction top and if it is first plus max compound it is direction button

- [06:33:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23638) max compound it is direction button so this is our return direction

- [06:34:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23640) so this is our return direction method

- [06:34:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23643) method and

- [06:34:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23644) and now we have the direction we are going

- [06:34:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23645) now we have the direction we are going to get also full path to save them in

- [06:34:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23648) to get also full path to save them in here

- [06:34:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23651) here and then the query is ready like this we

- [06:34:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23654) and then the query is ready like this we are giving road ids i wrote i mean the

- [06:34:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23657) are giving road ids i wrote i mean the column names then the values like this

- [06:34:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23659) column names then the values like this for the full pet we need to use strings

- [06:34:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23662) for the full pet we need to use strings since it is a character

- [06:34:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23665) since it is a character and if our stringbuilders

- [06:34:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23668) and if our stringbuilders length exits

- [06:34:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23670) length exits 100 000 then we are executing it

- [06:34:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23674) 100 000 then we are executing it in the database uh this is the

- [06:34:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23675) in the database uh this is the methodology that i

- [06:34:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23678) methodology that i developed for batch execution but there

- [06:34:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23680) developed for batch execution but there could be better ways actually there is a

- [06:34:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23682) could be better ways actually there is a there's something called as batch

- [06:34:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23683) there's something called as batch execution in sql server but it is a

- [06:34:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23686) execution in sql server but it is a little bit more complex

- [06:34:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23688) little bit more complex this also works very well for me in many

- [06:34:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23690) this also works very well for me in many cases

- [06:34:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23692) cases and then we restart the

- [06:34:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23695) and then we restart the queries

- [06:34:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23697) queries and after the iteration

- [06:34:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23699) and after the iteration for the leftover queries we execute it

- [06:35:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23701) for the leftover queries we execute it one more time like this we execute the

- [06:35:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23704) one more time like this we execute the remaining queries

- [06:35:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23705) remaining queries so i want to test

- [06:35:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23708) so i want to test the full road 20. i just did a test but

- [06:35:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23712) the full road 20. i just did a test but it didn't show up in the video

- [06:35:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23715) it didn't show up in the video [Music]

- [06:35:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23717) [Music] so now we are going to

- [06:35:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23718) so now we are going to i'm going to test the full road

- [06:35:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23720) i'm going to test the full road uh 23

- [06:35:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23722) uh 23 um which

- [06:35:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23724) um which after uh

- [06:35:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23727) after uh removing

- [06:35:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23729) removing shape type 12 and 14 which are road

- [06:35:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23732) shape type 12 and 14 which are road gates and jump points

- [06:35:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23735) gates and jump points okay

- [06:35:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23735) okay and let's

- [06:35:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23737) and let's start with our debugging

- [06:35:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23739) start with our debugging okay let's see

- [06:35:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23746) office we will find all locations current our table is empty

- [06:35:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23750) current our table is empty okay i will pause video here

- [06:35:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23757) all right it has found 963

- [06:36:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23761) it has found 963 pets

- [06:36:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23763) pets and all of them are

- [06:36:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23766) and all of them are actually it has found more than that

- [06:36:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23768) actually it has found more than that let's see

- [06:36:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23770) let's see it has found

- [06:36:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23772) it has found exactly one thousand pads

- [06:36:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23776) exactly one thousand pads uh for rod wrote id23 and how many we

- [06:36:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23779) uh for rod wrote id23 and how many we had if you ask

- [06:36:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23782) had if you ask okay

- [06:36:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23783) okay we will exclude only type one

- [06:36:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23786) we will exclude only type one we had exactly one thousand yes all

- [06:36:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23788) we had exactly one thousand yes all paths are found

- [06:36:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23791) paths are found and the application is perfectly working

- [06:36:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23794) and the application is perfectly working uh so thank you very much for watching

- [06:36:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23796) uh so thank you very much for watching my video uh now i will upload it into a

- [06:36:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23800) my video uh now i will upload it into a github repository

- [06:36:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23802) github repository so that you can also

- [06:36:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23805) so that you can also check it check the code

- [06:36:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23807) check it check the code analyze it

- [06:36:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23808) analyze it do whatever you want

- [06:37:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23820) uh one of the tables

- [06:37:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23826) so that you can test for example let me export only

- [06:37:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23829) export only uh

- [06:37:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23830) uh table 23 yeah

- [06:37:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23849) and that is from roach well driving

- [06:37:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23852) well driving yes now i can export it so you can also

- [06:37:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23854) yes now i can export it so you can also test it

- [06:37:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23861) okay for the rest i will use export method

- [06:37:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23873) okay all tables and save a script file i will save it into

- [06:37:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23878) save a script file i will save it into pathfinding project database

- [06:38:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23891) and let's also save the data

- [06:38:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23899) okay next next yes it is done

- [06:38:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23902) yes it is done so in the pathfinding project now

- [06:38:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23905) so in the pathfinding project now everything is here

- [06:38:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23907) everything is here now i will initialize it

- [06:38:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23911) now i will initialize it with

- [06:38:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23912) with git bash application

- [06:38:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23915) git bash application and upload it to github

- [06:38:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23918) and upload it to github uh platforming project it

- [06:38:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23925) it's uh i had saved it so much

- [06:38:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23929) i had saved it so much okay

- [06:38:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23931) okay yeah let's send it

- [06:38:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23932) yeah let's send it to that

- [06:38:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23933) to that let's add everything

- [06:39:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23950) all the text files and if they are over 200 megabytes yes this will cause a

- [06:39:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23953) 200 megabytes yes this will cause a problem

- [06:39:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23955) problem so i have to delete this and

- [06:39:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23957) so i have to delete this and yeah

- [06:39:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23959) yeah instead of

- [06:39:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23964) once you add a file it is hard to remove so i will just remove this

- [06:39:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23967) so i will just remove this and remove all this

- [06:39:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23970) and remove all this okay

- [06:39:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23972) okay and i will just re-image it

- [06:39:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23977) and i will just re-image it since we just started

- [06:39:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23979) since we just started okay

- [06:39:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=23997) [Music] okay now we need to add remote

- [06:40:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24000) okay now we need to add remote this is the url

- [06:40:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24002) this is the url i'm not going to change branch i will

- [06:40:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24004) i'm not going to change branch i will just push it to the master

- [06:40:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24007) just push it to the master because we are at the origin master

- [06:40:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24011) because we are at the origin master i will put this link into the

- [06:40:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24013) i will put this link into the description

- [06:40:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24016) okay it's already here and the files are

- [06:40:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24019) it's already here and the files are already here you can also see the

- [06:40:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24021) already here you can also see the database sql file

- [06:40:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24023) database sql file and click now

- [06:40:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24026) and click now okay you see

- [06:40:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24028) okay you see it is filled with data

- [06:40:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24031) it is filled with data and everything you can just export it i

- [06:40:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24034) and everything you can just export it i mean uh go nut and run it execute it

- [06:40:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24038) mean uh go nut and run it execute it and

- [06:40:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24040) and if you wonder how to execute it's so

- [06:40:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24042) if you wonder how to execute it's so simple

- [06:40:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24044) simple let me show

- [06:40:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24045) let me show i will just generate a new database gg

- [06:40:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24050) i will just generate a new database gg and when i click new query select gg

- [06:40:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24053) and when i click new query select gg copy paste it and run it

- [06:40:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24056) copy paste it and run it oh by the way i have to change

- [06:41:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24062) the use thing

- [06:41:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24063) thing yes

- [06:41:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24065) yes okay now let's rerun

- [06:41:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24071) oh one seconds

- [06:41:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24082) oh it is using platform let's make it the gg

- [06:41:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24085) the gg yes as you can see it is completed

- [06:41:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24087) yes as you can see it is completed successfully and

- [06:41:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24090) successfully and when we refresh

- [06:41:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24092) when we refresh we will see everything

- [06:41:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24094) we will see everything is in

- [06:41:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24096) is in dash

- [06:41:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24100) okay and

- [06:41:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24102) and if anything else is left the project is

- [06:41:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24104) if anything else is left the project is here

- [06:41:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24106) here it is fully working

- [06:41:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24112) yeah if you have any questions please join our discord channel

- [06:41:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24114) join our discord channel if you wonder where we will find our

- [06:41:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24116) if you wonder where we will find our discord channel uh it is here our

- [06:41:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24119) discord channel uh it is here our official discord you can also click this

- [06:42:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24121) official discord you can also click this link

- [06:42:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24123) link it will open our discord channel

- [06:42:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24127) it will open our discord channel feel free to come to our discord channel

- [06:42:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24129) feel free to come to our discord channel and ask me any questions you will see my

- [06:42:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24131) and ask me any questions you will see my name as for kangaskhara

- [06:42:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24134) name as for kangaskhara more moments

- [06:42:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24137) more moments uh okay this is me in my in our discord

- [06:42:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24139) uh okay this is me in my in our discord channel who can go super you can come to

- [06:42:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24141) channel who can go super you can come to general and you can ask in english as

- [06:42:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24144) general and you can ask in english as well

- [06:42:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24145) well it's totally fine

- [06:42:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24147) it's totally fine uh my username is monster mr pg the game

- [06:42:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24150) uh my username is monster mr pg the game that i developed

- [06:42:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24153) that i developed and this is our official discord channel

- [06:42:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24156) and this is our official discord channel you see our students and other people

- [06:42:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24159) you see our students and other people watching my videos comes there

- [06:42:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24161) watching my videos comes there also uh please watch our playlists

- [06:42:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24165) also uh please watch our playlists because

- [06:42:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24166) because they will teach you how to

- [06:42:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24168) they will teach you how to do programming if you wonder

- [06:42:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24171) do programming if you wonder please subscribe and like the video

- [06:42:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24174) please subscribe and like the video if you have enjoyed

- [06:42:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24177) if you have enjoyed uh thank you so much for watching

- [06:43:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24181) uh thank you so much for watching this video we

- [06:43:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24182) this video we developed our new methodology there

- [06:43:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24185) developed our new methodology there could be better ways

- [06:43:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24187) could be better ways uh that this algorithm and this software

- [06:43:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24190) uh that this algorithm and this software can be optimized even further but it is

- [06:43:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24192) can be optimized even further but it is working and since this is the one time

- [06:43:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24194) working and since this is the one time only thing

- [06:43:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24196) only thing it is fine because our maps are static

- [06:43:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24199) it is fine because our maps are static and never changes usually

- [06:43:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24202) and never changes usually therefore i will just execute this

- [06:43:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24204) therefore i will just execute this application one time and then i will

- [06:43:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24206) application one time and then i will never

- [06:43:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24209) never use it again or if i had

- [06:43:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24211) use it again or if i had if i make changes

- [06:43:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24213) if i make changes then i can rerun it and update the table

- [06:43:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24217) then i can rerun it and update the table but since it will be extremely rare the

- [06:43:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24220) but since it will be extremely rare the performance is not very much important

- [06:43:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24224) performance is not very much important but since now we have calculated all of

- [06:43:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24227) but since now we have calculated all of the shortest paths we can

- [06:43:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24230) the shortest paths we can use them

- [06:43:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24231) use them extremely efficiently in the game

- [06:43:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24236) extremely efficiently in the game so how will it work it will basically

- [06:43:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24238) so how will it work it will basically work as it will check your current

- [06:44:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24240) work as it will check your current location

- [06:44:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24241) location and then based on the shortest path it

- [06:44:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24243) and then based on the shortest path it will just move your character to there

- [06:44:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24245) will just move your character to there automatically

- [06:44:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24246) automatically okay

- [06:44:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24247) okay uh so this is what i have uh as a plan

- [06:44:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24250) uh so this is what i have uh as a plan in my mind so it will automatically

- [06:44:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24253) in my mind so it will automatically search for

- [06:44:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24254) search for uh

- [06:44:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24255) uh monsters like quota po bottom go top or

- [06:44:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24257) monsters like quota po bottom go top or bottom or go left

- [06:44:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24259) bottom or go left or right wherever you start in the map

- [06:44:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24261) or right wherever you start in the map it will automatically go to the shortest

- [06:44:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24264) it will automatically go to the shortest one and you see this is another pet

- [06:44:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24266) one and you see this is another pet finding that we have it shows the

- [06:44:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24269) finding that we have it shows the closest path to the

- [06:44:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24272) closest path to the uh exit uh it is also pre-calculated uh

- [06:44:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24276) uh exit uh it is also pre-calculated uh so it is not using

- [06:44:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24278) so it is not using uh system resources

- [06:44:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24280) uh system resources let's also open auto pedal

- [06:44:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24284) let's also open auto pedal okay we have won the battle

- [06:44:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24293) so it doesn't use a system resources as you can see we can go there quickly

- [06:44:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24296) you can see we can go there quickly like this

- [06:44:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24298) like this okay with another user

- [06:45:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24304) so profile

- [06:45:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24306) profile anyway as you can see

- [06:45:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24310) anyway as you can see what which character imaging is

- [06:45:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24315) and you see now we are reaching to a map

- [06:45:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24319) you see now we are reaching to a map change point

- [06:45:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24325) okay we're almost there and now we will move to the next route

- [06:45:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24327) move to the next route now it shows both exists exits in the

- [06:45:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24331) now it shows both exists exits in the route

- [06:45:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24337) so i can just follow this path but to be able to follow this i need to have

- [06:45:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24340) able to follow this i need to have a

- [06:45:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24341) a surf knowing monsters in my team

- [06:45:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24345) surf knowing monsters in my team or i can just

- [06:45:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24346) or i can just follow here

- [06:45:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24349) follow here and it will update the path you see now

- [06:45:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24351) and it will update the path you see now it's updated to follow this path

- [06:45:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24355) it's updated to follow this path anyway uh

- [06:45:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24357) anyway uh pre-calculation of such events are

- [06:45:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24359) pre-calculation of such events are extremely

- [06:46:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24360) extremely uh useful

- [06:46:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24363) uh useful precalculation of pathfinding is

- [06:46:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24364) precalculation of pathfinding is extremely useful because

- [06:46:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24367) extremely useful because it would be unnecessary to recalculate

- [06:46:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24369) it would be unnecessary to recalculate path each time

- [06:46:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24371) path each time and in many modern even in modern games

- [06:46:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24374) and in many modern even in modern games we see that pathfinding they have is

- [06:46:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24378) we see that pathfinding they have is very primitive fails too many times

- [06:46:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24381) very primitive fails too many times so if you precalculate the path in

- [06:46:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24384) so if you precalculate the path in game or

- [06:46:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24385) game or whatever application

- [06:46:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24387) whatever application you have tile based location base it it

- [06:46:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24390) you have tile based location base it it would

- [06:46:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24391) would speed up your

- [06:46:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24396) application a lot and it wouldn't use too much space

- [06:46:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24398) and it wouldn't use too much space either

- [06:46:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24399) either you can also further optimize it you can

- [06:46:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24401) you can also further optimize it you can encrypt it uh

- [06:46:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24404) encrypt it uh whatever you want you can do

- [06:46:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24410) okay thank you so much and after [Music]

- [06:46:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24413) [Music] end of the video

- [06:46:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24419) please check the description of the video as well

- [06:47:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24421) video as well okay everyone this is the second second

- [06:47:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24423) okay everyone this is the second second part of the video it has been five days

- [06:47:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24426) part of the video it has been five days since i had completed the first part so

- [06:47:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24429) since i had completed the first part so there is some there are a lot of

- [06:47:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24431) there is some there are a lot of improvements and

- [06:47:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24432) improvements and some fixes that i have

- [06:47:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24434) some fixes that i have made during this period of time uh

- [06:47:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24437) made during this period of time uh i am adding this part to the end of the

- [06:47:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24440) i am adding this part to the end of the first part uh so it is kind of a jump to

- [06:47:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24443) first part uh so it is kind of a jump to you

- [06:47:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24444) you some coding jump uh

- [06:47:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24447) some coding jump uh but there is still one major problem

- [06:47:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24448) but there is still one major problem that i have to fix which is uh there is

- [06:47:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24451) that i have to fix which is uh there is a memory leak first let me show you the

- [06:47:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24455) a memory leak first let me show you the code changes i have made for

- [06:47:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24456) code changes i have made for improvements and

- [06:47:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24458) improvements and fixes to do that i will use a bit bucket

- [06:47:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24470) i mean the github code changes

- [06:47:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24477) okay now we can see the

- [06:47:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24479) now we can see the code changes in this commit

- [06:48:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24494) the project okay there's version two and click the comments

- [06:48:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24496) click the comments here

- [06:48:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24498) here we can see

- [06:48:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24508) okay here just let's just ignore the other

- [06:48:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24510) other automatic stuff and

- [06:48:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24513) automatic stuff and we just need to find out

- [06:48:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24529) in here okay so uh

- [06:48:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24530) so uh i changed some of the object types into

- [06:48:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24533) i changed some of the object types into static because

- [06:48:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24535) static because they are being used within the uh

- [06:48:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24537) they are being used within the uh entire application and i made them

- [06:48:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24539) entire application and i made them private

- [06:49:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24547) uh i have added uh the monster appearing

- [06:49:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24550) i have added uh the monster appearing areas into a list

- [06:49:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24552) areas into a list uh so it is easier to check i made some

- [06:49:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24555) uh so it is easier to check i made some debugging

- [06:49:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24556) debugging with

- [06:49:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24557) with checking the running tasks counts

- [06:49:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24560) checking the running tasks counts i did this and i figured out a very uh

- [06:49:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24564) i did this and i figured out a very uh important problem

- [06:49:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24566) important problem which was um

- [06:49:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24568) which was um we were doing a task with all let me

- [06:49:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24572) we were doing a task with all let me show

- [06:49:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24573) show here and it was causing some

- [06:49:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24576) here and it was causing some some kind of

- [06:49:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24577) some kind of deadlock and therefore this was

- [06:49:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24579) deadlock and therefore this was unnecessary because

- [06:49:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24582) unnecessary because all of the started tasks are being

- [06:49:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24585) all of the started tasks are being completed

- [06:49:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24587) completed after parallel for each we have

- [06:49:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24591) after parallel for each we have let me show where we have it

- [06:50:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24604) here this code is only moved forward after

- [06:50:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24607) this code is only moved forward after all of the tasks started inside it are

- [06:50:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24610) all of the tasks started inside it are completed

- [06:50:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24612) completed and what other change i made

- [06:50:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24616) and what other change i made um

- [06:50:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24617) um i

- [06:50:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24619) i i made them to delete it one moment

- [06:50:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24623) i made them to delete it one moment okay uh so

- [06:50:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24625) okay uh so um

- [06:50:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24625) um [Music]

- [06:50:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24627) [Music] i just had a phone call sorry about that

- [06:50:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24631) i just had a phone call sorry about that what else did we do

- [06:50:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24643) okay and

- [06:50:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24651) okay [Music]

- [06:50:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24659) ah yes um i tried to prevent uh memory leak with clearing all of the

- [06:51:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24665) things we use to keep

- [06:51:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24666) we use to keep a lot of

- [06:51:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24668) a lot of objects values and i have added a

- [06:51:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24671) objects values and i have added a garbage collector collect and one

- [06:51:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24674) garbage collector collect and one another thing i did is i have added

- [06:51:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24677) another thing i did is i have added application config file i did set allow

- [06:51:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24680) application config file i did set allow very large objects through and

- [06:51:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24682) very large objects through and server mode into garbage collector

- [06:51:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24685) server mode into garbage collector server mode into

- [06:51:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24687) server mode into into server mode garbage collector mode

- [06:51:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24689) into server mode garbage collector mode into server mode which helps which

- [06:51:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24692) into server mode which helps which actually uh

- [06:51:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24694) actually uh greatly increases the performance of the

- [06:51:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24696) greatly increases the performance of the application if you have more than

- [06:51:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24698) application if you have more than one course

- [06:51:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24700) one course and

- [06:51:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24703) and let's see

- [06:51:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24714) okay some other tiny things

- [06:51:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24716) tiny things i made some of the methods into i have

- [06:51:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24719) i made some of the methods into i have turned some of the methods into static

- [06:52:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24721) turned some of the methods into static okay let me run and

- [06:52:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24723) okay let me run and show you

- [06:52:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24725) show you the speed of the application

- [06:52:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24741) okay you see it is super fast and we can open resource manager and

- [06:52:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24746) and we can open resource manager and select the image of the application and

- [06:52:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24748) select the image of the application and see

- [06:52:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24749) see you see it is using uh 60 threads about

- [06:52:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24752) you see it is using uh 60 threads about 35 percent

- [06:52:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24754) 35 percent uh of cpu

- [06:52:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24757) uh of cpu as you can see it is going super fast

- [06:52:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24760) as you can see it is going super fast it is not even using uh too much memory

- [06:52:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24762) it is not even using uh too much memory right now

- [06:52:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24768) okay and around 500 megabytes

- [06:52:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24772) around 500 megabytes 6p 700.

- [06:52:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24776) okay uh

- [06:52:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24777) uh but

- [06:52:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24778) but prob but there is a problem uh which

- [06:53:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24781) prob but there is a problem uh which doesn't happen immediately

- [06:53:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24783) doesn't happen immediately the application memory usage keep

- [06:53:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24787) the application memory usage keep increases over the time

- [06:53:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24789) increases over the time so like after processing 30 for the maps

- [06:53:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24792) so like after processing 30 for the maps it becomes too big

- [06:53:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24795) it becomes too big which means that we have

- [06:53:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24803) we have a memory leak somewhere and i am going to

- [06:53:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24804) going to debug it right now with you

- [06:53:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24807) debug it right now with you so you will also have an idea about how

- [06:53:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24810) so you will also have an idea about how to do debug

- [06:53:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24811) to do debug and to do that we are going to use debug

- [06:53:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24814) and to do that we are going to use debug performance profiler and we are going to

- [06:53:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24817) performance profiler and we are going to use

- [06:53:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24821) uh okay uh perhaps we can try uh with

- [06:53:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24826) okay uh perhaps we can try uh with object allocation tracking i'm not sure

- [06:53:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24828) object allocation tracking i'm not sure our memory one of them we should be able

- [06:53:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24831) our memory one of them we should be able to

- [06:53:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24832) to let us see the problem

- [06:53:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24838) oh by the way we also need to clear the database

- [06:54:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24841) database okay

- [06:54:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24843) okay let's restart

- [06:54:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24845) let's restart and let's see

- [06:54:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24864) previous thing

- [06:54:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24865) thing previous run because currently we are

- [06:54:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24868) previous run because currently we are debugging

- [06:54:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24875) probably we need to wait

- [06:54:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24879) some to see net object allocation tracking

- [06:54:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24883) to see net object allocation tracking let's wait it to process at least

- [06:54:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24886) let's wait it to process at least several routes i will pause meanwhile

- [06:54:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24888) several routes i will pause meanwhile the video

- [06:54:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24894) okay it is running for a while now i'm going to take a memory

- [06:54:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24897) i'm going to take a memory snapshot

- [06:55:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24900) snapshot let's take a memory snapshot it takes

- [06:55:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24904) let's take a memory snapshot it takes the snapshot of the

- [06:55:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24905) the snapshot of the memory usage so that we can compare

- [06:55:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24918) still we are not at the level of memory leakage i have seen it

- [06:55:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24920) leakage i have seen it reaches

- [06:55:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24925) [Music] over 40 gigabytes of ram memory usage

- [06:55:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24935) okay you see our object count increasing within the time

- [06:55:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24944) when we click the give him i wonder what are we going to see

- [06:55:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24946) are we going to see yes it shows our managed memory

- [06:55:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24950) yes it shows our managed memory okay headset

- [06:56:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24965) all right if you ask me let's see becomes action

- [06:56:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24967) let's see becomes action task plus contingent properties wow

- [06:56:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24972) task plus contingent properties wow there are lots of

- [06:56:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24973) there are lots of task instances

- [06:56:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24992) well what's this so many instances of display class

- [06:56:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=24994) display class to be used

- [06:56:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25014) okay let's click

- [06:56:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25015) let's click break all

- [06:56:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25018) break all okay it has stopped here

- [06:57:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25021) okay it has stopped here um [Music]

- [06:57:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25023) [Music] apparently this is running too many

- [06:57:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25025) apparently this is running too many times i don't know how much time it

- [06:57:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25027) times i don't know how much time it takes

- [06:57:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25029) takes let's take a snapshot

- [06:57:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25036) currently we are trying to figure out what is causing what could be causing uh

- [06:57:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25039) what is causing what could be causing uh the

- [06:57:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25049) the memory leakage by the way the global tasks count is

- [06:57:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25052) by the way the global tasks count is zero currently because i have disabled

- [06:57:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25054) zero currently because i have disabled it

- [06:57:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25055) it it was taking too much cpu usage and

- [06:57:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25057) it was taking too much cpu usage and time okay let's click with heap

- [06:57:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25062) time okay let's click with heap and let's get it counts

- [06:57:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25064) and let's get it counts well we have so many counts

- [06:57:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25068) well we have so many counts i'm getting instance can we see the

- [06:57:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25069) i'm getting instance can we see the value

- [06:57:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25075) no i wonder what is this okay there is a list

- [06:57:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25077) okay there is a list which is

- [06:58:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25090) i wonder which list is this perhaps these are the

- [06:58:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25092) perhaps these are the lists that we are providing to the tasks

- [06:58:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25097) lists that we are providing to the tasks chosen direction

- [06:58:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25098) chosen direction [Music]

- [06:58:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25105) okay there is dictionary but most of the byte is taken by headset

- [06:58:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25109) byte is taken by headset everything is looking correct right now

- [06:58:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25111) everything is looking correct right now let's see the cpu usage

- [06:58:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25113) let's see the cpu usage external code notif external calls

- [06:59:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25161) memory leakage when we click on small object types

- [06:59:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25164) object types we see that headset is taking

- [06:59:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25168) we see that headset is taking a lot of

- [06:59:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25169) a lot of memory

- [06:59:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25170) memory dictionaries taking

- [06:59:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25173) dictionaries taking okay

- [06:59:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25192) okay this is the static dictionary we have yes this is nothing uh special i

- [06:59:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25194) have yes this is nothing uh special i just figured it out

- [07:00:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25201) okay and what could be these lists these lists are the lists that we are

- [07:00:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25214) tasks okay yeah it makes sense

- [07:00:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25220) i'm going to click uh okay running

- [07:00:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25222) okay running id

- [07:00:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25225) id yeah this is also looking correct if you

- [07:00:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25227) yeah this is also looking correct if you ask me

- [07:00:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25228) ask me but the number of tasks are just so many

- [07:00:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25238) most of these should be already completed if you ask me

- [07:00:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25251) okay waiting to run wow look at the idea of the task

- [07:01:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25273) we have so many waiting to run tasks and it is probably

- [07:01:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25275) it is probably problem problematic

- [07:01:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25304) it's used to test for task schedulers okay maybe from non-public members we

- [07:01:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25307) okay maybe from non-public members we may see the input

- [07:01:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25315) wow active tasks a 56k this is definitely

- [07:01:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25318) this is definitely this is definitely the culprit we have

- [07:02:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25332) okay the scheduler is scheduling the tasks but

- [07:02:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25344) two menu actually application

- [07:02:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25347) actually application should be

- [07:02:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25349) should be progressing only when

- [07:02:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25352) progressing only when the for each ends

- [07:02:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25362) okay let's put a breakpoint here and continue application

- [07:02:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25366) and continue application so we can check

- [07:02:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25368) so we can check how many tasks are waiting to be

- [07:02:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25371) how many tasks are waiting to be executed which should be zero

- [07:02:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25375) executed which should be zero because we are assuming that

- [07:02:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25378) because we are assuming that uh

- [07:03:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25380) uh this parallel for each will be completed

- [07:03:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25383) this parallel for each will be completed only after

- [07:03:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25385) only after it is completing all of the callbacks

- [07:03:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25389) it is completing all of the callbacks this is actually

- [07:03:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25396) another drawback of using um

- [07:03:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25398) um recursive method

- [07:03:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25399) recursive method when you use recursive method it is hard

- [07:03:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25401) when you use recursive method it is hard to

- [07:03:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25403) to track and

- [07:03:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25406) track and start tasks

- [07:03:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25408) start tasks based on the active task because we are

- [07:03:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25410) based on the active task because we are not able to

- [07:03:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25413) not able to let's say the application run only a

- [07:03:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25415) let's say the application run only a hundred tasks at a moment we are not

- [07:03:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25418) hundred tasks at a moment we are not able to clear the tasks ourselves

- [07:03:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25421) able to clear the tasks ourselves because one task is cornered calling

- [07:03:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25424) because one task is cornered calling itself and it will never be completed

- [07:03:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25427) itself and it will never be completed unless we allow

- [07:03:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25429) unless we allow uh

- [07:03:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25429) uh self recursive calls

- [07:03:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25432) self recursive calls uh so

- [07:03:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25434) uh so so in our case actually this is uh

- [07:03:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25437) so in our case actually this is uh and a hindrance

- [07:03:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25439) and a hindrance to our task-based multithreaded system

- [07:04:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25446) okay i will pause the video until

- [07:04:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25449) i will pause the video until it reaches that point

- [07:04:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25455) uh until okay we have reached our pause point

- [07:04:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25458) okay we have reached our pause point let's take a snapshot

- [07:04:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25465) then i will take another snapshot after uh garbage collector

- [07:04:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25468) uh garbage collector has run

- [07:04:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25483) let's take a look at the

- [07:04:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25484) the heap

- [07:04:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25499) okay the number of roots are much higher than the previous snapshot

- [07:05:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25514) okay dictionary list task okay we have 100 000 tasks

- [07:05:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25518) 100 000 tasks and

- [07:05:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25532) let's see okay waiting to run

- [07:05:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25535) okay waiting to run yeah

- [07:05:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25536) yeah yeah this is this is definitely

- [07:05:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25539) yeah this is this is definitely problematic

- [07:05:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25545) because these tasks should already had been

- [07:05:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25547) been completed by their

- [07:05:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25550) completed by their they're not

- [07:05:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25552) they're not and

- [07:05:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25559) it is a problem it is definitely a problem

- [07:06:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25561) problem and

- [07:06:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25561) and [Music]

- [07:06:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25567) why this is happening we have to solve that

- [07:06:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25580) and our hsi headset size is like this let's click it

- [07:06:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25582) let's click it okay and let's take another snapshot

- [07:06:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25585) okay and let's take another snapshot after

- [07:06:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25589) calling the main window

- [07:06:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25596) okay let's move there okay we have called the

- [07:06:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25600) okay we have called the garbage collector so i just said

- [07:06:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25602) garbage collector so i just said correctly

- [07:06:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25604) correctly and after calling garbage collection

- [07:06:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25608) and after calling garbage collection morning let's see what has changed

- [07:06:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25616) okay we have some decrease in size let's see the heap

- [07:06:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25618) see the heap okay uh we see that he says i said size

- [07:07:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25622) okay uh we see that he says i said size is

- [07:07:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25623) is yes degrees that is working

- [07:07:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25632) count is

- [07:07:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25634) is still

- [07:07:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25635) still waiting to run yeah this is this is

- [07:07:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25638) waiting to run yeah this is this is definitely a problem

- [07:07:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25643) so can we see part of these tasks

- [07:07:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25679) okay there is completed task what does that mean i honest

- [07:08:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25690) and there is another task is just yes not completion when we click uh

- [07:08:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25693) not completion when we click uh we see that they are completed

- [07:08:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25705) so these tasks are waiting to run but when we click the static members we see

- [07:08:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25707) when we click the static members we see that they are completed

- [07:08:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25711) and why does that happen

- [07:08:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25725) is really weird now let's try to figure this out

- [07:08:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25731) okay for example uh let's say this task okay

- [07:09:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25741) when i click add watch i can see okay creation options cancellation

- [07:09:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25744) okay creation options cancellation pending assignment state id waiting to

- [07:09:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25748) pending assignment state id waiting to run

- [07:09:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25749) run when i click runway i can see id

- [07:09:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25754) when i click runway i can see id when i click static members i can see

- [07:09:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25756) when i click static members i can see completed task

- [07:09:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25758) completed task and what does that mean

- [07:09:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25774) when i click raw view of the completed task and static members

- [07:09:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25785) and there are non-public members internal current

- [07:09:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25799) okay currently active tasks are so many yes waiting to run

- [07:10:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25809) okay now we are having we are getting an idea

- [07:10:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25812) now we are having we are getting an idea of where might be our problem

- [07:10:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25834) so in our method we must have a problem somewhere

- [07:11:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25888) could it be because we add them here

- [07:11:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25893) and that keeps their reference

- [07:11:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25899) so they are not getting garbage collected yeah it could be because of

- [07:11:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25902) collected yeah it could be because of that

- [07:11:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25904) that i'm not sure

- [07:11:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25911) okay let's remove this close all about this

- [07:11:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25914) close all about this and

- [07:12:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25950) okay let's first test our

- [07:12:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25959) idea about that list could be

- [07:12:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25962) that list could be forcing our

- [07:12:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25970) application tasks to be awaited

- [07:12:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25979) well this time it is looking different i don't know why

- [07:13:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25993) no this is not the thing that we want to see

- [07:13:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=25994) see okay

- [07:13:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26023) okay let's just remove remove

- [07:13:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26028) okay and

- [07:14:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26047) to see the number of running tasks

- [07:14:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26055) which i just paused the application took a snapshot let's

- [07:14:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26057) a snapshot let's see the heap

- [07:14:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26060) see the heap okay we have 7 000 tasks

- [07:14:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26076) static members completed task

- [07:14:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26084) is this a sub subtask that it has started probably

- [07:14:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26086) started probably and it is completed

- [07:15:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26101) but the other task which is here is waiting to run

- [07:15:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26103) waiting to run how is this even possible

- [07:15:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26132) okay i think we can force task

- [07:15:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26134) task to start running

- [07:15:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26143) task factory start task and wait it until it runs

- [07:16:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26189) okay that's good

- [07:17:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26268) okay no one has asked this question it's weird

- [07:18:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26315) okay let's write our own code wires

- [07:18:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26317) wires i wonder what will happen

- [07:19:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26379) okay uh

- [07:19:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26380) uh i would prefer a better

- [07:19:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26383) i would prefer a better solution but

- [07:20:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26401) okay not this one let's close other

- [07:20:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26410) things okay and performance profiler on location tracking i think yes

- [07:20:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26415) on location tracking i think yes allocation tracking is just working fine

- [07:20:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26419) allocation tracking is just working fine working good

- [07:20:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26427) okay you see it has

- [07:20:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26432) okay it is i think just

- [07:20:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26435) think just stopped

- [07:20:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26436) stopped probably just waiting here and here

- [07:20:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26443) when it run waiting to run and why is that

- [07:20:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26445) that just not

- [07:20:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26446) just not just not progressing

- [07:20:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26459) let's pause and take a snapshot

- [07:21:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26472) okay now

- [07:21:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26484) okay okay we have only

- [07:21:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26504) while this made our application much slower

- [07:21:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26506) slower so this is still not the answer

- [07:22:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26522) yeah we just can't progress with this approach

- [07:22:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26548) let's see if this break is ever coming yes it's very comic

- [07:22:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26551) yes it's very comic but this is just too slow and it must be

- [07:22:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26554) but this is just too slow and it must be for a reason

- [07:23:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26604) okay and let's see what kind of difference this will make

- [07:23:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26606) difference this will make i'm going to uh make this optimization

- [07:23:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26609) i'm going to uh make this optimization here

- [07:23:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26611) here set me interest compilation portrays

- [07:23:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26613) set me interest compilation portrays wordpress

- [07:23:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26623) 99 thousands

- [07:23:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26626) thousands key elements

- [07:23:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26630) and let's just close this session

- [07:24:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26642) start at this one

- [07:25:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26706) okay let's just leave it solution

- [07:25:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26709) let's just leave it solution okay enable succeeded performance

- [07:25:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26714) okay enable succeeded performance profile this

- [07:25:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26715) profile this memory usage perhaps

- [07:25:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26729) okay it is again just too slow a little a little much faster but still

- [07:25:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26732) a little a little much faster but still too slow

- [07:25:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26754) oh i see this is not running in the debug mode that's why

- [07:26:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26773) like this okay yeah

- [07:26:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26775) okay yeah yeah now i can see it

- [07:27:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26836) okay i'm going to use lsd global tags once again

- [07:27:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26838) once again let's just comment this out

- [07:27:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26852) actually we may also check this one waiting for operation

- [07:27:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26855) waiting for operation waiting for run one run

- [07:27:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26862) yes waiting to run this is the actual thing that i need to check

- [07:27:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26865) thing that i need to check and

- [07:27:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26876) like this and what i am going to do is simply

- [07:28:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26892) which will be happening here

- [07:28:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26905) lst global talks but let's just

- [07:28:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26907) global talks but let's just lock it first

- [07:28:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26917) mask and let's make this a list

- [07:28:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26938) okay we have another option

- [07:29:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26966) remove yes now it should work yes

- [07:29:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26972) okay i wonder if we will get

- [07:29:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26975) i wonder if we will get this time any memory leakage

- [07:29:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26979) this time any memory leakage i am running it in debugging mode

- [07:29:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26987) okay we are pretty fast we can also check the output window

- [07:29:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26990) we can also check the output window you see waiting to run

- [07:29:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26992) you see waiting to run anything to run i think this is some

- [07:29:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26995) anything to run i think this is some kind of

- [07:29:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26996) kind of mistake those tasks are getting

- [07:29:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=26998) mistake those tasks are getting completed

- [07:30:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27001) completed uh within their child task but the

- [07:30:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27004) uh within their child task but the application thinks that they are not

- [07:30:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27006) application thinks that they are not completed yet

- [07:30:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27012) i think that is the mistake of the application

- [07:30:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27013) application because when we check their

- [07:30:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27020) subtask they are

- [07:30:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27021) they are seem like competitors

- [07:30:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27023) seem like competitors actually i will ask this as a question

- [07:30:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27040) okay let me just show you what are they

- [07:30:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27042) show you what are they you should waiting to task waiting to

- [07:30:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27044) you should waiting to task waiting to run

- [07:30:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27046) run and run to completion

- [07:30:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27048) and run to completion wow so many are completed waiting to run

- [07:30:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27052) wow so many are completed waiting to run is just 10k

- [07:31:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27078) but of course this doesn't show all of the tasks that our application has

- [07:31:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27080) the tasks that our application has started because this shows only

- [07:31:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27084) started because this shows only uh

- [07:31:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27085) uh 8 000 tasks

- [07:31:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27096) by the way you see waiting to run task account is

- [07:31:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27098) account is like 99k

- [07:31:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27100) like 99k and we did set

- [07:31:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27105) 99 not sure if it does affect it

- [07:31:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27109) not sure if it does affect it okay let's see what happens after the

- [07:31:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27111) okay let's see what happens after the first

- [07:32:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27122) the first route okay waiting to run task code increasing running task card is

- [07:32:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27124) code increasing running task card is only

- [07:32:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27125) only 39 19

- [07:32:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27128) 39 19 19 39

- [07:32:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27139) okay waiting to run task called increasing

- [07:32:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27162) all right we are getting closer to closer to

- [07:32:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27165) closer to map scout completion by the way we are

- [07:32:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27167) map scout completion by the way we are doing

- [07:32:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27169) doing all points to all points blind

- [07:32:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27173) all points to all points blind uh

- [07:32:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27174) uh pathfinding we could optimize this a lot

- [07:32:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27177) pathfinding we could optimize this a lot with just

- [07:32:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27179) with just focusing on the

- [07:33:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27182) focusing on the target location so finding shortest path

- [07:33:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27185) target location so finding shortest path from

- [07:33:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27186) from point a to target point b

- [07:33:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27190) point a to target point b i didn't make that optimization because

- [07:33:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27192) i didn't make that optimization because i want to a challenge and this will run

- [07:33:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27195) i want to a challenge and this will run only single time

- [07:33:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27202) but still we are getting challenged with our mult threading system as you can see

- [07:33:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27218) okay i wonder what will happen with our approach when we dispose of all

- [07:33:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27221) with our approach when we dispose of all of the tasks

- [07:33:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27233) because we don't need those tasks to be completed because we are already adding

- [07:33:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27236) completed because we are already adding the shortest found paths

- [07:33:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27238) the shortest found paths in here and we are not adding them late

- [07:34:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27241) in here and we are not adding them late again

- [07:34:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27242) again so actually when we reach this point all

- [07:34:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27245) so actually when we reach this point all of the tasks should be

- [07:34:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27247) of the tasks should be completed

- [07:34:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27257) but probably they won't be so let's put a breakpoint here and let's

- [07:34:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27259) a breakpoint here and let's checking out what happens

- [07:34:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27298) we move locations but our found shortest path counts do not increase this is also

- [07:35:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27301) path counts do not increase this is also kind of weird

- [07:35:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27310) yeah we have so many tasks waiting to run waiting for activation

- [07:35:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27316) there is also another thing that we could do which is waiting all tasks to

- [07:35:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27319) could do which is waiting all tasks to be

- [07:35:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27327) completed after the first loop is done yeah

- [07:35:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27328) yeah that is our second option so we will

- [07:35:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27330) that is our second option so we will just wait these tasks to be completed

- [07:35:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27349) okay let's just take a snapshot and how many

- [07:35:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27352) and how many points we have found

- [07:35:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27355) points we have found okay we did find i think

- [07:36:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27364) a lot lesser than we should have 460

- [07:36:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27371) 36 in the root

- [07:36:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27374) in the root c

- [07:36:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27375) c 1

- [07:36:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27377) 1 and that looks like incorrect to me

- [07:36:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27397) one yeah it should be close to one thousand

- [07:36:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27401) yeah it should be close to one thousand okay

- [07:36:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27402) okay so

- [07:36:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27403) so it didn't wait for awaiting tasks to be

- [07:36:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27408) it didn't wait for awaiting tasks to be completed

- [07:36:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27410) completed you see we have over one million tasks

- [07:38:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27480) maybe this option does not exist so we need to modify our code right here

- [07:38:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27484) need to modify our code right here running through

- [07:38:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27490) it shouldn't affect the subtasks but i'm not sure sure

- [07:38:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27492) not sure sure to test this idea

- [07:38:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27501) yeah let's just test it um

- [07:38:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27507) i'm gonna probably gonna test it okay let's make it as

- [07:38:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27519) count bigger than zero might way we need to

- [07:38:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27521) might way we need to add a log here probably

- [07:38:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27531) system trainings threats need 100

- [07:38:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27534) need 100 milliseconds

- [07:38:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27536) milliseconds okay

- [07:38:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27537) okay let's just rerun the application and see

- [07:39:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27541) let's just rerun the application and see how it goes

- [07:39:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27546) okay i will pause video for your sake here

- [07:39:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27553) okay i just added this bridge and about to show you that because

- [07:39:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27555) and about to show you that because without break this vial will will would

- [07:39:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27558) without break this vial will will would loop

- [07:39:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27558) loop forever of course

- [07:39:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27561) forever of course okay we have reached uh that point let's

- [07:39:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27565) okay we have reached uh that point let's uh take a snapshot

- [07:39:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27581) okay currently we have thirteen thousand let's see the heap

- [07:39:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27588) okay the task count is one over

- [07:39:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27591) one over eight million probably many of them is

- [07:39:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27593) eight million probably many of them is just finish it though

- [07:39:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27596) just finish it though i don't know how many of them are just

- [07:39:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27598) i don't know how many of them are just waiting to run

- [07:40:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27601) waiting to run okay

- [07:40:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27602) okay so let's continue until here and see

- [07:40:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27606) so let's continue until here and see what happens

- [07:40:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27607) what happens okay waiting to run task count is

- [07:40:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27619) not decreasing but increasing currently

- [07:40:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27624) and let's see if our font shortest path counts changes over time

- [07:40:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27643) a little more tasks they are getting increases

- [07:40:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27650) let's take let's just clear this and see how it

- [07:40:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27652) let's just clear this and see how it goes

- [07:41:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27662) let's analyze it running test count 62

- [07:41:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27669) okay our completed task count also increases

- [07:41:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27672) increases on waiting to run increasing as well

- [07:41:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27683) actually it could it should be able to actually it should

- [07:41:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27685) actually it should run more tasks at the same time

- [07:41:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27688) run more tasks at the same time and use more cpu but it is not doing

- [07:41:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27690) and use more cpu but it is not doing that

- [07:41:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27692) that okay we are stopped

- [07:41:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27710) let's just pause the application and see where we are yeah we are just waiting

- [07:42:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27726) okay it is continuing to process more tasks right now

- [07:42:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27747) okay we are still not getting

- [07:42:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27751) we are still not getting repeating

- [07:42:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27758) the cpu usage is just very low

- [07:44:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27844) we can't get below 19k waiting to run task code

- [07:44:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27860) and it is not finding all of the possible locations which could be why

- [07:45:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27918) okay we are getting dull yes it's good our fault shortest path codes didn't

- [07:45:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27920) our fault shortest path codes didn't increase

- [07:45:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27923) increase which is a problem

- [07:46:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27983) yeah we are getting completed in all tasks

- [07:46:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27991) okay i will pause video until it is down it reaches this point

- [07:46:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=27998) okay i have just noticed that our trad pool set mean threats

- [07:46:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28001) pool set mean threats were not working let me show what i mean

- [07:46:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28004) were not working let me show what i mean we had set 19 000 99 000

- [07:46:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28009) we had set 19 000 99 000 and

- [07:46:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28010) and it was uh returning

- [07:46:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28013) it was uh returning false as you can see false

- [07:46:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28015) false as you can see false this was true but this was false

- [07:46:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28018) this was true but this was false i think you are allowed to set

- [07:47:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28021) i think you are allowed to set maximum 1000 or something let's see

- [07:47:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28026) yes now it is true

- [07:47:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28028) now it is true and now we can you will be

- [07:47:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28031) and now we can you will be amazed by the speed

- [07:47:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28033) amazed by the speed okay let me show

- [07:47:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28035) okay let me show of how many tasks are running uh

- [07:47:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28037) of how many tasks are running uh concurrently

- [07:47:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28039) concurrently okay you see now over 200 300

- [07:47:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28043) okay you see now over 200 300 tasks are running concurrently with a

- [07:47:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28046) tasks are running concurrently with a hundred percent cpu usage

- [07:47:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28049) hundred percent cpu usage it was using only three percent

- [07:47:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28050) it was using only three percent previously now it is using my old cpu

- [07:47:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28058) with running so many more tasks at the same time

- [07:47:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28060) same time i'm not sure if we can say this is more

- [07:47:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28062) i'm not sure if we can say this is more optimized or not

- [07:47:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28065) optimized or not uh

- [07:47:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28066) uh but we will see

- [07:47:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28069) but we will see it is at least running more tasks

- [07:47:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28072) it is at least running more tasks and now i will pause video

- [07:48:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28086) oh interestingly the cpu usage drop down again even though we have over

- [07:48:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28089) drop down again even though we have over 600 running tasks

- [07:48:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28096) yeah but at least now we are able to run more

- [07:48:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28099) but at least now we are able to run more tasks at the same time

- [07:48:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28107) i just want to test another thing since we have modified

- [07:48:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28110) we have modified okay tasks with all

- [07:48:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28115) okay tasks with all honesty tasks

- [07:48:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28126) so i wonder how will it work this time

- [07:49:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28154) wow running task count is now much higher than before almost 2000

- [07:49:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28159) higher than before almost 2000 and waiting around our task force is

- [07:49:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28162) and waiting around our task force is also increasing

- [07:49:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28173) but this time we can't move the next location which is

- [07:49:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28176) location which is looking pretty incorrect

- [07:49:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28193) but waiting to run task code is pretty low

- [07:50:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28204) yeah leading the round task account is pretty low

- [07:50:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28219) it has found 59 short to speed with single location

- [07:50:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28222) single location oh this could be our solution

- [07:50:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28225) oh this could be our solution your running task waiting to run

- [07:50:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28251) okay running test count and there is no waiting to run

- [07:50:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28252) waiting to run wow this is amazing

- [07:51:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28260) but we can never move to next location which is weird

- [07:51:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28290) okay we have some threat errors somewhere i'm not sure

- [07:51:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28292) threat errors somewhere i'm not sure where

- [07:51:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28294) where the threats exited with code zero zero

- [07:52:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28342) okay looks like waiting to run task accounts

- [07:52:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28349) got zero and then move to next location yes true

- [07:52:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28354) and then move to next location yes true i see actually right now we are only

- [07:52:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28357) i see actually right now we are only processing all of the

- [07:52:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28366) with the much higher speed

- [07:52:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28369) much higher speed so this is a necessity because with this

- [07:52:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28372) so this is a necessity because with this for each it is not

- [07:52:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28374) for each it is not waiting and we are running like 3000

- [07:52:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28377) waiting and we are running like 3000 tasks at a time

- [07:53:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28380) tasks at a time okay

- [07:53:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28382) okay okay

- [07:53:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28387) now it will find all of the shortest paths

- [07:53:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28389) paths let's see the font shortest path

- [07:53:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28391) let's see the font shortest path software

- [07:53:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28398) okay i think here

- [07:53:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28404) yeah these are all the shortest paths found

- [07:53:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28436) running task control contract completion count

- [07:53:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28438) count there is no waiting to run count all is

- [07:54:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28441) there is no waiting to run count all is running

- [07:54:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28443) running perfectly fine

- [07:54:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28446) perfectly fine okay so we need further tuning

- [07:54:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28454) okay which could be our

- [07:54:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28463) hashing method because currently it is using sh a256

- [07:54:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28467) using sh a256 and instead we could use

- [07:54:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28470) and instead we could use md5 or

- [07:55:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28519) and get hashcode users return some integers

- [07:55:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28521) integers yeah

- [07:55:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28523) yeah and

- [07:55:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28523) and this could

- [07:55:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28525) this could even speed up our

- [07:55:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28528) even speed up our machine

- [07:55:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28529) machine it has to return

- [07:55:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28537) oh by the way this returns integers object okay what's

- [07:55:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28541) this returns integers object okay what's the error here

- [07:55:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28548) okay hashcode ah i see so this is

- [07:55:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28558) okay let's put me something like this

- [07:56:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28570) integers and

- [07:56:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28572) and for this now we have to change our hash

- [07:56:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28577) for this now we have to change our hash into

- [07:56:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28578) into integer instead of string

- [07:56:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28585) so i'm going to make this in this as integers

- [07:56:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28595) and we are going to have intention methods

- [07:56:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28609) and since they can't be the same name now we should work

- [07:56:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28611) now we should work whatever do we have

- [07:57:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28620) here i have to make this as integer now

- [07:57:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28627) actually we could make this as much so it would work in both cases

- [07:57:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28630) it would work in both cases just make this buff

- [07:57:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28633) just make this buff okay and it must be somewhere else as

- [07:57:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28636) okay and it must be somewhere else as well

- [07:57:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28638) well okay

- [07:57:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28639) okay yes

- [07:57:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28640) yes and let's see if this will speed up our

- [07:57:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28643) and let's see if this will speed up our application

- [07:57:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28655) and now let's run without debugging and see

- [07:57:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28657) and see whether we are

- [07:57:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28660) whether we are completed

- [07:57:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28662) completed our achievements are not

- [07:57:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28665) our achievements are not the shortest paths it should have

- [07:57:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28669) the shortest paths it should have over 1177

- [07:57:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28675) actually equal to and let's start pathfinding

- [07:57:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28679) okay so

- [07:58:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28693) now we are using integers for hash therefore that would be collisions but

- [07:58:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28696) therefore that would be collisions but it's fine

- [07:58:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28698) it's fine it's not that much important

- [07:58:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28702) it's not that much important and

- [07:58:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28704) and let's check from performance profiler

- [07:58:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28718) okay pathfinding it uses 1000 threats exactly as we had said

- [07:58:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28721) exactly as we had said here we just set it as a minimum 1000

- [07:58:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28724) here we just set it as a minimum 1000 threats

- [07:58:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28731) okay it uses 500 megabytes okay

- [07:59:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28742) okay i will pause now all right uh with just one tuning it

- [07:59:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28745) all right uh with just one tuning it became so fast uh

- [07:59:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28748) became so fast uh which was

- [07:59:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28750) which was maximum unload uh iteration count

- [07:59:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28755) maximum unload uh iteration count for per location i reduced it to ten

- [07:59:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28757) for per location i reduced it to ten thousand but

- [07:59:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28759) thousand but i just noticed it another average which

- [07:59:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28761) i just noticed it another average which causes looping

- [07:59:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28764) causes looping through uh different directions as you

- [07:59:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28767) through uh different directions as you can see

- [07:59:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28769) can see and it is

- [07:59:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28770) and it is because that

- [07:59:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28773) because that if

- [07:59:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28774) if with our

- [07:59:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28778) movement direction changing logic here

- [07:59:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28782) direction changing logic here and

- [07:59:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28783) and we only need to

- [07:59:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28786) we only need to allow this uh

- [07:59:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28792) in one condition which is uh

- [07:59:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28795) which is uh if no path is found okay otherwise we

- [07:59:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28799) if no path is found okay otherwise we shouldn't allow it

- [08:00:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28802) shouldn't allow it and

- [08:00:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28802) and [Music]

- [08:00:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28805) [Music] so i'm going to add a listing

- [08:00:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28818) list okay you can search direction change unloads

- [08:00:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28821) direction change unloads locations

- [08:00:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28843) addiction change unloads locations

- [08:00:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28858) okay to be able to use this we need to modify this into a for loop

- [08:02:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28924) yes autocomplete guested it correctly and

- [08:02:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28926) and after the end of the route

- [08:02:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28933) uh actually after the end of the coordinate

- [08:02:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28935) actually after the end of the coordinate yeah

- [08:02:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28937) yeah not that but uh i didn't need to change

- [08:02:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28939) not that but uh i didn't need to change this here let's just return that

- [08:02:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28947) i just got confused okay

- [08:02:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28948) okay what we need to do is simply after the

- [08:02:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28951) what we need to do is simply after the end of the

- [08:02:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28954) end of the coordinate we will check this

- [08:02:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28964) if okay

- [08:02:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28970) contains key wrote id

- [08:03:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28985) contains okay

- [08:03:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28986) okay paracord

- [08:03:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28991) coordinate what is the important link

- [08:03:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28993) important link here current location

- [08:03:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=28996) here current location equal to pulse what we need to do is

- [08:03:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29000) equal to pulse what we need to do is simply

- [08:03:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29004) add curve location

- [08:03:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29007) curve location and

- [08:03:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29012) okay we need to

- [08:03:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29018) decrease current location by one

- [08:03:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29020) one and where we are going to use this

- [08:03:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29021) and where we are going to use this information yes we will

- [08:03:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29025) information yes we will use the information in here

- [08:03:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29032) and and contains

- [08:04:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29042) let me see where we have it

- [08:04:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29053) okay now we should be able to

- [08:04:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29056) we should be able to avoid

- [08:04:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29063) unnecessary looping

- [08:04:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29070) okay let's just delete yes and let's just

- [08:04:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29074) delete yes and let's just start with our debugging again and now

- [08:04:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29076) start with our debugging again and now now look at speed

- [08:04:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29099) these because they weren't helping

- [08:05:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29101) helping okay it's just

- [08:05:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29104) okay it's just stopped

- [08:05:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29105) stopped let's just run without even see if any

- [08:05:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29108) let's just run without even see if any error parallel is strong

- [08:05:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29115) yes we have an error which is

- [08:05:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29116) which is brute id does not exist it says

- [08:05:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29137) yeah it is just for uh past coordinate phases

- [08:05:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29140) past coordinate phases therefore

- [08:05:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29142) therefore we have to use it like this okay

- [08:05:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29148) the roadway is it okay

- [08:05:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29150) it okay now

- [08:05:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29152) now let's

- [08:05:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29153) let's run again

- [08:05:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29155) run again yes we are going very fast

- [08:06:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29179) okay 844 is

- [08:06:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29193) here yeah this is just a closed path so it won't find it but

- [08:06:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29198) it is also keeping continued

- [08:06:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29207) okay i know the reason i know the reason because we prevented it

- [08:07:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29221) can we say that we should be able to find with 10 000

- [08:07:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29244) like this okay

- [08:07:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29272) okay it still doesn't look much more amazed

- [08:08:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29305) we have zero task and we are looping somewhere but where

- [08:08:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29308) and we are looping somewhere but where let's see

- [08:09:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29391) okay it never reaches this point so it always return here

- [08:09:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29394) so it always return here and it returns to bash

- [08:10:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29403) wow you see lst moving directions is

- [08:10:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29407) you see lst moving directions is getting bigger and bigger somewhere

- [08:10:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29411) getting bigger and bigger somewhere and it is because

- [08:10:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29412) and it is because current location

- [08:10:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29419) keep getting decreases yeah i know the reason i know the reason

- [08:10:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29421) yeah i know the reason i know the reason okay

- [08:10:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29427) by the way we don't need to iterate this again and again just add it here

- [08:10:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29431) again and again just add it here and the reason is very obvious if you

- [08:10:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29434) and the reason is very obvious if you ask

- [08:10:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29436) ask you need to add a check here that

- [08:10:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29441) you need to add a check here that contains

- [08:10:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29443) contains third location equals

- [08:10:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29451) okay and

- [08:11:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29460) maybe we won't need it again but let's see

- [08:11:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29466) where is it here that's also the bodies and let's restart

- [08:11:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29482) okay we are really really fast right now as you can see

- [08:11:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29484) as you can see it is really good and let's see if we

- [08:11:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29486) it is really good and let's see if we can find all of the possible locations

- [08:11:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29506) okay 15 86

- [08:12:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29530) we actually should have found pretty quickly

- [08:12:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29560) okay it says possible 1596 so it should be able to go this location

- [08:12:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29564) so it should be able to go this location uh by the way we didn't allow it to go

- [08:12:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29567) uh by the way we didn't allow it to go here so it is

- [08:12:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29569) here so it is trying to find

- [08:12:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29572) trying to find the other part i see

- [08:13:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29581) yeah it will try to find here instead of here

- [08:13:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29586) i think this can be also solved with

- [08:13:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29629) let's make this tool this is the first

- [08:13:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29631) this is the first coordinate and second is

- [08:13:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29634) coordinate and second is normally changes okay

- [08:13:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29638) normally changes okay okay and

- [08:14:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29657) so instead of using this actually like this

- [08:14:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29668) why do we need to logic

- [08:15:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29723) bigger or to

- [08:15:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29724) to or less bigger than

- [08:15:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29732) count false

- [08:15:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29757) and we need to add

- [08:16:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29773) okay i just noticed that the video got stopped okay this is the code uh that

- [08:16:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29775) stopped okay this is the code uh that will work but we have a lot of duplicate

- [08:16:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29778) will work but we have a lot of duplicate code here so

- [08:16:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29792) and how could we do that we could do that as

- [08:16:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29796) how could we do that we could do that as like this

- [08:16:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29812) i'll static or check

- [08:16:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29815) or check load

- [08:17:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29823) okay it's a little bit firm and for that we need to get

- [08:17:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29840) this is the settings so

- [08:17:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29849) use like this

- [08:17:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29851) this okay

- [08:17:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29872) okay now it should be

- [08:18:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29893) two two so let's see if it is working oh by the way we need another thing which

- [08:18:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29895) by the way we need another thing which is

- [08:18:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29896) is after each route

- [08:18:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29898) after each route completion

- [08:18:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29900) completion we need to reset it

- [08:18:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29903) we need to reset it which will happen here

- [08:18:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29917) yeah we can test

- [08:18:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29931) okay it's already done happened it has already happened

- [08:19:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29956) in each

- [08:19:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29966) i mean in each thread itself here probably it

- [08:19:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29968) in each thread itself here probably it needs to be threads

- [08:19:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29970) needs to be threads based

- [08:19:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29972) based not

- [08:19:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29973) not this way

- [08:19:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29978) let's see if it will find

- [08:19:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29995) which requires a direction change if

- [08:19:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=29997) if 2017

- [08:20:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30016) which is here which requires direction change

- [08:20:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30018) change so

- [08:20:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30020) so i have to make this for each

- [08:20:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30026) task and how can i do that if you wonder

- [08:20:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30030) and how can i do that if you wonder i can only do it within this class

- [08:20:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30033) i can only do it within this class which will be

- [08:20:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30053) and we will use it

- [08:20:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30058) instead of dictionary

- [08:21:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30060) dictionary we will need it here so we will

- [08:21:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30062) we will need it here so we will give this

- [08:21:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30076) okay i will use this way

- [08:21:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30085) since this is a reference type it will whatever the value we change

- [08:21:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30088) whatever the value we change will be

- [08:21:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30089) will be uh

- [08:21:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30090) uh check it

- [08:21:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30099) let's say if okay here i am

- [08:21:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30101) here i am here we can false that enable increase

- [08:21:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30104) here we can false that enable increase and we will return

- [08:21:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30106) and we will return through okay now

- [08:21:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30109) through okay now let's see how it works

- [08:21:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30118) gonna look or not and let's check the false direction

- [08:22:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30122) and let's check the false direction yeah

- [08:22:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30123) yeah looks like working

- [08:22:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30130) if it changes direction more than two times it will just return and now

- [08:22:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30134) two times it will just return and now let's see

- [08:22:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30136) let's see 15

- [08:22:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30137) 15 86 is working or not

- [08:22:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30145) because with just two direction change it should be able to find

- [08:22:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30147) it should be able to find it will go bottom left top and left

- [08:22:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30151) it will go bottom left top and left yes

- [08:22:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30152) yes it has to be able to find this yes it i

- [08:22:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30155) it has to be able to find this yes it i think it did find

- [08:22:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30158) think it did find 1586

- [08:22:40](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30160) 1586 let's just

- [08:22:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30166) check it out with here

- [08:23:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30184) let's just find the starting location of 1586

- [08:23:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30185) 1586 okay it is here

- [08:23:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30192) and let's just check the shortest path font

- [08:23:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30195) font reload

- [08:23:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30197) reload yeah this is the pad it has fined

- [08:23:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30200) yeah this is the pad it has fined [Music]

- [08:23:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30202) [Music] starts here goes here

- [08:23:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30205) starts here goes here goes left

- [08:23:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30207) goes left from

- [08:23:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30209) from 16 43

- [08:23:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30212) 16 43 okay 1648

- [08:23:42](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30222) here then it goes 17-12 yeah

- [08:23:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30224) 17-12 yeah it did follow this path

- [08:23:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30231) and reach it here it is not the shortest one but it is

- [08:23:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30235) it is not the shortest one but it is i think decent

- [08:23:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30237) i think decent and let's see if it find here 2017.

- [08:24:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30252) it is working fast it is working decent

- [08:24:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30255) it is working decent we have covered most of the

- [08:24:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30258) we have covered most of the photos pad already

- [08:24:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30260) photos pad already we probably won't have any

- [08:24:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30270) memory leak as well and let's see how many did we find we

- [08:24:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30273) and let's see how many did we find we have found

- [08:24:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30275) have found 1136

- [08:24:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30293) so but uh this is why i know because some

- [08:24:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30296) but uh this is why i know because some locations i have

- [08:24:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30298) locations i have no

- [08:25:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30300) no uh shortest path

- [08:25:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30302) uh shortest path here's

- [08:25:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30304) here's okay so

- [08:25:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30307) okay so or

- [08:25:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30312) this counts the number of no shortage patterns

- [08:25:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30320) okay so this is let's see

- [08:25:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30324) one two

- [08:25:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30326) two they won't have shoulder spread

- [08:25:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30329) they won't have shoulder spread three four five six seven eight nine ten

- [08:25:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30332) three four five six seven eight nine ten eleven

- [08:25:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30333) eleven twelve fourteen fourteen

- [08:25:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30355) okay 41 if i counted correctly 41 locations

- [08:25:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30357) locations won't have any shortest paths

- [08:26:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30364) so when we

- [08:26:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30365) when we summarize 41

- [08:26:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30376) yes exactly same number

- [08:26:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30383) however we have a problem where

- [08:26:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30389) it is not moving the next location currently

- [08:27:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30435) since we are already using [Music]

- [08:27:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30437) [Music] weight off probably this is not

- [08:27:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30439) weight off probably this is not necessary

- [08:27:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30442) necessary and

- [08:27:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30448) okay i just generated shortest paths i mean sql errors on

- [08:27:31](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30451) i mean sql errors on here

- [08:27:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30457) which will count as sequel errors and let's run in without debugging mode

- [08:27:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30475) okay and see if we have any sql error or not

- [08:27:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30477) not let's just delete

- [08:27:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30478) let's just delete all

- [08:28:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30486) okay [Music]

- [08:28:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30498) this codes these codes because we're causing us some

- [08:28:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30501) causing us some problems

- [08:28:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30539) you see how object-oriented programming matters

- [08:29:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30540) matters uh because

- [08:29:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30543) uh because with using an object

- [08:29:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30545) with using an object from our

- [08:29:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30550) let me show is csu chosen direction we are able to

- [08:29:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30554) is csu chosen direction we are able to keep parameters

- [08:29:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30556) keep parameters unique to par

- [08:29:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30558) unique to par threat

- [08:29:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30559) threat let's say pair direction

- [08:29:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30562) let's say pair direction with this way i am able to set maximum a

- [08:29:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30564) with this way i am able to set maximum a load number of

- [08:29:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30566) load number of direction change

- [08:29:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30568) direction change i could make it three four i don't know

- [08:29:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30570) i could make it three four i don't know probably with four we should be able to

- [08:29:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30572) probably with four we should be able to get everywhere

- [08:29:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30574) get everywhere uh

- [08:29:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30575) uh we did it as two right now

- [08:29:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30578) we did it as two right now or to be sure we could set it as four or

- [08:29:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30581) or to be sure we could set it as four or three

- [08:29:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30583) three i'm not sure i will check it after i run

- [08:29:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30586) i'm not sure i will check it after i run through all the maps

- [08:29:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30589) through all the maps but with two

- [08:29:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30590) but with two it's like we are going this direction

- [08:29:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30592) it's like we are going this direction this direction and for example left

- [08:29:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30595) this direction and for example left direction

- [08:30:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30601) i'm not sure if our maps have more complex design

- [08:30:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30603) complex design than that

- [08:30:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30622) we got perhaps we got an error somewhere here

- [08:30:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30624) perhaps we got an error somewhere here i'm not sure

- [08:30:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30639) okay we got all zero zero zero no error is thrown and where are we

- [08:30:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30641) no error is thrown and where are we waiting right now

- [08:30:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30648) we didn't move to the next perhaps waiting here let's see

- [08:30:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30656) now let's click the pause yeah we are removing all of the

- [08:30:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30659) yeah we are removing all of the global tasks and getting this positive

- [08:31:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30662) global tasks and getting this positive of them

- [08:31:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30667) okay this is not anymore necessary i think if you ask me so

- [08:31:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30679) remove this

- [08:31:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30681) this yeah

- [08:31:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30683) yeah because we are waiting all

- [08:31:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30685) because we are waiting all to be completed

- [08:31:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30687) to be completed and it will it can even make our

- [08:31:30](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30690) and it will it can even make our application faster

- [08:31:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30695) and how many did we add to the database

- [08:31:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30712) okay let's just delete all

- [08:32:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30727) let's see what happens you see now it is even faster because we are not spending

- [08:32:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30730) even faster because we are not spending time with

- [08:32:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30731) time with luck and add

- [08:32:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30733) luck and add each time when you use log it is

- [08:32:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30736) each time when you use log it is extremely

- [08:32:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30738) extremely stressful on the computer

- [08:32:21](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30741) stressful on the computer okay

- [08:32:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30742) okay [Music]

- [08:32:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30749) this is much faster than before i think okay the road one road to all getting

- [08:32:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30752) okay the road one road to all getting completed very fast

- [08:32:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30770) 135 we are missing two why

- [08:32:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30779) this one we are missing one actually he knows

- [08:33:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30792) okay we are missing which one i want let's check the rule two

- [08:33:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30795) let's check the rule two okay

- [08:33:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30796) okay this money and

- [08:33:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30799) this money and let's check more two

- [08:33:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30802) let's check more two okay we are missing fifth

- [08:33:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30812) okay three

- [08:33:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30817) row 3 is missing pi

- [08:33:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30828) okay why we are missing several ones i wonder

- [08:34:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30841) or your rosport is exactly the same

- [08:34:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30844) your rosport is exactly the same let's say about five

- [08:34:07](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30847) let's say about five okay road five is exactly the same but

- [08:34:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30850) okay road five is exactly the same but road one route

- [08:34:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30852) road one route row two also has some mistakes

- [08:34:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30856) row two also has some mistakes some

- [08:34:17](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30857) some okay mismatch

- [08:34:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30859) okay mismatch we are missing several in row two

- [08:34:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30862) we are missing several in row two let's see what it could be

- [08:34:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30872) it can be because we did set number of unload

- [08:34:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30878) max directions i will make it 4

- [08:34:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30889) is 10k where it is

- [08:35:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30929) and let's make this vision like this

- [08:35:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30936) okay let's rerun let's delete all

- [08:35:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30950) okay even with four directional change

- [08:35:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30953) even with four directional change it's still too fast as you can see

- [08:35:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30958) it's still too fast as you can see and 135

- [08:36:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30966) but there is more lines here which one is missing

- [08:36:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30968) is missing it's also waste

- [08:36:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30980) so let's check which ones do not exist in the

- [08:36:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=30987) okay thanks

- [08:36:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31004) okay i think now we can see the missing

- [08:36:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31006) now we can see the missing ones

- [08:37:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31024) 844 is here 852 correct

- [08:37:06](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31026) 852 correct 1779

- [08:37:32](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31052) yeah here this is also missing location correct

- [08:37:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31054) correct and 20

- [08:37:36](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31056) and 20 8 28

- [08:37:38](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31058) 8 28 here and goes up to 33 34

- [08:37:45](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31065) okay so 42 rows is missing

- [08:37:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31069) so 42 rows is missing it looks all correct to me

- [08:37:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31077) are there any location that should be missing no

- [08:38:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31080) location that should be missing no nice i think it's correct

- [08:38:04](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31084) nice i think it's correct for the two rows

- [08:38:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31091) okay let's see twenty twenty eighteen or

- [08:38:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31093) twenty twenty eighteen or thirty

- [08:38:15](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31095) thirty 28 91

- [08:38:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31113) twenty ninety one and then

- [08:38:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31117) eight nine four nine two five

- [08:38:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31121) nine two five and it goes up to here

- [08:38:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31132) yes i think correct and let's check root id 2

- [08:39:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31159) okay let's see the missing locations probably this one

- [08:39:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31163) okay 786

- [08:39:34](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31174) 786 yes 1097 which is 1097.

- [08:39:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31181) let's check from the map

- [08:39:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31184) check from the map yeah here

- [08:39:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31186) yeah here oh yes it is dash

- [08:39:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31189) oh yes it is dash here here

- [08:39:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31190) here here yes

- [08:39:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31192) yes and probably here

- [08:39:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31194) and probably here yes

- [08:39:56](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31196) yes these are all mapping errors that i have

- [08:39:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31199) these are all mapping errors that i have made

- [08:40:00](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31200) made so it is it is like i am verifying my

- [08:40:03](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31203) so it is it is like i am verifying my pathfinding software is working

- [08:40:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31205) pathfinding software is working correctly or not

- [08:40:08](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31208) correctly or not with like intentional mistakes

- [08:40:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31212) with like intentional mistakes yes

- [08:40:14](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31214) yes yes

- [08:40:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31219) yes looking nice oh we are already at the road uh 39

- [08:40:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31225) oh we are already at the road uh 39 let's see how many megabytes we are

- [08:40:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31226) let's see how many megabytes we are using

- [08:40:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31244) wow we are using only 400 megabytes looks like we have no more uh

- [08:40:48](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31248) looks like we have no more uh memory leak

- [08:40:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31249) memory leak we have no more slowness issue

- [08:40:52](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31252) we have no more slowness issue for example let's check row three

- [08:41:02](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31262) okay we have only five location let's check your own tree

- [08:41:05](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31265) let's check your own tree which is tree trail

- [08:41:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31285) okay and here's

- [08:41:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31288) and here's i think yes these six locations

- [08:41:50](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31310) okay 2 2 8 3 where it is

- [08:41:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31315) 2 2 8 3 where it is 2 283

- [08:42:01](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31321) yeah this end is totally correct let's see wrote for

- [08:42:10](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31330) yes fully pad

- [08:42:11](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31331) pad generated

- [08:42:13](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31333) generated yes very good you know okay we are all

- [08:42:16](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31336) yes very good you know okay we are all we are have proceeded over

- [08:42:18](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31338) we are have proceeded over 60

- [08:42:20](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31340) 60 we are just too fast

- [08:42:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31343) we are just too fast okay i will now uh upload the latest

- [08:42:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31346) okay i will now uh upload the latest version

- [08:42:29](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31349) version uh with the fixes so that you can

- [08:42:33](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31353) uh with the fixes so that you can check the differences between version

- [08:42:35](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31355) check the differences between version one and the fixes

- [08:42:37](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31357) one and the fixes oh

- [08:42:39](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31359) oh by the way i just made a very big

- [08:42:41](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31361) by the way i just made a very big mistake

- [08:42:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31369) because we tried to add those big

- [08:42:55](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31375) text files which would cause another problem to us

- [08:42:57](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31377) which would cause another problem to us yes

- [08:42:59](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31379) yes okay let me just remove them

- [08:43:24](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31404) finally we have fixed all the errors we have fixed memory leaks

- [08:43:26](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31406) have fixed memory leaks others loans issues

- [08:43:44](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31424) on the record files by the way i will just delete

- [08:43:47](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31427) by the way i will just delete yes code because you don't need it

- [08:43:53](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31433) in your computer it will be automatically

- [08:43:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31434) computer it will be automatically generated

- [08:44:19](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31459) i could even delete the actually binary and debug all the spots

- [08:44:22](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31462) binary and debug all the spots it's fine

- [08:44:23](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31463) it's fine yeah

- [08:44:25](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31465) yeah okay now

- [08:44:27](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31467) okay now we have

- [08:44:28](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31468) we have updated our github

- [08:44:43](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31483) conversion 3 is updated we can just check the difference here

- [08:44:46](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31486) check the difference here just delete the vs folders and main

- [08:44:49](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31489) just delete the vs folders and main window

- [08:44:51](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31491) window and the latest fixes

- [08:44:54](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31494) and the latest fixes i think you can even compare it with

- [08:44:58](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31498) i think you can even compare it with other version

- [08:45:09](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31509) logged into compage but yeah now we should work

- [08:45:12](https://www.youtube.com/watch?v=jRTA0iLjv6M&t=31512) but yeah now we should work end of the video hopefully see you later
