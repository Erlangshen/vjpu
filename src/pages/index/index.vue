<template >
  <div class="postloan">
    <van-tabs :active="active" @change="tabChange" sticky animated>
      <van-tab title="van-checkbox">
        <div class="userinfo">
          <van-checkbox-group :value="result" @change="onChangeGroup" max="2">
            <!--        <van-checkbox :value="isCheck" @change="onChange" name="ck" checked-color="#07c160" shape="square">check</van-checkbox>-->
            <!--        <van-checkbox :value="checked" @change="onChange2" name="ck2" checked-color="#cc66ff">check2</van-checkbox>-->
            <van-checkbox name="ck" checked-color="#07c160" shape="square">check</van-checkbox>
            <van-checkbox name="ck2" checked-color="#cc66ff">check2</van-checkbox>
            <van-checkbox name="ck3" checked-color="yellow">check3</van-checkbox>
          </van-checkbox-group>
          <p>选中了：{{result}}</p>
        </div>
      </van-tab>
      <van-tab title="van-row" color="#F2D95E0">
        <div>
          <van-row>
            <van-col span="4" custom-class>span:4</van-col>
            <van-col span="10" offset="5">span:10 offset:5</van-col>
          </van-row>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <view>2</view>
          <van-row>
            <van-col span="4" custom-class>span:4</van-col>
            <van-col span="10" offset="5">span:10 offset:5</van-col>
          </van-row>

        </div>
      </van-tab>
      <van-tab title="van-cell-group">
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
      </van-tab>
      <van-tab title="van-search">
        <van-search
          :value="val"
          placeholder="please input search words"
          use-action-slot
          @cancel="onCancel"
          @change="onChangeVal"
          @search="onSearch"
          label="关键字"
          shape="round"
        >
          <view
            slot="action"
            @tap="onSearch2"
          >search
          </view>
        </van-search>
      </van-tab>
      <van-tab title="跳转"><a href="/pages/counter/main" class="counter">去往Vuex示例页面</a></van-tab>
      <van-tab title="装逼6">装逼6</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    config: {
      navigationBarTitleText: '装逼'
    },
    data () {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        },
        isShow: true,
        isCheck: false,
        checked: false,
        list: ['a', 'b', 'c'],
        values: [],
        result: [],
        val: '',
        active: 1
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
      },
      onCancel (e) {
        console.log(e.mp.detail)
      },
      onSearch (e) {
        console.log(e.mp.detail)
        this.val = e.mp.detail
      },
      onChangeVal (e) {
        this.val = e.mp.detail
        console.log(this.val)
      },
      onSearch2 () {
        wx.showToast({
          title: this.val, // 提示的内容,
          icon: 'success', // 图标,
          duration: 2000, // 延迟时间,
          mask: true, // 显示透明蒙层，防止触摸穿透,
          success: res => {
            console.log(res)
          }
        })
      },
      tabChange (e) {
        wx.showToast({
          title: `装逼模式:${e.mp.detail.index + 1}\n${e.mp.detail.title}`,
          icon: 'none'
        })
      }
    },

    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  .postloan {
  }
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
  .aaaa {
    background: #cc66ff;
    color: green;
  }
  .postloan .van-search__content--round{
    height: .65rem;
    line-height: .65rem;
    border-radius: .1rem;
    text-align: center;
    font-family: Arial;
  }
  .postloan .van-field__input {
    width: 100%;
  }
  .postloan .field-index--van-field {
    padding: 0.1rem 0 0 0 !important;
  }
  .postloan .van-search__field {
    text-align: center;
  }
  .postloan .van-tab__pane{
    margin-top: 0.3rem;
  }
  .postloan .van-tab--active {
    color: #2D95E0;
  }
  .postloan .van-tabs__line {
    background-color: #2D95E0;
    height: 2px;
    position: absolute;
    width: 1.6rem !important;
  }
  .postloan .van-tabs--line {
    position: relative;
    padding-top: 1.58rem
  }
  .postloan .van-tabs__nav--line{
    padding: 0.2rem;
    position: fixed;
    width: 100%;
    height: 1rem;
    background-color: #FFFFFF;
    margin-top: .6rem;
  }
  .postloan .van-tab {
    padding:  15px 5px;
    line-height: 0.9rem !important;
    width: 160px;
  }
  .postloan .van-button--large{
    height: 25px;
    line-height: 25px;
    color: #2D95E0;
    background-color: #fff;
    border:1px solid  #A3D0FD;
  }
</style>
