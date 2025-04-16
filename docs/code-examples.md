Example Python codeblock:

=== "simetri.graphics Logo"
    <div class="grid" markdown ">
    ```py title="Print Logo"
    import simetri.graphics as sg

    canvas = sg.Canvas()

    logo = sg.logo()
    logo.scale(.3)
    print(logo.width, logo.height)
    canvas.border = 5
    # draw the logo
    canvas.draw(logo, line_width = .1)
    canvas.save('c:/tmp/simetri_logo.svg', overwrite=True)
    ```
    Let's see where this goes
    </div>

=== "Broken-line Illusion"
    ```py title="Illusion" linenums="1" hl_lines="5-7"
    import simetri.graphics as sg

    canvas = sg.Canvas()
    w, h, n = 30, 40, 8
    block = sg.Shape([(0, 0), (w, 0), (w, h), (0, h)], closed=True)
    blocks = block.glide([(20, 0), (20, 1)], h, n - 1).translate(2 * w, 0, reps=n - 1)
    lines = sg.Shape([(w / 2, 0), (w * (n - 1) * 2, 0)], line_width=1.5)
    lines.translate(0, h, reps=n - 1)

    canvas.draw([blocks, lines])
    canvas.save("c:/tmp/broken_line_illusion.ps", overwrite=True)
    ```
    ![simetri.graphics logo](assets/simetri_logo.svg "simetri.graphics logo")

    <details><summary>Click for more details</summary>

    The collapsed section's content goes here

    </details>


Example admonition:

!!! tip "This is an admonition title!"
    Reprehenderit et laborum qui magna sit nulla. Qui commodo ullamco dolore labore et nulla reprehenderit enim et culpa reprehenderit. Duis sint Lorem aute ipsum duis. Elit ex ex consequat ex non qui velit eiusmod ea. Sunt minim adipisicing anim dolore veniam ex aliqua sint nulla. Dolor sint est nulla minim anim duis Lorem qui in sunt.


??? warning "This is a collapsible admonition title!"
    Reprehenderit et laborum qui magna sit nulla. Qui commodo ullamco dolore labore et nulla reprehenderit enim et culpa reprehenderit. Duis sint Lorem aute ipsum duis. Elit ex ex consequat ex non qui velit eiusmod ea. Sunt minim adipisicing anim dolore veniam ex aliqua sint nulla. Dolor sint est nulla minim anim duis Lorem qui in sunt.
