
class Entity extends Phaser.GameObjects.GameObject {
    constructor(scene, type, name, count) {
        super(scene, type);
        this.setName(name);

        //Generate an ID for the entity
        this.id = (Math.random() * 100000000 | 0).toString(16) + count;
        this.name = name;
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
            type: this.type
        };
        output.components = this.components;
        console.log(JSON.stringify(output, null, 4));
        return this;
    };


}

export default Entity;

//Reference:
// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Stringify: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
