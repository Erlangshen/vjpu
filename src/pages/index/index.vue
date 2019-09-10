<template>
  <div @click="clickHandle">

    <div class="userinfo" >
      <van-checkbox-group :value="result" @change="onChangeGroup" max="2">
<!--        <van-checkbox :value="isCheck" @change="onChange" name="ck" checked-color="#07c160" shape="square">check</van-checkbox>-->
<!--        <van-checkbox :value="checked" @change="onChange2" name="ck2" checked-color="#cc66ff">check2</van-checkbox>-->
        <van-checkbox name="ck" checked-color="#07c160" shape="square">check</van-checkbox>
        <van-checkbox name="ck2" checked-color="#cc66ff">check2</van-checkbox>
        <van-checkbox name="ck3" checked-color="yellow">check3</van-checkbox>
      </van-checkbox-group>
      <p>选中了：{{result}}</p>
    </div>
    <van-popup round :show="isShow" position="bottom" custom-class="aaaa">
      <van-row>
        <van-col span="4" custom-class>span:4</van-col>
        <van-col span="10" offset="5">span:10 offset:5</van-col>
      </van-row>
    </van-popup>
    <van-checkbox-group :value="values" @change="groupclick">
      <van-cell-group title="同学">
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="'蔡徐坤 '+item"
          clickable
          @click="toggle"
          :data-name="item">
          <van-checkbox :name="item"/>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        },
        isShow: false,
        isCheck: false,
        checked: false,
        list: ['a', 'b', 'c'],
        values: [],
        result: []
      }
    },

    components: {
      card
    },

    methods: {
      biwh () {
        this.isShow = true
      },
      onChange (event) {
        this.isCheck = event.mp.detail
      },
      onChange2 (event) {
        console.log('2.' + this.checked)
        this.isCheck = event.mp.detail
      },
      onChangeGroup (event) {
        console.log('group.' + event.mp.detail)
        this.result = event.mp.detail
      },
      groupclick (event) {
        // this.values = event.mp.detail
      },
      toggle (event) {
        console.log(event.mp.currentTarget.dataset.name)
        let val = event.mp.currentTarget.dataset.name
        let index = this.values.indexOf(val)
        if (index <= -1) {
          this.values.push(val)
        } else {
          this.values.splice(index, 1)
        }
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  .custom-class {
    background: #cc66ff;
  }

  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128 rpx;
    height: 128 rpx;
    margin: 20 rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .all {
    width: 7.5rem;
    height: 1rem;
    background-color: blue;
  }

  .all:after {
    display: block;
    content: '';
    clear: both;
  }

  .left {
    float: left;
    width: 3rem;
    height: 1rem;
    background-color: red;
  }

  .right {
    float: left;
    width: 4.5rem;
    height: 1rem;
    background-color: green;
  }

</style>

<style>
  .aaaa{
    background: #cc66ff;
    color: green;
  }

</style>
