
    
const getCountry = async (req , res) =>{
    try{

        return res.status(200).json('hola')
    
    } catch(error){
        return res.status(400).json(error)
    }
    
    
}



module.exports ={getCountry}