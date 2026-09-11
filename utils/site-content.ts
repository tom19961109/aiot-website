export const SITE_URL = 'https://aiot.aie-tec.com.tw/'

export const languages = [
  { code: 'zh', hreflang: 'zh-Hant', label: '繁體中文', shortLabel: '中' },
  { code: 'en', hreflang: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ja', hreflang: 'ja', label: '日本語', shortLabel: '日' }
]

export function getAlternateLinks() {
  return [
    ...languages.map((language) => ({
      rel: 'alternate',
      hreflang: language.hreflang,
      href: `${SITE_URL}${language.code}/`
    })),
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: SITE_URL
    }
  ]
}

const sharedLanguages = languages.map((language) => ({
  code: language.code,
  hreflang: language.hreflang,
  shortLabel: language.shortLabel
}))

export const localeContent = {
  zh: {
    code: 'zh',
    htmlLang: 'zh-Hant',
    ogLocale: 'zh_TW',
    title: '安智聯科技有限公司｜智慧製造、AI 視覺檢測與自動化整合',
    description: '安智聯、安智聯科技、安智聯科技有限公司協助半導體與電子製造產業導入智慧製造、AI 視覺檢測、EAP 設備自動化、SPC 統計製程控制、RCM 遠端機台控制與 RPA 流程自動化。',
    keywords: ['安智聯', '安智聯科技', '安智聯科技有限公司', '智慧製造', 'AI視覺檢測', 'EAP設備自動化', 'SPC統計製程控制', 'RCM遠端機台控制', 'RPA流程自動化', 'AIoT', '半導體自動化', '電子製造'],
    ogDescription: '協助半導體與電子製造產業建構下一代智慧工廠。',
    schemaDescription: '智慧製造、AI 視覺檢測與自動化系統整合服務商',
    knowsAbout: ['智慧製造', 'AI 視覺檢測', 'EAP 設備自動化', 'SPC 統計製程控制', 'RCM 遠端機台控制', 'RPA 流程自動化', 'AIoT'],
    languageLabel: '語言選擇',
    languages: sharedLanguages,
    eyebrow: '智慧製造 X AI X 自動化整合專家',
    heading: '安智聯科技有限公司智慧製造與自動化整合',
    summary: '協助半導體與電子製造產業導入設備聯網、製程監控、AI 視覺檢測與工廠自動化，建構穩定、可追蹤、可擴充的下一代智慧工廠。',
    solutionsTitle: '核心解決方案',
    solutions: [
      {
        title: 'EAP 設備自動化平台',
        description: '透過 SECS/GEM 協議整合設備聯網、配方管理、設備監控與數據採集，建立智慧工廠基礎架構。'
      },
      {
        title: 'RCM 遠端機台控制系統',
        description: '集中化管理工廠設備，支援多畫面監控、遠端操作、操作錄影與完整稽核追蹤。'
      },
      {
        title: 'RPA 流程自動化機器人',
        description: '結合 AI 與流程自動化，降低重複性人工作業，提高人機比並減少人為失誤。'
      },
      {
        title: 'SPC 統計製程控制',
        description: '即時監控制程能力、管制圖與品質趨勢，自動告警並協助預防異常擴大。'
      },
      {
        title: 'AiDC 智慧缺陷檢測系統',
        description: '運用 AI 深度學習與機器視覺進行缺陷分類、瑕疵檢測與品質判定，提升檢測效率與良率。'
      },
      {
        title: 'AIoT 智聯網',
        description: '整合設備、感測器與資料平台，提供可視化監控、預防宕機與即時營運洞察。'
      }
    ]
  },
  en: {
    code: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: '安智聯科技有限公司 | Smart Manufacturing, AI Vision and Automation Integration',
    description: '安智聯, 安智聯科技 and 安智聯科技有限公司 help semiconductor and electronics manufacturers deploy smart manufacturing, AI visual inspection, EAP equipment automation, SPC process control, RCM remote machine control and RPA automation.',
    keywords: ['smart manufacturing', 'AI visual inspection', 'EAP equipment automation', 'SPC process control', 'RCM remote machine control', 'RPA automation', 'AIoT', 'semiconductor automation', 'electronics manufacturing'],
    ogDescription: 'Building connected, automated and intelligent factories for semiconductor and electronics manufacturing.',
    schemaDescription: 'Smart manufacturing, AI visual inspection and automation system integration provider',
    knowsAbout: ['Smart manufacturing', 'AI visual inspection', 'EAP equipment automation', 'SPC process control', 'RCM remote machine control', 'RPA automation', 'AIoT'],
    languageLabel: 'Language selection',
    languages: sharedLanguages,
    eyebrow: 'Smart Manufacturing X AI X Automation Integration',
    heading: '安智聯科技有限公司 Smart Manufacturing and Automation Integration',
    summary: 'We help semiconductor and electronics manufacturers connect equipment, monitor production, apply AI visual inspection and build scalable factory automation systems.',
    solutionsTitle: 'Core Solutions',
    solutions: [
      {
        title: 'EAP Equipment Automation Platform',
        description: 'Connect machines through SECS/GEM, automate recipe management, monitor equipment status and collect production data for smart factory operations.'
      },
      {
        title: 'RCM Remote Machine Control',
        description: 'Centralize machine management with multi-screen monitoring, remote operation, operation recording and complete audit trails.'
      },
      {
        title: 'RPA Process Automation',
        description: 'Combine AI and workflow automation to reduce repetitive manual work, improve operator productivity and lower human error.'
      },
      {
        title: 'SPC Statistical Process Control',
        description: 'Monitor process capability, control charts and quality trends in real time, with automatic alerts for preventive quality management.'
      },
      {
        title: 'AiDC Intelligent Defect Inspection',
        description: 'Use AI deep learning and machine vision for defect classification, visual inspection and quality decisions that improve yield.'
      },
      {
        title: 'AIoT Connected Intelligence',
        description: 'Integrate machines, sensors and data platforms for visual monitoring, downtime prevention and real-time operational insight.'
      }
    ]
  },
  ja: {
    code: 'ja',
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    title: '安智聯科技有限公司｜スマート製造、AI 外観検査、自動化インテグレーション',
    description: '安智聯、安智聯科技、安智聯科技有限公司は半導体・電子製造業向けに、スマート製造、AI 外観検査、EAP 設備自動化、SPC 統計的工程管理、RCM 遠隔装置制御、RPA 自動化を提供します。',
    keywords: ['スマート製造', 'AI外観検査', 'EAP設備自動化', 'SPC統計的工程管理', 'RCM遠隔装置制御', 'RPA自動化', 'AIoT', '半導体自動化', '電子製造'],
    ogDescription: '半導体・電子製造業の次世代スマートファクトリー構築を支援します。',
    schemaDescription: 'スマート製造、AI 外観検査、自動化システムインテグレーション',
    knowsAbout: ['スマート製造', 'AI 外観検査', 'EAP 設備自動化', 'SPC 統計的工程管理', 'RCM 遠隔装置制御', 'RPA 自動化', 'AIoT'],
    languageLabel: '言語選択',
    languages: sharedLanguages,
    eyebrow: 'Smart Manufacturing X AI X Automation Integration',
    heading: '安智聯科技有限公司 スマート製造と自動化インテグレーション',
    summary: '半導体・電子製造業向けに、設備接続、生産監視、AI 外観検査、工場自動化システムを統合し、拡張性の高いスマートファクトリーを実現します。',
    solutionsTitle: '主なソリューション',
    solutions: [
      {
        title: 'EAP 設備自動化プラットフォーム',
        description: 'SECS/GEM による設備接続、レシピ管理、設備監視、データ収集を統合し、スマートファクトリーの基盤を構築します。'
      },
      {
        title: 'RCM 遠隔装置制御システム',
        description: '複数画面監視、遠隔操作、操作録画、監査証跡により、工場設備を集中管理します。'
      },
      {
        title: 'RPA プロセス自動化',
        description: 'AI とワークフロー自動化を組み合わせ、反復作業を削減し、作業効率と品質安定性を高めます。'
      },
      {
        title: 'SPC 統計的工程管理',
        description: '工程能力、管理図、品質傾向をリアルタイムに監視し、異常を早期に検知します。'
      },
      {
        title: 'AiDC AI 欠陥検査システム',
        description: 'AI ディープラーニングとマシンビジョンにより、欠陥分類、外観検査、品質判定を効率化します。'
      },
      {
        title: 'AIoT コネクテッドインテリジェンス',
        description: '設備、センサー、データ基盤を統合し、可視化監視、停止予防、リアルタイム分析を提供します。'
      }
    ]
  }
}

export function getLocaleContent(locale: string) {
  return localeContent[locale as keyof typeof localeContent]
}
