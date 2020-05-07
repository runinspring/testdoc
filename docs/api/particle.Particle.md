---
id: particle.Particle
---
**包** &nbsp;&nbsp; particle
**类**  &nbsp;&nbsp; public class Particle
**子类** &nbsp;&nbsp; [particle.GravityParticle](http://docs.egret.com/feather/docs/api/particle.GravityParticle)

## 公共属性
属性  |
---- | 
[alpha](#alpha) : [number](global.Types#number)<br/>表示粒子的 Alpha 透明度值|
[blendMode](#blendmode) : [number](global.Types#number)<br/>表示粒子的混合模式|
[currentTime](#currenttime) : [number](global.Types#number)<br/>表示粒子当前存活时间，以毫秒为单位，取值范围(0,Number.MAX_VALUE]，该值超过 totalTime 时，粒子将会被销毁|
[rotation](#rotation) : [number](global.Types#number)<br/>表示 Particle 实例距其原始方向的旋转程度，以度为单位|
[scale](#scale) : [number](global.Types#number)<br/>表示从注册点开始应用的对象的缩放比例（百分比）|
[totalTime](#totaltime) : [number](global.Types#number)<br/>表示粒子的存活总时间，以毫秒为单位，取值范围(0,Number.MAX_VALUE]|
[x](#x) : [number](global.Types#number)<br/>表示 Particle 实例相对于父级本地坐标的 x 坐标|
[y](#y) : [number](global.Types#number)<br/>表示粒子实例相对于父级本地坐标的 y 坐标|
## 公共方法
方法  |
---- |
[Particle](#particle)()<br/>|
[reset](#reset)():[void](global.Types#void)<br/>|
### 属性详细信息
### alpha
alpha : [number](global.Types#number) = 1
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子的 Alpha 透明度值
### blendMode
blendMode : [number](global.Types#number)
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子的混合模式
### currentTime
currentTime : [number](global.Types#number) = 0
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子当前存活时间，以毫秒为单位，取值范围(0,Number.MAX_VALUE]，该值超过 totalTime 时，粒子将会被销毁
### rotation
rotation : [number](global.Types#number) = 0
* **支持版本:**all
* **运行平台**:Web,Native

表示 Particle 实例距其原始方向的旋转程度，以度为单位
### scale
scale : [number](global.Types#number) = 1
* **支持版本:**all
* **运行平台**:Web,Native

表示从注册点开始应用的对象的缩放比例（百分比）。
### totalTime
totalTime : [number](global.Types#number) = 1000
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子的存活总时间，以毫秒为单位，取值范围(0,Number.MAX_VALUE]
### x
x : [number](global.Types#number)
* **支持版本:**all
* **运行平台**:Web,Native

表示 Particle 实例相对于父级本地坐标的 x 坐标。
### y
y : [number](global.Types#number)
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子实例相对于父级本地坐标的 y 坐标。
## 方法详细信息
### Particle()
public Particle()
* **支持版本:**all
* **运行平台**:Web,Native


### reset()
public reset():[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native


