function toggle_modifier(element_class:string, modifier:string){
    let element: HTMLElement = <HTMLElement>document.getElementsByClassName(element_class)[0];
    let modifier_class:string = element_class+"_"+modifier;
    if (modifier_class in element.classList){
        element.classList.remove(modifier_class);
    }else{
        element.classList.add(modifier_class);
    }
}
function calculate_value(inp:HTMLInputElement, data: String, 
    operation: (a:number, b:number) => number, 
    operation_name: string){
    let operands: string[] = data.split(operation_name);
        inp.value = operation(parseFloat(operands[0]),parseFloat(operands[1])).toString();
}
function calculate(){
    let inp:HTMLInputElement = <HTMLInputElement>document.getElementsByClassName('interractive-components__query')[0];
    let data: String = inp.value;
    data = data.replace(' ', '');
    if (data.indexOf('+')!=-1){
        calculate_value(inp,data,
            (a:number, b:number) => {return a+b}, "+");
    }else if (data.indexOf('-')!=-1){
        calculate_value(inp,data,
            (a:number, b:number) => {return a-b}, "-");
    }else if (data.indexOf('*')!=-1){
        calculate_value(inp,data,
            (a:number, b:number) => {return a*b}, "*");
    }else if (data.indexOf('/')!=-1){
        let operands:string[] = data.split('/');
        if (operands[1] == '0'){
            inp.value = "Can't divide by 0!";
        }else{
            calculate_value(inp,data,
                (a:number, b:number) => {return a/b}, "/");
        }
    }else if (data.indexOf('^')!=-1){
        calculate_value(inp,data,
            (a:number, b:number) => {return a**b}, "^");
    }
}