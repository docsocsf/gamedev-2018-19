import Entity from "../entities/Entity.js";
import Components from "../components/Components.js";

var Assemblages = {};

Assemblages = {
    HealthAssemblage: function HealthAssemblage(scene, type, name, count) {
        var entity = new Entity(scene, type, name, count);
        entity.addComponent(new Components.HealthData(100));
        entity.addComponent(new Components.HealthLogic(entity));
        return entity;
    }
};

export default Assemblages;
