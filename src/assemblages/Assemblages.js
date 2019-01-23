import BaseEntity from "../entities/BaseEntity.js";
import Components from "../components/Components.js";
import MatterSpriteEntity from "../entities/MatterSpriteEntity";

var Assemblages = {};

Assemblages = {
    HealthAssemblage: function HealthAssemblage(scene, type, name, count) {
        var setup = {
            scene: scene,
            type: type,
            name: name,
            count: count
        };
        var entity = new BaseEntity(setup);
        entity.addComponent(new Components.HealthData(100));
        entity.addComponent(new Components.HealthLogic(entity));
        return entity;
    },
    PlayerAssemblage: function PlayerAssemblage(scene, x, y, texture, frame, option, name, count) {
        var setup = {
            scene: scene,
            x: x,
            y: y,
            texture: texture,
            frame: frame,
            option: option,
            name: name,
            count: count
        };
        var entity = new MatterSpriteEntity(setup);
        entity.addComponent(new Components.MovementData(5));
        entity.addComponent(new Components.MovementLogic(entity));
        return entity;
    }
};

export default Assemblages;
