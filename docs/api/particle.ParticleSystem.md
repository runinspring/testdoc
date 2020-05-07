---
id: particle.ParticleSystem
---
**包** &nbsp;&nbsp; particle
**类**  &nbsp;&nbsp; public class ParticleSystem
**子类** &nbsp;&nbsp; [particle.GravityParticleSystem](http://docs.egret.com/feather/docs/api/particle.GravityParticleSystem)

## 公共属性
属性  |
---- | 
[emissionRate](#emissionrate) : [number](global.Types#number)<br/>表示粒子出现间隔，单位毫秒，取值范围(0,Number.MAX_VALUE]|
[emissionTime](#emissiontime) : [number](global.Types#number)<br/>表示粒子出现总时间，单位毫秒，取值范围(0,Number.MAX_VALUE]，-1表示无限时间|
[emitterBounds](#emitterbounds) : [egret.Rectangle](http://docs.egret.com/engine/docs/api/egret.Rectangle)<br/>表示当前粒子系统中发射粒子的渲染边界范围，使用以发射点为基准的坐标系|
[emitterX](#emitterx) : [number](global.Types#number)<br/>表示粒子出现点X坐标，取值范围[-Number.MAX_VALUE,Number.MAX_VALUE]|
[emitterY](#emittery) : [number](global.Types#number)<br/>表示粒子出现点Y坐标，取值范围[-Number.MAX_VALUE,Number.MAX_VALUE]|
[maxParticles](#maxparticles) : [number](global.Types#number)<br/>表示粒子系统最大粒子数，超过该数量将不会继续创建粒子，取值范围[1,Number.MAX_VALUE]|
[particleClass](#particleclass) : [any](global.Types#any)<br/>表示粒子类，如果设置创建粒子时将创建该类|
[texture](#texture) : [egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture)<br/>表示粒子所使用的纹理|
## 公共方法
方法  |
---- |
[ParticleSystem](#particlesystem)(texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture),emissionRate:[number](global.Types#number))<br/>|
[advanceParticle](#advanceparticle)(particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle),dt:[number](global.Types#number)):[void](global.Types#void)<br/>|
[changeTexture](#changetexture)(texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture)):[void](global.Types#void)<br/>更换粒子纹理|
[initConfig](#initconfig)(emissionRate:[number](global.Types#number),emitterX:[number](global.Types#number),emitterY:[number](global.Types#number)):[void](global.Types#void)<br/>|
[initParticle](#initparticle)(particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle)):[void](global.Types#void)<br/>|
[onPropertyChanges](#onpropertychanges)():[void](global.Types#void)<br/>|
[setCurrentParticles](#setcurrentparticles)(num:[number](global.Types#number)):[void](global.Types#void)<br/>|
[start](#start)(duration:[number](global.Types#number)):[void](global.Types#void)<br/>开始创建粒子|
[stop](#stop)(clear:[boolean](global.Types#boolean)):[void](global.Types#void)<br/>停止创建粒子|
### 属性详细信息
### emissionRate
emissionRate : [number](global.Types#number)
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子出现间隔，单位毫秒，取值范围(0,Number.MAX_VALUE]
### emissionTime
emissionTime : [number](global.Types#number) = -1
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子出现总时间，单位毫秒，取值范围(0,Number.MAX_VALUE]，-1表示无限时间
### emitterBounds
emitterBounds : [egret.Rectangle](http://docs.egret.com/engine/docs/api/egret.Rectangle)
* **支持版本:**all
* **运行平台**:Web,Native

表示当前粒子系统中发射粒子的渲染边界范围，使用以发射点为基准的坐标系
### emitterX
emitterX : [number](global.Types#number) = 0
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子出现点X坐标，取值范围[-Number.MAX_VALUE,Number.MAX_VALUE]
### emitterY
emitterY : [number](global.Types#number) = 0
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子出现点Y坐标，取值范围[-Number.MAX_VALUE,Number.MAX_VALUE]
### maxParticles
maxParticles : [number](global.Types#number) = 200
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子系统最大粒子数，超过该数量将不会继续创建粒子，取值范围[1,Number.MAX_VALUE]
### particleClass
particleClass : [any](global.Types#any) = null
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子类，如果设置创建粒子时将创建该类
### texture
texture : [egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture)
* **支持版本:**all
* **运行平台**:Web,Native

表示粒子所使用的纹理
## 方法详细信息
### ParticleSystem()
public ParticleSystem(texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture),emissionRate:[number](global.Types#number))
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture)
  * emissionRate:[number](global.Types#number)



### advanceParticle()
public advanceParticle(particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle),dt:[number](global.Types#number)):[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle)
  * dt:[number](global.Types#number)



### changeTexture()
public changeTexture(texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture)):[void](global.Types#void)
更换粒子纹理
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * texture:[egret.Texture](http://docs.egret.com/engine/docs/api/egret.Texture) - 新的纹理



### initConfig()
public initConfig(emissionRate:[number](global.Types#number),emitterX:[number](global.Types#number),emitterY:[number](global.Types#number)):[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * emissionRate:[number](global.Types#number)
  * emitterX:[number](global.Types#number)
  * emitterY:[number](global.Types#number)



### initParticle()
public initParticle(particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle)):[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * particle:[particle.Particle](http://docs.egret.com/feather/docs/api/particle.Particle)



### onPropertyChanges()
public onPropertyChanges():[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native


### setCurrentParticles()
public setCurrentParticles(num:[number](global.Types#number)):[void](global.Types#void)
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * num:[number](global.Types#number)



### start()
public start(duration:[number](global.Types#number)):[void](global.Types#void)
开始创建粒子
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * duration:[number](global.Types#number) - 粒子出现总时间



### stop()
public stop(clear:[boolean](global.Types#boolean)):[void](global.Types#void)
停止创建粒子
* **支持版本:**all
* **运行平台**:Web,Native
* **参数**
  * clear:[boolean](global.Types#boolean) - 是否清除掉现有粒子



