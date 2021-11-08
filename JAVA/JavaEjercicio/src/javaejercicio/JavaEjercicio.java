package javaEjercicio;

import java.util.Scanner;

public class JavaEjercicio {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre ");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido ");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad ");
        int edad = Integer.parseInt(entrada.nextLine());
        System.out.println("Ingrese su hobbie ");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de texto preferido ");
        String editor = entrada.nextLine();
        System.out.println("Ingrese su Sistema Operativo ");
        String so = entrada.nextLine();
        
        System.out.println("Su nombre es: "+ nombre);
        System.out.println("Su apellido es: " + apellido);
        System.out.println("Su edad es: " + edad);
        System.out.println("Su hobbie es: " + hobbie);
        System.out.println("Su editor de texto preferido es:" + editor);
        System.out.println("Su Sistema Operativo es: " + so);
  
}
}

