<template>
  <div class="manual-empty">
    <!-- Illustration -->
    <svg
      class="manual-empty__illustration"
      viewBox="0 0 320 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <!-- 文件 -->
        <linearGradient
          id="paperGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="#ffffff"
          />
          <stop
            offset="100%"
            stop-color="#eaf5ff"
          />
        </linearGradient>

        <!-- 資料夾 -->
        <linearGradient
          id="folderGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="#d7eaff"
          />
          <stop
            offset="100%"
            stop-color="#b8d8f4"
          />
        </linearGradient>

        <!-- Download -->
        <linearGradient
          id="downloadGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="#39c8c0"
          />
          <stop
            offset="100%"
            stop-color="#12ad88"
          />
        </linearGradient>

        <filter
          id="shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="6"
            stdDeviation="7"
            flood-color="#5588aa"
            flood-opacity="0.14"
          />
        </filter>
      </defs>

      <!-- 底部陰影 -->
      <ellipse
        cx="160"
        cy="145"
        rx="90"
        ry="14"
        fill="#dcecf8"
        opacity="0.65"
      />

      <!-- 左側裝飾 -->
      <circle
        cx="80"
        cy="82"
        r="3"
        fill="#d9ebfa"
      />

      <path
        d="M78 50L69 46"
        stroke="#298dca"
        stroke-width="4"
        stroke-linecap="round"
      />

      <path
        d="M91 42L88 32"
        stroke="#17b88f"
        stroke-width="4"
        stroke-linecap="round"
      />

      <!-- 右側裝飾 -->
      <path
        d="M231 44L236 34"
        stroke="#16b68b"
        stroke-width="4"
        stroke-linecap="round"
      />

      <path
        d="M246 53L255 48"
        stroke="#21a5b9"
        stroke-width="4"
        stroke-linecap="round"
      />

      <!-- 後方文件 -->
      <g
        transform="translate(174 50) rotate(7)"
        opacity="0.65"
      >
        <rect
          x="0"
          y="0"
          width="44"
          height="72"
          rx="6"
          fill="#cfe2f4"
        />
      </g>

      <!-- 主文件 -->
      <g filter="url(#shadow)">
        <rect
          x="115"
          y="26"
          width="73"
          height="92"
          rx="7"
          fill="url(#paperGradient)"
          stroke="#77a9d3"
          stroke-width="2.5"
        />

        <rect
          x="128"
          y="43"
          width="32"
          height="5"
          rx="2.5"
          fill="#86b8dc"
        />

        <rect
          x="128"
          y="58"
          width="46"
          height="5"
          rx="2.5"
          fill="#aacbe4"
        />

        <rect
          x="128"
          y="73"
          width="39"
          height="5"
          rx="2.5"
          fill="#aacbe4"
        />
      </g>

      <!-- Folder -->
      <g filter="url(#shadow)">
        <path
          d="
            M92 84
            C92 77 97 73 104 73
            H135
            L146 82
            H207
            C215 82 220 87 219 95
            L211 132
            C210 139 204 143 197 143
            H107
            C100 143 95 139 94 132
            L87 96
            C86 89 88 85 92 84Z
          "
          fill="url(#folderGradient)"
        />
      </g>

      <!-- Download Circle -->
      <g filter="url(#shadow)">
        <circle
          cx="209"
          cy="128"
          r="23"
          fill="url(#downloadGradient)"
        />

        <!-- arrow -->
        <path
          d="M209 116V132"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />

        <path
          d="M201 126L209 134L217 126"
          fill="none"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M200 140H218"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </g>
    </svg>

    <!-- Text -->
    <h3 class="manual-empty__title">
      {{ t('manualDownload.manual_empty') }}
    </h3>

    <p class="manual-empty__description">{{ t('manualDownload.manual_empty_description') }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.manual-empty {
  width: 100%;
  min-height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 48px 24px;

  text-align: center;
}

.manual-empty__illustration {
  width: 280px;
  max-width: 80%;
  height: auto;

  margin-bottom: 8px;
}

.manual-empty__title {
  margin: 0;

  font-size: 26px;
  line-height: 1.4;
  font-weight: 800;

  color: #123f70;
}

.manual-empty__description {
  margin-top: 12px;
  margin-bottom: 0;

  font-size: 16px;
  line-height: 1.7;

  color: #6582a2;
}

@media (max-width: 640px) {
  .manual-empty {
    min-height: 300px;
    padding: 32px 20px;
  }

  .manual-empty__illustration {
    width: 230px;
  }

  .manual-empty__title {
    font-size: 22px;
  }

  .manual-empty__description {
    font-size: 14px;
  }
}
</style>
