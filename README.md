# 24-Points-Webpage-Game

> "Make 24 points" is one of Kennard's most favorite games, which is also regarded as a game of intelligence. 
> The rule is simple : Given 4 poker cards, try to make "24" with "+ - \* /" operators. Kennard wanted to
> share the game with his friends, and he wrote an online webpage for this.

------

### Game Demo
+ New Version

![new](https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsNew.png)

+ Old Version

![old](https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsOld.png)

+ Grade Board

![grade](https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsGrade.png)

------

### Development Environment

| Description | Specification |
|:---:|:---:|
| System | Windows 10 |
| Language | HTML, CSS, Javascript |
| IDE | Visual Studio Code 1.46.0 |

------

### Some Tips
+ Play in online environment
  > https://kennardwang.github.io/24-Points-Webpage-Game/html/

+ Play in local environment
  > Please start game from **StartPage.html**. If you start from **Game.html**, you will get a static webpage.

+ About index.html
  > The Player Name/Password is **Kennard/WangYuyang**, otherwise you cannot login to the next page.

+ About StartPage.html
  > There are 2 types of mode
  > + Under **Normal** mode, the range of cards is **1~9**. ( A represents 1 )
  > + Under **Hard** mode, the range of cards is **1~13**. ( J represents 11, Q represents 12 and K represents 13 ) 
  > <br>
  >
  > There are also 2 types of form
  > + If you do not select the checkbox, you will enter into new form ( default ), which has more friendly GUI.
  > + If you select the checkbox, you will enter into old form, which means you need to play with keyboard.

+ About Game.html ( New Version )
  > 1. You need to choose 2 cards in order, then click corresponding operator button to calculate. For example, if you want to calculate **9/3**, you need to choose **9** first and then **3**. After clicking **/** button, the result will be recorded in **result1** ( a black box on your right ).
  > 2. The **result1** can also be used for calculation ( just like a card ), and you can get **result2** through the same way as **result1**. 
  > 3. By the way, you can cancel selected cards by clicking them once again as long as you do not click operator button before. 
  > 4. You can use **Reset** button to clear all your choice and calculated results as well as reset all the cards. 
  > 5. If you find yourself have no idea to this question, use **Skip** to jump to the next question. After all, we cannot guarantee that all the questions have answers.
  > 6. If your answer is correct, you will get 24 points !!

+ About GameOld.html ( Old Version )
  > 1. The input must follow this format: For each step, you must add parenthesis to tell clearly which operation executes first. Although "\*" and "/" has higher priority than "+" and "-", you still need to add parenthesis. 
  > 2. For example, if you want to compute **11+13**, you need to input **(11+13)** instead. Likewise, you need use **((3\*8)+2)** to represent **3*8+2**. Further more, the answer to **3, 11, 1, 11** should be **((11+11)+(3-1))**, you can check your answer by counting pairs of parenthesis. 
  > 3. Additionally, space is not allowed in your answer. 
  > 4. If your answer is correct, you will get 24 points !!

+ About Grade.html
  > In this page, you can see grades got by excellent and intelligent players. Click **sort** to show results in 3 different orders: **Name Alphabetical**, **Age Ascending** and **Point Descending**.

------

### License
+ [MIT License](https://github.com/KennardWang/24-Points-Webpage-Game/blob/master/LICENSE)

------

### Author
+ Kennard Wang ( 2020.5.20 )
