
package personal;

public class Departamento extends Personal { /* extends para heredar, heredamos Departamento DE personal */

    public Departamento(String nombre, String apellido, String domicilio, int edad, String depto) {
        super(nombre, apellido, domicilio, edad);
    }
    public String mostrarDatos(){
        return "\n Nombre:" + nombre + "\n Apellido: "+ apellido + "\n Domicilio: "+ 
                domicilio + "\n Edad: "+ edad + "\n Sueldo: " + getSueldo();
        
                
    
    }
    
    
    
}
