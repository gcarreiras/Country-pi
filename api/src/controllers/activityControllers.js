const axios = require('axios');
const {Activity} = require ('../db.js');

const getActivity = (req, res) => {
    
    const {name, difficulty, duration, season} = req.body;

    try{

    }catch(err){
        return res.status(404).send.json({error: err});
    }

}


function checkBody (name, difficulty, duration, season){
    if (!name || !difficulty || !duration || !season) return ('all data is required')
    if (name.length > 50) return ('name must be at least 50 characters long')
    if (difficulty !== '1' || '2' || '3' || '4' || '5') return ('difficulty must be between 1 --- 5')
    if (season !== 'summer' || 'winter' || 'fall' || 'spring') return ('enter a valid season')
    return ('ok')
    
}




module.exports ={getActivity}

// __POST /activities__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
//   - Crea una actividad turística en la base de datos, relacionada con los países correspondientes