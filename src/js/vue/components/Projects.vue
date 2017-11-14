<template>
    <section class="Box Box--centered">
        <h2>Project Portfolio</h2>
        <div class="Filter">
            <span ref="tags" @click.prevent="filter(tag, $event)" :class="['Filter__tag', index === 0 ? 'is-active' : '']" v-for="(tag, index) in tags" v-text="tag"></span>
        </div>
        <div class="Project">
            <transition-group enter-active-class="Animation Animation--bounce">
                <article :key="index" class="Project__panel" v-for="(project, index) in projects" v-show="project.active">
                    {{ project.active }}
                    {{ project.title }}
                    {{ project.body }}
                    {{ project.link }}
                    <img :src="project.thumbnail">
                </article>
            </transition-group>
        </div>
    </section>
</template>

<script>
    import projects from '../../config/projects.json';

    export default {
        data() {
            return {
                projects: [],
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
        mounted() {
            this.projects = projects
        },
        watch: {
            projects: {
                handler: function(value) {
                },
                deep: true
            }
        },
        methods: {
            filter(tag, event) {
                this.$refs['tags'].forEach(element => {
                    element.classList.remove('is-active');
                });
                event.target.classList.add('is-active');

                projects.forEach(project => {
                    if (tag === 'All') {
                        project.active = true;
                    } else {
                        project.active = project.tags.includes(tag);
                    }
                });
            }
        }
    }
</script>