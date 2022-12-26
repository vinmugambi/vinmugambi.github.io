---
title: "Customize Azure AD B2C policy using HTML and JavaScript"
draft: true
tagline: "Make your authentication look and work the way you want"
code: "https://github.com/vinmugambi/azure-b2c-custom-html"
demo: "https://github.com/vinmugambi/azure-b2c-custom-html"
---

<notice>
Find the code for this tutorial at <a href="https://github.com/vinmugambi/azure-b2c-custom-html"> this github repo </a>
</notice>

<notice>
 This articles assumes fundamental understanding of Azure AD B2C custom policies.
</notice>

User flows and custom policies allow you to determine how your customers interact with your app when they sign up, sign in, reset password and update profile. User flows are easy to set up and recommended for most users. However they limit UI customization options to only adding a brand logo, changing page background and choosing one among three layout templates. If you wan't more you'll have to reach for custom policies.

In this article I will show you how to change the look of an already built custom policy.I'll be using a password-less policy, that I made by modifying the [Azure AD B2C social and local accounts starter pack](https://github.com/Azure-Samples/active-directory-b2c-custom-policy-starterpack/tree/main/SocialAndLocalAccounts) files, as an example. Download the sample policy from<a href="https://github.com/vinmugambi/azure-b2c-custom-html"> this github repo</a> and follow the instructions in `readme.md` to add it to your B2C tenant.

I'll mainly focus on the local sign in or sign up journey and here is how it's steps currently look like.

<div class="flex">

<div>

![](https://storage.googleapis.com/azureb2c/blue-step-1.png)

</div>
<div>

![](https://storage.googleapis.com/azureb2c/blue-step-2.png)

</div>
<div>

![](https://storage.googleapis.com/azureb2c/blue-step-3.png)

</div>

</div>

This is how we want it to look.

<div class="flex">

<div>

![](https://storage.googleapis.com/azureb2c/custom-verify.png)

</div>
<div>

![](https://storage.googleapis.com/azureb2c/custom-login.png)

</div>
</div>

## Why customize

Login and sign up pages are among the first pages your customers interact with upon acquisition, it's important they be frictionless. Looking at the current journey, there are things that bother me:

- The multiple primary buttons in the verify email page - I know most of these buttons can be removed without affecting the operation of the policy.
- The general language of the pages - I don't like the what the headings, subheadings and buttons say and need them to align to our brand.
- The position and look of error messages.
- I want to provide a terms of service agreement from outside the custom policy to reduce the number of actions customers need to perform when signing up.

Most of these decisions are inspired by the Notion.so authentication pages.

## Adding custom HTML

It is important to understand this about custom policies:

- The files form a hierarchy chain. Elements defined in a file can be changed in a file lower in the hierarchy, a familiar oop concept, you only to reference it element with its id. The `TrustFrameworkBase.xml` afters almost anything you'll need to create a custom policy, so many times we'll be overriding properties defined here. Most things are described here.
- The file with the `RelayingParty` determines the journey. In most case's you'll define files for sign in journey, reset password, and update profile. in our case we only have one called `NoPassword.xml`. This is because our users don't need to set a password, hence cannot forget it. I also prefer to handle profile profile update within my application instead of delegating to AD B2C.

- The `TechnicalProfile`s determine what information you collect from your users and what you do with it. In our case only two of them matter when customizing the ui. The one with id `CollectEmail` and `VerifyEmail` as Id

The fist step of your `RelayingParty` default journey determines how what is displayed in the first step, in our case a login/signup page. Looking the `ContentDefinitionReferenceId` property, we are using the `api.signuporsignin`. The properties of this file are defined the `TrustFrameworkBase.xml` file. In the we have overridden this file in our `NoPassword.xml`. Editing the base file is not recommended, this is because you might be have more then one policy. It only reasonable that we

```xml
<OrchestrationStep Order="1" Type="CombinedSignInAndSignUp" ContentDefinitionReferenceId="api.signuporsignin">
    <ClaimsProviderSelections>
        <ClaimsProviderSelection ValidationClaimsExchangeId="EmailExchange" />
        <ClaimsProviderSelection TargetClaimsExchangeId="FacebookExchange" />
    </ClaimsProviderSelections>
    <ClaimsExchanges>
        <ClaimsExchange Id="EmailExchange" TechnicalProfileReferenceId="CollectEmail" />
    </ClaimsExchanges>
</OrchestrationStep>
```

```xml
<ContentDefinition Id="api.signuporsignin">
    <LoadUri>~/tenant/templates/AzureBlue/unified.cshtml</LoadUri>
</ContentDefinition>
```

## initial html

to provide your own html
azure Ad will inject the html in your api div and override anything you put there.

create a file named `html/shared.css` and copy this into it

```css
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.wide {
  max-width: 800px;
  min-width: 320px;
}

.centered {
  margin-left: auto;
  margin-right: auto;
}

.slim {
  min-height: 4rem;
  max-width: 24rem;
  min-width: 320px;
}
.text-muted {
  color: #666;
  font-size: small;
}

.text-muted a {
  color: #444;
}

figure#logo {
  margin: 1rem;
  font-size: 2rem;
}
```

create a file named `html/signuporsignin.html`
and put this into it

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme</title>
    <link rel="stylesheet" href="./shared.css" />
  </head>
  <body>
    <header>
      <nav class="wide centered">
        <figure id="logo">ACME</figure>
      </nav>
    </header>

    <!-- Azure AD B2C will insert its html here, anything you put inside this div
   will be overridden -->
    <div id="api" class="slim centered">
      Azure AD B2C will insert its html here, anything you put inside this div
      will be overridden by azure content.
    </div>

    <section class="wide centered">
      <p class="text-muted" style="margin: 3rem 1rem">
        By clicking "Continue with Email, Facebook" above you acknowledge that
        you have read and understood, and agree to Participate's
        <a href="#">Terms of service</a> and
        <a href="#">Privacy policy</a>
      </p>
    </section>
  </body>
</html>
```

create another file named `html/selfasserted.html` and paste this into it

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme</title>
    <link rel="stylesheet" href="./shared.css" />
  </head>
  <body>
    <header>
      <nav class="wide centered">
        <figure id="logo">ACME</figure>
      </nav>
    </header>

    <div id="api" class="slim centered">
      Azure AD B2C will insert its html here, anything you put inside this div
      will be overridden by azure content.
    </div>
  </body>
</html>
```

<sink>
You'll notice that I'm using the same styles in both pages instead of supplying a shared css files. Well that is one one limitation you'll have to deal with. CSS files wont load correctly.
</sink>

## host the files in a publicly available domain and enable cors

You can use any cloud static hosting solution you like including Azure blob storage, Google storage, e.tc.
I'll use [Surge.sh](https://surge.sh/help/getting-started-with-surge) for its simplicity.

 <notice>
 The following require that you have [Node.js](https://nodejs.org) installed. Npm comes bundled with Node.js
 </notice>

Open the terminal, make sure you are in the folder that contains your project.

Install surge globally

```bash
npm install -g surge
```

Navigate to the folder that contains your `html` files and create a `CORS` file

```bash
cd html && echo "*" > CORS
```

Run surge to initiate deployment and answer the cli prompts

```bash
surge
```

Surge will deploy your files to surge.sh and return their public url

![surge response](./../../static/surge_response.png)

Now that you have the public url, open the `html/signuporsignin.html` and change the css links to an absolute path. Do the same thing in `selfasserted.html`

```html
<title>Acme</title>
<link rel="stylesheet" href="https://callous-move.surge.sh/shared.css" />
```

deploy your changes to surge.

```bash
echo callous-move.surge.sh > CNAME && surge
```

The CNAME file helps surge remember your public domain, instead of creating a new one.

## regenerate your custom policy files

Copy this url into `appsettings.json`.

```json
{
  "PoliciesFolder": "",
  "EnvironmentsFolder": "dist",
  "Environments": [
    {
      "Name": "Development",
      "Production": false,
      "Tenant": "participateb2c",
      "PolicySettings": {
        "IdentityExperienceFrameworkAppId": "4ca6fc17-f6f5-4d91-b789-4e320e0b1a85",
        "ProxyIdentityExperienceFrameworkAppId": "de823b09-5e3b-46a4-9fe1-9f5ec3807197",
        "FacebookAppId": "8180550952015656",
        "signInTemplateUrl": "https://callous-move.surge.sh/signuporsignin.html",
        "verifyTemplateUrl": "https://callous-move.surge.sh/selfasserted.html"
      }
    }
  ]
}
```

Now, generate policy again based on the updates `appsettings.json`. To do this, click `ctrl+shift+p` to open VS code command pallet. Search for "B2C build all policies" and click it.
Upload the generated files, located in `dist/Development`, to AD B2C tenant using the azure portal and run the one called `B2C_1A_NO_PASSWORD`

Your login page should now look like this

![](../../static/minimal_changes.png)

## What to cover

- The microsoft template contract overrides anything you put inside the API
- Somehow, when you use custom template, the order you defined in the provider selection part of your orchestration step.
- Gracefully appearing button.
- process.nextTick() trick cause document.ready didn't work.
- iife function
- setInterval, setTimeout tricks

## limitation

- The microsoft template contract overrides anything you put inside div with id api.
- page bundle with jquery and handlebars. Bundle phobia guys, this might slow page load time.
- ON the same note, the pages are rendered from the server- you can notice when you click continue with email, the browsers loads a completely new page.

> Poor development tools around it, No ay to debug them, Unfamiliar and complex api, xml so verbose, so many related concepts that one has to understand.
