import java.lang.Math;

public class moduloProgram {

    public static void main(String[] args){
        double num = Math.pow(104729, 17);
        double temp = num % 103193;

        System.out.println(temp);
    }
}