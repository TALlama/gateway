<template>
  <aside class='character' :class='{hidden: !focused}'>
    <header>
      {{character.name}}
      <small>{{character.desc}}</small>
    </header>
    <img v-bind:src="character.portraitUrl" />
    <dl id='values' class='traits statement-traits' data-title='Values'>
      <template v-for='(val, name) in character.values'>
        <dt>{{name}}</dt>
        <dd class='rating'>{{val.rating}}</dd>
        <dd class='statement'>{{val.statement}}</dd>
      </template>
    </dl>
    <dl id='relationships' class='traits statement-traits' data-title='Relationships'>
      <template v-for='(rel, name) in character.relationships'>
        <dt>{{name}}</dt>
        <dd class='rating'>{{rel.rating}}</dd>
        <dd class='statement'>{{rel.statement}}</dd>
      </template>
    </dl>
    <dl id='distinctions' class='traits' data-title='Distinctions'>
      <template v-for='(trait, name) in character.distinctions'>
        <dt>{{name}}</dt>
        <dd class='rating'>8</dd>
        <dd class='sfx'>Gain a PP if you use this as a d4</dd>
        <dd class='sfx' v-for='sfx in trait.sfx'>{{sfx}}</dd>
      </template>
    </dl>
    <dl id='resources' class='traits' data-title='Resources'>
      <template v-for='(trait, name) in character.resources'>
        <dt>{{name}}</dt>
        <dd class='rating'>{{trait.rating}}</dd>
        <dd class='sfx' v-for='sfx in trait.sfx'>{{sfx}}</dd>
      </template>
    </dl>
    <section id='powersets'>
      <dl class='traits' v-for='(set, name) in character.powersets' v-bind:data-title='name'>
        <dt class='set'>Set</dt>
        <dd class='set limit' v-for='limit in set.limits'>{{limit}}</dd>
        <dd class='set sfx' v-for='sfx in set.sfx'>{{sfx}}</dd>
        <template v-for='(power, pname) in set.powers'>
          <dt>{{pname}}</dt>
          <dd class='rating'>{{power.rating}}</dd>
          <dd class='limit' v-for='limit in power.limits'>{{limit}}</dd>
          <dd class='sfx' v-for='sfx in power.sfx'>{{sfx}}</dd>
        </template>
      </dl>
    </section>
    <section id='xp'>
      <dl class='xp' v-bind:data-title='name' v-for='(goals, name) in character.milestones'>
        <template v-for='(goal, xp) in goals'>
          <dt>{{xp}}</dt>
          <dd>{{goal}}</dd>
        </template>
      </dl>
      <dl class='xp' v-bind:data-title='name' v-for='(goals, name) in shared.milestones'>
        <template v-for='(goal, xp) in goals'>
          <dt>{{xp}}</dt>
          <dd>{{goal}}</dd>
        </template>
      </dl>
    </section>
  </aside>
</template>

<script>
  export default {
    props: ['character', 'focused'],
    data() {
      return {
        focused: false,
        shared: {
          milestones: {
            'Common milestones': {
              1: 'Challenge a statement',
              2: 'Overcome a complication',
            },
          }
        }
      }
    }
  }
</script>
