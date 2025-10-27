# How to Setup Private IKEv2 / IPSec MSCHAPv2 VPN on Windows Server to Connect From Android 12+ Phone

## Full tutorial link > https://www.youtube.com/watch?v=5jzmXwZgx5U

[![How to Setup Private IKEv2 / IPSec MSCHAPv2 VPN on Windows Server to Connect From Android 12+ Phone](https://img.youtube.com/vi/5jzmXwZgx5U/sddefault.jpg)](https://www.youtube.com/watch?v=5jzmXwZgx5U "How to Setup Private IKEv2 / IPSec MSCHAPv2 VPN on Windows Server to Connect From Android 12+ Phone")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Setup-Private-IKEv2-IPSec-MSCHAPv2-VPN-on-Windows-Server-to-Connect-From-Android-12-Phone.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-to-Setup-Private-IKEv2-IPSec-MSCHAPv2-VPN-on-Windows-Server-to-Connect-From-Android-12-Phone.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


✔️ If you are frustrated since #L2TP/PPTP is gone after MIUI 13 Update, or after your phone's / tablet's / device's Android Version update, then this full guide tutorial is for you. If your phone, tablet, or mobile device's Android version is above 11 and you can't find the #PPTP VPN protocol to connect your private #VPN, then don't worry. Because I am explaining the easiest way to set up our VPN to connect from your device in this tutorial guide.

✔️ Point-to-Point Tunneling Protocol (PPTP) was so easy to set up on Windows Server and you were able to connect your private VPN easily through your phone. But this is not possible anymore since PPTP is removed from the majority of phones and mobile devices.

✔️ So instead of setting up our private VPN through features of Windows Server, we are going to use open source #SoftEther VPN Project.

✔️ In this video I will show you thoroughly from scratch:

1: Generate a new virtual server on Hyper-V and install Windows Server 2019 evaluation version.

2: Install SoftEther VPN Project on Windows Server 2019.

3: Make the necessary configuration of SoftEther.

4: Generate and export the #OpenVPN configuration file.

5: Modify the OpenVPN configuration file which ends with the .ovpn extension.

6: Install the OpenVPN app through Google Play Market and import the .ovpn configuration.

7: Connect to your VPN from your phone. I demonstrate this with my Xiaomi Poco X3 Pro - Android 12

8: With this methodology, we don't have to deal with complex and very hard-to-set-up IKEv2 / #IPSec #MSCHAPv2, #IKEv2 / IPSec #PSK, and IKEv2 / IPSec #RSA VPN protocols. These are the only available protocols on my mobile device.

[00:00:00](https://youtu.be/5jzmXwZgx5U?t=0) Introduction

[00:01:17](https://youtu.be/5jzmXwZgx5U?t=77) New Virtual Machine

[00:03:28](https://youtu.be/5jzmXwZgx5U?t=208) Setting up Windows Server 2019

[00:07:20](https://youtu.be/5jzmXwZgx5U?t=440) SoftEther Download & Installation

[00:11:56](https://youtu.be/5jzmXwZgx5U?t=716) How to Setup OpenVPN on the Phone and Use VPN

✔️ The reason why I made this video is, it was so hard and there wasn't any up-to-date guide/tutorial for setting up your private VPN and connecting from your mobile phone.

✔️ The subtitle of the video is manually corrected so please watch with subtitles.

✔️ Please join Our Discord server for asking questions and have discussions: 🔗 [https://discord.gg/rfttctFewW](https://discord.gg/rfttctFewW)

✔️ Please follow us on Twitter: 🔗 [https://twitter.com/SECourses](https://twitter.com/SECourses)

✔️ Please follow us on Facebook: 🔗 [https://www.facebook.com/OfficialSECourses](https://www.facebook.com/OfficialSECourses)

✔️ If you are interested in programming our playlists will teach you how to program and code from scratch: 🔗 [https://www.youtube.com/c/SECourses/playlists](https://www.youtube.com/c/SECourses/playlists)

1️⃣ Introduction to Programming Full Course with C# playlist ⭐⭐⭐⭐⭐

2️⃣ Advanced Programming with C# Full Course Playlist ⭐⭐⭐⭐⭐

3️⃣ Object Oriented Programming Full Course with C# playlist ⭐⭐⭐⭐⭐

4️⃣ Asp NETCore V5 - MVC Pattern - Bootstrap V5 - Responsive Web Programming with C# Full Course Playlist ⭐⭐⭐⭐⭐

5️⃣ Artificial Intelligence (AI) and Machine Learning (ML) Full Course with C# Examples playlist ⭐⭐⭐⭐⭐

6️⃣ Software Engineering Full Course playlist ⭐⭐⭐⭐⭐

7️⃣ Security of Information Systems Full Course playlist ⭐⭐⭐⭐⭐

Thumbnail : freepik : Gradient vpn illustration



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=0) Hello everyone, I am Dr. Furkan&nbsp; Gözükara. In this tutorial video,&nbsp;&nbsp;

- [00:00:04](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=4) I am going to show you the easiest way of&nbsp; setting up your own private virtual private&nbsp;&nbsp;

- [00:00:09](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=9) network a.k.a. VPN server or any Windows operating&nbsp; system. The tricky part is that after Android 12,&nbsp;&nbsp;

- [00:00:16](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=16) the Android operating system not anymore&nbsp; supports the older VPN protocols. Therefore,&nbsp;&nbsp;

- [00:00:22](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=22) now it is much harder to set up your own VPN that&nbsp; you can connect through your modern mobile phone.&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=28) So with this video, you will be able to set up&nbsp; your own dedicated IP having VPN by using any&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=34) virtual private server a.k.a. VPS or dedicated&nbsp; server. Here you are seeing the Hyper-V virtual&nbsp;&nbsp;

- [00:00:42](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=42) server manager of my dedicated server. I will&nbsp; generate a new virtual server and install a fresh&nbsp;&nbsp;

- [00:00:48](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=48) Windows Server 2019 trial operating system on it&nbsp; for demonstration purposes. So this is actually a&nbsp;&nbsp;

- [00:00:56](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=56) tutorial video that will teach you everything from&nbsp; scratch on a real server, not an emulation server.&nbsp;&nbsp;

- [00:01:02](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=62) I will also show you how to connect from&nbsp; a real phone by using my personal phone&nbsp;&nbsp;

- [00:01:07](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=67) instead of an emulator. Setting up your own&nbsp; VPN server has lots of advantages over using&nbsp;&nbsp;

- [00:01:13](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=73) free or commercial VPN services. So let's&nbsp; start with generating the virtual machine.&nbsp;&nbsp;

- [00:01:21](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=81) Let's say test VPN. You can use&nbsp; either generation. I will use the&nbsp;&nbsp;

- [00:01:30](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=90) most recent one. Let's give it 4,096 megabytes of&nbsp; memory and I will connect it to a virtual switch.&nbsp;&nbsp;

- [00:01:43](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=103) Everything looks good. Let's pick up the&nbsp; trial. This is an official Windows Server&nbsp;&nbsp;

- [00:01:53](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=113) 2019 image that I have downloaded from Microsoft's&nbsp; official website. It is a trial version. Okay.&nbsp;&nbsp;

- [00:02:05](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=125) All right. Let's connect it. Okay, let's start it.&nbsp;&nbsp;

- [00:02:14](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=134) By the way,: if you already have&nbsp; set up your operating system,&nbsp;&nbsp;

- [00:02:19](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=139) then you can skip these parts&nbsp; in the video with forwarding.&nbsp;&nbsp;

- [00:02:25](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=145) All right. I will also pause video here&nbsp; for installation and we will continue.&nbsp;&nbsp;

- [00:02:31](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=151) All right. So the installation has been completed.&nbsp;&nbsp;

- [00:02:35](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=155) So let's copy paste our password to&nbsp; login into the freshly installed server.&nbsp;&nbsp;

- [00:02:48](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=168) All right, so let's say action.&nbsp;&nbsp;

- [00:02:57](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=177) All right, let's type the password. Okay, first&nbsp; of all, we need to enter our IP details so that&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=189) we can connect our Windows Server operating&nbsp; system through remote desktop connection and&nbsp;&nbsp;

- [00:03:19](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=199) also to connect the Internet. Okay, it is&nbsp; getting loaded. Let's enter our IP details.&nbsp;&nbsp;

- [00:03:34](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=214) You see, I'm still using a Hyper-V manager&nbsp; interface. Okay. By the way,: you can't just&nbsp;&nbsp;

- [00:03:48](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=228) enter any IP from your mind. You need to use the&nbsp; IP that your server provider is providing you.&nbsp;&nbsp;

- [00:03:57](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=237) I just noticed that I have entered&nbsp; IP incorrectly, it will be like this.&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=244) Now our Internet should come back. Yes, Internet&nbsp; is arrived and let's fix our remote desktop.&nbsp;&nbsp;

- [00:04:15](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=255) Okay, here I will allow it. Okay, now&nbsp; everything is ready and now I will&nbsp;&nbsp;

- [00:04:22](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=262) connect this machine through remote desktop&nbsp; management, like right now I am connected.&nbsp;&nbsp;

- [00:04:31](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=271) Okay, now we have connected our new&nbsp; server through remote desktop services.&nbsp;&nbsp;

- [00:04:41](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=281) All right, so the tricky part is with&nbsp; all those tutorials that you will see,&nbsp;&nbsp;

- [00:04:47](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=287) they are using the built-in&nbsp; features of Windows Server. However,&nbsp;&nbsp;

- [00:04:56](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=296) now that modern Android systems is not supporting&nbsp; anymore point-to-point tunneling protocol and in&nbsp;&nbsp;

- [00:05:06](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=306) many of the tutorial videos, I see that they are&nbsp; using PPTP to connect through their private VPNs.&nbsp;&nbsp;

- [00:05:15](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=315) And currently Android 12 in my phone supports only&nbsp; this protocol and IPsec IKEv2 MSCHAPv2 VPN server.&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=331) For modern clients, IPsec IKEv2 MSCHAPv2&nbsp; is now the preferred VPN solution.&nbsp;&nbsp;

- [00:05:38](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=338) It is supported by Windows since Windows 7,&nbsp; Android since 11, macOS since 10.11, iOS since 9.&nbsp;&nbsp;

- [00:05:47](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=347) Both full tunnel and split tunnel configurations&nbsp; are possible. Split tunnel may be require&nbsp;&nbsp;

- [00:05:53](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=353) additional configuration on the client.&nbsp; Okay, my phone is supporting IKEv2 with&nbsp;&nbsp;

- [00:06:04](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=364) MSCHAPv2 VPN, however, it is really hard to set&nbsp; up this VPN on Windows Server operating system.&nbsp;&nbsp;

- [00:06:14](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=374) Therefore, we are going to use another&nbsp; tactic which is very easy to install.&nbsp;&nbsp;

- [00:06:21](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=381) We are going to use open source VPN system that&nbsp; we will install on our operating system which&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=391) that is called as SoftEther VPN project. It is&nbsp; open source. You can see their GitHub as well,&nbsp;&nbsp;

- [00:06:38](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=398) their source code as well in here. So it&nbsp; is totally safe. They have installation&nbsp;&nbsp;

- [00:06:44](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=404) file for Windows operating system. Okay, so let's&nbsp; install it in our freshly composed Windows Server.&nbsp;&nbsp;

- [00:06:58](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=418) I will change internet settings to download the&nbsp; file. Okay, let's see where is the download file.&nbsp;&nbsp;

- [00:07:11](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=431) Yeah, here, okay, yes,&nbsp;&nbsp;

- [00:07:16](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=436) okay, I have to add more permission,&nbsp; yeah, the file is here, let's download it.&nbsp;&nbsp;

- [00:07:41](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=461) Okay, let's install the downloaded file.&nbsp;&nbsp;

- [00:07:52](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=472) Okay, we need VPN server.&nbsp;&nbsp;

- [00:08:00](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=480) Okay, the installation has&nbsp; been completed, let's start the&nbsp;&nbsp;

- [00:08:04](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=484) server, let's double click it. It requires a&nbsp; password, okay, I have copy pasted the password,&nbsp;&nbsp;

- [00:08:13](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=493) password has been changed. Now we are&nbsp; selecting remote VPN server. Okay,&nbsp;&nbsp;

- [00:08:22](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=502) okay. Yes, these are not very important.&nbsp; This is our global IP. This is important.&nbsp;&nbsp;

- [00:08:30](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=510) Okay, and we are going to enable this one. This&nbsp; is important to connect through Android phone.&nbsp;&nbsp;

- [00:08:40](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=520) Okay, we don't need this, all right, yeah, we&nbsp; need to also compose a user which is important,&nbsp;&nbsp;

- [00:08:48](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=528) so let's say username test VPN, and we&nbsp; also need to set a password for it. Okay,&nbsp;&nbsp;

- [00:08:54](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=534) I'm setting the password right now, okay. Okay,&nbsp; the person has been generated, the user account.&nbsp;&nbsp;

- [00:09:06](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=546) Okay, there is one another tricky issue that&nbsp; I had to find with a lot of research which is,&nbsp;&nbsp;

- [00:09:16](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=556) which is virtual NAT, so we go to,&nbsp; we go back to our users screen.&nbsp;&nbsp;

- [00:09:27](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=567) Okay, double click here to go user screen, then&nbsp; you have, there is virtual NAT and virtual DHCP&nbsp;&nbsp;

- [00:09:34](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=574) server, secure NAT, you have to enable this,&nbsp; otherwise you won't be able to connect through&nbsp;&nbsp;

- [00:09:41](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=581) your phone. All right, I think this should&nbsp; be sufficient, we have enabled it, yes.&nbsp;&nbsp;

- [00:09:48](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=588) Okay, and one final thing, we are&nbsp; going to use OpenVPN which is another&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=596) open source software. Let's look for OpenVPN, and&nbsp; you see it's also another free software. Okay,&nbsp;&nbsp;

- [00:10:09](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=609) we are going to use OpenVPN application in&nbsp; the Play Store, let me also show you that,&nbsp;&nbsp;

- [00:10:21](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=621) to connect our VPN through our mobile phone. Okay,&nbsp; yes, this one. You need to install this one. Okay,&nbsp;&nbsp;

- [00:10:32](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=632) so on our server, we need to export our OpenVPN&nbsp; settings by clicking here, then you see there&nbsp;&nbsp;

- [00:10:40](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=640) is generate sample configuration, I will generate&nbsp; it into, let's say downloads folder, okay. Okay,&nbsp;&nbsp;

- [00:10:51](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=651) inside the generated zip file, only one file&nbsp; we need, which is OpenVPN remote access, okay.&nbsp;&nbsp;

- [00:11:02](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=662) Inside this file, we need to replace one&nbsp; thing before we can use it in our phone&nbsp;&nbsp;

- [00:11:12](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=672) in the OpenVPN application. We need to change&nbsp; this into our server IP, which is in my case.&nbsp;&nbsp;

- [00:11:26](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=686) Okay, so you need to change this&nbsp; into your server IP and just save it.&nbsp;&nbsp;

- [00:11:34](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=694) Okay, other than this, now you need to put this&nbsp; file into your mobile phone, and now I will move&nbsp;&nbsp;

- [00:11:42](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=702) to my mobile phone and show the rest there,&nbsp; to show you how to connect your set-up VPN.&nbsp;&nbsp;

- [00:11:52](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=712) Okay, now we are at my phone, I have downloaded&nbsp; the file into my phone. So first let me show&nbsp;&nbsp;

- [00:11:59](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=719) you my current IP address, as you can see it is&nbsp; the IP address that is provided through my ISP,&nbsp;&nbsp;

- [00:12:08](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=728) okay. Then I am opening&nbsp; OpenVPN application through&nbsp;&nbsp;

- [00:12:15](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=735) App Market, Play Store, then on this screen,&nbsp; we are going to import the generated file.&nbsp;&nbsp;

- [00:12:25](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=745) I have it in my downloads folder, we are going&nbsp; to click file, we are opening through browse&nbsp;&nbsp;

- [00:12:33](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=753) and we are importing that file, okay. Then&nbsp; we need to enter username and you can also&nbsp;&nbsp;

- [00:12:44](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=764) save your password, as just I did, as you can&nbsp; see, and then it is ready to connect through VPN&nbsp;&nbsp;

- [00:12:53](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=773) by just clicking it. Click continue&nbsp; there. Okay, now we are connected,&nbsp;&nbsp;

- [00:12:58](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=778) and now let's see if our VPN is working. Let's&nbsp; return back the browser and refresh the page.&nbsp;&nbsp;

- [00:13:08](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=788) Okay, as you can see, now we are connected through&nbsp; VPN, also at the right top of the Android phone,&nbsp;&nbsp;

- [00:13:15](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=795) you see there I was connected with VPN. Yes,&nbsp; as you can see on the laptop of the screen, the&nbsp;&nbsp;

- [00:13:25](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=805) VPN icon is alive, okay. Thank you very much for&nbsp; watching, please like and subscribe. Also leave a&nbsp;&nbsp;

- [00:13:34](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=814) comment. Let's quickly review, you are generating&nbsp; a user and setting it a password, and there you&nbsp;&nbsp;

- [00:13:43](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=823) are setting up the secure NAT, and then you can&nbsp; connect your VPN server with open VPN application,&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=835) it works flawlessly, it is so easy,&nbsp; all other options are so hard to do.&nbsp;&nbsp;

- [00:14:01](https://www.youtube.com/watch?v=5jzmXwZgx5U&t=841) This is the easiest way that I have&nbsp; found. Okay, hopefully see you later.
