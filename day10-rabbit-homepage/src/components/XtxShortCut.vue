<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxShortCut"
})
</script>

<template>
  <!-- 快捷链接 XtxShortCut -->
  <div class="shortcut-module">
    <div class="shortcut-links">
      <span>📱 下载APP</span>
      <span>👤 我的账户</span>
      <span>📍 门店查询</span>
      <span>⭐ 收藏夹</span>
      <span>🎁 会员中心</span>
    </div>
    <div class="shortcut-user">
      <span>登录</span>
      <span>注册</span>
      <span>🌐 语言</span>
    </div>
  </div>
</template>

<style scoped>
/* --- 快捷链接 (XtxShortCut) --- */
.shortcut-module {
  background: #1e1e2a;  /* 深色背景区分 */
  padding: 14px 50px;
  color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid #333;
}
.shortcut-links {
  display: flex;
  gap: 32px;
}
.shortcut-links span {
  cursor: default;
  color: #f0f0f0;
  font-weight: 500;
  transition: color 0.2s;
  letter-spacing: 0.3px;
}
.shortcut-links span:hover { color: #b18f6a; } /* 仅视觉反馈 */
.shortcut-user {
  display: flex;
  gap: 24px;
  color: #ccc;
}
.shortcut-user span { cursor: default; }
</style>