---
date: 2026-04-22
categories:
    - News
tags:
    - SVG
---

Now we can generate output files in SVG format. We have not released this version yet, but if you clone the [GitHub repo](https://github.com/mekanimo/simetri), you can already use the new renderer. If you would like step-by-step instructions for setting up the development branch locally, let us know. We will release a new version that includes the SVG renderer once testing is complete. This will be the last alpha release. To use the new SVG renderer, simply specify an output file with the `.svg` extension (`canvas.save("filename.svg")`).

SVG output is especially useful for web publishing and document workflows that benefit from editable vector graphics. You can embed the generated files directly in web pages, edit them with standard SVG tools, or convert them to other formats when needed.

This is a significant step that opens up several new capabilities:

- If you do not need PDF output, you can use the library without an external renderer. If you do need PDF output but do not have a LaTeX engine installed, you can convert the SVG file to PDF using external applications such as [PDF24 Tools](https://tools.pdf24.org/en/convert-to-pdf).
- SVG is generated without external dependencies. This gives us full control over the generated output.
- The XeLaTeX renderer has limitations on output size. When handling tens of thousands of points, it sometimes produced memory-related errors. Although there are ways to increase the available memory, dealing with that is inconvenient. The SVG renderer does not have this limitation.
- If you need unusual SVG features, you can edit the output file directly. The generated SVG code is human-readable.
- Since SVG has an [official spec](https://www.w3.org/TR/SVG2/), creating test cases and performing comprehensive verification is much easier than with the TikZ library and its external plugins.

SVG output is also a good fit for lightweight, browser-based publishing workflows and for cases where you need to inspect or adjust the generated vector data directly.

At this stage, we are still validating the renderer against a wider range of examples, especially larger outputs and edge cases. Once that testing is complete, the SVG renderer will be included in the next release.

!!! note

    Please remember that simetri.graphics API can have significant modifications since we are still in alpha stage.
