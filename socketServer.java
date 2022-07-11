import java.util.*;
import java.util.Scanner;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.io.Serializable;
import java.time.temporal.Temporal;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class socketServer {

	
	public static void main(String[] args) {
		//Get socket # to listen with socketNum()
		//Implement Socket Listener with specified socket #?
		try {
		ServerSocket ss = new ServerSocket(25);
		Socket n = ss.accept();
		PrintWriter out = new PrintWriter(n.getOutputStream(), true);
		BufferedReader in = new BufferedReader(new InputStreamReader(n.getInputStream()));
		BufferedReader streamIn = new BufferedReader(new InputStreamReader(System.in));
		while(streamIn.readLine() != null) {
			out.println();
			System.out.println("echo: " + in.readLine());
		}}catch(IOException exc) {
			exc.printStackTrace();
		}
		
			
		}
}