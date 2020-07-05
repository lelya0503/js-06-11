Vue.component('another-component', {
    template: '<div>hey</div>',
});
Vue.component('other-component', {
    template: '<div><slot /></div>',
});

Vue.component('my-component', {
    template: `<div>
        <h1>My component</h1>
        <another-component />
        <other-component>Some title</other-component>
        <other-component>Another title</other-component>
        <other-component>Other title</other-component>
    </div>`,
});

Vue.component('data-component', {
    template: `<div>
        <h1>Component with data:</h1>
        {{ name }} ({{ fullname }})
    </div>`,
    props: ['name'],
    data() {
        return {
            fullname: 'GeekBrains',
        };
    },
});

const app = new Vue({
    el: '#app',
});
