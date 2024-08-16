---
title: Boku no watched list
layout: default
---
<ul>
    {% for anime in site.animes %}
        <li>{{ anime.title }}</li>
    {% endfor %}
</ul>