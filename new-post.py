import datetime, sys, os

if getattr(sys, 'frozen', False):
    absPath = os.path.dirname(os.path.abspath(sys.executable))
elif __file__:
    absPath = os.path.dirname(os.path.abspath(__file__))


def newPost():
    postname = input('postname: ')
    title = input('title: ')
    excerpt = input('excerpt: ')
    small = input('small(y/n): ')
    date = datetime.datetime.now()
    stime = f"{date.year}-{date.month}-{date.day}"
    out_path = absPath + '/_posts/' + stime + '-' + postname

    bBig = small != 'n'

    ssmall = f"small: true\n" if bBig else ''

    sblog = f"""
<div class='blog-title'>{title}</div>

<div class='blog-head'>{excerpt}</div>
---
""" if not bBig else ''

    print(date)
    val = f"""---
title: {title}
time: {stime}
layout: post
{ssmall}excerpt: {excerpt}
---{sblog}
"""

    f = open(f'{out_path}.md', 'w')
    f.write(val)
    f.close()


if __name__ == '__main__':
    try:
        newPost()
        print('success~')
    except Exception as e:
        print(e)
