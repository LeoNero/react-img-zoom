<p align="center">
    <img src="https://i.imgur.com/Z6OW3Yd.png">
</p>

[![NPM version](https://badge.fury.io/js/react-img-zoom.svg)](http://badge.fury.io/js/react-img-zoom) [![GitHub Stars](https://img.shields.io/github/stars/LeoNero/react-img-zoom.svg)](https://github.com/LeoNero/react-img-zoom/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/LeoNero/react-img-zoom.svg)](https://github.com/LeoNero/react-img-zoom/issues) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php) [![CircleCI](https://circleci.com/gh/LeoNero/react-img-zoom/tree/master.svg?style=svg)](https://circleci.com/gh/LeoNero/react-img-zoom/tree/master)

A react component to zoom images on hover  
![A gif that shows an image beeing zoomed with a mouse](https://media.giphy.com/media/H4yzG6bPD0lUFtnWsE/giphy.gif)

## Installation
```
npm install react-img-zoom
```

## Basic usage
The component has only four required props: the link to the image, the zoom scale, the width and height (in pixels).

```jsx
import Zoom from 'react-img-zoom'

<Zoom
  img="link-to-img"
  zoomScale={3}
  width={600}
  height={600}
/>
```

You can refer to the [docs](https://react-img-zoom.netlify.com/) for more information and a live demo!

## To do
- [ ] [Accessibility improvements](https://github.com/LeoNero/react-img-zoom/issues/14)
- [ ] [Mobile support](https://github.com/LeoNero/react-img-zoom/issues/13)
- [_] Improve tests (more cases, snapshot tests, etc)
