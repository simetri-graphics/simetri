<div id="random-image-container"></div>

If you have a Python version >= 3.9 installed, execute the following command in the terminal:

`python3 -m pip install --upgrade simetri`

or

`python -m pip install --upgrade simetri`

This will not install a LaTeX distribution, so you will need to install one separately.

# Check if simetri.graphics installation is successful

In a terminal window type:

```xelatex -help```

If you get an error message, this may mean that you don't have a LaTeX installation or the path to the ```xelatex``` is not in your system path. Make sure that the system path includes the correct path to ```xelatex```.

Open a Python shell and type:

`#!python >>> import simetri.graphics as sg`

`#!python >>> sg.__version__ # this should return '0.0.6'`

`#!python >>> sg.hello()`

You should see a browser window showing you a welcome picture. If you don't see it, try

```>>> sg.Canvas().draw(sg.logo()).save('/your/path/here.pdf')```

If you see the created PDF-file in the given path, this means that your system is preventing opening a web-browser window by third parties. You can use the simetri.graphics but your output files will not be shown automatically.

If you would like to use Jupyter notebooks or JupyterLab you can use the same commands in a Python code-cell.



## Install a LaTeX distribution
There are several LaTeX distributions freely available for different operating systems. The recommended distribution is MacTex for macOS, TexLive for Linux and MikTeX for windows.


* TexLive can be downloaded from [https://www.tug.org/texlive/](https://www.tug.org/texlive/).
* MacTeX can be downloaded [https://www.tug.org/mactex/](https://www.tug.org/mactex/).
* MiKTeX can be downloaded [https://miktex.org/download](https://miktex.org/download).



## Install Jupyter notebooks
If you would like to run the scripts from a notebook environment, you need to install Jupyter Notebooks or JupyterLab. In some systems Jupyter may not use the system settings and behave different from the main Python environment.

See [https://jupyter.org/install](https://jupyter.org/install)

## Requirements

- Python version 3.9 or later.
- A LaTeX distribution with XeLaTeX engine is required for rendering the output. Miktex is the recommended distribution since it handles installation of required packages automatically.

The library requires the following Python packages:

- `numpy`
- `networkx`
- `matplotlib`
- `Pillow`
- `IPython`
- `pymupdf`
- `strenum`
- `typing-extensions`
- `scipy`

These extensions are installed automatically when you install the library using pip or uv.
