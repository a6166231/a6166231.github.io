---
title: "[jar包]git管理mc多版本的多存档 "
time: 2024-6-25
layout: post
excerpt: "通过java实现git对仓库的pull和commit，并对minecraft的多存档进行管理，目标是每次开服务器时自动获取远端最新存档，每次关闭自动保存并提交存档。"
---
<div class='blog-title'>[jar包]git管理mc多版本的多存档 </div>

---


HMCL启动器对于多版本的存档分离很友好，但是当版本多了/存档多了，这时候在加上如果我有2个地方都需要同步存档。
比如在家里玩过之后要同步到公司/或者在公司玩过之后要同步到家，这时候就需要一个库来维护存档。
但是一个仓库，同步多个version下的saves本身是不支持的，这时候就需要一个工具来进行处理。

1. HMCL启动器中的游戏设置可以自定义一些高级的自定义命令设置
<a target='_blank' href='../../../imgs/java/mc/1.png'><img src="../../../imgs/java/mc/1.png"></a>
