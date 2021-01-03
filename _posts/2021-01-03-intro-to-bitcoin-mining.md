---
layout: post
title:  "The biggest misconception about Bitcoin Mining"
date:   2021-01-03
---

Miners’ role in Bitcoin is not to verify blocks. Users in the network verify blocks. I often see the same language circulating in news articles or videos suggesting miners “verify transactions, much like banks” or miners solve, “really hard math problems to keep Bitcoin secure.”  I don’t believe anyone writing these articles intends to misinform, but they often leave their readers with a sense that power in the Bitcoin network resides with miners and the rest of the network depends desperately on the miners and their super computers to solve hard math problems to verify the integrity of all transaction on the blockchain. In reality the Bitcoin miners by themselves have little to no power because they have to prove every single thing they do. Normal users in the Bitcoin network *actual* verify the miners work.  

A better way to describe miners’ role in the network is that they simply _propose_ new blocks. Miners race every ten minutes to group a number of pending transactions into a cryptographic cast of sorts. Miners all use the same simple computer program to transform the data from the selected pending transactions into a unique fingerprint of that data. 

| Transaction Data | Fingerprint |
| ----------- | ----------- |
| Transaction1,Transaction2<br/>,Transaction3… |  a10ea5adfcc15e3ead98a4fa8… |

This single operation takes a normal computer tens of nano seconds to run. It’s really a simple algorithm, no special calculus or algebra, just basic arithmetic. The first important thing about this algorithm is that it produces fingerprints that appear random, just random garbles of data. Miners run this same simple program, or algorithm, on transaction data over and over again in hopes that one of the iterations will produce a unique fingerprint that pattern matches a predetermined target(need to use a easier word), thus proving the miner did a certain amount of computation. So what does that mean exactly? Let’s take a step back.  

If you smashed your hands on the keyboard in front of you for a second what are the odds that you accidentally type the first few characters of your name? My name is JP. The odds of me typing a `j` followed by a `p` can be found by simply taking the odds of typing a `j` multiplied by the odds of typing a `p`. Since there are 26 letters on the standard QWERTY keyboard the the odds of me typing a `j` on any single random press is 1 in 26, or roughly 3.85%. The odds of hitting a `p` is the same 1:26. That means the odds of pressing a `j` then subsequently a `p` is `(1/26 * 1/26) = 1:676`. That means on average every 676 iterations of randomly smashing two letter keys on your keyboard you will type `jp`.  So, what does this have to do with Bitcoin mining?  If we return to the random string of letters and numbers produced by the simple mining algorithm we can ask questions about the probability of the presence of any particular pattern in that string of data. For example, what are the odds that any given fingerprint of data starts with four 0s in a row? `(1/36 * 1/36 * 1/36 * 1/36) = 1/1,679,616` Those aren’t great odds. You may notice that for every subsequent `0` that we want to find, the probability decreases by exactly 36 times or one order of magnitude. However, like I said earlier an average computer today can do that operation in nanoseconds so it wouldn’t take long at all to do 1,679,616 operations and if each one of those operations produced a random fingerprint we could be pretty confident that we’d produce a string of data starting with ‘0000’. Which leads me to the 2nd important thing about the Bitcoin mining algorithm. It only looks random. In fact, it’s entirely deterministic. That means a particular set of data will always produce the exact same garble of data, hence calling it a fingerprint.  So it only looks random because the fingerprint tells us absolutely nothing about the original data. So how do we simulate repeated randomness of the algorithm like smashing your keyboard over and over? The third quirk about these algorithms: Changing the initial data in the slightest produces an entirely different data fingerprint. Changing one single number or letter in our original data will produce an entirely new random looking fingerprint. 

| Data |	Fingerprint |
| ----------- | ----------- |
| hi |	98ea6e4f216f2fb4b69fff9b3a4<br/>4842c38686ca685f3f55dc48c5d3fb1107be4 |
| hi1	| 29fadcb4959312f53c8c0c46e92<br/>fe9ee36d4666a863235c50f1595575885c5d6 |
| hi2	| e094bc809626f0a401a40d75c56<br/>df478e546902ff812772c4594265203b23980 |
| hi3	| 1059dab4748aa33b86dad5ca973<br/>57bd322abaa558921255623fbddd066bb3315 |

So if we append a random chunk of data to the end of the transactions’ data and alter it before running the algorithm we can can get a new random looking fingerprint each time. Now, if I said I found a fingerprint starting with five `0s` by adding numbers to the end of the string `JP` you can verify that I ran the algorithm approximately `36^5` or 64,339,296,875 times by simply taking my starting data and running it through the algorithm a single time and see that it gives you a fingerprint starting with five zeros. This is my proof of work:

|Data	| Fingerprint |
| ----------- | ----------- |
| JP4641085 |	000001e04bfb6ba9de76b<br/>050d8eb76e909e1c771b67c4c8a70757448648978ce |

Because of the unique properties of this kind of algorithm anyone can verify that I indeed did the work required to achieve a fingerprint starting with five `0s`(You can verify this yourself [here:](https://emn178.github.io/online-tools/sha256.html).  
