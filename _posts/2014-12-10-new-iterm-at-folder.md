---
layout: post
title: New iTerm at Folder
categories: []
tags: []
published: True
---

These days I've been playing around with my development environment. I installed the [iTerm2][iterm2] and need to find a way to open iTerm2 with a specific location. After googling for awhile I found the tutorial by [Peter Downs][peterDownsLink] to write the Apple Script as a Finder service that is accessible by right-clicking on a folder.

The original version works well, but since I have set up some alias for my working projects on the desktop, I also want to open iTerm in those original folder. Therefore I further modify the script to suit my need as follow. My modification was based on [Eric Hu][ericHoGithub]'s [version][originalScriptLink].

{% highlight applescript %}
-- Adapted from these sources:
-- http://peterdowns.com/posts/open-iterm-finder-service.html
-- https://gist.github.com/cowboy/905546
-- https://gist.github.com/eric-hu/5846890 
--
-- Modified to work with alias files as well, cd-ing to their original folder
on run {input, parameters}
	tell application "Finder"
		set my_file to first item of input
		set filetype to (kind of (info for my_file))
		-- Treats OS X applications as files.  To treat them as folders, integrate this SO answer:
		-- http://stackoverflow.com/a/6881524/640517
		if filetype is "Folder" or filetype is "Volume" then
			set dir_path to quoted form of (POSIX path of my_file)
		else if filetype is "Alias" then
			set dir_path to quoted form of (POSIX path of (original item of my_file as string))
		else
			set dir_path to quoted form of (POSIX path of (container of my_file as string))
		end if
	end tell
	CD_to(dir_path)
end run

on CD_to(theDir)
	tell application "iTerm"
		activate
		try
			set t to the last terminal
		on error
			set t to (make new terminal)
		end try
		tell t
			launch session "Default Session"
			tell the last session
				write text "cd " & theDir
				write text "ls"
			end tell
		end tell
	end tell
end CD_to
{% endhighlight %}

[iterm2]: 				http://iterm2.com/
[peterDownsLink]: 		http://peterdowns.com/posts/open-iterm-finder-service.html
[ericHoGithub]: 		https://github.com/eric-hu
[originalScriptLink]:	https://gist.github.com/eric-hu/5846890