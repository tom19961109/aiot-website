<template>
  <section
    class="about-us"
    :aria-label="t('aboutUs.title')"
  >
    <svg
      class="about-waves"
      viewBox="0 0 1400 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 0H230Q150 95 0 130Z"
        fill="currentColor"
        opacity=".35"
      />
      <path
        d="M0 130Q200 80 340 0H470Q240 180 0 220Z"
        fill="currentColor"
        opacity=".4"
      />
      <path
        d="M1400 0H1370Q1210 110 1050 142Q1230 143 1400 72Z"
        fill="currentColor"
        opacity=".35"
      />
      <path
        d="M0 446Q150 483 360 520H0Z"
        fill="currentColor"
        opacity=".5"
      />
      <path
        d="M995 520Q1240 450 1400 359V520Z"
        fill="currentColor"
        opacity=".45"
      />
    </svg>

    <UContainer class="about-content">
      <header class="about-heading">
        <span
          class="accent"
          aria-hidden="true"
        />
        <h1>{{ t('aboutUs.title') }}</h1>
        <p>{{ t('aboutUs.description') }}</p>
      </header>

      <div class="features">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="feature"
        >
          <div class="icon-circle">
            <UIcon
              :name="feature.icon"
              class="feature-icon"
              aria-hidden="true"
            />
          </div>
          <h2>{{ feature.title }}</h2>
          <span
            class="feature-accent"
            aria-hidden="true"
          />
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </UContainer>

    <!-- Decorative vector illustration; replace with original artwork if available. -->
    <svg
      class="ai-art"
      viewBox="0 0 320 370"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="about-chip"
          x1="80"
          y1="140"
          x2="240"
          y2="240"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#159b88" />
          <stop
            offset="1"
            stop-color="#63deb0"
          />
        </linearGradient>
        <linearGradient
          id="about-panel"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            stop-color="#9cebcf"
            stop-opacity=".8"
          />
          <stop
            offset="1"
            stop-color="#33b393"
            stop-opacity=".2"
          />
        </linearGradient>
      </defs>
      <g
        stroke="#76dbc5"
        stroke-width="1.5"
        opacity=".5"
      >
        <path
          d="m35 120 125-73 134 77v152l-133 78-127-74 126-74 134 70M34 280V120l260 156M160 206V47"
        />
        <path d="m16 285 145 84 153-89M160 206l-99 58 99 57 98-57Z" />
      </g>
      <g fill="#3acb9e">
        <circle
          cx="35"
          cy="120"
          r="4"
        />
        <circle
          cx="160"
          cy="47"
          r="4"
        />
        <circle
          cx="294"
          cy="276"
          r="4"
        />
        <circle
          cx="61"
          cy="264"
          r="4"
        />
      </g>
      <path
        d="m30 179 130-75 132 76v23c0 7-4 12-10 16l-110 64c-8 5-17 5-25 0L40 221c-7-4-10-9-10-16Z"
        fill="#a3e3df"
        opacity=".65"
      />
      <path
        d="m38 169 110-63c8-5 17-5 25 0l110 64c13 7 13 18 0 26l-110 64c-8 5-17 5-25 0L38 196c-13-8-13-19 0-27Z"
        fill="#d9faf1"
        opacity=".95"
        stroke="#fff"
        stroke-width="2"
      />
      <path
        d="m88 164 64-37c5-3 11-3 16 0l65 38v27l-65 39c-5 3-11 3-16 0l-64-38Z"
        fill="#62d4b0"
        opacity=".75"
      />
      <path
        d="m88 157 64-37c5-3 11-3 16 0l65 38c8 5 8 11 0 16l-65 38c-5 3-11 3-16 0l-64-38c-8-5-8-12 0-17Z"
        fill="url(#about-chip)"
        stroke="#a5efd5"
        stroke-width="9"
      />
      <text
        x="0"
        y="0"
        transform="matrix(.866 -.5 .866 .5 150 179)"
        fill="white"
        font-size="40"
        font-family="Arial, sans-serif"
        font-weight="700"
      >
        AI
      </text>
      <g transform="translate(66 49) skewY(-30)">
        <rect
          width="62"
          height="74"
          rx="7"
          fill="url(#about-panel)"
          stroke="#b7f4df"
          stroke-width="5"
        />
        <path
          d="M16 55V39m14 16V28m14 27V17"
          stroke="white"
          stroke-width="7"
        />
      </g>
      <g transform="translate(221 58) skewY(30)">
        <rect
          width="62"
          height="74"
          rx="7"
          fill="url(#about-panel)"
          stroke="#c6f6e5"
          stroke-width="5"
        />
        <path
          d="M15 50V30l12 6V23l12 7V18h9v32Z"
          fill="white"
          opacity=".9"
        />
      </g>
      <g transform="translate(240 231) skewY(-30)">
        <rect
          width="62"
          height="66"
          rx="6"
          fill="#7dc9df"
          opacity=".55"
        />
        <path
          d="M17 48c-15 0-13-19-4-20-2-17 22-21 25-7 15-3 20 23 4 27Z"
          fill="white"
          opacity=".95"
        />
      </g>
    </svg>
  </section>
</template>

<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const { t, locale } = useI18n()

const features = ref<PageFeatureProps[]>([
  {
    title: t('aboutUs.company_introduction'),
    description: t('aboutUs.company_introduction_description'),
    icon: 'i-lucide-building-2'
  },
  {
    title: t('aboutUs.all_in'),
    ui: { description: 'whitespace-pre-line' },
    description: t('aboutUs.all_in_description'),
    icon: 'i-lucide-settings'
  },
  {
    title: t('aboutUs.AI_decision'),
    description: t('aboutUs.AI_decision_description'),
    icon: 'i-lucide-brain'
  }
])

useSeoMeta({
  titleTemplate: '',
  title: `${t('seo.index.title')}-${t('aboutUs.title')}`,
  ogTitle: t('aboutUs.title'),
  description: `${t('aboutUs.company_introduction_description')},${t('aboutUs.all_in')},${t('aboutUs.AI_decision')}`,
  ogDescription: `${t('aboutUs.company_introduction_description')},${t('aboutUs.all_in')},${t('aboutUs.AI_decision')}`
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/aboutUs')}`)

useHead(() => ({
  script: [
    {
      key: 'about-us-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: `${t('seo.index.title')}-${t('aboutUs.title')}`,
        description: t('aboutUs.description'),
        inLanguage: locale.value,
        isPartOf: {
          '@id': 'https://www.aie-tec.com.tw/#website'
        },
        about: {
          '@id': 'https://www.aie-tec.com.tw/#organization'
        },
        breadcrumb: {
          '@id': `${pageUrl.value}#breadcrumb`
        }
      }).replace(/</g, '\\u003c')
    },
    {
      key: 'about-us-breadcrumb-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl.value}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('seo.index.title'),
            item: `https://www.aie-tec.com.tw${localePath('/')}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('aboutUs.title'),
            item: pageUrl.value
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>

<style scoped>
.about-us {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 510px;
  padding: 58px 0 48px;
  background: radial-gradient(
    ellipse at 50% 40%,
    var(--ui-bg) 30%,
    color-mix(in srgb, var(--ui-primary) 4%, var(--ui-bg)) 75%,
    color-mix(in srgb, var(--ui-primary) 10%, var(--ui-bg))
  );
  color: var(--ui-text-highlighted);
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
}
.about-waves {
  color: color-mix(in srgb, var(--ui-primary) 25%, var(--ui-bg));
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
}
.about-content {
  position: relative;
  z-index: 1;
  max-width: 1040px;
}
.about-heading {
  text-align: center;
}
.accent,
.feature-accent {
  display: block;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #39c6a2, #00aa7b);
}
.accent {
  width: 44px;
  margin: 0 auto 19px;
}
.about-heading h1 {
  margin: 0;
  font-size: clamp(30px, 3.4vw, 46px);
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: 0.02em;
}
.about-heading p {
  margin: 9px 0 0;
  color: var(--ui-text-muted);
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.03em;
}
.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 64px;
  margin-top: 29px;
}
.icon-circle {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e0f8ef;
  color: #00ae79;
}
.feature-icon {
  width: 39px;
  height: 39px;
}
.feature h2 {
  margin: 13px 0 14px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
}
.feature-accent {
  width: 28px;
  height: 3px;
}
.feature p {
  margin: 16px 0 0;
  color: var(--ui-text-muted);
  font-size: 16px;
  line-height: 1.65;
  letter-spacing: 0.025em;
}
.ai-art {
  position: absolute;
  z-index: -1;
  right: -6px;
  top: 79px;
  width: 300px;
  opacity: 0.65;
  pointer-events: none;
}
@media (min-width: 1200px) {
  .features {
    margin-right: 28px;
  }
}
@media (max-width: 1199px) {
  .ai-art {
    right: -100px;
    opacity: 0.2;
  }
  .features {
    gap: 32px;
  }
}
@media (max-width: 767px) {
  .about-us {
    padding: 40px 0;
  }
  .about-heading p {
    font-size: 16px;
    max-width: 32em;
    margin: 12px auto 0;
  }
  .features {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 32px;
  }
  .feature {
    max-width: 480px;
    width: 100%;
    margin-inline: auto;
  }
  .feature h2 {
    font-size: 21px;
  }
  .icon-circle {
    width: 66px;
    height: 66px;
  }
  .feature-icon {
    width: 33px;
    height: 33px;
  }
  .ai-art {
    top: 180px;
    right: -120px;
    opacity: 0.12;
  }
}
</style>
