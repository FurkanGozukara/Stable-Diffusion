# How to Publish an ASP .NET Core 6 Website / APP on a Windows OS and Fix Database Connection Problem

## Full tutorial link > https://www.youtube.com/watch?v=9xoIEbVdiZc

[![How to Publish an ASP .NET Core 6 Website / APP on a Windows OS and Fix Database Connection Problem](https://img.youtube.com/vi/9xoIEbVdiZc/sddefault.jpg)](https://www.youtube.com/watch?v=9xoIEbVdiZc "How to Publish an ASP .NET Core 6 Website / APP on a Windows OS and Fix Database Connection Problem")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Publish-an-ASP-NET-Core-6-Website-APP-on-a-Windows-OS-and-Fix-Database-Connection-Problem.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Publish-an-ASP-NET-Core-6-Website-APP-on-a-Windows-OS-and-Fix-Database-Connection-Problem.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


You can watch the video with manually written English subtitles.

I recorded this video upon the request of one of my follower students. His ASP .NET Core 6 Web APP was not working when he published it. However, the app was working fine in development / debug mode.

He was developing his app using #ASP .NET Core version 6 #MVC  #CSharp (C#) and MSSQL server express edition.

He has used Migrations to generate his database with code first approach as explained here: [https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=vs](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=vs)

After doing some debugging I found out that his app was not working when published due to database authorization being denied.

In this video, you will learn how to publish and run your ASP .NET Core 3/5/6/7 (any version) app on a Windows Operating system. This OS can be Windows 8, 10, 11, or Windows Server as well.

First, you need to install the IIS server through Turn Windows Features on or off and then install the necessary ASP .NET Core Runtime Hosting Bundle: [https://dotnet.microsoft.com/en-us/download/dotnet/6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

The source of the example application used in this video can be downloaded here: [https://github.com/FurkanGozukara/how-to-publish-ASP-.NET-Core-MVC-application](https://github.com/FurkanGozukara/how-to-publish-ASP-.NET-Core-MVC-application)

So if your published ASP .NET Core application/website is not working this video will likely solve your problem. Moreover, if you are not sure how to publish your developed app and run it on a remote host or on a local host and emulate it as a remote domain, this video will teach you both.

To solve the database connection problem, we generate a new SQL Server Login account with the necessary permissions. Then we modify SQL connection settings in appsettings.json file. After that when publishing the APP we modify the SQL connection string as well.

Please make comments regarding the video and give me your feedback. You can also ask new questions and I will try my best to answer them.

If you are interested in programming but you don't know where to start, I suggest you watch our playlists in the following order: [https://www.youtube.com/c/SECourses/playlists](https://www.youtube.com/c/SECourses/playlists)

[1] Introduction to Programming Full Course with C# playlist

[2] Advanced #Programming with C# Full Course Playlist

[3] Object Oriented Programming Full Course with C# playlist

[4] Asp.NET Core V5 - MVC Pattern - Bootstrap V5 - Responsive Web #Programming with C# Full Course Playlist

[5] Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist

[6] Software Engineering Full Course playlist

[7] Security of Information Systems Full Course playlist

[8] (Turkish) Bilgisayar Becerileri Tam Ders playlist



### Video Transcription


- [00:00:01](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=1) Hello everyone.

- [00:00:02](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=2) Welcome to my channel again.

- [00:00:03](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=3) This is Dr. Furkan Gözükara.

- [00:00:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=5) I am going to answer a question of a mine a follower student.

- [00:00:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=10) He was developing a .NET Core 6 MVC application.

- [00:00:13](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=13) ASP .NET MVC application and his application were not working when he published his application

- [00:00:22](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=22) a Windows Operating system.

- [00:00:25](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=25) I had to debug his application and find out the reason because when I run his application

- [00:00:31](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=31) it is just running fine on a local host in a debug mode.

- [00:00:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=37) As you can see like it is a simple application.

- [00:00:39](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=39) But when we have published it in a Windows 10 operating system it was not working.

- [00:00:46](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=46) So, first of all to publish an ASP .NET Core MVC application in a Windows Operating system

- [00:00:54](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=54) you have to install a turn windows features on or off and you

- [00:01:07](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=67) need to install .NET ASP.NET 4.8 and Internet Information Services.

- [00:01:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=76) IIS.

- [00:01:17](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=77) So an ASP.NET application runs on an IIS Server in Windows Operating system.

- [00:01:23](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=83) Either it can be Windows 10 or it can be Windows Server.

- [00:01:28](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=88) It doesn't matter.

- [00:01:30](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=90) After you have installed these as you can see Internet Information services and ASP.NET

- [00:01:35](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=95) 4.8 you also need to install ASP.NET Core Run Time Hosting Bundle.

- [00:01:45](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=105) You see there are packages for Windows, macOS, Linux and your target operating system.

- [00:01:53](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=113) For Windows 10 and since we are using ASP.NET Core 6 in this application we install this

- [00:02:01](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=121) one.

- [00:02:02](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=122) Windows Hosting Bundle.

- [00:02:04](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=124) I have installed both of them.

- [00:02:06](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=126) So the application is currently ready to publish.

- [00:02:13](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=133) So this student of me has used ASP.NET Core actually entity framework .NET Core with migrations.

- [00:02:24](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=144) You see it is here Migrations Overview if you are interested in it.

- [00:02:28](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=148) This is code first then database approach.

- [00:02:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=153) It uses it generates a migrations folder under your application as can be seen here.

- [00:02:40](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=160) By the way I will upload all of the source code to the GitHub and I will also put the

- [00:02:48](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=168) links I display on here about Migrations and .NET Core Run Time.

- [00:02:57](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=177) Ok.

- [00:02:59](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=179) So this migrations command that you run through let me show you command line, developer command

- [00:03:07](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=187) prompt or developer powershell.

- [00:03:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=190) It generates these necessary code in here and by using these you see these auto generated.

- [00:03:20](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=200) And it generates your database based on your code.

- [00:03:25](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=205) Ok.

- [00:03:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=206) So these are the code that is written by my student follower student and I am showing

- [00:03:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=213) you how to make it run through this application.

- [00:03:40](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=220) So let me show you it will generate a ToDoApp database when I run the application first

- [00:03:49](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=229) time.

- [00:03:51](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=231) Lets run the application.

- [00:03:54](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=234) It is running.

- [00:03:55](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=235) It is initializing.

- [00:03:56](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=236) And lets see.

- [00:04:00](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=240) Ok.

- [00:04:01](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=241) It is here as you can see.

- [00:04:03](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=243) So when we publish it why do you think it is not working.

- [00:04:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=250) Ok.

- [00:04:13](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=253) We need to reconnect I think.

- [00:04:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=256) This is weird.

- [00:04:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=258) Maybe it is because I don't have the necessary rights.

- [00:04:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=266) Ok.

- [00:04:28](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=268) Lets just do something.

- [00:04:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=273) The application is working.

- [00:04:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=277) However, when we publish this application it won't work.

- [00:04:43](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=283) By the way I am annoyed with this problem.

- [00:04:45](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=285) So I will just disconnect and reconnect with Windows authentication.

- [00:04:55](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=295) Ye.

- [00:04:57](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=297) Ok.

- [00:04:58](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=298) Actually I was in a another user probably.

- [00:05:02](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=302) As you can see our database is working.

- [00:05:04](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=304) There is migrations history.

- [00:05:06](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=306) This is used to update the database if you change code.

- [00:05:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=310) Alright.

- [00:05:11](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=311) So now lets publish our application and see if it is working or not.

- [00:05:17](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=317) This was why student problem.

- [00:05:20](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=320) He uses default settings as you can see the connection string is written in appsettings.json

- [00:05:28](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=328) file.

- [00:05:29](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=329) It is written as server localhost, database todoapp, integrated security true.

- [00:05:34](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=334) This works fine when you run in debug mode.

- [00:05:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=337) However, when we publish it what will happen.

- [00:05:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=341) This is the problematic thing.

- [00:05:44](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=344) I am opening IIS server.

- [00:05:47](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=347) I am going to compose a test website.

- [00:05:51](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=351) Ok.

- [00:05:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=352) I am going to add a website.

- [00:05:53](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=353) I will call it as todoapp.

- [00:05:57](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=357) Ok.

- [00:05:58](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=358) Let's generate a folder for it in our inetpub folder here.

- [00:06:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=365) wwwroot new folder todoapp.

- [00:06:07](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=367) Ok.

- [00:06:08](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=368) And I am going to call it as todoapp.com.

- [00:06:12](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=372) There is no such there could be such host but we will use our localhost.

- [00:06:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=378) todoapp.com.

- [00:06:20](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=380) And.

- [00:06:22](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=382) Ok.

- [00:06:24](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=384) Inetpub wwwroot todoapp.

- [00:06:30](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=390) Ok.

- [00:06:32](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=392) Ok so to be able to access todoapp.com through my localhost I need to open and edit hosts

- [00:06:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=401) file.

- [00:06:42](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=402) It is inside Windows ok drivers actually system32 yes folder.

- [00:06:51](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=411) Here.

- [00:06:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=412) And here is drivers folder.

- [00:06:54](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=414) Here etc folder and hosts file I will open it with EM editor and I will add 127.0.0.1.

- [00:07:02](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=422) This is localhost IP and now it will redirect me to localhost IP when I type todoapp.com

- [00:07:14](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=434) in my browser.

- [00:07:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=436) Ok.

- [00:07:17](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=437) So we are ready.

- [00:07:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=438) And now it is time to publish our application.

- [00:07:22](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=442) I am going to use publish and lets see the options.

- [00:07:27](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=447) There is release .NET 6 self contained or framework depended.

- [00:07:31](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=451) It is up to you.

- [00:07:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=453) You can also select the target operating system.

- [00:07:36](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=456) I am selecting Winx64.

- [00:07:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=461) You see it auto adds the database connection string.

- [00:07:47](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=467) And ye this is fine.

- [00:07:51](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=471) You shouldn't select produce single I think it is not working on Windows operating system.

- [00:07:56](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=476) I am not sure.

- [00:07:57](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=477) Ok.

- [00:07:58](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=478) Then lets publish it.

- [00:08:01](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=481) Ok the publish has been completed.

- [00:08:04](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=484) Now I will copy and paste files into my generated inetpub folder here.

- [00:08:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=496) wwwroot todoapp lets copy and paste.

- [00:08:21](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=501) Ok.

- [00:08:22](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=502) It is here.

- [00:08:24](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=504) Now when we open todoapp.com lets see what happens.

- [00:08:31](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=511) Ok.

- [00:08:34](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=514) As you can see it is not working.

- [00:08:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=517) And the reason of this is that when you set your database connection as like this it is

- [00:08:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=532) it will not work in a published environment.

- [00:08:55](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=535) This was the reason why our application why the student's application was not working.

- [00:09:03](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=543) And to solve this problem we need to add a user to our users in security logins.

- [00:09:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=558) Ok.

- [00:09:19](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=559) In here.

- [00:09:21](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=561) So I am going to generate as a new user as TestAppUser.

- [00:09:29](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=569) This will be password.

- [00:09:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=573) Lets generate a new login.

- [00:09:35](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=575) Let's say todoapp.

- [00:09:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=577) This is the name of the login.

- [00:09:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=581) I will set SQL authentication I am setting password.

- [00:09:46](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=586) I won't enforce password policy.

- [00:09:49](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=589) But you can also apply that.

- [00:09:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=592) And we also need to give it roles.

- [00:09:55](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=595) So I think I will give it serveradmin.

- [00:10:00](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=600) This should be sufficient.

- [00:10:01](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=601) I am not sure.

- [00:10:02](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=602) You can select all of them as well.

- [00:10:04](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=604) dbcreator.

- [00:10:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=605) Maybe I will also select it.

- [00:10:09](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=609) Or you can select all of them.

- [00:10:12](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=612) I will select all of them for tutorial purposes.

- [00:10:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=616) But you can select only the minimum required one for your application.

- [00:10:23](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=623) Now we have a new user.

- [00:10:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=626) And for this user to be for this user account to be used we need to change our settings

- [00:10:38](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=638) as.

- [00:10:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=641) So userid will be equal to our new user name which is todoapp.

- [00:10:54](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=654) And password will be equal to TestAppUser.

- [00:10:56](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=656) This is our password.

- [00:11:00](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=660) And once we make after we make this change we also need.

- [00:11:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=665) Lets run the application and test it whether it is working or not first of all.

- [00:11:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=670) Ok it is working.

- [00:11:14](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=674) Ok.

- [00:11:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=676) And secondly we need to republish.

- [00:11:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=678) Ok.

- [00:11:19](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=679) When we select all settings we need to change this string.

- [00:11:29](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=689) Ok.

- [00:11:31](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=691) Save.

- [00:11:33](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=693) And lets publish.

- [00:11:36](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=696) Ok.

- [00:11:40](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=700) I will just pause video while publishing.

- [00:11:42](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=702) Ok the republish has been completed.

- [00:11:44](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=704) Now I will update the files inside our todoapp folder.

- [00:11:50](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=710) Inside wwwroot.

- [00:12:06](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=726) Ok we can just keep in use files.

- [00:12:08](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=728) It should be good.

- [00:12:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=730) And then we refresh our.

- [00:12:14](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=734) Ok.

- [00:12:15](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=735) As you can see now our localhost is working as supposed to be.

- [00:12:24](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=744) Now that we have fixed our database connection problem and we are able to publish our website

- [00:12:32](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=752) ASP.NET MVC .NET Core application.

- [00:12:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=757) This should work in .NET Core 3 5 6 whatever the version you are using.

- [00:12:42](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=762) Currently this application uses let me show you properties .NET Core 6.

- [00:12:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=772) It should be same in other .NET Core as well.

- [00:12:56](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=776) Now I will upload all of the source code into GitHub folder.

- [00:13:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=785) Ok this is our repository that we will publish our source code.

- [00:13:09](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=789) So I will open GitBash.

- [00:13:12](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=792) And I will move to the desktop cd.

- [00:13:21](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=801) Ok.

- [00:13:23](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=803) Then we need to add the commands.

- [00:13:36](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=816) Ok.

- [00:13:38](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=818) git remote add origin.

- [00:13:48](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=828) Ok.

- [00:13:51](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=831) Oww we have added also the unnecessary files.

- [00:14:00](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=840) So to not add them I will make the necessary changes.

- [00:14:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=845) We don't need vs folder or object folder.

- [00:14:12](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=852) Ok let's close this.

- [00:14:16](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=856) I will just delete the git.

- [00:14:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=858) And I will need to close the application.

- [00:14:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=866) Ok.

- [00:14:27](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=867) And here I should delete object as well.

- [00:14:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=877) And I can delete binary as well.

- [00:14:41](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=881) Ok.

- [00:14:43](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=883) git add remote origin.

- [00:14:53](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=893) git remote add origin.

- [00:15:03](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=903) Ok.

- [00:15:05](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=905) Let's say initial upload.

- [00:15:18](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=918) Ok it is uploaded to repository.

- [00:15:22](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=922) As you can see the app is here.

- [00:15:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=926) It should be same as everything.

- [00:15:29](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=929) Yes.

- [00:15:30](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=930) And when we open the application from SLN it should just work fine in your computer

- [00:15:37](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=937) as well.

- [00:15:38](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=938) Make sure that you have generated a user as this or you need to change it back to localhost

- [00:15:52](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=952) authentication.

- [00:15:54](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=954) As I have shown you previously.

- [00:15:55](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=955) Ok.

- [00:15:56](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=956) Ok.

- [00:15:57](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=957) This is all.

- [00:15:58](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=958) If you also have questions please ask me through our Discord server.

- [00:16:04](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=964) You can find our Discord server on our channel.

- [00:16:10](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=970) Here you see we have official Discord link.

- [00:16:15](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=975) You can see also see my LinkedIn and the game I develop.

- [00:16:19](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=979) Please also subscribe and if you join I appreciate that.

- [00:16:24](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=984) Thank you so much for watching.

- [00:16:26](https://www.youtube.com/watch?v=9xoIEbVdiZc&t=986) Please make comments, likes, subscribe and hopefully see you later.
