# 24-Points-Webpage-Game

<div align="center">
  <img src="https://img.shields.io/github/stars/KennardWang/24-Points-Webpage-Game" />
  <img src="https://img.shields.io/github/license/KennardWang/24-Points-Webpage-Game" />
  <img src="https://img.shields.io/badge/maintenance-No-red" />
</div>

<br>

<div align=center>
  <img src="https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsNew.png" width="32%" />
  &nbsp;
  <img src="https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsGrade.png" width="32%" />
  &nbsp;
  <img src="https://kennardwang.github.io/ImageSource/24-Points-Webpage-Game/24pointsOld.png" width="32%" />
</div>

<br>

It is a project of MUST course CN105-Web Technology, which is a puzzle game that uses 4 numbers and 4 operators (**+ - \* /**) to calculate 24.



## Table of Contents

- [Development Environment](#development-environment)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)



## Development Environment

| <!-- --> | <!-- --> |
|:---:|:---:|
| System | Windows 10 x64 |
| Language | HTML, CSS, Javascript |
| IDE | Visual Studio Code 1.46.0 |



## Install
```
git clone https://github.com/KennardWang/24-Points-Webpage-Game.git
```



## Usage

You can play [online](https://kennardwang.github.io/24-Points-Webpage-Game/html/) or play in a local environment. If playing locally, please start from **StartPage.html** rather than **Game.html**, otherwise, you will get a static webpage. The description of files are following:

+ index.html
  > It is a login page. The Player Name/Password is **Kennard/WangYuyang**.

+ StartPage.html
  > There are two modes
  > + Under **Normal** mode, the range of cards is **1~9**. (A = 1)
  > + Under **Hard** mode, the range of cards is **1~13**. (A = 1, J = 11, Q = 12, K = 13) 
  > <br>
  >
  > There are also two versions
  > + Select the new version (default) without ticking the checkbox. This version has a more friendly GUI, and users can play by mouse-clicking.
  > + Select the old version by ticking the checkbox. In this version, users need to play with keyboard typing.

+ Game.html (new version)
  > 1. Users need to choose 2 cards in order, and then click operator button to calculate. For example, calculating "9/3", please choose "9" first and then "3". After clicking "/" button, the result will be recorded in **result1** (a black box on the right).
  > 2. The **result1** can also be selected for calculation like a card, and you can get **result2** in the same way as **result1**. 
  > 3. By the way, the selected card can be cancelled by clicking them once again as long as not clicking operator button. 
  > 4. Users can click **Reset** button to clear all choices and calculated results as well as reset all the cards. 
  > 5. If having no idea about current puzzle, use **Skip** to jump to the next puzzle. After all, we cannot guarantee that all the puzzles have answers.
  > 6. Users will get 24 points if their answer is correct.

+ GameOld.html (old version)
  > 1. The input must follow this format: For each step, users must add parenthesis to tell clearly which operation executes first. Although "\*" and "/" has higher priority than "+" and "-", but still need to add parenthesis. For example, if wanting to compute "11+13", users need to input "(11+13)" instead. Likewise, please use "((3\*8)+2)" to represent "3*8+2". Furthermore, the answer to "3, 11, 1, 11" should be "((11+11)+(3-1))". A good way to check the answer is checking pairs of parenthesis. 
  > 2. Additionally, space is not allowed in the answer. 
  > 3. Users will get 24 points if their answer is correct.

+ Grade.html
  > This page demonstrates excellent grades got by intelligent players. Click **sort** to show results in 3 different orders: **Name Alphabetical**, **Age Ascending** and **Point Descending**.



## Maintainers

[@KennardWang](https://github.com/KennardWang).



## Contributing

Feel free to [open an issue](https://github.com/KennardWang/24-Points-Webpage-Game/issues) or submit [PRs](https://github.com/KennardWang/24-Points-Webpage-Game/pulls).



## License

[MIT](LICENSE) © Kennard Wang. ( 2020.5.20 )
