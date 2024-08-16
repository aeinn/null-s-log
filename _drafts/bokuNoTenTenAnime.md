---
layout : custom
title  : Boku no 10/10 Anime
---

<ul>
    {% for anime in site.animes %}
        {% if anime.rating >= 10 %}
            <li>{{ anime.title }}</li>
        {% endif %}
    {% endfor %}
</ul>