---
layout: page
title: Typography
permalink: /modules/typography/
resource: true
categories: Modules
---
{% include base.html %}


The following CSS classes allow you to control typography. Most of them are available in responsive variants.

### Text Alignment
Use to alignment inline elements.

- **Responsive:** Yes

{% highlight scss %}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
{% endhighlight %}

###  Font Weight
Use on elements to control the font thickness. Increases incrementally from `1` to `9`, in addition shortcut classes are `normal` and `bold`.

- **Responsive:** No

{% highlight scss %}
// Font Weight: Standard
.normal {
  font-weight: normal;
}
.bold {
  font-weight: bold;
}
// Font Weight: Increments
.fw--1 { font-weight: 100; }
.fw--2 { font-weight: 200; }
.fw--3 { font-weight: 300; }
.fw--4 { font-weight: 400; }
.fw--5 { font-weight: 500; }
.fw--6 { font-weight: 600; }
.fw--7 { font-weight: 700; }
.fw--8 { font-weight: 800; }
.fw--9 { font-weight: 900; }

{% endhighlight %}

###  Font Size
Predefined font size values to maintain typography hierarchy.

- **Responsive:** Yes

{% highlight scss %}
// Font Size

.fs(n) {
  font-size: pow(100, n);
}

{% endhighlight %}

###  Font Style
Use predefined styles on elements to control the font style.

- **Responsive:** No

{% highlight scss %}
// Font Size

.fst-normal {
  font-style: normal;
}
.fst-i {
  font-style: italics;
}

{% endhighlight %}

###  Text Decoration
Use predefined styles on elements to control the font decoration style.

- **Responsive:** No

{% highlight scss %}
// Text decoration

.strike {
  text-decoration: line-through;
}
.underline {
  text-decoration: underline;
}
.no-decor {
  text-decoration: none;
}

{% endhighlight %}

###  Text Transform
Use predefined styles on elements to control the font transform style.

- **Responsive:** No

{% highlight scss %}
// Text decoration
.t-caps {
  text-transform: capitalize;
}

.t-allcaps  {
  text-transform: uppercase;
}

.t-lowcase  {
  text-transform: lowercase;
}

.t-firstcap {
  text-transform: capitalize;
}

{% endhighlight %}

###  Vertical Alignment
Use predefined styles on elements to control the vertical alignment (including table) style.

- **Responsive:** No


{% highlight scss %}
// Text Decoration
// Vertical alignment
.va-base {
  vertical-align: baseline;
}
.va-sub {
  vertical-align: sub;
}
.va-sup {
  vertical-align: super;
}
.va-texttop {
  vertical-align: text-top;
}
.va-textbottom {
  vertical-align: text-bottom;  
}

// Table Alignment
.va-mid {
  vertical-align: text-middle;  
}
.va-top {
  vertical-align: text-top;  
}
.va-bottom {
  vertical-align: text-bottom;  
}

{% endhighlight %}

###  White space
Use predefined styles on elements to provide white space.

- **Responsive:** No

{% highlight scss %}
// White space
.ws-normal {
  white-space: normal;
}

.ws-nowrap  {
  white-space: nowrap;
}

.ws-pre  {
  white-space: pre;
}

{% endhighlight %}

###  Tracking
Use predefined styles on elements to provide tracking (letter spacing).

-  **Responsive:** No

{% highlight scss %}
// Tracking
.tr-tight  {
  letter-spacing: -0.03em;
}
.tr-loose  {
  letter-spacing: 0.16em;
}
.tr-xloose {
  letter-spacing: 0.32em;
}
{% endhighlight %}

###  Leading
Use predefined styles to provide standard, uniformed _line spacing_ styles for typography.

-  **Responsive:** Yes

{% highlight scss %}
// Leading
.lh-default {
  line-height: 1;
}
.lh-heading {
  line-height: 1.250;
}
.lh-body  {
  line-height: 1.500;
}
{% endhighlight %}