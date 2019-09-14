## 版本

newClappr v1.0

## Demo
[demo地址](https://amhoho.github.io/newClappr/demo/)

国内用户初次打开时因github原因可能较慢，但视频源为国内。

## 作用

在pc端、移动端播放flv/hls/mp4等视频方案。

## 极简

仅需搞懂配置，即可上手。

## 配置

待完善

## 修改

本播放器为基于clappr修改的播放器，其修改的要点如下：

1.强制支持flv。

2.自动识别pc/mobile并提供相关对应的ui。

3.播放地址不再单一，以支持flv的优先播放flv,而后支持hls则播放fls,最后均不支持则播放mp4。

4.在微信/QQ内播放内可选对视频加宽48px，为了去除微信和QQ内video右上角的全屏按钮。

5.能自动播放的环境尽量自动播放。

6.可选是否加入p2p。

7.精简不必要的相关代码，降低js体积。


## 插件

-  clappr

项目：[clappr](https://github.com/clappr/clappr)

下载地址：[clappr](https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.js)

下载地址：[clappr纯h5版 v0.3.8（适合移动端）](https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.plainhtml5.js)


-  flv支持：flv.js+clappr-flvjs-playback.js

项目：[flv.js v1.5.00](https://github.com/bilibili/flv.js)

项目：[clappr-flvjs-playback.js(v1.0.0)](https://github.com/andrefilimono/clappr-flvjs-playback)


-  p2p支持：flv

项目：[p2pflv.js](https://github.com/SeaHaige/p2pflv.js)


-  p2p支持：hls

项目1：[hlsjs-p2p-engine](https://github.com/cdnbye/hlsjs-p2p-engine)

项目2：[clappr-p2phls-plugin](https://github.com/streamroot/clappr-p2phls-plugin)

项目2-附加：[clappr-p2phls-stats-plugin](https://github.com/flavioribeiro/clappr-p2phls-stats-plugin)


-  滚动报幕

项目：[clappr-marquee-overlay](https://github.com/Lethea/clappr-marquee-overlay)


-  文字水印

项目：[clappr-dynamic-text-overlay](https://github.com/Lethea/clappr-dynamic-text-overlay)


-  logo水印

项目：[clappr-logo-plugin](https://github.com/otmjka/clappr-logo-plugin)


-  进度缩图（适合点播，需先使用video-thumbnail-generator截图）

项目：[clappr-thumbnails-plugin](https://github.com/tjenkinson/clappr-thumbnails-plugin)


-  进度提示：如 主持人进场-节目开始-嘉宾来了-...

项目：[clappr-markers-plugin](https://github.com/tjenkinson/clappr-markers-plugin)


-  清晰度选择（标高超蓝）

项目：[clappr-markers-plugin](https://github.com/clappr/clappr-level-selector-plugin)


-  播放速度控制（慢快进）

项目1：[clappr-playback-rate-plugin](https://github.com/bikegriffith/clappr-playback-rate-plugin)

项目2：[clapper-playback-speed-plugin-extended](https://github.com/Lethea/clapper-playback-speed-plugin-extended)



-  srt字幕

项目：[Clappr-Subtitle](https://github.com/jmvtechnology/Clappr-Subtitle)


-  穿插广告

项目：[Clappr-Ads](https://github.com/jmvtechnology/Clappr-Ads)


-  右键上下文菜单

项目：[clappr-context-menu-plugin](https://github.com/joaopaulovieira/clappr-context-menu-plugin)



## 授权许可

采用MIT许可协议，在保留相关开发版权说明的情况下允许个人使用或商用。

@amhoho
