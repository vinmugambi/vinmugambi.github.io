---
title: "Create PDF documents using React.js"
tagline: "Learn how to generate ready to print documents the easy way"
demo: "vinmugambi.github.io"
code: "https://github.com"
createdAt: "2022-08-19"
updatedAt: "2022-08-19"
tags:
  - "PDF"
  - "React"
  - "Flexbox"
---

Business applications sometime need your to generate documents for various reasons including reporting, legal, automation. If you want the documents to be lightweight, viewed on any platform, and be ready for printing then PDf format would be the best choice.

Sometim

There are many ways to perform the task, but if familiar with react js you'll find the React PDF renderer way among the easiest.

## why react

- familiar syntax
- dynamic

In this post we make a create a react component that generates invoice. We'll constraint ourselves to the logic concerning view to avoid being caught up describing business processes surrounding invoice generation.

## Prerequisites

- Node js
- A chromium-based browser e.g chrome, edge, or chromium
- Yarn package manager. Visit https://yarnpkg.com/getting-started/install to install.

### Code

The example project's code is from this exact blog

## Decide how the invoice looks

As suggested in the react docs start with a static version of your component. That neither has data or props. You might get this from your designer or business teams.

we are going to write an invoice that looks like this.
<nuxt-img src="/logo.png"></nuxt-img>

<!-- ![](~assets/target.png) -->

## Develop the static version

Now that we know what we want in our invoice let's begin creating it;

Install a fresh react project using npm

```bash
yarn create react-app invoice --template typescript
```

delete every file in src folder except `index.js`

install the react pdf module.

> I recommend using yarn to install the the rest of the modules. Installing the `@react-pdf/renderer` using npm causes peer dependency mismatch errors with the react version 18.

```bash
yarn add @react-pdf/renderer
```

we'll be using typescript to type-check the invoice data structure so install these dependencies with the development flag.

```bash
yarn add -D  typescript @types/node @types/react @types/react-dom
```

lets start with the header. create a file named `app.tsx` file in the `src` folder. create the `App` and `Invoice` component as follows.

```jsx{}[app.tsx]

import {
  Document,
  Page,
  PDFViewer,
} from "@react-pdf/renderer";

export default function App() {
  return (
      <PDFViewer width="100%" height="900">
        <Invoice />
      </PDFViewer>
  );
}

function Invoice() {
  return (
    <Document>
      <Page
        size="A4"
        style={{ fontFamily: "Helvetica", fontSize: 10 , margin: 40 }}
      ></Page>
    </Document>
  );
}
```

Start the development server,

```bash
yarn start
```

This will start the server and open the url in your default browser.
If you see something like this, then we are set

![](./empty.png)

> gotcha:: The `PDFViewer` may not work as expected in Firefox, depending your firefox settings. I recommend you use a Chromium based browser for this guide.

Here we supply `Page` element with the size prop. This ensures the generated document will be of correct size.

### Styling

React-pdf supports some css properties that make it easier to reason about document. However, it doesn't support the entire CSS spec.

Fonts: It supports courier (monotype), and Times-Roman (serif), and Helvetica (sans-serif) variants. we'll use this for now. Later we'll see how one can use google fonts.

change the `index.js` file to look like this

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Adding the header

Download this image and copy it into the public folder found in the root of the project.

![logo](./logo.png)

create the header component and render it in invoice, like this.

```jsx
import {
  Document,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";

function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          src={logo}
          style={{
            width: "96pt",
          }}
          cache
        ></Image>
      </View>

      <Text
        style={{
          padding: "4pt",
          fontSize: "20pt",
          fontFamily: "Helvetica-Bold",
        }}
      >
        INVOICE
      </Text>
      <View>
        <Text style={{ marginLeft: "auto", textTransform: "uppercase" }}>
          Tenda Soft Ltd
        </Text>
        <Text style={{ marginLeft: "auto", fontFamily: "Helvetica-Oblique" }}>
          Lusaka rd, Nairobi, Kenya
        </Text>
        <Text style={{ marginLeft: "auto", fontFamily: "Helvetica-Oblique" }}>
          +254790589898
        </Text>
      </View>
    </View>
  );
}

function Invoice() {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Helvetica",
          fontSize: "10pt",
          backgroundColor: "white",
          padding: "40pt",
        }}
      >
        <Header />
      </Page>
    </Document>
  );
}
```

## components

React-pdf will only render elements it recognises. It comes with a few Components that make sense in the context of PDF documents. We'll be using

- `Text` a block level text component (all text must be a child of this component)
- `View` a general block level element (equivalent to a div)
- `Image` equivalent to HTML img
- `Page` equivalent to HTML body
- `Document` denotes a PDF document. equivalent to HTML html element.

> **Gotcha ::**
> The flex-direction property defaults to column in pdf renderer, opposite to what happens in browsers. This got me pulling hairs for some hours.

We'll heavily rely on flex to design the invoice.

You'll notice that I am setting the font-family to render bold and italic text. This is because the default fonts weights are installed as individual fonts.

Before we continue, let's clean the inline css.

```jsx
import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

var styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
  },
  title: {
    padding: "4pt",
    fontSize: "20pt",
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
  },
  textRight: {
    marginLeft: "auto",
  },
  rowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function Invoice() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
      </Page>
    </Document>
  );
}

function Header() {
  return (
    <View style={styles.rowBetween}>
      <View>
        <Image
          src="/logo.png"
          style={{
            width: "96pt",
          }}
          cache
        ></Image>
      </View>

      <Text style={styles.title}>INVOICE</Text>
      <View>
        <Text style={{ ...styles.textRight, textTransform: "uppercase" }}>
          Tenda Soft Ltd
        </Text>
        <Text style={styles.textRight}>Lusaka rd, Nairobi, Kenya</Text>
        <Text style={styles.textRight}>+254790589898</Text>
      </View>
    </View>
  );
}
```

React pdf library provides the stylesheet modules which can be use to write non-inline CSS. It returns an object with the same structure as the arguments supplied to it. You can extend the styles, as we have done here.

```jsx
<Text style={{ ...styles.textRight, textTransform: "uppercase" }}>
  Tenda Soft Ltd
</Text>
```

You should not rush to plan your styles top bottom. I generally start by using inline css to style my modules. Repetitive and long inline styles make good candidates for merging.

I use a similar corollary, for files and components. I am comfortable writing many components in the same file until they start looking misplaced. I'm reluctant to create new files unless I feel they are warranted. I don't plan the file structure in advance. I let the use case guide me.

> Actually is the one thing I love `jsx` compared to Vue's template files `.vue`. `jsx` allows you write components the way you would write js functions. And you can put as many you like in a single. `.vue` forces to plan ahead.

At the moment the `Invoice`, is starting to feel that way.
First lets look at the header component. to me it seems like something that will appear on every pdf document, except for the 'INVOICE' title. We can refactor it to make it a generic header that accept a title prop.

Next, look at how we are using `PDFViewer` in app. I feel that the app should know little about implementation details.

Let's refactor to resolve this. Create a new file and call it `pdf-document.tsx`. Copy this into it.

```jsx
import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 40,
  },
  title: {
    padding: "4pt",
    fontSize: "20pt",
    fontFamily: "Helvetica-Bold",
  },
  textRight: {
    marginLeft: "auto",
  },
  rowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function PDFDocument({
  children,
  title,
}: {
  children: React.ReactNode,
  title?: string,
}) {
  return (
    <PDFViewer width="100%" height="900">
      <Document>
        <Page size="A4" style={styles.page}>
          <Header title={title} />
          {children}
        </Page>
      </Document>
    </PDFViewer>
  );
}

function Header({ title }: { title?: string }) {
  title = title || "invoice";
  return (
    <View style={styles.rowBetween}>
      <View>
        <Image
          src="/logo.png"
          style={{
            width: "96pt",
          }}
          cache
        ></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={{ ...styles.textRight, textTransform: "uppercase" }}>
          Tenda Soft Ltd
        </Text>
        <Text style={styles.textRight}>Lusaka rd, Nairobi, Kenya</Text>
        <Text style={styles.textRight}>+254790589898</Text>
      </View>
    </View>
  );
}
```

Now create a `invoice.tsx` and use the `PDFDocument` as a template in the `Invoice` template.

```jsx
import { Text, View } from "@react-pdf/renderer";
import React from "react";
import PDFDocument from "./pdf-document";

export default function Invoice() {
  return (
    <PDFDocument>
      <View>
        <Text>Body of the invoice</Text>
      </View>
    </PDFDocument>
  );
}
```

Change the `app.tsx` to reflect the changes.

```jsx
import React from "react";
import Invoice from "./invoice";

export default function App() {
  return <Invoice />;
}
```

everything is cleaner now.

let now move to the top tab that shows the invoice details.
add the details component into the `invoice.tsx`

```jsx
export default function Invoice() {
  return (
    <PDFDocument>
      <Details />
    </PDFDocument>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: "4vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  equalSize: {
    flex: "1 1 0%",
  },
  halfWidth: {
    width: "50%",
  },
  quarterWidth: {
    width: "25%",
  },
  tableCell: {
    padding: "4",
  },
  pushRight: {
    marginLeft: "auto",
  },
  dt: {
    fontSize: "8pt",
    marginBottom: "4pt",
  },
});

function Details() {
  return (
    <View style={Object.assign({}, styles.section, styles.row)}>
      <View style={Object.assign({}, styles.tableCell, styles.halfWidth)}>
        <Text style={styles.dt}>Customer</Text>
        <Text style={{ textTransform: "uppercase" }}>Janet Kiama</Text>
        <Text>Nyayo House, Kenyatta Ave</Text>
        <Text>Nairobi, Kenya</Text>
        <Text>+254738092027</Text>
        <Text>janetkiama2022@gmail.com</Text>
      </View>
      <View style={styles.equalSize}>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Invoice number</Text>
          <Text>589400</Text>
        </View>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Terms of payment</Text>
          <Text>Advance</Text>
        </View>
      </View>
      <View style={styles.equalSize}>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={Object.assign({}, styles.dt, styles.pushRight)}>
            Issued on
          </Text>
          <Text style={styles.pushRight}>09 Nov 2022</Text>
        </View>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={Object.assign({}, styles.dt, styles.pushRight)}>
            Due on
          </Text>
          <Text style={styles.pushRight}>01 Dec 2022</Text>
        </View>
      </View>
    </View>
  );
}
```

We create a table/grid like structure using the CSS flex box.
To make the length of the children of a flex element equal we set the flex property like `flex: 1 1 0%`. The first `1` is the `flex-grow` , a value of 1 tells the object to expand to occupy the available space, the second `1` is the `flex-shrink` property and a value of 1 allows it to shrink when necessary, the `0%` is the `flex-basis` property, it dictates the ideal size of the element.

We use `Object.assign()` to combine styles, mimicking what would do, if they were using a CSS utility library like tailwind.

add the rest of the sections. Change the styles in `invoice.tsx` to

```jsx
const styles = StyleSheet.create({
  section: {
    marginTop: "4vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  equalSize: {
    flex: "1 1 0%",
  },
  halfWidth: {
    width: "50%",
  },
  quarterWidth: {
    width: "25%",
  },
  width7: {
    width: "7%",
  },
  width9: {
    width: "9%",
  },
  width16: {
    width: "16%",
  },
  tableCell: {
    padding: "4",
  },
  pushRight: {
    marginLeft: "auto",
  },
  dt: {
    fontSize: "8pt",
    marginBottom: "4pt",
  },
  sectionHeading: {
    backgroundColor: "#eee",
    justifyContent: "center",
    paddingVertical: "4",
  },
  tableRow: {
    borderBottom: "1px solid #ccc",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  paragraph: {
    marginBottom: 10,
  },
  alignRight: {
    textAlign: "right",
  },
});
```

add the line items, payment method and notes section:

```jsx
export function BankDetails() {
  return (
    <View style={styles.section}>
      <View style={Object.assign({}, styles.row, styles.sectionHeading)}>
        <Text>HOW TO PAY</Text>
      </View>
      <View style={styles.row}>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Bank</Text>
          <Text>National Bank of Kenya</Text>
        </View>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Account Number</Text>
          <Text>9012909012</Text>
        </View>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Account Name</Text>
          <Text>Tenda Soft Ltd</Text>
        </View>
        <View style={Object.assign({}, styles.tableCell, styles.equalSize)}>
          <Text style={styles.dt}>Amount</Text>
          <Text>Ksh 117,000.00</Text>
        </View>
      </View>
    </View>
  );
}

function Summary() {
  let lineItems = [
    {
      item: "MS Office",
      description:
        "Installation of Microsoft Office Professional with a lifetime group licence",
      quantity: 3,
      price: 30000,
      amount: 90000,
    },
    {
      item: "Kaspersky",
      description: "1 year antivirus protection group licence",
      quantity: 3,
      price: 3000,
      amount: 9000,
    },
  ];
  return (
    <View style={Object.assign({}, styles.section, styles.tableRow)}>
      <View style={Object.assign({}, styles.row, styles.tableRow, styles.bold)}>
        <Text style={Object.assign({}, styles.quarterWidth, styles.tableCell)}>
          Item
        </Text>
        <Text style={Object.assign({}, styles.halfWidth, styles.tableCell)}>
          Description
        </Text>
        <Text style={Object.assign({}, styles.width7, styles.tableCell)}>
          Qty
        </Text>
        <Text
          style={Object.assign(
            {},
            styles.width9,
            styles.tableCell,
            styles.alignRight
          )}
        >
          Price
        </Text>
        <Text
          style={Object.assign(
            {},
            styles.width9,
            styles.tableCell,
            styles.alignRight
          )}
        >
          Amount
        </Text>
      </View>
      {lineItems.map((item) => (
        <View style={Object.assign({}, styles.row, styles.tableRow)}>
          <Text
            style={Object.assign({}, styles.quarterWidth, styles.tableCell)}
          >
            {item.item}
          </Text>
          <Text style={Object.assign({}, styles.halfWidth, styles.tableCell)}>
            {item.description}
          </Text>
          <Text style={Object.assign({}, styles.width7, styles.tableCell)}>
            {item.quantity}
          </Text>
          <Text
            style={Object.assign(
              {},
              styles.width9,
              styles.tableCell,
              styles.alignRight
            )}
          >
            {item.price}
          </Text>
          <Text
            style={Object.assign(
              {},
              styles.width9,
              styles.tableCell,
              styles.alignRight
            )}
          >
            {item.amount}
          </Text>
        </View>
      ))}

      <View
        style={Object.assign({}, styles.row, styles.bold, styles.justifyEnd)}
      >
        <Text
          style={Object.assign(
            {},
            styles.width16,
            styles.tableCell,
            styles.alignRight
          )}
        >
          Total (Ksh)
        </Text>
        <Text
          style={Object.assign(
            {},
            styles.width9,
            styles.tableCell,
            styles.alignRight
          )}
        >
          117000
        </Text>
      </View>
      <View
        style={Object.assign({}, styles.row, styles.bold, styles.justifyEnd)}
      >
        <Text
          style={Object.assign(
            {},
            styles.width16,
            styles.tableCell,
            styles.alignRight
          )}
        >
          Paid (Ksh)
        </Text>
        <Text
          style={Object.assign(
            {},
            styles.width9,
            styles.tableCell,
            styles.alignRight
          )}
        >
          0
        </Text>
      </View>
      <View
        style={Object.assign({}, styles.row, styles.bold, styles.justifyEnd)}
      >
        <Text
          style={Object.assign(
            {},
            styles.width16,
            styles.tableCell,
            styles.alignRight
          )}
        >
          Due
        </Text>
        <Text
          style={Object.assign(
            {},
            styles.width9,
            styles.tableCell,
            styles.alignRight
          )}
        >
          117000
        </Text>
      </View>
    </View>
  );
}

function Notes() {
  return (
    <View style={styles.section}>
      <Text style={Object.assign({}, styles.bold, styles.paragraph)}>
        Notes
      </Text>
      <Text style={styles.paragraph}>All prices are in kenya shillings</Text>
      <Text style={styles.paragraph}>Payments are non refundable</Text>
    </View>
  );
}
```

We use the same tactic to develop the desired interface.

## Design the invoice data structure

## Separate the view logic from business logic
