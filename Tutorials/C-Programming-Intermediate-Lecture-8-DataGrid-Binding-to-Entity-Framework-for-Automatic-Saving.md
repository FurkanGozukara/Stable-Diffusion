# C# Programming (Intermediate) - Lecture 8: DataGrid Binding to Entity Framework for Automatic Saving

## Full tutorial link > https://www.youtube.com/watch?v=iEHyzpUSP_E

[![C# Programming (Intermediate) - Lecture 8: DataGrid Binding to Entity Framework for Automatic Saving](https://i.ytimg.com/vi/iEHyzpUSP_E/maxresdefault.jpg)](https://www.youtube.com/watch?v=iEHyzpUSP_E "C# Programming (Intermediate) - Lecture 8: DataGrid Binding to Entity Framework for Automatic Saving")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-8-DataGrid-Binding-to-Entity-Framework-for-Automatic-Saving.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-8-DataGrid-Binding-to-Entity-Framework-for-Automatic-Saving.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


C# Programming (Advanced/Intermediate) Lectures (8/14) will teach you #CSharp #programming from beginner to intermediate/expert level. This course is an excellent source to learn advanced concepts in C# #coding. If you are a beginner to C#, watch our previous course lectures. The playlist link of the previous course is below.

Full playlist of the previous course: C# For Beginners ⤵️

• C# Tutorial: Full Course For Beginners 👨‍💻...

Discord ➡️ [https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

Patreon ➡️   / secourses

Technology Playlist (30+ Tutorial / Guide / News / Review Videos) ⤵️

• Technology & Science: Tutorials, Tips, Gui...

Stable Diffusion Playlist (30+ Tutorial / Guide Videos) ⤵️

• Stable Diffusion Tutorials, Automatic1111 ...

Please join discord, mention me and ask me any questions. Thank you for like, subscribe, share and Patreon support. I am open to private consulting with Patreon subscription.

Full playlist of this course ⤵️

• C# Programming (Advanced/Intermediate) Ful...

You can watch for free our C# Programming, ASP .NET Core MVC programming, Machine Learning and Software Engineering related courses on our playlists page ⤵️

[https://www.youtube.com/@SECourses/pl...](https://www.youtube.com/@SECourses/pl...)

GitHub code repository of this course (source codes of the lectures) ⤵️

[https://github.com/FurkanGozukara/Int...](https://github.com/FurkanGozukara/Int...)

In lecture 8:

We have coded a drugs editing screen with DataGrid

How to bind DataGrid to an entity framework context with local binding

How to bind track changes of a DataGrid and save them in the database (add, update, delete and insert)

How to fire DataGrid cell modified event and display unsaved add/update/delete/insert changes

How to get anonymous/custom type results from entity framework select queries

How to properly refresh a DataGrid bound to an entity framework context

How to cast IList objects into a custom class objects list

Know how to search your problem and find answers

Introduction

DataGrid is a commonly used control in many software applications. It is a versatile tool that allows developers to display data in tabular form, as well as edit, sort, and filter that data. In this article, we will discuss how to create a drugs editing screen using DataGrid. We will also cover topics such as binding DataGrid to an Entity Framework context with local binding, tracking changes, firing cell modified events, displaying unsaved changes, getting anonymous/custom type results, refreshing DataGrid, and casting IList objects to custom class objects.

DataGrid and Entity Framework

The DataGrid control is a powerful tool for displaying and editing data in a tabular format. The Entity Framework is an object-relational mapping (ORM) framework that allows developers to work with databases using .NET objects. These two tools work seamlessly together to provide developers with an efficient way to display and edit data.

Binding DataGrid to an Entity Framework Context with Local Binding

To bind DataGrid to an Entity Framework context, we need to use local binding. Local binding means that the data is stored in memory, and any changes made to it are not immediately saved to the database. Instead, we must manually save the changes to the database.

To bind DataGrid to an Entity Framework context with local binding, we need to first create an Entity Framework context object. This object represents a connection to the database and provides access to the data.

Once we have our Entity Framework context object, we can then create a local binding between the DataGrid control and the context object. This is done by setting the DataGrid's ItemsSource property to the result of a LINQ query that retrieves the data we want to display.

Tracking Changes and Saving Them in the Database

When working with DataGrid, it is important to track any changes made to the data. This includes adding, updating, deleting, and inserting records. To track changes, we can use the DataGrid's CellEditEnding event. This event fires when the user finishes editing a cell in the DataGrid.

Inside the CellEditEnding event, we can determine what type of change was made to the data and update our Entity Framework context accordingly. For example, if a new record was inserted, we can add it to the context using the Add() method. If an existing record was updated, we can update it using the context's Update() method.

Once we have made changes to our Entity Framework context, we need to save those changes to the database. This is done by calling the context's SaveChanges() method.

Firing DataGrid Cell Modified Event and Displaying Unsaved Changes

In addition to tracking changes, we can also fire a DataGrid CellModified event when the user modifies a cell. This event allows us to display unsaved changes to the user.

To fire the CellModified event, we can use the DataGrid's CellValueChanged event.
