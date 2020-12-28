AFRAME.registerComponent('foo', {
            schema: {type: 'int', default: 5},
            init: function () {
            alert("Welcome in_it")},
            update: function () {
            alert("Hello World from Update")},
        });
