const axios = require('axios');
const {Country} = require ('../db.js');
const {Op} = require('Sequelize')
    

const getCountry = async (req , res) =>{
    // primero hago un findall...para ver si tengo algo en mi base de datos... si tengo me lo traigo derecho..
    //sino entro al try.... lo pido a la api, hago un map para guardar los datos que me sirven......
    //eso  lo guardo en la base de datos despues y lo devuelvo derecho en la variable que cree.-(asi no llamo al findall sin necesidad)
    const database = await Country.findAll()
    
    if (database.length > 0){
        
        return res.status(200).json(database)

    }else{

    try{
        
        const apires = await axios.get('https://restcountries.com/v3/all')
        const todo = apires.data.map(e => {
           
            return{
                id: e.cca3,
                name : e.name.common,
                image : e.flags[1],
                continents : e.continents[0],
                capital: e.capital ? e.capital[0] : "sin capital" ,
                subregion : e.subregion,
                area: e.area,
                population: e.population

            }

        } )
            
            todo.forEach(t => {

                Country.create({
                    id : t.id,
                    name : t.name,
                    image: t.image,
                    continent: t.continents,
                    capital: t.capital,
                    subregion: t.subregion,
                    area : t.area,
                    population: t.population
                })
            })
        
            return res.status(200).json(todo)
        
        }catch(error){
           return res.status(400).json(error)
        }  
    }};
    
    const getCountryById = async (req,res) =>{
        
        let {id} = req.params;
        id = id.toUpperCase();
        try{
            const find = await Country.findByPk(id)
            if(find) return res.status(200).json(find)
            else return res.status(404).json("NO ENCONTRADO")
        }catch(error){
            return res.status(400).json(error)
        }
    }

    const getCountryByName = async (req,res) =>{
        console.log('GET COUNTRY BY NAME')
        const toFind = req.query.name;
        console.log(toFind)
          
          try{


          }catch(error){

            return res.status(400).json(error)

          } 
    }
    
    




module.exports ={
    getCountry,
    getCountryById, 
    getCountryByName
}