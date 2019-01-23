const Entity = (PhaserClass) => class extends PhaserClass {
    constructor(setup) {
        super(setup);
        //Generate an ID for the entity
        this.id = (Math.random() * 100000000 | 0).toString(16) + setup.count;
        this.name = setup.name;
        //List of components that Entity contains
        this.components = {};
    }

    addComponent(component) {
        this.components[component.name] = component;
        return this;
    };

    removeComponent(componentName) {

        var name = componentName;

        if(typeof componentName === 'function'){
            name = componentName.prototype.name;
        }

        delete this.components[name];

        return this;
    };

    printEntity() {
        var output = {
            id: this.id,
            name: this.name,
        };
        output.components = this.components;
        console.log(JSON.stringify(output, null, 4));
        return this;
    };
};


export default Entity;

//Reference:
// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Stringify: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// Mixins: http://exploringjs.com/es6/ch_classes.html#sec_simple-mixins
//
// ECS EXAMPLES:
// https://github.com/erikhazzard/RectangleEater/blob/master/scripts/game.js
// https://github.com/yagl/ecs/blob/master/src/entity.js
// https://gist.github.com/ooflorent/8314853
// https://github.com/Niondir/LifeInLife/blob/master/Frontend/Entities.ts
// https://gist.github.com/mflux/c32e2066948d5c8b591b
// https://github.com/ericlathrop/entity-component-system/blob/master/lib/entity-component-system.js
