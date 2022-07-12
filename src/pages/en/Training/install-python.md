---
title: Install Python
description: Guide about how to install Python
layout: ../../../layouts/MainLayout.astro
---

In these slides we will see:

- how to install the Python 3.X interpreter
- how to install an IDE (VS Code) to write our code
- how to use a version control tool (Git)

### Install python on Windows 🪟

- Download the latest Python release installer for your OS from [here](https://www.python.org/downloads/)
- Launch the installer
- **Pay Attention to select _"add Python to path"_**
- Wait until it's done :sweat_smile:

### Install python on macOS 🍎

You've two alternatives:

1. Proceed as indicated with windows (but obviously download the installer for mac)
2. If you've brew installed just open a terminal and write "_brew install python3_"

### Install python on Linux 🐧

Python3 should be already available on most Linux of distribution, in the rare case you don't have it you can install it by writing on a terminal "_sudo |name of the packet manager| install python3_" (For example in Ubuntu "_sudo apt-get install python3_")

### ReadyCheck

In any case to check Python wheter has been correctly installed open a terminal and type "_python3_" you should see something like this

```bash
matteo@matteo-desktop ~> python3
Python 3.6.8 (default, Aug 20 2019, 17:12:48)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

### How to install and IDE

I suggest you to use VSCode. I know you may be already familiar with other IDE such as PyCharm or Spyder but unless you're a master at using it please avoid them (expecially Spyder).

Go on the [VS Code website](https://code.visualstudio.com/) and follow the installation guide for your OS.

I will mainly use VS Code during the lesson but you can use others if you're already familiarity with it (in that case we may not be able to solve all the IDE related issues :sweat_smile:)


**Optional for VS Code**

In the _Extensions_ tab ( on the left side ) search for "python" an install the extension

### What is Git?

Don’t confuse Git with GitHub

- Git is a version control tool
- GitHub provides cloud services using Git (remote repositories, bug tracking, wiki page...)


Git is not like Dropbox or Google Drive

- True version control, not just file history
- Need to resort to console sooner or later

### How to install Gitpng)

To simplify the work we will use [Gitkraken](https://www.gitkraken.com/) that will install both Git and a GUI to interact with our repositories (the place where the code is stored)
Just follow the link and install the version accordin to your OS

### Register to a Git cloud service

Before starting to save our code we need to register to a Git cloud service. In the following slides we will work with GitLab (you can register [here](https://about.gitlab.com/free-trial/)). With the free trial we will be able to accomplish all we need for this course (Remember to confirm the mail or nothing will work!). If you already have an account on other Git services (i.e. Github,Bitbucket) you can use it.

### Start a new repository on GitLab

To create a new repository on GitLab open GitKraken and select "Start a hosted repo on GitLab)" as in the image
![bg right](/images/startgitlab.png)

Connect to your Gitlab account by following the procedure
![](/images/initgitlab.png)

Fill the details according to:

- your account name
- the name you choose for the repo
- where you want to store the code on your pc

Then select <i style="color:green">"Create repositry and clone"</i>
![bg right:50%](/images/initgitlab2.png)

### Save the local files online

Once you've finished to write your code and you want to save it you need to do open GitKraken and follow th steps explained in the following slides

![bg right:40% height:800px](/images/stagecommit.png)

On the right side of GitKraken you will see:

- on the top: the list of the files that have been created or modified since the last time
- on the bottom : a textbox where you need to write a brief explanation of what you did since the last time (this is called _commit message_ and it is mandatory)

![bg right:40% height:700px](/images/stagecommit2.png)

Once you've written the commit message you can click on the button <i style="color:green">"Stage all changes"</i> and then click on the button on the bottom.
The last thing to do to save your file online is click on the push btton ![](/images/push.png) adn you're done!

Now you can go on your [dashboard](https://gitlab.com/dashboard/projects) and see the code saved!

Git is a really useful tool to work in group so we strongly recoomend to use it. It could be difficult at the beginning but it offers a lot of advantages in the long run :smile:!
In any case you can find more detailed explanation about how Git and Gitkraken work [here](https://support.gitkraken.com/start-here/guide/)


