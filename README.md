## A simple library for getting favicons from any site. Uses the Allorigins API to retrieve the site's HTML.
### How to use
- Connect grabIcons.js to your project
- Add the code below
```js
grabIcons("https://example.com")
.then(icons => {
  console.log(icons) // [icon1, icon2, icon3, ...]
}) 
```
If you have any problems or suggestions, write to me in [telegram](https://t.me/ghtx280)
