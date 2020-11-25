# Tygr Auth

[Demo](https://tylergrinn.github.io/tygr-auth)

[Forking Guide](https://github.com/tylergrinn/tygr-auth/blob/main/docs/forking.md)

This is a react component packaged for three environments: node, browser, and standalone.

- Node is reccommended. If you are already using react in the project, this library simply exports a react component function you can use directly in jsx.

- Browser is for fast prototyping in the browser. You can add this component via a script tag. The react and react-dom script tags must be placed before the component script.

- Standalone is for projects that do not use react. It exposes the `mount` function, which takes an HTML element.

## Node

Installation:

```cmd
npm i --save @tygr/auth
```

Usage (jsx):

```jsx
import Auth from '@tygr/auth';

// Import styles. Make sure there is a style loader specified in your
// webpack config
import '@tygr/auth/lib/tygr-auth.min.css';

export default function MyComponent() {
  return (
    <div>
      <h1>Auth usage example</h1>
      <Auth />
    </div>
  );
}
```

## Browser

Usage:

When included via script tag, the component is exposed as a window library named 'TygrAuth'

```html
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://tylergrinn.github.io/tygr-auth/lib/tygr-auth.min.js"></script>
    <link
      rel="stylesheet"
      href="https://tylergrinn.github.io/tygr-auth/lib/tygr-auth.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      ReactDOM.render(<TygrAuth />, document.getElementById('app'));
    </script>
  </body>
</html>
```

## Standalone

Installation:

```cmd
npm i --save @tygr/auth
```

Usage:

```jsx

// Vanilla JS
import Auth from '@tygr/auth/lib/standalone';

const el = document.getElementById('tygr-auth');

Auth.mount(el);

// Vue
<template>
<div>
  <div ref="tygr-auth"></div>
</div>
</template>

<script>
import Auth from '@tygr/auth/lib/standalone';

export default {
  mounted() {
    Auth.mount(this.$refs['tygr-auth']);
  },
};
</script>

// Angular Typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import Auth from '@tygr/auth/lib/standalone';

@Component({
  selector: 'app-root',
  template: '<div><div #tygr-auth></div></div>',
})
export class AuthComponent  {
  @ViewChild('tygr-auth') el: ElementRef;

  ngAfterViewInit() {
    Auth.mount(this.el.nativeElement);
  }
}
```

You should not use the standalone version if you have multiple react components in your project.

## Customizing styles

Sass variables can be overridden if you accept responsibility for transpiling it into css. You can see an example of this setup in the `demo/webpack.config.js` configuration named `sass`.

Make sure to reassign any sass variables before importing the `sass` library:

```scss
$accent-1: white;
$accent-2: yellow;

@import '@tygr/auth/sass';
```

Once someone on your service authenticates via Sign in with Twitter you must clearly display their Twitter identity. Twitter identity includes the person’s current Twitter @handle, avatar, and Twitter logo. Any display of someone’s Twitter followers on your service must clearly show that the relationship is associated with Twitter.

[Display requirements](https://developer.twitter.com/en/developer-terms/display-requirements)
