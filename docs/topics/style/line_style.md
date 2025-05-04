<div id="random-image-container2"></div>


# Style Attributes

## Aliases

The style attributes of a shape or batch object are defined through their `style` property. Depending on the type of object, the style attributes may vary. Similar to the `bounding-box` property, we can use aliases to access the style attributes of a shape or batch object. T

## Line-Style Attributes

`item.stroke -> item.style.line_style.stroke`:
:  Visibility of the contour lines. It can be a boolean value indicating whether to draw the contour lines or not.

    The default value is `True`.

`item.line_width -> item.style.line_style.width`:
:  Line-width of the contour lines. Positive float value or LineWidth value.

    *   LineWidth.ULTRA_THIN
    *   LineWidth.VERY_THIN
    *   LineWidth.THIN
    *   LineWidth.THICK
    *   LineWidth.VERY_THICK
    *   LineWidth.ULTRA_THICK

    The default value is 1.

`item.line_color -> item.style.line_style.color`:
:   Line-color of the contour lines. It can be a color name, hex code, or RGB tuple. See [the colors](colors.md) for more information.

    The default value is `sg.black`.


`item.line_dash_array -> item.style.line_style.dash_array`:
:  Line-dash array of the shape object. It can be a list of floats or a string representing the dash pattern. For example, `item.line_dash_array = [5, 2]` will create a dashed line with 5 units of dash and 2 units of space.

    *   LineDashArray.DASHDOT
    *   LineDashArray.DASHED
    *   LineDashArray.DASHDOTDOT
    *   LineDashArray.DENSELY_DASHED
    *   LineDashArray.DENSELY_DOTTED
    *   LineDashArray.LOOSELY_DASHED

    The default value is `None`.

`item.line_dash_phase -> item.style.line_style.dash_phase`:
:  Line-dash phase of the contour lines. It can be a float value representing the phase offset of the dash pattern.

`item.line_cap -> item.style.line_style.cap`:
:  Line-cap of the contour lines.

    *   LineCap.BUTT
    *   LineCap.ROUND
    *   LineCap.SQUARE

    The default value is `LineCap.BUTT`.

`item.line_join -> item.style.line_style.join`:
:  Line-join of the contour lines.

    *   LineJoin.BEVEL
    *   LineJoin.MITER
    *   LineJoin.ROUND

    The default value is `LineJoin.MITER`.

`item.fillet_radius -> item.style.line_style.fillet_radius`:
:  Fillet radius of the contour lines. It can be a float value representing the radius of the fillet.

    The default value is 0.

`item.draw_fillets -> item.style.line_style.draw_fillets`:
:  Draw fillets of the contour lines. It can be a boolean value indicating whether to draw fillets or not.

    The default value is `False`.

`item.smooth -> item.style.line_style.smooth`:
:  Smoothness of the contour lines. It can be a boolean value indicating whether to smooth the contour lines or not.

    The default value is `False`.

`item.double_lines -> item.style.line_style.double_lines`:
:  Draw double lines of the contour lines. It can be a boolean value indicating whether to draw double lines or not.

    The default value is `False`.

`item.double_distance -> item.style.line_style.double_distance`:
:  Distance between the double lines of the contour lines. It can be a float value representing the distance between the double lines.

    The default value is 0.
