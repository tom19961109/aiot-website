<template>
  <section class="manual-banner">
    <!-- 背景幾何 SVG -->
    <svg
      class="background-svg"
      viewBox="0 0 1920 180"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <!-- 左側淡色斜面 -->
      <path
        d="M0 0H190L50 180H0Z"
        fill="rgba(255,255,255,0.30)"
      />

      <path
        d="M180 0H480L300 180H20Z"
        fill="rgba(255,255,255,0.12)"
      />

      <!-- 中央淡色三角 -->
      <path
        d="M1150 0L1320 180H980Z"
        fill="rgba(255,255,255,0.20)"
      />

      <!-- 右側淡綠幾何 -->
      <path
        d="M1500 0H1920V180H1680Z"
        fill="rgba(126,255,211,0.10)"
      />

      <path
        d="M1800 0H1920V180H1660Z"
        fill="rgba(255,255,255,0.20)"
      />
    </svg>

    <div class="banner-container">
      <!-- 左側內容 -->
      <div class="content">
        <div class="manual-icon">
          <UIcon
            name="i-lucide-book-open"
            class="size-11"
          />
        </div>

        <div>
          <h2 class="title">{{ t('manualDownload.title') }}</h2>
          <p class="description">{{ t('manualDownload.description') }}</p>
        </div>
      </div>

      <!-- 右側 SVG -->
      <svg
        class="download-illustration"
        viewBox="0 0 420 180"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="folderGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stop-color="#2699e6"
            />
            <stop
              offset="100%"
              stop-color="#13b886"
            />
          </linearGradient>

          <linearGradient
            id="backGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stop-color="#64c9df"
            />
            <stop
              offset="100%"
              stop-color="#28c49a"
            />
          </linearGradient>

          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              flood-opacity="0.12"
            />
          </filter>
        </defs>

        <!-- 左側文件 -->
        <g
          transform="translate(38 55) rotate(-12)"
          opacity=".32"
        >
          <rect
            width="70"
            height="95"
            rx="5"
            fill="#d6e8f6"
          />

          <rect
            x="13"
            y="24"
            width="40"
            height="5"
            rx="2.5"
            fill="#8db8dc"
          />

          <rect
            x="13"
            y="38"
            width="45"
            height="5"
            rx="2.5"
            fill="#8db8dc"
          />

          <rect
            x="13"
            y="52"
            width="34"
            height="5"
            rx="2.5"
            fill="#8db8dc"
          />
        </g>

        <!-- 後方資料夾 -->
        <rect
          x="130"
          y="18"
          width="135"
          height="83"
          rx="14"
          fill="url(#backGradient)"
          opacity=".72"
        />

        <rect
          x="151"
          y="38"
          width="85"
          height="7"
          rx="3.5"
          fill="rgba(255,255,255,.32)"
        />

        <!-- 主資料夾 -->
        <g filter="url(#shadow)">
          <path
            d="
              M105 52
              H175
              L190 68
              H290
              C300 68 307 75 307 85
              V145
              C307 156 300 163 289 163
              H110
              C100 163 92 156 92 146
              V68
              C92 59 98 52 105 52Z
            "
            fill="url(#folderGradient)"
          />
        </g>

        <!-- Cloud -->
        <g transform="translate(170 76)">
          <path
            d="
              M37 56
              H92
              C107 56 117 46 117 33
              C117 20 107 10 94 10
              C91 -2 80 -11 66 -11
              C50 -11 38 -1 34 13
              C19 13 8 23 8 35
              C8 47 18 56 37 56Z
            "
            fill="white"
          />

          <!-- download arrow -->
          <path
            d="
              M62 11
              V34
              M51 25
              L62 36
              L73 25
            "
            stroke="#3495dc"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>

        <!-- 右側文件 -->
        <g
          transform="translate(312 50) rotate(12)"
          opacity=".25"
        >
          <rect
            width="70"
            height="100"
            rx="6"
            fill="#b5e0dd"
          />

          <rect
            x="13"
            y="24"
            width="40"
            height="5"
            rx="2.5"
            fill="#56b9b6"
          />

          <rect
            x="13"
            y="39"
            width="45"
            height="5"
            rx="2.5"
            fill="#56b9b6"
          />

          <rect
            x="13"
            y="54"
            width="34"
            height="5"
            rx="2.5"
            fill="#56b9b6"
          />
        </g>

        <!-- 裝飾線 -->
        <g
          stroke="#47a6dd"
          stroke-width="5"
          stroke-linecap="round"
          opacity=".65"
        >
          <path d="M73 42L60 28" />
          <path d="M88 31L82 13" />
          <path d="M316 26L321 12" />
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.manual-banner {
  position: relative;
  width: 100%;
  min-height: 176px;

  overflow: hidden;

  background: linear-gradient(110deg, #eefaff 0%, #e9f7ff 32%, #edfaff 60%, #effff8 100%);
}

.background-svg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;
}

.banner-container {
  position: relative;
  z-index: 1;

  width: min(1600px, calc(100% - 48px));
  min-height: 176px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 左側 */
.content {
  display: flex;
  align-items: center;
  gap: 28px;
}

.manual-icon {
  width: 90px;
  height: 90px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 22px;

  color: white;

  background: linear-gradient(145deg, #24b5b6, #0ac268);

  box-shadow: 0 8px 20px rgba(0, 164, 130, 0.12);
}

.title {
  margin: 0;

  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;

  letter-spacing: 0.06em;

  color: #113d6c;
}

.description {
  margin-top: 8px;
  margin-bottom: 0;

  font-size: 18px;
  line-height: 1.6;

  color: #52749a;
}

/* 右側 */
.download-illustration {
  width: 430px;
  height: 176px;

  flex-shrink: 0;
}

/* Tablet */
@media (max-width: 1024px) {
  .banner-container {
    width: calc(100% - 40px);
  }

  .title {
    font-size: 34px;
  }

  .description {
    font-size: 16px;
  }

  .manual-icon {
    width: 80px;
    height: 80px;
  }

  .download-illustration {
    width: 330px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .manual-banner {
    min-height: 150px;
  }

  .banner-container {
    width: calc(100% - 32px);
    min-height: 150px;
  }

  .content {
    gap: 16px;
  }

  .manual-icon {
    width: 64px;
    height: 64px;

    border-radius: 16px;
  }

  .manual-icon :deep(svg) {
    width: 30px;
    height: 30px;
  }

  .title {
    font-size: 27px;
  }

  .description {
    margin-top: 5px;

    font-size: 14px;
  }

  .download-illustration {
    position: absolute;

    right: -100px;

    width: 300px;

    opacity: 0.35;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .banner-container {
    width: calc(100% - 24px);
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .manual-icon {
    width: 56px;
    height: 56px;
  }

  .title {
    font-size: 24px;
  }

  .description {
    max-width: 240px;

    font-size: 13px;
  }

  .download-illustration {
    right: -140px;

    opacity: 0.22;
  }
}
</style>
