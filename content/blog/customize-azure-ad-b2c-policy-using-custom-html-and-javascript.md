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

Azure Active Directory authorization portal is what brought me to use Azure AD b2c over other identity management providers. However, the choice comes with a huge cost. Unlike firebase, Azure doesn't allow one to build their own user interfaces in their language of choice and doesn't provide sdks to interact with the AD server during authentication

## Why azure AD B2C

## Why customize the look.

One thing I couldn't shake off, is the three blue button at the verify email page. For internal application, this would be ok, cause you can train your staff. but for customer facing applications, this would be confusing and overwhelming.  I know this because, because I happen to use a banking application, that asks you to  "send a TAN" as a part of the authentication (login and fund transfer). Sometimes, i forget to click that button, as other applications have taught me that it is sent automatically, and since it is the only way to complete the user action. it only makes sense that it should be sent automatically. 

I honestly think this page should only have on button the continue one. That should perform the function of continue and verify button. The resend should be hidden for 1 min and also made to appear like a link.

I also want to decide the general page layout and provide subtle agree to our terms links.

Azure provides flows which help set up authentication policies and routines including adding other Open ID authentication providers like Google, Facebook to login pages, password recovery routines, and other authentication related journeys. They come with a huge limitation, which Azure documentation downplays "They would work for most situations"; the only thing you can change in the way the flow look is the logo and the page background, and maybe choose among three templated developed by microsoft. If you need to make any other customization, you must use a custom policy.

Azure is not very popular, I actually found out about it by mistake when I was setting up Azure DNS. It's generally looks something that well established organizations would use, since it integrates well with Microsoft ecosystem they are already using. Unlike firebase which is attractive to startups which haven't gotten to that point where you somehow start paying for office software.

Setting up custom policy is generally difficult due to the xml api Microsoft offers a lot of cognitive load. I actually felt like a champion when I did one. And all through it, I keep asking myself why I am still doing it. To support this, microsoft offer a lot of templates which cover a lot of user authentication journeys (link). If you are like me, you insist on how you want something should look an work, you'll still need to know a huge part of the policy apis.

> Poor development tools around it, No ay to debug them, Unfamiliar and complex api, xml so verbose, so many related concepts that one has to understand.

In this article, I will show how to go from the ui in the left to the one in the right. I will discuss the limitations and how to around them. Most articles I found were relatively and jumped to give a straight forward answer without explaining the steps.

The file used for this article can be found here.

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
