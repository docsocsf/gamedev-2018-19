import BaseEntity from "../entities/BaseEntity.js";
import Components from "../components/Components.js";
import MatterSpriteEntity from "../entities/MatterSpriteEntity";

var Assemblages = {};

Assemblages = {
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
        entity.addComponent(new Components.MovementData(2));
        entity.addComponent(new Components.PositionData(x, y, entity));
        entity.addComponent(new Components.RenderData(texture, entity));
        entity.addComponent(new Components.MovementLogic(entity));
        return entity;
    }
};

export default Assemblages;
