var ECS = {};

ECS.Entity = function Entity() {

    //Generate an ID for the entty
    this.id = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) + ECS.Entity,prototype.count;

    ECS.Entity.prototype.count++;

    this.components = {};

    return this;
};


ECS.Entity.prototype.count = 0;

ECS.Entity.prototype.addComponent = function addComponent(component) {

    this.components[component.name] = component;
    return this;
};

ECS.Entity.prototype.removeComponent = function removeComponent(componentName) {

    var name = componentName;

    if(typeof componentName === 'function'){
        name = componentName.prototype.name;
    }

    delete this.components[name];

    return this;
};

ECS.Entity.prototype = function print() {
    console.log(JSON.stringify(this, null, 4));
    return this;
};

//Create Entity:
// var entity = new ECS.Entity();
// Add Component
// entity.addComponent(new ECS.Components.Health());

//Example Component health
ECS.Components.Health = function ComponentHealth(value) {
    value = value || 20;
    this.value = value;
    return this;
};

ECS.Components.Health.prototype.name = 'health';


//Assume entities exists in entityId: entityObject pairs
ECS.systems.general = function systemGeneral(entities) {


    var curEntity;
    for(var entityId in entities){
        curEntity = entities[entityId];
        //Apply logic here
        //Access Component via curEntity.components.COMPONENT_NAME
    }

};

ECS.Assemblages = {

    HealthAssemblage: function HealthAssemblage() {
        var entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Health());
        return entity;
    }

};


var self = this;

var entites = {};
var entity;

entity = new ECS.Entity();
entity.addComponent(new ECS.Components.Health());
entites[entity.id] = entity;

//Reference:
// ECS Tutorial: http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// Assemblages: https://github.com/erikhazzard/RectangleEater/blob/master/scripts/Assemblages.js
