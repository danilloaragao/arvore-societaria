
class StringUtils{
    constructor(){
        
    }
    removeCaracteresEspeciais = (texto: string) => {
        return texto.replace('.','')
                    .replace('/','')
                    .replace(',','')
                    .replace('-','')
                    .replace('.','')
    }
    
}

export default StringUtils