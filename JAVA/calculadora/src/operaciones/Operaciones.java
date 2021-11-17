
package operaciones;


public class Operaciones {
    public float num, num2; /* creamos dos variables tipo float */
    public String op; /* variable string para el tipo de operacion */
    public Operaciones(float num, float num2, String op){ /* constructor */
        this.num=num; /* inicializamos los atributos-variables */
        this.num2=num2;
        this.op=op;
        
    }
    public float operacion(){ /* creamos una funcion (metodo cuando no tiene return) */
        if(op.equals("+")){
            return num + num2;
        }else if(op.equals("-")){
            return num - num2;
        }else if(op.equals("*")){
            return num * num2;
        }else if(op.equals("/")){
            return num / num2;
        }else{return 0;}
            
        
}

}