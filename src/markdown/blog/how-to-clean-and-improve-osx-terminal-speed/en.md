---
path: /en/how-to-clean-and-improve-osx-terminal-speed
language: en
title: How to clean and improve OSX Terminal speed
date: 2019-08-06T15:55:35.455Z
---
Today I want to talk about something really simple but very useful especially for a software engineer.
After several months of utilisation, my terminal takes few seconds to start. That's really annoying!

- First, you need to remove your log files with this command line : `sudo rm -rf /private/var/log/asl/*.asl`
- Then, my shell (Zsh for me) gave me a list of incorrect Path variable that slow down my shell. This step could be optional if your config files are correct.

Now, when i launch my terminal everything's is instantaneous!
