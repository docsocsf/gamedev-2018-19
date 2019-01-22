import BaseEntity from "../entities/BaseEntity.js";
import Components from "../components/Components.js";

var Assemblages = {};

Assemblages = {
    HealthAssemblage: function HealthAssemblage(scene, type, name, count) {
        var entity = new BaseEntity(scene, type, name, count);
        entity.addComponent(new Components.HealthData(100));
        entity.addComponent(new Components.HealthLogic(entity));
        return entity;
    }
};

export default Assemblages;
