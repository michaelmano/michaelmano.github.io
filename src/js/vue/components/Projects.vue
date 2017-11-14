<template>
    <section class="Box Box--centered">
        <h2>Project Portfolio</h2>
        <div class="Filter">
            <span ref="tags" @click.prevent="filter(tag, $event)" :class="['Filter__tag', index === 0 ? 'is-active' : '']" v-for="(tag, index) in tags" v-text="tag"></span>
        </div>
        <div class="Project">
            <article class="Project__panel" v-for="project in projects" v-show="project.active">
                {{ project.active }}
                {{ project.title }}
                {{ project.body }}
                {{ project.link }}
                <img :src="project.thumbnail">
            </article>
        </div>
    </section>
</template>

<script>
    import projects from '../../config/projects.json';

    export default {
        data() {
            return {
                projects,
            }
        },
        computed: {
            tags: function() {
                let tags = ['All'];
                projects.forEach(project => {
                    project.active = true;
                    tags = [...tags, ...project.tags];
                })
                return [...new Set(tags)];
            }
        },
        methods: {
            filter(tag, event) {
                this.$refs['tags'].forEach(element => {
                    element.classList.remove('is-active');
                });
                event.target.classList.add('is-active');

                this.projects.forEach(project => {
                    if (tag === 'All') {
                        project.active = true;
                    } else {
                        project.active = project.tags.includes(tag);
                    }
                });
                this.$forceUpdate();
            }
        }
    }
</script>