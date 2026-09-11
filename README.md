# aiot-website

Nuxt 3 static website for 安智聯科技有限公司.

## Local Development

```powershell
npm install
npm run dev
```

## Static Build

```powershell
npm run generate
```

Static output:

```text
.output/public
```

## Routes

```text
/      language entry
/zh/   Traditional Chinese
/en/   English
/ja/   Japanese
```

## GitHub Pages

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy-pages.yml
```

In GitHub repository settings, set Pages source to:

```text
GitHub Actions
```
