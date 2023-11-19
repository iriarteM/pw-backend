import { usuario } from "./usuario.models.js";
import { servicio } from "./servicio.models.js";
import { reserva } from "./reserva.models.js";
import { compra } from "./compra.models.js";

usuario.hasMany(reserva, {
    foreignKey: 'id_turista',
    sourceKey: 'id'
});
reserva.belongsTo(usuario, {
    foreignKey: 'id_turista',
    tarjetId: 'id'
});

servicio.hasMany(reserva, {
    foreignKey: 'id_servicio',
    sourceKey: 'id'
});
reserva.belongsTo(servicio, {
    foreignKey: 'id_servicio',
    tarjetId: 'id'
});

usuario.hasMany(servicio, {
    foreignKey: 'id_guia',
    sourceKey: 'id'
});
servicio.belongsTo(usuario, {
    foreignKey: 'id_guia',
    tarjetId: 'id'
});

usuario.hasMany(compra, {
    foreignKey: 'id_turista',
    sourceKey: 'id'
});
compra.belongsTo(usuario, {
    foreignKey: 'id_turista',
    tarjetId: 'id'
});