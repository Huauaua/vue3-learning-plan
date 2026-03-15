<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxFooter"
})
</script>

<template>
  <!-- 版权底部 XtxFooter -->
  <div class="footer-module">
    <div class="footer-links">
      <div class="link-column">
        <h5>关于我们</h5>
        <ul>
          <li>品牌故事</li>
          <li>加入我们</li>
          <li>媒体中心</li>
          <li>公益合作</li>
        </ul>
      </div>
      <div class="link-column">
        <h5>购物指南</h5>
        <ul>
          <li>配送方式</li>
          <li>售后服务</li>
          <li>发票说明</li>
          <li>联系客服</li>
        </ul>
      </div>
      <div class="link-column">
        <h5>会员权益</h5>
        <ul>
          <li>积分计划</li>
          <li>会员等级</li>
          <li>专属福利</li>
          <li>兑换中心</li>
        </ul>
      </div>
      <div class="link-column">
        <h5>特色服务</h5>
        <ul>
          <li>礼物定制</li>
          <li>企业团购</li>
          <li>设计咨询</li>
          <li>线下门店</li>
        </ul>
      </div>
      <div class="link-column">
        <h5>关注我们</h5>
        <ul>
          <li>小红书</li>
          <li>微信公众号</li>
          <li>官方微博</li>
          <li>抖音</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="copyright">
        <span>© 2026 Xtx 设计生活</span>
        <span>隐私条款</span>
        <span>使用协议</span>
        <span>沪ICP备2025XXXX号</span>
      </div>
      <div class="footer-badge">
        <span>🏆 年度设计品牌</span>
        <span>🔒 安全支付</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- 版权底部 (XtxFooter) --- */
.footer-module {
  background: #1a1a24;
  color: #a6a6b3;
  padding: 48px 50px 36px;
  border-bottom: none;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}
.link-column {
  min-width: 140px;
}
.link-column h5 {
  color: white;
  font-size: 16px;
  margin-bottom: 18px;
  font-weight: 600;
}
.link-column ul {
  list-style: none;
}
.link-column li {
  margin-bottom: 12px;
  font-size: 14px;
  cursor: default;
}
.link-column li:hover { color: #ddd; }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid #30303a;
  font-size: 13px;
}
.copyright span {
  margin-right: 28px;
}
.footer-badge {
  display: flex;
  gap: 18px;
}
.footer-badge span {
  background: #2d2d39;
  padding: 8px 18px;
  border-radius: 40px;
  font-size: 13px;
  color: #cfcfd8;
}

/* 占位文本微调 */
.card-img span, .brand-logo span, .topic-img span {
  background: rgba(0,0,0,0.1);
  padding: 4px 8px;
  border-radius: 20px;
  color: #1f2a36;
}
</style>