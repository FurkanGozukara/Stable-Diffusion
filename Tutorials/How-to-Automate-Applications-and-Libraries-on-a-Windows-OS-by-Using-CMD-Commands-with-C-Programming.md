# How to Automate Applications and Libraries on a Windows OS by Using CMD Commands with C# Programming

## Full tutorial link > https://www.youtube.com/watch?v=dP53wzLwqMA

[![How to Automate Applications and Libraries on a Windows OS by Using CMD Commands with C# Programming](https://img.youtube.com/vi/dP53wzLwqMA/sddefault.jpg)](https://www.youtube.com/watch?v=dP53wzLwqMA "How to Automate Applications and Libraries on a Windows OS by Using CMD Commands with C# Programming")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Automate-Applications-and-Libraries-on-a-Windows-OS-by-Using-CMD-Commands-with-C-Programming.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Automate-Applications-and-Libraries-on-a-Windows-OS-by-Using-CMD-Commands-with-C-Programming.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


In this #educational #tutorial video, I am going to code a .NET Core C# #WPF application to automate any application, library, third-party EXEs and such apps through #CMD (Command Prompt) commands. For example latest #OpenAI's Speech Text transcribing model Whisper or ImageMagick image processing application.

I have prepared this video for one of our dear followers Tokyo Family. You can also make a comment and ask for the topics that you want to be covered.

As long as the application that you want to automate supports CMD commands, you can easily fully automate it through a #CSharp application.

For example, I used such library automation in my thesis project when using the SVM library LIBSVM for automated testing, parameter tuning, and experimenting. As another example, I have used CMD automation for #batch #processing images for my web-based game [https://www.PokemonPets.com](https://www.PokemonPets.com) and [https://www.MonsterMMORPG.com.](https://www.MonsterMMORPG.com.) I have converted all of the images into .webp format and also did image resize operations for the game's needs.

With command line manipulation, basically, you can use any third-party application without even needing to add their reference to your application. Moreover, with a .NET console application, you can do this automation in any of the major operating systems such as Linux, Windows, and macOS.

I also not only show how to automate third-party applications but also how to pick a folder, and the logic of using enumerations for multiple settings, choices, and options.

The source code repository of the program :

[https://github.com/FurkanGozukara/Automation-of-any-Third-Party-Applications-and-Libraries-Through-CMD-Commands](https://github.com/FurkanGozukara/Automation-of-any-Third-Party-Applications-and-Libraries-Through-CMD-Commands)

Moreover, we cover the following #howto topics:

* How to iterate through #Enum

* How to use Enum for options and use in #ComboBox

* How to do multi-threaded #programming with Parallel.Foreach

* How to start a certain number of tasks/threads/processes simultaneously at a time with ParallelOptions and MaxDegreeOfParallelism

* How to do #multithreading programming synchronization with Interlocked

* How to pick a folder with FolderBrowserDialog

* How to select a file with OpenFileDialog

* How to write extensions for Enum

* How to design the application in a sub task-based way so that the application's interface do not freeze and it stays responsive while working

We have manually corrected the subtitles for the video so watch the tutorial with subtitles on if you have a hard time understand

Please join Our Discord server for asking questions and have discussions: [https://discord.gg/rfttctFewW](https://discord.gg/rfttctFewW)

Please follow us on Twitter: [https://twitter.com/SECourses](https://twitter.com/SECourses)

Please follow us on Facebook: [https://www.facebook.com/OfficialSECourses](https://www.facebook.com/OfficialSECourses)

If you are interested in programming our playlists will teach you how to program and code from scratch: [https://www.youtube.com/c/SECourses/playlists](https://www.youtube.com/c/SECourses/playlists)

[1] Introduction to Programming Full Course with C# playlist

[2] Advanced Programming with C# Full Course Playlist

[3] Object Oriented Programming Full Course with C# playlist

[4] Asp #NETCore V5 - MVC Pattern - Bootstrap V5 - Responsive Web Programming with C# Full Course Playlist

[5] Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist

[6] Software Engineering Full Course playlist

[7] Security of Information Systems Full Course playlist



### Video Transcription


- [00:00:01](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1) Hello everyone.

- [00:00:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2) Welcome to Software Engineering Courses.

- [00:00:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=4) Aka SECourses.

- [00:00:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=5) Today I am going to show you how you can automate any third-party software, library, EXE and

- [00:00:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=12) such that supports command line options.

- [00:00:14](https://www.youtube.com/watch?v=dP53wzLwqMA&t=14) This was a request of one of our dear subscribers Tokyo family.

- [00:00:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=20) Here his request as you can see.

- [00:00:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=26) He asks that whether OpenAI Whisper model supports multiple videos transcription with

- [00:00:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=32) a single line command.

- [00:00:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=33) As you remember, I have made a video regarding the Whisper.

- [00:00:39](https://www.youtube.com/watch?v=dP53wzLwqMA&t=39) The Whisper model doesn't have such support.

- [00:00:42](https://www.youtube.com/watch?v=dP53wzLwqMA&t=42) However, since Whisper supports command line options, we can easily automate it.

- [00:00:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=47) For automation task, I will code a .NET Core WPF application.

- [00:00:51](https://www.youtube.com/watch?v=dP53wzLwqMA&t=51) I had used this approach in some of my previous applications such as Automating ImageMagick EXE.

- [00:00:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=59) Before starting coding, I would like to thanks a lot to our first-ever three supporters who

- [00:01:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=65) joined it and became members of our channel as beginner developer tier.

- [00:01:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=71) So let's start composing our .NET Core WPF application.

- [00:01:15](https://www.youtube.com/watch?v=dP53wzLwqMA&t=75) I will upload all of the source code written in this video to GitHub channel at the end.

- [00:01:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=81) So do not worry about that.

- [00:01:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=86) So for example, this is my previous software that I have coded to automate ImageMagick.

- [00:01:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=96) So let's start with composing a new project to our video, create project.

- [00:01:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=105) I am going to pick WPF application.

- [00:01:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=109) It will be .NET Core, probably this is .NET Core.

- [00:01:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=115) Let's pick a folder here, Desktop.

- [00:02:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=123) Let's name it as Automation of Applications through Command Interface, CMD, Next.

- [00:02:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=139) I am going to pick .NET Core 6, version 6.

- [00:02:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=147) Okay, so it is started.

- [00:02:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=153) Let's open the design interface, it is getting loaded right now.

- [00:02:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=160) So let's add a button to start automating our processes.

- [00:02:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=166) I will call this button as Start Processing Videos as Batch.

- [00:02:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=179) Then we can have ComboBox to have option as Transcribe or Translate.

- [00:03:08](https://www.youtube.com/watch?v=dP53wzLwqMA&t=188) Let's give a name to the button as btnStartBatchProcessing.

- [00:03:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=197) So the ComboBox will have cmbBoxTaskOptions.

- [00:03:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=205) So when I double click the button, it will generate a click event.

- [00:03:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=213) And for automation tasks, we can write as the options of Whisper as enumeration. Whisper --help.

- [00:03:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=229) By the way, how do my computer finds where is the Whisper right now?

- [00:03:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=235) It checks the default pathing, okay.

- [00:03:58](https://www.youtube.com/watch?v=dP53wzLwqMA&t=238) To see the pathing, you can just type path to our search bar and there is edit system

- [00:04:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=245) environment variables.

- [00:04:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=247) And from here, click environment variables.

- [00:04:13](https://www.youtube.com/watch?v=dP53wzLwqMA&t=253) And from here, you can see all the paths, default paths added to the system.

- [00:04:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=258) Currently, Whisper is located in this path variable.

- [00:04:23](https://www.youtube.com/watch?v=dP53wzLwqMA&t=263) When I click edit, we can see it is added as Python scripts, okay.

- [00:04:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=270) Also we can see that CUDA default paths or ImageMagick default paths.

- [00:04:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=278) So you can add any third-party default path that you are going to use through command

- [00:04:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=284) line interface.

- [00:04:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=286) You can add their default path and then the command interface will know where to look

- [00:04:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=290) for that application.

- [00:04:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=295) So when I type it Whisper --help, it check it that default path.

- [00:05:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=303) So for tasks, we are going to have translation with languages.

- [00:05:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=311) We can have all of this as an enumeration, actually.

- [00:05:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=317) So I will just copy and paste them, okay. Ok let's see.

- [00:05:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=357) All right.

- [00:05:58](https://www.youtube.com/watch?v=dP53wzLwqMA&t=358) So I am going to have all of the supported languages as an enumeration as enLanguages.

- [00:06:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=363) And I will load them into the ComboBox as, okay. Actually we can add it as, okay. To iterate

- [00:06:23](https://www.youtube.com/watch?v=dP53wzLwqMA&t=383) through enumeration, we need a special syntax as, okay. typeof(enLanguages), Cast&lt;enLanguages&gt;, okay.

- [00:07:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=420) And then we can initialize our cmbBoxTaskOptions.Items.Add(vrLanguage).

- [00:07:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=427) When we run the application, we will see that all of the languages has arrived into the Combobox like this, okay.

- [00:07:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=436) So by default, we can pick English equal to, it should work, I think, okay.

- [00:07:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=450) All right.

- [00:07:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=451) So how are we going to process?

- [00:07:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=455) We can also have a folder pick option for picking the folder that is going to be processed.

- [00:07:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=466) We are going to use open directory dialogue, and for that, I just found a cool answer for

- [00:07:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=473) you, which is here.

- [00:07:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=477) So we are going to add using System.Windows.Forms, reference to our using section like

- [00:08:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=486) this, okay.

- [00:08:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=492) So in .NET Core, it is not, okay, so you see it is not able to find its reference, therefore

- [00:08:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=501) we need to add &lt;UseWindowsForms&gt; into csproj file of the project after the use WPF like

- [00:08:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=513) this, okay.

- [00:08:37](https://www.youtube.com/watch?v=dP53wzLwqMA&t=517) And then, okay, now you see reference has arrived, it has auto-refresh it, okay.

- [00:08:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=525) So we can add our folder picking button like this. Pick processing folder. Alternatively,

- [00:09:10](https://www.youtube.com/watch?v=dP53wzLwqMA&t=550) we can also add a text box for users to copy paste the path of the file, folder of the file.

- [00:09:24](https://www.youtube.com/watch?v=dP53wzLwqMA&t=564) So it can be like this, okay, we can have two options actually.

- [00:09:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=580) Pick processing folder or pick processing file.

- [00:09:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=589) And in this text box, I am going to write the path, okay.

- [00:10:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=605) And when we click the pick processing folder, we are going to use this dialogue, okay.

- [00:10:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=618) Actually this is not working, so I am going to use this one, and okay. Okay, I did pause video

- [00:10:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=641) to not waste your time and I have found the solution.

- [00:10:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=646) So we are going to use FolderBrowserDialog class to pick the folder of batch processing

- [00:10:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=654) videos or sounds, whatever you want to process with Whisper currently. But the logic I will

- [00:11:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=662) show in this video, lecture video will can be applied to any software, as I said. So we are going

- [00:11:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=671) to use FolderBrowserDialog and for its starting path, I did pick desktop, but you

- [00:11:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=677) can pick any folder like that.

- [00:11:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=680) And if the user clicks, select folder, then the path will be copied and pasted into our

- [00:11:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=688) text file path, let me show you. Actually text box inside the TextBox. So I'm picking the

- [00:11:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=700) desktop folder, for example, you see it is there right now.

- [00:11:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=705) If I click cancel, nothing will happen because we are checking whether user click it or not.

- [00:11:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=712) And the same logic will apply to pick a certain file. Then this time we will use this one,

- [00:12:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=720) let me show you. Okay, this time we are going to use OpenFileDialog like this, and we

- [00:12:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=732) can pick any file like that.

- [00:12:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=736) Okay, now that we are ready to pick the folder, we can start process.

- [00:12:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=745) So with my previous application, I used a methodology such as that I write the command

- [00:12:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=755) into a command file, it's actually the same as txt file, but with CMD extension, then

- [00:12:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=764) I start that process, okay.

- [00:12:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=767) So for Whisper, we are going to generate our command like this.

- [00:12:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=776) So we have translation option, we have transcribe option, we can give input parameter, several

- [00:13:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=786) input parameters. So you can make each of them with this enumeration style, but for

- [00:13:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=796) this time, I will just continue with as much as this one. It will be like, ok, and.

- [00:13:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=825) Ok, I copy-have pasted an example command from my previous video.

- [00:13:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=829) You see, we start with Whisper, the library that we are going to call through CMD and

- [00:13:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=837) the file input path of file and the language of the video, sound, whatever the model that

- [00:14:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=846) you want to use, whether you want to use CUDA or not, and the translation task.

- [00:14:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=851) So you can make all of these as enumerations, actually, as enumerations like here, you can

- [00:14:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=860) add ComboBoxes so that the user can pick any of them.

- [00:14:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=865) But to make the video short, I won't do that.

- [00:14:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=870) So just I am going to modify this part with the selected item and the path.

- [00:14:39](https://www.youtube.com/watch?v=dP53wzLwqMA&t=879) OK, so for the path, we are going to use a simple approach as if Directory.Exists, srTxtFilePath,

- [00:14:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=893) then it means it's a directory.

- [00:14:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=894) OK, the user has selected directory

- [00:14:58](https://www.youtube.com/watch?v=dP53wzLwqMA&t=898) and if not, it won't be a directory, it will be a file.

- [00:15:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=906) OK, bool blDirectory = false;.

- [00:15:13](https://www.youtube.com/watch?v=dP53wzLwqMA&t=913) And.

- [00:15:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=916) It will be true.

- [00:15:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=920) If Equals false, then we are going to have a file path.

- [00:15:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=929) Actually, we should also check that.

- [00:15:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=945) OK, so.

- [00:15:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=952) If blDirectory, then we are going to have iteration.

- [00:16:01](https://www.youtube.com/watch?v=dP53wzLwqMA&t=961) foreach Directory.GetFiles from the path.

- [00:16:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=971) And it will be this path, of course, actually, we can just use this.

- [00:16:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=982) And the command will become then.

- [00:16:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=991) Like this.

- [00:16:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=992) OK, so what else we need, we also need a command of CMD command prompt.

- [00:16:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1001) Which will be.

- [00:16:42](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1002) Let me show you.

- [00:16:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1004) Here command slash C. So what does that mean?

- [00:16:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1010) We can see that with typing CMD slash question mark and it shows us the options of command

- [00:17:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1020) window, so the C means carries out the command specified by string and then terminates OK.

- [00:17:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1027) So if we want command window

- [00:17:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1031) to terminate, we need to add command slash C. If you want command window to remain, we

- [00:17:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1038) need to pick it as command slash K.

- [00:17:24](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1044) So first for testing purposes.

- [00:17:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1049) Let's use with like this, let me show you.

- [00:17:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1056) OK, so the command window will remain OK. So I will write this into a command file.

- [00:17:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1067) If you want to start multiple commands at the same time, then we can give different

- [00:17:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1072) names to each command file and then delete them.

- [00:17:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1077) OK, so let me show you my logic.

- [00:18:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1082) It's up to you how you want.

- [00:18:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1085) OK, so this folder will be generated inside debug folder.

- [00:18:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1102) OK, so for file names, I will use Ticks, whatever, or you can use another methodology such as

- [00:18:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1121) static int irCmdFileNameCounter.

- [00:18:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1137) And OK, then we need to run this command through ProcessStartInfo class like this.

- [00:19:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1176) OK, so this is our command name.

- [00:19:43](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1183) OK, so there are options when you start a process, you can set process window as hidden

- [00:19:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1190) or minimized or maximized or normal.

- [00:19:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1194) It's up to you.

- [00:19:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1195) Then we get the process information and then we wait for exit.

- [00:20:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1202) OK, this is important.

- [00:20:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1204) Otherwise, it would just start all of the processes at the same time.

- [00:20:09](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1209) So you need to determine how many processes you want to start at the same time.

- [00:20:15](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1215) OK, you can also make this as a Parallel.ForEach.

- [00:20:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1219) If you make it Parallel.ForEach, then it will start on a certain number of processes at

- [00:20:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1226) the same time.

- [00:20:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1227) Actually, we can make it Parallel.ForEach.

- [00:20:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1229) So for that, I'm going to use model tiny.

- [00:20:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1235) And to be able to Parallel.ForEach.

- [00:20:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1238) You go to like this.

- [00:20:48](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1248) OK, here then.

- [00:21:08](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1268) OK.

- [00:21:15](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1275) OK.

- [00:21:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1282) Now it is Parallel.ForEach, and I will also define ParallelOptions.

- [00:21:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1295) And I will set max degree of parallelism as, for example, two.

- [00:21:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1300) So at the same time, there will be maximum two command window opened.

- [00:21:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1307) All right, we need to also provide this into our Parallel.ForEach options like this.

- [00:21:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1312) OK, if it is not a directory, then it is just so simple.

- [00:22:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1320) If.

- [00:22:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1323) String is null or empty.

- [00:22:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1324) Equal to false.

- [00:22:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1326) So if user has selected a file, OK.

- [00:22:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1336) OK, it says that it is not assigned, therefore we need to assign it as a null here.

- [00:22:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1350) And then we will have the same command.

- [00:22:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1355) So instead of copying and pasting this, what I am going to do is I will have another method

- [00:22:43](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1363) here.

- [00:22:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1365) Let's say startCmd.

- [00:22:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1370) I will cut this code in here and paste it here.

- [00:22:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1373) So this is going to take the string file path.

- [00:22:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1379) By the way, since this will be running in a thread, this won't work because it cannot

- [00:23:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1385) access the thread.

- [00:23:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1387) It cannot access the main thread items through a sub-thread / sub-task.

- [00:23:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1392) Therefore, I need to have I need to keep this somewhere else as.

- [00:23:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1399) Let's say.

- [00:23:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1402) private static string srSelectedLanguage

- [00:23:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1415) Equal to.

- [00:23:39](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1419) Lets just write English.

- [00:23:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1426) OK, it will be.

- [00:23:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1430) English by default and.

- [00:23:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1436) When user clicks the button in the main thread, I will set this equal to.

- [00:24:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1445) CMB box task options selected item.

- [00:24:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1457) Now we don't need this.

- [00:24:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1462) OK and while counter is like this, we can also make it that private.

- [00:24:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1473) All right, it looks good.

- [00:24:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1476) And after a command file is set, we need to increase it by one.

- [00:24:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1486) And since it is going to be parallel, parallelly working, multithreaded, we need to use.

- [00:24:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1495) Interlocked,

- [00:25:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1503) OK and.

- [00:25:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1511) And here we need to read it as.

- [00:25:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1517) OK, it is expecting a long, therefore I need to change the number to long.

- [00:25:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1528) So why did I use Interlocked?

- [00:25:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1531) Because when you are working in a multithreaded environment, you have to ensure that there

- [00:25:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1536) is a synchronization between different threads.

- [00:25:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1540) And even for increasing or decreasing an integer, a long number, you may have problems if there

- [00:25:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1549) are so many tasks at the same time, getting spawned, getting started, therefore using

- [00:25:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1557) Interlocked will ensure that I have synchronization between different threads.

- [00:26:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1563) OK, and.

- [00:26:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1566) Yeah, it looks good.

- [00:26:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1571) All right, so here we will call this method.

- [00:26:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1577) It will be the parallel for each will call this method as.

- [00:26:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1582) A task, however, it will wait the task to finish to move the next statement.

- [00:26:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1589) It is not like taskfactory, TaskFactory.StartNew. It is a little bit different.

- [00:26:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1596) And it requires.

- [00:26:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1601) The give it requires me to give the file path like this and then.

- [00:26:48](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1608) And the same will be here.

- [00:26:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1610) You see, I have prevented copy-pasted code.

- [00:26:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1615) All right, everything looks good.

- [00:26:58](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1618) Now we need to have a folder that contains several video files.

- [00:27:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1626) OK.

- [00:27:08](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1628) OK, I have prepared a folder that contains my one of my lecture videos, software engineering

- [00:27:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1636) lectures, as you can see.

- [00:27:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1639) So I will pick that folder and start processing.

- [00:27:23](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1643) I am not sure whether a single quote will work as a file path or not, but let's just

- [00:27:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1651) try it.

- [00:27:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1652) OK, first, let's try with a single-file processing.

- [00:27:37](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1657) So I will pick the processing file desktop software engineering and let's say.

- [00:27:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1665) Let's pick, for example, lecture six.

- [00:27:48](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1668) OK, and let's click start.

- [00:27:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1670) OK, the command has started.

- [00:27:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1673) OK, we have an invalid argument, which is.

- [00:27:58](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1678) We can see the argument.

- [00:28:08](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1688) OK, I think the problem is the path.

- [00:28:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1699) So let's fix it quickly.

- [00:28:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1701) We need to give a double quote.

- [00:28:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1705) OK, I think now it should work.

- [00:28:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1712) By the way, you see, I have used a double like this because I have @ character in front

- [00:28:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1716) of it and $ character allows me to write variables like this.

- [00:28:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1725) OK, OK, I think now it will start.

- [00:28:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1737) OK, it has started translation, and after it is done, this window will remain because

- [00:29:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1747) we have started the command like this and we can also see the previous commands.

- [00:29:15](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1755) From here, of course, they will get overwritten each time we restart the application, but

- [00:29:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1761) you can also have a different naming to check them later if you want.

- [00:29:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1766) When I open this command, we can see how that command is written into a text file like this.

- [00:29:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1775) All right, and OK. You see, my application has frozen the main interface because currently

- [00:29:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1786) I didn't make it start like a task, but let's fix that as well.

- [00:29:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1794) OK, so how we are going to fix it is simply OK, and Task.Factory.StartNew().

- [00:30:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1821) OK, I will start the processing task as a task, OK, as a thread, however, this time

- [00:30:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1838) I cannot access the txtFilePath.Text like this, therefore I need to provide it as a

- [00:30:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1845) OK, like this, so here I will give that.

- [00:30:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1856) Because you see, you cannot access main window elements inside a task, OK, because a different

- [00:31:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1863) thread own that.

- [00:31:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1865) All right, and yeah, now it should work and our main interface will not freeze this time.

- [00:31:13](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1873) Let me show.

- [00:31:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1877) OK, an error happened somewhere, I think.

- [00:31:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1890) See OK, this is weird.

- [00:31:42](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1902) Oh, I know, I know, I know, because inside here it is already being a task, therefore

- [00:31:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1915) I need to set it like this, yeah, now it will work.

- [00:32:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1924) OK, it has started and you see my interface is completely responsive.

- [00:32:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1932) All right, now let's test out processing folder, whether it is working or not, it will spawn

- [00:32:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1940) two tasks this time.

- [00:32:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1942) OK, I am picking software engineering folder.

- [00:32:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1947) Start processing as a batch, yes, the two different tasks started with lecture 1 watermarked and

- [00:32:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1956) lecture 4 watermarked.

- [00:32:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1958) If I want them to run within an within an order, then I can sort this list.

- [00:32:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1966) Which list? The file path list, which is here, I can sort it.

- [00:32:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1973) But in parallel for each, it executes the list as it wishes.

- [00:32:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1979) OK, you see two different files is getting transcribed at the same time right now.

- [00:33:10](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1990) And when I close them, you see the next ones started because currently parallel for each

- [00:33:15](https://www.youtube.com/watch?v=dP53wzLwqMA&t=1995) is still running and it is waiting this task to be completed.

- [00:33:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2000) And this task is completed only when the process we started is completed, OK?

- [00:33:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2009) All right.

- [00:33:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2011) And when I close them, you see the new ones are getting started.

- [00:33:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2018) As I said, you can change this parameter if you keep it as K, then it will keep the

- [00:33:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2026) window open.

- [00:33:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2027) If you use C, then it will close that.

- [00:33:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2030) You can also make the process window style as hidden, minimize it, maximize it.

- [00:33:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2036) It is up to you how you want them.

- [00:34:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2040) OK, anything else?

- [00:34:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2043) So with this approach, basically you can automate anything.

- [00:34:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2046) For example, I have automated ImageMagick to batch-process my image files for my web

- [00:34:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2058) based games.

- [00:34:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2060) Basically anything can be automized fully. With parallel for foreach,

- [00:34:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2066) you can define how many tasks to start to be running at the same time.

- [00:34:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2072) And with using enumerations, you can have all the options of your application like the

- [00:34:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2080) model. For the model, for example, it's easy.

- [00:34:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2084) Let me show.

- [00:34:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2086) OK, whisperModels for which models they have.

- [00:34:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2094) Let's say OpenAI. OK, here they have tiny, base, small.

- [00:35:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2106) So let's write them tiny, base, small.

- [00:35:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2111) OK and.

- [00:35:14](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2114) medium, large.

- [00:35:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2119) Large.

- [00:35:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2122) Base looks like a special keyword.

- [00:35:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2127) Yeah, so to be able to use base.

- [00:35:34](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2134) I don't know.

- [00:35:40](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2140) OK, of course, this won't work because this is how not enumeration works.

- [00:35:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2152) OK, we just change it to something else instead of a special keyword.

- [00:36:01](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2161) Now I can also set.

- [00:36:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2166) Models as a combo box here, let's duplicate it as.

- [00:36:13](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2173) CMB box.

- [00:36:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2176) Models.

- [00:36:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2178) OK and we will use same approach.

- [00:36:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2206) Not the base, but let's say tiny, OK?

- [00:36:51](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2211) And one final thing is.

- [00:36:55](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2215) We need to have also selected model.

- [00:37:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2222) OK.

- [00:37:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2227) Yes.

- [00:37:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2232) And here we will give the model parameters like this, yes.

- [00:37:17](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2237) Now I can use different models.

- [00:37:20](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2240) To start, for example, let's use medium model and when I start, we can see that it will

- [00:37:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2247) be started with.

- [00:37:29](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2249) OK, still tiny, so we have an error somewhere.

- [00:37:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2252) Yeah, I know the error.

- [00:37:34](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2254) We need to assign it here when we click the start button.

- [00:37:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2261) OK.

- [00:37:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2264) Actually, yeah, yeah, it's fine.

- [00:37:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2276) You see, when I just started, it won't start anything because we are doing a null check

- [00:38:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2282) here.

- [00:38:03](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2283) OK, let's pick a file, start as medium.

- [00:38:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2287) And yes, it started as model medium.

- [00:38:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2291) You can also add other models such as medium.en.

- [00:38:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2308) It looks like we are not able to use that.

- [00:38:39](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2319) It is also a special character.

- [00:38:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2321) So.

- [00:38:43](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2323) OK, it looks like giving a custom string value will be hard, therefore.

- [00:38:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2332) I will show you another cool stuff, medium EN, for example.

- [00:38:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2339) So what are we going to do is we are going to add a custom extension method.

- [00:39:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2345) Let's add a new class.

- [00:39:09](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2349) Name it.

- [00:39:10](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2350) Let's name it as public.

- [00:39:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2351) Extensions.

- [00:39:12](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2352) OK, I will make this code as public static.

- [00:39:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2358) OK, public static string, OK, process model enums.

- [00:39:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2368) It will take this then MainWindow.whisperModels and model.

- [00:39:37](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2377) It will have a switch which will take model tab tab and it should automatically populate

- [00:39:44](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2384) it.

- [00:39:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2385) Yes, populated.

- [00:39:48](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2388) And it will return the value that we want, such as tiny.

- [00:39:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2394) OK, the.

- [00:39:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2397) Here, base.

- [00:40:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2400) Small.

- [00:40:01](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2401) OK.

- [00:40:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2402) Medium.

- [00:40:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2404) Large.

- [00:40:05](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2405) And.

- [00:40:06](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2406) Medium.en and with default it will return just.

- [00:40:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2422) Let's say tiny.

- [00:40:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2426) OK, so then we are going to.

- [00:40:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2433) Call that method.

- [00:40:35](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2435) In here.

- [00:40:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2436) How we gonna do that is.

- [00:40:42](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2442) We need to say that the selected item is type of Whisper models enumeration like this then.

- [00:40:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2450) We need to call.

- [00:40:54](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2454) OK.

- [00:40:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2457) Yes.

- [00:40:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2459) Process model enumeration.

- [00:41:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2467) OK, I think it has to be like this, yes.

- [00:41:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2488) Oh, it says that this does not exist here, so let's edit as using.

- [00:41:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2496) Static.

- [00:41:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2498) Actually, we don't even need that.

- [00:41:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2501) Let's just add it as.

- [00:41:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2505) This is weird.

- [00:41:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2506) It's in the same.

- [00:41:51](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2511) It's in the same namespace.

- [00:42:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2520) It is extension.

- [00:42:07](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2527) However, why it doesn't accept that.

- [00:42:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2541) Hmm.

- [00:42:24](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2544) OK.

- [00:42:26](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2546) Yeah, maybe we need to cast it.

- [00:42:33](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2553) Let's try that way.

- [00:42:34](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2554) OK, we don't need this.

- [00:42:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2573) Actually, let me fix it much easier way.

- [00:42:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2577) Which will be.

- [00:43:01](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2581) OK, simply let's.

- [00:43:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2584) Return this to its older version.

- [00:43:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2591) Simply, we will call it in here.

- [00:43:14](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2594) OK, how are we going to call it?

- [00:43:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2599) Process model enums.

- [00:43:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2601) Yes, now the Combobox will have.

- [00:43:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2605) Correct.

- [00:43:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2607) Enumerations like here, as you can see.

- [00:43:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2610) Medium.en, base, small, whatever.

- [00:43:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2616) And.

- [00:43:38](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2618) OK, only.

- [00:43:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2621) We have a tiny problem, which is yes, here we need to call this,

- [00:43:46](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2626) as like this.

- [00:43:49](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2629) And yes, now it works.

- [00:43:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2632) OK.

- [00:43:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2633) OK, are there anything else to be displayed?

- [00:43:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2637) Now we can do batch processing.

- [00:44:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2640) You can expand this as you wish. Add more modules, add more features.

- [00:44:09](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2649) This can process all of the files you have.

- [00:44:14](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2654) And.

- [00:44:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2656) OK, the expansion of the software is up to you.

- [00:44:21](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2661) So this is how you can automate any third-party library.

- [00:44:25](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2665) Exe, exe and whatever you want.

- [00:44:31](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2671) OK, let's finally let's upload this to our GitHub repository.

- [00:44:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2676) OK, so this is our URL of the new GitHub repository.

- [00:44:43](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2683) Let's open Git Bash.

- [00:44:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2685) Move to desktop.

- [00:44:48](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2688) Move to automation.

- [00:44:50](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2690) I will close this.

- [00:44:53](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2693) OK, git init.

- [00:44:56](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2696) OK, git add.

- [00:45:00](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2700) Git remote.

- [00:45:02](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2702) Git add remote origin and the URL itself.

- [00:45:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2711) Git remote add origin.

- [00:45:14](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2714) Sorry, I am sometimes confusing the command.

- [00:45:18](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2718) Yes, now.

- [00:45:19](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2719) Git add all, git commit.

- [00:45:23](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2723) -M and let's say version one.

- [00:45:27](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2727) Git push origin master.

- [00:45:32](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2732) OK, now the source code is uploaded.

- [00:45:37](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2737) As you can see, we have also uploaded the debug folder.

- [00:45:41](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2741) It is not necessary, but it's.

- [00:45:43](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2743) We just did it.

- [00:45:45](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2745) It's OK.

- [00:45:47](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2747) And OK, so this is my GitHub repository.

- [00:45:52](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2752) Github.com/FurkanGozukara.

- [00:45:57](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2757) You can also check out my other repositories.

- [00:45:59](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2759) I will put this link into the video's description.

- [00:46:04](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2764) Please like and subscribe our videos if you like it, if you enjoy it.

- [00:46:11](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2771) And if you have also questions, ask me them through comments.

- [00:46:16](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2776) Or you can also join our Discord channel. Where you can find our Discord channel is

- [00:46:22](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2782) just click the about page of our YouTube channel and you can see the links here.

- [00:46:28](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2788) Discord channel link.

- [00:46:30](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2790) We have also official Facebook and Twitter channels, so you can also follow them.

- [00:46:36](https://www.youtube.com/watch?v=dP53wzLwqMA&t=2796) Hope to see you later.
