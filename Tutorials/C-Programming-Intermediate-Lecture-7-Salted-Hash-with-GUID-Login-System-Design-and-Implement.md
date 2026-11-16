# C# Programming (Intermediate) - Lecture 7: Salted Hash with GUID, Login System Design & Implement

## Full tutorial link > https://www.youtube.com/watch?v=0Wl0ooYZ5zY

[![C# Programming (Intermediate) - Lecture 7: Salted Hash with GUID, Login System Design & Implement](https://i.ytimg.com/vi/0Wl0ooYZ5zY/maxresdefault.jpg)](https://www.youtube.com/watch?v=0Wl0ooYZ5zY "C# Programming (Intermediate) - Lecture 7: Salted Hash with GUID, Login System Design & Implement")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-7-Salted-Hash-with-GUID-Login-System-Design-and-Implement.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-7-Salted-Hash-with-GUID-Login-System-Design-and-Implement.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


C# Programming (Advanced/Intermediate) Lectures (7/14) will teach you #CSharp #programming from beginner to intermediate/expert level. This course is an excellent source to learn advanced concepts in C# #coding. If you are a beginner to C#, watch our previous course lectures. The playlist link of the previous course is below.

Full playlist of the previous course: C# For Beginners ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o](https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o)

Discord ➡️ [https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

Patreon ➡️ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology Playlist (30+ Tutorial / Guide / News / Review Videos) ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Stable Diffusion Playlist (30+ Tutorial / Guide Videos) ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

Please join discord, mention me and ask me any questions. Thank you for like, subscribe, share and Patreon support. I am open to private consulting with Patreon subscription.

Full playlist of this course ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4](https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4)

You can watch for free our C# Programming, ASP .NET Core MVC programming, Machine Learning and Software Engineering related courses on our playlists page ⤵️

[https://www.youtube.com/@SECourses/playlists](https://www.youtube.com/@SECourses/playlists)

GitHub code repository of this course (source codes of the lectures) ⤵️

[https://github.com/FurkanGozukara/Introduction-to-Programming-2-2021](https://github.com/FurkanGozukara/Introduction-to-Programming-2-2021)

In Lecture 7:

* What is Globally Unique Identifier(GUID)

* How to properly salt user password with GUID and hash it

* How to develop a proper login system

* How to keep logged-in user information in the ram memory

* How to enable / disable tabs in C# .NET

* How to change visibility of elements such as buttons in C# .NET

* How to do login queries with entity framework such as checking if user exists and if password is correct

* How to properly design table and implement security login try system

* How to update entity framework classes with including database connection string in .NET Core project

* How to extend DateTime struct

Introduction:

In today's world, security is of utmost importance, especially in web applications. One of the most critical components of a secure web application is the login system. It is essential to protect user passwords and store them securely. This is where Globally Unique Identifier (GUID) comes into the picture. In this article, we will discuss the following topics:

What is Globally Unique Identifier (GUID)?

How to properly salt user passwords with GUID and hash them.

How to develop a proper login system.

How to keep logged-in user information in the RAM memory.

How to enable/disable tabs in C# .NET.

How to change the visibility of elements such as buttons in C# .NET.

How to do login queries with entity framework such as checking if the user exists and if the password is correct.

How to properly design tables and implement security login try systems.

How to update entity framework classes with including database connection string in .NET Core projects.

How to extend the DateTime struct.

What is Globally Unique Identifier (GUID)?

A Globally Unique Identifier (GUID) is a 128-bit value that is unique across time and space. It is often used in software applications as a unique identifier for objects. A GUID is generated by combining a timestamp, a hardware identifier, and a random number. This makes it extremely unlikely for two GUIDs to be the same, even if they are generated on different machines at different times.

How to properly salt user passwords with GUID and hash them.

When storing user passwords in a database, it is essential to store them securely. One way to do this is by salting the password with a GUID and then hashing it. Salting the password involves adding a random value to the password before hashing it. This random value is called a salt.

To salt the password with a GUID, you can generate a new GUID for each user and add it to their password. Then, you can hash the salted password and store the salt and hash in the database. When the user logs in, you can retrieve the salt from the database and use it to salt the entered password. Then, you can hash the salted password and compare it to the stored hash to see if the password is correct.

How to develop a proper login system.

A proper login system should include the following features:

a. User authentication: The system should authenticate the user by verifying their username and password.

b. Password storage: The system should store the user's password securely by salting and hashing it.

c. Session management: The system should manage user sessions by creating a session ID when the user logs in and storing it in a cookie or session variable. The system should also expire the session after a certain amount of time or when the user logs out.

d. Access control: The system should control access to resources based on the user's role and permissions.



### Video Transcription


- [00:00:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4) Hello dear students, welcome to the lecture 7 of advanced programming as known as also

- [00:00:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=9) introduction to program to so as you already seen your semester project is ready. Hopefully,

- [00:00:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=17) I will upload it today along with your video. I have prepared a very detailed document.

- [00:00:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=27) So after you have read this document you should have all the details.

- [00:00:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=33) Is all the idea about the project because still have questions always come to our Discord

- [00:00:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=41) Channel and ask whatever comes to your mind. But please read this document at least two

- [00:00:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=48) times or three times better. It is about four pages. And we also have some images to give

- [00:00:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=58) you an idea. Okay. This is for ideas. Not you don't have to make like this actually

- [00:01:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=63) Lee you should make it even better. Okay. This is just a draft of ideas to give you

- [00:01:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=70) what kind of design you may have. I want you to make this project as you are doing it for

- [00:01:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=79) your employer. Okay, so do not make it for just passed the course make it for like you

- [00:01:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=89) are doing it for your employer. Okay. Anyway, let's go.

- [00:01:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=93) Thing is our course, so I will copy and paste our previous lectures since we will continue

- [00:01:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=103) from that one. Okay lectures 6 to lecture 7.

- [00:01:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=110) Okay, and let's open our project. Let's also open SQL Server management Studio because

- [00:02:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=121) we are using it path.

- [00:02:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=126) By the way in the project, I don't force you to use C sharp and Ms. S Kwon, you can also

- [00:02:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=132) use other languages as long as you can you can do the project. Okay, since this project

- [00:02:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=139) this course is not about c-sharp. It is about Advanced programming therefore. I don't force

- [00:02:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=147) you to do it in C sharp. Okay. All right, and so

- [00:02:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=154) Let's start with renaming lectures. It won't rename everything it will only renamed few

- [00:02:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=163) things, but still better than better than nothing. It won't be named the namespace.

- [00:02:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=170) For example.

- [00:02:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=171) It's okay. But since we have composed a new folder, then you will be able to easily access

- [00:02:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=179) each lecture from our GitHub repository. Okay, let's run the application and quickly remember

- [00:03:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=187) where we have left if you are remembering we were using

- [00:03:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=192) And the framework for our database operations you are learning that okay. The application

- [00:03:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=205) is starting.

- [00:03:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=207) Also, we have we had designers database which was PMS patient management system.

- [00:03:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=219) General population is still starting.

- [00:03:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=226) We have our tables here.

- [00:03:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=232) Okay, it is taking quite a bit of time in my computer.

- [00:04:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=243) Okay. Now it's ready. So we had designed a register and I will start with improving our

- [00:04:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=256) salted hashing. Okay. So, let's see. Where is our salted hashing?

- [00:04:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=265) function

- [00:04:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=268) I think it was inside.

- [00:04:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=272) Okay very much it let's look from our code.

- [00:04:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=284) Here's inside Global methods. We have its own user password. Okay. See you see we are

- [00:04:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=292) using static string here. However, the more proper usage would be

- [00:05:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=304) assigning a random sing to each user. Okay, so I'm going to make a small modification.

- [00:05:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=315) to this

- [00:05:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=319) actually, this is also fine because you are you need making it unique with the first name?

- [00:05:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=329) But yeah, I will I will do something else. Let's say as our string or we can also Define

- [00:05:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=337) a good idea you want to do that but is G yd.

- [00:05:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=343) I'll show you.

- [00:05:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=346) Okay, so what is guid if you wander?

- [00:05:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=356) Okay, so guid stands for Global unique identifier. It's it is a 128-bit integer 16 bytes there.

- [00:06:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=370) Are you see so many combinations.

- [00:06:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=375) And how can be generated it is simple as this one, okay.

- [00:06:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=381) So let's edit to our code.

- [00:06:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=385) Where we call this we call it here, so I will also.

- [00:06:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=393) Add a key to my users. I mean add a column to my users table. It will be used for salting.

- [00:06:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=403) Okay, let's call it as salt of TV password. And since guid is 16 bytes.

- [00:06:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=419) it should be always exactly as

- [00:07:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=422) How many characters let's see it.

- [00:07:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=428) Okay, so let's make a test. Okay.

- [00:07:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=435) So in here we are going to object. Okay, you see it is already exists. So

- [00:07:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=449) string

- [00:07:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=450) Okay, let's put a breakpoint here. We will get an address from here.

- [00:07:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=457) Yeah here.

- [00:07:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=460) So, let's see the red rose.

- [00:07:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=466) To heal so it will be combination of random string. We don't need this anymore.

- [00:08:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=480) Okay.

- [00:08:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=485) So for each user we will be using a unique identifier to Salt their password, which is

- [00:08:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=495) a we will ensure that none of the user passwords can be decrypted with any hash table.

- [00:08:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=505) Rainbow table. Okay, so the guid is generated like this.

- [00:08:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=515) Okay, let's look from here.

- [00:08:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=521) six, okay 36 characters

- [00:08:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=536) and they are in constant length.

- [00:08:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=537) okay, so I think this is the

- [00:09:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=553) Costa lunch

- [00:09:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=563) But it says 37.

- [00:09:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=567) Okay, I see so we can use citrine motet. Okay, we will use the seating method in the string

- [00:09:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=577) method. It is sufficient. So I will make this as character 36. Okay, since it will only

- [00:09:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=585) English letters, it's we won't allow of know therefore. I have to delete the entire table

- [00:09:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=593) to make that change because if you don't delete the

- [00:09:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=598) then it will throw an error that it cannot insert null value tune on multiple columns

- [00:10:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=608) there for

- [00:10:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=610) We delete them if I had a lot nose, then that's save would be possible. But since we want

- [00:10:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=620) a lot of it won't be.

- [00:10:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=623) Okay, now that we have modified our table we have to modify our generated code here.

- [00:10:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=635) You can do it automatically or we can also edit here money and as well, but I think I

- [00:10:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=644) will use automatic code generation.

- [00:10:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=649) Okay.

- [00:10:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=652) Let's see. How will it generate?

- [00:10:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=657) Or let's manually generate it. I think it should be easy. So we have user password 64

- [00:11:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=666) characters. Let's see.

- [00:11:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=669) It has generated like this string length.

- [00:11:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=674) We've seen why it is actually oh, this is

- [00:11:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=679) Music EV is yeah. It is here as you can see sitting lines.

- [00:11:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=688) This way it is done.

- [00:11:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=694) I wonder if they are is defined anywhere else.

- [00:11:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=704) I see. We also have to modify here. Yeah. Okay. So let's just auto-generate instead

- [00:11:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=712) of manually doing it.

- [00:11:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=716) Okay. So how do we how we were doing it? We would remember also reverse engineers.

- [00:12:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=723) Okay, and just the rest is by default. We don't touch them.

- [00:12:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=732) Okay tables we are getting all tables.

- [00:12:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=736) I'm just clicking. Okay, it should update all of these clusters automatically.

- [00:12:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=745) And let's see if we have one here as you can see salt of PV is added. I think it is also

- [00:12:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=757) added here. Let's see. Yes, it is also added here.

- [00:12:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=766) Okay, and it has required and sitting length 36 characters. Okay. Now we can continue our

- [00:12:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=775) application programming since we have updated our code to the latest and synchronize it

- [00:13:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=783) with our database. Okay. So basically this time we will be using random string and user

- [00:13:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=789) password. However, we have to save this salt in data.

- [00:13:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=798) As well it will be simply like this.

- [00:13:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=801) Which is salt of p v will be equal to B are soft. Okay, you can also assign it like this

- [00:13:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=810) as well so we won't be having extra coat.

- [00:13:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=819) All right.

- [00:13:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=824) So that now when we are doing a login we will use this approach. So let's start coding our

- [00:13:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=833) login.

- [00:13:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=836) section

- [00:14:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=840) In your library project. I am expecting you to have salted password as well. Okay, so

- [00:14:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=848) this was registered in the login, we will use email and password. So let's make this

- [00:14:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=854) top as login.

- [00:14:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=858) Okay.

- [00:14:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=862) And here we are going to have a textbox for login.

- [00:14:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=867) Bull's eye level why do they use it also make a more appealing user interface design currently.

- [00:14:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=877) I won't be wasting time spending time for better user interface, but I am expecting

- [00:14:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=883) better for you. Let's say email.

- [00:14:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=891) You can easily find better interfaces how to make a better design on the internet.

- [00:14:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=898) You can use greets. I think I have featured you that in the previous Lemma semester if

- [00:15:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=907) I remember correctly.

- [00:15:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=910) Okay txt email and let's remove the text.

- [00:15:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=921) Or we have already txt email therefore. I will name it as login. Um, okay.

- [00:15:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=928) XL login email and let's make it a little bit bigger.

- [00:15:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=938) It's not important anyway, and then we are going to have a password.

- [00:15:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=946) Okay.

- [00:15:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=947) For password we are going to add a password box because it increases the security of the

- [00:16:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=974) application.

- [00:16:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=980) And let's name it as name it takes it again.

- [00:16:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=987) A storage and then add login button, okay.

- [00:16:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1003) looking

- [00:16:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1006) and

- [00:16:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1011) you can also add remember passwords future to your application. I think I can also show

- [00:16:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1017) you that yes, we can use SMTP of Gmail.

- [00:17:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1024) Or something else. Okay, BTN login and let's add a click event.

- [00:17:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1037) Okay. So in the click event, what we are going to do is I will also add another class here.

- [00:17:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1048) So let's add a folder to our classes.

- [00:17:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1053) Okay. So the first folder will be let's say let's name it as custom classes.

- [00:17:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1063) You can group them as you want. So I will add this register to here.

- [00:17:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1071) and

- [00:17:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1072) okay.

- [00:17:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1073) And at another class here.

- [00:17:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1078) As you just login operations.

- [00:18:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1084) So this will be also a public static.

- [00:18:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1098) And we are going to Simply use the same approach.

- [00:18:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1107) Okay.

- [00:18:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1111) By the way, I am also using a context but before doing context we can do some checks

- [00:18:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1118) such as if user has entered password email or not.

- [00:18:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1123) The controls are up to you since I am using Entity framework. It will be automatically

- [00:18:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1133) secure from SQL injection. And what I'm going to do is I will use finds, okay.

- [00:19:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1144) and here's Point entity type will be TBR users and it says key value is to find out how do

- [00:19:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1159) we

- [00:19:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1160) Unless maybe let's make it like your Stevia users find.

- [00:19:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1172) Okay, now params object key values values of primary key for the answers to be found.

- [00:19:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1181) Okay, so maybe we use search or select and select is better. Yeah, and here's select

- [00:19:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1191) Dot.

- [00:19:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1193) Okay email will be equal to or verse.

- [00:19:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1199) It is so late.

- [00:20:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1204) Okay. Yeah, I think that is better.

- [00:20:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1211) I don't know if it pulls back difference. Let's check his first.

- [00:20:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1225) Okay.

- [00:20:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1234) Okay, so the fight starts by searching local cage where always sends credited. Leave me.

- [00:20:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1256) I see. So this is the difference you see you should look for differences when you are doing

- [00:21:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1263) something new.

- [00:21:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1265) Most of them you do find we just provide the primary key ID, which wouldn't work for us?

- [00:21:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1274) Okay. So this is what we need.

- [00:21:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1281) So let's read this answer. I like it.

- [00:21:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1286) Find has a fundamental difference to wear single first Etc in that it will first search

- [00:21:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1291) for the object in memory and only hit the database if the object has not already been

- [00:21:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1295) loaded. Let's try to use find were possible as it offers possible speed benefits of loading

- [00:21:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1301) from memory find only works with the primary key and doesn't support land has so it is

- [00:21:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1307) not very flexible.

- [00:21:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1310) Where is typically used to get a listing of objects to retrieve a single object? I normally

- [00:21:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1315) use either single singular default first Forester default.

- [00:22:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1321) Single and single or default differ from first and first order fault as they ensure that

- [00:22:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1326) a maximum of one object can satisfy the criteria which helps ensure the Integrity of the data

- [00:22:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1331) in the database. They single Clauses do this by selecting top two in the SQL query and

- [00:22:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1337) then throwing an exception if two entities are returned.

- [00:22:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1341) note that you should not change these to the end of the where clause

- [00:22:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1345) so instead of

- [00:22:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1347) where s equals s dot ID equals equals 1. First or default use

- [00:22:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1353) . First or default s equals s dot ID equals equals 1. Okay. So what we need is we will

- [00:22:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1363) use first or default and let's also do some another search.

- [00:23:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1388) I see. So this is the approach they have used it. It was also in my mind but I am looking

- [00:23:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1394) for if there is any special method or approach returning the first element and if it is known

- [00:23:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1401) or not is the way to do it normally, but maybe there is some other special thing.

- [00:23:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1409) Okay, anyway, so let's use TBR users first or default by the way, we use first of or

- [00:23:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1420) default to get if it is not existing. It will return default value, which is moved probably.

- [00:23:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1433) Okay, and now we are going to write our link you expression PR dot user.

- [00:24:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1441) mean equal to

- [00:24:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1443) take the log in the main main that txt.

- [00:24:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1454) a slogan email and

- [00:24:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1456) peridots usual PV r equal to okay, and I see so this is not way.

- [00:24:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1473) You like this?

- [00:24:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1483) Can we apply the chain?

- [00:24:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1490) Why this and is not working? Maybe we need double Echo.

- [00:25:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1502) Oh, I see we have to use text here. You see sometimes I might also get confused and and

- [00:25:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1513) pull a strange

- [00:25:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1542) in this case

- [00:25:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1544) okay, bull predicate minutes and

- [00:25:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1553) also equal to Global methods return music passwords

- [00:26:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1561) It's something like this.

- [00:26:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1566) What do you want we have?

- [00:26:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1574) Maybe we need to group them like this.

- [00:26:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1586) Okay what it is not.

- [00:26:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1606) working

- [00:26:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1611) Okay, so

- [00:26:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1615) maybe like this and

- [00:27:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1628) dance

- [00:27:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1631) This is work.

- [00:27:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1641) Okay, so we have figured it out it it requires single ant and here we will be using Global

- [00:27:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1653) method start.

- [00:27:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1654) I'm telling you the password. So for this work first, we have to check whether user

- [00:27:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1663) email exists or not. Okay, so how about how we are going to do it. We are going to do

- [00:27:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1668) it like this.

- [00:27:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1670) Okay, we don't need this.

- [00:27:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1679) And we will call it as we are user email.

- [00:28:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1686) And then we will continue. Okay. So let's put a breakpoint here and see what happens.

- [00:28:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1692) We didn't call this method. Okay, so here it will be logging operations.

- [00:28:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1700) Why we can see it.

- [00:28:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1708) I know the reason because I have to add this dictionary to using like this using custom.

- [00:28:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1721) lecture 6 custom classes if you don't add a directory down you may not access it or

- [00:28:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1729) you know, it is accessible and oh, let's change the name to

- [00:28:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1739) login try

- [00:29:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1740) okay.

- [00:29:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1743) And we will just pass off.

- [00:29:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1747) Main window reference pocket. So let's go to here and run the application and see if

- [00:29:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1755) we can find email and what object it returns. You see, I don't know how the

- [00:29:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1768) first of defaults per store default behaving right now. So I am putting a breakpoint here

- [00:29:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1775) to debug the application and see what kind of object is returned and then I will continue

- [00:29:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1782) my coding from that and okay. It says no database provider has been configured. Oh I see and

- [00:29:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1791) since we have updated our code we have to reset the database provider.

- [00:29:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1799) And each time you do that you have to do it. Unfortunately, it doesn't put it at a database

- [00:30:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1803) providers may be from our options we can edit. Let's see you see there were too many options

- [00:30:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1814) and we didn't look for options.

- [00:30:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1819) So let's look for it and it was called as

- [00:30:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1822) eek eek or power tools.

- [00:30:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1851) It is still patching the database and meanwhile.

- [00:30:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1858) Okay, we are here's good.

- [00:31:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1863) Okay tables and maybe here that maybe

- [00:31:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1868) adoption

- [00:31:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1872) Okay, you see include connection string in generated code. I think this is what we need

- [00:31:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1880) to check and see.

- [00:31:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1886) What happens?

- [00:31:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1891) Generating code you see on the left bottom of the screen we just need to do is displaying

- [00:31:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1908) generating code.

- [00:31:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1916) Okay generators and let's see. Yes. Okay. So it has also added a warning and it says

- [00:32:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1927) to protect potential sensitive in your information your connections think you should move it

- [00:32:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1932) out of source code. You can avoid scaffolding the connection string by using the name syntax

- [00:32:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1938) trees from and such so I will just comment this out.

- [00:32:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1943) And now our code is added.

- [00:32:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1958) Okay.

- [00:32:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1962) Okay, let's first registers for contest test at gmail.com one and one it doesn't matter

- [00:32:54](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1974) since we will be hashing our password.

- [00:32:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1978) By the way, let's look at our hash and how it works.

- [00:33:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1983) I am putting a breakpoint here as well and user type will be patients register. Okay.

- [00:33:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1991) So our password is one random string is for Contour. Okay, so we didn't fix it as first

- [00:33:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=1997) fix it in here you see how it is important to?

- [00:33:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2003) Debug and check test your application. So I will be passing password instead of the

- [00:33:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2014) south of password instead of the users first name

- [00:33:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2023) Okay. So the first thing we'll be focused on because you can email test at Stevia comb

- [00:34:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2042) but and one even as insecure as this password becomes extreme secure when you salt your

- [00:34:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2051) passwords register, and now our salt is here as you can see and then when we return the

- [00:34:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2062) Hashi.

- [00:34:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2063) password

- [00:34:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2064) becomes like this. So This password will not be existing in any of the rainbow tables.

- [00:34:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2073) Therefore there is no possible way for hackers to know this passport without brute-forcing.

- [00:34:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2080) Of course, they can Brute Force once they fully obtain our

- [00:34:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2089) Database however, it will take extreme extreme amount of times and let's see. Yes. So this

- [00:34:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2099) is The Salted password and this is our South. Okay.

- [00:35:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2105) So let's go to our login now and at the login we will check email.

- [00:35:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2111) And password, but we don't check the password yet. So first we are going to find if this

- [00:35:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2120) email exists or not.

- [00:35:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2121) And it has returned an object. It has returned to object or the user as you can see full

- [00:35:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2129) values or icv. Don't make me don't have to make another check.

- [00:35:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2134) It's a simple actually.

- [00:35:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2139) Okay, so if we are using email equal to Nu okay, I think what else can it be?

- [00:35:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2151) It can be. Yeah, it's exciting news with work.

- [00:35:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2159) We will put a message message box for main that.

- [00:36:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2168) No.

- [00:36:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2169) I'm not sure message box show by using message box. We have to add a reference.

- [00:36:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2181) Using storm windows and show no such user is formed. Okay, and then we will return.

- [00:36:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2193) Okay.

- [00:36:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2195) Let's say errors such as and then we will check the password. If it is correct or not

- [00:36:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2204) how we are going to do that you are going to do it simply like this. We are using email

- [00:36:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2211) password if it is equal to

- [00:36:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2213) Okay, Global methods return user password and it will take main dot txt login password

- [00:37:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2226) thoughts.

- [00:37:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2227) first 4 to 6 inch

- [00:37:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2232) and then it will take the random string which is in our object right now, which is the sort

- [00:37:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2240) of password and if they are equal it will log in. Otherwise, it will return a nose like

- [00:37:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2249) this and how we are going to do that.

- [00:37:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2255) I have to

- [00:37:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2257) make it like this object. If this is not equal and Roars the password as fourth is not matching

- [00:37:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2275) or let's say the password is incorrect.

- [00:37:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2279) The entered password is incorrect. By the way. You also have to keep logging try in

- [00:38:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2290) database.

- [00:38:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2292) Collins and then if users frequently tries incorrect password, you have to block them.

- [00:38:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2300) Okay. Otherwise, they can try log into your system with brute force and point a lot of

- [00:38:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2309) people passwords. So it is another precaution that you have to take. Let's also take that

- [00:38:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2318) as well.

- [00:38:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2319) So to it we are going to add another table.

- [00:38:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2327) Let's see. I will take a pause.

- [00:38:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2336) Okay. So what we're going to do is we are going to check how many times a user has try

- [00:39:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2345) to log into the system by the way, normally this would be

- [00:39:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2352) check it with the registering IP of the user. Okay?

- [00:39:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2361) Because in an online system every user has an IP there for you. I will just illustrate

- [00:39:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2369) the system with

- [00:39:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2374) giving manual IP

- [00:39:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2378) So which columns we are going to have to check number of log Enterprise?

- [00:39:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2386) We are going to allow a user to try logging in with five times in 15 minutes. Therefore.

- [00:39:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2399) Let's say

- [00:40:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2400) Jets right IP

- [00:40:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2405) and it will be

- [00:40:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2408) same as here.

- [00:40:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2413) So far character 16 not null then there will be a date of try of try.

- [00:40:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2427) And it will be a daytime and combination of these two will be.

- [00:40:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2433) A primary key. Okay. Let's see.

- [00:40:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2442) Katie via login, right? Okay.

- [00:40:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2449) Now we will also include this to our code.

- [00:40:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2453) Let's really reverse engineering our table again.

- [00:41:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2461) So you see now it's not picket checking it.

- [00:41:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2469) Including stink and everything.

- [00:41:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2472) Okay, it is not so in here if users answers and incorrect password. We are going to add

- [00:41:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2482) a record to the database. So I'm going to define a static IP a constant IP here.

- [00:41:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2494) Or let's say it should be used based. So let's add a method here.

- [00:41:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2507) return users IP

- [00:41:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2511) Normally, we would get IP of the connecting users with framework. We are using for example

- [00:42:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2528) in asp.net.

- [00:42:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2529) Get user IP.

- [00:42:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2533) But currently we don't have that. We don't have anything to simulate that normally it

- [00:42:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2542) is something like okay this

- [00:42:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2547) in C sharp

- [00:42:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2548) Okay, it is something like this. You see we had some references whatever. However in this

- [00:42:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2556) case, since we are not server-based application. I will just return something for illustration.

- [00:42:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2563) Let's say

- [00:42:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2564) Somebody typing let's return this and we can also use coal of this method into a register

- [00:42:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2577) operation as well.

- [00:43:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2580) Okay, and in the login, we will also get that IP and check whether that IP has five try

- [00:43:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2593) or not how we are going to check that?

- [00:43:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2599) We are going to check it something like this.

- [00:43:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2605) Test results equal to context TV. I login try.

- [00:43:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2613) And we need to select count. Okay, so we are going to do select.

- [00:43:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2621) Okay verse select dots or where we can use that as well. But PR dots tried IP equal to

- [00:43:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2631) Global metal starts return user IP, and we need another rule which is and okay, by the

- [00:44:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2643) way, this is equally cool.

- [00:44:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2647) Actually, we don't even need that we would wish you should be S and P are dots date of

- [00:44:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2658) try. Okay, now we can add time frame. So we are going to check last 15 minutes. Therefore

- [00:44:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2668) I am going to add.

- [00:44:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2670) Minutes 15 bigger than they time UTC now so why I am using UTC now because this type this

- [00:44:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2684) way I am globalizing my server date. You can also use local time. Whatever the time you

- [00:44:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2690) are using actually that's also

- [00:44:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2698) Make it more.

- [00:45:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2704) More Global in our application what I mean is in our Global methods, I will add another

- [00:45:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2718) method here.

- [00:45:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2721) public static daytime

- [00:45:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2724) Return server time. Okay. So this way I will have constant time everywhere. It will just

- [00:45:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2736) return date time UTC now, okay, I will call this here.

- [00:45:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2746) Global Meadows return service time. Okay. So with this approach we are going to find

- [00:45:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2755) IP records Vash. They are made within the last 15.

- [00:46:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2766) Melissa and I just need to count actually.

- [00:46:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2771) And how can we calculate the account?

- [00:46:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2775) Maybe like this. Yeah. So if this card is bigger than 5 if you test results figures

- [00:46:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2786) the five.

- [00:46:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2787) Or bigger or equal to 5. Okay. We are going to shove a message you have error you have

- [00:46:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2801) so many times try to login within 15 minutes. Try again later. Okay, and if incorrect password

- [00:46:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2817) happens that we have

- [00:46:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2818) Have other records to our login try and how we going to do that. They're going to do it

- [00:47:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2825) as

- [00:47:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2827) At and now it's will be expecting a log entry entity. So he will login try temp right equal

- [00:47:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2838) to new login. Try and tempt ride that tried IP will be equal to

- [00:47:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2849) Global methods return user IP temps, right right IP will be equal to try today.

- [00:47:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2858) date of tribe will be equal to Global metals that

- [00:47:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2862) return servers time and we will just edit like this.

- [00:47:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2870) And then we will say.

- [00:47:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2872) It is in save changes, okay?

- [00:48:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2882) And then we would return all right.

- [00:48:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2887) Yeah, let's see how our application works. By the way. You can also look for the queries

- [00:48:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2896) that they are being executed from as you know more providers. Let's refresh our tables and

- [00:48:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2904) see our login try.

- [00:48:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2912) I also have a debug to see if our application working fine or not. So let's try login a

- [00:48:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2923) By the way, that doesn't exist.

- [00:48:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2927) Okay IP result is 0 and now it will check user email since it doesn't exist. It will

- [00:48:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2935) adjust return by the way. You can also look for invalid emails try if you want to because

- [00:49:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2944) with that way they may scan existing user emails, so it would make sense to

- [00:49:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2952) I looked at as well. So let's make this into a method here.

- [00:49:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2961) Okay increase login.

- [00:49:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2966) try

- [00:49:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2969) and we also need to add this to hear as well.

- [00:49:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2977) Okay. Yeah private perfect for it. Okay.

- [00:49:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2985) He will just call this.

- [00:49:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2989) here

- [00:49:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2992) and here

- [00:49:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=2993) alright, let's let's try.

- [00:50:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3005) We can also look for the queries that are being executed. Let's also look for them as

- [00:50:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3009) well. Let's close this page.

- [00:50:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3020) Okay, and the profilers I will just open tunic.

- [00:50:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3028) Okay, and let's see which kind of plays are being executed a a login. Okay. So let's see

- [00:50:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3036) the queries so it opens connection. It's select counts start means selecting everything - it

- [00:50:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3048) is checking it with like this.

- [00:50:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3052) And here's this is the credit is executing. I would execute this different about probably

- [00:50:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3059) it is the way of executing in Entity Framework.

- [00:51:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3065) And then it is checking email like here.

- [00:51:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3075) Then it is inserting into TV a login try as you can see here.

- [00:51:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3079) Okay.

- [00:51:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3080) These are automatic queries down by because of SQL Server. You see inserting the values.

- [00:51:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3090) Okay, and these are the values. Let's also execute. Okay, as you can see it is here.

- [00:51:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3097) Okay. No search error found no. No each time. It will add another record.

- [00:51:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3105) No, and now that we have five, okay. Now we have five it should give me an error. Okay

- [00:51:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3115) error. You have so many times right login within 15 minutes. Try again.

- [00:52:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3122) Now we have errors as you can see another record edit.

- [00:52:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3129) And okay each time. You are getting another record.

- [00:52:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3136) Because we are also increasing log into right here when it is try it.

- [00:52:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3142) We are forcing.

- [00:52:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3147) Hector or the person with

- [00:52:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3150) Malicious intentions. However, this is also bad because this table may get fill it up

- [00:52:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3163) pretty quickly a lot of extra unnecessary space so you should not increase log into

- [00:52:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3170) right here. Okay, it is a bad practice and Justice because here they are doing nothing

- [00:52:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3177) simply. They cannot do anything.

- [00:53:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3180) Okay. Now let's change your IP.

- [00:53:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3187) and

- [00:53:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3188) where it is? Yeah, let's add another.

- [00:53:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3193) Link here and okay. Now we are going to check our password. You see when we are checking

- [00:53:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3201) password. You will check it with the Salted method key get guid and if everything is fine,

- [00:53:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3213) we will look in the users how we are going to do that.

- [00:53:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3219) so in our Global methods

- [00:53:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3222) Or let's add Global variables or login variables. Whatever we want. Let's add a login variables

- [00:53:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3230) class. Okay, actually we can edit in to log in operations. So here let's add some variables

- [00:53:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3239) public static bull.

- [00:54:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3244) Is users Bogut you divide default false?

- [00:54:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3253) And then we can keep the users logged in user details in the memory. How about that may

- [00:54:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3264) be somewhat.

- [00:54:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3268) that may be

- [00:54:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3270) Dangerous, I'm going to do something else public static.

- [00:54:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3279) Okay, so since we will allow on the single user to below get in a desk at the same time

- [00:54:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3286) in our application. Let's make it as

- [00:54:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3289) uses yeah, let's say

- [00:54:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3299) look at users.

- [00:55:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3302) Okay, it will be by default a moment.

- [00:55:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3307) By default. No, okay, and if login is successful.

- [00:55:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3316) Here we are going to assign it to your user email. Okay, once when I assign it to this

- [00:55:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3324) one to this one after even this using clouds, it won't get destroyed because since this

- [00:55:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3332) is being referenced to this one, it will be kept by the garbage collector.

- [00:55:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3340) and however, I also need to delete some monies so that it won't remain in the

- [00:55:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3347) RAM memory so how can we delete them? Let's say it. Come on.

- [00:55:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3358) So what other sensitive information we may have actually this is also not sensitive.

- [00:56:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3365) Yeah, I think I can maybe salt.

- [00:56:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3371) I don't know if it is up to you can nullify the sensitive information.

- [00:56:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3381) So they won't remain in RAM memory.

- [00:56:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3386) Okay. Now we also have the local users.

- [00:56:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3391) And we can update or display some information on our main window as local user. So I'm going

- [00:56:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3399) to pull this down a little bit like this and then I am going to add a label to here.

- [00:56:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3413) Okay, I will display here some information. What kind of information I will display I

- [00:57:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3421) will show you in a moment.

- [00:57:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3425) Okay. Okay, let's add.

- [00:57:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3430) Let's make it like here. Okay and name Libya.

- [00:57:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3442) Login status. Okay. So this login status will be updated each seconds.

- [00:57:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3448) And we'll do that what I need to update that label each second. I need a timer Okay, so

- [00:57:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3462) Let's add a vpf timers to our project.

- [00:57:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3467) and four times what we were using we were using

- [00:57:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3471) dispatchers timers so

- [00:57:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3479) I will add it to Global metals and here of the voids starts time much less a start.

- [00:58:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3497) info operations

- [00:58:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3499) okay, and it will start the dispatcher and for to be able to use this passage we need

- [00:58:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3509) to add using stamped reading and

- [00:58:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3513) Oh, I see.

- [00:58:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3517) This is not a connecting. Here you the collecting?

- [00:58:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3523) Okay, it has it is using Pulpit but since we have added the reference, we don't need

- [00:58:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3536) anymore.

- [00:58:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3537) And now we need the special time with take for this new event handler. You can also do

- [00:59:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3542) it something like this. Let me show you.

- [00:59:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3547) Okay, it didn't automatically.

- [00:59:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3551) started

- [00:59:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3552) composite actually, let's copy and paste it or not. So this will be private void.

- [00:59:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3564) Okay update neighbor.

- [00:59:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3568) And only say update.

- [00:59:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3573) I'm static void.

- [00:59:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3577) update info labeled

- [00:59:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3582) And here I will add another thing to keep logging time. Actually, I can keep it inside

- [00:59:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3590) logging operations as well. I will static date time DT login fine.

- [01:00:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3603) On okay. Not not keep it here. I think I will keep.

- [01:00:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3608) Yeah, I think you with years so looking time.

- [01:00:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3615) Log In Time equal to nothing, I will just send it here.

- [01:00:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3623) Okay, so is usually look at in equal to row.

- [01:00:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3636) Actually, we don't even need to keep this variable because since we are keeping this

- [01:00:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3644) one we can keep it.

- [01:00:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3648) Okay, we have Logan time. So let's set the log in time as well equal to the time or server

- [01:00:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3657) time. Okay. Okay Global Metals get server time.

- [01:01:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3664) Okay, and then

- [01:01:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3670) I wonder if we can't define an extension to daytime.

- [01:01:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3676) so

- [01:01:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3677) Let's try that. Okay public static daytime.

- [01:01:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3682) Let's make it nasty start State time.

- [01:01:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3695) GG

- [01:01:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3698) And now instead of that.

- [01:01:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3712) Okay, what is off?

- [01:01:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3718) Logan operations and now daytime

- [01:02:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3734) Okay.

- [01:02:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3738) Extension is subtracted for it is some thing different somewhat different.

- [01:02:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3757) Okay.

- [01:02:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3761) Okay, so it is written like this. Okay, so let's change this.

- [01:02:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3773) Into public static data. Okay. So this is the way of defining daytime extension struct

- [01:03:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3784) extension.

- [01:03:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3787) Since they storm is a stroke.

- [01:03:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3794) and it will just returned a Time UTC now Okay, so

- [01:03:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3800) This is the get method as you can see.

- [01:03:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3804) All right. Now whenever we have okay now I can use S so good time.

- [01:03:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3815) Or it is not working.

- [01:03:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3823) Bedtime have an hour. Oh I see.

- [01:03:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3837) Why I can't use something like this. It's still not extending the official struck the

- [01:04:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3859) time.

- [01:04:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3867) Mystique

- [01:04:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3875) It is another stretch here extending daytime. How do we do that?

- [01:04:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3897) okay, namespace utilities

- [01:05:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3903) It is the same actually. Oh, I see.

- [01:05:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3907) All this was somewhat different.

- [01:05:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3910) Why it returns integers?

- [01:05:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3912) And little okay. They come here TC now.

- [01:05:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3933) Okay.

- [01:05:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3936) Okay, let's try this way.

- [01:05:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3951) Why I can't see it.

- [01:06:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3966) best ink

- [01:06:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3972) Then old returning integers.

- [01:06:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3987) I see using Italy teams.

- [01:06:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=3996) So maybe we need to

- [01:06:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4010) Maybe we need to do something like this.

- [01:06:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4013) Okay, this is this is really weird. This is private. It should be public.

- [01:07:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4044) And now let's retry.

- [01:07:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4063) I wonder if this is necessary daytime extensions.

- [01:07:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4075) I see.

- [01:07:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4078) so only way looks like we need to have our

- [01:08:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4085) custom

- [01:08:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4086) class and let's write it here, but the class data and help push.

- [01:08:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4100) And it will be daytime servers fine. Okay. So this looks like the only way so they time

- [01:08:29](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4109) UTC now.

- [01:08:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4111) Like this. Yeah. This is looks like the only way so instead of daytime. We will use daytime

- [01:08:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4118) helper server time.

- [01:08:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4120) All right, it will be same here.

- [01:08:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4124) And it will be saying here as well. Okay? Okay, and now we are keeping the login date

- [01:08:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4136) as well and in our Global methods in our dispatchers, so it will start with every second.

- [01:09:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4153) Like he has interval and what it is going to do is it will check first logged in or

- [01:09:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4159) not and how it is going to check it will check it with login operations. However, it is not

- [01:09:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4168) available here. So let's edit using lecture 6 dots custom classes.

- [01:09:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4175) Okay, logging operations that look at in music if it is null that means that we are off to

- [01:09:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4188) college and I say we are not located in. I also need to be able to access.

- [01:09:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4198) main window of Darfur

- [01:10:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4202) I need to use this public man.

- [01:10:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4209) Okay, actually I will assign this to here.

- [01:10:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4216) Two Global variables Global methods. Let's define it here.

- [01:10:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4227) And on here we are going to use global.

- [01:10:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4230) That's man equal to this. Yes.

- [01:10:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4236) Alright, and I'm Global methods.

- [01:10:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4241) We also need to call this let's call this in.

- [01:10:54](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4254) Okay.

- [01:10:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4259) And in our Global methods, okay, what we're going to do is we are going to do dispatcher

- [01:11:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4267) begin.

- [01:11:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4268) Or let's say main dots make sure that being invoke or label we can do that. I like to

- [01:11:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4276) say that as well.

- [01:11:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4278) Maybe I'll login status especially being in invoke.

- [01:11:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4286) Okay.

- [01:11:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4287) sounds like

- [01:11:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4290) I don't exactly remember the sign text, but we will yeah, this is voltage noise and by

- [01:11:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4296) in that League login status that content will be equal to something. Okay, not low boots

- [01:11:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4305) in. Okay application.

- [01:11:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4310) long time

- [01:11:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4311) okay for application run time. I also need another date. Let's keep it here.

- [01:12:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4325) Okay, private static. Okay up daytime and up eight or up runs date. Yeah point it will

- [01:12:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4340) be daytime help push that server time.

- [01:12:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4345) and he will call calculated on time as

- [01:12:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4350) okay, daytime helpers dots

- [01:12:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4356) so overtime - okay update.

- [01:12:43](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4363) We will just display the total second Sears and zero plus.

- [01:12:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4373) Seconds however seconds whatever the seconds it is.

- [01:12:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4378) All right, and just return if user is logged in hours.

- [01:13:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4390) Message could be different and that time let's say logo to users.

- [01:13:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4395) Gogoat user is

- [01:13:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4397) let's use our

- [01:13:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4400) Format, so it will be from logging operations dots look at user darts. Okay. So the first

- [01:13:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4413) name of the users

- [01:13:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4418) and then the

- [01:13:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4422) So name last name? Yeah and session time this time I believe session time.

- [01:13:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4438) ation learn by and

- [01:14:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4443) It will be.

- [01:14:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4449) okay session runtime will be equal to we will use login date is inside logging operations

- [01:14:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4459) DOT log in time by the way, we have

- [01:14:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4467) Yeah, he's supposed to be here.

- [01:14:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4470) It's going to be the time that service time.

- [01:14:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4481) And let's run our application to see if our code is working as expected or not.

- [01:14:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4491) Okay.

- [01:14:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4496) Okay, you see not logged in application long time.

- [01:15:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4513) Is getting updated each seconds if application pleases this may also please okay. So let's

- [01:15:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4524) register and then try to login together first.

- [01:15:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4528) Let's compose an account.

- [01:15:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4532) It made me dance for combat test.

- [01:15:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4539) Okay user has been registered. We are still not loaded in. Let's try an incorrect password

- [01:15:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4551) forgotten that okay.

- [01:15:54](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4554) From what was Josh?

- [01:15:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4558) email

- [01:15:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4559) Yeah, and I will try a different password. Okay are on the enter. The password is incorrect.

- [01:16:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4569) And he should also see that in logging try with our new IP here. Let's answer our correct

- [01:16:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4577) password.

- [01:16:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4578) Okay. Now we see local user who can Google conversation runtime five seconds. Of course,

- [01:16:25](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4585) we should disable login and enabled exit buttons. Also we should disable register as well. It

- [01:16:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4593) is totally up to you too. Currently, we are displaying everything fine. This is getting

- [01:16:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4600) updated each second.

- [01:16:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4605) Okay and after login?

- [01:16:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4608) After login we can display. I love it in message and disabled that half.

- [01:16:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4616) How can we do that? So?

- [01:17:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4621) Let's go to our tops.

- [01:17:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4626) Okay. So top had a login. I also need to give a name as of login.

- [01:17:18](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4638) and here's

- [01:17:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4641) Okay name or not? This one? This one is just stir and after the login operation.

- [01:17:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4653) Which is here.

- [01:17:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4657) Okay, we're going to top login. Okay top Logan is in main top again enable. Let's or is enabled.

- [01:17:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4675) Bulls by the way, you should also make this a method actually so

- [01:18:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4683) but let's just say for now.

- [01:18:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4690) top register

- [01:18:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4693) and making this method is better because when you add a logo at bottom, you can just call

- [01:18:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4704) that method so I will just make this impossible. Yes. That's the better think so in global

- [01:18:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4710) methods.

- [01:18:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4712) Yes, let's write a method public static void and change login status here. It is. Just

- [01:18:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4726) going to set oposite off.

- [01:18:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4729) Okay opposite of the enabled.

- [01:18:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4739) Oh, you see I am getting error because this is not inside parent class. You see you cannot

- [01:19:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4754) write methods outside of classes. Every method is written inside a class in C sharp. So changelog

- [01:19:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4764) institutes and here I am going to Simply use like this.

- [01:19:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4770) So this will just change whether it's enabled or not.

- [01:19:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4778) And I will call this inside logging operations Global operating methods change login status.

- [01:19:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4787) Okay here and let's show a message show.

- [01:19:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4793) Login is successful.

- [01:19:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4798) Or you have successfully logged in?

- [01:20:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4803) Okay, let's start again. So when I add and logout button now, I can just call that method,

- [01:20:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4819) okay?

- [01:20:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4820) Therefore I will have better control better efficiency.

- [01:20:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4828) and lesser Court Lessard optic duplicate code

- [01:20:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4832) Okay, you have successfully logged in now. These are disabled if I had a low good top

- [01:20:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4844) here. I would just go to that. I should also delete this values from text boxes.

- [01:20:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4856) Okay.

- [01:20:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4857) Okay. So let's also add log out button which will appear after logo tin.

- [01:21:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4867) So here our status.

- [01:21:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4871) Let's make it this size and add a log out button here.

- [01:21:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4901) Last name with us smoke.

- [01:21:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4913) and

- [01:21:54](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4914) what?

- [01:21:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4915) Okay.

- [01:21:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4916) and

- [01:21:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4917) This was simply do pretty easy thing, but let's edit also here.

- [01:22:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4926) public static void

- [01:22:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4930) why it's a log out.

- [01:22:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4935) Unless you try no guards.

- [01:22:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4943) and

- [01:22:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4946) you see I can also pass parameter like this or I can use the reference in in the global

- [01:22:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4954) methods.

- [01:22:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4956) So what this is going to do is simply it will notify this logo to users we could know and

- [01:22:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4967) it will change login status. Okay? Okay change login status.

- [01:22:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4975) And you have a message.

- [01:23:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4980) Okay, you have successfully logged bit out. All right, and then there is one thing we

- [01:23:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4993) one more thing that we have to do which is

- [01:23:16](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=4996) when we do start operations

- [01:23:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5002) we are going to

- [01:23:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5008) make this but invisible okay main that Beatty and logos visibility equal force.

- [01:23:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5018) And by the way this invisible

- [01:23:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5021) System not visible to hit them. We are going to the going to change visibility. Okay, how

- [01:23:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5030) we are going to do that? I mean we're going to do that. We are going to do it in change

- [01:23:55](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5035) login status as equal to opposite of visibility.

- [01:24:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5041) Oh we can't do it. So what we need to do is we are going to do a switch.

- [01:24:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5053) visibility and it has automatically generated test codes if it is visible, we will send

- [01:24:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5060) it as

- [01:24:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5063) hidden if it is invisible hidden, we will send it as

- [01:24:31](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5071) Visible and others filled can remain they don't matter. Okay, let's run the application

- [01:24:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5079) and see if it is working or not.

- [01:24:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5084) Okay.

- [01:24:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5088) Okay, let's try a some incorrect login. It says not Palms.

- [01:25:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5108) Let's try a different password incorrect. That's the correct password. Yes. Okay, we

- [01:25:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5115) have successful Market in and the logout button has appeared here. This message is also correct

- [01:25:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5123) and when I tried log out click logout

- [01:25:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5128) Nothing happens because we didn't call our method.

- [01:25:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5132) What I mean is here we are supposed to call logging operations that know God.

- [01:25:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5139) So I log out. Okay, and

- [01:25:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5146) let's Okay, one second.

- [01:25:52](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5152) So let's change this like

- [01:25:56](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5156) Yes, I did the biggest and this animal left. Okay at the beginning log out button should

- [01:26:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5168) be invisible because we didn't login yet.

- [01:26:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5175) Yes, it is invisible.

- [01:26:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5183) And let's login.

- [01:26:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5190) Okay, now it is visible and when I look out we have logo that you see this message also

- [01:26:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5198) changes and these become available. Okay, watch me. I log in this becomes on clickable.

- [01:26:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5206) They are not enabled this becomes visible logout button becomes visible and this session

- [01:26:54](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5214) is restarting.

- [01:26:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5217) and when I log out

- [01:27:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5220) You see it returns back to application runtime register and login becomes available again

- [01:27:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5225) enables again. I can log it again. So our login system is fully functional right now.

- [01:27:15](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5235) All right, everything is working perfectly fine at the moment. However, you see we are

- [01:27:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5244) embedding our table names as well into our application code.

- [01:27:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5252) and this may cause some system vulnerabilities, but I don't know if they are the better approach

- [01:27:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5267) would be using server site apis to

- [01:27:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5277) Please do online operations server site operations.

- [01:28:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5284) However, currently we are just

- [01:28:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5287) learning how it is done. We are also taking every precaution that we can take.

- [01:28:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5297) and but also if this was an application that is connecting with a remote server we can

- [01:28:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5308) never add our

- [01:28:36](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5316) connections think into our application

- [01:28:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5320) Because this thing can be easily found from our exit. Do you know how let me show you

- [01:28:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5328) that as well, but before doing that, let's take a note of what we have seen in these

- [01:28:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5337) lectures.

- [01:29:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5344) in lecture

- [01:29:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5345) seventh

- [01:29:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5347) Okay what we have seen so far, so let's look.

- [01:29:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5361) Okay, we have a we have used it. Let's start from the beginning how to properly salt user

- [01:29:37](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5377) password with you guid. So, how is this?

- [01:29:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5387) reach

- [01:29:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5388) Globally, unique identifier is the weather explanation.

- [01:29:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5399) guid

- [01:30:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5402) what is guid and how to

- [01:30:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5414) probably sought user password with guid and

- [01:30:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5420) okay.

- [01:30:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5423) Okay how to develop proper login system?

- [01:30:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5434) of to keep logos in user information in the RAM memory

- [01:30:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5445) Okay how to enable disabled?

- [01:30:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5453) tops objects unless a tops how to change visibility of

- [01:31:09](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5469) elements such as bottom Stacia botnet

- [01:31:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5481) Okay.

- [01:31:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5483) And what does the displayed okay how to do creative how to do log in or log inquiries?

- [01:31:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5500) and on the same Beach

- [01:31:45](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5505) Entity Framework

- [01:31:47](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5507) such as checking if user exists and it password is correct.

- [01:31:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5519) how to

- [01:32:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5520) implement

- [01:32:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5521) security Logan try system

- [01:32:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5524) Okay how to properly implement?

- [01:32:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5530) I love the design table and he's like

- [01:32:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5548) Okay, how to update and today?

- [01:32:40](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5560) classes

- [01:32:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5562) with including

- [01:32:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5568) Okay, database connection string in that net core application or project.

- [01:33:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5599) Okay.

- [01:33:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5602) Okay.

- [01:33:24](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5604) Okay.

- [01:33:27](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5607) alt existence

- [01:33:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5613) Yeah.

- [01:33:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5615) Okay.

- [01:33:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5618) Okay, so

- [01:33:44](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5624) By the way, do you know why I have used this picture begin in work because this is a soft

- [01:33:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5631) wet. Okay, therefore it cannot access elements of main threat directly. Therefore. I have

- [01:33:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5639) to use dispatcher begin invoke and okay how to how to use the special time and in.net.

- [01:34:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5650) Okay call the EPF of decay.

- [01:34:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5654) ation, as a timer how to access main window elements UI elements

- [01:34:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5670) Let's solve that sweet.

- [01:34:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5673) Okay this patient we can invoke.

- [01:34:41](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5681) and

- [01:34:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5682) what else there is?

- [01:34:49](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5689) Let's remove these PMS power back up. So I will just re-edit.

- [01:35:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5703) Janice clothing as well

- [01:35:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5708) Let's take a backup.

- [01:35:14](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5714) Let's delete the old pickup.

- [01:35:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5719) Yeah, see.

- [01:35:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5722) DB

- [01:35:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5723) I will delete this and if I stop

- [01:35:34](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5734) okay, let's add it to our project.

- [01:35:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5742) Okay. Yeah, I was going to

- [01:35:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5753) read this to you.

- [01:36:07](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5767) And let's see here.

- [01:36:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5770) What is a grid?

- [01:36:12](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5772) A grid is an acronym that stands for globally unique identifier. They are also referred

- [01:36:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5777) to as uuids or universally unique identifiers. There is no real difference between the two

- [01:36:23](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5783) technically they are 128-bit unique reference numbers used in Computing which are highly

- [01:36:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5788) unlikely to repeat when generated despite there being no Central grid Authority's to

- [01:36:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5792) ensure uniqueness.

- [01:36:35](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5795) What does a grid look like a grid follows a specific structure defined in RFC 4122 and

- [01:36:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5802) come in a few different versions and variants all variants follow the same structure xxxxx

- [01:36:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5808) xxxxx xxxxx xxxxx xxxxx xxxxx where M represents the version and the most significant bits

- [01:36:58](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5818) of in represent the variant.

- [01:37:00](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5820) How unique is unique.

- [01:37:02](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5822) A grid is a unique number that can be used as an identifier for anything in the universe.

- [01:37:08](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5828) But unlike ISBN, there is no Central Authority the uniqueness of a grid relies on the algorithm

- [01:37:13](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5833) that was used to generate it will look at the types of Gibbs later, but assuming a randomly

- [01:37:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5839) generated, could you have about the same chance of getting hit by a meteorite in a year as

- [01:37:22](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5842) getting a collision in 10 to 30 trillion kids? Okay. So it is it printed on them? Okay, and

- [01:37:32](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5852) Are there anything else that we should not?

- [01:37:39](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5859) Okay, I think this is pretty enough for today. I am going to also add another rule.

- [01:37:51](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5871) You're sure.

- [01:37:57](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5877) project

- [01:37:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5879) and I think I have noticed here.

- [01:38:05](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5885) also

- [01:38:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5886) I say

- [01:38:42](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5922) or password rules for expansion

- [01:38:53](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5933) chn

- [01:39:04](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=5944) okay, let me upload this into our GitHub repository as well.

- [01:40:01](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6001) by the way, if you are even if you are not taking my

- [01:40:06](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6006) courses, you can still join our Discord Channel and ask me questions. It is totally fine.

- [01:40:19](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6019) And

- [01:40:21](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6021) there were there were recently person joined our discourse Channel and ask me questions,

- [01:40:30](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6030) even though he was or her was not one of our student.

- [01:40:38](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6038) And it made me happy. So it is a hundred percent fine. Okay, let's also upload our today's

- [01:40:48](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6048) source code. And yeah. If you have any questions, please ask me me or your head of students.

- [01:41:03](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6063) Help you.

- [01:41:11](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6071) I also started adding Google Cloud generated subtitles system subtitles for our videos

- [01:41:20](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6080) and you can also use our videos use of substance now.

- [01:41:28](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6088) can lecture seven and semester project porch

- [01:41:46](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6106) Okay.

- [01:41:50](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6110) I think I might also make an SMS announcements tomorrow.

- [01:41:59](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6119) Okay, and yes, I have prepared both thirtyish and English version of the project since you

- [01:42:10](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6130) are still a first-year student, but of course in the following years, I would also all I've

- [01:42:17](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6137) only make project details in English. So you better get your English improved.

- [01:42:26](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6146) Okay. If you have any questions related to the project or the courses or the lectures,

- [01:42:33](https://www.youtube.com/watch?v=0Wl0ooYZ5zY&t=6153) please contact me from our score Channel and end of lecture. Hopefully see you.
