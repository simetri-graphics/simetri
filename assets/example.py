import simetri.graphics as sg # (2)!

canvas = sg.Canvas() # (3)!
points = [(0, 0), (50, 70), (100, 0)] # (5)!

triangle = sg.Shape(points=points)
canvas.draw(triangle) # (4)!

triangle2 = sg.Shape(points=points, closed=True)
triangle2.translate(dx=150, dy=0)
canvas.draw(triangle2, line_width = 2) # (1)!

canvas.save('c:/tmp/simetri_logo.svg', overwrite=True)
