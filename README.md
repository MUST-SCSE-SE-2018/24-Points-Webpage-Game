# 24-Point-Game_Webpage
### Game Demo
+ New Version

![new](https://kennardwang.github.io/ImageSource/24-Points-Game_Webpage/24pointsNew.png)

+ Old Version

![old](https://kennardwang.github.io/ImageSource/24-Points-Game_Webpage/24pointsOld.png)

+ Grade Board

![grade](https://kennardwang.github.io/ImageSource/24-Points-Game_Webpage/24pointsGrade.png)

------
### Development Environment

| Description | Specification |
|:---:|:---:|
| System | Windows 10 |
| Language | HTML, CSS, Javascript |
| IDE | Visual Studio Code 1.46.0 |

------
### How to play ?
+ Quick Start : https://kennardwang.github.io/24-Points-Game_Webpage/

------
### Attention
+ Please start game on StartPage.html. If you enter Game.html page directly, you will find it is just a static webpage!
+ In index.html
  > The only Player Name/Password is **Kennard/WangYuyang**, otherwise you probably cannot go to the next page! 
+ In StartPage.html
  > Different mode will generate different cards. In Normal mode, the range of cards is **1~9**. But under Hard mode, the range is **1~13**. ( J represents 11, Q represents 12 and K represents 13 ) If you choose old form, it means you want to play with keyboard input.
+ In Game.html ( New Version )
  > First, you need to choose 2 numbers to compute in order, then click corresponding operator button. For example, if you want to compute **9/3**, you need to choose **9** first and then choose **3**, after clicking **/** button, the result will be recording in **result1**, and then result1 can be used to next step because it is a button, but if you don’t choose result1 in next step, for example, you select **4**,**9** and **+**, the result will be recorded in **result2** and result2 can be used as result1. By the way, you can cancel selected cards by clicking one more time if you don’t click operator button before. ***Reset*** button will clear all your choice and reset the result. If you find you have no idea to this question, use ***Skip*** to next question, after all, not all questions have corresponding answers.
+ In GameOld.html ( Old Version )
  > The answer input must follow the format: For ordered step, you must use parenthesis to tell js about computing order regardless of what operator you use. For example, if you want to compute **11+13**, you need to input **(11+13)** instead. Likewise, you need use **((3*8)+2)** to represent **3*8+2**. Further more, the normal expression of Card **3, 11, 1, 11** should be **((11+11)+(3-1))**, you can check your answer by counting numbers of parenthesis(should be 3 pairs). Additionally, space is not allowed in your answer. If your answer is correct you can get 24 points for prize!
------
### License
+ [MIT License](https://github.com/KennardWang/24Points_Webpage/blob/master/LICENSE)
------
### Author
+ Kennard Wang ( 2020.5.20 )
------
