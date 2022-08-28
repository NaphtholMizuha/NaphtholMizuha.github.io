---
tags:
    - 配置
    - 博客
author:
    'Naphthol Mizuha'
title:
    '配置 Mkdocs-Material 个人博客过程'
---

不得不说 Mkdocs 是一个非常好的静态网站框架，Material for Mkdocs 是其中一个很有极客风的主题
本博客即是借助这两个工具搭建而成的。这篇文章用来简单记录一下在本博客花费一晚上的配置过程。

## 下载脚手架

Material for Mkdocs 提供了非常好用的、基于 Python 的脚手架，这使得框架几乎可以全平台使用。
安装也很简便：

```sh
pip install mkdocs-material
```

安装完之后只需要配置自动生成的 `mkdocks.yml` 就可以实现自定义了！

## 颜色配置

Material for Mkdocs 默认的颜色是蓝色，虽然确实很好看，但是不太符合个人的喜好，
所以我打算更换主题色以及强调色。很不幸，预置配色中并没有我喜欢的，因此我只能通过导入 CSS 
样式表的功能来进行配置。

### 编写颜色 CSS

在 `docs` 文件夹下新建一个 CSS 文件（就叫他 `theme.css` 吧），添加以下内容：

```css
[data-md-color-scheme="naph"] {
    --md-primary-fg-color:  #880E4F;
    --md-typeset-a-color:   var(--md-primary-fg-color);
    --md-accent-fg-color:   #57bcb5;
}
```

这样就在配置中将主题色设置为酒红色、而强调色设为青绿色。

### 导入颜色 CSS

光写是不行的，还需要在 `mkdocks.yml` 中配置自定义主题，具体如下：

```yaml
theme:
    palette: 
        scheme: naph
```

别忘了导入文件

```yaml
extra_css:
  - theme.css
```

然后就能看到漂亮的酒红色了！

## 字体配置

好看的字体是好看的博客的重要一环，可惜我想要的字体也不在预设中，
因此首先去获得 `.woff2` 格式的字体文件，具体字体为：

- 中/西正文字体: HarmonyOS Sans
- 等宽字体：Cascadia Code

!!! info 关于字体
    这两款都是开源的免费商用字体，鸿蒙字体的渲染很好看，微软家的编程字体在高辨识度中又带有那么一些骚气。

首先要在刚才的 `theme.css` 中导入字体：

```css
@font-face {
    font-family: 'HarmonyOS Sans SC';
    src: url('../fonts/HarmonyOS_Sans_SC_Regular.woff2');
    font-weight: normal;
}



@font-face {
    font-family: 'HarmonyOS Sans SC';
    src: url('../fonts/HarmonyOS_Sans_SC_Bold.woff2');
    font-weight: bold;
}



@font-face {
    font-family: 'Cascadia Code';
    src: url('../fonts/CascadiaCode.woff2');
}

:root {
    --md-text-font: 'HarmonyOS Sans SC';
    --md-code-font: 'Cascadia Code';
}
```

记得把 `mkdocs.yml` 文件的字体设置去掉：

```yml
theme:
    font: false
```

这样字体就设置好了，不过由于鸿蒙字体体积比较大，所以第一次进入博客需要花几秒来加载字体......

## 真正的博客

### 启用

其实 `Mkdocs` 原先是一个纯正的文档网站框架，并不适合作为博客，但是一个插件
—— `blogging` 改变了一切。只需要在 `mkdocs.yml` 中加上小小一句，一切就会不同：

```yaml
plugins:
- blogging:
      locale: zh_CN
      dirs:
        - blog
      title:
      features:
        tags:
          index_page: tags.md
          insert: top
      theme: 
        name: card
        time_format: '%Y-%m-%d %H:%M:%S'
        meta_time_format: '%Y-%m-%d %H:%M:%S'
```

只要将所有的博客 md 文件放在 `docs/blog` 文件夹下面就可以作为博文。

### 目录页

在 `docs` 文件夹下的某个文件只要包含了 `exclude_from_blog: true` 的元数据
以及 `{ { blog_content } }` 就可以作为目录。


### 标签

文件元信息中的 `tag` 字段可以表示标签，并且在 `{ { tag_content } }` 中作为标签索引展示

## 还有一些零碎...

### 数学支持

可以参考 [这个教程](https://squidfunk.github.io/mkdocs-material/reference/mathjax/) 配置 MathJax，KaTex的支持太烂了，不推荐使用。

### 个人名片

其实是用 [提示框扩展](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#__tabbed_2_1)
以及 [行内图片](https://squidfunk.github.io/mkdocs-material/reference/images/#lightbox) 
组成的。