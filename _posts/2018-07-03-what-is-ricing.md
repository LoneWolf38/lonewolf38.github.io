---
title:  "What is Ricing?"
date:   2018-07-03 5:04:23
categories: [linux]
tags: [Ricing]
---

 ___"Making improvements to a system that don't actually do anyone any good, and can sometimes have negative ramifications"___

 
__Rice/Ricing__

   "Rice" is a word that is commonly used to refer to making visual improvements and customizations on one's desktop. It was inherited from the practice of customizing cheap Asian import cars to make them appear to be faster than they actually were - which was also known as "ricing". Here on /r/unixporn , the word is accepted by the majority of the community and is used sparingly to refer to a visually attractive desktop upgraded beyond the default.


__TL;DR Let Me tell you a story__

  You are a Linux User(Other wise you wouldn't be interested), you are hanging out with some friends and there's always a guy who says "check out my "awesome" desktop setup" where he had riced his linux distro. You with all your friends are thinking his setup is __dope af__. But when you ask him how to do it, he, being a huge jerk, uses all the nerdy words like "Tiling window manager, Polybar, dotfiles, /r/unixporn, Ricing" and you don't even heard them because you always have been a Gnome/Unity guy. So you went to internet to find some thing about ricing and how to do them but you are overwhelmed by all the words used there and so you give up.


But you are not here to be that guy, you are here to know what's the fuzz about. So let me introduce you to the world of __"Ricing"__
  


__Who is this guide for?__

Those who are interested in ricing or would like to know what it is, whether they are experienced Linux users or complete beginners.

Those who want control over the way their desktop environment [DE] looks, far beyond the offerings of Windows and OS X.

Those who dislike extra/unneeded features cluttering their DE. With ricing and Linux in general, you can keep what you want/need and remove everything else. This is especially helpful for older systems.  

## Introduction
The term ‘rice’ is used to describe a person’s unix desktop where ‘ricing’ is when someone is custom their desktop such as the icons, panels, or system interface. When it comes to ricing a tiling window manager though, the ricing of a user’s system becomes much more involved. Basic things such as the panel bar and application launcher must be configured by the user.

The reddit community [/r/unixporn][unixporn] is a great place to stay up to date on what people are using for their setups.

__List of Things to know before ricing your system__

   1. ___Window Managers___  : A window manager is software for an operating system that manages the placement of open windows. There are many window managers for Linux, most commonly used are
         - [i3wm][i3website]
         - [bspwm][bspwmwebsite]
         - [openbox][openboxwebsite]
         - [AwesommeWM][awesomewebsite]
         - [FluxBox][fboxwebsite]
         - [DWM][dwm].

   2. ___Desktop Environment___ :  A desktop environment is a collection of programs bundled together to make a workspace. It comes with a window manager, a panel, a set of default programs (text editor, music player, etc.), a file manager, a terminal emulator, and many, many other things. Some commonly used are
       - [Gnome][gnome]
       - [Unity][unity]
       - [KDE][kde],  

   3. ___Panels___ : Panels (aka bars) are used to display everything from current desktops to active windows to system informaton. They have very similiar behaviour to the bar you would expect on Windows and OSX. Some commonly used are
       - [Polybar][polybar]
       - [Tint][tint]
       - [Lemonbar][lemonbar].

   4. ___Program Launchers___ : A launcher is a program displaying a dialog to search for an action, typically launch an application. Many are not limited to just this, and allow you to perform other operations such as open up files and folders on your computer. Some commonly used are 
      - [Dmenu][dmenu]
      - [Rofi][rofi].

   5. ___Terminal Emulators___ : A terminal emulator, terminal application, term, or tty for short, is a program that emulates a video terminal within some other display architecture. Though typically synonymous with a shell or text terminal, the term terminal covers all remote terminals, including graphical interfaces. A terminal emulator inside a graphical user interface is often called a terminal window. Some commonly used are
      - [Terminator][terminator]
      - [urxvt][urxvt]
      - [Suckless][st].

   6. ___Shells___: A interactive program for accessing operating system's services. 
      - [Terminals are Sexy][tsexy]
      -  [Bash][bash]
       -  [Awesome BASH][abash]
        -  [Zsh][zsh]
             - [Oh-My-Zsh][ohmyzsh]
         - [Awesome ZSH][azsh]
    -  [fish][fish]
       - [Oh-my-fish][ohmyfish]
       - [Awesome fish][afish]

   7. ___Image viewers___ : 
        -  [meh][meh]
        -  [feh][feh]
    
   8. ___Audio___: 
        -  [mpd][mpd] 
        -  [moc][moc]
        -  [cmus][cmus]
   9. ___Video___ : No other than [mpv][mpv]
   
   10. ___SystemInfo___ : [Neofetch][neofetch], [Screenfetch][screenfetch]

   11. ___Screenshot___: [scrot][scrot], [shutter][shutter]

  Best distro for ricing is Arch Linux. It's my personal opinion. I just love Arch linux([Arch labs][alasb] or [Arcolinux][alinux] for ease) and their philosophy ___"Keep it simple, Stupid"___.  
  You can also use ubuntu but you can't do all the cool things which you can do with Arch easily.
 
## Conclusion
  It will take time to get the hang of it but once the adrenaline kicks in, I gurantee you, you will feel awesome and also you could be that jerk in the above story.


___Some Examples___


![image]({{ site.baseurl }}/images/rice.png)
![image2]({{ site.baseurl }}/images/rice2.jpg)


[unixporn]:https://www.reddit.com/r/unixporn
[i3website]: https://i3wm.org
[bspwmwebsite]: https://github.com/baskerville/bspwm
[openboxwebsite]: https://openbox.org
[awesomewebsite]: https://awesomewm.org
[fboxwebsite]: https://fluxbox.org
[dwm]: https://dwm.suckless.org
[gnome]: https://www.gnome.org
[unity]: https://unity3d.org
[kde]: https://www.kde.org
[polybar]: //https://github.com/jaagr/polybar
[tint]: https://https://wiki.archlinux.org/index.php/tint2
[lemonbar]: https://https://github.com/LemonBoy/bar
[dmenu]: https://tools.suckless.org/dmenu/
[rofi]: https://github.com/DaveDavenport/rofi
[terminator]: https://gnometerminator.blogspot.com/p/introduction.html
[urxvt]: https://wiki.archlinux.org/index.php/rxvt-unicode
[st]: https://st.suckless.org/
[tsexy]:https://terminalsare.sexy/
[bash]: https://www.gnu.org/software/bash/
[abash]: https://github.com/awesome-lists/awesome-bash
[zsh]: https://www.zsh.org/
[ohmyzsh]: https://ohmyz.sh/
[azsh]: https://github.com/unixorn/awesome-zsh-plugins
[fish]: https://fishshell.com/
[ohmyfish]: https://github.com/oh-my-fish/oh-my-fish
[afish]: https://github.com/fisherman/awesome-fish-shell
[meh]: https:///www.johnhawthorn.com/meh/
[feh]: https://feh.finalrewind.org/
[mpd]: https://github.com/MusicPlayerDaemon/MPD
[moc]: https://moc.daper.net/
[cmus]: https://cmus.github.io/
[mpv]: https://mpv.io/
[screenfetch]: https://github.com/KittyKatt/screenFetch
[neofetch]: https://github.com/dylanaraps/neofetch
[scrot]: https://github.com/dreamer/scrot
[shutter]: https://shutter-project.org/
[alasb]: https://archlabslinux.com/
[alinux]: https://arcolinux.info