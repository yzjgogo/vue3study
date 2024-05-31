<template>
  <div>
    <button @click="doIsProxy">isProxy</button>
    <button @click="doIsReactive">isReactive</button>
    <button @click="doIsReadonly">isReadonly</button>
    <button @click="doToRaw">toRaw</button>
    
    <div style="background-color:yellow;padding:20px">
      <span>shallowReactive</span><br>
      <div>{{ sdInfo }}</div>
      <button @click="changeSDName">改浅层Reactive的名字</button>
      <button @click="changeSDHair">改浅层Reactive的头发</button>
    </div>
    
    <div style="background-color:green;padding:20px">
      <span>toRefs和toRef</span><br>

      <h2>info: {{ name }} - {{ age }} - {{ height }}</h2>
      <button @click="age++">修改age</button>
      <button @click="height = 1.89">修改height</button>
    </div>
    
    <div style="background-color:pink;padding:20px">
      <span>shallowRef</span><br>
      <div>{{ sdRefInfo }}</div>
      <button @click="changeSDRefName">改浅层Ref的名字-改不了</button>
      <button @click="changeSDRefHair">改浅层Ref的头发-改不了</button>
      <button @click="changeSDRefValue">改浅层Ref的value的指向</button>
    </div>
  </div>
</template>

<script>
import { reactive, readonly, isProxy, ref, isReactive, isReadonly, toRaw, toRefs, toRef,unref,shallowReactive,shallowRef } from 'vue'

export default {
  setup() {
    let info = reactive({
      name: '刘德华',
      age: 18,
      height: 1.88
    })

    let fruit = ref({
      name: '苹果'
    })

    let roInfo = readonly(info)

    /**
     isProxy方法是Vue 3特有的，它专门用于检查一个对象是否是Vue的响应式代理。这意味着isProxy只能用来判断一个对象是否通过Vue的reactive、readonly等方法创建的代理（似乎只能用于判断reactive、readonly创建的，ref创建的也不能判断），而不能用于检查普通的JavaScript Proxy对象
    */
    const doIsProxy = () => {
      console.log(`是不是一个代理对象：${isProxy(info)}`)//true
      console.log(`是不是一个代理对象：${isProxy(fruit)}`)//false
      console.log(`是不是一个代理对象：${isProxy(roInfo)}`)//true
    }

    /**
     判断对象是不是 reactive创建的响应式代理
     如果该代理是readonly创建的，但是readonly包裹的对象是由reactive创建的，也会返回true
    */
    const doIsReactive = () => {
      console.log(`是不是一个reactive对象：${isReactive(info)}`)//true
      console.log(`是不是一个reactive对象：${isReactive(fruit)}`)//false
      console.log(`是不是一个reactive对象：${isReactive(roInfo)}`)//true
    }

    /**
     判断对象是不是readonly创建的响应式代理
    */
    const doIsReadonly = () => {
      console.log(`是不是一个readonly对象：${isReadonly(info)}`)//false
      console.log(`是不是一个readonly对象：${isReadonly(fruit)}`)//false
      console.log(`是不是一个readonly对象：${isReadonly(roInfo)}`)//true
    }

    /***
     返回reactive和readonly修饰的原始对象
     
     ref修饰的能不能这样用？，看看我下面的输出，似乎toRaw(fruit.value)能输出原始对象
     */
    const doToRaw = () => {
      console.log(`获取响应式修饰的原始对象1：`, toRaw(info))
      console.log(`获取响应式修饰的原始对象2：`, toRaw(fruit), fruit.value, toRaw(fruit.value))
      console.log(`获取响应式修饰的原始对象3：`, toRaw(roInfo))
    }

    //shallowReactive，创建一个响应式代理，与reactive的区别是，它只跟踪自自身property的响应性，嵌套对象里的子对象不是响应式的
    // const sdInfo = reactive({//深度响应式，子对象head里的属性也是响应式的
    const sdInfo = shallowReactive({//浅层响应式，子对象head里的属性不是响应式的
      name:'郭富城',
      age:56,
      head:{
        hair:'头发'
      }
    })

    function changeSDName(){
      sdInfo.name = '黎明'
    }
    function changeSDHair(){
      //无法响应式改变，虽然值被改为'黄毛',但是template中没有响应式的更新
      sdInfo.head.hair= '黄毛'
    }


    //shallowReadonly 同理shallowReactive


    //直接解构的name和age不具有响应性,toRefs可以将reactive类型的代理对象的所有属性都转成ref类型，然后再解构，肯定就是ref类型了，肯定就有响应式了
    //toRef可以让reactive类型的代理对象的指定属性变成ref类型，
    // const { name, age } = info
    const { name, age } = toRefs(info)
    const height = toRef(info, "height")
    console.log('看看是不是变成了ref类型的代理', toRaw(name), age.value, toRaw(age.value))


    //isRef 判断是不是一个ref类型的响应式对象

    //unref获取一个ref类型对象的.value只，下面行中的unref(fruit)和fruit.value是等价的，
    //只是，如果fruit不是一个ref类型的对象，则返回其本身，unref等价于 val = isRef(val) ? val.value : val
    console.log("执行unref",unref(fruit),fruit.value)




    //shallowRef 与shallowReactive、shallowReadonly不同的是，只要shallowRef包裹的是一个对象，即使这个对象没有嵌套对象，对象的属性也不是响应式的，除非给sdRefInfo.value = newObj时才会触发响应式
    //参考：shallowRef介绍.md
    // const sdRefInfo = ref({//深度响应式，子对象head里的属性也是响应式的
      const sdRefInfo = shallowRef({//浅层响应式，子对象head里的属性不是响应式的
      name:'曾志伟',
      age:56,
      head:{
        hair:'绿毛'
      }
    })

    function changeSDRefName(){
      sdRefInfo.value.name = '黄秋生'
    }
    function changeSDRefHair(){
      //无法响应式改变，虽然值被改为'黄毛',但是template中没有响应式的更新
      sdRefInfo.value.head.hair= '黑毛'
    }
    function changeSDRefValue(){
      //无法响应式改变，虽然值被改为'黄毛',但是template中没有响应式的更新
      sdRefInfo.value = {name:'吴镇宇'}
    }


    return { doIsProxy, doIsReactive, doIsReadonly, doToRaw, name, age, height,sdInfo ,changeSDName,changeSDHair,sdRefInfo,changeSDRefName,changeSDRefHair,changeSDRefValue}
  }
}
</script>

<style scoped></style>

