function tratarErro (erro){
    //throw new Error('Requisição inválida')
    //throw 10
    //throw 'Erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function nomeCaps(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Final.')
    }
}

const objeto = { nome: 'Amanda'}
nomeCaps(objeto)