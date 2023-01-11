# nextjs-chakraui-starter

This project is my best directory structure on `NextJS + ChakraUI`.

```
./
├ assets/
├ components/
│ ├ atoms/
│ ├ molecules/
│ └ organisms/
├ constants/
├ containers/
│ ├ atoms/
│ ├ molecules/
│ └ organisms/
├ contexts/
├ hooks/
├ libs/
├ utils/
├ pages/
│ ├ api/
│ ├ _app.tsx
│ ├ _document.tsx
│ ├ ...
│ └ index.tsx
├ public/
└ themes/
  ├ components/
  │ ├ Button/
  │ │ ├ Button.tsx
  │ │ └ index.tsx
  │ └ ...
  └ createThemes.ts
```

# Getting Started

First, install packages and copy .env

```
yarn install
cp .env.sample .env
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
