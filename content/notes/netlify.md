---
title: "Netlify"
draft: true
---

Install netlify CLI
```console
npm i -g netlify-cli
```
Create a netlify site setup netlify in the current directory with ci/cd (auto deploys on each push to master)

```console
netlify init
```  

Host locally for testing
```console
 netlify dev
```

Share locally hosted netlify
```console 
netlify dev --live 
```

Build static site ready for deployment
```console 
netlify build
```

Deploy site
```console 
netlify deploy
```
