<div id="random-image-container2"></div>


# Colors

<a id="sec_color_chart"></a>
## Named-colors

SİMETRİ provides a comprehensive list of colors that can be used in your designs. These colors can be accessed by using `sg.color_name`. The chart of all available named-colors is shown below.

!!! note "These names come from the `xkcd color survey`"
    The colors are defined in the [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#named-colors) specification. The list is not exhaustive, and you can always define your own colors using RGB or HEX values.


![named_color_chart](../assets/sg_color_chart.svg){ width="800"}


## colorsys -- Conversions between color systems ([from Python 3.13.3 documentation](https://docs.python.org/3/library/colorsys.html))

colorsys — Conversions between color systems
Source code: Lib/colorsys.py

The colorsys module defines bidirectional conversions of color values between colors expressed in the RGB (Red Green Blue) color space used in computer monitors and three other coordinate systems: YIQ, HLS (Hue Lightness Saturation) and HSV (Hue Saturation Value). Coordinates in all of these color spaces are floating-point values. In the YIQ space, the Y coordinate is between 0 and 1, but the I and Q coordinates can be positive or negative. In all other spaces, the coordinates are all between 0 and 1.

See also More information about color spaces can be found at [https://poynton.ca/ColorFAQ.html](https://poynton.ca/ColorFAQ.html) and [https://www.cambridgeincolour.com/tutorials/color-spaces.htm](https://www.cambridgeincolour.com/tutorials/color-spaces.htm).
The colorsys module defines the following functions:

colorsys.rgb_to_yiq(r, g, b)
:   Convert the color from RGB coordinates to YIQ coordinates.

colorsys.yiq_to_rgb(y, i, q)
:   Convert the color from YIQ coordinates to RGB coordinates.

colorsys.rgb_to_hls(r, g, b)
:   Convert the color from RGB coordinates to HLS coordinates.

colorsys.hls_to_rgb(h, l, s)
:   Convert the color from HLS coordinates to RGB coordinates.

colorsys.rgb_to_hsv(r, g, b)
:   Convert the color from RGB coordinates to HSV coordinates.

colorsys.hsv_to_rgb(h, s, v)
: Convert the color from HSV coordinates to RGB coordinates.

Example:

```python
>>> import colorsys
>>> colorsys.rgb_to_hsv(0.2, 0.4, 0.4)
(0.5, 0.5, 0.4)
>>>colorsys.hsv_to_rgb(0.5, 0.5, 0.4)
(0.2, 0.4, 0.4)
>>>
```

<!-- From [css named-colors](https://www.w3.org/TR/css-color-4/#named-colors)

black	#000000
silver	#c0c0c0
gray	#808080
white	#ffffff
maroon	#800000
red	#ff0000
purple	#800080
fuchsia	#ff00ff
green	#008000
lime	#00ff00
olive	#808000
yellow	#ffff00
navy	#000080
blue	#0000ff
teal	#008080
aqua	#00ffff
In addition to these 16 colors, about 150 other colors have a keyword associated to them: -->

<!-- # Keyword	RGB hex value	Sample
# aliceblue	#f0f8ff
# antiquewhite	#faebd7
# aqua	#00ffff
# aquamarine	#7fffd4
# azure	#f0ffff
# beige	#f5f5dc
# bisque	#ffe4c4
# black	#000000
# blanchedalmond	#ffebcd
# blue	#0000ff
# blueviolet	#8a2be2
# brown	#a52a2a
# burlywood	#deb887
# cadetblue	#5f9ea0
# chartreuse	#7fff00
# chocolate	#d2691e
# coral	#ff7f50
# cornflowerblue	#6495ed
# cornsilk	#fff8dc
# crimson	#dc143c
# cyan
# #00ffff (synonym of aqua)
# darkblue	#00008b
# darkcyan	#008b8b
# darkgoldenrod	#b8860b
# darkgray	#a9a9a9
# darkgreen	#006400
# darkgrey	#a9a9a9
# darkkhaki	#bdb76b
# darkmagenta	#8b008b
# darkolivegreen	#556b2f
# darkorange	#ff8c00
# darkorchid	#9932cc
# darkred	#8b0000
# darksalmon	#e9967a
# darkseagreen	#8fbc8f
# darkslateblue	#483d8b
# darkslategray	#2f4f4f
# darkslategrey	#2f4f4f
# darkturquoise	#00ced1
# darkviolet	#9400d3
# deeppink	#ff1493
# deepskyblue	#00bfff
# dimgray	#696969
# dimgrey	#696969
# dodgerblue	#1e90ff
# firebrick	#b22222
# floralwhite	#fffaf0
# forestgreen	#228b22
# fuchsia	#ff00ff
# gainsboro	#dcdcdc
# ghostwhite	#f8f8ff
# gold	#ffd700
# goldenrod	#daa520
# gray	#808080
# green	#008000
# greenyellow	#adff2f
# grey	#808080 (synonym of gray)
# honeydew	#f0fff0
# hotpink	#ff69b4
# indianred	#cd5c5c
# indigo	#4b0082
# ivory	#fffff0
# khaki	#f0e68c
# lavender	#e6e6fa
# lavenderblush	#fff0f5
# lawngreen	#7cfc00
# lemonchiffon	#fffacd
# lightblue	#add8e6
# lightcoral	#f08080
# lightcyan	#e0ffff
# lightgoldenrodyellow	#fafad2
# lightgray	#d3d3d3
# lightgreen	#90ee90
# lightgrey	#d3d3d3
# lightpink	#ffb6c1
# lightsalmon	#ffa07a
# lightseagreen	#20b2aa
# lightskyblue	#87cefa
# lightslategray	#778899
# lightslategrey	#778899
# lightsteelblue	#b0c4de
# lightyellow	#ffffe0
# lime	#00ff00
# limegreen	#32cd32
# linen	#faf0e6
# magenta
# #ff00ff (synonym of fuchsia)
# maroon	#800000
# mediumaquamarine	#66cdaa
# mediumblue	#0000cd
# mediumorchid	#ba55d3
# mediumpurple	#9370db
# mediumseagreen	#3cb371
# mediumslateblue	#7b68ee
# mediumspringgreen	#00fa9a
# mediumturquoise	#48d1cc
# mediumvioletred	#c71585
# midnightblue	#191970
# mintcream	#f5fffa
# mistyrose	#ffe4e1
# moccasin	#ffe4b5
# navajowhite	#ffdead
# navy	#000080
# oldlace	#fdf5e6
# olive	#808000
# olivedrab	#6b8e23
# orange	#ffa500
# orangered	#ff4500
# orchid	#da70d6
# palegoldenrod	#eee8aa
# palegreen	#98fb98
# paleturquoise	#afeeee
# palevioletred	#db7093
# papayawhip	#ffefd5
# peachpuff	#ffdab9
# peru	#cd853f
# pink	#ffc0cb
# plum	#dda0dd
# powderblue	#b0e0e6
# purple	#800080
# rebeccapurple	#663399
# red	#ff0000
# rosybrown	#bc8f8f
# royalblue	#4169e1
# saddlebrown	#8b4513
# salmon	#fa8072
# sandybrown	#f4a460
# seagreen	#2e8b57
# seashell	#fff5ee
# sienna	#a0522d
# silver	#c0c0c0
# skyblue	#87ceeb
# slateblue	#6a5acd
# slategray	#708090
# slategrey	#708090
# snow	#fffafa
# springgreen	#00ff7f
# steelblue	#4682b4
# tan	#d2b48c
# teal	#008080
# thistle	#d8bfd8
# tomato	#ff6347
# transparent	See transparent.
# turquoise	#40e0d0
# violet	#ee82ee
# wheat	#f5deb3
# white	#ffffff
# whitesmoke	#f5f5f5
# yellow	#ffff00
# yellowgreen	#9acd32


<table class="named-color-table">
    <thead>
     <tr>
      <th>Named
      <th>Numeric
      <th>Color name
      <th>Hex rgb
      <th>Decimal
    <tbody>
     <tr>
      <td style="background:aliceblue">
      <td style="background:#f0f8ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-aliceblue">aliceblue</dfn>
      <td>#f0f8ff
      <td>240 248 255
     <tr>
      <td style="background:antiquewhite">
      <td style="background:#faebd7">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-antiquewhite">antiquewhite</dfn>
      <td>#faebd7
      <td>250 235 215
     <tr>
      <td style="background:aqua">
      <td style="background:#00ffff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-aqua">aqua</dfn>
      <td>#00ffff
      <td>0 255 255
     <tr>
      <td style="background:aquamarine">
      <td style="background:#7fffd4">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-aquamarine">aquamarine</dfn>
      <td>#7fffd4
      <td>127 255 212
     <tr>
      <td style="background:azure">
      <td style="background:#f0ffff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-azure">azure</dfn>
      <td>#f0ffff
      <td>240 255 255
     <tr>
      <td style="background:beige">
      <td style="background:#f5f5dc">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-beige">beige</dfn>
      <td>#f5f5dc
      <td>245 245 220
     <tr>
      <td style="background:bisque">
      <td style="background:#ffe4c4">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-bisque">bisque</dfn>
      <td>#ffe4c4
      <td>255 228 196
     <tr>
      <td style="background:black">
      <td style="background:#000000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-black">black</dfn>
      <td>#000000
      <td>0 0 0
     <tr>
      <td style="background:blanchedalmond">
      <td style="background:#ffebcd">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-blanchedalmond">blanchedalmond</dfn>
      <td>#ffebcd
      <td>255 235 205
     <tr>
      <td style="background:blue">
      <td style="background:#0000ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-blue">blue</dfn>
      <td>#0000ff
      <td>0 0 255
     <tr>
      <td style="background:blueviolet">
      <td style="background:#8a2be2">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-blueviolet">blueviolet</dfn>
      <td>#8a2be2
      <td>138 43 226
     <tr>
      <td style="background:brown">
      <td style="background:#a52a2a">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-brown">brown</dfn>
      <td>#a52a2a
      <td>165 42 42
     <tr>
      <td style="background:burlywood">
      <td style="background:#deb887">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-burlywood">burlywood</dfn>
      <td>#deb887
      <td>222 184 135
     <tr>
      <td style="background:cadetblue">
      <td style="background:#5f9ea0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-cadetblue">cadetblue</dfn>
      <td>#5f9ea0
      <td>95 158 160
     <tr>
      <td style="background:chartreuse">
      <td style="background:#7fff00">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-chartreuse">chartreuse</dfn>
      <td>#7fff00
      <td>127 255 0
     <tr>
      <td style="background:chocolate">
      <td style="background:#d2691e">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-chocolate">chocolate</dfn>
      <td>#d2691e
      <td>210 105 30
     <tr>
      <td style="background:coral">
      <td style="background:#ff7f50">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-coral">coral</dfn>
      <td>#ff7f50
      <td>255 127 80
     <tr>
      <td style="background:cornflowerblue">
      <td style="background:#6495ed">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-cornflowerblue">cornflowerblue</dfn>
      <td>#6495ed
      <td>100 149 237
     <tr>
      <td style="background:cornsilk">
      <td style="background:#fff8dc">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-cornsilk">cornsilk</dfn>
      <td>#fff8dc
      <td>255 248 220
     <tr>
      <td style="background:crimson">
      <td style="background:#dc143c">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-crimson">crimson</dfn>
      <td>#dc143c
      <td>220 20 60
     <tr>
      <td style="background:cyan">
      <td style="background:#00ffff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-cyan">cyan</dfn>
      <td>#00ffff
      <td>0 255 255
     <tr>
      <td style="background:darkblue">
      <td style="background:#00008b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkblue">darkblue</dfn>
      <td>#00008b
      <td>0 0 139
     <tr>
      <td style="background:darkcyan">
      <td style="background:#008b8b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkcyan">darkcyan</dfn>
      <td>#008b8b
      <td>0 139 139
     <tr>
      <td style="background:darkgoldenrod">
      <td style="background:#b8860b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkgoldenrod">darkgoldenrod</dfn>
      <td>#b8860b
      <td>184 134 11
     <tr>
      <td style="background:darkgray">
      <td style="background:#a9a9a9">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkgray">darkgray</dfn>
      <td>#a9a9a9
      <td>169 169 169
     <tr>
      <td style="background:darkgreen">
      <td style="background:#006400">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkgreen">darkgreen</dfn>
      <td>#006400
      <td>0 100 0
     <tr>
      <td style="background:darkgrey">
      <td style="background:#a9a9a9">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkgrey">darkgrey</dfn>
      <td>#a9a9a9
      <td>169 169 169
     <tr>
      <td style="background:darkkhaki">
      <td style="background:#bdb76b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkkhaki">darkkhaki</dfn>
      <td>#bdb76b
      <td>189 183 107
     <tr>
      <td style="background:darkmagenta">
      <td style="background:#8b008b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkmagenta">darkmagenta</dfn>
      <td>#8b008b
      <td>139 0 139
     <tr>
      <td style="background:darkolivegreen">
      <td style="background:#556b2f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkolivegreen">darkolivegreen</dfn>
      <td>#556b2f
      <td>85 107 47
     <tr>
      <td style="background:darkorange">
      <td style="background:#ff8c00">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkorange">darkorange</dfn>
      <td>#ff8c00
      <td>255 140 0
     <tr>
      <td style="background:darkorchid">
      <td style="background:#9932cc">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkorchid">darkorchid</dfn>
      <td>#9932cc
      <td>153 50 204
     <tr>
      <td style="background:darkred">
      <td style="background:#8b0000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkred">darkred</dfn>
      <td>#8b0000
      <td>139 0 0
     <tr>
      <td style="background:darksalmon">
      <td style="background:#e9967a">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darksalmon">darksalmon</dfn>
      <td>#e9967a
      <td>233 150 122
     <tr>
      <td style="background:darkseagreen">
      <td style="background:#8fbc8f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkseagreen">darkseagreen</dfn>
      <td>#8fbc8f
      <td>143 188 143
     <tr>
      <td style="background:darkslateblue">
      <td style="background:#483d8b">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkslateblue">darkslateblue</dfn>
      <td>#483d8b
      <td>72 61 139
     <tr>
      <td style="background:darkslategray">
      <td style="background:#2f4f4f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkslategray">darkslategray</dfn>
      <td>#2f4f4f
      <td>47 79 79
     <tr>
      <td style="background:darkslategrey">
      <td style="background:#2f4f4f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkslategrey">darkslategrey</dfn>
      <td>#2f4f4f
      <td>47 79 79
     <tr>
      <td style="background:darkturquoise">
      <td style="background:#00ced1">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkturquoise">darkturquoise</dfn>
      <td>#00ced1
      <td>0 206 209
     <tr>
      <td style="background:darkviolet">
      <td style="background:#9400d3">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-darkviolet">darkviolet</dfn>
      <td>#9400d3
      <td>148 0 211
     <tr>
      <td style="background:deeppink">
      <td style="background:#ff1493">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-deeppink">deeppink</dfn>
      <td>#ff1493
      <td>255 20 147
     <tr>
      <td style="background:deepskyblue">
      <td style="background:#00bfff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-deepskyblue">deepskyblue</dfn>
      <td>#00bfff
      <td>0 191 255
     <tr>
      <td style="background:dimgray">
      <td style="background:#696969">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-dimgray">dimgray</dfn>
      <td>#696969
      <td>105 105 105
     <tr>
      <td style="background:dimgrey">
      <td style="background:#696969">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-dimgrey">dimgrey</dfn>
      <td>#696969
      <td>105 105 105
     <tr>
      <td style="background:dodgerblue">
      <td style="background:#1e90ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-dodgerblue">dodgerblue</dfn>
      <td>#1e90ff
      <td>30 144 255
     <tr>
      <td style="background:firebrick">
      <td style="background:#b22222">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-firebrick">firebrick</dfn>
      <td>#b22222
      <td>178 34 34
     <tr>
      <td style="background:floralwhite">
      <td style="background:#fffaf0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-floralwhite">floralwhite</dfn>
      <td>#fffaf0
      <td>255 250 240
     <tr>
      <td style="background:forestgreen">
      <td style="background:#228b22">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-forestgreen">forestgreen</dfn>
      <td>#228b22
      <td>34 139 34
     <tr>
      <td style="background:fuchsia">
      <td style="background:#ff00ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-fuchsia">fuchsia</dfn>
      <td>#ff00ff
      <td>255 0 255
     <tr>
      <td style="background:gainsboro">
      <td style="background:#dcdcdc">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-gainsboro">gainsboro</dfn>
      <td>#dcdcdc
      <td>220 220 220
     <tr>
      <td style="background:ghostwhite">
      <td style="background:#f8f8ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-ghostwhite">ghostwhite</dfn>
      <td>#f8f8ff
      <td>248 248 255
     <tr>
      <td style="background:gold">
      <td style="background:#ffd700">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-gold">gold</dfn>
      <td>#ffd700
      <td>255 215 0
     <tr>
      <td style="background:goldenrod">
      <td style="background:#daa520">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-goldenrod">goldenrod</dfn>
      <td>#daa520
      <td>218 165 32
     <tr>
      <td style="background:gray">
      <td style="background:#808080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-gray">gray</dfn>
      <td>#808080
      <td>128 128 128
     <tr>
      <td style="background:green">
      <td style="background:#008000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-green">green</dfn>
      <td>#008000
      <td>0 128 0
     <tr>
      <td style="background:greenyellow">
      <td style="background:#adff2f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-greenyellow">greenyellow</dfn>
      <td>#adff2f
      <td>173 255 47
     <tr>
      <td style="background:grey">
      <td style="background:#808080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-grey">grey</dfn>
      <td>#808080
      <td>128 128 128
     <tr>
      <td style="background:honeydew">
      <td style="background:#f0fff0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-honeydew">honeydew</dfn>
      <td>#f0fff0
      <td>240 255 240
     <tr>
      <td style="background:hotpink">
      <td style="background:#ff69b4">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-hotpink">hotpink</dfn>
      <td>#ff69b4
      <td>255 105 180
     <tr>
      <td style="background:indianred">
      <td style="background:#cd5c5c">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-indianred">indianred</dfn>
      <td>#cd5c5c
      <td>205 92 92
     <tr>
      <td style="background:indigo">
      <td style="background:#4b0082">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-indigo">indigo</dfn>
      <td>#4b0082
      <td>75 0 130
     <tr>
      <td style="background:ivory">
      <td style="background:#fffff0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-ivory">ivory</dfn>
      <td>#fffff0
      <td>255 255 240
     <tr>
      <td style="background:khaki">
      <td style="background:#f0e68c">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-khaki">khaki</dfn>
      <td>#f0e68c
      <td>240 230 140
     <tr>
      <td style="background:lavender">
      <td style="background:#e6e6fa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lavender">lavender</dfn>
      <td>#e6e6fa
      <td>230 230 250
     <tr>
      <td style="background:lavenderblush">
      <td style="background:#fff0f5">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lavenderblush">lavenderblush</dfn>
      <td>#fff0f5
      <td>255 240 245
     <tr>
      <td style="background:lawngreen">
      <td style="background:#7cfc00">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lawngreen">lawngreen</dfn>
      <td>#7cfc00
      <td>124 252 0
     <tr>
      <td style="background:lemonchiffon">
      <td style="background:#fffacd">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lemonchiffon">lemonchiffon</dfn>
      <td>#fffacd
      <td>255 250 205
     <tr>
      <td style="background:lightblue">
      <td style="background:#add8e6">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightblue">lightblue</dfn>
      <td>#add8e6
      <td>173 216 230
     <tr>
      <td style="background:lightcoral">
      <td style="background:#f08080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightcoral">lightcoral</dfn>
      <td>#f08080
      <td>240 128 128
     <tr>
      <td style="background:lightcyan">
      <td style="background:#e0ffff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightcyan">lightcyan</dfn>
      <td>#e0ffff
      <td>224 255 255
     <tr>
      <td style="background:lightgoldenrodyellow">
      <td style="background:#fafad2">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightgoldenrodyellow">lightgoldenrodyellow</dfn>
      <td>#fafad2
      <td>250 250 210
     <tr>
      <td style="background:lightgray">
      <td style="background:#d3d3d3">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightgray">lightgray</dfn>
      <td>#d3d3d3
      <td>211 211 211
     <tr>
      <td style="background:lightgreen">
      <td style="background:#90ee90">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightgreen">lightgreen</dfn>
      <td>#90ee90
      <td>144 238 144
     <tr>
      <td style="background:lightgrey">
      <td style="background:#d3d3d3">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightgrey">lightgrey</dfn>
      <td>#d3d3d3
      <td>211 211 211
     <tr>
      <td style="background:lightpink">
      <td style="background:#ffb6c1">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightpink">lightpink</dfn>
      <td>#ffb6c1
      <td>255 182 193
     <tr>
      <td style="background:lightsalmon">
      <td style="background:#ffa07a">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightsalmon">lightsalmon</dfn>
      <td>#ffa07a
      <td>255 160 122
     <tr>
      <td style="background:lightseagreen">
      <td style="background:#20b2aa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightseagreen">lightseagreen</dfn>
      <td>#20b2aa
      <td>32 178 170
     <tr>
      <td style="background:lightskyblue">
      <td style="background:#87cefa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightskyblue">lightskyblue</dfn>
      <td>#87cefa
      <td>135 206 250
     <tr>
      <td style="background:lightslategray">
      <td style="background:#778899">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightslategray">lightslategray</dfn>
      <td>#778899
      <td>119 136 153
     <tr>
      <td style="background:lightslategrey">
      <td style="background:#778899">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightslategrey">lightslategrey</dfn>
      <td>#778899
      <td>119 136 153
     <tr>
      <td style="background:lightsteelblue">
      <td style="background:#b0c4de">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightsteelblue">lightsteelblue</dfn>
      <td>#b0c4de
      <td>176 196 222
     <tr>
      <td style="background:lightyellow">
      <td style="background:#ffffe0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lightyellow">lightyellow</dfn>
      <td>#ffffe0
      <td>255 255 224
     <tr>
      <td style="background:lime">
      <td style="background:#00ff00">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-lime">lime</dfn>
      <td>#00ff00
      <td>0 255 0
     <tr>
      <td style="background:limegreen">
      <td style="background:#32cd32">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-limegreen">limegreen</dfn>
      <td>#32cd32
      <td>50 205 50
     <tr>
      <td style="background:linen">
      <td style="background:#faf0e6">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-linen">linen</dfn>
      <td>#faf0e6
      <td>250 240 230
     <tr>
      <td style="background:magenta">
      <td style="background:#ff00ff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-magenta">magenta</dfn>
      <td>#ff00ff
      <td>255 0 255
     <tr>
      <td style="background:maroon">
      <td style="background:#800000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-maroon">maroon</dfn>
      <td>#800000
      <td>128 0 0
     <tr>
      <td style="background:mediumaquamarine">
      <td style="background:#66cdaa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumaquamarine">mediumaquamarine</dfn>
      <td>#66cdaa
      <td>102 205 170
     <tr>
      <td style="background:mediumblue">
      <td style="background:#0000cd">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumblue">mediumblue</dfn>
      <td>#0000cd
      <td>0 0 205
     <tr>
      <td style="background:mediumorchid">
      <td style="background:#ba55d3">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumorchid">mediumorchid</dfn>
      <td>#ba55d3
      <td>186 85 211
     <tr>
      <td style="background:mediumpurple">
      <td style="background:#9370db">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumpurple">mediumpurple</dfn>
      <td>#9370db
      <td>147 112 219
     <tr>
      <td style="background:mediumseagreen">
      <td style="background:#3cb371">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumseagreen">mediumseagreen</dfn>
      <td>#3cb371
      <td>60 179 113
     <tr>
      <td style="background:mediumslateblue">
      <td style="background:#7b68ee">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumslateblue">mediumslateblue</dfn>
      <td>#7b68ee
      <td>123 104 238
     <tr>
      <td style="background:mediumspringgreen">
      <td style="background:#00fa9a">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumspringgreen">mediumspringgreen</dfn>
      <td>#00fa9a
      <td>0 250 154
     <tr>
      <td style="background:mediumturquoise">
      <td style="background:#48d1cc">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumturquoise">mediumturquoise</dfn>
      <td>#48d1cc
      <td>72 209 204
     <tr>
      <td style="background:mediumvioletred">
      <td style="background:#c71585">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mediumvioletred">mediumvioletred</dfn>
      <td>#c71585
      <td>199 21 133
     <tr>
      <td style="background:midnightblue">
      <td style="background:#191970">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-midnightblue">midnightblue</dfn>
      <td>#191970
      <td>25 25 112
     <tr>
      <td style="background:mintcream">
      <td style="background:#f5fffa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mintcream">mintcream</dfn>
      <td>#f5fffa
      <td>245 255 250
     <tr>
      <td style="background:mistyrose">
      <td style="background:#ffe4e1">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-mistyrose">mistyrose</dfn>
      <td>#ffe4e1
      <td>255 228 225
     <tr>
      <td style="background:moccasin">
      <td style="background:#ffe4b5">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-moccasin">moccasin</dfn>
      <td>#ffe4b5
      <td>255 228 181
     <tr>
      <td style="background:navajowhite">
      <td style="background:#ffdead">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-navajowhite">navajowhite</dfn>
      <td>#ffdead
      <td>255 222 173
     <tr>
      <td style="background:navy">
      <td style="background:#000080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-navy">navy</dfn>
      <td>#000080
      <td>0 0 128
     <tr>
      <td style="background:oldlace">
      <td style="background:#fdf5e6">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-oldlace">oldlace</dfn>
      <td>#fdf5e6
      <td>253 245 230
     <tr>
      <td style="background:olive">
      <td style="background:#808000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-olive">olive</dfn>
      <td>#808000
      <td>128 128 0
     <tr>
      <td style="background:olivedrab">
      <td style="background:#6b8e23">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-olivedrab">olivedrab</dfn>
      <td>#6b8e23
      <td>107 142 35
     <tr>
      <td style="background:orange">
      <td style="background:#ffa500">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-orange">orange</dfn>
      <td>#ffa500
      <td>255 165 0
     <tr>
      <td style="background:orangered">
      <td style="background:#ff4500">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-orangered">orangered</dfn>
      <td>#ff4500
      <td>255 69 0
     <tr>
      <td style="background:orchid">
      <td style="background:#da70d6">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-orchid">orchid</dfn>
      <td>#da70d6
      <td>218 112 214
     <tr>
      <td style="background:palegoldenrod">
      <td style="background:#eee8aa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-palegoldenrod">palegoldenrod</dfn>
      <td>#eee8aa
      <td>238 232 170
     <tr>
      <td style="background:palegreen">
      <td style="background:#98fb98">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-palegreen">palegreen</dfn>
      <td>#98fb98
      <td>152 251 152
     <tr>
      <td style="background:paleturquoise">
      <td style="background:#afeeee">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-paleturquoise">paleturquoise</dfn>
      <td>#afeeee
      <td>175 238 238
     <tr>
      <td style="background:palevioletred">
      <td style="background:#db7093">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-palevioletred">palevioletred</dfn>
      <td>#db7093
      <td>219 112 147
     <tr>
      <td style="background:papayawhip">
      <td style="background:#ffefd5">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-papayawhip">papayawhip</dfn>
      <td>#ffefd5
      <td>255 239 213
     <tr>
      <td style="background:peachpuff">
      <td style="background:#ffdab9">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-peachpuff">peachpuff</dfn>
      <td>#ffdab9
      <td>255 218 185
     <tr>
      <td style="background:peru">
      <td style="background:#cd853f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-peru">peru</dfn>
      <td>#cd853f
      <td>205 133 63
     <tr>
      <td style="background:pink">
      <td style="background:#ffc0cb">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-pink">pink</dfn>
      <td>#ffc0cb
      <td>255 192 203
     <tr>
      <td style="background:plum">
      <td style="background:#dda0dd">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-plum">plum</dfn>
      <td>#dda0dd
      <td>221 160 221
     <tr>
      <td style="background:powderblue">
      <td style="background:#b0e0e6">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-powderblue">powderblue</dfn>
      <td>#b0e0e6
      <td>176 224 230
     <tr>
      <td style="background:purple">
      <td style="background:#800080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-purple">purple</dfn>
      <td>#800080
      <td>128 0 128
     <tr>
      <td style="background:rebeccapurple">
      <td style="background:#663399">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-rebeccapurple">rebeccapurple</dfn>
      <td>#663399
      <td>102 51 153
     <tr>
      <td style="background:red">
      <td style="background:#ff0000">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-red">red</dfn>
      <td>#ff0000
      <td>255 0 0
     <tr>
      <td style="background:rosybrown">
      <td style="background:#bc8f8f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-rosybrown">rosybrown</dfn>
      <td>#bc8f8f
      <td>188 143 143
     <tr>
      <td style="background:royalblue">
      <td style="background:#4169e1">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-royalblue">royalblue</dfn>
      <td>#4169e1
      <td>65 105 225
     <tr>
      <td style="background:saddlebrown">
      <td style="background:#8b4513">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-saddlebrown">saddlebrown</dfn>
      <td>#8b4513
      <td>139 69 19
     <tr>
      <td style="background:salmon">
      <td style="background:#fa8072">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-salmon">salmon</dfn>
      <td>#fa8072
      <td>250 128 114
     <tr>
      <td style="background:sandybrown">
      <td style="background:#f4a460">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-sandybrown">sandybrown</dfn>
      <td>#f4a460
      <td>244 164 96
     <tr>
      <td style="background:seagreen">
      <td style="background:#2e8b57">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-seagreen">seagreen</dfn>
      <td>#2e8b57
      <td>46 139 87
     <tr>
      <td style="background:seashell">
      <td style="background:#fff5ee">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-seashell">seashell</dfn>
      <td>#fff5ee
      <td>255 245 238
     <tr>
      <td style="background:sienna">
      <td style="background:#a0522d">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-sienna">sienna</dfn>
      <td>#a0522d
      <td>160 82 45
     <tr>
      <td style="background:silver">
      <td style="background:#c0c0c0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-silver">silver</dfn>
      <td>#c0c0c0
      <td>192 192 192
     <tr>
      <td style="background:skyblue">
      <td style="background:#87ceeb">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-skyblue">skyblue</dfn>
      <td>#87ceeb
      <td>135 206 235
     <tr>
      <td style="background:slateblue">
      <td style="background:#6a5acd">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-slateblue">slateblue</dfn>
      <td>#6a5acd
      <td>106 90 205
     <tr>
      <td style="background:slategray">
      <td style="background:#708090">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-slategray">slategray</dfn>
      <td>#708090
      <td>112 128 144
     <tr>
      <td style="background:slategrey">
      <td style="background:#708090">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-slategrey">slategrey</dfn>
      <td>#708090
      <td>112 128 144
     <tr>
      <td style="background:snow">
      <td style="background:#fffafa">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-snow">snow</dfn>
      <td>#fffafa
      <td>255 250 250
     <tr>
      <td style="background:springgreen">
      <td style="background:#00ff7f">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-springgreen">springgreen</dfn>
      <td>#00ff7f
      <td>0 255 127
     <tr>
      <td style="background:steelblue">
      <td style="background:#4682b4">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-steelblue">steelblue</dfn>
      <td>#4682b4
      <td>70 130 180
     <tr>
      <td style="background:tan">
      <td style="background:#d2b48c">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-tan">tan</dfn>
      <td>#d2b48c
      <td>210 180 140
     <tr>
      <td style="background:teal">
      <td style="background:#008080">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-teal">teal</dfn>
      <td>#008080
      <td>0 128 128
     <tr>
      <td style="background:thistle">
      <td style="background:#d8bfd8">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-thistle">thistle</dfn>
      <td>#d8bfd8
      <td>216 191 216
     <tr>
      <td style="background:tomato">
      <td style="background:#ff6347">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-tomato">tomato</dfn>
      <td>#ff6347
      <td>255 99 71
     <tr>
      <td style="background:turquoise">
      <td style="background:#40e0d0">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-turquoise">turquoise</dfn>
      <td>#40e0d0
      <td>64 224 208
     <tr>
      <td style="background:violet">
      <td style="background:#ee82ee">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-violet">violet</dfn>
      <td>#ee82ee
      <td>238 130 238
     <tr>
      <td style="background:wheat">
      <td style="background:#f5deb3">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-wheat">wheat</dfn>
      <td>#f5deb3
      <td>245 222 179
     <tr>
      <td style="background:white">
      <td style="background:#ffffff">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-white">white</dfn>
      <td>#ffffff
      <td>255 255 255
     <tr>
      <td style="background:whitesmoke">
      <td style="background:#f5f5f5">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-whitesmoke">whitesmoke</dfn>
      <td>#f5f5f5
      <td>245 245 245
     <tr>
      <td style="background:yellow">
      <td style="background:#ffff00">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-yellow">yellow</dfn>
      <td>#ffff00
      <td>255 255 0
     <tr>
      <td style="background:yellowgreen">
      <td style="background:#9acd32">
      <th scope="row"><dfn class="dfn-paneled css" data-dfn-for="<color>, <named-color>" data-dfn-type="value" data-export id="valdef-color-yellowgreen">yellowgreen</dfn>
      <td>#9acd32
      <td>154 205 50
   </table> -->
