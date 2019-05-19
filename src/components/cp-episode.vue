<template>
  <article class='episode' :id='episode.id'>
    <header>
      {{episode.title}}
      <a class='metadata production-number' :href='"#" + episode.id'>Season {{episode.season}}, Episode {{episode.episode}}</a>
      <dl class='metadata'>
        <dt>Airdate</dt><dd>{{episode.airdate}}</dd>
      </dl>
    </header>
    <section class='summary' v-if='episode.summary'>
      {{episode.summary}}
    </section>
    <section class='audio' v-if='episode.podcastUrl'>
      <span class='icon fas fa-podcast'></span>
      <span class='desc'>This episode is available as an <a :href='episode.podcastUrl'>audio recording</a>.</span>
    </section>
    <article class='body' v-if='episode.body || episode.highlights'>
      <aside class='highlights' v-if='episode.highlights'>
        <header>Highlights</header>
        <ul>
          <li v-for='h in episode.highlights'>{{h}}</li>
        </ul>
      </aside>
      {{episode.body}}
    </article>
  </article>
</template>

<script>
  export default {
    props: ['episode', 'focused'],
    data() {
      return {
        focused: false,
      }
    }
  }
</script>
