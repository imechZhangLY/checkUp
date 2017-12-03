import deepClone from './deepclone'
export default function checkUp(parameter,config) {
    if(parameter === undefined) {
        throw new Error('There is no parameter for function' + config.name + '!');
    }
    for(let p in config.unconfigrable) {
        if(parameter[p] === undefined) {
            throw new Error('The parameter in function '
                             + config.name + 
                             ' doesn\'t have the property '
                             + p + '!');
        }
    }
    for(let p in config.configrable) {
        if(parameter[p]===undefined) {
            parameter[p] = deepClone(config.configrable[p]);
        }
    }
}