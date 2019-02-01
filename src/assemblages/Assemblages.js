import BaseEntity from "../entities/BaseEntity.js";
import Components from "../components/Components.js";
import MatterSpriteEntity from "../entities/MatterSpriteEntity";
import Region from "../entities/Region";

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
        entity.addComponent(new Components.Depth(1, entity));
        entity.addComponent(new Components.Collisions(1, entity));
        entity.addComponent(new Components.CollisionsWith(2, entity));
        return entity;
    },
    RegionAssemblage: function RegionAssemblage(scene, x, y, texture, frame, option, name, count) {
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

        // We require a Dimensions component to say how large this will be e.g. 800 x 600 (width, height)


        // TODO: Add collision event to trigger print on console when texture collides with a player.
        // Look at examples for collisions to do capture state component. Add collision groups?

        entity.addComponent(new Components.Dimensions(entity));
        entity.addComponent(new Components.Depth(0, entity));
        // Position data represents origin.
        entity.addComponent(new Components.PositionData(x, y, entity));
        // Capture state: Logic for whether in a given state? Some boolean flag?

        // Will tell entity to map a region texture to it. Will the texture be of required size or a fixed size
        // we will loop?
        entity.addComponent(new Components.RenderData(texture, entity));
        entity.addComponent(new Components.Collisions(2, entity));
        entity.addComponent(new Components.CollisionsWith(1, entity));
        // entity.addComponent(new Components.MovementLogic(entity));
        return entity;
    }
};

export default Assemblages;
