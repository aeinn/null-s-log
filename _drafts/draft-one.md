---
layout: post
excerpt_separator: <!--more-->
---

Excerpt with multiple paragraphs

Here's another paragraph in the excerpt.

<!-- {% for staff_member in site.staff_members %}
  <h2>
    <a href="{{ staff_member.url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %} -->

<ul>
    {% for staff_member in site.staff_members %}
    <li>{{ staff_member.name }} - {{ staff_member.position }}</li>
    {% endfor %}
</ul>


<!--more-->
Out-of-excerpt