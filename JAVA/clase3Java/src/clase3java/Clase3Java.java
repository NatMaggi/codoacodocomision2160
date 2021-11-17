
package clase3java;

import personal.Departamento;
import personal.Personal;
import recursosHumanos.Finanzas;

public class Clase3Java {

 
    public static void main(String[] args) {
      Personal administrativo = new Personal("Natalia", "Maggi", "Alem 2738",30);
      administrativo.setSueldo(35000);
      System.out.println("Nombre: "+ administrativo.nombre);
      System.out.println(administrativo.getSueldo());
      Personal it= new Personal("Elias", "Maestri", "Calle 147", 26);
      it.setSueldo(250000);
      System.out.println("Nombre: "+ it.nombre);
      System.out.println(it.getSueldo());
      Departamento legales = new Departamento("Lucrecia", "Casas","Calle 32",25,"Legales");
      legales.setSueldo(250000);
      System.out.println(legales.mostrarDatos());
      Finanzas juana = new Finanzas("Juana", "Diaz", "Calle 250", 26, "Desarrollo", "gerente");
      System.out.println("Le abonamos el sueldo a: "+ juana.nombre + " por la cantidad de: "+ juana.AbonarSueldo() + " pesos");
      
    }
    
}
