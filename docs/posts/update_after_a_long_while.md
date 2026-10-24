---
date: 2026-01-23
categories:
    - News
tags:
    - Papers
---

What’s New

A lot has been happening behind the scenes. 2025 turned out to be an extremely busy year, and although the website hasn’t seen many updates, the work itself never stopped. Most of the projects were not yet public, which made it difficult to share progress in real time. That is finally changing.

The biggest news is that simetri.graphics is approaching its first beta release. The core features are in place, and the new codebase is already available on GitHub. Before publishing the beta, I still need to finish the testing framework, but the library is now stable enough for early exploration.



simetri.interactive

A major development this year is the creation of a new GUI‑based application: simetri.interactive. This is by far the most significant addition to the ecosystem. It’s not ready for an official release yet, but the plan is to make it available on GitHub first, followed by a pip install simetri.interactive release once it reaches a more polished state.

This app is a large project with many interesting features, and its primary purpose is to accelerate progress on the long‑term book project. Yes—there is a new book in the works. It’s a substantial undertaking and will likely take years to complete, but simetri.interactive is already proving invaluable for prototyping ideas and generating examples. A dedicated blog post about the book will be coming soon.



simetri.publisher

Another tool under development is simetri.publisher, a custom page‑layout engine built specifically for the book project. It combines TikZ with simetri.graphics to generate highly structured, reproducible pages. simetri.interactive already includes hooks for this module.

To be completely honest, the chances of this tool being broadly useful to anyone else are extremely small—it is highly specialized and tailored to the needs of the book. But it has been an essential part of the workflow, so it deserves a mention here.



Circle Packing Experiments

I’ve also been exploring circle packing, which continues to be a fascinating area of experimentation. Some of the modules from Kenneth Stephenson’s CirclePack software have been translated into Python as part of this work. However, the code is still very experimental and nowhere near ready for release. For now, it remains a research sandbox—but an exciting one.