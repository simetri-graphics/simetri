from textwrap import dedent
import urllib.parse
import re

x_intent = "https://x.com/intent/tweet"
fb_sharer = "https://www.facebook.com/sharer/sharer.php"
include = re.compile(r"blog/[1-9].*")

def on_page_markdown(markdown, **kwargs):
    page = kwargs['page']
    config = kwargs['config']
    # if not include.match(page.url):
    if page.meta.get('template') != "blog-post.html":
        return markdown

    page_url = config.site_url+page.url
    page_title = urllib.parse.quote(page.title+'\n')

    return markdown + dedent(f"""
    <div style="text-align: center;" markdown="1">
     <h2 style="font-weight: bold; text-decoration: underline;">Share on Socials</h2>
    [Share on :simple-x:]({x_intent}?text={page_title}&url={page_url}){{ .md-button }}
    </div>
    """)
# [Share on :simple-facebook:]({fb_sharer}?u={page_url}){{ .md-button }}
# from textwrap import dedent
# import urllib.parse
# import re

# x_intent = "https://x.com/intent/tweet"
# fb_sharer = "https://www.facebook.com/sharer/sharer.php"
# include = re.compile(r"blog/[1-9].*")

# def on_page_markdown(markdown, **kwargs):
#     page = kwargs['page']
#     config = kwargs['config']
#     # if not include.match(page.url):
#     if page.meta.get('template') != "blog-post.html":
#         return markdown
#     page_url = config.site_url + page.url
#     page_title = urllib.parse.quote(page.title + '\n')
#     # return markdown + dedent(f"""
#     #     [Share on :simple-x:]({x_intent}? text={page_title}&url={page_url}){{{ .md-button }}}
#     #     [Share on :simple-facebook:]({fb_sharer}? u={page_url}){{{ .md-button }}}
#     #     """)
#     return markdown + dedent(f"""
#     <div style="text-align: center;" markdown="1">
#     <h2 style="font_weight: bold; text-decoration: underline;">Share on Socials</h2>
#     [Share on :simple-x:]({x_intent}? text={page_title}&url={page_url}){{{ .md-button }}}
#     [Share on :simple-facebook:]({fb_sharer}? u={page_url}){{{ .md-button }}}
#     </div>
#     """)