var app_1 = new Vue({
    el: '#app-1',
    data: {
        msg:"hello vue"
    }
});
var app_2 = new Vue({
el: '#app-2',
data: {
    message: '页面加载于 ' + new Date().toLocaleString()
    }
});
var app_3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app_4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text:'学习 JavaScript'},
            { text:'学习 Vue'},
            { text:'整个项目证明自己'},
        ]
    }
});
var app_5 = new Vue({
    el: '#app-5',
    data: {
        message: "hello vue!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
});
var app_6 = new Vue({
    el: '#app-6',
    data: {
        message: "hello world"
    },
});