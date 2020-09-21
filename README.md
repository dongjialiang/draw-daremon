# Draw Daremon

画一个哆啦A梦.

### 画哆啦A梦的步骤

根据《画哆啦A梦》的歌词内容步骤绘制哆啦A梦

| 圆圈中一点 | 圆圈中一点 | 豆子发芽了 |
|:---:|:---:|:---:|
| ![LeftEye][leftEye] | ![RightEye][rightEye] | ![Nose][nose] |
| 圆圆的花盆 | 圆圆的花盆 | 六月六日的飞碟 |
| ![Face][face] | ![Head][head] | ![Hand-and-bell][hand-and-bell] |
| 左飞一次 | 右飞一次 | 落了下来 |
| ![LeftCollar][leftCollar] | ![RightCollar][rightCollar] | ![Body][body] |
| 两个池塘,建成了 | 池塘上浮着船 | 空中的弯月,升起来了 |
| ![Foot][foot] | ![Belly-and-treasureBag][belly-and-treasureBag] | ![Mouth][mouth] |
| 再加上胡须,就是哆啦A梦 | 给哆啦A梦上色 | |
| ![Mousetache][mousetache] | ![IsColor][isColor] | |

### 使用方法

```html
    <script type="module">
        import { init } from './src/index.js'; // 导入初始化方法
        init(10); // 传入最大进度条数值，该值越小绘制速度越快
    </script>
```

### 启动项目

```powershell
    npm run start
```

### 开发项目

```powershell
    npm run dev
```

[leftEye]: src/assets/leftEye.gif
[rightEye]: src/assets/rightEye.gif
[nose]: src/assets/nose.gif
[face]: src/assets/face.gif
[head]: src/assets/head.gif
[hand-and-bell]: src/assets/hand-and-bell.gif
[leftCollar]: src/assets/leftCollar.gif
[rightCollar]: src/assets/rightCollar.gif
[body]: src/assets/body.gif
[foot]: src/assets/foot.gif
[belly-and-treasureBag]: src/assets/belly-and-treasureBag.gif
[mouth]: src/assets/mouth.gif
[mousetache]: src/assets/moustache.gif
[isColor]: src/assets/isColor.png
