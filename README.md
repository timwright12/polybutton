polybutton
==========

An accessible version of links that look like buttons

[Read the associated blog post](http://www.csskarma.com/blog/polybutton)

Installation
--------------

```sh
<script src="polybutton.js"></script>
```

```sh
<span data-accessible="button" 
      data-type="button"
      data-value="Register"
      data-href="http://www.google.com"
      data-class="button">
  <noscript>
    <a href="http://www.google.com" class="button">Register</a>
  </noscript>
</span>
```

Breaking down the Polybutton markup
--------------

Let’s take a moment to break down the Polybutton elements so we’re on the same page with what’s happening the the HTML.

##### span
I chose to use a span because there’s no real semantic meaning behind it, and it’s default display state of inline wouldn’t interrupt the natural flow of the layout while allowing the button styles to come through. A very unobtrusive element overall.

##### data-accessible=”button”
This is the custom data attribute I chose as a trigger for the polyfill. At first I was using data-button=”accessible”, but I changed it to data-accessible=”button” so I could possibly add more elements into the accessibility script for the future.

##### data-type=”button/reset/submit”
Data-type sets the type of button that will get generated, even though there isn’t much reason to use anything other than “button” in this attribute, I wanted to open it up for any future possibilities.

##### data-value=”Register”
The data-value attribute is the text that gets outputted with the final generated button.

##### data-href=”http://google.com”
Data-href is the URL where the button/link should go when it’s ultimately clicked by the end user.

##### data-class=”button”
This is the CSS class you want to use on the button, this makes it inherit the normal styles you would use on a button. I close to use a data attribute instead of a straight class just to make sure the normal button CSS didn’t get applied to the <span> when the button is generated.

##### noscript
The <noscript> element allows this method to function without JavaScript; it’s pretty explicit, and just contains a normal link. For the edge case that JavaScript isn’t enabled, it will just bring us back to square 1, which is the current solution of styling a link to look like a button. Alternatively, you could style the noscript link to look like a link (communication fallback).

License
----

MIT

*Free Software, Hell Yeah!*
