<template>
  <div class="main">
    <!-- 自定义date -->
    <div class="input">
      <div class="left">{{label}}</div>
      <div class="center">
        <input :value="dateVal" @click="showDate" disabled="disabled" :placeholder="placeholder">
      </div>
      <div class="right">
        <div v-if="unit">{{unit}}</div>
      </div>
    </div>

    <!--显示日期-->
    <van-popup :show="isShowDatetime" position="bottom">
      <van-datetime-picker
        type="datetime"
        :value="currentDate"
        @confirm="onDateConfirm"
        @cancel="onDateCancel"
        :min-date="minDate"
        :max-date="maxDate"></van-datetime-picker>
    </van-popup>

  </div>
</template>

<script>
  import util from '@/utils'
  export default {
    components: {
    },
    props: {
      label: {
        type: String,
        default: '类型',
        required: true
      },
      placeholder: {
        type: String,
        default: '请输入',
        required: true
      },
      value: {
        type: String,
        required: true
      },
      unit: {
        type: String,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        required: true
      },
      keyName: {
        type: String,
        required: true
      },
      index: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        dateVal: '',
        isShowDatetime: false,
        minDate: new Date((new Date().getFullYear() - 1), 10, 1).getTime(),
        maxDate: new Date((new Date().getFullYear() + 2), 10, 1).getTime(),
        currentDate: new Date().getTime()
      }
    },
    mounted () {
      console.log('value:', this.value)
      this.dateVal = this.value
    },
    methods: {
      onDateConfirm (e) {
        let time = util.formatDateStr(new Date(e.mp.detail))
        this.dateVal = time
        this.isShowDatetime = false
        this.$emit('onConfirm', {value: this.dateVal, keyName: this.keyName, time: e.mp.detail})
        console.log(e.mp.detail)
        console.log(e.mp.detail.value)
      },
      onDateCancel () {
        this.isShowDatetime = false
      },
      showDate () {
        this.isShowDatetime = !this.isShowDatetime
      }
    }
  }
</script>

// 局部样式
<style scoped lang="less">
  @import "../../styles/base.less";
  .main{
    .flex-row();
    .border-bottom(#eee, 0);
    .border-left(#cc66ff);
  }
  .input{
    .flex-row(flex-start);
    .position(r);
    width:100%;
    padding:10px 15px;
    font-size:14px;
    line-height:24px;
    color:#333;
    background-color:#fff;
    box-sizing:border-box;
  }
  .left{
    min-width:130px;
  }
  .center{
    flex: 1;
  }
  .right{
    text-align: right;
    width: 20px;
    color:#999;
    font-size:16px;
    padding:0 10px;
    margin-right:-10px;
    line-height:inherit;
    vertical-align:middle;
  }
</style>

