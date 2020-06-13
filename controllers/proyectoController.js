const Proyecto = require('../models/Proyecto');


exports.crearProyecto = async (req, res) => {
    try {
        // Crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);
        proyecto.save();
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ha habido un error');
    }
}