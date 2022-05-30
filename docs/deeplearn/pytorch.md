---
date: 2022-05-30 10:48:03
categories: 
  - 深度学习
tags: 
  - pytorch
author: 
  name: scucat
  link: https://github.com/scucat
---

# pytorch

## pytorch安装
```bash
import torch

ModuleNotFoundError: No module named 'torch'
```

进入[官网](https://pytorch.org/get-started/locally/)
![](https://raw.githubusercontent.com/scucat/images/master/20220530105457.png)

复制安装命令：
```bash
conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch
```