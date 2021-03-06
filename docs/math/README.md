---
title: 数学
date: 2022-05-10 16:46:37
permalink: /math/
categories: 
  - 《数学》
tags: 
  - 数学
author: 
  name: scucat
  link: https://github.com/scucat
---

::: tip Math
数学是科学的皇后
:::

【微积分】
- 基础概念（极限、可微与可导、全导数与偏导数）：只要学微积分，就必须要明白的概念，否则后面什么都无法继续学习。
- 函数求导：求导是梯度的基础，而梯度是 AI 算法的基础，因此求导非常重要！必须要搞清楚概念，并学会常见函数的导函数求法。
- 链式法则：符合函数求导法则，反向传播算法的理论基础。
- 泰勒公式和费马引理：这两者也是梯度下降法的基础组成，重要程度与求导相同。
- 微分方程及其求解：很重要，是部分机器学习模型求解的必备知识。
- 拉格朗日乘子法和对偶学习：理解 SVM/SVR 的理论基础。SVM/SVR 作为机器学习模型的常用“中坚力量”，其重要程度不言而喻。

【概率统计】
- 简单统计量（个数、最大值、最小值、中位数、均值、方差）及其物理意义：概率统计的概念基础。
- 随机和抽样：随机——概率统计成立的基础；抽样——统计的方法。
- 频率和概率，以及概率的基本概念：搞清什么是概率，它和频率的区别与联系。
- 几种常见的概率分布及公式（平均分布、二项分布、正态分布……）
- 参数估计：只知道大致的分布，不知道具体的参数怎么办？没关系，我们可以根据估计一下。其中最重要的是极大似然估计。
- 中心极限定理：如果不知道某事物的概率分布该怎么办?没关系，就当它符合正态分布好了。可是为什么能这样近似呢?因为我们有中心极限定理呀。
- 假设验证：到底假设得对不对呢？我们根据样本来验证一下。
- 贝叶斯公式：太重要啦！是它使得我们可以根据先验概率来预测后验概率。而朴素贝叶斯公式自己就是朴素贝叶斯模型本身啊。
- 回归分析：想想那么多名字里有“回归”的模型吧!
- 状态转移网络：概率链、隐马尔可夫模型和条件随机场。

【线性代数】
- 向量与标量：用向量和标量表示事物特征的差别是什么？
- 向量空间，向量性质及向量的几何意义：所谓高维低维指的是什么？同一个向量能否存在于不同的向量空间里？向量的移动、转向和拉伸是如何做到的？
- 线性函数：什么是线性函数，它具备怎样的性质？
- 矩阵和矩阵运算：矩阵出现的目的是什么？掌握矩阵的基础运算（与常数/向量/矩阵的加法和乘法）。
- 特殊矩阵（方阵、实对称矩阵、（半）正定/负定矩阵等）及其性质：根据不同的性质，我们可以划分出哪些特殊矩阵，它们都有哪些特殊性质？
- 特征值和特征向量：定义、性质，以及特征值求解。
- 用矩阵求解微分方程。
- 正交：什么是正交？函数的正交，向量的正交，和超平面的正交分别是如何形式化表达的，又具备怎样的物理意义。

【最优化方法】
- 凸函数与极值：搞清楚什么是凸函数，凸函数与极值的关系，极值和最值的关系等。
注意：国内不同教科书对于“凸”的定义存在不一致的情况，有些书上把其他书上说的“凸函数”叫做“凹函数”。
直观而言，我们一向说的“凸函数”是那类一维自变量情况下看起来像个“U”，二维自变量下像个碗的那种函数。

- 最优化：什么是最优化问题？什么是最优化方法？无限制条件和有限制条件下的最优化方法基本原理分别是什么？
- 梯度下降法：最基础最常用的最优化方法，以及其他若干最优化方法的基础，务必全面掌握。
其他最优化算法：了解其他一些常用最优化方法，例如，牛顿法、共轭梯度法、线性搜索算法、模拟退火算法、遗传算法等。